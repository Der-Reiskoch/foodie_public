import{c as p,S as x,i as B,f as u,s as N,a as G,e as M,t as W,b as j,d as l,j as S,k as _,l as D,m as I,u as y,v,w as q,o as A,A as E,B as F,C as P,p as R,D as H}from"./svelte-chunk-vhzq62JZ.js";import{I as J}from"./khao-ui-icon-v2.0.0.js";const K="primary";function L(e){G(e,"svelte-17x6tkr",`.button.svelte-17x6tkr{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
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
    }}.button-size-compact.svelte-17x6tkr{min-width:var(--khao-button-width-compact);height:var(--khao-button-height-compact)}.button-size-medium.svelte-17x6tkr{min-width:var(--khao-button-width-medium);height:var(--khao-button-height-medium)}.button-size-large.svelte-17x6tkr{min-width:var(--khao-button-width-large);height:var(--khao-button-height-large)}.button-primary.svelte-17x6tkr{--khao-button-container-color:var(--khao-sys-color-primary);--khao-button-label-text-color:var(--khao-sys-color-on-primary);--khao-button-state-layer-color:var(--khao-sys-color-on-primary)}.button-secondary.svelte-17x6tkr{--khao-button-container-color:var(--khao-sys-color-secondary);--khao-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-17x6tkr{--khao-button-container-color:var(--khao-sys-color-tertiary);--khao-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color:var(--khao-sys-color-on-tertiary)}`)}function C(e){let t,o;return t=new J({props:{iconName:e[10],sizeFactor:"5"}}),{c(){E(t.$$.fragment)},m(r,c){F(t,r,c),o=!0},p(r,c){const h={};c&1024&&(h.iconName=r[10]),t.$set(h)},i(r){o||(y(t.$$.fragment,r),o=!0)},o(r){v(t.$$.fragment,r),o=!1},d(r){P(t,r)}}}function O(e){let t,o,r,c,h,b,m,i,f,g,n=e[10]!==""&&C(e);return{c(){t=M("a"),o=W(e[0]),r=j(),n&&n.c(),l(t,"class",c="button button-"+e[5]+" button-size-"+e[6]+" svelte-17x6tkr"),l(t,"title",e[1]),l(t,"href",h=e[11]===null?e[2]:"javascript:void();"),l(t,"target",e[4]),l(t,"rel",e[3]),l(t,"style",b=z(e[7],e[8],e[9])),l(t,"role",m=w(e[2],e[11]))},m(k,s){S(k,t,s),_(t,o),_(t,r),n&&n.m(t,null),i=!0,f||(g=D(t,"click",function(){R(e[11])&&e[11].apply(this,arguments)}),f=!0)},p(k,[s]){e=k,(!i||s&1)&&I(o,e[0]),e[10]!==""?n?(n.p(e,s),s&1024&&y(n,1)):(n=C(e),n.c(),y(n,1),n.m(t,null)):n&&(H(),v(n,1,1,()=>{n=null}),q()),(!i||s&96&&c!==(c="button button-"+e[5]+" button-size-"+e[6]+" svelte-17x6tkr"))&&l(t,"class",c),(!i||s&2)&&l(t,"title",e[1]),(!i||s&2052&&h!==(h=e[11]===null?e[2]:"javascript:void();"))&&l(t,"href",h),(!i||s&16)&&l(t,"target",e[4]),(!i||s&8)&&l(t,"rel",e[3]),(!i||s&896&&b!==(b=z(e[7],e[8],e[9])))&&l(t,"style",b),(!i||s&2052&&m!==(m=w(e[2],e[11])))&&l(t,"role",m)},i(k){i||(y(n),i=!0)},o(k){v(n),i=!1},d(k){k&&A(t),n&&n.d(),f=!1,g()}}}function z(e,t,o){var r=e!==""&&t!==""?`--khao-button-container-color:${e}; --khao-button-label-text-color:${t}; --khao-button-icon-color: ${t}; --khao-button-state-layer-color: ${t};`:"";return r+=o!==""?`min-width: ${o}`:"",r}function w(e,t){return e===null&&t!==null?"button":""}function Q(e,t,o){let{label:r}=t,{title:c=r}=t,{href:h=null}=t,{rel:b=null}=t,{target:m=null}=t,{priority:i=K}=t,{size:f="medium"}=t,{customBGColor:g=""}=t,{customColor:n=""}=t,{customMinWidth:k=""}=t,{iconName:s=""}=t,{onClick:d=null}=t;return e.$$set=a=>{"label"in a&&o(0,r=a.label),"title"in a&&o(1,c=a.title),"href"in a&&o(2,h=a.href),"rel"in a&&o(3,b=a.rel),"target"in a&&o(4,m=a.target),"priority"in a&&o(5,i=a.priority),"size"in a&&o(6,f=a.size),"customBGColor"in a&&o(7,g=a.customBGColor),"customColor"in a&&o(8,n=a.customColor),"customMinWidth"in a&&o(9,k=a.customMinWidth),"iconName"in a&&o(10,s=a.iconName),"onClick"in a&&o(11,d=a.onClick)},[r,c,h,b,m,i,f,g,n,k,s,d]}class T extends x{constructor(t){super(),B(this,t,Q,O,N,{label:0,title:1,href:2,rel:3,target:4,priority:5,size:6,customBGColor:7,customColor:8,customMinWidth:9,iconName:10,onClick:11},L)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),u()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),u()}get href(){return this.$$.ctx[2]}set href(t){this.$$set({href:t}),u()}get rel(){return this.$$.ctx[3]}set rel(t){this.$$set({rel:t}),u()}get target(){return this.$$.ctx[4]}set target(t){this.$$set({target:t}),u()}get priority(){return this.$$.ctx[5]}set priority(t){this.$$set({priority:t}),u()}get size(){return this.$$.ctx[6]}set size(t){this.$$set({size:t}),u()}get customBGColor(){return this.$$.ctx[7]}set customBGColor(t){this.$$set({customBGColor:t}),u()}get customColor(){return this.$$.ctx[8]}set customColor(t){this.$$set({customColor:t}),u()}get customMinWidth(){return this.$$.ctx[9]}set customMinWidth(t){this.$$set({customMinWidth:t}),u()}get iconName(){return this.$$.ctx[10]}set iconName(t){this.$$set({iconName:t}),u()}get onClick(){return this.$$.ctx[11]}set onClick(t){this.$$set({onClick:t}),u()}}customElements.define("khao-button",p(T,{label:{},title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customMinWidth:{},iconName:{},onClick:{}},[],[],!0));export{T as B};
