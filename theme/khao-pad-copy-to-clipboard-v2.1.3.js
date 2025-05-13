import{Z as k,u as x,h as q,n as T,k as j,a as r,Y as z,q as C,$ as F,V as N,y as $,c as o,D as b,M as w,b as E}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.9.3.js";import{b as M}from"./khao-ui-svelte-style-4.9.3.js";import{T as V}from"./khao-ui-button-4.9.3.js";import"./khao-ui-icon-4.9.3.js";var Y=k("<div><!></div>");const Z={hash:"svelte-1ijqhnn",code:`.feedback-none.svelte-1ijqhnn {
    animation: none;}

  @keyframes svelte-1ijqhnn-feedback-success {
    10%,
    90% {
      transform: translate3d(0, -1px, 0);
    }

    20%,
    80% {
      transform: translate3d(0, 2px, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(0, -4px, 0);
    }

    40%,
    60% {
      transform: translate3d(0, 4px, 0);
    }
  }.feedback-success.svelte-1ijqhnn {
    animation: svelte-1ijqhnn-feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}`};function B(y,t){q(t,!0),T(y,Z);let i=j("none"),c=r(t,"label",7,""),l=r(t,"title",7,""),m=r(t,"priority",7,"primary"),p=r(t,"size",7,"medium"),u=r(t,"iconName",7,""),n=r(t,"textToCopy",7,""),a=r(t,"copyFrom",7,"");z(()=>{!n()&&!a()&&console.error("khao-copy-to-clipboard: both textToCopy and copyFrom are empty!")});const d=e=>{e&&(b(i,e,!0),setTimeout(()=>{b(i,"none")},1e3))};async function h(e){try{await navigator.clipboard.writeText(e),d("success")}catch{d("error")}}function g(){let e=n();if(!n()){const f=document.getElementById(a());f?e=f.value:console.error(`khao-copy-to-clipboard: no element found with id=${a()}`)}h(e)}var s=Y(),v=C(s);return V(v,{get label(){return c()},get title(){return l()},get priority(){return m()},get size(){return p()},get iconName(){return u()},href:"#",onClick:g}),w(s),N(()=>M(s,1,`feedback-${E(i)??""}`,"svelte-1ijqhnn")),$(y,s),F({get label(){return c()},set label(e=""){c(e),o()},get title(){return l()},set title(e=""){l(e),o()},get priority(){return m()},set priority(e="primary"){m(e),o()},get size(){return p()},set size(e="medium"){p(e),o()},get iconName(){return u()},set iconName(e=""){u(e),o()},get textToCopy(){return n()},set textToCopy(e=""){n(e),o()},get copyFrom(){return a()},set copyFrom(e=""){a(e),o()}})}customElements.define("khao-copy-to-clipboard",x(B,{label:{},title:{},priority:{},size:{},iconName:{},textToCopy:{},copyFrom:{}},[],[],!0));
