(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{wouM:function(e,n,t){e.exports=function(){var e="__v-click-outside",n="undefined"!=typeof window,t="undefined"!=typeof navigator,i=n&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function o(n,t){var o=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||i,isActive:!(!1===e.isActive)}}(t.value),r=o.handler,a=o.middleware;o.isActive&&(n[e]=o.events.map((function(e){return{event:e,handler:function(e){return function(e){var n=e.el,t=e.event,i=e.handler,o=e.middleware,r=t.path||t.composedPath&&t.composedPath(),a=r?r.indexOf(n)<0:!n.contains(t.target);t.target!==n&&a&&o(t)&&i(t)}({event:e,el:n,handler:r,middleware:a})}}})),n[e].forEach((function(t){var i=t.event,o=t.handler;return setTimeout((function(){n[e]&&document.documentElement.addEventListener(i,o,!1)}),0)})))}function r(n){(n[e]||[]).forEach((function(e){return document.documentElement.removeEventListener(e.event,e.handler,!1)})),delete n[e]}var a=n?{bind:o,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(r(e),o(e,{value:t}))},unbind:r}:{};return{install:function(e){e.directive("click-outside",a)},directive:a}}()}}]);
//# sourceMappingURL=v-click-outside.js.map