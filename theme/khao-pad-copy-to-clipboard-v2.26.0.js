import{r as T,h as W,q as z,o as C,w,c as r,u as F,W as M,a as N,Z as B,m as q,Y as o,j as h,B as $,d as j}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.17.8.js";import{h as E}from"./khao-ui-svelte-style-4.17.8.js";import{T as U}from"./khao-ui-button-4.17.8.js";import"./khao-ui-svelte-this-4.17.8.js";import"./khao-ui-icon-4.17.8.js";var Y=T("<div><!></div>");const Z={hash:"svelte-dpccdp",code:`.feedback-none.svelte-dpccdp {
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
    animation: svelte-dpccdp-feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;}`};function A(y,t){z(t,!0),C(y,Z);let c=w("none"),n=r(t,"label",7,""),p=r(t,"title",7,""),m=r(t,"priority",7,"primary"),d=r(t,"size",7,"medium"),u=r(t,"iconName",7,""),s=r(t,"textToCopy",7,""),i=r(t,"copyFrom",7,""),l=r(t,"customMinWidth",7,"");F(()=>{!s()&&!i()&&console.error("khao-copy-to-clipboard: both textToCopy and copyFrom are empty!")});const b=e=>{e&&(h(c,e,!0),setTimeout(()=>{h(c,"none")},1e3))};async function g(e){try{await navigator.clipboard.writeText(e),b("success")}catch{b("error")}}function v(){let e=s();if(!s()){const f=document.getElementById(i());f?e=f.value:console.error(`khao-copy-to-clipboard: no element found with id=${i()}`)}g(e)}var k={get label(){return n()},set label(e=""){n(e),o()},get title(){return p()},set title(e=""){p(e),o()},get priority(){return m()},set priority(e="primary"){m(e),o()},get size(){return d()},set size(e="medium"){d(e),o()},get iconName(){return u()},set iconName(e=""){u(e),o()},get textToCopy(){return s()},set textToCopy(e=""){s(e),o()},get copyFrom(){return i()},set copyFrom(e=""){i(e),o()},get customMinWidth(){return l()},set customMinWidth(e=""){l(e),o()}},a=Y(),x=M(a);return U(x,{get label(){return n()},get title(){return p()},get priority(){return m()},get size(){return d()},get iconName(){return u()},get customMinWidth(){return l()},href:"javasctipt:",onClick:v}),$(a),B(()=>E(a,1,`feedback-${j(c)??""}`,"svelte-dpccdp")),q(y,a),N(k)}customElements.define("khao-copy-to-clipboard",W(A,{label:{},title:{},priority:{},size:{},iconName:{},textToCopy:{},copyFrom:{},customMinWidth:{}},[],[],!0));
