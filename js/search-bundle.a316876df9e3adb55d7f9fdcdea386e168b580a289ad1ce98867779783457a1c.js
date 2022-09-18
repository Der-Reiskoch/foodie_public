(()=>{var i,l,d,h,m,f,p,g,Ft="https://bebildere-den.reisko.ch",Mt="Leider nichts gefunden",kt="asial\xE4den",Et="asial\xE4den",Ct="ban\xF4i",xt="bittergurke",Ot="bombay",bt="brokkoli",gt="myanmar",ft="kokosnuss",ht="curry",ut="currypaste",ge="enoki",Ee="larb ped",j="fak tong",y="hackfleisch",_="krachai",w="fischso\xDFe",O="fischso\xDFe",x="bohnen",C="hotpot",E="khao pad",k="garnelen",A="kra pao",S="kra pao",M="gaeng",F="gaeng",T="curry",z="kra pao",D="kra pao",N="goong",L="gochujang",R="hotpot",P="lao pot",H="hang lea",I="hang lea",B="khai",V="khanom",$="karlsruhe",W="kra pao",U="shirataki",K="kra pao",q="kra pao",Y="kra pao",G="larb",X="rad na",Q="l\xE1 l\u1ED1t",Z="lahpet",J="larb",ee="massaman",te="massaman",ne="mexikanisch",se="mee",oe="moo",ie="moo grob",ae="nam tok",re="nor mai",ce="nuea",le="nuea",de="aubergin",ue="pad thai",he="pak choi",me="pak choi",fe="pak choi",pe="palabok",v="panaeng",ve="panaeng",be="panaeng",je="som tam",ye="pekingente",_e="phed",we="plaa",Oe="plaa muek",xe="plaa muek",Ce="rad na",b="rad na",ke="rad na",Ae="nudeln",Se="rhein wok",Me="tteokbokki",Fe="shabu",Te="shakshuka",ze="sichuan",De="som tam",Ne="soja",Le="tintenfisch",Re="lahpet",Pe="thaiwiese",He="thaiwiese",Ie="talee",Be="tom kha",Ve="woon sen",$e="larb nuea",We="yam woon",Ue="yam",u={"asia shop":kt,asiashop:Et,banoi:Ct,bittermelone:xt,bombai:Ot,broccoli:bt,burma:gt,coconut:ft,currygericht:ht,"curry paste":ut,enokipilze:ge,entensalat:Ee,"fak thong":j,faschiertes:y,fingerwurz:_,fischsauce:w,fishsauce:O,fisolen:x,fondue:C,"fried rice":E,gambas:k,gaprau:A,"ga prau":S,geang:M,g\u00E4ng:F,gem\u00FCsecurry:T,grapau:z,"gra pau":D,gung:N,gochuyang:L,"hot pot":R,huad:P,"hang lay":H,"hung lay":I,kai:B,kanom:V,karlrsruhe:$,"ka prao":W,"konjak nudeln":U,krapao:K,krapau:q,krapow:Y,laab:G,ladna:X,"la lot":Q,laphet:Z,larp:J,masaman:ee,massamann:te,mexico:ne,"mii ":se,muu:oe,"moo krob":ie,namtok:ae,normai:re,n\u00FCa:ce,nuae:le,obergin:de,padthai:ue,"pak choy":he,pakchoy:me,pakchoi:fe,palabog:pe,panang:v,pan\u00E4ng:ve,paneng:be,"papaya salat":je,"peking ente":ye,phet:_e,pla:we,"plaa muk":Oe,"plaa m\xFCk":xe,radna:Ce,"rat na":b,ratna:ke,reisnudeln:Ae,rheinwok:Se,"rice cake":Me,schabu:Fe,shakshouka:Te,szechuan:ze,somtam:De,soya:Ne,squid:Le,teesalat:Re,"thai park":Pe,thaipark:He,thalee:Ie,"tom kah":Be,woonsen:Ve,"yam nuea sap":$e,yamwoon:We,yum:Ue},Ke={url:"/dies-und-das/",display:"Dies und das"},qe={url:"/getranke/",display:"Getr\xE4nke"},Ye={url:"/insirationen/",display:"Inspirationen"},Ge={url:"/mittagspause/",display:"Mittagspause"},Xe={url:"/ausprobiert/",display:"Ausprobiert"},Qe={url:"/reisen/",display:"Reisen"},Ze={url:"/restaurants/",display:"Restaurants"},Je={url:"/rezepte/",display:"Rezepte"},et={url:"/utensilien/",display:"Utensilien"},tt={url:"/zutaten/",display:"Zutaten"},nt={die:Ke,get:qe,ins:Ye,mit:Ge,aus:Xe,rei:Qe,res:Ze,rez:Je,ute:et,zut:tt},st=`<img
    src="/svg/sprites/meta-sprite.svg#author"
    alt="Jens"
    title="Jens"
    class="meta__icon icon-author"
    width="18"
    height="18"
/>`,ot=`<img
    src="/svg/sprites/meta-sprite.svg#category"
    alt="Kategorie"
    title="Kategorie"
    class="meta__icon icon-category"
    width="18"
    height="18"
/>`,it=`<img
    src="/svg/sprites/meta-sprite.svg#date"
    alt="Datum"
    title="Datum"
    class="meta__icon icon-date"
    width="18"
    height="18"
/>`,at={author:st,category:ot,time:it},o=at;function rt(e,t){let n={url:"",display:""};return t.hasOwnProperty(e)&&(n=t[e]),n}d=rt;function ct(e){var t="";if(e){let n=d(e.toLowerCase(),nt);n.url!==""&&n.display!==""&&(t=`<div class="meta__item-categories meta__item">${o.category}<span class="meta__text"><a class="meta__link" href="${n.url}" rel="category" title="Kategorie ${n.display}">${n.display}</a>
                    </span></div>`)}return t}l=ct;function lt(e,t,n,s){var o=s&&s.toLowerCase()==="ins"&&(e.indexOf("blogs")>-1||e.indexOf("videos")>-1||e.indexOf("gruppen"))?"image__flat js-lazy-img":"js-lazy-img";return`<figure class="list__thumbnail">
    <a href="${e}" tabindex="-1"><img src="/img/lazy-loading.png" data-src="${t}" alt="${n}" title="${n}" class="${o}" /></a>
    </figure>`}i=lt;function dt(){var e=`<div class="list__meta meta"><div class="meta__item-author meta__item">${o.author}<span class="meta__text"><a class="meta__link" href="/info/ueber-mich/">Jens</a></span></div>`;return e}g=dt,p="01.01.0001";function mt(e){let t=e!==p?e:"05.01.2021";return`<div class="meta__item-datetime meta__item">${o.time}<time class="meta__text" datetime="">${t}</time></div>`}f=mt;function pt(e,t,n,s,o){return`<header class="list__header">    
    <h2 class="list__title post__title ">
    <a href="${t}">${e}</a>
    </h2>
    ${n}
    ${s}
    ${o}
    </header>`}m=pt;function vt(e){var t="";return e&&(t=`<div class="content list__excerpt post__content clearfix">${e}</div>`),t}h=vt;function jt(e,t){return`<div class="list__content">
    ${e}${t}
    </div>`}var t,n,s,yt=jt,_t=function(e,t){let n="";return e&&t&&(n=`<div class="list__item post">
        ${e}${t}
        </div>`),n},wt=_t,e=null,r=[],At=Ft,St=20;function a(t){var s=n.value,o=0;if(t.length>0){e.innerHTML="";let n="";t.forEach(e=>{var t,a=e.ref;if((s==="alle"||a.indexOf("/"+s+"/")>-1)&&o++<=St){t=r[e.ref];let s=i(a,At+t.image,t.title,t.category),o=g(),c=f(t.date),d=l(t.category),u=m(t.title,a,o,c,d),p=h(t.summary),v=yt(u,p);n+=wt(s,v)}}),e.innerHTML=n,lazyLoadImages!==void 0&&lazyLoadImages()}o===0&&(e.innerHTML='<p class="search__no-results">'+Mt+"</p>")}function c(e){var t=e?e.toLowerCase():"",n=new RegExp(Object.keys(u).join("|"),"gi"),t=t.replace(n,function(e){return u[e]}),s=t.length<5?"*":"~0.2";return t=t+s,t}function Tt(){if(i=window.location.search,i&&URLSearchParams!==void 0){var i,l,e=new URLSearchParams(i),o="",r="";e.has("q")&&(o=e.get("q"),t.value=o),e.has("s")&&(r=e.get("s"),n.value=r),o&&(l=s.search(c(o)),a(l))}}function zt(){Tt(),t.onkeyup=function(){var i,o=t.value;n.value==="id"?o!==""&&typeof!isNaN(o)&&o.length===4?document.location.href="/suchen/id/?e="+parseInt(o,10):e.innerHTML="Bitte vierstellige ID eingeben (z.B. 0333)":o!==""&&o.length>=3?(i=s.search(c(o)),a(i)):e.innerHTML=""},t.focus(),t.placeholder=""}function Dt(){t=document.getElementById("search-input"),n=document.getElementById("search-sections"),e=document.getElementById("search-results"),fetch("/index.json",{method:"get"}).then(e=>e.json()).then(e=>{s=lunr(function(){this.ref("u"),this.field("t",{boost:20}),this.field("s",{boost:10}),this.field("ts"),e.forEach(function(e){this.add(e),r[e.u]={title:e.t,summary:e.s,date:e.d,tags:e.t,category:e.c,image:e.i}},this)}),zt()}).catch(t=>{e.innerHTML=`<p>${t}</p>`})}window.addEventListener("load",function(){Dt()})})()