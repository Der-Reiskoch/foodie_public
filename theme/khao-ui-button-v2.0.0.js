import{v as z,B as w,P as N,J as c,$ as B,g as W,D as G,H as M,w as j,X as l,W as E,K as $,E as K,N as L,i as v,S as p,C as P,R as S,c as q,o as D,e as F,q as H,k as J}from"./svelte-chunk-vhzq62JZ.js";import{u as O}from"./khao-ui-icon-v2.0.0.js";const Q="primary";function R(o){W(o,"svelte-17x6tkr",`.button.svelte-17x6tkr{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none;
  }}:host{--khao-button-container-color:var(--khao-sys-color-container);--khao-button-label-text-color:var(--khao-sys-color-on-container);--khao-button-state-layer-color:var(--khao-sys-color-on-container);--khao-button-label-font-weight:var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-container-shape:var(--khao-sys-shape-corner-medium);--khao-button-leading-space:var(--khao-sys-size-regular-5);--khao-button-trailing-space:var(--khao-sys-size-regular-5);--khao-button-icon-leading-space:var(--khao-sys-size-regular-2);--khao-button-height-compact:var(--khao-sys-size-regular-8);--khao-button-width-compact:80px;--khao-button-height-medium:var(--khao-sys-size-regular-10);--khao-button-width-medium:150px;--khao-button-height-large:var(--khao-sys-size-regular-12);--khao-button-width-large:180px;--khao-button-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}a.button.svelte-17x6tkr{text-decoration:none}.button.svelte-17x6tkr{display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);gap:var(--khao-button-icon-leading-space);transition:background-color 0.1s,
      color 0.2s;&:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-hover-state-layer-opacity)
      );
    };&:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-focus-state-layer-opacity)
      );
      
      outline-offset: 2px;
      outline: 2px solid
        color-mix(
          in srgb,
          var(--khao-button-container-color),
          var(--khao-button-state-layer-color)
            var(--khao-button-focus-state-layer-opacity)
        );
    };&:active {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-pressed-state-layer-opacity)
      );
    }}.button-size-compact.svelte-17x6tkr{min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact)}.button-size-medium.svelte-17x6tkr{min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium)}.button-size-large.svelte-17x6tkr{min-width:var(--khao-button-width-large);height:var(--khao-button-height-large)}.button-primary.svelte-17x6tkr{--khao-button-container-color:var(--khao-sys-color-primary);--khao-button-label-text-color:var(--khao-sys-color-on-primary);--khao-button-state-layer-color:var(--khao-sys-color-on-primary)}.button-secondary.svelte-17x6tkr{--khao-button-container-color:var(--khao-sys-color-secondary);--khao-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-17x6tkr{--khao-button-container-color:var(--khao-sys-color-tertiary);--khao-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color:var(--khao-sys-color-on-tertiary)}`)}function x(o){let t,r;return t=new O({props:{iconName:o[10],sizeFactor:"5"}}),{c(){q(t.$$.fragment)},m(n,u){D(t,n,u),r=!0},p(n,u){const h={};u&1024&&(h.iconName=n[10]),t.$set(h)},i(n){r||(v(t.$$.fragment,n),r=!0)},o(n){p(t.$$.fragment,n),r=!1},d(n){F(t,n)}}}function T(o){let t,r,n,u,h,b,m,i,y,g,a=o[10]!==""&&x(o);return{c(){t=G("a"),r=M(o[0]),n=j(),a&&a.c(),l(t,"class",u="button button-"+o[5]+" button-size-"+o[6]+" svelte-17x6tkr"),l(t,"title",o[1]),l(t,"href",h=o[11]===null?o[2]:"javascript:void();"),l(t,"target",o[4]),l(t,"rel",o[3]),l(t,"style",b=f(o[7],o[8],o[9])),l(t,"role",m=C(o[2],o[11]))},m(k,s){E(k,t,s),$(t,r),$(t,n),a&&a.m(t,null),i=!0,y||(g=K(t,"click",function(){H(o[11])&&o[11].apply(this,arguments)}),y=!0)},p(k,[s]){o=k,(!i||s&1)&&L(r,o[0]),o[10]!==""?a?(a.p(o,s),s&1024&&v(a,1)):(a=x(o),a.c(),v(a,1),a.m(t,null)):a&&(J(),p(a,1,1,()=>{a=null}),P()),(!i||s&96&&u!==(u="button button-"+o[5]+" button-size-"+o[6]+" svelte-17x6tkr"))&&l(t,"class",u),(!i||s&2)&&l(t,"title",o[1]),(!i||s&2052&&h!==(h=o[11]===null?o[2]:"javascript:void();"))&&l(t,"href",h),(!i||s&16)&&l(t,"target",o[4]),(!i||s&8)&&l(t,"rel",o[3]),(!i||s&896&&b!==(b=f(o[7],o[8],o[9])))&&l(t,"style",b),(!i||s&2052&&m!==(m=C(o[2],o[11])))&&l(t,"role",m)},i(k){i||(v(a),i=!0)},o(k){p(a),i=!1},d(k){k&&S(t),a&&a.d(),y=!1,g()}}}function f(o,t,r){var n=o!==""&&t!==""?`--khao-button-container-color:${o}; --khao-button-label-text-color:${t}; --khao-button-icon-color: ${t}; --khao-button-state-layer-color: ${t};`:"";return n+=r!==""?`min-width: ${r}`:"",n}function C(o,t){return o===null&&t!==null?"button":""}function X(o,t,r){let{label:n}=t,{title:u=n}=t,{href:h=null}=t,{rel:b=null}=t,{target:m=null}=t,{priority:i=Q}=t,{size:y="medium"}=t,{customBGColor:g=""}=t,{customColor:a=""}=t,{customMinWidth:k=""}=t,{iconName:s=""}=t,{onClick:d=null}=t;return o.$$set=e=>{"label"in e&&r(0,n=e.label),"title"in e&&r(1,u=e.title),"href"in e&&r(2,h=e.href),"rel"in e&&r(3,b=e.rel),"target"in e&&r(4,m=e.target),"priority"in e&&r(5,i=e.priority),"size"in e&&r(6,y=e.size),"customBGColor"in e&&r(7,g=e.customBGColor),"customColor"in e&&r(8,a=e.customColor),"customMinWidth"in e&&r(9,k=e.customMinWidth),"iconName"in e&&r(10,s=e.iconName),"onClick"in e&&r(11,d=e.onClick)},[n,u,h,b,m,i,y,g,a,k,s,d]}class A extends w{constructor(t){super(),N(this,t,X,T,B,{label:0,title:1,href:2,rel:3,target:4,priority:5,size:6,customBGColor:7,customColor:8,customMinWidth:9,iconName:10,onClick:11},R)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),c()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),c()}get href(){return this.$$.ctx[2]}set href(t){this.$$set({href:t}),c()}get rel(){return this.$$.ctx[3]}set rel(t){this.$$set({rel:t}),c()}get target(){return this.$$.ctx[4]}set target(t){this.$$set({target:t}),c()}get priority(){return this.$$.ctx[5]}set priority(t){this.$$set({priority:t}),c()}get size(){return this.$$.ctx[6]}set size(t){this.$$set({size:t}),c()}get customBGColor(){return this.$$.ctx[7]}set customBGColor(t){this.$$set({customBGColor:t}),c()}get customColor(){return this.$$.ctx[8]}set customColor(t){this.$$set({customColor:t}),c()}get customMinWidth(){return this.$$.ctx[9]}set customMinWidth(t){this.$$set({customMinWidth:t}),c()}get iconName(){return this.$$.ctx[10]}set iconName(t){this.$$set({iconName:t}),c()}get onClick(){return this.$$.ctx[11]}set onClick(t){this.$$set({onClick:t}),c()}}customElements.define("khao-button",z(A,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{A as T};
