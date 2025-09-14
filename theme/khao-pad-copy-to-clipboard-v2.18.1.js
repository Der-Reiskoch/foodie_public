import{Z as x,o as q,h as T,n as j,g as M,u as r,Y as z,q as C,$ as F,V as N,y as W,c as o,D as b,M as $,E as w}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.14.0.js";import{h as E}from"./khao-ui-svelte-style-4.14.0.js";import{T as I}from"./khao-ui-button-4.14.0.js";import"./khao-ui-icon-4.14.0.js";var V=x("<div><!></div>");const Y={hash:"svelte-1ijqhnn",code:`.feedback-none.svelte-1ijqhnn {
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
    animation: svelte-1ijqhnn-feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}`};function Z(y,t){T(t,!0),j(y,Y);let a=M("none"),c=r(t,"label",7,""),m=r(t,"title",7,""),u=r(t,"priority",7,"primary"),l=r(t,"size",7,"medium"),p=r(t,"iconName",7,""),n=r(t,"textToCopy",7,""),i=r(t,"copyFrom",7,""),d=r(t,"customMinWidth",7,"");z(()=>{!n()&&!i()&&console.error("khao-copy-to-clipboard: both textToCopy and copyFrom are empty!")});const h=e=>{e&&(b(a,e,!0),setTimeout(()=>{b(a,"none")},1e3))};async function g(e){try{await navigator.clipboard.writeText(e),h("success")}catch{h("error")}}function v(){let e=n();if(!n()){const f=document.getElementById(i());f?e=f.value:console.error(`khao-copy-to-clipboard: no element found with id=${i()}`)}g(e)}var s=V(),k=C(s);return I(k,{get label(){return c()},get title(){return m()},get priority(){return u()},get size(){return l()},get iconName(){return p()},get customMinWidth(){return d()},href:"javasctipt:",onClick:v}),$(s),N(()=>E(s,1,`feedback-${w(a)??""}`,"svelte-1ijqhnn")),W(y,s),F({get label(){return c()},set label(e=""){c(e),o()},get title(){return m()},set title(e=""){m(e),o()},get priority(){return u()},set priority(e="primary"){u(e),o()},get size(){return l()},set size(e="medium"){l(e),o()},get iconName(){return p()},set iconName(e=""){p(e),o()},get textToCopy(){return n()},set textToCopy(e=""){n(e),o()},get copyFrom(){return i()},set copyFrom(e=""){i(e),o()},get customMinWidth(){return d()},set customMinWidth(e=""){d(e),o()}})}customElements.define("khao-copy-to-clipboard",q(Z,{label:{},title:{},priority:{},size:{},iconName:{},textToCopy:{},copyFrom:{},customMinWidth:{}},[],[],!0));
