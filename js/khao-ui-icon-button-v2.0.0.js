import{c as x,S as N,i as B,f as l,s as w,a as G,e as H,d as c,j,l as I,u as f,v as m,w as S,o as q,A,B as D,C as E,p as F,D as R}from"./svelte-chunk-vhzq62JZ.js";import{I as p}from"./khao-ui-icon-v2.0.0.js";function J(t){G(t,"svelte-9y7ox0",`.button.svelte-9y7ox0{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none;
  }}:host{--khao-icon-button-container-color:var(--khao-sys-color-container);--khao-icon-button-label-text-color:var(--khao-sys-color-on-container);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-container);--khao-icon-button-size-compact:var(--khao-sys-size-regular-10);--khao-icon-button-size-medium:var(--khao-sys-size-regular-12);--khao-icon-button-size-large:var(--khao-sys-size-regular-14);--khao-icon-button-spacing:var(--khao-sys-size-regular-1);--khao-icon-button-container-shape:var(--khao-sys-shape-corner-small);--khao-icon-button-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-icon-button-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-icon-button-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}a.button.svelte-9y7ox0{text-decoration:none}.button.svelte-9y7ox0{display:inline-flex;color:var(--khao-icon-button-label-text-color);background-color:var(--khao-icon-button-container-color);align-items:center;justify-content:center;padding:var(--khao-icon-button-spacing);border-radius:var(--khao-icon-button-container-shape);cursor:pointer;transition:background-color 0.2s,
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

      outline-offset: 2px;
      outline: 2px solid
        color-mix(
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
    }}.button-primary.svelte-9y7ox0{--khao-icon-button-container-color:var(--khao-sys-color-primary);--khao-icon-button-label-text-color:var(--khao-sys-color-on-primary);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-primary)}.button-secondary.svelte-9y7ox0{--khao-icon-button-container-color:var(--khao-sys-color-secondary);--khao-icon-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-9y7ox0{--khao-icon-button-container-color:var(--khao-sys-color-tertiary);--khao-icon-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-icon-button-state-layer-color:var(--khao-sys-color-on-tertiary)}.button-size-compact.svelte-9y7ox0{width:var(--khao-icon-button-size-compact);height:var(--khao-icon-button-size-compact)}.button-size-medium.svelte-9y7ox0{width:var(--khao-icon-button-size-medium);height:var(--khao-icon-button-size-medium)}.button-size-large.svelte-9y7ox0{width:var(--khao-icon-button-size-large);height:var(--khao-icon-button-size-large)}.button-circle.svelte-9y7ox0{--khao-icon-button-container-shape:var(--khao-sys-shape-corner-full)}.button-custom-hover.svelte-9y7ox0{&:hover {
      background-color: var(--khao-icon-button-container-custom-hover-color);
    }}`)}function _(t){let o,e;return o=new p({props:{iconName:t[9],sizeFactor:"9"}}),{c(){A(o.$$.fragment)},m(a,u){D(o,a,u),e=!0},p(a,u){const h={};u&512&&(h.iconName=a[9]),o.$set(h)},i(a){e||(f(o.$$.fragment,a),e=!0)},o(a){m(o.$$.fragment,a),e=!1},d(a){E(o,a)}}}function K(t){let o,e,a,u,h,i,k,y,r=t[9]!==""&&_(t);return{c(){o=H("a"),r&&r.c(),c(o,"class",e="button button-"+t[4]+" button-size-"+t[5]+" "+(t[10]==="true"?"button-circle":"")+" "+(t[8]?"button-custom-hover":"")+" svelte-9y7ox0"),c(o,"title",t[0]),c(o,"href",a=t[11]===null?t[1]:"javascript:void();"),c(o,"target",t[3]),c(o,"rel",t[2]),c(o,"style",u=z(t[6],t[7],t[8])),c(o,"role",h=C(t[1],t[11]))},m(b,s){j(b,o,s),r&&r.m(o,null),i=!0,k||(y=I(o,"click",function(){F(t[11])&&t[11].apply(this,arguments)}),k=!0)},p(b,[s]){t=b,t[9]!==""?r?(r.p(t,s),s&512&&f(r,1)):(r=_(t),r.c(),f(r,1),r.m(o,null)):r&&(R(),m(r,1,1,()=>{r=null}),S()),(!i||s&1328&&e!==(e="button button-"+t[4]+" button-size-"+t[5]+" "+(t[10]==="true"?"button-circle":"")+" "+(t[8]?"button-custom-hover":"")+" svelte-9y7ox0"))&&c(o,"class",e),(!i||s&1)&&c(o,"title",t[0]),(!i||s&2050&&a!==(a=t[11]===null?t[1]:"javascript:void();"))&&c(o,"href",a),(!i||s&8)&&c(o,"target",t[3]),(!i||s&4)&&c(o,"rel",t[2]),(!i||s&448&&u!==(u=z(t[6],t[7],t[8])))&&c(o,"style",u),(!i||s&2050&&h!==(h=C(t[1],t[11])))&&c(o,"role",h)},i(b){i||(f(r),i=!0)},o(b){m(r),i=!1},d(b){b&&q(o),r&&r.d(),k=!1,y()}}}function z(t,o,e){var a=t!==""&&o!==""?`--khao-icon-button-container-color:${t}; --khao-icon-button-label-text-color:${o}; --khao-icon-button-icon-color: ${o}; --khao-icon-button-state-layer-color: ${o}`:"";return e&&(a+=`; --khao-icon-button-container-custom-hover-color: ${e}`),a}function C(t,o){return t===null&&o!==null?"button":""}function L(t,o,e){let{title:a=""}=o,{href:u=null}=o,{rel:h=null}=o,{target:i=null}=o,{priority:k="primary"}=o,{size:y="medium"}=o,{customBGColor:r=""}=o,{customColor:b=""}=o,{customHoverColor:s=""}=o,{iconName:v=""}=o,{circle:g="false"}=o,{onClick:d=null}=o;return t.$$set=n=>{"title"in n&&e(0,a=n.title),"href"in n&&e(1,u=n.href),"rel"in n&&e(2,h=n.rel),"target"in n&&e(3,i=n.target),"priority"in n&&e(4,k=n.priority),"size"in n&&e(5,y=n.size),"customBGColor"in n&&e(6,r=n.customBGColor),"customColor"in n&&e(7,b=n.customColor),"customHoverColor"in n&&e(8,s=n.customHoverColor),"iconName"in n&&e(9,v=n.iconName),"circle"in n&&e(10,g=n.circle),"onClick"in n&&e(11,d=n.onClick)},[a,u,h,i,k,y,r,b,s,v,g,d]}class M extends N{constructor(o){super(),B(this,o,L,K,w,{title:0,href:1,rel:2,target:3,priority:4,size:5,customBGColor:6,customColor:7,customHoverColor:8,iconName:9,circle:10,onClick:11},J)}get title(){return this.$$.ctx[0]}set title(o){this.$$set({title:o}),l()}get href(){return this.$$.ctx[1]}set href(o){this.$$set({href:o}),l()}get rel(){return this.$$.ctx[2]}set rel(o){this.$$set({rel:o}),l()}get target(){return this.$$.ctx[3]}set target(o){this.$$set({target:o}),l()}get priority(){return this.$$.ctx[4]}set priority(o){this.$$set({priority:o}),l()}get size(){return this.$$.ctx[5]}set size(o){this.$$set({size:o}),l()}get customBGColor(){return this.$$.ctx[6]}set customBGColor(o){this.$$set({customBGColor:o}),l()}get customColor(){return this.$$.ctx[7]}set customColor(o){this.$$set({customColor:o}),l()}get customHoverColor(){return this.$$.ctx[8]}set customHoverColor(o){this.$$set({customHoverColor:o}),l()}get iconName(){return this.$$.ctx[9]}set iconName(o){this.$$set({iconName:o}),l()}get circle(){return this.$$.ctx[10]}set circle(o){this.$$set({circle:o}),l()}get onClick(){return this.$$.ctx[11]}set onClick(o){this.$$set({onClick:o}),l()}}customElements.define("khao-icon-button",x(M,{title:{},href:{},rel:{},target:{},priority:{},size:{},customBGColor:{},customColor:{},customHoverColor:{},iconName:{},circle:{},onClick:{}},[],[],!0));export{M as I};
