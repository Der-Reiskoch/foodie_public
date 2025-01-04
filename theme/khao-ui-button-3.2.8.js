import{B as z,M as w,v as j,J as c,$ as q,g as B,D as N,H as M,w as W,X as l,W as G,K as $,E,N as K,i as p,c as v,L,R as P,P as D,o as F,e as H,q as J,C as O}from"./svelte-chunk-D9KZ3qjS.js";import{B as Q}from"./khao-ui-icon-3.2.8.js";const R="primary";function S(o){B(o,"svelte-ig2q2j",`.button.svelte-ig2q2j{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none;
  }}:host{--khao-button-container-color:var(--khao-sys-color-primary);--khao-button-label-text-color:var(--khao-sys-color-on-primary);--khao-button-state-layer-color:var(--khao-sys-color-on-primary);--khao-button-label-font-weight:var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-container-shape:var(--khao-sys-shape-corner-small);--khao-button-leading-space:var(--khao-sys-size-regular-5);--khao-button-trailing-space:var(--khao-sys-size-regular-5);--khao-button-icon-leading-space:var(--khao-sys-size-regular-2);--khao-button-height-compact:var(--khao-sys-size-regular-8);--khao-button-width-compact:80px;--khao-button-height-medium:var(--khao-sys-size-regular-10);--khao-button-width-medium:150px;--khao-button-height-large:var(--khao-sys-size-regular-12);--khao-button-width-large:180px;--khao-button-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}a.button.svelte-ig2q2j{text-decoration:none}.button.svelte-ig2q2j{display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);gap:var(--khao-button-icon-leading-space);transition:background-color 0.1s,
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
    }}.button-size-compact.svelte-ig2q2j{min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact)}.button-size-medium.svelte-ig2q2j{min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium)}.button-size-large.svelte-ig2q2j{min-width:var(--khao-button-width-large);height:var(--khao-button-height-large)}.button-secondary.svelte-ig2q2j{--khao-button-container-color:var(--khao-sys-color-secondary);--khao-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-ig2q2j{--khao-button-container-color:var(--khao-sys-color-tertiary);--khao-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color:var(--khao-sys-color-on-tertiary)}`)}function f(o){let t,r;return t=new Q({props:{iconName:o[10],sizeFactor:"5"}}),{c(){D(t.$$.fragment)},m(i,u){F(t,i,u),r=!0},p(i,u){const h={};u&1024&&(h.iconName=i[10]),t.$set(h)},i(i){r||(p(t.$$.fragment,i),r=!0)},o(i){v(t.$$.fragment,i),r=!1},d(i){H(t,i)}}}function T(o){let t,r,i,u,h,k,g,n,m,y,a=o[10]!==""&&f(o);return{c(){t=N("a"),r=M(o[0]),i=W(),a&&a.c(),l(t,"class",u="button button-"+o[5]+" button-size-"+o[6]+" svelte-ig2q2j"),l(t,"title",o[1]),l(t,"href",h=o[11]===null?o[2]:"javascript:void();"),l(t,"target",o[4]),l(t,"rel",o[3]),l(t,"style",k=x(o[7],o[8],o[9])),l(t,"role",g=C(o[2],o[11]))},m(b,s){G(b,t,s),$(t,r),$(t,i),a&&a.m(t,null),n=!0,m||(y=E(t,"click",function(){J(o[11])&&o[11].apply(this,arguments)}),m=!0)},p(b,[s]){o=b,(!n||s&1)&&K(r,o[0]),o[10]!==""?a?(a.p(o,s),s&1024&&p(a,1)):(a=f(o),a.c(),p(a,1),a.m(t,null)):a&&(O(),v(a,1,1,()=>{a=null}),L()),(!n||s&96&&u!==(u="button button-"+o[5]+" button-size-"+o[6]+" svelte-ig2q2j"))&&l(t,"class",u),(!n||s&2)&&l(t,"title",o[1]),(!n||s&2052&&h!==(h=o[11]===null?o[2]:"javascript:void();"))&&l(t,"href",h),(!n||s&16)&&l(t,"target",o[4]),(!n||s&8)&&l(t,"rel",o[3]),(!n||s&896&&k!==(k=x(o[7],o[8],o[9])))&&l(t,"style",k),(!n||s&2052&&g!==(g=C(o[2],o[11])))&&l(t,"role",g)},i(b){n||(p(a),n=!0)},o(b){v(a),n=!1},d(b){b&&P(t),a&&a.d(),m=!1,y()}}}function x(o,t,r){var i=o!==""&&t!==""?`--khao-button-container-color:${o}; --khao-button-label-text-color:${t}; --khao-button-icon-color: ${t}; --khao-button-state-layer-color: ${t};`:"";return i+=r!==""?`min-width: ${r}`:"",i}function C(o,t){return o===null&&t!==null?"button":""}function X(o,t,r){let{label:i}=t,{title:u=i}=t,{href:h=null}=t,{rel:k=null}=t,{target:g=null}=t,{priority:n=R}=t,{size:m="medium"}=t,{customBGColor:y=""}=t,{customColor:a=""}=t,{customMinWidth:b=""}=t,{iconName:s=""}=t,{onClick:d=null}=t;return o.$$set=e=>{"label"in e&&r(0,i=e.label),"title"in e&&r(1,u=e.title),"href"in e&&r(2,h=e.href),"rel"in e&&r(3,k=e.rel),"target"in e&&r(4,g=e.target),"priority"in e&&r(5,n=e.priority),"size"in e&&r(6,m=e.size),"customBGColor"in e&&r(7,y=e.customBGColor),"customColor"in e&&r(8,a=e.customColor),"customMinWidth"in e&&r(9,b=e.customMinWidth),"iconName"in e&&r(10,s=e.iconName),"onClick"in e&&r(11,d=e.onClick)},[i,u,h,k,g,n,m,y,a,b,s,d]}class A extends w{constructor(t){super(),j(this,t,X,T,q,{label:0,title:1,href:2,rel:3,target:4,priority:5,size:6,customBGColor:7,customColor:8,customMinWidth:9,iconName:10,onClick:11},S)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),c()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),c()}get href(){return this.$$.ctx[2]}set href(t){this.$$set({href:t}),c()}get rel(){return this.$$.ctx[3]}set rel(t){this.$$set({rel:t}),c()}get target(){return this.$$.ctx[4]}set target(t){this.$$set({target:t}),c()}get priority(){return this.$$.ctx[5]}set priority(t){this.$$set({priority:t}),c()}get size(){return this.$$.ctx[6]}set size(t){this.$$set({size:t}),c()}get customBGColor(){return this.$$.ctx[7]}set customBGColor(t){this.$$set({customBGColor:t}),c()}get customColor(){return this.$$.ctx[8]}set customColor(t){this.$$set({customColor:t}),c()}get customMinWidth(){return this.$$.ctx[9]}set customMinWidth(t){this.$$set({customMinWidth:t}),c()}get iconName(){return this.$$.ctx[10]}set iconName(t){this.$$set({iconName:t}),c()}get onClick(){return this.$$.ctx[11]}set onClick(t){this.$$set({onClick:t}),c()}}customElements.define("khao-button",z(A,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{A as T};
