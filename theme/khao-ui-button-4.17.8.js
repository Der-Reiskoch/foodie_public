import{r as G,n as M,h as _,q as j,o as K,c as a,W as Y,K as Z,a as E,Z as F,l as O,m as Q,Y as r,B as T}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.17.8.js";import{W as A,o as i}from"./khao-ui-svelte-this-4.17.8.js";import{h as D,N as H}from"./khao-ui-svelte-style-4.17.8.js";import{h as I}from"./khao-ui-icon-4.17.8.js";const w="primary";var J=G("<a> <!></a>");const L={hash:"svelte-kq5sdz",code:`.button.svelte-kq5sdz {appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {outline:none;}}:host {--khao-button-container-color: var(--khao-sys-color-primary);--khao-button-label-text-color: var(--khao-sys-color-on-primary);--khao-button-state-layer-color: var(--khao-sys-color-on-primary);--khao-button-label-font-weight: var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-container-shape: var(--khao-sys-shape-corner-small);--khao-button-leading-space: var(--khao-sys-size-regular-5);--khao-button-trailing-space: var(--khao-sys-size-regular-5);--khao-button-icon-leading-space: var(--khao-sys-size-regular-2);--khao-button-height-compact: var(--khao-sys-size-regular-8);--khao-button-width-compact: 80px;--khao-button-height-medium: var(--khao-sys-size-regular-10);--khao-button-width-medium: 150px;--khao-button-height-large: var(--khao-sys-size-regular-12);--khao-button-width-large: 180px;--khao-button-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );}a.button.svelte-kq5sdz {text-decoration:none;}.button.svelte-kq5sdz {display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);gap:var(--khao-button-icon-leading-space);white-space:nowrap;transition:background-color 0.1s,
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
      );}}.button-size-compact.svelte-kq5sdz {min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact);}.button-size-medium.svelte-kq5sdz {min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium);}.button-size-large.svelte-kq5sdz {min-width:var(--khao-button-width-large);height:var(--khao-button-height-large);}.button-secondary.svelte-kq5sdz {--khao-button-container-color: var(--khao-sys-color-secondary);--khao-button-label-text-color: var(--khao-sys-color-on-secondary);--khao-button-state-layer-color: var(--khao-sys-color-on-secondary);}.button-tertiary.svelte-kq5sdz {--khao-button-container-color: var(--khao-sys-color-tertiary);--khao-button-label-text-color: var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color: var(--khao-sys-color-on-tertiary);}`};function P(p,o){j(o,!0),K(p,L);function q(t,n,z){var x=t!==""&&n!==""?`--khao-button-container-color:${t}; --khao-button-label-text-color:${n}; --khao-button-icon-color: ${n}; --khao-button-state-layer-color: ${n};`:"";return x+=z!==""?`min-width: ${z}`:"",x}function C(t,n){return t===null&&n!==null?"button":""}let s=a(o,"label",7),h=a(o,"title",23,s),c=a(o,"href",7,null),k=a(o,"rel",7,null),b=a(o,"target",7,null),v=a(o,"priority",7,w),y=a(o,"size",7,"medium"),d=a(o,"customBGColor",7,""),m=a(o,"customColor",7,""),g=a(o,"customMinWidth",7,""),u=a(o,"iconName",7,""),l=a(o,"onClick",7,null);var B={get label(){return s()},set label(t){s(t),r()},get title(){return h()},set title(t=s){h(t),r()},get href(){return c()},set href(t=null){c(t),r()},get rel(){return k()},set rel(t=null){k(t),r()},get target(){return b()},set target(t=null){b(t),r()},get priority(){return v()},set priority(t=w){v(t),r()},get size(){return y()},set size(t="medium"){y(t),r()},get customBGColor(){return d()},set customBGColor(t=""){d(t),r()},get customColor(){return m()},set customColor(t=""){m(t),r()},get customMinWidth(){return g()},set customMinWidth(t=""){g(t),r()},get iconName(){return u()},set iconName(t=""){u(t),r()},get onClick(){return l()},set onClick(t=null){l(t),r()}},e=J();e.__click=function(...t){var n;(n=l())==null||n.apply(this,t)};var f=Y(e),W=Z(f);{var N=t=>{I(t,{get iconName(){return u()},sizeFactor:"5"})};A(W,t=>{u()!==""&&t(N)})}return T(e),F((t,n)=>{D(e,1,`button button-${v()??""} button-size-${y()??""}`,"svelte-kq5sdz"),i(e,"title",h()),i(e,"href",l()===null?c():"javascript:"),i(e,"target",b()),i(e,"rel",k()),H(e,t),i(e,"role",n),O(f,`${s()??""} `)},[()=>q(d(),m(),g()),()=>C(c(),l())]),Q(p,e),E(B)}M(["click"]);customElements.define("khao-button",_(P,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{P as T};
