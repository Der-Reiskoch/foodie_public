import{e as T,c as W,j as z,u as C,$ as F,o as r,l as M,W as N,q as $,X as U,y as j,U as o,d as g,H as q,b as w}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.17.2.js";import{h as E}from"./khao-ui-svelte-style-4.17.2.js";import{T as H}from"./khao-ui-button-4.17.2.js";import"./khao-ui-icon-4.17.2.js";import"./khao-ui-svelte-this-4.17.2.js";var X=T("<div><!></div>");const A={hash:"svelte-dpccdp",code:`.feedback-none.svelte-dpccdp {
    animation: none;}

  @keyframes svelte-dpccdp-feedback-success {
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
  }.feedback-success.svelte-dpccdp {
    animation: svelte-dpccdp-feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}`};function B(y,t){z(t,!0),C(y,A);let c=F("none"),n=r(t,"label",7,""),p=r(t,"title",7,""),m=r(t,"priority",7,"primary"),d=r(t,"size",7,"medium"),l=r(t,"iconName",7,""),s=r(t,"textToCopy",7,""),i=r(t,"copyFrom",7,""),u=r(t,"customMinWidth",7,"");M(()=>{!s()&&!i()&&console.error("khao-copy-to-clipboard: both textToCopy and copyFrom are empty!")});const b=e=>{e&&(g(c,e,!0),setTimeout(()=>{g(c,"none")},1e3))};async function h(e){try{await navigator.clipboard.writeText(e),b("success")}catch{b("error")}}function v(){let e=s();if(!s()){const f=document.getElementById(i());f?e=f.value:console.error(`khao-copy-to-clipboard: no element found with id=${i()}`)}h(e)}var k={get label(){return n()},set label(e=""){n(e),o()},get title(){return p()},set title(e=""){p(e),o()},get priority(){return m()},set priority(e="primary"){m(e),o()},get size(){return d()},set size(e="medium"){d(e),o()},get iconName(){return l()},set iconName(e=""){l(e),o()},get textToCopy(){return s()},set textToCopy(e=""){s(e),o()},get copyFrom(){return i()},set copyFrom(e=""){i(e),o()},get customMinWidth(){return u()},set customMinWidth(e=""){u(e),o()}},a=X(),x=N(a);return H(x,{get label(){return n()},get title(){return p()},get priority(){return m()},get size(){return d()},get iconName(){return l()},get customMinWidth(){return u()},href:"javasctipt:",onClick:v}),q(a),U(()=>E(a,1,`feedback-${w(c)??""}`,"svelte-dpccdp")),j(y,a),$(k)}customElements.define("khao-copy-to-clipboard",W(B,{label:{},title:{},priority:{},size:{},iconName:{},textToCopy:{},copyFrom:{},customMinWidth:{}},[],[],!0));
