import{s as st,a as Mi,u as Ti,g as Ai,b as zi,n as W,o as pl,x as ot}from"../chunks/scheduler.BeaK0CkN.js";import{S as rt,i as lt,e as z,c as E,h as R,f as s,b as T,d as u,m as y,n as b,r as $l,p as gl,z as dl,t as h,v as k,j as c,w as x,k as p,x as I,y as j,l as zs,s as L,a as P,g as V,A as wl,B as vl}from"../chunks/index.BmRq3wWf.js";import{b as tt}from"../chunks/paths.lMy9yQnm.js";const yl=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Qi(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function bl(l){let e,t,i;const o=l[4].default,a=Mi(o,l,l[3],null);return{c(){e=z("a"),a&&a.c(),this.h()},l(r){e=E(r,"A",{href:!0,class:!0,target:!0,rel:!0});var f=R(e);a&&a.l(f),f.forEach(s),this.h()},h(){T(e,"href",l[0]),T(e,"class",t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+l[1]),T(e,"target",l[2]),T(e,"rel","noopener noreferrer")},m(r,f){u(r,e,f),a&&a.m(e,null),i=!0},p(r,[f]){a&&a.p&&(!i||f&8)&&Ti(a,o,r,r[3],i?zi(o,r[3],f,null):Ai(r[3]),null),(!i||f&1)&&T(e,"href",r[0]),(!i||f&2&&t!==(t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+r[1]))&&T(e,"class",t),(!i||f&4)&&T(e,"target",r[2])},i(r){i||(y(a,r),i=!0)},o(r){b(a,r),i=!1},d(r){r&&s(e),a&&a.d(r)}}}function _l(l,e,t){let{$$slots:i={},$$scope:o}=e,{href:a}=e,{styling:r=""}=e,{target:f="_blank"}=e;return l.$$set=n=>{"href"in n&&t(0,a=n.href),"styling"in n&&t(1,r=n.styling),"target"in n&&t(2,f=n.target),"$$scope"in n&&t(3,o=n.$$scope)},[a,r,f,o,i]}class U extends rt{constructor(e){super(),lt(this,e,_l,bl,st,{href:0,styling:1,target:2})}}function ll(l,e,t){const i=l.slice();return i[0]=e[t],i}function kl(l){let e;return{c(){e=h("link")},l(t){e=c(t,"link")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function hl(l){let e,t,i=l[0].author+"",o,a,r,f=l[0].title+"",n,g,_,d=l[0].publisher+"",v,M,H,N=l[0].year+"",F,A,C,Z,O,et,K,G;return O=new U({props:{href:l[0].link,$$slots:{default:[kl]},$$scope:{ctx:l}}}),{c(){e=z("li"),t=z("span"),o=h(i),a=h(", "),r=z("span"),n=h(f),g=h(`,
			`),_=z("span"),v=h(d),M=h(`,
			`),H=z("span"),F=h(N),A=h(", "),C=z("span"),Z=h("["),k(O.$$.fragment),et=h("]"),K=h(`.
		`),this.h()},l(q){e=E(q,"LI",{});var J=R(e);t=E(J,"SPAN",{class:!0});var Q=R(t);o=c(Q,i),Q.forEach(s),a=c(J,", "),r=E(J,"SPAN",{});var X=R(r);n=c(X,f),X.forEach(s),g=c(J,`,
			`),_=E(J,"SPAN",{});var ht=R(_);v=c(ht,d),ht.forEach(s),M=c(J,`,
			`),H=E(J,"SPAN",{});var it=R(H);F=c(it,N),it.forEach(s),A=c(J,", "),C=E(J,"SPAN",{});var S=R(C);Z=c(S,"["),x(O.$$.fragment,S),et=c(S,"]"),S.forEach(s),K=c(J,`.
		`),J.forEach(s),this.h()},h(){T(t,"class","ms-4")},m(q,J){u(q,e,J),p(e,t),p(t,o),p(e,a),p(e,r),p(r,n),p(e,g),p(e,_),p(_,v),p(e,M),p(e,H),p(H,F),p(e,A),p(e,C),p(C,Z),I(O,C,null),p(C,et),p(e,K),G=!0},p(q,J){const Q={};J&8&&(Q.$$scope={dirty:J,ctx:q}),O.$set(Q)},i(q){G||(y(O.$$.fragment,q),G=!0)},o(q){b(O.$$.fragment,q),G=!1},d(q){q&&s(e),j(O)}}}function xl(l){let e,t,i=Qi(Ji),o=[];for(let r=0;r<i.length;r+=1)o[r]=hl(ll(l,i,r));const a=r=>b(o[r],1,1,()=>{o[r]=null});return{c(){e=z("ol");for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=E(r,"OL",{class:!0});var f=R(e);for(let n=0;n<o.length;n+=1)o[n].l(f);f.forEach(s),this.h()},h(){T(e,"class","pl-5 my-2 text-xs list-decimal")},m(r,f){u(r,e,f);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(e,null);t=!0},p(r,[f]){if(f&0){i=Qi(Ji);let n;for(n=0;n<i.length;n+=1){const g=ll(r,i,n);o[n]?(o[n].p(g,f),y(o[n],1)):(o[n]=hl(g),o[n].c(),y(o[n],1),o[n].m(e,null))}for($l(),n=i.length;n<o.length;n+=1)a(n);gl()}},i(r){if(!t){for(let f=0;f<i.length;f+=1)y(o[f]);t=!0}},o(r){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)b(o[f]);t=!1},d(r){r&&s(e),dl(o,r)}}}const ta=l=>{for(let e=0;e<Ji.length;e++)if(Ji[e].id==l)return{index:e+1,link:Ji[e].link};throw new Error},Ji=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"oestreicher",author:"Oestreicher C.",title:"A history of chaos theory",publisher:"Dialogues Clin Neurosci.",year:"2007",link:"https://doi.org/10.31887/DCNS.2007.9.3/coestreicher"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"},{id:"chandramoorthy",author:"Nisha Chandramoorthy, QiQi Wang",title:"On the probability of finding nonphysical solutions through shadowing",publisher:"Journal of Computational Physics",year:"1 September 2021",link:"https://doi.org/10.1016/j.jcp.2021.110389"}];class Il extends rt{constructor(e){super(),lt(this,e,null,xl,st,{})}}function jl(l){let e=ta(l[0]).index+"",t;return{c(){t=h(e)},l(i){t=c(i,e)},m(i,o){u(i,t,o)},p(i,o){o&1&&e!==(e=ta(i[0]).index+"")&&zs(t,e)},d(i){i&&s(t)}}}function Ml(l){let e,t,i,o;return t=new U({props:{href:ta(l[0]).link,$$slots:{default:[jl]},$$scope:{ctx:l}}}),{c(){e=h("["),k(t.$$.fragment),i=h("]")},l(a){e=c(a,"["),x(t.$$.fragment,a),i=c(a,"]")},m(a,r){u(a,e,r),I(t,a,r),u(a,i,r),o=!0},p(a,[r]){const f={};r&1&&(f.href=ta(a[0]).link),r&3&&(f.$$scope={dirty:r,ctx:a}),t.$set(f)},i(a){o||(y(t.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),o=!1},d(a){a&&(s(e),s(i)),j(t,a)}}}function Tl(l,e,t){let{id:i}=e;return l.$$set=o=>{"id"in o&&t(0,i=o.id)},[i]}class Y extends rt{constructor(e){super(),lt(this,e,Tl,Ml,st,{id:0})}}function Al(l){let e,t;const i=l[2].default,o=Mi(i,l,l[1],null);return{c(){e=z("div"),o&&o.c(),this.h()},l(a){e=E(a,"DIV",{id:!0,class:!0});var r=R(e);o&&o.l(r),r.forEach(s),this.h()},h(){T(e,"id",l[0]),T(e,"class","text-2xl font-bold text-center my-8")},m(a,r){u(a,e,r),o&&o.m(e,null),t=!0},p(a,[r]){o&&o.p&&(!t||r&2)&&Ti(o,i,a,a[1],t?zi(i,a[1],r,null):Ai(a[1]),null),(!t||r&1)&&T(e,"id",a[0])},i(a){t||(y(o,a),t=!0)},o(a){b(o,a),t=!1},d(a){a&&s(e),o&&o.d(a)}}}function zl(l,e,t){let{$$slots:i={},$$scope:o}=e,{id:a}=e;return l.$$set=r=>{"id"in r&&t(0,a=r.id),"$$scope"in r&&t(1,o=r.$$scope)},[a,o,i]}class Ii extends rt{constructor(e){super(),lt(this,e,zl,Al,st,{id:0})}}function El(l){let e,t;const i=l[2].default,o=Mi(i,l,l[1],null);return{c(){e=z("div"),o&&o.c(),this.h()},l(a){e=E(a,"DIV",{id:!0,class:!0});var r=R(e);o&&o.l(r),r.forEach(s),this.h()},h(){T(e,"id",l[0]),T(e,"class","text-xl font-medium text-left mt-8 mb-4")},m(a,r){u(a,e,r),o&&o.m(e,null),t=!0},p(a,[r]){o&&o.p&&(!t||r&2)&&Ti(o,i,a,a[1],t?zi(i,a[1],r,null):Ai(a[1]),null),(!t||r&1)&&T(e,"id",a[0])},i(a){t||(y(o,a),t=!0)},o(a){b(o,a),t=!1},d(a){a&&s(e),o&&o.d(a)}}}function Ll(l,e,t){let{$$slots:i={},$$scope:o}=e,{id:a}=e;return l.$$set=r=>{"id"in r&&t(0,a=r.id),"$$scope"in r&&t(1,o=r.$$scope)},[a,o,i]}class ji extends rt{constructor(e){super(),lt(this,e,Ll,El,st,{id:0})}}function Pl(l){let e,t;const i=l[1].default,o=Mi(i,l,l[0],null);return{c(){e=z("div"),o&&o.c(),this.h()},l(a){e=E(a,"DIV",{class:!0});var r=R(e);o&&o.l(r),r.forEach(s),this.h()},h(){T(e,"class","text-lg font-medium text-left ms-4 mt-4 mb-4")},m(a,r){u(a,e,r),o&&o.m(e,null),t=!0},p(a,[r]){o&&o.p&&(!t||r&1)&&Ti(o,i,a,a[0],t?zi(i,a[0],r,null):Ai(a[0]),null)},i(a){t||(y(o,a),t=!0)},o(a){b(o,a),t=!1},d(a){a&&s(e),o&&o.d(a)}}}function Cl(l,e,t){let{$$slots:i={},$$scope:o}=e;return l.$$set=a=>{"$$scope"in a&&t(0,o=a.$$scope)},[o,i]}class cl extends rt{constructor(e){super(),lt(this,e,Cl,Pl,st,{})}}function Hl(l){let e,t,i;const o=l[3].default,a=Mi(o,l,l[2],null);return{c(){e=z("p"),a&&a.c(),this.h()},l(r){e=E(r,"P",{class:!0});var f=R(e);a&&a.l(f),f.forEach(s),this.h()},h(){T(e,"class",t="my-2 "+l[0]+" "+l[1])},m(r,f){u(r,e,f),a&&a.m(e,null),i=!0},p(r,[f]){a&&a.p&&(!i||f&4)&&Ti(a,o,r,r[2],i?zi(o,r[2],f,null):Ai(r[2]),null),(!i||f&3&&t!==(t="my-2 "+r[0]+" "+r[1]))&&T(e,"class",t)},i(r){i||(y(a,r),i=!0)},o(r){b(a,r),i=!1},d(r){r&&s(e),a&&a.d(r)}}}function Sl(l,e,t){let{$$slots:i={},$$scope:o}=e,{indent:a="indent-8"}=e,{style:r=""}=e;return l.$$set=f=>{"indent"in f&&t(0,a=f.indent),"style"in f&&t(1,r=f.style),"$$scope"in f&&t(2,o=f.$$scope)},[a,r,o,i]}class D extends rt{constructor(e){super(),lt(this,e,Sl,Hl,st,{indent:0,style:1})}}function fl(l,e,t){const i=l.slice();return i[1]=e[t],i}function ml(l){let e,t,i=l[1].desc+"",o,a,r,f,n=l[1].val+"",g,_;return{c(){e=z("li"),t=z("div"),o=h(i),a=L(),r=z("div"),f=z("span"),g=h(n),_=L(),this.h()},l(d){e=E(d,"LI",{class:!0});var v=R(e);t=E(v,"DIV",{class:!0});var M=R(t);o=c(M,i),M.forEach(s),a=P(v),r=E(v,"DIV",{class:!0});var H=R(r);f=E(H,"SPAN",{class:!0});var N=R(f);g=c(N,n),N.forEach(s),H.forEach(s),_=P(v),v.forEach(s),this.h()},h(){T(t,"class","flex-none w-32 sm:w-64"),T(f,"class","rounded-0.5 p-1 font-mono"),T(r,"class","w-fit flex-wrap"),T(e,"class","flex items-center justify-left")},m(d,v){u(d,e,v),p(e,t),p(t,o),p(e,a),p(e,r),p(r,f),p(f,g),p(e,_)},p(d,v){v&1&&i!==(i=d[1].desc+"")&&zs(o,i),v&1&&n!==(n=d[1].val+"")&&zs(g,n)},d(d){d&&s(e)}}}function Rl(l){let e,t,i=Qi(l[0]),o=[];for(let a=0;a<i.length;a+=1)o[a]=ml(fl(l,i,a));return{c(){e=z("section"),t=z("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"SECTION",{class:!0});var r=R(e);t=E(r,"UL",{class:!0});var f=R(t);for(let n=0;n<o.length;n+=1)o[n].l(f);f.forEach(s),r.forEach(s),this.h()},h(){T(t,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),T(e,"class","relative block my-4")},m(a,r){u(a,e,r),p(e,t);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(t,null)},p(a,[r]){if(r&1){i=Qi(a[0]);let f;for(f=0;f<i.length;f+=1){const n=fl(a,i,f);o[f]?o[f].p(n,r):(o[f]=ml(n),o[f].c(),o[f].m(t,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=i.length}},i:W,o:W,d(a){a&&s(e),dl(o,a)}}}function Nl(l,e,t){let{hps:i=[]}=e;return l.$$set=o=>{"hps"in o&&t(0,i=o.hps)},[i]}class As extends rt{constructor(e){super(),lt(this,e,Nl,Rl,st,{hps:0})}}function Dl(l){let e,t;const i=l[1].default,o=Mi(i,l,l[0],null);return{c(){e=z("figcaption"),o&&o.c(),this.h()},l(a){e=E(a,"FIGCAPTION",{class:!0});var r=R(e);o&&o.l(r),r.forEach(s),this.h()},h(){T(e,"class","text-center text-xs mt-2")},m(a,r){u(a,e,r),o&&o.m(e,null),t=!0},p(a,[r]){o&&o.p&&(!t||r&1)&&Ti(o,i,a,a[0],t?zi(i,a[0],r,null):Ai(a[0]),null)},i(a){t||(y(o,a),t=!0)},o(a){b(o,a),t=!1},d(a){a&&s(e),o&&o.d(a)}}}function Gl(l,e,t){let{$$slots:i={},$$scope:o}=e;return l.$$set=a=>{"$$scope"in a&&t(0,o=a.$$scope)},[o,i]}class nt extends rt{constructor(e){super(),lt(this,e,Gl,Dl,st,{})}}const{window:ql}=yl;function Fl(l){let e,t='<nav class="border-r-2 sticky top-12"><div><section><ul class="menu"><li><a href="#intro">Intro</a></li> <li><a href="#lorenz">Lorenz Attractor</a></li> <li><a href="#nhits">Neural Architecture</a></li> <li><a href="#experiments">Experiments</a></li> <ul class="text-sm submenu"><li><a href="#datagen">Data Generation</a></li> <li><a href="#model-1">Model 1</a></li> <li><a href="#model-2">Model 2</a></li> <li><a href="#model-3">Model 3</a></li> <li><a href="#arpred">Autoregressive Prediction</a></li></ul> <li><a href="#discussion">Discussion</a></li> <li><a href="#references">References</a></li></ul></section></div></nav>',i,o;return{c(){e=z("aside"),e.innerHTML=t,this.h()},l(a){e=E(a,"ASIDE",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-u7i093"&&(e.innerHTML=t),this.h()},h(){T(e,"class","max-sm:hidden")},m(a,r){u(a,e,r),i||(o=wl(ql,"scroll",l[0]),i=!0)},p:W,i:W,o:W,d(a){a&&s(e),i=!1,o()}}}function Zl(l){const e=["intro","lorenz","nhits","experiments","datagen","model-1","model-2","model-3","arpred","discussion","references"],t=["bg-rose-100","rounded"];let i=e[0];const o=n=>{const g="a[href='#"+n+"']";return document.querySelector(g)},a=n=>{const g=o(n).parentElement;t.forEach(_=>g.classList.add(_))},r=n=>{const g=o(n).parentElement;t.forEach(_=>g.classList.remove(_))},f=()=>{let n;e.forEach(g=>{const _=document.getElementById(g);window.scrollY>=_.offsetTop-1&&(n=g)}),n&&n!=i&&(r(i),i=n,a(i))};return pl(()=>{a(i),f()}),[f]}class Vl extends rt{constructor(e){super(),lt(this,e,Zl,Fl,st,{})}}function Bl(l){return pl(()=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",e.async=!0,document.head.append(e),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[]}class Ul extends rt{constructor(e){super(),lt(this,e,Bl,null,st,{})}}const Wl=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,Ol=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,Kl=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,Jl=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,Xl=`
\\begin{align}
\\operatorname{J}(z) := exp(-\\frac{z^2}{2}) \\\\
\\end{align}`,Yl=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],Ql=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~687 million"}],th=[{desc:"horizon",val:500},{desc:"lookback",val:1e3},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"},{desc:"total trainable parameters",val:"~857 million"}];function eh(l){let e,t,i,o,a,r,f;return document.title=e=Xi,{c(){t=z("meta"),i=z("meta"),o=z("meta"),a=z("meta"),r=z("meta"),f=z("meta"),this.h()},l(n){const g=vl("svelte-xp42rc",document.head);t=E(g,"META",{name:!0,content:!0}),i=E(g,"META",{property:!0,content:!0}),o=E(g,"META",{property:!0,content:!0}),a=E(g,"META",{property:!0,content:!0}),r=E(g,"META",{property:!0,content:!0}),f=E(g,"META",{property:!0,content:!0}),g.forEach(s),this.h()},h(){T(t,"name","description"),T(t,"content",ul),T(i,"property","og:type"),T(i,"content","article"),T(o,"property","og:url"),T(o,"content","https://nrxszvo.github.io/nhits-lorenz"),T(a,"property","og:description"),T(a,"content",ul),T(r,"property","og:image"),T(r,"content","https://nrxszvo.github.io/thumbnail.png"),T(f,"property","og:title"),T(f,"content",Xi)},m(n,g){p(document.head,t),p(document.head,i),p(document.head,o),p(document.head,a),p(document.head,r),p(document.head,f)},p(n,[g]){g&0&&e!==(e=Xi)&&(document.title=e)},i:W,o:W,d(n){s(t),s(i),s(o),s(a),s(r),s(f)}}}const Xi="Generic Deep Learning for Chaotic Dynamics: A Case Study on the Lorenz Attractor",ul="Experiments using the NHiTS neural forecasting architecture to model the Lorenz Attractor; analysis of Z coordinate local maximum converging to 38.5";class nh extends rt{constructor(e){super(),lt(this,e,null,eh,st,{})}}function ih(l){let e;return{c(){e=h("mochaNN")},l(t){e=c(t,"mochaNN")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function ah(l){let e,t="tl;dr";return{c(){e=z("i"),e.textContent=t,this.h()},l(i){e=E(i,"I",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-ixj9gt"&&(e.textContent=t),this.h()},h(){T(e,"class","font-serif")},m(i,o){u(i,e,o)},p:W,d(i){i&&s(e)}}}function oh(l){let e;return{c(){e=h("sMAPE")},l(t){e=c(t,"sMAPE")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function sh(l){let e;return{c(){e=h("Introduction")},l(t){e=c(t,"Introduction")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function rh(l){let e,t,i="Model scale versus domain knowledge in statistical forecasting of chaotic systems",o,a,r,f,n,g,_,d,v,M,H='<a href="#sabine">1</a>',N,F;return a=new Y({props:{id:"gilpin"}}),f=new Y({props:{id:"gilpin"}}),g=new Y({props:{id:"seo"}}),d=new Y({props:{id:"degrave"}}),{c(){e=h(`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=z("i"),t.textContent=i,o=L(),k(a.$$.fragment),r=h(`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),k(f.$$.fragment),n=h(`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),k(g.$$.fragment),_=h(", "),k(d.$$.fragment),v=h(")"),M=z("sup"),M.innerHTML=H,N=h(`.
		`)},l(A){e=c(A,`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=E(A,"I",{"data-svelte-h":!0}),V(t)!=="svelte-oq8z8z"&&(t.textContent=i),o=P(A),x(a.$$.fragment,A),r=c(A,`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),x(f.$$.fragment,A),n=c(A,`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),x(g.$$.fragment,A),_=c(A,", "),x(d.$$.fragment,A),v=c(A,")"),M=E(A,"SUP",{"data-svelte-h":!0}),V(M)!=="svelte-6x9dc9"&&(M.innerHTML=H),N=c(A,`.
		`)},m(A,C){u(A,e,C),u(A,t,C),u(A,o,C),I(a,A,C),u(A,r,C),I(f,A,C),u(A,n,C),I(g,A,C),u(A,_,C),I(d,A,C),u(A,v,C),u(A,M,C),u(A,N,C),F=!0},p:W,i(A){F||(y(a.$$.fragment,A),y(f.$$.fragment,A),y(g.$$.fragment,A),y(d.$$.fragment,A),F=!0)},o(A){b(a.$$.fragment,A),b(f.$$.fragment,A),b(g.$$.fragment,A),b(d.$$.fragment,A),F=!1},d(A){A&&(s(e),s(t),s(o),s(r),s(n),s(_),s(v),s(M),s(N)),j(a,A),j(f,A),j(g,A),j(d,A)}}}function lh(l){let e,t,i="i.e.",o,a,r='<a href="#paperspace">2</a>',f,n,g='<a href="#brunton">3</a>',_;return{c(){e=h(`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=z("i"),t.textContent=i,o=h(`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),a=z("sup"),a.innerHTML=r,f=h(`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=z("sup"),n.innerHTML=g,_=h(`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},l(d){e=c(d,`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=E(d,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1xx6z5c"&&(t.textContent=i),o=c(d,`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),a=E(d,"SUP",{"data-svelte-h":!0}),V(a)!=="svelte-yuo1gg"&&(a.innerHTML=r),f=c(d,`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=E(d,"SUP",{"data-svelte-h":!0}),V(n)!=="svelte-a7rqq8"&&(n.innerHTML=g),_=c(d,`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},m(d,v){u(d,e,v),u(d,t,v),u(d,o,v),u(d,a,v),u(d,f,v),u(d,n,v),u(d,_,v)},p:W,d(d){d&&(s(e),s(t),s(o),s(a),s(f),s(n),s(_))}}}function hh(l){let e;return{c(){e=h(`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},l(t){e=c(t,`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function ch(l){let e;return{c(){e=h("Youtube channel")},l(t){e=c(t,"Youtube channel")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function fh(l){let e;return{c(){e=h("lecture series")},l(t){e=c(t,"lecture series")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function mh(l){let e;return{c(){e=h("The Lorenz Attractor")},l(t){e=c(t,"The Lorenz Attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function uh(l){let e;return{c(){e=h("sensitivity to initial conditions")},l(t){e=c(t,"sensitivity to initial conditions")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function ph(l){let e;return{c(){e=h("n-body problem")},l(t){e=c(t,"n-body problem")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function dh(l){let e;return{c(){e=h("Lorenz Attractor")},l(t){e=c(t,"Lorenz Attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function $h(l){let e,t,i,o,a,r,f,n,g,_;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Butterfly_effect",$$slots:{default:[uh]},$$scope:{ctx:l}}}),o=new U({props:{href:"https://en.wikipedia.org/wiki/N-body_problem",$$slots:{default:[ph]},$$scope:{ctx:l}}}),r=new U({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[dh]},$$scope:{ctx:l}}}),n=new Y({props:{id:"oestreicher"}}),{c(){e=h("Although the phenomon of "),k(t.$$.fragment),i=h(` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),k(o.$$.fragment),a=h(", the birth of modern chaos theory is generally associated with the discovery of the "),k(r.$$.fragment),f=h(`
			by Edward Lorenz et. al. in 1963 `),k(n.$$.fragment),g=h(`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},l(d){e=c(d,"Although the phenomon of "),x(t.$$.fragment,d),i=c(d,` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),x(o.$$.fragment,d),a=c(d,", the birth of modern chaos theory is generally associated with the discovery of the "),x(r.$$.fragment,d),f=c(d,`
			by Edward Lorenz et. al. in 1963 `),x(n.$$.fragment,d),g=c(d,`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},m(d,v){u(d,e,v),I(t,d,v),u(d,i,v),I(o,d,v),u(d,a,v),I(r,d,v),u(d,f,v),I(n,d,v),u(d,g,v),_=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M);const H={};v&1&&(H.$$scope={dirty:v,ctx:d}),o.$set(H);const N={};v&1&&(N.$$scope={dirty:v,ctx:d}),r.$set(N)},i(d){_||(y(t.$$.fragment,d),y(o.$$.fragment,d),y(r.$$.fragment,d),y(n.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),b(o.$$.fragment,d),b(r.$$.fragment,d),b(n.$$.fragment,d),_=!1},d(d){d&&(s(e),s(i),s(a),s(f),s(g)),j(t,d),j(o,d),j(r,d),j(n,d)}}}function gh(l){let e;return{c(){e=h("The Lorenz Attractor")},l(t){e=c(t,"The Lorenz Attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function wh(l){let e;return{c(){e=h(`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},l(t){e=c(t,`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function vh(l){let e;return{c(){e=h("strange attractor")},l(t){e=c(t,"strange attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function yh(l){let e;return{c(){e=h("Hausdorff dimension")},l(t){e=c(t,"Hausdorff dimension")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function bh(l){let e,t,i="Attractor",o,a,r,f,n,g;return a=new U({props:{href:"https://en.wikipedia.org/wiki/Attractor#Strange_attractor",$$slots:{default:[vh]},$$scope:{ctx:l}}}),f=new U({props:{href:"https://en.wikipedia.org/wiki/Hausdorff_dimension",$$slots:{default:[yh]},$$scope:{ctx:l}}}),{c(){e=h("The Lorenz "),t=z("i"),t.textContent=i,o=h(` refers to a set of chaotic solutions to the system that
			constitute a `),k(a.$$.fragment),r=h(`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),k(f.$$.fragment),n=h(` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},l(_){e=c(_,"The Lorenz "),t=E(_,"I",{"data-svelte-h":!0}),V(t)!=="svelte-7jrnvq"&&(t.textContent=i),o=c(_,` refers to a set of chaotic solutions to the system that
			constitute a `),x(a.$$.fragment,_),r=c(_,`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),x(f.$$.fragment,_),n=c(_,` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},m(_,d){u(_,e,d),u(_,t,d),u(_,o,d),I(a,_,d),u(_,r,d),I(f,_,d),u(_,n,d),g=!0},p(_,d){const v={};d&1&&(v.$$scope={dirty:d,ctx:_}),a.$set(v);const M={};d&1&&(M.$$scope={dirty:d,ctx:_}),f.$set(M)},i(_){g||(y(a.$$.fragment,_),y(f.$$.fragment,_),g=!0)},o(_){b(a.$$.fragment,_),b(f.$$.fragment,_),g=!1},d(_){_&&(s(e),s(t),s(o),s(r),s(n)),j(a,_),j(f,_)}}}function _h(l){let e;return{c(){e=h("Hopf bifurcation")},l(t){e=c(t,"Hopf bifurcation")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function kh(l){let e,t="$\\rho$",i,o,a="$\\rho \\lt 1$",r,f,n="$\\rho \\approx 24.7$",g,_,d,v,M;return d=new U({props:{href:"https://en.wikipedia.org/wiki/Hopf_bifurcation",$$slots:{default:[_h]},$$scope:{ctx:l}}}),{c(){e=h("Other parameterizations of interest generally involve varying the "),i=h(t),o=h(` parameter,
			for example, `),r=h(a),f=h(" in which the system is stable, and "),g=h(n),_=h(`,
			at which a `),k(d.$$.fragment),v=h(" occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},l(H){e=c(H,"Other parameterizations of interest generally involve varying the "),i=c(H,t),o=c(H,` parameter,
			for example, `),r=c(H,a),f=c(H," in which the system is stable, and "),g=c(H,n),_=c(H,`,
			at which a `),x(d.$$.fragment,H),v=c(H," occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},m(H,N){u(H,e,N),u(H,i,N),u(H,o,N),u(H,r,N),u(H,f,N),u(H,g,N),u(H,_,N),I(d,H,N),u(H,v,N),M=!0},p(H,N){const F={};N&1&&(F.$$scope={dirty:N,ctx:H}),d.$set(F)},i(H){M||(y(d.$$.fragment,H),M=!0)},o(H){b(d.$$.fragment,H),M=!1},d(H){H&&(s(e),s(i),s(o),s(r),s(f),s(g),s(_),s(v)),j(d,H)}}}function xh(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ih(l){let e,t,i,o;return t=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[xh]},$$scope:{ctx:l}}}),{c(){e=h("For all trajectories in this project, I used Gilpin's "),k(t.$$.fragment),i=h(` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},l(a){e=c(a,"For all trajectories in this project, I used Gilpin's "),x(t.$$.fragment,a),i=c(a,` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},m(a,r){u(a,e,r),I(t,a,r),u(a,i,r),o=!0},p(a,r){const f={};r&1&&(f.$$scope={dirty:r,ctx:a}),t.$set(f)},i(a){o||(y(t.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),o=!1},d(a){a&&(s(e),s(i)),j(t,a)}}}function jh(l){let e;return{c(){e=h("Neural Architecture: N-HiTS")},l(t){e=c(t,"Neural Architecture: N-HiTS")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Mh(l){let e,t,i,o,a,r;return t=new Y({props:{id:"challu"}}),o=new Y({props:{id:"gilpin"}}),{c(){e=h("The N-HiTS "),k(t.$$.fragment),i=h(` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),k(o.$$.fragment),a=h(`, it seemed like the natural starting point
			for a network architecture.`)},l(f){e=c(f,"The N-HiTS "),x(t.$$.fragment,f),i=c(f,` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),x(o.$$.fragment,f),a=c(f,`, it seemed like the natural starting point
			for a network architecture.`)},m(f,n){u(f,e,n),I(t,f,n),u(f,i,n),I(o,f,n),u(f,a,n),r=!0},p:W,i(f){r||(y(t.$$.fragment,f),y(o.$$.fragment,f),r=!0)},o(f){b(t.$$.fragment,f),b(o.$$.fragment,f),r=!1},d(f){f&&(s(e),s(i),s(a)),j(t,f),j(o,f)}}}function Th(l){let e,t,i,o,a,r;return t=new Y({props:{id:"oreshkin"}}),o=new Y({props:{id:"oreshkin"}}),{c(){e=h("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),k(t.$$.fragment),i=h(`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),k(o.$$.fragment),a=h(".")},l(f){e=c(f,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),x(t.$$.fragment,f),i=c(f,`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),x(o.$$.fragment,f),a=c(f,".")},m(f,n){u(f,e,n),I(t,f,n),u(f,i,n),I(o,f,n),u(f,a,n),r=!0},p:W,i(f){r||(y(t.$$.fragment,f),y(o.$$.fragment,f),r=!0)},o(f){b(t.$$.fragment,f),b(o.$$.fragment,f),r=!1},d(f){f&&(s(e),s(i),s(a)),j(t,f),j(o,f)}}}function Ah(l){let e,t,i,o;return t=new Y({props:{id:"challu"}}),{c(){e=h(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),k(t.$$.fragment),i=h(".")},l(a){e=c(a,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),x(t.$$.fragment,a),i=c(a,".")},m(a,r){u(a,e,r),I(t,a,r),u(a,i,r),o=!0},p:W,i(a){o||(y(t.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),o=!1},d(a){a&&(s(e),s(i)),j(t,a)}}}function zh(l){let e;return{c(){e=h("Experiments")},l(t){e=c(t,"Experiments")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Eh(l){let e,t,i,o;return t=new Y({props:{id:"gilpin"}}),{c(){e=h(`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),k(t.$$.fragment),i=h(`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},l(a){e=c(a,`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),x(t.$$.fragment,a),i=c(a,`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},m(a,r){u(a,e,r),I(t,a,r),u(a,i,r),o=!0},p:W,i(a){o||(y(t.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),o=!1},d(a){a&&(s(e),s(i)),j(t,a)}}}function Lh(l){let e;return{c(){e=h("Data Generation")},l(t){e=c(t,"Data Generation")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ph(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ch(l){let e;return{c(){e=h("IVP solver")},l(t){e=c(t,"IVP solver")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Hh(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Sh(l){let e,t="$H$",i,o,a="$dt$",r,f,n="$0.015$",g,_,d,v,M,H,N="$dt$",F,A,C,Z="after",O,et="$dt$",K,G,q,J,Q="$\\approx 1.8\\mathrm{e}{-4}$",X,ht,it;return d=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Ph]},$$scope:{ctx:l}}}),M=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[Ch]},$$scope:{ctx:l}}}),q=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Hh]},$$scope:{ctx:l}}}),{c(){e=h("I begin with a horizon (prediction window), "),i=h(t),o=h(", of 100 points, using a "),r=h(a),f=h(` of
			approximately
			`),g=h(n),_=h(" seconds per point (the default from "),k(d.$$.fragment),v=h(") to sample the solution produced by the "),k(M.$$.fragment),H=h(". Importantly, note that this "),F=h(N),A=h(` is only the one used for sampling the solution
			`),C=z("i"),C.textContent=Z,O=h(`
			it is generated by the IVP solver. The actual `),K=h(et),G=h(` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),k(q.$$.fragment),J=h(" is "),X=h(Q),ht=h(`.
		`)},l(S){e=c(S,"I begin with a horizon (prediction window), "),i=c(S,t),o=c(S,", of 100 points, using a "),r=c(S,a),f=c(S,` of
			approximately
			`),g=c(S,n),_=c(S," seconds per point (the default from "),x(d.$$.fragment,S),v=c(S,") to sample the solution produced by the "),x(M.$$.fragment,S),H=c(S,". Importantly, note that this "),F=c(S,N),A=c(S,` is only the one used for sampling the solution
			`),C=E(S,"I",{"data-svelte-h":!0}),V(C)!=="svelte-10nlrz4"&&(C.textContent=Z),O=c(S,`
			it is generated by the IVP solver. The actual `),K=c(S,et),G=c(S,` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),x(q.$$.fragment,S),J=c(S," is "),X=c(S,Q),ht=c(S,`.
		`)},m(S,B){u(S,e,B),u(S,i,B),u(S,o,B),u(S,r,B),u(S,f,B),u(S,g,B),u(S,_,B),I(d,S,B),u(S,v,B),I(M,S,B),u(S,H,B),u(S,F,B),u(S,A,B),u(S,C,B),u(S,O,B),u(S,K,B),u(S,G,B),I(q,S,B),u(S,J,B),u(S,X,B),u(S,ht,B),it=!0},p(S,B){const oi={};B&1&&(oi.$$scope={dirty:B,ctx:S}),d.$set(oi);const si={};B&1&&(si.$$scope={dirty:B,ctx:S}),M.$set(si);const Ei={};B&1&&(Ei.$$scope={dirty:B,ctx:S}),q.$set(Ei)},i(S){it||(y(d.$$.fragment,S),y(M.$$.fragment,S),y(q.$$.fragment,S),it=!0)},o(S){b(d.$$.fragment,S),b(M.$$.fragment,S),b(q.$$.fragment,S),it=!1},d(S){S&&(s(e),s(i),s(o),s(r),s(f),s(g),s(_),s(v),s(H),s(F),s(A),s(C),s(O),s(K),s(G),s(J),s(X),s(ht)),j(d,S),j(M,S),j(q,S)}}}function Rh(l){let e;return{c(){e=h("Lyapunov exponent")},l(t){e=c(t,"Lyapunov exponent")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Nh(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Dh(l){let e;return{c(){e=h("Lyapunov time")},l(t){e=c(t,"Lyapunov time")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Gh(l){let e,t,i,o,a,r="$\\lambda_{max}$",f,n,g="$0.8917$",_,d,v,M,H="$1.121s$",N,F,A;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[Rh]},$$scope:{ctx:l}}}),o=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Nh]},$$scope:{ctx:l}}}),v=new U({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[Dh]},$$scope:{ctx:l}}}),{c(){e=h(`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),k(t.$$.fragment),i=h(`.
			As reported in
			`),k(o.$$.fragment),a=h(", the Lyapunov exponent, "),f=h(r),n=h(`,
			for the Lorenz Attractor is approx. `),_=h(g),d=h(", and so the "),k(v.$$.fragment),M=h(` is approx.
			`),N=h(H),F=h(".")},l(C){e=c(C,`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),x(t.$$.fragment,C),i=c(C,`.
			As reported in
			`),x(o.$$.fragment,C),a=c(C,", the Lyapunov exponent, "),f=c(C,r),n=c(C,`,
			for the Lorenz Attractor is approx. `),_=c(C,g),d=c(C,", and so the "),x(v.$$.fragment,C),M=c(C,` is approx.
			`),N=c(C,H),F=c(C,".")},m(C,Z){u(C,e,Z),I(t,C,Z),u(C,i,Z),I(o,C,Z),u(C,a,Z),u(C,f,Z),u(C,n,Z),u(C,_,Z),u(C,d,Z),I(v,C,Z),u(C,M,Z),u(C,N,Z),u(C,F,Z),A=!0},p(C,Z){const O={};Z&1&&(O.$$scope={dirty:Z,ctx:C}),t.$set(O);const et={};Z&1&&(et.$$scope={dirty:Z,ctx:C}),o.$set(et);const K={};Z&1&&(K.$$scope={dirty:Z,ctx:C}),v.$set(K)},i(C){A||(y(t.$$.fragment,C),y(o.$$.fragment,C),y(v.$$.fragment,C),A=!0)},o(C){b(t.$$.fragment,C),b(o.$$.fragment,C),b(v.$$.fragment,C),A=!1},d(C){C&&(s(e),s(i),s(a),s(f),s(n),s(_),s(d),s(M),s(N),s(F)),j(t,C),j(o,C),j(v,C)}}}function qh(l){let e,t,i="on average",o,a="$e$",r,f,n="$1.121$",g,_,d="$\\frac{4}{3}$",v,M,H,N='<a href="#lyapunov">1</a>',F;return{c(){e=h("This tells us that, "),t=z("i"),t.textContent=i,o=h(`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=h(a),f=h(` after
			`),g=h(n),_=h(` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=h(d),M=h(`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),H=z("sup"),H.innerHTML=N,F=h(`, a
			defining feature of all chaotic systems.`)},l(A){e=c(A,"This tells us that, "),t=E(A,"I",{"data-svelte-h":!0}),V(t)!=="svelte-ggx8py"&&(t.textContent=i),o=c(A,`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=c(A,a),f=c(A,` after
			`),g=c(A,n),_=c(A,` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=c(A,d),M=c(A,`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),H=E(A,"SUP",{"data-svelte-h":!0}),V(H)!=="svelte-1b4twc5"&&(H.innerHTML=N),F=c(A,`, a
			defining feature of all chaotic systems.`)},m(A,C){u(A,e,C),u(A,t,C),u(A,o,C),u(A,r,C),u(A,f,C),u(A,g,C),u(A,_,C),u(A,v,C),u(A,M,C),u(A,H,C),u(A,F,C)},p:W,d(A){A&&(s(e),s(t),s(o),s(r),s(f),s(g),s(_),s(v),s(M),s(H),s(F))}}}function Fh(l){let e,t="$[-9.79, -15.04, 20.53]$",i,o,a="$[0.99,1.01]$",r,f;return{c(){e=h(`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=h(t),o=h(` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=h(a),f=h(".")},l(n){e=c(n,`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=c(n,t),o=c(n,` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=c(n,a),f=c(n,".")},m(n,g){u(n,e,g),u(n,i,g),u(n,o,g),u(n,r,g),u(n,f,g)},p:W,d(n){n&&(s(e),s(i),s(o),s(r),s(f))}}}function Zh(l){let e,t="$3*100 = 300$",i,o,a="$3 * (500 + 100) = 1800$",r,f;return{c(){e=h(`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=h(t),o=h(`, and each
			training sample's length is `),r=h(a),f=h(").")},l(n){e=c(n,`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=c(n,t),o=c(n,`, and each
			training sample's length is `),r=c(n,a),f=c(n,").")},m(n,g){u(n,e,g),u(n,i,g),u(n,o,g),u(n,r,g),u(n,f,g)},p:W,d(n){n&&(s(e),s(i),s(o),s(r),s(f))}}}function Vh(l){let e,t=`$10,000 - 600 +
		1 = 9401$`,i,o,a,r='<a href="#initial-conditions">2</a>',f;return{c(){e=h(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=h(t),o=h(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),a=z("sup"),a.innerHTML=r,f=h(".")},l(n){e=c(n,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=c(n,t),o=c(n,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),a=E(n,"SUP",{"data-svelte-h":!0}),V(a)!=="svelte-uv3gx8"&&(a.innerHTML=r),f=c(n,".")},m(n,g){u(n,e,g),u(n,i,g),u(n,o,g),u(n,a,g),u(n,f,g)},p:W,d(n){n&&(s(e),s(i),s(o),s(a),s(f))}}}function Bh(l){let e;return{c(){e=h("Model 1")},l(t){e=c(t,"Model 1")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Uh(l){let e;return{c(){e=h("The full set of N-HiTS hyperparameters for the first model configuration is:")},l(t){e=c(t,"The full set of N-HiTS hyperparameters for the first model configuration is:")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Wh(l){let e,t,i,o,a,r;return t=new Y({props:{id:"challu"}}),o=new Y({props:{id:"gilpin"}}),{c(){e=h("The model is optimized with MAE loss, consistent with the default loss from "),k(t.$$.fragment),i=h(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),k(o.$$.fragment),a=h(":")},l(f){e=c(f,"The model is optimized with MAE loss, consistent with the default loss from "),x(t.$$.fragment,f),i=c(f,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),x(o.$$.fragment,f),a=c(f,":")},m(f,n){u(f,e,n),I(t,f,n),u(f,i,n),I(o,f,n),u(f,a,n),r=!0},p:W,i(f){r||(y(t.$$.fragment,f),y(o.$$.fragment,f),r=!0)},o(f){b(t.$$.fragment,f),b(o.$$.fragment,f),r=!1},d(f){f&&(s(e),s(i),s(a)),j(t,f),j(o,f)}}}function Oh(l){let e;return{c(){e=h(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},l(t){e=c(t,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Kh(l){let e;return{c(){e=h("Model 1 - sMAPE error distribution on the test set")},l(t){e=c(t,"Model 1 - sMAPE error distribution on the test set")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Jh(l){let e;return{c(){e=h(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},l(t){e=c(t,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Xh(l){let e;return{c(){e=h(`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},l(t){e=c(t,`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Yh(l){let e;return{c(){e=h(`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},l(t){e=c(t,`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Qh(l){let e;return{c(){e=h(`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},l(t){e=c(t,`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function tc(l){let e;return{c(){e=h("critical points")},l(t){e=c(t,"critical points")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function ec(l){let e,t,i,o,a,r,f,n,g,_;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[tc]},$$scope:{ctx:l}}}),o=new Y({props:{id:"osinga"}}),r=new Y({props:{id:"osinga"}}),n=new Y({props:{id:"osinga"}}),{c(){e=h(`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),k(t.$$.fragment),i=h(` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),k(o.$$.fragment),a=h(` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),k(r.$$.fragment),f=h(`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),k(n.$$.fragment),g=h(`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},l(d){e=c(d,`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),x(t.$$.fragment,d),i=c(d,` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),x(o.$$.fragment,d),a=c(d,` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),x(r.$$.fragment,d),f=c(d,`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),x(n.$$.fragment,d),g=c(d,`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},m(d,v){u(d,e,v),I(t,d,v),u(d,i,v),I(o,d,v),u(d,a,v),I(r,d,v),u(d,f,v),I(n,d,v),u(d,g,v),_=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M)},i(d){_||(y(t.$$.fragment,d),y(o.$$.fragment,d),y(r.$$.fragment,d),y(n.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),b(o.$$.fragment,d),b(r.$$.fragment,d),b(n.$$.fragment,d),_=!1},d(d){d&&(s(e),s(i),s(a),s(f),s(g)),j(t,d),j(o,d),j(r,d),j(n,d)}}}function nc(l){let e;return{c(){e=h("Hartman-Grobman Theorem")},l(t){e=c(t,"Hartman-Grobman Theorem")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function ic(l){let e,t,i,o="$f(t) = \\exp(\\lambda t)x_0$",a,r,f="$\\lambda$",n,g,_="$x_0$",d,v,M="$\\approx 11.8$",H,N,F;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem",$$slots:{default:[nc]},$$scope:{ctx:l}}}),{c(){e=h(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),k(t.$$.fragment),i=h(`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),a=h(o),r=h(`,
			where `),n=h(f),g=h(" equals the eigenvalue and "),d=h(_),v=h(` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),H=h(M),N=h(`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},l(A){e=c(A,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),x(t.$$.fragment,A),i=c(A,`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),a=c(A,o),r=c(A,`,
			where `),n=c(A,f),g=c(A," equals the eigenvalue and "),d=c(A,_),v=c(A,` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),H=c(A,M),N=c(A,`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},m(A,C){u(A,e,C),I(t,A,C),u(A,i,C),u(A,a,C),u(A,r,C),u(A,n,C),u(A,g,C),u(A,d,C),u(A,v,C),u(A,H,C),u(A,N,C),F=!0},p(A,C){const Z={};C&1&&(Z.$$scope={dirty:C,ctx:A}),t.$set(Z)},i(A){F||(y(t.$$.fragment,A),F=!0)},o(A){b(t.$$.fragment,A),F=!1},d(A){A&&(s(e),s(i),s(a),s(r),s(n),s(g),s(d),s(v),s(H),s(N)),j(t,A)}}}function ac(l){let e;return{c(){e=h(`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},l(t){e=c(t,`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function oc(l){let e;return{c(){e=h(`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},l(t){e=c(t,`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function sc(l){let e;return{c(){e=h("Model 2")},l(t){e=c(t,"Model 2")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function rc(l){let e;return{c(){e=h(`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},l(t){e=c(t,`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function lc(l){let e;return{c(){e=h("Model 2 vs Model 1 - sMAPE error distribution.")},l(t){e=c(t,"Model 2 vs Model 1 - sMAPE error distribution.")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function hc(l){let e;return{c(){e=h(`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},l(t){e=c(t,`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function cc(l){let e;return{c(){e=h(`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},l(t){e=c(t,`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function fc(l){let e;return{c(){e=h("Model 2 - sMAPE errors per series per window in the test set.")},l(t){e=c(t,"Model 2 - sMAPE errors per series per window in the test set.")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function mc(l){let e;return{c(){e=h(`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},l(t){e=c(t,`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function uc(l){let e;return{c(){e=h(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},l(t){e=c(t,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function pc(l){let e;return{c(){e=h(`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},l(t){e=c(t,`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function dc(l){let e,t="$n$",i,o,a="$n-1$",r,f,n="$n+1$",g,_;return{c(){e=h(`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=h(t),o=h(`
				that is closer to the origin than the points at `),r=h(a),f=h(" and "),g=h(n),_=h(".")},l(d){e=c(d,`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=c(d,t),o=c(d,`
				that is closer to the origin than the points at `),r=c(d,a),f=c(d," and "),g=c(d,n),_=c(d,".")},m(d,v){u(d,e,v),u(d,i,v),u(d,o,v),u(d,r,v),u(d,f,v),u(d,g,v),u(d,_,v)},p:W,d(d){d&&(s(e),s(i),s(o),s(r),s(f),s(g),s(_))}}}function $c(l){let e;return{c(){e=h(`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},l(t){e=c(t,`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function gc(l){let e;return{c(){e=h("Model 3")},l(t){e=c(t,"Model 3")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function wc(l){let e;return{c(){e=h(`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},l(t){e=c(t,`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function vc(l){let e;return{c(){e=h("3.1: Biased Dataset Distribution")},l(t){e=c(t,"3.1: Biased Dataset Distribution")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function yc(l){let e;return{c(){e=h("Radau solver")},l(t){e=c(t,"Radau solver")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function bc(l){let e,t,i,o="$1\\mathrm{e}{30}$",a,r,f;return t=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[yc]},$$scope:{ctx:l}}}),{c(){e=h(`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. In all of my attempts using the `),k(t.$$.fragment),i=h(` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),a=h(o),r=h(`
			after about 0.5 seconds.`)},l(n){e=c(n,`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. In all of my attempts using the `),x(t.$$.fragment,n),i=c(n,` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),a=c(n,o),r=c(n,`
			after about 0.5 seconds.`)},m(n,g){u(n,e,g),I(t,n,g),u(n,i,g),u(n,a,g),u(n,r,g),f=!0},p(n,g){const _={};g&1&&(_.$$scope={dirty:g,ctx:n}),t.$set(_)},i(n){f||(y(t.$$.fragment,n),f=!0)},o(n){b(t.$$.fragment,n),f=!1},d(n){n&&(s(e),s(i),s(a),s(r)),j(t,n)}}}function _c(l){let e,t="$t \\to \\infty$",i,o,a,r="might",f,n,g="e.g.",_,d,v;return _=new Y({props:{id:"osinga"}}),{c(){e=h(`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=h(t),o=h(`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),a=z("i"),a.textContent=r,f=h(` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=z("i"),n.textContent=g,k(_.$$.fragment),d=h(`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},l(M){e=c(M,`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=c(M,t),o=c(M,`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),a=E(M,"I",{"data-svelte-h":!0}),V(a)!=="svelte-ah22qx"&&(a.textContent=r),f=c(M,` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=E(M,"I",{"data-svelte-h":!0}),V(n)!=="svelte-1yxphdm"&&(n.textContent=g),x(_.$$.fragment,M),d=c(M,`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},m(M,H){u(M,e,H),u(M,i,H),u(M,o,H),u(M,a,H),u(M,f,H),u(M,n,H),I(_,M,H),u(M,d,H),v=!0},p:W,i(M){v||(y(_.$$.fragment,M),v=!0)},o(M){b(_.$$.fragment,M),v=!1},d(M){M&&(s(e),s(i),s(o),s(a),s(f),s(n),s(d)),j(_,M)}}}function kc(l){let e,t="$\\lt{3}$",i,o;return{c(){e=h(`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=h(t),o=h(`
			by a factor of about 10, while the total number of windows is the same as before:`)},l(a){e=c(a,`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=c(a,t),o=c(a,`
			by a factor of about 10, while the total number of windows is the same as before:`)},m(a,r){u(a,e,r),u(a,i,r),u(a,o,r)},p:W,d(a){a&&(s(e),s(i),s(o))}}}function xc(l){let e;return{c(){e=h(`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},l(t){e=c(t,`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ic(l){let e;return{c(){e=h(`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},l(t){e=c(t,`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function jc(l){let e;return{c(){e=h(`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},l(t){e=c(t,`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Mc(l){let e;return{c(){e=h(`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive repair costs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},l(t){e=c(t,`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive repair costs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Tc(l){let e,t="$dt$",i;return{c(){e=h("3.2: Reduced "),i=h(t)},l(o){e=c(o,"3.2: Reduced "),i=c(o,t)},m(o,a){u(o,e,a),u(o,i,a)},p:W,d(o){o&&(s(e),s(i))}}}function Ac(l){let e,t="$dt$",i,o,a="$dt$",r,f,n="$\\approx0.015$",g,_,d="$\\approx0.003$",v,M,H="$\\approx1.5$",N,F,A="$2H$",C,Z,O="$5H$",et,K;return{c(){e=h("The next idea is to increase the temporal resolution of the model by using a smaller "),i=h(t),o=h(`
			to generate the data points. So far I've used a `),r=h(a),f=h(" of "),g=h(n),_=h(`. Here
			I'll try reducing that by a factor of 5 to `),v=h(d),M=h(`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),N=h(H),F=h(`
			seconds. From tuning, I found that an input size of `),C=h(A),Z=h(` performs just as well as an
			input size of `),et=h(O),K=h(`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},l(G){e=c(G,"The next idea is to increase the temporal resolution of the model by using a smaller "),i=c(G,t),o=c(G,`
			to generate the data points. So far I've used a `),r=c(G,a),f=c(G," of "),g=c(G,n),_=c(G,`. Here
			I'll try reducing that by a factor of 5 to `),v=c(G,d),M=c(G,`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),N=c(G,H),F=c(G,`
			seconds. From tuning, I found that an input size of `),C=c(G,A),Z=c(G,` performs just as well as an
			input size of `),et=c(G,O),K=c(G,`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},m(G,q){u(G,e,q),u(G,i,q),u(G,o,q),u(G,r,q),u(G,f,q),u(G,g,q),u(G,_,q),u(G,v,q),u(G,M,q),u(G,N,q),u(G,F,q),u(G,C,q),u(G,Z,q),u(G,et,q),u(G,K,q)},p:W,d(G){G&&(s(e),s(i),s(o),s(r),s(f),s(g),s(_),s(v),s(M),s(N),s(F),s(C),s(Z),s(et),s(K))}}}function zc(l){let e;return{c(){e=h("The new hyperparameters for Model 3.2 are:")},l(t){e=c(t,"The new hyperparameters for Model 3.2 are:")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ec(l){let e;return{c(){e=h("FSDP Strategy")},l(t){e=c(t,"FSDP Strategy")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Lc(l){let e,t="A sidenote on the practicality of training this model:",i,o,a,r;return o=new U({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[Ec]},$$scope:{ctx:l}}}),{c(){e=z("b"),e.textContent=t,i=h(`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),k(o.$$.fragment),a=h(` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},l(f){e=E(f,"B",{"data-svelte-h":!0}),V(e)!=="svelte-1vhs7sz"&&(e.textContent=t),i=c(f,`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),x(o.$$.fragment,f),a=c(f,` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},m(f,n){u(f,e,n),u(f,i,n),I(o,f,n),u(f,a,n),r=!0},p(f,n){const g={};n&1&&(g.$$scope={dirty:n,ctx:f}),o.$set(g)},i(f){r||(y(o.$$.fragment,f),r=!0)},o(f){b(o.$$.fragment,f),r=!1},d(f){f&&(s(e),s(i),s(a)),j(o,f)}}}function Pc(l){let e;return{c(){e=h(`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},l(t){e=c(t,`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Cc(l){let e;return{c(){e=h("Autoregressive Prediction")},l(t){e=c(t,"Autoregressive Prediction")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Hc(l){let e,t="$L$",i,o,a="$L$",r,f;return{c(){e=h(`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=h(t),o=h(`
			samples of the reference trajectory, where `),r=h(a),f=h(` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},l(n){e=c(n,`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=c(n,t),o=c(n,`
			samples of the reference trajectory, where `),r=c(n,a),f=c(n,` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},m(n,g){u(n,e,g),u(n,i,g),u(n,o,g),u(n,r,g),u(n,f,g)},p:W,d(n){n&&(s(e),s(i),s(o),s(r),s(f))}}}function Sc(l){let e;return{c(){e=h("shadowing lemma")},l(t){e=c(t,"shadowing lemma")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Rc(l){let e,t,i="i.e.",o,a,r,f,n="e.g.",g,_,d,v;return a=new U({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[Sc]},$$scope:{ctx:l}}}),_=new Y({props:{id:"chandramoorthy"}}),{c(){e=h(`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=z("i"),t.textContent=i,o=h(` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),k(a.$$.fragment),r=h(` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),f=z("i"),f.textContent=n,g=L(),k(_.$$.fragment),d=h(`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},l(M){e=c(M,`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=E(M,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1xx6z5c"&&(t.textContent=i),o=c(M,` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),x(a.$$.fragment,M),r=c(M,` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),f=E(M,"I",{"data-svelte-h":!0}),V(f)!=="svelte-1yxphdm"&&(f.textContent=n),g=P(M),x(_.$$.fragment,M),d=c(M,`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},m(M,H){u(M,e,H),u(M,t,H),u(M,o,H),I(a,M,H),u(M,r,H),u(M,f,H),u(M,g,H),I(_,M,H),u(M,d,H),v=!0},p(M,H){const N={};H&1&&(N.$$scope={dirty:H,ctx:M}),a.$set(N)},i(M){v||(y(a.$$.fragment,M),y(_.$$.fragment,M),v=!0)},o(M){b(a.$$.fragment,M),b(_.$$.fragment,M),v=!1},d(M){M&&(s(e),s(t),s(o),s(r),s(f),s(g),s(d)),j(a,M),j(_,M)}}}function Nc(l){let e,t,i,o;return t=new Y({props:{id:"chandramoorthy"}}),{c(){e=h(`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),k(t.$$.fragment),i=h(`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},l(a){e=c(a,`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),x(t.$$.fragment,a),i=c(a,`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},m(a,r){u(a,e,r),I(t,a,r),u(a,i,r),o=!0},p:W,i(a){o||(y(t.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),o=!1},d(a){a&&(s(e),s(i)),j(t,a)}}}function Dc(l){let e;return{c(){e=h("Radau")},l(t){e=c(t,"Radau")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Gc(l){let e;return{c(){e=h(`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},l(t){e=c(t,`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function qc(l){let e;return{c(){e=h(`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},l(t){e=c(t,`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Fc(l){let e;return{c(){e=h(`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},l(t){e=c(t,`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Zc(l){let e;return{c(){e=h(`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},l(t){e=c(t,`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Vc(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Bc(l){let e;return{c(){e=h("Radau")},l(t){e=c(t,"Radau")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Uc(l){let e;return{c(){e=h("RK45")},l(t){e=c(t,"RK45")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Wc(l){let e,t,i,o,a,r,f,n;return t=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Vc]},$$scope:{ctx:l}}}),o=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Bc]},$$scope:{ctx:l}}}),r=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[Uc]},$$scope:{ctx:l}}}),{c(){e=h(`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),k(t.$$.fragment),i=h(" uses the "),k(o.$$.fragment),a=h(" solver by default, and this is what I used to generate the dataset. "),k(r.$$.fragment),f=h(` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},l(g){e=c(g,`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),x(t.$$.fragment,g),i=c(g," uses the "),x(o.$$.fragment,g),a=c(g," solver by default, and this is what I used to generate the dataset. "),x(r.$$.fragment,g),f=c(g,` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},m(g,_){u(g,e,_),I(t,g,_),u(g,i,_),I(o,g,_),u(g,a,_),I(r,g,_),u(g,f,_),n=!0},p(g,_){const d={};_&1&&(d.$$scope={dirty:_,ctx:g}),t.$set(d);const v={};_&1&&(v.$$scope={dirty:_,ctx:g}),o.$set(v);const M={};_&1&&(M.$$scope={dirty:_,ctx:g}),r.$set(M)},i(g){n||(y(t.$$.fragment,g),y(o.$$.fragment,g),y(r.$$.fragment,g),n=!0)},o(g){b(t.$$.fragment,g),b(o.$$.fragment,g),b(r.$$.fragment,g),n=!1},d(g){g&&(s(e),s(i),s(a),s(f)),j(t,g),j(o,g),j(r,g)}}}function Oc(l){let e;return{c(){e=h("solve_ivp")},l(t){e=c(t,"solve_ivp")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Kc(l){let e,t,i,o;return t=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[Oc]},$$scope:{ctx:l}}}),{c(){e=h(`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),k(t.$$.fragment),i=h(" is used to produce the IVP solver outputs.")},l(a){e=c(a,`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),x(t.$$.fragment,a),i=c(a," is used to produce the IVP solver outputs.")},m(a,r){u(a,e,r),I(t,a,r),u(a,i,r),o=!0},p(a,r){const f={};r&1&&(f.$$scope={dirty:r,ctx:a}),t.$set(f)},i(a){o||(y(t.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),o=!1},d(a){a&&(s(e),s(i)),j(t,a)}}}function Jc(l){let e;return{c(){e=h(`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},l(t){e=c(t,`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Xc(l){let e;return{c(){e=h("Discussion")},l(t){e=c(t,"Discussion")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Yc(l){let e,t,i,o="$2H$",a,r,f="$H$",n,g,_;return t=new Y({props:{id:"challu"}}),{c(){e=h("This project has probed the potential of the NHiTS neural architecture ("),k(t.$$.fragment),i=h(`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),a=h(o),r=h(`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=h(f),g=h(` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},l(d){e=c(d,"This project has probed the potential of the NHiTS neural architecture ("),x(t.$$.fragment,d),i=c(d,`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),a=c(d,o),r=c(d,`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=c(d,f),g=c(d,` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},m(d,v){u(d,e,v),I(t,d,v),u(d,i,v),u(d,a,v),u(d,r,v),u(d,n,v),u(d,g,v),_=!0},p:W,i(d){_||(y(t.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),_=!1},d(d){d&&(s(e),s(i),s(a),s(r),s(n),s(g)),j(t,d)}}}function Qc(l){let e;return{c(){e=h(`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},l(t){e=c(t,`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function tf(l){let e;return{c(){e=h(`As already mentioned, it is well understood from dynamical systems theory that the
			saddle point at the origin of the Lorenz Attractor consists of a stable 2-d manifold and
			a highly unstable 1-d manifold. What this study suggests, and what is possibly not as
			well established, is that the predictability of the Lorenz Attractor largely depends on
			the trajectory's proximity to the origin. Trajectories on the attractor that remain
			sufficiently far from the origin are easily forecast by the model with high
			accuracy—including the transitions between the orbits around each of the two
			non-origin fixed points. But as trajectories approach the origin, and their velocities
			approach zero, they become asymptotically less predictable in the time period
			immediately before and after their transit past the origin (as the minimum distance to
			the origin decreases, this time period also increases). Fortunately, such trajectories
			appear to occur quite rarely on the attractor; in my experiments, when initial
			conditions are selected randomly from a point within the attractor volume, the
			trajectory has about a 1% chance of passing within a Euclidean distance of 3 or less
			from the origin within its first 150 seconds.
		`)},l(t){e=c(t,`As already mentioned, it is well understood from dynamical systems theory that the
			saddle point at the origin of the Lorenz Attractor consists of a stable 2-d manifold and
			a highly unstable 1-d manifold. What this study suggests, and what is possibly not as
			well established, is that the predictability of the Lorenz Attractor largely depends on
			the trajectory's proximity to the origin. Trajectories on the attractor that remain
			sufficiently far from the origin are easily forecast by the model with high
			accuracy—including the transitions between the orbits around each of the two
			non-origin fixed points. But as trajectories approach the origin, and their velocities
			approach zero, they become asymptotically less predictable in the time period
			immediately before and after their transit past the origin (as the minimum distance to
			the origin decreases, this time period also increases). Fortunately, such trajectories
			appear to occur quite rarely on the attractor; in my experiments, when initial
			conditions are selected randomly from a point within the attractor volume, the
			trajectory has about a 1% chance of passing within a Euclidean distance of 3 or less
			from the origin within its first 150 seconds.
		`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function ef(l){let e,t,i=`a trajectory having a local maximum Z coordinate in the range of 38.45 to 38.6 is a
				necessary condition for the model's sMAPE error to exceed 5`,o,a,r='<a href="#outliers">1</a>',f;return{c(){e=h(`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately 38.55. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3, `),t=z("i"),t.textContent=i,o=h(`
			in the time period immediately following its transit past the origin`),a=z("sup"),a.innerHTML=r,f=h(".")},l(n){e=c(n,`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately 38.55. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3, `),t=E(n,"I",{"data-svelte-h":!0}),V(t)!=="svelte-71x0js"&&(t.textContent=i),o=c(n,`
			in the time period immediately following its transit past the origin`),a=E(n,"SUP",{"data-svelte-h":!0}),V(a)!=="svelte-o9bswn"&&(a.innerHTML=r),f=c(n,".")},m(n,g){u(n,e,g),u(n,t,g),u(n,o,g),u(n,a,g),u(n,f,g)},p:W,d(n){n&&(s(e),s(t),s(o),s(a),s(f))}}}function nf(l){let e,t,i="minimum",o;return{c(){e=h(`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=z("i"),t.textContent=i,o=h(`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of 38.45 to 38.6.`)},l(a){e=c(a,`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=E(a,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1c66z6u"&&(t.textContent=i),o=c(a,`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of 38.45 to 38.6.`)},m(a,r){u(a,e,r),u(a,t,r),u(a,o,r)},p:W,d(a){a&&(s(e),s(t),s(o))}}}function af(l){let e,t,i="indefinitely",o,a="$\\approx$",r,f;return{c(){e=h(`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is somehow associated with a single scalar value on
			the Z axis, near 38.55. As long as the local maximum Z coordinate of a trajectory in
			orbit around one of the two non-origin fixed points does not pass through a narrow
			interval around this value, we can be certain (according to the statistics of all of the
			test sets in this study) that the model will forecast the trajectory with a sMAPE error
			less than 5 `),t=z("i"),t.textContent=i,o=h(`. If a trajectory's peak Z coordinate does pass through
			this interval, then the model has a roughly 60% chance of exhibiting a sMAPE error
			greater than 5 in the period immediately following the peak, until the next peak Z
			coordinate is reached. An obvious next question to ask is, how do we exploit this
			observation to improve predictability? If the system were augmented with a control input
			of some sort, then the target for that control could be to perturb the trajectories so
			that they avoid passing through this critical region around Z `),r=h(a),f=h(` 38.55. The results
			of this study suggest that this alone might make the Lorenz Attractor dynamics entirely predictable.`)},l(n){e=c(n,`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is somehow associated with a single scalar value on
			the Z axis, near 38.55. As long as the local maximum Z coordinate of a trajectory in
			orbit around one of the two non-origin fixed points does not pass through a narrow
			interval around this value, we can be certain (according to the statistics of all of the
			test sets in this study) that the model will forecast the trajectory with a sMAPE error
			less than 5 `),t=E(n,"I",{"data-svelte-h":!0}),V(t)!=="svelte-wq20c"&&(t.textContent=i),o=c(n,`. If a trajectory's peak Z coordinate does pass through
			this interval, then the model has a roughly 60% chance of exhibiting a sMAPE error
			greater than 5 in the period immediately following the peak, until the next peak Z
			coordinate is reached. An obvious next question to ask is, how do we exploit this
			observation to improve predictability? If the system were augmented with a control input
			of some sort, then the target for that control could be to perturb the trajectories so
			that they avoid passing through this critical region around Z `),r=c(n,a),f=c(n,` 38.55. The results
			of this study suggest that this alone might make the Lorenz Attractor dynamics entirely predictable.`)},m(n,g){u(n,e,g),u(n,t,g),u(n,o,g),u(n,r,g),u(n,f,g)},p:W,d(n){n&&(s(e),s(t),s(o),s(r),s(f))}}}function of(l){let e;return{c(){e=h(`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},l(t){e=c(t,`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function sf(l){let e;return{c(){e=h("shadowing lemma")},l(t){e=c(t,"shadowing lemma")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function rf(l){let e,t,i,o,a,r,f="IVP solver",n,g,_,d;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[sf]},$$scope:{ctx:l}}}),o=new Y({props:{id:"chandramoorthy"}}),g=new Y({props:{id:"chandramoorthy"}}),{c(){e=h("In closing, I will return to the implications of the "),k(t.$$.fragment),i=h(" and research such as "),k(o.$$.fragment),a=h(` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),r=z("i"),r.textContent=f,n=h(`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),k(g.$$.fragment),_=h(` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},l(v){e=c(v,"In closing, I will return to the implications of the "),x(t.$$.fragment,v),i=c(v," and research such as "),x(o.$$.fragment,v),a=c(v,` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),r=E(v,"I",{"data-svelte-h":!0}),V(r)!=="svelte-17gf2g4"&&(r.textContent=f),n=c(v,`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),x(g.$$.fragment,v),_=c(v,` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},m(v,M){u(v,e,M),I(t,v,M),u(v,i,M),I(o,v,M),u(v,a,M),u(v,r,M),u(v,n,M),I(g,v,M),u(v,_,M),d=!0},p(v,M){const H={};M&1&&(H.$$scope={dirty:M,ctx:v}),t.$set(H)},i(v){d||(y(t.$$.fragment,v),y(o.$$.fragment,v),y(g.$$.fragment,v),d=!0)},o(v){b(t.$$.fragment,v),b(o.$$.fragment,v),b(g.$$.fragment,v),d=!1},d(v){v&&(s(e),s(i),s(a),s(r),s(n),s(_)),j(t,v),j(o,v),j(g,v)}}}function lf(l){let e;return{c(){e=h("References")},l(t){e=c(t,"References")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function hf(l){let e,t,i,o,a,r,f,n,g,_,d,v,M="Michael Horgan",H,N,F="michaelghorgan at gmail",A,C,Z,O,et,K,G,q,J,Q,X,ht,it,S,B="$2H$",oi,si,Ei="$H$",ea,na,Es="$H$",ia,aa,Ls="$dt \\approx 0.015$",oa,sa,ra,hn,la,Ps="$\\lt \\approx 5$",ha,ca,fa,ct,ma,Cs="$38.45$",ua,pa,Hs="$38.6$",da,$a,wt,ga,wa,vt,va,yt,bt,_t,ya,mt,Li,cn,ba,kt,_a,ri,Ss=`<sup id="paperspace">2. All of my experiments were run on a Paperspace VM using two RTX 5000s, each
					with 16 GB of RAM.</sup>`,ka,Pi,xt,xa,It,Ia,ja,jt,Ma,Mt,Ta,li,fn,mn,Tt,Rs,Aa,At,za,zt,Ea,hi,Ci,Ns=Wl+"",La,Pa,Et,Ca,ci,Hi,Ds=Ol+"",Ha,Sa,Lt,Pt,Ra,Ct,Na,Ht,Da,St,Ga,Rt,qa,Nt,Fa,Dt,Gt,qt,Ft,Za,fi,Si,Gs=Kl+"",Va,Ba,Zt,Ua,Vt,Wa,Bt,Oa,Ut,Ka,un,qs=`<p><sup id="lyapunov">1. Although initially the distance will grow exponentially, the maximum
					separation between trajectories is also bounded by the fact that all
					trajectories remain on the attractor.</sup></p> <p><sup id="initial-conditions">2. In the course of this project, I experimented with several different methods
					for generating trajectories, but I still have some open questions about the best
					way to generate a dataset that effectively samples the phase space, <i>e.g.</i> how
					to choose the initial conditions, how to choose the number of unique initial conditions
					vs. to the total trajectory length, etc.</sup></p>`,Ja,Wt,Xa,Ot,Ya,pn,Qa,Kt,to,Ri,Fs=Jl+"",eo,no,Jt,io,Xt,dn,Zs,ao,Yt,oo,Qt,so,te,$n,Vs=`<img class="object-contain max-w-80" src="${`${tt}/Model1SmallErr.png`}" alt="Model 1 - small error example"/> <img class="object-contain max-w-80" src="${`${tt}/Model1MediumErr.png`}" alt="Model 1 - medium error example"/> <img class="object-contain max-w-80" src="${`${tt}/Model1LargeErr.png`}" alt="Model 1 - large error example"/>`,ro,ee,lo,ne,ho,ie,gn,Bs,co,ae,fo,oe,se,mo,re,ut,Us,uo,le,po,he,$o,ce,go,fe,wo,wn,vo,vn,Ws=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
			increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of
			the network, and I've also significantly increased the amount of compression in the
			initial stacks. Because the network is much deeper, I also added layer normalization
			after each block to try to help reduce convergence time. Lastly, I increased the number
			of training steps and reduced the initial learning rate by an order of magnitude, and I
			modified the learning rate schedule to reduce by half whenever the validation loss does
			not decrease from the previous validation step.`,yo,yn,bn,Os,me,bo,ue,pe,_o,_n,kn,Ks,de,ko,$e,xo,ge,xn,Js,Io,we,jo,ve,Mo,In,jn,Xs,ye,To,be,Ao,_e,zo,ke,Eo,xe,Lo,Ie,je,Me,Po,Mn,Tn,Ys,Te,Co,An,Ho,Qs="$\\le{5}$",So,Ro,No,Ae,Do,zn,En,tr,ze,Go,Ee,qo,Le,Fo,Pe,Zo,Ce,Vo,Ln,Bo,He,Uo,Se,Wo,er="$dt \\approx 0.003$",Oo,Ko,Jo,Pn,Cn,nr,Re,Xo,mi,ir=`Here again we see a very marginal improvement but no clear evidence that this approach
			may lead to a fully stable model (<i>i.e.</i> one without an asymptotic error curve). Reducing
			the temporal resolution of the model further will drastically increase the computational
			requirements of training, which are beyond my budget, so I must conclude this avenue of investigation
			here.`,Yo,Ne,Qo,De,Ge,qe,ar=Xl+"",ts,es,Hn,ns,Fe,is,as,Sn,Rn,or,Ze,os,pt,ss,sr="$z \\approx 0.4$",rs,ls,rr="$z \\approx 1.35$",hs,cs,fs,Ve,ms,Nn,Dn,lr,Be,us,ui,hr=`However, if we search for the model trajectories that pass closest to the origin, we
			find examples where the model output breaks down badly:`,ps,Gn,qn,cr,Ue,ds,We,$s,Oe,Fn,fr,gs,Ke,ws,Je,vs,Xe,ys,Ye,Qe,tn,en,bs,nn,Zn,mr=`<img class="object-contain w-full max-w-xl" src="${`${tt}/max_z.png`}" alt="Model 3 - maxium Z coordinate error distribution"/> <img class="object-contain w-full max-w-xl" src="${`${tt}/max_z_zoomed.png`}" alt="maximum Z coordinate error distribution zoomed"/>`,_s,an,ks,on,xs,sn,Is,rn,js,Vn,ur=`<p><sup id="outliers">1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose <i>second-to-last</i>
					local maximum Z coordinate passes through the 38.55 boundary region, and whose associated
					local minimum point is so small—0.49, the smallest encountered in all of the
					training sets that were generated for this study—that the highly unstable conditions
					in the region adversely affect not only the prediction accuracy when the local minimum
					is within the horizon window, but also when it is within the input window of the
					model.</sup></p>`,Ms,ln,Ts,Bn,Yi;return e=new Ul({}),i=new nh({}),r=new Vl({}),K=new U({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[ih]},$$scope:{ctx:l}}}),q=new ji({props:{id:"tldr",$$slots:{default:[ah]},$$scope:{ctx:l}}}),it=new Y({props:{id:"challu"}}),wt=new U({props:{href:"https://en.wikipedia.org/wiki/Symmetric_mean_absolute_percentage_error",$$slots:{default:[oh]},$$scope:{ctx:l}}}),vt=new Ii({props:{id:"intro",$$slots:{default:[sh]},$$scope:{ctx:l}}}),yt=new D({props:{$$slots:{default:[rh]},$$scope:{ctx:l}}}),bt=new D({props:{$$slots:{default:[lh]},$$scope:{ctx:l}}}),_t=new D({props:{$$slots:{default:[hh]},$$scope:{ctx:l}}}),kt=new U({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[ch]},$$scope:{ctx:l}}}),It=new U({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[fh]},$$scope:{ctx:l}}}),jt=new Ii({props:{id:"lorenz",$$slots:{default:[mh]},$$scope:{ctx:l}}}),Mt=new D({props:{$$slots:{default:[$h]},$$scope:{ctx:l}}}),At=new nt({props:{$$slots:{default:[gh]},$$scope:{ctx:l}}}),zt=new D({props:{$$slots:{default:[wh]},$$scope:{ctx:l}}}),Et=new D({props:{$$slots:{default:[bh]},$$scope:{ctx:l}}}),Lt=new D({props:{$$slots:{default:[kh]},$$scope:{ctx:l}}}),Pt=new D({props:{$$slots:{default:[Ih]},$$scope:{ctx:l}}}),Ct=new Ii({props:{id:"nhits",$$slots:{default:[jh]},$$scope:{ctx:l}}}),Ht=new D({props:{$$slots:{default:[Mh]},$$scope:{ctx:l}}}),St=new D({props:{$$slots:{default:[Th]},$$scope:{ctx:l}}}),Rt=new D({props:{$$slots:{default:[Ah]},$$scope:{ctx:l}}}),Nt=new Ii({props:{id:"experiments",$$slots:{default:[zh]},$$scope:{ctx:l}}}),Dt=new D({props:{$$slots:{default:[Eh]},$$scope:{ctx:l}}}),Gt=new ji({props:{id:"datagen",$$slots:{default:[Lh]},$$scope:{ctx:l}}}),qt=new D({props:{$$slots:{default:[Sh]},$$scope:{ctx:l}}}),Ft=new D({props:{$$slots:{default:[Gh]},$$scope:{ctx:l}}}),Zt=new D({props:{indent:"indent-0",$$slots:{default:[qh]},$$scope:{ctx:l}}}),Vt=new D({props:{$$slots:{default:[Fh]},$$scope:{ctx:l}}}),Bt=new D({props:{indent:"indent-0",$$slots:{default:[Zh]},$$scope:{ctx:l}}}),Ut=new D({props:{$$slots:{default:[Vh]},$$scope:{ctx:l}}}),Wt=new ji({props:{id:"model-1",$$slots:{default:[Bh]},$$scope:{ctx:l}}}),Ot=new D({props:{$$slots:{default:[Uh]},$$scope:{ctx:l}}}),pn=new As({props:{hps:Yl}}),Kt=new D({props:{indent:"indent-0",$$slots:{default:[Wh]},$$scope:{ctx:l}}}),Jt=new D({props:{$$slots:{default:[Oh]},$$scope:{ctx:l}}}),Yt=new nt({props:{$$slots:{default:[Kh]},$$scope:{ctx:l}}}),Qt=new D({props:{$$slots:{default:[Jh]},$$scope:{ctx:l}}}),ee=new nt({props:{$$slots:{default:[Xh]},$$scope:{ctx:l}}}),ne=new D({props:{$$slots:{default:[Yh]},$$scope:{ctx:l}}}),ae=new nt({props:{$$slots:{default:[Qh]},$$scope:{ctx:l}}}),oe=new D({props:{$$slots:{default:[ec]},$$scope:{ctx:l}}}),se=new D({props:{$$slots:{default:[ic]},$$scope:{ctx:l}}}),le=new nt({props:{$$slots:{default:[ac]},$$scope:{ctx:l}}}),he=new D({props:{$$slots:{default:[oc]},$$scope:{ctx:l}}}),ce=new ji({props:{id:"model-2",$$slots:{default:[sc]},$$scope:{ctx:l}}}),fe=new D({props:{$$slots:{default:[rc]},$$scope:{ctx:l}}}),wn=new As({props:{hps:Ql}}),me=new nt({props:{$$slots:{default:[lc]},$$scope:{ctx:l}}}),ue=new D({props:{$$slots:{default:[hc]},$$scope:{ctx:l}}}),pe=new D({props:{$$slots:{default:[cc]},$$scope:{ctx:l}}}),de=new nt({props:{$$slots:{default:[fc]},$$scope:{ctx:l}}}),$e=new D({props:{$$slots:{default:[mc]},$$scope:{ctx:l}}}),we=new nt({props:{$$slots:{default:[uc]},$$scope:{ctx:l}}}),ve=new D({props:{$$slots:{default:[pc]},$$scope:{ctx:l}}}),ye=new nt({props:{$$slots:{default:[dc]},$$scope:{ctx:l}}}),be=new D({props:{$$slots:{default:[$c]},$$scope:{ctx:l}}}),_e=new ji({props:{id:"model-3",$$slots:{default:[gc]},$$scope:{ctx:l}}}),ke=new D({props:{$$slots:{default:[wc]},$$scope:{ctx:l}}}),xe=new cl({props:{$$slots:{default:[vc]},$$scope:{ctx:l}}}),Ie=new D({props:{$$slots:{default:[bc]},$$scope:{ctx:l}}}),je=new D({props:{$$slots:{default:[_c]},$$scope:{ctx:l}}}),Me=new D({props:{$$slots:{default:[kc]},$$scope:{ctx:l}}}),Te=new nt({props:{$$slots:{default:[xc]},$$scope:{ctx:l}}}),Ae=new D({props:{$$slots:{default:[Ic]},$$scope:{ctx:l}}}),ze=new nt({props:{$$slots:{default:[jc]},$$scope:{ctx:l}}}),Ee=new D({props:{$$slots:{default:[Mc]},$$scope:{ctx:l}}}),Le=new cl({props:{$$slots:{default:[Tc]},$$scope:{ctx:l}}}),Pe=new D({props:{$$slots:{default:[Ac]},$$scope:{ctx:l}}}),Ce=new D({props:{$$slots:{default:[zc]},$$scope:{ctx:l}}}),Ln=new As({props:{hps:th}}),He=new D({props:{style:"my-4 text-sm font-serif",$$slots:{default:[Lc]},$$scope:{ctx:l}}}),Re=new nt({props:{$$slots:{default:[Pc]},$$scope:{ctx:l}}}),Ne=new ji({props:{id:"arpred",$$slots:{default:[Cc]},$$scope:{ctx:l}}}),De=new D({props:{$$slots:{default:[Hc]},$$scope:{ctx:l}}}),Ge=new D({props:{$$slots:{default:[Rc]},$$scope:{ctx:l}}}),qe=new D({props:{$$slots:{default:[Nc]},$$scope:{ctx:l}}}),Fe=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Dc]},$$scope:{ctx:l}}}),Ze=new nt({props:{$$slots:{default:[Gc]},$$scope:{ctx:l}}}),Ve=new D({props:{$$slots:{default:[qc]},$$scope:{ctx:l}}}),Be=new nt({props:{$$slots:{default:[Fc]},$$scope:{ctx:l}}}),Ue=new nt({props:{$$slots:{default:[Zc]},$$scope:{ctx:l}}}),We=new D({props:{$$slots:{default:[Wc]},$$scope:{ctx:l}}}),Ke=new nt({props:{$$slots:{default:[Kc]},$$scope:{ctx:l}}}),Je=new D({props:{$$slots:{default:[Jc]},$$scope:{ctx:l}}}),Xe=new Ii({props:{id:"discussion",$$slots:{default:[Xc]},$$scope:{ctx:l}}}),Ye=new D({props:{$$slots:{default:[Yc]},$$scope:{ctx:l}}}),Qe=new D({props:{$$slots:{default:[Qc]},$$scope:{ctx:l}}}),tn=new D({props:{$$slots:{default:[tf]},$$scope:{ctx:l}}}),en=new D({props:{$$slots:{default:[ef]},$$scope:{ctx:l}}}),an=new nt({props:{$$slots:{default:[nf]},$$scope:{ctx:l}}}),on=new D({props:{$$slots:{default:[af]},$$scope:{ctx:l}}}),sn=new D({props:{$$slots:{default:[of]},$$scope:{ctx:l}}}),rn=new D({props:{$$slots:{default:[rf]},$$scope:{ctx:l}}}),ln=new Ii({props:{id:"references",$$slots:{default:[lf]},$$scope:{ctx:l}}}),Bn=new Il({}),{c(){k(e.$$.fragment),t=L(),k(i.$$.fragment),o=L(),a=z("div"),k(r.$$.fragment),f=L(),n=z("div"),g=z("div"),_=h(Xi),d=L(),v=z("div"),v.textContent=M,H=L(),N=z("div"),N.textContent=F,A=L(),C=z("br"),Z=L(),O=z("div"),et=h("All code used in this project is available in the github repo: "),k(K.$$.fragment),G=L(),k(q.$$.fragment),J=L(),Q=z("ul"),X=z("li"),ht=h("This project explores the use of the NHiTS "),k(it.$$.fragment),S=h(` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),oi=h(B),si=h(` points of input, the model is trained
				to predict the next `),ea=h(Ei),na=h(" points of the trajectory, where "),ia=h(Es),aa=h(` is usually 100 and
				`),oa=h(Ls),sa=h("."),ra=L(),hn=z("li"),la=h(`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),ha=h(Ps),ca=h(`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),fa=L(),ct=z("li"),ma=h(`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),ua=h(Cs),pa=h(" to "),da=h(Hs),$a=h(`. Trajectories
				that meet this criteria have a roughly 60% chance of exhibiting a `),k(wt.$$.fragment),ga=h(` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),wa=L(),k(vt.$$.fragment),va=L(),k(yt.$$.fragment),k(bt.$$.fragment),k(_t.$$.fragment),ya=L(),mt=z("div"),Li=z("p"),cn=z("sup"),ba=h(`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),k(kt.$$.fragment),_a=L(),ri=z("p"),ri.innerHTML=Ss,ka=L(),Pi=z("p"),xt=z("sup"),xa=h(`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),k(It.$$.fragment),Ia=h(" on the subject"),ja=L(),k(jt.$$.fragment),Ma=L(),k(Mt.$$.fragment),Ta=L(),li=z("div"),fn=z("a"),mn=z("figure"),Tt=z("img"),Aa=L(),k(At.$$.fragment),za=L(),k(zt.$$.fragment),Ea=L(),hi=z("div"),Ci=z("p"),La=h(Ns),Pa=L(),k(Et.$$.fragment),Ca=L(),ci=z("div"),Hi=z("p"),Ha=h(Ds),Sa=L(),k(Lt.$$.fragment),k(Pt.$$.fragment),Ra=L(),k(Ct.$$.fragment),Na=L(),k(Ht.$$.fragment),Da=L(),k(St.$$.fragment),Ga=L(),k(Rt.$$.fragment),qa=L(),k(Nt.$$.fragment),Fa=L(),k(Dt.$$.fragment),k(Gt.$$.fragment),k(qt.$$.fragment),k(Ft.$$.fragment),Za=L(),fi=z("div"),Si=z("p"),Va=h(Gs),Ba=L(),k(Zt.$$.fragment),Ua=L(),k(Vt.$$.fragment),Wa=L(),k(Bt.$$.fragment),Oa=L(),k(Ut.$$.fragment),Ka=L(),un=z("div"),un.innerHTML=qs,Ja=L(),k(Wt.$$.fragment),Xa=L(),k(Ot.$$.fragment),Ya=L(),k(pn.$$.fragment),Qa=L(),k(Kt.$$.fragment),to=L(),Ri=z("div"),eo=h(Fs),no=L(),k(Jt.$$.fragment),io=L(),Xt=z("figure"),dn=z("img"),ao=L(),k(Yt.$$.fragment),oo=L(),k(Qt.$$.fragment),so=L(),te=z("figure"),$n=z("div"),$n.innerHTML=Vs,ro=L(),k(ee.$$.fragment),lo=L(),k(ne.$$.fragment),ho=L(),ie=z("figure"),gn=z("img"),co=L(),k(ae.$$.fragment),fo=L(),k(oe.$$.fragment),k(se.$$.fragment),mo=L(),re=z("figure"),ut=z("img"),uo=L(),k(le.$$.fragment),po=L(),k(he.$$.fragment),$o=L(),k(ce.$$.fragment),go=L(),k(fe.$$.fragment),wo=L(),k(wn.$$.fragment),vo=L(),vn=z("p"),vn.textContent=Ws,yo=L(),yn=z("figure"),bn=z("img"),k(me.$$.fragment),bo=L(),k(ue.$$.fragment),k(pe.$$.fragment),_o=L(),_n=z("figure"),kn=z("img"),k(de.$$.fragment),ko=L(),k($e.$$.fragment),xo=L(),ge=z("figure"),xn=z("img"),Io=L(),k(we.$$.fragment),jo=L(),k(ve.$$.fragment),Mo=L(),In=z("figure"),jn=z("img"),k(ye.$$.fragment),To=L(),k(be.$$.fragment),Ao=L(),k(_e.$$.fragment),zo=L(),k(ke.$$.fragment),Eo=L(),k(xe.$$.fragment),Lo=L(),k(Ie.$$.fragment),k(je.$$.fragment),k(Me.$$.fragment),Po=L(),Mn=z("figure"),Tn=z("img"),k(Te.$$.fragment),Co=L(),An=z("p"),Ho=h("Still, with these 10x increases, the trajectories that pass within an L2 distance "),So=h(Qs),Ro=h(`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),No=L(),k(Ae.$$.fragment),Do=L(),zn=z("figure"),En=z("img"),k(ze.$$.fragment),Go=L(),k(Ee.$$.fragment),qo=L(),k(Le.$$.fragment),Fo=L(),k(Pe.$$.fragment),Zo=L(),k(Ce.$$.fragment),Vo=L(),k(Ln.$$.fragment),Bo=L(),k(He.$$.fragment),Uo=L(),Se=z("p"),Wo=h("After retraining with "),Oo=h(er),Ko=h(`, we again see a very slight improvement
			over the previous models:`),Jo=L(),Pn=z("figure"),Cn=z("img"),k(Re.$$.fragment),Xo=L(),mi=z("p"),mi.innerHTML=ir,Yo=L(),k(Ne.$$.fragment),Qo=L(),k(De.$$.fragment),k(Ge.$$.fragment),k(qe.$$.fragment),ts=h(ar),es=L(),Hn=z("p"),ns=h("Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),k(Fe.$$.fragment),is=h(" solver's outputs:"),as=L(),Sn=z("figure"),Rn=z("img"),k(Ze.$$.fragment),os=L(),pt=z("p"),ss=h(`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),rs=h(sr),ls=h(" for the solver compared to "),hs=h(rr),cs=h(`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),fs=L(),k(Ve.$$.fragment),ms=L(),Nn=z("figure"),Dn=z("img"),k(Be.$$.fragment),us=L(),ui=z("p"),ui.textContent=hr,ps=L(),Gn=z("figure"),qn=z("img"),k(Ue.$$.fragment),ds=L(),k(We.$$.fragment),$s=L(),Oe=z("figure"),Fn=z("img"),gs=L(),k(Ke.$$.fragment),ws=L(),k(Je.$$.fragment),vs=L(),k(Xe.$$.fragment),ys=L(),k(Ye.$$.fragment),k(Qe.$$.fragment),k(tn.$$.fragment),k(en.$$.fragment),bs=L(),nn=z("figure"),Zn=z("div"),Zn.innerHTML=mr,_s=L(),k(an.$$.fragment),ks=L(),k(on.$$.fragment),xs=L(),k(sn.$$.fragment),Is=L(),k(rn.$$.fragment),js=L(),Vn=z("div"),Vn.innerHTML=ur,Ms=L(),k(ln.$$.fragment),Ts=L(),k(Bn.$$.fragment),this.h()},l(m){x(e.$$.fragment,m),t=P(m),x(i.$$.fragment,m),o=P(m),a=E(m,"DIV",{class:!0});var w=R(a);x(r.$$.fragment,w),f=P(w),n=E(w,"DIV",{class:!0});var $=R(n);g=E($,"DIV",{id:!0,class:!0});var Ni=R(g);_=c(Ni,Xi),Ni.forEach(s),d=P($),v=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(v)!=="svelte-1tlj87z"&&(v.textContent=M),H=P($),N=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(N)!=="svelte-xnmp4g"&&(N.textContent=F),A=P($),C=E($,"BR",{}),Z=P($),O=E($,"DIV",{class:!0});var pi=R(O);et=c(pi,"All code used in this project is available in the github repo: "),x(K.$$.fragment,pi),pi.forEach(s),G=P($),x(q.$$.fragment,$),J=P($),Q=E($,"UL",{class:!0});var dt=R(Q);X=E(dt,"LI",{});var at=R(X);ht=c(at,"This project explores the use of the NHiTS "),x(it.$$.fragment,at),S=c(at,` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),oi=c(at,B),si=c(at,` points of input, the model is trained
				to predict the next `),ea=c(at,Ei),na=c(at," points of the trajectory, where "),ia=c(at,Es),aa=c(at,` is usually 100 and
				`),oa=c(at,Ls),sa=c(at,"."),at.forEach(s),ra=P(dt),hn=E(dt,"LI",{});var Un=R(hn);la=c(Un,`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),ha=c(Un,Ps),ca=c(Un,`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),Un.forEach(s),fa=P(dt),ct=E(dt,"LI",{});var ft=R(ct);ma=c(ft,`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),ua=c(ft,Cs),pa=c(ft," to "),da=c(ft,Hs),$a=c(ft,`. Trajectories
				that meet this criteria have a roughly 60% chance of exhibiting a `),x(wt.$$.fragment,ft),ga=c(ft,` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),ft.forEach(s),dt.forEach(s),wa=P($),x(vt.$$.fragment,$),va=P($),x(yt.$$.fragment,$),x(bt.$$.fragment,$),x(_t.$$.fragment,$),ya=P($),mt=E($,"DIV",{class:!0});var $t=R(mt);Li=E($t,"P",{});var Di=R(Li);cn=E(Di,"SUP",{id:!0});var di=R(cn);ba=c(di,`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),x(kt.$$.fragment,di),di.forEach(s),Di.forEach(s),_a=P($t),ri=E($t,"P",{"data-svelte-h":!0}),V(ri)!=="svelte-7qdhvn"&&(ri.innerHTML=Ss),ka=P($t),Pi=E($t,"P",{});var Gi=R(Pi);xt=E(Gi,"SUP",{id:!0});var Wn=R(xt);xa=c(Wn,`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),x(It.$$.fragment,Wn),Ia=c(Wn," on the subject"),Wn.forEach(s),Gi.forEach(s),$t.forEach(s),ja=P($),x(jt.$$.fragment,$),Ma=P($),x(Mt.$$.fragment,$),Ta=P($),li=E($,"DIV",{class:!0});var qi=R(li);fn=E(qi,"A",{title:!0,href:!0});var Fi=R(fn);mn=E(Fi,"FIGURE",{});var On=R(mn);Tt=E(On,"IMG",{class:!0,width:!0,alt:!0,src:!0}),Aa=P(On),x(At.$$.fragment,On),On.forEach(s),Fi.forEach(s),qi.forEach(s),za=P($),x(zt.$$.fragment,$),Ea=P($),hi=E($,"DIV",{class:!0});var Zi=R(hi);Ci=E(Zi,"P",{});var Vi=R(Ci);La=c(Vi,Ns),Vi.forEach(s),Zi.forEach(s),Pa=P($),x(Et.$$.fragment,$),Ca=P($),ci=E($,"DIV",{class:!0});var Bi=R(ci);Hi=E(Bi,"P",{});var Ui=R(Hi);Ha=c(Ui,Ds),Ui.forEach(s),Bi.forEach(s),Sa=P($),x(Lt.$$.fragment,$),x(Pt.$$.fragment,$),Ra=P($),x(Ct.$$.fragment,$),Na=P($),x(Ht.$$.fragment,$),Da=P($),x(St.$$.fragment,$),Ga=P($),x(Rt.$$.fragment,$),qa=P($),x(Nt.$$.fragment,$),Fa=P($),x(Dt.$$.fragment,$),x(Gt.$$.fragment,$),x(qt.$$.fragment,$),x(Ft.$$.fragment,$),Za=P($),fi=E($,"DIV",{class:!0});var Wi=R(fi);Si=E(Wi,"P",{});var Oi=R(Si);Va=c(Oi,Gs),Oi.forEach(s),Wi.forEach(s),Ba=P($),x(Zt.$$.fragment,$),Ua=P($),x(Vt.$$.fragment,$),Wa=P($),x(Bt.$$.fragment,$),Oa=P($),x(Ut.$$.fragment,$),Ka=P($),un=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(un)!=="svelte-a9h7x4"&&(un.innerHTML=qs),Ja=P($),x(Wt.$$.fragment,$),Xa=P($),x(Ot.$$.fragment,$),Ya=P($),x(pn.$$.fragment,$),Qa=P($),x(Kt.$$.fragment,$),to=P($),Ri=E($,"DIV",{});var Ki=R(Ri);eo=c(Ki,Fs),Ki.forEach(s),no=P($),x(Jt.$$.fragment,$),io=P($),Xt=E($,"FIGURE",{class:!0});var Kn=R(Xt);dn=E(Kn,"IMG",{class:!0,src:!0,alt:!0}),ao=P(Kn),x(Yt.$$.fragment,Kn),Kn.forEach(s),oo=P($),x(Qt.$$.fragment,$),so=P($),te=E($,"FIGURE",{class:!0});var Jn=R(te);$n=E(Jn,"DIV",{class:!0,"data-svelte-h":!0}),V($n)!=="svelte-u7ima0"&&($n.innerHTML=Vs),ro=P(Jn),x(ee.$$.fragment,Jn),Jn.forEach(s),lo=P($),x(ne.$$.fragment,$),ho=P($),ie=E($,"FIGURE",{class:!0});var Xn=R(ie);gn=E(Xn,"IMG",{class:!0,src:!0,alt:!0}),co=P(Xn),x(ae.$$.fragment,Xn),Xn.forEach(s),fo=P($),x(oe.$$.fragment,$),x(se.$$.fragment,$),mo=P($),re=E($,"FIGURE",{class:!0});var Yn=R(re);ut=E(Yn,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),uo=P(Yn),x(le.$$.fragment,Yn),Yn.forEach(s),po=P($),x(he.$$.fragment,$),$o=P($),x(ce.$$.fragment,$),go=P($),x(fe.$$.fragment,$),wo=P($),x(wn.$$.fragment,$),vo=P($),vn=E($,"P",{class:!0,"data-svelte-h":!0}),V(vn)!=="svelte-8lzr6y"&&(vn.textContent=Ws),yo=P($),yn=E($,"FIGURE",{class:!0});var $i=R(yn);bn=E($i,"IMG",{class:!0,src:!0,alt:!0}),x(me.$$.fragment,$i),$i.forEach(s),bo=P($),x(ue.$$.fragment,$),x(pe.$$.fragment,$),_o=P($),_n=E($,"FIGURE",{class:!0});var gi=R(_n);kn=E(gi,"IMG",{class:!0,src:!0,alt:!0}),x(de.$$.fragment,gi),gi.forEach(s),ko=P($),x($e.$$.fragment,$),xo=P($),ge=E($,"FIGURE",{class:!0});var Qn=R(ge);xn=E(Qn,"IMG",{class:!0,src:!0,alt:!0}),Io=P(Qn),x(we.$$.fragment,Qn),Qn.forEach(s),jo=P($),x(ve.$$.fragment,$),Mo=P($),In=E($,"FIGURE",{class:!0});var wi=R(In);jn=E(wi,"IMG",{class:!0,src:!0,alt:!0}),x(ye.$$.fragment,wi),wi.forEach(s),To=P($),x(be.$$.fragment,$),Ao=P($),x(_e.$$.fragment,$),zo=P($),x(ke.$$.fragment,$),Eo=P($),x(xe.$$.fragment,$),Lo=P($),x(Ie.$$.fragment,$),x(je.$$.fragment,$),x(Me.$$.fragment,$),Po=P($),Mn=E($,"FIGURE",{class:!0});var vi=R(Mn);Tn=E(vi,"IMG",{class:!0,src:!0,alt:!0}),x(Te.$$.fragment,vi),vi.forEach(s),Co=P($),An=E($,"P",{});var ti=R(An);Ho=c(ti,"Still, with these 10x increases, the trajectories that pass within an L2 distance "),So=c(ti,Qs),Ro=c(ti,`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),ti.forEach(s),No=P($),x(Ae.$$.fragment,$),Do=P($),zn=E($,"FIGURE",{class:!0});var yi=R(zn);En=E(yi,"IMG",{class:!0,src:!0,alt:!0}),x(ze.$$.fragment,yi),yi.forEach(s),Go=P($),x(Ee.$$.fragment,$),qo=P($),x(Le.$$.fragment,$),Fo=P($),x(Pe.$$.fragment,$),Zo=P($),x(Ce.$$.fragment,$),Vo=P($),x(Ln.$$.fragment,$),Bo=P($),x(He.$$.fragment,$),Uo=P($),Se=E($,"P",{class:!0});var ei=R(Se);Wo=c(ei,"After retraining with "),Oo=c(ei,er),Ko=c(ei,`, we again see a very slight improvement
			over the previous models:`),ei.forEach(s),Jo=P($),Pn=E($,"FIGURE",{class:!0});var bi=R(Pn);Cn=E(bi,"IMG",{class:!0,src:!0,alt:!0}),x(Re.$$.fragment,bi),bi.forEach(s),Xo=P($),mi=E($,"P",{"data-svelte-h":!0}),V(mi)!=="svelte-iuzfox"&&(mi.innerHTML=ir),Yo=P($),x(Ne.$$.fragment,$),Qo=P($),x(De.$$.fragment,$),x(Ge.$$.fragment,$),x(qe.$$.fragment,$),ts=c($,ar),es=P($),Hn=E($,"P",{});var ni=R(Hn);ns=c(ni,"Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),x(Fe.$$.fragment,ni),is=c(ni," solver's outputs:"),ni.forEach(s),as=P($),Sn=E($,"FIGURE",{class:!0});var _i=R(Sn);Rn=E(_i,"IMG",{class:!0,src:!0,alt:!0}),x(Ze.$$.fragment,_i),_i.forEach(s),os=P($),pt=E($,"P",{});var gt=R(pt);ss=c(gt,`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),rs=c(gt,sr),ls=c(gt," for the solver compared to "),hs=c(gt,rr),cs=c(gt,`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),gt.forEach(s),fs=P($),x(Ve.$$.fragment,$),ms=P($),Nn=E($,"FIGURE",{class:!0});var ki=R(Nn);Dn=E(ki,"IMG",{class:!0,src:!0,alt:!0}),x(Be.$$.fragment,ki),ki.forEach(s),us=P($),ui=E($,"P",{"data-svelte-h":!0}),V(ui)!=="svelte-8ial96"&&(ui.textContent=hr),ps=P($),Gn=E($,"FIGURE",{class:!0});var xi=R(Gn);qn=E(xi,"IMG",{class:!0,src:!0,alt:!0}),x(Ue.$$.fragment,xi),xi.forEach(s),ds=P($),x(We.$$.fragment,$),$s=P($),Oe=E($,"FIGURE",{class:!0});var ii=R(Oe);Fn=E(ii,"IMG",{class:!0,src:!0,alt:!0}),gs=P(ii),x(Ke.$$.fragment,ii),ii.forEach(s),ws=P($),x(Je.$$.fragment,$),vs=P($),x(Xe.$$.fragment,$),ys=P($),x(Ye.$$.fragment,$),x(Qe.$$.fragment,$),x(tn.$$.fragment,$),x(en.$$.fragment,$),bs=P($),nn=E($,"FIGURE",{class:!0});var ai=R(nn);Zn=E(ai,"DIV",{class:!0,"data-svelte-h":!0}),V(Zn)!=="svelte-lbdos2"&&(Zn.innerHTML=mr),_s=P(ai),x(an.$$.fragment,ai),ai.forEach(s),ks=P($),x(on.$$.fragment,$),xs=P($),x(sn.$$.fragment,$),Is=P($),x(rn.$$.fragment,$),js=P($),Vn=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(Vn)!=="svelte-1fdz5l6"&&(Vn.innerHTML=ur),Ms=P($),x(ln.$$.fragment,$),Ts=P($),x(Bn.$$.fragment,$),$.forEach(s),w.forEach(s),this.h()},h(){T(g,"id","intro"),T(g,"class","mt-8 text-2xl text-center"),T(v,"class","mt-2 text-md text-center"),T(N,"class","mt-2 text-xs text-center font-serif"),T(O,"class","text-sm text-center font-serif mb-4"),T(Q,"class","list-disc ms-16 text-sm"),T(cn,"id","sabine"),T(xt,"id","brunton"),T(mt,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(Tt,"class","m-auto"),T(Tt,"width","128"),T(Tt,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),ot(Tt.src,Rs="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||T(Tt,"src",Rs),T(fn,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),T(fn,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),T(li,"class","my-2 self-center"),T(hi,"class","self-center"),T(ci,"class","self-center"),T(fi,"class","self-center"),T(un,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(dn,"class","object-contain"),ot(dn.src,Zs=`${tt}/Model1ErrDist.png`)||T(dn,"src",Zs),T(dn,"alt","Model 1 - error distribution"),T(Xt,"class","mb-6 self-center max-w-xl"),T($n,"class","flex flex-wrap justify-center"),T(te,"class","mt-6 mb-6 self-center"),T(gn,"class","object-contain"),ot(gn.src,Bs=`${tt}/model-1-pod.gif`)||T(gn,"src",Bs),T(gn,"alt","prediction point of divergence"),T(ie,"class","mt-6 mb-6 self-center max-w-lg"),T(ut,"class","object-contain"),ot(ut.src,Us=`${tt}/trajectories.gif`)||T(ut,"src",Us),T(ut,"alt","trajectories approaching origin"),T(ut,"width","500"),T(ut,"height","500"),T(re,"class","mt-6 mb-6 self-center max-w-md"),T(vn,"class","mt-2"),T(bn,"class","object-contain"),ot(bn.src,Os=`${tt}/Model2ErrDist.png`)||T(bn,"src",Os),T(bn,"alt",""),T(yn,"class","mb-2 self-center max-w-xl"),T(kn,"class","object-contain"),ot(kn.src,Ks=`${tt}/Model2Err3d.png`)||T(kn,"src",Ks),T(kn,"alt","Model 2 - error distribution by series and window"),T(_n,"class","-mt-2 mb-2 self-center"),T(xn,"class","object-contain"),ot(xn.src,Js=`${tt}/model-2-pod.gif`)||T(xn,"src",Js),T(xn,"alt","model 2 point of divergence"),T(ge,"class","self-center max-w-lg"),T(jn,"class","object-contain"),ot(jn.src,Xs=`${tt}/Model2DFO.png`)||T(jn,"src",Xs),T(jn,"alt","distance from origin vs. sMAPE"),T(In,"class","-mt-2 mb-2 self-center max-w-3xl"),T(Tn,"class","object-contain"),ot(Tn.src,Ys=`${tt}/datahist_model_2_v_3.1.png`)||T(Tn,"src",Ys),T(Tn,"alt","Dataset distribution for Model 2 vs. 3"),T(Mn,"class","my-8 self-center max-w-lg"),T(En,"class","object-contain"),ot(En.src,tr=`${tt}/Model2v3.1-DFO.png`)||T(En,"src",tr),T(En,"alt","Model 2 vs. 3.1 - distance from origin vs. sMAPE"),T(zn,"class","mt-2 mb-2 self-center max-w-3xl"),T(Se,"class","mt-4"),T(Cn,"class","object-contain"),ot(Cn.src,nr=`${tt}/Model3.2-DFO.png`)||T(Cn,"src",nr),T(Cn,"alt","Model 3.2 - distance-from-origin error distribution"),T(Pn,"class","mb-8 self-center max-w-3xl"),T(Rn,"class","object-contain"),ot(Rn.src,or=`${tt}/ar_z_stat.png`)||T(Rn,"src",or),T(Rn,"alt","Z Statistic for Reference vs. Autoregressive Trajectories"),T(Sn,"class","mb-2 self-center max-w-3xl"),T(Dn,"class","object-contain"),ot(Dn.src,lr=`${tt}/ref_v_ar.png`)||T(Dn,"src",lr),T(Dn,"alt","Reference vs. Autoregressive Trajectories"),T(Nn,"class","mb-2 self-center max-w-4xl"),T(qn,"class","object-contain"),ot(qn.src,cr=`${tt}/ar_breakdown_1.png`)||T(qn,"src",cr),T(qn,"alt","Autoregressive Trajectory - Bad Example"),T(Gn,"class","mb-2 self-center max-w-lg"),T(Fn,"class","object-contain"),ot(Fn.src,fr=`${tt}/solvers_vs_model.png`)||T(Fn,"src",fr),T(Fn,"alt","Comparison of RK45 and predictions to Radau's solutions"),T(Oe,"class","mb-2 self-center max-w-2xl"),T(Zn,"class","flex flex-wrap justify-center"),T(nn,"class","mb-6 self-center"),T(Vn,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(n,"class","flex flex-col mx-4 sm:mx-16"),T(a,"class","grid grid-flow-col auto-cols-auto")},m(m,w){I(e,m,w),u(m,t,w),I(i,m,w),u(m,o,w),u(m,a,w),I(r,a,null),p(a,f),p(a,n),p(n,g),p(g,_),p(n,d),p(n,v),p(n,H),p(n,N),p(n,A),p(n,C),p(n,Z),p(n,O),p(O,et),I(K,O,null),p(n,G),I(q,n,null),p(n,J),p(n,Q),p(Q,X),p(X,ht),I(it,X,null),p(X,S),p(X,oi),p(X,si),p(X,ea),p(X,na),p(X,ia),p(X,aa),p(X,oa),p(X,sa),p(Q,ra),p(Q,hn),p(hn,la),p(hn,ha),p(hn,ca),p(Q,fa),p(Q,ct),p(ct,ma),p(ct,ua),p(ct,pa),p(ct,da),p(ct,$a),I(wt,ct,null),p(ct,ga),p(n,wa),I(vt,n,null),p(n,va),I(yt,n,null),I(bt,n,null),I(_t,n,null),p(n,ya),p(n,mt),p(mt,Li),p(Li,cn),p(cn,ba),I(kt,cn,null),p(mt,_a),p(mt,ri),p(mt,ka),p(mt,Pi),p(Pi,xt),p(xt,xa),I(It,xt,null),p(xt,Ia),p(n,ja),I(jt,n,null),p(n,Ma),I(Mt,n,null),p(n,Ta),p(n,li),p(li,fn),p(fn,mn),p(mn,Tt),p(mn,Aa),I(At,mn,null),p(n,za),I(zt,n,null),p(n,Ea),p(n,hi),p(hi,Ci),p(Ci,La),p(n,Pa),I(Et,n,null),p(n,Ca),p(n,ci),p(ci,Hi),p(Hi,Ha),p(n,Sa),I(Lt,n,null),I(Pt,n,null),p(n,Ra),I(Ct,n,null),p(n,Na),I(Ht,n,null),p(n,Da),I(St,n,null),p(n,Ga),I(Rt,n,null),p(n,qa),I(Nt,n,null),p(n,Fa),I(Dt,n,null),I(Gt,n,null),I(qt,n,null),I(Ft,n,null),p(n,Za),p(n,fi),p(fi,Si),p(Si,Va),p(n,Ba),I(Zt,n,null),p(n,Ua),I(Vt,n,null),p(n,Wa),I(Bt,n,null),p(n,Oa),I(Ut,n,null),p(n,Ka),p(n,un),p(n,Ja),I(Wt,n,null),p(n,Xa),I(Ot,n,null),p(n,Ya),I(pn,n,null),p(n,Qa),I(Kt,n,null),p(n,to),p(n,Ri),p(Ri,eo),p(n,no),I(Jt,n,null),p(n,io),p(n,Xt),p(Xt,dn),p(Xt,ao),I(Yt,Xt,null),p(n,oo),I(Qt,n,null),p(n,so),p(n,te),p(te,$n),p(te,ro),I(ee,te,null),p(n,lo),I(ne,n,null),p(n,ho),p(n,ie),p(ie,gn),p(ie,co),I(ae,ie,null),p(n,fo),I(oe,n,null),I(se,n,null),p(n,mo),p(n,re),p(re,ut),p(re,uo),I(le,re,null),p(n,po),I(he,n,null),p(n,$o),I(ce,n,null),p(n,go),I(fe,n,null),p(n,wo),I(wn,n,null),p(n,vo),p(n,vn),p(n,yo),p(n,yn),p(yn,bn),I(me,yn,null),p(n,bo),I(ue,n,null),I(pe,n,null),p(n,_o),p(n,_n),p(_n,kn),I(de,_n,null),p(n,ko),I($e,n,null),p(n,xo),p(n,ge),p(ge,xn),p(ge,Io),I(we,ge,null),p(n,jo),I(ve,n,null),p(n,Mo),p(n,In),p(In,jn),I(ye,In,null),p(n,To),I(be,n,null),p(n,Ao),I(_e,n,null),p(n,zo),I(ke,n,null),p(n,Eo),I(xe,n,null),p(n,Lo),I(Ie,n,null),I(je,n,null),I(Me,n,null),p(n,Po),p(n,Mn),p(Mn,Tn),I(Te,Mn,null),p(n,Co),p(n,An),p(An,Ho),p(An,So),p(An,Ro),p(n,No),I(Ae,n,null),p(n,Do),p(n,zn),p(zn,En),I(ze,zn,null),p(n,Go),I(Ee,n,null),p(n,qo),I(Le,n,null),p(n,Fo),I(Pe,n,null),p(n,Zo),I(Ce,n,null),p(n,Vo),I(Ln,n,null),p(n,Bo),I(He,n,null),p(n,Uo),p(n,Se),p(Se,Wo),p(Se,Oo),p(Se,Ko),p(n,Jo),p(n,Pn),p(Pn,Cn),I(Re,Pn,null),p(n,Xo),p(n,mi),p(n,Yo),I(Ne,n,null),p(n,Qo),I(De,n,null),I(Ge,n,null),I(qe,n,null),p(n,ts),p(n,es),p(n,Hn),p(Hn,ns),I(Fe,Hn,null),p(Hn,is),p(n,as),p(n,Sn),p(Sn,Rn),I(Ze,Sn,null),p(n,os),p(n,pt),p(pt,ss),p(pt,rs),p(pt,ls),p(pt,hs),p(pt,cs),p(n,fs),I(Ve,n,null),p(n,ms),p(n,Nn),p(Nn,Dn),I(Be,Nn,null),p(n,us),p(n,ui),p(n,ps),p(n,Gn),p(Gn,qn),I(Ue,Gn,null),p(n,ds),I(We,n,null),p(n,$s),p(n,Oe),p(Oe,Fn),p(Oe,gs),I(Ke,Oe,null),p(n,ws),I(Je,n,null),p(n,vs),I(Xe,n,null),p(n,ys),I(Ye,n,null),I(Qe,n,null),I(tn,n,null),I(en,n,null),p(n,bs),p(n,nn),p(nn,Zn),p(nn,_s),I(an,nn,null),p(n,ks),I(on,n,null),p(n,xs),I(sn,n,null),p(n,Is),I(rn,n,null),p(n,js),p(n,Vn),p(n,Ms),I(ln,n,null),p(n,Ts),I(Bn,n,null),Yi=!0},p(m,[w]){const $={};w&1&&($.$$scope={dirty:w,ctx:m}),K.$set($);const Ni={};w&1&&(Ni.$$scope={dirty:w,ctx:m}),q.$set(Ni);const pi={};w&1&&(pi.$$scope={dirty:w,ctx:m}),wt.$set(pi);const dt={};w&1&&(dt.$$scope={dirty:w,ctx:m}),vt.$set(dt);const at={};w&1&&(at.$$scope={dirty:w,ctx:m}),yt.$set(at);const Un={};w&1&&(Un.$$scope={dirty:w,ctx:m}),bt.$set(Un);const ft={};w&1&&(ft.$$scope={dirty:w,ctx:m}),_t.$set(ft);const $t={};w&1&&($t.$$scope={dirty:w,ctx:m}),kt.$set($t);const Di={};w&1&&(Di.$$scope={dirty:w,ctx:m}),It.$set(Di);const di={};w&1&&(di.$$scope={dirty:w,ctx:m}),jt.$set(di);const Gi={};w&1&&(Gi.$$scope={dirty:w,ctx:m}),Mt.$set(Gi);const Wn={};w&1&&(Wn.$$scope={dirty:w,ctx:m}),At.$set(Wn);const qi={};w&1&&(qi.$$scope={dirty:w,ctx:m}),zt.$set(qi);const Fi={};w&1&&(Fi.$$scope={dirty:w,ctx:m}),Et.$set(Fi);const On={};w&1&&(On.$$scope={dirty:w,ctx:m}),Lt.$set(On);const Zi={};w&1&&(Zi.$$scope={dirty:w,ctx:m}),Pt.$set(Zi);const Vi={};w&1&&(Vi.$$scope={dirty:w,ctx:m}),Ct.$set(Vi);const Bi={};w&1&&(Bi.$$scope={dirty:w,ctx:m}),Ht.$set(Bi);const Ui={};w&1&&(Ui.$$scope={dirty:w,ctx:m}),St.$set(Ui);const Wi={};w&1&&(Wi.$$scope={dirty:w,ctx:m}),Rt.$set(Wi);const Oi={};w&1&&(Oi.$$scope={dirty:w,ctx:m}),Nt.$set(Oi);const Ki={};w&1&&(Ki.$$scope={dirty:w,ctx:m}),Dt.$set(Ki);const Kn={};w&1&&(Kn.$$scope={dirty:w,ctx:m}),Gt.$set(Kn);const Jn={};w&1&&(Jn.$$scope={dirty:w,ctx:m}),qt.$set(Jn);const Xn={};w&1&&(Xn.$$scope={dirty:w,ctx:m}),Ft.$set(Xn);const Yn={};w&1&&(Yn.$$scope={dirty:w,ctx:m}),Zt.$set(Yn);const $i={};w&1&&($i.$$scope={dirty:w,ctx:m}),Vt.$set($i);const gi={};w&1&&(gi.$$scope={dirty:w,ctx:m}),Bt.$set(gi);const Qn={};w&1&&(Qn.$$scope={dirty:w,ctx:m}),Ut.$set(Qn);const wi={};w&1&&(wi.$$scope={dirty:w,ctx:m}),Wt.$set(wi);const vi={};w&1&&(vi.$$scope={dirty:w,ctx:m}),Ot.$set(vi);const ti={};w&1&&(ti.$$scope={dirty:w,ctx:m}),Kt.$set(ti);const yi={};w&1&&(yi.$$scope={dirty:w,ctx:m}),Jt.$set(yi);const ei={};w&1&&(ei.$$scope={dirty:w,ctx:m}),Yt.$set(ei);const bi={};w&1&&(bi.$$scope={dirty:w,ctx:m}),Qt.$set(bi);const ni={};w&1&&(ni.$$scope={dirty:w,ctx:m}),ee.$set(ni);const _i={};w&1&&(_i.$$scope={dirty:w,ctx:m}),ne.$set(_i);const gt={};w&1&&(gt.$$scope={dirty:w,ctx:m}),ae.$set(gt);const ki={};w&1&&(ki.$$scope={dirty:w,ctx:m}),oe.$set(ki);const xi={};w&1&&(xi.$$scope={dirty:w,ctx:m}),se.$set(xi);const ii={};w&1&&(ii.$$scope={dirty:w,ctx:m}),le.$set(ii);const ai={};w&1&&(ai.$$scope={dirty:w,ctx:m}),he.$set(ai);const pr={};w&1&&(pr.$$scope={dirty:w,ctx:m}),ce.$set(pr);const dr={};w&1&&(dr.$$scope={dirty:w,ctx:m}),fe.$set(dr);const $r={};w&1&&($r.$$scope={dirty:w,ctx:m}),me.$set($r);const gr={};w&1&&(gr.$$scope={dirty:w,ctx:m}),ue.$set(gr);const wr={};w&1&&(wr.$$scope={dirty:w,ctx:m}),pe.$set(wr);const vr={};w&1&&(vr.$$scope={dirty:w,ctx:m}),de.$set(vr);const yr={};w&1&&(yr.$$scope={dirty:w,ctx:m}),$e.$set(yr);const br={};w&1&&(br.$$scope={dirty:w,ctx:m}),we.$set(br);const _r={};w&1&&(_r.$$scope={dirty:w,ctx:m}),ve.$set(_r);const kr={};w&1&&(kr.$$scope={dirty:w,ctx:m}),ye.$set(kr);const xr={};w&1&&(xr.$$scope={dirty:w,ctx:m}),be.$set(xr);const Ir={};w&1&&(Ir.$$scope={dirty:w,ctx:m}),_e.$set(Ir);const jr={};w&1&&(jr.$$scope={dirty:w,ctx:m}),ke.$set(jr);const Mr={};w&1&&(Mr.$$scope={dirty:w,ctx:m}),xe.$set(Mr);const Tr={};w&1&&(Tr.$$scope={dirty:w,ctx:m}),Ie.$set(Tr);const Ar={};w&1&&(Ar.$$scope={dirty:w,ctx:m}),je.$set(Ar);const zr={};w&1&&(zr.$$scope={dirty:w,ctx:m}),Me.$set(zr);const Er={};w&1&&(Er.$$scope={dirty:w,ctx:m}),Te.$set(Er);const Lr={};w&1&&(Lr.$$scope={dirty:w,ctx:m}),Ae.$set(Lr);const Pr={};w&1&&(Pr.$$scope={dirty:w,ctx:m}),ze.$set(Pr);const Cr={};w&1&&(Cr.$$scope={dirty:w,ctx:m}),Ee.$set(Cr);const Hr={};w&1&&(Hr.$$scope={dirty:w,ctx:m}),Le.$set(Hr);const Sr={};w&1&&(Sr.$$scope={dirty:w,ctx:m}),Pe.$set(Sr);const Rr={};w&1&&(Rr.$$scope={dirty:w,ctx:m}),Ce.$set(Rr);const Nr={};w&1&&(Nr.$$scope={dirty:w,ctx:m}),He.$set(Nr);const Dr={};w&1&&(Dr.$$scope={dirty:w,ctx:m}),Re.$set(Dr);const Gr={};w&1&&(Gr.$$scope={dirty:w,ctx:m}),Ne.$set(Gr);const qr={};w&1&&(qr.$$scope={dirty:w,ctx:m}),De.$set(qr);const Fr={};w&1&&(Fr.$$scope={dirty:w,ctx:m}),Ge.$set(Fr);const Zr={};w&1&&(Zr.$$scope={dirty:w,ctx:m}),qe.$set(Zr);const Vr={};w&1&&(Vr.$$scope={dirty:w,ctx:m}),Fe.$set(Vr);const Br={};w&1&&(Br.$$scope={dirty:w,ctx:m}),Ze.$set(Br);const Ur={};w&1&&(Ur.$$scope={dirty:w,ctx:m}),Ve.$set(Ur);const Wr={};w&1&&(Wr.$$scope={dirty:w,ctx:m}),Be.$set(Wr);const Or={};w&1&&(Or.$$scope={dirty:w,ctx:m}),Ue.$set(Or);const Kr={};w&1&&(Kr.$$scope={dirty:w,ctx:m}),We.$set(Kr);const Jr={};w&1&&(Jr.$$scope={dirty:w,ctx:m}),Ke.$set(Jr);const Xr={};w&1&&(Xr.$$scope={dirty:w,ctx:m}),Je.$set(Xr);const Yr={};w&1&&(Yr.$$scope={dirty:w,ctx:m}),Xe.$set(Yr);const Qr={};w&1&&(Qr.$$scope={dirty:w,ctx:m}),Ye.$set(Qr);const tl={};w&1&&(tl.$$scope={dirty:w,ctx:m}),Qe.$set(tl);const el={};w&1&&(el.$$scope={dirty:w,ctx:m}),tn.$set(el);const nl={};w&1&&(nl.$$scope={dirty:w,ctx:m}),en.$set(nl);const il={};w&1&&(il.$$scope={dirty:w,ctx:m}),an.$set(il);const al={};w&1&&(al.$$scope={dirty:w,ctx:m}),on.$set(al);const ol={};w&1&&(ol.$$scope={dirty:w,ctx:m}),sn.$set(ol);const sl={};w&1&&(sl.$$scope={dirty:w,ctx:m}),rn.$set(sl);const rl={};w&1&&(rl.$$scope={dirty:w,ctx:m}),ln.$set(rl)},i(m){Yi||(y(e.$$.fragment,m),y(i.$$.fragment,m),y(r.$$.fragment,m),y(K.$$.fragment,m),y(q.$$.fragment,m),y(it.$$.fragment,m),y(wt.$$.fragment,m),y(vt.$$.fragment,m),y(yt.$$.fragment,m),y(bt.$$.fragment,m),y(_t.$$.fragment,m),y(kt.$$.fragment,m),y(It.$$.fragment,m),y(jt.$$.fragment,m),y(Mt.$$.fragment,m),y(At.$$.fragment,m),y(zt.$$.fragment,m),y(Et.$$.fragment,m),y(Lt.$$.fragment,m),y(Pt.$$.fragment,m),y(Ct.$$.fragment,m),y(Ht.$$.fragment,m),y(St.$$.fragment,m),y(Rt.$$.fragment,m),y(Nt.$$.fragment,m),y(Dt.$$.fragment,m),y(Gt.$$.fragment,m),y(qt.$$.fragment,m),y(Ft.$$.fragment,m),y(Zt.$$.fragment,m),y(Vt.$$.fragment,m),y(Bt.$$.fragment,m),y(Ut.$$.fragment,m),y(Wt.$$.fragment,m),y(Ot.$$.fragment,m),y(pn.$$.fragment,m),y(Kt.$$.fragment,m),y(Jt.$$.fragment,m),y(Yt.$$.fragment,m),y(Qt.$$.fragment,m),y(ee.$$.fragment,m),y(ne.$$.fragment,m),y(ae.$$.fragment,m),y(oe.$$.fragment,m),y(se.$$.fragment,m),y(le.$$.fragment,m),y(he.$$.fragment,m),y(ce.$$.fragment,m),y(fe.$$.fragment,m),y(wn.$$.fragment,m),y(me.$$.fragment,m),y(ue.$$.fragment,m),y(pe.$$.fragment,m),y(de.$$.fragment,m),y($e.$$.fragment,m),y(we.$$.fragment,m),y(ve.$$.fragment,m),y(ye.$$.fragment,m),y(be.$$.fragment,m),y(_e.$$.fragment,m),y(ke.$$.fragment,m),y(xe.$$.fragment,m),y(Ie.$$.fragment,m),y(je.$$.fragment,m),y(Me.$$.fragment,m),y(Te.$$.fragment,m),y(Ae.$$.fragment,m),y(ze.$$.fragment,m),y(Ee.$$.fragment,m),y(Le.$$.fragment,m),y(Pe.$$.fragment,m),y(Ce.$$.fragment,m),y(Ln.$$.fragment,m),y(He.$$.fragment,m),y(Re.$$.fragment,m),y(Ne.$$.fragment,m),y(De.$$.fragment,m),y(Ge.$$.fragment,m),y(qe.$$.fragment,m),y(Fe.$$.fragment,m),y(Ze.$$.fragment,m),y(Ve.$$.fragment,m),y(Be.$$.fragment,m),y(Ue.$$.fragment,m),y(We.$$.fragment,m),y(Ke.$$.fragment,m),y(Je.$$.fragment,m),y(Xe.$$.fragment,m),y(Ye.$$.fragment,m),y(Qe.$$.fragment,m),y(tn.$$.fragment,m),y(en.$$.fragment,m),y(an.$$.fragment,m),y(on.$$.fragment,m),y(sn.$$.fragment,m),y(rn.$$.fragment,m),y(ln.$$.fragment,m),y(Bn.$$.fragment,m),Yi=!0)},o(m){b(e.$$.fragment,m),b(i.$$.fragment,m),b(r.$$.fragment,m),b(K.$$.fragment,m),b(q.$$.fragment,m),b(it.$$.fragment,m),b(wt.$$.fragment,m),b(vt.$$.fragment,m),b(yt.$$.fragment,m),b(bt.$$.fragment,m),b(_t.$$.fragment,m),b(kt.$$.fragment,m),b(It.$$.fragment,m),b(jt.$$.fragment,m),b(Mt.$$.fragment,m),b(At.$$.fragment,m),b(zt.$$.fragment,m),b(Et.$$.fragment,m),b(Lt.$$.fragment,m),b(Pt.$$.fragment,m),b(Ct.$$.fragment,m),b(Ht.$$.fragment,m),b(St.$$.fragment,m),b(Rt.$$.fragment,m),b(Nt.$$.fragment,m),b(Dt.$$.fragment,m),b(Gt.$$.fragment,m),b(qt.$$.fragment,m),b(Ft.$$.fragment,m),b(Zt.$$.fragment,m),b(Vt.$$.fragment,m),b(Bt.$$.fragment,m),b(Ut.$$.fragment,m),b(Wt.$$.fragment,m),b(Ot.$$.fragment,m),b(pn.$$.fragment,m),b(Kt.$$.fragment,m),b(Jt.$$.fragment,m),b(Yt.$$.fragment,m),b(Qt.$$.fragment,m),b(ee.$$.fragment,m),b(ne.$$.fragment,m),b(ae.$$.fragment,m),b(oe.$$.fragment,m),b(se.$$.fragment,m),b(le.$$.fragment,m),b(he.$$.fragment,m),b(ce.$$.fragment,m),b(fe.$$.fragment,m),b(wn.$$.fragment,m),b(me.$$.fragment,m),b(ue.$$.fragment,m),b(pe.$$.fragment,m),b(de.$$.fragment,m),b($e.$$.fragment,m),b(we.$$.fragment,m),b(ve.$$.fragment,m),b(ye.$$.fragment,m),b(be.$$.fragment,m),b(_e.$$.fragment,m),b(ke.$$.fragment,m),b(xe.$$.fragment,m),b(Ie.$$.fragment,m),b(je.$$.fragment,m),b(Me.$$.fragment,m),b(Te.$$.fragment,m),b(Ae.$$.fragment,m),b(ze.$$.fragment,m),b(Ee.$$.fragment,m),b(Le.$$.fragment,m),b(Pe.$$.fragment,m),b(Ce.$$.fragment,m),b(Ln.$$.fragment,m),b(He.$$.fragment,m),b(Re.$$.fragment,m),b(Ne.$$.fragment,m),b(De.$$.fragment,m),b(Ge.$$.fragment,m),b(qe.$$.fragment,m),b(Fe.$$.fragment,m),b(Ze.$$.fragment,m),b(Ve.$$.fragment,m),b(Be.$$.fragment,m),b(Ue.$$.fragment,m),b(We.$$.fragment,m),b(Ke.$$.fragment,m),b(Je.$$.fragment,m),b(Xe.$$.fragment,m),b(Ye.$$.fragment,m),b(Qe.$$.fragment,m),b(tn.$$.fragment,m),b(en.$$.fragment,m),b(an.$$.fragment,m),b(on.$$.fragment,m),b(sn.$$.fragment,m),b(rn.$$.fragment,m),b(ln.$$.fragment,m),b(Bn.$$.fragment,m),Yi=!1},d(m){m&&(s(t),s(o),s(a)),j(e,m),j(i,m),j(r),j(K),j(q),j(it),j(wt),j(vt),j(yt),j(bt),j(_t),j(kt),j(It),j(jt),j(Mt),j(At),j(zt),j(Et),j(Lt),j(Pt),j(Ct),j(Ht),j(St),j(Rt),j(Nt),j(Dt),j(Gt),j(qt),j(Ft),j(Zt),j(Vt),j(Bt),j(Ut),j(Wt),j(Ot),j(pn),j(Kt),j(Jt),j(Yt),j(Qt),j(ee),j(ne),j(ae),j(oe),j(se),j(le),j(he),j(ce),j(fe),j(wn),j(me),j(ue),j(pe),j(de),j($e),j(we),j(ve),j(ye),j(be),j(_e),j(ke),j(xe),j(Ie),j(je),j(Me),j(Te),j(Ae),j(ze),j(Ee),j(Le),j(Pe),j(Ce),j(Ln),j(He),j(Re),j(Ne),j(De),j(Ge),j(qe),j(Fe),j(Ze),j(Ve),j(Be),j(Ue),j(We),j(Ke),j(Je),j(Xe),j(Ye),j(Qe),j(tn),j(en),j(an),j(on),j(sn),j(rn),j(ln),j(Bn)}}}class uf extends rt{constructor(e){super(),lt(this,e,null,hf,st,{})}}export{uf as component};
