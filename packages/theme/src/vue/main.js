// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import Analytics from 'vue-analytics'
import Clipboard from 'clipboard'
import App from './components/App'
import router from './router'
import store from './store'
import './filters'
import './global-components'

const { analyticsId } = window.UIengine.state.config
const isProd = process.env.NODE_ENV === 'production'

Vue.config.productionTip = false
Vue.use(Meta)

if (analyticsId) {
  Vue.use(Analytics, {
    id: analyticsId,
    router,
    autoTracking: {
      exception: true,
      exceptionLogs: false
    },
    debug: {
      sendHitTask: isProd
    }
  })
}

const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

new Clipboard('[data-clipboard-text]')
  .on('error', event => {
    console.error('Clipboard error:', event)
  })

// apply state changes via socket connection in development
if (document.getElementById('__bs_script__')) {
  // as the browser-sync client scripts gets loaded asynchronously,
  // we may need to retrigger this function a few times
  let retries = 0
  const setupSocket = () => {
    const { socket } = window.___browserSync___ || {}
    if (socket) {
      // state changes
      socket.on('uiengine:state:update', uiengineState => {
        store.commit('state/setState', uiengineState)
      })
      // iframe reloads
      socket.on('uiengine:file:change', filePath => {
        vm.$emit('file:change', `/${filePath}`)
      })
      // report
      console.debug('Connection to browser-sync socket established.')
    } else if (retries <= 10) {
      setTimeout(setupSocket, 100)
      retries++
    } else {
      console.warn('Could not connect to browser-sync socket.')
    }
  }
  setupSocket()
}