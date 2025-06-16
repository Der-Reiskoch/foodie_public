import{Z as W,u as N,h as B,n as G,a,q as E,H as j,e as q,$ as H,V as K,W as V,E as l,t as Z,K as F,y as L,c as e,M as O}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.13.0.js";import{b as Q,v as T}from"./khao-ui-svelte-style-4.13.0.js";import{t as _}from"./khao-ui-icon-4.13.0.js";const A="primary";var D=W("<a> <!></a>");const I={hash:"svelte-1fytfux",code:`.button.svelte-1fytfux {appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {outline:none;}}:host {--khao-button-container-color: var(--khao-sys-color-primary);--khao-button-label-text-color: var(--khao-sys-color-on-primary);--khao-button-state-layer-color: var(--khao-sys-color-on-primary);--khao-button-label-font-weight: var(
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
      );}}.button-size-compact.svelte-1fytfux {min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact);}.button-size-medium.svelte-1fytfux {min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium);}.button-size-large.svelte-1fytfux {min-width:var(--khao-button-width-large);height:var(--khao-button-height-large);}.button-secondary.svelte-1fytfux {--khao-button-container-color: var(--khao-sys-color-secondary);--khao-button-label-text-color: var(--khao-sys-color-on-secondary);--khao-button-state-layer-color: var(--khao-sys-color-on-secondary);}.button-tertiary.svelte-1fytfux {--khao-button-container-color: var(--khao-sys-color-tertiary);--khao-button-label-text-color: var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color: var(--khao-sys-color-on-tertiary);}`};function J(d,o){B(o,!1),G(d,I);function z(t,n,x){var w=t!==""&&n!==""?`--khao-button-container-color:${t}; --khao-button-label-text-color:${n}; --khao-button-icon-color: ${n}; --khao-button-state-layer-color: ${n};`:"";return w+=x!==""?`min-width: ${x}`:"",w}function C(t,n){return t===null&&n!==null?"button":""}let i=a(o,"label",12),h=a(o,"title",28,i),u=a(o,"href",12,null),b=a(o,"rel",12,null),k=a(o,"target",12,null),y=a(o,"priority",12,A),v=a(o,"size",12,"medium"),g=a(o,"customBGColor",12,""),p=a(o,"customColor",12,""),m=a(o,"customMinWidth",12,""),c=a(o,"iconName",12,""),s=a(o,"onClick",12,null);var r=D(),f=E(r),$=j(f);{var M=t=>{_(t,{get iconName(){return c()},sizeFactor:"5"})};q($,t=>{c()!==""&&t(M)})}return O(r),K((t,n)=>{Q(r,1,`button button-${y()??""} button-size-${v()??""}`,"svelte-1fytfux"),l(r,"title",h()),l(r,"href",s()===null?u():"javascript:"),l(r,"target",k()),l(r,"rel",b()),T(r,t),l(r,"role",n),Z(f,`${i()??""} `)},[()=>z(g(),p(),m()),()=>C(u(),s())],V),F("click",r,function(...t){var n;(n=s())==null||n.apply(this,t)}),L(d,r),H({get label(){return i()},set label(t){i(t),e()},get title(){return h()},set title(t){h(t),e()},get href(){return u()},set href(t){u(t),e()},get rel(){return b()},set rel(t){b(t),e()},get target(){return k()},set target(t){k(t),e()},get priority(){return y()},set priority(t){y(t),e()},get size(){return v()},set size(t){v(t),e()},get customBGColor(){return g()},set customBGColor(t){g(t),e()},get customColor(){return p()},set customColor(t){p(t),e()},get customMinWidth(){return m()},set customMinWidth(t){m(t),e()},get iconName(){return c()},set iconName(t){c(t),e()},get onClick(){return s()},set onClick(t){s(t),e()}})}customElements.define("khao-button",N(J,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{J as T};
