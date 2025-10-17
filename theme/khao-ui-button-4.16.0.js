import{H as G,B as W,X as M,r as O,J as _,z as r,O as j,k as D,G as H,s as J,D as X,W as E,f as F,t as a,N as L}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.16.0.js";import{e as i}from"./khao-ui-svelte-this-4.16.0.js";import{h as Q,N as q}from"./khao-ui-svelte-style-4.16.0.js";import{s as A}from"./khao-ui-icon-4.16.0.js";const z="primary";var I=G("<a> <!></a>");const K={hash:"svelte-1fytfux",code:`.button.svelte-1fytfux {appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {outline:none;}}:host {--khao-button-container-color: var(--khao-sys-color-primary);--khao-button-label-text-color: var(--khao-sys-color-on-primary);--khao-button-state-layer-color: var(--khao-sys-color-on-primary);--khao-button-label-font-weight: var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-container-shape: var(--khao-sys-shape-corner-small);--khao-button-leading-space: var(--khao-sys-size-regular-5);--khao-button-trailing-space: var(--khao-sys-size-regular-5);--khao-button-icon-leading-space: var(--khao-sys-size-regular-2);--khao-button-height-compact: var(--khao-sys-size-regular-8);--khao-button-width-compact: 80px;--khao-button-height-medium: var(--khao-sys-size-regular-10);--khao-button-width-medium: 150px;--khao-button-height-large: var(--khao-sys-size-regular-12);--khao-button-width-large: 180px;--khao-button-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );}a.button.svelte-1fytfux {text-decoration:none;}.button.svelte-1fytfux {display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);gap:var(--khao-button-icon-leading-space);white-space:nowrap;transition:background-color 0.1s,
      color 0.2s;&:hover {background-color:color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-hover-state-layer-opacity)
      );}&:focus-visible {background-color:color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-focus-state-layer-opacity)
      );outline-offset:2px;outline:2px solid
        color-mix(
          in srgb,
          var(--khao-button-container-color),
          var(--khao-button-state-layer-color)
            var(--khao-button-focus-state-layer-opacity)
        );}&:active {background-color:color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-pressed-state-layer-opacity)
      );}}.button-size-compact.svelte-1fytfux {min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact);}.button-size-medium.svelte-1fytfux {min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium);}.button-size-large.svelte-1fytfux {min-width:var(--khao-button-width-large);height:var(--khao-button-height-large);}.button-secondary.svelte-1fytfux {--khao-button-container-color: var(--khao-sys-color-secondary);--khao-button-label-text-color: var(--khao-sys-color-on-secondary);--khao-button-state-layer-color: var(--khao-sys-color-on-secondary);}.button-tertiary.svelte-1fytfux {--khao-button-container-color: var(--khao-sys-color-tertiary);--khao-button-label-text-color: var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color: var(--khao-sys-color-on-tertiary);}`};function P(d,o){O(o,!0),_(d,K);function C(t,n,x){var w=t!==""&&n!==""?`--khao-button-container-color:${t}; --khao-button-label-text-color:${n}; --khao-button-icon-color: ${n}; --khao-button-state-layer-color: ${n};`:"";return w+=x!==""?`min-width: ${x}`:"",w}function $(t,n){return t===null&&n!==null?"button":""}let s=r(o,"label",7),h=r(o,"title",23,s),u=r(o,"href",7,null),b=r(o,"rel",7,null),k=r(o,"target",7,null),y=r(o,"priority",7,z),v=r(o,"size",7,"medium"),g=r(o,"customBGColor",7,""),m=r(o,"customColor",7,""),p=r(o,"customMinWidth",7,""),c=r(o,"iconName",7,""),l=r(o,"onClick",7,null);var e=I();e.__click=function(...t){var n;(n=l())==null||n.apply(this,t)};var f=j(e),N=D(f);{var B=t=>{A(t,{get iconName(){return c()},sizeFactor:"5"})};H(N,t=>{c()!==""&&t(B)})}return L(e),X((t,n)=>{Q(e,1,`button button-${y()??""} button-size-${v()??""}`,"svelte-1fytfux"),i(e,"title",h()),i(e,"href",l()===null?u():"javascript:"),i(e,"target",k()),i(e,"rel",b()),q(e,t),i(e,"role",n),E(f,`${s()??""} `)},[()=>C(g(),m(),p()),()=>$(u(),l())]),F(d,e),J({get label(){return s()},set label(t){s(t),a()},get title(){return h()},set title(t=s){h(t),a()},get href(){return u()},set href(t=null){u(t),a()},get rel(){return b()},set rel(t=null){b(t),a()},get target(){return k()},set target(t=null){k(t),a()},get priority(){return y()},set priority(t=z){y(t),a()},get size(){return v()},set size(t="medium"){v(t),a()},get customBGColor(){return g()},set customBGColor(t=""){g(t),a()},get customColor(){return m()},set customColor(t=""){m(t),a()},get customMinWidth(){return p()},set customMinWidth(t=""){p(t),a()},get iconName(){return c()},set iconName(t=""){c(t),a()},get onClick(){return l()},set onClick(t=null){l(t),a()}})}W(["click"]);customElements.define("khao-button",M(P,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{P as Q};
