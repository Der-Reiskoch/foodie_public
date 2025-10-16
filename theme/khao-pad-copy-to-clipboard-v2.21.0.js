import{K as k,a as j,c as M,e as T,g as q,l as r,u as z,M as C,_ as $,H as F,$ as N,b as o,h as f,x as W,S as w}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.15.1.js";import{E}from"./khao-ui-svelte-this-4.15.1.js";import{Q as K}from"./khao-ui-button-4.15.1.js";import"./khao-ui-icon-4.15.1.js";var S=k("<div><!></div>");const H={hash:"svelte-1ijqhnn",code:`.feedback-none.svelte-1ijqhnn {
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
    animation: svelte-1ijqhnn-feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}`};function I(y,t){M(t,!0),T(y,H);let a=q("none"),c=r(t,"label",7,""),m=r(t,"title",7,""),l=r(t,"priority",7,"primary"),u=r(t,"size",7,"medium"),p=r(t,"iconName",7,""),n=r(t,"textToCopy",7,""),s=r(t,"copyFrom",7,""),d=r(t,"customMinWidth",7,"");z(()=>{!n()&&!s()&&console.error("khao-copy-to-clipboard: both textToCopy and copyFrom are empty!")});const h=e=>{e&&(f(a,e,!0),setTimeout(()=>{f(a,"none")},1e3))};async function g(e){try{await navigator.clipboard.writeText(e),h("success")}catch{h("error")}}function v(){let e=n();if(!n()){const b=document.getElementById(s());b?e=b.value:console.error(`khao-copy-to-clipboard: no element found with id=${s()}`)}g(e)}var i=S(),x=C(i);return K(x,{get label(){return c()},get title(){return m()},get priority(){return l()},get size(){return u()},get iconName(){return p()},get customMinWidth(){return d()},href:"javasctipt:",onClick:v}),W(i),F(()=>E(i,1,`feedback-${w(a)??""}`,"svelte-1ijqhnn")),N(y,i),$({get label(){return c()},set label(e=""){c(e),o()},get title(){return m()},set title(e=""){m(e),o()},get priority(){return l()},set priority(e="primary"){l(e),o()},get size(){return u()},set size(e="medium"){u(e),o()},get iconName(){return p()},set iconName(e=""){p(e),o()},get textToCopy(){return n()},set textToCopy(e=""){n(e),o()},get copyFrom(){return s()},set copyFrom(e=""){s(e),o()},get customMinWidth(){return d()},set customMinWidth(e=""){d(e),o()}})}customElements.define("khao-copy-to-clipboard",j(I,{label:{},title:{},priority:{},size:{},iconName:{},textToCopy:{},copyFrom:{},customMinWidth:{}},[],[],!0));
