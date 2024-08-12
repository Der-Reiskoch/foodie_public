import{c as k,S as f,i as v,f as h,s as d,a as g,e as m,t as p,b as w,d as i,g as x,h as b,j as _,n as u,k as z}from"./index-v0.0.2.js";function q(a){g(a,"svelte-1owqyzw",`.button.svelte-1owqyzw{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none !important;
  }}:host{--khao-button-container-color:var(--khao-sys-color-container);--khao-button-label-text-color:var(--khao-sys-color-on-container);--khao-button-state-layer-color:var(--khao-sys-color-on-container);--khao-button-label-font-weight:var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-height:var(--khao-sys-size-regular-10);--khao-button-container-shape:var(--khao-sys-shape-corner-medium);--khao-button-leading-space:var(--khao-sys-size-regular-5);--khao-button-trailing-space:var(--khao-sys-size-regular-5);--khao-button-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}a.button.svelte-1owqyzw{text-decoration:none}.button.svelte-1owqyzw{display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);min-width:150px;height:var(--khao-button-height, 40px);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding:0.2rem;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);transition:background-color 0.1s,
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
    };&:active {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-pressed-state-layer-opacity)
      );
    }}.button-primary.svelte-1owqyzw{--khao-button-container-color:var(--khao-sys-color-primary);--khao-button-label-text-color:var(--khao-sys-color-on-primary);--khao-button-state-layer-color:var(--khao-sys-color-on-primary)}.button-secondary.svelte-1owqyzw{--khao-button-container-color:var(--khao-sys-color-secondary);--khao-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-1owqyzw{--khao-button-container-color:var(--khao-sys-color-tertiary);--khao-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color:var(--khao-sys-color-on-tertiary)}`)}function y(a){return{c:u,m:u,d:u}}function j(a){let t,n,c,l,o=a[4]!==""&&y();return{c(){t=m("a"),n=p(a[0]),c=w(),o&&o.c(),i(t,"class",l="button button-"+a[3]+" svelte-1owqyzw"),i(t,"title",a[1]),i(t,"href",a[2])},m(e,s){x(e,t,s),b(t,n),b(t,c),o&&o.m(t,null)},p(e,[s]){s&1&&_(n,e[0]),e[4]!==""?o||(o=y(),o.c(),o.m(t,null)):o&&(o.d(1),o=null),s&8&&l!==(l="button button-"+e[3]+" svelte-1owqyzw")&&i(t,"class",l),s&2&&i(t,"title",e[1]),s&4&&i(t,"href",e[2])},i:u,o:u,d(e){e&&z(t),o&&o.d()}}}function S(a,t,n){let{label:c}=t,{title:l}=t,{href:o}=t,{prioritry:e="primary"}=t,{icon:s=""}=t;return a.$$set=r=>{"label"in r&&n(0,c=r.label),"title"in r&&n(1,l=r.title),"href"in r&&n(2,o=r.href),"prioritry"in r&&n(3,e=r.prioritry),"icon"in r&&n(4,s=r.icon)},[c,l,o,e,s]}class B extends f{constructor(t){super(),v(this,t,S,j,d,{label:0,title:1,href:2,prioritry:3,icon:4},q)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),h()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),h()}get href(){return this.$$.ctx[2]}set href(t){this.$$set({href:t}),h()}get prioritry(){return this.$$.ctx[3]}set prioritry(t){this.$$set({prioritry:t}),h()}get icon(){return this.$$.ctx[4]}set icon(t){this.$$set({icon:t}),h()}}customElements.define("khao-button",k(B,{label:{},title:{},href:{},prioritry:{},icon:{}},[],[],!0));
