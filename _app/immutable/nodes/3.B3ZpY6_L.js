import{s as at,a as fi,u as mi,g as ui,b as di,n as U,o as Mr,x as it}from"../chunks/scheduler.BeaK0CkN.js";import{S as st,i as rt,e as L,c as P,h as C,f as s,b as A,d as u,m as v,n as b,r as Tr,p as zr,z as Ar,t as f,v as k,j as m,w as x,k as d,x as I,y as j,l as Wa,s as z,a as E,g as W,A as Er,B as Lr}from"../chunks/index.BmRq3wWf.js";import{b as Q}from"../chunks/paths.G9kcNTRU.js";const Pr=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ni(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Sr(l){let e,t,o;const a=l[4].default,i=fi(a,l,l[3],null);return{c(){e=L("a"),i&&i.c(),this.h()},l(r){e=P(r,"A",{href:!0,class:!0,target:!0,rel:!0});var h=C(e);i&&i.l(h),h.forEach(s),this.h()},h(){A(e,"href",l[0]),A(e,"class",t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+l[1]),A(e,"target",l[2]),A(e,"rel","noopener noreferrer")},m(r,h){u(r,e,h),i&&i.m(e,null),o=!0},p(r,[h]){i&&i.p&&(!o||h&8)&&mi(i,a,r,r[3],o?di(a,r[3],h,null):ui(r[3]),null),(!o||h&1)&&A(e,"href",r[0]),(!o||h&2&&t!==(t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+r[1]))&&A(e,"class",t),(!o||h&4)&&A(e,"target",r[2])},i(r){o||(v(i,r),o=!0)},o(r){b(i,r),o=!1},d(r){r&&s(e),i&&i.d(r)}}}function Hr(l,e,t){let{$$slots:o={},$$scope:a}=e,{href:i}=e,{styling:r=""}=e,{target:h="_blank"}=e;return l.$$set=n=>{"href"in n&&t(0,i=n.href),"styling"in n&&t(1,r=n.styling),"target"in n&&t(2,h=n.target),"$$scope"in n&&t(3,a=n.$$scope)},[i,r,h,a,o]}class B extends st{constructor(e){super(),rt(this,e,Hr,Sr,at,{href:0,styling:1,target:2})}}function br(l,e,t){const o=l.slice();return o[0]=e[t],o}function Rr(l){let e;return{c(){e=f("link")},l(t){e=m(t,"link")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function _r(l){let e,t,o=l[0].author+"",a,i,r,h=l[0].title+"",n,p,y,g=l[0].publisher+"",_,S,H,D=l[0].year+"",Z,M,T,F,J,tt,O,G;return J=new B({props:{href:l[0].link,$$slots:{default:[Rr]},$$scope:{ctx:l}}}),{c(){e=L("li"),t=L("span"),a=f(o),i=f(", "),r=L("span"),n=f(h),p=f(`,
			`),y=L("span"),_=f(g),S=f(`,
			`),H=L("span"),Z=f(D),M=f(", "),T=L("span"),F=f("["),k(J.$$.fragment),tt=f("]"),O=f(`.
		`),this.h()},l(q){e=P(q,"LI",{});var K=C(e);t=P(K,"SPAN",{class:!0});var Y=C(t);a=m(Y,o),Y.forEach(s),i=m(K,", "),r=P(K,"SPAN",{});var ot=C(r);n=m(ot,h),ot.forEach(s),p=m(K,`,
			`),y=P(K,"SPAN",{});var nt=C(y);_=m(nt,g),nt.forEach(s),S=m(K,`,
			`),H=P(K,"SPAN",{});var lt=C(H);Z=m(lt,D),lt.forEach(s),M=m(K,", "),T=P(K,"SPAN",{});var R=C(T);F=m(R,"["),x(J.$$.fragment,R),tt=m(R,"]"),R.forEach(s),O=m(K,`.
		`),K.forEach(s),this.h()},h(){A(t,"class","ms-4")},m(q,K){u(q,e,K),d(e,t),d(t,a),d(e,i),d(e,r),d(r,n),d(e,p),d(e,y),d(y,_),d(e,S),d(e,H),d(H,Z),d(e,M),d(e,T),d(T,F),I(J,T,null),d(T,tt),d(e,O),G=!0},p(q,K){const Y={};K&8&&(Y.$$scope={dirty:K,ctx:q}),J.$set(Y)},i(q){G||(v(J.$$.fragment,q),G=!0)},o(q){b(J.$$.fragment,q),G=!1},d(q){q&&s(e),j(J)}}}function Cr(l){let e,t,o=Ni(Hi),a=[];for(let r=0;r<o.length;r+=1)a[r]=_r(br(l,o,r));const i=r=>b(a[r],1,1,()=>{a[r]=null});return{c(){e=L("ol");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=P(r,"OL",{class:!0});var h=C(e);for(let n=0;n<a.length;n+=1)a[n].l(h);h.forEach(s),this.h()},h(){A(e,"class","pl-5 my-2 text-xs list-decimal")},m(r,h){u(r,e,h);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,null);t=!0},p(r,[h]){if(h&0){o=Ni(Hi);let n;for(n=0;n<o.length;n+=1){const p=br(r,o,n);a[n]?(a[n].p(p,h),v(a[n],1)):(a[n]=_r(p),a[n].c(),v(a[n],1),a[n].m(e,null))}for(Tr(),n=o.length;n<a.length;n+=1)i(n);zr()}},i(r){if(!t){for(let h=0;h<o.length;h+=1)v(a[h]);t=!0}},o(r){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)b(a[h]);t=!1},d(r){r&&s(e),Ar(a,r)}}}const Di=l=>{for(let e=0;e<Hi.length;e++)if(Hi[e].id==l)return{index:e+1,link:Hi[e].link};throw new Error},Hi=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"oestreicher",author:"Oestreicher C.",title:"A history of chaos theory",publisher:"Dialogues Clin Neurosci.",year:"2007",link:"https://doi.org/10.31887/DCNS.2007.9.3/coestreicher"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"},{id:"chandramoorthy",author:"Nisha Chandramoorthy, QiQi Wang",title:"On the probability of finding nonphysical solutions through shadowing",publisher:"Journal of Computational Physics",year:"1 September 2021",link:"https://doi.org/10.1016/j.jcp.2021.110389"}];class Nr extends st{constructor(e){super(),rt(this,e,null,Cr,at,{})}}function Dr(l){let e=Di(l[0]).index+"",t;return{c(){t=f(e)},l(o){t=m(o,e)},m(o,a){u(o,t,a)},p(o,a){a&1&&e!==(e=Di(o[0]).index+"")&&Wa(t,e)},d(o){o&&s(t)}}}function Gr(l){let e,t,o,a;return t=new B({props:{href:Di(l[0]).link,$$slots:{default:[Dr]},$$scope:{ctx:l}}}),{c(){e=f("["),k(t.$$.fragment),o=f("]")},l(i){e=m(i,"["),x(t.$$.fragment,i),o=m(i,"]")},m(i,r){u(i,e,r),I(t,i,r),u(i,o,r),a=!0},p(i,[r]){const h={};r&1&&(h.href=Di(i[0]).link),r&3&&(h.$$scope={dirty:r,ctx:i}),t.$set(h)},i(i){a||(v(t.$$.fragment,i),a=!0)},o(i){b(t.$$.fragment,i),a=!1},d(i){i&&(s(e),s(o)),j(t,i)}}}function qr(l,e,t){let{id:o}=e;return l.$$set=a=>{"id"in a&&t(0,o=a.id)},[o]}class X extends st{constructor(e){super(),rt(this,e,qr,Gr,at,{id:0})}}function Fr(l){let e,t;const o=l[2].default,a=fi(o,l,l[1],null);return{c(){e=L("div"),a&&a.c(),this.h()},l(i){e=P(i,"DIV",{id:!0,class:!0});var r=C(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"id",l[0]),A(e,"class","text-2xl font-bold text-center my-8")},m(i,r){u(i,e,r),a&&a.m(e,null),t=!0},p(i,[r]){a&&a.p&&(!t||r&2)&&mi(a,o,i,i[1],t?di(o,i[1],r,null):ui(i[1]),null),(!t||r&1)&&A(e,"id",i[0])},i(i){t||(v(a,i),t=!0)},o(i){b(a,i),t=!1},d(i){i&&s(e),a&&a.d(i)}}}function Zr(l,e,t){let{$$slots:o={},$$scope:a}=e,{id:i}=e;return l.$$set=r=>{"id"in r&&t(0,i=r.id),"$$scope"in r&&t(1,a=r.$$scope)},[i,a,o]}class Pi extends st{constructor(e){super(),rt(this,e,Zr,Fr,at,{id:0})}}function Vr(l){let e,t;const o=l[2].default,a=fi(o,l,l[1],null);return{c(){e=L("div"),a&&a.c(),this.h()},l(i){e=P(i,"DIV",{id:!0,class:!0});var r=C(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"id",l[0]),A(e,"class","text-xl font-medium text-left mt-8 mb-4")},m(i,r){u(i,e,r),a&&a.m(e,null),t=!0},p(i,[r]){a&&a.p&&(!t||r&2)&&mi(a,o,i,i[1],t?di(o,i[1],r,null):ui(i[1]),null),(!t||r&1)&&A(e,"id",i[0])},i(i){t||(v(a,i),t=!0)},o(i){b(a,i),t=!1},d(i){i&&s(e),a&&a.d(i)}}}function Br(l,e,t){let{$$slots:o={},$$scope:a}=e,{id:i}=e;return l.$$set=r=>{"id"in r&&t(0,i=r.id),"$$scope"in r&&t(1,a=r.$$scope)},[i,a,o]}class Si extends st{constructor(e){super(),rt(this,e,Br,Vr,at,{id:0})}}function Ur(l){let e,t;const o=l[1].default,a=fi(o,l,l[0],null);return{c(){e=L("div"),a&&a.c(),this.h()},l(i){e=P(i,"DIV",{class:!0});var r=C(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"class","text-lg font-medium text-left ms-4 mt-4 mb-4")},m(i,r){u(i,e,r),a&&a.m(e,null),t=!0},p(i,[r]){a&&a.p&&(!t||r&1)&&mi(a,o,i,i[0],t?di(o,i[0],r,null):ui(i[0]),null)},i(i){t||(v(a,i),t=!0)},o(i){b(a,i),t=!1},d(i){i&&s(e),a&&a.d(i)}}}function Wr(l,e,t){let{$$slots:o={},$$scope:a}=e;return l.$$set=i=>{"$$scope"in i&&t(0,a=i.$$scope)},[a,o]}class kr extends st{constructor(e){super(),rt(this,e,Wr,Ur,at,{})}}function Or(l){let e,t,o;const a=l[3].default,i=fi(a,l,l[2],null);return{c(){e=L("p"),i&&i.c(),this.h()},l(r){e=P(r,"P",{class:!0});var h=C(e);i&&i.l(h),h.forEach(s),this.h()},h(){A(e,"class",t="my-2 "+l[0]+" "+l[1])},m(r,h){u(r,e,h),i&&i.m(e,null),o=!0},p(r,[h]){i&&i.p&&(!o||h&4)&&mi(i,a,r,r[2],o?di(a,r[2],h,null):ui(r[2]),null),(!o||h&3&&t!==(t="my-2 "+r[0]+" "+r[1]))&&A(e,"class",t)},i(r){o||(v(i,r),o=!0)},o(r){b(i,r),o=!1},d(r){r&&s(e),i&&i.d(r)}}}function Kr(l,e,t){let{$$slots:o={},$$scope:a}=e,{indent:i="indent-8"}=e,{style:r=""}=e;return l.$$set=h=>{"indent"in h&&t(0,i=h.indent),"style"in h&&t(1,r=h.style),"$$scope"in h&&t(2,a=h.$$scope)},[i,r,a,o]}class N extends st{constructor(e){super(),rt(this,e,Kr,Or,at,{indent:0,style:1})}}function xr(l,e,t){const o=l.slice();return o[1]=e[t],o}function Ir(l){let e,t,o=l[1].desc+"",a,i,r,h,n=l[1].val+"",p,y;return{c(){e=L("li"),t=L("div"),a=f(o),i=z(),r=L("div"),h=L("span"),p=f(n),y=z(),this.h()},l(g){e=P(g,"LI",{class:!0});var _=C(e);t=P(_,"DIV",{class:!0});var S=C(t);a=m(S,o),S.forEach(s),i=E(_),r=P(_,"DIV",{class:!0});var H=C(r);h=P(H,"SPAN",{class:!0});var D=C(h);p=m(D,n),D.forEach(s),H.forEach(s),y=E(_),_.forEach(s),this.h()},h(){A(t,"class","flex-none w-32 sm:w-64"),A(h,"class","rounded-0.5 p-1 font-mono"),A(r,"class","w-fit flex-wrap"),A(e,"class","flex items-center justify-left")},m(g,_){u(g,e,_),d(e,t),d(t,a),d(e,i),d(e,r),d(r,h),d(h,p),d(e,y)},p(g,_){_&1&&o!==(o=g[1].desc+"")&&Wa(a,o),_&1&&n!==(n=g[1].val+"")&&Wa(p,n)},d(g){g&&s(e)}}}function Jr(l){let e,t,o=Ni(l[0]),a=[];for(let i=0;i<o.length;i+=1)a[i]=Ir(xr(l,o,i));return{c(){e=L("section"),t=L("ul");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=P(i,"SECTION",{class:!0});var r=C(e);t=P(r,"UL",{class:!0});var h=C(t);for(let n=0;n<a.length;n+=1)a[n].l(h);h.forEach(s),r.forEach(s),this.h()},h(){A(t,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),A(e,"class","relative block my-4")},m(i,r){u(i,e,r),d(e,t);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(t,null)},p(i,[r]){if(r&1){o=Ni(i[0]);let h;for(h=0;h<o.length;h+=1){const n=xr(i,o,h);a[h]?a[h].p(n,r):(a[h]=Ir(n),a[h].c(),a[h].m(t,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=o.length}},i:U,o:U,d(i){i&&s(e),Ar(a,i)}}}function Xr(l,e,t){let{hps:o=[]}=e;return l.$$set=a=>{"hps"in a&&t(0,o=a.hps)},[o]}class Ua extends st{constructor(e){super(),rt(this,e,Xr,Jr,at,{hps:0})}}function Yr(l){let e,t;const o=l[1].default,a=fi(o,l,l[0],null);return{c(){e=L("figcaption"),a&&a.c(),this.h()},l(i){e=P(i,"FIGCAPTION",{class:!0});var r=C(e);a&&a.l(r),r.forEach(s),this.h()},h(){A(e,"class","text-center text-xs mt-2")},m(i,r){u(i,e,r),a&&a.m(e,null),t=!0},p(i,[r]){a&&a.p&&(!t||r&1)&&mi(a,o,i,i[0],t?di(o,i[0],r,null):ui(i[0]),null)},i(i){t||(v(a,i),t=!0)},o(i){b(a,i),t=!1},d(i){i&&s(e),a&&a.d(i)}}}function Qr(l,e,t){let{$$slots:o={},$$scope:a}=e;return l.$$set=i=>{"$$scope"in i&&t(0,a=i.$$scope)},[a,o]}class et extends st{constructor(e){super(),rt(this,e,Qr,Yr,at,{})}}const{window:tl}=Pr;function el(l){let e,t='<nav class="border-r-2 sticky top-12"><div><section><ul class="menu"><li><a href="#intro">Intro</a></li> <li><a href="#lorenz">Lorenz Attractor</a></li> <li><a href="#nhits">Neural Architecture</a></li> <li><a href="#experiments">Experiments</a></li> <ul class="text-sm submenu"><li><a href="#datagen">Data Generation</a></li> <li><a href="#model-1">Model 1</a></li> <li><a href="#model-2">Model 2</a></li> <li><a href="#model-3">Model 3</a></li> <li><a href="#arpred">Autoregressive Prediction</a></li></ul> <li><a href="#discussion">Discussion</a></li> <li><a href="#references">References</a></li></ul></section></div></nav>',o,a;return{c(){e=L("aside"),e.innerHTML=t,this.h()},l(i){e=P(i,"ASIDE",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-u7i093"&&(e.innerHTML=t),this.h()},h(){A(e,"class","max-sm:hidden")},m(i,r){u(i,e,r),o||(a=Er(tl,"scroll",l[0]),o=!0)},p:U,i:U,o:U,d(i){i&&s(e),o=!1,a()}}}function nl(l){const e=["intro","lorenz","nhits","experiments","datagen","model-1","model-2","model-3","arpred","discussion","references"],t=["bg-rose-100","rounded"];let o=e[0];const a=n=>{const p="a[href='#"+n+"']";return document.querySelector(p)},i=n=>{const p=a(n).parentElement;t.forEach(y=>p.classList.add(y))},r=n=>{const p=a(n).parentElement;t.forEach(y=>p.classList.remove(y))},h=()=>{let n;e.forEach(p=>{const y=document.getElementById(p);window.scrollY>=y.offsetTop-1&&(n=p)}),n&&n!=o&&(r(o),o=n,i(o))};return Mr(()=>{i(o),h()}),[h]}class il extends st{constructor(e){super(),rt(this,e,nl,el,at,{})}}function ol(l){return Mr(()=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",e.async=!0,document.head.append(e),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[]}class al extends st{constructor(e){super(),rt(this,e,ol,null,at,{})}}const sl=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,rl=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,ll=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,hl=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,cl=`
\\begin{align}
\\operatorname{J}(z) := exp(-\\frac{z^2}{2}) \\\\
\\end{align}`,fl=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],ml=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~687 million"}],ul=[{desc:"horizon",val:500},{desc:"lookback",val:1e3},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"},{desc:"total trainable parameters",val:"~857 million"}];function dl(l){let e,t,o,a,i,r,h;return document.title=e=Ri,{c(){t=L("meta"),o=L("meta"),a=L("meta"),i=L("meta"),r=L("meta"),h=L("meta"),this.h()},l(n){const p=Lr("svelte-xp42rc",document.head);t=P(p,"META",{name:!0,content:!0}),o=P(p,"META",{property:!0,content:!0}),a=P(p,"META",{property:!0,content:!0}),i=P(p,"META",{property:!0,content:!0}),r=P(p,"META",{property:!0,content:!0}),h=P(p,"META",{property:!0,content:!0}),p.forEach(s),this.h()},h(){A(t,"name","description"),A(t,"content",jr),A(o,"property","og:type"),A(o,"content","article"),A(a,"property","og:url"),A(a,"content","https://nrxszvo.github.io/nhits-lorenz"),A(i,"property","og:description"),A(i,"content",jr),A(r,"property","og:image"),A(r,"content","https://nrxszvo.github.io/thumbnail.png"),A(h,"property","og:title"),A(h,"content",Ri)},m(n,p){d(document.head,t),d(document.head,o),d(document.head,a),d(document.head,i),d(document.head,r),d(document.head,h)},p(n,[p]){p&0&&e!==(e=Ri)&&(document.title=e)},i:U,o:U,d(n){s(t),s(o),s(a),s(i),s(r),s(h)}}}const Ri="Generic Deep Learning for Chaotic Dynamics: A Case Study on the Lorenz Attractor",jr="Experiments using the NHiTS neural forecasting architecture to model the Lorenz Attractor; analysis of Z coordinate local maximum converging to 38.5";class pl extends st{constructor(e){super(),rt(this,e,null,dl,at,{})}}function $l(l){let e;return{c(){e=f("mochaNN")},l(t){e=m(t,"mochaNN")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function gl(l){let e,t,o="Model scale versus domain knowledge in statistical forecasting of chaotic systems",a,i,r,h,n,p,y,g,_,S,H='<a href="#sabine">1</a>',D,Z;return i=new X({props:{id:"gilpin"}}),h=new X({props:{id:"gilpin"}}),p=new X({props:{id:"seo"}}),g=new X({props:{id:"degrave"}}),{c(){e=f(`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=L("i"),t.textContent=o,a=z(),k(i.$$.fragment),r=f(`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),k(h.$$.fragment),n=f(`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),k(p.$$.fragment),y=f(", "),k(g.$$.fragment),_=f(")"),S=L("sup"),S.innerHTML=H,D=f(`.
		`)},l(M){e=m(M,`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=P(M,"I",{"data-svelte-h":!0}),W(t)!=="svelte-oq8z8z"&&(t.textContent=o),a=E(M),x(i.$$.fragment,M),r=m(M,`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),x(h.$$.fragment,M),n=m(M,`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),x(p.$$.fragment,M),y=m(M,", "),x(g.$$.fragment,M),_=m(M,")"),S=P(M,"SUP",{"data-svelte-h":!0}),W(S)!=="svelte-6x9dc9"&&(S.innerHTML=H),D=m(M,`.
		`)},m(M,T){u(M,e,T),u(M,t,T),u(M,a,T),I(i,M,T),u(M,r,T),I(h,M,T),u(M,n,T),I(p,M,T),u(M,y,T),I(g,M,T),u(M,_,T),u(M,S,T),u(M,D,T),Z=!0},p:U,i(M){Z||(v(i.$$.fragment,M),v(h.$$.fragment,M),v(p.$$.fragment,M),v(g.$$.fragment,M),Z=!0)},o(M){b(i.$$.fragment,M),b(h.$$.fragment,M),b(p.$$.fragment,M),b(g.$$.fragment,M),Z=!1},d(M){M&&(s(e),s(t),s(a),s(r),s(n),s(y),s(_),s(S),s(D)),j(i,M),j(h,M),j(p,M),j(g,M)}}}function wl(l){let e,t,o="i.e.",a,i,r='<a href="#paperspace">2</a>',h,n,p='<a href="#brunton">3</a>',y;return{c(){e=f(`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=L("i"),t.textContent=o,a=f(`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),i=L("sup"),i.innerHTML=r,h=f(`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=L("sup"),n.innerHTML=p,y=f(`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},l(g){e=m(g,`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=P(g,"I",{"data-svelte-h":!0}),W(t)!=="svelte-1xx6z5c"&&(t.textContent=o),a=m(g,`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),i=P(g,"SUP",{"data-svelte-h":!0}),W(i)!=="svelte-yuo1gg"&&(i.innerHTML=r),h=m(g,`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=P(g,"SUP",{"data-svelte-h":!0}),W(n)!=="svelte-a7rqq8"&&(n.innerHTML=p),y=m(g,`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},m(g,_){u(g,e,_),u(g,t,_),u(g,a,_),u(g,i,_),u(g,h,_),u(g,n,_),u(g,y,_)},p:U,d(g){g&&(s(e),s(t),s(a),s(i),s(h),s(n),s(y))}}}function yl(l){let e;return{c(){e=f(`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},l(t){e=m(t,`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function vl(l){let e;return{c(){e=f("Youtube channel")},l(t){e=m(t,"Youtube channel")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function bl(l){let e;return{c(){e=f("lecture series")},l(t){e=m(t,"lecture series")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function _l(l){let e;return{c(){e=f("The Lorenz Attractor")},l(t){e=m(t,"The Lorenz Attractor")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function kl(l){let e;return{c(){e=f("sensitivity to initial conditions")},l(t){e=m(t,"sensitivity to initial conditions")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function xl(l){let e;return{c(){e=f("n-body problem")},l(t){e=m(t,"n-body problem")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Il(l){let e;return{c(){e=f("Lorenz Attractor")},l(t){e=m(t,"Lorenz Attractor")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function jl(l){let e,t,o,a,i,r,h,n,p,y;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Butterfly_effect",$$slots:{default:[kl]},$$scope:{ctx:l}}}),a=new B({props:{href:"https://en.wikipedia.org/wiki/N-body_problem",$$slots:{default:[xl]},$$scope:{ctx:l}}}),r=new B({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[Il]},$$scope:{ctx:l}}}),n=new X({props:{id:"oestreicher"}}),{c(){e=f("Although the phenomon of "),k(t.$$.fragment),o=f(` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),k(a.$$.fragment),i=f(", the birth of modern chaos theory is generally associated with the discovery of the "),k(r.$$.fragment),h=f(`
			by Edward Lorenz et. al. in 1963 `),k(n.$$.fragment),p=f(`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},l(g){e=m(g,"Although the phenomon of "),x(t.$$.fragment,g),o=m(g,` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),x(a.$$.fragment,g),i=m(g,", the birth of modern chaos theory is generally associated with the discovery of the "),x(r.$$.fragment,g),h=m(g,`
			by Edward Lorenz et. al. in 1963 `),x(n.$$.fragment,g),p=m(g,`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},m(g,_){u(g,e,_),I(t,g,_),u(g,o,_),I(a,g,_),u(g,i,_),I(r,g,_),u(g,h,_),I(n,g,_),u(g,p,_),y=!0},p(g,_){const S={};_&1&&(S.$$scope={dirty:_,ctx:g}),t.$set(S);const H={};_&1&&(H.$$scope={dirty:_,ctx:g}),a.$set(H);const D={};_&1&&(D.$$scope={dirty:_,ctx:g}),r.$set(D)},i(g){y||(v(t.$$.fragment,g),v(a.$$.fragment,g),v(r.$$.fragment,g),v(n.$$.fragment,g),y=!0)},o(g){b(t.$$.fragment,g),b(a.$$.fragment,g),b(r.$$.fragment,g),b(n.$$.fragment,g),y=!1},d(g){g&&(s(e),s(o),s(i),s(h),s(p)),j(t,g),j(a,g),j(r,g),j(n,g)}}}function Ml(l){let e;return{c(){e=f("The Lorenz Attractor")},l(t){e=m(t,"The Lorenz Attractor")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Al(l){let e;return{c(){e=f(`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},l(t){e=m(t,`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Tl(l){let e;return{c(){e=f("strange attractor")},l(t){e=m(t,"strange attractor")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function zl(l){let e;return{c(){e=f("Hausdorff dimension")},l(t){e=m(t,"Hausdorff dimension")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function El(l){let e,t,o="Attractor",a,i,r,h,n,p;return i=new B({props:{href:"https://en.wikipedia.org/wiki/Attractor#Strange_attractor",$$slots:{default:[Tl]},$$scope:{ctx:l}}}),h=new B({props:{href:"https://en.wikipedia.org/wiki/Hausdorff_dimension",$$slots:{default:[zl]},$$scope:{ctx:l}}}),{c(){e=f("The Lorenz "),t=L("i"),t.textContent=o,a=f(` refers to a set of chaotic solutions to the system that
			constitute a `),k(i.$$.fragment),r=f(`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),k(h.$$.fragment),n=f(` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},l(y){e=m(y,"The Lorenz "),t=P(y,"I",{"data-svelte-h":!0}),W(t)!=="svelte-7jrnvq"&&(t.textContent=o),a=m(y,` refers to a set of chaotic solutions to the system that
			constitute a `),x(i.$$.fragment,y),r=m(y,`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),x(h.$$.fragment,y),n=m(y,` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},m(y,g){u(y,e,g),u(y,t,g),u(y,a,g),I(i,y,g),u(y,r,g),I(h,y,g),u(y,n,g),p=!0},p(y,g){const _={};g&1&&(_.$$scope={dirty:g,ctx:y}),i.$set(_);const S={};g&1&&(S.$$scope={dirty:g,ctx:y}),h.$set(S)},i(y){p||(v(i.$$.fragment,y),v(h.$$.fragment,y),p=!0)},o(y){b(i.$$.fragment,y),b(h.$$.fragment,y),p=!1},d(y){y&&(s(e),s(t),s(a),s(r),s(n)),j(i,y),j(h,y)}}}function Ll(l){let e;return{c(){e=f("Hopf bifurcation")},l(t){e=m(t,"Hopf bifurcation")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Pl(l){let e,t="$\\rho$",o,a,i="$\\rho \\lt 1$",r,h,n="$\\rho \\approx 24.7$",p,y,g,_,S;return g=new B({props:{href:"https://en.wikipedia.org/wiki/Hopf_bifurcation",$$slots:{default:[Ll]},$$scope:{ctx:l}}}),{c(){e=f("Other parameterizations of interest generally involve varying the "),o=f(t),a=f(` parameter,
			for example, `),r=f(i),h=f(" in which the system is stable, and "),p=f(n),y=f(`,
			at which a `),k(g.$$.fragment),_=f(" occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},l(H){e=m(H,"Other parameterizations of interest generally involve varying the "),o=m(H,t),a=m(H,` parameter,
			for example, `),r=m(H,i),h=m(H," in which the system is stable, and "),p=m(H,n),y=m(H,`,
			at which a `),x(g.$$.fragment,H),_=m(H," occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},m(H,D){u(H,e,D),u(H,o,D),u(H,a,D),u(H,r,D),u(H,h,D),u(H,p,D),u(H,y,D),I(g,H,D),u(H,_,D),S=!0},p(H,D){const Z={};D&1&&(Z.$$scope={dirty:D,ctx:H}),g.$set(Z)},i(H){S||(v(g.$$.fragment,H),S=!0)},o(H){b(g.$$.fragment,H),S=!1},d(H){H&&(s(e),s(o),s(a),s(r),s(h),s(p),s(y),s(_)),j(g,H)}}}function Sl(l){let e;return{c(){e=f("dysts")},l(t){e=m(t,"dysts")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Hl(l){let e,t,o,a;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Sl]},$$scope:{ctx:l}}}),{c(){e=f("For all trajectories in this project, I used Gilpin's "),k(t.$$.fragment),o=f(` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},l(i){e=m(i,"For all trajectories in this project, I used Gilpin's "),x(t.$$.fragment,i),o=m(i,` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},m(i,r){u(i,e,r),I(t,i,r),u(i,o,r),a=!0},p(i,r){const h={};r&1&&(h.$$scope={dirty:r,ctx:i}),t.$set(h)},i(i){a||(v(t.$$.fragment,i),a=!0)},o(i){b(t.$$.fragment,i),a=!1},d(i){i&&(s(e),s(o)),j(t,i)}}}function Rl(l){let e;return{c(){e=f("Neural Architecture: N-HiTS")},l(t){e=m(t,"Neural Architecture: N-HiTS")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Cl(l){let e,t,o,a,i,r;return t=new X({props:{id:"challu"}}),a=new X({props:{id:"gilpin"}}),{c(){e=f("The N-HiTS "),k(t.$$.fragment),o=f(` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),k(a.$$.fragment),i=f(`, it seemed like the natural starting point
			for a network architecture.`)},l(h){e=m(h,"The N-HiTS "),x(t.$$.fragment,h),o=m(h,` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),x(a.$$.fragment,h),i=m(h,`, it seemed like the natural starting point
			for a network architecture.`)},m(h,n){u(h,e,n),I(t,h,n),u(h,o,n),I(a,h,n),u(h,i,n),r=!0},p:U,i(h){r||(v(t.$$.fragment,h),v(a.$$.fragment,h),r=!0)},o(h){b(t.$$.fragment,h),b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(o),s(i)),j(t,h),j(a,h)}}}function Nl(l){let e,t,o,a,i,r;return t=new X({props:{id:"oreshkin"}}),a=new X({props:{id:"oreshkin"}}),{c(){e=f("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),k(t.$$.fragment),o=f(`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),k(a.$$.fragment),i=f(".")},l(h){e=m(h,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),x(t.$$.fragment,h),o=m(h,`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),x(a.$$.fragment,h),i=m(h,".")},m(h,n){u(h,e,n),I(t,h,n),u(h,o,n),I(a,h,n),u(h,i,n),r=!0},p:U,i(h){r||(v(t.$$.fragment,h),v(a.$$.fragment,h),r=!0)},o(h){b(t.$$.fragment,h),b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(o),s(i)),j(t,h),j(a,h)}}}function Dl(l){let e,t,o,a;return t=new X({props:{id:"challu"}}),{c(){e=f(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),k(t.$$.fragment),o=f(".")},l(i){e=m(i,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),x(t.$$.fragment,i),o=m(i,".")},m(i,r){u(i,e,r),I(t,i,r),u(i,o,r),a=!0},p:U,i(i){a||(v(t.$$.fragment,i),a=!0)},o(i){b(t.$$.fragment,i),a=!1},d(i){i&&(s(e),s(o)),j(t,i)}}}function Gl(l){let e;return{c(){e=f("Experiments")},l(t){e=m(t,"Experiments")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ql(l){let e,t,o,a;return t=new X({props:{id:"gilpin"}}),{c(){e=f(`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),k(t.$$.fragment),o=f(`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},l(i){e=m(i,`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),x(t.$$.fragment,i),o=m(i,`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},m(i,r){u(i,e,r),I(t,i,r),u(i,o,r),a=!0},p:U,i(i){a||(v(t.$$.fragment,i),a=!0)},o(i){b(t.$$.fragment,i),a=!1},d(i){i&&(s(e),s(o)),j(t,i)}}}function Fl(l){let e;return{c(){e=f("Data Generation")},l(t){e=m(t,"Data Generation")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Zl(l){let e;return{c(){e=f("dysts")},l(t){e=m(t,"dysts")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Vl(l){let e;return{c(){e=f("IVP solver")},l(t){e=m(t,"IVP solver")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Bl(l){let e;return{c(){e=f("dysts")},l(t){e=m(t,"dysts")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Ul(l){let e,t="$H$",o,a,i="$dt$",r,h,n="$0.015$",p,y,g,_,S,H,D="$dt$",Z,M,T,F="after",J,tt="$dt$",O,G,q,K,Y="$\\approx 1.8\\mathrm{e}{-4}$",ot,nt,lt;return g=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Zl]},$$scope:{ctx:l}}}),S=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[Vl]},$$scope:{ctx:l}}}),q=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Bl]},$$scope:{ctx:l}}}),{c(){e=f("I begin with a horizon (prediction window), "),o=f(t),a=f(", of 100 points, using a "),r=f(i),h=f(` of
			approximately
			`),p=f(n),y=f(" seconds per point (the default from "),k(g.$$.fragment),_=f(") to sample the solution produced by the "),k(S.$$.fragment),H=f(". Importantly, note that this "),Z=f(D),M=f(` is only the one used for sampling the solution
			`),T=L("i"),T.textContent=F,J=f(`
			it is generated by the IVP solver. The actual `),O=f(tt),G=f(` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),k(q.$$.fragment),K=f(" is "),ot=f(Y),nt=f(`.
		`)},l(R){e=m(R,"I begin with a horizon (prediction window), "),o=m(R,t),a=m(R,", of 100 points, using a "),r=m(R,i),h=m(R,` of
			approximately
			`),p=m(R,n),y=m(R," seconds per point (the default from "),x(g.$$.fragment,R),_=m(R,") to sample the solution produced by the "),x(S.$$.fragment,R),H=m(R,". Importantly, note that this "),Z=m(R,D),M=m(R,` is only the one used for sampling the solution
			`),T=P(R,"I",{"data-svelte-h":!0}),W(T)!=="svelte-10nlrz4"&&(T.textContent=F),J=m(R,`
			it is generated by the IVP solver. The actual `),O=m(R,tt),G=m(R,` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),x(q.$$.fragment,R),K=m(R," is "),ot=m(R,Y),nt=m(R,`.
		`)},m(R,V){u(R,e,V),u(R,o,V),u(R,a,V),u(R,r,V),u(R,h,V),u(R,p,V),u(R,y,V),I(g,R,V),u(R,_,V),I(S,R,V),u(R,H,V),u(R,Z,V),u(R,M,V),u(R,T,V),u(R,J,V),u(R,O,V),u(R,G,V),I(q,R,V),u(R,K,V),u(R,ot,V),u(R,nt,V),lt=!0},p(R,V){const ht={};V&1&&(ht.$$scope={dirty:V,ctx:R}),g.$set(ht);const pi={};V&1&&(pi.$$scope={dirty:V,ctx:R}),S.$set(pi);const On={};V&1&&(On.$$scope={dirty:V,ctx:R}),q.$set(On)},i(R){lt||(v(g.$$.fragment,R),v(S.$$.fragment,R),v(q.$$.fragment,R),lt=!0)},o(R){b(g.$$.fragment,R),b(S.$$.fragment,R),b(q.$$.fragment,R),lt=!1},d(R){R&&(s(e),s(o),s(a),s(r),s(h),s(p),s(y),s(_),s(H),s(Z),s(M),s(T),s(J),s(O),s(G),s(K),s(ot),s(nt)),j(g,R),j(S,R),j(q,R)}}}function Wl(l){let e;return{c(){e=f("Lyapunov exponent")},l(t){e=m(t,"Lyapunov exponent")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Ol(l){let e;return{c(){e=f("dysts")},l(t){e=m(t,"dysts")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Kl(l){let e;return{c(){e=f("Lyapunov time")},l(t){e=m(t,"Lyapunov time")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Jl(l){let e,t,o,a,i,r="$\\lambda_{max}$",h,n,p="$0.8917$",y,g,_,S,H="$1.121s$",D,Z,M;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[Wl]},$$scope:{ctx:l}}}),a=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Ol]},$$scope:{ctx:l}}}),_=new B({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[Kl]},$$scope:{ctx:l}}}),{c(){e=f(`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),k(t.$$.fragment),o=f(`.
			As reported in
			`),k(a.$$.fragment),i=f(", the Lyapunov exponent, "),h=f(r),n=f(`,
			for the Lorenz Attractor is approx. `),y=f(p),g=f(", and so the "),k(_.$$.fragment),S=f(` is approx.
			`),D=f(H),Z=f(".")},l(T){e=m(T,`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),x(t.$$.fragment,T),o=m(T,`.
			As reported in
			`),x(a.$$.fragment,T),i=m(T,", the Lyapunov exponent, "),h=m(T,r),n=m(T,`,
			for the Lorenz Attractor is approx. `),y=m(T,p),g=m(T,", and so the "),x(_.$$.fragment,T),S=m(T,` is approx.
			`),D=m(T,H),Z=m(T,".")},m(T,F){u(T,e,F),I(t,T,F),u(T,o,F),I(a,T,F),u(T,i,F),u(T,h,F),u(T,n,F),u(T,y,F),u(T,g,F),I(_,T,F),u(T,S,F),u(T,D,F),u(T,Z,F),M=!0},p(T,F){const J={};F&1&&(J.$$scope={dirty:F,ctx:T}),t.$set(J);const tt={};F&1&&(tt.$$scope={dirty:F,ctx:T}),a.$set(tt);const O={};F&1&&(O.$$scope={dirty:F,ctx:T}),_.$set(O)},i(T){M||(v(t.$$.fragment,T),v(a.$$.fragment,T),v(_.$$.fragment,T),M=!0)},o(T){b(t.$$.fragment,T),b(a.$$.fragment,T),b(_.$$.fragment,T),M=!1},d(T){T&&(s(e),s(o),s(i),s(h),s(n),s(y),s(g),s(S),s(D),s(Z)),j(t,T),j(a,T),j(_,T)}}}function Xl(l){let e,t,o="on average",a,i="$e$",r,h,n="$1.121$",p,y,g="$\\frac{4}{3}$",_,S,H,D='<a href="#lyapunov">1</a>',Z;return{c(){e=f("This tells us that, "),t=L("i"),t.textContent=o,a=f(`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=f(i),h=f(` after
			`),p=f(n),y=f(` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),_=f(g),S=f(`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),H=L("sup"),H.innerHTML=D,Z=f(`, a
			defining feature of all chaotic systems.`)},l(M){e=m(M,"This tells us that, "),t=P(M,"I",{"data-svelte-h":!0}),W(t)!=="svelte-ggx8py"&&(t.textContent=o),a=m(M,`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),r=m(M,i),h=m(M,` after
			`),p=m(M,n),y=m(M,` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),_=m(M,g),S=m(M,`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),H=P(M,"SUP",{"data-svelte-h":!0}),W(H)!=="svelte-1b4twc5"&&(H.innerHTML=D),Z=m(M,`, a
			defining feature of all chaotic systems.`)},m(M,T){u(M,e,T),u(M,t,T),u(M,a,T),u(M,r,T),u(M,h,T),u(M,p,T),u(M,y,T),u(M,_,T),u(M,S,T),u(M,H,T),u(M,Z,T)},p:U,d(M){M&&(s(e),s(t),s(a),s(r),s(h),s(p),s(y),s(_),s(S),s(H),s(Z))}}}function Yl(l){let e,t="$[-9.79, -15.04, 20.53]$",o,a,i="$[0.99,1.01]$",r,h;return{c(){e=f(`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),o=f(t),a=f(` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=f(i),h=f(".")},l(n){e=m(n,`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),o=m(n,t),a=m(n,` and multiplied by a random
			perturbation uniformly sampled from the interval `),r=m(n,i),h=m(n,".")},m(n,p){u(n,e,p),u(n,o,p),u(n,a,p),u(n,r,p),u(n,h,p)},p:U,d(n){n&&(s(e),s(o),s(a),s(r),s(h))}}}function Ql(l){let e,t="$3*100 = 300$",o,a,i="$3 * (500 + 100) = 1800$",r,h;return{c(){e=f(`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),o=f(t),a=f(`, and each
			training sample's length is `),r=f(i),h=f(").")},l(n){e=m(n,`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),o=m(n,t),a=m(n,`, and each
			training sample's length is `),r=m(n,i),h=m(n,").")},m(n,p){u(n,e,p),u(n,o,p),u(n,a,p),u(n,r,p),u(n,h,p)},p:U,d(n){n&&(s(e),s(o),s(a),s(r),s(h))}}}function th(l){let e,t=`$10,000 - 600 +
		1 = 9401$`,o,a,i,r='<a href="#initial-conditions">2</a>',h;return{c(){e=f(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),o=f(t),a=f(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),i=L("sup"),i.innerHTML=r,h=f(".")},l(n){e=m(n,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),o=m(n,t),a=m(n,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),i=P(n,"SUP",{"data-svelte-h":!0}),W(i)!=="svelte-uv3gx8"&&(i.innerHTML=r),h=m(n,".")},m(n,p){u(n,e,p),u(n,o,p),u(n,a,p),u(n,i,p),u(n,h,p)},p:U,d(n){n&&(s(e),s(o),s(a),s(i),s(h))}}}function eh(l){let e;return{c(){e=f("Model 1")},l(t){e=m(t,"Model 1")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function nh(l){let e;return{c(){e=f("The full set of N-HiTS hyperparameters for the first model configuration is:")},l(t){e=m(t,"The full set of N-HiTS hyperparameters for the first model configuration is:")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ih(l){let e,t,o,a,i,r;return t=new X({props:{id:"challu"}}),a=new X({props:{id:"gilpin"}}),{c(){e=f("The model is optimized with MAE loss, consistent with the default loss from "),k(t.$$.fragment),o=f(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),k(a.$$.fragment),i=f(":")},l(h){e=m(h,"The model is optimized with MAE loss, consistent with the default loss from "),x(t.$$.fragment,h),o=m(h,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),x(a.$$.fragment,h),i=m(h,":")},m(h,n){u(h,e,n),I(t,h,n),u(h,o,n),I(a,h,n),u(h,i,n),r=!0},p:U,i(h){r||(v(t.$$.fragment,h),v(a.$$.fragment,h),r=!0)},o(h){b(t.$$.fragment,h),b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(o),s(i)),j(t,h),j(a,h)}}}function oh(l){let e;return{c(){e=f(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},l(t){e=m(t,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ah(l){let e;return{c(){e=f("Model 1 - sMAPE error distribution on the test set")},l(t){e=m(t,"Model 1 - sMAPE error distribution on the test set")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function sh(l){let e;return{c(){e=f(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},l(t){e=m(t,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function rh(l){let e;return{c(){e=f(`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},l(t){e=m(t,`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function lh(l){let e;return{c(){e=f(`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},l(t){e=m(t,`One interesting observation in all three graphs is that there appears to be a kind of
			"point of divergence" on the prediction before which the average error is very low and
			after which the error grows quickly. In the first graph, this point is about in the
			middle of the prediction, in the second it is maybe one third of the way into the
			prediction, and in the third it is near the beginning. If we look at the predictions of
			adjacent windows (see below animation), we see that the behavior at this point is
			consisent across the windows, indicating that there is something about the system's
			behavior in this region that is very difficult for this model to fit, regardless of its
			alignment within the prediction window.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function hh(l){let e;return{c(){e=f(`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},l(t){e=m(t,`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ch(l){let e;return{c(){e=f("critical points")},l(t){e=m(t,"critical points")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function fh(l){let e,t,o,a,i,r,h,n;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[ch]},$$scope:{ctx:l}}}),a=new X({props:{id:"osinga"}}),r=new X({props:{id:"osinga"}}),{c(){e=f(`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),k(t.$$.fragment),o=f(` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),k(a.$$.fragment),i=f(` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),k(r.$$.fragment),h=f(`. In fact, I would tenatively conclude that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; since this manifold defines a boundary across which trajectories can never
			pass, we can confine the past and future path of any trajectory based on the boundaries
			of this manifold.
		`)},l(p){e=m(p,`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),x(t.$$.fragment,p),o=m(p,` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),x(a.$$.fragment,p),i=m(p,` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),x(r.$$.fragment,p),h=m(p,`. In fact, I would tenatively conclude that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; since this manifold defines a boundary across which trajectories can never
			pass, we can confine the past and future path of any trajectory based on the boundaries
			of this manifold.
		`)},m(p,y){u(p,e,y),I(t,p,y),u(p,o,y),I(a,p,y),u(p,i,y),I(r,p,y),u(p,h,y),n=!0},p(p,y){const g={};y&1&&(g.$$scope={dirty:y,ctx:p}),t.$set(g)},i(p){n||(v(t.$$.fragment,p),v(a.$$.fragment,p),v(r.$$.fragment,p),n=!0)},o(p){b(t.$$.fragment,p),b(a.$$.fragment,p),b(r.$$.fragment,p),n=!1},d(p){p&&(s(e),s(o),s(i),s(h)),j(t,p),j(a,p),j(r,p)}}}function mh(l){let e;return{c(){e=f("Hartman-Grobman Theorem")},l(t){e=m(t,"Hartman-Grobman Theorem")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function uh(l){let e,t,o,a="$f(t) = \\exp(\\lambda t)x_0$",i,r,h="$\\lambda$",n,p,y="$x_0$",g,_,S="$\\approx 11.8$",H,D,Z;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem",$$slots:{default:[mh]},$$scope:{ctx:l}}}),{c(){e=f(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),k(t.$$.fragment),o=f(`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),i=f(a),r=f(`,
			where `),n=f(h),p=f(" equals the eigenvalue and "),g=f(y),_=f(` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),H=f(S),D=f(`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},l(M){e=m(M,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),x(t.$$.fragment,M),o=m(M,`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),i=m(M,a),r=m(M,`,
			where `),n=m(M,h),p=m(M," equals the eigenvalue and "),g=m(M,y),_=m(M,` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),H=m(M,S),D=m(M,`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},m(M,T){u(M,e,T),I(t,M,T),u(M,o,T),u(M,i,T),u(M,r,T),u(M,n,T),u(M,p,T),u(M,g,T),u(M,_,T),u(M,H,T),u(M,D,T),Z=!0},p(M,T){const F={};T&1&&(F.$$scope={dirty:T,ctx:M}),t.$set(F)},i(M){Z||(v(t.$$.fragment,M),Z=!0)},o(M){b(t.$$.fragment,M),Z=!1},d(M){M&&(s(e),s(o),s(i),s(r),s(n),s(p),s(g),s(_),s(H),s(D)),j(t,M)}}}function dh(l){let e;return{c(){e=f(`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},l(t){e=m(t,`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ph(l){let e;return{c(){e=f(`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},l(t){e=m(t,`Given all of this background, it is now unsurprising that the model is struggling to
			predict the behavior of the system near the origin. But we should also note that the
			model does quite well at predicting basically every other region of the system. If we
			can figure out a way to improve the predictions near the origin, then we should have a
			model with an overall very robust representation of the Lorenz Attractor. As this model
			and its training set are relatively modest in size, the next most obvious step to try is
			to significantly increase both the amount of training data and the model's capacity, and
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function $h(l){let e;return{c(){e=f("Model 2")},l(t){e=m(t,"Model 2")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function gh(l){let e;return{c(){e=f(`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},l(t){e=m(t,`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function wh(l){let e;return{c(){e=f("Model 2 vs Model 1 - sMAPE error distribution.")},l(t){e=m(t,"Model 2 vs Model 1 - sMAPE error distribution.")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function yh(l){let e;return{c(){e=f(`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},l(t){e=m(t,`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function vh(l){let e;return{c(){e=f(`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},l(t){e=m(t,`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function bh(l){let e;return{c(){e=f("Model 2 - sMAPE errors per series per window in the test set.")},l(t){e=m(t,"Model 2 - sMAPE errors per series per window in the test set.")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function _h(l){let e;return{c(){e=f(`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},l(t){e=m(t,`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function kh(l){let e;return{c(){e=f(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. DFO =
				'distance from origin'`)},l(t){e=m(t,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. DFO =
				'distance from origin'`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function xh(l){let e;return{c(){e=f(`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},l(t){e=m(t,`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Ih(l){let e,t="$n$",o,a,i="$n-1$",r,h,n="$n+1$",p,y;return{c(){e=f(`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),o=f(t),a=f(`
				that is closer to the origin than the points at `),r=f(i),h=f(" and "),p=f(n),y=f(".")},l(g){e=m(g,`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),o=m(g,t),a=m(g,`
				that is closer to the origin than the points at `),r=m(g,i),h=m(g," and "),p=m(g,n),y=m(g,".")},m(g,_){u(g,e,_),u(g,o,_),u(g,a,_),u(g,r,_),u(g,h,_),u(g,p,_),u(g,y,_)},p:U,d(g){g&&(s(e),s(o),s(a),s(r),s(h),s(p),s(y))}}}function jh(l){let e;return{c(){e=f(`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},l(t){e=m(t,`As we can clearly see from the plot, Model 2 is able to predict points that are closer
			to the origin more accurately than Model 1, so we have made some progress here. However,
			there is still a clear trend of an asymptotic increase in error as distance from the
			origin decreases. Could this be a fundamental property of the system, in which its
			predictability becomes exponentially more sensitive to error as the trajectories
			approach the origin? Or can we continue to make progress with some new model or training
			strategy?`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Mh(l){let e;return{c(){e=f("Model 3")},l(t){e=m(t,"Model 3")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Ah(l){let e;return{c(){e=f(`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},l(t){e=m(t,`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Th(l){let e;return{c(){e=f("3.1: Biased Dataset Distribution")},l(t){e=m(t,"3.1: Biased Dataset Distribution")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function zh(l){let e;return{c(){e=f("Radau solver")},l(t){e=m(t,"Radau solver")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Eh(l){let e,t,o,a="$1\\mathrm{e}{30}$",i,r,h;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[zh]},$$scope:{ctx:l}}}),{c(){e=f(`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. For example, in all of my attempts using the `),k(t.$$.fragment),o=f(` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),i=f(a),r=f(`
			after about 0.5 seconds.`)},l(n){e=m(n,`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. For example, in all of my attempts using the `),x(t.$$.fragment,n),o=m(n,` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),i=m(n,a),r=m(n,`
			after about 0.5 seconds.`)},m(n,p){u(n,e,p),I(t,n,p),u(n,o,p),u(n,i,p),u(n,r,p),h=!0},p(n,p){const y={};p&1&&(y.$$scope={dirty:p,ctx:n}),t.$set(y)},i(n){h||(v(t.$$.fragment,n),h=!0)},o(n){b(t.$$.fragment,n),h=!1},d(n){n&&(s(e),s(o),s(i),s(r)),j(t,n)}}}function Lh(l){let e,t="$t \\to \\infty$",o,a,i,r="e.g.",h,n,p;return h=new X({props:{id:"osinga"}}),{c(){e=f(`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),o=f(t),a=f(`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time could be very low. However, this theory doesn't explain why the X
			coordinate specifically would explode, while Y and Z remain in the vicinity of the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),i=L("i"),i.textContent=r,k(h.$$.fragment),n=f(`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},l(y){e=m(y,`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),o=m(y,t),a=m(y,`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time could be very low. However, this theory doesn't explain why the X
			coordinate specifically would explode, while Y and Z remain in the vicinity of the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),i=P(y,"I",{"data-svelte-h":!0}),W(i)!=="svelte-1yxphdm"&&(i.textContent=r),x(h.$$.fragment,y),n=m(y,`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},m(y,g){u(y,e,g),u(y,o,g),u(y,a,g),u(y,i,g),I(h,y,g),u(y,n,g),p=!0},p:U,i(y){p||(v(h.$$.fragment,y),p=!0)},o(y){b(h.$$.fragment,y),p=!1},d(y){y&&(s(e),s(o),s(a),s(i),s(n)),j(h,y)}}}function Ph(l){let e,t="$\\lt{3}$",o,a;return{c(){e=f(`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum
			L2-magnitude point and select the first N trajectories for inclusion in the dataset. I
			also take care to ensure that the distribution of trajectories across train, validation,
			and test sets is uniform with respect to these minimum points. When we plot the
			histogram of the windows from the dataset, grouping the windows based on their minimum
			points, we see that we've increased the number of windows in each of the groups with a
			distance from the origin `),o=f(t),a=f(`
			by a factor of about 10, while the total number of windows is the same as before:`)},l(i){e=m(i,`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum
			L2-magnitude point and select the first N trajectories for inclusion in the dataset. I
			also take care to ensure that the distribution of trajectories across train, validation,
			and test sets is uniform with respect to these minimum points. When we plot the
			histogram of the windows from the dataset, grouping the windows based on their minimum
			points, we see that we've increased the number of windows in each of the groups with a
			distance from the origin `),o=m(i,t),a=m(i,`
			by a factor of about 10, while the total number of windows is the same as before:`)},m(i,r){u(i,e,r),u(i,o,r),u(i,a,r)},p:U,d(i){i&&(s(e),s(o),s(a))}}}function Sh(l){let e;return{c(){e=f(`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},l(t){e=m(t,`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Hh(l){let e;return{c(){e=f(`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},l(t){e=m(t,`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Rh(l){let e;return{c(){e=f(`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},l(t){e=m(t,`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Ch(l){let e;return{c(){e=f(`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive costs for repairs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},l(t){e=m(t,`Possibly we might continue to see incremental improvements if we continue to increase
			the percentage of the dataset that is comprised of these tough cases, but regardless,
			there seems to be a troubling trend emerging. The model does not appear to be
			extrapolating the dynamics of the system to this particular, small region of the
			attractor where data is sparse. For many real-world use cases, this behavior could be
			cost prohibitive; for example, in a nuclear fusion reactor, data collection is currently
			relatively expensive, and a severe failure can badly damage the reactor, leading to
			massive costs for repairs. Therefore, we should explore strategies other than increasing
			dataset size to address this problem first.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Nh(l){let e,t="$dt$",o;return{c(){e=f("3.2: Reduced "),o=f(t)},l(a){e=m(a,"3.2: Reduced "),o=m(a,t)},m(a,i){u(a,e,i),u(a,o,i)},p:U,d(a){a&&(s(e),s(o))}}}function Dh(l){let e,t="$dt$",o,a,i="$dt$",r,h,n="$\\approx0.015$",p,y,g="$\\approx0.003$",_,S,H="$\\approx1.5$",D,Z,M="$2H$",T,F,J="$5H$",tt,O;return{c(){e=f("The next idea is to increase the temporal resolution of the model by using a smaller "),o=f(t),a=f(`
			to generate the data points. So far I've used a `),r=f(i),h=f(" of "),p=f(n),y=f(`. Here
			I'll try reducing that by a factor of 5 to `),_=f(g),S=f(`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),D=f(H),Z=f(`
			seconds. From tuning, I found that an input size of `),T=f(M),F=f(` performs just as well as an
			input size of `),tt=f(J),O=f(`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},l(G){e=m(G,"The next idea is to increase the temporal resolution of the model by using a smaller "),o=m(G,t),a=m(G,`
			to generate the data points. So far I've used a `),r=m(G,i),h=m(G," of "),p=m(G,n),y=m(G,`. Here
			I'll try reducing that by a factor of 5 to `),_=m(G,g),S=m(G,`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),D=m(G,H),Z=m(G,`
			seconds. From tuning, I found that an input size of `),T=m(G,M),F=m(G,` performs just as well as an
			input size of `),tt=m(G,J),O=m(G,`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},m(G,q){u(G,e,q),u(G,o,q),u(G,a,q),u(G,r,q),u(G,h,q),u(G,p,q),u(G,y,q),u(G,_,q),u(G,S,q),u(G,D,q),u(G,Z,q),u(G,T,q),u(G,F,q),u(G,tt,q),u(G,O,q)},p:U,d(G){G&&(s(e),s(o),s(a),s(r),s(h),s(p),s(y),s(_),s(S),s(D),s(Z),s(T),s(F),s(tt),s(O))}}}function Gh(l){let e;return{c(){e=f("The new hyperparameters for Model 3.2 are:")},l(t){e=m(t,"The new hyperparameters for Model 3.2 are:")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function qh(l){let e;return{c(){e=f("FSDP Strategy")},l(t){e=m(t,"FSDP Strategy")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Fh(l){let e,t,o,a,i,r;return a=new B({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[qh]},$$scope:{ctx:l}}}),{c(){e=f("A sidenote on the practicality of training this model: "),t=L("p"),o=f(`By increasing the input size and horizon length, we have significantly increased the
				memory requirement for training this model. Now in order to fit the model onto two
				GPUs with 16 GB of RAM each, I have to use Lightning's `),k(a.$$.fragment),i=f(` to distribute the model across both GPUs in order to get the per-GPU memory requirement
				to be just a hair under 16 GB. This also means that the model trains significantly more
				slowly, taking about 36 hours to converge, compared to about 16 hours for Model 2.`),this.h()},l(h){e=m(h,"A sidenote on the practicality of training this model: "),t=P(h,"P",{class:!0});var n=C(t);o=m(n,`By increasing the input size and horizon length, we have significantly increased the
				memory requirement for training this model. Now in order to fit the model onto two
				GPUs with 16 GB of RAM each, I have to use Lightning's `),x(a.$$.fragment,n),i=m(n,` to distribute the model across both GPUs in order to get the per-GPU memory requirement
				to be just a hair under 16 GB. This also means that the model trains significantly more
				slowly, taking about 36 hours to converge, compared to about 16 hours for Model 2.`),n.forEach(s),this.h()},h(){A(t,"class","ms-8")},m(h,n){u(h,e,n),u(h,t,n),d(t,o),I(a,t,null),d(t,i),r=!0},p(h,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:h}),a.$set(p)},i(h){r||(v(a.$$.fragment,h),r=!0)},o(h){b(a.$$.fragment,h),r=!1},d(h){h&&(s(e),s(t)),j(a)}}}function Zh(l){let e;return{c(){e=f(`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},l(t){e=m(t,`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Vh(l){let e;return{c(){e=f("Autoregressive Prediction")},l(t){e=m(t,"Autoregressive Prediction")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Bh(l){let e,t="$L$",o,a,i="$L$",r,h;return{c(){e=f(`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),o=f(t),a=f(`
			samples of the reference trajectory, where `),r=f(i),h=f(` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},l(n){e=m(n,`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),o=m(n,t),a=m(n,`
			samples of the reference trajectory, where `),r=m(n,i),h=m(n,` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},m(n,p){u(n,e,p),u(n,o,p),u(n,a,p),u(n,r,p),u(n,h,p)},p:U,d(n){n&&(s(e),s(o),s(a),s(r),s(h))}}}function Uh(l){let e;return{c(){e=f("shadowing lemma")},l(t){e=m(t,"shadowing lemma")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Wh(l){let e,t,o="i.e.",a,i,r,h,n="e.g.",p,y,g,_;return i=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[Uh]},$$scope:{ctx:l}}}),y=new X({props:{id:"chandramoorthy"}}),{c(){e=f(`The term "plausible trajectory" requires some explanation, given that, in principle,
			the Lorenz Attractor is fully deterministic, so every trajectory is either a solution of
			the system or it isn't, `),t=L("i"),t.textContent=o,a=f(` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),k(i.$$.fragment),r=f(` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),h=L("i"),h.textContent=n,p=z(),k(y.$$.fragment),g=f(`, challenge this notion, contending that in certain cases the
			statistics of the solver outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},l(S){e=m(S,`The term "plausible trajectory" requires some explanation, given that, in principle,
			the Lorenz Attractor is fully deterministic, so every trajectory is either a solution of
			the system or it isn't, `),t=P(S,"I",{"data-svelte-h":!0}),W(t)!=="svelte-1xx6z5c"&&(t.textContent=o),a=m(S,` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),x(i.$$.fragment,S),r=m(S,` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),h=P(S,"I",{"data-svelte-h":!0}),W(h)!=="svelte-1yxphdm"&&(h.textContent=n),p=E(S),x(y.$$.fragment,S),g=m(S,`, challenge this notion, contending that in certain cases the
			statistics of the solver outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},m(S,H){u(S,e,H),u(S,t,H),u(S,a,H),I(i,S,H),u(S,r,H),u(S,h,H),u(S,p,H),I(y,S,H),u(S,g,H),_=!0},p(S,H){const D={};H&1&&(D.$$scope={dirty:H,ctx:S}),i.$set(D)},i(S){_||(v(i.$$.fragment,S),v(y.$$.fragment,S),_=!0)},o(S){b(i.$$.fragment,S),b(y.$$.fragment,S),_=!1},d(S){S&&(s(e),s(t),s(a),s(r),s(h),s(p),s(g)),j(i,S),j(y,S)}}}function Oh(l){let e,t,o,a;return t=new X({props:{id:"chandramoorthy"}}),{c(){e=f(`In light of this, rather than evaluating the error between the solver output and the
			model output, a more meaningful criterion may be measure the similarity between certain
			statistics of the model's and the solver's outputs. In `),k(t.$$.fragment),o=f(`, the
			following statistic of the Z coordinate is used to distinguish between what the authors
			refer to as "non-physical" solutions of the Lorenz Attractor from those that are
			typical, true solutions:`)},l(i){e=m(i,`In light of this, rather than evaluating the error between the solver output and the
			model output, a more meaningful criterion may be measure the similarity between certain
			statistics of the model's and the solver's outputs. In `),x(t.$$.fragment,i),o=m(i,`, the
			following statistic of the Z coordinate is used to distinguish between what the authors
			refer to as "non-physical" solutions of the Lorenz Attractor from those that are
			typical, true solutions:`)},m(i,r){u(i,e,r),I(t,i,r),u(i,o,r),a=!0},p:U,i(i){a||(v(t.$$.fragment,i),a=!0)},o(i){b(t.$$.fragment,i),a=!1},d(i){i&&(s(e),s(o)),j(t,i)}}}function Kh(l){let e;return{c(){e=f("Radau")},l(t){e=m(t,"Radau")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Jh(l){let e;return{c(){e=f(`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},l(t){e=m(t,`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Xh(l){let e;return{c(){e=f(`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable, to the human eye,
			from the typical solver outputs:`)},l(t){e=m(t,`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable, to the human eye,
			from the typical solver outputs:`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Yh(l){let e;return{c(){e=f(`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},l(t){e=m(t,`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function Qh(l){let e;return{c(){e=f(`An autoregressive trajectory that fails to pass the eye test for being a plausible
				solution to the Lorenz Attractor`)},l(t){e=m(t,`An autoregressive trajectory that fails to pass the eye test for being a plausible
				solution to the Lorenz Attractor`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function tc(l){let e;return{c(){e=f("dysts")},l(t){e=m(t,"dysts")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ec(l){let e;return{c(){e=f("Radau")},l(t){e=m(t,"Radau")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function nc(l){let e;return{c(){e=f("RK45")},l(t){e=m(t,"RK45")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ic(l){let e,t,o,a,i,r,h,n;return t=new B({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[tc]},$$scope:{ctx:l}}}),a=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[ec]},$$scope:{ctx:l}}}),r=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[nc]},$$scope:{ctx:l}}}),{c(){e=f(`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),k(t.$$.fragment),o=f(" uses the "),k(a.$$.fragment),i=f(" solver by default, and this is what I used to generate the dataset. "),k(r.$$.fragment),h=f(` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},l(p){e=m(p,`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),x(t.$$.fragment,p),o=m(p," uses the "),x(a.$$.fragment,p),i=m(p," solver by default, and this is what I used to generate the dataset. "),x(r.$$.fragment,p),h=m(p,` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},m(p,y){u(p,e,y),I(t,p,y),u(p,o,y),I(a,p,y),u(p,i,y),I(r,p,y),u(p,h,y),n=!0},p(p,y){const g={};y&1&&(g.$$scope={dirty:y,ctx:p}),t.$set(g);const _={};y&1&&(_.$$scope={dirty:y,ctx:p}),a.$set(_);const S={};y&1&&(S.$$scope={dirty:y,ctx:p}),r.$set(S)},i(p){n||(v(t.$$.fragment,p),v(a.$$.fragment,p),v(r.$$.fragment,p),n=!0)},o(p){b(t.$$.fragment,p),b(a.$$.fragment,p),b(r.$$.fragment,p),n=!1},d(p){p&&(s(e),s(o),s(i),s(h)),j(t,p),j(a,p),j(r,p)}}}function oc(l){let e;return{c(){e=f("solve_ivp")},l(t){e=m(t,"solve_ivp")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function ac(l){let e,t,o,a;return t=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[oc]},$$scope:{ctx:l}}}),{c(){e=f(`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),k(t.$$.fragment),o=f(" is used to produce the IVP solver outputs.")},l(i){e=m(i,`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),x(t.$$.fragment,i),o=m(i," is used to produce the IVP solver outputs.")},m(i,r){u(i,e,r),I(t,i,r),u(i,o,r),a=!0},p(i,r){const h={};r&1&&(h.$$scope={dirty:r,ctx:i}),t.$set(h)},i(i){a||(v(t.$$.fragment,i),a=!0)},o(i){b(t.$$.fragment,i),a=!1},d(i){i&&(s(e),s(o)),j(t,i)}}}function sc(l){let e;return{c(){e=f(`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},l(t){e=m(t,`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function rc(l){let e;return{c(){e=f("Discussion")},l(t){e=m(t,"Discussion")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function lc(l){let e,t,o,a="$2H$",i,r,h="$H$",n,p,y;return t=new X({props:{id:"challu"}}),{c(){e=f("This project has probed the potential of the NHiTS neural architecture ("),k(t.$$.fragment),o=f(`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),i=f(a),r=f(`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=f(h),p=f(` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability for this region.`)},l(g){e=m(g,"This project has probed the potential of the NHiTS neural architecture ("),x(t.$$.fragment,g),o=m(g,`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),i=m(g,a),r=m(g,`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=m(g,h),p=m(g,` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability for this region.`)},m(g,_){u(g,e,_),I(t,g,_),u(g,o,_),u(g,i,_),u(g,r,_),u(g,n,_),u(g,p,_),y=!0},p:U,i(g){y||(v(t.$$.fragment,g),y=!0)},o(g){b(t.$$.fragment,g),y=!1},d(g){g&&(s(e),s(o),s(i),s(r),s(n),s(p)),j(t,g)}}}function hc(l){let e;return{c(){e=f(`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},l(t){e=m(t,`Similarly, when used autoregressively, the model demonstrated the potential to generate
			arbitrarily long trajectories that visually and statistically match the typical
			trajectories produced by the Radau solver for nearly all regions. But when the
			trajectories approach too close to the origin, the autoregressive output also breaks
			down, leading to solutions that visibly diverge from typical trajectories in obvious
			ways.
		`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function cc(l){let e;return{c(){e=f(`From dynamical systems theory, it is well understood that the saddle point at the
			origin of the Lorenz Attractor consists of a stable 2-d manifold and a highly unstable
			1-d manifold. What this study suggests, and what is possibly not as well established, is
			that the predictability of the Lorenz Attractor largely depends on the trajectory's
			proximity to the origin. Trajectories on the attractor that remain sufficiently far from
			the origin are easily forecast by the model with high accuracy—including the
			transitions between the orbits around each of the two non-origin fixed points. But as
			trajectories approach the origin, and their velocities approach zero, they become
			asymptotically less predictable in the time period immediately before and after their
			transit past the origin (as the minimum distance to the origin decreases, this time
			period also increases). Fortunately, such trajectories appear to occur quite rarely on
			the attractor; in my experiments, when initial conditions are selected randomly from a
			point within the attractor volume, the trajectory has about a 1% chance of passing
			within a Euclidean distance of 3 or less from the origin within its first 150 seconds.
		`)},l(t){e=m(t,`From dynamical systems theory, it is well understood that the saddle point at the
			origin of the Lorenz Attractor consists of a stable 2-d manifold and a highly unstable
			1-d manifold. What this study suggests, and what is possibly not as well established, is
			that the predictability of the Lorenz Attractor largely depends on the trajectory's
			proximity to the origin. Trajectories on the attractor that remain sufficiently far from
			the origin are easily forecast by the model with high accuracy—including the
			transitions between the orbits around each of the two non-origin fixed points. But as
			trajectories approach the origin, and their velocities approach zero, they become
			asymptotically less predictable in the time period immediately before and after their
			transit past the origin (as the minimum distance to the origin decreases, this time
			period also increases). Fortunately, such trajectories appear to occur quite rarely on
			the attractor; in my experiments, when initial conditions are selected randomly from a
			point within the attractor volume, the trajectory has about a 1% chance of passing
			within a Euclidean distance of 3 or less from the origin within its first 150 seconds.
		`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function fc(l){let e,t,o='<a href="#outliers">1</a>',a;return{c(){e=f(`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startlingly
			consistent commonality among all trajectories with non-trivial sMAPE errors: the local
			maximum of the Z coordinate in the region of the trajectory just prior to approaching
			the origin converges to a value of approximately 38.55. As the model's temporal
			resolution is increased, the bounds on this value become tighter. Remarkably, for Models
			2 and 3, a trajectory having a local maximum Z coordinate in the range of 38.45 to 38.6
			is a necessary condition for the model's sMAPE error to exceed 5 in the time period
			immediately following its transit past the origin`),t=L("sup"),t.innerHTML=o,a=f(".")},l(i){e=m(i,`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startlingly
			consistent commonality among all trajectories with non-trivial sMAPE errors: the local
			maximum of the Z coordinate in the region of the trajectory just prior to approaching
			the origin converges to a value of approximately 38.55. As the model's temporal
			resolution is increased, the bounds on this value become tighter. Remarkably, for Models
			2 and 3, a trajectory having a local maximum Z coordinate in the range of 38.45 to 38.6
			is a necessary condition for the model's sMAPE error to exceed 5 in the time period
			immediately following its transit past the origin`),t=P(i,"SUP",{"data-svelte-h":!0}),W(t)!=="svelte-1m8nv3a"&&(t.innerHTML=o),a=m(i,".")},m(i,r){u(i,e,r),u(i,t,r),u(i,a,r)},p:U,d(i){i&&(s(e),s(t),s(a))}}}function mc(l){let e,t,o="minimum",a;return{c(){e=f(`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=L("i"),t.textContent=o,a=f(`
				point that immediately follows the local maximum Z coordinate. The first graph shows
				the entire range of local maximum Z coordinates for Models 2, 3.1, and 3.2. The second
				graph zooms in on the bounds of 38.45 to 38.6.`)},l(i){e=m(i,`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=P(i,"I",{"data-svelte-h":!0}),W(t)!=="svelte-1c66z6u"&&(t.textContent=o),a=m(i,`
				point that immediately follows the local maximum Z coordinate. The first graph shows
				the entire range of local maximum Z coordinates for Models 2, 3.1, and 3.2. The second
				graph zooms in on the bounds of 38.45 to 38.6.`)},m(i,r){u(i,e,r),u(i,t,r),u(i,a,r)},p:U,d(i){i&&(s(e),s(t),s(a))}}}function uc(l){let e,t="$\\approx$",o,a;return{c(){e=f(`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is somehow associated with a single scalar value on
			the Z axis, near 38.55. As long as the local maximum Z coordinate of a trajectory in
			orbit around one of the two non-origin fixed points does not pass through a narrow
			interval around this value, we can be certain (according to the statistics of all of the
			test sets in this study) that the model will forecast the trajectory with a sMAPE error
			less than 5 indefinitely. If a trajectory's peak Z coordinate does pass through this
			interval, then the model has a roughly 60% chance of exhibiting a sMAPE error greater
			than 5 in the period immediately following the peak, until the next peak Z coordinate is
			reached. An obvious next question to ask is, how do we exploit this observation to
			improve predictability? If the system were augmented with a control input of some sort,
			then the goal could be to perturb the trajectories so that they avoid passing through
			this critical region around Z `),o=f(t),a=f(" 38.55.")},l(i){e=m(i,`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is somehow associated with a single scalar value on
			the Z axis, near 38.55. As long as the local maximum Z coordinate of a trajectory in
			orbit around one of the two non-origin fixed points does not pass through a narrow
			interval around this value, we can be certain (according to the statistics of all of the
			test sets in this study) that the model will forecast the trajectory with a sMAPE error
			less than 5 indefinitely. If a trajectory's peak Z coordinate does pass through this
			interval, then the model has a roughly 60% chance of exhibiting a sMAPE error greater
			than 5 in the period immediately following the peak, until the next peak Z coordinate is
			reached. An obvious next question to ask is, how do we exploit this observation to
			improve predictability? If the system were augmented with a control input of some sort,
			then the goal could be to perturb the trajectories so that they avoid passing through
			this critical region around Z `),o=m(i,t),a=m(i," 38.55.")},m(i,r){u(i,e,r),u(i,o,r),u(i,a,r)},p:U,d(i){i&&(s(e),s(o),s(a))}}}function dc(l){let e;return{c(){e=f(`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},l(t){e=m(t,`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function pc(l){let e;return{c(){e=f(`Additionally, it should be noted that the amount of data and model capacity needed to
			achieve these results was substantial. Roughly 100 million data points from the Lorenz
			Attractor were used to train a model with over half a billion parameters. Although these
			numbers are modest compared to many of the successful deep learning applications today,
			they are likely still far from trivial. For how many real-world chaotic systems is it
			feasible to gather 100 million low-noise data points? And could such a large model be
			optimized to run predictions in real-time for systems that require it to?`)},l(t){e=m(t,`Additionally, it should be noted that the amount of data and model capacity needed to
			achieve these results was substantial. Roughly 100 million data points from the Lorenz
			Attractor were used to train a model with over half a billion parameters. Although these
			numbers are modest compared to many of the successful deep learning applications today,
			they are likely still far from trivial. For how many real-world chaotic systems is it
			feasible to gather 100 million low-noise data points? And could such a large model be
			optimized to run predictions in real-time for systems that require it to?`)},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function $c(l){let e;return{c(){e=f("shadowing lemma")},l(t){e=m(t,"shadowing lemma")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function gc(l){let e,t,o,a,i,r,h="IVP solver",n,p,y,g;return t=new B({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[$c]},$$scope:{ctx:l}}}),a=new X({props:{id:"chandramoorthy"}}),p=new X({props:{id:"chandramoorthy"}}),{c(){e=f("I'll close with a reflection on the implications of the "),k(t.$$.fragment),o=f(" and research such as "),k(a.$$.fragment),i=f(` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, are more accurately described as approximations
			of the
			`),r=L("i"),r.textContent=h,n=f(`
			rather than the true, mathematical idealization of the Lorenz Attractor represented by the
			ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),k(p.$$.fragment),y=f(` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},l(_){e=m(_,"I'll close with a reflection on the implications of the "),x(t.$$.fragment,_),o=m(_," and research such as "),x(a.$$.fragment,_),i=m(_,` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, are more accurately described as approximations
			of the
			`),r=P(_,"I",{"data-svelte-h":!0}),W(r)!=="svelte-17gf2g4"&&(r.textContent=h),n=m(_,`
			rather than the true, mathematical idealization of the Lorenz Attractor represented by the
			ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),x(p.$$.fragment,_),y=m(_,` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},m(_,S){u(_,e,S),I(t,_,S),u(_,o,S),I(a,_,S),u(_,i,S),u(_,r,S),u(_,n,S),I(p,_,S),u(_,y,S),g=!0},p(_,S){const H={};S&1&&(H.$$scope={dirty:S,ctx:_}),t.$set(H)},i(_){g||(v(t.$$.fragment,_),v(a.$$.fragment,_),v(p.$$.fragment,_),g=!0)},o(_){b(t.$$.fragment,_),b(a.$$.fragment,_),b(p.$$.fragment,_),g=!1},d(_){_&&(s(e),s(o),s(i),s(r),s(n),s(y)),j(t,_),j(a,_),j(p,_)}}}function wc(l){let e;return{c(){e=f("References")},l(t){e=m(t,"References")},m(t,o){u(t,e,o)},d(t){t&&s(e)}}}function yc(l){let e,t,o,a,i,r,h,n,p,y,g,_,S="Michael Horgan",H,D,Z,M,T,F,J,tt,O,G,q,K,Y,ot,nt,lt,R,V,ht,pi=`<sup id="paperspace">2. All of my experiments were run on a Paperspace VM using two RTX 5000s, each
					with 16 GB of RAM.</sup>`,On,$i,dt,Gi,pt,qi,Fi,$t,Zi,gt,Vi,Kn,Qe,tn,wt,Oa,Bi,yt,Ui,vt,Wi,Jn,gi,Ka=sl+"",Oi,Ki,bt,Ji,Xn,wi,Ja=rl+"",Xi,Yi,_t,kt,Qi,xt,to,It,eo,jt,no,Mt,io,At,oo,Tt,zt,Et,Lt,ao,Yn,yi,Xa=ll+"",so,ro,Pt,lo,St,ho,Ht,co,Rt,fo,en,Ya=`<p><sup id="lyapunov">1. Although initially the distance will grow exponentially, the maximum
					separation between trajectories is also bounded by the fact that all
					trajectories remain on the attractor.</sup></p> <p><sup id="initial-conditions">2. In the course of this project, I experimented with several different methods
					for generating trajectories, but I still have some open questions about the best
					way to generate a dataset that effectively samples the phase space, <i>e.g.</i> how
					to choose the initial conditions, how to choose the number of unique initial conditions
					vs. to the total trajectory length, etc.</sup></p>`,mo,Ct,uo,Nt,po,nn,$o,Dt,go,vi,Qa=hl+"",wo,yo,Gt,vo,qt,on,ts,bo,Ft,_o,Zt,ko,Vt,an,es=`<img class="object-contain max-w-80" src="${`${Q}/Model1SmallErr.png`}" alt="Model 1 - small error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1MediumErr.png`}" alt="Model 1 - medium error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1LargeErr.png`}" alt="Model 1 - large error example"/>`,xo,Bt,Io,Ut,jo,Wt,sn,ns,Mo,Ot,Ao,Kt,Jt,To,Xt,ct,is,zo,Yt,Eo,Qt,Lo,te,Po,ee,So,rn,Ho,ln,os=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
			increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of
			the network, and I've also significantly increased the amount of compression in the
			initial stacks. Because the network is much deeper, I also added layer normalization
			after each block to try to help reduce convergence time. Lastly, I increased the number
			of training steps and reduced the initial learning rate by an order of magnitude, and I
			modified the learning rate schedule to reduce by half whenever the validation loss does
			not decrease from the previous validation step.`,Ro,hn,cn,as,ne,Co,ie,oe,No,fn,mn,ss,ae,Do,se,Go,re,un,rs,qo,le,Fo,he,Zo,dn,pn,ls,ce,Vo,fe,Bo,me,Uo,ue,Wo,de,Oo,pe,$e,ge,Ko,$n,gn,hs,we,Jo,wn,Xo,cs="$\\le{5}$",Yo,Qo,ta,ye,ea,yn,vn,fs,ve,na,be,ia,_e,oa,ke,aa,xe,sa,bn,ra,Ie,la,je,ha,ms="$dt \\approx 0.003$",ca,fa,ma,_n,kn,us,Me,ua,Qn,ds=`Here again we see a very marginal improvement but no clear evidence that this approach
			may lead to a fully stable model (<i>i.e.</i> one without an asymptotic error curve). Reducing
			the temporal resolution of the model further will drastically increase the computational
			requirements of training, which are beyond my budget, so I must conclude this avenue of investigation
			here.`,da,Ae,pa,Te,ze,Ee,ps=cl+"",$a,ga,xn,wa,Le,ya,va,In,jn,$s,Pe,ba,ft,_a,gs="$z \\approx 0.4$",ka,xa,ws="$z \\approx 1.35$",Ia,ja,Ma,Se,Aa,Mn,An,ys,He,Ta,ti,vs=`However, if we search for the model trajectories that pass closest to the origin, we
			find examples where the model output breaks down badly:`,za,Tn,zn,bs,Re,Ea,Ce,La,Ne,En,_s,Pa,De,Sa,Ge,Ha,qe,Ra,Fe,Ze,Ve,Be,Ca,Ue,Ln,ks=`<img class="object-contain max-w-xl" src="${`${Q}/max_z.png`}" alt="Model 3 - maxium Z coordinate error distribution"/> <img class="object-contain max-w-xl" src="${`${Q}/max_z_zoomed.png`}" alt="maximum Z coordinate error distribution zoomed"/>`,Na,We,Da,Oe,Ga,Ke,qa,Je,Fa,Xe,Za,Pn,xs=`<p><sup id="outliers">1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose <i>second-to-last</i>
					local maximum Z coordinate passes through the 38.55 boundary region, and whose associated
					local minimum point is so small—0.49, the smallest encountered in all of the
					training sets that were generated for this study—that the highly unstable conditions
					in the region adversely affect not only the prediction accuracy when the local minimum
					is within the horizon window, but also when it is within the input window of the
					model.</sup></p>`,Va,Ye,Ba,Sn,Ci;return e=new al({}),o=new pl({}),r=new il({}),F=new B({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[$l]},$$scope:{ctx:l}}}),O=new N({props:{$$slots:{default:[gl]},$$scope:{ctx:l}}}),G=new N({props:{$$slots:{default:[wl]},$$scope:{ctx:l}}}),q=new N({props:{$$slots:{default:[yl]},$$scope:{ctx:l}}}),R=new B({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[vl]},$$scope:{ctx:l}}}),pt=new B({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[bl]},$$scope:{ctx:l}}}),$t=new Pi({props:{id:"lorenz",$$slots:{default:[_l]},$$scope:{ctx:l}}}),gt=new N({props:{$$slots:{default:[jl]},$$scope:{ctx:l}}}),yt=new et({props:{$$slots:{default:[Ml]},$$scope:{ctx:l}}}),vt=new N({props:{$$slots:{default:[Al]},$$scope:{ctx:l}}}),bt=new N({props:{$$slots:{default:[El]},$$scope:{ctx:l}}}),_t=new N({props:{$$slots:{default:[Pl]},$$scope:{ctx:l}}}),kt=new N({props:{$$slots:{default:[Hl]},$$scope:{ctx:l}}}),xt=new Pi({props:{id:"nhits",$$slots:{default:[Rl]},$$scope:{ctx:l}}}),It=new N({props:{$$slots:{default:[Cl]},$$scope:{ctx:l}}}),jt=new N({props:{$$slots:{default:[Nl]},$$scope:{ctx:l}}}),Mt=new N({props:{$$slots:{default:[Dl]},$$scope:{ctx:l}}}),At=new Pi({props:{id:"experiments",$$slots:{default:[Gl]},$$scope:{ctx:l}}}),Tt=new N({props:{$$slots:{default:[ql]},$$scope:{ctx:l}}}),zt=new Si({props:{id:"datagen",$$slots:{default:[Fl]},$$scope:{ctx:l}}}),Et=new N({props:{$$slots:{default:[Ul]},$$scope:{ctx:l}}}),Lt=new N({props:{$$slots:{default:[Jl]},$$scope:{ctx:l}}}),Pt=new N({props:{indent:"indent-0",$$slots:{default:[Xl]},$$scope:{ctx:l}}}),St=new N({props:{$$slots:{default:[Yl]},$$scope:{ctx:l}}}),Ht=new N({props:{indent:"indent-0",$$slots:{default:[Ql]},$$scope:{ctx:l}}}),Rt=new N({props:{$$slots:{default:[th]},$$scope:{ctx:l}}}),Ct=new Si({props:{id:"model-1",$$slots:{default:[eh]},$$scope:{ctx:l}}}),Nt=new N({props:{$$slots:{default:[nh]},$$scope:{ctx:l}}}),nn=new Ua({props:{hps:fl}}),Dt=new N({props:{indent:"indent-0",$$slots:{default:[ih]},$$scope:{ctx:l}}}),Gt=new N({props:{$$slots:{default:[oh]},$$scope:{ctx:l}}}),Ft=new et({props:{$$slots:{default:[ah]},$$scope:{ctx:l}}}),Zt=new N({props:{$$slots:{default:[sh]},$$scope:{ctx:l}}}),Bt=new et({props:{$$slots:{default:[rh]},$$scope:{ctx:l}}}),Ut=new N({props:{$$slots:{default:[lh]},$$scope:{ctx:l}}}),Ot=new et({props:{$$slots:{default:[hh]},$$scope:{ctx:l}}}),Kt=new N({props:{$$slots:{default:[fh]},$$scope:{ctx:l}}}),Jt=new N({props:{$$slots:{default:[uh]},$$scope:{ctx:l}}}),Yt=new et({props:{$$slots:{default:[dh]},$$scope:{ctx:l}}}),Qt=new N({props:{$$slots:{default:[ph]},$$scope:{ctx:l}}}),te=new Si({props:{id:"model-2",$$slots:{default:[$h]},$$scope:{ctx:l}}}),ee=new N({props:{$$slots:{default:[gh]},$$scope:{ctx:l}}}),rn=new Ua({props:{hps:ml}}),ne=new et({props:{$$slots:{default:[wh]},$$scope:{ctx:l}}}),ie=new N({props:{$$slots:{default:[yh]},$$scope:{ctx:l}}}),oe=new N({props:{$$slots:{default:[vh]},$$scope:{ctx:l}}}),ae=new et({props:{$$slots:{default:[bh]},$$scope:{ctx:l}}}),se=new N({props:{$$slots:{default:[_h]},$$scope:{ctx:l}}}),le=new et({props:{$$slots:{default:[kh]},$$scope:{ctx:l}}}),he=new N({props:{$$slots:{default:[xh]},$$scope:{ctx:l}}}),ce=new et({props:{$$slots:{default:[Ih]},$$scope:{ctx:l}}}),fe=new N({props:{$$slots:{default:[jh]},$$scope:{ctx:l}}}),me=new Si({props:{id:"model-3",$$slots:{default:[Mh]},$$scope:{ctx:l}}}),ue=new N({props:{$$slots:{default:[Ah]},$$scope:{ctx:l}}}),de=new kr({props:{$$slots:{default:[Th]},$$scope:{ctx:l}}}),pe=new N({props:{$$slots:{default:[Eh]},$$scope:{ctx:l}}}),$e=new N({props:{$$slots:{default:[Lh]},$$scope:{ctx:l}}}),ge=new N({props:{$$slots:{default:[Ph]},$$scope:{ctx:l}}}),we=new et({props:{$$slots:{default:[Sh]},$$scope:{ctx:l}}}),ye=new N({props:{$$slots:{default:[Hh]},$$scope:{ctx:l}}}),ve=new et({props:{$$slots:{default:[Rh]},$$scope:{ctx:l}}}),be=new N({props:{$$slots:{default:[Ch]},$$scope:{ctx:l}}}),_e=new kr({props:{$$slots:{default:[Nh]},$$scope:{ctx:l}}}),ke=new N({props:{$$slots:{default:[Dh]},$$scope:{ctx:l}}}),xe=new N({props:{$$slots:{default:[Gh]},$$scope:{ctx:l}}}),bn=new Ua({props:{hps:ul}}),Ie=new N({props:{style:"my-4 text-xs font-serif",$$slots:{default:[Fh]},$$scope:{ctx:l}}}),Me=new et({props:{$$slots:{default:[Zh]},$$scope:{ctx:l}}}),Ae=new Si({props:{id:"arpred",$$slots:{default:[Vh]},$$scope:{ctx:l}}}),Te=new N({props:{$$slots:{default:[Bh]},$$scope:{ctx:l}}}),ze=new N({props:{$$slots:{default:[Wh]},$$scope:{ctx:l}}}),Ee=new N({props:{$$slots:{default:[Oh]},$$scope:{ctx:l}}}),Le=new B({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Kh]},$$scope:{ctx:l}}}),Pe=new et({props:{$$slots:{default:[Jh]},$$scope:{ctx:l}}}),Se=new N({props:{$$slots:{default:[Xh]},$$scope:{ctx:l}}}),He=new et({props:{$$slots:{default:[Yh]},$$scope:{ctx:l}}}),Re=new et({props:{$$slots:{default:[Qh]},$$scope:{ctx:l}}}),Ce=new N({props:{$$slots:{default:[ic]},$$scope:{ctx:l}}}),De=new et({props:{$$slots:{default:[ac]},$$scope:{ctx:l}}}),Ge=new N({props:{$$slots:{default:[sc]},$$scope:{ctx:l}}}),qe=new Pi({props:{id:"discussion",$$slots:{default:[rc]},$$scope:{ctx:l}}}),Fe=new N({props:{$$slots:{default:[lc]},$$scope:{ctx:l}}}),Ze=new N({props:{$$slots:{default:[hc]},$$scope:{ctx:l}}}),Ve=new N({props:{$$slots:{default:[cc]},$$scope:{ctx:l}}}),Be=new N({props:{$$slots:{default:[fc]},$$scope:{ctx:l}}}),We=new et({props:{$$slots:{default:[mc]},$$scope:{ctx:l}}}),Oe=new N({props:{$$slots:{default:[uc]},$$scope:{ctx:l}}}),Ke=new N({props:{$$slots:{default:[dc]},$$scope:{ctx:l}}}),Je=new N({props:{$$slots:{default:[pc]},$$scope:{ctx:l}}}),Xe=new N({props:{$$slots:{default:[gc]},$$scope:{ctx:l}}}),Ye=new Pi({props:{id:"references",$$slots:{default:[wc]},$$scope:{ctx:l}}}),Sn=new Nr({}),{c(){k(e.$$.fragment),t=z(),k(o.$$.fragment),a=z(),i=L("div"),k(r.$$.fragment),h=z(),n=L("div"),p=L("div"),y=f(Ri),g=z(),_=L("div"),_.textContent=S,H=z(),D=L("br"),Z=z(),M=L("div"),T=f("(All code used in this project is available in the github repo: "),k(F.$$.fragment),J=f(")"),tt=z(),k(O.$$.fragment),k(G.$$.fragment),k(q.$$.fragment),K=z(),Y=L("div"),ot=L("p"),nt=L("sup"),lt=f(`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),k(R.$$.fragment),V=z(),ht=L("p"),ht.innerHTML=pi,On=z(),$i=L("p"),dt=L("sup"),Gi=f(`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),k(pt.$$.fragment),qi=f(" on the subject"),Fi=z(),k($t.$$.fragment),Zi=z(),k(gt.$$.fragment),Vi=z(),Kn=L("div"),Qe=L("a"),tn=L("figure"),wt=L("img"),Bi=z(),k(yt.$$.fragment),Ui=z(),k(vt.$$.fragment),Wi=z(),Jn=L("div"),gi=L("p"),Oi=f(Ka),Ki=z(),k(bt.$$.fragment),Ji=z(),Xn=L("div"),wi=L("p"),Xi=f(Ja),Yi=z(),k(_t.$$.fragment),k(kt.$$.fragment),Qi=z(),k(xt.$$.fragment),to=z(),k(It.$$.fragment),eo=z(),k(jt.$$.fragment),no=z(),k(Mt.$$.fragment),io=z(),k(At.$$.fragment),oo=z(),k(Tt.$$.fragment),k(zt.$$.fragment),k(Et.$$.fragment),k(Lt.$$.fragment),ao=z(),Yn=L("div"),yi=L("p"),so=f(Xa),ro=z(),k(Pt.$$.fragment),lo=z(),k(St.$$.fragment),ho=z(),k(Ht.$$.fragment),co=z(),k(Rt.$$.fragment),fo=z(),en=L("div"),en.innerHTML=Ya,mo=z(),k(Ct.$$.fragment),uo=z(),k(Nt.$$.fragment),po=z(),k(nn.$$.fragment),$o=z(),k(Dt.$$.fragment),go=z(),vi=L("div"),wo=f(Qa),yo=z(),k(Gt.$$.fragment),vo=z(),qt=L("figure"),on=L("img"),bo=z(),k(Ft.$$.fragment),_o=z(),k(Zt.$$.fragment),ko=z(),Vt=L("figure"),an=L("div"),an.innerHTML=es,xo=z(),k(Bt.$$.fragment),Io=z(),k(Ut.$$.fragment),jo=z(),Wt=L("figure"),sn=L("img"),Mo=z(),k(Ot.$$.fragment),Ao=z(),k(Kt.$$.fragment),k(Jt.$$.fragment),To=z(),Xt=L("figure"),ct=L("img"),zo=z(),k(Yt.$$.fragment),Eo=z(),k(Qt.$$.fragment),Lo=z(),k(te.$$.fragment),Po=z(),k(ee.$$.fragment),So=z(),k(rn.$$.fragment),Ho=z(),ln=L("p"),ln.textContent=os,Ro=z(),hn=L("figure"),cn=L("img"),k(ne.$$.fragment),Co=z(),k(ie.$$.fragment),k(oe.$$.fragment),No=z(),fn=L("figure"),mn=L("img"),k(ae.$$.fragment),Do=z(),k(se.$$.fragment),Go=z(),re=L("figure"),un=L("img"),qo=z(),k(le.$$.fragment),Fo=z(),k(he.$$.fragment),Zo=z(),dn=L("figure"),pn=L("img"),k(ce.$$.fragment),Vo=z(),k(fe.$$.fragment),Bo=z(),k(me.$$.fragment),Uo=z(),k(ue.$$.fragment),Wo=z(),k(de.$$.fragment),Oo=z(),k(pe.$$.fragment),k($e.$$.fragment),k(ge.$$.fragment),Ko=z(),$n=L("figure"),gn=L("img"),k(we.$$.fragment),Jo=z(),wn=L("p"),Xo=f("Still, with these 10x increases, the trajectories that pass within an L2 distance "),Yo=f(cs),Qo=f(`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),ta=z(),k(ye.$$.fragment),ea=z(),yn=L("figure"),vn=L("img"),k(ve.$$.fragment),na=z(),k(be.$$.fragment),ia=z(),k(_e.$$.fragment),oa=z(),k(ke.$$.fragment),aa=z(),k(xe.$$.fragment),sa=z(),k(bn.$$.fragment),ra=z(),k(Ie.$$.fragment),la=z(),je=L("p"),ha=f("After retraining with "),ca=f(ms),fa=f(`, we again see a very slight improvement
			over the previous models:`),ma=z(),_n=L("figure"),kn=L("img"),k(Me.$$.fragment),ua=z(),Qn=L("p"),Qn.innerHTML=ds,da=z(),k(Ae.$$.fragment),pa=z(),k(Te.$$.fragment),k(ze.$$.fragment),k(Ee.$$.fragment),$a=f(ps),ga=z(),xn=L("p"),wa=f("Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),k(Le.$$.fragment),ya=f(" solver's outputs:"),va=z(),In=L("figure"),jn=L("img"),k(Pe.$$.fragment),ba=z(),ft=L("p"),_a=f(`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),ka=f(gs),xa=f(" for the solver compared to "),Ia=f(ws),ja=f(`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),Ma=z(),k(Se.$$.fragment),Aa=z(),Mn=L("figure"),An=L("img"),k(He.$$.fragment),Ta=z(),ti=L("p"),ti.textContent=vs,za=z(),Tn=L("figure"),zn=L("img"),k(Re.$$.fragment),Ea=z(),k(Ce.$$.fragment),La=z(),Ne=L("figure"),En=L("img"),Pa=z(),k(De.$$.fragment),Sa=z(),k(Ge.$$.fragment),Ha=z(),k(qe.$$.fragment),Ra=z(),k(Fe.$$.fragment),k(Ze.$$.fragment),k(Ve.$$.fragment),k(Be.$$.fragment),Ca=z(),Ue=L("figure"),Ln=L("div"),Ln.innerHTML=ks,Na=z(),k(We.$$.fragment),Da=z(),k(Oe.$$.fragment),Ga=z(),k(Ke.$$.fragment),qa=z(),k(Je.$$.fragment),Fa=z(),k(Xe.$$.fragment),Za=z(),Pn=L("div"),Pn.innerHTML=xs,Va=z(),k(Ye.$$.fragment),Ba=z(),k(Sn.$$.fragment),this.h()},l(c){x(e.$$.fragment,c),t=E(c),x(o.$$.fragment,c),a=E(c),i=P(c,"DIV",{class:!0});var w=C(i);x(r.$$.fragment,w),h=E(w),n=P(w,"DIV",{class:!0});var $=C(n);p=P($,"DIV",{id:!0,class:!0});var bi=C(p);y=m(bi,Ri),bi.forEach(s),g=E($),_=P($,"DIV",{class:!0,"data-svelte-h":!0}),W(_)!=="svelte-hve5fy"&&(_.textContent=S),H=E($),D=P($,"BR",{}),Z=E($),M=P($,"DIV",{class:!0});var Hn=C(M);T=m(Hn,"(All code used in this project is available in the github repo: "),x(F.$$.fragment,Hn),J=m(Hn,")"),Hn.forEach(s),tt=E($),x(O.$$.fragment,$),x(G.$$.fragment,$),x(q.$$.fragment,$),K=E($),Y=P($,"DIV",{class:!0});var mt=C(Y);ot=P(mt,"P",{});var _i=C(ot);nt=P(_i,"SUP",{id:!0});var ei=C(nt);lt=m(ei,`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),x(R.$$.fragment,ei),ei.forEach(s),_i.forEach(s),V=E(mt),ht=P(mt,"P",{"data-svelte-h":!0}),W(ht)!=="svelte-7qdhvn"&&(ht.innerHTML=pi),On=E(mt),$i=P(mt,"P",{});var ki=C($i);dt=P(ki,"SUP",{id:!0});var Rn=C(dt);Gi=m(Rn,`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),x(pt.$$.fragment,Rn),qi=m(Rn," on the subject"),Rn.forEach(s),ki.forEach(s),mt.forEach(s),Fi=E($),x($t.$$.fragment,$),Zi=E($),x(gt.$$.fragment,$),Vi=E($),Kn=P($,"DIV",{class:!0});var xi=C(Kn);Qe=P(xi,"A",{title:!0,href:!0});var Ii=C(Qe);tn=P(Ii,"FIGURE",{});var Cn=C(tn);wt=P(Cn,"IMG",{class:!0,width:!0,alt:!0,src:!0}),Bi=E(Cn),x(yt.$$.fragment,Cn),Cn.forEach(s),Ii.forEach(s),xi.forEach(s),Ui=E($),x(vt.$$.fragment,$),Wi=E($),Jn=P($,"DIV",{class:!0});var ji=C(Jn);gi=P(ji,"P",{});var Mi=C(gi);Oi=m(Mi,Ka),Mi.forEach(s),ji.forEach(s),Ki=E($),x(bt.$$.fragment,$),Ji=E($),Xn=P($,"DIV",{class:!0});var Ai=C(Xn);wi=P(Ai,"P",{});var Ti=C(wi);Xi=m(Ti,Ja),Ti.forEach(s),Ai.forEach(s),Yi=E($),x(_t.$$.fragment,$),x(kt.$$.fragment,$),Qi=E($),x(xt.$$.fragment,$),to=E($),x(It.$$.fragment,$),eo=E($),x(jt.$$.fragment,$),no=E($),x(Mt.$$.fragment,$),io=E($),x(At.$$.fragment,$),oo=E($),x(Tt.$$.fragment,$),x(zt.$$.fragment,$),x(Et.$$.fragment,$),x(Lt.$$.fragment,$),ao=E($),Yn=P($,"DIV",{class:!0});var zi=C(Yn);yi=P(zi,"P",{});var Ei=C(yi);so=m(Ei,Xa),Ei.forEach(s),zi.forEach(s),ro=E($),x(Pt.$$.fragment,$),lo=E($),x(St.$$.fragment,$),ho=E($),x(Ht.$$.fragment,$),co=E($),x(Rt.$$.fragment,$),fo=E($),en=P($,"DIV",{class:!0,"data-svelte-h":!0}),W(en)!=="svelte-a9h7x4"&&(en.innerHTML=Ya),mo=E($),x(Ct.$$.fragment,$),uo=E($),x(Nt.$$.fragment,$),po=E($),x(nn.$$.fragment,$),$o=E($),x(Dt.$$.fragment,$),go=E($),vi=P($,"DIV",{});var Li=C(vi);wo=m(Li,Qa),Li.forEach(s),yo=E($),x(Gt.$$.fragment,$),vo=E($),qt=P($,"FIGURE",{class:!0});var Nn=C(qt);on=P(Nn,"IMG",{class:!0,src:!0,alt:!0}),bo=E(Nn),x(Ft.$$.fragment,Nn),Nn.forEach(s),_o=E($),x(Zt.$$.fragment,$),ko=E($),Vt=P($,"FIGURE",{class:!0});var Dn=C(Vt);an=P(Dn,"DIV",{class:!0,"data-svelte-h":!0}),W(an)!=="svelte-u7ima0"&&(an.innerHTML=es),xo=E(Dn),x(Bt.$$.fragment,Dn),Dn.forEach(s),Io=E($),x(Ut.$$.fragment,$),jo=E($),Wt=P($,"FIGURE",{class:!0});var Gn=C(Wt);sn=P(Gn,"IMG",{class:!0,src:!0,alt:!0}),Mo=E(Gn),x(Ot.$$.fragment,Gn),Gn.forEach(s),Ao=E($),x(Kt.$$.fragment,$),x(Jt.$$.fragment,$),To=E($),Xt=P($,"FIGURE",{class:!0});var qn=C(Xt);ct=P(qn,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),zo=E(qn),x(Yt.$$.fragment,qn),qn.forEach(s),Eo=E($),x(Qt.$$.fragment,$),Lo=E($),x(te.$$.fragment,$),Po=E($),x(ee.$$.fragment,$),So=E($),x(rn.$$.fragment,$),Ho=E($),ln=P($,"P",{class:!0,"data-svelte-h":!0}),W(ln)!=="svelte-8lzr6y"&&(ln.textContent=os),Ro=E($),hn=P($,"FIGURE",{class:!0});var ni=C(hn);cn=P(ni,"IMG",{class:!0,src:!0,alt:!0}),x(ne.$$.fragment,ni),ni.forEach(s),Co=E($),x(ie.$$.fragment,$),x(oe.$$.fragment,$),No=E($),fn=P($,"FIGURE",{class:!0});var ii=C(fn);mn=P(ii,"IMG",{class:!0,src:!0,alt:!0}),x(ae.$$.fragment,ii),ii.forEach(s),Do=E($),x(se.$$.fragment,$),Go=E($),re=P($,"FIGURE",{class:!0});var Fn=C(re);un=P(Fn,"IMG",{class:!0,src:!0,alt:!0}),qo=E(Fn),x(le.$$.fragment,Fn),Fn.forEach(s),Fo=E($),x(he.$$.fragment,$),Zo=E($),dn=P($,"FIGURE",{class:!0});var oi=C(dn);pn=P(oi,"IMG",{class:!0,src:!0,alt:!0}),x(ce.$$.fragment,oi),oi.forEach(s),Vo=E($),x(fe.$$.fragment,$),Bo=E($),x(me.$$.fragment,$),Uo=E($),x(ue.$$.fragment,$),Wo=E($),x(de.$$.fragment,$),Oo=E($),x(pe.$$.fragment,$),x($e.$$.fragment,$),x(ge.$$.fragment,$),Ko=E($),$n=P($,"FIGURE",{class:!0});var ai=C($n);gn=P(ai,"IMG",{class:!0,src:!0,alt:!0}),x(we.$$.fragment,ai),ai.forEach(s),Jo=E($),wn=P($,"P",{});var Zn=C(wn);Xo=m(Zn,"Still, with these 10x increases, the trajectories that pass within an L2 distance "),Yo=m(Zn,cs),Qo=m(Zn,`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),Zn.forEach(s),ta=E($),x(ye.$$.fragment,$),ea=E($),yn=P($,"FIGURE",{class:!0});var si=C(yn);vn=P(si,"IMG",{class:!0,src:!0,alt:!0}),x(ve.$$.fragment,si),si.forEach(s),na=E($),x(be.$$.fragment,$),ia=E($),x(_e.$$.fragment,$),oa=E($),x(ke.$$.fragment,$),aa=E($),x(xe.$$.fragment,$),sa=E($),x(bn.$$.fragment,$),ra=E($),x(Ie.$$.fragment,$),la=E($),je=P($,"P",{class:!0});var Vn=C(je);ha=m(Vn,"After retraining with "),ca=m(Vn,ms),fa=m(Vn,`, we again see a very slight improvement
			over the previous models:`),Vn.forEach(s),ma=E($),_n=P($,"FIGURE",{class:!0});var ri=C(_n);kn=P(ri,"IMG",{class:!0,src:!0,alt:!0}),x(Me.$$.fragment,ri),ri.forEach(s),ua=E($),Qn=P($,"P",{"data-svelte-h":!0}),W(Qn)!=="svelte-iuzfox"&&(Qn.innerHTML=ds),da=E($),x(Ae.$$.fragment,$),pa=E($),x(Te.$$.fragment,$),x(ze.$$.fragment,$),x(Ee.$$.fragment,$),$a=m($,ps),ga=E($),xn=P($,"P",{});var Bn=C(xn);wa=m(Bn,"Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),x(Le.$$.fragment,Bn),ya=m(Bn," solver's outputs:"),Bn.forEach(s),va=E($),In=P($,"FIGURE",{class:!0});var li=C(In);jn=P(li,"IMG",{class:!0,src:!0,alt:!0}),x(Pe.$$.fragment,li),li.forEach(s),ba=E($),ft=P($,"P",{});var ut=C(ft);_a=m(ut,`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),ka=m(ut,gs),xa=m(ut," for the solver compared to "),Ia=m(ut,ws),ja=m(ut,`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),ut.forEach(s),Ma=E($),x(Se.$$.fragment,$),Aa=E($),Mn=P($,"FIGURE",{class:!0});var hi=C(Mn);An=P(hi,"IMG",{class:!0,src:!0,alt:!0}),x(He.$$.fragment,hi),hi.forEach(s),Ta=E($),ti=P($,"P",{"data-svelte-h":!0}),W(ti)!=="svelte-8ial96"&&(ti.textContent=vs),za=E($),Tn=P($,"FIGURE",{class:!0});var ci=C(Tn);zn=P(ci,"IMG",{class:!0,src:!0,alt:!0}),x(Re.$$.fragment,ci),ci.forEach(s),Ea=E($),x(Ce.$$.fragment,$),La=E($),Ne=P($,"FIGURE",{class:!0});var Un=C(Ne);En=P(Un,"IMG",{class:!0,src:!0,alt:!0}),Pa=E(Un),x(De.$$.fragment,Un),Un.forEach(s),Sa=E($),x(Ge.$$.fragment,$),Ha=E($),x(qe.$$.fragment,$),Ra=E($),x(Fe.$$.fragment,$),x(Ze.$$.fragment,$),x(Ve.$$.fragment,$),x(Be.$$.fragment,$),Ca=E($),Ue=P($,"FIGURE",{class:!0});var Wn=C(Ue);Ln=P(Wn,"DIV",{class:!0,"data-svelte-h":!0}),W(Ln)!=="svelte-7nfv6s"&&(Ln.innerHTML=ks),Na=E(Wn),x(We.$$.fragment,Wn),Wn.forEach(s),Da=E($),x(Oe.$$.fragment,$),Ga=E($),x(Ke.$$.fragment,$),qa=E($),x(Je.$$.fragment,$),Fa=E($),x(Xe.$$.fragment,$),Za=E($),Pn=P($,"DIV",{class:!0,"data-svelte-h":!0}),W(Pn)!=="svelte-1fdz5l6"&&(Pn.innerHTML=xs),Va=E($),x(Ye.$$.fragment,$),Ba=E($),x(Sn.$$.fragment,$),$.forEach(s),w.forEach(s),this.h()},h(){A(p,"id","intro"),A(p,"class","mt-8 text-2xl text-center"),A(_,"class","mt-2 text-sm text-center"),A(M,"class","text-sm text-center font-serif mb-4"),A(nt,"id","sabine"),A(dt,"id","brunton"),A(Y,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(wt,"class","m-auto"),A(wt,"width","128"),A(wt,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),it(wt.src,Oa="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||A(wt,"src",Oa),A(Qe,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),A(Qe,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),A(Kn,"class","my-2 self-center"),A(Jn,"class","self-center"),A(Xn,"class","self-center"),A(Yn,"class","self-center"),A(en,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(on,"class","object-contain"),it(on.src,ts=`${Q}/Model1ErrDist.png`)||A(on,"src",ts),A(on,"alt","Model 1 - error distribution"),A(qt,"class","mb-6 self-center max-w-xl"),A(an,"class","flex flex-wrap justify-center"),A(Vt,"class","mt-6 mb-6 self-center"),A(sn,"class","object-contain"),it(sn.src,ns=`${Q}/model-1-pod.gif`)||A(sn,"src",ns),A(sn,"alt","prediction point of divergence"),A(Wt,"class","mt-6 mb-6 self-center max-w-lg"),A(ct,"class","object-contain"),it(ct.src,is=`${Q}/trajectories.gif`)||A(ct,"src",is),A(ct,"alt","trajectories approaching origin"),A(ct,"width","500"),A(ct,"height","500"),A(Xt,"class","mt-6 mb-6 self-center max-w-md"),A(ln,"class","mt-2"),A(cn,"class","object-contain"),it(cn.src,as=`${Q}/Model2ErrDist.png`)||A(cn,"src",as),A(cn,"alt",""),A(hn,"class","mb-2 self-center max-w-xl"),A(mn,"class","object-contain"),it(mn.src,ss=`${Q}/Model2Err3d.png`)||A(mn,"src",ss),A(mn,"alt","Model 2 - error distribution by series and window"),A(fn,"class","-mt-2 mb-2 self-center"),A(un,"class","object-contain"),it(un.src,rs=`${Q}/model-2-pod.gif`)||A(un,"src",rs),A(un,"alt","model 2 point of divergence"),A(re,"class","self-center max-w-lg"),A(pn,"class","object-contain"),it(pn.src,ls=`${Q}/Model2DFO.png`)||A(pn,"src",ls),A(pn,"alt","distance from origin vs. sMAPE"),A(dn,"class","-mt-2 mb-2 self-center max-w-3xl"),A(gn,"class","object-contain"),it(gn.src,hs=`${Q}/datahist_model_2_v_3.1.png`)||A(gn,"src",hs),A(gn,"alt","Dataset distribution for Model 2 vs. 3"),A($n,"class","my-8 self-center max-w-lg"),A(vn,"class","object-contain"),it(vn.src,fs=`${Q}/Model2v3.1-DFO.png`)||A(vn,"src",fs),A(vn,"alt","Model 2 vs. 3.1 - distance from origin vs. sMAPE"),A(yn,"class","mt-2 mb-2 self-center max-w-3xl"),A(je,"class","mt-4"),A(kn,"class","object-contain"),it(kn.src,us=`${Q}/Model3.2-DFO.png`)||A(kn,"src",us),A(kn,"alt","Model 3.2 - distance-from-origin error distribution"),A(_n,"class","mb-8 self-center max-w-3xl"),A(jn,"class","object-contain"),it(jn.src,$s=`${Q}/ar_z_stat.png`)||A(jn,"src",$s),A(jn,"alt","Z Statistic for Reference vs. Autoregressive Trajectories"),A(In,"class","mb-2 self-center max-w-3xl"),A(An,"class","object-contain"),it(An.src,ys=`${Q}/ref_v_ar.png`)||A(An,"src",ys),A(An,"alt","Reference vs. Autoregressive Trajectories"),A(Mn,"class","mb-2 self-center max-w-4xl"),A(zn,"class","object-contain"),it(zn.src,bs=`${Q}/ar_breakdown_1.png`)||A(zn,"src",bs),A(zn,"alt","Autoregressive Trajectory - Bad Example"),A(Tn,"class","mb-2 self-center max-w-lg"),A(En,"class","object-contain"),it(En.src,_s=`${Q}/solvers_vs_model.png`)||A(En,"src",_s),A(En,"alt","Comparison of RK45 and predictions to Radau's solutions"),A(Ne,"class","mb-2 self-center max-w-2xl"),A(Ln,"class","flex flex-wrap justify-center"),A(Ue,"class","mb-6 self-center"),A(Pn,"class","my-4 ms-4 -indent-4 font-serif leading-4"),A(n,"class","flex flex-col mx-4 sm:mx-16"),A(i,"class","grid grid-flow-col auto-cols-auto")},m(c,w){I(e,c,w),u(c,t,w),I(o,c,w),u(c,a,w),u(c,i,w),I(r,i,null),d(i,h),d(i,n),d(n,p),d(p,y),d(n,g),d(n,_),d(n,H),d(n,D),d(n,Z),d(n,M),d(M,T),I(F,M,null),d(M,J),d(n,tt),I(O,n,null),I(G,n,null),I(q,n,null),d(n,K),d(n,Y),d(Y,ot),d(ot,nt),d(nt,lt),I(R,nt,null),d(Y,V),d(Y,ht),d(Y,On),d(Y,$i),d($i,dt),d(dt,Gi),I(pt,dt,null),d(dt,qi),d(n,Fi),I($t,n,null),d(n,Zi),I(gt,n,null),d(n,Vi),d(n,Kn),d(Kn,Qe),d(Qe,tn),d(tn,wt),d(tn,Bi),I(yt,tn,null),d(n,Ui),I(vt,n,null),d(n,Wi),d(n,Jn),d(Jn,gi),d(gi,Oi),d(n,Ki),I(bt,n,null),d(n,Ji),d(n,Xn),d(Xn,wi),d(wi,Xi),d(n,Yi),I(_t,n,null),I(kt,n,null),d(n,Qi),I(xt,n,null),d(n,to),I(It,n,null),d(n,eo),I(jt,n,null),d(n,no),I(Mt,n,null),d(n,io),I(At,n,null),d(n,oo),I(Tt,n,null),I(zt,n,null),I(Et,n,null),I(Lt,n,null),d(n,ao),d(n,Yn),d(Yn,yi),d(yi,so),d(n,ro),I(Pt,n,null),d(n,lo),I(St,n,null),d(n,ho),I(Ht,n,null),d(n,co),I(Rt,n,null),d(n,fo),d(n,en),d(n,mo),I(Ct,n,null),d(n,uo),I(Nt,n,null),d(n,po),I(nn,n,null),d(n,$o),I(Dt,n,null),d(n,go),d(n,vi),d(vi,wo),d(n,yo),I(Gt,n,null),d(n,vo),d(n,qt),d(qt,on),d(qt,bo),I(Ft,qt,null),d(n,_o),I(Zt,n,null),d(n,ko),d(n,Vt),d(Vt,an),d(Vt,xo),I(Bt,Vt,null),d(n,Io),I(Ut,n,null),d(n,jo),d(n,Wt),d(Wt,sn),d(Wt,Mo),I(Ot,Wt,null),d(n,Ao),I(Kt,n,null),I(Jt,n,null),d(n,To),d(n,Xt),d(Xt,ct),d(Xt,zo),I(Yt,Xt,null),d(n,Eo),I(Qt,n,null),d(n,Lo),I(te,n,null),d(n,Po),I(ee,n,null),d(n,So),I(rn,n,null),d(n,Ho),d(n,ln),d(n,Ro),d(n,hn),d(hn,cn),I(ne,hn,null),d(n,Co),I(ie,n,null),I(oe,n,null),d(n,No),d(n,fn),d(fn,mn),I(ae,fn,null),d(n,Do),I(se,n,null),d(n,Go),d(n,re),d(re,un),d(re,qo),I(le,re,null),d(n,Fo),I(he,n,null),d(n,Zo),d(n,dn),d(dn,pn),I(ce,dn,null),d(n,Vo),I(fe,n,null),d(n,Bo),I(me,n,null),d(n,Uo),I(ue,n,null),d(n,Wo),I(de,n,null),d(n,Oo),I(pe,n,null),I($e,n,null),I(ge,n,null),d(n,Ko),d(n,$n),d($n,gn),I(we,$n,null),d(n,Jo),d(n,wn),d(wn,Xo),d(wn,Yo),d(wn,Qo),d(n,ta),I(ye,n,null),d(n,ea),d(n,yn),d(yn,vn),I(ve,yn,null),d(n,na),I(be,n,null),d(n,ia),I(_e,n,null),d(n,oa),I(ke,n,null),d(n,aa),I(xe,n,null),d(n,sa),I(bn,n,null),d(n,ra),I(Ie,n,null),d(n,la),d(n,je),d(je,ha),d(je,ca),d(je,fa),d(n,ma),d(n,_n),d(_n,kn),I(Me,_n,null),d(n,ua),d(n,Qn),d(n,da),I(Ae,n,null),d(n,pa),I(Te,n,null),I(ze,n,null),I(Ee,n,null),d(n,$a),d(n,ga),d(n,xn),d(xn,wa),I(Le,xn,null),d(xn,ya),d(n,va),d(n,In),d(In,jn),I(Pe,In,null),d(n,ba),d(n,ft),d(ft,_a),d(ft,ka),d(ft,xa),d(ft,Ia),d(ft,ja),d(n,Ma),I(Se,n,null),d(n,Aa),d(n,Mn),d(Mn,An),I(He,Mn,null),d(n,Ta),d(n,ti),d(n,za),d(n,Tn),d(Tn,zn),I(Re,Tn,null),d(n,Ea),I(Ce,n,null),d(n,La),d(n,Ne),d(Ne,En),d(Ne,Pa),I(De,Ne,null),d(n,Sa),I(Ge,n,null),d(n,Ha),I(qe,n,null),d(n,Ra),I(Fe,n,null),I(Ze,n,null),I(Ve,n,null),I(Be,n,null),d(n,Ca),d(n,Ue),d(Ue,Ln),d(Ue,Na),I(We,Ue,null),d(n,Da),I(Oe,n,null),d(n,Ga),I(Ke,n,null),d(n,qa),I(Je,n,null),d(n,Fa),I(Xe,n,null),d(n,Za),d(n,Pn),d(n,Va),I(Ye,n,null),d(n,Ba),I(Sn,n,null),Ci=!0},p(c,[w]){const $={};w&1&&($.$$scope={dirty:w,ctx:c}),F.$set($);const bi={};w&1&&(bi.$$scope={dirty:w,ctx:c}),O.$set(bi);const Hn={};w&1&&(Hn.$$scope={dirty:w,ctx:c}),G.$set(Hn);const mt={};w&1&&(mt.$$scope={dirty:w,ctx:c}),q.$set(mt);const _i={};w&1&&(_i.$$scope={dirty:w,ctx:c}),R.$set(_i);const ei={};w&1&&(ei.$$scope={dirty:w,ctx:c}),pt.$set(ei);const ki={};w&1&&(ki.$$scope={dirty:w,ctx:c}),$t.$set(ki);const Rn={};w&1&&(Rn.$$scope={dirty:w,ctx:c}),gt.$set(Rn);const xi={};w&1&&(xi.$$scope={dirty:w,ctx:c}),yt.$set(xi);const Ii={};w&1&&(Ii.$$scope={dirty:w,ctx:c}),vt.$set(Ii);const Cn={};w&1&&(Cn.$$scope={dirty:w,ctx:c}),bt.$set(Cn);const ji={};w&1&&(ji.$$scope={dirty:w,ctx:c}),_t.$set(ji);const Mi={};w&1&&(Mi.$$scope={dirty:w,ctx:c}),kt.$set(Mi);const Ai={};w&1&&(Ai.$$scope={dirty:w,ctx:c}),xt.$set(Ai);const Ti={};w&1&&(Ti.$$scope={dirty:w,ctx:c}),It.$set(Ti);const zi={};w&1&&(zi.$$scope={dirty:w,ctx:c}),jt.$set(zi);const Ei={};w&1&&(Ei.$$scope={dirty:w,ctx:c}),Mt.$set(Ei);const Li={};w&1&&(Li.$$scope={dirty:w,ctx:c}),At.$set(Li);const Nn={};w&1&&(Nn.$$scope={dirty:w,ctx:c}),Tt.$set(Nn);const Dn={};w&1&&(Dn.$$scope={dirty:w,ctx:c}),zt.$set(Dn);const Gn={};w&1&&(Gn.$$scope={dirty:w,ctx:c}),Et.$set(Gn);const qn={};w&1&&(qn.$$scope={dirty:w,ctx:c}),Lt.$set(qn);const ni={};w&1&&(ni.$$scope={dirty:w,ctx:c}),Pt.$set(ni);const ii={};w&1&&(ii.$$scope={dirty:w,ctx:c}),St.$set(ii);const Fn={};w&1&&(Fn.$$scope={dirty:w,ctx:c}),Ht.$set(Fn);const oi={};w&1&&(oi.$$scope={dirty:w,ctx:c}),Rt.$set(oi);const ai={};w&1&&(ai.$$scope={dirty:w,ctx:c}),Ct.$set(ai);const Zn={};w&1&&(Zn.$$scope={dirty:w,ctx:c}),Nt.$set(Zn);const si={};w&1&&(si.$$scope={dirty:w,ctx:c}),Dt.$set(si);const Vn={};w&1&&(Vn.$$scope={dirty:w,ctx:c}),Gt.$set(Vn);const ri={};w&1&&(ri.$$scope={dirty:w,ctx:c}),Ft.$set(ri);const Bn={};w&1&&(Bn.$$scope={dirty:w,ctx:c}),Zt.$set(Bn);const li={};w&1&&(li.$$scope={dirty:w,ctx:c}),Bt.$set(li);const ut={};w&1&&(ut.$$scope={dirty:w,ctx:c}),Ut.$set(ut);const hi={};w&1&&(hi.$$scope={dirty:w,ctx:c}),Ot.$set(hi);const ci={};w&1&&(ci.$$scope={dirty:w,ctx:c}),Kt.$set(ci);const Un={};w&1&&(Un.$$scope={dirty:w,ctx:c}),Jt.$set(Un);const Wn={};w&1&&(Wn.$$scope={dirty:w,ctx:c}),Yt.$set(Wn);const Is={};w&1&&(Is.$$scope={dirty:w,ctx:c}),Qt.$set(Is);const js={};w&1&&(js.$$scope={dirty:w,ctx:c}),te.$set(js);const Ms={};w&1&&(Ms.$$scope={dirty:w,ctx:c}),ee.$set(Ms);const As={};w&1&&(As.$$scope={dirty:w,ctx:c}),ne.$set(As);const Ts={};w&1&&(Ts.$$scope={dirty:w,ctx:c}),ie.$set(Ts);const zs={};w&1&&(zs.$$scope={dirty:w,ctx:c}),oe.$set(zs);const Es={};w&1&&(Es.$$scope={dirty:w,ctx:c}),ae.$set(Es);const Ls={};w&1&&(Ls.$$scope={dirty:w,ctx:c}),se.$set(Ls);const Ps={};w&1&&(Ps.$$scope={dirty:w,ctx:c}),le.$set(Ps);const Ss={};w&1&&(Ss.$$scope={dirty:w,ctx:c}),he.$set(Ss);const Hs={};w&1&&(Hs.$$scope={dirty:w,ctx:c}),ce.$set(Hs);const Rs={};w&1&&(Rs.$$scope={dirty:w,ctx:c}),fe.$set(Rs);const Cs={};w&1&&(Cs.$$scope={dirty:w,ctx:c}),me.$set(Cs);const Ns={};w&1&&(Ns.$$scope={dirty:w,ctx:c}),ue.$set(Ns);const Ds={};w&1&&(Ds.$$scope={dirty:w,ctx:c}),de.$set(Ds);const Gs={};w&1&&(Gs.$$scope={dirty:w,ctx:c}),pe.$set(Gs);const qs={};w&1&&(qs.$$scope={dirty:w,ctx:c}),$e.$set(qs);const Fs={};w&1&&(Fs.$$scope={dirty:w,ctx:c}),ge.$set(Fs);const Zs={};w&1&&(Zs.$$scope={dirty:w,ctx:c}),we.$set(Zs);const Vs={};w&1&&(Vs.$$scope={dirty:w,ctx:c}),ye.$set(Vs);const Bs={};w&1&&(Bs.$$scope={dirty:w,ctx:c}),ve.$set(Bs);const Us={};w&1&&(Us.$$scope={dirty:w,ctx:c}),be.$set(Us);const Ws={};w&1&&(Ws.$$scope={dirty:w,ctx:c}),_e.$set(Ws);const Os={};w&1&&(Os.$$scope={dirty:w,ctx:c}),ke.$set(Os);const Ks={};w&1&&(Ks.$$scope={dirty:w,ctx:c}),xe.$set(Ks);const Js={};w&1&&(Js.$$scope={dirty:w,ctx:c}),Ie.$set(Js);const Xs={};w&1&&(Xs.$$scope={dirty:w,ctx:c}),Me.$set(Xs);const Ys={};w&1&&(Ys.$$scope={dirty:w,ctx:c}),Ae.$set(Ys);const Qs={};w&1&&(Qs.$$scope={dirty:w,ctx:c}),Te.$set(Qs);const tr={};w&1&&(tr.$$scope={dirty:w,ctx:c}),ze.$set(tr);const er={};w&1&&(er.$$scope={dirty:w,ctx:c}),Ee.$set(er);const nr={};w&1&&(nr.$$scope={dirty:w,ctx:c}),Le.$set(nr);const ir={};w&1&&(ir.$$scope={dirty:w,ctx:c}),Pe.$set(ir);const or={};w&1&&(or.$$scope={dirty:w,ctx:c}),Se.$set(or);const ar={};w&1&&(ar.$$scope={dirty:w,ctx:c}),He.$set(ar);const sr={};w&1&&(sr.$$scope={dirty:w,ctx:c}),Re.$set(sr);const rr={};w&1&&(rr.$$scope={dirty:w,ctx:c}),Ce.$set(rr);const lr={};w&1&&(lr.$$scope={dirty:w,ctx:c}),De.$set(lr);const hr={};w&1&&(hr.$$scope={dirty:w,ctx:c}),Ge.$set(hr);const cr={};w&1&&(cr.$$scope={dirty:w,ctx:c}),qe.$set(cr);const fr={};w&1&&(fr.$$scope={dirty:w,ctx:c}),Fe.$set(fr);const mr={};w&1&&(mr.$$scope={dirty:w,ctx:c}),Ze.$set(mr);const ur={};w&1&&(ur.$$scope={dirty:w,ctx:c}),Ve.$set(ur);const dr={};w&1&&(dr.$$scope={dirty:w,ctx:c}),Be.$set(dr);const pr={};w&1&&(pr.$$scope={dirty:w,ctx:c}),We.$set(pr);const $r={};w&1&&($r.$$scope={dirty:w,ctx:c}),Oe.$set($r);const gr={};w&1&&(gr.$$scope={dirty:w,ctx:c}),Ke.$set(gr);const wr={};w&1&&(wr.$$scope={dirty:w,ctx:c}),Je.$set(wr);const yr={};w&1&&(yr.$$scope={dirty:w,ctx:c}),Xe.$set(yr);const vr={};w&1&&(vr.$$scope={dirty:w,ctx:c}),Ye.$set(vr)},i(c){Ci||(v(e.$$.fragment,c),v(o.$$.fragment,c),v(r.$$.fragment,c),v(F.$$.fragment,c),v(O.$$.fragment,c),v(G.$$.fragment,c),v(q.$$.fragment,c),v(R.$$.fragment,c),v(pt.$$.fragment,c),v($t.$$.fragment,c),v(gt.$$.fragment,c),v(yt.$$.fragment,c),v(vt.$$.fragment,c),v(bt.$$.fragment,c),v(_t.$$.fragment,c),v(kt.$$.fragment,c),v(xt.$$.fragment,c),v(It.$$.fragment,c),v(jt.$$.fragment,c),v(Mt.$$.fragment,c),v(At.$$.fragment,c),v(Tt.$$.fragment,c),v(zt.$$.fragment,c),v(Et.$$.fragment,c),v(Lt.$$.fragment,c),v(Pt.$$.fragment,c),v(St.$$.fragment,c),v(Ht.$$.fragment,c),v(Rt.$$.fragment,c),v(Ct.$$.fragment,c),v(Nt.$$.fragment,c),v(nn.$$.fragment,c),v(Dt.$$.fragment,c),v(Gt.$$.fragment,c),v(Ft.$$.fragment,c),v(Zt.$$.fragment,c),v(Bt.$$.fragment,c),v(Ut.$$.fragment,c),v(Ot.$$.fragment,c),v(Kt.$$.fragment,c),v(Jt.$$.fragment,c),v(Yt.$$.fragment,c),v(Qt.$$.fragment,c),v(te.$$.fragment,c),v(ee.$$.fragment,c),v(rn.$$.fragment,c),v(ne.$$.fragment,c),v(ie.$$.fragment,c),v(oe.$$.fragment,c),v(ae.$$.fragment,c),v(se.$$.fragment,c),v(le.$$.fragment,c),v(he.$$.fragment,c),v(ce.$$.fragment,c),v(fe.$$.fragment,c),v(me.$$.fragment,c),v(ue.$$.fragment,c),v(de.$$.fragment,c),v(pe.$$.fragment,c),v($e.$$.fragment,c),v(ge.$$.fragment,c),v(we.$$.fragment,c),v(ye.$$.fragment,c),v(ve.$$.fragment,c),v(be.$$.fragment,c),v(_e.$$.fragment,c),v(ke.$$.fragment,c),v(xe.$$.fragment,c),v(bn.$$.fragment,c),v(Ie.$$.fragment,c),v(Me.$$.fragment,c),v(Ae.$$.fragment,c),v(Te.$$.fragment,c),v(ze.$$.fragment,c),v(Ee.$$.fragment,c),v(Le.$$.fragment,c),v(Pe.$$.fragment,c),v(Se.$$.fragment,c),v(He.$$.fragment,c),v(Re.$$.fragment,c),v(Ce.$$.fragment,c),v(De.$$.fragment,c),v(Ge.$$.fragment,c),v(qe.$$.fragment,c),v(Fe.$$.fragment,c),v(Ze.$$.fragment,c),v(Ve.$$.fragment,c),v(Be.$$.fragment,c),v(We.$$.fragment,c),v(Oe.$$.fragment,c),v(Ke.$$.fragment,c),v(Je.$$.fragment,c),v(Xe.$$.fragment,c),v(Ye.$$.fragment,c),v(Sn.$$.fragment,c),Ci=!0)},o(c){b(e.$$.fragment,c),b(o.$$.fragment,c),b(r.$$.fragment,c),b(F.$$.fragment,c),b(O.$$.fragment,c),b(G.$$.fragment,c),b(q.$$.fragment,c),b(R.$$.fragment,c),b(pt.$$.fragment,c),b($t.$$.fragment,c),b(gt.$$.fragment,c),b(yt.$$.fragment,c),b(vt.$$.fragment,c),b(bt.$$.fragment,c),b(_t.$$.fragment,c),b(kt.$$.fragment,c),b(xt.$$.fragment,c),b(It.$$.fragment,c),b(jt.$$.fragment,c),b(Mt.$$.fragment,c),b(At.$$.fragment,c),b(Tt.$$.fragment,c),b(zt.$$.fragment,c),b(Et.$$.fragment,c),b(Lt.$$.fragment,c),b(Pt.$$.fragment,c),b(St.$$.fragment,c),b(Ht.$$.fragment,c),b(Rt.$$.fragment,c),b(Ct.$$.fragment,c),b(Nt.$$.fragment,c),b(nn.$$.fragment,c),b(Dt.$$.fragment,c),b(Gt.$$.fragment,c),b(Ft.$$.fragment,c),b(Zt.$$.fragment,c),b(Bt.$$.fragment,c),b(Ut.$$.fragment,c),b(Ot.$$.fragment,c),b(Kt.$$.fragment,c),b(Jt.$$.fragment,c),b(Yt.$$.fragment,c),b(Qt.$$.fragment,c),b(te.$$.fragment,c),b(ee.$$.fragment,c),b(rn.$$.fragment,c),b(ne.$$.fragment,c),b(ie.$$.fragment,c),b(oe.$$.fragment,c),b(ae.$$.fragment,c),b(se.$$.fragment,c),b(le.$$.fragment,c),b(he.$$.fragment,c),b(ce.$$.fragment,c),b(fe.$$.fragment,c),b(me.$$.fragment,c),b(ue.$$.fragment,c),b(de.$$.fragment,c),b(pe.$$.fragment,c),b($e.$$.fragment,c),b(ge.$$.fragment,c),b(we.$$.fragment,c),b(ye.$$.fragment,c),b(ve.$$.fragment,c),b(be.$$.fragment,c),b(_e.$$.fragment,c),b(ke.$$.fragment,c),b(xe.$$.fragment,c),b(bn.$$.fragment,c),b(Ie.$$.fragment,c),b(Me.$$.fragment,c),b(Ae.$$.fragment,c),b(Te.$$.fragment,c),b(ze.$$.fragment,c),b(Ee.$$.fragment,c),b(Le.$$.fragment,c),b(Pe.$$.fragment,c),b(Se.$$.fragment,c),b(He.$$.fragment,c),b(Re.$$.fragment,c),b(Ce.$$.fragment,c),b(De.$$.fragment,c),b(Ge.$$.fragment,c),b(qe.$$.fragment,c),b(Fe.$$.fragment,c),b(Ze.$$.fragment,c),b(Ve.$$.fragment,c),b(Be.$$.fragment,c),b(We.$$.fragment,c),b(Oe.$$.fragment,c),b(Ke.$$.fragment,c),b(Je.$$.fragment,c),b(Xe.$$.fragment,c),b(Ye.$$.fragment,c),b(Sn.$$.fragment,c),Ci=!1},d(c){c&&(s(t),s(a),s(i)),j(e,c),j(o,c),j(r),j(F),j(O),j(G),j(q),j(R),j(pt),j($t),j(gt),j(yt),j(vt),j(bt),j(_t),j(kt),j(xt),j(It),j(jt),j(Mt),j(At),j(Tt),j(zt),j(Et),j(Lt),j(Pt),j(St),j(Ht),j(Rt),j(Ct),j(Nt),j(nn),j(Dt),j(Gt),j(Ft),j(Zt),j(Bt),j(Ut),j(Ot),j(Kt),j(Jt),j(Yt),j(Qt),j(te),j(ee),j(rn),j(ne),j(ie),j(oe),j(ae),j(se),j(le),j(he),j(ce),j(fe),j(me),j(ue),j(de),j(pe),j($e),j(ge),j(we),j(ye),j(ve),j(be),j(_e),j(ke),j(xe),j(bn),j(Ie),j(Me),j(Ae),j(Te),j(ze),j(Ee),j(Le),j(Pe),j(Se),j(He),j(Re),j(Ce),j(De),j(Ge),j(qe),j(Fe),j(Ze),j(Ve),j(Be),j(We),j(Oe),j(Ke),j(Je),j(Xe),j(Ye),j(Sn)}}}class kc extends st{constructor(e){super(),rt(this,e,null,yc,at,{})}}export{kc as component};
