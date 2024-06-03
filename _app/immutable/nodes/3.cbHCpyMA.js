import{s as lt,a as Pi,u as Ci,g as Hi,b as Si,n as W,o as Ml,x as it}from"../chunks/scheduler.BeaK0CkN.js";import{S as ht,i as ct,e as z,c as E,h as R,f as s,b as T,d as u,m as y,n as b,r as Al,p as zl,z as Tl,t as h,v as x,j as c,w as k,k as p,x as I,y as j,l as Gs,s as L,a as P,g as V,A as El,B as Ll}from"../chunks/index.BmRq3wWf.js";import{b as Q}from"../chunks/paths.BC_s-rNz.js";const Pl=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ao(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Cl(l){let e,t,i;const a=l[4].default,o=Pi(a,l,l[3],null);return{c(){e=z("a"),o&&o.c(),this.h()},l(r){e=E(r,"A",{href:!0,class:!0,target:!0,rel:!0});var m=R(e);o&&o.l(m),m.forEach(s),this.h()},h(){T(e,"href",l[0]),T(e,"class",t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+l[1]),T(e,"target",l[2]),T(e,"rel","noopener noreferrer")},m(r,m){u(r,e,m),o&&o.m(e,null),i=!0},p(r,[m]){o&&o.p&&(!i||m&8)&&Ci(o,a,r,r[3],i?Si(a,r[3],m,null):Hi(r[3]),null),(!i||m&1)&&T(e,"href",r[0]),(!i||m&2&&t!==(t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+r[1]))&&T(e,"class",t),(!i||m&4)&&T(e,"target",r[2])},i(r){i||(y(o,r),i=!0)},o(r){b(o,r),i=!1},d(r){r&&s(e),o&&o.d(r)}}}function Hl(l,e,t){let{$$slots:i={},$$scope:a}=e,{href:o}=e,{styling:r=""}=e,{target:m="_blank"}=e;return l.$$set=n=>{"href"in n&&t(0,o=n.href),"styling"in n&&t(1,r=n.styling),"target"in n&&t(2,m=n.target),"$$scope"in n&&t(3,a=n.$$scope)},[o,r,m,a,i]}class B extends ht{constructor(e){super(),ct(this,e,Hl,Cl,lt,{href:0,styling:1,target:2})}}function bl(l,e,t){const i=l.slice();return i[0]=e[t],i}function Sl(l){let e;return{c(){e=h("link")},l(t){e=c(t,"link")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function _l(l){let e,t,i=l[0].author+"",a,o,r,m=l[0].title+"",n,g,_,d=l[0].publisher+"",v,M,H,N=l[0].year+"",F,A,C,Z,O,et,K,G;return O=new B({props:{href:l[0].link,$$slots:{default:[Sl]},$$scope:{ctx:l}}}),{c(){e=z("li"),t=z("span"),a=h(i),o=h(", "),r=z("span"),n=h(m),g=h(`,
			`),_=z("span"),v=h(d),M=h(`,
			`),H=z("span"),F=h(N),A=h(", "),C=z("span"),Z=h("["),x(O.$$.fragment),et=h("]"),K=h(`.
		`),this.h()},l(q){e=E(q,"LI",{});var J=R(e);t=E(J,"SPAN",{class:!0});var tt=R(t);a=c(tt,i),tt.forEach(s),o=c(J,", "),r=E(J,"SPAN",{});var X=R(r);n=c(X,m),X.forEach(s),g=c(J,`,
			`),_=E(J,"SPAN",{});var ft=R(_);v=c(ft,d),ft.forEach(s),M=c(J,`,
			`),H=E(J,"SPAN",{});var ot=R(H);F=c(ot,N),ot.forEach(s),A=c(J,", "),C=E(J,"SPAN",{});var S=R(C);Z=c(S,"["),k(O.$$.fragment,S),et=c(S,"]"),S.forEach(s),K=c(J,`.
		`),J.forEach(s),this.h()},h(){T(t,"class","ms-4")},m(q,J){u(q,e,J),p(e,t),p(t,a),p(e,o),p(e,r),p(r,n),p(e,g),p(e,_),p(_,v),p(e,M),p(e,H),p(H,F),p(e,A),p(e,C),p(C,Z),I(O,C,null),p(C,et),p(e,K),G=!0},p(q,J){const tt={};J&8&&(tt.$$scope={dirty:J,ctx:q}),O.$set(tt)},i(q){G||(y(O.$$.fragment,q),G=!0)},o(q){b(O.$$.fragment,q),G=!1},d(q){q&&s(e),j(O)}}}function Rl(l){let e,t,i=ao(no),a=[];for(let r=0;r<i.length;r+=1)a[r]=_l(bl(l,i,r));const o=r=>b(a[r],1,1,()=>{a[r]=null});return{c(){e=z("ol");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=E(r,"OL",{class:!0});var m=R(e);for(let n=0;n<a.length;n+=1)a[n].l(m);m.forEach(s),this.h()},h(){T(e,"class","pl-5 my-2 text-xs list-decimal")},m(r,m){u(r,e,m);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,null);t=!0},p(r,[m]){if(m&0){i=ao(no);let n;for(n=0;n<i.length;n+=1){const g=bl(r,i,n);a[n]?(a[n].p(g,m),y(a[n],1)):(a[n]=_l(g),a[n].c(),y(a[n],1),a[n].m(e,null))}for(Al(),n=i.length;n<a.length;n+=1)o(n);zl()}},i(r){if(!t){for(let m=0;m<i.length;m+=1)y(a[m]);t=!0}},o(r){a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)b(a[m]);t=!1},d(r){r&&s(e),Tl(a,r)}}}const so=l=>{for(let e=0;e<no.length;e++)if(no[e].id==l)return{index:e+1,link:no[e].link};throw new Error},no=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"oestreicher",author:"Oestreicher C.",title:"A history of chaos theory",publisher:"Dialogues Clin Neurosci.",year:"2007",link:"https://doi.org/10.31887/DCNS.2007.9.3/coestreicher"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"},{id:"chandramoorthy",author:"Nisha Chandramoorthy, QiQi Wang",title:"On the probability of finding nonphysical solutions through shadowing",publisher:"Journal of Computational Physics",year:"1 September 2021",link:"https://doi.org/10.1016/j.jcp.2021.110389"}];class Nl extends ht{constructor(e){super(),ct(this,e,null,Rl,lt,{})}}function Dl(l){let e=so(l[0]).index+"",t;return{c(){t=h(e)},l(i){t=c(i,e)},m(i,a){u(i,t,a)},p(i,a){a&1&&e!==(e=so(i[0]).index+"")&&Gs(t,e)},d(i){i&&s(t)}}}function Gl(l){let e,t,i,a;return t=new B({props:{href:so(l[0]).link,$$slots:{default:[Dl]},$$scope:{ctx:l}}}),{c(){e=h("["),x(t.$$.fragment),i=h("]")},l(o){e=c(o,"["),k(t.$$.fragment,o),i=c(o,"]")},m(o,r){u(o,e,r),I(t,o,r),u(o,i,r),a=!0},p(o,[r]){const m={};r&1&&(m.href=so(o[0]).link),r&3&&(m.$$scope={dirty:r,ctx:o}),t.$set(m)},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function ql(l,e,t){let{id:i}=e;return l.$$set=a=>{"id"in a&&t(0,i=a.id)},[i]}class Y extends ht{constructor(e){super(),ct(this,e,ql,Gl,lt,{id:0})}}function Fl(l){let e,t;const i=l[2].default,a=Pi(i,l,l[1],null);return{c(){e=z("div"),a&&a.c(),this.h()},l(o){e=E(o,"DIV",{id:!0,class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){T(e,"id",l[0]),T(e,"class","text-2xl font-bold text-center my-8")},m(o,r){u(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&2)&&Ci(a,i,o,o[1],t?Si(i,o[1],r,null):Hi(o[1]),null),(!t||r&1)&&T(e,"id",o[0])},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Zl(l,e,t){let{$$slots:i={},$$scope:a}=e,{id:o}=e;return l.$$set=r=>{"id"in r&&t(0,o=r.id),"$$scope"in r&&t(1,a=r.$$scope)},[o,a,i]}class Ei extends ht{constructor(e){super(),ct(this,e,Zl,Fl,lt,{id:0})}}function Vl(l){let e,t;const i=l[2].default,a=Pi(i,l,l[1],null);return{c(){e=z("div"),a&&a.c(),this.h()},l(o){e=E(o,"DIV",{id:!0,class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){T(e,"id",l[0]),T(e,"class","text-xl font-medium text-left mt-8 mb-4")},m(o,r){u(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&2)&&Ci(a,i,o,o[1],t?Si(i,o[1],r,null):Hi(o[1]),null),(!t||r&1)&&T(e,"id",o[0])},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Bl(l,e,t){let{$$slots:i={},$$scope:a}=e,{id:o}=e;return l.$$set=r=>{"id"in r&&t(0,o=r.id),"$$scope"in r&&t(1,a=r.$$scope)},[o,a,i]}class Li extends ht{constructor(e){super(),ct(this,e,Bl,Vl,lt,{id:0})}}function Ul(l){let e,t;const i=l[1].default,a=Pi(i,l,l[0],null);return{c(){e=z("div"),a&&a.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){T(e,"class","text-lg font-medium text-left ms-4 mt-4 mb-4")},m(o,r){u(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&1)&&Ci(a,i,o,o[0],t?Si(i,o[0],r,null):Hi(o[0]),null)},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Wl(l,e,t){let{$$slots:i={},$$scope:a}=e;return l.$$set=o=>{"$$scope"in o&&t(0,a=o.$$scope)},[a,i]}class xl extends ht{constructor(e){super(),ct(this,e,Wl,Ul,lt,{})}}function Ol(l){let e,t,i;const a=l[3].default,o=Pi(a,l,l[2],null);return{c(){e=z("p"),o&&o.c(),this.h()},l(r){e=E(r,"P",{class:!0});var m=R(e);o&&o.l(m),m.forEach(s),this.h()},h(){T(e,"class",t="my-2 "+l[0]+" "+l[1])},m(r,m){u(r,e,m),o&&o.m(e,null),i=!0},p(r,[m]){o&&o.p&&(!i||m&4)&&Ci(o,a,r,r[2],i?Si(a,r[2],m,null):Hi(r[2]),null),(!i||m&3&&t!==(t="my-2 "+r[0]+" "+r[1]))&&T(e,"class",t)},i(r){i||(y(o,r),i=!0)},o(r){b(o,r),i=!1},d(r){r&&s(e),o&&o.d(r)}}}function Kl(l,e,t){let{$$slots:i={},$$scope:a}=e,{indent:o="indent-8"}=e,{style:r=""}=e;return l.$$set=m=>{"indent"in m&&t(0,o=m.indent),"style"in m&&t(1,r=m.style),"$$scope"in m&&t(2,a=m.$$scope)},[o,r,a,i]}class D extends ht{constructor(e){super(),ct(this,e,Kl,Ol,lt,{indent:0,style:1})}}function kl(l,e,t){const i=l.slice();return i[1]=e[t],i}function Il(l){let e,t,i=l[1].desc+"",a,o,r,m,n=l[1].val+"",g,_;return{c(){e=z("li"),t=z("div"),a=h(i),o=L(),r=z("div"),m=z("span"),g=h(n),_=L(),this.h()},l(d){e=E(d,"LI",{class:!0});var v=R(e);t=E(v,"DIV",{class:!0});var M=R(t);a=c(M,i),M.forEach(s),o=P(v),r=E(v,"DIV",{class:!0});var H=R(r);m=E(H,"SPAN",{class:!0});var N=R(m);g=c(N,n),N.forEach(s),H.forEach(s),_=P(v),v.forEach(s),this.h()},h(){T(t,"class","flex-none w-32 sm:w-64"),T(m,"class","rounded-0.5 p-1 font-mono"),T(r,"class","w-fit flex-wrap"),T(e,"class","flex items-center justify-left")},m(d,v){u(d,e,v),p(e,t),p(t,a),p(e,o),p(e,r),p(r,m),p(m,g),p(e,_)},p(d,v){v&1&&i!==(i=d[1].desc+"")&&Gs(a,i),v&1&&n!==(n=d[1].val+"")&&Gs(g,n)},d(d){d&&s(e)}}}function Jl(l){let e,t,i=ao(l[0]),a=[];for(let o=0;o<i.length;o+=1)a[o]=Il(kl(l,i,o));return{c(){e=z("section"),t=z("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=E(o,"SECTION",{class:!0});var r=R(e);t=E(r,"UL",{class:!0});var m=R(t);for(let n=0;n<a.length;n+=1)a[n].l(m);m.forEach(s),r.forEach(s),this.h()},h(){T(t,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),T(e,"class","relative block my-4")},m(o,r){u(o,e,r),p(e,t);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(t,null)},p(o,[r]){if(r&1){i=ao(o[0]);let m;for(m=0;m<i.length;m+=1){const n=kl(o,i,m);a[m]?a[m].p(n,r):(a[m]=Il(n),a[m].c(),a[m].m(t,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=i.length}},i:W,o:W,d(o){o&&s(e),Tl(a,o)}}}function Xl(l,e,t){let{hps:i=[]}=e;return l.$$set=a=>{"hps"in a&&t(0,i=a.hps)},[i]}class Ds extends ht{constructor(e){super(),ct(this,e,Xl,Jl,lt,{hps:0})}}function Yl(l){let e,t;const i=l[1].default,a=Pi(i,l,l[0],null);return{c(){e=z("figcaption"),a&&a.c(),this.h()},l(o){e=E(o,"FIGCAPTION",{class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){T(e,"class","text-center text-xs mt-2")},m(o,r){u(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&1)&&Ci(a,i,o,o[0],t?Si(i,o[0],r,null):Hi(o[0]),null)},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Ql(l,e,t){let{$$slots:i={},$$scope:a}=e;return l.$$set=o=>{"$$scope"in o&&t(0,a=o.$$scope)},[a,i]}class nt extends ht{constructor(e){super(),ct(this,e,Ql,Yl,lt,{})}}const{window:th}=Pl;function eh(l){let e,t='<nav class="border-r-2 sticky top-12"><div><section><ul class="menu"><li><a href="#intro">Intro</a></li> <li><a href="#lorenz">Lorenz Attractor</a></li> <li><a href="#nhits">Neural Architecture</a></li> <li><a href="#experiments">Experiments</a></li> <ul class="text-sm submenu"><li><a href="#datagen">Data Generation</a></li> <li><a href="#model-1">Model 1</a></li> <li><a href="#model-2">Model 2</a></li> <li><a href="#model-3">Model 3</a></li> <li><a href="#arpred">Autoregressive Prediction</a></li></ul> <li><a href="#discussion">Discussion</a></li> <li><a href="#references">References</a></li></ul></section></div></nav>',i,a;return{c(){e=z("aside"),e.innerHTML=t,this.h()},l(o){e=E(o,"ASIDE",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-u7i093"&&(e.innerHTML=t),this.h()},h(){T(e,"class","max-sm:hidden")},m(o,r){u(o,e,r),i||(a=El(th,"scroll",l[0]),i=!0)},p:W,i:W,o:W,d(o){o&&s(e),i=!1,a()}}}function nh(l){const e=["intro","lorenz","nhits","experiments","datagen","model-1","model-2","model-3","arpred","discussion","references"],t=["bg-rose-100","rounded"];let i=e[0];const a=n=>{const g="a[href='#"+n+"']";return document.querySelector(g)},o=n=>{const g=a(n).parentElement;t.forEach(_=>g.classList.add(_))},r=n=>{const g=a(n).parentElement;t.forEach(_=>g.classList.remove(_))},m=()=>{let n;e.forEach(g=>{const _=document.getElementById(g);window.scrollY>=_.offsetTop-1&&(n=g)}),n&&n!=i&&(r(i),i=n,o(i))};return Ml(()=>{o(i),m()}),[m]}class ih extends ht{constructor(e){super(),ct(this,e,nh,eh,lt,{})}}function oh(l){return Ml(()=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",e.async=!0,document.head.append(e),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[]}class ah extends ht{constructor(e){super(),ct(this,e,oh,null,lt,{})}}const sh=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,rh=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,lh=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,hh=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,ch=`
\\begin{align}
\\operatorname{J}(z) := exp(-\\frac{z^2}{2}) \\\\
\\end{align}`,fh=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],mh=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~687 million"}],uh=[{desc:"horizon",val:500},{desc:"lookback",val:1e3},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"},{desc:"total trainable parameters",val:"~857 million"}];function ph(l){let e,t,i,a,o,r,m;return document.title=e=io,{c(){t=z("meta"),i=z("meta"),a=z("meta"),o=z("meta"),r=z("meta"),m=z("meta"),this.h()},l(n){const g=Ll("svelte-xp42rc",document.head);t=E(g,"META",{name:!0,content:!0}),i=E(g,"META",{property:!0,content:!0}),a=E(g,"META",{property:!0,content:!0}),o=E(g,"META",{property:!0,content:!0}),r=E(g,"META",{property:!0,content:!0}),m=E(g,"META",{property:!0,content:!0}),g.forEach(s),this.h()},h(){T(t,"name","description"),T(t,"content",jl),T(i,"property","og:type"),T(i,"content","article"),T(a,"property","og:url"),T(a,"content","https://nrxszvo.github.io/nhits-lorenz"),T(o,"property","og:description"),T(o,"content",jl),T(r,"property","og:image"),T(r,"content","https://nrxszvo.github.io/thumbnail.png"),T(m,"property","og:title"),T(m,"content",io)},m(n,g){p(document.head,t),p(document.head,i),p(document.head,a),p(document.head,o),p(document.head,r),p(document.head,m)},p(n,[g]){g&0&&e!==(e=io)&&(document.title=e)},i:W,o:W,d(n){s(t),s(i),s(a),s(o),s(r),s(m)}}}const io="Generic Deep Learning for Chaotic Dynamics: A Case Study on the Lorenz Attractor",jl="Experiments using the NHiTS neural forecasting architecture to model the Lorenz Attractor; analysis of Z coordinate local maximum converging to 38.5";class dh extends ht{constructor(e){super(),ct(this,e,null,ph,lt,{})}}function $h(l){let e;return{c(){e=h("mochaNN")},l(t){e=c(t,"mochaNN")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function gh(l){let e,t="tl;dr";return{c(){e=z("i"),e.textContent=t,this.h()},l(i){e=E(i,"I",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-ixj9gt"&&(e.textContent=t),this.h()},h(){T(e,"class","font-serif")},m(i,a){u(i,e,a)},p:W,d(i){i&&s(e)}}}function wh(l){let e;return{c(){e=h("Lorenz Map")},l(t){e=c(t,"Lorenz Map")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function vh(l){let e;return{c(){e=h("sMAPE")},l(t){e=c(t,"sMAPE")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function yh(l){let e;return{c(){e=h("Introduction")},l(t){e=c(t,"Introduction")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function bh(l){let e,t,i="Model scale versus domain knowledge in statistical forecasting of chaotic systems",a,o,r,m,n,g,_,d,v,M,H='<a href="#sabine">1</a>',N,F;return o=new Y({props:{id:"gilpin"}}),m=new Y({props:{id:"gilpin"}}),g=new Y({props:{id:"seo"}}),d=new Y({props:{id:"degrave"}}),{c(){e=h(`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=z("i"),t.textContent=i,a=L(),x(o.$$.fragment),r=h(`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),x(m.$$.fragment),n=h(`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),x(g.$$.fragment),_=h(", "),x(d.$$.fragment),v=h(")"),M=z("sup"),M.innerHTML=H,N=h(`.
		`)},l(A){e=c(A,`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=E(A,"I",{"data-svelte-h":!0}),V(t)!=="svelte-oq8z8z"&&(t.textContent=i),a=P(A),k(o.$$.fragment,A),r=c(A,`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),k(m.$$.fragment,A),n=c(A,`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),k(g.$$.fragment,A),_=c(A,", "),k(d.$$.fragment,A),v=c(A,")"),M=E(A,"SUP",{"data-svelte-h":!0}),V(M)!=="svelte-6x9dc9"&&(M.innerHTML=H),N=c(A,`.
		`)},m(A,C){u(A,e,C),u(A,t,C),u(A,a,C),I(o,A,C),u(A,r,C),I(m,A,C),u(A,n,C),I(g,A,C),u(A,_,C),I(d,A,C),u(A,v,C),u(A,M,C),u(A,N,C),F=!0},p:W,i(A){F||(y(o.$$.fragment,A),y(m.$$.fragment,A),y(g.$$.fragment,A),y(d.$$.fragment,A),F=!0)},o(A){b(o.$$.fragment,A),b(m.$$.fragment,A),b(g.$$.fragment,A),b(d.$$.fragment,A),F=!1},d(A){A&&(s(e),s(t),s(a),s(r),s(n),s(_),s(v),s(M),s(N)),j(o,A),j(m,A),j(g,A),j(d,A)}}}function _h(l){let e,t,i="i.e.",a,o,r='<a href="#paperspace">2</a>',m,n,g='<a href="#brunton">3</a>',_;return{c(){e=h(`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=z("i"),t.textContent=i,a=h(`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),o=z("sup"),o.innerHTML=r,m=h(`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=z("sup"),n.innerHTML=g,_=h(`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},l(d){e=c(d,`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=E(d,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1xx6z5c"&&(t.textContent=i),a=c(d,`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),o=E(d,"SUP",{"data-svelte-h":!0}),V(o)!=="svelte-yuo1gg"&&(o.innerHTML=r),m=c(d,`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=E(d,"SUP",{"data-svelte-h":!0}),V(n)!=="svelte-a7rqq8"&&(n.innerHTML=g),_=c(d,`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},m(d,v){u(d,e,v),u(d,t,v),u(d,a,v),u(d,o,v),u(d,m,v),u(d,n,v),u(d,_,v)},p:W,d(d){d&&(s(e),s(t),s(a),s(o),s(m),s(n),s(_))}}}function xh(l){let e;return{c(){e=h(`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},l(t){e=c(t,`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function kh(l){let e;return{c(){e=h("Youtube channel")},l(t){e=c(t,"Youtube channel")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ih(l){let e;return{c(){e=h("lecture series")},l(t){e=c(t,"lecture series")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function jh(l){let e;return{c(){e=h("The Lorenz Attractor")},l(t){e=c(t,"The Lorenz Attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Mh(l){let e;return{c(){e=h("sensitivity to initial conditions")},l(t){e=c(t,"sensitivity to initial conditions")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Th(l){let e;return{c(){e=h("n-body problem")},l(t){e=c(t,"n-body problem")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ah(l){let e;return{c(){e=h("Lorenz Attractor")},l(t){e=c(t,"Lorenz Attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function zh(l){let e,t,i,a,o,r,m,n,g,_;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Butterfly_effect",$$slots:{default:[Mh]},$$scope:{ctx:l}}}),a=new B({props:{href:"https://en.wikipedia.org/wiki/N-body_problem",$$slots:{default:[Th]},$$scope:{ctx:l}}}),r=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[Ah]},$$scope:{ctx:l}}}),n=new Y({props:{id:"oestreicher"}}),{c(){e=h("Although the phenomon of "),x(t.$$.fragment),i=h(` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),x(a.$$.fragment),o=h(", the birth of modern chaos theory is generally associated with the discovery of the "),x(r.$$.fragment),m=h(`
			by Edward Lorenz et. al. in 1963 `),x(n.$$.fragment),g=h(`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},l(d){e=c(d,"Although the phenomon of "),k(t.$$.fragment,d),i=c(d,` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),k(a.$$.fragment,d),o=c(d,", the birth of modern chaos theory is generally associated with the discovery of the "),k(r.$$.fragment,d),m=c(d,`
			by Edward Lorenz et. al. in 1963 `),k(n.$$.fragment,d),g=c(d,`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},m(d,v){u(d,e,v),I(t,d,v),u(d,i,v),I(a,d,v),u(d,o,v),I(r,d,v),u(d,m,v),I(n,d,v),u(d,g,v),_=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M);const H={};v&1&&(H.$$scope={dirty:v,ctx:d}),a.$set(H);const N={};v&1&&(N.$$scope={dirty:v,ctx:d}),r.$set(N)},i(d){_||(y(t.$$.fragment,d),y(a.$$.fragment,d),y(r.$$.fragment,d),y(n.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),b(a.$$.fragment,d),b(r.$$.fragment,d),b(n.$$.fragment,d),_=!1},d(d){d&&(s(e),s(i),s(o),s(m),s(g)),j(t,d),j(a,d),j(r,d),j(n,d)}}}function Eh(l){let e;return{c(){e=h("The Lorenz Attractor")},l(t){e=c(t,"The Lorenz Attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Lh(l){let e;return{c(){e=h(`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},l(t){e=c(t,`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ph(l){let e;return{c(){e=h("strange attractor")},l(t){e=c(t,"strange attractor")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ch(l){let e;return{c(){e=h("Hausdorff dimension")},l(t){e=c(t,"Hausdorff dimension")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Hh(l){let e,t,i="Attractor",a,o,r,m,n,g;return o=new B({props:{href:"https://en.wikipedia.org/wiki/Attractor#Strange_attractor",$$slots:{default:[Ph]},$$scope:{ctx:l}}}),m=new B({props:{href:"https://en.wikipedia.org/wiki/Hausdorff_dimension",$$slots:{default:[Ch]},$$scope:{ctx:l}}}),{c(){e=h("The Lorenz "),t=z("i"),t.textContent=i,a=h(` refers to a set of chaotic solutions to the system that
			constitute a `),x(o.$$.fragment),r=h(`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),x(m.$$.fragment),n=h(` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},l(_){e=c(_,"The Lorenz "),t=E(_,"I",{"data-svelte-h":!0}),V(t)!=="svelte-7jrnvq"&&(t.textContent=i),a=c(_,` refers to a set of chaotic solutions to the system that
			constitute a `),k(o.$$.fragment,_),r=c(_,`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),k(m.$$.fragment,_),n=c(_,` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},m(_,d){u(_,e,d),u(_,t,d),u(_,a,d),I(o,_,d),u(_,r,d),I(m,_,d),u(_,n,d),g=!0},p(_,d){const v={};d&1&&(v.$$scope={dirty:d,ctx:_}),o.$set(v);const M={};d&1&&(M.$$scope={dirty:d,ctx:_}),m.$set(M)},i(_){g||(y(o.$$.fragment,_),y(m.$$.fragment,_),g=!0)},o(_){b(o.$$.fragment,_),b(m.$$.fragment,_),g=!1},d(_){_&&(s(e),s(t),s(a),s(r),s(n)),j(o,_),j(m,_)}}}function Sh(l){let e;return{c(){e=h("Hopf bifurcation")},l(t){e=c(t,"Hopf bifurcation")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Rh(l){let e,t="$\\rho$",i,a,o="$\\rho \\lt 1$",r,m,n="$\\rho \\approx 24.7$",g,_,d,v,M;return d=new B({props:{href:"https://en.wikipedia.org/wiki/Hopf_bifurcation",$$slots:{default:[Sh]},$$scope:{ctx:l}}}),{c(){e=h("Other parameterizations of interest generally involve varying the "),i=h(t),a=h(` parameter,
			for example, `),r=h(o),m=h(" in which the system is stable, and "),g=h(n),_=h(`,
			at which a `),x(d.$$.fragment),v=h(" occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},l(H){e=c(H,"Other parameterizations of interest generally involve varying the "),i=c(H,t),a=c(H,` parameter,
			for example, `),r=c(H,o),m=c(H," in which the system is stable, and "),g=c(H,n),_=c(H,`,
			at which a `),k(d.$$.fragment,H),v=c(H," occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},m(H,N){u(H,e,N),u(H,i,N),u(H,a,N),u(H,r,N),u(H,m,N),u(H,g,N),u(H,_,N),I(d,H,N),u(H,v,N),M=!0},p(H,N){const F={};N&1&&(F.$$scope={dirty:N,ctx:H}),d.$set(F)},i(H){M||(y(d.$$.fragment,H),M=!0)},o(H){b(d.$$.fragment,H),M=!1},d(H){H&&(s(e),s(i),s(a),s(r),s(m),s(g),s(_),s(v)),j(d,H)}}}function Nh(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Dh(l){let e,t,i,a;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Nh]},$$scope:{ctx:l}}}),{c(){e=h("For all trajectories in this project, I used Gilpin's "),x(t.$$.fragment),i=h(` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},l(o){e=c(o,"For all trajectories in this project, I used Gilpin's "),k(t.$$.fragment,o),i=c(o,` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},m(o,r){u(o,e,r),I(t,o,r),u(o,i,r),a=!0},p(o,r){const m={};r&1&&(m.$$scope={dirty:r,ctx:o}),t.$set(m)},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Gh(l){let e;return{c(){e=h("Neural Architecture: N-HiTS")},l(t){e=c(t,"Neural Architecture: N-HiTS")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function qh(l){let e,t,i,a,o,r;return t=new Y({props:{id:"challu"}}),a=new Y({props:{id:"gilpin"}}),{c(){e=h("The N-HiTS "),x(t.$$.fragment),i=h(` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),x(a.$$.fragment),o=h(`, it seemed like the natural starting point
			for a network architecture.`)},l(m){e=c(m,"The N-HiTS "),k(t.$$.fragment,m),i=c(m,` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),k(a.$$.fragment,m),o=c(m,`, it seemed like the natural starting point
			for a network architecture.`)},m(m,n){u(m,e,n),I(t,m,n),u(m,i,n),I(a,m,n),u(m,o,n),r=!0},p:W,i(m){r||(y(t.$$.fragment,m),y(a.$$.fragment,m),r=!0)},o(m){b(t.$$.fragment,m),b(a.$$.fragment,m),r=!1},d(m){m&&(s(e),s(i),s(o)),j(t,m),j(a,m)}}}function Fh(l){let e,t,i,a,o,r;return t=new Y({props:{id:"oreshkin"}}),a=new Y({props:{id:"oreshkin"}}),{c(){e=h("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),x(t.$$.fragment),i=h(`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),x(a.$$.fragment),o=h(".")},l(m){e=c(m,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),k(t.$$.fragment,m),i=c(m,`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),k(a.$$.fragment,m),o=c(m,".")},m(m,n){u(m,e,n),I(t,m,n),u(m,i,n),I(a,m,n),u(m,o,n),r=!0},p:W,i(m){r||(y(t.$$.fragment,m),y(a.$$.fragment,m),r=!0)},o(m){b(t.$$.fragment,m),b(a.$$.fragment,m),r=!1},d(m){m&&(s(e),s(i),s(o)),j(t,m),j(a,m)}}}function Zh(l){let e,t,i,a;return t=new Y({props:{id:"challu"}}),{c(){e=h(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),x(t.$$.fragment),i=h(".")},l(o){e=c(o,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),k(t.$$.fragment,o),i=c(o,".")},m(o,r){u(o,e,r),I(t,o,r),u(o,i,r),a=!0},p:W,i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Vh(l){let e;return{c(){e=h("Experiments")},l(t){e=c(t,"Experiments")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Bh(l){let e,t,i,a;return t=new Y({props:{id:"gilpin"}}),{c(){e=h(`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),x(t.$$.fragment),i=h(`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},l(o){e=c(o,`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),k(t.$$.fragment,o),i=c(o,`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},m(o,r){u(o,e,r),I(t,o,r),u(o,i,r),a=!0},p:W,i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Uh(l){let e;return{c(){e=h("Data Generation")},l(t){e=c(t,"Data Generation")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Wh(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Oh(l){let e;return{c(){e=h("IVP solver")},l(t){e=c(t,"IVP solver")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Kh(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Jh(l){let e,t="$H$",i,a,o="$dt$",r,m,n="$0.015$",g,_,d,v,M,H,N="$dt$",F,A,C,Z="after",O,et="$dt$",K,G,q,J,tt="$\\approx 1.8\\mathrm{e}{-4}$",X,ft,ot;return d=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Wh]},$$scope:{ctx:l}}}),M=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[Oh]},$$scope:{ctx:l}}}),q=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Kh]},$$scope:{ctx:l}}}),{c(){e=h("I begin with a horizon (prediction window), "),i=h(t),a=h(", of 100 points, using a "),r=h(o),m=h(` of
			approximately
			`),g=h(n),_=h(" seconds per point (the default from "),x(d.$$.fragment),v=h(") to sample the solution produced by the "),x(M.$$.fragment),H=h(". Importantly, note that this "),F=h(N),A=h(` is only the one used for sampling the solution
			`),C=z("i"),C.textContent=Z,O=h(`
			it is generated by the IVP solver. The actual `),K=h(et),G=h(` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),x(q.$$.fragment),J=h(" is "),X=h(tt),ft=h(`.
		`)},l(S){e=c(S,"I begin with a horizon (prediction window), "),i=c(S,t),a=c(S,", of 100 points, using a "),r=c(S,o),m=c(S,` of
			approximately
			`),g=c(S,n),_=c(S," seconds per point (the default from "),k(d.$$.fragment,S),v=c(S,") to sample the solution produced by the "),k(M.$$.fragment,S),H=c(S,". Importantly, note that this "),F=c(S,N),A=c(S,` is only the one used for sampling the solution
			`),C=E(S,"I",{"data-svelte-h":!0}),V(C)!=="svelte-10nlrz4"&&(C.textContent=Z),O=c(S,`
			it is generated by the IVP solver. The actual `),K=c(S,et),G=c(S,` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),k(q.$$.fragment,S),J=c(S," is "),X=c(S,tt),ft=c(S,`.
		`)},m(S,U){u(S,e,U),u(S,i,U),u(S,a,U),u(S,r,U),u(S,m,U),u(S,g,U),u(S,_,U),I(d,S,U),u(S,v,U),I(M,S,U),u(S,H,U),u(S,F,U),u(S,A,U),u(S,C,U),u(S,O,U),u(S,K,U),u(S,G,U),I(q,S,U),u(S,J,U),u(S,X,U),u(S,ft,U),ot=!0},p(S,U){const fi={};U&1&&(fi.$$scope={dirty:U,ctx:S}),d.$set(fi);const mi={};U&1&&(mi.$$scope={dirty:U,ctx:S}),M.$set(mi);const Ri={};U&1&&(Ri.$$scope={dirty:U,ctx:S}),q.$set(Ri)},i(S){ot||(y(d.$$.fragment,S),y(M.$$.fragment,S),y(q.$$.fragment,S),ot=!0)},o(S){b(d.$$.fragment,S),b(M.$$.fragment,S),b(q.$$.fragment,S),ot=!1},d(S){S&&(s(e),s(i),s(a),s(r),s(m),s(g),s(_),s(v),s(H),s(F),s(A),s(C),s(O),s(K),s(G),s(J),s(X),s(ft)),j(d,S),j(M,S),j(q,S)}}}function Xh(l){let e;return{c(){e=h("Lyapunov exponent")},l(t){e=c(t,"Lyapunov exponent")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Yh(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Qh(l){let e;return{c(){e=h("Lyapunov time")},l(t){e=c(t,"Lyapunov time")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function tc(l){let e,t,i,a,o,r="$\\lambda_{max}$",m,n,g="$0.8917$",_,d,v,M,H="$1.121s$",N,F,A;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[Xh]},$$scope:{ctx:l}}}),a=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Yh]},$$scope:{ctx:l}}}),v=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[Qh]},$$scope:{ctx:l}}}),{c(){e=h(`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),x(t.$$.fragment),i=h(`.
			As reported in
			`),x(a.$$.fragment),o=h(", the Lyapunov exponent, "),m=h(r),n=h(`,
			for the Lorenz Attractor is approx. `),_=h(g),d=h(", and so the "),x(v.$$.fragment),M=h(` is approx.
			`),N=h(H),F=h(".")},l(C){e=c(C,`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),k(t.$$.fragment,C),i=c(C,`.
			As reported in
			`),k(a.$$.fragment,C),o=c(C,", the Lyapunov exponent, "),m=c(C,r),n=c(C,`,
			for the Lorenz Attractor is approx. `),_=c(C,g),d=c(C,", and so the "),k(v.$$.fragment,C),M=c(C,` is approx.
			`),N=c(C,H),F=c(C,".")},m(C,Z){u(C,e,Z),I(t,C,Z),u(C,i,Z),I(a,C,Z),u(C,o,Z),u(C,m,Z),u(C,n,Z),u(C,_,Z),u(C,d,Z),I(v,C,Z),u(C,M,Z),u(C,N,Z),u(C,F,Z),A=!0},p(C,Z){const O={};Z&1&&(O.$$scope={dirty:Z,ctx:C}),t.$set(O);const et={};Z&1&&(et.$$scope={dirty:Z,ctx:C}),a.$set(et);const K={};Z&1&&(K.$$scope={dirty:Z,ctx:C}),v.$set(K)},i(C){A||(y(t.$$.fragment,C),y(a.$$.fragment,C),y(v.$$.fragment,C),A=!0)},o(C){b(t.$$.fragment,C),b(a.$$.fragment,C),b(v.$$.fragment,C),A=!1},d(C){C&&(s(e),s(i),s(o),s(m),s(n),s(_),s(d),s(M),s(N),s(F)),j(t,C),j(a,C),j(v,C)}}}function ec(l){let e,t,i="on average",a,o="$e$",r,m,n="$1.121$",g,_,d="$\\frac{4}{3}$",v,M,H,N='<a href="#lyapunov">1</a>',F;return{c(){e=h("This tells us that, "),t=z("i"),t.textContent=i,a=h(`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=h(o),m=h(` after
			`),g=h(n),_=h(` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=h(d),M=h(`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),H=z("sup"),H.innerHTML=N,F=h(`, a
			defining feature of all chaotic systems.`)},l(A){e=c(A,"This tells us that, "),t=E(A,"I",{"data-svelte-h":!0}),V(t)!=="svelte-ggx8py"&&(t.textContent=i),a=c(A,`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=c(A,o),m=c(A,` after
			`),g=c(A,n),_=c(A,` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=c(A,d),M=c(A,`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),H=E(A,"SUP",{"data-svelte-h":!0}),V(H)!=="svelte-1b4twc5"&&(H.innerHTML=N),F=c(A,`, a
			defining feature of all chaotic systems.`)},m(A,C){u(A,e,C),u(A,t,C),u(A,a,C),u(A,r,C),u(A,m,C),u(A,g,C),u(A,_,C),u(A,v,C),u(A,M,C),u(A,H,C),u(A,F,C)},p:W,d(A){A&&(s(e),s(t),s(a),s(r),s(m),s(g),s(_),s(v),s(M),s(H),s(F))}}}function nc(l){let e,t="$[-9.79, -15.04, 20.53]$",i,a,o="$[0.99,1.01]$",r,m;return{c(){e=h(`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=h(t),a=h(` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=h(o),m=h(".")},l(n){e=c(n,`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=c(n,t),a=c(n,` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=c(n,o),m=c(n,".")},m(n,g){u(n,e,g),u(n,i,g),u(n,a,g),u(n,r,g),u(n,m,g)},p:W,d(n){n&&(s(e),s(i),s(a),s(r),s(m))}}}function ic(l){let e,t="$3*100 = 300$",i,a,o="$3 * (500 + 100) = 1800$",r,m;return{c(){e=h(`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=h(t),a=h(`, and each
			training sample's length is `),r=h(o),m=h(").")},l(n){e=c(n,`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=c(n,t),a=c(n,`, and each
			training sample's length is `),r=c(n,o),m=c(n,").")},m(n,g){u(n,e,g),u(n,i,g),u(n,a,g),u(n,r,g),u(n,m,g)},p:W,d(n){n&&(s(e),s(i),s(a),s(r),s(m))}}}function oc(l){let e,t=`$10,000 - 600 +
		1 = 9401$`,i,a,o,r='<a href="#initial-conditions">2</a>',m;return{c(){e=h(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=h(t),a=h(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),o=z("sup"),o.innerHTML=r,m=h(".")},l(n){e=c(n,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=c(n,t),a=c(n,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),o=E(n,"SUP",{"data-svelte-h":!0}),V(o)!=="svelte-uv3gx8"&&(o.innerHTML=r),m=c(n,".")},m(n,g){u(n,e,g),u(n,i,g),u(n,a,g),u(n,o,g),u(n,m,g)},p:W,d(n){n&&(s(e),s(i),s(a),s(o),s(m))}}}function ac(l){let e;return{c(){e=h("Model 1")},l(t){e=c(t,"Model 1")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function sc(l){let e;return{c(){e=h("The full set of N-HiTS hyperparameters for the first model configuration is:")},l(t){e=c(t,"The full set of N-HiTS hyperparameters for the first model configuration is:")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function rc(l){let e,t,i,a,o,r;return t=new Y({props:{id:"challu"}}),a=new Y({props:{id:"gilpin"}}),{c(){e=h("The model is optimized with MAE loss, consistent with the default loss from "),x(t.$$.fragment),i=h(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),x(a.$$.fragment),o=h(":")},l(m){e=c(m,"The model is optimized with MAE loss, consistent with the default loss from "),k(t.$$.fragment,m),i=c(m,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),k(a.$$.fragment,m),o=c(m,":")},m(m,n){u(m,e,n),I(t,m,n),u(m,i,n),I(a,m,n),u(m,o,n),r=!0},p:W,i(m){r||(y(t.$$.fragment,m),y(a.$$.fragment,m),r=!0)},o(m){b(t.$$.fragment,m),b(a.$$.fragment,m),r=!1},d(m){m&&(s(e),s(i),s(o)),j(t,m),j(a,m)}}}function lc(l){let e;return{c(){e=h(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},l(t){e=c(t,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function hc(l){let e;return{c(){e=h("Model 1 - sMAPE error distribution on the test set")},l(t){e=c(t,"Model 1 - sMAPE error distribution on the test set")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function cc(l){let e;return{c(){e=h(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},l(t){e=c(t,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function fc(l){let e;return{c(){e=h(`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},l(t){e=c(t,`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function mc(l){let e;return{c(){e=h(`One interesting observation in all three graphs is that there appears to be a kind of
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
			alignment within the prediction window.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function uc(l){let e;return{c(){e=h(`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},l(t){e=c(t,`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function pc(l){let e;return{c(){e=h("critical points")},l(t){e=c(t,"critical points")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function dc(l){let e,t,i,a,o,r,m,n,g,_;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[pc]},$$scope:{ctx:l}}}),a=new Y({props:{id:"osinga"}}),r=new Y({props:{id:"osinga"}}),n=new Y({props:{id:"osinga"}}),{c(){e=h(`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),x(t.$$.fragment),i=h(` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),x(a.$$.fragment),o=h(` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),x(r.$$.fragment),m=h(`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),x(n.$$.fragment),g=h(`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},l(d){e=c(d,`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),k(t.$$.fragment,d),i=c(d,` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),k(a.$$.fragment,d),o=c(d,` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),k(r.$$.fragment,d),m=c(d,`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),k(n.$$.fragment,d),g=c(d,`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},m(d,v){u(d,e,v),I(t,d,v),u(d,i,v),I(a,d,v),u(d,o,v),I(r,d,v),u(d,m,v),I(n,d,v),u(d,g,v),_=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M)},i(d){_||(y(t.$$.fragment,d),y(a.$$.fragment,d),y(r.$$.fragment,d),y(n.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),b(a.$$.fragment,d),b(r.$$.fragment,d),b(n.$$.fragment,d),_=!1},d(d){d&&(s(e),s(i),s(o),s(m),s(g)),j(t,d),j(a,d),j(r,d),j(n,d)}}}function $c(l){let e;return{c(){e=h("Hartman-Grobman Theorem")},l(t){e=c(t,"Hartman-Grobman Theorem")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function gc(l){let e,t,i,a="$f(t) = \\exp(\\lambda t)x_0$",o,r,m="$\\lambda$",n,g,_="$x_0$",d,v,M="$\\approx 11.8$",H,N,F;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem",$$slots:{default:[$c]},$$scope:{ctx:l}}}),{c(){e=h(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),x(t.$$.fragment),i=h(`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),o=h(a),r=h(`,
			where `),n=h(m),g=h(" equals the eigenvalue and "),d=h(_),v=h(` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),H=h(M),N=h(`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},l(A){e=c(A,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),k(t.$$.fragment,A),i=c(A,`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),o=c(A,a),r=c(A,`,
			where `),n=c(A,m),g=c(A," equals the eigenvalue and "),d=c(A,_),v=c(A,` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),H=c(A,M),N=c(A,`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},m(A,C){u(A,e,C),I(t,A,C),u(A,i,C),u(A,o,C),u(A,r,C),u(A,n,C),u(A,g,C),u(A,d,C),u(A,v,C),u(A,H,C),u(A,N,C),F=!0},p(A,C){const Z={};C&1&&(Z.$$scope={dirty:C,ctx:A}),t.$set(Z)},i(A){F||(y(t.$$.fragment,A),F=!0)},o(A){b(t.$$.fragment,A),F=!1},d(A){A&&(s(e),s(i),s(o),s(r),s(n),s(g),s(d),s(v),s(H),s(N)),j(t,A)}}}function wc(l){let e;return{c(){e=h(`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},l(t){e=c(t,`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function vc(l){let e;return{c(){e=h(`Given all of this background, it is now unsurprising that the model is struggling to
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
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function yc(l){let e;return{c(){e=h("Model 2")},l(t){e=c(t,"Model 2")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function bc(l){let e;return{c(){e=h(`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},l(t){e=c(t,`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function _c(l){let e;return{c(){e=h("Model 2 vs Model 1 - sMAPE error distribution.")},l(t){e=c(t,"Model 2 vs Model 1 - sMAPE error distribution.")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function xc(l){let e;return{c(){e=h(`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},l(t){e=c(t,`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function kc(l){let e;return{c(){e=h(`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},l(t){e=c(t,`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ic(l){let e;return{c(){e=h("Model 2 - sMAPE errors per series per window in the test set.")},l(t){e=c(t,"Model 2 - sMAPE errors per series per window in the test set.")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function jc(l){let e;return{c(){e=h(`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},l(t){e=c(t,`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Mc(l){let e;return{c(){e=h(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},l(t){e=c(t,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Tc(l){let e;return{c(){e=h(`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},l(t){e=c(t,`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ac(l){let e,t="$n$",i,a,o="$n-1$",r,m,n="$n+1$",g,_;return{c(){e=h(`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=h(t),a=h(`
				that is closer to the origin than the points at `),r=h(o),m=h(" and "),g=h(n),_=h(".")},l(d){e=c(d,`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=c(d,t),a=c(d,`
				that is closer to the origin than the points at `),r=c(d,o),m=c(d," and "),g=c(d,n),_=c(d,".")},m(d,v){u(d,e,v),u(d,i,v),u(d,a,v),u(d,r,v),u(d,m,v),u(d,g,v),u(d,_,v)},p:W,d(d){d&&(s(e),s(i),s(a),s(r),s(m),s(g),s(_))}}}function zc(l){let e;return{c(){e=h(`As we can clearly see from the plot, Model 2 is able to predict points that are closer
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
			strategy?`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Ec(l){let e;return{c(){e=h("Model 3")},l(t){e=c(t,"Model 3")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Lc(l){let e;return{c(){e=h(`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},l(t){e=c(t,`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Pc(l){let e;return{c(){e=h("3.1: Biased Dataset Distribution")},l(t){e=c(t,"3.1: Biased Dataset Distribution")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Cc(l){let e;return{c(){e=h("Radau solver")},l(t){e=c(t,"Radau solver")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Hc(l){let e,t,i,a="$1\\mathrm{e}{30}$",o,r,m;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Cc]},$$scope:{ctx:l}}}),{c(){e=h(`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. In all of my attempts using the `),x(t.$$.fragment),i=h(` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),o=h(a),r=h(`
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
			exponentially. In all of my attempts using the `),k(t.$$.fragment,n),i=c(n,` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),o=c(n,a),r=c(n,`
			after about 0.5 seconds.`)},m(n,g){u(n,e,g),I(t,n,g),u(n,i,g),u(n,o,g),u(n,r,g),m=!0},p(n,g){const _={};g&1&&(_.$$scope={dirty:g,ctx:n}),t.$set(_)},i(n){m||(y(t.$$.fragment,n),m=!0)},o(n){b(t.$$.fragment,n),m=!1},d(n){n&&(s(e),s(i),s(o),s(r)),j(t,n)}}}function Sc(l){let e,t="$t \\to \\infty$",i,a,o,r="might",m,n,g="e.g.",_,d,v;return _=new Y({props:{id:"osinga"}}),{c(){e=h(`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=h(t),a=h(`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),o=z("i"),o.textContent=r,m=h(` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=z("i"),n.textContent=g,x(_.$$.fragment),d=h(`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},l(M){e=c(M,`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=c(M,t),a=c(M,`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),o=E(M,"I",{"data-svelte-h":!0}),V(o)!=="svelte-ah22qx"&&(o.textContent=r),m=c(M,` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=E(M,"I",{"data-svelte-h":!0}),V(n)!=="svelte-1yxphdm"&&(n.textContent=g),k(_.$$.fragment,M),d=c(M,`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},m(M,H){u(M,e,H),u(M,i,H),u(M,a,H),u(M,o,H),u(M,m,H),u(M,n,H),I(_,M,H),u(M,d,H),v=!0},p:W,i(M){v||(y(_.$$.fragment,M),v=!0)},o(M){b(_.$$.fragment,M),v=!1},d(M){M&&(s(e),s(i),s(a),s(o),s(m),s(n),s(d)),j(_,M)}}}function Rc(l){let e,t="$\\lt{3}$",i,a;return{c(){e=h(`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=h(t),a=h(`
			by a factor of about 10, while the total number of windows is the same as before:`)},l(o){e=c(o,`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=c(o,t),a=c(o,`
			by a factor of about 10, while the total number of windows is the same as before:`)},m(o,r){u(o,e,r),u(o,i,r),u(o,a,r)},p:W,d(o){o&&(s(e),s(i),s(a))}}}function Nc(l){let e;return{c(){e=h(`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},l(t){e=c(t,`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Dc(l){let e;return{c(){e=h(`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},l(t){e=c(t,`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Gc(l){let e;return{c(){e=h(`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},l(t){e=c(t,`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function qc(l){let e;return{c(){e=h(`Possibly we might continue to see incremental improvements if we continue to increase
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
			dataset size to address this problem first.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Fc(l){let e,t="$dt$",i;return{c(){e=h("3.2: Reduced "),i=h(t)},l(a){e=c(a,"3.2: Reduced "),i=c(a,t)},m(a,o){u(a,e,o),u(a,i,o)},p:W,d(a){a&&(s(e),s(i))}}}function Zc(l){let e,t="$dt$",i,a,o="$dt$",r,m,n="$\\approx0.015$",g,_,d="$\\approx0.003$",v,M,H="$\\approx1.5$",N,F,A="$2H$",C,Z,O="$5H$",et,K;return{c(){e=h("The next idea is to increase the temporal resolution of the model by using a smaller "),i=h(t),a=h(`
			to generate the data points. So far I've used a `),r=h(o),m=h(" of "),g=h(n),_=h(`. Here
			I'll try reducing that by a factor of 5 to `),v=h(d),M=h(`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),N=h(H),F=h(`
			seconds. From tuning, I found that an input size of `),C=h(A),Z=h(` performs just as well as an
			input size of `),et=h(O),K=h(`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},l(G){e=c(G,"The next idea is to increase the temporal resolution of the model by using a smaller "),i=c(G,t),a=c(G,`
			to generate the data points. So far I've used a `),r=c(G,o),m=c(G," of "),g=c(G,n),_=c(G,`. Here
			I'll try reducing that by a factor of 5 to `),v=c(G,d),M=c(G,`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),N=c(G,H),F=c(G,`
			seconds. From tuning, I found that an input size of `),C=c(G,A),Z=c(G,` performs just as well as an
			input size of `),et=c(G,O),K=c(G,`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},m(G,q){u(G,e,q),u(G,i,q),u(G,a,q),u(G,r,q),u(G,m,q),u(G,g,q),u(G,_,q),u(G,v,q),u(G,M,q),u(G,N,q),u(G,F,q),u(G,C,q),u(G,Z,q),u(G,et,q),u(G,K,q)},p:W,d(G){G&&(s(e),s(i),s(a),s(r),s(m),s(g),s(_),s(v),s(M),s(N),s(F),s(C),s(Z),s(et),s(K))}}}function Vc(l){let e;return{c(){e=h("The new hyperparameters for Model 3.2 are:")},l(t){e=c(t,"The new hyperparameters for Model 3.2 are:")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Bc(l){let e;return{c(){e=h("FSDP Strategy")},l(t){e=c(t,"FSDP Strategy")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Uc(l){let e,t="A sidenote on the practicality of training this model:",i,a,o,r;return a=new B({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[Bc]},$$scope:{ctx:l}}}),{c(){e=z("b"),e.textContent=t,i=h(`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),x(a.$$.fragment),o=h(` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},l(m){e=E(m,"B",{"data-svelte-h":!0}),V(e)!=="svelte-1vhs7sz"&&(e.textContent=t),i=c(m,`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),k(a.$$.fragment,m),o=c(m,` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},m(m,n){u(m,e,n),u(m,i,n),I(a,m,n),u(m,o,n),r=!0},p(m,n){const g={};n&1&&(g.$$scope={dirty:n,ctx:m}),a.$set(g)},i(m){r||(y(a.$$.fragment,m),r=!0)},o(m){b(a.$$.fragment,m),r=!1},d(m){m&&(s(e),s(i),s(o)),j(a,m)}}}function Wc(l){let e;return{c(){e=h(`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},l(t){e=c(t,`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Oc(l){let e;return{c(){e=h("Autoregressive Prediction")},l(t){e=c(t,"Autoregressive Prediction")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Kc(l){let e,t="$L$",i,a,o="$L$",r,m;return{c(){e=h(`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=h(t),a=h(`
			samples of the reference trajectory, where `),r=h(o),m=h(` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},l(n){e=c(n,`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=c(n,t),a=c(n,`
			samples of the reference trajectory, where `),r=c(n,o),m=c(n,` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},m(n,g){u(n,e,g),u(n,i,g),u(n,a,g),u(n,r,g),u(n,m,g)},p:W,d(n){n&&(s(e),s(i),s(a),s(r),s(m))}}}function Jc(l){let e;return{c(){e=h("shadowing lemma")},l(t){e=c(t,"shadowing lemma")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function Xc(l){let e,t,i="i.e.",a,o,r,m,n="e.g.",g,_,d,v;return o=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[Jc]},$$scope:{ctx:l}}}),_=new Y({props:{id:"chandramoorthy"}}),{c(){e=h(`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=z("i"),t.textContent=i,a=h(` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),x(o.$$.fragment),r=h(` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),m=z("i"),m.textContent=n,g=L(),x(_.$$.fragment),d=h(`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},l(M){e=c(M,`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=E(M,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1xx6z5c"&&(t.textContent=i),a=c(M,` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),k(o.$$.fragment,M),r=c(M,` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),m=E(M,"I",{"data-svelte-h":!0}),V(m)!=="svelte-1yxphdm"&&(m.textContent=n),g=P(M),k(_.$$.fragment,M),d=c(M,`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},m(M,H){u(M,e,H),u(M,t,H),u(M,a,H),I(o,M,H),u(M,r,H),u(M,m,H),u(M,g,H),I(_,M,H),u(M,d,H),v=!0},p(M,H){const N={};H&1&&(N.$$scope={dirty:H,ctx:M}),o.$set(N)},i(M){v||(y(o.$$.fragment,M),y(_.$$.fragment,M),v=!0)},o(M){b(o.$$.fragment,M),b(_.$$.fragment,M),v=!1},d(M){M&&(s(e),s(t),s(a),s(r),s(m),s(g),s(d)),j(o,M),j(_,M)}}}function Yc(l){let e,t,i,a;return t=new Y({props:{id:"chandramoorthy"}}),{c(){e=h(`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),x(t.$$.fragment),i=h(`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},l(o){e=c(o,`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),k(t.$$.fragment,o),i=c(o,`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},m(o,r){u(o,e,r),I(t,o,r),u(o,i,r),a=!0},p:W,i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Qc(l){let e;return{c(){e=h("Radau")},l(t){e=c(t,"Radau")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function tf(l){let e;return{c(){e=h(`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},l(t){e=c(t,`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function ef(l){let e;return{c(){e=h(`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},l(t){e=c(t,`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function nf(l){let e;return{c(){e=h(`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},l(t){e=c(t,`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function of(l){let e;return{c(){e=h(`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},l(t){e=c(t,`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function af(l){let e;return{c(){e=h("dysts")},l(t){e=c(t,"dysts")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function sf(l){let e;return{c(){e=h("Radau")},l(t){e=c(t,"Radau")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function rf(l){let e;return{c(){e=h("RK45")},l(t){e=c(t,"RK45")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function lf(l){let e,t,i,a,o,r,m,n;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[af]},$$scope:{ctx:l}}}),a=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[sf]},$$scope:{ctx:l}}}),r=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[rf]},$$scope:{ctx:l}}}),{c(){e=h(`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),x(t.$$.fragment),i=h(" uses the "),x(a.$$.fragment),o=h(" solver by default, and this is what I used to generate the dataset. "),x(r.$$.fragment),m=h(` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},l(g){e=c(g,`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),k(t.$$.fragment,g),i=c(g," uses the "),k(a.$$.fragment,g),o=c(g," solver by default, and this is what I used to generate the dataset. "),k(r.$$.fragment,g),m=c(g,` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},m(g,_){u(g,e,_),I(t,g,_),u(g,i,_),I(a,g,_),u(g,o,_),I(r,g,_),u(g,m,_),n=!0},p(g,_){const d={};_&1&&(d.$$scope={dirty:_,ctx:g}),t.$set(d);const v={};_&1&&(v.$$scope={dirty:_,ctx:g}),a.$set(v);const M={};_&1&&(M.$$scope={dirty:_,ctx:g}),r.$set(M)},i(g){n||(y(t.$$.fragment,g),y(a.$$.fragment,g),y(r.$$.fragment,g),n=!0)},o(g){b(t.$$.fragment,g),b(a.$$.fragment,g),b(r.$$.fragment,g),n=!1},d(g){g&&(s(e),s(i),s(o),s(m)),j(t,g),j(a,g),j(r,g)}}}function hf(l){let e;return{c(){e=h("solve_ivp")},l(t){e=c(t,"solve_ivp")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function cf(l){let e,t,i,a;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[hf]},$$scope:{ctx:l}}}),{c(){e=h(`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),x(t.$$.fragment),i=h(" is used to produce the IVP solver outputs.")},l(o){e=c(o,`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),k(t.$$.fragment,o),i=c(o," is used to produce the IVP solver outputs.")},m(o,r){u(o,e,r),I(t,o,r),u(o,i,r),a=!0},p(o,r){const m={};r&1&&(m.$$scope={dirty:r,ctx:o}),t.$set(m)},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function ff(l){let e;return{c(){e=h(`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},l(t){e=c(t,`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function mf(l){let e;return{c(){e=h("Discussion")},l(t){e=c(t,"Discussion")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function uf(l){let e,t,i,a="$2H$",o,r,m="$H$",n,g,_;return t=new Y({props:{id:"challu"}}),{c(){e=h("This project has probed the potential of the NHiTS neural architecture ("),x(t.$$.fragment),i=h(`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),o=h(a),r=h(`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=h(m),g=h(` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},l(d){e=c(d,"This project has probed the potential of the NHiTS neural architecture ("),k(t.$$.fragment,d),i=c(d,`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),o=c(d,a),r=c(d,`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=c(d,m),g=c(d,` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},m(d,v){u(d,e,v),I(t,d,v),u(d,i,v),u(d,o,v),u(d,r,v),u(d,n,v),u(d,g,v),_=!0},p:W,i(d){_||(y(t.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),_=!1},d(d){d&&(s(e),s(i),s(o),s(r),s(n),s(g)),j(t,d)}}}function pf(l){let e;return{c(){e=h(`Similarly, when used autoregressively, the model demonstrated the potential to generate
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
		`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function df(l){let e;return{c(){e=h(`As already mentioned, it is well understood from dynamical systems theory that the
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
		`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function $f(l){let e,t,i=`a trajectory having a local maximum Z coordinate in the range of 38.45 to 38.6 is a
				necessary condition for the model's sMAPE error to exceed 5`,a,o,r='<a href="#outliers">1</a>',m;return{c(){e=h(`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately 38.55. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3, `),t=z("i"),t.textContent=i,a=h(`
			in the time period immediately following its transit past the origin`),o=z("sup"),o.innerHTML=r,m=h(".")},l(n){e=c(n,`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately 38.55. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3, `),t=E(n,"I",{"data-svelte-h":!0}),V(t)!=="svelte-71x0js"&&(t.textContent=i),a=c(n,`
			in the time period immediately following its transit past the origin`),o=E(n,"SUP",{"data-svelte-h":!0}),V(o)!=="svelte-o9bswn"&&(o.innerHTML=r),m=c(n,".")},m(n,g){u(n,e,g),u(n,t,g),u(n,a,g),u(n,o,g),u(n,m,g)},p:W,d(n){n&&(s(e),s(t),s(a),s(o),s(m))}}}function gf(l){let e,t,i="minimum",a;return{c(){e=h(`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=z("i"),t.textContent=i,a=h(`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of 38.45 to 38.6.`)},l(o){e=c(o,`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=E(o,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1c66z6u"&&(t.textContent=i),a=c(o,`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of 38.45 to 38.6.`)},m(o,r){u(o,e,r),u(o,t,r),u(o,a,r)},p:W,d(o){o&&(s(e),s(t),s(a))}}}function wf(l){let e;return{c(){e=h("Lorenz Map")},l(t){e=c(t,"Lorenz Map")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function vf(l){let e,t,i,a="$Z_{n} = Z_{n+1}$",o,r,m,n="i.e.",g,_;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[wf]},$$scope:{ctx:l}}}),{c(){e=h(`Lorenz himself also noticed peculiar patterns involving to the local maximum Z
			coordinate. He used the `),x(t.$$.fragment),i=h(` to study the patterns; among other things, it helps to identify the local Z maximum that
			corresponds with an unstable periodic orbit on the attractor (when `),o=h(a),r=h(`).
			In the map (shown below for Model 3.2's test set), the x coordinate at the transition
			point, `),m=z("i"),m.textContent=n,g=h(` the peak of the tent, corresponds almost perfectly with the limit suggested
			by the above "Z vs. sMAPE" error plots, around 38.55. And the y coordinate that approximately
			separates the "no transition" dots (blue) from the "lobe transition" dots (orange), also
			corresponds almost perfectly with this value. In other words, the most difficult trajectories
			for our models to predict are the ones that a) achieve the near-maximum possible Z coordinate
			(approximately 48) after passing by the origin, and b) straddle the line between transitioning
			from one lobe to the other or remaining on the current lobe for at least another orbital
			cycle.`)},l(d){e=c(d,`Lorenz himself also noticed peculiar patterns involving to the local maximum Z
			coordinate. He used the `),k(t.$$.fragment,d),i=c(d,` to study the patterns; among other things, it helps to identify the local Z maximum that
			corresponds with an unstable periodic orbit on the attractor (when `),o=c(d,a),r=c(d,`).
			In the map (shown below for Model 3.2's test set), the x coordinate at the transition
			point, `),m=E(d,"I",{"data-svelte-h":!0}),V(m)!=="svelte-1xx6z5c"&&(m.textContent=n),g=c(d,` the peak of the tent, corresponds almost perfectly with the limit suggested
			by the above "Z vs. sMAPE" error plots, around 38.55. And the y coordinate that approximately
			separates the "no transition" dots (blue) from the "lobe transition" dots (orange), also
			corresponds almost perfectly with this value. In other words, the most difficult trajectories
			for our models to predict are the ones that a) achieve the near-maximum possible Z coordinate
			(approximately 48) after passing by the origin, and b) straddle the line between transitioning
			from one lobe to the other or remaining on the current lobe for at least another orbital
			cycle.`)},m(d,v){u(d,e,v),I(t,d,v),u(d,i,v),u(d,o,v),u(d,r,v),u(d,m,v),u(d,g,v),_=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M)},i(d){_||(y(t.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),_=!1},d(d){d&&(s(e),s(i),s(o),s(r),s(m),s(g)),j(t,d)}}}function yf(l){let e;return{c(){e=h(`The Lorenz Map for the test set used with Model 3.2. It plots the nth local Z
				maximum coordinate against the (n+1)th. The orange points correspond with maxes that
				preceed transitions between the two lobes of the Lorenz Attractor.`)},l(t){e=c(t,`The Lorenz Map for the test set used with Model 3.2. It plots the nth local Z
				maximum coordinate against the (n+1)th. The orange points correspond with maxes that
				preceed transitions between the two lobes of the Lorenz Attractor.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function bf(l){let e,t="$\\approx$",i,a;return{c(){e=h(`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is converging towards this Z value around 38.55. As
			long as the local maximum Z coordinate of a trajectory in orbit around one of the two
			non-origin fixed points does not pass through a narrow interval around this value, we
			can be certain (according to the statistics of all of the test sets in this study) that
			the model will forecast the trajectory with a sMAPE error less than 5. If a trajectory's
			peak Z coordinate does pass through this interval, then the model has a roughly 60%
			chance of exhibiting a sMAPE error greater than 5 in the period immediately following
			the peak, until the next peak Z coordinate is reached. An obvious next question to ask
			is, how do we exploit this observation to improve predictability? If the system were
			augmented with a control input of some sort, then the target for that control could be
			to perturb the trajectories so that they avoid passing through this critical region
			around Z `),i=h(t),a=h(` 38.55. The results of this study suggest that this alone might make
			the Lorenz Attractor dynamics entirely predictable.`)},l(o){e=c(o,`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is converging towards this Z value around 38.55. As
			long as the local maximum Z coordinate of a trajectory in orbit around one of the two
			non-origin fixed points does not pass through a narrow interval around this value, we
			can be certain (according to the statistics of all of the test sets in this study) that
			the model will forecast the trajectory with a sMAPE error less than 5. If a trajectory's
			peak Z coordinate does pass through this interval, then the model has a roughly 60%
			chance of exhibiting a sMAPE error greater than 5 in the period immediately following
			the peak, until the next peak Z coordinate is reached. An obvious next question to ask
			is, how do we exploit this observation to improve predictability? If the system were
			augmented with a control input of some sort, then the target for that control could be
			to perturb the trajectories so that they avoid passing through this critical region
			around Z `),i=c(o,t),a=c(o,` 38.55. The results of this study suggest that this alone might make
			the Lorenz Attractor dynamics entirely predictable.`)},m(o,r){u(o,e,r),u(o,i,r),u(o,a,r)},p:W,d(o){o&&(s(e),s(i),s(a))}}}function _f(l){let e;return{c(){e=h(`The fact that over-representing such trajectories in the training set by a factor of 10
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
			noise to the trajectory.`)},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function xf(l){let e;return{c(){e=h("shadowing lemma")},l(t){e=c(t,"shadowing lemma")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function kf(l){let e,t,i,a,o,r,m="IVP solver",n,g,_,d;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[xf]},$$scope:{ctx:l}}}),a=new Y({props:{id:"chandramoorthy"}}),g=new Y({props:{id:"chandramoorthy"}}),{c(){e=h("In closing, I will return to the implications of the "),x(t.$$.fragment),i=h(" and research such as "),x(a.$$.fragment),o=h(` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),r=z("i"),r.textContent=m,n=h(`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),x(g.$$.fragment),_=h(` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},l(v){e=c(v,"In closing, I will return to the implications of the "),k(t.$$.fragment,v),i=c(v," and research such as "),k(a.$$.fragment,v),o=c(v,` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),r=E(v,"I",{"data-svelte-h":!0}),V(r)!=="svelte-17gf2g4"&&(r.textContent=m),n=c(v,`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),k(g.$$.fragment,v),_=c(v,` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},m(v,M){u(v,e,M),I(t,v,M),u(v,i,M),I(a,v,M),u(v,o,M),u(v,r,M),u(v,n,M),I(g,v,M),u(v,_,M),d=!0},p(v,M){const H={};M&1&&(H.$$scope={dirty:M,ctx:v}),t.$set(H)},i(v){d||(y(t.$$.fragment,v),y(a.$$.fragment,v),y(g.$$.fragment,v),d=!0)},o(v){b(t.$$.fragment,v),b(a.$$.fragment,v),b(g.$$.fragment,v),d=!1},d(v){v&&(s(e),s(i),s(o),s(r),s(n),s(_)),j(t,v),j(a,v),j(g,v)}}}function If(l){let e;return{c(){e=h("References")},l(t){e=c(t,"References")},m(t,i){u(t,e,i)},d(t){t&&s(e)}}}function jf(l){let e,t,i,a,o,r,m,n,g,_,d,v,M="Michael Horgan",H,N,F="michaelghorgan at gmail",A,C,Z,O,et,K,G,q,J,tt,X,ft,ot,S,U="$2H$",fi,mi,Ri="$H$",ro,lo,qs="$H$",ho,co,Fs="$dt \\approx 0.015$",fo,mo,uo,un,po,Zs="$\\lt \\approx 5$",$o,go,wo,st,vo,Vs="$38.45$",yo,bo,Bs="$38.6$",_o,xo,wt,ko,vt,Io,jo,yt,Mo,bt,_t,xt,To,mt,Ni,pn,Ao,kt,zo,ui,Us=`<sup id="paperspace">2. All of my experiments were run on a Paperspace VM using two RTX 5000s, each
					with 16 GB of RAM.</sup>`,Eo,Di,It,Lo,jt,Po,Co,Mt,Ho,Tt,So,pi,dn,$n,At,Ws,Ro,zt,No,Et,Do,di,Gi,Os=sh+"",Go,qo,Lt,Fo,$i,qi,Ks=rh+"",Zo,Vo,Pt,Ct,Bo,Ht,Uo,St,Wo,Rt,Oo,Nt,Ko,Dt,Jo,Gt,qt,Ft,Zt,Xo,gi,Fi,Js=lh+"",Yo,Qo,Vt,ta,Bt,ea,Ut,na,Wt,ia,gn,Xs=`<p><sup id="lyapunov">1. Although initially the distance will grow exponentially, the maximum
					separation between trajectories is also bounded by the fact that all
					trajectories remain on the attractor.</sup></p> <p><sup id="initial-conditions">2. In the course of this project, I experimented with several different methods
					for generating trajectories, but I still have some open questions about the best
					way to generate a dataset that effectively samples the phase space, <i>e.g.</i> how
					to choose the initial conditions, how to choose the number of unique initial conditions
					vs. to the total trajectory length, etc.</sup></p>`,oa,Ot,aa,Kt,sa,wn,ra,Jt,la,Zi,Ys=hh+"",ha,ca,Xt,fa,Yt,vn,Qs,ma,Qt,ua,te,pa,ee,yn,tr=`<img class="object-contain max-w-80" src="${`${Q}/Model1SmallErr.png`}" alt="Model 1 - small error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1MediumErr.png`}" alt="Model 1 - medium error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1LargeErr.png`}" alt="Model 1 - large error example"/>`,da,ne,$a,ie,ga,oe,bn,er,wa,ae,va,se,re,ya,le,ut,nr,ba,he,_a,ce,xa,fe,ka,me,Ia,_n,ja,xn,ir=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
			increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of
			the network, and I've also significantly increased the amount of compression in the
			initial stacks. Because the network is much deeper, I also added layer normalization
			after each block to try to help reduce convergence time. Lastly, I increased the number
			of training steps and reduced the initial learning rate by an order of magnitude, and I
			modified the learning rate schedule to reduce by half whenever the validation loss does
			not decrease from the previous validation step.`,Ma,kn,In,or,ue,Ta,pe,de,Aa,jn,Mn,ar,$e,za,ge,Ea,we,Tn,sr,La,ve,Pa,ye,Ca,An,zn,rr,be,Ha,_e,Sa,xe,Ra,ke,Na,Ie,Da,je,Me,Te,Ga,En,Ln,lr,Ae,qa,Pn,Fa,hr="$\\le{5}$",Za,Va,Ba,ze,Ua,Cn,Hn,cr,Ee,Wa,Le,Oa,Pe,Ka,Ce,Ja,He,Xa,Sn,Ya,Se,Qa,Re,ts,fr="$dt \\approx 0.003$",es,ns,is,Rn,Nn,mr,Ne,os,wi,ur=`Here again we see a very marginal improvement but no clear evidence that this approach
			may lead to a fully stable model (<i>i.e.</i> one without an asymptotic error curve). Reducing
			the temporal resolution of the model further will drastically increase the computational
			requirements of training, which are beyond my budget, so I must conclude this avenue of investigation
			here.`,as,De,ss,Ge,qe,Fe,pr=ch+"",rs,ls,Dn,hs,Ze,cs,fs,Gn,qn,dr,Ve,ms,pt,us,$r="$z \\approx 0.4$",ps,ds,gr="$z \\approx 1.35$",$s,gs,ws,Be,vs,Fn,Zn,wr,Ue,ys,vi,vr=`However, if we search for the model trajectories that pass closest to the origin, we
			find examples where the model output breaks down badly:`,bs,Vn,Bn,yr,We,_s,Oe,xs,Ke,Un,br,ks,Je,Is,Xe,js,Ye,Ms,Qe,tn,en,nn,Ts,on,Wn,_r=`<img class="object-contain w-full max-w-xl" src="${`${Q}/max_z.png`}" alt="Model 3 - maxium Z coordinate error distribution"/> <img class="object-contain w-full max-w-xl" src="${`${Q}/max_z_zoomed.png`}" alt="maximum Z coordinate error distribution zoomed"/>`,As,an,zs,sn,Es,rn,On,xr,Ls,ln,Ps,hn,Cs,cn,Hs,fn,Ss,Kn,kr=`<p><sup id="outliers">1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose <i>second-to-last</i>
					local maximum Z coordinate passes through the 38.55 boundary region, and whose associated
					local minimum point is so small—0.49, the smallest encountered in all of the
					training sets that were generated for this study—that the highly unstable conditions
					in the region adversely affect not only the prediction accuracy when the local minimum
					is within the horizon window, but also when it is within the input window of the
					model.</sup></p>`,Rs,mn,Ns,Jn,oo;return e=new ah({}),i=new dh({}),r=new ih({}),K=new B({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[$h]},$$scope:{ctx:l}}}),q=new Li({props:{id:"tldr",$$slots:{default:[gh]},$$scope:{ctx:l}}}),ot=new Y({props:{id:"challu"}}),wt=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[wh]},$$scope:{ctx:l}}}),vt=new B({props:{href:"https://en.wikipedia.org/wiki/Symmetric_mean_absolute_percentage_error",$$slots:{default:[vh]},$$scope:{ctx:l}}}),yt=new Ei({props:{id:"intro",$$slots:{default:[yh]},$$scope:{ctx:l}}}),bt=new D({props:{$$slots:{default:[bh]},$$scope:{ctx:l}}}),_t=new D({props:{$$slots:{default:[_h]},$$scope:{ctx:l}}}),xt=new D({props:{$$slots:{default:[xh]},$$scope:{ctx:l}}}),kt=new B({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[kh]},$$scope:{ctx:l}}}),jt=new B({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[Ih]},$$scope:{ctx:l}}}),Mt=new Ei({props:{id:"lorenz",$$slots:{default:[jh]},$$scope:{ctx:l}}}),Tt=new D({props:{$$slots:{default:[zh]},$$scope:{ctx:l}}}),zt=new nt({props:{$$slots:{default:[Eh]},$$scope:{ctx:l}}}),Et=new D({props:{$$slots:{default:[Lh]},$$scope:{ctx:l}}}),Lt=new D({props:{$$slots:{default:[Hh]},$$scope:{ctx:l}}}),Pt=new D({props:{$$slots:{default:[Rh]},$$scope:{ctx:l}}}),Ct=new D({props:{$$slots:{default:[Dh]},$$scope:{ctx:l}}}),Ht=new Ei({props:{id:"nhits",$$slots:{default:[Gh]},$$scope:{ctx:l}}}),St=new D({props:{$$slots:{default:[qh]},$$scope:{ctx:l}}}),Rt=new D({props:{$$slots:{default:[Fh]},$$scope:{ctx:l}}}),Nt=new D({props:{$$slots:{default:[Zh]},$$scope:{ctx:l}}}),Dt=new Ei({props:{id:"experiments",$$slots:{default:[Vh]},$$scope:{ctx:l}}}),Gt=new D({props:{$$slots:{default:[Bh]},$$scope:{ctx:l}}}),qt=new Li({props:{id:"datagen",$$slots:{default:[Uh]},$$scope:{ctx:l}}}),Ft=new D({props:{$$slots:{default:[Jh]},$$scope:{ctx:l}}}),Zt=new D({props:{$$slots:{default:[tc]},$$scope:{ctx:l}}}),Vt=new D({props:{indent:"indent-0",$$slots:{default:[ec]},$$scope:{ctx:l}}}),Bt=new D({props:{$$slots:{default:[nc]},$$scope:{ctx:l}}}),Ut=new D({props:{indent:"indent-0",$$slots:{default:[ic]},$$scope:{ctx:l}}}),Wt=new D({props:{$$slots:{default:[oc]},$$scope:{ctx:l}}}),Ot=new Li({props:{id:"model-1",$$slots:{default:[ac]},$$scope:{ctx:l}}}),Kt=new D({props:{$$slots:{default:[sc]},$$scope:{ctx:l}}}),wn=new Ds({props:{hps:fh}}),Jt=new D({props:{indent:"indent-0",$$slots:{default:[rc]},$$scope:{ctx:l}}}),Xt=new D({props:{$$slots:{default:[lc]},$$scope:{ctx:l}}}),Qt=new nt({props:{$$slots:{default:[hc]},$$scope:{ctx:l}}}),te=new D({props:{$$slots:{default:[cc]},$$scope:{ctx:l}}}),ne=new nt({props:{$$slots:{default:[fc]},$$scope:{ctx:l}}}),ie=new D({props:{$$slots:{default:[mc]},$$scope:{ctx:l}}}),ae=new nt({props:{$$slots:{default:[uc]},$$scope:{ctx:l}}}),se=new D({props:{$$slots:{default:[dc]},$$scope:{ctx:l}}}),re=new D({props:{$$slots:{default:[gc]},$$scope:{ctx:l}}}),he=new nt({props:{$$slots:{default:[wc]},$$scope:{ctx:l}}}),ce=new D({props:{$$slots:{default:[vc]},$$scope:{ctx:l}}}),fe=new Li({props:{id:"model-2",$$slots:{default:[yc]},$$scope:{ctx:l}}}),me=new D({props:{$$slots:{default:[bc]},$$scope:{ctx:l}}}),_n=new Ds({props:{hps:mh}}),ue=new nt({props:{$$slots:{default:[_c]},$$scope:{ctx:l}}}),pe=new D({props:{$$slots:{default:[xc]},$$scope:{ctx:l}}}),de=new D({props:{$$slots:{default:[kc]},$$scope:{ctx:l}}}),$e=new nt({props:{$$slots:{default:[Ic]},$$scope:{ctx:l}}}),ge=new D({props:{$$slots:{default:[jc]},$$scope:{ctx:l}}}),ve=new nt({props:{$$slots:{default:[Mc]},$$scope:{ctx:l}}}),ye=new D({props:{$$slots:{default:[Tc]},$$scope:{ctx:l}}}),be=new nt({props:{$$slots:{default:[Ac]},$$scope:{ctx:l}}}),_e=new D({props:{$$slots:{default:[zc]},$$scope:{ctx:l}}}),xe=new Li({props:{id:"model-3",$$slots:{default:[Ec]},$$scope:{ctx:l}}}),ke=new D({props:{$$slots:{default:[Lc]},$$scope:{ctx:l}}}),Ie=new xl({props:{$$slots:{default:[Pc]},$$scope:{ctx:l}}}),je=new D({props:{$$slots:{default:[Hc]},$$scope:{ctx:l}}}),Me=new D({props:{$$slots:{default:[Sc]},$$scope:{ctx:l}}}),Te=new D({props:{$$slots:{default:[Rc]},$$scope:{ctx:l}}}),Ae=new nt({props:{$$slots:{default:[Nc]},$$scope:{ctx:l}}}),ze=new D({props:{$$slots:{default:[Dc]},$$scope:{ctx:l}}}),Ee=new nt({props:{$$slots:{default:[Gc]},$$scope:{ctx:l}}}),Le=new D({props:{$$slots:{default:[qc]},$$scope:{ctx:l}}}),Pe=new xl({props:{$$slots:{default:[Fc]},$$scope:{ctx:l}}}),Ce=new D({props:{$$slots:{default:[Zc]},$$scope:{ctx:l}}}),He=new D({props:{$$slots:{default:[Vc]},$$scope:{ctx:l}}}),Sn=new Ds({props:{hps:uh}}),Se=new D({props:{style:"my-4 text-sm font-serif",$$slots:{default:[Uc]},$$scope:{ctx:l}}}),Ne=new nt({props:{$$slots:{default:[Wc]},$$scope:{ctx:l}}}),De=new Li({props:{id:"arpred",$$slots:{default:[Oc]},$$scope:{ctx:l}}}),Ge=new D({props:{$$slots:{default:[Kc]},$$scope:{ctx:l}}}),qe=new D({props:{$$slots:{default:[Xc]},$$scope:{ctx:l}}}),Fe=new D({props:{$$slots:{default:[Yc]},$$scope:{ctx:l}}}),Ze=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Qc]},$$scope:{ctx:l}}}),Ve=new nt({props:{$$slots:{default:[tf]},$$scope:{ctx:l}}}),Be=new D({props:{$$slots:{default:[ef]},$$scope:{ctx:l}}}),Ue=new nt({props:{$$slots:{default:[nf]},$$scope:{ctx:l}}}),We=new nt({props:{$$slots:{default:[of]},$$scope:{ctx:l}}}),Oe=new D({props:{$$slots:{default:[lf]},$$scope:{ctx:l}}}),Je=new nt({props:{$$slots:{default:[cf]},$$scope:{ctx:l}}}),Xe=new D({props:{$$slots:{default:[ff]},$$scope:{ctx:l}}}),Ye=new Ei({props:{id:"discussion",$$slots:{default:[mf]},$$scope:{ctx:l}}}),Qe=new D({props:{$$slots:{default:[uf]},$$scope:{ctx:l}}}),tn=new D({props:{$$slots:{default:[pf]},$$scope:{ctx:l}}}),en=new D({props:{$$slots:{default:[df]},$$scope:{ctx:l}}}),nn=new D({props:{$$slots:{default:[$f]},$$scope:{ctx:l}}}),an=new nt({props:{$$slots:{default:[gf]},$$scope:{ctx:l}}}),sn=new D({props:{$$slots:{default:[vf]},$$scope:{ctx:l}}}),ln=new nt({props:{$$slots:{default:[yf]},$$scope:{ctx:l}}}),hn=new D({props:{$$slots:{default:[bf]},$$scope:{ctx:l}}}),cn=new D({props:{$$slots:{default:[_f]},$$scope:{ctx:l}}}),fn=new D({props:{$$slots:{default:[kf]},$$scope:{ctx:l}}}),mn=new Ei({props:{id:"references",$$slots:{default:[If]},$$scope:{ctx:l}}}),Jn=new Nl({}),{c(){x(e.$$.fragment),t=L(),x(i.$$.fragment),a=L(),o=z("div"),x(r.$$.fragment),m=L(),n=z("div"),g=z("div"),_=h(io),d=L(),v=z("div"),v.textContent=M,H=L(),N=z("div"),N.textContent=F,A=L(),C=z("br"),Z=L(),O=z("div"),et=h("All code used in this project is available in the github repo: "),x(K.$$.fragment),G=L(),x(q.$$.fragment),J=L(),tt=z("ul"),X=z("li"),ft=h("This project explores the use of the NHiTS "),x(ot.$$.fragment),S=h(` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),fi=h(U),mi=h(` points of input, the model is trained
				to predict the next `),ro=h(Ri),lo=h(" points of the trajectory, where "),ho=h(qs),co=h(` is usually 100 and
				`),fo=h(Fs),mo=h("."),uo=L(),un=z("li"),po=h(`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),$o=h(Zs),go=h(`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),wo=L(),st=z("li"),vo=h(`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),yo=h(Vs),bo=h(" to "),_o=h(Bs),xo=h(`, corresponding
				with the approxiamte value of x coordinate of the maximum point on the `),x(wt.$$.fragment),ko=h(". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),x(vt.$$.fragment),Io=h(` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),jo=L(),x(yt.$$.fragment),Mo=L(),x(bt.$$.fragment),x(_t.$$.fragment),x(xt.$$.fragment),To=L(),mt=z("div"),Ni=z("p"),pn=z("sup"),Ao=h(`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),x(kt.$$.fragment),zo=L(),ui=z("p"),ui.innerHTML=Us,Eo=L(),Di=z("p"),It=z("sup"),Lo=h(`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),x(jt.$$.fragment),Po=h(" on the subject"),Co=L(),x(Mt.$$.fragment),Ho=L(),x(Tt.$$.fragment),So=L(),pi=z("div"),dn=z("a"),$n=z("figure"),At=z("img"),Ro=L(),x(zt.$$.fragment),No=L(),x(Et.$$.fragment),Do=L(),di=z("div"),Gi=z("p"),Go=h(Os),qo=L(),x(Lt.$$.fragment),Fo=L(),$i=z("div"),qi=z("p"),Zo=h(Ks),Vo=L(),x(Pt.$$.fragment),x(Ct.$$.fragment),Bo=L(),x(Ht.$$.fragment),Uo=L(),x(St.$$.fragment),Wo=L(),x(Rt.$$.fragment),Oo=L(),x(Nt.$$.fragment),Ko=L(),x(Dt.$$.fragment),Jo=L(),x(Gt.$$.fragment),x(qt.$$.fragment),x(Ft.$$.fragment),x(Zt.$$.fragment),Xo=L(),gi=z("div"),Fi=z("p"),Yo=h(Js),Qo=L(),x(Vt.$$.fragment),ta=L(),x(Bt.$$.fragment),ea=L(),x(Ut.$$.fragment),na=L(),x(Wt.$$.fragment),ia=L(),gn=z("div"),gn.innerHTML=Xs,oa=L(),x(Ot.$$.fragment),aa=L(),x(Kt.$$.fragment),sa=L(),x(wn.$$.fragment),ra=L(),x(Jt.$$.fragment),la=L(),Zi=z("div"),ha=h(Ys),ca=L(),x(Xt.$$.fragment),fa=L(),Yt=z("figure"),vn=z("img"),ma=L(),x(Qt.$$.fragment),ua=L(),x(te.$$.fragment),pa=L(),ee=z("figure"),yn=z("div"),yn.innerHTML=tr,da=L(),x(ne.$$.fragment),$a=L(),x(ie.$$.fragment),ga=L(),oe=z("figure"),bn=z("img"),wa=L(),x(ae.$$.fragment),va=L(),x(se.$$.fragment),x(re.$$.fragment),ya=L(),le=z("figure"),ut=z("img"),ba=L(),x(he.$$.fragment),_a=L(),x(ce.$$.fragment),xa=L(),x(fe.$$.fragment),ka=L(),x(me.$$.fragment),Ia=L(),x(_n.$$.fragment),ja=L(),xn=z("p"),xn.textContent=ir,Ma=L(),kn=z("figure"),In=z("img"),x(ue.$$.fragment),Ta=L(),x(pe.$$.fragment),x(de.$$.fragment),Aa=L(),jn=z("figure"),Mn=z("img"),x($e.$$.fragment),za=L(),x(ge.$$.fragment),Ea=L(),we=z("figure"),Tn=z("img"),La=L(),x(ve.$$.fragment),Pa=L(),x(ye.$$.fragment),Ca=L(),An=z("figure"),zn=z("img"),x(be.$$.fragment),Ha=L(),x(_e.$$.fragment),Sa=L(),x(xe.$$.fragment),Ra=L(),x(ke.$$.fragment),Na=L(),x(Ie.$$.fragment),Da=L(),x(je.$$.fragment),x(Me.$$.fragment),x(Te.$$.fragment),Ga=L(),En=z("figure"),Ln=z("img"),x(Ae.$$.fragment),qa=L(),Pn=z("p"),Fa=h("Still, with these 10x increases, the trajectories that pass within an L2 distance "),Za=h(hr),Va=h(`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),Ba=L(),x(ze.$$.fragment),Ua=L(),Cn=z("figure"),Hn=z("img"),x(Ee.$$.fragment),Wa=L(),x(Le.$$.fragment),Oa=L(),x(Pe.$$.fragment),Ka=L(),x(Ce.$$.fragment),Ja=L(),x(He.$$.fragment),Xa=L(),x(Sn.$$.fragment),Ya=L(),x(Se.$$.fragment),Qa=L(),Re=z("p"),ts=h("After retraining with "),es=h(fr),ns=h(`, we again see a very slight improvement
			over the previous models:`),is=L(),Rn=z("figure"),Nn=z("img"),x(Ne.$$.fragment),os=L(),wi=z("p"),wi.innerHTML=ur,as=L(),x(De.$$.fragment),ss=L(),x(Ge.$$.fragment),x(qe.$$.fragment),x(Fe.$$.fragment),rs=h(pr),ls=L(),Dn=z("p"),hs=h("Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),x(Ze.$$.fragment),cs=h(" solver's outputs:"),fs=L(),Gn=z("figure"),qn=z("img"),x(Ve.$$.fragment),ms=L(),pt=z("p"),us=h(`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),ps=h($r),ds=h(" for the solver compared to "),$s=h(gr),gs=h(`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),ws=L(),x(Be.$$.fragment),vs=L(),Fn=z("figure"),Zn=z("img"),x(Ue.$$.fragment),ys=L(),vi=z("p"),vi.textContent=vr,bs=L(),Vn=z("figure"),Bn=z("img"),x(We.$$.fragment),_s=L(),x(Oe.$$.fragment),xs=L(),Ke=z("figure"),Un=z("img"),ks=L(),x(Je.$$.fragment),Is=L(),x(Xe.$$.fragment),js=L(),x(Ye.$$.fragment),Ms=L(),x(Qe.$$.fragment),x(tn.$$.fragment),x(en.$$.fragment),x(nn.$$.fragment),Ts=L(),on=z("figure"),Wn=z("div"),Wn.innerHTML=_r,As=L(),x(an.$$.fragment),zs=L(),x(sn.$$.fragment),Es=L(),rn=z("figure"),On=z("img"),Ls=L(),x(ln.$$.fragment),Ps=L(),x(hn.$$.fragment),Cs=L(),x(cn.$$.fragment),Hs=L(),x(fn.$$.fragment),Ss=L(),Kn=z("div"),Kn.innerHTML=kr,Rs=L(),x(mn.$$.fragment),Ns=L(),x(Jn.$$.fragment),this.h()},l(f){k(e.$$.fragment,f),t=P(f),k(i.$$.fragment,f),a=P(f),o=E(f,"DIV",{class:!0});var w=R(o);k(r.$$.fragment,w),m=P(w),n=E(w,"DIV",{class:!0});var $=R(n);g=E($,"DIV",{id:!0,class:!0});var Vi=R(g);_=c(Vi,io),Vi.forEach(s),d=P($),v=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(v)!=="svelte-1tlj87z"&&(v.textContent=M),H=P($),N=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(N)!=="svelte-xnmp4g"&&(N.textContent=F),A=P($),C=E($,"BR",{}),Z=P($),O=E($,"DIV",{class:!0});var yi=R(O);et=c(yi,"All code used in this project is available in the github repo: "),k(K.$$.fragment,yi),yi.forEach(s),G=P($),k(q.$$.fragment,$),J=P($),tt=E($,"UL",{class:!0});var dt=R(tt);X=E(dt,"LI",{});var at=R(X);ft=c(at,"This project explores the use of the NHiTS "),k(ot.$$.fragment,at),S=c(at,` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),fi=c(at,U),mi=c(at,` points of input, the model is trained
				to predict the next `),ro=c(at,Ri),lo=c(at," points of the trajectory, where "),ho=c(at,qs),co=c(at,` is usually 100 and
				`),fo=c(at,Fs),mo=c(at,"."),at.forEach(s),uo=P(dt),un=E(dt,"LI",{});var Xn=R(un);po=c(Xn,`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),$o=c(Xn,Zs),go=c(Xn,`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),Xn.forEach(s),wo=P(dt),st=E(dt,"LI",{});var rt=R(st);vo=c(rt,`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),yo=c(rt,Vs),bo=c(rt," to "),_o=c(rt,Bs),xo=c(rt,`, corresponding
				with the approxiamte value of x coordinate of the maximum point on the `),k(wt.$$.fragment,rt),ko=c(rt,". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),k(vt.$$.fragment,rt),Io=c(rt,` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),rt.forEach(s),dt.forEach(s),jo=P($),k(yt.$$.fragment,$),Mo=P($),k(bt.$$.fragment,$),k(_t.$$.fragment,$),k(xt.$$.fragment,$),To=P($),mt=E($,"DIV",{class:!0});var $t=R(mt);Ni=E($t,"P",{});var Bi=R(Ni);pn=E(Bi,"SUP",{id:!0});var bi=R(pn);Ao=c(bi,`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),k(kt.$$.fragment,bi),bi.forEach(s),Bi.forEach(s),zo=P($t),ui=E($t,"P",{"data-svelte-h":!0}),V(ui)!=="svelte-7qdhvn"&&(ui.innerHTML=Us),Eo=P($t),Di=E($t,"P",{});var Ui=R(Di);It=E(Ui,"SUP",{id:!0});var Yn=R(It);Lo=c(Yn,`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),k(jt.$$.fragment,Yn),Po=c(Yn," on the subject"),Yn.forEach(s),Ui.forEach(s),$t.forEach(s),Co=P($),k(Mt.$$.fragment,$),Ho=P($),k(Tt.$$.fragment,$),So=P($),pi=E($,"DIV",{class:!0});var Wi=R(pi);dn=E(Wi,"A",{title:!0,href:!0});var Oi=R(dn);$n=E(Oi,"FIGURE",{});var Qn=R($n);At=E(Qn,"IMG",{class:!0,width:!0,alt:!0,src:!0}),Ro=P(Qn),k(zt.$$.fragment,Qn),Qn.forEach(s),Oi.forEach(s),Wi.forEach(s),No=P($),k(Et.$$.fragment,$),Do=P($),di=E($,"DIV",{class:!0});var Ki=R(di);Gi=E(Ki,"P",{});var Ji=R(Gi);Go=c(Ji,Os),Ji.forEach(s),Ki.forEach(s),qo=P($),k(Lt.$$.fragment,$),Fo=P($),$i=E($,"DIV",{class:!0});var Xi=R($i);qi=E(Xi,"P",{});var Yi=R(qi);Zo=c(Yi,Ks),Yi.forEach(s),Xi.forEach(s),Vo=P($),k(Pt.$$.fragment,$),k(Ct.$$.fragment,$),Bo=P($),k(Ht.$$.fragment,$),Uo=P($),k(St.$$.fragment,$),Wo=P($),k(Rt.$$.fragment,$),Oo=P($),k(Nt.$$.fragment,$),Ko=P($),k(Dt.$$.fragment,$),Jo=P($),k(Gt.$$.fragment,$),k(qt.$$.fragment,$),k(Ft.$$.fragment,$),k(Zt.$$.fragment,$),Xo=P($),gi=E($,"DIV",{class:!0});var Qi=R(gi);Fi=E(Qi,"P",{});var to=R(Fi);Yo=c(to,Js),to.forEach(s),Qi.forEach(s),Qo=P($),k(Vt.$$.fragment,$),ta=P($),k(Bt.$$.fragment,$),ea=P($),k(Ut.$$.fragment,$),na=P($),k(Wt.$$.fragment,$),ia=P($),gn=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(gn)!=="svelte-a9h7x4"&&(gn.innerHTML=Xs),oa=P($),k(Ot.$$.fragment,$),aa=P($),k(Kt.$$.fragment,$),sa=P($),k(wn.$$.fragment,$),ra=P($),k(Jt.$$.fragment,$),la=P($),Zi=E($,"DIV",{});var eo=R(Zi);ha=c(eo,Ys),eo.forEach(s),ca=P($),k(Xt.$$.fragment,$),fa=P($),Yt=E($,"FIGURE",{class:!0});var ti=R(Yt);vn=E(ti,"IMG",{class:!0,src:!0,alt:!0}),ma=P(ti),k(Qt.$$.fragment,ti),ti.forEach(s),ua=P($),k(te.$$.fragment,$),pa=P($),ee=E($,"FIGURE",{class:!0});var ei=R(ee);yn=E(ei,"DIV",{class:!0,"data-svelte-h":!0}),V(yn)!=="svelte-u7ima0"&&(yn.innerHTML=tr),da=P(ei),k(ne.$$.fragment,ei),ei.forEach(s),$a=P($),k(ie.$$.fragment,$),ga=P($),oe=E($,"FIGURE",{class:!0});var ni=R(oe);bn=E(ni,"IMG",{class:!0,src:!0,alt:!0}),wa=P(ni),k(ae.$$.fragment,ni),ni.forEach(s),va=P($),k(se.$$.fragment,$),k(re.$$.fragment,$),ya=P($),le=E($,"FIGURE",{class:!0});var ii=R(le);ut=E(ii,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),ba=P(ii),k(he.$$.fragment,ii),ii.forEach(s),_a=P($),k(ce.$$.fragment,$),xa=P($),k(fe.$$.fragment,$),ka=P($),k(me.$$.fragment,$),Ia=P($),k(_n.$$.fragment,$),ja=P($),xn=E($,"P",{class:!0,"data-svelte-h":!0}),V(xn)!=="svelte-8lzr6y"&&(xn.textContent=ir),Ma=P($),kn=E($,"FIGURE",{class:!0});var _i=R(kn);In=E(_i,"IMG",{class:!0,src:!0,alt:!0}),k(ue.$$.fragment,_i),_i.forEach(s),Ta=P($),k(pe.$$.fragment,$),k(de.$$.fragment,$),Aa=P($),jn=E($,"FIGURE",{class:!0});var xi=R(jn);Mn=E(xi,"IMG",{class:!0,src:!0,alt:!0}),k($e.$$.fragment,xi),xi.forEach(s),za=P($),k(ge.$$.fragment,$),Ea=P($),we=E($,"FIGURE",{class:!0});var oi=R(we);Tn=E(oi,"IMG",{class:!0,src:!0,alt:!0}),La=P(oi),k(ve.$$.fragment,oi),oi.forEach(s),Pa=P($),k(ye.$$.fragment,$),Ca=P($),An=E($,"FIGURE",{class:!0});var ki=R(An);zn=E(ki,"IMG",{class:!0,src:!0,alt:!0}),k(be.$$.fragment,ki),ki.forEach(s),Ha=P($),k(_e.$$.fragment,$),Sa=P($),k(xe.$$.fragment,$),Ra=P($),k(ke.$$.fragment,$),Na=P($),k(Ie.$$.fragment,$),Da=P($),k(je.$$.fragment,$),k(Me.$$.fragment,$),k(Te.$$.fragment,$),Ga=P($),En=E($,"FIGURE",{class:!0});var Ii=R(En);Ln=E(Ii,"IMG",{class:!0,src:!0,alt:!0}),k(Ae.$$.fragment,Ii),Ii.forEach(s),qa=P($),Pn=E($,"P",{});var ai=R(Pn);Fa=c(ai,"Still, with these 10x increases, the trajectories that pass within an L2 distance "),Za=c(ai,hr),Va=c(ai,`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),ai.forEach(s),Ba=P($),k(ze.$$.fragment,$),Ua=P($),Cn=E($,"FIGURE",{class:!0});var ji=R(Cn);Hn=E(ji,"IMG",{class:!0,src:!0,alt:!0}),k(Ee.$$.fragment,ji),ji.forEach(s),Wa=P($),k(Le.$$.fragment,$),Oa=P($),k(Pe.$$.fragment,$),Ka=P($),k(Ce.$$.fragment,$),Ja=P($),k(He.$$.fragment,$),Xa=P($),k(Sn.$$.fragment,$),Ya=P($),k(Se.$$.fragment,$),Qa=P($),Re=E($,"P",{class:!0});var si=R(Re);ts=c(si,"After retraining with "),es=c(si,fr),ns=c(si,`, we again see a very slight improvement
			over the previous models:`),si.forEach(s),is=P($),Rn=E($,"FIGURE",{class:!0});var Mi=R(Rn);Nn=E(Mi,"IMG",{class:!0,src:!0,alt:!0}),k(Ne.$$.fragment,Mi),Mi.forEach(s),os=P($),wi=E($,"P",{"data-svelte-h":!0}),V(wi)!=="svelte-iuzfox"&&(wi.innerHTML=ur),as=P($),k(De.$$.fragment,$),ss=P($),k(Ge.$$.fragment,$),k(qe.$$.fragment,$),k(Fe.$$.fragment,$),rs=c($,pr),ls=P($),Dn=E($,"P",{});var ri=R(Dn);hs=c(ri,"Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),k(Ze.$$.fragment,ri),cs=c(ri," solver's outputs:"),ri.forEach(s),fs=P($),Gn=E($,"FIGURE",{class:!0});var Ti=R(Gn);qn=E(Ti,"IMG",{class:!0,src:!0,alt:!0}),k(Ve.$$.fragment,Ti),Ti.forEach(s),ms=P($),pt=E($,"P",{});var gt=R(pt);us=c(gt,`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),ps=c(gt,$r),ds=c(gt," for the solver compared to "),$s=c(gt,gr),gs=c(gt,`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),gt.forEach(s),ws=P($),k(Be.$$.fragment,$),vs=P($),Fn=E($,"FIGURE",{class:!0});var Ai=R(Fn);Zn=E(Ai,"IMG",{class:!0,src:!0,alt:!0}),k(Ue.$$.fragment,Ai),Ai.forEach(s),ys=P($),vi=E($,"P",{"data-svelte-h":!0}),V(vi)!=="svelte-8ial96"&&(vi.textContent=vr),bs=P($),Vn=E($,"FIGURE",{class:!0});var zi=R(Vn);Bn=E(zi,"IMG",{class:!0,src:!0,alt:!0}),k(We.$$.fragment,zi),zi.forEach(s),_s=P($),k(Oe.$$.fragment,$),xs=P($),Ke=E($,"FIGURE",{class:!0});var li=R(Ke);Un=E(li,"IMG",{class:!0,src:!0,alt:!0}),ks=P(li),k(Je.$$.fragment,li),li.forEach(s),Is=P($),k(Xe.$$.fragment,$),js=P($),k(Ye.$$.fragment,$),Ms=P($),k(Qe.$$.fragment,$),k(tn.$$.fragment,$),k(en.$$.fragment,$),k(nn.$$.fragment,$),Ts=P($),on=E($,"FIGURE",{class:!0});var hi=R(on);Wn=E(hi,"DIV",{class:!0,"data-svelte-h":!0}),V(Wn)!=="svelte-lbdos2"&&(Wn.innerHTML=_r),As=P(hi),k(an.$$.fragment,hi),hi.forEach(s),zs=P($),k(sn.$$.fragment,$),Es=P($),rn=E($,"FIGURE",{class:!0});var ci=R(rn);On=E(ci,"IMG",{class:!0,src:!0,alt:!0}),Ls=P(ci),k(ln.$$.fragment,ci),ci.forEach(s),Ps=P($),k(hn.$$.fragment,$),Cs=P($),k(cn.$$.fragment,$),Hs=P($),k(fn.$$.fragment,$),Ss=P($),Kn=E($,"DIV",{class:!0,"data-svelte-h":!0}),V(Kn)!=="svelte-1fdz5l6"&&(Kn.innerHTML=kr),Rs=P($),k(mn.$$.fragment,$),Ns=P($),k(Jn.$$.fragment,$),$.forEach(s),w.forEach(s),this.h()},h(){T(g,"id","intro"),T(g,"class","mt-8 text-2xl text-center"),T(v,"class","mt-2 text-md text-center"),T(N,"class","mt-2 text-xs text-center font-serif"),T(O,"class","text-sm text-center font-serif mb-4"),T(tt,"class","list-disc ms-16 text-sm"),T(pn,"id","sabine"),T(It,"id","brunton"),T(mt,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(At,"class","m-auto"),T(At,"width","128"),T(At,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),it(At.src,Ws="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||T(At,"src",Ws),T(dn,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),T(dn,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),T(pi,"class","my-2 self-center"),T(di,"class","self-center"),T($i,"class","self-center"),T(gi,"class","self-center"),T(gn,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(vn,"class","object-contain"),it(vn.src,Qs=`${Q}/Model1ErrDist.png`)||T(vn,"src",Qs),T(vn,"alt","Model 1 - error distribution"),T(Yt,"class","mb-6 self-center max-w-xl"),T(yn,"class","flex flex-wrap justify-center"),T(ee,"class","mt-6 mb-6 self-center"),T(bn,"class","object-contain"),it(bn.src,er=`${Q}/model-1-pod.gif`)||T(bn,"src",er),T(bn,"alt","prediction point of divergence"),T(oe,"class","mt-6 mb-6 self-center max-w-lg"),T(ut,"class","object-contain"),it(ut.src,nr=`${Q}/trajectories.gif`)||T(ut,"src",nr),T(ut,"alt","trajectories approaching origin"),T(ut,"width","500"),T(ut,"height","500"),T(le,"class","mt-6 mb-6 self-center max-w-md"),T(xn,"class","mt-2"),T(In,"class","object-contain"),it(In.src,or=`${Q}/Model2ErrDist.png`)||T(In,"src",or),T(In,"alt",""),T(kn,"class","mb-2 self-center max-w-xl"),T(Mn,"class","object-contain"),it(Mn.src,ar=`${Q}/Model2Err3d.png`)||T(Mn,"src",ar),T(Mn,"alt","Model 2 - error distribution by series and window"),T(jn,"class","-mt-2 mb-2 self-center"),T(Tn,"class","object-contain"),it(Tn.src,sr=`${Q}/model-2-pod.gif`)||T(Tn,"src",sr),T(Tn,"alt","model 2 point of divergence"),T(we,"class","self-center max-w-lg"),T(zn,"class","object-contain"),it(zn.src,rr=`${Q}/Model2DFO.png`)||T(zn,"src",rr),T(zn,"alt","distance from origin vs. sMAPE"),T(An,"class","-mt-2 mb-2 self-center max-w-3xl"),T(Ln,"class","object-contain"),it(Ln.src,lr=`${Q}/datahist_model_2_v_3.1.png`)||T(Ln,"src",lr),T(Ln,"alt","Dataset distribution for Model 2 vs. 3"),T(En,"class","my-8 self-center max-w-lg"),T(Hn,"class","object-contain"),it(Hn.src,cr=`${Q}/Model2v3.1-DFO.png`)||T(Hn,"src",cr),T(Hn,"alt","Model 2 vs. 3.1 - distance from origin vs. sMAPE"),T(Cn,"class","mt-2 mb-2 self-center max-w-3xl"),T(Re,"class","mt-4"),T(Nn,"class","object-contain"),it(Nn.src,mr=`${Q}/Model3.2-DFO.png`)||T(Nn,"src",mr),T(Nn,"alt","Model 3.2 - distance-from-origin error distribution"),T(Rn,"class","mb-8 self-center max-w-3xl"),T(qn,"class","object-contain"),it(qn.src,dr=`${Q}/ar_z_stat.png`)||T(qn,"src",dr),T(qn,"alt","Z Statistic for Reference vs. Autoregressive Trajectories"),T(Gn,"class","mb-2 self-center max-w-3xl"),T(Zn,"class","object-contain"),it(Zn.src,wr=`${Q}/ref_v_ar.png`)||T(Zn,"src",wr),T(Zn,"alt","Reference vs. Autoregressive Trajectories"),T(Fn,"class","mb-2 self-center max-w-4xl"),T(Bn,"class","object-contain"),it(Bn.src,yr=`${Q}/ar_breakdown_1.png`)||T(Bn,"src",yr),T(Bn,"alt","Autoregressive Trajectory - Bad Example"),T(Vn,"class","mb-2 self-center max-w-lg"),T(Un,"class","object-contain"),it(Un.src,br=`${Q}/solvers_vs_model.png`)||T(Un,"src",br),T(Un,"alt","Comparison of RK45 and predictions to Radau's solutions"),T(Ke,"class","mb-2 self-center max-w-2xl"),T(Wn,"class","flex flex-wrap justify-center"),T(on,"class","mb-6 self-center"),T(On,"class","object-contain"),it(On.src,xr=`${Q}/Lorenz_map.png`)||T(On,"src",xr),T(On,"alt","Lorenz Map"),T(rn,"class","my-2 self-center max-w-2xl"),T(Kn,"class","my-4 ms-4 -indent-4 font-serif leading-4"),T(n,"class","flex flex-col mx-4 sm:mx-16"),T(o,"class","grid grid-flow-col auto-cols-auto")},m(f,w){I(e,f,w),u(f,t,w),I(i,f,w),u(f,a,w),u(f,o,w),I(r,o,null),p(o,m),p(o,n),p(n,g),p(g,_),p(n,d),p(n,v),p(n,H),p(n,N),p(n,A),p(n,C),p(n,Z),p(n,O),p(O,et),I(K,O,null),p(n,G),I(q,n,null),p(n,J),p(n,tt),p(tt,X),p(X,ft),I(ot,X,null),p(X,S),p(X,fi),p(X,mi),p(X,ro),p(X,lo),p(X,ho),p(X,co),p(X,fo),p(X,mo),p(tt,uo),p(tt,un),p(un,po),p(un,$o),p(un,go),p(tt,wo),p(tt,st),p(st,vo),p(st,yo),p(st,bo),p(st,_o),p(st,xo),I(wt,st,null),p(st,ko),I(vt,st,null),p(st,Io),p(n,jo),I(yt,n,null),p(n,Mo),I(bt,n,null),I(_t,n,null),I(xt,n,null),p(n,To),p(n,mt),p(mt,Ni),p(Ni,pn),p(pn,Ao),I(kt,pn,null),p(mt,zo),p(mt,ui),p(mt,Eo),p(mt,Di),p(Di,It),p(It,Lo),I(jt,It,null),p(It,Po),p(n,Co),I(Mt,n,null),p(n,Ho),I(Tt,n,null),p(n,So),p(n,pi),p(pi,dn),p(dn,$n),p($n,At),p($n,Ro),I(zt,$n,null),p(n,No),I(Et,n,null),p(n,Do),p(n,di),p(di,Gi),p(Gi,Go),p(n,qo),I(Lt,n,null),p(n,Fo),p(n,$i),p($i,qi),p(qi,Zo),p(n,Vo),I(Pt,n,null),I(Ct,n,null),p(n,Bo),I(Ht,n,null),p(n,Uo),I(St,n,null),p(n,Wo),I(Rt,n,null),p(n,Oo),I(Nt,n,null),p(n,Ko),I(Dt,n,null),p(n,Jo),I(Gt,n,null),I(qt,n,null),I(Ft,n,null),I(Zt,n,null),p(n,Xo),p(n,gi),p(gi,Fi),p(Fi,Yo),p(n,Qo),I(Vt,n,null),p(n,ta),I(Bt,n,null),p(n,ea),I(Ut,n,null),p(n,na),I(Wt,n,null),p(n,ia),p(n,gn),p(n,oa),I(Ot,n,null),p(n,aa),I(Kt,n,null),p(n,sa),I(wn,n,null),p(n,ra),I(Jt,n,null),p(n,la),p(n,Zi),p(Zi,ha),p(n,ca),I(Xt,n,null),p(n,fa),p(n,Yt),p(Yt,vn),p(Yt,ma),I(Qt,Yt,null),p(n,ua),I(te,n,null),p(n,pa),p(n,ee),p(ee,yn),p(ee,da),I(ne,ee,null),p(n,$a),I(ie,n,null),p(n,ga),p(n,oe),p(oe,bn),p(oe,wa),I(ae,oe,null),p(n,va),I(se,n,null),I(re,n,null),p(n,ya),p(n,le),p(le,ut),p(le,ba),I(he,le,null),p(n,_a),I(ce,n,null),p(n,xa),I(fe,n,null),p(n,ka),I(me,n,null),p(n,Ia),I(_n,n,null),p(n,ja),p(n,xn),p(n,Ma),p(n,kn),p(kn,In),I(ue,kn,null),p(n,Ta),I(pe,n,null),I(de,n,null),p(n,Aa),p(n,jn),p(jn,Mn),I($e,jn,null),p(n,za),I(ge,n,null),p(n,Ea),p(n,we),p(we,Tn),p(we,La),I(ve,we,null),p(n,Pa),I(ye,n,null),p(n,Ca),p(n,An),p(An,zn),I(be,An,null),p(n,Ha),I(_e,n,null),p(n,Sa),I(xe,n,null),p(n,Ra),I(ke,n,null),p(n,Na),I(Ie,n,null),p(n,Da),I(je,n,null),I(Me,n,null),I(Te,n,null),p(n,Ga),p(n,En),p(En,Ln),I(Ae,En,null),p(n,qa),p(n,Pn),p(Pn,Fa),p(Pn,Za),p(Pn,Va),p(n,Ba),I(ze,n,null),p(n,Ua),p(n,Cn),p(Cn,Hn),I(Ee,Cn,null),p(n,Wa),I(Le,n,null),p(n,Oa),I(Pe,n,null),p(n,Ka),I(Ce,n,null),p(n,Ja),I(He,n,null),p(n,Xa),I(Sn,n,null),p(n,Ya),I(Se,n,null),p(n,Qa),p(n,Re),p(Re,ts),p(Re,es),p(Re,ns),p(n,is),p(n,Rn),p(Rn,Nn),I(Ne,Rn,null),p(n,os),p(n,wi),p(n,as),I(De,n,null),p(n,ss),I(Ge,n,null),I(qe,n,null),I(Fe,n,null),p(n,rs),p(n,ls),p(n,Dn),p(Dn,hs),I(Ze,Dn,null),p(Dn,cs),p(n,fs),p(n,Gn),p(Gn,qn),I(Ve,Gn,null),p(n,ms),p(n,pt),p(pt,us),p(pt,ps),p(pt,ds),p(pt,$s),p(pt,gs),p(n,ws),I(Be,n,null),p(n,vs),p(n,Fn),p(Fn,Zn),I(Ue,Fn,null),p(n,ys),p(n,vi),p(n,bs),p(n,Vn),p(Vn,Bn),I(We,Vn,null),p(n,_s),I(Oe,n,null),p(n,xs),p(n,Ke),p(Ke,Un),p(Ke,ks),I(Je,Ke,null),p(n,Is),I(Xe,n,null),p(n,js),I(Ye,n,null),p(n,Ms),I(Qe,n,null),I(tn,n,null),I(en,n,null),I(nn,n,null),p(n,Ts),p(n,on),p(on,Wn),p(on,As),I(an,on,null),p(n,zs),I(sn,n,null),p(n,Es),p(n,rn),p(rn,On),p(rn,Ls),I(ln,rn,null),p(n,Ps),I(hn,n,null),p(n,Cs),I(cn,n,null),p(n,Hs),I(fn,n,null),p(n,Ss),p(n,Kn),p(n,Rs),I(mn,n,null),p(n,Ns),I(Jn,n,null),oo=!0},p(f,[w]){const $={};w&1&&($.$$scope={dirty:w,ctx:f}),K.$set($);const Vi={};w&1&&(Vi.$$scope={dirty:w,ctx:f}),q.$set(Vi);const yi={};w&1&&(yi.$$scope={dirty:w,ctx:f}),wt.$set(yi);const dt={};w&1&&(dt.$$scope={dirty:w,ctx:f}),vt.$set(dt);const at={};w&1&&(at.$$scope={dirty:w,ctx:f}),yt.$set(at);const Xn={};w&1&&(Xn.$$scope={dirty:w,ctx:f}),bt.$set(Xn);const rt={};w&1&&(rt.$$scope={dirty:w,ctx:f}),_t.$set(rt);const $t={};w&1&&($t.$$scope={dirty:w,ctx:f}),xt.$set($t);const Bi={};w&1&&(Bi.$$scope={dirty:w,ctx:f}),kt.$set(Bi);const bi={};w&1&&(bi.$$scope={dirty:w,ctx:f}),jt.$set(bi);const Ui={};w&1&&(Ui.$$scope={dirty:w,ctx:f}),Mt.$set(Ui);const Yn={};w&1&&(Yn.$$scope={dirty:w,ctx:f}),Tt.$set(Yn);const Wi={};w&1&&(Wi.$$scope={dirty:w,ctx:f}),zt.$set(Wi);const Oi={};w&1&&(Oi.$$scope={dirty:w,ctx:f}),Et.$set(Oi);const Qn={};w&1&&(Qn.$$scope={dirty:w,ctx:f}),Lt.$set(Qn);const Ki={};w&1&&(Ki.$$scope={dirty:w,ctx:f}),Pt.$set(Ki);const Ji={};w&1&&(Ji.$$scope={dirty:w,ctx:f}),Ct.$set(Ji);const Xi={};w&1&&(Xi.$$scope={dirty:w,ctx:f}),Ht.$set(Xi);const Yi={};w&1&&(Yi.$$scope={dirty:w,ctx:f}),St.$set(Yi);const Qi={};w&1&&(Qi.$$scope={dirty:w,ctx:f}),Rt.$set(Qi);const to={};w&1&&(to.$$scope={dirty:w,ctx:f}),Nt.$set(to);const eo={};w&1&&(eo.$$scope={dirty:w,ctx:f}),Dt.$set(eo);const ti={};w&1&&(ti.$$scope={dirty:w,ctx:f}),Gt.$set(ti);const ei={};w&1&&(ei.$$scope={dirty:w,ctx:f}),qt.$set(ei);const ni={};w&1&&(ni.$$scope={dirty:w,ctx:f}),Ft.$set(ni);const ii={};w&1&&(ii.$$scope={dirty:w,ctx:f}),Zt.$set(ii);const _i={};w&1&&(_i.$$scope={dirty:w,ctx:f}),Vt.$set(_i);const xi={};w&1&&(xi.$$scope={dirty:w,ctx:f}),Bt.$set(xi);const oi={};w&1&&(oi.$$scope={dirty:w,ctx:f}),Ut.$set(oi);const ki={};w&1&&(ki.$$scope={dirty:w,ctx:f}),Wt.$set(ki);const Ii={};w&1&&(Ii.$$scope={dirty:w,ctx:f}),Ot.$set(Ii);const ai={};w&1&&(ai.$$scope={dirty:w,ctx:f}),Kt.$set(ai);const ji={};w&1&&(ji.$$scope={dirty:w,ctx:f}),Jt.$set(ji);const si={};w&1&&(si.$$scope={dirty:w,ctx:f}),Xt.$set(si);const Mi={};w&1&&(Mi.$$scope={dirty:w,ctx:f}),Qt.$set(Mi);const ri={};w&1&&(ri.$$scope={dirty:w,ctx:f}),te.$set(ri);const Ti={};w&1&&(Ti.$$scope={dirty:w,ctx:f}),ne.$set(Ti);const gt={};w&1&&(gt.$$scope={dirty:w,ctx:f}),ie.$set(gt);const Ai={};w&1&&(Ai.$$scope={dirty:w,ctx:f}),ae.$set(Ai);const zi={};w&1&&(zi.$$scope={dirty:w,ctx:f}),se.$set(zi);const li={};w&1&&(li.$$scope={dirty:w,ctx:f}),re.$set(li);const hi={};w&1&&(hi.$$scope={dirty:w,ctx:f}),he.$set(hi);const ci={};w&1&&(ci.$$scope={dirty:w,ctx:f}),ce.$set(ci);const Ir={};w&1&&(Ir.$$scope={dirty:w,ctx:f}),fe.$set(Ir);const jr={};w&1&&(jr.$$scope={dirty:w,ctx:f}),me.$set(jr);const Mr={};w&1&&(Mr.$$scope={dirty:w,ctx:f}),ue.$set(Mr);const Tr={};w&1&&(Tr.$$scope={dirty:w,ctx:f}),pe.$set(Tr);const Ar={};w&1&&(Ar.$$scope={dirty:w,ctx:f}),de.$set(Ar);const zr={};w&1&&(zr.$$scope={dirty:w,ctx:f}),$e.$set(zr);const Er={};w&1&&(Er.$$scope={dirty:w,ctx:f}),ge.$set(Er);const Lr={};w&1&&(Lr.$$scope={dirty:w,ctx:f}),ve.$set(Lr);const Pr={};w&1&&(Pr.$$scope={dirty:w,ctx:f}),ye.$set(Pr);const Cr={};w&1&&(Cr.$$scope={dirty:w,ctx:f}),be.$set(Cr);const Hr={};w&1&&(Hr.$$scope={dirty:w,ctx:f}),_e.$set(Hr);const Sr={};w&1&&(Sr.$$scope={dirty:w,ctx:f}),xe.$set(Sr);const Rr={};w&1&&(Rr.$$scope={dirty:w,ctx:f}),ke.$set(Rr);const Nr={};w&1&&(Nr.$$scope={dirty:w,ctx:f}),Ie.$set(Nr);const Dr={};w&1&&(Dr.$$scope={dirty:w,ctx:f}),je.$set(Dr);const Gr={};w&1&&(Gr.$$scope={dirty:w,ctx:f}),Me.$set(Gr);const qr={};w&1&&(qr.$$scope={dirty:w,ctx:f}),Te.$set(qr);const Fr={};w&1&&(Fr.$$scope={dirty:w,ctx:f}),Ae.$set(Fr);const Zr={};w&1&&(Zr.$$scope={dirty:w,ctx:f}),ze.$set(Zr);const Vr={};w&1&&(Vr.$$scope={dirty:w,ctx:f}),Ee.$set(Vr);const Br={};w&1&&(Br.$$scope={dirty:w,ctx:f}),Le.$set(Br);const Ur={};w&1&&(Ur.$$scope={dirty:w,ctx:f}),Pe.$set(Ur);const Wr={};w&1&&(Wr.$$scope={dirty:w,ctx:f}),Ce.$set(Wr);const Or={};w&1&&(Or.$$scope={dirty:w,ctx:f}),He.$set(Or);const Kr={};w&1&&(Kr.$$scope={dirty:w,ctx:f}),Se.$set(Kr);const Jr={};w&1&&(Jr.$$scope={dirty:w,ctx:f}),Ne.$set(Jr);const Xr={};w&1&&(Xr.$$scope={dirty:w,ctx:f}),De.$set(Xr);const Yr={};w&1&&(Yr.$$scope={dirty:w,ctx:f}),Ge.$set(Yr);const Qr={};w&1&&(Qr.$$scope={dirty:w,ctx:f}),qe.$set(Qr);const tl={};w&1&&(tl.$$scope={dirty:w,ctx:f}),Fe.$set(tl);const el={};w&1&&(el.$$scope={dirty:w,ctx:f}),Ze.$set(el);const nl={};w&1&&(nl.$$scope={dirty:w,ctx:f}),Ve.$set(nl);const il={};w&1&&(il.$$scope={dirty:w,ctx:f}),Be.$set(il);const ol={};w&1&&(ol.$$scope={dirty:w,ctx:f}),Ue.$set(ol);const al={};w&1&&(al.$$scope={dirty:w,ctx:f}),We.$set(al);const sl={};w&1&&(sl.$$scope={dirty:w,ctx:f}),Oe.$set(sl);const rl={};w&1&&(rl.$$scope={dirty:w,ctx:f}),Je.$set(rl);const ll={};w&1&&(ll.$$scope={dirty:w,ctx:f}),Xe.$set(ll);const hl={};w&1&&(hl.$$scope={dirty:w,ctx:f}),Ye.$set(hl);const cl={};w&1&&(cl.$$scope={dirty:w,ctx:f}),Qe.$set(cl);const fl={};w&1&&(fl.$$scope={dirty:w,ctx:f}),tn.$set(fl);const ml={};w&1&&(ml.$$scope={dirty:w,ctx:f}),en.$set(ml);const ul={};w&1&&(ul.$$scope={dirty:w,ctx:f}),nn.$set(ul);const pl={};w&1&&(pl.$$scope={dirty:w,ctx:f}),an.$set(pl);const dl={};w&1&&(dl.$$scope={dirty:w,ctx:f}),sn.$set(dl);const $l={};w&1&&($l.$$scope={dirty:w,ctx:f}),ln.$set($l);const gl={};w&1&&(gl.$$scope={dirty:w,ctx:f}),hn.$set(gl);const wl={};w&1&&(wl.$$scope={dirty:w,ctx:f}),cn.$set(wl);const vl={};w&1&&(vl.$$scope={dirty:w,ctx:f}),fn.$set(vl);const yl={};w&1&&(yl.$$scope={dirty:w,ctx:f}),mn.$set(yl)},i(f){oo||(y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(K.$$.fragment,f),y(q.$$.fragment,f),y(ot.$$.fragment,f),y(wt.$$.fragment,f),y(vt.$$.fragment,f),y(yt.$$.fragment,f),y(bt.$$.fragment,f),y(_t.$$.fragment,f),y(xt.$$.fragment,f),y(kt.$$.fragment,f),y(jt.$$.fragment,f),y(Mt.$$.fragment,f),y(Tt.$$.fragment,f),y(zt.$$.fragment,f),y(Et.$$.fragment,f),y(Lt.$$.fragment,f),y(Pt.$$.fragment,f),y(Ct.$$.fragment,f),y(Ht.$$.fragment,f),y(St.$$.fragment,f),y(Rt.$$.fragment,f),y(Nt.$$.fragment,f),y(Dt.$$.fragment,f),y(Gt.$$.fragment,f),y(qt.$$.fragment,f),y(Ft.$$.fragment,f),y(Zt.$$.fragment,f),y(Vt.$$.fragment,f),y(Bt.$$.fragment,f),y(Ut.$$.fragment,f),y(Wt.$$.fragment,f),y(Ot.$$.fragment,f),y(Kt.$$.fragment,f),y(wn.$$.fragment,f),y(Jt.$$.fragment,f),y(Xt.$$.fragment,f),y(Qt.$$.fragment,f),y(te.$$.fragment,f),y(ne.$$.fragment,f),y(ie.$$.fragment,f),y(ae.$$.fragment,f),y(se.$$.fragment,f),y(re.$$.fragment,f),y(he.$$.fragment,f),y(ce.$$.fragment,f),y(fe.$$.fragment,f),y(me.$$.fragment,f),y(_n.$$.fragment,f),y(ue.$$.fragment,f),y(pe.$$.fragment,f),y(de.$$.fragment,f),y($e.$$.fragment,f),y(ge.$$.fragment,f),y(ve.$$.fragment,f),y(ye.$$.fragment,f),y(be.$$.fragment,f),y(_e.$$.fragment,f),y(xe.$$.fragment,f),y(ke.$$.fragment,f),y(Ie.$$.fragment,f),y(je.$$.fragment,f),y(Me.$$.fragment,f),y(Te.$$.fragment,f),y(Ae.$$.fragment,f),y(ze.$$.fragment,f),y(Ee.$$.fragment,f),y(Le.$$.fragment,f),y(Pe.$$.fragment,f),y(Ce.$$.fragment,f),y(He.$$.fragment,f),y(Sn.$$.fragment,f),y(Se.$$.fragment,f),y(Ne.$$.fragment,f),y(De.$$.fragment,f),y(Ge.$$.fragment,f),y(qe.$$.fragment,f),y(Fe.$$.fragment,f),y(Ze.$$.fragment,f),y(Ve.$$.fragment,f),y(Be.$$.fragment,f),y(Ue.$$.fragment,f),y(We.$$.fragment,f),y(Oe.$$.fragment,f),y(Je.$$.fragment,f),y(Xe.$$.fragment,f),y(Ye.$$.fragment,f),y(Qe.$$.fragment,f),y(tn.$$.fragment,f),y(en.$$.fragment,f),y(nn.$$.fragment,f),y(an.$$.fragment,f),y(sn.$$.fragment,f),y(ln.$$.fragment,f),y(hn.$$.fragment,f),y(cn.$$.fragment,f),y(fn.$$.fragment,f),y(mn.$$.fragment,f),y(Jn.$$.fragment,f),oo=!0)},o(f){b(e.$$.fragment,f),b(i.$$.fragment,f),b(r.$$.fragment,f),b(K.$$.fragment,f),b(q.$$.fragment,f),b(ot.$$.fragment,f),b(wt.$$.fragment,f),b(vt.$$.fragment,f),b(yt.$$.fragment,f),b(bt.$$.fragment,f),b(_t.$$.fragment,f),b(xt.$$.fragment,f),b(kt.$$.fragment,f),b(jt.$$.fragment,f),b(Mt.$$.fragment,f),b(Tt.$$.fragment,f),b(zt.$$.fragment,f),b(Et.$$.fragment,f),b(Lt.$$.fragment,f),b(Pt.$$.fragment,f),b(Ct.$$.fragment,f),b(Ht.$$.fragment,f),b(St.$$.fragment,f),b(Rt.$$.fragment,f),b(Nt.$$.fragment,f),b(Dt.$$.fragment,f),b(Gt.$$.fragment,f),b(qt.$$.fragment,f),b(Ft.$$.fragment,f),b(Zt.$$.fragment,f),b(Vt.$$.fragment,f),b(Bt.$$.fragment,f),b(Ut.$$.fragment,f),b(Wt.$$.fragment,f),b(Ot.$$.fragment,f),b(Kt.$$.fragment,f),b(wn.$$.fragment,f),b(Jt.$$.fragment,f),b(Xt.$$.fragment,f),b(Qt.$$.fragment,f),b(te.$$.fragment,f),b(ne.$$.fragment,f),b(ie.$$.fragment,f),b(ae.$$.fragment,f),b(se.$$.fragment,f),b(re.$$.fragment,f),b(he.$$.fragment,f),b(ce.$$.fragment,f),b(fe.$$.fragment,f),b(me.$$.fragment,f),b(_n.$$.fragment,f),b(ue.$$.fragment,f),b(pe.$$.fragment,f),b(de.$$.fragment,f),b($e.$$.fragment,f),b(ge.$$.fragment,f),b(ve.$$.fragment,f),b(ye.$$.fragment,f),b(be.$$.fragment,f),b(_e.$$.fragment,f),b(xe.$$.fragment,f),b(ke.$$.fragment,f),b(Ie.$$.fragment,f),b(je.$$.fragment,f),b(Me.$$.fragment,f),b(Te.$$.fragment,f),b(Ae.$$.fragment,f),b(ze.$$.fragment,f),b(Ee.$$.fragment,f),b(Le.$$.fragment,f),b(Pe.$$.fragment,f),b(Ce.$$.fragment,f),b(He.$$.fragment,f),b(Sn.$$.fragment,f),b(Se.$$.fragment,f),b(Ne.$$.fragment,f),b(De.$$.fragment,f),b(Ge.$$.fragment,f),b(qe.$$.fragment,f),b(Fe.$$.fragment,f),b(Ze.$$.fragment,f),b(Ve.$$.fragment,f),b(Be.$$.fragment,f),b(Ue.$$.fragment,f),b(We.$$.fragment,f),b(Oe.$$.fragment,f),b(Je.$$.fragment,f),b(Xe.$$.fragment,f),b(Ye.$$.fragment,f),b(Qe.$$.fragment,f),b(tn.$$.fragment,f),b(en.$$.fragment,f),b(nn.$$.fragment,f),b(an.$$.fragment,f),b(sn.$$.fragment,f),b(ln.$$.fragment,f),b(hn.$$.fragment,f),b(cn.$$.fragment,f),b(fn.$$.fragment,f),b(mn.$$.fragment,f),b(Jn.$$.fragment,f),oo=!1},d(f){f&&(s(t),s(a),s(o)),j(e,f),j(i,f),j(r),j(K),j(q),j(ot),j(wt),j(vt),j(yt),j(bt),j(_t),j(xt),j(kt),j(jt),j(Mt),j(Tt),j(zt),j(Et),j(Lt),j(Pt),j(Ct),j(Ht),j(St),j(Rt),j(Nt),j(Dt),j(Gt),j(qt),j(Ft),j(Zt),j(Vt),j(Bt),j(Ut),j(Wt),j(Ot),j(Kt),j(wn),j(Jt),j(Xt),j(Qt),j(te),j(ne),j(ie),j(ae),j(se),j(re),j(he),j(ce),j(fe),j(me),j(_n),j(ue),j(pe),j(de),j($e),j(ge),j(ve),j(ye),j(be),j(_e),j(xe),j(ke),j(Ie),j(je),j(Me),j(Te),j(Ae),j(ze),j(Ee),j(Le),j(Pe),j(Ce),j(He),j(Sn),j(Se),j(Ne),j(De),j(Ge),j(qe),j(Fe),j(Ze),j(Ve),j(Be),j(Ue),j(We),j(Oe),j(Je),j(Xe),j(Ye),j(Qe),j(tn),j(en),j(nn),j(an),j(sn),j(ln),j(hn),j(cn),j(fn),j(mn),j(Jn)}}}class zf extends ht{constructor(e){super(),ct(this,e,null,jf,lt,{})}}export{zf as component};
