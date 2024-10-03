import{s as ct,a as Ki,u as Ji,g as Xi,b as Yi,n as U,o as _h,x as it}from"../chunks/scheduler.BeaK0CkN.js";import{S as ft,i as mt,e as z,c as E,h as R,f as o,b as T,d as f,m as b,n as _,r as kh,p as Ih,z as xh,t as s,v as x,j as l,w as k,k as p,x as I,y as j,l as zs,s as P,a as C,g as V,A as jh,B as Mh}from"../chunks/index.BmRq3wWf.js";import{b as Q}from"../chunks/paths.CeJaEdDE.js";const Ah=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ka(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function Th(c){let e,t,i;const r=c[4].default,a=Ki(r,c,c[3],null);return{c(){e=z("a"),a&&a.c(),this.h()},l(h){e=E(h,"A",{href:!0,class:!0,target:!0,rel:!0});var u=R(e);a&&a.l(u),u.forEach(o),this.h()},h(){T(e,"href",c[0]),T(e,"class",t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+c[1]),T(e,"target",c[2]),T(e,"rel","noopener noreferrer")},m(h,u){f(h,e,u),a&&a.m(e,null),i=!0},p(h,[u]){a&&a.p&&(!i||u&8)&&Ji(a,r,h,h[3],i?Yi(r,h[3],u,null):Xi(h[3]),null),(!i||u&1)&&T(e,"href",h[0]),(!i||u&2&&t!==(t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+h[1]))&&T(e,"class",t),(!i||u&4)&&T(e,"target",h[2])},i(h){i||(b(a,h),i=!0)},o(h){_(a,h),i=!1},d(h){h&&o(e),a&&a.d(h)}}}function zh(c,e,t){let{$$slots:i={},$$scope:r}=e,{href:a}=e,{styling:h=""}=e,{target:u="_blank"}=e;return c.$$set=n=>{"href"in n&&t(0,a=n.href),"styling"in n&&t(1,h=n.styling),"target"in n&&t(2,u=n.target),"$$scope"in n&&t(3,r=n.$$scope)},[a,h,u,r,i]}class B extends ft{constructor(e){super(),mt(this,e,zh,Th,ct,{href:0,styling:1,target:2})}}function $h(c,e,t){const i=c.slice();return i[0]=e[t],i}function Eh(c){let e;return{c(){e=s("link")},l(t){e=l(t,"link")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function gh(c){let e,t,i=c[0].author+"",r,a,h,u=c[0].title+"",n,g,y,d=c[0].publisher+"",v,M,A,H=c[0].year+"",F,L,S,Z,O,nt,K,D;return O=new B({props:{href:c[0].link,$$slots:{default:[Eh]},$$scope:{ctx:c}}}),{c(){e=z("li"),t=z("span"),r=s(i),a=s(", "),h=z("span"),n=s(u),g=s(`,
			`),y=z("span"),v=s(d),M=s(`,
			`),A=z("span"),F=s(H),L=s(", "),S=z("span"),Z=s("["),x(O.$$.fragment),nt=s("]"),K=s(`.
		`),this.h()},l(q){e=E(q,"LI",{});var J=R(e);t=E(J,"SPAN",{class:!0});var tt=R(t);r=l(tt,i),tt.forEach(o),a=l(J,", "),h=E(J,"SPAN",{});var X=R(h);n=l(X,u),X.forEach(o),g=l(J,`,
			`),y=E(J,"SPAN",{});var ut=R(y);v=l(ut,d),ut.forEach(o),M=l(J,`,
			`),A=E(J,"SPAN",{});var at=R(A);F=l(at,H),at.forEach(o),L=l(J,", "),S=E(J,"SPAN",{});var N=R(S);Z=l(N,"["),k(O.$$.fragment,N),nt=l(N,"]"),N.forEach(o),K=l(J,`.
		`),J.forEach(o),this.h()},h(){T(t,"class","ms-4")},m(q,J){f(q,e,J),p(e,t),p(t,r),p(e,a),p(e,h),p(h,n),p(e,g),p(e,y),p(y,v),p(e,M),p(e,A),p(A,F),p(e,L),p(e,S),p(S,Z),I(O,S,null),p(S,nt),p(e,K),D=!0},p(q,J){const tt={};J&8&&(tt.$$scope={dirty:J,ctx:q}),O.$set(tt)},i(q){D||(b(O.$$.fragment,q),D=!0)},o(q){_(O.$$.fragment,q),D=!1},d(q){q&&o(e),j(O)}}}function Lh(c){let e,t,i=ka(ba),r=[];for(let h=0;h<i.length;h+=1)r[h]=gh($h(c,i,h));const a=h=>_(r[h],1,1,()=>{r[h]=null});return{c(){e=z("ol");for(let h=0;h<r.length;h+=1)r[h].c();this.h()},l(h){e=E(h,"OL",{class:!0});var u=R(e);for(let n=0;n<r.length;n+=1)r[n].l(u);u.forEach(o),this.h()},h(){T(e,"class","pl-5 my-2 text-xs list-decimal")},m(h,u){f(h,e,u);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null);t=!0},p(h,[u]){if(u&0){i=ka(ba);let n;for(n=0;n<i.length;n+=1){const g=$h(h,i,n);r[n]?(r[n].p(g,u),b(r[n],1)):(r[n]=gh(g),r[n].c(),b(r[n],1),r[n].m(e,null))}for(kh(),n=i.length;n<r.length;n+=1)a(n);Ih()}},i(h){if(!t){for(let u=0;u<i.length;u+=1)b(r[u]);t=!0}},o(h){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)_(r[u]);t=!1},d(h){h&&o(e),xh(r,h)}}}const Ia=c=>{for(let e=0;e<ba.length;e++)if(ba[e].id==c)return{index:e+1,link:ba[e].link};throw new Error},ba=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"oestreicher",author:"Oestreicher C.",title:"A history of chaos theory",publisher:"Dialogues Clin Neurosci.",year:"2007",link:"https://doi.org/10.31887/DCNS.2007.9.3/coestreicher"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"},{id:"chandramoorthy",author:"Nisha Chandramoorthy, QiQi Wang",title:"On the probability of finding nonphysical solutions through shadowing",publisher:"Journal of Computational Physics",year:"1 September 2021",link:"https://doi.org/10.1016/j.jcp.2021.110389"}];class Ph extends ft{constructor(e){super(),mt(this,e,null,Lh,ct,{})}}function Ch(c){let e=Ia(c[0]).index+"",t;return{c(){t=s(e)},l(i){t=l(i,e)},m(i,r){f(i,t,r)},p(i,r){r&1&&e!==(e=Ia(i[0]).index+"")&&zs(t,e)},d(i){i&&o(t)}}}function Sh(c){let e,t,i,r;return t=new B({props:{href:Ia(c[0]).link,$$slots:{default:[Ch]},$$scope:{ctx:c}}}),{c(){e=s("["),x(t.$$.fragment),i=s("]")},l(a){e=l(a,"["),k(t.$$.fragment,a),i=l(a,"]")},m(a,h){f(a,e,h),I(t,a,h),f(a,i,h),r=!0},p(a,[h]){const u={};h&1&&(u.href=Ia(a[0]).link),h&3&&(u.$$scope={dirty:h,ctx:a}),t.$set(u)},i(a){r||(b(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&(o(e),o(i)),j(t,a)}}}function Hh(c,e,t){let{id:i}=e;return c.$$set=r=>{"id"in r&&t(0,i=r.id)},[i]}class Y extends ft{constructor(e){super(),mt(this,e,Hh,Sh,ct,{id:0})}}function Rh(c){let e,t;const i=c[2].default,r=Ki(i,c,c[1],null);return{c(){e=z("div"),r&&r.c(),this.h()},l(a){e=E(a,"DIV",{id:!0,class:!0});var h=R(e);r&&r.l(h),h.forEach(o),this.h()},h(){T(e,"id",c[0]),T(e,"class","text-2xl font-bold text-center my-8")},m(a,h){f(a,e,h),r&&r.m(e,null),t=!0},p(a,[h]){r&&r.p&&(!t||h&2)&&Ji(r,i,a,a[1],t?Yi(i,a[1],h,null):Xi(a[1]),null),(!t||h&1)&&T(e,"id",a[0])},i(a){t||(b(r,a),t=!0)},o(a){_(r,a),t=!1},d(a){a&&o(e),r&&r.d(a)}}}function Nh(c,e,t){let{$$slots:i={},$$scope:r}=e,{id:a}=e;return c.$$set=h=>{"id"in h&&t(0,a=h.id),"$$scope"in h&&t(1,r=h.$$scope)},[a,r,i]}class Wi extends ft{constructor(e){super(),mt(this,e,Nh,Rh,ct,{id:0})}}function Gh(c){let e,t;const i=c[2].default,r=Ki(i,c,c[1],null);return{c(){e=z("div"),r&&r.c(),this.h()},l(a){e=E(a,"DIV",{id:!0,class:!0});var h=R(e);r&&r.l(h),h.forEach(o),this.h()},h(){T(e,"id",c[0]),T(e,"class","text-xl font-medium text-left mt-8 mb-4")},m(a,h){f(a,e,h),r&&r.m(e,null),t=!0},p(a,[h]){r&&r.p&&(!t||h&2)&&Ji(r,i,a,a[1],t?Yi(i,a[1],h,null):Xi(a[1]),null),(!t||h&1)&&T(e,"id",a[0])},i(a){t||(b(r,a),t=!0)},o(a){_(r,a),t=!1},d(a){a&&o(e),r&&r.d(a)}}}function Dh(c,e,t){let{$$slots:i={},$$scope:r}=e,{id:a}=e;return c.$$set=h=>{"id"in h&&t(0,a=h.id),"$$scope"in h&&t(1,r=h.$$scope)},[a,r,i]}class Oi extends ft{constructor(e){super(),mt(this,e,Dh,Gh,ct,{id:0})}}function qh(c){let e,t;const i=c[1].default,r=Ki(i,c,c[0],null);return{c(){e=z("div"),r&&r.c(),this.h()},l(a){e=E(a,"DIV",{class:!0});var h=R(e);r&&r.l(h),h.forEach(o),this.h()},h(){T(e,"class","text-lg font-medium text-left ms-4 mt-4 mb-4")},m(a,h){f(a,e,h),r&&r.m(e,null),t=!0},p(a,[h]){r&&r.p&&(!t||h&1)&&Ji(r,i,a,a[0],t?Yi(i,a[0],h,null):Xi(a[0]),null)},i(a){t||(b(r,a),t=!0)},o(a){_(r,a),t=!1},d(a){a&&o(e),r&&r.d(a)}}}function Fh(c,e,t){let{$$slots:i={},$$scope:r}=e;return c.$$set=a=>{"$$scope"in a&&t(0,r=a.$$scope)},[r,i]}class wh extends ft{constructor(e){super(),mt(this,e,Fh,qh,ct,{})}}function Zh(c){let e,t,i;const r=c[3].default,a=Ki(r,c,c[2],null);return{c(){e=z("p"),a&&a.c(),this.h()},l(h){e=E(h,"P",{class:!0});var u=R(e);a&&a.l(u),u.forEach(o),this.h()},h(){T(e,"class",t="my-2 "+c[0]+" "+c[1])},m(h,u){f(h,e,u),a&&a.m(e,null),i=!0},p(h,[u]){a&&a.p&&(!i||u&4)&&Ji(a,r,h,h[2],i?Yi(r,h[2],u,null):Xi(h[2]),null),(!i||u&3&&t!==(t="my-2 "+h[0]+" "+h[1]))&&T(e,"class",t)},i(h){i||(b(a,h),i=!0)},o(h){_(a,h),i=!1},d(h){h&&o(e),a&&a.d(h)}}}function Vh(c,e,t){let{$$slots:i={},$$scope:r}=e,{indent:a="indent-8"}=e,{style:h=""}=e;return c.$$set=u=>{"indent"in u&&t(0,a=u.indent),"style"in u&&t(1,h=u.style),"$$scope"in u&&t(2,r=u.$$scope)},[a,h,r,i]}class G extends ft{constructor(e){super(),mt(this,e,Vh,Zh,ct,{indent:0,style:1})}}function vh(c,e,t){const i=c.slice();return i[1]=e[t],i}function yh(c){let e,t,i=c[1].desc+"",r,a,h,u,n=c[1].val+"",g,y;return{c(){e=z("li"),t=z("div"),r=s(i),a=P(),h=z("div"),u=z("span"),g=s(n),y=P(),this.h()},l(d){e=E(d,"LI",{class:!0});var v=R(e);t=E(v,"DIV",{class:!0});var M=R(t);r=l(M,i),M.forEach(o),a=C(v),h=E(v,"DIV",{class:!0});var A=R(h);u=E(A,"SPAN",{class:!0});var H=R(u);g=l(H,n),H.forEach(o),A.forEach(o),y=C(v),v.forEach(o),this.h()},h(){T(t,"class","flex-none w-32 sm:w-64"),T(u,"class","rounded-0.5 p-1 font-mono"),T(h,"class","w-fit flex-wrap"),T(e,"class","flex items-center justify-left")},m(d,v){f(d,e,v),p(e,t),p(t,r),p(e,a),p(e,h),p(h,u),p(u,g),p(e,y)},p(d,v){v&1&&i!==(i=d[1].desc+"")&&zs(r,i),v&1&&n!==(n=d[1].val+"")&&zs(g,n)},d(d){d&&o(e)}}}function Bh(c){let e,t,i=ka(c[0]),r=[];for(let a=0;a<i.length;a+=1)r[a]=yh(vh(c,i,a));return{c(){e=z("section"),t=z("ul");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=E(a,"SECTION",{class:!0});var h=R(e);t=E(h,"UL",{class:!0});var u=R(t);for(let n=0;n<r.length;n+=1)r[n].l(u);u.forEach(o),h.forEach(o),this.h()},h(){T(t,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),T(e,"class","relative block my-4")},m(a,h){f(a,e,h),p(e,t);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null)},p(a,[h]){if(h&1){i=ka(a[0]);let u;for(u=0;u<i.length;u+=1){const n=vh(a,i,u);r[u]?r[u].p(n,h):(r[u]=yh(n),r[u].c(),r[u].m(t,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=i.length}},i:U,o:U,d(a){a&&o(e),xh(r,a)}}}function Uh(c,e,t){let{hps:i=[]}=e;return c.$$set=r=>{"hps"in r&&t(0,i=r.hps)},[i]}class Ts extends ft{constructor(e){super(),mt(this,e,Uh,Bh,ct,{hps:0})}}function Wh(c){let e,t;const i=c[1].default,r=Ki(i,c,c[0],null);return{c(){e=z("figcaption"),r&&r.c(),this.h()},l(a){e=E(a,"FIGCAPTION",{class:!0});var h=R(e);r&&r.l(h),h.forEach(o),this.h()},h(){T(e,"class","text-center text-xs mt-2")},m(a,h){f(a,e,h),r&&r.m(e,null),t=!0},p(a,[h]){r&&r.p&&(!t||h&1)&&Ji(r,i,a,a[0],t?Yi(i,a[0],h,null):Xi(a[0]),null)},i(a){t||(b(r,a),t=!0)},o(a){_(r,a),t=!1},d(a){a&&o(e),r&&r.d(a)}}}function Oh(c,e,t){let{$$slots:i={},$$scope:r}=e;return c.$$set=a=>{"$$scope"in a&&t(0,r=a.$$scope)},[r,i]}class et extends ft{constructor(e){super(),mt(this,e,Oh,Wh,ct,{})}}const{window:Kh}=Ah;function Jh(c){let e,t='<nav class="border-r-2 sticky top-12"><div><section><ul class="menu"><li><a href="#intro">Intro</a></li> <li><a href="#lorenz">Lorenz Attractor</a></li> <li><a href="#nhits">Neural Architecture</a></li> <li><a href="#experiments">Experiments</a></li> <ul class="text-sm submenu"><li><a href="#datagen">Data Generation</a></li> <li><a href="#model-1">Model 1</a></li> <li><a href="#model-2">Model 2</a></li> <li><a href="#model-3">Model 3</a></li> <li><a href="#arpred">Autoregressive Prediction</a></li></ul> <li><a href="#discussion">Discussion</a></li> <li><a href="#references">References</a></li></ul></section></div></nav>',i,r;return{c(){e=z("aside"),e.innerHTML=t,this.h()},l(a){e=E(a,"ASIDE",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-u7i093"&&(e.innerHTML=t),this.h()},h(){T(e,"class","max-sm:hidden")},m(a,h){f(a,e,h),i||(r=jh(Kh,"scroll",c[0]),i=!0)},p:U,i:U,o:U,d(a){a&&o(e),i=!1,r()}}}function Xh(c){const e=["intro","lorenz","nhits","experiments","datagen","model-1","model-2","model-3","arpred","discussion","references"],t=["bg-rose-100","rounded"];let i=e[0];const r=n=>{const g="a[href='#"+n+"']";return document.querySelector(g)},a=n=>{const g=r(n).parentElement;t.forEach(y=>g.classList.add(y))},h=n=>{const g=r(n).parentElement;t.forEach(y=>g.classList.remove(y))},u=()=>{let n;e.forEach(g=>{const y=document.getElementById(g);window.scrollY>=y.offsetTop-1&&(n=g)}),n&&n!=i&&(h(i),i=n,a(i))};return _h(()=>{a(i),u()}),[u]}class Yh extends ft{constructor(e){super(),mt(this,e,Xh,Jh,ct,{})}}function Qh(c){return _h(()=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",e.async=!0,document.head.append(e),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[]}class tc extends ft{constructor(e){super(),mt(this,e,Qh,null,ct,{})}}const ec=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,nc=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,ic=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,ac=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,oc=`
\\begin{align}
\\operatorname{J}(z) := exp(-\\frac{z^2}{2}) \\\\
\\end{align}`,rc=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],sc=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~687 million"}],lc=[{desc:"horizon",val:500},{desc:"lookback",val:1e3},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"},{desc:"total trainable parameters",val:"~857 million"}];function hc(c){let e,t,i,r,a,h,u;return document.title=e=_a,{c(){t=z("meta"),i=z("meta"),r=z("meta"),a=z("meta"),h=z("meta"),u=z("meta"),this.h()},l(n){const g=Mh("svelte-xp42rc",document.head);t=E(g,"META",{name:!0,content:!0}),i=E(g,"META",{property:!0,content:!0}),r=E(g,"META",{property:!0,content:!0}),a=E(g,"META",{property:!0,content:!0}),h=E(g,"META",{property:!0,content:!0}),u=E(g,"META",{property:!0,content:!0}),g.forEach(o),this.h()},h(){T(t,"name","description"),T(t,"content",bh),T(i,"property","og:type"),T(i,"content","article"),T(r,"property","og:url"),T(r,"content","https://nrxszvo.github.io/nhits-lorenz"),T(a,"property","og:description"),T(a,"content",bh),T(h,"property","og:image"),T(h,"content","https://nrxszvo.github.io/thumbnail.png"),T(u,"property","og:title"),T(u,"content",_a)},m(n,g){p(document.head,t),p(document.head,i),p(document.head,r),p(document.head,a),p(document.head,h),p(document.head,u)},p(n,[g]){g&0&&e!==(e=_a)&&(document.title=e)},i:U,o:U,d(n){o(t),o(i),o(r),o(a),o(h),o(u)}}}const _a="Generic Deep Learning for Chaotic Dynamics: A Case Study on the Lorenz Attractor",bh="Experiments using the NHiTS neural forecasting architecture to model the Lorenz Attractor; analysis of Z coordinate local maximum converging to 38.5";class cc extends ft{constructor(e){super(),mt(this,e,null,hc,ct,{})}}function fc(c){let e;return{c(){e=s("mochaNN")},l(t){e=l(t,"mochaNN")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function mc(c){let e,t="tl;dr";return{c(){e=z("i"),e.textContent=t,this.h()},l(i){e=E(i,"I",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-ixj9gt"&&(e.textContent=t),this.h()},h(){T(e,"class","font-serif")},m(i,r){f(i,e,r)},p:U,d(i){i&&o(e)}}}function uc(c){let e;return{c(){e=s("Lorenz Map")},l(t){e=l(t,"Lorenz Map")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function pc(c){let e;return{c(){e=s("sMAPE")},l(t){e=l(t,"sMAPE")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function dc(c){let e;return{c(){e=s("Introduction")},l(t){e=l(t,"Introduction")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function $c(c){let e,t,i="Model scale versus domain knowledge in statistical forecasting of chaotic systems",r,a,h,u,n,g,y,d,v,M,A='<a href="#sabine">1</a>',H,F;return a=new Y({props:{id:"gilpin"}}),u=new Y({props:{id:"gilpin"}}),g=new Y({props:{id:"seo"}}),d=new Y({props:{id:"degrave"}}),{c(){e=s(`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=z("i"),t.textContent=i,r=P(),x(a.$$.fragment),h=s(`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),x(u.$$.fragment),n=s(`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),x(g.$$.fragment),y=s(", "),x(d.$$.fragment),v=s(")"),M=z("sup"),M.innerHTML=A,H=s(`.
		`)},l(L){e=l(L,`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=E(L,"I",{"data-svelte-h":!0}),V(t)!=="svelte-oq8z8z"&&(t.textContent=i),r=C(L),k(a.$$.fragment,L),h=l(L,`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),k(u.$$.fragment,L),n=l(L,`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),k(g.$$.fragment,L),y=l(L,", "),k(d.$$.fragment,L),v=l(L,")"),M=E(L,"SUP",{"data-svelte-h":!0}),V(M)!=="svelte-6x9dc9"&&(M.innerHTML=A),H=l(L,`.
		`)},m(L,S){f(L,e,S),f(L,t,S),f(L,r,S),I(a,L,S),f(L,h,S),I(u,L,S),f(L,n,S),I(g,L,S),f(L,y,S),I(d,L,S),f(L,v,S),f(L,M,S),f(L,H,S),F=!0},p:U,i(L){F||(b(a.$$.fragment,L),b(u.$$.fragment,L),b(g.$$.fragment,L),b(d.$$.fragment,L),F=!0)},o(L){_(a.$$.fragment,L),_(u.$$.fragment,L),_(g.$$.fragment,L),_(d.$$.fragment,L),F=!1},d(L){L&&(o(e),o(t),o(r),o(h),o(n),o(y),o(v),o(M),o(H)),j(a,L),j(u,L),j(g,L),j(d,L)}}}function gc(c){let e,t,i="i.e.",r,a,h='<a href="#paperspace">2</a>',u,n,g='<a href="#brunton">3</a>',y;return{c(){e=s(`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=z("i"),t.textContent=i,r=s(`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),a=z("sup"),a.innerHTML=h,u=s(`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=z("sup"),n.innerHTML=g,y=s(`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},l(d){e=l(d,`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=E(d,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1xx6z5c"&&(t.textContent=i),r=l(d,`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),a=E(d,"SUP",{"data-svelte-h":!0}),V(a)!=="svelte-yuo1gg"&&(a.innerHTML=h),u=l(d,`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=E(d,"SUP",{"data-svelte-h":!0}),V(n)!=="svelte-a7rqq8"&&(n.innerHTML=g),y=l(d,`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},m(d,v){f(d,e,v),f(d,t,v),f(d,r,v),f(d,a,v),f(d,u,v),f(d,n,v),f(d,y,v)},p:U,d(d){d&&(o(e),o(t),o(r),o(a),o(u),o(n),o(y))}}}function wc(c){let e;return{c(){e=s(`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},l(t){e=l(t,`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function vc(c){let e;return{c(){e=s("Youtube channel")},l(t){e=l(t,"Youtube channel")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function yc(c){let e;return{c(){e=s("lecture series")},l(t){e=l(t,"lecture series")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function bc(c){let e;return{c(){e=s("The Lorenz Attractor")},l(t){e=l(t,"The Lorenz Attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function _c(c){let e;return{c(){e=s("sensitivity to initial conditions")},l(t){e=l(t,"sensitivity to initial conditions")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function xc(c){let e;return{c(){e=s("n-body problem")},l(t){e=l(t,"n-body problem")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function kc(c){let e;return{c(){e=s("Lorenz Attractor")},l(t){e=l(t,"Lorenz Attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Ic(c){let e,t,i,r,a,h,u,n,g,y;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Butterfly_effect",$$slots:{default:[_c]},$$scope:{ctx:c}}}),r=new B({props:{href:"https://en.wikipedia.org/wiki/N-body_problem",$$slots:{default:[xc]},$$scope:{ctx:c}}}),h=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[kc]},$$scope:{ctx:c}}}),n=new Y({props:{id:"oestreicher"}}),{c(){e=s("Although the phenomon of "),x(t.$$.fragment),i=s(` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),x(r.$$.fragment),a=s(", the birth of modern chaos theory is generally associated with the discovery of the "),x(h.$$.fragment),u=s(`
			by Edward Lorenz et. al. in 1963 `),x(n.$$.fragment),g=s(`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},l(d){e=l(d,"Although the phenomon of "),k(t.$$.fragment,d),i=l(d,` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),k(r.$$.fragment,d),a=l(d,", the birth of modern chaos theory is generally associated with the discovery of the "),k(h.$$.fragment,d),u=l(d,`
			by Edward Lorenz et. al. in 1963 `),k(n.$$.fragment,d),g=l(d,`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},m(d,v){f(d,e,v),I(t,d,v),f(d,i,v),I(r,d,v),f(d,a,v),I(h,d,v),f(d,u,v),I(n,d,v),f(d,g,v),y=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M);const A={};v&1&&(A.$$scope={dirty:v,ctx:d}),r.$set(A);const H={};v&1&&(H.$$scope={dirty:v,ctx:d}),h.$set(H)},i(d){y||(b(t.$$.fragment,d),b(r.$$.fragment,d),b(h.$$.fragment,d),b(n.$$.fragment,d),y=!0)},o(d){_(t.$$.fragment,d),_(r.$$.fragment,d),_(h.$$.fragment,d),_(n.$$.fragment,d),y=!1},d(d){d&&(o(e),o(i),o(a),o(u),o(g)),j(t,d),j(r,d),j(h,d),j(n,d)}}}function jc(c){let e;return{c(){e=s("The Lorenz Attractor")},l(t){e=l(t,"The Lorenz Attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Mc(c){let e;return{c(){e=s(`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},l(t){e=l(t,`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Ac(c){let e;return{c(){e=s("strange attractor")},l(t){e=l(t,"strange attractor")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Tc(c){let e;return{c(){e=s("Hausdorff dimension")},l(t){e=l(t,"Hausdorff dimension")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function zc(c){let e,t,i="Attractor",r,a,h,u,n,g;return a=new B({props:{href:"https://en.wikipedia.org/wiki/Attractor#Strange_attractor",$$slots:{default:[Ac]},$$scope:{ctx:c}}}),u=new B({props:{href:"https://en.wikipedia.org/wiki/Hausdorff_dimension",$$slots:{default:[Tc]},$$scope:{ctx:c}}}),{c(){e=s("The Lorenz "),t=z("i"),t.textContent=i,r=s(` refers to a set of chaotic solutions to the system that
			constitute a `),x(a.$$.fragment),h=s(`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),x(u.$$.fragment),n=s(` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},l(y){e=l(y,"The Lorenz "),t=E(y,"I",{"data-svelte-h":!0}),V(t)!=="svelte-7jrnvq"&&(t.textContent=i),r=l(y,` refers to a set of chaotic solutions to the system that
			constitute a `),k(a.$$.fragment,y),h=l(y,`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),k(u.$$.fragment,y),n=l(y,` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},m(y,d){f(y,e,d),f(y,t,d),f(y,r,d),I(a,y,d),f(y,h,d),I(u,y,d),f(y,n,d),g=!0},p(y,d){const v={};d&1&&(v.$$scope={dirty:d,ctx:y}),a.$set(v);const M={};d&1&&(M.$$scope={dirty:d,ctx:y}),u.$set(M)},i(y){g||(b(a.$$.fragment,y),b(u.$$.fragment,y),g=!0)},o(y){_(a.$$.fragment,y),_(u.$$.fragment,y),g=!1},d(y){y&&(o(e),o(t),o(r),o(h),o(n)),j(a,y),j(u,y)}}}function Ec(c){let e;return{c(){e=s("Hopf bifurcation")},l(t){e=l(t,"Hopf bifurcation")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Lc(c){let e,t="$\\rho$",i,r,a="$\\rho \\lt 1$",h,u,n="$\\rho \\approx 24.7$",g,y,d,v,M;return d=new B({props:{href:"https://en.wikipedia.org/wiki/Hopf_bifurcation",$$slots:{default:[Ec]},$$scope:{ctx:c}}}),{c(){e=s("Other parameterizations of interest generally involve varying the "),i=s(t),r=s(` parameter,
			for example, `),h=s(a),u=s(" in which the system is stable, and "),g=s(n),y=s(`,
			at which a `),x(d.$$.fragment),v=s(" occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},l(A){e=l(A,"Other parameterizations of interest generally involve varying the "),i=l(A,t),r=l(A,` parameter,
			for example, `),h=l(A,a),u=l(A," in which the system is stable, and "),g=l(A,n),y=l(A,`,
			at which a `),k(d.$$.fragment,A),v=l(A," occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},m(A,H){f(A,e,H),f(A,i,H),f(A,r,H),f(A,h,H),f(A,u,H),f(A,g,H),f(A,y,H),I(d,A,H),f(A,v,H),M=!0},p(A,H){const F={};H&1&&(F.$$scope={dirty:H,ctx:A}),d.$set(F)},i(A){M||(b(d.$$.fragment,A),M=!0)},o(A){_(d.$$.fragment,A),M=!1},d(A){A&&(o(e),o(i),o(r),o(h),o(u),o(g),o(y),o(v)),j(d,A)}}}function Pc(c){let e;return{c(){e=s("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Cc(c){let e,t,i,r;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Pc]},$$scope:{ctx:c}}}),{c(){e=s("For all trajectories in this project, I used Gilpin's "),x(t.$$.fragment),i=s(` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},l(a){e=l(a,"For all trajectories in this project, I used Gilpin's "),k(t.$$.fragment,a),i=l(a,` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},m(a,h){f(a,e,h),I(t,a,h),f(a,i,h),r=!0},p(a,h){const u={};h&1&&(u.$$scope={dirty:h,ctx:a}),t.$set(u)},i(a){r||(b(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&(o(e),o(i)),j(t,a)}}}function Sc(c){let e;return{c(){e=s("Neural Architecture: N-HiTS")},l(t){e=l(t,"Neural Architecture: N-HiTS")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Hc(c){let e,t,i,r,a,h;return t=new Y({props:{id:"challu"}}),r=new Y({props:{id:"gilpin"}}),{c(){e=s("The N-HiTS "),x(t.$$.fragment),i=s(` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),x(r.$$.fragment),a=s(`, it seemed like the natural starting point
			for a network architecture.`)},l(u){e=l(u,"The N-HiTS "),k(t.$$.fragment,u),i=l(u,` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),k(r.$$.fragment,u),a=l(u,`, it seemed like the natural starting point
			for a network architecture.`)},m(u,n){f(u,e,n),I(t,u,n),f(u,i,n),I(r,u,n),f(u,a,n),h=!0},p:U,i(u){h||(b(t.$$.fragment,u),b(r.$$.fragment,u),h=!0)},o(u){_(t.$$.fragment,u),_(r.$$.fragment,u),h=!1},d(u){u&&(o(e),o(i),o(a)),j(t,u),j(r,u)}}}function Rc(c){let e,t,i,r,a,h;return t=new Y({props:{id:"oreshkin"}}),r=new Y({props:{id:"oreshkin"}}),{c(){e=s("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),x(t.$$.fragment),i=s(`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),x(r.$$.fragment),a=s(".")},l(u){e=l(u,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),k(t.$$.fragment,u),i=l(u,`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),k(r.$$.fragment,u),a=l(u,".")},m(u,n){f(u,e,n),I(t,u,n),f(u,i,n),I(r,u,n),f(u,a,n),h=!0},p:U,i(u){h||(b(t.$$.fragment,u),b(r.$$.fragment,u),h=!0)},o(u){_(t.$$.fragment,u),_(r.$$.fragment,u),h=!1},d(u){u&&(o(e),o(i),o(a)),j(t,u),j(r,u)}}}function Nc(c){let e,t,i,r;return t=new Y({props:{id:"challu"}}),{c(){e=s(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),x(t.$$.fragment),i=s(".")},l(a){e=l(a,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),k(t.$$.fragment,a),i=l(a,".")},m(a,h){f(a,e,h),I(t,a,h),f(a,i,h),r=!0},p:U,i(a){r||(b(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&(o(e),o(i)),j(t,a)}}}function Gc(c){let e;return{c(){e=s("Experiments")},l(t){e=l(t,"Experiments")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Dc(c){let e,t,i,r;return t=new Y({props:{id:"gilpin"}}),{c(){e=s(`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),x(t.$$.fragment),i=s(`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},l(a){e=l(a,`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),k(t.$$.fragment,a),i=l(a,`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},m(a,h){f(a,e,h),I(t,a,h),f(a,i,h),r=!0},p:U,i(a){r||(b(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&(o(e),o(i)),j(t,a)}}}function qc(c){let e;return{c(){e=s("Data Generation")},l(t){e=l(t,"Data Generation")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Fc(c){let e;return{c(){e=s("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Zc(c){let e;return{c(){e=s("IVP solver")},l(t){e=l(t,"IVP solver")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Vc(c){let e;return{c(){e=s("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Bc(c){let e,t="$H$",i,r,a="$dt$",h,u,n="$0.015$",g,y,d,v,M,A,H="$dt$",F,L,S,Z="after",O,nt="$dt$",K,D,q,J,tt="$\\approx 1.8\\mathrm{e}\\text{-}\\mathrm{4}$",X,ut,at;return d=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Fc]},$$scope:{ctx:c}}}),M=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[Zc]},$$scope:{ctx:c}}}),q=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Vc]},$$scope:{ctx:c}}}),{c(){e=s("I begin with a horizon (prediction window), "),i=s(t),r=s(", of 100 points, using a "),h=s(a),u=s(` of
			approximately
			`),g=s(n),y=s(" seconds per point (the default from "),x(d.$$.fragment),v=s(") to sample the solution produced by the "),x(M.$$.fragment),A=s(". Importantly, note that this "),F=s(H),L=s(` is only the one used for sampling the solution
			`),S=z("i"),S.textContent=Z,O=s(`
			it is generated by the IVP solver. The actual `),K=s(nt),D=s(` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),x(q.$$.fragment),J=s(" is "),X=s(tt),ut=s(`.
		`)},l(N){e=l(N,"I begin with a horizon (prediction window), "),i=l(N,t),r=l(N,", of 100 points, using a "),h=l(N,a),u=l(N,` of
			approximately
			`),g=l(N,n),y=l(N," seconds per point (the default from "),k(d.$$.fragment,N),v=l(N,") to sample the solution produced by the "),k(M.$$.fragment,N),A=l(N,". Importantly, note that this "),F=l(N,H),L=l(N,` is only the one used for sampling the solution
			`),S=E(N,"I",{"data-svelte-h":!0}),V(S)!=="svelte-10nlrz4"&&(S.textContent=Z),O=l(N,`
			it is generated by the IVP solver. The actual `),K=l(N,nt),D=l(N,` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),k(q.$$.fragment,N),J=l(N," is "),X=l(N,tt),ut=l(N,`.
		`)},m(N,W){f(N,e,W),f(N,i,W),f(N,r,W),f(N,h,W),f(N,u,W),f(N,g,W),f(N,y,W),I(d,N,W),f(N,v,W),I(M,N,W),f(N,A,W),f(N,F,W),f(N,L,W),f(N,S,W),f(N,O,W),f(N,K,W),f(N,D,W),I(q,N,W),f(N,J,W),f(N,X,W),f(N,ut,W),at=!0},p(N,W){const _i={};W&1&&(_i.$$scope={dirty:W,ctx:N}),d.$set(_i);const xi={};W&1&&(xi.$$scope={dirty:W,ctx:N}),M.$set(xi);const Qi={};W&1&&(Qi.$$scope={dirty:W,ctx:N}),q.$set(Qi)},i(N){at||(b(d.$$.fragment,N),b(M.$$.fragment,N),b(q.$$.fragment,N),at=!0)},o(N){_(d.$$.fragment,N),_(M.$$.fragment,N),_(q.$$.fragment,N),at=!1},d(N){N&&(o(e),o(i),o(r),o(h),o(u),o(g),o(y),o(v),o(A),o(F),o(L),o(S),o(O),o(K),o(D),o(J),o(X),o(ut)),j(d,N),j(M,N),j(q,N)}}}function Uc(c){let e;return{c(){e=s("Lyapunov exponent")},l(t){e=l(t,"Lyapunov exponent")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Wc(c){let e;return{c(){e=s("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Oc(c){let e;return{c(){e=s("Lyapunov time")},l(t){e=l(t,"Lyapunov time")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Kc(c){let e,t,i,r,a,h="$\\lambda_{max}$",u,n,g="$0.8917$",y,d,v,M,A="$1.121s$",H,F,L;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[Uc]},$$scope:{ctx:c}}}),r=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Wc]},$$scope:{ctx:c}}}),v=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[Oc]},$$scope:{ctx:c}}}),{c(){e=s(`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),x(t.$$.fragment),i=s(`.
			As reported in
			`),x(r.$$.fragment),a=s(", the Lyapunov exponent, "),u=s(h),n=s(`,
			for the Lorenz Attractor is approx. `),y=s(g),d=s(", and so the "),x(v.$$.fragment),M=s(` is approx.
			`),H=s(A),F=s(".")},l(S){e=l(S,`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),k(t.$$.fragment,S),i=l(S,`.
			As reported in
			`),k(r.$$.fragment,S),a=l(S,", the Lyapunov exponent, "),u=l(S,h),n=l(S,`,
			for the Lorenz Attractor is approx. `),y=l(S,g),d=l(S,", and so the "),k(v.$$.fragment,S),M=l(S,` is approx.
			`),H=l(S,A),F=l(S,".")},m(S,Z){f(S,e,Z),I(t,S,Z),f(S,i,Z),I(r,S,Z),f(S,a,Z),f(S,u,Z),f(S,n,Z),f(S,y,Z),f(S,d,Z),I(v,S,Z),f(S,M,Z),f(S,H,Z),f(S,F,Z),L=!0},p(S,Z){const O={};Z&1&&(O.$$scope={dirty:Z,ctx:S}),t.$set(O);const nt={};Z&1&&(nt.$$scope={dirty:Z,ctx:S}),r.$set(nt);const K={};Z&1&&(K.$$scope={dirty:Z,ctx:S}),v.$set(K)},i(S){L||(b(t.$$.fragment,S),b(r.$$.fragment,S),b(v.$$.fragment,S),L=!0)},o(S){_(t.$$.fragment,S),_(r.$$.fragment,S),_(v.$$.fragment,S),L=!1},d(S){S&&(o(e),o(i),o(a),o(u),o(n),o(y),o(d),o(M),o(H),o(F)),j(t,S),j(r,S),j(v,S)}}}function Jc(c){let e,t,i="on average",r,a="$e$",h,u,n="$1.121$",g,y,d="$\\frac{4}{3}$",v,M,A,H='<a href="#lyapunov">1</a>',F;return{c(){e=s("This tells us that, "),t=z("i"),t.textContent=i,r=s(`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),h=s(a),u=s(` after
			`),g=s(n),y=s(` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=s(d),M=s(`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),A=z("sup"),A.innerHTML=H,F=s(`, a
			defining feature of all chaotic systems.`)},l(L){e=l(L,"This tells us that, "),t=E(L,"I",{"data-svelte-h":!0}),V(t)!=="svelte-ggx8py"&&(t.textContent=i),r=l(L,`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),h=l(L,a),u=l(L,` after
			`),g=l(L,n),y=l(L,` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=l(L,d),M=l(L,`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),A=E(L,"SUP",{"data-svelte-h":!0}),V(A)!=="svelte-1b4twc5"&&(A.innerHTML=H),F=l(L,`, a
			defining feature of all chaotic systems.`)},m(L,S){f(L,e,S),f(L,t,S),f(L,r,S),f(L,h,S),f(L,u,S),f(L,g,S),f(L,y,S),f(L,v,S),f(L,M,S),f(L,A,S),f(L,F,S)},p:U,d(L){L&&(o(e),o(t),o(r),o(h),o(u),o(g),o(y),o(v),o(M),o(A),o(F))}}}function Xc(c){let e,t="$[-9.79, -15.04, 20.53]$",i,r,a="$[0.99,1.01]$",h,u;return{c(){e=s(`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=s(t),r=s(` and multiplied by a random
			perturbation uniformly sampled from the interval `),h=s(a),u=s(".")},l(n){e=l(n,`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=l(n,t),r=l(n,` and multiplied by a random
			perturbation uniformly sampled from the interval `),h=l(n,a),u=l(n,".")},m(n,g){f(n,e,g),f(n,i,g),f(n,r,g),f(n,h,g),f(n,u,g)},p:U,d(n){n&&(o(e),o(i),o(r),o(h),o(u))}}}function Yc(c){let e,t="$3*100 = 300$",i,r,a="$3 * (500 + 100) = 1800$",h,u;return{c(){e=s(`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=s(t),r=s(`, and each
			training sample's length is `),h=s(a),u=s(").")},l(n){e=l(n,`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=l(n,t),r=l(n,`, and each
			training sample's length is `),h=l(n,a),u=l(n,").")},m(n,g){f(n,e,g),f(n,i,g),f(n,r,g),f(n,h,g),f(n,u,g)},p:U,d(n){n&&(o(e),o(i),o(r),o(h),o(u))}}}function Qc(c){let e,t=`$10,000 - 600 +
		1 = 9401$`,i,r,a,h='<a href="#initial-conditions">2</a>',u;return{c(){e=s(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=s(t),r=s(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),a=z("sup"),a.innerHTML=h,u=s(".")},l(n){e=l(n,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=l(n,t),r=l(n,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),a=E(n,"SUP",{"data-svelte-h":!0}),V(a)!=="svelte-uv3gx8"&&(a.innerHTML=h),u=l(n,".")},m(n,g){f(n,e,g),f(n,i,g),f(n,r,g),f(n,a,g),f(n,u,g)},p:U,d(n){n&&(o(e),o(i),o(r),o(a),o(u))}}}function tf(c){let e;return{c(){e=s("Model 1")},l(t){e=l(t,"Model 1")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function ef(c){let e;return{c(){e=s("The full set of N-HiTS hyperparameters for the first model configuration is:")},l(t){e=l(t,"The full set of N-HiTS hyperparameters for the first model configuration is:")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function nf(c){let e,t,i,r,a,h;return t=new Y({props:{id:"challu"}}),r=new Y({props:{id:"gilpin"}}),{c(){e=s("The model is optimized with MAE loss, consistent with the default loss from "),x(t.$$.fragment),i=s(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),x(r.$$.fragment),a=s(":")},l(u){e=l(u,"The model is optimized with MAE loss, consistent with the default loss from "),k(t.$$.fragment,u),i=l(u,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),k(r.$$.fragment,u),a=l(u,":")},m(u,n){f(u,e,n),I(t,u,n),f(u,i,n),I(r,u,n),f(u,a,n),h=!0},p:U,i(u){h||(b(t.$$.fragment,u),b(r.$$.fragment,u),h=!0)},o(u){_(t.$$.fragment,u),_(r.$$.fragment,u),h=!1},d(u){u&&(o(e),o(i),o(a)),j(t,u),j(r,u)}}}function af(c){let e;return{c(){e=s(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},l(t){e=l(t,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function of(c){let e;return{c(){e=s("Model 1 - sMAPE error distribution on the test set")},l(t){e=l(t,"Model 1 - sMAPE error distribution on the test set")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function rf(c){let e;return{c(){e=s(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},l(t){e=l(t,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function sf(c){let e;return{c(){e=s(`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},l(t){e=l(t,`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function lf(c){let e;return{c(){e=s(`One interesting observation in all three graphs is that there appears to be a kind of
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
			alignment within the prediction window.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function hf(c){let e;return{c(){e=s(`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},l(t){e=l(t,`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function cf(c){let e;return{c(){e=s("critical points")},l(t){e=l(t,"critical points")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function ff(c){let e,t,i,r,a,h,u,n,g,y;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[cf]},$$scope:{ctx:c}}}),r=new Y({props:{id:"osinga"}}),h=new Y({props:{id:"osinga"}}),n=new Y({props:{id:"osinga"}}),{c(){e=s(`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),x(t.$$.fragment),i=s(` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),x(r.$$.fragment),a=s(` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),x(h.$$.fragment),u=s(`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),x(n.$$.fragment),g=s(`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},l(d){e=l(d,`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),k(t.$$.fragment,d),i=l(d,` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),k(r.$$.fragment,d),a=l(d,` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),k(h.$$.fragment,d),u=l(d,`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),k(n.$$.fragment,d),g=l(d,`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},m(d,v){f(d,e,v),I(t,d,v),f(d,i,v),I(r,d,v),f(d,a,v),I(h,d,v),f(d,u,v),I(n,d,v),f(d,g,v),y=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M)},i(d){y||(b(t.$$.fragment,d),b(r.$$.fragment,d),b(h.$$.fragment,d),b(n.$$.fragment,d),y=!0)},o(d){_(t.$$.fragment,d),_(r.$$.fragment,d),_(h.$$.fragment,d),_(n.$$.fragment,d),y=!1},d(d){d&&(o(e),o(i),o(a),o(u),o(g)),j(t,d),j(r,d),j(h,d),j(n,d)}}}function mf(c){let e;return{c(){e=s("Hartman-Grobman Theorem")},l(t){e=l(t,"Hartman-Grobman Theorem")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function uf(c){let e,t,i,r="$f(t) = \\exp(\\lambda t)x_0$",a,h,u="$\\lambda$",n,g,y="$x_0$",d,v,M="$\\approx 11.8$",A,H,F;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem",$$slots:{default:[mf]},$$scope:{ctx:c}}}),{c(){e=s(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),x(t.$$.fragment),i=s(`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),a=s(r),h=s(`,
			where `),n=s(u),g=s(" equals the eigenvalue and "),d=s(y),v=s(` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),A=s(M),H=s(`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},l(L){e=l(L,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),k(t.$$.fragment,L),i=l(L,`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),a=l(L,r),h=l(L,`,
			where `),n=l(L,u),g=l(L," equals the eigenvalue and "),d=l(L,y),v=l(L,` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),A=l(L,M),H=l(L,`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},m(L,S){f(L,e,S),I(t,L,S),f(L,i,S),f(L,a,S),f(L,h,S),f(L,n,S),f(L,g,S),f(L,d,S),f(L,v,S),f(L,A,S),f(L,H,S),F=!0},p(L,S){const Z={};S&1&&(Z.$$scope={dirty:S,ctx:L}),t.$set(Z)},i(L){F||(b(t.$$.fragment,L),F=!0)},o(L){_(t.$$.fragment,L),F=!1},d(L){L&&(o(e),o(i),o(a),o(h),o(n),o(g),o(d),o(v),o(A),o(H)),j(t,L)}}}function pf(c){let e;return{c(){e=s(`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},l(t){e=l(t,`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function df(c){let e;return{c(){e=s(`Given all of this background, it is now unsurprising that the model is struggling to
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
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function $f(c){let e;return{c(){e=s("Model 2")},l(t){e=l(t,"Model 2")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function gf(c){let e;return{c(){e=s(`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},l(t){e=l(t,`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function wf(c){let e;return{c(){e=s("Model 2 vs Model 1 - sMAPE error distribution.")},l(t){e=l(t,"Model 2 vs Model 1 - sMAPE error distribution.")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function vf(c){let e;return{c(){e=s(`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},l(t){e=l(t,`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function yf(c){let e;return{c(){e=s(`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},l(t){e=l(t,`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function bf(c){let e;return{c(){e=s("Model 2 - sMAPE errors per series per window in the test set.")},l(t){e=l(t,"Model 2 - sMAPE errors per series per window in the test set.")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function _f(c){let e;return{c(){e=s(`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},l(t){e=l(t,`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function xf(c){let e;return{c(){e=s(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},l(t){e=l(t,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function kf(c){let e;return{c(){e=s(`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},l(t){e=l(t,`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function If(c){let e,t="$n$",i,r,a="$n\\!-\\!1$",h,u,n="$n\\!+\\!1$",g,y;return{c(){e=s(`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=s(t),r=s(`
				that is closer to the origin than the points at `),h=s(a),u=s(" and "),g=s(n),y=s(".")},l(d){e=l(d,`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=l(d,t),r=l(d,`
				that is closer to the origin than the points at `),h=l(d,a),u=l(d," and "),g=l(d,n),y=l(d,".")},m(d,v){f(d,e,v),f(d,i,v),f(d,r,v),f(d,h,v),f(d,u,v),f(d,g,v),f(d,y,v)},p:U,d(d){d&&(o(e),o(i),o(r),o(h),o(u),o(g),o(y))}}}function jf(c){let e;return{c(){e=s(`As we can clearly see from the plot, Model 2 is able to predict points that are closer
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
			strategy?`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Mf(c){let e;return{c(){e=s("Model 3")},l(t){e=l(t,"Model 3")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Af(c){let e;return{c(){e=s(`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},l(t){e=l(t,`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Tf(c){let e;return{c(){e=s("3.1: Biased Dataset Distribution")},l(t){e=l(t,"3.1: Biased Dataset Distribution")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function zf(c){let e;return{c(){e=s("Radau solver")},l(t){e=l(t,"Radau solver")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Ef(c){let e,t,i,r="$1\\mathrm{e}{30}$",a,h,u;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[zf]},$$scope:{ctx:c}}}),{c(){e=s(`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. In all of my attempts using the `),x(t.$$.fragment),i=s(` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),a=s(r),h=s(`
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
			exponentially. In all of my attempts using the `),k(t.$$.fragment,n),i=l(n,` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),a=l(n,r),h=l(n,`
			after about 0.5 seconds.`)},m(n,g){f(n,e,g),I(t,n,g),f(n,i,g),f(n,a,g),f(n,h,g),u=!0},p(n,g){const y={};g&1&&(y.$$scope={dirty:g,ctx:n}),t.$set(y)},i(n){u||(b(t.$$.fragment,n),u=!0)},o(n){_(t.$$.fragment,n),u=!1},d(n){n&&(o(e),o(i),o(a),o(h)),j(t,n)}}}function Lf(c){let e,t="$t \\to \\infty$",i,r,a,h="might",u,n,g="e.g.",y,d,v;return y=new Y({props:{id:"osinga"}}),{c(){e=s(`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=s(t),r=s(`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),a=z("i"),a.textContent=h,u=s(` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=z("i"),n.textContent=g,x(y.$$.fragment),d=s(`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},l(M){e=l(M,`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=l(M,t),r=l(M,`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),a=E(M,"I",{"data-svelte-h":!0}),V(a)!=="svelte-ah22qx"&&(a.textContent=h),u=l(M,` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=E(M,"I",{"data-svelte-h":!0}),V(n)!=="svelte-1yxphdm"&&(n.textContent=g),k(y.$$.fragment,M),d=l(M,`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},m(M,A){f(M,e,A),f(M,i,A),f(M,r,A),f(M,a,A),f(M,u,A),f(M,n,A),I(y,M,A),f(M,d,A),v=!0},p:U,i(M){v||(b(y.$$.fragment,M),v=!0)},o(M){_(y.$$.fragment,M),v=!1},d(M){M&&(o(e),o(i),o(r),o(a),o(u),o(n),o(d)),j(y,M)}}}function Pf(c){let e,t="$\\lt{3}$",i,r;return{c(){e=s(`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=s(t),r=s(`
			by a factor of about 10, while the total number of windows is the same as before:`)},l(a){e=l(a,`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=l(a,t),r=l(a,`
			by a factor of about 10, while the total number of windows is the same as before:`)},m(a,h){f(a,e,h),f(a,i,h),f(a,r,h)},p:U,d(a){a&&(o(e),o(i),o(r))}}}function Cf(c){let e;return{c(){e=s(`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},l(t){e=l(t,`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Sf(c){let e;return{c(){e=s(`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},l(t){e=l(t,`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Hf(c){let e;return{c(){e=s(`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},l(t){e=l(t,`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Rf(c){let e;return{c(){e=s(`Possibly we might continue to see incremental improvements if we continue to increase
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
			dataset size to address this problem first.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Nf(c){let e,t="$dt$",i;return{c(){e=s("3.2: Reduced "),i=s(t)},l(r){e=l(r,"3.2: Reduced "),i=l(r,t)},m(r,a){f(r,e,a),f(r,i,a)},p:U,d(r){r&&(o(e),o(i))}}}function Gf(c){let e,t="$dt$",i,r,a="$dt$",h,u,n="$\\approx0.015$",g,y,d="$\\approx0.003$",v,M,A="$\\approx1.5$",H,F,L="$2H$",S,Z,O="$5H$",nt,K;return{c(){e=s("The next idea is to increase the temporal resolution of the model by using a smaller "),i=s(t),r=s(`
			to generate the data points. So far I've used a `),h=s(a),u=s(" of "),g=s(n),y=s(`. Here
			I'll try reducing that by a factor of 5 to `),v=s(d),M=s(`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),H=s(A),F=s(`
			seconds. From tuning, I found that an input size of `),S=s(L),Z=s(` performs just as well as an
			input size of `),nt=s(O),K=s(`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},l(D){e=l(D,"The next idea is to increase the temporal resolution of the model by using a smaller "),i=l(D,t),r=l(D,`
			to generate the data points. So far I've used a `),h=l(D,a),u=l(D," of "),g=l(D,n),y=l(D,`. Here
			I'll try reducing that by a factor of 5 to `),v=l(D,d),M=l(D,`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),H=l(D,A),F=l(D,`
			seconds. From tuning, I found that an input size of `),S=l(D,L),Z=l(D,` performs just as well as an
			input size of `),nt=l(D,O),K=l(D,`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},m(D,q){f(D,e,q),f(D,i,q),f(D,r,q),f(D,h,q),f(D,u,q),f(D,g,q),f(D,y,q),f(D,v,q),f(D,M,q),f(D,H,q),f(D,F,q),f(D,S,q),f(D,Z,q),f(D,nt,q),f(D,K,q)},p:U,d(D){D&&(o(e),o(i),o(r),o(h),o(u),o(g),o(y),o(v),o(M),o(H),o(F),o(S),o(Z),o(nt),o(K))}}}function Df(c){let e;return{c(){e=s("The new hyperparameters for Model 3.2 are:")},l(t){e=l(t,"The new hyperparameters for Model 3.2 are:")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function qf(c){let e;return{c(){e=s("FSDP Strategy")},l(t){e=l(t,"FSDP Strategy")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Ff(c){let e;return{c(){e=s(`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},l(t){e=l(t,`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Zf(c){let e;return{c(){e=s("Autoregressive Prediction")},l(t){e=l(t,"Autoregressive Prediction")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Vf(c){let e,t="$L$",i,r,a="$L$",h,u;return{c(){e=s(`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=s(t),r=s(`
			samples of the reference trajectory, where `),h=s(a),u=s(` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},l(n){e=l(n,`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=l(n,t),r=l(n,`
			samples of the reference trajectory, where `),h=l(n,a),u=l(n,` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},m(n,g){f(n,e,g),f(n,i,g),f(n,r,g),f(n,h,g),f(n,u,g)},p:U,d(n){n&&(o(e),o(i),o(r),o(h),o(u))}}}function Bf(c){let e;return{c(){e=s("shadowing lemma")},l(t){e=l(t,"shadowing lemma")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Uf(c){let e,t,i="i.e.",r,a,h,u,n="e.g.",g,y,d,v;return a=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[Bf]},$$scope:{ctx:c}}}),y=new Y({props:{id:"chandramoorthy"}}),{c(){e=s(`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=z("i"),t.textContent=i,r=s(` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),x(a.$$.fragment),h=s(` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),u=z("i"),u.textContent=n,g=P(),x(y.$$.fragment),d=s(`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},l(M){e=l(M,`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=E(M,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1xx6z5c"&&(t.textContent=i),r=l(M,` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),k(a.$$.fragment,M),h=l(M,` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),u=E(M,"I",{"data-svelte-h":!0}),V(u)!=="svelte-1yxphdm"&&(u.textContent=n),g=C(M),k(y.$$.fragment,M),d=l(M,`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},m(M,A){f(M,e,A),f(M,t,A),f(M,r,A),I(a,M,A),f(M,h,A),f(M,u,A),f(M,g,A),I(y,M,A),f(M,d,A),v=!0},p(M,A){const H={};A&1&&(H.$$scope={dirty:A,ctx:M}),a.$set(H)},i(M){v||(b(a.$$.fragment,M),b(y.$$.fragment,M),v=!0)},o(M){_(a.$$.fragment,M),_(y.$$.fragment,M),v=!1},d(M){M&&(o(e),o(t),o(r),o(h),o(u),o(g),o(d)),j(a,M),j(y,M)}}}function Wf(c){let e,t,i,r;return t=new Y({props:{id:"chandramoorthy"}}),{c(){e=s(`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),x(t.$$.fragment),i=s(`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},l(a){e=l(a,`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),k(t.$$.fragment,a),i=l(a,`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},m(a,h){f(a,e,h),I(t,a,h),f(a,i,h),r=!0},p:U,i(a){r||(b(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&(o(e),o(i)),j(t,a)}}}function Of(c){let e;return{c(){e=s("Radau")},l(t){e=l(t,"Radau")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Kf(c){let e;return{c(){e=s(`Comparing the distribution of an exponential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},l(t){e=l(t,`Comparing the distribution of an exponential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Jf(c){let e;return{c(){e=s(`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},l(t){e=l(t,`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Xf(c){let e;return{c(){e=s(`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},l(t){e=l(t,`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Yf(c){let e;return{c(){e=s(`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},l(t){e=l(t,`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function Qf(c){let e;return{c(){e=s("dysts")},l(t){e=l(t,"dysts")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function tm(c){let e;return{c(){e=s("Radau")},l(t){e=l(t,"Radau")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function em(c){let e;return{c(){e=s("RK45")},l(t){e=l(t,"RK45")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function nm(c){let e,t,i,r,a,h,u,n;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Qf]},$$scope:{ctx:c}}}),r=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[tm]},$$scope:{ctx:c}}}),h=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[em]},$$scope:{ctx:c}}}),{c(){e=s(`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),x(t.$$.fragment),i=s(" uses the "),x(r.$$.fragment),a=s(" solver by default, and this is what I used to generate the dataset. "),x(h.$$.fragment),u=s(` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},l(g){e=l(g,`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),k(t.$$.fragment,g),i=l(g," uses the "),k(r.$$.fragment,g),a=l(g," solver by default, and this is what I used to generate the dataset. "),k(h.$$.fragment,g),u=l(g,` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},m(g,y){f(g,e,y),I(t,g,y),f(g,i,y),I(r,g,y),f(g,a,y),I(h,g,y),f(g,u,y),n=!0},p(g,y){const d={};y&1&&(d.$$scope={dirty:y,ctx:g}),t.$set(d);const v={};y&1&&(v.$$scope={dirty:y,ctx:g}),r.$set(v);const M={};y&1&&(M.$$scope={dirty:y,ctx:g}),h.$set(M)},i(g){n||(b(t.$$.fragment,g),b(r.$$.fragment,g),b(h.$$.fragment,g),n=!0)},o(g){_(t.$$.fragment,g),_(r.$$.fragment,g),_(h.$$.fragment,g),n=!1},d(g){g&&(o(e),o(i),o(a),o(u)),j(t,g),j(r,g),j(h,g)}}}function im(c){let e;return{c(){e=s("solve_ivp")},l(t){e=l(t,"solve_ivp")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function am(c){let e,t,i,r;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[im]},$$scope:{ctx:c}}}),{c(){e=s(`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),x(t.$$.fragment),i=s(" is used to produce the IVP solver outputs.")},l(a){e=l(a,`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),k(t.$$.fragment,a),i=l(a," is used to produce the IVP solver outputs.")},m(a,h){f(a,e,h),I(t,a,h),f(a,i,h),r=!0},p(a,h){const u={};h&1&&(u.$$scope={dirty:h,ctx:a}),t.$set(u)},i(a){r||(b(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&(o(e),o(i)),j(t,a)}}}function om(c){let e;return{c(){e=s(`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},l(t){e=l(t,`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function rm(c){let e;return{c(){e=s("Discussion")},l(t){e=l(t,"Discussion")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function sm(c){let e,t,i,r="$2H$",a,h,u="$H$",n,g,y;return t=new Y({props:{id:"challu"}}),{c(){e=s("This project has probed the potential of the NHiTS neural architecture ("),x(t.$$.fragment),i=s(`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),a=s(r),h=s(`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=s(u),g=s(` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},l(d){e=l(d,"This project has probed the potential of the NHiTS neural architecture ("),k(t.$$.fragment,d),i=l(d,`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),a=l(d,r),h=l(d,`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=l(d,u),g=l(d,` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},m(d,v){f(d,e,v),I(t,d,v),f(d,i,v),f(d,a,v),f(d,h,v),f(d,n,v),f(d,g,v),y=!0},p:U,i(d){y||(b(t.$$.fragment,d),y=!0)},o(d){_(t.$$.fragment,d),y=!1},d(d){d&&(o(e),o(i),o(a),o(h),o(n),o(g)),j(t,d)}}}function lm(c){let e;return{c(){e=s(`Similarly, when used autoregressively, the model demonstrated the potential to generate
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
		`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function hm(c){let e;return{c(){e=s(`As already mentioned, it is well understood from dynamical systems theory that the
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
		`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function cm(c){let e,t="$38.55$",i,r,a="$38.45$",h,u,n="$38.6$",g,y,d,v='<a href="#outliers">1</a>',M;return{c(){e=s(`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately `),i=s(t),r=s(`. As the model's temporal resolution is
			increased, the bounds on this value become tighter. For Models 2 and 3, a trajectory
			having a local maximum Z coordinate in the range of `),h=s(a),u=s(" to "),g=s(n),y=s(`
			is a necessary condition for the model's sMAPE error to exceed 5 in the time period immediately
			following its transit past the origin`),d=z("sup"),d.innerHTML=v,M=s(".")},l(A){e=l(A,`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately `),i=l(A,t),r=l(A,`. As the model's temporal resolution is
			increased, the bounds on this value become tighter. For Models 2 and 3, a trajectory
			having a local maximum Z coordinate in the range of `),h=l(A,a),u=l(A," to "),g=l(A,n),y=l(A,`
			is a necessary condition for the model's sMAPE error to exceed 5 in the time period immediately
			following its transit past the origin`),d=E(A,"SUP",{"data-svelte-h":!0}),V(d)!=="svelte-1m8nv3a"&&(d.innerHTML=v),M=l(A,".")},m(A,H){f(A,e,H),f(A,i,H),f(A,r,H),f(A,h,H),f(A,u,H),f(A,g,H),f(A,y,H),f(A,d,H),f(A,M,H)},p:U,d(A){A&&(o(e),o(i),o(r),o(h),o(u),o(g),o(y),o(d),o(M))}}}function fm(c){let e,t,i="minimum",r,a="$38.45$",h,u,n="$38.6$",g,y;return{c(){e=s(`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the next local `),t=z("i"),t.textContent=i,r=s(`
				point, as defined previously, that follows the local maximum Z coordinate. The first
				graph shows the entire range of local maximum Z coordinates for Models 2, 3.1, and 3.2.
				The second graph zooms in on the bounds of `),h=s(a),u=s(" to "),g=s(n),y=s(".")},l(d){e=l(d,`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the next local `),t=E(d,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1af7b6n"&&(t.textContent=i),r=l(d,`
				point, as defined previously, that follows the local maximum Z coordinate. The first
				graph shows the entire range of local maximum Z coordinates for Models 2, 3.1, and 3.2.
				The second graph zooms in on the bounds of `),h=l(d,a),u=l(d," to "),g=l(d,n),y=l(d,".")},m(d,v){f(d,e,v),f(d,t,v),f(d,r,v),f(d,h,v),f(d,u,v),f(d,g,v),f(d,y,v)},p:U,d(d){d&&(o(e),o(t),o(r),o(h),o(u),o(g),o(y))}}}function mm(c){let e;return{c(){e=s("Lorenz Map")},l(t){e=l(t,"Lorenz Map")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function um(c){let e,t,i,r="$38.55$",a,h,u;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[mm]},$$scope:{ctx:c}}}),{c(){e=s(`Lorenz himself also noticed peculiar patterns involving the local maximum Z coordinate
			and formulated the `),x(t.$$.fragment),i=s(` to study the patterns. The map is shown below for Model 3.2's test set. The x coordinate
			at the transition point of the map (vertical dotted red line) corresponds almost perfectly
			with the limit suggested by the above error plots, about `),a=s(r),h=s(`. And the y
			coordinate that gives the best fit (minimum classification error) for separating
			trajectories that switch lobes at the end of the current orbital cycle from those that
			remain on the same lobe for at least another orbital cycle (horizontal dotted red line)
			also corresponds almost perfectly with this value. In other words, the most difficult
			trajectories for our models to predict are the ones that a) achieve the near-maximum
			observed Z coordinate (approximately 48) after passing by the origin, and b) straddle
			the threshold between transitioning from one lobe to the other or remaining on the
			current lobe for at least another orbital cycle.`)},l(n){e=l(n,`Lorenz himself also noticed peculiar patterns involving the local maximum Z coordinate
			and formulated the `),k(t.$$.fragment,n),i=l(n,` to study the patterns. The map is shown below for Model 3.2's test set. The x coordinate
			at the transition point of the map (vertical dotted red line) corresponds almost perfectly
			with the limit suggested by the above error plots, about `),a=l(n,r),h=l(n,`. And the y
			coordinate that gives the best fit (minimum classification error) for separating
			trajectories that switch lobes at the end of the current orbital cycle from those that
			remain on the same lobe for at least another orbital cycle (horizontal dotted red line)
			also corresponds almost perfectly with this value. In other words, the most difficult
			trajectories for our models to predict are the ones that a) achieve the near-maximum
			observed Z coordinate (approximately 48) after passing by the origin, and b) straddle
			the threshold between transitioning from one lobe to the other or remaining on the
			current lobe for at least another orbital cycle.`)},m(n,g){f(n,e,g),I(t,n,g),f(n,i,g),f(n,a,g),f(n,h,g),u=!0},p(n,g){const y={};g&1&&(y.$$scope={dirty:g,ctx:n}),t.$set(y)},i(n){u||(b(t.$$.fragment,n),u=!0)},o(n){_(t.$$.fragment,n),u=!1},d(n){n&&(o(e),o(i),o(a),o(h)),j(t,n)}}}function pm(c){let e,t="$n$",i,r,a="$n+1$",h,u,n="$Z_{n+1}$",g,y,d="$38.55$",v,M;return{c(){e=s("The Lorenz Map computed from the test set used with Model 3.2. It plots the "),i=s(t),r=s(`th
				local Z maximum coordinate against the `),h=s(a),u=s(`th. The horizontal red line
				separates the trajectories that switch lobes shortly after passing through `),g=s(n),y=s(`
				and those that remain on the same lobe for at least one more orbital cycle. The vertical
				red line marks the estimated point at which the map's derivative switches from positive
				to negative. For both lines, the computed value is approximately `),v=s(d),M=s(`, in
				near perfect agreement with the statistic for predicting large sMAPE errors.`)},l(A){e=l(A,"The Lorenz Map computed from the test set used with Model 3.2. It plots the "),i=l(A,t),r=l(A,`th
				local Z maximum coordinate against the `),h=l(A,a),u=l(A,`th. The horizontal red line
				separates the trajectories that switch lobes shortly after passing through `),g=l(A,n),y=l(A,`
				and those that remain on the same lobe for at least one more orbital cycle. The vertical
				red line marks the estimated point at which the map's derivative switches from positive
				to negative. For both lines, the computed value is approximately `),v=l(A,d),M=l(A,`, in
				near perfect agreement with the statistic for predicting large sMAPE errors.`)},m(A,H){f(A,e,H),f(A,i,H),f(A,r,H),f(A,h,H),f(A,u,H),f(A,g,H),f(A,y,H),f(A,v,H),f(A,M,H)},p:U,d(A){A&&(o(e),o(i),o(r),o(h),o(u),o(g),o(y),o(v),o(M))}}}function dm(c){let e;return{c(){e=s(`A close-up of the threshold region between trajectories that switch lobes (orange)
				and those that do not (blue). The groups are not linearly separable by the Z
				coordinate local maximum.`)},l(t){e=l(t,`A close-up of the threshold region between trajectories that switch lobes (orange)
				and those that do not (blue). The groups are not linearly separable by the Z
				coordinate local maximum.`)},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function $m(c){let e,t="$38.55$",i,r,a="$\\approx 38.55$",h,u;return{c(){e=s(`It would seem in one sense that the entire predictive complexity of the Lorenz
			Attractor is converging towards this Z value around `),i=s(t),r=s(`. As long as the local
			maximum Z coordinate of the trajectory does not pass through a narrow interval around
			this value, we can be certain (according to the statistics of all of the test sets in
			this study) that the model will continue to forecast the trajectory with a sMAPE error
			less than 5. If a trajectory does pass through this interval, then the model has a
			roughly 60% chance of exhibiting a sMAPE error greater than 5 in the period immediately
			following the peak, until the next local maximum Z coordinate is reached. How might we
			exploit this observation to improve predictability? If the system were augmented with a
			control input, then the target for that control could be to perturb the trajectories so
			that they avoid passing through this critical region around Z `),h=s(a),u=s(`. The
			results of this study suggest that this alone might make the dynamics of the Lorenz
			Attractor practically predictable.`)},l(n){e=l(n,`It would seem in one sense that the entire predictive complexity of the Lorenz
			Attractor is converging towards this Z value around `),i=l(n,t),r=l(n,`. As long as the local
			maximum Z coordinate of the trajectory does not pass through a narrow interval around
			this value, we can be certain (according to the statistics of all of the test sets in
			this study) that the model will continue to forecast the trajectory with a sMAPE error
			less than 5. If a trajectory does pass through this interval, then the model has a
			roughly 60% chance of exhibiting a sMAPE error greater than 5 in the period immediately
			following the peak, until the next local maximum Z coordinate is reached. How might we
			exploit this observation to improve predictability? If the system were augmented with a
			control input, then the target for that control could be to perturb the trajectories so
			that they avoid passing through this critical region around Z `),h=l(n,a),u=l(n,`. The
			results of this study suggest that this alone might make the dynamics of the Lorenz
			Attractor practically predictable.`)},m(n,g){f(n,e,g),f(n,i,g),f(n,r,g),f(n,h,g),f(n,u,g)},p:U,d(n){n&&(o(e),o(i),o(r),o(h),o(u))}}}function gm(c){let e,t,i="is",r;return{c(){e=s(`Is this subtle inconsistency, in which the local Z maximum determines whether a
			transition will occur for all but a tiny range of values, an inherent property of the
			Lorenz Attractor, or could it somehow be a byproduct of the rounding error in the IVP
			solver? I don't know (please let me know if you do!), but if it's the former, then I
			would argue that this seems to impart a stochastic quality to the Lorenz Attractor that
			is incongruous with what we know to otherwise be a deterministic system. And if it's the
			latter, then we must ask how might the model would perform on a dataset in which the
			local Z maximum `),t=z("i"),t.textContent=i,r=s(` linearly separable between these two groups, assuming we could
			somehow generate one? In this case, we would expect that the model's predictions for the
			toughest test cases, although they still might higher than average error, would at least
			not waiver indecisively between the two lobes, as they do now, but would instead commit to
			the correct lobe 100% of the time.`)},l(a){e=l(a,`Is this subtle inconsistency, in which the local Z maximum determines whether a
			transition will occur for all but a tiny range of values, an inherent property of the
			Lorenz Attractor, or could it somehow be a byproduct of the rounding error in the IVP
			solver? I don't know (please let me know if you do!), but if it's the former, then I
			would argue that this seems to impart a stochastic quality to the Lorenz Attractor that
			is incongruous with what we know to otherwise be a deterministic system. And if it's the
			latter, then we must ask how might the model would perform on a dataset in which the
			local Z maximum `),t=E(a,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1ejn32g"&&(t.textContent=i),r=l(a,` linearly separable between these two groups, assuming we could
			somehow generate one? In this case, we would expect that the model's predictions for the
			toughest test cases, although they still might higher than average error, would at least
			not waiver indecisively between the two lobes, as they do now, but would instead commit to
			the correct lobe 100% of the time.`)},m(a,h){f(a,e,h),f(a,t,h),f(a,r,h)},p:U,d(a){a&&(o(e),o(t),o(r))}}}function wm(c){let e;return{c(){e=s("shadowing lemma")},l(t){e=l(t,"shadowing lemma")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function vm(c){let e,t,i,r,a,h,u="IVP solver",n,g,y,d;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[wm]},$$scope:{ctx:c}}}),r=new Y({props:{id:"chandramoorthy"}}),g=new Y({props:{id:"chandramoorthy"}}),{c(){e=s("In closing, I will touch again on the implications of the "),x(t.$$.fragment),i=s(" and research such as "),x(r.$$.fragment),a=s(` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),h=z("i"),h.textContent=u,n=s(`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),x(g.$$.fragment),y=s(` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},l(v){e=l(v,"In closing, I will touch again on the implications of the "),k(t.$$.fragment,v),i=l(v," and research such as "),k(r.$$.fragment,v),a=l(v,` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),h=E(v,"I",{"data-svelte-h":!0}),V(h)!=="svelte-17gf2g4"&&(h.textContent=u),n=l(v,`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),k(g.$$.fragment,v),y=l(v,` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},m(v,M){f(v,e,M),I(t,v,M),f(v,i,M),I(r,v,M),f(v,a,M),f(v,h,M),f(v,n,M),I(g,v,M),f(v,y,M),d=!0},p(v,M){const A={};M&1&&(A.$$scope={dirty:M,ctx:v}),t.$set(A)},i(v){d||(b(t.$$.fragment,v),b(r.$$.fragment,v),b(g.$$.fragment,v),d=!0)},o(v){_(t.$$.fragment,v),_(r.$$.fragment,v),_(g.$$.fragment,v),d=!1},d(v){v&&(o(e),o(i),o(a),o(h),o(n),o(y)),j(t,v),j(r,v),j(g,v)}}}function ym(c){let e;return{c(){e=s("References")},l(t){e=l(t,"References")},m(t,i){f(t,e,i)},d(t){t&&o(e)}}}function bm(c){let e,t,i,r,a,h,u,n,g,y,d,v,M="Michael Horgan",A,H,F="michaelghorgan at gmail",L,S,Z,O,nt,K,D,q,J,tt,X,ut,at,N,W="$2H$",_i,xi,Qi="$H$",ja,Ma,Es="$H$",Aa,Ta,Ls="$dt \\approx 0.015$",za,Ea,La,xn,Pa,Ps="$\\lt \\approx 5$",Ca,Sa,Ha,ot,Ra,Cs="$38.45$",Na,Ga,Ss="$38.6$",Da,qa,Hs="$38.55$",Fa,Za,It,Va,jt,Ba,Ua,Mt,Wa,At,Tt,zt,Oa,pt,ta,kn,Ka,Et,Ja,ki,Rs=`<sup id="paperspace">2. All of my experiments were run on a Paperspace VM using two RTX 5000s, each
					with 16 GB of RAM.</sup>`,Xa,ea,Lt,Ya,Pt,Qa,to,Ct,eo,St,no,Ii,In,jn,Ht,Ns,io,Rt,ao,Nt,oo,ji,na,Gs=ec+"",ro,so,Gt,lo,Mi,ia,Ds=nc+"",ho,co,Dt,qt,fo,Ft,mo,Zt,uo,Vt,po,Bt,$o,Ut,go,Wt,Ot,Kt,Jt,wo,Ai,aa,qs=ic+"",vo,yo,Xt,bo,Yt,_o,Qt,xo,te,ko,Mn,Fs=`<p><sup id="lyapunov">1. Although initially the distance will grow exponentially, the maximum
					separation between trajectories is also bounded by the fact that all
					trajectories remain on the attractor.</sup></p> <p><sup id="initial-conditions">2. In the course of this project, I experimented with several different methods
					for generating trajectories, but I still have some open questions about the best
					way to generate a dataset that effectively samples the phase space, <i>e.g.</i> how
					to choose the initial conditions, how to choose the number of unique initial conditions
					vs. to the total trajectory length, etc.</sup></p>`,Io,ee,jo,ne,Mo,An,Ao,ie,To,oa,Zs=ac+"",zo,Eo,ae,Lo,oe,Tn,Vs,Po,re,Co,se,So,le,zn,Bs=`<img class="object-contain max-w-80" src="${`${Q}/Model1SmallErr.png`}" alt="Model 1 - small error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1MediumErr.png`}" alt="Model 1 - medium error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1LargeErr.png`}" alt="Model 1 - large error example"/>`,Ho,he,Ro,ce,No,fe,En,Us,Go,me,Do,ue,pe,qo,de,$t,Ws,Fo,$e,Zo,ge,Vo,we,Bo,ve,Uo,Ln,Wo,Pn,Os=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
			increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of
			the network, and I've also significantly increased the amount of compression in the
			initial stacks. Because the network is much deeper, I also added layer normalization
			after each block to try to help reduce convergence time. Lastly, I increased the number
			of training steps and reduced the initial learning rate by an order of magnitude, and I
			modified the learning rate schedule to reduce by half whenever the validation loss does
			not decrease from the previous validation step.`,Oo,Cn,Sn,Ks,ye,Ko,be,_e,Jo,Hn,Rn,Js,xe,Xo,ke,Yo,Ie,Nn,Xs,Qo,je,tr,Me,er,Gn,Dn,Ys,Ae,nr,Te,ir,ze,ar,Ee,or,Le,rr,Pe,Ce,Se,sr,qn,Fn,Qs,He,lr,Zn,hr,tl="$\\le{5}$",cr,fr,mr,Re,ur,Vn,Bn,el,Ne,pr,Ge,dr,De,$r,qe,gr,Fe,wr,Un,vr,gt,Ti,nl="A sidenote on the practicality of training this model:",yr,Ze,br,_r,Ve,xr,il="$dt \\approx 0.003$",kr,Ir,jr,Wn,On,al,Be,Mr,wt,Ar,ol="$dt$",Tr,zr,zi,rl="i.e.",Er,Lr,Ue,Pr,We,Oe,Ke,sl=oc+"",Cr,Sr,Kn,Hr,Je,Rr,Nr,Jn,Xn,ll,Xe,Gr,vt,Dr,hl="$z \\approx 0.4$",qr,Fr,cl="$z \\approx 1.35$",Zr,Vr,Br,Ye,Ur,Yn,Qn,fl,Qe,Wr,Ei,ml=`However, if we search for the model trajectories that pass closest to the origin, we
			find examples where the model output breaks down badly:`,Or,ti,ei,ul,tn,Kr,en,Jr,nn,ni,pl,Xr,an,Yr,on,Qr,rn,ts,sn,ln,hn,cn,es,fn,ii,dl=`<img class="object-contain w-full max-w-xl" src="${`${Q}/max_z.png`}" alt="Model 3 - maxium Z coordinate error distribution"/> <img class="object-contain w-full max-w-xl" src="${`${Q}/max_z_zoomed.png`}" alt="maximum Z coordinate error distribution zoomed"/>`,ns,mn,is,un,as,pn,ai,$l,os,dn,rs,Li,gl=`This makes perfect sense. The trajectories that are the most difficult for the model to
			predict are the ones for which the tiniest perturbation can determine whether it
			transitions to the other lobe or remains on the current lobe. Finally, we have a concise
			way to describe the complexity of this prediction task. For the vast majority of
			trajectories, their transition probability is deterministic, either 100% or 0%, based
			solely on their Z coordinate local maximum. But there is a very narrow region of Z
			coordinates where the transition probability suddenly shifts to closer to 50%.`,ss,$n,oi,wl,ls,gn,hs,wn,cs,vn,fs,rt,Pi,vl="Sidenote:",ms,yl="$dt$",us,ps,bl="$dt$",ds,$s,_l="$[1.8\\mathrm{e}\\text{-}\\mathrm{4}, 1.8\\mathrm{e}\\text{-}\\mathrm{5}]$",gs,ws,xl="$1.8\\mathrm{e}\\text{-}\\mathrm{5}$",vs,ys,bs,yn,_s,Ci,ra,dt,xs,Si,kl="second-to-last",ks,Il="$38.55$",Is,js,Ms,bn,As,ri,xa;return e=new tc({}),i=new cc({}),h=new Yh({}),K=new B({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[fc]},$$scope:{ctx:c}}}),q=new Oi({props:{id:"tldr",$$slots:{default:[mc]},$$scope:{ctx:c}}}),at=new Y({props:{id:"challu"}}),It=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[uc]},$$scope:{ctx:c}}}),jt=new B({props:{href:"https://en.wikipedia.org/wiki/Symmetric_mean_absolute_percentage_error",$$slots:{default:[pc]},$$scope:{ctx:c}}}),Mt=new Wi({props:{id:"intro",$$slots:{default:[dc]},$$scope:{ctx:c}}}),At=new G({props:{$$slots:{default:[$c]},$$scope:{ctx:c}}}),Tt=new G({props:{$$slots:{default:[gc]},$$scope:{ctx:c}}}),zt=new G({props:{$$slots:{default:[wc]},$$scope:{ctx:c}}}),Et=new B({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[vc]},$$scope:{ctx:c}}}),Pt=new B({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[yc]},$$scope:{ctx:c}}}),Ct=new Wi({props:{id:"lorenz",$$slots:{default:[bc]},$$scope:{ctx:c}}}),St=new G({props:{$$slots:{default:[Ic]},$$scope:{ctx:c}}}),Rt=new et({props:{$$slots:{default:[jc]},$$scope:{ctx:c}}}),Nt=new G({props:{$$slots:{default:[Mc]},$$scope:{ctx:c}}}),Gt=new G({props:{$$slots:{default:[zc]},$$scope:{ctx:c}}}),Dt=new G({props:{$$slots:{default:[Lc]},$$scope:{ctx:c}}}),qt=new G({props:{$$slots:{default:[Cc]},$$scope:{ctx:c}}}),Ft=new Wi({props:{id:"nhits",$$slots:{default:[Sc]},$$scope:{ctx:c}}}),Zt=new G({props:{$$slots:{default:[Hc]},$$scope:{ctx:c}}}),Vt=new G({props:{$$slots:{default:[Rc]},$$scope:{ctx:c}}}),Bt=new G({props:{$$slots:{default:[Nc]},$$scope:{ctx:c}}}),Ut=new Wi({props:{id:"experiments",$$slots:{default:[Gc]},$$scope:{ctx:c}}}),Wt=new G({props:{$$slots:{default:[Dc]},$$scope:{ctx:c}}}),Ot=new Oi({props:{id:"datagen",$$slots:{default:[qc]},$$scope:{ctx:c}}}),Kt=new G({props:{$$slots:{default:[Bc]},$$scope:{ctx:c}}}),Jt=new G({props:{$$slots:{default:[Kc]},$$scope:{ctx:c}}}),Xt=new G({props:{indent:"indent-0",$$slots:{default:[Jc]},$$scope:{ctx:c}}}),Yt=new G({props:{$$slots:{default:[Xc]},$$scope:{ctx:c}}}),Qt=new G({props:{indent:"indent-0",$$slots:{default:[Yc]},$$scope:{ctx:c}}}),te=new G({props:{$$slots:{default:[Qc]},$$scope:{ctx:c}}}),ee=new Oi({props:{id:"model-1",$$slots:{default:[tf]},$$scope:{ctx:c}}}),ne=new G({props:{$$slots:{default:[ef]},$$scope:{ctx:c}}}),An=new Ts({props:{hps:rc}}),ie=new G({props:{indent:"indent-0",$$slots:{default:[nf]},$$scope:{ctx:c}}}),ae=new G({props:{$$slots:{default:[af]},$$scope:{ctx:c}}}),re=new et({props:{$$slots:{default:[of]},$$scope:{ctx:c}}}),se=new G({props:{$$slots:{default:[rf]},$$scope:{ctx:c}}}),he=new et({props:{$$slots:{default:[sf]},$$scope:{ctx:c}}}),ce=new G({props:{$$slots:{default:[lf]},$$scope:{ctx:c}}}),me=new et({props:{$$slots:{default:[hf]},$$scope:{ctx:c}}}),ue=new G({props:{$$slots:{default:[ff]},$$scope:{ctx:c}}}),pe=new G({props:{$$slots:{default:[uf]},$$scope:{ctx:c}}}),$e=new et({props:{$$slots:{default:[pf]},$$scope:{ctx:c}}}),ge=new G({props:{$$slots:{default:[df]},$$scope:{ctx:c}}}),we=new Oi({props:{id:"model-2",$$slots:{default:[$f]},$$scope:{ctx:c}}}),ve=new G({props:{$$slots:{default:[gf]},$$scope:{ctx:c}}}),Ln=new Ts({props:{hps:sc}}),ye=new et({props:{$$slots:{default:[wf]},$$scope:{ctx:c}}}),be=new G({props:{$$slots:{default:[vf]},$$scope:{ctx:c}}}),_e=new G({props:{$$slots:{default:[yf]},$$scope:{ctx:c}}}),xe=new et({props:{$$slots:{default:[bf]},$$scope:{ctx:c}}}),ke=new G({props:{$$slots:{default:[_f]},$$scope:{ctx:c}}}),je=new et({props:{$$slots:{default:[xf]},$$scope:{ctx:c}}}),Me=new G({props:{$$slots:{default:[kf]},$$scope:{ctx:c}}}),Ae=new et({props:{$$slots:{default:[If]},$$scope:{ctx:c}}}),Te=new G({props:{$$slots:{default:[jf]},$$scope:{ctx:c}}}),ze=new Oi({props:{id:"model-3",$$slots:{default:[Mf]},$$scope:{ctx:c}}}),Ee=new G({props:{$$slots:{default:[Af]},$$scope:{ctx:c}}}),Le=new wh({props:{$$slots:{default:[Tf]},$$scope:{ctx:c}}}),Pe=new G({props:{$$slots:{default:[Ef]},$$scope:{ctx:c}}}),Ce=new G({props:{$$slots:{default:[Lf]},$$scope:{ctx:c}}}),Se=new G({props:{$$slots:{default:[Pf]},$$scope:{ctx:c}}}),He=new et({props:{$$slots:{default:[Cf]},$$scope:{ctx:c}}}),Re=new G({props:{$$slots:{default:[Sf]},$$scope:{ctx:c}}}),Ne=new et({props:{$$slots:{default:[Hf]},$$scope:{ctx:c}}}),Ge=new G({props:{$$slots:{default:[Rf]},$$scope:{ctx:c}}}),De=new wh({props:{$$slots:{default:[Nf]},$$scope:{ctx:c}}}),qe=new G({props:{$$slots:{default:[Gf]},$$scope:{ctx:c}}}),Fe=new G({props:{$$slots:{default:[Df]},$$scope:{ctx:c}}}),Un=new Ts({props:{hps:lc}}),Ze=new B({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[qf]},$$scope:{ctx:c}}}),Be=new et({props:{$$slots:{default:[Ff]},$$scope:{ctx:c}}}),Ue=new Oi({props:{id:"arpred",$$slots:{default:[Zf]},$$scope:{ctx:c}}}),We=new G({props:{$$slots:{default:[Vf]},$$scope:{ctx:c}}}),Oe=new G({props:{$$slots:{default:[Uf]},$$scope:{ctx:c}}}),Ke=new G({props:{$$slots:{default:[Wf]},$$scope:{ctx:c}}}),Je=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Of]},$$scope:{ctx:c}}}),Xe=new et({props:{$$slots:{default:[Kf]},$$scope:{ctx:c}}}),Ye=new G({props:{$$slots:{default:[Jf]},$$scope:{ctx:c}}}),Qe=new et({props:{$$slots:{default:[Xf]},$$scope:{ctx:c}}}),tn=new et({props:{$$slots:{default:[Yf]},$$scope:{ctx:c}}}),en=new G({props:{$$slots:{default:[nm]},$$scope:{ctx:c}}}),an=new et({props:{$$slots:{default:[am]},$$scope:{ctx:c}}}),on=new G({props:{$$slots:{default:[om]},$$scope:{ctx:c}}}),rn=new Wi({props:{id:"discussion",$$slots:{default:[rm]},$$scope:{ctx:c}}}),sn=new G({props:{$$slots:{default:[sm]},$$scope:{ctx:c}}}),ln=new G({props:{$$slots:{default:[lm]},$$scope:{ctx:c}}}),hn=new G({props:{$$slots:{default:[hm]},$$scope:{ctx:c}}}),cn=new G({props:{$$slots:{default:[cm]},$$scope:{ctx:c}}}),mn=new et({props:{$$slots:{default:[fm]},$$scope:{ctx:c}}}),un=new G({props:{$$slots:{default:[um]},$$scope:{ctx:c}}}),dn=new et({props:{$$slots:{default:[pm]},$$scope:{ctx:c}}}),gn=new et({props:{$$slots:{default:[dm]},$$scope:{ctx:c}}}),wn=new G({props:{$$slots:{default:[$m]},$$scope:{ctx:c}}}),vn=new G({props:{$$slots:{default:[gm]},$$scope:{ctx:c}}}),yn=new G({props:{$$slots:{default:[vm]},$$scope:{ctx:c}}}),bn=new Wi({props:{id:"references",$$slots:{default:[ym]},$$scope:{ctx:c}}}),ri=new Ph({}),{c(){x(e.$$.fragment),t=P(),x(i.$$.fragment),r=P(),a=z("div"),x(h.$$.fragment),u=P(),n=z("div"),g=z("div"),y=s(_a),d=P(),v=z("div"),v.textContent=M,A=P(),H=z("div"),H.textContent=F,L=P(),S=z("br"),Z=P(),O=z("div"),nt=s("All code used in this project is available in the github repo: "),x(K.$$.fragment),D=P(),x(q.$$.fragment),J=P(),tt=z("ul"),X=z("li"),ut=s("This project explores the use of the NHiTS "),x(at.$$.fragment),N=s(` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),_i=s(W),xi=s(` points of input, the model is trained
				to predict the next `),ja=s(Qi),Ma=s(" points of the trajectory, where "),Aa=s(Es),Ta=s(` is usually 100 and
				`),za=s(Ls),Ea=s("."),La=P(),xn=z("li"),Pa=s(`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),Ca=s(Ps),Sa=s(`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),Ha=P(),ot=z("li"),Ra=s(`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),Na=s(Cs),Ga=s(" to "),Da=s(Ss),qa=s(`. As temporal
				resolution of the model is increased, this value converges to approximately `),Fa=s(Hs),Za=s(`,
				which is in near perfect agreement with certain limits implied by the
				`),x(It.$$.fragment),Va=s(". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),x(jt.$$.fragment),Ba=s(` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),Ua=P(),x(Mt.$$.fragment),Wa=P(),x(At.$$.fragment),x(Tt.$$.fragment),x(zt.$$.fragment),Oa=P(),pt=z("div"),ta=z("p"),kn=z("sup"),Ka=s(`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),x(Et.$$.fragment),Ja=P(),ki=z("p"),ki.innerHTML=Rs,Xa=P(),ea=z("p"),Lt=z("sup"),Ya=s(`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),x(Pt.$$.fragment),Qa=s(" on the subject"),to=P(),x(Ct.$$.fragment),eo=P(),x(St.$$.fragment),no=P(),Ii=z("div"),In=z("a"),jn=z("figure"),Ht=z("img"),io=P(),x(Rt.$$.fragment),ao=P(),x(Nt.$$.fragment),oo=P(),ji=z("div"),na=z("p"),ro=s(Gs),so=P(),x(Gt.$$.fragment),lo=P(),Mi=z("div"),ia=z("p"),ho=s(Ds),co=P(),x(Dt.$$.fragment),x(qt.$$.fragment),fo=P(),x(Ft.$$.fragment),mo=P(),x(Zt.$$.fragment),uo=P(),x(Vt.$$.fragment),po=P(),x(Bt.$$.fragment),$o=P(),x(Ut.$$.fragment),go=P(),x(Wt.$$.fragment),x(Ot.$$.fragment),x(Kt.$$.fragment),x(Jt.$$.fragment),wo=P(),Ai=z("div"),aa=z("p"),vo=s(qs),yo=P(),x(Xt.$$.fragment),bo=P(),x(Yt.$$.fragment),_o=P(),x(Qt.$$.fragment),xo=P(),x(te.$$.fragment),ko=P(),Mn=z("div"),Mn.innerHTML=Fs,Io=P(),x(ee.$$.fragment),jo=P(),x(ne.$$.fragment),Mo=P(),x(An.$$.fragment),Ao=P(),x(ie.$$.fragment),To=P(),oa=z("div"),zo=s(Zs),Eo=P(),x(ae.$$.fragment),Lo=P(),oe=z("figure"),Tn=z("img"),Po=P(),x(re.$$.fragment),Co=P(),x(se.$$.fragment),So=P(),le=z("figure"),zn=z("div"),zn.innerHTML=Bs,Ho=P(),x(he.$$.fragment),Ro=P(),x(ce.$$.fragment),No=P(),fe=z("figure"),En=z("img"),Go=P(),x(me.$$.fragment),Do=P(),x(ue.$$.fragment),x(pe.$$.fragment),qo=P(),de=z("figure"),$t=z("img"),Fo=P(),x($e.$$.fragment),Zo=P(),x(ge.$$.fragment),Vo=P(),x(we.$$.fragment),Bo=P(),x(ve.$$.fragment),Uo=P(),x(Ln.$$.fragment),Wo=P(),Pn=z("p"),Pn.textContent=Os,Oo=P(),Cn=z("figure"),Sn=z("img"),x(ye.$$.fragment),Ko=P(),x(be.$$.fragment),x(_e.$$.fragment),Jo=P(),Hn=z("figure"),Rn=z("img"),x(xe.$$.fragment),Xo=P(),x(ke.$$.fragment),Yo=P(),Ie=z("figure"),Nn=z("img"),Qo=P(),x(je.$$.fragment),tr=P(),x(Me.$$.fragment),er=P(),Gn=z("figure"),Dn=z("img"),x(Ae.$$.fragment),nr=P(),x(Te.$$.fragment),ir=P(),x(ze.$$.fragment),ar=P(),x(Ee.$$.fragment),or=P(),x(Le.$$.fragment),rr=P(),x(Pe.$$.fragment),x(Ce.$$.fragment),x(Se.$$.fragment),sr=P(),qn=z("figure"),Fn=z("img"),x(He.$$.fragment),lr=P(),Zn=z("p"),hr=s("Still, with these 10x increases, the trajectories that pass within an L2 distance "),cr=s(tl),fr=s(`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),mr=P(),x(Re.$$.fragment),ur=P(),Vn=z("figure"),Bn=z("img"),x(Ne.$$.fragment),pr=P(),x(Ge.$$.fragment),dr=P(),x(De.$$.fragment),$r=P(),x(qe.$$.fragment),gr=P(),x(Fe.$$.fragment),wr=P(),x(Un.$$.fragment),vr=P(),gt=z("p"),Ti=z("b"),Ti.textContent=nl,yr=s(`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),x(Ze.$$.fragment),br=s(` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`),_r=P(),Ve=z("p"),xr=s("After retraining with "),kr=s(il),Ir=s(`, we again see a very slight improvement
			over the previous models:`),jr=P(),Wn=z("figure"),On=z("img"),x(Be.$$.fragment),Mr=P(),wt=z("p"),Ar=s("However, there doesn't appear to be any strong evidence that continuing to reduce "),Tr=s(ol),zr=s(`
			might lead to a fully stable model (`),zi=z("i"),zi.textContent=rl,Er=s(` one without an asymptotic error curve). And
			reducing it further will drastically increase the computational requirements of training,
			which are beyond my budget, so I must conclude this avenue of investigation here.`),Lr=P(),x(Ue.$$.fragment),Pr=P(),x(We.$$.fragment),x(Oe.$$.fragment),x(Ke.$$.fragment),Cr=s(sl),Sr=P(),Kn=z("p"),Hr=s("Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),x(Je.$$.fragment),Rr=s(" solver's outputs:"),Nr=P(),Jn=z("figure"),Xn=z("img"),x(Xe.$$.fragment),Gr=P(),vt=z("p"),Dr=s(`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),qr=s(hl),Fr=s(" for the solver compared to "),Zr=s(cl),Vr=s(`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),Br=P(),x(Ye.$$.fragment),Ur=P(),Yn=z("figure"),Qn=z("img"),x(Qe.$$.fragment),Wr=P(),Ei=z("p"),Ei.textContent=ml,Or=P(),ti=z("figure"),ei=z("img"),x(tn.$$.fragment),Kr=P(),x(en.$$.fragment),Jr=P(),nn=z("figure"),ni=z("img"),Xr=P(),x(an.$$.fragment),Yr=P(),x(on.$$.fragment),Qr=P(),x(rn.$$.fragment),ts=P(),x(sn.$$.fragment),x(ln.$$.fragment),x(hn.$$.fragment),x(cn.$$.fragment),es=P(),fn=z("figure"),ii=z("div"),ii.innerHTML=dl,ns=P(),x(mn.$$.fragment),is=P(),x(un.$$.fragment),as=P(),pn=z("figure"),ai=z("img"),os=P(),x(dn.$$.fragment),rs=P(),Li=z("p"),Li.textContent=gl,ss=P(),$n=z("figure"),oi=z("img"),ls=P(),x(gn.$$.fragment),hs=P(),x(wn.$$.fragment),cs=P(),x(vn.$$.fragment),fs=P(),rt=z("p"),Pi=z("b"),Pi.textContent=vl,ms=s(` Upon discovering this apparent stochastic quality in the trajectories,
			I ran some follow-up experiments to see if I could generate such a dataset by using a
			smaller `),us=s(yl),ps=s(`
			parameter in the IVP solver. I tried values of `),ds=s(bl),$s=s(" in the range "),gs=s(_l),ws=s(`.
			In all cases, the IVP solver eventually produced a trajectory that violated the linear
			separability requirement for the local Z maximum, and at `),vs=s(xl),ys=s(`,
			the numerical stability of the solver appeared to break down.`),bs=P(),x(yn.$$.fragment),_s=P(),Ci=z("div"),ra=z("p"),dt=z("sup"),xs=s(`1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose `),Si=z("i"),Si.textContent=kl,ks=s(`
					local maximum Z coordinate passes through the `),Is=s(Il),js=s(` boundary region, and whose
					associated local minimum point is so small—0.49, the smallest encountered in
					all of the training sets that were generated for this study—that the highly
					unstable conditions in the region adversely affect not only the prediction accuracy
					when the local minimum is within the horizon window, but also when it is within the
					input window of the model.`),Ms=P(),x(bn.$$.fragment),As=P(),x(ri.$$.fragment),this.h()},l(m){k(e.$$.fragment,m),t=C(m),k(i.$$.fragment,m),r=C(m),a=E(m,"DIV",{class:!0});var w=R(a);k(h.$$.fragment,w),u=C(w),n=E(w,"DIV",{class:!0});var $=R(n);g=E($,"DIV",{id:!0,class:!0});var sa=R(g);y=l(sa,_a),sa.forEach(o),d=C($),v=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(v)!=="svelte-1tlj87z"&&(v.textContent=M),A=C($),H=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(H)!=="svelte-xnmp4g"&&(H.textContent=F),L=C($),S=E($,"BR",{}),Z=C($),O=E($,"DIV",{class:!0});var Hi=R(O);nt=l(Hi,"All code used in this project is available in the github repo: "),k(K.$$.fragment,Hi),Hi.forEach(o),D=C($),k(q.$$.fragment,$),J=C($),tt=E($,"UL",{class:!0});var yt=R(tt);X=E(yt,"LI",{});var st=R(X);ut=l(st,"This project explores the use of the NHiTS "),k(at.$$.fragment,st),N=l(st,` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),_i=l(st,W),xi=l(st,` points of input, the model is trained
				to predict the next `),ja=l(st,Qi),Ma=l(st," points of the trajectory, where "),Aa=l(st,Es),Ta=l(st,` is usually 100 and
				`),za=l(st,Ls),Ea=l(st,"."),st.forEach(o),La=C(yt),xn=E(yt,"LI",{});var si=R(xn);Pa=l(si,`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),Ca=l(si,Ps),Sa=l(si,`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),si.forEach(o),Ha=C(yt),ot=E(yt,"LI",{});var lt=R(ot);Ra=l(lt,`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),Na=l(lt,Cs),Ga=l(lt," to "),Da=l(lt,Ss),qa=l(lt,`. As temporal
				resolution of the model is increased, this value converges to approximately `),Fa=l(lt,Hs),Za=l(lt,`,
				which is in near perfect agreement with certain limits implied by the
				`),k(It.$$.fragment,lt),Va=l(lt,". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),k(jt.$$.fragment,lt),Ba=l(lt,` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),lt.forEach(o),yt.forEach(o),Ua=C($),k(Mt.$$.fragment,$),Wa=C($),k(At.$$.fragment,$),k(Tt.$$.fragment,$),k(zt.$$.fragment,$),Oa=C($),pt=E($,"DIV",{class:!0});var bt=R(pt);ta=E(bt,"P",{});var la=R(ta);kn=E(la,"SUP",{id:!0});var Ri=R(kn);Ka=l(Ri,`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),k(Et.$$.fragment,Ri),Ri.forEach(o),la.forEach(o),Ja=C(bt),ki=E(bt,"P",{"data-svelte-h":!0}),V(ki)!=="svelte-7qdhvn"&&(ki.innerHTML=Rs),Xa=C(bt),ea=E(bt,"P",{});var ha=R(ea);Lt=E(ha,"SUP",{id:!0});var li=R(Lt);Ya=l(li,`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),k(Pt.$$.fragment,li),Qa=l(li," on the subject"),li.forEach(o),ha.forEach(o),bt.forEach(o),to=C($),k(Ct.$$.fragment,$),eo=C($),k(St.$$.fragment,$),no=C($),Ii=E($,"DIV",{class:!0});var ca=R(Ii);In=E(ca,"A",{title:!0,href:!0});var fa=R(In);jn=E(fa,"FIGURE",{});var hi=R(jn);Ht=E(hi,"IMG",{class:!0,width:!0,alt:!0,src:!0}),io=C(hi),k(Rt.$$.fragment,hi),hi.forEach(o),fa.forEach(o),ca.forEach(o),ao=C($),k(Nt.$$.fragment,$),oo=C($),ji=E($,"DIV",{class:!0});var ma=R(ji);na=E(ma,"P",{});var ua=R(na);ro=l(ua,Gs),ua.forEach(o),ma.forEach(o),so=C($),k(Gt.$$.fragment,$),lo=C($),Mi=E($,"DIV",{class:!0});var pa=R(Mi);ia=E(pa,"P",{});var da=R(ia);ho=l(da,Ds),da.forEach(o),pa.forEach(o),co=C($),k(Dt.$$.fragment,$),k(qt.$$.fragment,$),fo=C($),k(Ft.$$.fragment,$),mo=C($),k(Zt.$$.fragment,$),uo=C($),k(Vt.$$.fragment,$),po=C($),k(Bt.$$.fragment,$),$o=C($),k(Ut.$$.fragment,$),go=C($),k(Wt.$$.fragment,$),k(Ot.$$.fragment,$),k(Kt.$$.fragment,$),k(Jt.$$.fragment,$),wo=C($),Ai=E($,"DIV",{class:!0});var $a=R(Ai);aa=E($a,"P",{});var ga=R(aa);vo=l(ga,qs),ga.forEach(o),$a.forEach(o),yo=C($),k(Xt.$$.fragment,$),bo=C($),k(Yt.$$.fragment,$),_o=C($),k(Qt.$$.fragment,$),xo=C($),k(te.$$.fragment,$),ko=C($),Mn=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(Mn)!=="svelte-a9h7x4"&&(Mn.innerHTML=Fs),Io=C($),k(ee.$$.fragment,$),jo=C($),k(ne.$$.fragment,$),Mo=C($),k(An.$$.fragment,$),Ao=C($),k(ie.$$.fragment,$),To=C($),oa=E($,"DIV",{});var wa=R(oa);zo=l(wa,Zs),wa.forEach(o),Eo=C($),k(ae.$$.fragment,$),Lo=C($),oe=E($,"FIGURE",{class:!0});var ci=R(oe);Tn=E(ci,"IMG",{class:!0,src:!0,alt:!0}),Po=C(ci),k(re.$$.fragment,ci),ci.forEach(o),Co=C($),k(se.$$.fragment,$),So=C($),le=E($,"FIGURE",{class:!0});var fi=R(le);zn=E(fi,"DIV",{class:!0,"data-svelte-h":!0}),V(zn)!=="svelte-u7ima0"&&(zn.innerHTML=Bs),Ho=C(fi),k(he.$$.fragment,fi),fi.forEach(o),Ro=C($),k(ce.$$.fragment,$),No=C($),fe=E($,"FIGURE",{class:!0});var mi=R(fe);En=E(mi,"IMG",{class:!0,src:!0,alt:!0}),Go=C(mi),k(me.$$.fragment,mi),mi.forEach(o),Do=C($),k(ue.$$.fragment,$),k(pe.$$.fragment,$),qo=C($),de=E($,"FIGURE",{class:!0});var ui=R(de);$t=E(ui,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Fo=C(ui),k($e.$$.fragment,ui),ui.forEach(o),Zo=C($),k(ge.$$.fragment,$),Vo=C($),k(we.$$.fragment,$),Bo=C($),k(ve.$$.fragment,$),Uo=C($),k(Ln.$$.fragment,$),Wo=C($),Pn=E($,"P",{class:!0,"data-svelte-h":!0}),V(Pn)!=="svelte-8lzr6y"&&(Pn.textContent=Os),Oo=C($),Cn=E($,"FIGURE",{class:!0});var Ni=R(Cn);Sn=E(Ni,"IMG",{class:!0,src:!0,alt:!0}),k(ye.$$.fragment,Ni),Ni.forEach(o),Ko=C($),k(be.$$.fragment,$),k(_e.$$.fragment,$),Jo=C($),Hn=E($,"FIGURE",{class:!0});var Gi=R(Hn);Rn=E(Gi,"IMG",{class:!0,src:!0,alt:!0}),k(xe.$$.fragment,Gi),Gi.forEach(o),Xo=C($),k(ke.$$.fragment,$),Yo=C($),Ie=E($,"FIGURE",{class:!0});var pi=R(Ie);Nn=E(pi,"IMG",{class:!0,src:!0,alt:!0}),Qo=C(pi),k(je.$$.fragment,pi),pi.forEach(o),tr=C($),k(Me.$$.fragment,$),er=C($),Gn=E($,"FIGURE",{class:!0});var Di=R(Gn);Dn=E(Di,"IMG",{class:!0,src:!0,alt:!0}),k(Ae.$$.fragment,Di),Di.forEach(o),nr=C($),k(Te.$$.fragment,$),ir=C($),k(ze.$$.fragment,$),ar=C($),k(Ee.$$.fragment,$),or=C($),k(Le.$$.fragment,$),rr=C($),k(Pe.$$.fragment,$),k(Ce.$$.fragment,$),k(Se.$$.fragment,$),sr=C($),qn=E($,"FIGURE",{class:!0});var qi=R(qn);Fn=E(qi,"IMG",{class:!0,src:!0,alt:!0}),k(He.$$.fragment,qi),qi.forEach(o),lr=C($),Zn=E($,"P",{});var di=R(Zn);hr=l(di,"Still, with these 10x increases, the trajectories that pass within an L2 distance "),cr=l(di,tl),fr=l(di,`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),di.forEach(o),mr=C($),k(Re.$$.fragment,$),ur=C($),Vn=E($,"FIGURE",{class:!0});var Fi=R(Vn);Bn=E(Fi,"IMG",{class:!0,src:!0,alt:!0}),k(Ne.$$.fragment,Fi),Fi.forEach(o),pr=C($),k(Ge.$$.fragment,$),dr=C($),k(De.$$.fragment,$),$r=C($),k(qe.$$.fragment,$),gr=C($),k(Fe.$$.fragment,$),wr=C($),k(Un.$$.fragment,$),vr=C($),gt=E($,"P",{class:!0});var _n=R(gt);Ti=E(_n,"B",{"data-svelte-h":!0}),V(Ti)!=="svelte-1vhs7sz"&&(Ti.textContent=nl),yr=l(_n,`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),k(Ze.$$.fragment,_n),br=l(_n,` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`),_n.forEach(o),_r=C($),Ve=E($,"P",{class:!0});var $i=R(Ve);xr=l($i,"After retraining with "),kr=l($i,il),Ir=l($i,`, we again see a very slight improvement
			over the previous models:`),$i.forEach(o),jr=C($),Wn=E($,"FIGURE",{class:!0});var Zi=R(Wn);On=E(Zi,"IMG",{class:!0,src:!0,alt:!0}),k(Be.$$.fragment,Zi),Zi.forEach(o),Mr=C($),wt=E($,"P",{});var _t=R(wt);Ar=l(_t,"However, there doesn't appear to be any strong evidence that continuing to reduce "),Tr=l(_t,ol),zr=l(_t,`
			might lead to a fully stable model (`),zi=E(_t,"I",{"data-svelte-h":!0}),V(zi)!=="svelte-1xx6z5c"&&(zi.textContent=rl),Er=l(_t,` one without an asymptotic error curve). And
			reducing it further will drastically increase the computational requirements of training,
			which are beyond my budget, so I must conclude this avenue of investigation here.`),_t.forEach(o),Lr=C($),k(Ue.$$.fragment,$),Pr=C($),k(We.$$.fragment,$),k(Oe.$$.fragment,$),k(Ke.$$.fragment,$),Cr=l($,sl),Sr=C($),Kn=E($,"P",{});var gi=R(Kn);Hr=l(gi,"Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),k(Je.$$.fragment,gi),Rr=l(gi," solver's outputs:"),gi.forEach(o),Nr=C($),Jn=E($,"FIGURE",{class:!0});var Vi=R(Jn);Xn=E(Vi,"IMG",{class:!0,src:!0,alt:!0}),k(Xe.$$.fragment,Vi),Vi.forEach(o),Gr=C($),vt=E($,"P",{});var xt=R(vt);Dr=l(xt,`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),qr=l(xt,hl),Fr=l(xt," for the solver compared to "),Zr=l(xt,cl),Vr=l(xt,`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),xt.forEach(o),Br=C($),k(Ye.$$.fragment,$),Ur=C($),Yn=E($,"FIGURE",{class:!0});var Bi=R(Yn);Qn=E(Bi,"IMG",{class:!0,src:!0,alt:!0}),k(Qe.$$.fragment,Bi),Bi.forEach(o),Wr=C($),Ei=E($,"P",{"data-svelte-h":!0}),V(Ei)!=="svelte-8ial96"&&(Ei.textContent=ml),Or=C($),ti=E($,"FIGURE",{class:!0});var Ui=R(ti);ei=E(Ui,"IMG",{class:!0,src:!0,alt:!0}),k(tn.$$.fragment,Ui),Ui.forEach(o),Kr=C($),k(en.$$.fragment,$),Jr=C($),nn=E($,"FIGURE",{class:!0});var wi=R(nn);ni=E(wi,"IMG",{class:!0,src:!0,alt:!0}),Xr=C(wi),k(an.$$.fragment,wi),wi.forEach(o),Yr=C($),k(on.$$.fragment,$),Qr=C($),k(rn.$$.fragment,$),ts=C($),k(sn.$$.fragment,$),k(ln.$$.fragment,$),k(hn.$$.fragment,$),k(cn.$$.fragment,$),es=C($),fn=E($,"FIGURE",{class:!0});var vi=R(fn);ii=E(vi,"DIV",{class:!0,"data-svelte-h":!0}),V(ii)!=="svelte-lbdos2"&&(ii.innerHTML=dl),ns=C(vi),k(mn.$$.fragment,vi),vi.forEach(o),is=C($),k(un.$$.fragment,$),as=C($),pn=E($,"FIGURE",{class:!0});var yi=R(pn);ai=E(yi,"IMG",{class:!0,src:!0,alt:!0}),os=C(yi),k(dn.$$.fragment,yi),yi.forEach(o),rs=C($),Li=E($,"P",{"data-svelte-h":!0}),V(Li)!=="svelte-byv5j9"&&(Li.textContent=gl),ss=C($),$n=E($,"FIGURE",{class:!0});var bi=R($n);oi=E(bi,"IMG",{class:!0,src:!0,alt:!0}),ls=C(bi),k(gn.$$.fragment,bi),bi.forEach(o),hs=C($),k(wn.$$.fragment,$),cs=C($),k(vn.$$.fragment,$),fs=C($),rt=E($,"P",{class:!0});var ht=R(rt);Pi=E(ht,"B",{"data-svelte-h":!0}),V(Pi)!=="svelte-94l0jb"&&(Pi.textContent=vl),ms=l(ht,` Upon discovering this apparent stochastic quality in the trajectories,
			I ran some follow-up experiments to see if I could generate such a dataset by using a
			smaller `),us=l(ht,yl),ps=l(ht,`
			parameter in the IVP solver. I tried values of `),ds=l(ht,bl),$s=l(ht," in the range "),gs=l(ht,_l),ws=l(ht,`.
			In all cases, the IVP solver eventually produced a trajectory that violated the linear
			separability requirement for the local Z maximum, and at `),vs=l(ht,xl),ys=l(ht,`,
			the numerical stability of the solver appeared to break down.`),ht.forEach(o),bs=C($),k(yn.$$.fragment,$),_s=C($),Ci=E($,"DIV",{class:!0});var va=R(Ci);ra=E(va,"P",{});var ya=R(ra);dt=E(ya,"SUP",{id:!0});var kt=R(dt);xs=l(kt,`1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose `),Si=E(kt,"I",{"data-svelte-h":!0}),V(Si)!=="svelte-bnpm1r"&&(Si.textContent=kl),ks=l(kt,`
					local maximum Z coordinate passes through the `),Is=l(kt,Il),js=l(kt,` boundary region, and whose
					associated local minimum point is so small—0.49, the smallest encountered in
					all of the training sets that were generated for this study—that the highly
					unstable conditions in the region adversely affect not only the prediction accuracy
					when the local minimum is within the horizon window, but also when it is within the
					input window of the model.`),kt.forEach(o),ya.forEach(o),va.forEach(o),Ms=C($),k(bn.$$.fragment,$),As=C($),k(ri.$$.fragment,$),$.forEach(o),w.forEach(o),this.h()},h(){T(g,"id","intro"),T(g,"class","mt-8 text-2xl text-center"),T(v,"class","mt-2 text-md text-center"),T(H,"class","mt-2 text-xs text-center font-serif"),T(O,"class","text-sm text-center font-serif mb-4"),T(tt,"class","list-disc ms-16 text-sm"),T(kn,"id","sabine"),T(Lt,"id","brunton"),T(pt,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(Ht,"class","m-auto"),T(Ht,"width","128"),T(Ht,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),it(Ht.src,Ns="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||T(Ht,"src",Ns),T(In,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),T(In,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),T(Ii,"class","my-2 self-center"),T(ji,"class","self-center"),T(Mi,"class","self-center"),T(Ai,"class","self-center"),T(Mn,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(Tn,"class","object-contain"),it(Tn.src,Vs=`${Q}/Model1ErrDist.png`)||T(Tn,"src",Vs),T(Tn,"alt","Model 1 - error distribution"),T(oe,"class","mb-6 self-center max-w-xl"),T(zn,"class","flex flex-wrap justify-center"),T(le,"class","mt-6 mb-6 self-center"),T(En,"class","object-contain"),it(En.src,Us=`${Q}/model-1-pod.gif`)||T(En,"src",Us),T(En,"alt","prediction point of divergence"),T(fe,"class","mt-6 mb-6 self-center max-w-lg"),T($t,"class","object-contain"),it($t.src,Ws=`${Q}/trajectories.gif`)||T($t,"src",Ws),T($t,"alt","trajectories approaching origin"),T($t,"width","500"),T($t,"height","500"),T(de,"class","mt-6 mb-6 self-center max-w-md"),T(Pn,"class","mt-2"),T(Sn,"class","object-contain"),it(Sn.src,Ks=`${Q}/Model2ErrDist.png`)||T(Sn,"src",Ks),T(Sn,"alt",""),T(Cn,"class","mb-2 self-center max-w-xl"),T(Rn,"class","object-contain"),it(Rn.src,Js=`${Q}/Model2Err3d.png`)||T(Rn,"src",Js),T(Rn,"alt","Model 2 - error distribution by series and window"),T(Hn,"class","-mt-2 mb-2 self-center"),T(Nn,"class","object-contain"),it(Nn.src,Xs=`${Q}/model-2-pod.gif`)||T(Nn,"src",Xs),T(Nn,"alt","model 2 point of divergence"),T(Ie,"class","self-center max-w-lg"),T(Dn,"class","object-contain"),it(Dn.src,Ys=`${Q}/Model2DFO.png`)||T(Dn,"src",Ys),T(Dn,"alt","distance from origin vs. sMAPE"),T(Gn,"class","-mt-2 mb-2 self-center max-w-3xl"),T(Fn,"class","object-contain"),it(Fn.src,Qs=`${Q}/datahist_model_2_v_3.1.png`)||T(Fn,"src",Qs),T(Fn,"alt","Dataset distribution for Model 2 vs. 3"),T(qn,"class","my-8 self-center max-w-lg"),T(Bn,"class","object-contain"),it(Bn.src,el=`${Q}/Model2v3.1-DFO.png`)||T(Bn,"src",el),T(Bn,"alt","Model 2 vs. 3.1 - distance from origin vs. sMAPE"),T(Vn,"class","mt-2 mb-2 self-center max-w-3xl"),T(gt,"class","my-4 text-sm font-serif bg-gray-100 rounded border ring-1 ring-black p-2"),T(Ve,"class","mt-4"),T(On,"class","object-contain"),it(On.src,al=`${Q}/Model3.2-DFO.png`)||T(On,"src",al),T(On,"alt","Model 3.2 - distance-from-origin error distribution"),T(Wn,"class","mb-8 self-center max-w-3xl"),T(Xn,"class","object-contain"),it(Xn.src,ll=`${Q}/ar_z_stat.png`)||T(Xn,"src",ll),T(Xn,"alt","Z Statistic for Reference vs. Autoregressive Trajectories"),T(Jn,"class","mb-2 self-center max-w-3xl"),T(Qn,"class","object-contain"),it(Qn.src,fl=`${Q}/ref_v_ar.png`)||T(Qn,"src",fl),T(Qn,"alt","Reference vs. Autoregressive Trajectories"),T(Yn,"class","mb-2 self-center max-w-4xl"),T(ei,"class","object-contain"),it(ei.src,ul=`${Q}/ar_breakdown_1.png`)||T(ei,"src",ul),T(ei,"alt","Autoregressive Trajectory - Bad Example"),T(ti,"class","mb-2 self-center max-w-lg"),T(ni,"class","object-contain"),it(ni.src,pl=`${Q}/solvers_vs_model.png`)||T(ni,"src",pl),T(ni,"alt","Comparison of RK45 and predictions to Radau's solutions"),T(nn,"class","mb-2 self-center max-w-2xl"),T(ii,"class","flex flex-wrap justify-center"),T(fn,"class","mb-6 self-center"),T(ai,"class","object-contain"),it(ai.src,$l=`${Q}/Lorenz_map.png`)||T(ai,"src",$l),T(ai,"alt","Lorenz Map"),T(pn,"class","mb-4 self-center max-w-2xl"),T(oi,"class","object-contain"),it(oi.src,wl=`${Q}/Lorenz_map_transition.png`)||T(oi,"src",wl),T(oi,"alt","Lorenz Map transitions"),T($n,"class","my-2 self-center max-w-2xl"),T(rt,"class","my-4 text-sm font-serif bg-gray-100 rounded border ring-1 ring-black p-2"),T(dt,"id","outliers"),T(Ci,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(n,"class","flex flex-col mx-4 sm:mx-16"),T(a,"class","grid grid-flow-col auto-cols-auto")},m(m,w){I(e,m,w),f(m,t,w),I(i,m,w),f(m,r,w),f(m,a,w),I(h,a,null),p(a,u),p(a,n),p(n,g),p(g,y),p(n,d),p(n,v),p(n,A),p(n,H),p(n,L),p(n,S),p(n,Z),p(n,O),p(O,nt),I(K,O,null),p(n,D),I(q,n,null),p(n,J),p(n,tt),p(tt,X),p(X,ut),I(at,X,null),p(X,N),p(X,_i),p(X,xi),p(X,ja),p(X,Ma),p(X,Aa),p(X,Ta),p(X,za),p(X,Ea),p(tt,La),p(tt,xn),p(xn,Pa),p(xn,Ca),p(xn,Sa),p(tt,Ha),p(tt,ot),p(ot,Ra),p(ot,Na),p(ot,Ga),p(ot,Da),p(ot,qa),p(ot,Fa),p(ot,Za),I(It,ot,null),p(ot,Va),I(jt,ot,null),p(ot,Ba),p(n,Ua),I(Mt,n,null),p(n,Wa),I(At,n,null),I(Tt,n,null),I(zt,n,null),p(n,Oa),p(n,pt),p(pt,ta),p(ta,kn),p(kn,Ka),I(Et,kn,null),p(pt,Ja),p(pt,ki),p(pt,Xa),p(pt,ea),p(ea,Lt),p(Lt,Ya),I(Pt,Lt,null),p(Lt,Qa),p(n,to),I(Ct,n,null),p(n,eo),I(St,n,null),p(n,no),p(n,Ii),p(Ii,In),p(In,jn),p(jn,Ht),p(jn,io),I(Rt,jn,null),p(n,ao),I(Nt,n,null),p(n,oo),p(n,ji),p(ji,na),p(na,ro),p(n,so),I(Gt,n,null),p(n,lo),p(n,Mi),p(Mi,ia),p(ia,ho),p(n,co),I(Dt,n,null),I(qt,n,null),p(n,fo),I(Ft,n,null),p(n,mo),I(Zt,n,null),p(n,uo),I(Vt,n,null),p(n,po),I(Bt,n,null),p(n,$o),I(Ut,n,null),p(n,go),I(Wt,n,null),I(Ot,n,null),I(Kt,n,null),I(Jt,n,null),p(n,wo),p(n,Ai),p(Ai,aa),p(aa,vo),p(n,yo),I(Xt,n,null),p(n,bo),I(Yt,n,null),p(n,_o),I(Qt,n,null),p(n,xo),I(te,n,null),p(n,ko),p(n,Mn),p(n,Io),I(ee,n,null),p(n,jo),I(ne,n,null),p(n,Mo),I(An,n,null),p(n,Ao),I(ie,n,null),p(n,To),p(n,oa),p(oa,zo),p(n,Eo),I(ae,n,null),p(n,Lo),p(n,oe),p(oe,Tn),p(oe,Po),I(re,oe,null),p(n,Co),I(se,n,null),p(n,So),p(n,le),p(le,zn),p(le,Ho),I(he,le,null),p(n,Ro),I(ce,n,null),p(n,No),p(n,fe),p(fe,En),p(fe,Go),I(me,fe,null),p(n,Do),I(ue,n,null),I(pe,n,null),p(n,qo),p(n,de),p(de,$t),p(de,Fo),I($e,de,null),p(n,Zo),I(ge,n,null),p(n,Vo),I(we,n,null),p(n,Bo),I(ve,n,null),p(n,Uo),I(Ln,n,null),p(n,Wo),p(n,Pn),p(n,Oo),p(n,Cn),p(Cn,Sn),I(ye,Cn,null),p(n,Ko),I(be,n,null),I(_e,n,null),p(n,Jo),p(n,Hn),p(Hn,Rn),I(xe,Hn,null),p(n,Xo),I(ke,n,null),p(n,Yo),p(n,Ie),p(Ie,Nn),p(Ie,Qo),I(je,Ie,null),p(n,tr),I(Me,n,null),p(n,er),p(n,Gn),p(Gn,Dn),I(Ae,Gn,null),p(n,nr),I(Te,n,null),p(n,ir),I(ze,n,null),p(n,ar),I(Ee,n,null),p(n,or),I(Le,n,null),p(n,rr),I(Pe,n,null),I(Ce,n,null),I(Se,n,null),p(n,sr),p(n,qn),p(qn,Fn),I(He,qn,null),p(n,lr),p(n,Zn),p(Zn,hr),p(Zn,cr),p(Zn,fr),p(n,mr),I(Re,n,null),p(n,ur),p(n,Vn),p(Vn,Bn),I(Ne,Vn,null),p(n,pr),I(Ge,n,null),p(n,dr),I(De,n,null),p(n,$r),I(qe,n,null),p(n,gr),I(Fe,n,null),p(n,wr),I(Un,n,null),p(n,vr),p(n,gt),p(gt,Ti),p(gt,yr),I(Ze,gt,null),p(gt,br),p(n,_r),p(n,Ve),p(Ve,xr),p(Ve,kr),p(Ve,Ir),p(n,jr),p(n,Wn),p(Wn,On),I(Be,Wn,null),p(n,Mr),p(n,wt),p(wt,Ar),p(wt,Tr),p(wt,zr),p(wt,zi),p(wt,Er),p(n,Lr),I(Ue,n,null),p(n,Pr),I(We,n,null),I(Oe,n,null),I(Ke,n,null),p(n,Cr),p(n,Sr),p(n,Kn),p(Kn,Hr),I(Je,Kn,null),p(Kn,Rr),p(n,Nr),p(n,Jn),p(Jn,Xn),I(Xe,Jn,null),p(n,Gr),p(n,vt),p(vt,Dr),p(vt,qr),p(vt,Fr),p(vt,Zr),p(vt,Vr),p(n,Br),I(Ye,n,null),p(n,Ur),p(n,Yn),p(Yn,Qn),I(Qe,Yn,null),p(n,Wr),p(n,Ei),p(n,Or),p(n,ti),p(ti,ei),I(tn,ti,null),p(n,Kr),I(en,n,null),p(n,Jr),p(n,nn),p(nn,ni),p(nn,Xr),I(an,nn,null),p(n,Yr),I(on,n,null),p(n,Qr),I(rn,n,null),p(n,ts),I(sn,n,null),I(ln,n,null),I(hn,n,null),I(cn,n,null),p(n,es),p(n,fn),p(fn,ii),p(fn,ns),I(mn,fn,null),p(n,is),I(un,n,null),p(n,as),p(n,pn),p(pn,ai),p(pn,os),I(dn,pn,null),p(n,rs),p(n,Li),p(n,ss),p(n,$n),p($n,oi),p($n,ls),I(gn,$n,null),p(n,hs),I(wn,n,null),p(n,cs),I(vn,n,null),p(n,fs),p(n,rt),p(rt,Pi),p(rt,ms),p(rt,us),p(rt,ps),p(rt,ds),p(rt,$s),p(rt,gs),p(rt,ws),p(rt,vs),p(rt,ys),p(n,bs),I(yn,n,null),p(n,_s),p(n,Ci),p(Ci,ra),p(ra,dt),p(dt,xs),p(dt,Si),p(dt,ks),p(dt,Is),p(dt,js),p(n,Ms),I(bn,n,null),p(n,As),I(ri,n,null),xa=!0},p(m,[w]){const $={};w&1&&($.$$scope={dirty:w,ctx:m}),K.$set($);const sa={};w&1&&(sa.$$scope={dirty:w,ctx:m}),q.$set(sa);const Hi={};w&1&&(Hi.$$scope={dirty:w,ctx:m}),It.$set(Hi);const yt={};w&1&&(yt.$$scope={dirty:w,ctx:m}),jt.$set(yt);const st={};w&1&&(st.$$scope={dirty:w,ctx:m}),Mt.$set(st);const si={};w&1&&(si.$$scope={dirty:w,ctx:m}),At.$set(si);const lt={};w&1&&(lt.$$scope={dirty:w,ctx:m}),Tt.$set(lt);const bt={};w&1&&(bt.$$scope={dirty:w,ctx:m}),zt.$set(bt);const la={};w&1&&(la.$$scope={dirty:w,ctx:m}),Et.$set(la);const Ri={};w&1&&(Ri.$$scope={dirty:w,ctx:m}),Pt.$set(Ri);const ha={};w&1&&(ha.$$scope={dirty:w,ctx:m}),Ct.$set(ha);const li={};w&1&&(li.$$scope={dirty:w,ctx:m}),St.$set(li);const ca={};w&1&&(ca.$$scope={dirty:w,ctx:m}),Rt.$set(ca);const fa={};w&1&&(fa.$$scope={dirty:w,ctx:m}),Nt.$set(fa);const hi={};w&1&&(hi.$$scope={dirty:w,ctx:m}),Gt.$set(hi);const ma={};w&1&&(ma.$$scope={dirty:w,ctx:m}),Dt.$set(ma);const ua={};w&1&&(ua.$$scope={dirty:w,ctx:m}),qt.$set(ua);const pa={};w&1&&(pa.$$scope={dirty:w,ctx:m}),Ft.$set(pa);const da={};w&1&&(da.$$scope={dirty:w,ctx:m}),Zt.$set(da);const $a={};w&1&&($a.$$scope={dirty:w,ctx:m}),Vt.$set($a);const ga={};w&1&&(ga.$$scope={dirty:w,ctx:m}),Bt.$set(ga);const wa={};w&1&&(wa.$$scope={dirty:w,ctx:m}),Ut.$set(wa);const ci={};w&1&&(ci.$$scope={dirty:w,ctx:m}),Wt.$set(ci);const fi={};w&1&&(fi.$$scope={dirty:w,ctx:m}),Ot.$set(fi);const mi={};w&1&&(mi.$$scope={dirty:w,ctx:m}),Kt.$set(mi);const ui={};w&1&&(ui.$$scope={dirty:w,ctx:m}),Jt.$set(ui);const Ni={};w&1&&(Ni.$$scope={dirty:w,ctx:m}),Xt.$set(Ni);const Gi={};w&1&&(Gi.$$scope={dirty:w,ctx:m}),Yt.$set(Gi);const pi={};w&1&&(pi.$$scope={dirty:w,ctx:m}),Qt.$set(pi);const Di={};w&1&&(Di.$$scope={dirty:w,ctx:m}),te.$set(Di);const qi={};w&1&&(qi.$$scope={dirty:w,ctx:m}),ee.$set(qi);const di={};w&1&&(di.$$scope={dirty:w,ctx:m}),ne.$set(di);const Fi={};w&1&&(Fi.$$scope={dirty:w,ctx:m}),ie.$set(Fi);const _n={};w&1&&(_n.$$scope={dirty:w,ctx:m}),ae.$set(_n);const $i={};w&1&&($i.$$scope={dirty:w,ctx:m}),re.$set($i);const Zi={};w&1&&(Zi.$$scope={dirty:w,ctx:m}),se.$set(Zi);const _t={};w&1&&(_t.$$scope={dirty:w,ctx:m}),he.$set(_t);const gi={};w&1&&(gi.$$scope={dirty:w,ctx:m}),ce.$set(gi);const Vi={};w&1&&(Vi.$$scope={dirty:w,ctx:m}),me.$set(Vi);const xt={};w&1&&(xt.$$scope={dirty:w,ctx:m}),ue.$set(xt);const Bi={};w&1&&(Bi.$$scope={dirty:w,ctx:m}),pe.$set(Bi);const Ui={};w&1&&(Ui.$$scope={dirty:w,ctx:m}),$e.$set(Ui);const wi={};w&1&&(wi.$$scope={dirty:w,ctx:m}),ge.$set(wi);const vi={};w&1&&(vi.$$scope={dirty:w,ctx:m}),we.$set(vi);const yi={};w&1&&(yi.$$scope={dirty:w,ctx:m}),ve.$set(yi);const bi={};w&1&&(bi.$$scope={dirty:w,ctx:m}),ye.$set(bi);const ht={};w&1&&(ht.$$scope={dirty:w,ctx:m}),be.$set(ht);const va={};w&1&&(va.$$scope={dirty:w,ctx:m}),_e.$set(va);const ya={};w&1&&(ya.$$scope={dirty:w,ctx:m}),xe.$set(ya);const kt={};w&1&&(kt.$$scope={dirty:w,ctx:m}),ke.$set(kt);const jl={};w&1&&(jl.$$scope={dirty:w,ctx:m}),je.$set(jl);const Ml={};w&1&&(Ml.$$scope={dirty:w,ctx:m}),Me.$set(Ml);const Al={};w&1&&(Al.$$scope={dirty:w,ctx:m}),Ae.$set(Al);const Tl={};w&1&&(Tl.$$scope={dirty:w,ctx:m}),Te.$set(Tl);const zl={};w&1&&(zl.$$scope={dirty:w,ctx:m}),ze.$set(zl);const El={};w&1&&(El.$$scope={dirty:w,ctx:m}),Ee.$set(El);const Ll={};w&1&&(Ll.$$scope={dirty:w,ctx:m}),Le.$set(Ll);const Pl={};w&1&&(Pl.$$scope={dirty:w,ctx:m}),Pe.$set(Pl);const Cl={};w&1&&(Cl.$$scope={dirty:w,ctx:m}),Ce.$set(Cl);const Sl={};w&1&&(Sl.$$scope={dirty:w,ctx:m}),Se.$set(Sl);const Hl={};w&1&&(Hl.$$scope={dirty:w,ctx:m}),He.$set(Hl);const Rl={};w&1&&(Rl.$$scope={dirty:w,ctx:m}),Re.$set(Rl);const Nl={};w&1&&(Nl.$$scope={dirty:w,ctx:m}),Ne.$set(Nl);const Gl={};w&1&&(Gl.$$scope={dirty:w,ctx:m}),Ge.$set(Gl);const Dl={};w&1&&(Dl.$$scope={dirty:w,ctx:m}),De.$set(Dl);const ql={};w&1&&(ql.$$scope={dirty:w,ctx:m}),qe.$set(ql);const Fl={};w&1&&(Fl.$$scope={dirty:w,ctx:m}),Fe.$set(Fl);const Zl={};w&1&&(Zl.$$scope={dirty:w,ctx:m}),Ze.$set(Zl);const Vl={};w&1&&(Vl.$$scope={dirty:w,ctx:m}),Be.$set(Vl);const Bl={};w&1&&(Bl.$$scope={dirty:w,ctx:m}),Ue.$set(Bl);const Ul={};w&1&&(Ul.$$scope={dirty:w,ctx:m}),We.$set(Ul);const Wl={};w&1&&(Wl.$$scope={dirty:w,ctx:m}),Oe.$set(Wl);const Ol={};w&1&&(Ol.$$scope={dirty:w,ctx:m}),Ke.$set(Ol);const Kl={};w&1&&(Kl.$$scope={dirty:w,ctx:m}),Je.$set(Kl);const Jl={};w&1&&(Jl.$$scope={dirty:w,ctx:m}),Xe.$set(Jl);const Xl={};w&1&&(Xl.$$scope={dirty:w,ctx:m}),Ye.$set(Xl);const Yl={};w&1&&(Yl.$$scope={dirty:w,ctx:m}),Qe.$set(Yl);const Ql={};w&1&&(Ql.$$scope={dirty:w,ctx:m}),tn.$set(Ql);const th={};w&1&&(th.$$scope={dirty:w,ctx:m}),en.$set(th);const eh={};w&1&&(eh.$$scope={dirty:w,ctx:m}),an.$set(eh);const nh={};w&1&&(nh.$$scope={dirty:w,ctx:m}),on.$set(nh);const ih={};w&1&&(ih.$$scope={dirty:w,ctx:m}),rn.$set(ih);const ah={};w&1&&(ah.$$scope={dirty:w,ctx:m}),sn.$set(ah);const oh={};w&1&&(oh.$$scope={dirty:w,ctx:m}),ln.$set(oh);const rh={};w&1&&(rh.$$scope={dirty:w,ctx:m}),hn.$set(rh);const sh={};w&1&&(sh.$$scope={dirty:w,ctx:m}),cn.$set(sh);const lh={};w&1&&(lh.$$scope={dirty:w,ctx:m}),mn.$set(lh);const hh={};w&1&&(hh.$$scope={dirty:w,ctx:m}),un.$set(hh);const ch={};w&1&&(ch.$$scope={dirty:w,ctx:m}),dn.$set(ch);const fh={};w&1&&(fh.$$scope={dirty:w,ctx:m}),gn.$set(fh);const mh={};w&1&&(mh.$$scope={dirty:w,ctx:m}),wn.$set(mh);const uh={};w&1&&(uh.$$scope={dirty:w,ctx:m}),vn.$set(uh);const ph={};w&1&&(ph.$$scope={dirty:w,ctx:m}),yn.$set(ph);const dh={};w&1&&(dh.$$scope={dirty:w,ctx:m}),bn.$set(dh)},i(m){xa||(b(e.$$.fragment,m),b(i.$$.fragment,m),b(h.$$.fragment,m),b(K.$$.fragment,m),b(q.$$.fragment,m),b(at.$$.fragment,m),b(It.$$.fragment,m),b(jt.$$.fragment,m),b(Mt.$$.fragment,m),b(At.$$.fragment,m),b(Tt.$$.fragment,m),b(zt.$$.fragment,m),b(Et.$$.fragment,m),b(Pt.$$.fragment,m),b(Ct.$$.fragment,m),b(St.$$.fragment,m),b(Rt.$$.fragment,m),b(Nt.$$.fragment,m),b(Gt.$$.fragment,m),b(Dt.$$.fragment,m),b(qt.$$.fragment,m),b(Ft.$$.fragment,m),b(Zt.$$.fragment,m),b(Vt.$$.fragment,m),b(Bt.$$.fragment,m),b(Ut.$$.fragment,m),b(Wt.$$.fragment,m),b(Ot.$$.fragment,m),b(Kt.$$.fragment,m),b(Jt.$$.fragment,m),b(Xt.$$.fragment,m),b(Yt.$$.fragment,m),b(Qt.$$.fragment,m),b(te.$$.fragment,m),b(ee.$$.fragment,m),b(ne.$$.fragment,m),b(An.$$.fragment,m),b(ie.$$.fragment,m),b(ae.$$.fragment,m),b(re.$$.fragment,m),b(se.$$.fragment,m),b(he.$$.fragment,m),b(ce.$$.fragment,m),b(me.$$.fragment,m),b(ue.$$.fragment,m),b(pe.$$.fragment,m),b($e.$$.fragment,m),b(ge.$$.fragment,m),b(we.$$.fragment,m),b(ve.$$.fragment,m),b(Ln.$$.fragment,m),b(ye.$$.fragment,m),b(be.$$.fragment,m),b(_e.$$.fragment,m),b(xe.$$.fragment,m),b(ke.$$.fragment,m),b(je.$$.fragment,m),b(Me.$$.fragment,m),b(Ae.$$.fragment,m),b(Te.$$.fragment,m),b(ze.$$.fragment,m),b(Ee.$$.fragment,m),b(Le.$$.fragment,m),b(Pe.$$.fragment,m),b(Ce.$$.fragment,m),b(Se.$$.fragment,m),b(He.$$.fragment,m),b(Re.$$.fragment,m),b(Ne.$$.fragment,m),b(Ge.$$.fragment,m),b(De.$$.fragment,m),b(qe.$$.fragment,m),b(Fe.$$.fragment,m),b(Un.$$.fragment,m),b(Ze.$$.fragment,m),b(Be.$$.fragment,m),b(Ue.$$.fragment,m),b(We.$$.fragment,m),b(Oe.$$.fragment,m),b(Ke.$$.fragment,m),b(Je.$$.fragment,m),b(Xe.$$.fragment,m),b(Ye.$$.fragment,m),b(Qe.$$.fragment,m),b(tn.$$.fragment,m),b(en.$$.fragment,m),b(an.$$.fragment,m),b(on.$$.fragment,m),b(rn.$$.fragment,m),b(sn.$$.fragment,m),b(ln.$$.fragment,m),b(hn.$$.fragment,m),b(cn.$$.fragment,m),b(mn.$$.fragment,m),b(un.$$.fragment,m),b(dn.$$.fragment,m),b(gn.$$.fragment,m),b(wn.$$.fragment,m),b(vn.$$.fragment,m),b(yn.$$.fragment,m),b(bn.$$.fragment,m),b(ri.$$.fragment,m),xa=!0)},o(m){_(e.$$.fragment,m),_(i.$$.fragment,m),_(h.$$.fragment,m),_(K.$$.fragment,m),_(q.$$.fragment,m),_(at.$$.fragment,m),_(It.$$.fragment,m),_(jt.$$.fragment,m),_(Mt.$$.fragment,m),_(At.$$.fragment,m),_(Tt.$$.fragment,m),_(zt.$$.fragment,m),_(Et.$$.fragment,m),_(Pt.$$.fragment,m),_(Ct.$$.fragment,m),_(St.$$.fragment,m),_(Rt.$$.fragment,m),_(Nt.$$.fragment,m),_(Gt.$$.fragment,m),_(Dt.$$.fragment,m),_(qt.$$.fragment,m),_(Ft.$$.fragment,m),_(Zt.$$.fragment,m),_(Vt.$$.fragment,m),_(Bt.$$.fragment,m),_(Ut.$$.fragment,m),_(Wt.$$.fragment,m),_(Ot.$$.fragment,m),_(Kt.$$.fragment,m),_(Jt.$$.fragment,m),_(Xt.$$.fragment,m),_(Yt.$$.fragment,m),_(Qt.$$.fragment,m),_(te.$$.fragment,m),_(ee.$$.fragment,m),_(ne.$$.fragment,m),_(An.$$.fragment,m),_(ie.$$.fragment,m),_(ae.$$.fragment,m),_(re.$$.fragment,m),_(se.$$.fragment,m),_(he.$$.fragment,m),_(ce.$$.fragment,m),_(me.$$.fragment,m),_(ue.$$.fragment,m),_(pe.$$.fragment,m),_($e.$$.fragment,m),_(ge.$$.fragment,m),_(we.$$.fragment,m),_(ve.$$.fragment,m),_(Ln.$$.fragment,m),_(ye.$$.fragment,m),_(be.$$.fragment,m),_(_e.$$.fragment,m),_(xe.$$.fragment,m),_(ke.$$.fragment,m),_(je.$$.fragment,m),_(Me.$$.fragment,m),_(Ae.$$.fragment,m),_(Te.$$.fragment,m),_(ze.$$.fragment,m),_(Ee.$$.fragment,m),_(Le.$$.fragment,m),_(Pe.$$.fragment,m),_(Ce.$$.fragment,m),_(Se.$$.fragment,m),_(He.$$.fragment,m),_(Re.$$.fragment,m),_(Ne.$$.fragment,m),_(Ge.$$.fragment,m),_(De.$$.fragment,m),_(qe.$$.fragment,m),_(Fe.$$.fragment,m),_(Un.$$.fragment,m),_(Ze.$$.fragment,m),_(Be.$$.fragment,m),_(Ue.$$.fragment,m),_(We.$$.fragment,m),_(Oe.$$.fragment,m),_(Ke.$$.fragment,m),_(Je.$$.fragment,m),_(Xe.$$.fragment,m),_(Ye.$$.fragment,m),_(Qe.$$.fragment,m),_(tn.$$.fragment,m),_(en.$$.fragment,m),_(an.$$.fragment,m),_(on.$$.fragment,m),_(rn.$$.fragment,m),_(sn.$$.fragment,m),_(ln.$$.fragment,m),_(hn.$$.fragment,m),_(cn.$$.fragment,m),_(mn.$$.fragment,m),_(un.$$.fragment,m),_(dn.$$.fragment,m),_(gn.$$.fragment,m),_(wn.$$.fragment,m),_(vn.$$.fragment,m),_(yn.$$.fragment,m),_(bn.$$.fragment,m),_(ri.$$.fragment,m),xa=!1},d(m){m&&(o(t),o(r),o(a)),j(e,m),j(i,m),j(h),j(K),j(q),j(at),j(It),j(jt),j(Mt),j(At),j(Tt),j(zt),j(Et),j(Pt),j(Ct),j(St),j(Rt),j(Nt),j(Gt),j(Dt),j(qt),j(Ft),j(Zt),j(Vt),j(Bt),j(Ut),j(Wt),j(Ot),j(Kt),j(Jt),j(Xt),j(Yt),j(Qt),j(te),j(ee),j(ne),j(An),j(ie),j(ae),j(re),j(se),j(he),j(ce),j(me),j(ue),j(pe),j($e),j(ge),j(we),j(ve),j(Ln),j(ye),j(be),j(_e),j(xe),j(ke),j(je),j(Me),j(Ae),j(Te),j(ze),j(Ee),j(Le),j(Pe),j(Ce),j(Se),j(He),j(Re),j(Ne),j(Ge),j(De),j(qe),j(Fe),j(Un),j(Ze),j(Be),j(Ue),j(We),j(Oe),j(Ke),j(Je),j(Xe),j(Ye),j(Qe),j(tn),j(en),j(an),j(on),j(rn),j(sn),j(ln),j(hn),j(cn),j(mn),j(un),j(dn),j(gn),j(wn),j(vn),j(yn),j(bn),j(ri)}}}class Im extends ft{constructor(e){super(),mt(this,e,null,bm,ct,{})}}export{Im as component};
