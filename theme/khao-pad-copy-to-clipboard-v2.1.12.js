import{Z as x,u as q,h as T,n as j,k as M,a as r,Y as z,q as C,$ as F,V as N,y as W,c as n,D as f,M as $,b as w}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.9.4.js";import{b as E}from"./khao-ui-svelte-style-4.9.4.js";import{T as I}from"./khao-ui-button-4.9.4.js";import"./khao-ui-icon-4.9.4.js";var V=x("<div><!></div>");const Y={hash:"svelte-1ijqhnn",code:`.feedback-none.svelte-1ijqhnn {
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
    animation: svelte-1ijqhnn-feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}`};function Z(y,t){T(t,!0),j(y,Y);let a=M("none"),c=r(t,"label",7,""),m=r(t,"title",7,""),u=r(t,"priority",7,"primary"),l=r(t,"size",7,"medium"),p=r(t,"iconName",7,""),o=r(t,"textToCopy",7,""),i=r(t,"copyFrom",7,""),d=r(t,"customMinWidth",7,"");z(()=>{!o()&&!i()&&console.error("khao-copy-to-clipboard: both textToCopy and copyFrom are empty!")});const h=e=>{e&&(f(a,e,!0),setTimeout(()=>{f(a,"none")},1e3))};async function g(e){try{await navigator.clipboard.writeText(e),h("success")}catch{h("error")}}function v(){let e=o();if(!o()){const b=document.getElementById(i());b?e=b.value:console.error(`khao-copy-to-clipboard: no element found with id=${i()}`)}g(e)}var s=V(),k=C(s);return I(k,{get label(){return c()},get title(){return m()},get priority(){return u()},get size(){return l()},get iconName(){return p()},get customMinWidth(){return d()},href:"javasctipt:",onClick:v}),$(s),N(()=>E(s,1,`feedback-${w(a)??""}`,"svelte-1ijqhnn")),W(y,s),F({get label(){return c()},set label(e=""){c(e),n()},get title(){return m()},set title(e=""){m(e),n()},get priority(){return u()},set priority(e="primary"){u(e),n()},get size(){return l()},set size(e="medium"){l(e),n()},get iconName(){return p()},set iconName(e=""){p(e),n()},get textToCopy(){return o()},set textToCopy(e=""){o(e),n()},get copyFrom(){return i()},set copyFrom(e=""){i(e),n()},get customMinWidth(){return d()},set customMinWidth(e=""){d(e),n()}})}customElements.define("khao-copy-to-clipboard",q(Z,{label:{},title:{},priority:{},size:{},iconName:{},textToCopy:{},copyFrom:{},customMinWidth:{}},[],[],!0));
