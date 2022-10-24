(()=>{var m=function(a,t,i,o,s){let r="";return a&&i&&(r=`<a
        href="${a}"
        target="_blank"
        rel="sponsored"
    >
        <img
            src="${i}"
            width="${o||300}"
            height="${s||250}"
            alt="${t||"Werbung"}"
            title="${t||"Werbung"}"
        />
    </a>`),r},n=m;var h={asiafoodland:{url:"https://www.awin1.com/cread.php?s=2406350&v=15939&q=365425&r=1089435",title:"Asiafoodland",imageUrl:"/img/ads/asia_logo_300_250.jpg",imageWidht:"300",imageHeight:"250"},leckerfoods:{url:"https://www.awin1.com/cread.php?s=2982882&v=25730&q=422729&r=1089435",title:"Leckerfoods",imageUrl:"https://www.awin1.com/cshow.php?s=2982882&v=25730&q=422729&r=1089435",imageWidht:"2515",imageHeight:"740"},bwareshop:{url:"https://www.awin1.com/cread.php?s=3188872&v=29787&q=442081&r=1089435",title:"Bwareshop",imageUrl:"https://www.awin1.com/cshow.php?s=3188872&v=29787&q=442081&r=1089435",imageWidht:"300",imageHeight:"250"},fussmattenwelt:{url:"https://www.awin1.com/cread.php?s=2882232&v=23468&q=413155&r=1089435",title:"Fu\xDFmatten-Welt.de",imageUrl:"https://www.awin1.com/cshow.php?s=2882232&v=23468&q=413155&r=1089435",imageWidht:"250",imageHeight:"250"}},d={ads:h};var p=()=>{let a=d.ads,t=Object.keys(a),i=t?t.length:0,o=document.getElementById("awinslot");if(o&&i>0){let s=Math.floor(Math.random()*i),r=t[s],e=a[r];e&&(o.innerHTML=n(e.url,e.title,e.imageUrl,e.imageWidth,e.imageHeight))}};window.addEventListener("load",function(){p()});})();
