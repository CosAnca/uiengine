(window.webpackJsonp=window.webpackJsonp||[]).push([[12],[,,,,function(t,e,n){const r=n(49),i=/^<h1.*?>(.*?)<\/h1>/;t.exports={crossPlatformPath:t=>t.replace(/\\/g,"/"),dasherize:t=>String(t).replace(/\W+/gi,"-"),titleize:t=>t.split(/\W+/gi).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "),upcaseFirstChar:t=>t.charAt(0).toUpperCase()+t.slice(1),lowercaseFirstChar:t=>t.charAt(0).toLowerCase()+t.slice(1),hasContent:t=>!!t&&t.replace(i,"").trim().length>0,replaceTemplateComments:(t,e)=>Object.keys(e).reduce((t,n)=>{const r=new RegExp(`\x3c!--\\s?uiengine:${n}\\s?--\x3e`,"gi"),i=e[n];return t.replace(r,i||"")},t),titleFromContentHeading:t=>{const[,e]=t&&t.match(i)||[];return e&&r(e,"all")}}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(3),i=n.n(r),a=n(1),o=n(25),s=n(22),c=n(24),l=n(23);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var p={components:{ContentHeader:s.a,ContentText:c.a,ContentTag:l.a},mixins:[o.a],props:{id:{type:String,required:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.b)("state",["pages","config"]),{page:function(){return this.pages[this.id]},fileLink:function(){return this.findFileLink(this.page)}})},f=n(0),d=Object(f.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("ContentHeader",{attrs:{title:t.page.title}},[t._l(t.page.tags,(function(t){return n("ContentTag",{key:t,staticClass:"uie-sob-m",attrs:{tag:t}})})),t._v(" "),t.fileLink?n("div",{staticClass:"contentheader__options"},[n("a",{staticClass:"contentheader__action",attrs:{href:t.fileLink,"aria-label":t._f("localize")("options.edit")}},[n("AppIcon",{attrs:{symbol:"pencil"}})],1)]):t._e()],2),t._v(" "),n("ContentText",{attrs:{item:t.page}})],1)}),[],!1,null,null,null);e.default=d.exports},,,function(t,e){},,function(t,e,n){"use strict";var r={components:{ContentHeading:n(28).a},props:{title:{type:String,default:null},level:{type:Number,default:1}}},i=(n(47),n(0)),a=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"contentheader"},[this.title?e("ContentHeading",[this._v("\n    "+this._s(this.title)+"\n  ")]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"dd73de70",null);e.a=a.exports},function(t,e,n){"use strict";var r={props:{tag:{type:String,required:!0}},computed:{target:function(){return{name:"search",params:{query:this.tag}}}}},i=(n(48),n(0)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("RouterLink",{staticClass:"tag",attrs:{to:this.target}},[this._v("\n  "+this._s(this.tag)+"\n")])}),[],!1,null,"4765d948",null);e.a=a.exports},function(t,e,n){"use strict";var r=new RegExp("^<h1.*?>.*</h1>"),i={props:{item:{type:Object,default:null}},computed:{renderedContent:function(){var t=this.item,e=t.content,n=t.isTitleFromHeading;return e?n?e.replace(r,"").trim():e:null}},methods:{handleLinkClicks:function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(e&&e.matches(".content a:not([href*='://'])")&&e.href){var n=t.altKey,r=t.ctrlKey,i=t.metaKey,a=t.shiftKey,o=t.button,s=t.defaultPrevented;if(i||n||r||a)return;if(s)return;if(void 0!==o&&0!==o)return;if(e&&e.getAttribute){var c=e.getAttribute("target");if(/\b_blank\b/i.test(c))return}var l=window.UIengine.state.config.ui.base,u=new RegExp("^".concat(l)),p=new URL(e.href).pathname,f=window.location.pathname,d=p.replace(u,"/"),h=f.replace(u,"/");void 0!==this.$router.resolve(d).resolved.meta.navItemId&&!(h===d)&&t.preventDefault&&(t.preventDefault(),this.$router.push(d))}}}},a=n(0),o=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return this.item.content?e("article",{staticClass:"content",domProps:{innerHTML:this._s(this.renderedContent)},on:{click:this.handleLinkClicks}}):this._e()}),[],!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";e.a={methods:{findFileLink:function(t){var e=!!window.___browserSync___,n=t.readmeFile,r=t.sourceFile,i=t.sourcePath,a=n||r||i;if(e){var o=this.config.source.base;return"vscode://file/".concat(o,"/").concat(a)}var s=this.config.ui.repoBaseUrl;return s?"".concat(s).concat(a):null}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(18),i=n.n(r),a=window.UIengine,o=a.state.config.ui,s=a.locales,c=o&&o.locales?o.locales:{},l=i()(s,c)},function(t,e,n){"use strict";var r={props:{id:{type:String,required:!0},property:{type:Object,required:!0},displayDescription:{type:Boolean,required:!0}},computed:{propertyType:function(){var t=this.property,e=t.value,n=t.type;return["Array","Object"].includes(n)&&e?"".concat(this.property.type,"[").concat(e.type||e,"]"):this.property.type},description:function(){return this.property.description},required:function(){return this.property.required?"*":""},defaultValue:function(){return this.property.default}}},i=(n(56),n(0)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"property__name"},[t._v("\n    "+t._s(t.id)+"\n  ")]),t._v(" "),n("td",{staticClass:"property__type"},[t._v("\n    "+t._s(t.propertyType)+"\n  ")]),t._v(" "),t.displayDescription?n("td",{staticClass:"property__description"},[t._v("\n    "+t._s(t.description)+"\n  ")]):t._e(),t._v(" "),n("td",{staticClass:"property__required"},[t._v("\n    "+t._s(t.required)+"\n  ")]),t._v(" "),n("td",{staticClass:"property__default"},[t._v("\n    "+t._s(t.defaultValue)+"\n  ")])])}),[],!1,null,"6c85ff76",null);e.a=a.exports},function(t,e,n){"use strict";var r={props:{level:{type:Number,default:1}},render:function(t){return t("h".concat(this.level),{class:"contentheader__title"},this.$slots.default)}},i=n(0),a=Object(i.a)(r,void 0,void 0,!1,null,null,null);e.a=a.exports},,,,,,function(t,e){t.exports=function(t,e,n){var r=e.split(".").reduce((function(t,e){return t&&t[e]}),t);return r&&n?r.replace(/%\{(.+?)\}/g,(function(t,r){var i=n[r];return i||(console.warn("[UIengine]",'Missing interpolation "'.concat(r,'" for key "').concat(e,'"!')),"[".concat(r,"]"))})):r||(console.warn("[UIengine]",'Missing localization for key "'.concat(e,'"!')),"[".concat(e,"]"))}},,,,,,,function(t,e,n){"use strict";var r=n(5);n.n(r).a},function(t,e,n){"use strict";var r=n(6);n.n(r).a},function(t,e,n){"use strict";var r=n(7);n.n(r).a},function(t,e,n){"use strict";var r=n(8);n.n(r).a},function(t,e,n){"use strict";var r=n(9);n.n(r).a},function(t,e,n){"use strict";var r=n(10);n.n(r).a},function(t,e,n){"use strict";var r=n(11);n.n(r).a},function(t,e,n){"use strict";var r=n(12);n.n(r).a},,,,function(t,e,n){var r={"./MainComponent":[35,0,3,1,2,5],"./MainComponent.vue":[35,0,3,1,2,5],"./MainDocumentation":[17],"./MainDocumentation.vue":[17],"./MainNotFound":[36,6],"./MainNotFound.vue":[36,6],"./MainSearch":[37,0,7],"./MainSearch.vue":[37,0,7],"./MainSettings":[38,8],"./MainSettings.vue":[38,8],"./MainTemplate":[39,0,3,1,2,9],"./MainTemplate.vue":[39,0,3,1,2,9],"./MainTokens":[40,0,1,10],"./MainTokens.vue":[40,0,1,10]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=52,t.exports=i},function(t,e,n){"use strict";var r=n(13);n.n(r).a},function(t,e,n){"use strict";var r=n(14);n.n(r).a},function(t,e,n){"use strict";var r=n(15);n.n(r).a},function(t,e,n){"use strict";var r=n(16);n.n(r).a},,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(2),i=n(29),a=n(30),o=n.n(a),s=n(31),c=n.n(s),l=n(32),u=n(3),p=n.n(u),f=n(1);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){p()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={data:function(){return{query:"",isThemesActive:!1}},computed:h({},Object(f.b)("state",["config","navigation"]),{},Object(f.b)("preferences",["locale","navigationCollapsed","searchCollapsed","currentTheme"]),{themes:function(){return this.config.themes}}),created:function(){var t=this;this.$root.$on("modal:close",(function(){t.isThemesActive=!1}))},methods:h({},Object(f.c)("preferences",["setNavigationCollapsed","setSearchCollapsed","setCurrentTheme"]),{search:function(){var t=this.query.trim();t.length&&this.$router.push({name:"search",params:{query:t}})},setCurrentThemeAll:function(){this.setCurrentTheme({id:"_all",title:this.$options.filters.localize("options.all_themes")})},toggleSearch:function(){var t=this;this.setSearchCollapsed(!this.searchCollapsed),this.searchCollapsed||window.requestAnimationFrame((function(){t.$refs.searchfield.focus()}))}})},g=(n(41),n(0)),m=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topbar"},[n("button",{staticClass:"topbar__toggle topbar__toggle--menu",attrs:{title:t._f("localize")("navigation.toggle"),"aria-expanded":t._f("bool2string")(!t.navigationCollapsed),type:"button","aria-controls":"navigation-root","data-test-navtoggle":""},on:{click:function(e){return e.preventDefault(),t.setNavigationCollapsed(!t.navigationCollapsed)}}},[n("AppIcon",{staticClass:"topbar__icon",attrs:{symbol:"burger"}})],1),t._v(" "),n("RouterLink",{staticClass:"topbar__home",attrs:{to:t.navigation.index}},[t._v("\n    "+t._s(t.config.name)+"\n  ")]),t._v(" "),t.themes&&t.themes.length>1?n("div",{staticClass:"topbar__theme",attrs:{"data-test-theme-switch":""}},[n("button",{staticClass:"topbar__theme-toggle",attrs:{title:t._f("localize")("options.toggle"),type:"button","data-test-theme-switch-current":""},on:{click:function(e){e.stopPropagation(),t.isThemesActive=!t.isThemesActive}}},[t._v("\n      "+t._s(t.currentTheme.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"topbar__theme-options",class:{"topbar__theme-options--active":t.isThemesActive}},[n("div",{staticClass:"topbar__theme-options-inner"},[t._l(t.themes,(function(e){return n("button",{key:e.id,staticClass:"topbar__theme-option",attrs:{type:"button","data-test-theme-switch-id":e.id},on:{click:function(n){return t.setCurrentTheme(e)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])})),t._v(" "),n("button",{staticClass:"topbar__theme-option topbar__theme-option--all",attrs:{type:"button","data-test-theme-switch-all":""},on:{click:function(e){return t.setCurrentThemeAll()}}},[t._v("\n          "+t._s(t._f("localize")("options.all_themes"))+"\n        ")])],2)])]):t._e(),t._v(" "),n("span",{staticClass:"topbar__spacer"}),t._v(" "),n("button",{staticClass:"topbar__toggle topbar__toggle--search",attrs:{title:t._f("localize")("search.toggle"),type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleSearch(e)}}},[n("AppIcon",{staticClass:"topbar__icon",attrs:{symbol:"search"}})],1),t._v(" "),n("form",{staticClass:"topbar__search",class:{"topbar__search--collapsed":t.searchCollapsed},on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"searchfield",staticClass:"topbar__searchfield",attrs:{type:"search",name:"query","aria-label":t._f("localize")("search.label"),"data-test-searchfield":""},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})])],1)}),[],!1,null,"cf9f2056",null).exports;function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var b={computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){p()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(f.b)("state",["navigation"]),{},Object(f.b)("preferences",["locale","navigationCollapsed"]))},y=(n(42),Object(g.a)(b,(function(){var t=this.$createElement,e=this._self._c||t;return this.navigation?e("nav",{staticClass:"navigation",attrs:{id:"navigation",hidden:this.navigationCollapsed,"data-test-navigation":""}},[this.navigation.index.childIds?e("AppNavigationTree",{attrs:{id:"navigation-root",items:this.navigation.index.childIds,navigation:this.navigation,level:0}}):this._e()],1):this._e()}),[],!1,null,"36b6eecd",null).exports);function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var j={computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){p()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(f.b)("state",["config","navigation"]),{},Object(f.b)("preferences",["locale"]),{lastUpdate:function(){return new Date(this.config.update).toLocaleString(this.locale)},navItem:function(){var t=this.$route.meta.navItemId;return this.navigation[t]},prevPage:function(){return this.findPrevPage(this.$route.meta.navItemId,!0)},nextPage:function(){return this.findNextPage(this.$route.meta.navItemId,!0)}}),methods:{findPrevPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t){var r=this.navigation[t];if(r){var i=r.childIds,a=r.prevSiblingId,o=r.parentId;return!n&&i?this.findPrevPage(i[i.length-1],!1,!1):e||r.isStructural?a?this.findPrevPage(a,!1,!1):o?this.findPrevPage(o,!1,!0):void 0:r}}},findNextPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t){var r=this.navigation[t];if(r){var i=r.childIds,a=r.nextSiblingId,o=r.parentId;return e||r.isStructural?!n&&i?this.findNextPage(i[0]):a?this.findNextPage(a):o?this.findNextPage(o,!0,!0):void 0:r}}}}},C=(n(43),n(44),n(20)),w=n.n(C),P=Object(g.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t.prevPage||t.nextPage?n("p",{staticClass:"footer__nav"},[t.prevPage?n("RouterLink",{staticClass:"footer__prevlink",attrs:{to:t.prevPage,"data-test-footer-prevlink":""}},[n("AppIcon",{attrs:{symbol:"caret-left"}}),t._v("\n      "+t._s(t.prevPage.title)+"\n    ")],1):t._e(),t._v(" "),t.nextPage?n("RouterLink",{staticClass:"footer__nextlink",attrs:{to:t.nextPage,"data-test-footer-nextlink":""}},[t._v("\n      "+t._s(t.nextPage.title)+"\n      "),n("AppIcon",{attrs:{symbol:"caret-right"}})],1):t._e()],1):t._e(),t._v(" "),n("div",[t.config.copyright?n("p",{staticClass:"footer__copyright",attrs:{"data-test-footer-copyright":""},domProps:{innerHTML:t._s(t.config.copyright)}}):t._e(),t._v(" "),t.config.version?n("p",{staticClass:"footer__version",attrs:{"data-test-footer-version":""}},[t._v("\n      "+t._s(t._f("localize")("footer.version"))+" "+t._s(t.config.version)+" –\n      "+t._s(t._f("localize")("footer.last_update"))+" "+t._s(t.lastUpdate)+".\n    ")]):t._e()])])}),[],!1,null,"cdcd25a2",null);"function"==typeof w.a&&w()(P);var I=P.exports,k={computed:Object(f.b)("state",["navigation"]),metaInfo:function(){var t=this.$route.meta,e=t.navItemId,n=t.navItemTitle,r=this.navigation[e];return{title:r?r.title:n}}},x=(n(45),Object(g.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[e("RouterView")],1)}),[],!1,null,null,null).exports);function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var S=document.documentElement,A=document.getElementById("hljs"),$=A.getAttribute("data-tmpl"),D={components:{AppTopbar:m,AppNavigation:y,AppFooter:I,AppMain:x},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){p()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(f.b)("preferences",["currentTheme"]),{themeId:function(){return this.currentTheme&&this.currentTheme.id}}),created:function(){var t=this;this.$root.$on("setting:hljs",this.setHljs),this.$store.watch((function(){return t.$store.getters["preferences/currentTheme"]}),this.setCurrentTheme);var e=this.$store.getters["preferences/hljs"];e&&this.setHljs(e),this.setCurrentTheme(this.currentTheme)},methods:{closeModals:function(){this.$root.$emit("modal:close")},setHljs:function(t){A.setAttribute("href",$.replace("%s",t))},setCurrentTheme:function(t){S.setAttribute("data-theme",t.id)}},metaInfo:function(){var t=this.$store.getters["state/config"],e=t?t.name:"";return t&&t.version&&(e+=" (".concat(t.version,")")),{titleTemplate:function(t){return t?"".concat(t," • ").concat(e):e}}}},E=(n(46),Object(g.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout",attrs:{id:"app"},on:{click:this.closeModals}},[e("AppTopbar"),this._v(" "),e("AppNavigation"),this._v(" "),e("AppMain"),this._v(" "),e("AppFooter")],1)}),[],!1,null,null,null).exports),N=n(21),q=n(17),M=n(4);r.a.use(N.a);var z=function(t){if("documentation"===t)return q.default;var e=Object(M.upcaseFirstChar)(t);return function(){return n(52)("./Main"+e)}},U=window.UIengine.state.config.ui,F=U.base,L=U.mode,H=new N.a({mode:L||"history",base:F||"/",scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:n||{x:0,y:0}},routes:[{name:"search",path:"/_search/:query",props:!0,component:z("search"),meta:{navItemId:"_search"}},{name:"settings",path:"/_settings/",component:z("settings"),meta:{navItemId:"_settings"}},{path:"*",component:z("notFound")}]}),R=H,B=function(t){var e=Object.keys(t).map((function(e){var n=t[e];return{path:n.path,component:z(n.type),meta:{navItemId:n.id,navItemTitle:n.title},props:{id:n.itemId}}}));H.addRoutes(e)};B(window.UIengine.state.navigation);var K=function(t){var e,n,r=t.navigation;return n="Settings",r[e="settings"]={id:e,itemId:e,parentId:"index",path:"/_".concat(e,"/"),type:e,localizedTitleKey:"".concat(e,".title"),title:n},r.index.childIds.push(e),t},J={namespaced:!0,state:K(window.UIengine.state),getters:{pages:function(t){return t.pages},config:function(t){return t.config},plugins:function(t){return t.plugins},components:function(t){return t.components},navigation:function(t){return t.navigation}},mutations:{setState:function(t,e){for(var n in e=K(e))t[n]=e[n];var r=e.navigation;r&&B(r)}},actions:{}},V=n(33),W=n.n(V),G=window.UIengine.state.config,Q=G.ui,X=G.themes,Y={hljs:document.getElementById("hljs").getAttribute("data-default"),locale:document.documentElement.getAttribute("lang"),currentTheme:X&&X[0],navigationCollapsed:!1,navigationItemsCollapsed:{},searchCollapsed:!0,previewWidths:{},previewMode:Q&&Q.defaultPreviewMode||"breakpoints"},Z={namespaced:!0,state:Object.keys(Y).reduce((function(t,e){var n=Y[e];return t[e]=function(t,e){var n=window.sessionStorage.getItem("uiengine/".concat(t));return n?JSON.parse(n):e}(e,n),t}),{}),getters:Object.keys(Y).reduce((function(t,e){return t[e]=function(t){return t[e]},t}),{}),mutations:Object.keys(Y).reduce((function(t,e){var n=Object(M.upcaseFirstChar)(e);return t["set".concat(n)]=function(t,n){!function(t,e){e||"boolean"==typeof e?window.sessionStorage.setItem("uiengine/".concat(t),JSON.stringify(e)):window.sessionStorage.removeItem("uiengine/".concat(t))}(e,n),t[e]=function(t){return"object"===W()(t)?t instanceof Array?t:Object.assign({},t):t}(n)},t}),{}),actions:{}};r.a.use(f.a);var tt={state:J,preferences:Z},et=new f.a.Store({modules:tt}),nt=n(34),rt=n.n(nt),it=n(26);r.a.filter("dasherize",M.dasherize),r.a.filter("upcaseFirstChar",M.upcaseFirstChar),r.a.filter("titleize",M.titleize),r.a.filter("bool2string",(function(t){return t?"true":"false"})),r.a.filter("localize",(function(t,e){var n=et.getters["preferences/locale"],r=it.a[n];return rt()(r,t,e)}));var at={props:{title:{type:String,default:""},symbol:{type:String,required:!0}},computed:{symbolHref:function(){return"#".concat(this.symbol)}}},ot=(n(53),Object(g.a)(at,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{title:this.title,role:"presentation","aria-hidden":"true",focusable:"false"}},[e("use",{attrs:{"xlink:href":this.symbolHref}})])}),[],!1,null,"498522e7",null).exports),st={props:{navigation:{type:Object,required:!0},items:{type:Array,required:!0},level:{type:Number,required:!0}},computed:{levelClass:function(){return"navigation__tree--level-".concat(this.level)},navigationItems:function(){var t=this;return this.items.filter((function(e){return void 0!==t.navigation[e]}))}}},ct=(n(54),Object(g.a)(st,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navigation__tree",class:t.levelClass},[t._l(t.navigationItems,(function(e){return n("AppNavigationItem",{key:e,attrs:{navigation:t.navigation,item:t.navigation[e],level:t.level}})})),t._v(" "),t._t("default")],2)}),[],!1,null,"34323779",null).exports);function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){p()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var pt={props:{navigation:{type:Object,required:!0},item:{type:Object,required:!0},level:{type:Number,required:!0}},computed:ut({},Object(f.b)("preferences",["navigationItemsCollapsed"]),{children:function(){return this.item.childIds},isCurrentPage:function(){return this.$route.path===this.item.path},isCollapsed:function(){return void 0!==this.navigationItemsCollapsed[this.item.id]?this.navigationItemsCollapsed[this.item.id]:this.item.collapsed||!1},title:function(){var t=this.item,e=t.title,n=t.localizedTitleKey;return n?this.$options.filters.localize(n):e},classes:function(){var t=["navigation__item--level-".concat(this.level)];return this.children&&t.push("navigation__item--children"),this.isCollapsed&&t.push("navigation__item--collapsed"),this.isCurrentPage&&t.push("navigation__item--current"),t}}),methods:ut({},Object(f.c)("preferences",["setNavigationItemsCollapsed"]),{setCollapsed:function(t){var e=this.navigationItemsCollapsed;e[this.item.id]=t,this.setNavigationItemsCollapsed(e),t||this.$refs.children.$el.querySelector("a.navigation__link").focus()}})},ft=(n(55),Object(g.a)(pt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"navigation__item",class:t.classes,attrs:{"data-test-navitem-id":t.item.id}},[t.item.isStructural?n("span",{staticClass:"navigation__link"},[t._v("\n    "+t._s(t.title)+"\n  ")]):n("RouterLink",{staticClass:"navigation__link",attrs:{to:t.item}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.children?n("button",{staticClass:"navigation__itemtoggle",attrs:{"aria-expanded":t._f("bool2string")(!t.isCollapsed),title:t._f("localize")("navigation.toggle"),type:"button","aria-haspopup":"true"},on:{click:function(e){return e.preventDefault(),t.setCollapsed(!t.isCollapsed)}}},[n("AppIcon",{staticClass:"navigation__icon",attrs:{symbol:"caret-down"}})],1):t._e(),t._v(" "),t.children?n("AppNavigationTree",{ref:"children",attrs:{navigation:t.navigation,items:t.children,level:t.level+1,"data-test-navtree-id":t.item.id}}):t._e()],1)}),[],!1,null,"b83fb81c",null).exports),dt=n(27);r.a.component("AppIcon",ot),r.a.component("AppNavigationTree",ct),r.a.component("AppNavigationItem",ft),r.a.component("ContentProperty",dt.a);var ht=(window.UIengine.state.config.ui||{}).analyticsId;if(n.p=window.UIengine.base,r.a.config.productionTip=!1,r.a.use(i.a),ht&&r.a.use(o.a,{id:ht,router:R,autoTracking:{exception:!0,exceptionLogs:!1},debug:{sendHitTask:!0}}),new r.a({el:"#app",router:R,store:et,components:{App:E},mounted:function(){this.$nextTick((function(){Object(l.a)({observeChanges:!0,observeRootSelector:"main.main"})}))},template:"<App/>"}),new c.a("[data-clipboard-text]").on("error",(function(t){console.error("[UIengine]","Clipboard error:",t)})),document.getElementById("__bs_script__")){var vt=0;!function t(){var e=(window.___browserSync___||{}).socket;e?(e.on("uiengine:state:update",(function(t){et.commit("state/setState",t)})),console.debug("[UIengine]","Connection to browser-sync socket established.")):vt<=10?(setTimeout(t,100),vt++):console.warn("[UIengine]","Could not connect to browser-sync socket.")}()}}],[[63,4,0,14]],[0,3,1,2,5,9,10,7,6,8]]);