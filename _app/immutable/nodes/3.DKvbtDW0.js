import{s as lt,a as qi,u as Zi,g as Vi,b as Ui,n as V,o as Xl,x as it}from"../chunks/scheduler.BeaK0CkN.js";import{S as ht,i as ct,e as E,c as L,h as N,f as o,b as A,d as f,m as _,n as x,r as Ql,p as th,z as Yl,t as r,v as k,j as l,w as I,k as p,x as j,y as M,l as lr,s as P,a as C,g as U,A as eh,B as nh}from"../chunks/index.BmRq3wWf.js";import{b as Q}from"../chunks/paths.BxA-jZLD.js";const ih=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ga(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function ah(c){let e,t,i;const s=c[4].default,a=qi(s,c,c[3],null);return{c(){e=E("a"),a&&a.c(),this.h()},l(h){e=L(h,"A",{href:!0,class:!0,target:!0,rel:!0});var m=N(e);a&&a.l(m),m.forEach(o),this.h()},h(){A(e,"href",c[0]),A(e,"class",t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+c[1]),A(e,"target",c[2]),A(e,"rel","noopener noreferrer")},m(h,m){f(h,e,m),a&&a.m(e,null),i=!0},p(h,[m]){a&&a.p&&(!i||m&8)&&Zi(a,s,h,h[3],i?Ui(s,h[3],m,null):Vi(h[3]),null),(!i||m&1)&&A(e,"href",h[0]),(!i||m&2&&t!==(t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+h[1]))&&A(e,"class",t),(!i||m&4)&&A(e,"target",h[2])},i(h){i||(_(a,h),i=!0)},o(h){x(a,h),i=!1},d(h){h&&o(e),a&&a.d(h)}}}function oh(c,e,t){let{$$slots:i={},$$scope:s}=e,{href:a}=e,{styling:h=""}=e,{target:m="_blank"}=e;return c.$$set=n=>{"href"in n&&t(0,a=n.href),"styling"in n&&t(1,h=n.styling),"target"in n&&t(2,m=n.target),"$$scope"in n&&t(3,s=n.$$scope)},[a,h,m,s,i]}class B extends ht{constructor(e){super(),ct(this,e,oh,ah,lt,{href:0,styling:1,target:2})}}function Ul(c,e,t){const i=c.slice();return i[0]=e[t],i}function sh(c){let e;return{c(){e=r("link")},l(t){e=l(t,"link")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Bl(c){let e,t,i=c[0].author+"",s,a,h,m=c[0].title+"",n,$,y,d=c[0].publisher+"",v,T,b,S=c[0].year+"",q,z,H,Z,O,nt,K,D;return O=new B({props:{href:c[0].link,$$slots:{default:[sh]},$$scope:{ctx:c}}}),{c(){e=E("li"),t=E("span"),s=r(i),a=r(", "),h=E("span"),n=r(m),$=r(`,
			`),y=E("span"),v=r(d),T=r(`,
			`),b=E("span"),q=r(S),z=r(", "),H=E("span"),Z=r("["),k(O.$$.fragment),nt=r("]"),K=r(`.
		`),this.h()},l(F){e=L(F,"LI",{});var J=N(e);t=L(J,"SPAN",{class:!0});var tt=N(t);s=l(tt,i),tt.forEach(o),a=l(J,", "),h=L(J,"SPAN",{});var X=N(h);n=l(X,m),X.forEach(o),$=l(J,`,
			`),y=L(J,"SPAN",{});var ft=N(y);v=l(ft,d),ft.forEach(o),T=l(J,`,
			`),b=L(J,"SPAN",{});var at=N(b);q=l(at,S),at.forEach(o),z=l(J,", "),H=L(J,"SPAN",{});var R=N(H);Z=l(R,"["),I(O.$$.fragment,R),nt=l(R,"]"),R.forEach(o),K=l(J,`.
		`),J.forEach(o),this.h()},h(){A(t,"class","ms-4")},m(F,J){f(F,e,J),p(e,t),p(t,s),p(e,a),p(e,h),p(h,n),p(e,$),p(e,y),p(y,v),p(e,T),p(e,b),p(b,q),p(e,z),p(e,H),p(H,Z),j(O,H,null),p(H,nt),p(e,K),D=!0},p(F,J){const tt={};J&8&&(tt.$$scope={dirty:J,ctx:F}),O.$set(tt)},i(F){D||(_(O.$$.fragment,F),D=!0)},o(F){x(O.$$.fragment,F),D=!1},d(F){F&&o(e),M(O)}}}function rh(c){let e,t,i=ga(pa),s=[];for(let h=0;h<i.length;h+=1)s[h]=Bl(Ul(c,i,h));const a=h=>x(s[h],1,1,()=>{s[h]=null});return{c(){e=E("ol");for(let h=0;h<s.length;h+=1)s[h].c();this.h()},l(h){e=L(h,"OL",{class:!0});var m=N(e);for(let n=0;n<s.length;n+=1)s[n].l(m);m.forEach(o),this.h()},h(){A(e,"class","pl-5 my-2 text-xs list-decimal")},m(h,m){f(h,e,m);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null);t=!0},p(h,[m]){if(m&0){i=ga(pa);let n;for(n=0;n<i.length;n+=1){const $=Ul(h,i,n);s[n]?(s[n].p($,m),_(s[n],1)):(s[n]=Bl($),s[n].c(),_(s[n],1),s[n].m(e,null))}for(Ql(),n=i.length;n<s.length;n+=1)a(n);th()}},i(h){if(!t){for(let m=0;m<i.length;m+=1)_(s[m]);t=!0}},o(h){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)x(s[m]);t=!1},d(h){h&&o(e),Yl(s,h)}}}const wa=c=>{for(let e=0;e<pa.length;e++)if(pa[e].id==c)return{index:e+1,link:pa[e].link};throw new Error},pa=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"oestreicher",author:"Oestreicher C.",title:"A history of chaos theory",publisher:"Dialogues Clin Neurosci.",year:"2007",link:"https://doi.org/10.31887/DCNS.2007.9.3/coestreicher"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"},{id:"chandramoorthy",author:"Nisha Chandramoorthy, QiQi Wang",title:"On the probability of finding nonphysical solutions through shadowing",publisher:"Journal of Computational Physics",year:"1 September 2021",link:"https://doi.org/10.1016/j.jcp.2021.110389"}];class lh extends ht{constructor(e){super(),ct(this,e,null,rh,lt,{})}}function hh(c){let e=wa(c[0]).index+"",t;return{c(){t=r(e)},l(i){t=l(i,e)},m(i,s){f(i,t,s)},p(i,s){s&1&&e!==(e=wa(i[0]).index+"")&&lr(t,e)},d(i){i&&o(t)}}}function ch(c){let e,t,i,s;return t=new B({props:{href:wa(c[0]).link,$$slots:{default:[hh]},$$scope:{ctx:c}}}),{c(){e=r("["),k(t.$$.fragment),i=r("]")},l(a){e=l(a,"["),I(t.$$.fragment,a),i=l(a,"]")},m(a,h){f(a,e,h),j(t,a,h),f(a,i,h),s=!0},p(a,[h]){const m={};h&1&&(m.href=wa(a[0]).link),h&3&&(m.$$scope={dirty:h,ctx:a}),t.$set(m)},i(a){s||(_(t.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),s=!1},d(a){a&&(o(e),o(i)),M(t,a)}}}function fh(c,e,t){let{id:i}=e;return c.$$set=s=>{"id"in s&&t(0,i=s.id)},[i]}class Y extends ht{constructor(e){super(),ct(this,e,fh,ch,lt,{id:0})}}function mh(c){let e,t;const i=c[2].default,s=qi(i,c,c[1],null);return{c(){e=E("div"),s&&s.c(),this.h()},l(a){e=L(a,"DIV",{id:!0,class:!0});var h=N(e);s&&s.l(h),h.forEach(o),this.h()},h(){A(e,"id",c[0]),A(e,"class","text-2xl font-bold text-center my-8")},m(a,h){f(a,e,h),s&&s.m(e,null),t=!0},p(a,[h]){s&&s.p&&(!t||h&2)&&Zi(s,i,a,a[1],t?Ui(i,a[1],h,null):Vi(a[1]),null),(!t||h&1)&&A(e,"id",a[0])},i(a){t||(_(s,a),t=!0)},o(a){x(s,a),t=!1},d(a){a&&o(e),s&&s.d(a)}}}function uh(c,e,t){let{$$slots:i={},$$scope:s}=e,{id:a}=e;return c.$$set=h=>{"id"in h&&t(0,a=h.id),"$$scope"in h&&t(1,s=h.$$scope)},[a,s,i]}class Di extends ht{constructor(e){super(),ct(this,e,uh,mh,lt,{id:0})}}function ph(c){let e,t;const i=c[2].default,s=qi(i,c,c[1],null);return{c(){e=E("div"),s&&s.c(),this.h()},l(a){e=L(a,"DIV",{id:!0,class:!0});var h=N(e);s&&s.l(h),h.forEach(o),this.h()},h(){A(e,"id",c[0]),A(e,"class","text-xl font-medium text-left mt-8 mb-4")},m(a,h){f(a,e,h),s&&s.m(e,null),t=!0},p(a,[h]){s&&s.p&&(!t||h&2)&&Zi(s,i,a,a[1],t?Ui(i,a[1],h,null):Vi(a[1]),null),(!t||h&1)&&A(e,"id",a[0])},i(a){t||(_(s,a),t=!0)},o(a){x(s,a),t=!1},d(a){a&&o(e),s&&s.d(a)}}}function dh(c,e,t){let{$$slots:i={},$$scope:s}=e,{id:a}=e;return c.$$set=h=>{"id"in h&&t(0,a=h.id),"$$scope"in h&&t(1,s=h.$$scope)},[a,s,i]}class Fi extends ht{constructor(e){super(),ct(this,e,dh,ph,lt,{id:0})}}function $h(c){let e,t;const i=c[1].default,s=qi(i,c,c[0],null);return{c(){e=E("div"),s&&s.c(),this.h()},l(a){e=L(a,"DIV",{class:!0});var h=N(e);s&&s.l(h),h.forEach(o),this.h()},h(){A(e,"class","text-lg font-medium text-left ms-4 mt-4 mb-4")},m(a,h){f(a,e,h),s&&s.m(e,null),t=!0},p(a,[h]){s&&s.p&&(!t||h&1)&&Zi(s,i,a,a[0],t?Ui(i,a[0],h,null):Vi(a[0]),null)},i(a){t||(_(s,a),t=!0)},o(a){x(s,a),t=!1},d(a){a&&o(e),s&&s.d(a)}}}function gh(c,e,t){let{$$slots:i={},$$scope:s}=e;return c.$$set=a=>{"$$scope"in a&&t(0,s=a.$$scope)},[s,i]}class Wl extends ht{constructor(e){super(),ct(this,e,gh,$h,lt,{})}}function wh(c){let e,t,i;const s=c[3].default,a=qi(s,c,c[2],null);return{c(){e=E("p"),a&&a.c(),this.h()},l(h){e=L(h,"P",{class:!0});var m=N(e);a&&a.l(m),m.forEach(o),this.h()},h(){A(e,"class",t="my-2 "+c[0]+" "+c[1])},m(h,m){f(h,e,m),a&&a.m(e,null),i=!0},p(h,[m]){a&&a.p&&(!i||m&4)&&Zi(a,s,h,h[2],i?Ui(s,h[2],m,null):Vi(h[2]),null),(!i||m&3&&t!==(t="my-2 "+h[0]+" "+h[1]))&&A(e,"class",t)},i(h){i||(_(a,h),i=!0)},o(h){x(a,h),i=!1},d(h){h&&o(e),a&&a.d(h)}}}function vh(c,e,t){let{$$slots:i={},$$scope:s}=e,{indent:a="indent-8"}=e,{style:h=""}=e;return c.$$set=m=>{"indent"in m&&t(0,a=m.indent),"style"in m&&t(1,h=m.style),"$$scope"in m&&t(2,s=m.$$scope)},[a,h,s,i]}class G extends ht{constructor(e){super(),ct(this,e,vh,wh,lt,{indent:0,style:1})}}function Ol(c,e,t){const i=c.slice();return i[1]=e[t],i}function Kl(c){let e,t,i=c[1].desc+"",s,a,h,m,n=c[1].val+"",$,y;return{c(){e=E("li"),t=E("div"),s=r(i),a=P(),h=E("div"),m=E("span"),$=r(n),y=P(),this.h()},l(d){e=L(d,"LI",{class:!0});var v=N(e);t=L(v,"DIV",{class:!0});var T=N(t);s=l(T,i),T.forEach(o),a=C(v),h=L(v,"DIV",{class:!0});var b=N(h);m=L(b,"SPAN",{class:!0});var S=N(m);$=l(S,n),S.forEach(o),b.forEach(o),y=C(v),v.forEach(o),this.h()},h(){A(t,"class","flex-none w-32 sm:w-64"),A(m,"class","rounded-0.5 p-1 font-mono"),A(h,"class","w-fit flex-wrap"),A(e,"class","flex items-center justify-left")},m(d,v){f(d,e,v),p(e,t),p(t,s),p(e,a),p(e,h),p(h,m),p(m,$),p(e,y)},p(d,v){v&1&&i!==(i=d[1].desc+"")&&lr(s,i),v&1&&n!==(n=d[1].val+"")&&lr($,n)},d(d){d&&o(e)}}}function yh(c){let e,t,i=ga(c[0]),s=[];for(let a=0;a<i.length;a+=1)s[a]=Kl(Ol(c,i,a));return{c(){e=E("section"),t=E("ul");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=L(a,"SECTION",{class:!0});var h=N(e);t=L(h,"UL",{class:!0});var m=N(t);for(let n=0;n<s.length;n+=1)s[n].l(m);m.forEach(o),h.forEach(o),this.h()},h(){A(t,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),A(e,"class","relative block my-4")},m(a,h){f(a,e,h),p(e,t);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(t,null)},p(a,[h]){if(h&1){i=ga(a[0]);let m;for(m=0;m<i.length;m+=1){const n=Ol(a,i,m);s[m]?s[m].p(n,h):(s[m]=Kl(n),s[m].c(),s[m].m(t,null))}for(;m<s.length;m+=1)s[m].d(1);s.length=i.length}},i:V,o:V,d(a){a&&o(e),Yl(s,a)}}}function bh(c,e,t){let{hps:i=[]}=e;return c.$$set=s=>{"hps"in s&&t(0,i=s.hps)},[i]}class rr extends ht{constructor(e){super(),ct(this,e,bh,yh,lt,{hps:0})}}function _h(c){let e,t;const i=c[1].default,s=qi(i,c,c[0],null);return{c(){e=E("figcaption"),s&&s.c(),this.h()},l(a){e=L(a,"FIGCAPTION",{class:!0});var h=N(e);s&&s.l(h),h.forEach(o),this.h()},h(){A(e,"class","text-center text-xs mt-2")},m(a,h){f(a,e,h),s&&s.m(e,null),t=!0},p(a,[h]){s&&s.p&&(!t||h&1)&&Zi(s,i,a,a[0],t?Ui(i,a[0],h,null):Vi(a[0]),null)},i(a){t||(_(s,a),t=!0)},o(a){x(s,a),t=!1},d(a){a&&o(e),s&&s.d(a)}}}function xh(c,e,t){let{$$slots:i={},$$scope:s}=e;return c.$$set=a=>{"$$scope"in a&&t(0,s=a.$$scope)},[s,i]}class et extends ht{constructor(e){super(),ct(this,e,xh,_h,lt,{})}}const{window:kh}=ih;function Ih(c){let e,t='<nav class="border-r-2 sticky top-12"><div><section><ul class="menu"><li><a href="#intro">Intro</a></li> <li><a href="#lorenz">Lorenz Attractor</a></li> <li><a href="#nhits">Neural Architecture</a></li> <li><a href="#experiments">Experiments</a></li> <ul class="text-sm submenu"><li><a href="#datagen">Data Generation</a></li> <li><a href="#model-1">Model 1</a></li> <li><a href="#model-2">Model 2</a></li> <li><a href="#model-3">Model 3</a></li> <li><a href="#arpred">Autoregressive Prediction</a></li></ul> <li><a href="#discussion">Discussion</a></li> <li><a href="#references">References</a></li></ul></section></div></nav>',i,s;return{c(){e=E("aside"),e.innerHTML=t,this.h()},l(a){e=L(a,"ASIDE",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-u7i093"&&(e.innerHTML=t),this.h()},h(){A(e,"class","max-sm:hidden")},m(a,h){f(a,e,h),i||(s=eh(kh,"scroll",c[0]),i=!0)},p:V,i:V,o:V,d(a){a&&o(e),i=!1,s()}}}function jh(c){const e=["intro","lorenz","nhits","experiments","datagen","model-1","model-2","model-3","arpred","discussion","references"],t=["bg-rose-100","rounded"];let i=e[0];const s=n=>{const $="a[href='#"+n+"']";return document.querySelector($)},a=n=>{const $=s(n).parentElement;t.forEach(y=>$.classList.add(y))},h=n=>{const $=s(n).parentElement;t.forEach(y=>$.classList.remove(y))},m=()=>{let n;e.forEach($=>{const y=document.getElementById($);window.scrollY>=y.offsetTop-1&&(n=$)}),n&&n!=i&&(h(i),i=n,a(i))};return Xl(()=>{a(i),m()}),[m]}class Mh extends ht{constructor(e){super(),ct(this,e,jh,Ih,lt,{})}}function Th(c){return Xl(()=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",e.async=!0,document.head.append(e),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[]}class Ah extends ht{constructor(e){super(),ct(this,e,Th,null,lt,{})}}const zh=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,Eh=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,Lh=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,Ph=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,Ch=`
\\begin{align}
\\operatorname{J}(z) := exp(-\\frac{z^2}{2}) \\\\
\\end{align}`,Hh=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],Sh=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~687 million"}],Rh=[{desc:"horizon",val:500},{desc:"lookback",val:1e3},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"},{desc:"total trainable parameters",val:"~857 million"}];function Nh(c){let e,t,i,s,a,h,m;return document.title=e=da,{c(){t=E("meta"),i=E("meta"),s=E("meta"),a=E("meta"),h=E("meta"),m=E("meta"),this.h()},l(n){const $=nh("svelte-xp42rc",document.head);t=L($,"META",{name:!0,content:!0}),i=L($,"META",{property:!0,content:!0}),s=L($,"META",{property:!0,content:!0}),a=L($,"META",{property:!0,content:!0}),h=L($,"META",{property:!0,content:!0}),m=L($,"META",{property:!0,content:!0}),$.forEach(o),this.h()},h(){A(t,"name","description"),A(t,"content",Jl),A(i,"property","og:type"),A(i,"content","article"),A(s,"property","og:url"),A(s,"content","https://nrxszvo.github.io/nhits-lorenz"),A(a,"property","og:description"),A(a,"content",Jl),A(h,"property","og:image"),A(h,"content","https://nrxszvo.github.io/thumbnail.png"),A(m,"property","og:title"),A(m,"content",da)},m(n,$){p(document.head,t),p(document.head,i),p(document.head,s),p(document.head,a),p(document.head,h),p(document.head,m)},p(n,[$]){$&0&&e!==(e=da)&&(document.title=e)},i:V,o:V,d(n){o(t),o(i),o(s),o(a),o(h),o(m)}}}const da="Generic Deep Learning for Chaotic Dynamics: A Case Study on the Lorenz Attractor",Jl="Experiments using the NHiTS neural forecasting architecture to model the Lorenz Attractor; analysis of Z coordinate local maximum converging to 38.5";class Gh extends ht{constructor(e){super(),ct(this,e,null,Nh,lt,{})}}function Dh(c){let e;return{c(){e=r("mochaNN")},l(t){e=l(t,"mochaNN")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Fh(c){let e,t="tl;dr";return{c(){e=E("i"),e.textContent=t,this.h()},l(i){e=L(i,"I",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-ixj9gt"&&(e.textContent=t),this.h()},h(){A(e,"class","font-serif")},m(i,s){f(i,e,s)},p:V,d(i){i&&o(e)}}}function qh(c){let e;return{c(){e=r("Lorenz Map")},l(t){e=l(t,"Lorenz Map")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Zh(c){let e;return{c(){e=r("sMAPE")},l(t){e=l(t,"sMAPE")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Vh(c){let e;return{c(){e=r("Introduction")},l(t){e=l(t,"Introduction")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Uh(c){let e,t,i="Model scale versus domain knowledge in statistical forecasting of chaotic systems",s,a,h,m,n,$,y,d,v,T,b='<a href="#sabine">1</a>',S,q;return a=new Y({props:{id:"gilpin"}}),m=new Y({props:{id:"gilpin"}}),$=new Y({props:{id:"seo"}}),d=new Y({props:{id:"degrave"}}),{c(){e=r(`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=E("i"),t.textContent=i,s=P(),k(a.$$.fragment),h=r(`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),k(m.$$.fragment),n=r(`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),k($.$$.fragment),y=r(", "),k(d.$$.fragment),v=r(")"),T=E("sup"),T.innerHTML=b,S=r(`.
		`)},l(z){e=l(z,`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=L(z,"I",{"data-svelte-h":!0}),U(t)!=="svelte-oq8z8z"&&(t.textContent=i),s=C(z),I(a.$$.fragment,z),h=l(z,`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),I(m.$$.fragment,z),n=l(z,`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),I($.$$.fragment,z),y=l(z,", "),I(d.$$.fragment,z),v=l(z,")"),T=L(z,"SUP",{"data-svelte-h":!0}),U(T)!=="svelte-6x9dc9"&&(T.innerHTML=b),S=l(z,`.
		`)},m(z,H){f(z,e,H),f(z,t,H),f(z,s,H),j(a,z,H),f(z,h,H),j(m,z,H),f(z,n,H),j($,z,H),f(z,y,H),j(d,z,H),f(z,v,H),f(z,T,H),f(z,S,H),q=!0},p:V,i(z){q||(_(a.$$.fragment,z),_(m.$$.fragment,z),_($.$$.fragment,z),_(d.$$.fragment,z),q=!0)},o(z){x(a.$$.fragment,z),x(m.$$.fragment,z),x($.$$.fragment,z),x(d.$$.fragment,z),q=!1},d(z){z&&(o(e),o(t),o(s),o(h),o(n),o(y),o(v),o(T),o(S)),M(a,z),M(m,z),M($,z),M(d,z)}}}function Bh(c){let e,t,i="i.e.",s,a,h='<a href="#paperspace">2</a>',m,n,$='<a href="#brunton">3</a>',y;return{c(){e=r(`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=E("i"),t.textContent=i,s=r(`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),a=E("sup"),a.innerHTML=h,m=r(`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=E("sup"),n.innerHTML=$,y=r(`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},l(d){e=l(d,`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=L(d,"I",{"data-svelte-h":!0}),U(t)!=="svelte-1xx6z5c"&&(t.textContent=i),s=l(d,`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),a=L(d,"SUP",{"data-svelte-h":!0}),U(a)!=="svelte-yuo1gg"&&(a.innerHTML=h),m=l(d,`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=L(d,"SUP",{"data-svelte-h":!0}),U(n)!=="svelte-a7rqq8"&&(n.innerHTML=$),y=l(d,`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},m(d,v){f(d,e,v),f(d,t,v),f(d,s,v),f(d,a,v),f(d,m,v),f(d,n,v),f(d,y,v)},p:V,d(d){d&&(o(e),o(t),o(s),o(a),o(m),o(n),o(y))}}}function Wh(c){let e;return{c(){e=r(`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},l(t){e=l(t,`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Oh(c){let e;return{c(){e=r("Youtube channel")},l(t){e=l(t,"Youtube channel")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Kh(c){let e;return{c(){e=r("lecture series")},l(t){e=l(t,"lecture series")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Jh(c){let e;return{c(){e=r("The Lorenz Attractor")},l(t){e=l(t,"The Lorenz Attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Xh(c){let e;return{c(){e=r("sensitivity to initial conditions")},l(t){e=l(t,"sensitivity to initial conditions")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Yh(c){let e;return{c(){e=r("n-body problem")},l(t){e=l(t,"n-body problem")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Qh(c){let e;return{c(){e=r("Lorenz Attractor")},l(t){e=l(t,"Lorenz Attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function tc(c){let e,t,i,s,a,h,m,n,$,y;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Butterfly_effect",$$slots:{default:[Xh]},$$scope:{ctx:c}}}),s=new B({props:{href:"https://en.wikipedia.org/wiki/N-body_problem",$$slots:{default:[Yh]},$$scope:{ctx:c}}}),h=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[Qh]},$$scope:{ctx:c}}}),n=new Y({props:{id:"oestreicher"}}),{c(){e=r("Although the phenomon of "),k(t.$$.fragment),i=r(` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),k(s.$$.fragment),a=r(", the birth of modern chaos theory is generally associated with the discovery of the "),k(h.$$.fragment),m=r(`
			by Edward Lorenz et. al. in 1963 `),k(n.$$.fragment),$=r(`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},l(d){e=l(d,"Although the phenomon of "),I(t.$$.fragment,d),i=l(d,` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),I(s.$$.fragment,d),a=l(d,", the birth of modern chaos theory is generally associated with the discovery of the "),I(h.$$.fragment,d),m=l(d,`
			by Edward Lorenz et. al. in 1963 `),I(n.$$.fragment,d),$=l(d,`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},m(d,v){f(d,e,v),j(t,d,v),f(d,i,v),j(s,d,v),f(d,a,v),j(h,d,v),f(d,m,v),j(n,d,v),f(d,$,v),y=!0},p(d,v){const T={};v&1&&(T.$$scope={dirty:v,ctx:d}),t.$set(T);const b={};v&1&&(b.$$scope={dirty:v,ctx:d}),s.$set(b);const S={};v&1&&(S.$$scope={dirty:v,ctx:d}),h.$set(S)},i(d){y||(_(t.$$.fragment,d),_(s.$$.fragment,d),_(h.$$.fragment,d),_(n.$$.fragment,d),y=!0)},o(d){x(t.$$.fragment,d),x(s.$$.fragment,d),x(h.$$.fragment,d),x(n.$$.fragment,d),y=!1},d(d){d&&(o(e),o(i),o(a),o(m),o($)),M(t,d),M(s,d),M(h,d),M(n,d)}}}function ec(c){let e;return{c(){e=r("The Lorenz Attractor")},l(t){e=l(t,"The Lorenz Attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function nc(c){let e;return{c(){e=r(`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},l(t){e=l(t,`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function ic(c){let e;return{c(){e=r("strange attractor")},l(t){e=l(t,"strange attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function ac(c){let e;return{c(){e=r("Hausdorff dimension")},l(t){e=l(t,"Hausdorff dimension")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function oc(c){let e,t,i="Attractor",s,a,h,m,n,$;return a=new B({props:{href:"https://en.wikipedia.org/wiki/Attractor#Strange_attractor",$$slots:{default:[ic]},$$scope:{ctx:c}}}),m=new B({props:{href:"https://en.wikipedia.org/wiki/Hausdorff_dimension",$$slots:{default:[ac]},$$scope:{ctx:c}}}),{c(){e=r("The Lorenz "),t=E("i"),t.textContent=i,s=r(` refers to a set of chaotic solutions to the system that
			constitute a `),k(a.$$.fragment),h=r(`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),k(m.$$.fragment),n=r(` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},l(y){e=l(y,"The Lorenz "),t=L(y,"I",{"data-svelte-h":!0}),U(t)!=="svelte-7jrnvq"&&(t.textContent=i),s=l(y,` refers to a set of chaotic solutions to the system that
			constitute a `),I(a.$$.fragment,y),h=l(y,`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),I(m.$$.fragment,y),n=l(y,` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},m(y,d){f(y,e,d),f(y,t,d),f(y,s,d),j(a,y,d),f(y,h,d),j(m,y,d),f(y,n,d),$=!0},p(y,d){const v={};d&1&&(v.$$scope={dirty:d,ctx:y}),a.$set(v);const T={};d&1&&(T.$$scope={dirty:d,ctx:y}),m.$set(T)},i(y){$||(_(a.$$.fragment,y),_(m.$$.fragment,y),$=!0)},o(y){x(a.$$.fragment,y),x(m.$$.fragment,y),$=!1},d(y){y&&(o(e),o(t),o(s),o(h),o(n)),M(a,y),M(m,y)}}}function sc(c){let e;return{c(){e=r("Hopf bifurcation")},l(t){e=l(t,"Hopf bifurcation")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function rc(c){let e,t="$\\rho$",i,s,a="$\\rho \\lt 1$",h,m,n="$\\rho \\approx 24.7$",$,y,d,v,T;return d=new B({props:{href:"https://en.wikipedia.org/wiki/Hopf_bifurcation",$$slots:{default:[sc]},$$scope:{ctx:c}}}),{c(){e=r("Other parameterizations of interest generally involve varying the "),i=r(t),s=r(` parameter,
			for example, `),h=r(a),m=r(" in which the system is stable, and "),$=r(n),y=r(`,
			at which a `),k(d.$$.fragment),v=r(" occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},l(b){e=l(b,"Other parameterizations of interest generally involve varying the "),i=l(b,t),s=l(b,` parameter,
			for example, `),h=l(b,a),m=l(b," in which the system is stable, and "),$=l(b,n),y=l(b,`,
			at which a `),I(d.$$.fragment,b),v=l(b," occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},m(b,S){f(b,e,S),f(b,i,S),f(b,s,S),f(b,h,S),f(b,m,S),f(b,$,S),f(b,y,S),j(d,b,S),f(b,v,S),T=!0},p(b,S){const q={};S&1&&(q.$$scope={dirty:S,ctx:b}),d.$set(q)},i(b){T||(_(d.$$.fragment,b),T=!0)},o(b){x(d.$$.fragment,b),T=!1},d(b){b&&(o(e),o(i),o(s),o(h),o(m),o($),o(y),o(v)),M(d,b)}}}function lc(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function hc(c){let e,t,i,s;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[lc]},$$scope:{ctx:c}}}),{c(){e=r("For all trajectories in this project, I used Gilpin's "),k(t.$$.fragment),i=r(` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},l(a){e=l(a,"For all trajectories in this project, I used Gilpin's "),I(t.$$.fragment,a),i=l(a,` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},m(a,h){f(a,e,h),j(t,a,h),f(a,i,h),s=!0},p(a,h){const m={};h&1&&(m.$$scope={dirty:h,ctx:a}),t.$set(m)},i(a){s||(_(t.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),s=!1},d(a){a&&(o(e),o(i)),M(t,a)}}}function cc(c){let e;return{c(){e=r("Neural Architecture: N-HiTS")},l(t){e=l(t,"Neural Architecture: N-HiTS")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function fc(c){let e,t,i,s,a,h;return t=new Y({props:{id:"challu"}}),s=new Y({props:{id:"gilpin"}}),{c(){e=r("The N-HiTS "),k(t.$$.fragment),i=r(` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),k(s.$$.fragment),a=r(`, it seemed like the natural starting point
			for a network architecture.`)},l(m){e=l(m,"The N-HiTS "),I(t.$$.fragment,m),i=l(m,` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),I(s.$$.fragment,m),a=l(m,`, it seemed like the natural starting point
			for a network architecture.`)},m(m,n){f(m,e,n),j(t,m,n),f(m,i,n),j(s,m,n),f(m,a,n),h=!0},p:V,i(m){h||(_(t.$$.fragment,m),_(s.$$.fragment,m),h=!0)},o(m){x(t.$$.fragment,m),x(s.$$.fragment,m),h=!1},d(m){m&&(o(e),o(i),o(a)),M(t,m),M(s,m)}}}function mc(c){let e,t,i,s,a,h;return t=new Y({props:{id:"oreshkin"}}),s=new Y({props:{id:"oreshkin"}}),{c(){e=r("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),k(t.$$.fragment),i=r(`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),k(s.$$.fragment),a=r(".")},l(m){e=l(m,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),I(t.$$.fragment,m),i=l(m,`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),I(s.$$.fragment,m),a=l(m,".")},m(m,n){f(m,e,n),j(t,m,n),f(m,i,n),j(s,m,n),f(m,a,n),h=!0},p:V,i(m){h||(_(t.$$.fragment,m),_(s.$$.fragment,m),h=!0)},o(m){x(t.$$.fragment,m),x(s.$$.fragment,m),h=!1},d(m){m&&(o(e),o(i),o(a)),M(t,m),M(s,m)}}}function uc(c){let e,t,i,s;return t=new Y({props:{id:"challu"}}),{c(){e=r(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),k(t.$$.fragment),i=r(".")},l(a){e=l(a,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),I(t.$$.fragment,a),i=l(a,".")},m(a,h){f(a,e,h),j(t,a,h),f(a,i,h),s=!0},p:V,i(a){s||(_(t.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),s=!1},d(a){a&&(o(e),o(i)),M(t,a)}}}function pc(c){let e;return{c(){e=r("Experiments")},l(t){e=l(t,"Experiments")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function dc(c){let e,t,i,s;return t=new Y({props:{id:"gilpin"}}),{c(){e=r(`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),k(t.$$.fragment),i=r(`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},l(a){e=l(a,`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),I(t.$$.fragment,a),i=l(a,`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},m(a,h){f(a,e,h),j(t,a,h),f(a,i,h),s=!0},p:V,i(a){s||(_(t.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),s=!1},d(a){a&&(o(e),o(i)),M(t,a)}}}function $c(c){let e;return{c(){e=r("Data Generation")},l(t){e=l(t,"Data Generation")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function gc(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function wc(c){let e;return{c(){e=r("IVP solver")},l(t){e=l(t,"IVP solver")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function vc(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function yc(c){let e,t="$H$",i,s,a="$dt$",h,m,n="$0.015$",$,y,d,v,T,b,S="$dt$",q,z,H,Z="after",O,nt="$dt$",K,D,F,J,tt="$\\approx 1.8\\mathrm{e}{-4}$",X,ft,at;return d=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[gc]},$$scope:{ctx:c}}}),T=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[wc]},$$scope:{ctx:c}}}),F=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[vc]},$$scope:{ctx:c}}}),{c(){e=r("I begin with a horizon (prediction window), "),i=r(t),s=r(", of 100 points, using a "),h=r(a),m=r(` of
			approximately
			`),$=r(n),y=r(" seconds per point (the default from "),k(d.$$.fragment),v=r(") to sample the solution produced by the "),k(T.$$.fragment),b=r(". Importantly, note that this "),q=r(S),z=r(` is only the one used for sampling the solution
			`),H=E("i"),H.textContent=Z,O=r(`
			it is generated by the IVP solver. The actual `),K=r(nt),D=r(` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),k(F.$$.fragment),J=r(" is "),X=r(tt),ft=r(`.
		`)},l(R){e=l(R,"I begin with a horizon (prediction window), "),i=l(R,t),s=l(R,", of 100 points, using a "),h=l(R,a),m=l(R,` of
			approximately
			`),$=l(R,n),y=l(R," seconds per point (the default from "),I(d.$$.fragment,R),v=l(R,") to sample the solution produced by the "),I(T.$$.fragment,R),b=l(R,". Importantly, note that this "),q=l(R,S),z=l(R,` is only the one used for sampling the solution
			`),H=L(R,"I",{"data-svelte-h":!0}),U(H)!=="svelte-10nlrz4"&&(H.textContent=Z),O=l(R,`
			it is generated by the IVP solver. The actual `),K=l(R,nt),D=l(R,` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),I(F.$$.fragment,R),J=l(R," is "),X=l(R,tt),ft=l(R,`.
		`)},m(R,W){f(R,e,W),f(R,i,W),f(R,s,W),f(R,h,W),f(R,m,W),f(R,$,W),f(R,y,W),j(d,R,W),f(R,v,W),j(T,R,W),f(R,b,W),f(R,q,W),f(R,z,W),f(R,H,W),f(R,O,W),f(R,K,W),f(R,D,W),j(F,R,W),f(R,J,W),f(R,X,W),f(R,ft,W),at=!0},p(R,W){const gi={};W&1&&(gi.$$scope={dirty:W,ctx:R}),d.$set(gi);const wi={};W&1&&(wi.$$scope={dirty:W,ctx:R}),T.$set(wi);const Bi={};W&1&&(Bi.$$scope={dirty:W,ctx:R}),F.$set(Bi)},i(R){at||(_(d.$$.fragment,R),_(T.$$.fragment,R),_(F.$$.fragment,R),at=!0)},o(R){x(d.$$.fragment,R),x(T.$$.fragment,R),x(F.$$.fragment,R),at=!1},d(R){R&&(o(e),o(i),o(s),o(h),o(m),o($),o(y),o(v),o(b),o(q),o(z),o(H),o(O),o(K),o(D),o(J),o(X),o(ft)),M(d,R),M(T,R),M(F,R)}}}function bc(c){let e;return{c(){e=r("Lyapunov exponent")},l(t){e=l(t,"Lyapunov exponent")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function _c(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function xc(c){let e;return{c(){e=r("Lyapunov time")},l(t){e=l(t,"Lyapunov time")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function kc(c){let e,t,i,s,a,h="$\\lambda_{max}$",m,n,$="$0.8917$",y,d,v,T,b="$1.121s$",S,q,z;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[bc]},$$scope:{ctx:c}}}),s=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[_c]},$$scope:{ctx:c}}}),v=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[xc]},$$scope:{ctx:c}}}),{c(){e=r(`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),k(t.$$.fragment),i=r(`.
			As reported in
			`),k(s.$$.fragment),a=r(", the Lyapunov exponent, "),m=r(h),n=r(`,
			for the Lorenz Attractor is approx. `),y=r($),d=r(", and so the "),k(v.$$.fragment),T=r(` is approx.
			`),S=r(b),q=r(".")},l(H){e=l(H,`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),I(t.$$.fragment,H),i=l(H,`.
			As reported in
			`),I(s.$$.fragment,H),a=l(H,", the Lyapunov exponent, "),m=l(H,h),n=l(H,`,
			for the Lorenz Attractor is approx. `),y=l(H,$),d=l(H,", and so the "),I(v.$$.fragment,H),T=l(H,` is approx.
			`),S=l(H,b),q=l(H,".")},m(H,Z){f(H,e,Z),j(t,H,Z),f(H,i,Z),j(s,H,Z),f(H,a,Z),f(H,m,Z),f(H,n,Z),f(H,y,Z),f(H,d,Z),j(v,H,Z),f(H,T,Z),f(H,S,Z),f(H,q,Z),z=!0},p(H,Z){const O={};Z&1&&(O.$$scope={dirty:Z,ctx:H}),t.$set(O);const nt={};Z&1&&(nt.$$scope={dirty:Z,ctx:H}),s.$set(nt);const K={};Z&1&&(K.$$scope={dirty:Z,ctx:H}),v.$set(K)},i(H){z||(_(t.$$.fragment,H),_(s.$$.fragment,H),_(v.$$.fragment,H),z=!0)},o(H){x(t.$$.fragment,H),x(s.$$.fragment,H),x(v.$$.fragment,H),z=!1},d(H){H&&(o(e),o(i),o(a),o(m),o(n),o(y),o(d),o(T),o(S),o(q)),M(t,H),M(s,H),M(v,H)}}}function Ic(c){let e,t,i="on average",s,a="$e$",h,m,n="$1.121$",$,y,d="$\\frac{4}{3}$",v,T,b,S='<a href="#lyapunov">1</a>',q;return{c(){e=r("This tells us that, "),t=E("i"),t.textContent=i,s=r(`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),h=r(a),m=r(` after
			`),$=r(n),y=r(` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=r(d),T=r(`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),b=E("sup"),b.innerHTML=S,q=r(`, a
			defining feature of all chaotic systems.`)},l(z){e=l(z,"This tells us that, "),t=L(z,"I",{"data-svelte-h":!0}),U(t)!=="svelte-ggx8py"&&(t.textContent=i),s=l(z,`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),h=l(z,a),m=l(z,` after
			`),$=l(z,n),y=l(z,` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=l(z,d),T=l(z,`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),b=L(z,"SUP",{"data-svelte-h":!0}),U(b)!=="svelte-1b4twc5"&&(b.innerHTML=S),q=l(z,`, a
			defining feature of all chaotic systems.`)},m(z,H){f(z,e,H),f(z,t,H),f(z,s,H),f(z,h,H),f(z,m,H),f(z,$,H),f(z,y,H),f(z,v,H),f(z,T,H),f(z,b,H),f(z,q,H)},p:V,d(z){z&&(o(e),o(t),o(s),o(h),o(m),o($),o(y),o(v),o(T),o(b),o(q))}}}function jc(c){let e,t="$[-9.79, -15.04, 20.53]$",i,s,a="$[0.99,1.01]$",h,m;return{c(){e=r(`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=r(t),s=r(` and multiplied by a random
			perturbation uniformly sampled from the interval `),h=r(a),m=r(".")},l(n){e=l(n,`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=l(n,t),s=l(n,` and multiplied by a random
			perturbation uniformly sampled from the interval `),h=l(n,a),m=l(n,".")},m(n,$){f(n,e,$),f(n,i,$),f(n,s,$),f(n,h,$),f(n,m,$)},p:V,d(n){n&&(o(e),o(i),o(s),o(h),o(m))}}}function Mc(c){let e,t="$3*100 = 300$",i,s,a="$3 * (500 + 100) = 1800$",h,m;return{c(){e=r(`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=r(t),s=r(`, and each
			training sample's length is `),h=r(a),m=r(").")},l(n){e=l(n,`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=l(n,t),s=l(n,`, and each
			training sample's length is `),h=l(n,a),m=l(n,").")},m(n,$){f(n,e,$),f(n,i,$),f(n,s,$),f(n,h,$),f(n,m,$)},p:V,d(n){n&&(o(e),o(i),o(s),o(h),o(m))}}}function Tc(c){let e,t=`$10,000 - 600 +
		1 = 9401$`,i,s,a,h='<a href="#initial-conditions">2</a>',m;return{c(){e=r(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=r(t),s=r(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),a=E("sup"),a.innerHTML=h,m=r(".")},l(n){e=l(n,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=l(n,t),s=l(n,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),a=L(n,"SUP",{"data-svelte-h":!0}),U(a)!=="svelte-uv3gx8"&&(a.innerHTML=h),m=l(n,".")},m(n,$){f(n,e,$),f(n,i,$),f(n,s,$),f(n,a,$),f(n,m,$)},p:V,d(n){n&&(o(e),o(i),o(s),o(a),o(m))}}}function Ac(c){let e;return{c(){e=r("Model 1")},l(t){e=l(t,"Model 1")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function zc(c){let e;return{c(){e=r("The full set of N-HiTS hyperparameters for the first model configuration is:")},l(t){e=l(t,"The full set of N-HiTS hyperparameters for the first model configuration is:")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Ec(c){let e,t,i,s,a,h;return t=new Y({props:{id:"challu"}}),s=new Y({props:{id:"gilpin"}}),{c(){e=r("The model is optimized with MAE loss, consistent with the default loss from "),k(t.$$.fragment),i=r(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),k(s.$$.fragment),a=r(":")},l(m){e=l(m,"The model is optimized with MAE loss, consistent with the default loss from "),I(t.$$.fragment,m),i=l(m,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),I(s.$$.fragment,m),a=l(m,":")},m(m,n){f(m,e,n),j(t,m,n),f(m,i,n),j(s,m,n),f(m,a,n),h=!0},p:V,i(m){h||(_(t.$$.fragment,m),_(s.$$.fragment,m),h=!0)},o(m){x(t.$$.fragment,m),x(s.$$.fragment,m),h=!1},d(m){m&&(o(e),o(i),o(a)),M(t,m),M(s,m)}}}function Lc(c){let e;return{c(){e=r(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},l(t){e=l(t,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Pc(c){let e;return{c(){e=r("Model 1 - sMAPE error distribution on the test set")},l(t){e=l(t,"Model 1 - sMAPE error distribution on the test set")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Cc(c){let e;return{c(){e=r(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},l(t){e=l(t,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Hc(c){let e;return{c(){e=r(`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},l(t){e=l(t,`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Sc(c){let e;return{c(){e=r(`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},l(t){e=l(t,`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Rc(c){let e;return{c(){e=r(`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},l(t){e=l(t,`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Nc(c){let e;return{c(){e=r("critical points")},l(t){e=l(t,"critical points")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Gc(c){let e,t,i,s,a,h,m,n,$,y;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[Nc]},$$scope:{ctx:c}}}),s=new Y({props:{id:"osinga"}}),h=new Y({props:{id:"osinga"}}),n=new Y({props:{id:"osinga"}}),{c(){e=r(`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),k(t.$$.fragment),i=r(` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),k(s.$$.fragment),a=r(` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),k(h.$$.fragment),m=r(`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),k(n.$$.fragment),$=r(`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},l(d){e=l(d,`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),I(t.$$.fragment,d),i=l(d,` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),I(s.$$.fragment,d),a=l(d,` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),I(h.$$.fragment,d),m=l(d,`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),I(n.$$.fragment,d),$=l(d,`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},m(d,v){f(d,e,v),j(t,d,v),f(d,i,v),j(s,d,v),f(d,a,v),j(h,d,v),f(d,m,v),j(n,d,v),f(d,$,v),y=!0},p(d,v){const T={};v&1&&(T.$$scope={dirty:v,ctx:d}),t.$set(T)},i(d){y||(_(t.$$.fragment,d),_(s.$$.fragment,d),_(h.$$.fragment,d),_(n.$$.fragment,d),y=!0)},o(d){x(t.$$.fragment,d),x(s.$$.fragment,d),x(h.$$.fragment,d),x(n.$$.fragment,d),y=!1},d(d){d&&(o(e),o(i),o(a),o(m),o($)),M(t,d),M(s,d),M(h,d),M(n,d)}}}function Dc(c){let e;return{c(){e=r("Hartman-Grobman Theorem")},l(t){e=l(t,"Hartman-Grobman Theorem")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Fc(c){let e,t,i,s="$f(t) = \\exp(\\lambda t)x_0$",a,h,m="$\\lambda$",n,$,y="$x_0$",d,v,T="$\\approx 11.8$",b,S,q;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem",$$slots:{default:[Dc]},$$scope:{ctx:c}}}),{c(){e=r(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),k(t.$$.fragment),i=r(`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),a=r(s),h=r(`,
			where `),n=r(m),$=r(" equals the eigenvalue and "),d=r(y),v=r(` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),b=r(T),S=r(`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},l(z){e=l(z,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),I(t.$$.fragment,z),i=l(z,`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),a=l(z,s),h=l(z,`,
			where `),n=l(z,m),$=l(z," equals the eigenvalue and "),d=l(z,y),v=l(z,` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),b=l(z,T),S=l(z,`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},m(z,H){f(z,e,H),j(t,z,H),f(z,i,H),f(z,a,H),f(z,h,H),f(z,n,H),f(z,$,H),f(z,d,H),f(z,v,H),f(z,b,H),f(z,S,H),q=!0},p(z,H){const Z={};H&1&&(Z.$$scope={dirty:H,ctx:z}),t.$set(Z)},i(z){q||(_(t.$$.fragment,z),q=!0)},o(z){x(t.$$.fragment,z),q=!1},d(z){z&&(o(e),o(i),o(a),o(h),o(n),o($),o(d),o(v),o(b),o(S)),M(t,z)}}}function qc(c){let e;return{c(){e=r(`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},l(t){e=l(t,`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Zc(c){let e;return{c(){e=r(`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},l(t){e=l(t,`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Vc(c){let e;return{c(){e=r("Model 2")},l(t){e=l(t,"Model 2")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Uc(c){let e;return{c(){e=r(`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},l(t){e=l(t,`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Bc(c){let e;return{c(){e=r("Model 2 vs Model 1 - sMAPE error distribution.")},l(t){e=l(t,"Model 2 vs Model 1 - sMAPE error distribution.")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Wc(c){let e;return{c(){e=r(`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},l(t){e=l(t,`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Oc(c){let e;return{c(){e=r(`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},l(t){e=l(t,`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Kc(c){let e;return{c(){e=r("Model 2 - sMAPE errors per series per window in the test set.")},l(t){e=l(t,"Model 2 - sMAPE errors per series per window in the test set.")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Jc(c){let e;return{c(){e=r(`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},l(t){e=l(t,`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Xc(c){let e;return{c(){e=r(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},l(t){e=l(t,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Yc(c){let e;return{c(){e=r(`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},l(t){e=l(t,`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Qc(c){let e,t="$n$",i,s,a="$n-1$",h,m,n="$n+1$",$,y;return{c(){e=r(`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=r(t),s=r(`
				that is closer to the origin than the points at `),h=r(a),m=r(" and "),$=r(n),y=r(".")},l(d){e=l(d,`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=l(d,t),s=l(d,`
				that is closer to the origin than the points at `),h=l(d,a),m=l(d," and "),$=l(d,n),y=l(d,".")},m(d,v){f(d,e,v),f(d,i,v),f(d,s,v),f(d,h,v),f(d,m,v),f(d,$,v),f(d,y,v)},p:V,d(d){d&&(o(e),o(i),o(s),o(h),o(m),o($),o(y))}}}function tf(c){let e;return{c(){e=r(`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},l(t){e=l(t,`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function ef(c){let e;return{c(){e=r("Model 3")},l(t){e=l(t,"Model 3")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function nf(c){let e;return{c(){e=r(`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},l(t){e=l(t,`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function af(c){let e;return{c(){e=r("3.1: Biased Dataset Distribution")},l(t){e=l(t,"3.1: Biased Dataset Distribution")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function of(c){let e;return{c(){e=r("Radau solver")},l(t){e=l(t,"Radau solver")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function sf(c){let e,t,i,s="$1\\mathrm{e}{30}$",a,h,m;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[of]},$$scope:{ctx:c}}}),{c(){e=r(`The first idea is to increase the percentage of trajectories in the dataset that pass
			very close to the origin so that the model sees more examples of these very tough cases
			during training. This turns out to be quite tricky task! Emperically, trajectories that
			pass very close to the origin are rare on the attractor, in the sense that just choosing
			a random intial condition from a point within the attractor volume is unlikely to
			produce a trajectory that passes very close to the origin in a relatively short amount
			of time. One idea is to choose a point that is already very close to the origin, and
			then use it as the initial condition to generate both a forward- and a backward-time
			solution. Then we can concatenate the two solutions together to produce a single
			solution with adequate time points before and after it approaches the origin. Sounds
			simple enough, except that when I attempted to produce the backwards solution, I
			inevitably ended up with a trajectory whose X coordinate grows in magnitude
			exponentially. In all of my attempts using the `),k(t.$$.fragment),i=r(` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),a=r(s),h=r(`
			after about 0.5 seconds.`)},l(n){e=l(n,`The first idea is to increase the percentage of trajectories in the dataset that pass
			very close to the origin so that the model sees more examples of these very tough cases
			during training. This turns out to be quite tricky task! Emperically, trajectories that
			pass very close to the origin are rare on the attractor, in the sense that just choosing
			a random intial condition from a point within the attractor volume is unlikely to
			produce a trajectory that passes very close to the origin in a relatively short amount
			of time. One idea is to choose a point that is already very close to the origin, and
			then use it as the initial condition to generate both a forward- and a backward-time
			solution. Then we can concatenate the two solutions together to produce a single
			solution with adequate time points before and after it approaches the origin. Sounds
			simple enough, except that when I attempted to produce the backwards solution, I
			inevitably ended up with a trajectory whose X coordinate grows in magnitude
			exponentially. In all of my attempts using the `),I(t.$$.fragment,n),i=l(n,` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),a=l(n,s),h=l(n,`
			after about 0.5 seconds.`)},m(n,$){f(n,e,$),j(t,n,$),f(n,i,$),f(n,a,$),f(n,h,$),m=!0},p(n,$){const y={};$&1&&(y.$$scope={dirty:$,ctx:n}),t.$set(y)},i(n){m||(_(t.$$.fragment,n),m=!0)},o(n){x(t.$$.fragment,n),m=!1},d(n){n&&(o(e),o(i),o(a),o(h)),M(t,n)}}}function rf(c){let e,t="$t \\to \\infty$",i,s,a,h="might",m,n,$="e.g.",y,d,v;return y=new Y({props:{id:"osinga"}}),{c(){e=r(`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=r(t),s=r(`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),a=E("i"),a.textContent=h,m=r(` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=E("i"),n.textContent=$,k(y.$$.fragment),d=r(`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},l(T){e=l(T,`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=l(T,t),s=l(T,`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),a=L(T,"I",{"data-svelte-h":!0}),U(a)!=="svelte-ah22qx"&&(a.textContent=h),m=l(T,` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=L(T,"I",{"data-svelte-h":!0}),U(n)!=="svelte-1yxphdm"&&(n.textContent=$),I(y.$$.fragment,T),d=l(T,`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},m(T,b){f(T,e,b),f(T,i,b),f(T,s,b),f(T,a,b),f(T,m,b),f(T,n,b),j(y,T,b),f(T,d,b),v=!0},p:V,i(T){v||(_(y.$$.fragment,T),v=!0)},o(T){x(y.$$.fragment,T),v=!1},d(T){T&&(o(e),o(i),o(s),o(a),o(m),o(n),o(d)),M(y,T)}}}function lf(c){let e,t="$\\lt{3}$",i,s;return{c(){e=r(`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=r(t),s=r(`
			by a factor of about 10, while the total number of windows is the same as before:`)},l(a){e=l(a,`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=l(a,t),s=l(a,`
			by a factor of about 10, while the total number of windows is the same as before:`)},m(a,h){f(a,e,h),f(a,i,h),f(a,s,h)},p:V,d(a){a&&(o(e),o(i),o(s))}}}function hf(c){let e;return{c(){e=r(`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},l(t){e=l(t,`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function cf(c){let e;return{c(){e=r(`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},l(t){e=l(t,`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function ff(c){let e;return{c(){e=r(`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},l(t){e=l(t,`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function mf(c){let e;return{c(){e=r(`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive repair costs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},l(t){e=l(t,`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive repair costs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function uf(c){let e,t="$dt$",i;return{c(){e=r("3.2: Reduced "),i=r(t)},l(s){e=l(s,"3.2: Reduced "),i=l(s,t)},m(s,a){f(s,e,a),f(s,i,a)},p:V,d(s){s&&(o(e),o(i))}}}function pf(c){let e,t="$dt$",i,s,a="$dt$",h,m,n="$\\approx0.015$",$,y,d="$\\approx0.003$",v,T,b="$\\approx1.5$",S,q,z="$2H$",H,Z,O="$5H$",nt,K;return{c(){e=r("The next idea is to increase the temporal resolution of the model by using a smaller "),i=r(t),s=r(`
			to generate the data points. So far I've used a `),h=r(a),m=r(" of "),$=r(n),y=r(`. Here
			I'll try reducing that by a factor of 5 to `),v=r(d),T=r(`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),S=r(b),q=r(`
			seconds. From tuning, I found that an input size of `),H=r(z),Z=r(` performs just as well as an
			input size of `),nt=r(O),K=r(`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},l(D){e=l(D,"The next idea is to increase the temporal resolution of the model by using a smaller "),i=l(D,t),s=l(D,`
			to generate the data points. So far I've used a `),h=l(D,a),m=l(D," of "),$=l(D,n),y=l(D,`. Here
			I'll try reducing that by a factor of 5 to `),v=l(D,d),T=l(D,`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),S=l(D,b),q=l(D,`
			seconds. From tuning, I found that an input size of `),H=l(D,z),Z=l(D,` performs just as well as an
			input size of `),nt=l(D,O),K=l(D,`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},m(D,F){f(D,e,F),f(D,i,F),f(D,s,F),f(D,h,F),f(D,m,F),f(D,$,F),f(D,y,F),f(D,v,F),f(D,T,F),f(D,S,F),f(D,q,F),f(D,H,F),f(D,Z,F),f(D,nt,F),f(D,K,F)},p:V,d(D){D&&(o(e),o(i),o(s),o(h),o(m),o($),o(y),o(v),o(T),o(S),o(q),o(H),o(Z),o(nt),o(K))}}}function df(c){let e;return{c(){e=r("The new hyperparameters for Model 3.2 are:")},l(t){e=l(t,"The new hyperparameters for Model 3.2 are:")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function $f(c){let e;return{c(){e=r("FSDP Strategy")},l(t){e=l(t,"FSDP Strategy")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function gf(c){let e,t="A sidenote on the practicality of training this model:",i,s,a,h;return s=new B({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[$f]},$$scope:{ctx:c}}}),{c(){e=E("b"),e.textContent=t,i=r(`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),k(s.$$.fragment),a=r(` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},l(m){e=L(m,"B",{"data-svelte-h":!0}),U(e)!=="svelte-1vhs7sz"&&(e.textContent=t),i=l(m,`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),I(s.$$.fragment,m),a=l(m,` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},m(m,n){f(m,e,n),f(m,i,n),j(s,m,n),f(m,a,n),h=!0},p(m,n){const $={};n&1&&($.$$scope={dirty:n,ctx:m}),s.$set($)},i(m){h||(_(s.$$.fragment,m),h=!0)},o(m){x(s.$$.fragment,m),h=!1},d(m){m&&(o(e),o(i),o(a)),M(s,m)}}}function wf(c){let e;return{c(){e=r(`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},l(t){e=l(t,`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function vf(c){let e;return{c(){e=r("Autoregressive Prediction")},l(t){e=l(t,"Autoregressive Prediction")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function yf(c){let e,t="$L$",i,s,a="$L$",h,m;return{c(){e=r(`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=r(t),s=r(`
			samples of the reference trajectory, where `),h=r(a),m=r(` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},l(n){e=l(n,`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=l(n,t),s=l(n,`
			samples of the reference trajectory, where `),h=l(n,a),m=l(n,` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},m(n,$){f(n,e,$),f(n,i,$),f(n,s,$),f(n,h,$),f(n,m,$)},p:V,d(n){n&&(o(e),o(i),o(s),o(h),o(m))}}}function bf(c){let e;return{c(){e=r("shadowing lemma")},l(t){e=l(t,"shadowing lemma")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function _f(c){let e,t,i="i.e.",s,a,h,m,n="e.g.",$,y,d,v;return a=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[bf]},$$scope:{ctx:c}}}),y=new Y({props:{id:"chandramoorthy"}}),{c(){e=r(`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=E("i"),t.textContent=i,s=r(` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),k(a.$$.fragment),h=r(` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),m=E("i"),m.textContent=n,$=P(),k(y.$$.fragment),d=r(`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},l(T){e=l(T,`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=L(T,"I",{"data-svelte-h":!0}),U(t)!=="svelte-1xx6z5c"&&(t.textContent=i),s=l(T,` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),I(a.$$.fragment,T),h=l(T,` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),m=L(T,"I",{"data-svelte-h":!0}),U(m)!=="svelte-1yxphdm"&&(m.textContent=n),$=C(T),I(y.$$.fragment,T),d=l(T,`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},m(T,b){f(T,e,b),f(T,t,b),f(T,s,b),j(a,T,b),f(T,h,b),f(T,m,b),f(T,$,b),j(y,T,b),f(T,d,b),v=!0},p(T,b){const S={};b&1&&(S.$$scope={dirty:b,ctx:T}),a.$set(S)},i(T){v||(_(a.$$.fragment,T),_(y.$$.fragment,T),v=!0)},o(T){x(a.$$.fragment,T),x(y.$$.fragment,T),v=!1},d(T){T&&(o(e),o(t),o(s),o(h),o(m),o($),o(d)),M(a,T),M(y,T)}}}function xf(c){let e,t,i,s;return t=new Y({props:{id:"chandramoorthy"}}),{c(){e=r(`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),k(t.$$.fragment),i=r(`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},l(a){e=l(a,`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),I(t.$$.fragment,a),i=l(a,`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},m(a,h){f(a,e,h),j(t,a,h),f(a,i,h),s=!0},p:V,i(a){s||(_(t.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),s=!1},d(a){a&&(o(e),o(i)),M(t,a)}}}function kf(c){let e;return{c(){e=r("Radau")},l(t){e=l(t,"Radau")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function If(c){let e;return{c(){e=r(`Comparing the distribution of an exponential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},l(t){e=l(t,`Comparing the distribution of an exponential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function jf(c){let e;return{c(){e=r(`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},l(t){e=l(t,`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Mf(c){let e;return{c(){e=r(`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},l(t){e=l(t,`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Tf(c){let e;return{c(){e=r(`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},l(t){e=l(t,`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Af(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function zf(c){let e;return{c(){e=r("Radau")},l(t){e=l(t,"Radau")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Ef(c){let e;return{c(){e=r("RK45")},l(t){e=l(t,"RK45")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Lf(c){let e,t,i,s,a,h,m,n;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Af]},$$scope:{ctx:c}}}),s=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[zf]},$$scope:{ctx:c}}}),h=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[Ef]},$$scope:{ctx:c}}}),{c(){e=r(`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),k(t.$$.fragment),i=r(" uses the "),k(s.$$.fragment),a=r(" solver by default, and this is what I used to generate the dataset. "),k(h.$$.fragment),m=r(` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},l($){e=l($,`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),I(t.$$.fragment,$),i=l($," uses the "),I(s.$$.fragment,$),a=l($," solver by default, and this is what I used to generate the dataset. "),I(h.$$.fragment,$),m=l($,` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},m($,y){f($,e,y),j(t,$,y),f($,i,y),j(s,$,y),f($,a,y),j(h,$,y),f($,m,y),n=!0},p($,y){const d={};y&1&&(d.$$scope={dirty:y,ctx:$}),t.$set(d);const v={};y&1&&(v.$$scope={dirty:y,ctx:$}),s.$set(v);const T={};y&1&&(T.$$scope={dirty:y,ctx:$}),h.$set(T)},i($){n||(_(t.$$.fragment,$),_(s.$$.fragment,$),_(h.$$.fragment,$),n=!0)},o($){x(t.$$.fragment,$),x(s.$$.fragment,$),x(h.$$.fragment,$),n=!1},d($){$&&(o(e),o(i),o(a),o(m)),M(t,$),M(s,$),M(h,$)}}}function Pf(c){let e;return{c(){e=r("solve_ivp")},l(t){e=l(t,"solve_ivp")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Cf(c){let e,t,i,s;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[Pf]},$$scope:{ctx:c}}}),{c(){e=r(`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),k(t.$$.fragment),i=r(" is used to produce the IVP solver outputs.")},l(a){e=l(a,`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),I(t.$$.fragment,a),i=l(a," is used to produce the IVP solver outputs.")},m(a,h){f(a,e,h),j(t,a,h),f(a,i,h),s=!0},p(a,h){const m={};h&1&&(m.$$scope={dirty:h,ctx:a}),t.$set(m)},i(a){s||(_(t.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),s=!1},d(a){a&&(o(e),o(i)),M(t,a)}}}function Hf(c){let e;return{c(){e=r(`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},l(t){e=l(t,`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Sf(c){let e;return{c(){e=r("Discussion")},l(t){e=l(t,"Discussion")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Rf(c){let e,t,i,s="$2H$",a,h,m="$H$",n,$,y;return t=new Y({props:{id:"challu"}}),{c(){e=r("This project has probed the potential of the NHiTS neural architecture ("),k(t.$$.fragment),i=r(`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),a=r(s),h=r(`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=r(m),$=r(` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},l(d){e=l(d,"This project has probed the potential of the NHiTS neural architecture ("),I(t.$$.fragment,d),i=l(d,`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),a=l(d,s),h=l(d,`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=l(d,m),$=l(d,` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},m(d,v){f(d,e,v),j(t,d,v),f(d,i,v),f(d,a,v),f(d,h,v),f(d,n,v),f(d,$,v),y=!0},p:V,i(d){y||(_(t.$$.fragment,d),y=!0)},o(d){x(t.$$.fragment,d),y=!1},d(d){d&&(o(e),o(i),o(a),o(h),o(n),o($)),M(t,d)}}}function Nf(c){let e;return{c(){e=r(`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},l(t){e=l(t,`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Gf(c){let e;return{c(){e=r(`As already mentioned, it is well understood from dynamical systems theory that the
			saddle point at the origin of the Lorenz Attractor consists of a stable 2-d manifold and
			a highly unstable 1-d manifold. What this study suggests, and what is possibly not as
			well established, is that the predictability of the Lorenz Attractor largely depends on
			the trajectory's proximity to the origin. Trajectories on the attractor that remain
			sufficiently far from the origin are easily forecast by the model with high
			accuracy—including the transitions between each of the two lobes. But as
			trajectories approach the origin, and their velocities approach zero, they become
			asymptotically less predictable in the time period immediately before and after their
			transit past the origin (as the minimum distance to the origin decreases, this time
			period also increases). Fortunately, such trajectories appear to occur quite rarely on
			the attractor; in my experiments, when initial conditions are selected randomly from a
			point within the attractor volume, the trajectory has about a 1% chance of passing
			within a Euclidean distance of 3 or less from the origin within its first 150 seconds.
		`)},l(t){e=l(t,`As already mentioned, it is well understood from dynamical systems theory that the
			saddle point at the origin of the Lorenz Attractor consists of a stable 2-d manifold and
			a highly unstable 1-d manifold. What this study suggests, and what is possibly not as
			well established, is that the predictability of the Lorenz Attractor largely depends on
			the trajectory's proximity to the origin. Trajectories on the attractor that remain
			sufficiently far from the origin are easily forecast by the model with high
			accuracy—including the transitions between each of the two lobes. But as
			trajectories approach the origin, and their velocities approach zero, they become
			asymptotically less predictable in the time period immediately before and after their
			transit past the origin (as the minimum distance to the origin decreases, this time
			period also increases). Fortunately, such trajectories appear to occur quite rarely on
			the attractor; in my experiments, when initial conditions are selected randomly from a
			point within the attractor volume, the trajectory has about a 1% chance of passing
			within a Euclidean distance of 3 or less from the origin within its first 150 seconds.
		`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Df(c){let e,t="$38.55$",i,s,a="$38.45$",h,m,n="$38.6$",$,y,d,v='<a href="#outliers">1</a>',T;return{c(){e=r(`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately `),i=r(t),s=r(`. As the model's temporal resolution is
			increased, the bounds on this value become tighter. For Models 2 and 3, a trajectory
			having a local maximum Z coordinate in the range of `),h=r(a),m=r(" to "),$=r(n),y=r(`
			is a necessary condition for the model's sMAPE error to exceed 5 in the time period immediately
			following its transit past the origin`),d=E("sup"),d.innerHTML=v,T=r(".")},l(b){e=l(b,`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately `),i=l(b,t),s=l(b,`. As the model's temporal resolution is
			increased, the bounds on this value become tighter. For Models 2 and 3, a trajectory
			having a local maximum Z coordinate in the range of `),h=l(b,a),m=l(b," to "),$=l(b,n),y=l(b,`
			is a necessary condition for the model's sMAPE error to exceed 5 in the time period immediately
			following its transit past the origin`),d=L(b,"SUP",{"data-svelte-h":!0}),U(d)!=="svelte-1m8nv3a"&&(d.innerHTML=v),T=l(b,".")},m(b,S){f(b,e,S),f(b,i,S),f(b,s,S),f(b,h,S),f(b,m,S),f(b,$,S),f(b,y,S),f(b,d,S),f(b,T,S)},p:V,d(b){b&&(o(e),o(i),o(s),o(h),o(m),o($),o(y),o(d),o(T))}}}function Ff(c){let e,t,i="minimum",s,a="$38.45$",h,m,n="$38.6$",$,y;return{c(){e=r(`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the next local `),t=E("i"),t.textContent=i,s=r(`
				point, as defined previously, that follows the local maximum Z coordinate. The first
				graph shows the entire range of local maximum Z coordinates for Models 2, 3.1, and 3.2.
				The second graph zooms in on the bounds of `),h=r(a),m=r(" to "),$=r(n),y=r(".")},l(d){e=l(d,`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the next local `),t=L(d,"I",{"data-svelte-h":!0}),U(t)!=="svelte-1af7b6n"&&(t.textContent=i),s=l(d,`
				point, as defined previously, that follows the local maximum Z coordinate. The first
				graph shows the entire range of local maximum Z coordinates for Models 2, 3.1, and 3.2.
				The second graph zooms in on the bounds of `),h=l(d,a),m=l(d," to "),$=l(d,n),y=l(d,".")},m(d,v){f(d,e,v),f(d,t,v),f(d,s,v),f(d,h,v),f(d,m,v),f(d,$,v),f(d,y,v)},p:V,d(d){d&&(o(e),o(t),o(s),o(h),o(m),o($),o(y))}}}function qf(c){let e;return{c(){e=r("Lorenz Map")},l(t){e=l(t,"Lorenz Map")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Zf(c){let e,t,i,s="$38.55$",a,h,m;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[qf]},$$scope:{ctx:c}}}),{c(){e=r(`Lorenz himself also noticed peculiar patterns involving the local maximum Z coordinate
			and formulated the `),k(t.$$.fragment),i=r(` to study the patterns. The map is shown below for Model 3.2's test set. The x coordinate
			at the transition point of the map (vertical dotted red line) corresponds almost perfectly
			with the limit suggested by the above error plots, about `),a=r(s),h=r(`. And the y
			coordinate that gives the best fit (minimum classification error) for separating
			trajectories that switch lobes at the end of the current orbital cycle from those that
			remain on the same lobe for at least another orbital cycle (horizontal dotted red line)
			also corresponds almost perfectly with this value. In other words, the most difficult
			trajectories for our models to predict are the ones that a) achieve the near-maximum
			observed Z coordinate (approximately 48) after passing by the origin, and b) straddle
			the threshold between transitioning from one lobe to the other or remaining on the
			current lobe for at least another orbital cycle.`)},l(n){e=l(n,`Lorenz himself also noticed peculiar patterns involving the local maximum Z coordinate
			and formulated the `),I(t.$$.fragment,n),i=l(n,` to study the patterns. The map is shown below for Model 3.2's test set. The x coordinate
			at the transition point of the map (vertical dotted red line) corresponds almost perfectly
			with the limit suggested by the above error plots, about `),a=l(n,s),h=l(n,`. And the y
			coordinate that gives the best fit (minimum classification error) for separating
			trajectories that switch lobes at the end of the current orbital cycle from those that
			remain on the same lobe for at least another orbital cycle (horizontal dotted red line)
			also corresponds almost perfectly with this value. In other words, the most difficult
			trajectories for our models to predict are the ones that a) achieve the near-maximum
			observed Z coordinate (approximately 48) after passing by the origin, and b) straddle
			the threshold between transitioning from one lobe to the other or remaining on the
			current lobe for at least another orbital cycle.`)},m(n,$){f(n,e,$),j(t,n,$),f(n,i,$),f(n,a,$),f(n,h,$),m=!0},p(n,$){const y={};$&1&&(y.$$scope={dirty:$,ctx:n}),t.$set(y)},i(n){m||(_(t.$$.fragment,n),m=!0)},o(n){x(t.$$.fragment,n),m=!1},d(n){n&&(o(e),o(i),o(a),o(h)),M(t,n)}}}function Vf(c){let e,t="$n$",i,s,a="$n+1$",h,m,n="$Z_{n+1}$",$,y,d="$38.55$",v,T;return{c(){e=r("The Lorenz Map computed from the test set used with Model 3.2. It plots the "),i=r(t),s=r(`th
				local Z maximum coordinate against the `),h=r(a),m=r(`th. The horizontal red line
				separates the trajectories that switch lobes shortly after passing through `),$=r(n),y=r(`
				and those that remain on the same lobe for at least one more orbital cycle. The vertical
				red line marks the estimated point at which the map's derivative switches from positive
				to negative. For both lines, the computed value is approximately `),v=r(d),T=r(`, in
				near perfect agreement with the statistic for predicting large sMAPE errors.`)},l(b){e=l(b,"The Lorenz Map computed from the test set used with Model 3.2. It plots the "),i=l(b,t),s=l(b,`th
				local Z maximum coordinate against the `),h=l(b,a),m=l(b,`th. The horizontal red line
				separates the trajectories that switch lobes shortly after passing through `),$=l(b,n),y=l(b,`
				and those that remain on the same lobe for at least one more orbital cycle. The vertical
				red line marks the estimated point at which the map's derivative switches from positive
				to negative. For both lines, the computed value is approximately `),v=l(b,d),T=l(b,`, in
				near perfect agreement with the statistic for predicting large sMAPE errors.`)},m(b,S){f(b,e,S),f(b,i,S),f(b,s,S),f(b,h,S),f(b,m,S),f(b,$,S),f(b,y,S),f(b,v,S),f(b,T,S)},p:V,d(b){b&&(o(e),o(i),o(s),o(h),o(m),o($),o(y),o(v),o(T))}}}function Uf(c){let e;return{c(){e=r(`A close-up of the threshold region between trajectories that switch lobes (orange)
				and those that do not (blue). The groups are not linearly separable by the Z
				coordinate local maximum.`)},l(t){e=l(t,`A close-up of the threshold region between trajectories that switch lobes (orange)
				and those that do not (blue). The groups are not linearly separable by the Z
				coordinate local maximum.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Bf(c){let e,t="$38.55$",i,s,a="$\\approx 38.55$",h,m;return{c(){e=r(`It would seem in one sense that the entire predictive complexity of the Lorenz
			Attractor is converging towards this Z value around `),i=r(t),s=r(`. As long as the local
			maximum Z coordinate of the trajectory does not pass through a narrow interval around
			this value, we can be certain (according to the statistics of all of the test sets in
			this study) that the model will continue to forecast the trajectory with a sMAPE error
			less than 5. If a trajectory does pass through this interval, then the model has a
			roughly 60% chance of exhibiting a sMAPE error greater than 5 in the period immediately
			following the peak, until the next local maximum Z coordinate is reached. How might we
			exploit this observation to improve predictability? If the system were augmented with a
			control input of some sort, then the target for that control could be to perturb the
			trajectories so that they avoid passing through this critical region around Z `),h=r(a),m=r(`.
			The results of this study suggest that this alone might make the Lorenz Attractor
			dynamics entirely predictable.`)},l(n){e=l(n,`It would seem in one sense that the entire predictive complexity of the Lorenz
			Attractor is converging towards this Z value around `),i=l(n,t),s=l(n,`. As long as the local
			maximum Z coordinate of the trajectory does not pass through a narrow interval around
			this value, we can be certain (according to the statistics of all of the test sets in
			this study) that the model will continue to forecast the trajectory with a sMAPE error
			less than 5. If a trajectory does pass through this interval, then the model has a
			roughly 60% chance of exhibiting a sMAPE error greater than 5 in the period immediately
			following the peak, until the next local maximum Z coordinate is reached. How might we
			exploit this observation to improve predictability? If the system were augmented with a
			control input of some sort, then the target for that control could be to perturb the
			trajectories so that they avoid passing through this critical region around Z `),h=l(n,a),m=l(n,`.
			The results of this study suggest that this alone might make the Lorenz Attractor
			dynamics entirely predictable.`)},m(n,$){f(n,e,$),f(n,i,$),f(n,s,$),f(n,h,$),f(n,m,$)},p:V,d(n){n&&(o(e),o(i),o(s),o(h),o(m))}}}function Wf(c){let e,t,i="is",s;return{c(){e=r(`Is this subtle inconsistency, in which the local Z maximum determines whether a
			transition will occur for all but a tiny range of values, an inherent property of the
			Lorenz Attractor, or could it somehow be a byproduct of the rounding error in the IVP
			solver? I don't know (please let me know if you do!) If it's the former, then I would
			argue that this imparts a stochastic quality that seems incongruous with what we know to
			otherwise be a deterministic system. If it's the latter, then how might the model
			perform on a dataset for which the local Z maximum `),t=E("i"),t.textContent=i,s=r(` linearly separable between these
			two groups, assuming it's possible to generate one? For such a dataset, we should expect
			that the model's predictions, although they may still have non-zero error, should not waiver
			between the two lobes, as the models trained here do in the toughest test cases, but should
			instead commit to the correct lobe in 100% of test cases.`)},l(a){e=l(a,`Is this subtle inconsistency, in which the local Z maximum determines whether a
			transition will occur for all but a tiny range of values, an inherent property of the
			Lorenz Attractor, or could it somehow be a byproduct of the rounding error in the IVP
			solver? I don't know (please let me know if you do!) If it's the former, then I would
			argue that this imparts a stochastic quality that seems incongruous with what we know to
			otherwise be a deterministic system. If it's the latter, then how might the model
			perform on a dataset for which the local Z maximum `),t=L(a,"I",{"data-svelte-h":!0}),U(t)!=="svelte-1ejn32g"&&(t.textContent=i),s=l(a,` linearly separable between these
			two groups, assuming it's possible to generate one? For such a dataset, we should expect
			that the model's predictions, although they may still have non-zero error, should not waiver
			between the two lobes, as the models trained here do in the toughest test cases, but should
			instead commit to the correct lobe in 100% of test cases.`)},m(a,h){f(a,e,h),f(a,t,h),f(a,s,h)},p:V,d(a){a&&(o(e),o(t),o(s))}}}function Of(c){let e,t="$dt$",i,s,a="$dt$",h,m,n="$[1.8\\mathrm{e}{-4}, 1.8\\mathrm{e}{-5}]$",$,y,d="$1.8\\mathrm{e}{-5}$",v,T;return{c(){e=r(`(Upon discovering this apparent stochastic quality in the trajectories, I ran some
			follow-up experiments to see if I could generate such a dataset by using a smaller `),i=r(t),s=r(`
			parameter in the IVP solver. I tried `),h=r(a),m=r("s in the range "),$=r(n),y=r(`.
			In all cases, the IVP solver eventually produced a trajectory that violated the linear
			separability requirement for the local Z maximum, and at `),v=r(d),T=r(`, the
			numerical stability of the solver appeared to break down.)`)},l(b){e=l(b,`(Upon discovering this apparent stochastic quality in the trajectories, I ran some
			follow-up experiments to see if I could generate such a dataset by using a smaller `),i=l(b,t),s=l(b,`
			parameter in the IVP solver. I tried `),h=l(b,a),m=l(b,"s in the range "),$=l(b,n),y=l(b,`.
			In all cases, the IVP solver eventually produced a trajectory that violated the linear
			separability requirement for the local Z maximum, and at `),v=l(b,d),T=l(b,`, the
			numerical stability of the solver appeared to break down.)`)},m(b,S){f(b,e,S),f(b,i,S),f(b,s,S),f(b,h,S),f(b,m,S),f(b,$,S),f(b,y,S),f(b,v,S),f(b,T,S)},p:V,d(b){b&&(o(e),o(i),o(s),o(h),o(m),o($),o(y),o(v),o(T))}}}function Kf(c){let e;return{c(){e=r("shadowing lemma")},l(t){e=l(t,"shadowing lemma")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Jf(c){let e,t,i,s,a,h,m="IVP solver",n,$,y,d;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[Kf]},$$scope:{ctx:c}}}),s=new Y({props:{id:"chandramoorthy"}}),$=new Y({props:{id:"chandramoorthy"}}),{c(){e=r("In closing, I will touch again on the implications of the "),k(t.$$.fragment),i=r(" and research such as "),k(s.$$.fragment),a=r(` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),h=E("i"),h.textContent=m,n=r(`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),k($.$$.fragment),y=r(` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},l(v){e=l(v,"In closing, I will touch again on the implications of the "),I(t.$$.fragment,v),i=l(v," and research such as "),I(s.$$.fragment,v),a=l(v,` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),h=L(v,"I",{"data-svelte-h":!0}),U(h)!=="svelte-17gf2g4"&&(h.textContent=m),n=l(v,`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),I($.$$.fragment,v),y=l(v,` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},m(v,T){f(v,e,T),j(t,v,T),f(v,i,T),j(s,v,T),f(v,a,T),f(v,h,T),f(v,n,T),j($,v,T),f(v,y,T),d=!0},p(v,T){const b={};T&1&&(b.$$scope={dirty:T,ctx:v}),t.$set(b)},i(v){d||(_(t.$$.fragment,v),_(s.$$.fragment,v),_($.$$.fragment,v),d=!0)},o(v){x(t.$$.fragment,v),x(s.$$.fragment,v),x($.$$.fragment,v),d=!1},d(v){v&&(o(e),o(i),o(a),o(h),o(n),o(y)),M(t,v),M(s,v),M($,v)}}}function Xf(c){let e;return{c(){e=r("References")},l(t){e=l(t,"References")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Yf(c){let e,t,i,s,a,h,m,n,$,y,d,v,T="Michael Horgan",b,S,q="michaelghorgan at gmail",z,H,Z,O,nt,K,D,F,J,tt,X,ft,at,R,W="$2H$",gi,wi,Bi="$H$",va,ya,hr="$H$",ba,_a,cr="$dt \\approx 0.015$",xa,ka,Ia,wn,ja,fr="$\\lt \\approx 5$",Ma,Ta,Aa,ot,za,mr="$38.45$",Ea,La,ur="$38.6$",Pa,Ca,pr="$38.55$",Ha,Sa,yt,Ra,bt,Na,Ga,_t,Da,xt,kt,It,Fa,mt,Wi,vn,qa,jt,Za,vi,dr=`<sup id="paperspace">2. All of my experiments were run on a Paperspace VM using two RTX 5000s, each
					with 16 GB of RAM.</sup>`,Va,Oi,Mt,Ua,Tt,Ba,Wa,At,Oa,zt,Ka,yi,yn,bn,Et,$r,Ja,Lt,Xa,Pt,Ya,bi,Ki,gr=zh+"",Qa,to,Ct,eo,_i,Ji,wr=Eh+"",no,io,Ht,St,ao,Rt,oo,Nt,so,Gt,ro,Dt,lo,Ft,ho,qt,Zt,Vt,Ut,co,xi,Xi,vr=Lh+"",fo,mo,Bt,uo,Wt,po,Ot,$o,Kt,go,_n,yr=`<p><sup id="lyapunov">1. Although initially the distance will grow exponentially, the maximum
					separation between trajectories is also bounded by the fact that all
					trajectories remain on the attractor.</sup></p> <p><sup id="initial-conditions">2. In the course of this project, I experimented with several different methods
					for generating trajectories, but I still have some open questions about the best
					way to generate a dataset that effectively samples the phase space, <i>e.g.</i> how
					to choose the initial conditions, how to choose the number of unique initial conditions
					vs. to the total trajectory length, etc.</sup></p>`,wo,Jt,vo,Xt,yo,xn,bo,Yt,_o,Yi,br=Ph+"",xo,ko,Qt,Io,te,kn,_r,jo,ee,Mo,ne,To,ie,In,xr=`<img class="object-contain max-w-80" src="${`${Q}/Model1SmallErr.png`}" alt="Model 1 - small error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1MediumErr.png`}" alt="Model 1 - medium error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1LargeErr.png`}" alt="Model 1 - large error example"/>`,Ao,ae,zo,oe,Eo,se,jn,kr,Lo,re,Po,le,he,Co,ce,pt,Ir,Ho,fe,So,me,Ro,ue,No,pe,Go,Mn,Do,Tn,jr=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
			increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of
			the network, and I've also significantly increased the amount of compression in the
			initial stacks. Because the network is much deeper, I also added layer normalization
			after each block to try to help reduce convergence time. Lastly, I increased the number
			of training steps and reduced the initial learning rate by an order of magnitude, and I
			modified the learning rate schedule to reduce by half whenever the validation loss does
			not decrease from the previous validation step.`,Fo,An,zn,Mr,de,qo,$e,ge,Zo,En,Ln,Tr,we,Vo,ve,Uo,ye,Pn,Ar,Bo,be,Wo,_e,Oo,Cn,Hn,zr,xe,Ko,ke,Jo,Ie,Xo,je,Yo,Me,Qo,Te,Ae,ze,ts,Sn,Rn,Er,Ee,es,Nn,ns,Lr="$\\le{5}$",is,as,os,Le,ss,Gn,Dn,Pr,Pe,rs,Ce,ls,He,hs,Se,cs,Re,fs,Fn,ms,Ne,us,Ge,ps,Cr="$dt \\approx 0.003$",ds,$s,gs,qn,Zn,Hr,De,ws,ki,Sr=`Here again we see a very marginal improvement but no clear evidence that this approach
			may lead to a fully stable model (<i>i.e.</i> one without an asymptotic error curve). Reducing
			the temporal resolution of the model further will drastically increase the computational
			requirements of training, which are beyond my budget, so I must conclude this avenue of investigation
			here.`,vs,Fe,ys,qe,Ze,Ve,Rr=Ch+"",bs,_s,Vn,xs,Ue,ks,Is,Un,Bn,Nr,Be,js,dt,Ms,Gr="$z \\approx 0.4$",Ts,As,Dr="$z \\approx 1.35$",zs,Es,Ls,We,Ps,Wn,On,Fr,Oe,Cs,Ii,qr=`However, if we search for the model trajectories that pass closest to the origin, we
			find examples where the model output breaks down badly:`,Hs,Kn,Jn,Zr,Ke,Ss,Je,Rs,Xe,Xn,Vr,Ns,Ye,Gs,Qe,Ds,tn,Fs,en,nn,an,on,qs,sn,Yn,Ur=`<img class="object-contain w-full max-w-xl" src="${`${Q}/max_z.png`}" alt="Model 3 - maxium Z coordinate error distribution"/> <img class="object-contain w-full max-w-xl" src="${`${Q}/max_z_zoomed.png`}" alt="maximum Z coordinate error distribution zoomed"/>`,Zs,rn,Vs,ln,Us,hn,Qn,Br,Bs,cn,Ws,ji,Wr=`This makes perfect sense. The trajectories that are the most difficult for the model to
			predict are the ones for which the tiniest perturbation can determine whether it
			transitions to the other lobe or remains on the current lobe. Finally, we have a concise
			way to describe the complexity of this prediction task. For the vast majority of
			trajectories, their transition probability is deterministic, either 100% or 0%, based
			solely on their Z coordinate local maximum. But there is a very narrow region of Z
			coordinates where the transition probability suddenly shifts to closer to 50%.`,Os,fn,ti,Or,Ks,mn,Js,un,Xs,pn,Ys,dn,Qs,$n,tr,Mi,Qi,ut,er,Ti,Kr="second-to-last",nr,Jr="$38.55$",ir,ar,or,gn,sr,ei,$a;return e=new Ah({}),i=new Gh({}),h=new Mh({}),K=new B({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[Dh]},$$scope:{ctx:c}}}),F=new Fi({props:{id:"tldr",$$slots:{default:[Fh]},$$scope:{ctx:c}}}),at=new Y({props:{id:"challu"}}),yt=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[qh]},$$scope:{ctx:c}}}),bt=new B({props:{href:"https://en.wikipedia.org/wiki/Symmetric_mean_absolute_percentage_error",$$slots:{default:[Zh]},$$scope:{ctx:c}}}),_t=new Di({props:{id:"intro",$$slots:{default:[Vh]},$$scope:{ctx:c}}}),xt=new G({props:{$$slots:{default:[Uh]},$$scope:{ctx:c}}}),kt=new G({props:{$$slots:{default:[Bh]},$$scope:{ctx:c}}}),It=new G({props:{$$slots:{default:[Wh]},$$scope:{ctx:c}}}),jt=new B({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[Oh]},$$scope:{ctx:c}}}),Tt=new B({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[Kh]},$$scope:{ctx:c}}}),At=new Di({props:{id:"lorenz",$$slots:{default:[Jh]},$$scope:{ctx:c}}}),zt=new G({props:{$$slots:{default:[tc]},$$scope:{ctx:c}}}),Lt=new et({props:{$$slots:{default:[ec]},$$scope:{ctx:c}}}),Pt=new G({props:{$$slots:{default:[nc]},$$scope:{ctx:c}}}),Ct=new G({props:{$$slots:{default:[oc]},$$scope:{ctx:c}}}),Ht=new G({props:{$$slots:{default:[rc]},$$scope:{ctx:c}}}),St=new G({props:{$$slots:{default:[hc]},$$scope:{ctx:c}}}),Rt=new Di({props:{id:"nhits",$$slots:{default:[cc]},$$scope:{ctx:c}}}),Nt=new G({props:{$$slots:{default:[fc]},$$scope:{ctx:c}}}),Gt=new G({props:{$$slots:{default:[mc]},$$scope:{ctx:c}}}),Dt=new G({props:{$$slots:{default:[uc]},$$scope:{ctx:c}}}),Ft=new Di({props:{id:"experiments",$$slots:{default:[pc]},$$scope:{ctx:c}}}),qt=new G({props:{$$slots:{default:[dc]},$$scope:{ctx:c}}}),Zt=new Fi({props:{id:"datagen",$$slots:{default:[$c]},$$scope:{ctx:c}}}),Vt=new G({props:{$$slots:{default:[yc]},$$scope:{ctx:c}}}),Ut=new G({props:{$$slots:{default:[kc]},$$scope:{ctx:c}}}),Bt=new G({props:{indent:"indent-0",$$slots:{default:[Ic]},$$scope:{ctx:c}}}),Wt=new G({props:{$$slots:{default:[jc]},$$scope:{ctx:c}}}),Ot=new G({props:{indent:"indent-0",$$slots:{default:[Mc]},$$scope:{ctx:c}}}),Kt=new G({props:{$$slots:{default:[Tc]},$$scope:{ctx:c}}}),Jt=new Fi({props:{id:"model-1",$$slots:{default:[Ac]},$$scope:{ctx:c}}}),Xt=new G({props:{$$slots:{default:[zc]},$$scope:{ctx:c}}}),xn=new rr({props:{hps:Hh}}),Yt=new G({props:{indent:"indent-0",$$slots:{default:[Ec]},$$scope:{ctx:c}}}),Qt=new G({props:{$$slots:{default:[Lc]},$$scope:{ctx:c}}}),ee=new et({props:{$$slots:{default:[Pc]},$$scope:{ctx:c}}}),ne=new G({props:{$$slots:{default:[Cc]},$$scope:{ctx:c}}}),ae=new et({props:{$$slots:{default:[Hc]},$$scope:{ctx:c}}}),oe=new G({props:{$$slots:{default:[Sc]},$$scope:{ctx:c}}}),re=new et({props:{$$slots:{default:[Rc]},$$scope:{ctx:c}}}),le=new G({props:{$$slots:{default:[Gc]},$$scope:{ctx:c}}}),he=new G({props:{$$slots:{default:[Fc]},$$scope:{ctx:c}}}),fe=new et({props:{$$slots:{default:[qc]},$$scope:{ctx:c}}}),me=new G({props:{$$slots:{default:[Zc]},$$scope:{ctx:c}}}),ue=new Fi({props:{id:"model-2",$$slots:{default:[Vc]},$$scope:{ctx:c}}}),pe=new G({props:{$$slots:{default:[Uc]},$$scope:{ctx:c}}}),Mn=new rr({props:{hps:Sh}}),de=new et({props:{$$slots:{default:[Bc]},$$scope:{ctx:c}}}),$e=new G({props:{$$slots:{default:[Wc]},$$scope:{ctx:c}}}),ge=new G({props:{$$slots:{default:[Oc]},$$scope:{ctx:c}}}),we=new et({props:{$$slots:{default:[Kc]},$$scope:{ctx:c}}}),ve=new G({props:{$$slots:{default:[Jc]},$$scope:{ctx:c}}}),be=new et({props:{$$slots:{default:[Xc]},$$scope:{ctx:c}}}),_e=new G({props:{$$slots:{default:[Yc]},$$scope:{ctx:c}}}),xe=new et({props:{$$slots:{default:[Qc]},$$scope:{ctx:c}}}),ke=new G({props:{$$slots:{default:[tf]},$$scope:{ctx:c}}}),Ie=new Fi({props:{id:"model-3",$$slots:{default:[ef]},$$scope:{ctx:c}}}),je=new G({props:{$$slots:{default:[nf]},$$scope:{ctx:c}}}),Me=new Wl({props:{$$slots:{default:[af]},$$scope:{ctx:c}}}),Te=new G({props:{$$slots:{default:[sf]},$$scope:{ctx:c}}}),Ae=new G({props:{$$slots:{default:[rf]},$$scope:{ctx:c}}}),ze=new G({props:{$$slots:{default:[lf]},$$scope:{ctx:c}}}),Ee=new et({props:{$$slots:{default:[hf]},$$scope:{ctx:c}}}),Le=new G({props:{$$slots:{default:[cf]},$$scope:{ctx:c}}}),Pe=new et({props:{$$slots:{default:[ff]},$$scope:{ctx:c}}}),Ce=new G({props:{$$slots:{default:[mf]},$$scope:{ctx:c}}}),He=new Wl({props:{$$slots:{default:[uf]},$$scope:{ctx:c}}}),Se=new G({props:{$$slots:{default:[pf]},$$scope:{ctx:c}}}),Re=new G({props:{$$slots:{default:[df]},$$scope:{ctx:c}}}),Fn=new rr({props:{hps:Rh}}),Ne=new G({props:{style:"my-4 text-sm font-serif",$$slots:{default:[gf]},$$scope:{ctx:c}}}),De=new et({props:{$$slots:{default:[wf]},$$scope:{ctx:c}}}),Fe=new Fi({props:{id:"arpred",$$slots:{default:[vf]},$$scope:{ctx:c}}}),qe=new G({props:{$$slots:{default:[yf]},$$scope:{ctx:c}}}),Ze=new G({props:{$$slots:{default:[_f]},$$scope:{ctx:c}}}),Ve=new G({props:{$$slots:{default:[xf]},$$scope:{ctx:c}}}),Ue=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[kf]},$$scope:{ctx:c}}}),Be=new et({props:{$$slots:{default:[If]},$$scope:{ctx:c}}}),We=new G({props:{$$slots:{default:[jf]},$$scope:{ctx:c}}}),Oe=new et({props:{$$slots:{default:[Mf]},$$scope:{ctx:c}}}),Ke=new et({props:{$$slots:{default:[Tf]},$$scope:{ctx:c}}}),Je=new G({props:{$$slots:{default:[Lf]},$$scope:{ctx:c}}}),Ye=new et({props:{$$slots:{default:[Cf]},$$scope:{ctx:c}}}),Qe=new G({props:{$$slots:{default:[Hf]},$$scope:{ctx:c}}}),tn=new Di({props:{id:"discussion",$$slots:{default:[Sf]},$$scope:{ctx:c}}}),en=new G({props:{$$slots:{default:[Rf]},$$scope:{ctx:c}}}),nn=new G({props:{$$slots:{default:[Nf]},$$scope:{ctx:c}}}),an=new G({props:{$$slots:{default:[Gf]},$$scope:{ctx:c}}}),on=new G({props:{$$slots:{default:[Df]},$$scope:{ctx:c}}}),rn=new et({props:{$$slots:{default:[Ff]},$$scope:{ctx:c}}}),ln=new G({props:{$$slots:{default:[Zf]},$$scope:{ctx:c}}}),cn=new et({props:{$$slots:{default:[Vf]},$$scope:{ctx:c}}}),mn=new et({props:{$$slots:{default:[Uf]},$$scope:{ctx:c}}}),un=new G({props:{$$slots:{default:[Bf]},$$scope:{ctx:c}}}),pn=new G({props:{$$slots:{default:[Wf]},$$scope:{ctx:c}}}),dn=new G({props:{$$slots:{default:[Of]},$$scope:{ctx:c}}}),$n=new G({props:{$$slots:{default:[Jf]},$$scope:{ctx:c}}}),gn=new Di({props:{id:"references",$$slots:{default:[Xf]},$$scope:{ctx:c}}}),ei=new lh({}),{c(){k(e.$$.fragment),t=P(),k(i.$$.fragment),s=P(),a=E("div"),k(h.$$.fragment),m=P(),n=E("div"),$=E("div"),y=r(da),d=P(),v=E("div"),v.textContent=T,b=P(),S=E("div"),S.textContent=q,z=P(),H=E("br"),Z=P(),O=E("div"),nt=r("All code used in this project is available in the github repo: "),k(K.$$.fragment),D=P(),k(F.$$.fragment),J=P(),tt=E("ul"),X=E("li"),ft=r("This project explores the use of the NHiTS "),k(at.$$.fragment),R=r(` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),gi=r(W),wi=r(` points of input, the model is trained
				to predict the next `),va=r(Bi),ya=r(" points of the trajectory, where "),ba=r(hr),_a=r(` is usually 100 and
				`),xa=r(cr),ka=r("."),Ia=P(),wn=E("li"),ja=r(`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),Ma=r(fr),Ta=r(`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),Aa=P(),ot=E("li"),za=r(`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),Ea=r(mr),La=r(" to "),Pa=r(ur),Ca=r(`. As temporal
				resolution of the model is increased, this value converges to approximately `),Ha=r(pr),Sa=r(`,
				which is in near perfect agreement with certain limits implied by the
				`),k(yt.$$.fragment),Ra=r(". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),k(bt.$$.fragment),Na=r(` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),Ga=P(),k(_t.$$.fragment),Da=P(),k(xt.$$.fragment),k(kt.$$.fragment),k(It.$$.fragment),Fa=P(),mt=E("div"),Wi=E("p"),vn=E("sup"),qa=r(`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),k(jt.$$.fragment),Za=P(),vi=E("p"),vi.innerHTML=dr,Va=P(),Oi=E("p"),Mt=E("sup"),Ua=r(`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),k(Tt.$$.fragment),Ba=r(" on the subject"),Wa=P(),k(At.$$.fragment),Oa=P(),k(zt.$$.fragment),Ka=P(),yi=E("div"),yn=E("a"),bn=E("figure"),Et=E("img"),Ja=P(),k(Lt.$$.fragment),Xa=P(),k(Pt.$$.fragment),Ya=P(),bi=E("div"),Ki=E("p"),Qa=r(gr),to=P(),k(Ct.$$.fragment),eo=P(),_i=E("div"),Ji=E("p"),no=r(wr),io=P(),k(Ht.$$.fragment),k(St.$$.fragment),ao=P(),k(Rt.$$.fragment),oo=P(),k(Nt.$$.fragment),so=P(),k(Gt.$$.fragment),ro=P(),k(Dt.$$.fragment),lo=P(),k(Ft.$$.fragment),ho=P(),k(qt.$$.fragment),k(Zt.$$.fragment),k(Vt.$$.fragment),k(Ut.$$.fragment),co=P(),xi=E("div"),Xi=E("p"),fo=r(vr),mo=P(),k(Bt.$$.fragment),uo=P(),k(Wt.$$.fragment),po=P(),k(Ot.$$.fragment),$o=P(),k(Kt.$$.fragment),go=P(),_n=E("div"),_n.innerHTML=yr,wo=P(),k(Jt.$$.fragment),vo=P(),k(Xt.$$.fragment),yo=P(),k(xn.$$.fragment),bo=P(),k(Yt.$$.fragment),_o=P(),Yi=E("div"),xo=r(br),ko=P(),k(Qt.$$.fragment),Io=P(),te=E("figure"),kn=E("img"),jo=P(),k(ee.$$.fragment),Mo=P(),k(ne.$$.fragment),To=P(),ie=E("figure"),In=E("div"),In.innerHTML=xr,Ao=P(),k(ae.$$.fragment),zo=P(),k(oe.$$.fragment),Eo=P(),se=E("figure"),jn=E("img"),Lo=P(),k(re.$$.fragment),Po=P(),k(le.$$.fragment),k(he.$$.fragment),Co=P(),ce=E("figure"),pt=E("img"),Ho=P(),k(fe.$$.fragment),So=P(),k(me.$$.fragment),Ro=P(),k(ue.$$.fragment),No=P(),k(pe.$$.fragment),Go=P(),k(Mn.$$.fragment),Do=P(),Tn=E("p"),Tn.textContent=jr,Fo=P(),An=E("figure"),zn=E("img"),k(de.$$.fragment),qo=P(),k($e.$$.fragment),k(ge.$$.fragment),Zo=P(),En=E("figure"),Ln=E("img"),k(we.$$.fragment),Vo=P(),k(ve.$$.fragment),Uo=P(),ye=E("figure"),Pn=E("img"),Bo=P(),k(be.$$.fragment),Wo=P(),k(_e.$$.fragment),Oo=P(),Cn=E("figure"),Hn=E("img"),k(xe.$$.fragment),Ko=P(),k(ke.$$.fragment),Jo=P(),k(Ie.$$.fragment),Xo=P(),k(je.$$.fragment),Yo=P(),k(Me.$$.fragment),Qo=P(),k(Te.$$.fragment),k(Ae.$$.fragment),k(ze.$$.fragment),ts=P(),Sn=E("figure"),Rn=E("img"),k(Ee.$$.fragment),es=P(),Nn=E("p"),ns=r("Still, with these 10x increases, the trajectories that pass within an L2 distance "),is=r(Lr),as=r(`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),os=P(),k(Le.$$.fragment),ss=P(),Gn=E("figure"),Dn=E("img"),k(Pe.$$.fragment),rs=P(),k(Ce.$$.fragment),ls=P(),k(He.$$.fragment),hs=P(),k(Se.$$.fragment),cs=P(),k(Re.$$.fragment),fs=P(),k(Fn.$$.fragment),ms=P(),k(Ne.$$.fragment),us=P(),Ge=E("p"),ps=r("After retraining with "),ds=r(Cr),$s=r(`, we again see a very slight improvement
			over the previous models:`),gs=P(),qn=E("figure"),Zn=E("img"),k(De.$$.fragment),ws=P(),ki=E("p"),ki.innerHTML=Sr,vs=P(),k(Fe.$$.fragment),ys=P(),k(qe.$$.fragment),k(Ze.$$.fragment),k(Ve.$$.fragment),bs=r(Rr),_s=P(),Vn=E("p"),xs=r("Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),k(Ue.$$.fragment),ks=r(" solver's outputs:"),Is=P(),Un=E("figure"),Bn=E("img"),k(Be.$$.fragment),js=P(),dt=E("p"),Ms=r(`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),Ts=r(Gr),As=r(" for the solver compared to "),zs=r(Dr),Es=r(`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),Ls=P(),k(We.$$.fragment),Ps=P(),Wn=E("figure"),On=E("img"),k(Oe.$$.fragment),Cs=P(),Ii=E("p"),Ii.textContent=qr,Hs=P(),Kn=E("figure"),Jn=E("img"),k(Ke.$$.fragment),Ss=P(),k(Je.$$.fragment),Rs=P(),Xe=E("figure"),Xn=E("img"),Ns=P(),k(Ye.$$.fragment),Gs=P(),k(Qe.$$.fragment),Ds=P(),k(tn.$$.fragment),Fs=P(),k(en.$$.fragment),k(nn.$$.fragment),k(an.$$.fragment),k(on.$$.fragment),qs=P(),sn=E("figure"),Yn=E("div"),Yn.innerHTML=Ur,Zs=P(),k(rn.$$.fragment),Vs=P(),k(ln.$$.fragment),Us=P(),hn=E("figure"),Qn=E("img"),Bs=P(),k(cn.$$.fragment),Ws=P(),ji=E("p"),ji.textContent=Wr,Os=P(),fn=E("figure"),ti=E("img"),Ks=P(),k(mn.$$.fragment),Js=P(),k(un.$$.fragment),Xs=P(),k(pn.$$.fragment),Ys=P(),k(dn.$$.fragment),Qs=P(),k($n.$$.fragment),tr=P(),Mi=E("div"),Qi=E("p"),ut=E("sup"),er=r(`1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose `),Ti=E("i"),Ti.textContent=Kr,nr=r(`
					local maximum Z coordinate passes through the `),ir=r(Jr),ar=r(` boundary region, and whose
					associated local minimum point is so small—0.49, the smallest encountered in
					all of the training sets that were generated for this study—that the highly
					unstable conditions in the region adversely affect not only the prediction accuracy
					when the local minimum is within the horizon window, but also when it is within the
					input window of the model.`),or=P(),k(gn.$$.fragment),sr=P(),k(ei.$$.fragment),this.h()},l(u){I(e.$$.fragment,u),t=C(u),I(i.$$.fragment,u),s=C(u),a=L(u,"DIV",{class:!0});var w=N(a);I(h.$$.fragment,w),m=C(w),n=L(w,"DIV",{class:!0});var g=N(n);$=L(g,"DIV",{id:!0,class:!0});var ta=N($);y=l(ta,da),ta.forEach(o),d=C(g),v=L(g,"DIV",{class:!0,"data-svelte-h":!0}),U(v)!=="svelte-1tlj87z"&&(v.textContent=T),b=C(g),S=L(g,"DIV",{class:!0,"data-svelte-h":!0}),U(S)!=="svelte-xnmp4g"&&(S.textContent=q),z=C(g),H=L(g,"BR",{}),Z=C(g),O=L(g,"DIV",{class:!0});var Ai=N(O);nt=l(Ai,"All code used in this project is available in the github repo: "),I(K.$$.fragment,Ai),Ai.forEach(o),D=C(g),I(F.$$.fragment,g),J=C(g),tt=L(g,"UL",{class:!0});var $t=N(tt);X=L($t,"LI",{});var st=N(X);ft=l(st,"This project explores the use of the NHiTS "),I(at.$$.fragment,st),R=l(st,` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),gi=l(st,W),wi=l(st,` points of input, the model is trained
				to predict the next `),va=l(st,Bi),ya=l(st," points of the trajectory, where "),ba=l(st,hr),_a=l(st,` is usually 100 and
				`),xa=l(st,cr),ka=l(st,"."),st.forEach(o),Ia=C($t),wn=L($t,"LI",{});var ni=N(wn);ja=l(ni,`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),Ma=l(ni,fr),Ta=l(ni,`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),ni.forEach(o),Aa=C($t),ot=L($t,"LI",{});var rt=N(ot);za=l(rt,`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),Ea=l(rt,mr),La=l(rt," to "),Pa=l(rt,ur),Ca=l(rt,`. As temporal
				resolution of the model is increased, this value converges to approximately `),Ha=l(rt,pr),Sa=l(rt,`,
				which is in near perfect agreement with certain limits implied by the
				`),I(yt.$$.fragment,rt),Ra=l(rt,". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),I(bt.$$.fragment,rt),Na=l(rt,` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),rt.forEach(o),$t.forEach(o),Ga=C(g),I(_t.$$.fragment,g),Da=C(g),I(xt.$$.fragment,g),I(kt.$$.fragment,g),I(It.$$.fragment,g),Fa=C(g),mt=L(g,"DIV",{class:!0});var gt=N(mt);Wi=L(gt,"P",{});var ea=N(Wi);vn=L(ea,"SUP",{id:!0});var zi=N(vn);qa=l(zi,`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),I(jt.$$.fragment,zi),zi.forEach(o),ea.forEach(o),Za=C(gt),vi=L(gt,"P",{"data-svelte-h":!0}),U(vi)!=="svelte-7qdhvn"&&(vi.innerHTML=dr),Va=C(gt),Oi=L(gt,"P",{});var na=N(Oi);Mt=L(na,"SUP",{id:!0});var ii=N(Mt);Ua=l(ii,`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),I(Tt.$$.fragment,ii),Ba=l(ii," on the subject"),ii.forEach(o),na.forEach(o),gt.forEach(o),Wa=C(g),I(At.$$.fragment,g),Oa=C(g),I(zt.$$.fragment,g),Ka=C(g),yi=L(g,"DIV",{class:!0});var ia=N(yi);yn=L(ia,"A",{title:!0,href:!0});var aa=N(yn);bn=L(aa,"FIGURE",{});var ai=N(bn);Et=L(ai,"IMG",{class:!0,width:!0,alt:!0,src:!0}),Ja=C(ai),I(Lt.$$.fragment,ai),ai.forEach(o),aa.forEach(o),ia.forEach(o),Xa=C(g),I(Pt.$$.fragment,g),Ya=C(g),bi=L(g,"DIV",{class:!0});var oa=N(bi);Ki=L(oa,"P",{});var sa=N(Ki);Qa=l(sa,gr),sa.forEach(o),oa.forEach(o),to=C(g),I(Ct.$$.fragment,g),eo=C(g),_i=L(g,"DIV",{class:!0});var ra=N(_i);Ji=L(ra,"P",{});var la=N(Ji);no=l(la,wr),la.forEach(o),ra.forEach(o),io=C(g),I(Ht.$$.fragment,g),I(St.$$.fragment,g),ao=C(g),I(Rt.$$.fragment,g),oo=C(g),I(Nt.$$.fragment,g),so=C(g),I(Gt.$$.fragment,g),ro=C(g),I(Dt.$$.fragment,g),lo=C(g),I(Ft.$$.fragment,g),ho=C(g),I(qt.$$.fragment,g),I(Zt.$$.fragment,g),I(Vt.$$.fragment,g),I(Ut.$$.fragment,g),co=C(g),xi=L(g,"DIV",{class:!0});var ha=N(xi);Xi=L(ha,"P",{});var ca=N(Xi);fo=l(ca,vr),ca.forEach(o),ha.forEach(o),mo=C(g),I(Bt.$$.fragment,g),uo=C(g),I(Wt.$$.fragment,g),po=C(g),I(Ot.$$.fragment,g),$o=C(g),I(Kt.$$.fragment,g),go=C(g),_n=L(g,"DIV",{class:!0,"data-svelte-h":!0}),U(_n)!=="svelte-a9h7x4"&&(_n.innerHTML=yr),wo=C(g),I(Jt.$$.fragment,g),vo=C(g),I(Xt.$$.fragment,g),yo=C(g),I(xn.$$.fragment,g),bo=C(g),I(Yt.$$.fragment,g),_o=C(g),Yi=L(g,"DIV",{});var fa=N(Yi);xo=l(fa,br),fa.forEach(o),ko=C(g),I(Qt.$$.fragment,g),Io=C(g),te=L(g,"FIGURE",{class:!0});var oi=N(te);kn=L(oi,"IMG",{class:!0,src:!0,alt:!0}),jo=C(oi),I(ee.$$.fragment,oi),oi.forEach(o),Mo=C(g),I(ne.$$.fragment,g),To=C(g),ie=L(g,"FIGURE",{class:!0});var si=N(ie);In=L(si,"DIV",{class:!0,"data-svelte-h":!0}),U(In)!=="svelte-u7ima0"&&(In.innerHTML=xr),Ao=C(si),I(ae.$$.fragment,si),si.forEach(o),zo=C(g),I(oe.$$.fragment,g),Eo=C(g),se=L(g,"FIGURE",{class:!0});var ri=N(se);jn=L(ri,"IMG",{class:!0,src:!0,alt:!0}),Lo=C(ri),I(re.$$.fragment,ri),ri.forEach(o),Po=C(g),I(le.$$.fragment,g),I(he.$$.fragment,g),Co=C(g),ce=L(g,"FIGURE",{class:!0});var li=N(ce);pt=L(li,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Ho=C(li),I(fe.$$.fragment,li),li.forEach(o),So=C(g),I(me.$$.fragment,g),Ro=C(g),I(ue.$$.fragment,g),No=C(g),I(pe.$$.fragment,g),Go=C(g),I(Mn.$$.fragment,g),Do=C(g),Tn=L(g,"P",{class:!0,"data-svelte-h":!0}),U(Tn)!=="svelte-8lzr6y"&&(Tn.textContent=jr),Fo=C(g),An=L(g,"FIGURE",{class:!0});var Ei=N(An);zn=L(Ei,"IMG",{class:!0,src:!0,alt:!0}),I(de.$$.fragment,Ei),Ei.forEach(o),qo=C(g),I($e.$$.fragment,g),I(ge.$$.fragment,g),Zo=C(g),En=L(g,"FIGURE",{class:!0});var Li=N(En);Ln=L(Li,"IMG",{class:!0,src:!0,alt:!0}),I(we.$$.fragment,Li),Li.forEach(o),Vo=C(g),I(ve.$$.fragment,g),Uo=C(g),ye=L(g,"FIGURE",{class:!0});var hi=N(ye);Pn=L(hi,"IMG",{class:!0,src:!0,alt:!0}),Bo=C(hi),I(be.$$.fragment,hi),hi.forEach(o),Wo=C(g),I(_e.$$.fragment,g),Oo=C(g),Cn=L(g,"FIGURE",{class:!0});var Pi=N(Cn);Hn=L(Pi,"IMG",{class:!0,src:!0,alt:!0}),I(xe.$$.fragment,Pi),Pi.forEach(o),Ko=C(g),I(ke.$$.fragment,g),Jo=C(g),I(Ie.$$.fragment,g),Xo=C(g),I(je.$$.fragment,g),Yo=C(g),I(Me.$$.fragment,g),Qo=C(g),I(Te.$$.fragment,g),I(Ae.$$.fragment,g),I(ze.$$.fragment,g),ts=C(g),Sn=L(g,"FIGURE",{class:!0});var Ci=N(Sn);Rn=L(Ci,"IMG",{class:!0,src:!0,alt:!0}),I(Ee.$$.fragment,Ci),Ci.forEach(o),es=C(g),Nn=L(g,"P",{});var ci=N(Nn);ns=l(ci,"Still, with these 10x increases, the trajectories that pass within an L2 distance "),is=l(ci,Lr),as=l(ci,`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),ci.forEach(o),os=C(g),I(Le.$$.fragment,g),ss=C(g),Gn=L(g,"FIGURE",{class:!0});var Hi=N(Gn);Dn=L(Hi,"IMG",{class:!0,src:!0,alt:!0}),I(Pe.$$.fragment,Hi),Hi.forEach(o),rs=C(g),I(Ce.$$.fragment,g),ls=C(g),I(He.$$.fragment,g),hs=C(g),I(Se.$$.fragment,g),cs=C(g),I(Re.$$.fragment,g),fs=C(g),I(Fn.$$.fragment,g),ms=C(g),I(Ne.$$.fragment,g),us=C(g),Ge=L(g,"P",{class:!0});var fi=N(Ge);ps=l(fi,"After retraining with "),ds=l(fi,Cr),$s=l(fi,`, we again see a very slight improvement
			over the previous models:`),fi.forEach(o),gs=C(g),qn=L(g,"FIGURE",{class:!0});var Si=N(qn);Zn=L(Si,"IMG",{class:!0,src:!0,alt:!0}),I(De.$$.fragment,Si),Si.forEach(o),ws=C(g),ki=L(g,"P",{"data-svelte-h":!0}),U(ki)!=="svelte-iuzfox"&&(ki.innerHTML=Sr),vs=C(g),I(Fe.$$.fragment,g),ys=C(g),I(qe.$$.fragment,g),I(Ze.$$.fragment,g),I(Ve.$$.fragment,g),bs=l(g,Rr),_s=C(g),Vn=L(g,"P",{});var mi=N(Vn);xs=l(mi,"Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),I(Ue.$$.fragment,mi),ks=l(mi," solver's outputs:"),mi.forEach(o),Is=C(g),Un=L(g,"FIGURE",{class:!0});var Ri=N(Un);Bn=L(Ri,"IMG",{class:!0,src:!0,alt:!0}),I(Be.$$.fragment,Ri),Ri.forEach(o),js=C(g),dt=L(g,"P",{});var wt=N(dt);Ms=l(wt,`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),Ts=l(wt,Gr),As=l(wt," for the solver compared to "),zs=l(wt,Dr),Es=l(wt,`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),wt.forEach(o),Ls=C(g),I(We.$$.fragment,g),Ps=C(g),Wn=L(g,"FIGURE",{class:!0});var Ni=N(Wn);On=L(Ni,"IMG",{class:!0,src:!0,alt:!0}),I(Oe.$$.fragment,Ni),Ni.forEach(o),Cs=C(g),Ii=L(g,"P",{"data-svelte-h":!0}),U(Ii)!=="svelte-8ial96"&&(Ii.textContent=qr),Hs=C(g),Kn=L(g,"FIGURE",{class:!0});var Gi=N(Kn);Jn=L(Gi,"IMG",{class:!0,src:!0,alt:!0}),I(Ke.$$.fragment,Gi),Gi.forEach(o),Ss=C(g),I(Je.$$.fragment,g),Rs=C(g),Xe=L(g,"FIGURE",{class:!0});var ui=N(Xe);Xn=L(ui,"IMG",{class:!0,src:!0,alt:!0}),Ns=C(ui),I(Ye.$$.fragment,ui),ui.forEach(o),Gs=C(g),I(Qe.$$.fragment,g),Ds=C(g),I(tn.$$.fragment,g),Fs=C(g),I(en.$$.fragment,g),I(nn.$$.fragment,g),I(an.$$.fragment,g),I(on.$$.fragment,g),qs=C(g),sn=L(g,"FIGURE",{class:!0});var pi=N(sn);Yn=L(pi,"DIV",{class:!0,"data-svelte-h":!0}),U(Yn)!=="svelte-lbdos2"&&(Yn.innerHTML=Ur),Zs=C(pi),I(rn.$$.fragment,pi),pi.forEach(o),Vs=C(g),I(ln.$$.fragment,g),Us=C(g),hn=L(g,"FIGURE",{class:!0});var di=N(hn);Qn=L(di,"IMG",{class:!0,src:!0,alt:!0}),Bs=C(di),I(cn.$$.fragment,di),di.forEach(o),Ws=C(g),ji=L(g,"P",{"data-svelte-h":!0}),U(ji)!=="svelte-byv5j9"&&(ji.textContent=Wr),Os=C(g),fn=L(g,"FIGURE",{class:!0});var $i=N(fn);ti=L($i,"IMG",{class:!0,src:!0,alt:!0}),Ks=C($i),I(mn.$$.fragment,$i),$i.forEach(o),Js=C(g),I(un.$$.fragment,g),Xs=C(g),I(pn.$$.fragment,g),Ys=C(g),I(dn.$$.fragment,g),Qs=C(g),I($n.$$.fragment,g),tr=C(g),Mi=L(g,"DIV",{class:!0});var ma=N(Mi);Qi=L(ma,"P",{});var ua=N(Qi);ut=L(ua,"SUP",{id:!0});var vt=N(ut);er=l(vt,`1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose `),Ti=L(vt,"I",{"data-svelte-h":!0}),U(Ti)!=="svelte-bnpm1r"&&(Ti.textContent=Kr),nr=l(vt,`
					local maximum Z coordinate passes through the `),ir=l(vt,Jr),ar=l(vt,` boundary region, and whose
					associated local minimum point is so small—0.49, the smallest encountered in
					all of the training sets that were generated for this study—that the highly
					unstable conditions in the region adversely affect not only the prediction accuracy
					when the local minimum is within the horizon window, but also when it is within the
					input window of the model.`),vt.forEach(o),ua.forEach(o),ma.forEach(o),or=C(g),I(gn.$$.fragment,g),sr=C(g),I(ei.$$.fragment,g),g.forEach(o),w.forEach(o),this.h()},h(){A($,"id","intro"),A($,"class","mt-8 text-2xl text-center"),A(v,"class","mt-2 text-md text-center"),A(S,"class","mt-2 text-xs text-center font-serif"),A(O,"class","text-sm text-center font-serif mb-4"),A(tt,"class","list-disc ms-16 text-sm"),A(vn,"id","sabine"),A(Mt,"id","brunton"),A(mt,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(Et,"class","m-auto"),A(Et,"width","128"),A(Et,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),it(Et.src,$r="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||A(Et,"src",$r),A(yn,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),A(yn,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),A(yi,"class","my-2 self-center"),A(bi,"class","self-center"),A(_i,"class","self-center"),A(xi,"class","self-center"),A(_n,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(kn,"class","object-contain"),it(kn.src,_r=`${Q}/Model1ErrDist.png`)||A(kn,"src",_r),A(kn,"alt","Model 1 - error distribution"),A(te,"class","mb-6 self-center max-w-xl"),A(In,"class","flex flex-wrap justify-center"),A(ie,"class","mt-6 mb-6 self-center"),A(jn,"class","object-contain"),it(jn.src,kr=`${Q}/model-1-pod.gif`)||A(jn,"src",kr),A(jn,"alt","prediction point of divergence"),A(se,"class","mt-6 mb-6 self-center max-w-lg"),A(pt,"class","object-contain"),it(pt.src,Ir=`${Q}/trajectories.gif`)||A(pt,"src",Ir),A(pt,"alt","trajectories approaching origin"),A(pt,"width","500"),A(pt,"height","500"),A(ce,"class","mt-6 mb-6 self-center max-w-md"),A(Tn,"class","mt-2"),A(zn,"class","object-contain"),it(zn.src,Mr=`${Q}/Model2ErrDist.png`)||A(zn,"src",Mr),A(zn,"alt",""),A(An,"class","mb-2 self-center max-w-xl"),A(Ln,"class","object-contain"),it(Ln.src,Tr=`${Q}/Model2Err3d.png`)||A(Ln,"src",Tr),A(Ln,"alt","Model 2 - error distribution by series and window"),A(En,"class","-mt-2 mb-2 self-center"),A(Pn,"class","object-contain"),it(Pn.src,Ar=`${Q}/model-2-pod.gif`)||A(Pn,"src",Ar),A(Pn,"alt","model 2 point of divergence"),A(ye,"class","self-center max-w-lg"),A(Hn,"class","object-contain"),it(Hn.src,zr=`${Q}/Model2DFO.png`)||A(Hn,"src",zr),A(Hn,"alt","distance from origin vs. sMAPE"),A(Cn,"class","-mt-2 mb-2 self-center max-w-3xl"),A(Rn,"class","object-contain"),it(Rn.src,Er=`${Q}/datahist_model_2_v_3.1.png`)||A(Rn,"src",Er),A(Rn,"alt","Dataset distribution for Model 2 vs. 3"),A(Sn,"class","my-8 self-center max-w-lg"),A(Dn,"class","object-contain"),it(Dn.src,Pr=`${Q}/Model2v3.1-DFO.png`)||A(Dn,"src",Pr),A(Dn,"alt","Model 2 vs. 3.1 - distance from origin vs. sMAPE"),A(Gn,"class","mt-2 mb-2 self-center max-w-3xl"),A(Ge,"class","mt-4"),A(Zn,"class","object-contain"),it(Zn.src,Hr=`${Q}/Model3.2-DFO.png`)||A(Zn,"src",Hr),A(Zn,"alt","Model 3.2 - distance-from-origin error distribution"),A(qn,"class","mb-8 self-center max-w-3xl"),A(Bn,"class","object-contain"),it(Bn.src,Nr=`${Q}/ar_z_stat.png`)||A(Bn,"src",Nr),A(Bn,"alt","Z Statistic for Reference vs. Autoregressive Trajectories"),A(Un,"class","mb-2 self-center max-w-3xl"),A(On,"class","object-contain"),it(On.src,Fr=`${Q}/ref_v_ar.png`)||A(On,"src",Fr),A(On,"alt","Reference vs. Autoregressive Trajectories"),A(Wn,"class","mb-2 self-center max-w-4xl"),A(Jn,"class","object-contain"),it(Jn.src,Zr=`${Q}/ar_breakdown_1.png`)||A(Jn,"src",Zr),A(Jn,"alt","Autoregressive Trajectory - Bad Example"),A(Kn,"class","mb-2 self-center max-w-lg"),A(Xn,"class","object-contain"),it(Xn.src,Vr=`${Q}/solvers_vs_model.png`)||A(Xn,"src",Vr),A(Xn,"alt","Comparison of RK45 and predictions to Radau's solutions"),A(Xe,"class","mb-2 self-center max-w-2xl"),A(Yn,"class","flex flex-wrap justify-center"),A(sn,"class","mb-6 self-center"),A(Qn,"class","object-contain"),it(Qn.src,Br=`${Q}/Lorenz_map.png`)||A(Qn,"src",Br),A(Qn,"alt","Lorenz Map"),A(hn,"class","mb-4 self-center max-w-2xl"),A(ti,"class","object-contain"),it(ti.src,Or=`${Q}/Lorenz_map_transition.png`)||A(ti,"src",Or),A(ti,"alt","Lorenz Map transitions"),A(fn,"class","my-2 self-center max-w-2xl"),A(ut,"id","outliers"),A(Mi,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(n,"class","flex flex-col mx-4 sm:mx-16"),A(a,"class","grid grid-flow-col auto-cols-auto")},m(u,w){j(e,u,w),f(u,t,w),j(i,u,w),f(u,s,w),f(u,a,w),j(h,a,null),p(a,m),p(a,n),p(n,$),p($,y),p(n,d),p(n,v),p(n,b),p(n,S),p(n,z),p(n,H),p(n,Z),p(n,O),p(O,nt),j(K,O,null),p(n,D),j(F,n,null),p(n,J),p(n,tt),p(tt,X),p(X,ft),j(at,X,null),p(X,R),p(X,gi),p(X,wi),p(X,va),p(X,ya),p(X,ba),p(X,_a),p(X,xa),p(X,ka),p(tt,Ia),p(tt,wn),p(wn,ja),p(wn,Ma),p(wn,Ta),p(tt,Aa),p(tt,ot),p(ot,za),p(ot,Ea),p(ot,La),p(ot,Pa),p(ot,Ca),p(ot,Ha),p(ot,Sa),j(yt,ot,null),p(ot,Ra),j(bt,ot,null),p(ot,Na),p(n,Ga),j(_t,n,null),p(n,Da),j(xt,n,null),j(kt,n,null),j(It,n,null),p(n,Fa),p(n,mt),p(mt,Wi),p(Wi,vn),p(vn,qa),j(jt,vn,null),p(mt,Za),p(mt,vi),p(mt,Va),p(mt,Oi),p(Oi,Mt),p(Mt,Ua),j(Tt,Mt,null),p(Mt,Ba),p(n,Wa),j(At,n,null),p(n,Oa),j(zt,n,null),p(n,Ka),p(n,yi),p(yi,yn),p(yn,bn),p(bn,Et),p(bn,Ja),j(Lt,bn,null),p(n,Xa),j(Pt,n,null),p(n,Ya),p(n,bi),p(bi,Ki),p(Ki,Qa),p(n,to),j(Ct,n,null),p(n,eo),p(n,_i),p(_i,Ji),p(Ji,no),p(n,io),j(Ht,n,null),j(St,n,null),p(n,ao),j(Rt,n,null),p(n,oo),j(Nt,n,null),p(n,so),j(Gt,n,null),p(n,ro),j(Dt,n,null),p(n,lo),j(Ft,n,null),p(n,ho),j(qt,n,null),j(Zt,n,null),j(Vt,n,null),j(Ut,n,null),p(n,co),p(n,xi),p(xi,Xi),p(Xi,fo),p(n,mo),j(Bt,n,null),p(n,uo),j(Wt,n,null),p(n,po),j(Ot,n,null),p(n,$o),j(Kt,n,null),p(n,go),p(n,_n),p(n,wo),j(Jt,n,null),p(n,vo),j(Xt,n,null),p(n,yo),j(xn,n,null),p(n,bo),j(Yt,n,null),p(n,_o),p(n,Yi),p(Yi,xo),p(n,ko),j(Qt,n,null),p(n,Io),p(n,te),p(te,kn),p(te,jo),j(ee,te,null),p(n,Mo),j(ne,n,null),p(n,To),p(n,ie),p(ie,In),p(ie,Ao),j(ae,ie,null),p(n,zo),j(oe,n,null),p(n,Eo),p(n,se),p(se,jn),p(se,Lo),j(re,se,null),p(n,Po),j(le,n,null),j(he,n,null),p(n,Co),p(n,ce),p(ce,pt),p(ce,Ho),j(fe,ce,null),p(n,So),j(me,n,null),p(n,Ro),j(ue,n,null),p(n,No),j(pe,n,null),p(n,Go),j(Mn,n,null),p(n,Do),p(n,Tn),p(n,Fo),p(n,An),p(An,zn),j(de,An,null),p(n,qo),j($e,n,null),j(ge,n,null),p(n,Zo),p(n,En),p(En,Ln),j(we,En,null),p(n,Vo),j(ve,n,null),p(n,Uo),p(n,ye),p(ye,Pn),p(ye,Bo),j(be,ye,null),p(n,Wo),j(_e,n,null),p(n,Oo),p(n,Cn),p(Cn,Hn),j(xe,Cn,null),p(n,Ko),j(ke,n,null),p(n,Jo),j(Ie,n,null),p(n,Xo),j(je,n,null),p(n,Yo),j(Me,n,null),p(n,Qo),j(Te,n,null),j(Ae,n,null),j(ze,n,null),p(n,ts),p(n,Sn),p(Sn,Rn),j(Ee,Sn,null),p(n,es),p(n,Nn),p(Nn,ns),p(Nn,is),p(Nn,as),p(n,os),j(Le,n,null),p(n,ss),p(n,Gn),p(Gn,Dn),j(Pe,Gn,null),p(n,rs),j(Ce,n,null),p(n,ls),j(He,n,null),p(n,hs),j(Se,n,null),p(n,cs),j(Re,n,null),p(n,fs),j(Fn,n,null),p(n,ms),j(Ne,n,null),p(n,us),p(n,Ge),p(Ge,ps),p(Ge,ds),p(Ge,$s),p(n,gs),p(n,qn),p(qn,Zn),j(De,qn,null),p(n,ws),p(n,ki),p(n,vs),j(Fe,n,null),p(n,ys),j(qe,n,null),j(Ze,n,null),j(Ve,n,null),p(n,bs),p(n,_s),p(n,Vn),p(Vn,xs),j(Ue,Vn,null),p(Vn,ks),p(n,Is),p(n,Un),p(Un,Bn),j(Be,Un,null),p(n,js),p(n,dt),p(dt,Ms),p(dt,Ts),p(dt,As),p(dt,zs),p(dt,Es),p(n,Ls),j(We,n,null),p(n,Ps),p(n,Wn),p(Wn,On),j(Oe,Wn,null),p(n,Cs),p(n,Ii),p(n,Hs),p(n,Kn),p(Kn,Jn),j(Ke,Kn,null),p(n,Ss),j(Je,n,null),p(n,Rs),p(n,Xe),p(Xe,Xn),p(Xe,Ns),j(Ye,Xe,null),p(n,Gs),j(Qe,n,null),p(n,Ds),j(tn,n,null),p(n,Fs),j(en,n,null),j(nn,n,null),j(an,n,null),j(on,n,null),p(n,qs),p(n,sn),p(sn,Yn),p(sn,Zs),j(rn,sn,null),p(n,Vs),j(ln,n,null),p(n,Us),p(n,hn),p(hn,Qn),p(hn,Bs),j(cn,hn,null),p(n,Ws),p(n,ji),p(n,Os),p(n,fn),p(fn,ti),p(fn,Ks),j(mn,fn,null),p(n,Js),j(un,n,null),p(n,Xs),j(pn,n,null),p(n,Ys),j(dn,n,null),p(n,Qs),j($n,n,null),p(n,tr),p(n,Mi),p(Mi,Qi),p(Qi,ut),p(ut,er),p(ut,Ti),p(ut,nr),p(ut,ir),p(ut,ar),p(n,or),j(gn,n,null),p(n,sr),j(ei,n,null),$a=!0},p(u,[w]){const g={};w&1&&(g.$$scope={dirty:w,ctx:u}),K.$set(g);const ta={};w&1&&(ta.$$scope={dirty:w,ctx:u}),F.$set(ta);const Ai={};w&1&&(Ai.$$scope={dirty:w,ctx:u}),yt.$set(Ai);const $t={};w&1&&($t.$$scope={dirty:w,ctx:u}),bt.$set($t);const st={};w&1&&(st.$$scope={dirty:w,ctx:u}),_t.$set(st);const ni={};w&1&&(ni.$$scope={dirty:w,ctx:u}),xt.$set(ni);const rt={};w&1&&(rt.$$scope={dirty:w,ctx:u}),kt.$set(rt);const gt={};w&1&&(gt.$$scope={dirty:w,ctx:u}),It.$set(gt);const ea={};w&1&&(ea.$$scope={dirty:w,ctx:u}),jt.$set(ea);const zi={};w&1&&(zi.$$scope={dirty:w,ctx:u}),Tt.$set(zi);const na={};w&1&&(na.$$scope={dirty:w,ctx:u}),At.$set(na);const ii={};w&1&&(ii.$$scope={dirty:w,ctx:u}),zt.$set(ii);const ia={};w&1&&(ia.$$scope={dirty:w,ctx:u}),Lt.$set(ia);const aa={};w&1&&(aa.$$scope={dirty:w,ctx:u}),Pt.$set(aa);const ai={};w&1&&(ai.$$scope={dirty:w,ctx:u}),Ct.$set(ai);const oa={};w&1&&(oa.$$scope={dirty:w,ctx:u}),Ht.$set(oa);const sa={};w&1&&(sa.$$scope={dirty:w,ctx:u}),St.$set(sa);const ra={};w&1&&(ra.$$scope={dirty:w,ctx:u}),Rt.$set(ra);const la={};w&1&&(la.$$scope={dirty:w,ctx:u}),Nt.$set(la);const ha={};w&1&&(ha.$$scope={dirty:w,ctx:u}),Gt.$set(ha);const ca={};w&1&&(ca.$$scope={dirty:w,ctx:u}),Dt.$set(ca);const fa={};w&1&&(fa.$$scope={dirty:w,ctx:u}),Ft.$set(fa);const oi={};w&1&&(oi.$$scope={dirty:w,ctx:u}),qt.$set(oi);const si={};w&1&&(si.$$scope={dirty:w,ctx:u}),Zt.$set(si);const ri={};w&1&&(ri.$$scope={dirty:w,ctx:u}),Vt.$set(ri);const li={};w&1&&(li.$$scope={dirty:w,ctx:u}),Ut.$set(li);const Ei={};w&1&&(Ei.$$scope={dirty:w,ctx:u}),Bt.$set(Ei);const Li={};w&1&&(Li.$$scope={dirty:w,ctx:u}),Wt.$set(Li);const hi={};w&1&&(hi.$$scope={dirty:w,ctx:u}),Ot.$set(hi);const Pi={};w&1&&(Pi.$$scope={dirty:w,ctx:u}),Kt.$set(Pi);const Ci={};w&1&&(Ci.$$scope={dirty:w,ctx:u}),Jt.$set(Ci);const ci={};w&1&&(ci.$$scope={dirty:w,ctx:u}),Xt.$set(ci);const Hi={};w&1&&(Hi.$$scope={dirty:w,ctx:u}),Yt.$set(Hi);const fi={};w&1&&(fi.$$scope={dirty:w,ctx:u}),Qt.$set(fi);const Si={};w&1&&(Si.$$scope={dirty:w,ctx:u}),ee.$set(Si);const mi={};w&1&&(mi.$$scope={dirty:w,ctx:u}),ne.$set(mi);const Ri={};w&1&&(Ri.$$scope={dirty:w,ctx:u}),ae.$set(Ri);const wt={};w&1&&(wt.$$scope={dirty:w,ctx:u}),oe.$set(wt);const Ni={};w&1&&(Ni.$$scope={dirty:w,ctx:u}),re.$set(Ni);const Gi={};w&1&&(Gi.$$scope={dirty:w,ctx:u}),le.$set(Gi);const ui={};w&1&&(ui.$$scope={dirty:w,ctx:u}),he.$set(ui);const pi={};w&1&&(pi.$$scope={dirty:w,ctx:u}),fe.$set(pi);const di={};w&1&&(di.$$scope={dirty:w,ctx:u}),me.$set(di);const $i={};w&1&&($i.$$scope={dirty:w,ctx:u}),ue.$set($i);const ma={};w&1&&(ma.$$scope={dirty:w,ctx:u}),pe.$set(ma);const ua={};w&1&&(ua.$$scope={dirty:w,ctx:u}),de.$set(ua);const vt={};w&1&&(vt.$$scope={dirty:w,ctx:u}),$e.$set(vt);const Xr={};w&1&&(Xr.$$scope={dirty:w,ctx:u}),ge.$set(Xr);const Yr={};w&1&&(Yr.$$scope={dirty:w,ctx:u}),we.$set(Yr);const Qr={};w&1&&(Qr.$$scope={dirty:w,ctx:u}),ve.$set(Qr);const tl={};w&1&&(tl.$$scope={dirty:w,ctx:u}),be.$set(tl);const el={};w&1&&(el.$$scope={dirty:w,ctx:u}),_e.$set(el);const nl={};w&1&&(nl.$$scope={dirty:w,ctx:u}),xe.$set(nl);const il={};w&1&&(il.$$scope={dirty:w,ctx:u}),ke.$set(il);const al={};w&1&&(al.$$scope={dirty:w,ctx:u}),Ie.$set(al);const ol={};w&1&&(ol.$$scope={dirty:w,ctx:u}),je.$set(ol);const sl={};w&1&&(sl.$$scope={dirty:w,ctx:u}),Me.$set(sl);const rl={};w&1&&(rl.$$scope={dirty:w,ctx:u}),Te.$set(rl);const ll={};w&1&&(ll.$$scope={dirty:w,ctx:u}),Ae.$set(ll);const hl={};w&1&&(hl.$$scope={dirty:w,ctx:u}),ze.$set(hl);const cl={};w&1&&(cl.$$scope={dirty:w,ctx:u}),Ee.$set(cl);const fl={};w&1&&(fl.$$scope={dirty:w,ctx:u}),Le.$set(fl);const ml={};w&1&&(ml.$$scope={dirty:w,ctx:u}),Pe.$set(ml);const ul={};w&1&&(ul.$$scope={dirty:w,ctx:u}),Ce.$set(ul);const pl={};w&1&&(pl.$$scope={dirty:w,ctx:u}),He.$set(pl);const dl={};w&1&&(dl.$$scope={dirty:w,ctx:u}),Se.$set(dl);const $l={};w&1&&($l.$$scope={dirty:w,ctx:u}),Re.$set($l);const gl={};w&1&&(gl.$$scope={dirty:w,ctx:u}),Ne.$set(gl);const wl={};w&1&&(wl.$$scope={dirty:w,ctx:u}),De.$set(wl);const vl={};w&1&&(vl.$$scope={dirty:w,ctx:u}),Fe.$set(vl);const yl={};w&1&&(yl.$$scope={dirty:w,ctx:u}),qe.$set(yl);const bl={};w&1&&(bl.$$scope={dirty:w,ctx:u}),Ze.$set(bl);const _l={};w&1&&(_l.$$scope={dirty:w,ctx:u}),Ve.$set(_l);const xl={};w&1&&(xl.$$scope={dirty:w,ctx:u}),Ue.$set(xl);const kl={};w&1&&(kl.$$scope={dirty:w,ctx:u}),Be.$set(kl);const Il={};w&1&&(Il.$$scope={dirty:w,ctx:u}),We.$set(Il);const jl={};w&1&&(jl.$$scope={dirty:w,ctx:u}),Oe.$set(jl);const Ml={};w&1&&(Ml.$$scope={dirty:w,ctx:u}),Ke.$set(Ml);const Tl={};w&1&&(Tl.$$scope={dirty:w,ctx:u}),Je.$set(Tl);const Al={};w&1&&(Al.$$scope={dirty:w,ctx:u}),Ye.$set(Al);const zl={};w&1&&(zl.$$scope={dirty:w,ctx:u}),Qe.$set(zl);const El={};w&1&&(El.$$scope={dirty:w,ctx:u}),tn.$set(El);const Ll={};w&1&&(Ll.$$scope={dirty:w,ctx:u}),en.$set(Ll);const Pl={};w&1&&(Pl.$$scope={dirty:w,ctx:u}),nn.$set(Pl);const Cl={};w&1&&(Cl.$$scope={dirty:w,ctx:u}),an.$set(Cl);const Hl={};w&1&&(Hl.$$scope={dirty:w,ctx:u}),on.$set(Hl);const Sl={};w&1&&(Sl.$$scope={dirty:w,ctx:u}),rn.$set(Sl);const Rl={};w&1&&(Rl.$$scope={dirty:w,ctx:u}),ln.$set(Rl);const Nl={};w&1&&(Nl.$$scope={dirty:w,ctx:u}),cn.$set(Nl);const Gl={};w&1&&(Gl.$$scope={dirty:w,ctx:u}),mn.$set(Gl);const Dl={};w&1&&(Dl.$$scope={dirty:w,ctx:u}),un.$set(Dl);const Fl={};w&1&&(Fl.$$scope={dirty:w,ctx:u}),pn.$set(Fl);const ql={};w&1&&(ql.$$scope={dirty:w,ctx:u}),dn.$set(ql);const Zl={};w&1&&(Zl.$$scope={dirty:w,ctx:u}),$n.$set(Zl);const Vl={};w&1&&(Vl.$$scope={dirty:w,ctx:u}),gn.$set(Vl)},i(u){$a||(_(e.$$.fragment,u),_(i.$$.fragment,u),_(h.$$.fragment,u),_(K.$$.fragment,u),_(F.$$.fragment,u),_(at.$$.fragment,u),_(yt.$$.fragment,u),_(bt.$$.fragment,u),_(_t.$$.fragment,u),_(xt.$$.fragment,u),_(kt.$$.fragment,u),_(It.$$.fragment,u),_(jt.$$.fragment,u),_(Tt.$$.fragment,u),_(At.$$.fragment,u),_(zt.$$.fragment,u),_(Lt.$$.fragment,u),_(Pt.$$.fragment,u),_(Ct.$$.fragment,u),_(Ht.$$.fragment,u),_(St.$$.fragment,u),_(Rt.$$.fragment,u),_(Nt.$$.fragment,u),_(Gt.$$.fragment,u),_(Dt.$$.fragment,u),_(Ft.$$.fragment,u),_(qt.$$.fragment,u),_(Zt.$$.fragment,u),_(Vt.$$.fragment,u),_(Ut.$$.fragment,u),_(Bt.$$.fragment,u),_(Wt.$$.fragment,u),_(Ot.$$.fragment,u),_(Kt.$$.fragment,u),_(Jt.$$.fragment,u),_(Xt.$$.fragment,u),_(xn.$$.fragment,u),_(Yt.$$.fragment,u),_(Qt.$$.fragment,u),_(ee.$$.fragment,u),_(ne.$$.fragment,u),_(ae.$$.fragment,u),_(oe.$$.fragment,u),_(re.$$.fragment,u),_(le.$$.fragment,u),_(he.$$.fragment,u),_(fe.$$.fragment,u),_(me.$$.fragment,u),_(ue.$$.fragment,u),_(pe.$$.fragment,u),_(Mn.$$.fragment,u),_(de.$$.fragment,u),_($e.$$.fragment,u),_(ge.$$.fragment,u),_(we.$$.fragment,u),_(ve.$$.fragment,u),_(be.$$.fragment,u),_(_e.$$.fragment,u),_(xe.$$.fragment,u),_(ke.$$.fragment,u),_(Ie.$$.fragment,u),_(je.$$.fragment,u),_(Me.$$.fragment,u),_(Te.$$.fragment,u),_(Ae.$$.fragment,u),_(ze.$$.fragment,u),_(Ee.$$.fragment,u),_(Le.$$.fragment,u),_(Pe.$$.fragment,u),_(Ce.$$.fragment,u),_(He.$$.fragment,u),_(Se.$$.fragment,u),_(Re.$$.fragment,u),_(Fn.$$.fragment,u),_(Ne.$$.fragment,u),_(De.$$.fragment,u),_(Fe.$$.fragment,u),_(qe.$$.fragment,u),_(Ze.$$.fragment,u),_(Ve.$$.fragment,u),_(Ue.$$.fragment,u),_(Be.$$.fragment,u),_(We.$$.fragment,u),_(Oe.$$.fragment,u),_(Ke.$$.fragment,u),_(Je.$$.fragment,u),_(Ye.$$.fragment,u),_(Qe.$$.fragment,u),_(tn.$$.fragment,u),_(en.$$.fragment,u),_(nn.$$.fragment,u),_(an.$$.fragment,u),_(on.$$.fragment,u),_(rn.$$.fragment,u),_(ln.$$.fragment,u),_(cn.$$.fragment,u),_(mn.$$.fragment,u),_(un.$$.fragment,u),_(pn.$$.fragment,u),_(dn.$$.fragment,u),_($n.$$.fragment,u),_(gn.$$.fragment,u),_(ei.$$.fragment,u),$a=!0)},o(u){x(e.$$.fragment,u),x(i.$$.fragment,u),x(h.$$.fragment,u),x(K.$$.fragment,u),x(F.$$.fragment,u),x(at.$$.fragment,u),x(yt.$$.fragment,u),x(bt.$$.fragment,u),x(_t.$$.fragment,u),x(xt.$$.fragment,u),x(kt.$$.fragment,u),x(It.$$.fragment,u),x(jt.$$.fragment,u),x(Tt.$$.fragment,u),x(At.$$.fragment,u),x(zt.$$.fragment,u),x(Lt.$$.fragment,u),x(Pt.$$.fragment,u),x(Ct.$$.fragment,u),x(Ht.$$.fragment,u),x(St.$$.fragment,u),x(Rt.$$.fragment,u),x(Nt.$$.fragment,u),x(Gt.$$.fragment,u),x(Dt.$$.fragment,u),x(Ft.$$.fragment,u),x(qt.$$.fragment,u),x(Zt.$$.fragment,u),x(Vt.$$.fragment,u),x(Ut.$$.fragment,u),x(Bt.$$.fragment,u),x(Wt.$$.fragment,u),x(Ot.$$.fragment,u),x(Kt.$$.fragment,u),x(Jt.$$.fragment,u),x(Xt.$$.fragment,u),x(xn.$$.fragment,u),x(Yt.$$.fragment,u),x(Qt.$$.fragment,u),x(ee.$$.fragment,u),x(ne.$$.fragment,u),x(ae.$$.fragment,u),x(oe.$$.fragment,u),x(re.$$.fragment,u),x(le.$$.fragment,u),x(he.$$.fragment,u),x(fe.$$.fragment,u),x(me.$$.fragment,u),x(ue.$$.fragment,u),x(pe.$$.fragment,u),x(Mn.$$.fragment,u),x(de.$$.fragment,u),x($e.$$.fragment,u),x(ge.$$.fragment,u),x(we.$$.fragment,u),x(ve.$$.fragment,u),x(be.$$.fragment,u),x(_e.$$.fragment,u),x(xe.$$.fragment,u),x(ke.$$.fragment,u),x(Ie.$$.fragment,u),x(je.$$.fragment,u),x(Me.$$.fragment,u),x(Te.$$.fragment,u),x(Ae.$$.fragment,u),x(ze.$$.fragment,u),x(Ee.$$.fragment,u),x(Le.$$.fragment,u),x(Pe.$$.fragment,u),x(Ce.$$.fragment,u),x(He.$$.fragment,u),x(Se.$$.fragment,u),x(Re.$$.fragment,u),x(Fn.$$.fragment,u),x(Ne.$$.fragment,u),x(De.$$.fragment,u),x(Fe.$$.fragment,u),x(qe.$$.fragment,u),x(Ze.$$.fragment,u),x(Ve.$$.fragment,u),x(Ue.$$.fragment,u),x(Be.$$.fragment,u),x(We.$$.fragment,u),x(Oe.$$.fragment,u),x(Ke.$$.fragment,u),x(Je.$$.fragment,u),x(Ye.$$.fragment,u),x(Qe.$$.fragment,u),x(tn.$$.fragment,u),x(en.$$.fragment,u),x(nn.$$.fragment,u),x(an.$$.fragment,u),x(on.$$.fragment,u),x(rn.$$.fragment,u),x(ln.$$.fragment,u),x(cn.$$.fragment,u),x(mn.$$.fragment,u),x(un.$$.fragment,u),x(pn.$$.fragment,u),x(dn.$$.fragment,u),x($n.$$.fragment,u),x(gn.$$.fragment,u),x(ei.$$.fragment,u),$a=!1},d(u){u&&(o(t),o(s),o(a)),M(e,u),M(i,u),M(h),M(K),M(F),M(at),M(yt),M(bt),M(_t),M(xt),M(kt),M(It),M(jt),M(Tt),M(At),M(zt),M(Lt),M(Pt),M(Ct),M(Ht),M(St),M(Rt),M(Nt),M(Gt),M(Dt),M(Ft),M(qt),M(Zt),M(Vt),M(Ut),M(Bt),M(Wt),M(Ot),M(Kt),M(Jt),M(Xt),M(xn),M(Yt),M(Qt),M(ee),M(ne),M(ae),M(oe),M(re),M(le),M(he),M(fe),M(me),M(ue),M(pe),M(Mn),M(de),M($e),M(ge),M(we),M(ve),M(be),M(_e),M(xe),M(ke),M(Ie),M(je),M(Me),M(Te),M(Ae),M(ze),M(Ee),M(Le),M(Pe),M(Ce),M(He),M(Se),M(Re),M(Fn),M(Ne),M(De),M(Fe),M(qe),M(Ze),M(Ve),M(Ue),M(Be),M(We),M(Oe),M(Ke),M(Je),M(Ye),M(Qe),M(tn),M(en),M(nn),M(an),M(on),M(rn),M(ln),M(cn),M(mn),M(un),M(pn),M(dn),M($n),M(gn),M(ei)}}}class nm extends ht{constructor(e){super(),ct(this,e,null,Yf,lt,{})}}export{nm as component};
