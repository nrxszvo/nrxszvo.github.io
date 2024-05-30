import{s as at,a as ci,u as fi,g as mi,b as ui,n as W,o as xr,x as it}from"../chunks/scheduler.BeaK0CkN.js";import{S as st,i as rt,e as E,c as L,h as R,f as s,b as A,d as m,m as y,n as b,r as jr,p as Mr,z as Ir,t as c,v as k,j as f,w as x,k as d,x as I,y as j,l as Ba,s as P,a as S,g as B,A as Tr,B as Ar}from"../chunks/index.BmRq3wWf.js";import{b as Q}from"../chunks/paths.950UHjlK.js";const zr=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ri(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Er(l){let e,t,i;const a=l[4].default,o=ci(a,l,l[3],null);return{c(){e=E("a"),o&&o.c(),this.h()},l(r){e=L(r,"A",{href:!0,class:!0,target:!0,rel:!0});var h=R(e);o&&o.l(h),h.forEach(s),this.h()},h(){A(e,"href",l[0]),A(e,"class",t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+l[1]),A(e,"target",l[2]),A(e,"rel","noopener noreferrer")},m(r,h){m(r,e,h),o&&o.m(e,null),i=!0},p(r,[h]){o&&o.p&&(!i||h&8)&&fi(o,a,r,r[3],i?ui(a,r[3],h,null):mi(r[3]),null),(!i||h&1)&&A(e,"href",r[0]),(!i||h&2&&t!==(t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+r[1]))&&A(e,"class",t),(!i||h&4)&&A(e,"target",r[2])},i(r){i||(y(o,r),i=!0)},o(r){b(o,r),i=!1},d(r){r&&s(e),o&&o.d(r)}}}function Lr(l,e,t){let{$$slots:i={},$$scope:a}=e,{href:o}=e,{styling:r=""}=e,{target:h="_blank"}=e;return l.$$set=n=>{"href"in n&&t(0,o=n.href),"styling"in n&&t(1,r=n.styling),"target"in n&&t(2,h=n.target),"$$scope"in n&&t(3,a=n.$$scope)},[o,r,h,a,i]}class U extends st{constructor(e){super(),rt(this,e,Lr,Er,at,{href:0,styling:1,target:2})}}function wr(l,e,t){const i=l.slice();return i[0]=e[t],i}function Pr(l){let e;return{c(){e=c("link")},l(t){e=f(t,"link")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function vr(l){let e,t,i=l[0].author+"",a,o,r,h=l[0].title+"",n,$,_,p=l[0].publisher+"",v,M,C,N=l[0].year+"",V,T,z,F,J,tt,O,G;return J=new U({props:{href:l[0].link,$$slots:{default:[Pr]},$$scope:{ctx:l}}}),{c(){e=E("li"),t=E("span"),a=c(i),o=c(", "),r=E("span"),n=c(h),$=c(`,
			`),_=E("span"),v=c(p),M=c(`,
			`),C=E("span"),V=c(N),T=c(", "),z=E("span"),F=c("["),k(J.$$.fragment),tt=c("]"),O=c(`.
		`),this.h()},l(q){e=L(q,"LI",{});var K=R(e);t=L(K,"SPAN",{class:!0});var Y=R(t);a=f(Y,i),Y.forEach(s),o=f(K,", "),r=L(K,"SPAN",{});var ot=R(r);n=f(ot,h),ot.forEach(s),$=f(K,`,
			`),_=L(K,"SPAN",{});var nt=R(_);v=f(nt,p),nt.forEach(s),M=f(K,`,
			`),C=L(K,"SPAN",{});var lt=R(C);V=f(lt,N),lt.forEach(s),T=f(K,", "),z=L(K,"SPAN",{});var H=R(z);F=f(H,"["),x(J.$$.fragment,H),tt=f(H,"]"),H.forEach(s),O=f(K,`.
		`),K.forEach(s),this.h()},h(){A(t,"class","ms-4")},m(q,K){m(q,e,K),d(e,t),d(t,a),d(e,o),d(e,r),d(r,n),d(e,$),d(e,_),d(_,v),d(e,M),d(e,C),d(C,V),d(e,T),d(e,z),d(z,F),I(J,z,null),d(z,tt),d(e,O),G=!0},p(q,K){const Y={};K&8&&(Y.$$scope={dirty:K,ctx:q}),J.$set(Y)},i(q){G||(y(J.$$.fragment,q),G=!0)},o(q){b(J.$$.fragment,q),G=!1},d(q){q&&s(e),j(J)}}}function Sr(l){let e,t,i=Ri(Si),a=[];for(let r=0;r<i.length;r+=1)a[r]=vr(wr(l,i,r));const o=r=>b(a[r],1,1,()=>{a[r]=null});return{c(){e=E("ol");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=L(r,"OL",{class:!0});var h=R(e);for(let n=0;n<a.length;n+=1)a[n].l(h);h.forEach(s),this.h()},h(){A(e,"class","pl-5 my-2 text-xs list-decimal")},m(r,h){m(r,e,h);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,null);t=!0},p(r,[h]){if(h&0){i=Ri(Si);let n;for(n=0;n<i.length;n+=1){const $=wr(r,i,n);a[n]?(a[n].p($,h),y(a[n],1)):(a[n]=vr($),a[n].c(),y(a[n],1),a[n].m(e,null))}for(jr(),n=i.length;n<a.length;n+=1)o(n);Mr()}},i(r){if(!t){for(let h=0;h<i.length;h+=1)y(a[h]);t=!0}},o(r){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)b(a[h]);t=!1},d(r){r&&s(e),Ir(a,r)}}}const Ni=l=>{for(let e=0;e<Si.length;e++)if(Si[e].id==l)return{index:e+1,link:Si[e].link};throw new Error},Si=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"oestreicher",author:"Oestreicher C.",title:"A history of chaos theory",publisher:"Dialogues Clin Neurosci.",year:"2007",link:"https://doi.org/10.31887/DCNS.2007.9.3/coestreicher"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"},{id:"chandramoorthy",author:"Nisha Chandramoorthy, QiQi Wang",title:"On the probability of finding nonphysical solutions through shadowing",publisher:"Journal of Computational Physics",year:"1 September 2021",link:"https://doi.org/10.1016/j.jcp.2021.110389"}];class Cr extends st{constructor(e){super(),rt(this,e,null,Sr,at,{})}}function Hr(l){let e=Ni(l[0]).index+"",t;return{c(){t=c(e)},l(i){t=f(i,e)},m(i,a){m(i,t,a)},p(i,a){a&1&&e!==(e=Ni(i[0]).index+"")&&Ba(t,e)},d(i){i&&s(t)}}}function Rr(l){let e,t,i,a;return t=new U({props:{href:Ni(l[0]).link,$$slots:{default:[Hr]},$$scope:{ctx:l}}}),{c(){e=c("["),k(t.$$.fragment),i=c("]")},l(o){e=f(o,"["),x(t.$$.fragment,o),i=f(o,"]")},m(o,r){m(o,e,r),I(t,o,r),m(o,i,r),a=!0},p(o,[r]){const h={};r&1&&(h.href=Ni(o[0]).link),r&3&&(h.$$scope={dirty:r,ctx:o}),t.$set(h)},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Nr(l,e,t){let{id:i}=e;return l.$$set=a=>{"id"in a&&t(0,i=a.id)},[i]}class X extends st{constructor(e){super(),rt(this,e,Nr,Rr,at,{id:0})}}function Dr(l){let e,t;const i=l[2].default,a=ci(i,l,l[1],null);return{c(){e=E("div"),a&&a.c(),this.h()},l(o){e=L(o,"DIV",{id:!0,class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"id",l[0]),A(e,"class","text-2xl font-bold text-center my-8")},m(o,r){m(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&2)&&fi(a,i,o,o[1],t?ui(i,o[1],r,null):mi(o[1]),null),(!t||r&1)&&A(e,"id",o[0])},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Gr(l,e,t){let{$$slots:i={},$$scope:a}=e,{id:o}=e;return l.$$set=r=>{"id"in r&&t(0,o=r.id),"$$scope"in r&&t(1,a=r.$$scope)},[o,a,i]}class Li extends st{constructor(e){super(),rt(this,e,Gr,Dr,at,{id:0})}}function qr(l){let e,t;const i=l[2].default,a=ci(i,l,l[1],null);return{c(){e=E("div"),a&&a.c(),this.h()},l(o){e=L(o,"DIV",{id:!0,class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"id",l[0]),A(e,"class","text-xl font-medium text-left mt-8 mb-4")},m(o,r){m(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&2)&&fi(a,i,o,o[1],t?ui(i,o[1],r,null):mi(o[1]),null),(!t||r&1)&&A(e,"id",o[0])},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Fr(l,e,t){let{$$slots:i={},$$scope:a}=e,{id:o}=e;return l.$$set=r=>{"id"in r&&t(0,o=r.id),"$$scope"in r&&t(1,a=r.$$scope)},[o,a,i]}class Pi extends st{constructor(e){super(),rt(this,e,Fr,qr,at,{id:0})}}function Vr(l){let e,t;const i=l[1].default,a=ci(i,l,l[0],null);return{c(){e=E("div"),a&&a.c(),this.h()},l(o){e=L(o,"DIV",{class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"class","text-lg font-medium text-left ms-4 mt-4 mb-4")},m(o,r){m(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&1)&&fi(a,i,o,o[0],t?ui(i,o[0],r,null):mi(o[0]),null)},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Zr(l,e,t){let{$$slots:i={},$$scope:a}=e;return l.$$set=o=>{"$$scope"in o&&t(0,a=o.$$scope)},[a,i]}class yr extends st{constructor(e){super(),rt(this,e,Zr,Vr,at,{})}}function Br(l){let e,t,i;const a=l[3].default,o=ci(a,l,l[2],null);return{c(){e=E("p"),o&&o.c(),this.h()},l(r){e=L(r,"P",{class:!0});var h=R(e);o&&o.l(h),h.forEach(s),this.h()},h(){A(e,"class",t="my-2 "+l[0]+" "+l[1])},m(r,h){m(r,e,h),o&&o.m(e,null),i=!0},p(r,[h]){o&&o.p&&(!i||h&4)&&fi(o,a,r,r[2],i?ui(a,r[2],h,null):mi(r[2]),null),(!i||h&3&&t!==(t="my-2 "+r[0]+" "+r[1]))&&A(e,"class",t)},i(r){i||(y(o,r),i=!0)},o(r){b(o,r),i=!1},d(r){r&&s(e),o&&o.d(r)}}}function Ur(l,e,t){let{$$slots:i={},$$scope:a}=e,{indent:o="indent-8"}=e,{style:r=""}=e;return l.$$set=h=>{"indent"in h&&t(0,o=h.indent),"style"in h&&t(1,r=h.style),"$$scope"in h&&t(2,a=h.$$scope)},[o,r,a,i]}class D extends st{constructor(e){super(),rt(this,e,Ur,Br,at,{indent:0,style:1})}}function br(l,e,t){const i=l.slice();return i[1]=e[t],i}function _r(l){let e,t,i=l[1].desc+"",a,o,r,h,n=l[1].val+"",$,_;return{c(){e=E("li"),t=E("div"),a=c(i),o=P(),r=E("div"),h=E("span"),$=c(n),_=P(),this.h()},l(p){e=L(p,"LI",{class:!0});var v=R(e);t=L(v,"DIV",{class:!0});var M=R(t);a=f(M,i),M.forEach(s),o=S(v),r=L(v,"DIV",{class:!0});var C=R(r);h=L(C,"SPAN",{class:!0});var N=R(h);$=f(N,n),N.forEach(s),C.forEach(s),_=S(v),v.forEach(s),this.h()},h(){A(t,"class","flex-none w-32 sm:w-64"),A(h,"class","rounded-0.5 p-1 font-mono"),A(r,"class","w-fit flex-wrap"),A(e,"class","flex items-center justify-left")},m(p,v){m(p,e,v),d(e,t),d(t,a),d(e,o),d(e,r),d(r,h),d(h,$),d(e,_)},p(p,v){v&1&&i!==(i=p[1].desc+"")&&Ba(a,i),v&1&&n!==(n=p[1].val+"")&&Ba($,n)},d(p){p&&s(e)}}}function Wr(l){let e,t,i=Ri(l[0]),a=[];for(let o=0;o<i.length;o+=1)a[o]=_r(br(l,i,o));return{c(){e=E("section"),t=E("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=L(o,"SECTION",{class:!0});var r=R(e);t=L(r,"UL",{class:!0});var h=R(t);for(let n=0;n<a.length;n+=1)a[n].l(h);h.forEach(s),r.forEach(s),this.h()},h(){A(t,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),A(e,"class","relative block my-4")},m(o,r){m(o,e,r),d(e,t);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(t,null)},p(o,[r]){if(r&1){i=Ri(o[0]);let h;for(h=0;h<i.length;h+=1){const n=br(o,i,h);a[h]?a[h].p(n,r):(a[h]=_r(n),a[h].c(),a[h].m(t,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=i.length}},i:W,o:W,d(o){o&&s(e),Ir(a,o)}}}function Or(l,e,t){let{hps:i=[]}=e;return l.$$set=a=>{"hps"in a&&t(0,i=a.hps)},[i]}class Za extends st{constructor(e){super(),rt(this,e,Or,Wr,at,{hps:0})}}function Kr(l){let e,t;const i=l[1].default,a=ci(i,l,l[0],null);return{c(){e=E("figcaption"),a&&a.c(),this.h()},l(o){e=L(o,"FIGCAPTION",{class:!0});var r=R(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"class","text-center text-xs mt-2")},m(o,r){m(o,e,r),a&&a.m(e,null),t=!0},p(o,[r]){a&&a.p&&(!t||r&1)&&fi(a,i,o,o[0],t?ui(i,o[0],r,null):mi(o[0]),null)},i(o){t||(y(a,o),t=!0)},o(o){b(a,o),t=!1},d(o){o&&s(e),a&&a.d(o)}}}function Jr(l,e,t){let{$$slots:i={},$$scope:a}=e;return l.$$set=o=>{"$$scope"in o&&t(0,a=o.$$scope)},[a,i]}class et extends st{constructor(e){super(),rt(this,e,Jr,Kr,at,{})}}const{window:Xr}=zr;function Yr(l){let e,t='<nav class="border-r-2 sticky top-12"><div><section><ul class="menu"><li><a href="#intro">Intro</a></li> <li><a href="#lorenz">Lorenz Attractor</a></li> <li><a href="#nhits">Neural Architecture</a></li> <li><a href="#experiments">Experiments</a></li> <ul class="text-sm submenu"><li><a href="#datagen">Data Generation</a></li> <li><a href="#model-1">Model 1</a></li> <li><a href="#model-2">Model 2</a></li> <li><a href="#model-3">Model 3</a></li> <li><a href="#arpred">Autoregressive Prediction</a></li></ul> <li><a href="#discussion">Discussion</a></li> <li><a href="#references">References</a></li></ul></section></div></nav>',i,a;return{c(){e=E("aside"),e.innerHTML=t,this.h()},l(o){e=L(o,"ASIDE",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-u7i093"&&(e.innerHTML=t),this.h()},h(){A(e,"class","max-sm:hidden")},m(o,r){m(o,e,r),i||(a=Tr(Xr,"scroll",l[0]),i=!0)},p:W,i:W,o:W,d(o){o&&s(e),i=!1,a()}}}function Qr(l){const e=["intro","lorenz","nhits","experiments","datagen","model-1","model-2","model-3","arpred","discussion","references"],t=["bg-rose-100","rounded"];let i=e[0];const a=n=>{const $="a[href='#"+n+"']";return document.querySelector($)},o=n=>{const $=a(n).parentElement;t.forEach(_=>$.classList.add(_))},r=n=>{const $=a(n).parentElement;t.forEach(_=>$.classList.remove(_))},h=()=>{let n;e.forEach($=>{const _=document.getElementById($);window.scrollY>=_.offsetTop-1&&(n=$)}),n&&n!=i&&(r(i),i=n,o(i))};return xr(()=>{o(i),h()}),[h]}class tl extends st{constructor(e){super(),rt(this,e,Qr,Yr,at,{})}}function el(l){return xr(()=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",e.async=!0,document.head.append(e),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[]}class nl extends st{constructor(e){super(),rt(this,e,el,null,at,{})}}const il=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,ol=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,al=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,sl=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,rl=`
\\begin{align}
\\operatorname{J}(z) := exp(-\\frac{z^2}{2}) \\\\
\\end{align}`,ll=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],hl=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~687 million"}],cl=[{desc:"horizon",val:500},{desc:"lookback",val:1e3},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"},{desc:"total trainable parameters",val:"~857 million"}];function fl(l){let e,t,i,a,o,r,h;return document.title=e=Ci,{c(){t=E("meta"),i=E("meta"),a=E("meta"),o=E("meta"),r=E("meta"),h=E("meta"),this.h()},l(n){const $=Ar("svelte-xp42rc",document.head);t=L($,"META",{name:!0,content:!0}),i=L($,"META",{property:!0,content:!0}),a=L($,"META",{property:!0,content:!0}),o=L($,"META",{property:!0,content:!0}),r=L($,"META",{property:!0,content:!0}),h=L($,"META",{property:!0,content:!0}),$.forEach(s),this.h()},h(){A(t,"name","description"),A(t,"content",kr),A(i,"property","og:type"),A(i,"content","article"),A(a,"property","og:url"),A(a,"content","https://nrxszvo.github.io/nhits-lorenz"),A(o,"property","og:description"),A(o,"content",kr),A(r,"property","og:image"),A(r,"content","https://nrxszvo.github.io/thumbnail.png"),A(h,"property","og:title"),A(h,"content",Ci)},m(n,$){d(document.head,t),d(document.head,i),d(document.head,a),d(document.head,o),d(document.head,r),d(document.head,h)},p(n,[$]){$&0&&e!==(e=Ci)&&(document.title=e)},i:W,o:W,d(n){s(t),s(i),s(a),s(o),s(r),s(h)}}}const Ci="Generic Deep Learning for Chaotic Dynamics: A Case Study on the Lorenz Attractor",kr="Experiments using the NHiTS neural forecasting architecture to model the Lorenz Attractor; analysis of Z coordinate local maximum converging to 38.5";class ml extends st{constructor(e){super(),rt(this,e,null,fl,at,{})}}function ul(l){let e;return{c(){e=c("mochaNN")},l(t){e=f(t,"mochaNN")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function pl(l){let e,t,i="Model scale versus domain knowledge in statistical forecasting of chaotic systems",a,o,r,h,n,$,_,p,v,M,C='<a href="#sabine">1</a>',N,V;return o=new X({props:{id:"gilpin"}}),h=new X({props:{id:"gilpin"}}),$=new X({props:{id:"seo"}}),p=new X({props:{id:"degrave"}}),{c(){e=c(`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=E("i"),t.textContent=i,a=P(),k(o.$$.fragment),r=c(`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),k(h.$$.fragment),n=c(`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),k($.$$.fragment),_=c(", "),k(p.$$.fragment),v=c(")"),M=E("sup"),M.innerHTML=C,N=c(`.
		`)},l(T){e=f(T,`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=L(T,"I",{"data-svelte-h":!0}),B(t)!=="svelte-oq8z8z"&&(t.textContent=i),a=S(T),x(o.$$.fragment,T),r=f(T,`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),x(h.$$.fragment,T),n=f(T,`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),x($.$$.fragment,T),_=f(T,", "),x(p.$$.fragment,T),v=f(T,")"),M=L(T,"SUP",{"data-svelte-h":!0}),B(M)!=="svelte-6x9dc9"&&(M.innerHTML=C),N=f(T,`.
		`)},m(T,z){m(T,e,z),m(T,t,z),m(T,a,z),I(o,T,z),m(T,r,z),I(h,T,z),m(T,n,z),I($,T,z),m(T,_,z),I(p,T,z),m(T,v,z),m(T,M,z),m(T,N,z),V=!0},p:W,i(T){V||(y(o.$$.fragment,T),y(h.$$.fragment,T),y($.$$.fragment,T),y(p.$$.fragment,T),V=!0)},o(T){b(o.$$.fragment,T),b(h.$$.fragment,T),b($.$$.fragment,T),b(p.$$.fragment,T),V=!1},d(T){T&&(s(e),s(t),s(a),s(r),s(n),s(_),s(v),s(M),s(N)),j(o,T),j(h,T),j($,T),j(p,T)}}}function dl(l){let e,t,i="i.e.",a,o,r='<a href="#paperspace">2</a>',h,n,$='<a href="#brunton">3</a>',_;return{c(){e=c(`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=E("i"),t.textContent=i,a=c(`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),o=E("sup"),o.innerHTML=r,h=c(`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=E("sup"),n.innerHTML=$,_=c(`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},l(p){e=f(p,`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=L(p,"I",{"data-svelte-h":!0}),B(t)!=="svelte-1xx6z5c"&&(t.textContent=i),a=f(p,`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),o=L(p,"SUP",{"data-svelte-h":!0}),B(o)!=="svelte-yuo1gg"&&(o.innerHTML=r),h=f(p,`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=L(p,"SUP",{"data-svelte-h":!0}),B(n)!=="svelte-a7rqq8"&&(n.innerHTML=$),_=f(p,`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},m(p,v){m(p,e,v),m(p,t,v),m(p,a,v),m(p,o,v),m(p,h,v),m(p,n,v),m(p,_,v)},p:W,d(p){p&&(s(e),s(t),s(a),s(o),s(h),s(n),s(_))}}}function $l(l){let e;return{c(){e=c(`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},l(t){e=f(t,`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function gl(l){let e;return{c(){e=c("Youtube channel")},l(t){e=f(t,"Youtube channel")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function wl(l){let e;return{c(){e=c("lecture series")},l(t){e=f(t,"lecture series")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function vl(l){let e;return{c(){e=c("The Lorenz Attractor")},l(t){e=f(t,"The Lorenz Attractor")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function yl(l){let e;return{c(){e=c("sensitivity to initial conditions")},l(t){e=f(t,"sensitivity to initial conditions")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function bl(l){let e;return{c(){e=c("n-body problem")},l(t){e=f(t,"n-body problem")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function _l(l){let e;return{c(){e=c("Lorenz Attractor")},l(t){e=f(t,"Lorenz Attractor")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function kl(l){let e,t,i,a,o,r,h,n,$,_;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Butterfly_effect",$$slots:{default:[yl]},$$scope:{ctx:l}}}),a=new U({props:{href:"https://en.wikipedia.org/wiki/N-body_problem",$$slots:{default:[bl]},$$scope:{ctx:l}}}),r=new U({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[_l]},$$scope:{ctx:l}}}),n=new X({props:{id:"oestreicher"}}),{c(){e=c("Although the phenomon of "),k(t.$$.fragment),i=c(` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),k(a.$$.fragment),o=c(", the birth of modern chaos theory is generally associated with the discovery of the "),k(r.$$.fragment),h=c(`
			by Edward Lorenz et. al. in 1963 `),k(n.$$.fragment),$=c(`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},l(p){e=f(p,"Although the phenomon of "),x(t.$$.fragment,p),i=f(p,` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),x(a.$$.fragment,p),o=f(p,", the birth of modern chaos theory is generally associated with the discovery of the "),x(r.$$.fragment,p),h=f(p,`
			by Edward Lorenz et. al. in 1963 `),x(n.$$.fragment,p),$=f(p,`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},m(p,v){m(p,e,v),I(t,p,v),m(p,i,v),I(a,p,v),m(p,o,v),I(r,p,v),m(p,h,v),I(n,p,v),m(p,$,v),_=!0},p(p,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:p}),t.$set(M);const C={};v&1&&(C.$$scope={dirty:v,ctx:p}),a.$set(C);const N={};v&1&&(N.$$scope={dirty:v,ctx:p}),r.$set(N)},i(p){_||(y(t.$$.fragment,p),y(a.$$.fragment,p),y(r.$$.fragment,p),y(n.$$.fragment,p),_=!0)},o(p){b(t.$$.fragment,p),b(a.$$.fragment,p),b(r.$$.fragment,p),b(n.$$.fragment,p),_=!1},d(p){p&&(s(e),s(i),s(o),s(h),s($)),j(t,p),j(a,p),j(r,p),j(n,p)}}}function xl(l){let e;return{c(){e=c("The Lorenz Attractor")},l(t){e=f(t,"The Lorenz Attractor")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Il(l){let e;return{c(){e=c(`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},l(t){e=f(t,`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function jl(l){let e;return{c(){e=c("strange attractor")},l(t){e=f(t,"strange attractor")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Ml(l){let e;return{c(){e=c("Hausdorff dimension")},l(t){e=f(t,"Hausdorff dimension")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Tl(l){let e,t,i="Attractor",a,o,r,h,n,$;return o=new U({props:{href:"https://en.wikipedia.org/wiki/Attractor#Strange_attractor",$$slots:{default:[jl]},$$scope:{ctx:l}}}),h=new U({props:{href:"https://en.wikipedia.org/wiki/Hausdorff_dimension",$$slots:{default:[Ml]},$$scope:{ctx:l}}}),{c(){e=c("The Lorenz "),t=E("i"),t.textContent=i,a=c(` refers to a set of chaotic solutions to the system that
			constitute a `),k(o.$$.fragment),r=c(`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),k(h.$$.fragment),n=c(` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},l(_){e=f(_,"The Lorenz "),t=L(_,"I",{"data-svelte-h":!0}),B(t)!=="svelte-7jrnvq"&&(t.textContent=i),a=f(_,` refers to a set of chaotic solutions to the system that
			constitute a `),x(o.$$.fragment,_),r=f(_,`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),x(h.$$.fragment,_),n=f(_,` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},m(_,p){m(_,e,p),m(_,t,p),m(_,a,p),I(o,_,p),m(_,r,p),I(h,_,p),m(_,n,p),$=!0},p(_,p){const v={};p&1&&(v.$$scope={dirty:p,ctx:_}),o.$set(v);const M={};p&1&&(M.$$scope={dirty:p,ctx:_}),h.$set(M)},i(_){$||(y(o.$$.fragment,_),y(h.$$.fragment,_),$=!0)},o(_){b(o.$$.fragment,_),b(h.$$.fragment,_),$=!1},d(_){_&&(s(e),s(t),s(a),s(r),s(n)),j(o,_),j(h,_)}}}function Al(l){let e;return{c(){e=c("Hopf bifurcation")},l(t){e=f(t,"Hopf bifurcation")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function zl(l){let e,t="$\\rho$",i,a,o="$\\rho \\lt 1$",r,h,n="$\\rho \\approx 24.7$",$,_,p,v,M;return p=new U({props:{href:"https://en.wikipedia.org/wiki/Hopf_bifurcation",$$slots:{default:[Al]},$$scope:{ctx:l}}}),{c(){e=c("Other parameterizations of interest generally involve varying the "),i=c(t),a=c(` parameter,
			for example, `),r=c(o),h=c(" in which the system is stable, and "),$=c(n),_=c(`,
			at which a `),k(p.$$.fragment),v=c(" occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},l(C){e=f(C,"Other parameterizations of interest generally involve varying the "),i=f(C,t),a=f(C,` parameter,
			for example, `),r=f(C,o),h=f(C," in which the system is stable, and "),$=f(C,n),_=f(C,`,
			at which a `),x(p.$$.fragment,C),v=f(C," occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},m(C,N){m(C,e,N),m(C,i,N),m(C,a,N),m(C,r,N),m(C,h,N),m(C,$,N),m(C,_,N),I(p,C,N),m(C,v,N),M=!0},p(C,N){const V={};N&1&&(V.$$scope={dirty:N,ctx:C}),p.$set(V)},i(C){M||(y(p.$$.fragment,C),M=!0)},o(C){b(p.$$.fragment,C),M=!1},d(C){C&&(s(e),s(i),s(a),s(r),s(h),s($),s(_),s(v)),j(p,C)}}}function El(l){let e;return{c(){e=c("dysts")},l(t){e=f(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Ll(l){let e,t,i,a;return t=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[El]},$$scope:{ctx:l}}}),{c(){e=c("For all trajectories in this project, I used Gilpin's "),k(t.$$.fragment),i=c(` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},l(o){e=f(o,"For all trajectories in this project, I used Gilpin's "),x(t.$$.fragment,o),i=f(o,` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},m(o,r){m(o,e,r),I(t,o,r),m(o,i,r),a=!0},p(o,r){const h={};r&1&&(h.$$scope={dirty:r,ctx:o}),t.$set(h)},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Pl(l){let e;return{c(){e=c("Neural Architecture: N-HiTS")},l(t){e=f(t,"Neural Architecture: N-HiTS")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Sl(l){let e,t,i,a,o,r;return t=new X({props:{id:"challu"}}),a=new X({props:{id:"gilpin"}}),{c(){e=c("The N-HiTS "),k(t.$$.fragment),i=c(` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),k(a.$$.fragment),o=c(`, it seemed like the natural starting point
			for a network architecture.`)},l(h){e=f(h,"The N-HiTS "),x(t.$$.fragment,h),i=f(h,` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),x(a.$$.fragment,h),o=f(h,`, it seemed like the natural starting point
			for a network architecture.`)},m(h,n){m(h,e,n),I(t,h,n),m(h,i,n),I(a,h,n),m(h,o,n),r=!0},p:W,i(h){r||(y(t.$$.fragment,h),y(a.$$.fragment,h),r=!0)},o(h){b(t.$$.fragment,h),b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(i),s(o)),j(t,h),j(a,h)}}}function Cl(l){let e,t,i,a,o,r;return t=new X({props:{id:"oreshkin"}}),a=new X({props:{id:"oreshkin"}}),{c(){e=c("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),k(t.$$.fragment),i=c(`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),k(a.$$.fragment),o=c(".")},l(h){e=f(h,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),x(t.$$.fragment,h),i=f(h,`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),x(a.$$.fragment,h),o=f(h,".")},m(h,n){m(h,e,n),I(t,h,n),m(h,i,n),I(a,h,n),m(h,o,n),r=!0},p:W,i(h){r||(y(t.$$.fragment,h),y(a.$$.fragment,h),r=!0)},o(h){b(t.$$.fragment,h),b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(i),s(o)),j(t,h),j(a,h)}}}function Hl(l){let e,t,i,a;return t=new X({props:{id:"challu"}}),{c(){e=c(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),k(t.$$.fragment),i=c(".")},l(o){e=f(o,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),x(t.$$.fragment,o),i=f(o,".")},m(o,r){m(o,e,r),I(t,o,r),m(o,i,r),a=!0},p:W,i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Rl(l){let e;return{c(){e=c("Experiments")},l(t){e=f(t,"Experiments")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Nl(l){let e,t,i,a;return t=new X({props:{id:"gilpin"}}),{c(){e=c(`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),k(t.$$.fragment),i=c(`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},l(o){e=f(o,`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),x(t.$$.fragment,o),i=f(o,`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},m(o,r){m(o,e,r),I(t,o,r),m(o,i,r),a=!0},p:W,i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Dl(l){let e;return{c(){e=c("Data Generation")},l(t){e=f(t,"Data Generation")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Gl(l){let e;return{c(){e=c("dysts")},l(t){e=f(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function ql(l){let e;return{c(){e=c("IVP solver")},l(t){e=f(t,"IVP solver")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Fl(l){let e;return{c(){e=c("dysts")},l(t){e=f(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Vl(l){let e,t="$H$",i,a,o="$dt$",r,h,n="$0.015$",$,_,p,v,M,C,N="$dt$",V,T,z,F="after",J,tt="$dt$",O,G,q,K,Y="$\\approx 1.8\\mathrm{e}{-4}$",ot,nt,lt;return p=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Gl]},$$scope:{ctx:l}}}),M=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[ql]},$$scope:{ctx:l}}}),q=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Fl]},$$scope:{ctx:l}}}),{c(){e=c("I begin with a horizon (prediction window), "),i=c(t),a=c(", of 100 points, using a "),r=c(o),h=c(` of
			approximately
			`),$=c(n),_=c(" seconds per point (the default from "),k(p.$$.fragment),v=c(") to sample the solution produced by the "),k(M.$$.fragment),C=c(". Importantly, note that this "),V=c(N),T=c(` is only the one used for sampling the solution
			`),z=E("i"),z.textContent=F,J=c(`
			it is generated by the IVP solver. The actual `),O=c(tt),G=c(` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),k(q.$$.fragment),K=c(" is "),ot=c(Y),nt=c(`.
		`)},l(H){e=f(H,"I begin with a horizon (prediction window), "),i=f(H,t),a=f(H,", of 100 points, using a "),r=f(H,o),h=f(H,` of
			approximately
			`),$=f(H,n),_=f(H," seconds per point (the default from "),x(p.$$.fragment,H),v=f(H,") to sample the solution produced by the "),x(M.$$.fragment,H),C=f(H,". Importantly, note that this "),V=f(H,N),T=f(H,` is only the one used for sampling the solution
			`),z=L(H,"I",{"data-svelte-h":!0}),B(z)!=="svelte-10nlrz4"&&(z.textContent=F),J=f(H,`
			it is generated by the IVP solver. The actual `),O=f(H,tt),G=f(H,` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),x(q.$$.fragment,H),K=f(H," is "),ot=f(H,Y),nt=f(H,`.
		`)},m(H,Z){m(H,e,Z),m(H,i,Z),m(H,a,Z),m(H,r,Z),m(H,h,Z),m(H,$,Z),m(H,_,Z),I(p,H,Z),m(H,v,Z),I(M,H,Z),m(H,C,Z),m(H,V,Z),m(H,T,Z),m(H,z,Z),m(H,J,Z),m(H,O,Z),m(H,G,Z),I(q,H,Z),m(H,K,Z),m(H,ot,Z),m(H,nt,Z),lt=!0},p(H,Z){const ht={};Z&1&&(ht.$$scope={dirty:Z,ctx:H}),p.$set(ht);const pi={};Z&1&&(pi.$$scope={dirty:Z,ctx:H}),M.$set(pi);const Wn={};Z&1&&(Wn.$$scope={dirty:Z,ctx:H}),q.$set(Wn)},i(H){lt||(y(p.$$.fragment,H),y(M.$$.fragment,H),y(q.$$.fragment,H),lt=!0)},o(H){b(p.$$.fragment,H),b(M.$$.fragment,H),b(q.$$.fragment,H),lt=!1},d(H){H&&(s(e),s(i),s(a),s(r),s(h),s($),s(_),s(v),s(C),s(V),s(T),s(z),s(J),s(O),s(G),s(K),s(ot),s(nt)),j(p,H),j(M,H),j(q,H)}}}function Zl(l){let e;return{c(){e=c("Lyapunov exponent")},l(t){e=f(t,"Lyapunov exponent")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Bl(l){let e;return{c(){e=c("dysts")},l(t){e=f(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Ul(l){let e;return{c(){e=c("Lyapunov time")},l(t){e=f(t,"Lyapunov time")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Wl(l){let e,t,i,a,o,r="$\\lambda_{max}$",h,n,$="$0.8917$",_,p,v,M,C="$1.121s$",N,V,T;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[Zl]},$$scope:{ctx:l}}}),a=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Bl]},$$scope:{ctx:l}}}),v=new U({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[Ul]},$$scope:{ctx:l}}}),{c(){e=c(`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),k(t.$$.fragment),i=c(`.
			As reported in
			`),k(a.$$.fragment),o=c(", the Lyapunov exponent, "),h=c(r),n=c(`,
			for the Lorenz Attractor is approx. `),_=c($),p=c(", and so the "),k(v.$$.fragment),M=c(` is approx.
			`),N=c(C),V=c(".")},l(z){e=f(z,`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),x(t.$$.fragment,z),i=f(z,`.
			As reported in
			`),x(a.$$.fragment,z),o=f(z,", the Lyapunov exponent, "),h=f(z,r),n=f(z,`,
			for the Lorenz Attractor is approx. `),_=f(z,$),p=f(z,", and so the "),x(v.$$.fragment,z),M=f(z,` is approx.
			`),N=f(z,C),V=f(z,".")},m(z,F){m(z,e,F),I(t,z,F),m(z,i,F),I(a,z,F),m(z,o,F),m(z,h,F),m(z,n,F),m(z,_,F),m(z,p,F),I(v,z,F),m(z,M,F),m(z,N,F),m(z,V,F),T=!0},p(z,F){const J={};F&1&&(J.$$scope={dirty:F,ctx:z}),t.$set(J);const tt={};F&1&&(tt.$$scope={dirty:F,ctx:z}),a.$set(tt);const O={};F&1&&(O.$$scope={dirty:F,ctx:z}),v.$set(O)},i(z){T||(y(t.$$.fragment,z),y(a.$$.fragment,z),y(v.$$.fragment,z),T=!0)},o(z){b(t.$$.fragment,z),b(a.$$.fragment,z),b(v.$$.fragment,z),T=!1},d(z){z&&(s(e),s(i),s(o),s(h),s(n),s(_),s(p),s(M),s(N),s(V)),j(t,z),j(a,z),j(v,z)}}}function Ol(l){let e,t,i="on average",a,o="$e$",r,h,n="$1.121$",$,_,p="$\\frac{4}{3}$",v,M,C,N='<a href="#lyapunov">1</a>',V;return{c(){e=c("This tells us that, "),t=E("i"),t.textContent=i,a=c(`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=c(o),h=c(` after
			`),$=c(n),_=c(` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=c(p),M=c(`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),C=E("sup"),C.innerHTML=N,V=c(`, a
			defining feature of all chaotic systems.`)},l(T){e=f(T,"This tells us that, "),t=L(T,"I",{"data-svelte-h":!0}),B(t)!=="svelte-ggx8py"&&(t.textContent=i),a=f(T,`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=f(T,o),h=f(T,` after
			`),$=f(T,n),_=f(T,` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=f(T,p),M=f(T,`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),C=L(T,"SUP",{"data-svelte-h":!0}),B(C)!=="svelte-1b4twc5"&&(C.innerHTML=N),V=f(T,`, a
			defining feature of all chaotic systems.`)},m(T,z){m(T,e,z),m(T,t,z),m(T,a,z),m(T,r,z),m(T,h,z),m(T,$,z),m(T,_,z),m(T,v,z),m(T,M,z),m(T,C,z),m(T,V,z)},p:W,d(T){T&&(s(e),s(t),s(a),s(r),s(h),s($),s(_),s(v),s(M),s(C),s(V))}}}function Kl(l){let e,t="$[-9.79, -15.04, 20.53]$",i,a,o="$[0.99,1.01]$",r,h;return{c(){e=c(`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=c(t),a=c(` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=c(o),h=c(".")},l(n){e=f(n,`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=f(n,t),a=f(n,` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=f(n,o),h=f(n,".")},m(n,$){m(n,e,$),m(n,i,$),m(n,a,$),m(n,r,$),m(n,h,$)},p:W,d(n){n&&(s(e),s(i),s(a),s(r),s(h))}}}function Jl(l){let e,t="$3*100 = 300$",i,a,o="$3 * (500 + 100) = 1800$",r,h;return{c(){e=c(`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=c(t),a=c(`, and each
			training sample's length is `),r=c(o),h=c(").")},l(n){e=f(n,`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=f(n,t),a=f(n,`, and each
			training sample's length is `),r=f(n,o),h=f(n,").")},m(n,$){m(n,e,$),m(n,i,$),m(n,a,$),m(n,r,$),m(n,h,$)},p:W,d(n){n&&(s(e),s(i),s(a),s(r),s(h))}}}function Xl(l){let e,t=`$10,000 - 600 +
		1 = 9401$`,i,a,o,r='<a href="#initial-conditions">2</a>',h;return{c(){e=c(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=c(t),a=c(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),o=E("sup"),o.innerHTML=r,h=c(".")},l(n){e=f(n,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=f(n,t),a=f(n,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),o=L(n,"SUP",{"data-svelte-h":!0}),B(o)!=="svelte-uv3gx8"&&(o.innerHTML=r),h=f(n,".")},m(n,$){m(n,e,$),m(n,i,$),m(n,a,$),m(n,o,$),m(n,h,$)},p:W,d(n){n&&(s(e),s(i),s(a),s(o),s(h))}}}function Yl(l){let e;return{c(){e=c("Model 1")},l(t){e=f(t,"Model 1")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Ql(l){let e;return{c(){e=c("The full set of N-HiTS hyperparameters for the first model configuration is:")},l(t){e=f(t,"The full set of N-HiTS hyperparameters for the first model configuration is:")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function th(l){let e,t,i,a,o,r;return t=new X({props:{id:"challu"}}),a=new X({props:{id:"gilpin"}}),{c(){e=c("The model is optimized with MAE loss, consistent with the default loss from "),k(t.$$.fragment),i=c(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),k(a.$$.fragment),o=c(":")},l(h){e=f(h,"The model is optimized with MAE loss, consistent with the default loss from "),x(t.$$.fragment,h),i=f(h,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),x(a.$$.fragment,h),o=f(h,":")},m(h,n){m(h,e,n),I(t,h,n),m(h,i,n),I(a,h,n),m(h,o,n),r=!0},p:W,i(h){r||(y(t.$$.fragment,h),y(a.$$.fragment,h),r=!0)},o(h){b(t.$$.fragment,h),b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(i),s(o)),j(t,h),j(a,h)}}}function eh(l){let e;return{c(){e=c(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},l(t){e=f(t,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function nh(l){let e;return{c(){e=c("Model 1 - sMAPE error distribution on the test set")},l(t){e=f(t,"Model 1 - sMAPE error distribution on the test set")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function ih(l){let e;return{c(){e=c(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},l(t){e=f(t,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function oh(l){let e;return{c(){e=c(`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},l(t){e=f(t,`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function ah(l){let e;return{c(){e=c(`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},l(t){e=f(t,`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function sh(l){let e;return{c(){e=c(`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},l(t){e=f(t,`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function rh(l){let e;return{c(){e=c("critical points")},l(t){e=f(t,"critical points")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function lh(l){let e,t,i,a,o,r,h,n,$,_;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[rh]},$$scope:{ctx:l}}}),a=new X({props:{id:"osinga"}}),r=new X({props:{id:"osinga"}}),n=new X({props:{id:"osinga"}}),{c(){e=c(`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),k(t.$$.fragment),i=c(` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),k(a.$$.fragment),o=c(` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),k(r.$$.fragment),h=c(`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),k(n.$$.fragment),$=c(`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},l(p){e=f(p,`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),x(t.$$.fragment,p),i=f(p,` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),x(a.$$.fragment,p),o=f(p,` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),x(r.$$.fragment,p),h=f(p,`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),x(n.$$.fragment,p),$=f(p,`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},m(p,v){m(p,e,v),I(t,p,v),m(p,i,v),I(a,p,v),m(p,o,v),I(r,p,v),m(p,h,v),I(n,p,v),m(p,$,v),_=!0},p(p,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:p}),t.$set(M)},i(p){_||(y(t.$$.fragment,p),y(a.$$.fragment,p),y(r.$$.fragment,p),y(n.$$.fragment,p),_=!0)},o(p){b(t.$$.fragment,p),b(a.$$.fragment,p),b(r.$$.fragment,p),b(n.$$.fragment,p),_=!1},d(p){p&&(s(e),s(i),s(o),s(h),s($)),j(t,p),j(a,p),j(r,p),j(n,p)}}}function hh(l){let e;return{c(){e=c("Hartman-Grobman Theorem")},l(t){e=f(t,"Hartman-Grobman Theorem")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function ch(l){let e,t,i,a="$f(t) = \\exp(\\lambda t)x_0$",o,r,h="$\\lambda$",n,$,_="$x_0$",p,v,M="$\\approx 11.8$",C,N,V;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem",$$slots:{default:[hh]},$$scope:{ctx:l}}}),{c(){e=c(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),k(t.$$.fragment),i=c(`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),o=c(a),r=c(`,
			where `),n=c(h),$=c(" equals the eigenvalue and "),p=c(_),v=c(` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),C=c(M),N=c(`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},l(T){e=f(T,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),x(t.$$.fragment,T),i=f(T,`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),o=f(T,a),r=f(T,`,
			where `),n=f(T,h),$=f(T," equals the eigenvalue and "),p=f(T,_),v=f(T,` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),C=f(T,M),N=f(T,`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},m(T,z){m(T,e,z),I(t,T,z),m(T,i,z),m(T,o,z),m(T,r,z),m(T,n,z),m(T,$,z),m(T,p,z),m(T,v,z),m(T,C,z),m(T,N,z),V=!0},p(T,z){const F={};z&1&&(F.$$scope={dirty:z,ctx:T}),t.$set(F)},i(T){V||(y(t.$$.fragment,T),V=!0)},o(T){b(t.$$.fragment,T),V=!1},d(T){T&&(s(e),s(i),s(o),s(r),s(n),s($),s(p),s(v),s(C),s(N)),j(t,T)}}}function fh(l){let e;return{c(){e=c(`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},l(t){e=f(t,`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function mh(l){let e;return{c(){e=c(`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},l(t){e=f(t,`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function uh(l){let e;return{c(){e=c("Model 2")},l(t){e=f(t,"Model 2")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function ph(l){let e;return{c(){e=c(`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},l(t){e=f(t,`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function dh(l){let e;return{c(){e=c("Model 2 vs Model 1 - sMAPE error distribution.")},l(t){e=f(t,"Model 2 vs Model 1 - sMAPE error distribution.")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function $h(l){let e;return{c(){e=c(`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},l(t){e=f(t,`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function gh(l){let e;return{c(){e=c(`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},l(t){e=f(t,`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function wh(l){let e;return{c(){e=c("Model 2 - sMAPE errors per series per window in the test set.")},l(t){e=f(t,"Model 2 - sMAPE errors per series per window in the test set.")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function vh(l){let e;return{c(){e=c(`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},l(t){e=f(t,`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function yh(l){let e;return{c(){e=c(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},l(t){e=f(t,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function bh(l){let e;return{c(){e=c(`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},l(t){e=f(t,`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function _h(l){let e,t="$n$",i,a,o="$n-1$",r,h,n="$n+1$",$,_;return{c(){e=c(`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=c(t),a=c(`
				that is closer to the origin than the points at `),r=c(o),h=c(" and "),$=c(n),_=c(".")},l(p){e=f(p,`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=f(p,t),a=f(p,`
				that is closer to the origin than the points at `),r=f(p,o),h=f(p," and "),$=f(p,n),_=f(p,".")},m(p,v){m(p,e,v),m(p,i,v),m(p,a,v),m(p,r,v),m(p,h,v),m(p,$,v),m(p,_,v)},p:W,d(p){p&&(s(e),s(i),s(a),s(r),s(h),s($),s(_))}}}function kh(l){let e;return{c(){e=c(`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},l(t){e=f(t,`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function xh(l){let e;return{c(){e=c("Model 3")},l(t){e=f(t,"Model 3")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Ih(l){let e;return{c(){e=c(`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},l(t){e=f(t,`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function jh(l){let e;return{c(){e=c("3.1: Biased Dataset Distribution")},l(t){e=f(t,"3.1: Biased Dataset Distribution")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Mh(l){let e;return{c(){e=c("Radau solver")},l(t){e=f(t,"Radau solver")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Th(l){let e,t,i,a="$1\\mathrm{e}{30}$",o,r,h;return t=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Mh]},$$scope:{ctx:l}}}),{c(){e=c(`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. In all of my attempts using the `),k(t.$$.fragment),i=c(` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),o=c(a),r=c(`
			after about 0.5 seconds.`)},l(n){e=f(n,`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. In all of my attempts using the `),x(t.$$.fragment,n),i=f(n,` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),o=f(n,a),r=f(n,`
			after about 0.5 seconds.`)},m(n,$){m(n,e,$),I(t,n,$),m(n,i,$),m(n,o,$),m(n,r,$),h=!0},p(n,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:n}),t.$set(_)},i(n){h||(y(t.$$.fragment,n),h=!0)},o(n){b(t.$$.fragment,n),h=!1},d(n){n&&(s(e),s(i),s(o),s(r)),j(t,n)}}}function Ah(l){let e,t="$t \\to \\infty$",i,a,o,r="might",h,n,$="e.g.",_,p,v;return _=new X({props:{id:"osinga"}}),{c(){e=c(`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=c(t),a=c(`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),o=E("i"),o.textContent=r,h=c(` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=E("i"),n.textContent=$,k(_.$$.fragment),p=c(`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},l(M){e=f(M,`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=f(M,t),a=f(M,`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),o=L(M,"I",{"data-svelte-h":!0}),B(o)!=="svelte-ah22qx"&&(o.textContent=r),h=f(M,` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=L(M,"I",{"data-svelte-h":!0}),B(n)!=="svelte-1yxphdm"&&(n.textContent=$),x(_.$$.fragment,M),p=f(M,`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},m(M,C){m(M,e,C),m(M,i,C),m(M,a,C),m(M,o,C),m(M,h,C),m(M,n,C),I(_,M,C),m(M,p,C),v=!0},p:W,i(M){v||(y(_.$$.fragment,M),v=!0)},o(M){b(_.$$.fragment,M),v=!1},d(M){M&&(s(e),s(i),s(a),s(o),s(h),s(n),s(p)),j(_,M)}}}function zh(l){let e,t="$\\lt{3}$",i,a;return{c(){e=c(`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=c(t),a=c(`
			by a factor of about 10, while the total number of windows is the same as before:`)},l(o){e=f(o,`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=f(o,t),a=f(o,`
			by a factor of about 10, while the total number of windows is the same as before:`)},m(o,r){m(o,e,r),m(o,i,r),m(o,a,r)},p:W,d(o){o&&(s(e),s(i),s(a))}}}function Eh(l){let e;return{c(){e=c(`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},l(t){e=f(t,`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Lh(l){let e;return{c(){e=c(`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},l(t){e=f(t,`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Ph(l){let e;return{c(){e=c(`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},l(t){e=f(t,`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Sh(l){let e;return{c(){e=c(`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive repair costs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},l(t){e=f(t,`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive repair costs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Ch(l){let e,t="$dt$",i;return{c(){e=c("3.2: Reduced "),i=c(t)},l(a){e=f(a,"3.2: Reduced "),i=f(a,t)},m(a,o){m(a,e,o),m(a,i,o)},p:W,d(a){a&&(s(e),s(i))}}}function Hh(l){let e,t="$dt$",i,a,o="$dt$",r,h,n="$\\approx0.015$",$,_,p="$\\approx0.003$",v,M,C="$\\approx1.5$",N,V,T="$2H$",z,F,J="$5H$",tt,O;return{c(){e=c("The next idea is to increase the temporal resolution of the model by using a smaller "),i=c(t),a=c(`
			to generate the data points. So far I've used a `),r=c(o),h=c(" of "),$=c(n),_=c(`. Here
			I'll try reducing that by a factor of 5 to `),v=c(p),M=c(`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),N=c(C),V=c(`
			seconds. From tuning, I found that an input size of `),z=c(T),F=c(` performs just as well as an
			input size of `),tt=c(J),O=c(`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},l(G){e=f(G,"The next idea is to increase the temporal resolution of the model by using a smaller "),i=f(G,t),a=f(G,`
			to generate the data points. So far I've used a `),r=f(G,o),h=f(G," of "),$=f(G,n),_=f(G,`. Here
			I'll try reducing that by a factor of 5 to `),v=f(G,p),M=f(G,`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),N=f(G,C),V=f(G,`
			seconds. From tuning, I found that an input size of `),z=f(G,T),F=f(G,` performs just as well as an
			input size of `),tt=f(G,J),O=f(G,`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},m(G,q){m(G,e,q),m(G,i,q),m(G,a,q),m(G,r,q),m(G,h,q),m(G,$,q),m(G,_,q),m(G,v,q),m(G,M,q),m(G,N,q),m(G,V,q),m(G,z,q),m(G,F,q),m(G,tt,q),m(G,O,q)},p:W,d(G){G&&(s(e),s(i),s(a),s(r),s(h),s($),s(_),s(v),s(M),s(N),s(V),s(z),s(F),s(tt),s(O))}}}function Rh(l){let e;return{c(){e=c("The new hyperparameters for Model 3.2 are:")},l(t){e=f(t,"The new hyperparameters for Model 3.2 are:")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Nh(l){let e;return{c(){e=c("FSDP Strategy")},l(t){e=f(t,"FSDP Strategy")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Dh(l){let e,t="A sidenote on the practicality of training this model:",i,a,o,r;return a=new U({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[Nh]},$$scope:{ctx:l}}}),{c(){e=E("b"),e.textContent=t,i=c(`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),k(a.$$.fragment),o=c(` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},l(h){e=L(h,"B",{"data-svelte-h":!0}),B(e)!=="svelte-1vhs7sz"&&(e.textContent=t),i=f(h,`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),x(a.$$.fragment,h),o=f(h,` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},m(h,n){m(h,e,n),m(h,i,n),I(a,h,n),m(h,o,n),r=!0},p(h,n){const $={};n&1&&($.$$scope={dirty:n,ctx:h}),a.$set($)},i(h){r||(y(a.$$.fragment,h),r=!0)},o(h){b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(i),s(o)),j(a,h)}}}function Gh(l){let e;return{c(){e=c(`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},l(t){e=f(t,`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function qh(l){let e;return{c(){e=c("Autoregressive Prediction")},l(t){e=f(t,"Autoregressive Prediction")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Fh(l){let e,t="$L$",i,a,o="$L$",r,h;return{c(){e=c(`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=c(t),a=c(`
			samples of the reference trajectory, where `),r=c(o),h=c(` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},l(n){e=f(n,`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=f(n,t),a=f(n,`
			samples of the reference trajectory, where `),r=f(n,o),h=f(n,` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},m(n,$){m(n,e,$),m(n,i,$),m(n,a,$),m(n,r,$),m(n,h,$)},p:W,d(n){n&&(s(e),s(i),s(a),s(r),s(h))}}}function Vh(l){let e;return{c(){e=c("shadowing lemma")},l(t){e=f(t,"shadowing lemma")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Zh(l){let e,t,i="i.e.",a,o,r,h,n="e.g.",$,_,p,v;return o=new U({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[Vh]},$$scope:{ctx:l}}}),_=new X({props:{id:"chandramoorthy"}}),{c(){e=c(`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=E("i"),t.textContent=i,a=c(` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),k(o.$$.fragment),r=c(` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),h=E("i"),h.textContent=n,$=P(),k(_.$$.fragment),p=c(`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},l(M){e=f(M,`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=L(M,"I",{"data-svelte-h":!0}),B(t)!=="svelte-1xx6z5c"&&(t.textContent=i),a=f(M,` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),x(o.$$.fragment,M),r=f(M,` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),h=L(M,"I",{"data-svelte-h":!0}),B(h)!=="svelte-1yxphdm"&&(h.textContent=n),$=S(M),x(_.$$.fragment,M),p=f(M,`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},m(M,C){m(M,e,C),m(M,t,C),m(M,a,C),I(o,M,C),m(M,r,C),m(M,h,C),m(M,$,C),I(_,M,C),m(M,p,C),v=!0},p(M,C){const N={};C&1&&(N.$$scope={dirty:C,ctx:M}),o.$set(N)},i(M){v||(y(o.$$.fragment,M),y(_.$$.fragment,M),v=!0)},o(M){b(o.$$.fragment,M),b(_.$$.fragment,M),v=!1},d(M){M&&(s(e),s(t),s(a),s(r),s(h),s($),s(p)),j(o,M),j(_,M)}}}function Bh(l){let e,t,i,a;return t=new X({props:{id:"chandramoorthy"}}),{c(){e=c(`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),k(t.$$.fragment),i=c(`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},l(o){e=f(o,`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),x(t.$$.fragment,o),i=f(o,`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},m(o,r){m(o,e,r),I(t,o,r),m(o,i,r),a=!0},p:W,i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function Uh(l){let e;return{c(){e=c("Radau")},l(t){e=f(t,"Radau")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Wh(l){let e;return{c(){e=c(`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},l(t){e=f(t,`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Oh(l){let e;return{c(){e=c(`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},l(t){e=f(t,`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Kh(l){let e;return{c(){e=c(`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},l(t){e=f(t,`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Jh(l){let e;return{c(){e=c(`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},l(t){e=f(t,`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Xh(l){let e;return{c(){e=c("dysts")},l(t){e=f(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Yh(l){let e;return{c(){e=c("Radau")},l(t){e=f(t,"Radau")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function Qh(l){let e;return{c(){e=c("RK45")},l(t){e=f(t,"RK45")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function tc(l){let e,t,i,a,o,r,h,n;return t=new U({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Xh]},$$scope:{ctx:l}}}),a=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Yh]},$$scope:{ctx:l}}}),r=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[Qh]},$$scope:{ctx:l}}}),{c(){e=c(`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),k(t.$$.fragment),i=c(" uses the "),k(a.$$.fragment),o=c(" solver by default, and this is what I used to generate the dataset. "),k(r.$$.fragment),h=c(` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},l($){e=f($,`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),x(t.$$.fragment,$),i=f($," uses the "),x(a.$$.fragment,$),o=f($," solver by default, and this is what I used to generate the dataset. "),x(r.$$.fragment,$),h=f($,` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},m($,_){m($,e,_),I(t,$,_),m($,i,_),I(a,$,_),m($,o,_),I(r,$,_),m($,h,_),n=!0},p($,_){const p={};_&1&&(p.$$scope={dirty:_,ctx:$}),t.$set(p);const v={};_&1&&(v.$$scope={dirty:_,ctx:$}),a.$set(v);const M={};_&1&&(M.$$scope={dirty:_,ctx:$}),r.$set(M)},i($){n||(y(t.$$.fragment,$),y(a.$$.fragment,$),y(r.$$.fragment,$),n=!0)},o($){b(t.$$.fragment,$),b(a.$$.fragment,$),b(r.$$.fragment,$),n=!1},d($){$&&(s(e),s(i),s(o),s(h)),j(t,$),j(a,$),j(r,$)}}}function ec(l){let e;return{c(){e=c("solve_ivp")},l(t){e=f(t,"solve_ivp")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function nc(l){let e,t,i,a;return t=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[ec]},$$scope:{ctx:l}}}),{c(){e=c(`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),k(t.$$.fragment),i=c(" is used to produce the IVP solver outputs.")},l(o){e=f(o,`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),x(t.$$.fragment,o),i=f(o," is used to produce the IVP solver outputs.")},m(o,r){m(o,e,r),I(t,o,r),m(o,i,r),a=!0},p(o,r){const h={};r&1&&(h.$$scope={dirty:r,ctx:o}),t.$set(h)},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),a=!1},d(o){o&&(s(e),s(i)),j(t,o)}}}function ic(l){let e;return{c(){e=c(`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},l(t){e=f(t,`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function oc(l){let e;return{c(){e=c("Discussion")},l(t){e=f(t,"Discussion")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function ac(l){let e,t,i,a="$2H$",o,r,h="$H$",n,$,_;return t=new X({props:{id:"challu"}}),{c(){e=c("This project has probed the potential of the NHiTS neural architecture ("),k(t.$$.fragment),i=c(`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),o=c(a),r=c(`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=c(h),$=c(` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},l(p){e=f(p,"This project has probed the potential of the NHiTS neural architecture ("),x(t.$$.fragment,p),i=f(p,`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),o=f(p,a),r=f(p,`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=f(p,h),$=f(p,` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},m(p,v){m(p,e,v),I(t,p,v),m(p,i,v),m(p,o,v),m(p,r,v),m(p,n,v),m(p,$,v),_=!0},p:W,i(p){_||(y(t.$$.fragment,p),_=!0)},o(p){b(t.$$.fragment,p),_=!1},d(p){p&&(s(e),s(i),s(o),s(r),s(n),s($)),j(t,p)}}}function sc(l){let e;return{c(){e=c(`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},l(t){e=f(t,`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function rc(l){let e;return{c(){e=c(`As already mentioned, it is well understood from dynamical systems theory that the
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
		`)},l(t){e=f(t,`As already mentioned, it is well understood from dynamical systems theory that the
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
		`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function lc(l){let e,t,i=`a trajectory having a local maximum Z coordinate in the range of 38.45 to 38.6 is a
				necessary condition for the model's sMAPE error to exceed 5`,a,o,r='<a href="#outliers">1</a>',h;return{c(){e=c(`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately 38.55. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3, `),t=E("i"),t.textContent=i,a=c(`
			in the time period immediately following its transit past the origin`),o=E("sup"),o.innerHTML=r,h=c(".")},l(n){e=f(n,`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately 38.55. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3, `),t=L(n,"I",{"data-svelte-h":!0}),B(t)!=="svelte-71x0js"&&(t.textContent=i),a=f(n,`
			in the time period immediately following its transit past the origin`),o=L(n,"SUP",{"data-svelte-h":!0}),B(o)!=="svelte-o9bswn"&&(o.innerHTML=r),h=f(n,".")},m(n,$){m(n,e,$),m(n,t,$),m(n,a,$),m(n,o,$),m(n,h,$)},p:W,d(n){n&&(s(e),s(t),s(a),s(o),s(h))}}}function hc(l){let e,t,i="minimum",a;return{c(){e=c(`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=E("i"),t.textContent=i,a=c(`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of 38.45 to 38.6.`)},l(o){e=f(o,`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=L(o,"I",{"data-svelte-h":!0}),B(t)!=="svelte-1c66z6u"&&(t.textContent=i),a=f(o,`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of 38.45 to 38.6.`)},m(o,r){m(o,e,r),m(o,t,r),m(o,a,r)},p:W,d(o){o&&(s(e),s(t),s(a))}}}function cc(l){let e,t,i="indefinitely",a,o="$\\approx$",r,h;return{c(){e=c(`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is somehow associated with a single scalar value on
			the Z axis, near 38.55. As long as the local maximum Z coordinate of a trajectory in
			orbit around one of the two non-origin fixed points does not pass through a narrow
			interval around this value, we can be certain (according to the statistics of all of the
			test sets in this study) that the model will forecast the trajectory with a sMAPE error
			less than 5 `),t=E("i"),t.textContent=i,a=c(`. If a trajectory's peak Z coordinate does pass through
			this interval, then the model has a roughly 60% chance of exhibiting a sMAPE error
			greater than 5 in the period immediately following the peak, until the next peak Z
			coordinate is reached. An obvious next question to ask is, how do we exploit this
			observation to improve predictability? If the system were augmented with a control input
			of some sort, then the target for that control could be to perturb the trajectories so
			that they avoid passing through this critical region around Z `),r=c(o),h=c(` 38.55. The results
			of this study suggest that this alone might make the Lorenz Attractor dynamics entirely predictable.`)},l(n){e=f(n,`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is somehow associated with a single scalar value on
			the Z axis, near 38.55. As long as the local maximum Z coordinate of a trajectory in
			orbit around one of the two non-origin fixed points does not pass through a narrow
			interval around this value, we can be certain (according to the statistics of all of the
			test sets in this study) that the model will forecast the trajectory with a sMAPE error
			less than 5 `),t=L(n,"I",{"data-svelte-h":!0}),B(t)!=="svelte-wq20c"&&(t.textContent=i),a=f(n,`. If a trajectory's peak Z coordinate does pass through
			this interval, then the model has a roughly 60% chance of exhibiting a sMAPE error
			greater than 5 in the period immediately following the peak, until the next peak Z
			coordinate is reached. An obvious next question to ask is, how do we exploit this
			observation to improve predictability? If the system were augmented with a control input
			of some sort, then the target for that control could be to perturb the trajectories so
			that they avoid passing through this critical region around Z `),r=f(n,o),h=f(n,` 38.55. The results
			of this study suggest that this alone might make the Lorenz Attractor dynamics entirely predictable.`)},m(n,$){m(n,e,$),m(n,t,$),m(n,a,$),m(n,r,$),m(n,h,$)},p:W,d(n){n&&(s(e),s(t),s(a),s(r),s(h))}}}function fc(l){let e;return{c(){e=c(`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},l(t){e=f(t,`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function mc(l){let e;return{c(){e=c("shadowing lemma")},l(t){e=f(t,"shadowing lemma")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function uc(l){let e,t,i,a,o,r,h="IVP solver",n,$,_,p;return t=new U({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[mc]},$$scope:{ctx:l}}}),a=new X({props:{id:"chandramoorthy"}}),$=new X({props:{id:"chandramoorthy"}}),{c(){e=c("In closing, I will return to the implications of the "),k(t.$$.fragment),i=c(" and research such as "),k(a.$$.fragment),o=c(` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),r=E("i"),r.textContent=h,n=c(`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),k($.$$.fragment),_=c(` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},l(v){e=f(v,"In closing, I will return to the implications of the "),x(t.$$.fragment,v),i=f(v," and research such as "),x(a.$$.fragment,v),o=f(v,` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),r=L(v,"I",{"data-svelte-h":!0}),B(r)!=="svelte-17gf2g4"&&(r.textContent=h),n=f(v,`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),x($.$$.fragment,v),_=f(v,` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},m(v,M){m(v,e,M),I(t,v,M),m(v,i,M),I(a,v,M),m(v,o,M),m(v,r,M),m(v,n,M),I($,v,M),m(v,_,M),p=!0},p(v,M){const C={};M&1&&(C.$$scope={dirty:M,ctx:v}),t.$set(C)},i(v){p||(y(t.$$.fragment,v),y(a.$$.fragment,v),y($.$$.fragment,v),p=!0)},o(v){b(t.$$.fragment,v),b(a.$$.fragment,v),b($.$$.fragment,v),p=!1},d(v){v&&(s(e),s(i),s(o),s(r),s(n),s(_)),j(t,v),j(a,v),j($,v)}}}function pc(l){let e;return{c(){e=c("References")},l(t){e=f(t,"References")},m(t,i){m(t,e,i)},d(t){t&&s(e)}}}function dc(l){let e,t,i,a,o,r,h,n,$,_,p,v,M="Michael Horgan",C,N,V,T,z,F,J,tt,O,G,q,K,Y,ot,nt,lt,H,Z,ht,pi=`<sup id="paperspace">2. All of my experiments were run on a Paperspace VM using two RTX 5000s, each
					with 16 GB of RAM.</sup>`,Wn,di,pt,Di,dt,Gi,qi,$t,Fi,gt,Vi,On,Ye,Qe,wt,Ua,Zi,vt,Bi,yt,Ui,Kn,$i,Wa=il+"",Wi,Oi,bt,Ki,Jn,gi,Oa=ol+"",Ji,Xi,_t,kt,Yi,xt,Qi,It,to,jt,eo,Mt,no,Tt,io,At,zt,Et,Lt,oo,Xn,wi,Ka=al+"",ao,so,Pt,ro,St,lo,Ct,ho,Ht,co,tn,Ja=`<p><sup id="lyapunov">1. Although initially the distance will grow exponentially, the maximum
					separation between trajectories is also bounded by the fact that all
					trajectories remain on the attractor.</sup></p> <p><sup id="initial-conditions">2. In the course of this project, I experimented with several different methods
					for generating trajectories, but I still have some open questions about the best
					way to generate a dataset that effectively samples the phase space, <i>e.g.</i> how
					to choose the initial conditions, how to choose the number of unique initial conditions
					vs. to the total trajectory length, etc.</sup></p>`,fo,Rt,mo,Nt,uo,en,po,Dt,$o,vi,Xa=sl+"",go,wo,Gt,vo,qt,nn,Ya,yo,Ft,bo,Vt,_o,Zt,on,Qa=`<img class="object-contain max-w-80" src="${`${Q}/Model1SmallErr.png`}" alt="Model 1 - small error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1MediumErr.png`}" alt="Model 1 - medium error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1LargeErr.png`}" alt="Model 1 - large error example"/>`,ko,Bt,xo,Ut,Io,Wt,an,ts,jo,Ot,Mo,Kt,Jt,To,Xt,ct,es,Ao,Yt,zo,Qt,Eo,te,Lo,ee,Po,sn,So,rn,ns=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
			increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of
			the network, and I've also significantly increased the amount of compression in the
			initial stacks. Because the network is much deeper, I also added layer normalization
			after each block to try to help reduce convergence time. Lastly, I increased the number
			of training steps and reduced the initial learning rate by an order of magnitude, and I
			modified the learning rate schedule to reduce by half whenever the validation loss does
			not decrease from the previous validation step.`,Co,ln,hn,is,ne,Ho,ie,oe,Ro,cn,fn,os,ae,No,se,Do,re,mn,as,Go,le,qo,he,Fo,un,pn,ss,ce,Vo,fe,Zo,me,Bo,ue,Uo,pe,Wo,de,$e,ge,Oo,dn,$n,rs,we,Ko,gn,Jo,ls="$\\le{5}$",Xo,Yo,Qo,ve,ta,wn,vn,hs,ye,ea,be,na,_e,ia,ke,oa,xe,aa,yn,sa,Ie,ra,je,la,cs="$dt \\approx 0.003$",ha,ca,fa,bn,_n,fs,Me,ma,Yn,ms=`Here again we see a very marginal improvement but no clear evidence that this approach
			may lead to a fully stable model (<i>i.e.</i> one without an asymptotic error curve). Reducing
			the temporal resolution of the model further will drastically increase the computational
			requirements of training, which are beyond my budget, so I must conclude this avenue of investigation
			here.`,ua,Te,pa,Ae,ze,Ee,us=rl+"",da,$a,kn,ga,Le,wa,va,xn,In,ps,Pe,ya,ft,ba,ds="$z \\approx 0.4$",_a,ka,$s="$z \\approx 1.35$",xa,Ia,ja,Se,Ma,jn,Mn,gs,Ce,Ta,Qn,ws=`However, if we search for the model trajectories that pass closest to the origin, we
			find examples where the model output breaks down badly:`,Aa,Tn,An,vs,He,za,Re,Ea,Ne,zn,ys,La,De,Pa,Ge,Sa,qe,Ca,Fe,Ve,Ze,Be,Ha,Ue,En,bs=`<img class="object-contain w-full max-w-xl" src="${`${Q}/max_z.png`}" alt="Model 3 - maxium Z coordinate error distribution"/> <img class="object-contain w-full max-w-xl" src="${`${Q}/max_z_zoomed.png`}" alt="maximum Z coordinate error distribution zoomed"/>`,Ra,We,Na,Oe,Da,Ke,Ga,Je,qa,Ln,_s=`<p><sup id="outliers">1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose <i>second-to-last</i>
					local maximum Z coordinate passes through the 38.55 boundary region, and whose associated
					local minimum point is so small—0.49, the smallest encountered in all of the
					training sets that were generated for this study—that the highly unstable conditions
					in the region adversely affect not only the prediction accuracy when the local minimum
					is within the horizon window, but also when it is within the input window of the
					model.</sup></p>`,Fa,Xe,Va,Pn,Hi;return e=new nl({}),i=new ml({}),r=new tl({}),F=new U({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[ul]},$$scope:{ctx:l}}}),O=new D({props:{$$slots:{default:[pl]},$$scope:{ctx:l}}}),G=new D({props:{$$slots:{default:[dl]},$$scope:{ctx:l}}}),q=new D({props:{$$slots:{default:[$l]},$$scope:{ctx:l}}}),H=new U({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[gl]},$$scope:{ctx:l}}}),dt=new U({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[wl]},$$scope:{ctx:l}}}),$t=new Li({props:{id:"lorenz",$$slots:{default:[vl]},$$scope:{ctx:l}}}),gt=new D({props:{$$slots:{default:[kl]},$$scope:{ctx:l}}}),vt=new et({props:{$$slots:{default:[xl]},$$scope:{ctx:l}}}),yt=new D({props:{$$slots:{default:[Il]},$$scope:{ctx:l}}}),bt=new D({props:{$$slots:{default:[Tl]},$$scope:{ctx:l}}}),_t=new D({props:{$$slots:{default:[zl]},$$scope:{ctx:l}}}),kt=new D({props:{$$slots:{default:[Ll]},$$scope:{ctx:l}}}),xt=new Li({props:{id:"nhits",$$slots:{default:[Pl]},$$scope:{ctx:l}}}),It=new D({props:{$$slots:{default:[Sl]},$$scope:{ctx:l}}}),jt=new D({props:{$$slots:{default:[Cl]},$$scope:{ctx:l}}}),Mt=new D({props:{$$slots:{default:[Hl]},$$scope:{ctx:l}}}),Tt=new Li({props:{id:"experiments",$$slots:{default:[Rl]},$$scope:{ctx:l}}}),At=new D({props:{$$slots:{default:[Nl]},$$scope:{ctx:l}}}),zt=new Pi({props:{id:"datagen",$$slots:{default:[Dl]},$$scope:{ctx:l}}}),Et=new D({props:{$$slots:{default:[Vl]},$$scope:{ctx:l}}}),Lt=new D({props:{$$slots:{default:[Wl]},$$scope:{ctx:l}}}),Pt=new D({props:{indent:"indent-0",$$slots:{default:[Ol]},$$scope:{ctx:l}}}),St=new D({props:{$$slots:{default:[Kl]},$$scope:{ctx:l}}}),Ct=new D({props:{indent:"indent-0",$$slots:{default:[Jl]},$$scope:{ctx:l}}}),Ht=new D({props:{$$slots:{default:[Xl]},$$scope:{ctx:l}}}),Rt=new Pi({props:{id:"model-1",$$slots:{default:[Yl]},$$scope:{ctx:l}}}),Nt=new D({props:{$$slots:{default:[Ql]},$$scope:{ctx:l}}}),en=new Za({props:{hps:ll}}),Dt=new D({props:{indent:"indent-0",$$slots:{default:[th]},$$scope:{ctx:l}}}),Gt=new D({props:{$$slots:{default:[eh]},$$scope:{ctx:l}}}),Ft=new et({props:{$$slots:{default:[nh]},$$scope:{ctx:l}}}),Vt=new D({props:{$$slots:{default:[ih]},$$scope:{ctx:l}}}),Bt=new et({props:{$$slots:{default:[oh]},$$scope:{ctx:l}}}),Ut=new D({props:{$$slots:{default:[ah]},$$scope:{ctx:l}}}),Ot=new et({props:{$$slots:{default:[sh]},$$scope:{ctx:l}}}),Kt=new D({props:{$$slots:{default:[lh]},$$scope:{ctx:l}}}),Jt=new D({props:{$$slots:{default:[ch]},$$scope:{ctx:l}}}),Yt=new et({props:{$$slots:{default:[fh]},$$scope:{ctx:l}}}),Qt=new D({props:{$$slots:{default:[mh]},$$scope:{ctx:l}}}),te=new Pi({props:{id:"model-2",$$slots:{default:[uh]},$$scope:{ctx:l}}}),ee=new D({props:{$$slots:{default:[ph]},$$scope:{ctx:l}}}),sn=new Za({props:{hps:hl}}),ne=new et({props:{$$slots:{default:[dh]},$$scope:{ctx:l}}}),ie=new D({props:{$$slots:{default:[$h]},$$scope:{ctx:l}}}),oe=new D({props:{$$slots:{default:[gh]},$$scope:{ctx:l}}}),ae=new et({props:{$$slots:{default:[wh]},$$scope:{ctx:l}}}),se=new D({props:{$$slots:{default:[vh]},$$scope:{ctx:l}}}),le=new et({props:{$$slots:{default:[yh]},$$scope:{ctx:l}}}),he=new D({props:{$$slots:{default:[bh]},$$scope:{ctx:l}}}),ce=new et({props:{$$slots:{default:[_h]},$$scope:{ctx:l}}}),fe=new D({props:{$$slots:{default:[kh]},$$scope:{ctx:l}}}),me=new Pi({props:{id:"model-3",$$slots:{default:[xh]},$$scope:{ctx:l}}}),ue=new D({props:{$$slots:{default:[Ih]},$$scope:{ctx:l}}}),pe=new yr({props:{$$slots:{default:[jh]},$$scope:{ctx:l}}}),de=new D({props:{$$slots:{default:[Th]},$$scope:{ctx:l}}}),$e=new D({props:{$$slots:{default:[Ah]},$$scope:{ctx:l}}}),ge=new D({props:{$$slots:{default:[zh]},$$scope:{ctx:l}}}),we=new et({props:{$$slots:{default:[Eh]},$$scope:{ctx:l}}}),ve=new D({props:{$$slots:{default:[Lh]},$$scope:{ctx:l}}}),ye=new et({props:{$$slots:{default:[Ph]},$$scope:{ctx:l}}}),be=new D({props:{$$slots:{default:[Sh]},$$scope:{ctx:l}}}),_e=new yr({props:{$$slots:{default:[Ch]},$$scope:{ctx:l}}}),ke=new D({props:{$$slots:{default:[Hh]},$$scope:{ctx:l}}}),xe=new D({props:{$$slots:{default:[Rh]},$$scope:{ctx:l}}}),yn=new Za({props:{hps:cl}}),Ie=new D({props:{style:"my-4 text-sm font-serif",$$slots:{default:[Dh]},$$scope:{ctx:l}}}),Me=new et({props:{$$slots:{default:[Gh]},$$scope:{ctx:l}}}),Te=new Pi({props:{id:"arpred",$$slots:{default:[qh]},$$scope:{ctx:l}}}),Ae=new D({props:{$$slots:{default:[Fh]},$$scope:{ctx:l}}}),ze=new D({props:{$$slots:{default:[Zh]},$$scope:{ctx:l}}}),Ee=new D({props:{$$slots:{default:[Bh]},$$scope:{ctx:l}}}),Le=new U({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Uh]},$$scope:{ctx:l}}}),Pe=new et({props:{$$slots:{default:[Wh]},$$scope:{ctx:l}}}),Se=new D({props:{$$slots:{default:[Oh]},$$scope:{ctx:l}}}),Ce=new et({props:{$$slots:{default:[Kh]},$$scope:{ctx:l}}}),He=new et({props:{$$slots:{default:[Jh]},$$scope:{ctx:l}}}),Re=new D({props:{$$slots:{default:[tc]},$$scope:{ctx:l}}}),De=new et({props:{$$slots:{default:[nc]},$$scope:{ctx:l}}}),Ge=new D({props:{$$slots:{default:[ic]},$$scope:{ctx:l}}}),qe=new Li({props:{id:"discussion",$$slots:{default:[oc]},$$scope:{ctx:l}}}),Fe=new D({props:{$$slots:{default:[ac]},$$scope:{ctx:l}}}),Ve=new D({props:{$$slots:{default:[sc]},$$scope:{ctx:l}}}),Ze=new D({props:{$$slots:{default:[rc]},$$scope:{ctx:l}}}),Be=new D({props:{$$slots:{default:[lc]},$$scope:{ctx:l}}}),We=new et({props:{$$slots:{default:[hc]},$$scope:{ctx:l}}}),Oe=new D({props:{$$slots:{default:[cc]},$$scope:{ctx:l}}}),Ke=new D({props:{$$slots:{default:[fc]},$$scope:{ctx:l}}}),Je=new D({props:{$$slots:{default:[uc]},$$scope:{ctx:l}}}),Xe=new Li({props:{id:"references",$$slots:{default:[pc]},$$scope:{ctx:l}}}),Pn=new Cr({}),{c(){k(e.$$.fragment),t=P(),k(i.$$.fragment),a=P(),o=E("div"),k(r.$$.fragment),h=P(),n=E("div"),$=E("div"),_=c(Ci),p=P(),v=E("div"),v.textContent=M,C=P(),N=E("br"),V=P(),T=E("div"),z=c("(All code used in this project is available in the github repo: "),k(F.$$.fragment),J=c(")"),tt=P(),k(O.$$.fragment),k(G.$$.fragment),k(q.$$.fragment),K=P(),Y=E("div"),ot=E("p"),nt=E("sup"),lt=c(`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),k(H.$$.fragment),Z=P(),ht=E("p"),ht.innerHTML=pi,Wn=P(),di=E("p"),pt=E("sup"),Di=c(`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),k(dt.$$.fragment),Gi=c(" on the subject"),qi=P(),k($t.$$.fragment),Fi=P(),k(gt.$$.fragment),Vi=P(),On=E("div"),Ye=E("a"),Qe=E("figure"),wt=E("img"),Zi=P(),k(vt.$$.fragment),Bi=P(),k(yt.$$.fragment),Ui=P(),Kn=E("div"),$i=E("p"),Wi=c(Wa),Oi=P(),k(bt.$$.fragment),Ki=P(),Jn=E("div"),gi=E("p"),Ji=c(Oa),Xi=P(),k(_t.$$.fragment),k(kt.$$.fragment),Yi=P(),k(xt.$$.fragment),Qi=P(),k(It.$$.fragment),to=P(),k(jt.$$.fragment),eo=P(),k(Mt.$$.fragment),no=P(),k(Tt.$$.fragment),io=P(),k(At.$$.fragment),k(zt.$$.fragment),k(Et.$$.fragment),k(Lt.$$.fragment),oo=P(),Xn=E("div"),wi=E("p"),ao=c(Ka),so=P(),k(Pt.$$.fragment),ro=P(),k(St.$$.fragment),lo=P(),k(Ct.$$.fragment),ho=P(),k(Ht.$$.fragment),co=P(),tn=E("div"),tn.innerHTML=Ja,fo=P(),k(Rt.$$.fragment),mo=P(),k(Nt.$$.fragment),uo=P(),k(en.$$.fragment),po=P(),k(Dt.$$.fragment),$o=P(),vi=E("div"),go=c(Xa),wo=P(),k(Gt.$$.fragment),vo=P(),qt=E("figure"),nn=E("img"),yo=P(),k(Ft.$$.fragment),bo=P(),k(Vt.$$.fragment),_o=P(),Zt=E("figure"),on=E("div"),on.innerHTML=Qa,ko=P(),k(Bt.$$.fragment),xo=P(),k(Ut.$$.fragment),Io=P(),Wt=E("figure"),an=E("img"),jo=P(),k(Ot.$$.fragment),Mo=P(),k(Kt.$$.fragment),k(Jt.$$.fragment),To=P(),Xt=E("figure"),ct=E("img"),Ao=P(),k(Yt.$$.fragment),zo=P(),k(Qt.$$.fragment),Eo=P(),k(te.$$.fragment),Lo=P(),k(ee.$$.fragment),Po=P(),k(sn.$$.fragment),So=P(),rn=E("p"),rn.textContent=ns,Co=P(),ln=E("figure"),hn=E("img"),k(ne.$$.fragment),Ho=P(),k(ie.$$.fragment),k(oe.$$.fragment),Ro=P(),cn=E("figure"),fn=E("img"),k(ae.$$.fragment),No=P(),k(se.$$.fragment),Do=P(),re=E("figure"),mn=E("img"),Go=P(),k(le.$$.fragment),qo=P(),k(he.$$.fragment),Fo=P(),un=E("figure"),pn=E("img"),k(ce.$$.fragment),Vo=P(),k(fe.$$.fragment),Zo=P(),k(me.$$.fragment),Bo=P(),k(ue.$$.fragment),Uo=P(),k(pe.$$.fragment),Wo=P(),k(de.$$.fragment),k($e.$$.fragment),k(ge.$$.fragment),Oo=P(),dn=E("figure"),$n=E("img"),k(we.$$.fragment),Ko=P(),gn=E("p"),Jo=c("Still, with these 10x increases, the trajectories that pass within an L2 distance "),Xo=c(ls),Yo=c(`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),Qo=P(),k(ve.$$.fragment),ta=P(),wn=E("figure"),vn=E("img"),k(ye.$$.fragment),ea=P(),k(be.$$.fragment),na=P(),k(_e.$$.fragment),ia=P(),k(ke.$$.fragment),oa=P(),k(xe.$$.fragment),aa=P(),k(yn.$$.fragment),sa=P(),k(Ie.$$.fragment),ra=P(),je=E("p"),la=c("After retraining with "),ha=c(cs),ca=c(`, we again see a very slight improvement
			over the previous models:`),fa=P(),bn=E("figure"),_n=E("img"),k(Me.$$.fragment),ma=P(),Yn=E("p"),Yn.innerHTML=ms,ua=P(),k(Te.$$.fragment),pa=P(),k(Ae.$$.fragment),k(ze.$$.fragment),k(Ee.$$.fragment),da=c(us),$a=P(),kn=E("p"),ga=c("Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),k(Le.$$.fragment),wa=c(" solver's outputs:"),va=P(),xn=E("figure"),In=E("img"),k(Pe.$$.fragment),ya=P(),ft=E("p"),ba=c(`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),_a=c(ds),ka=c(" for the solver compared to "),xa=c($s),Ia=c(`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),ja=P(),k(Se.$$.fragment),Ma=P(),jn=E("figure"),Mn=E("img"),k(Ce.$$.fragment),Ta=P(),Qn=E("p"),Qn.textContent=ws,Aa=P(),Tn=E("figure"),An=E("img"),k(He.$$.fragment),za=P(),k(Re.$$.fragment),Ea=P(),Ne=E("figure"),zn=E("img"),La=P(),k(De.$$.fragment),Pa=P(),k(Ge.$$.fragment),Sa=P(),k(qe.$$.fragment),Ca=P(),k(Fe.$$.fragment),k(Ve.$$.fragment),k(Ze.$$.fragment),k(Be.$$.fragment),Ha=P(),Ue=E("figure"),En=E("div"),En.innerHTML=bs,Ra=P(),k(We.$$.fragment),Na=P(),k(Oe.$$.fragment),Da=P(),k(Ke.$$.fragment),Ga=P(),k(Je.$$.fragment),qa=P(),Ln=E("div"),Ln.innerHTML=_s,Fa=P(),k(Xe.$$.fragment),Va=P(),k(Pn.$$.fragment),this.h()},l(u){x(e.$$.fragment,u),t=S(u),x(i.$$.fragment,u),a=S(u),o=L(u,"DIV",{class:!0});var w=R(o);x(r.$$.fragment,w),h=S(w),n=L(w,"DIV",{class:!0});var g=R(n);$=L(g,"DIV",{id:!0,class:!0});var yi=R($);_=f(yi,Ci),yi.forEach(s),p=S(g),v=L(g,"DIV",{class:!0,"data-svelte-h":!0}),B(v)!=="svelte-hve5fy"&&(v.textContent=M),C=S(g),N=L(g,"BR",{}),V=S(g),T=L(g,"DIV",{class:!0});var Sn=R(T);z=f(Sn,"(All code used in this project is available in the github repo: "),x(F.$$.fragment,Sn),J=f(Sn,")"),Sn.forEach(s),tt=S(g),x(O.$$.fragment,g),x(G.$$.fragment,g),x(q.$$.fragment,g),K=S(g),Y=L(g,"DIV",{class:!0});var mt=R(Y);ot=L(mt,"P",{});var bi=R(ot);nt=L(bi,"SUP",{id:!0});var ti=R(nt);lt=f(ti,`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),x(H.$$.fragment,ti),ti.forEach(s),bi.forEach(s),Z=S(mt),ht=L(mt,"P",{"data-svelte-h":!0}),B(ht)!=="svelte-7qdhvn"&&(ht.innerHTML=pi),Wn=S(mt),di=L(mt,"P",{});var _i=R(di);pt=L(_i,"SUP",{id:!0});var Cn=R(pt);Di=f(Cn,`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),x(dt.$$.fragment,Cn),Gi=f(Cn," on the subject"),Cn.forEach(s),_i.forEach(s),mt.forEach(s),qi=S(g),x($t.$$.fragment,g),Fi=S(g),x(gt.$$.fragment,g),Vi=S(g),On=L(g,"DIV",{class:!0});var ki=R(On);Ye=L(ki,"A",{title:!0,href:!0});var xi=R(Ye);Qe=L(xi,"FIGURE",{});var Hn=R(Qe);wt=L(Hn,"IMG",{class:!0,width:!0,alt:!0,src:!0}),Zi=S(Hn),x(vt.$$.fragment,Hn),Hn.forEach(s),xi.forEach(s),ki.forEach(s),Bi=S(g),x(yt.$$.fragment,g),Ui=S(g),Kn=L(g,"DIV",{class:!0});var Ii=R(Kn);$i=L(Ii,"P",{});var ji=R($i);Wi=f(ji,Wa),ji.forEach(s),Ii.forEach(s),Oi=S(g),x(bt.$$.fragment,g),Ki=S(g),Jn=L(g,"DIV",{class:!0});var Mi=R(Jn);gi=L(Mi,"P",{});var Ti=R(gi);Ji=f(Ti,Oa),Ti.forEach(s),Mi.forEach(s),Xi=S(g),x(_t.$$.fragment,g),x(kt.$$.fragment,g),Yi=S(g),x(xt.$$.fragment,g),Qi=S(g),x(It.$$.fragment,g),to=S(g),x(jt.$$.fragment,g),eo=S(g),x(Mt.$$.fragment,g),no=S(g),x(Tt.$$.fragment,g),io=S(g),x(At.$$.fragment,g),x(zt.$$.fragment,g),x(Et.$$.fragment,g),x(Lt.$$.fragment,g),oo=S(g),Xn=L(g,"DIV",{class:!0});var Ai=R(Xn);wi=L(Ai,"P",{});var zi=R(wi);ao=f(zi,Ka),zi.forEach(s),Ai.forEach(s),so=S(g),x(Pt.$$.fragment,g),ro=S(g),x(St.$$.fragment,g),lo=S(g),x(Ct.$$.fragment,g),ho=S(g),x(Ht.$$.fragment,g),co=S(g),tn=L(g,"DIV",{class:!0,"data-svelte-h":!0}),B(tn)!=="svelte-a9h7x4"&&(tn.innerHTML=Ja),fo=S(g),x(Rt.$$.fragment,g),mo=S(g),x(Nt.$$.fragment,g),uo=S(g),x(en.$$.fragment,g),po=S(g),x(Dt.$$.fragment,g),$o=S(g),vi=L(g,"DIV",{});var Ei=R(vi);go=f(Ei,Xa),Ei.forEach(s),wo=S(g),x(Gt.$$.fragment,g),vo=S(g),qt=L(g,"FIGURE",{class:!0});var Rn=R(qt);nn=L(Rn,"IMG",{class:!0,src:!0,alt:!0}),yo=S(Rn),x(Ft.$$.fragment,Rn),Rn.forEach(s),bo=S(g),x(Vt.$$.fragment,g),_o=S(g),Zt=L(g,"FIGURE",{class:!0});var Nn=R(Zt);on=L(Nn,"DIV",{class:!0,"data-svelte-h":!0}),B(on)!=="svelte-u7ima0"&&(on.innerHTML=Qa),ko=S(Nn),x(Bt.$$.fragment,Nn),Nn.forEach(s),xo=S(g),x(Ut.$$.fragment,g),Io=S(g),Wt=L(g,"FIGURE",{class:!0});var Dn=R(Wt);an=L(Dn,"IMG",{class:!0,src:!0,alt:!0}),jo=S(Dn),x(Ot.$$.fragment,Dn),Dn.forEach(s),Mo=S(g),x(Kt.$$.fragment,g),x(Jt.$$.fragment,g),To=S(g),Xt=L(g,"FIGURE",{class:!0});var Gn=R(Xt);ct=L(Gn,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Ao=S(Gn),x(Yt.$$.fragment,Gn),Gn.forEach(s),zo=S(g),x(Qt.$$.fragment,g),Eo=S(g),x(te.$$.fragment,g),Lo=S(g),x(ee.$$.fragment,g),Po=S(g),x(sn.$$.fragment,g),So=S(g),rn=L(g,"P",{class:!0,"data-svelte-h":!0}),B(rn)!=="svelte-8lzr6y"&&(rn.textContent=ns),Co=S(g),ln=L(g,"FIGURE",{class:!0});var ei=R(ln);hn=L(ei,"IMG",{class:!0,src:!0,alt:!0}),x(ne.$$.fragment,ei),ei.forEach(s),Ho=S(g),x(ie.$$.fragment,g),x(oe.$$.fragment,g),Ro=S(g),cn=L(g,"FIGURE",{class:!0});var ni=R(cn);fn=L(ni,"IMG",{class:!0,src:!0,alt:!0}),x(ae.$$.fragment,ni),ni.forEach(s),No=S(g),x(se.$$.fragment,g),Do=S(g),re=L(g,"FIGURE",{class:!0});var qn=R(re);mn=L(qn,"IMG",{class:!0,src:!0,alt:!0}),Go=S(qn),x(le.$$.fragment,qn),qn.forEach(s),qo=S(g),x(he.$$.fragment,g),Fo=S(g),un=L(g,"FIGURE",{class:!0});var ii=R(un);pn=L(ii,"IMG",{class:!0,src:!0,alt:!0}),x(ce.$$.fragment,ii),ii.forEach(s),Vo=S(g),x(fe.$$.fragment,g),Zo=S(g),x(me.$$.fragment,g),Bo=S(g),x(ue.$$.fragment,g),Uo=S(g),x(pe.$$.fragment,g),Wo=S(g),x(de.$$.fragment,g),x($e.$$.fragment,g),x(ge.$$.fragment,g),Oo=S(g),dn=L(g,"FIGURE",{class:!0});var oi=R(dn);$n=L(oi,"IMG",{class:!0,src:!0,alt:!0}),x(we.$$.fragment,oi),oi.forEach(s),Ko=S(g),gn=L(g,"P",{});var Fn=R(gn);Jo=f(Fn,"Still, with these 10x increases, the trajectories that pass within an L2 distance "),Xo=f(Fn,ls),Yo=f(Fn,`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),Fn.forEach(s),Qo=S(g),x(ve.$$.fragment,g),ta=S(g),wn=L(g,"FIGURE",{class:!0});var ai=R(wn);vn=L(ai,"IMG",{class:!0,src:!0,alt:!0}),x(ye.$$.fragment,ai),ai.forEach(s),ea=S(g),x(be.$$.fragment,g),na=S(g),x(_e.$$.fragment,g),ia=S(g),x(ke.$$.fragment,g),oa=S(g),x(xe.$$.fragment,g),aa=S(g),x(yn.$$.fragment,g),sa=S(g),x(Ie.$$.fragment,g),ra=S(g),je=L(g,"P",{class:!0});var Vn=R(je);la=f(Vn,"After retraining with "),ha=f(Vn,cs),ca=f(Vn,`, we again see a very slight improvement
			over the previous models:`),Vn.forEach(s),fa=S(g),bn=L(g,"FIGURE",{class:!0});var si=R(bn);_n=L(si,"IMG",{class:!0,src:!0,alt:!0}),x(Me.$$.fragment,si),si.forEach(s),ma=S(g),Yn=L(g,"P",{"data-svelte-h":!0}),B(Yn)!=="svelte-iuzfox"&&(Yn.innerHTML=ms),ua=S(g),x(Te.$$.fragment,g),pa=S(g),x(Ae.$$.fragment,g),x(ze.$$.fragment,g),x(Ee.$$.fragment,g),da=f(g,us),$a=S(g),kn=L(g,"P",{});var Zn=R(kn);ga=f(Zn,"Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),x(Le.$$.fragment,Zn),wa=f(Zn," solver's outputs:"),Zn.forEach(s),va=S(g),xn=L(g,"FIGURE",{class:!0});var ri=R(xn);In=L(ri,"IMG",{class:!0,src:!0,alt:!0}),x(Pe.$$.fragment,ri),ri.forEach(s),ya=S(g),ft=L(g,"P",{});var ut=R(ft);ba=f(ut,`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),_a=f(ut,ds),ka=f(ut," for the solver compared to "),xa=f(ut,$s),Ia=f(ut,`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),ut.forEach(s),ja=S(g),x(Se.$$.fragment,g),Ma=S(g),jn=L(g,"FIGURE",{class:!0});var li=R(jn);Mn=L(li,"IMG",{class:!0,src:!0,alt:!0}),x(Ce.$$.fragment,li),li.forEach(s),Ta=S(g),Qn=L(g,"P",{"data-svelte-h":!0}),B(Qn)!=="svelte-8ial96"&&(Qn.textContent=ws),Aa=S(g),Tn=L(g,"FIGURE",{class:!0});var hi=R(Tn);An=L(hi,"IMG",{class:!0,src:!0,alt:!0}),x(He.$$.fragment,hi),hi.forEach(s),za=S(g),x(Re.$$.fragment,g),Ea=S(g),Ne=L(g,"FIGURE",{class:!0});var Bn=R(Ne);zn=L(Bn,"IMG",{class:!0,src:!0,alt:!0}),La=S(Bn),x(De.$$.fragment,Bn),Bn.forEach(s),Pa=S(g),x(Ge.$$.fragment,g),Sa=S(g),x(qe.$$.fragment,g),Ca=S(g),x(Fe.$$.fragment,g),x(Ve.$$.fragment,g),x(Ze.$$.fragment,g),x(Be.$$.fragment,g),Ha=S(g),Ue=L(g,"FIGURE",{class:!0});var Un=R(Ue);En=L(Un,"DIV",{class:!0,"data-svelte-h":!0}),B(En)!=="svelte-lbdos2"&&(En.innerHTML=bs),Ra=S(Un),x(We.$$.fragment,Un),Un.forEach(s),Na=S(g),x(Oe.$$.fragment,g),Da=S(g),x(Ke.$$.fragment,g),Ga=S(g),x(Je.$$.fragment,g),qa=S(g),Ln=L(g,"DIV",{class:!0,"data-svelte-h":!0}),B(Ln)!=="svelte-1fdz5l6"&&(Ln.innerHTML=_s),Fa=S(g),x(Xe.$$.fragment,g),Va=S(g),x(Pn.$$.fragment,g),g.forEach(s),w.forEach(s),this.h()},h(){A($,"id","intro"),A($,"class","mt-8 text-2xl text-center"),A(v,"class","mt-2 text-sm text-center"),A(T,"class","text-sm text-center font-serif mb-4"),A(nt,"id","sabine"),A(pt,"id","brunton"),A(Y,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(wt,"class","m-auto"),A(wt,"width","128"),A(wt,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),it(wt.src,Ua="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||A(wt,"src",Ua),A(Ye,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),A(Ye,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),A(On,"class","my-2 self-center"),A(Kn,"class","self-center"),A(Jn,"class","self-center"),A(Xn,"class","self-center"),A(tn,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(nn,"class","object-contain"),it(nn.src,Ya=`${Q}/Model1ErrDist.png`)||A(nn,"src",Ya),A(nn,"alt","Model 1 - error distribution"),A(qt,"class","mb-6 self-center max-w-xl"),A(on,"class","flex flex-wrap justify-center"),A(Zt,"class","mt-6 mb-6 self-center"),A(an,"class","object-contain"),it(an.src,ts=`${Q}/model-1-pod.gif`)||A(an,"src",ts),A(an,"alt","prediction point of divergence"),A(Wt,"class","mt-6 mb-6 self-center max-w-lg"),A(ct,"class","object-contain"),it(ct.src,es=`${Q}/trajectories.gif`)||A(ct,"src",es),A(ct,"alt","trajectories approaching origin"),A(ct,"width","500"),A(ct,"height","500"),A(Xt,"class","mt-6 mb-6 self-center max-w-md"),A(rn,"class","mt-2"),A(hn,"class","object-contain"),it(hn.src,is=`${Q}/Model2ErrDist.png`)||A(hn,"src",is),A(hn,"alt",""),A(ln,"class","mb-2 self-center max-w-xl"),A(fn,"class","object-contain"),it(fn.src,os=`${Q}/Model2Err3d.png`)||A(fn,"src",os),A(fn,"alt","Model 2 - error distribution by series and window"),A(cn,"class","-mt-2 mb-2 self-center"),A(mn,"class","object-contain"),it(mn.src,as=`${Q}/model-2-pod.gif`)||A(mn,"src",as),A(mn,"alt","model 2 point of divergence"),A(re,"class","self-center max-w-lg"),A(pn,"class","object-contain"),it(pn.src,ss=`${Q}/Model2DFO.png`)||A(pn,"src",ss),A(pn,"alt","distance from origin vs. sMAPE"),A(un,"class","-mt-2 mb-2 self-center max-w-3xl"),A($n,"class","object-contain"),it($n.src,rs=`${Q}/datahist_model_2_v_3.1.png`)||A($n,"src",rs),A($n,"alt","Dataset distribution for Model 2 vs. 3"),A(dn,"class","my-8 self-center max-w-lg"),A(vn,"class","object-contain"),it(vn.src,hs=`${Q}/Model2v3.1-DFO.png`)||A(vn,"src",hs),A(vn,"alt","Model 2 vs. 3.1 - distance from origin vs. sMAPE"),A(wn,"class","mt-2 mb-2 self-center max-w-3xl"),A(je,"class","mt-4"),A(_n,"class","object-contain"),it(_n.src,fs=`${Q}/Model3.2-DFO.png`)||A(_n,"src",fs),A(_n,"alt","Model 3.2 - distance-from-origin error distribution"),A(bn,"class","mb-8 self-center max-w-3xl"),A(In,"class","object-contain"),it(In.src,ps=`${Q}/ar_z_stat.png`)||A(In,"src",ps),A(In,"alt","Z Statistic for Reference vs. Autoregressive Trajectories"),A(xn,"class","mb-2 self-center max-w-3xl"),A(Mn,"class","object-contain"),it(Mn.src,gs=`${Q}/ref_v_ar.png`)||A(Mn,"src",gs),A(Mn,"alt","Reference vs. Autoregressive Trajectories"),A(jn,"class","mb-2 self-center max-w-4xl"),A(An,"class","object-contain"),it(An.src,vs=`${Q}/ar_breakdown_1.png`)||A(An,"src",vs),A(An,"alt","Autoregressive Trajectory - Bad Example"),A(Tn,"class","mb-2 self-center max-w-lg"),A(zn,"class","object-contain"),it(zn.src,ys=`${Q}/solvers_vs_model.png`)||A(zn,"src",ys),A(zn,"alt","Comparison of RK45 and predictions to Radau's solutions"),A(Ne,"class","mb-2 self-center max-w-2xl"),A(En,"class","flex flex-wrap justify-center"),A(Ue,"class","mb-6 self-center"),A(Ln,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(n,"class","flex flex-col mx-4 sm:mx-16"),A(o,"class","grid grid-flow-col auto-cols-auto")},m(u,w){I(e,u,w),m(u,t,w),I(i,u,w),m(u,a,w),m(u,o,w),I(r,o,null),d(o,h),d(o,n),d(n,$),d($,_),d(n,p),d(n,v),d(n,C),d(n,N),d(n,V),d(n,T),d(T,z),I(F,T,null),d(T,J),d(n,tt),I(O,n,null),I(G,n,null),I(q,n,null),d(n,K),d(n,Y),d(Y,ot),d(ot,nt),d(nt,lt),I(H,nt,null),d(Y,Z),d(Y,ht),d(Y,Wn),d(Y,di),d(di,pt),d(pt,Di),I(dt,pt,null),d(pt,Gi),d(n,qi),I($t,n,null),d(n,Fi),I(gt,n,null),d(n,Vi),d(n,On),d(On,Ye),d(Ye,Qe),d(Qe,wt),d(Qe,Zi),I(vt,Qe,null),d(n,Bi),I(yt,n,null),d(n,Ui),d(n,Kn),d(Kn,$i),d($i,Wi),d(n,Oi),I(bt,n,null),d(n,Ki),d(n,Jn),d(Jn,gi),d(gi,Ji),d(n,Xi),I(_t,n,null),I(kt,n,null),d(n,Yi),I(xt,n,null),d(n,Qi),I(It,n,null),d(n,to),I(jt,n,null),d(n,eo),I(Mt,n,null),d(n,no),I(Tt,n,null),d(n,io),I(At,n,null),I(zt,n,null),I(Et,n,null),I(Lt,n,null),d(n,oo),d(n,Xn),d(Xn,wi),d(wi,ao),d(n,so),I(Pt,n,null),d(n,ro),I(St,n,null),d(n,lo),I(Ct,n,null),d(n,ho),I(Ht,n,null),d(n,co),d(n,tn),d(n,fo),I(Rt,n,null),d(n,mo),I(Nt,n,null),d(n,uo),I(en,n,null),d(n,po),I(Dt,n,null),d(n,$o),d(n,vi),d(vi,go),d(n,wo),I(Gt,n,null),d(n,vo),d(n,qt),d(qt,nn),d(qt,yo),I(Ft,qt,null),d(n,bo),I(Vt,n,null),d(n,_o),d(n,Zt),d(Zt,on),d(Zt,ko),I(Bt,Zt,null),d(n,xo),I(Ut,n,null),d(n,Io),d(n,Wt),d(Wt,an),d(Wt,jo),I(Ot,Wt,null),d(n,Mo),I(Kt,n,null),I(Jt,n,null),d(n,To),d(n,Xt),d(Xt,ct),d(Xt,Ao),I(Yt,Xt,null),d(n,zo),I(Qt,n,null),d(n,Eo),I(te,n,null),d(n,Lo),I(ee,n,null),d(n,Po),I(sn,n,null),d(n,So),d(n,rn),d(n,Co),d(n,ln),d(ln,hn),I(ne,ln,null),d(n,Ho),I(ie,n,null),I(oe,n,null),d(n,Ro),d(n,cn),d(cn,fn),I(ae,cn,null),d(n,No),I(se,n,null),d(n,Do),d(n,re),d(re,mn),d(re,Go),I(le,re,null),d(n,qo),I(he,n,null),d(n,Fo),d(n,un),d(un,pn),I(ce,un,null),d(n,Vo),I(fe,n,null),d(n,Zo),I(me,n,null),d(n,Bo),I(ue,n,null),d(n,Uo),I(pe,n,null),d(n,Wo),I(de,n,null),I($e,n,null),I(ge,n,null),d(n,Oo),d(n,dn),d(dn,$n),I(we,dn,null),d(n,Ko),d(n,gn),d(gn,Jo),d(gn,Xo),d(gn,Yo),d(n,Qo),I(ve,n,null),d(n,ta),d(n,wn),d(wn,vn),I(ye,wn,null),d(n,ea),I(be,n,null),d(n,na),I(_e,n,null),d(n,ia),I(ke,n,null),d(n,oa),I(xe,n,null),d(n,aa),I(yn,n,null),d(n,sa),I(Ie,n,null),d(n,ra),d(n,je),d(je,la),d(je,ha),d(je,ca),d(n,fa),d(n,bn),d(bn,_n),I(Me,bn,null),d(n,ma),d(n,Yn),d(n,ua),I(Te,n,null),d(n,pa),I(Ae,n,null),I(ze,n,null),I(Ee,n,null),d(n,da),d(n,$a),d(n,kn),d(kn,ga),I(Le,kn,null),d(kn,wa),d(n,va),d(n,xn),d(xn,In),I(Pe,xn,null),d(n,ya),d(n,ft),d(ft,ba),d(ft,_a),d(ft,ka),d(ft,xa),d(ft,Ia),d(n,ja),I(Se,n,null),d(n,Ma),d(n,jn),d(jn,Mn),I(Ce,jn,null),d(n,Ta),d(n,Qn),d(n,Aa),d(n,Tn),d(Tn,An),I(He,Tn,null),d(n,za),I(Re,n,null),d(n,Ea),d(n,Ne),d(Ne,zn),d(Ne,La),I(De,Ne,null),d(n,Pa),I(Ge,n,null),d(n,Sa),I(qe,n,null),d(n,Ca),I(Fe,n,null),I(Ve,n,null),I(Ze,n,null),I(Be,n,null),d(n,Ha),d(n,Ue),d(Ue,En),d(Ue,Ra),I(We,Ue,null),d(n,Na),I(Oe,n,null),d(n,Da),I(Ke,n,null),d(n,Ga),I(Je,n,null),d(n,qa),d(n,Ln),d(n,Fa),I(Xe,n,null),d(n,Va),I(Pn,n,null),Hi=!0},p(u,[w]){const g={};w&1&&(g.$$scope={dirty:w,ctx:u}),F.$set(g);const yi={};w&1&&(yi.$$scope={dirty:w,ctx:u}),O.$set(yi);const Sn={};w&1&&(Sn.$$scope={dirty:w,ctx:u}),G.$set(Sn);const mt={};w&1&&(mt.$$scope={dirty:w,ctx:u}),q.$set(mt);const bi={};w&1&&(bi.$$scope={dirty:w,ctx:u}),H.$set(bi);const ti={};w&1&&(ti.$$scope={dirty:w,ctx:u}),dt.$set(ti);const _i={};w&1&&(_i.$$scope={dirty:w,ctx:u}),$t.$set(_i);const Cn={};w&1&&(Cn.$$scope={dirty:w,ctx:u}),gt.$set(Cn);const ki={};w&1&&(ki.$$scope={dirty:w,ctx:u}),vt.$set(ki);const xi={};w&1&&(xi.$$scope={dirty:w,ctx:u}),yt.$set(xi);const Hn={};w&1&&(Hn.$$scope={dirty:w,ctx:u}),bt.$set(Hn);const Ii={};w&1&&(Ii.$$scope={dirty:w,ctx:u}),_t.$set(Ii);const ji={};w&1&&(ji.$$scope={dirty:w,ctx:u}),kt.$set(ji);const Mi={};w&1&&(Mi.$$scope={dirty:w,ctx:u}),xt.$set(Mi);const Ti={};w&1&&(Ti.$$scope={dirty:w,ctx:u}),It.$set(Ti);const Ai={};w&1&&(Ai.$$scope={dirty:w,ctx:u}),jt.$set(Ai);const zi={};w&1&&(zi.$$scope={dirty:w,ctx:u}),Mt.$set(zi);const Ei={};w&1&&(Ei.$$scope={dirty:w,ctx:u}),Tt.$set(Ei);const Rn={};w&1&&(Rn.$$scope={dirty:w,ctx:u}),At.$set(Rn);const Nn={};w&1&&(Nn.$$scope={dirty:w,ctx:u}),zt.$set(Nn);const Dn={};w&1&&(Dn.$$scope={dirty:w,ctx:u}),Et.$set(Dn);const Gn={};w&1&&(Gn.$$scope={dirty:w,ctx:u}),Lt.$set(Gn);const ei={};w&1&&(ei.$$scope={dirty:w,ctx:u}),Pt.$set(ei);const ni={};w&1&&(ni.$$scope={dirty:w,ctx:u}),St.$set(ni);const qn={};w&1&&(qn.$$scope={dirty:w,ctx:u}),Ct.$set(qn);const ii={};w&1&&(ii.$$scope={dirty:w,ctx:u}),Ht.$set(ii);const oi={};w&1&&(oi.$$scope={dirty:w,ctx:u}),Rt.$set(oi);const Fn={};w&1&&(Fn.$$scope={dirty:w,ctx:u}),Nt.$set(Fn);const ai={};w&1&&(ai.$$scope={dirty:w,ctx:u}),Dt.$set(ai);const Vn={};w&1&&(Vn.$$scope={dirty:w,ctx:u}),Gt.$set(Vn);const si={};w&1&&(si.$$scope={dirty:w,ctx:u}),Ft.$set(si);const Zn={};w&1&&(Zn.$$scope={dirty:w,ctx:u}),Vt.$set(Zn);const ri={};w&1&&(ri.$$scope={dirty:w,ctx:u}),Bt.$set(ri);const ut={};w&1&&(ut.$$scope={dirty:w,ctx:u}),Ut.$set(ut);const li={};w&1&&(li.$$scope={dirty:w,ctx:u}),Ot.$set(li);const hi={};w&1&&(hi.$$scope={dirty:w,ctx:u}),Kt.$set(hi);const Bn={};w&1&&(Bn.$$scope={dirty:w,ctx:u}),Jt.$set(Bn);const Un={};w&1&&(Un.$$scope={dirty:w,ctx:u}),Yt.$set(Un);const ks={};w&1&&(ks.$$scope={dirty:w,ctx:u}),Qt.$set(ks);const xs={};w&1&&(xs.$$scope={dirty:w,ctx:u}),te.$set(xs);const Is={};w&1&&(Is.$$scope={dirty:w,ctx:u}),ee.$set(Is);const js={};w&1&&(js.$$scope={dirty:w,ctx:u}),ne.$set(js);const Ms={};w&1&&(Ms.$$scope={dirty:w,ctx:u}),ie.$set(Ms);const Ts={};w&1&&(Ts.$$scope={dirty:w,ctx:u}),oe.$set(Ts);const As={};w&1&&(As.$$scope={dirty:w,ctx:u}),ae.$set(As);const zs={};w&1&&(zs.$$scope={dirty:w,ctx:u}),se.$set(zs);const Es={};w&1&&(Es.$$scope={dirty:w,ctx:u}),le.$set(Es);const Ls={};w&1&&(Ls.$$scope={dirty:w,ctx:u}),he.$set(Ls);const Ps={};w&1&&(Ps.$$scope={dirty:w,ctx:u}),ce.$set(Ps);const Ss={};w&1&&(Ss.$$scope={dirty:w,ctx:u}),fe.$set(Ss);const Cs={};w&1&&(Cs.$$scope={dirty:w,ctx:u}),me.$set(Cs);const Hs={};w&1&&(Hs.$$scope={dirty:w,ctx:u}),ue.$set(Hs);const Rs={};w&1&&(Rs.$$scope={dirty:w,ctx:u}),pe.$set(Rs);const Ns={};w&1&&(Ns.$$scope={dirty:w,ctx:u}),de.$set(Ns);const Ds={};w&1&&(Ds.$$scope={dirty:w,ctx:u}),$e.$set(Ds);const Gs={};w&1&&(Gs.$$scope={dirty:w,ctx:u}),ge.$set(Gs);const qs={};w&1&&(qs.$$scope={dirty:w,ctx:u}),we.$set(qs);const Fs={};w&1&&(Fs.$$scope={dirty:w,ctx:u}),ve.$set(Fs);const Vs={};w&1&&(Vs.$$scope={dirty:w,ctx:u}),ye.$set(Vs);const Zs={};w&1&&(Zs.$$scope={dirty:w,ctx:u}),be.$set(Zs);const Bs={};w&1&&(Bs.$$scope={dirty:w,ctx:u}),_e.$set(Bs);const Us={};w&1&&(Us.$$scope={dirty:w,ctx:u}),ke.$set(Us);const Ws={};w&1&&(Ws.$$scope={dirty:w,ctx:u}),xe.$set(Ws);const Os={};w&1&&(Os.$$scope={dirty:w,ctx:u}),Ie.$set(Os);const Ks={};w&1&&(Ks.$$scope={dirty:w,ctx:u}),Me.$set(Ks);const Js={};w&1&&(Js.$$scope={dirty:w,ctx:u}),Te.$set(Js);const Xs={};w&1&&(Xs.$$scope={dirty:w,ctx:u}),Ae.$set(Xs);const Ys={};w&1&&(Ys.$$scope={dirty:w,ctx:u}),ze.$set(Ys);const Qs={};w&1&&(Qs.$$scope={dirty:w,ctx:u}),Ee.$set(Qs);const tr={};w&1&&(tr.$$scope={dirty:w,ctx:u}),Le.$set(tr);const er={};w&1&&(er.$$scope={dirty:w,ctx:u}),Pe.$set(er);const nr={};w&1&&(nr.$$scope={dirty:w,ctx:u}),Se.$set(nr);const ir={};w&1&&(ir.$$scope={dirty:w,ctx:u}),Ce.$set(ir);const or={};w&1&&(or.$$scope={dirty:w,ctx:u}),He.$set(or);const ar={};w&1&&(ar.$$scope={dirty:w,ctx:u}),Re.$set(ar);const sr={};w&1&&(sr.$$scope={dirty:w,ctx:u}),De.$set(sr);const rr={};w&1&&(rr.$$scope={dirty:w,ctx:u}),Ge.$set(rr);const lr={};w&1&&(lr.$$scope={dirty:w,ctx:u}),qe.$set(lr);const hr={};w&1&&(hr.$$scope={dirty:w,ctx:u}),Fe.$set(hr);const cr={};w&1&&(cr.$$scope={dirty:w,ctx:u}),Ve.$set(cr);const fr={};w&1&&(fr.$$scope={dirty:w,ctx:u}),Ze.$set(fr);const mr={};w&1&&(mr.$$scope={dirty:w,ctx:u}),Be.$set(mr);const ur={};w&1&&(ur.$$scope={dirty:w,ctx:u}),We.$set(ur);const pr={};w&1&&(pr.$$scope={dirty:w,ctx:u}),Oe.$set(pr);const dr={};w&1&&(dr.$$scope={dirty:w,ctx:u}),Ke.$set(dr);const $r={};w&1&&($r.$$scope={dirty:w,ctx:u}),Je.$set($r);const gr={};w&1&&(gr.$$scope={dirty:w,ctx:u}),Xe.$set(gr)},i(u){Hi||(y(e.$$.fragment,u),y(i.$$.fragment,u),y(r.$$.fragment,u),y(F.$$.fragment,u),y(O.$$.fragment,u),y(G.$$.fragment,u),y(q.$$.fragment,u),y(H.$$.fragment,u),y(dt.$$.fragment,u),y($t.$$.fragment,u),y(gt.$$.fragment,u),y(vt.$$.fragment,u),y(yt.$$.fragment,u),y(bt.$$.fragment,u),y(_t.$$.fragment,u),y(kt.$$.fragment,u),y(xt.$$.fragment,u),y(It.$$.fragment,u),y(jt.$$.fragment,u),y(Mt.$$.fragment,u),y(Tt.$$.fragment,u),y(At.$$.fragment,u),y(zt.$$.fragment,u),y(Et.$$.fragment,u),y(Lt.$$.fragment,u),y(Pt.$$.fragment,u),y(St.$$.fragment,u),y(Ct.$$.fragment,u),y(Ht.$$.fragment,u),y(Rt.$$.fragment,u),y(Nt.$$.fragment,u),y(en.$$.fragment,u),y(Dt.$$.fragment,u),y(Gt.$$.fragment,u),y(Ft.$$.fragment,u),y(Vt.$$.fragment,u),y(Bt.$$.fragment,u),y(Ut.$$.fragment,u),y(Ot.$$.fragment,u),y(Kt.$$.fragment,u),y(Jt.$$.fragment,u),y(Yt.$$.fragment,u),y(Qt.$$.fragment,u),y(te.$$.fragment,u),y(ee.$$.fragment,u),y(sn.$$.fragment,u),y(ne.$$.fragment,u),y(ie.$$.fragment,u),y(oe.$$.fragment,u),y(ae.$$.fragment,u),y(se.$$.fragment,u),y(le.$$.fragment,u),y(he.$$.fragment,u),y(ce.$$.fragment,u),y(fe.$$.fragment,u),y(me.$$.fragment,u),y(ue.$$.fragment,u),y(pe.$$.fragment,u),y(de.$$.fragment,u),y($e.$$.fragment,u),y(ge.$$.fragment,u),y(we.$$.fragment,u),y(ve.$$.fragment,u),y(ye.$$.fragment,u),y(be.$$.fragment,u),y(_e.$$.fragment,u),y(ke.$$.fragment,u),y(xe.$$.fragment,u),y(yn.$$.fragment,u),y(Ie.$$.fragment,u),y(Me.$$.fragment,u),y(Te.$$.fragment,u),y(Ae.$$.fragment,u),y(ze.$$.fragment,u),y(Ee.$$.fragment,u),y(Le.$$.fragment,u),y(Pe.$$.fragment,u),y(Se.$$.fragment,u),y(Ce.$$.fragment,u),y(He.$$.fragment,u),y(Re.$$.fragment,u),y(De.$$.fragment,u),y(Ge.$$.fragment,u),y(qe.$$.fragment,u),y(Fe.$$.fragment,u),y(Ve.$$.fragment,u),y(Ze.$$.fragment,u),y(Be.$$.fragment,u),y(We.$$.fragment,u),y(Oe.$$.fragment,u),y(Ke.$$.fragment,u),y(Je.$$.fragment,u),y(Xe.$$.fragment,u),y(Pn.$$.fragment,u),Hi=!0)},o(u){b(e.$$.fragment,u),b(i.$$.fragment,u),b(r.$$.fragment,u),b(F.$$.fragment,u),b(O.$$.fragment,u),b(G.$$.fragment,u),b(q.$$.fragment,u),b(H.$$.fragment,u),b(dt.$$.fragment,u),b($t.$$.fragment,u),b(gt.$$.fragment,u),b(vt.$$.fragment,u),b(yt.$$.fragment,u),b(bt.$$.fragment,u),b(_t.$$.fragment,u),b(kt.$$.fragment,u),b(xt.$$.fragment,u),b(It.$$.fragment,u),b(jt.$$.fragment,u),b(Mt.$$.fragment,u),b(Tt.$$.fragment,u),b(At.$$.fragment,u),b(zt.$$.fragment,u),b(Et.$$.fragment,u),b(Lt.$$.fragment,u),b(Pt.$$.fragment,u),b(St.$$.fragment,u),b(Ct.$$.fragment,u),b(Ht.$$.fragment,u),b(Rt.$$.fragment,u),b(Nt.$$.fragment,u),b(en.$$.fragment,u),b(Dt.$$.fragment,u),b(Gt.$$.fragment,u),b(Ft.$$.fragment,u),b(Vt.$$.fragment,u),b(Bt.$$.fragment,u),b(Ut.$$.fragment,u),b(Ot.$$.fragment,u),b(Kt.$$.fragment,u),b(Jt.$$.fragment,u),b(Yt.$$.fragment,u),b(Qt.$$.fragment,u),b(te.$$.fragment,u),b(ee.$$.fragment,u),b(sn.$$.fragment,u),b(ne.$$.fragment,u),b(ie.$$.fragment,u),b(oe.$$.fragment,u),b(ae.$$.fragment,u),b(se.$$.fragment,u),b(le.$$.fragment,u),b(he.$$.fragment,u),b(ce.$$.fragment,u),b(fe.$$.fragment,u),b(me.$$.fragment,u),b(ue.$$.fragment,u),b(pe.$$.fragment,u),b(de.$$.fragment,u),b($e.$$.fragment,u),b(ge.$$.fragment,u),b(we.$$.fragment,u),b(ve.$$.fragment,u),b(ye.$$.fragment,u),b(be.$$.fragment,u),b(_e.$$.fragment,u),b(ke.$$.fragment,u),b(xe.$$.fragment,u),b(yn.$$.fragment,u),b(Ie.$$.fragment,u),b(Me.$$.fragment,u),b(Te.$$.fragment,u),b(Ae.$$.fragment,u),b(ze.$$.fragment,u),b(Ee.$$.fragment,u),b(Le.$$.fragment,u),b(Pe.$$.fragment,u),b(Se.$$.fragment,u),b(Ce.$$.fragment,u),b(He.$$.fragment,u),b(Re.$$.fragment,u),b(De.$$.fragment,u),b(Ge.$$.fragment,u),b(qe.$$.fragment,u),b(Fe.$$.fragment,u),b(Ve.$$.fragment,u),b(Ze.$$.fragment,u),b(Be.$$.fragment,u),b(We.$$.fragment,u),b(Oe.$$.fragment,u),b(Ke.$$.fragment,u),b(Je.$$.fragment,u),b(Xe.$$.fragment,u),b(Pn.$$.fragment,u),Hi=!1},d(u){u&&(s(t),s(a),s(o)),j(e,u),j(i,u),j(r),j(F),j(O),j(G),j(q),j(H),j(dt),j($t),j(gt),j(vt),j(yt),j(bt),j(_t),j(kt),j(xt),j(It),j(jt),j(Mt),j(Tt),j(At),j(zt),j(Et),j(Lt),j(Pt),j(St),j(Ct),j(Ht),j(Rt),j(Nt),j(en),j(Dt),j(Gt),j(Ft),j(Vt),j(Bt),j(Ut),j(Ot),j(Kt),j(Jt),j(Yt),j(Qt),j(te),j(ee),j(sn),j(ne),j(ie),j(oe),j(ae),j(se),j(le),j(he),j(ce),j(fe),j(me),j(ue),j(pe),j(de),j($e),j(ge),j(we),j(ve),j(ye),j(be),j(_e),j(ke),j(xe),j(yn),j(Ie),j(Me),j(Te),j(Ae),j(ze),j(Ee),j(Le),j(Pe),j(Se),j(Ce),j(He),j(Re),j(De),j(Ge),j(qe),j(Fe),j(Ve),j(Ze),j(Be),j(We),j(Oe),j(Ke),j(Je),j(Xe),j(Pn)}}}class vc extends st{constructor(e){super(),rt(this,e,null,dc,at,{})}}export{vc as component};
