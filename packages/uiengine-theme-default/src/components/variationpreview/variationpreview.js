import { iframeResizer } from 'iframe-resizer'
import { debounce, on } from '../../scripts/lib/util'

// split this up to make the revving work
const previewScriptPath = 'scripts/uiengine-preview.js'
const previewScriptSrc = `../../_uiengine-theme/${previewScriptPath}`

// get breakpoints if they are configures
const breakpoints = window.UIengine.breakpoints || {}
const breakpointNames = Object.keys(breakpoints)
const breakpointWidths = Object.values ? Object.values(breakpoints) : Object.keys(breakpoints).map(k => breakpoints[k])

if (breakpoints) {
  const toggleBreakpoints = (breakpoints) =>
    breakpoints.classList.toggle('variationpreview__breakpoints--active')

  on('click', '.variationpreview__sizer', e => {
    const breakpointsSelector = e.target.getAttribute('data-breakpoints-target')
    const breakpoints = document.getElementById(breakpointsSelector)

    toggleBreakpoints(breakpoints)
  })

  on('click', '.variationpreview__breakpoints-inner', e => {
    toggleBreakpoints(e.target.parentNode)
  })

  on('click', '.variationpreview__breakpoint', e => {
    const breakpoint = e.target
    const breakpointsSelector = e.target.getAttribute('data-breakpoints-target')
    const breakpoints = document.getElementById(breakpointsSelector)
    const containerSelector = e.target.getAttribute('data-container-target')
    const container = document.getElementById(containerSelector)
    const variationId = container.getAttribute('data-variation-id')
    const width = breakpoint.getAttribute('data-width')
    const bpId = breakpoint.getAttribute('data-breakpoint')

    if (bpId) {
      // animate resizes
      const resizedHandler = e => {
        container.style.width = `${width}px`
        container.removeAttribute('data-breakpoint')
        container.removeEventListener('transitionend', resizedHandler)
      }
      container.addEventListener('transitionend', resizedHandler)
      container.setAttribute('data-breakpoint', bpId)
      container.style.width = null
      window.sessionStorage.setItem(`variation:width:${variationId}`, width)
    } else {
      // reset
      container.removeAttribute('data-breakpoint')
      container.style.width = null
      window.sessionStorage.removeItem(`variation:width:${variationId}`)
    }

    toggleBreakpoints(breakpoints)
  })
}

// iframe resizing, see https://github.com/davidjbradshaw/iframe-resizer
const iframeResizerOpts = { resizeFrom: 'child' }

const sizerTextForWidth = innerWidth => {
  let text = `${innerWidth}px`

  if (breakpoints) {
    const bps = breakpointWidths.filter(width => width <= innerWidth)
    const name = bps.length ? breakpointNames[bps.length - 1] : `< ${breakpointNames[0]}`
    text = `${name} @ ${text}`
  }

  return text
}

document.querySelectorAll('.variationpreview__iframe').forEach(iframe => {
  const container = iframe.parentNode
  const sizer = container.firstElementChild.firstElementChild

  iframe.onload = e => {
    const { contentDocument, contentWindow } = iframe
    const head = contentDocument.getElementsByTagName('head')[0]
    const previewScript = document.createElement('script')
    previewScript.src = previewScriptSrc

    head.appendChild(previewScript)

    iframeResizer(iframeResizerOpts, iframe)

    contentWindow.onresize = e => {
      debounce(`${iframe.id}-resize`, () => {
        const width = e.target.innerWidth
        sizer.textContent = sizerTextForWidth(width)
      }, 10)
    }
  }
})
