import{Y as B,J as G,e as J,h as M,K as a,S as W,N as O,D as T,B as j,l as D,n as K,k as S,G as X,X as r,T as Y}from"./svelte-chunk-ekTI-Bhm.js";import{O as _,i}from"./svelte-chunk-D7ZEBFxW.js";import{_ as E}from"./svelte-chunk-Drg5G415.js";import{a as F}from"./svelte-chunk-yaEL7nV9.js";import{J as L}from"./khao-ui-icon-4.4.2.js";const Q="primary";var q=B("<a> <!></a>");const A={hash:"svelte-1fytfux",code:`.button.svelte-1fytfux {appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {outline:none;}}:host {--khao-button-container-color: var(--khao-sys-color-primary);--khao-button-label-text-color: var(--khao-sys-color-on-primary);--khao-button-state-layer-color: var(--khao-sys-color-on-primary);--khao-button-label-font-weight: var(
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
      );}}.button-size-compact.svelte-1fytfux {min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact);}.button-size-medium.svelte-1fytfux {min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium);}.button-size-large.svelte-1fytfux {min-width:var(--khao-button-width-large);height:var(--khao-button-height-large);}.button-secondary.svelte-1fytfux {--khao-button-container-color: var(--khao-sys-color-secondary);--khao-button-label-text-color: var(--khao-sys-color-on-secondary);--khao-button-state-layer-color: var(--khao-sys-color-on-secondary);}.button-tertiary.svelte-1fytfux {--khao-button-container-color: var(--khao-sys-color-tertiary);--khao-button-label-text-color: var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color: var(--khao-sys-color-on-tertiary);}`};function H(d,o){J(o,!1),M(d,A);function z(t,n,x){var w=t!==""&&n!==""?`--khao-button-container-color:${t}; --khao-button-label-text-color:${n}; --khao-button-icon-color: ${n}; --khao-button-state-layer-color: ${n};`:"";return w+=x!==""?`min-width: ${x}`:"",w}function C(t,n){return t===null&&n!==null?"button":""}let l=a(o,"label",12),h=a(o,"title",28,l),u=a(o,"href",12,null),b=a(o,"rel",12,null),k=a(o,"target",12,null),y=a(o,"priority",12,Q),v=a(o,"size",12,"medium"),g=a(o,"customBGColor",12,""),m=a(o,"customColor",12,""),p=a(o,"customMinWidth",12,""),c=a(o,"iconName",12,""),s=a(o,"onClick",12,null);var e=q(),f=W(e),$=O(f);{var N=t=>{L(t,{get iconName(){return c()},sizeFactor:"5"})};_($,t=>{c()!==""&&t(N)})}return Y(e),T((t,n)=>{E(e,1,`button button-${y()??""} button-size-${v()??""}`,"svelte-1fytfux"),i(e,"title",h()),i(e,"href",s()===null?u():"javascript:void();"),i(e,"target",k()),i(e,"rel",b()),F(e,t),i(e,"role",n),X(f,`${l()??""} `)},[()=>z(g(),m(),p()),()=>C(u(),s())],S),j("click",e,function(...t){var n;(n=s())==null||n.apply(this,t)}),D(d,e),K({get label(){return l()},set label(t){l(t),r()},get title(){return h()},set title(t){h(t),r()},get href(){return u()},set href(t){u(t),r()},get rel(){return b()},set rel(t){b(t),r()},get target(){return k()},set target(t){k(t),r()},get priority(){return y()},set priority(t){y(t),r()},get size(){return v()},set size(t){v(t),r()},get customBGColor(){return g()},set customBGColor(t){g(t),r()},get customColor(){return m()},set customColor(t){m(t),r()},get customMinWidth(){return p()},set customMinWidth(t){p(t),r()},get iconName(){return c()},set iconName(t){c(t),r()},get onClick(){return s()},set onClick(t){s(t),r()}})}customElements.define("khao-button",G(H,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{H as T};
