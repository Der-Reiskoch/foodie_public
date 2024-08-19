import{c as d,S as N,i as B,f as h,s as G,a as H,e as z,d as s,g as w,w as I,k as f,l as m,m as S,n as q,o as j,p as E,q as F,y as R,r as p}from"./index.js";import{I as A}from"./Icon.js";function D(t){H(t,"svelte-c3hiu3",`.button.svelte-c3hiu3{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none !important;
  }}:host{--khao-icon-button-container-color:var(--khao-sys-color-container);--khao-icon-button-label-text-color:var(--khao-sys-color-on-container);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-container);--khao-icon-button-size:var(--khao-sys-size-regular-14);--khao-icon-button-container-shape:var( --khao-sys-shape-corner-small);--khao-icon-button-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-icon-button-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-icon-button-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}a.button.svelte-c3hiu3{text-decoration:none}.button.svelte-c3hiu3{display:inline-flex;color:var(--khao-icon-button-label-text-color);background-color:var(--khao-icon-button-container-color);width:var(--khao-icon-button-size);height:var(--khao-icon-button-size);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-icon-button-container-shape);cursor:pointer;transition:background-color 0.2s,
      color 0.2s;&:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-icon-button-container-color),
        var(--khao-icon-button-state-layer-color)
          var(--khao-icon-button-hover-state-layer-opacity)
      );
    };&:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-icon-button-container-color),
        var(--khao-icon-button-state-layer-color)
          var(--khao-icon-button-focus-state-layer-opacity)
      );
    };&:active {
      background-color: color-mix(
        in srgb,
        var(--khao-icon-button-container-color),
        var(--khao-icon-button-state-layer-color)
          var(--khao-icon-button-pressed-state-layer-opacity)
      );
    }}.button-primary.svelte-c3hiu3{--khao-icon-button-container-color:var(--khao-sys-color-primary);--khao-icon-button-label-text-color:var(--khao-sys-color-on-primary);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-primary)}.button-secondary.svelte-c3hiu3{--khao-icon-button-container-color:var(--khao-sys-color-secondary);--khao-icon-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-c3hiu3{--khao-icon-button-container-color:var(--khao-sys-color-tertiary);--khao-icon-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-tertiary)}.button-custom-hover.svelte-c3hiu3{&:hover {
      background-color: var(--khao-icon-button-container-custom-hover-color);
    }}`)}function g(t){let o,e;return o=new A({props:{iconName:t[8],sizeFactor:"9"}}),{c(){j(o.$$.fragment)},m(r,l){E(o,r,l),e=!0},p(r,l){const i={};l&256&&(i.iconName=r[8]),o.$set(i)},i(r){e||(f(o.$$.fragment,r),e=!0)},o(r){m(o.$$.fragment,r),e=!1},d(r){F(o,r)}}}function J(t){let o,e,r,l,i,k,b,n=t[8]!==""&&g(t);return{c(){o=z("a"),n&&n.c(),s(o,"class",e="button button-"+t[4]+" "+(t[7]?"button-custom-hover":"")+" svelte-c3hiu3"),s(o,"title",t[0]),s(o,"href",t[1]),s(o,"target",t[3]),s(o,"rel",t[2]),s(o,"style",r=C(t[5],t[6],t[7])),s(o,"role",l=_(t[1],t[9]))},m(u,c){w(u,o,c),n&&n.m(o,null),i=!0,k||(b=I(o,"click",function(){R(t[9])&&t[9].apply(this,arguments)}),k=!0)},p(u,[c]){t=u,t[8]!==""?n?(n.p(t,c),c&256&&f(n,1)):(n=g(t),n.c(),f(n,1),n.m(o,null)):n&&(p(),m(n,1,1,()=>{n=null}),S()),(!i||c&144&&e!==(e="button button-"+t[4]+" "+(t[7]?"button-custom-hover":"")+" svelte-c3hiu3"))&&s(o,"class",e),(!i||c&1)&&s(o,"title",t[0]),(!i||c&2)&&s(o,"href",t[1]),(!i||c&8)&&s(o,"target",t[3]),(!i||c&4)&&s(o,"rel",t[2]),(!i||c&224&&r!==(r=C(t[5],t[6],t[7])))&&s(o,"style",r),(!i||c&514&&l!==(l=_(t[1],t[9])))&&s(o,"role",l)},i(u){i||(f(n),i=!0)},o(u){m(n),i=!1},d(u){u&&q(o),n&&n.d(),k=!1,b()}}}function C(t,o,e){var r=t!==""&&o!==""?`--khao-icon-button-container-color:${t}; --khao-icon-button-label-text-color:${o}; --khao-icon-button-icon-color: ${o}; --khao-icon-button-state-layer-color: ${o}`:"";return e&&(r+=`; --khao-icon-button-container-custom-hover-color: ${e}`),r}function _(t,o){return t===null&&o!==null?"button":""}function K(t,o,e){let{title:r=""}=o,{href:l=null}=o,{rel:i=null}=o,{target:k=null}=o,{priority:b="primary"}=o,{customBGColor:n=""}=o,{customColor:u=""}=o,{customHoverColor:c=""}=o,{iconName:y=""}=o,{onClick:v=null}=o;return t.$$set=a=>{"title"in a&&e(0,r=a.title),"href"in a&&e(1,l=a.href),"rel"in a&&e(2,i=a.rel),"target"in a&&e(3,k=a.target),"priority"in a&&e(4,b=a.priority),"customBGColor"in a&&e(5,n=a.customBGColor),"customColor"in a&&e(6,u=a.customColor),"customHoverColor"in a&&e(7,c=a.customHoverColor),"iconName"in a&&e(8,y=a.iconName),"onClick"in a&&e(9,v=a.onClick)},[r,l,i,k,b,n,u,c,y,v]}class L extends N{constructor(o){super(),B(this,o,K,J,G,{title:0,href:1,rel:2,target:3,priority:4,customBGColor:5,customColor:6,customHoverColor:7,iconName:8,onClick:9},D)}get title(){return this.$$.ctx[0]}set title(o){this.$$set({title:o}),h()}get href(){return this.$$.ctx[1]}set href(o){this.$$set({href:o}),h()}get rel(){return this.$$.ctx[2]}set rel(o){this.$$set({rel:o}),h()}get target(){return this.$$.ctx[3]}set target(o){this.$$set({target:o}),h()}get priority(){return this.$$.ctx[4]}set priority(o){this.$$set({priority:o}),h()}get customBGColor(){return this.$$.ctx[5]}set customBGColor(o){this.$$set({customBGColor:o}),h()}get customColor(){return this.$$.ctx[6]}set customColor(o){this.$$set({customColor:o}),h()}get customHoverColor(){return this.$$.ctx[7]}set customHoverColor(o){this.$$set({customHoverColor:o}),h()}get iconName(){return this.$$.ctx[8]}set iconName(o){this.$$set({iconName:o}),h()}get onClick(){return this.$$.ctx[9]}set onClick(o){this.$$set({onClick:o}),h()}}customElements.define("khao-icon-button",d(L,{title:{},href:{},rel:{},target:{},priority:{},customBGColor:{},customColor:{},customHoverColor:{},iconName:{},onClick:{}},[],[],!0));export{L as I};
