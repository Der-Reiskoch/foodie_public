import{c as g,S as x,i as m,f as v,s as w,a as _,e as f,t as B,b as I,q as b,d as a,j as P,k as r,m as H,n as k,o as Z}from"./svelte-chunk-vhzq62JZ.js";function j(o){_(o,"svelte-3xs0x6",`.button.svelte-3xs0x6{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none;
  }}:host{--khao-button-paypal-height:var(--khao-sys-size-regular-10);--khao-button-paypal-container-shape:var(--khao-sys-shape-corner-medium);--khao-button-paypal-container-color:rgb(255, 209, 64);--khao-button-paypal-state-layer-color:rgb(0, 0, 0);--khao-button-paypal-width:130px;--khao-button-paypal-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-paypal-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-paypal-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}.button.svelte-3xs0x6{min-width:var(--khao-button-paypal-width);height:var(--khao-button-paypal-height);display:inline-flex;align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-paypal-container-shape);background:var(--khao-button-paypal-container-color);text-decoration:none;gap:0.4rem;&:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-button-paypal-container-color),
        var(--khao-button-paypal-state-layer-color)
          var(--khao-button-paypal-hover-state-layer-opacity)
      );
    };&:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-button-paypal-container-color),
        var(--khao-button-paypal-state-layer-color)
          var(--khao-button-paypal-focus-state-layer-opacity)
      );

      outline-offset: 2px;
      outline: 2px solid
        color-mix(
          in srgb,
          var(--khao-button-paypal-container-color),
          var(--khao-button-paypal-state-layer-color)
            var(--khao-button-paypal-focus-state-layer-opacity)
        );
    };&:active {
      background-color: color-mix(
        in srgb,
        var(--khao-button-paypal-container-color),
        var(--khao-button-paypal-state-layer-color)
          var(--khao-button-paypal-pressed-state-layer-opacity)
      );
    }}.text.svelte-3xs0x6{color:transparent;font-family:Arial, Helvetica, sans-serif;background:linear-gradient(to left, #0079c1 50%, #00457c 50%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800;font-size:20px}.icon.svelte-3xs0x6{height:25px;width:25px;margin:0}`)}function q(o){let t,n,l=(o[1]||"PayPal")+"",i,c,e,h,u,y,d;return{c(){t=f("a"),n=f("div"),i=B(l),c=I(),e=b("svg"),h=b("path"),u=b("path"),y=b("path"),a(n,"class","text svelte-3xs0x6"),a(h,"fill","#001C64"),a(h,"d","M37.972 13.82c.107-5.565-4.485-9.837-10.799-9.837H14.115a1.278 1.278 0 0 0-1.262 1.079L7.62 37.758a1.038 1.038 0 0 0 1.025 1.2h7.737l-1.21 7.572a1.038 1.038 0 0 0 1.026 1.2H22.5c.305 0 .576-.11.807-.307.231-.198.269-.471.316-.772l1.85-10.885c.047-.3.2-.69.432-.888.231-.198.433-.306.737-.307H30.5c6.183 0 11.43-4.394 12.389-10.507.678-4.34-1.182-8.287-4.916-10.244Z"),a(u,"fill","#0070E0"),a(u,"d","m18.056 26.9-1.927 12.22-1.21 7.664a1.038 1.038 0 0 0 1.026 1.2h6.67a1.278 1.278 0 0 0 1.261-1.079l1.758-11.14a1.277 1.277 0 0 1 1.261-1.078h3.927c6.183 0 11.429-4.51 12.388-10.623.68-4.339-1.504-8.286-5.238-10.244-.01.462-.05.923-.121 1.38-.959 6.112-6.206 10.623-12.389 10.623h-6.145a1.277 1.277 0 0 0-1.261 1.077Z"),a(y,"fill","#003087"),a(y,"d","M16.128 39.12h-7.76a1.037 1.037 0 0 1-1.025-1.2l5.232-33.182a1.277 1.277 0 0 1 1.262-1.078h13.337c6.313 0 10.905 4.595 10.798 10.16-1.571-.824-3.417-1.295-5.44-1.295H21.413a1.278 1.278 0 0 0-1.261 1.078L18.057 26.9l-1.93 12.22Z"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"fill","none"),a(e,"viewBox","0 0 48 48"),a(e,"class","icon svelte-3xs0x6"),a(t,"href",d="https://www.paypal.com/donate/?hosted_button_id="+o[0]+"&lang=de"),a(t,"title",o[2]),a(t,"target","_blank"),a(t,"class","button svelte-3xs0x6")},m(s,p){P(s,t,p),r(t,n),r(n,i),r(t,c),r(t,e),r(e,h),r(e,u),r(e,y)},p(s,[p]){p&2&&l!==(l=(s[1]||"PayPal")+"")&&H(i,l),p&1&&d!==(d="https://www.paypal.com/donate/?hosted_button_id="+s[0]+"&lang=de")&&a(t,"href",d),p&4&&a(t,"title",s[2])},i:k,o:k,d(s){s&&Z(t)}}}function z(o,t,n){let{hostedButtonId:l}=t,{label:i}=t,{title:c}=t;return o.$$set=e=>{"hostedButtonId"in e&&n(0,l=e.hostedButtonId),"label"in e&&n(1,i=e.label),"title"in e&&n(2,c=e.title)},[l,i,c]}class C extends x{constructor(t){super(),m(this,t,z,q,w,{hostedButtonId:0,label:1,title:2},j)}get hostedButtonId(){return this.$$.ctx[0]}set hostedButtonId(t){this.$$set({hostedButtonId:t}),v()}get label(){return this.$$.ctx[1]}set label(t){this.$$set({label:t}),v()}get title(){return this.$$.ctx[2]}set title(t){this.$$set({title:t}),v()}}customElements.define("khao-button-pay-pal-donate",g(C,{hostedButtonId:{},label:{},title:{}},[],[],!0));
