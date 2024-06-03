import{s as lt,a as Si,u as Ri,g as Ni,b as Di,n as W,o as Hl,x as it}from"../chunks/scheduler.BeaK0CkN.js";import{S as ht,i as ct,e as L,c as P,h as N,f as a,b as z,d as m,m as y,n as b,r as Rl,p as Nl,z as Sl,t as r,v as x,j as l,w as k,k as p,x as I,y as j,l as Js,s as C,a as H,g as U,A as Dl,B as Gl}from"../chunks/index.BmRq3wWf.js";import{b as Q}from"../chunks/paths.BYFKEwBs.js";const ql=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function fo(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function Fl(c){let e,t,i;const s=c[4].default,o=Si(s,c,c[3],null);return{c(){e=L("a"),o&&o.c(),this.h()},l(h){e=P(h,"A",{href:!0,class:!0,target:!0,rel:!0});var f=N(e);o&&o.l(f),f.forEach(a),this.h()},h(){z(e,"href",c[0]),z(e,"class",t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+c[1]),z(e,"target",c[2]),z(e,"rel","noopener noreferrer")},m(h,f){m(h,e,f),o&&o.m(e,null),i=!0},p(h,[f]){o&&o.p&&(!i||f&8)&&Ri(o,s,h,h[3],i?Di(s,h[3],f,null):Ni(h[3]),null),(!i||f&1)&&z(e,"href",h[0]),(!i||f&2&&t!==(t="font-medium text-blue-600 dark:text-blue-500 hover:underline "+h[1]))&&z(e,"class",t),(!i||f&4)&&z(e,"target",h[2])},i(h){i||(y(o,h),i=!0)},o(h){b(o,h),i=!1},d(h){h&&a(e),o&&o.d(h)}}}function Zl(c,e,t){let{$$slots:i={},$$scope:s}=e,{href:o}=e,{styling:h=""}=e,{target:f="_blank"}=e;return c.$$set=n=>{"href"in n&&t(0,o=n.href),"styling"in n&&t(1,h=n.styling),"target"in n&&t(2,f=n.target),"$$scope"in n&&t(3,s=n.$$scope)},[o,h,f,s,i]}class V extends ht{constructor(e){super(),ct(this,e,Zl,Fl,lt,{href:0,styling:1,target:2})}}function Tl(c,e,t){const i=c.slice();return i[0]=e[t],i}function Vl(c){let e;return{c(){e=r("link")},l(t){e=l(t,"link")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function zl(c){let e,t,i=c[0].author+"",s,o,h,f=c[0].title+"",n,g,_,d=c[0].publisher+"",v,M,T,S=c[0].year+"",G,A,E,Z,O,et,K,q;return O=new V({props:{href:c[0].link,$$slots:{default:[Vl]},$$scope:{ctx:c}}}),{c(){e=L("li"),t=L("span"),s=r(i),o=r(", "),h=L("span"),n=r(f),g=r(`,
			`),_=L("span"),v=r(d),M=r(`,
			`),T=L("span"),G=r(S),A=r(", "),E=L("span"),Z=r("["),x(O.$$.fragment),et=r("]"),K=r(`.
		`),this.h()},l(F){e=P(F,"LI",{});var J=N(e);t=P(J,"SPAN",{class:!0});var tt=N(t);s=l(tt,i),tt.forEach(a),o=l(J,", "),h=P(J,"SPAN",{});var X=N(h);n=l(X,f),X.forEach(a),g=l(J,`,
			`),_=P(J,"SPAN",{});var ft=N(_);v=l(ft,d),ft.forEach(a),M=l(J,`,
			`),T=P(J,"SPAN",{});var ot=N(T);G=l(ot,S),ot.forEach(a),A=l(J,", "),E=P(J,"SPAN",{});var R=N(E);Z=l(R,"["),k(O.$$.fragment,R),et=l(R,"]"),R.forEach(a),K=l(J,`.
		`),J.forEach(a),this.h()},h(){z(t,"class","ms-4")},m(F,J){m(F,e,J),p(e,t),p(t,s),p(e,o),p(e,h),p(h,n),p(e,g),p(e,_),p(_,v),p(e,M),p(e,T),p(T,G),p(e,A),p(e,E),p(E,Z),I(O,E,null),p(E,et),p(e,K),q=!0},p(F,J){const tt={};J&8&&(tt.$$scope={dirty:J,ctx:F}),O.$set(tt)},i(F){q||(y(O.$$.fragment,F),q=!0)},o(F){b(O.$$.fragment,F),q=!1},d(F){F&&a(e),j(O)}}}function Bl(c){let e,t,i=fo(lo),s=[];for(let h=0;h<i.length;h+=1)s[h]=zl(Tl(c,i,h));const o=h=>b(s[h],1,1,()=>{s[h]=null});return{c(){e=L("ol");for(let h=0;h<s.length;h+=1)s[h].c();this.h()},l(h){e=P(h,"OL",{class:!0});var f=N(e);for(let n=0;n<s.length;n+=1)s[n].l(f);f.forEach(a),this.h()},h(){z(e,"class","pl-5 my-2 text-xs list-decimal")},m(h,f){m(h,e,f);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null);t=!0},p(h,[f]){if(f&0){i=fo(lo);let n;for(n=0;n<i.length;n+=1){const g=Tl(h,i,n);s[n]?(s[n].p(g,f),y(s[n],1)):(s[n]=zl(g),s[n].c(),y(s[n],1),s[n].m(e,null))}for(Rl(),n=i.length;n<s.length;n+=1)o(n);Nl()}},i(h){if(!t){for(let f=0;f<i.length;f+=1)y(s[f]);t=!0}},o(h){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)b(s[f]);t=!1},d(h){h&&a(e),Sl(s,h)}}}const mo=c=>{for(let e=0;e<lo.length;e++)if(lo[e].id==c)return{index:e+1,link:lo[e].link};throw new Error},lo=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"oestreicher",author:"Oestreicher C.",title:"A history of chaos theory",publisher:"Dialogues Clin Neurosci.",year:"2007",link:"https://doi.org/10.31887/DCNS.2007.9.3/coestreicher"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"},{id:"chandramoorthy",author:"Nisha Chandramoorthy, QiQi Wang",title:"On the probability of finding nonphysical solutions through shadowing",publisher:"Journal of Computational Physics",year:"1 September 2021",link:"https://doi.org/10.1016/j.jcp.2021.110389"}];class Ul extends ht{constructor(e){super(),ct(this,e,null,Bl,lt,{})}}function Wl(c){let e=mo(c[0]).index+"",t;return{c(){t=r(e)},l(i){t=l(i,e)},m(i,s){m(i,t,s)},p(i,s){s&1&&e!==(e=mo(i[0]).index+"")&&Js(t,e)},d(i){i&&a(t)}}}function Ol(c){let e,t,i,s;return t=new V({props:{href:mo(c[0]).link,$$slots:{default:[Wl]},$$scope:{ctx:c}}}),{c(){e=r("["),x(t.$$.fragment),i=r("]")},l(o){e=l(o,"["),k(t.$$.fragment,o),i=l(o,"]")},m(o,h){m(o,e,h),I(t,o,h),m(o,i,h),s=!0},p(o,[h]){const f={};h&1&&(f.href=mo(o[0]).link),h&3&&(f.$$scope={dirty:h,ctx:o}),t.$set(f)},i(o){s||(y(t.$$.fragment,o),s=!0)},o(o){b(t.$$.fragment,o),s=!1},d(o){o&&(a(e),a(i)),j(t,o)}}}function Kl(c,e,t){let{id:i}=e;return c.$$set=s=>{"id"in s&&t(0,i=s.id)},[i]}class Y extends ht{constructor(e){super(),ct(this,e,Kl,Ol,lt,{id:0})}}function Jl(c){let e,t;const i=c[2].default,s=Si(i,c,c[1],null);return{c(){e=L("div"),s&&s.c(),this.h()},l(o){e=P(o,"DIV",{id:!0,class:!0});var h=N(e);s&&s.l(h),h.forEach(a),this.h()},h(){z(e,"id",c[0]),z(e,"class","text-2xl font-bold text-center my-8")},m(o,h){m(o,e,h),s&&s.m(e,null),t=!0},p(o,[h]){s&&s.p&&(!t||h&2)&&Ri(s,i,o,o[1],t?Di(i,o[1],h,null):Ni(o[1]),null),(!t||h&1)&&z(e,"id",o[0])},i(o){t||(y(s,o),t=!0)},o(o){b(s,o),t=!1},d(o){o&&a(e),s&&s.d(o)}}}function Xl(c,e,t){let{$$slots:i={},$$scope:s}=e,{id:o}=e;return c.$$set=h=>{"id"in h&&t(0,o=h.id),"$$scope"in h&&t(1,s=h.$$scope)},[o,s,i]}class Ci extends ht{constructor(e){super(),ct(this,e,Xl,Jl,lt,{id:0})}}function Yl(c){let e,t;const i=c[2].default,s=Si(i,c,c[1],null);return{c(){e=L("div"),s&&s.c(),this.h()},l(o){e=P(o,"DIV",{id:!0,class:!0});var h=N(e);s&&s.l(h),h.forEach(a),this.h()},h(){z(e,"id",c[0]),z(e,"class","text-xl font-medium text-left mt-8 mb-4")},m(o,h){m(o,e,h),s&&s.m(e,null),t=!0},p(o,[h]){s&&s.p&&(!t||h&2)&&Ri(s,i,o,o[1],t?Di(i,o[1],h,null):Ni(o[1]),null),(!t||h&1)&&z(e,"id",o[0])},i(o){t||(y(s,o),t=!0)},o(o){b(s,o),t=!1},d(o){o&&a(e),s&&s.d(o)}}}function Ql(c,e,t){let{$$slots:i={},$$scope:s}=e,{id:o}=e;return c.$$set=h=>{"id"in h&&t(0,o=h.id),"$$scope"in h&&t(1,s=h.$$scope)},[o,s,i]}class Hi extends ht{constructor(e){super(),ct(this,e,Ql,Yl,lt,{id:0})}}function th(c){let e,t;const i=c[1].default,s=Si(i,c,c[0],null);return{c(){e=L("div"),s&&s.c(),this.h()},l(o){e=P(o,"DIV",{class:!0});var h=N(e);s&&s.l(h),h.forEach(a),this.h()},h(){z(e,"class","text-lg font-medium text-left ms-4 mt-4 mb-4")},m(o,h){m(o,e,h),s&&s.m(e,null),t=!0},p(o,[h]){s&&s.p&&(!t||h&1)&&Ri(s,i,o,o[0],t?Di(i,o[0],h,null):Ni(o[0]),null)},i(o){t||(y(s,o),t=!0)},o(o){b(s,o),t=!1},d(o){o&&a(e),s&&s.d(o)}}}function eh(c,e,t){let{$$slots:i={},$$scope:s}=e;return c.$$set=o=>{"$$scope"in o&&t(0,s=o.$$scope)},[s,i]}class El extends ht{constructor(e){super(),ct(this,e,eh,th,lt,{})}}function nh(c){let e,t,i;const s=c[3].default,o=Si(s,c,c[2],null);return{c(){e=L("p"),o&&o.c(),this.h()},l(h){e=P(h,"P",{class:!0});var f=N(e);o&&o.l(f),f.forEach(a),this.h()},h(){z(e,"class",t="my-2 "+c[0]+" "+c[1])},m(h,f){m(h,e,f),o&&o.m(e,null),i=!0},p(h,[f]){o&&o.p&&(!i||f&4)&&Ri(o,s,h,h[2],i?Di(s,h[2],f,null):Ni(h[2]),null),(!i||f&3&&t!==(t="my-2 "+h[0]+" "+h[1]))&&z(e,"class",t)},i(h){i||(y(o,h),i=!0)},o(h){b(o,h),i=!1},d(h){h&&a(e),o&&o.d(h)}}}function ih(c,e,t){let{$$slots:i={},$$scope:s}=e,{indent:o="indent-8"}=e,{style:h=""}=e;return c.$$set=f=>{"indent"in f&&t(0,o=f.indent),"style"in f&&t(1,h=f.style),"$$scope"in f&&t(2,s=f.$$scope)},[o,h,s,i]}class D extends ht{constructor(e){super(),ct(this,e,ih,nh,lt,{indent:0,style:1})}}function Ll(c,e,t){const i=c.slice();return i[1]=e[t],i}function Pl(c){let e,t,i=c[1].desc+"",s,o,h,f,n=c[1].val+"",g,_;return{c(){e=L("li"),t=L("div"),s=r(i),o=C(),h=L("div"),f=L("span"),g=r(n),_=C(),this.h()},l(d){e=P(d,"LI",{class:!0});var v=N(e);t=P(v,"DIV",{class:!0});var M=N(t);s=l(M,i),M.forEach(a),o=H(v),h=P(v,"DIV",{class:!0});var T=N(h);f=P(T,"SPAN",{class:!0});var S=N(f);g=l(S,n),S.forEach(a),T.forEach(a),_=H(v),v.forEach(a),this.h()},h(){z(t,"class","flex-none w-32 sm:w-64"),z(f,"class","rounded-0.5 p-1 font-mono"),z(h,"class","w-fit flex-wrap"),z(e,"class","flex items-center justify-left")},m(d,v){m(d,e,v),p(e,t),p(t,s),p(e,o),p(e,h),p(h,f),p(f,g),p(e,_)},p(d,v){v&1&&i!==(i=d[1].desc+"")&&Js(s,i),v&1&&n!==(n=d[1].val+"")&&Js(g,n)},d(d){d&&a(e)}}}function oh(c){let e,t,i=fo(c[0]),s=[];for(let o=0;o<i.length;o+=1)s[o]=Pl(Ll(c,i,o));return{c(){e=L("section"),t=L("ul");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=P(o,"SECTION",{class:!0});var h=N(e);t=P(h,"UL",{class:!0});var f=N(t);for(let n=0;n<s.length;n+=1)s[n].l(f);f.forEach(a),h.forEach(a),this.h()},h(){z(t,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),z(e,"class","relative block my-4")},m(o,h){m(o,e,h),p(e,t);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(t,null)},p(o,[h]){if(h&1){i=fo(o[0]);let f;for(f=0;f<i.length;f+=1){const n=Ll(o,i,f);s[f]?s[f].p(n,h):(s[f]=Pl(n),s[f].c(),s[f].m(t,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=i.length}},i:W,o:W,d(o){o&&a(e),Sl(s,o)}}}function ah(c,e,t){let{hps:i=[]}=e;return c.$$set=s=>{"hps"in s&&t(0,i=s.hps)},[i]}class Ks extends ht{constructor(e){super(),ct(this,e,ah,oh,lt,{hps:0})}}function sh(c){let e,t;const i=c[1].default,s=Si(i,c,c[0],null);return{c(){e=L("figcaption"),s&&s.c(),this.h()},l(o){e=P(o,"FIGCAPTION",{class:!0});var h=N(e);s&&s.l(h),h.forEach(a),this.h()},h(){z(e,"class","text-center text-xs mt-2")},m(o,h){m(o,e,h),s&&s.m(e,null),t=!0},p(o,[h]){s&&s.p&&(!t||h&1)&&Ri(s,i,o,o[0],t?Di(i,o[0],h,null):Ni(o[0]),null)},i(o){t||(y(s,o),t=!0)},o(o){b(s,o),t=!1},d(o){o&&a(e),s&&s.d(o)}}}function rh(c,e,t){let{$$slots:i={},$$scope:s}=e;return c.$$set=o=>{"$$scope"in o&&t(0,s=o.$$scope)},[s,i]}class nt extends ht{constructor(e){super(),ct(this,e,rh,sh,lt,{})}}const{window:lh}=ql;function hh(c){let e,t='<nav class="border-r-2 sticky top-12"><div><section><ul class="menu"><li><a href="#intro">Intro</a></li> <li><a href="#lorenz">Lorenz Attractor</a></li> <li><a href="#nhits">Neural Architecture</a></li> <li><a href="#experiments">Experiments</a></li> <ul class="text-sm submenu"><li><a href="#datagen">Data Generation</a></li> <li><a href="#model-1">Model 1</a></li> <li><a href="#model-2">Model 2</a></li> <li><a href="#model-3">Model 3</a></li> <li><a href="#arpred">Autoregressive Prediction</a></li></ul> <li><a href="#discussion">Discussion</a></li> <li><a href="#references">References</a></li></ul></section></div></nav>',i,s;return{c(){e=L("aside"),e.innerHTML=t,this.h()},l(o){e=P(o,"ASIDE",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-u7i093"&&(e.innerHTML=t),this.h()},h(){z(e,"class","max-sm:hidden")},m(o,h){m(o,e,h),i||(s=Dl(lh,"scroll",c[0]),i=!0)},p:W,i:W,o:W,d(o){o&&a(e),i=!1,s()}}}function ch(c){const e=["intro","lorenz","nhits","experiments","datagen","model-1","model-2","model-3","arpred","discussion","references"],t=["bg-rose-100","rounded"];let i=e[0];const s=n=>{const g="a[href='#"+n+"']";return document.querySelector(g)},o=n=>{const g=s(n).parentElement;t.forEach(_=>g.classList.add(_))},h=n=>{const g=s(n).parentElement;t.forEach(_=>g.classList.remove(_))},f=()=>{let n;e.forEach(g=>{const _=document.getElementById(g);window.scrollY>=_.offsetTop-1&&(n=g)}),n&&n!=i&&(h(i),i=n,o(i))};return Hl(()=>{o(i),f()}),[f]}class fh extends ht{constructor(e){super(),ct(this,e,ch,hh,lt,{})}}function mh(c){return Hl(()=>{let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",e.async=!0,document.head.append(e),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[]}class uh extends ht{constructor(e){super(),ct(this,e,mh,null,lt,{})}}const ph=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,dh=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,$h=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,gh=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,wh=`
\\begin{align}
\\operatorname{J}(z) := exp(-\\frac{z^2}{2}) \\\\
\\end{align}`,vh=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],yh=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~687 million"}],bh=[{desc:"horizon",val:500},{desc:"lookback",val:1e3},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"},{desc:"total trainable parameters",val:"~857 million"}];function _h(c){let e,t,i,s,o,h,f;return document.title=e=ho,{c(){t=L("meta"),i=L("meta"),s=L("meta"),o=L("meta"),h=L("meta"),f=L("meta"),this.h()},l(n){const g=Gl("svelte-xp42rc",document.head);t=P(g,"META",{name:!0,content:!0}),i=P(g,"META",{property:!0,content:!0}),s=P(g,"META",{property:!0,content:!0}),o=P(g,"META",{property:!0,content:!0}),h=P(g,"META",{property:!0,content:!0}),f=P(g,"META",{property:!0,content:!0}),g.forEach(a),this.h()},h(){z(t,"name","description"),z(t,"content",Cl),z(i,"property","og:type"),z(i,"content","article"),z(s,"property","og:url"),z(s,"content","https://nrxszvo.github.io/nhits-lorenz"),z(o,"property","og:description"),z(o,"content",Cl),z(h,"property","og:image"),z(h,"content","https://nrxszvo.github.io/thumbnail.png"),z(f,"property","og:title"),z(f,"content",ho)},m(n,g){p(document.head,t),p(document.head,i),p(document.head,s),p(document.head,o),p(document.head,h),p(document.head,f)},p(n,[g]){g&0&&e!==(e=ho)&&(document.title=e)},i:W,o:W,d(n){a(t),a(i),a(s),a(o),a(h),a(f)}}}const ho="Generic Deep Learning for Chaotic Dynamics: A Case Study on the Lorenz Attractor",Cl="Experiments using the NHiTS neural forecasting architecture to model the Lorenz Attractor; analysis of Z coordinate local maximum converging to 38.5";class xh extends ht{constructor(e){super(),ct(this,e,null,_h,lt,{})}}function kh(c){let e;return{c(){e=r("mochaNN")},l(t){e=l(t,"mochaNN")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ih(c){let e,t="tl;dr";return{c(){e=L("i"),e.textContent=t,this.h()},l(i){e=P(i,"I",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-ixj9gt"&&(e.textContent=t),this.h()},h(){z(e,"class","font-serif")},m(i,s){m(i,e,s)},p:W,d(i){i&&a(e)}}}function jh(c){let e;return{c(){e=r("Lorenz Map")},l(t){e=l(t,"Lorenz Map")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Mh(c){let e;return{c(){e=r("sMAPE")},l(t){e=l(t,"sMAPE")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ah(c){let e;return{c(){e=r("Introduction")},l(t){e=l(t,"Introduction")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Th(c){let e,t,i="Model scale versus domain knowledge in statistical forecasting of chaotic systems",s,o,h,f,n,g,_,d,v,M,T='<a href="#sabine">1</a>',S,G;return o=new Y({props:{id:"gilpin"}}),f=new Y({props:{id:"gilpin"}}),g=new Y({props:{id:"seo"}}),d=new Y({props:{id:"degrave"}}),{c(){e=r(`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=L("i"),t.textContent=i,s=C(),x(o.$$.fragment),h=r(`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),x(f.$$.fragment),n=r(`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),x(g.$$.fragment),_=r(", "),x(d.$$.fragment),v=r(")"),M=L("sup"),M.innerHTML=T,S=r(`.
		`)},l(A){e=l(A,`This project is inspired by several recent publications involving the use of deep
			learning to predict or control chaotic dynamical systems, in particular William Gilpin's
			paper, `),t=P(A,"I",{"data-svelte-h":!0}),U(t)!=="svelte-oq8z8z"&&(t.textContent=i),s=H(A),k(o.$$.fragment,A),h=l(A,`. Gilpin found that, given enough training data, generic neural
			architectures can match or exceed the performance of state-of-the-art domain-specific
			chaotic forecasting models such as reservoir computers and neural ODEs. I have recently
			become intrigued by the prospect of applying deep learning to prediction tasks involving
			chaotic systems, as I explore ways to contribute to the efforts to find technical
			solutions to climate change, and Gilpin's paper provided the impetus for me to begin
			this investigation. Along with `),k(f.$$.fragment,A),n=l(A,`, several other recent publications in
			related areas have been especially exciting to me, particularly the ones applying deep
			learning to tokamak control in nuclear fusion reactors (see e.g. `),k(g.$$.fragment,A),_=l(A,", "),k(d.$$.fragment,A),v=l(A,")"),M=P(A,"SUP",{"data-svelte-h":!0}),U(M)!=="svelte-6x9dc9"&&(M.innerHTML=T),S=l(A,`.
		`)},m(A,E){m(A,e,E),m(A,t,E),m(A,s,E),I(o,A,E),m(A,h,E),I(f,A,E),m(A,n,E),I(g,A,E),m(A,_,E),I(d,A,E),m(A,v,E),m(A,M,E),m(A,S,E),G=!0},p:W,i(A){G||(y(o.$$.fragment,A),y(f.$$.fragment,A),y(g.$$.fragment,A),y(d.$$.fragment,A),G=!0)},o(A){b(o.$$.fragment,A),b(f.$$.fragment,A),b(g.$$.fragment,A),b(d.$$.fragment,A),G=!1},d(A){A&&(a(e),a(t),a(s),a(h),a(n),a(_),a(v),a(M),a(S)),j(o,A),j(f,A),j(g,A),j(d,A)}}}function zh(c){let e,t,i="i.e.",s,o,h='<a href="#paperspace">2</a>',f,n,g='<a href="#brunton">3</a>',_;return{c(){e=r(`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=L("i"),t.textContent=i,s=r(`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),o=L("sup"),o.innerHTML=h,f=r(`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=L("sup"),n.innerHTML=g,_=r(`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},l(d){e=l(d,`My goal with this project is to get some hands-on experience with a chaotic system and
			probe deeper into Gilpin's findings by testing the limits of a generic (`),t=P(d,"I",{"data-svelte-h":!0}),U(t)!=="svelte-1xx6z5c"&&(t.textContent=i),s=l(d,`
			non-physics-informed) neural network's ability to model a single chaotic system (within the
			computational constraints imposed by my budget`),o=P(d,"SUP",{"data-svelte-h":!0}),U(o)!=="svelte-yuo1gg"&&(o.innerHTML=h),f=l(d,`).
			I'll start with what is probably the most well known chaotic system, the Lorenz
			Attractor. I will approach the problem more from the perspective of a generalist deep
			learning practioner than a dynamical systems expert, so I will be discovering many of
			the properties of the Lorenz System, and dynamical systems in general, as I go, often
			using the results of my experiments to guide my investigation`),n=P(d,"SUP",{"data-svelte-h":!0}),U(n)!=="svelte-a7rqq8"&&(n.innerHTML=g),_=l(d,`. What exactly makes the Lorenz Attractor chaotic? And what constraints will that
			impose on the ability of a deep neural network to model it?
		`)},m(d,v){m(d,e,v),m(d,t,v),m(d,s,v),m(d,o,v),m(d,f,v),m(d,n,v),m(d,_,v)},p:W,d(d){d&&(a(e),a(t),a(s),a(o),a(f),a(n),a(_))}}}function Eh(c){let e;return{c(){e=r(`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},l(t){e=l(t,`Note: My intention is for this write-up to read more like a well-edited journal of my
			experiments and analyses than a proper research paper, so expect it to be a bit more
			verbose in some places than might seem necessary to convey the salient results.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Lh(c){let e;return{c(){e=r("Youtube channel")},l(t){e=l(t,"Youtube channel")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ph(c){let e;return{c(){e=r("lecture series")},l(t){e=l(t,"lecture series")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ch(c){let e;return{c(){e=r("The Lorenz Attractor")},l(t){e=l(t,"The Lorenz Attractor")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Hh(c){let e;return{c(){e=r("sensitivity to initial conditions")},l(t){e=l(t,"sensitivity to initial conditions")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Sh(c){let e;return{c(){e=r("n-body problem")},l(t){e=l(t,"n-body problem")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Rh(c){let e;return{c(){e=r("Lorenz Attractor")},l(t){e=l(t,"Lorenz Attractor")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Nh(c){let e,t,i,s,o,h,f,n,g,_;return t=new V({props:{href:"https://en.wikipedia.org/wiki/Butterfly_effect",$$slots:{default:[Hh]},$$scope:{ctx:c}}}),s=new V({props:{href:"https://en.wikipedia.org/wiki/N-body_problem",$$slots:{default:[Sh]},$$scope:{ctx:c}}}),h=new V({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[Rh]},$$scope:{ctx:c}}}),n=new Y({props:{id:"oestreicher"}}),{c(){e=r("Although the phenomon of "),x(t.$$.fragment),i=r(` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),x(s.$$.fragment),o=r(", the birth of modern chaos theory is generally associated with the discovery of the "),x(h.$$.fragment),f=r(`
			by Edward Lorenz et. al. in 1963 `),x(n.$$.fragment),g=r(`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},l(d){e=l(d,"Although the phenomon of "),k(t.$$.fragment,d),i=l(d,` was first discovered by Henri Poincaré around the beginning of the 20th century in his
			research on the `),k(s.$$.fragment,d),o=l(d,", the birth of modern chaos theory is generally associated with the discovery of the "),k(h.$$.fragment,d),f=l(d,`
			by Edward Lorenz et. al. in 1963 `),k(n.$$.fragment,d),g=l(d,`. Lorenz developed the system
			as a simplified model of atmospheric convection while working on weather prediction.`)},m(d,v){m(d,e,v),I(t,d,v),m(d,i,v),I(s,d,v),m(d,o,v),I(h,d,v),m(d,f,v),I(n,d,v),m(d,g,v),_=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M);const T={};v&1&&(T.$$scope={dirty:v,ctx:d}),s.$set(T);const S={};v&1&&(S.$$scope={dirty:v,ctx:d}),h.$set(S)},i(d){_||(y(t.$$.fragment,d),y(s.$$.fragment,d),y(h.$$.fragment,d),y(n.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),b(s.$$.fragment,d),b(h.$$.fragment,d),b(n.$$.fragment,d),_=!1},d(d){d&&(a(e),a(i),a(o),a(f),a(g)),j(t,d),j(s,d),j(h,d),j(n,d)}}}function Dh(c){let e;return{c(){e=r("The Lorenz Attractor")},l(t){e=l(t,"The Lorenz Attractor")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Gh(c){let e;return{c(){e=r(`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},l(t){e=l(t,`The Lorenz system is comprised of three first-order ordinary differential equations
			representing the properties of convection and horizontal and vertical temperature in a
			two-dimensional fluid layer:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function qh(c){let e;return{c(){e=r("strange attractor")},l(t){e=l(t,"strange attractor")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Fh(c){let e;return{c(){e=r("Hausdorff dimension")},l(t){e=l(t,"Hausdorff dimension")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Zh(c){let e,t,i="Attractor",s,o,h,f,n,g;return o=new V({props:{href:"https://en.wikipedia.org/wiki/Attractor#Strange_attractor",$$slots:{default:[qh]},$$scope:{ctx:c}}}),f=new V({props:{href:"https://en.wikipedia.org/wiki/Hausdorff_dimension",$$slots:{default:[Fh]},$$scope:{ctx:c}}}),{c(){e=r("The Lorenz "),t=L("i"),t.textContent=i,s=r(` refers to a set of chaotic solutions to the system that
			constitute a `),x(o.$$.fragment),h=r(`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),x(f.$$.fragment),n=r(` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},l(_){e=l(_,"The Lorenz "),t=P(_,"I",{"data-svelte-h":!0}),U(t)!=="svelte-7jrnvq"&&(t.textContent=i),s=l(_,` refers to a set of chaotic solutions to the system that
			constitute a `),k(o.$$.fragment,_),h=l(_,`, that is, a system having a subspace towards which all trajectories tend to evolve
			(the attractor) and in which any given trajectory is so dense that its `),k(f.$$.fragment,_),n=l(_,` exceeds its topological dimension (the strange part). The canonical parameterization of
			the Lorenz Attractor, which I will be using, is:`)},m(_,d){m(_,e,d),m(_,t,d),m(_,s,d),I(o,_,d),m(_,h,d),I(f,_,d),m(_,n,d),g=!0},p(_,d){const v={};d&1&&(v.$$scope={dirty:d,ctx:_}),o.$set(v);const M={};d&1&&(M.$$scope={dirty:d,ctx:_}),f.$set(M)},i(_){g||(y(o.$$.fragment,_),y(f.$$.fragment,_),g=!0)},o(_){b(o.$$.fragment,_),b(f.$$.fragment,_),g=!1},d(_){_&&(a(e),a(t),a(s),a(h),a(n)),j(o,_),j(f,_)}}}function Vh(c){let e;return{c(){e=r("Hopf bifurcation")},l(t){e=l(t,"Hopf bifurcation")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Bh(c){let e,t="$\\rho$",i,s,o="$\\rho \\lt 1$",h,f,n="$\\rho \\approx 24.7$",g,_,d,v,M;return d=new V({props:{href:"https://en.wikipedia.org/wiki/Hopf_bifurcation",$$slots:{default:[Vh]},$$scope:{ctx:c}}}),{c(){e=r("Other parameterizations of interest generally involve varying the "),i=r(t),s=r(` parameter,
			for example, `),h=r(o),f=r(" in which the system is stable, and "),g=r(n),_=r(`,
			at which a `),x(d.$$.fragment),v=r(" occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},l(T){e=l(T,"Other parameterizations of interest generally involve varying the "),i=l(T,t),s=l(T,` parameter,
			for example, `),h=l(T,o),f=l(T," in which the system is stable, and "),g=l(T,n),_=l(T,`,
			at which a `),k(d.$$.fragment,T),v=l(T," occurs. But for this project, I will be focusing exclusively on the canonical parameterization.")},m(T,S){m(T,e,S),m(T,i,S),m(T,s,S),m(T,h,S),m(T,f,S),m(T,g,S),m(T,_,S),I(d,T,S),m(T,v,S),M=!0},p(T,S){const G={};S&1&&(G.$$scope={dirty:S,ctx:T}),d.$set(G)},i(T){M||(y(d.$$.fragment,T),M=!0)},o(T){b(d.$$.fragment,T),M=!1},d(T){T&&(a(e),a(i),a(s),a(h),a(f),a(g),a(_),a(v)),j(d,T)}}}function Uh(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Wh(c){let e,t,i,s;return t=new V({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[Uh]},$$scope:{ctx:c}}}),{c(){e=r("For all trajectories in this project, I used Gilpin's "),x(t.$$.fragment),i=r(` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},l(o){e=l(o,"For all trajectories in this project, I used Gilpin's "),k(t.$$.fragment,o),i=l(o,` python module as a reference for the various parameters of the integration task for generating
			the training data.`)},m(o,h){m(o,e,h),I(t,o,h),m(o,i,h),s=!0},p(o,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:o}),t.$set(f)},i(o){s||(y(t.$$.fragment,o),s=!0)},o(o){b(t.$$.fragment,o),s=!1},d(o){o&&(a(e),a(i)),j(t,o)}}}function Oh(c){let e;return{c(){e=r("Neural Architecture: N-HiTS")},l(t){e=l(t,"Neural Architecture: N-HiTS")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Kh(c){let e,t,i,s,o,h;return t=new Y({props:{id:"challu"}}),s=new Y({props:{id:"gilpin"}}),{c(){e=r("The N-HiTS "),x(t.$$.fragment),i=r(` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),x(s.$$.fragment),o=r(`, it seemed like the natural starting point
			for a network architecture.`)},l(f){e=l(f,"The N-HiTS "),k(t.$$.fragment,f),i=l(f,` forecasting network is known to produce state-of-the-art results,
			at the time of writing, for univariate time series prediction, with up to an order of magnitude
			lower computational requirement than some competitors. Given my limited budget and its strong
			performance reported in `),k(s.$$.fragment,f),o=l(f,`, it seemed like the natural starting point
			for a network architecture.`)},m(f,n){m(f,e,n),I(t,f,n),m(f,i,n),I(s,f,n),m(f,o,n),h=!0},p:W,i(f){h||(y(t.$$.fragment,f),y(s.$$.fragment,f),h=!0)},o(f){b(t.$$.fragment,f),b(s.$$.fragment,f),h=!1},d(f){f&&(a(e),a(i),a(o)),j(t,f),j(s,f)}}}function Jh(c){let e,t,i,s,o,h;return t=new Y({props:{id:"oreshkin"}}),s=new Y({props:{id:"oreshkin"}}),{c(){e=r("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),x(t.$$.fragment),i=r(`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),x(s.$$.fragment),o=r(".")},l(f){e=l(f,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),k(t.$$.fragment,f),i=l(f,`, a neural basis expansion network for time series prediction. The key ideas inherited
			from N-BEATS include the organization of fully connected layers into blocks that output
			basis expansions (linear projections of the preceding fully connected layer's output)
			and the use of both forecast and backcast predictions from each block. The forecast
			predictions from all blocks are summed together to produce the final output of the
			network, while the backcasts are subtracted from the input of the corresponding block to
			produce a residual connection as the input to the next block. The goal of the backcasts
			is to help the downstream blocks by "removing components of their input that are not
			helpful for forecasting" `),k(s.$$.fragment,f),o=l(f,".")},m(f,n){m(f,e,n),I(t,f,n),m(f,i,n),I(s,f,n),m(f,o,n),h=!0},p:W,i(f){h||(y(t.$$.fragment,f),y(s.$$.fragment,f),h=!0)},o(f){b(t.$$.fragment,f),b(s.$$.fragment,f),h=!1},d(f){f&&(a(e),a(i),a(o)),j(t,f),j(s,f)}}}function Xh(c){let e,t,i,s;return t=new Y({props:{id:"challu"}}),{c(){e=r(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),x(t.$$.fragment),i=r(".")},l(o){e=l(o,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
			horizons while keeping computational complexity low. They include the use of pooling
			layers that downsample the inputs to each block and upsampling layers that map a
			compressed representation of the forecast to the output sample rate. In addition to the
			complexity savings, the compressed representations may induce a bias towards a temporal
			hierarchical modeling of the time series across the blocks that allows N-HiTS to exceed
			the performance of competing long-horizon forecasting models while requiring an order of
			magnitude lower computational complexity `),k(t.$$.fragment,o),i=l(o,".")},m(o,h){m(o,e,h),I(t,o,h),m(o,i,h),s=!0},p:W,i(o){s||(y(t.$$.fragment,o),s=!0)},o(o){b(t.$$.fragment,o),s=!1},d(o){o&&(a(e),a(i)),j(t,o)}}}function Yh(c){let e;return{c(){e=r("Experiments")},l(t){e=l(t,"Experiments")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Qh(c){let e,t,i,s;return t=new Y({props:{id:"gilpin"}}),{c(){e=r(`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),x(t.$$.fragment),i=r(`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},l(o){e=l(o,`While Gilpin's experiments focus on testing 24 different time-series prediction models
			on over 130 different chaotic systems using a relatively narrow range of hyper
			parameters for tuning `),k(t.$$.fragment,o),i=l(o,`, my experiments aim to tune a single model,
			N-HiTS, on a single system, the Lorenz Attractor, to maximize its accuracy for a given,
			relatively long, fixed horizon (aka prediction window length). And more specifically, I
			aim not only to achieve a low average error on the test set but also to limit the
			worst-case error as much as possible, which will likely mean achieving a degree of
			predictive power over the most chaotic regions of the system. Is this a completely naive
			aspiration given what is known about chaotic systems? Maybe, but I'm not really sure
			yet, and either way this should be a great learning experience...
		`)},m(o,h){m(o,e,h),I(t,o,h),m(o,i,h),s=!0},p:W,i(o){s||(y(t.$$.fragment,o),s=!0)},o(o){b(t.$$.fragment,o),s=!1},d(o){o&&(a(e),a(i)),j(t,o)}}}function tc(c){let e;return{c(){e=r("Data Generation")},l(t){e=l(t,"Data Generation")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function ec(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function nc(c){let e;return{c(){e=r("IVP solver")},l(t){e=l(t,"IVP solver")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function ic(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function oc(c){let e,t="$H$",i,s,o="$dt$",h,f,n="$0.015$",g,_,d,v,M,T,S="$dt$",G,A,E,Z="after",O,et="$dt$",K,q,F,J,tt="$\\approx 1.8\\mathrm{e}{-4}$",X,ft,ot;return d=new V({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[ec]},$$scope:{ctx:c}}}),M=new V({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[nc]},$$scope:{ctx:c}}}),F=new V({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[ic]},$$scope:{ctx:c}}}),{c(){e=r("I begin with a horizon (prediction window), "),i=r(t),s=r(", of 100 points, using a "),h=r(o),f=r(` of
			approximately
			`),g=r(n),_=r(" seconds per point (the default from "),x(d.$$.fragment),v=r(") to sample the solution produced by the "),x(M.$$.fragment),T=r(". Importantly, note that this "),G=r(S),A=r(` is only the one used for sampling the solution
			`),E=L("i"),E.textContent=Z,O=r(`
			it is generated by the IVP solver. The actual `),K=r(et),q=r(` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),x(F.$$.fragment),J=r(" is "),X=r(tt),ft=r(`.
		`)},l(R){e=l(R,"I begin with a horizon (prediction window), "),i=l(R,t),s=l(R,", of 100 points, using a "),h=l(R,o),f=l(R,` of
			approximately
			`),g=l(R,n),_=l(R," seconds per point (the default from "),k(d.$$.fragment,R),v=l(R,") to sample the solution produced by the "),k(M.$$.fragment,R),T=l(R,". Importantly, note that this "),G=l(R,S),A=l(R,` is only the one used for sampling the solution
			`),E=P(R,"I",{"data-svelte-h":!0}),U(E)!=="svelte-10nlrz4"&&(E.textContent=Z),O=l(R,`
			it is generated by the IVP solver. The actual `),K=l(R,et),q=l(R,` used internally by the IVP solver
			can vary dynamically, but the initial target value used by `),k(F.$$.fragment,R),J=l(R," is "),X=l(R,tt),ft=l(R,`.
		`)},m(R,B){m(R,e,B),m(R,i,B),m(R,s,B),m(R,h,B),m(R,f,B),m(R,g,B),m(R,_,B),I(d,R,B),m(R,v,B),I(M,R,B),m(R,T,B),m(R,G,B),m(R,A,B),m(R,E,B),m(R,O,B),m(R,K,B),m(R,q,B),I(F,R,B),m(R,J,B),m(R,X,B),m(R,ft,B),ot=!0},p(R,B){const mi={};B&1&&(mi.$$scope={dirty:B,ctx:R}),d.$set(mi);const ui={};B&1&&(ui.$$scope={dirty:B,ctx:R}),M.$set(ui);const Gi={};B&1&&(Gi.$$scope={dirty:B,ctx:R}),F.$set(Gi)},i(R){ot||(y(d.$$.fragment,R),y(M.$$.fragment,R),y(F.$$.fragment,R),ot=!0)},o(R){b(d.$$.fragment,R),b(M.$$.fragment,R),b(F.$$.fragment,R),ot=!1},d(R){R&&(a(e),a(i),a(s),a(h),a(f),a(g),a(_),a(v),a(T),a(G),a(A),a(E),a(O),a(K),a(q),a(J),a(X),a(ft)),j(d,R),j(M,R),j(F,R)}}}function ac(c){let e;return{c(){e=r("Lyapunov exponent")},l(t){e=l(t,"Lyapunov exponent")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function sc(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function rc(c){let e;return{c(){e=r("Lyapunov time")},l(t){e=l(t,"Lyapunov time")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function lc(c){let e,t,i,s,o,h="$\\lambda_{max}$",f,n,g="$0.8917$",_,d,v,M,T="$1.121s$",S,G,A;return t=new V({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[ac]},$$scope:{ctx:c}}}),s=new V({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[sc]},$$scope:{ctx:c}}}),v=new V({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[rc]},$$scope:{ctx:c}}}),{c(){e=r(`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),x(t.$$.fragment),i=r(`.
			As reported in
			`),x(s.$$.fragment),o=r(", the Lyapunov exponent, "),f=r(h),n=r(`,
			for the Lorenz Attractor is approx. `),_=r(g),d=r(", and so the "),x(v.$$.fragment),M=r(` is approx.
			`),S=r(T),G=r(".")},l(E){e=l(E,`At this stage, it may also be worth mentioning one of the common metrics for measuring
			the average chaoticity of a system, the maximum
			`),k(t.$$.fragment,E),i=l(E,`.
			As reported in
			`),k(s.$$.fragment,E),o=l(E,", the Lyapunov exponent, "),f=l(E,h),n=l(E,`,
			for the Lorenz Attractor is approx. `),_=l(E,g),d=l(E,", and so the "),k(v.$$.fragment,E),M=l(E,` is approx.
			`),S=l(E,T),G=l(E,".")},m(E,Z){m(E,e,Z),I(t,E,Z),m(E,i,Z),I(s,E,Z),m(E,o,Z),m(E,f,Z),m(E,n,Z),m(E,_,Z),m(E,d,Z),I(v,E,Z),m(E,M,Z),m(E,S,Z),m(E,G,Z),A=!0},p(E,Z){const O={};Z&1&&(O.$$scope={dirty:Z,ctx:E}),t.$set(O);const et={};Z&1&&(et.$$scope={dirty:Z,ctx:E}),s.$set(et);const K={};Z&1&&(K.$$scope={dirty:Z,ctx:E}),v.$set(K)},i(E){A||(y(t.$$.fragment,E),y(s.$$.fragment,E),y(v.$$.fragment,E),A=!0)},o(E){b(t.$$.fragment,E),b(s.$$.fragment,E),b(v.$$.fragment,E),A=!1},d(E){E&&(a(e),a(i),a(o),a(f),a(n),a(_),a(d),a(M),a(S),a(G)),j(t,E),j(s,E),j(v,E)}}}function hc(c){let e,t,i="on average",s,o="$e$",h,f,n="$1.121$",g,_,d="$\\frac{4}{3}$",v,M,T,S='<a href="#lyapunov">1</a>',G;return{c(){e=r("This tells us that, "),t=L("i"),t.textContent=i,s=r(`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),h=r(o),f=r(` after
			`),g=r(n),_=r(` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=r(d),M=r(`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),T=L("sup"),T.innerHTML=S,G=r(`, a
			defining feature of all chaotic systems.`)},l(A){e=l(A,"This tells us that, "),t=P(A,"I",{"data-svelte-h":!0}),U(t)!=="svelte-ggx8py"&&(t.textContent=i),s=l(A,`, the distance between any two trajectories from
			the Lorenz Attractor are expected to diverge by a factor of `),h=l(A,o),f=l(A,` after
			`),g=l(A,n),_=l(A,` seconds. Note that with these parameters, the horizon covers a time period of
			about
			`),v=l(A,d),M=l(A,`
			of the Lyapunov time. I can't say too much about the significance of this yet, other than
			to point out that because the Lyapunov exponent is positive, the distance between any two
			trajectories grows exponentially with time `),T=P(A,"SUP",{"data-svelte-h":!0}),U(T)!=="svelte-1b4twc5"&&(T.innerHTML=S),G=l(A,`, a
			defining feature of all chaotic systems.`)},m(A,E){m(A,e,E),m(A,t,E),m(A,s,E),m(A,h,E),m(A,f,E),m(A,g,E),m(A,_,E),m(A,v,E),m(A,M,E),m(A,T,E),m(A,G,E)},p:W,d(A){A&&(a(e),a(t),a(s),a(h),a(f),a(g),a(_),a(v),a(M),a(T),a(G))}}}function cc(c){let e,t="$[-9.79, -15.04, 20.53]$",i,s,o="$[0.99,1.01]$",h,f;return{c(){e=r(`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=r(t),s=r(` and multiplied by a random
			perturbation uniformly sampled from the interval `),h=r(o),f=r(".")},l(n){e=l(n,`The initial train and test sets are comprised of many trajectories with initial
			conditions all centered at approx. `),i=l(n,t),s=l(n,` and multiplied by a random
			perturbation uniformly sampled from the interval `),h=l(n,o),f=l(n,".")},m(n,g){m(n,e,g),m(n,i,g),m(n,s,g),m(n,h,g),m(n,f,g)},p:W,d(n){n&&(a(e),a(i),a(s),a(h),a(f))}}}function fc(c){let e,t="$3*100 = 300$",i,s,o="$3 * (500 + 100) = 1800$",h,f;return{c(){e=r(`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=r(t),s=r(`, and each
			training sample's length is `),h=r(o),f=r(").")},l(n){e=l(n,`The input to the N-HiTs model is a lookback window of the previous series values whose
			length is typically some multiple of the horizon window. I went with the default value
			from the N-HiTS paper of 5 times the horizon window length, or 500 points, making each
			training sample a total of 600 points. (Note that because N-HiTs is a univariate model,
			while the Lorenz System is three-dimensional, the data points must be flattened into one
			dimension. Therefore, the horizon window length is actually `),i=l(n,t),s=l(n,`, and each
			training sample's length is `),h=l(n,o),f=l(n,").")},m(n,g){m(n,e,g),m(n,i,g),m(n,s,g),m(n,h,g),m(n,f,g)},p:W,d(n){n&&(a(e),a(i),a(s),a(h),a(f))}}}function mc(c){let e,t=`$10,000 - 600 +
		1 = 9401$`,i,s,o,h='<a href="#initial-conditions">2</a>',f;return{c(){e=r(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=r(t),s=r(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),o=L("sup"),o.innerHTML=h,f=r(".")},l(n){e=l(n,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
			increase data efficiency, I select each training sample by sliding the 600-point window
			along the series with a one-point stride. Each series, therefore, contributes `),i=l(n,t),s=l(n,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
			and train on 19 of them, and hold out 3 series for validation and 3 series for testing`),o=P(n,"SUP",{"data-svelte-h":!0}),U(o)!=="svelte-uv3gx8"&&(o.innerHTML=h),f=l(n,".")},m(n,g){m(n,e,g),m(n,i,g),m(n,s,g),m(n,o,g),m(n,f,g)},p:W,d(n){n&&(a(e),a(i),a(s),a(o),a(f))}}}function uc(c){let e;return{c(){e=r("Model 1")},l(t){e=l(t,"Model 1")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function pc(c){let e;return{c(){e=r("The full set of N-HiTS hyperparameters for the first model configuration is:")},l(t){e=l(t,"The full set of N-HiTS hyperparameters for the first model configuration is:")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function dc(c){let e,t,i,s,o,h;return t=new Y({props:{id:"challu"}}),s=new Y({props:{id:"gilpin"}}),{c(){e=r("The model is optimized with MAE loss, consistent with the default loss from "),x(t.$$.fragment),i=r(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),x(s.$$.fragment),o=r(":")},l(f){e=l(f,"The model is optimized with MAE loss, consistent with the default loss from "),k(t.$$.fragment,f),i=l(f,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as
			defined in
			`),k(s.$$.fragment,f),o=l(f,":")},m(f,n){m(f,e,n),I(t,f,n),m(f,i,n),I(s,f,n),m(f,o,n),h=!0},p:W,i(f){h||(y(t.$$.fragment,f),y(s.$$.fragment,f),h=!0)},o(f){b(t.$$.fragment,f),b(s.$$.fragment,f),h=!1},d(f){f&&(a(e),a(i),a(o)),j(t,f),j(s,f)}}}function $c(c){let e;return{c(){e=r(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},l(t){e=l(t,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of
			average window errors and its CDF on the test set are shown below. Note that the left y
			axis is log-scaled.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function gc(c){let e;return{c(){e=r("Model 1 - sMAPE error distribution on the test set")},l(t){e=l(t,"Model 1 - sMAPE error distribution on the test set")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function wc(c){let e;return{c(){e=r(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},l(t){e=l(t,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
			individual window predictions against the references:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function vc(c){let e;return{c(){e=r(`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},l(t){e=l(t,`Samples of three different 100-point predictions from Model 1 with small, medium,
				and large sMAPE errors`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function yc(c){let e;return{c(){e=r(`One interesting observation in all three graphs is that there appears to be a kind of
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
			alignment within the prediction window.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function bc(c){let e;return{c(){e=r(`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},l(t){e=l(t,`The behavior of Model 1 for an especially challenging case at a minimum Euclidean
				distance of 4.7 from the origin, which is a critical point of the system. In
				contrast to all other regions of this trajectory, the model seems highly uncertain
				of how the trajectory will evolve shortly after passing near the origin.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function _c(c){let e;return{c(){e=r("critical points")},l(t){e=l(t,"critical points")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function xc(c){let e,t,i,s,o,h,f,n,g,_;return t=new V({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[_c]},$$scope:{ctx:c}}}),s=new Y({props:{id:"osinga"}}),h=new Y({props:{id:"osinga"}}),n=new Y({props:{id:"osinga"}}),{c(){e=r(`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),x(t.$$.fragment),i=r(` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),x(s.$$.fragment),o=r(` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),x(h.$$.fragment),f=r(`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),x(n.$$.fragment),g=r(`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},l(d){e=l(d,`For anyone familiar with dynamical systems theory, it won't be a surprise that this
			point coincides with one of the three `),k(t.$$.fragment,d),i=l(d,` of the Lorenz system—in this case, the origin. And in this parameterization, the
			origin is known to be a saddle point comprised of the intersection of a stable 2D manifold
			and an unstable 1D manifold. "Stable" here means that trajectories near the critical point
			tend to move towards it even if they are perturbed slightly away from it by other forces,
			while "unstable" implies the opposite. (See `),k(s.$$.fragment,d),o=l(d,` for some excellent visualizations
			of these manifolds.) Near the origin, the unstable manifold is a line that is approximately
			perpendicular to the Z axis and parallel to the lengthwise orientation of the Attractor,
			which is why the trajectories always diverge at the near-90-degree angles that we see in
			the animations as they approach the origin. And the (incredibly complex) topography of the
			stable 2D manifold determines towards which of the other two critical points a trajectory
			will be deflected `),k(h.$$.fragment,d),f=l(d,`. In fact, we might technically say that the
			primary goal of the neural network is to learn the topography of the origin's stable 2D
			manifold; according to `),k(n.$$.fragment,d),g=l(d,`, this manifold defines a boundary across
			which trajectories can never pass, so we can confine the past and future path of any
			trajectory based on the boundaries of this manifold.
		`)},m(d,v){m(d,e,v),I(t,d,v),m(d,i,v),I(s,d,v),m(d,o,v),I(h,d,v),m(d,f,v),I(n,d,v),m(d,g,v),_=!0},p(d,v){const M={};v&1&&(M.$$scope={dirty:v,ctx:d}),t.$set(M)},i(d){_||(y(t.$$.fragment,d),y(s.$$.fragment,d),y(h.$$.fragment,d),y(n.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),b(s.$$.fragment,d),b(h.$$.fragment,d),b(n.$$.fragment,d),_=!1},d(d){d&&(a(e),a(i),a(o),a(f),a(g)),j(t,d),j(s,d),j(h,d),j(n,d)}}}function kc(c){let e;return{c(){e=r("Hartman-Grobman Theorem")},l(t){e=l(t,"Hartman-Grobman Theorem")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ic(c){let e,t,i,s="$f(t) = \\exp(\\lambda t)x_0$",o,h,f="$\\lambda$",n,g,_="$x_0$",d,v,M="$\\approx 11.8$",T,S,G;return t=new V({props:{href:"https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem",$$slots:{default:[kc]},$$scope:{ctx:c}}}),{c(){e=r(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),x(t.$$.fragment),i=r(`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),o=r(s),h=r(`,
			where `),n=r(f),g=r(" equals the eigenvalue and "),d=r(_),v=r(` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),T=r(M),S=r(`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},l(A){e=l(A,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
			Jacobian matrix of the system at the origin and assuming the dynamics are approximately
			linear in this region (see `),k(t.$$.fragment,A),i=l(A,`). When we do this, we get three eigenvalues, two of which have negative real
			components and are associated with the stable 2D manifold, and the third which has
			positive real component and is associated with the unstable 1D manifold. The dynamics
			along the manifolds near the origin can be approximated by the expression `),o=l(A,s),h=l(A,`,
			where `),n=l(A,f),g=l(A," equals the eigenvalue and "),d=l(A,_),v=l(A,` is some initial point. For the Lorenz
			Attractor, the eigenvalue associated with the unstable manifold is `),T=l(A,M),S=l(A,`,
			so trajectories will be rapidly deflected away from the origin along the unstable
			manifold, as we see in the below animation:`)},m(A,E){m(A,e,E),I(t,A,E),m(A,i,E),m(A,o,E),m(A,h,E),m(A,n,E),m(A,g,E),m(A,d,E),m(A,v,E),m(A,T,E),m(A,S,E),G=!0},p(A,E){const Z={};E&1&&(Z.$$scope={dirty:E,ctx:A}),t.$set(Z)},i(A){G||(y(t.$$.fragment,A),G=!0)},o(A){b(t.$$.fragment,A),G=!1},d(A){A&&(a(e),a(i),a(o),a(h),a(n),a(g),a(d),a(v),a(T),a(S)),j(t,A)}}}function jc(c){let e;return{c(){e=r(`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},l(t){e=l(t,`The trajectories from the training set all begin at nearly the same point but
				quickly diverge as they approach the critical point at the origin.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Mc(c){let e;return{c(){e=r(`Given all of this background, it is now unsurprising that the model is struggling to
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
			see if those changes alone are enough to resolve the weaknesses of Model 1.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ac(c){let e;return{c(){e=r("Model 2")},l(t){e=l(t,"Model 2")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Tc(c){let e;return{c(){e=r(`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},l(t){e=l(t,`For the next model, I increased the number of unique initial conditions from 25 to
			10,000, and held out 100 for validation and 200 for testing, leaving 9,700 unique
			initial conditions, each of length 10,000 points, or about 150 seconds, in the training
			set. I also expanded the range of hyperparameters for tuning to include significantly
			larger models, both in depth and width. After tuning, I arrived at the following
			settings:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function zc(c){let e;return{c(){e=r("Model 2 vs Model 1 - sMAPE error distribution.")},l(t){e=l(t,"Model 2 vs Model 1 - sMAPE error distribution.")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ec(c){let e;return{c(){e=r(`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},l(t){e=l(t,`From the plot, we see a significant increase in the first bin and a reduction in every
			subsequent bin of the per-window error histogram relative to Model 1, so the larger
			dataset and new hyperparameter tunings have a definite and significant positive impact.
			99% of windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1,
			and 99.9% have a sMAPE less than 40, compared to 98% for Model 1.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Lc(c){let e;return{c(){e=r(`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},l(t){e=l(t,`There are, however, still a handful of windows with very large sMAPE errors. We can
			visualize these errors slightly differently to get a better sense of how they are
			distributed within and across the test series:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Pc(c){let e;return{c(){e=r("Model 2 - sMAPE errors per series per window in the test set.")},l(t){e=l(t,"Model 2 - sMAPE errors per series per window in the test set.")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Cc(c){let e;return{c(){e=r(`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},l(t){e=l(t,`We see that very large errors occur quite rarely and briefly, with the predictions
			spending most of the time near the ground truth. Let's check the animation for one of
			the large spikes with a sMAPE greater than 100:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Hc(c){let e;return{c(){e=r(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},l(t){e=l(t,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. 'DFO'
				indicates the minimum distance from the origin of the points in the prediction
				window.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Sc(c){let e;return{c(){e=r(`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},l(t){e=l(t,`Not surprisingly, this trajectory passes very close to the origin, and we immediately
			see how similar this failure case is to the one from Model 1. Despite the average
			improvement across all error magnitudes, has the model's ability to predict the behavior
			near the unstable origin actually improved relative to Model 1? Let's check:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Rc(c){let e,t="$n$",i,s,o="$n-1$",h,f,n="$n+1$",g,_;return{c(){e=r(`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=r(t),s=r(`
				that is closer to the origin than the points at `),h=r(o),f=r(" and "),g=r(n),_=r(".")},l(d){e=l(d,`Each local minimum distance from the origin on the ground truth trajectories is
				calculated, and the corresponding maximum sMAPE error among the windows that
				included the minimum in its target is shown. A local minimum is defined as a point
				at time `),i=l(d,t),s=l(d,`
				that is closer to the origin than the points at `),h=l(d,o),f=l(d," and "),g=l(d,n),_=l(d,".")},m(d,v){m(d,e,v),m(d,i,v),m(d,s,v),m(d,h,v),m(d,f,v),m(d,g,v),m(d,_,v)},p:W,d(d){d&&(a(e),a(i),a(s),a(h),a(f),a(g),a(_))}}}function Nc(c){let e;return{c(){e=r(`As we can clearly see from the plot, Model 2 is able to predict points that are closer
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
			strategy?`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Dc(c){let e;return{c(){e=r("Model 3")},l(t){e=l(t,"Model 3")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Gc(c){let e;return{c(){e=r(`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},l(t){e=l(t,`With Model 2, we drastically increased both model capacity and dataset size, and we only
			achieved a marginal improvement on the most difficult trajectories. In this round of
			experiments, I will try a couple of new ideas that more specifically target these weak
			areas.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function qc(c){let e;return{c(){e=r("3.1: Biased Dataset Distribution")},l(t){e=l(t,"3.1: Biased Dataset Distribution")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Fc(c){let e;return{c(){e=r("Radau solver")},l(t){e=l(t,"Radau solver")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Zc(c){let e,t,i,s="$1\\mathrm{e}{30}$",o,h,f;return t=new V({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[Fc]},$$scope:{ctx:c}}}),{c(){e=r(`The first idea is to increase the percentage of trajectories in the dataset that pass
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
			exponentially. In all of my attempts using the `),x(t.$$.fragment),i=r(` with error tolerances approaching the limits of double precision, the X coordinate grew
			to the order of about `),o=r(s),h=r(`
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
			to the order of about `),o=l(n,s),h=l(n,`
			after about 0.5 seconds.`)},m(n,g){m(n,e,g),I(t,n,g),m(n,i,g),m(n,o,g),m(n,h,g),f=!0},p(n,g){const _={};g&1&&(_.$$scope={dirty:g,ctx:n}),t.$set(_)},i(n){f||(y(t.$$.fragment,n),f=!0)},o(n){b(t.$$.fragment,n),f=!1},d(n){n&&(a(e),a(i),a(o),a(h)),j(t,n)}}}function Vc(c){let e,t="$t \\to \\infty$",i,s,o,h="might",f,n,g="e.g.",_,d,v;return _=new Y({props:{id:"osinga"}}),{c(){e=r(`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=r(t),s=r(`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),o=L("i"),o.textContent=h,f=r(` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=L("i"),n.textContent=g,x(_.$$.fragment),d=r(`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},l(M){e=l(M,`What's going on here? One possible explanation has to do with the finite volume that
			the attractor occupies. When we generate a forward solution starting with a point that
			is already on, or very close to, the attractor, we should be almost guaranteed to end up
			with a trajectory that remains on the attractor as `),i=l(M,t),s=l(M,`, as this is the
			definition of an attractor after all. But the phase space is unbounded, and when we
			generate a backwards time solution, we are choosing a point on some aribtrary trajectory
			from the set of all trajectories in the phase space, including the ones that begin very
			far away from the attractor volume. The probability of randomly selecting a point that
			corresponds with a trajectory that has already been on the attractor for a sufficiently
			long period of time `),o=P(M,"I",{"data-svelte-h":!0}),U(o)!=="svelte-ah22qx"&&(o.textContent=h),f=l(M,` be very low. However, this theory doesn't seem to
			explain why the X coordinate specifically would explode, while Y and Z remain on the
			attractor. And there are plenty of research papers that analyze backwards time solutions
			to the Lorenz Attractor (`),n=P(M,"I",{"data-svelte-h":!0}),U(n)!=="svelte-1yxphdm"&&(n.textContent=g),k(_.$$.fragment,M),d=l(M,`), so clearly it is possible to
			generate backwards time solutions, I just have not been able to determine how. Possibly
			there is some issue with the numerical stability of the approaches I tried.
		`)},m(M,T){m(M,e,T),m(M,i,T),m(M,s,T),m(M,o,T),m(M,f,T),m(M,n,T),I(_,M,T),m(M,d,T),v=!0},p:W,i(M){v||(y(_.$$.fragment,M),v=!0)},o(M){b(_.$$.fragment,M),v=!1},d(M){M&&(a(e),a(i),a(s),a(o),a(f),a(n),a(d)),j(_,M)}}}function Bc(c){let e,t="$\\lt{3}$",i,s;return{c(){e=r(`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=r(t),s=r(`
			by a factor of about 10, while the total number of windows is the same as before:`)},l(o){e=l(o,`Failing to employ the backwards-time method, I will resort to cruder methods for
			generating a biased dataset. First I generate a very large number of trajectories (many
			more than I intend to use during training) using the same method as before for choosing
			the initial conditions. Then I sort these trajectories according to their minimum-L2
			point and select the first N trajectories for inclusion in the dataset. I also take care
			to ensure that the distribution of trajectories across train, validation, and test sets
			is uniform with respect to these minimum points. When we plot the histogram of the
			windows from the dataset, grouping the windows based on their minimum points, we see
			that we've increased the number of windows in each of the groups with a distance from
			the origin `),i=l(o,t),s=l(o,`
			by a factor of about 10, while the total number of windows is the same as before:`)},m(o,h){m(o,e,h),m(o,i,h),m(o,s,h)},p:W,d(o){o&&(a(e),a(i),a(s))}}}function Uc(c){let e;return{c(){e=r(`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},l(t){e=l(t,`Distribution of windows in the dataset based on minimum distance from the origin
				for Model 2 and Model 3.1.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Wc(c){let e;return{c(){e=r(`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},l(t){e=l(t,`When we retrain the model using this dataset, we see a very slight improvement on the
			toughest cases. The error curve still increases asymptotically as the trajectory minima
			approach the origin, but it's also shifted slightly to the left:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Oc(c){let e;return{c(){e=r(`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},l(t){e=l(t,`With 10x more samples of the most difficult trajectories in its dataset, Model 3.1
				makes very marginal improvements over Model 2.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Kc(c){let e;return{c(){e=r(`Possibly we might continue to see incremental improvements if we continue to increase
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
			dataset size to address this problem first.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Jc(c){let e,t="$dt$",i;return{c(){e=r("3.2: Reduced "),i=r(t)},l(s){e=l(s,"3.2: Reduced "),i=l(s,t)},m(s,o){m(s,e,o),m(s,i,o)},p:W,d(s){s&&(a(e),a(i))}}}function Xc(c){let e,t="$dt$",i,s,o="$dt$",h,f,n="$\\approx0.015$",g,_,d="$\\approx0.003$",v,M,T="$\\approx1.5$",S,G,A="$2H$",E,Z,O="$5H$",et,K;return{c(){e=r("The next idea is to increase the temporal resolution of the model by using a smaller "),i=r(t),s=r(`
			to generate the data points. So far I've used a `),h=r(o),f=r(" of "),g=r(n),_=r(`. Here
			I'll try reducing that by a factor of 5 to `),v=r(d),M=r(`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),S=r(T),G=r(`
			seconds. From tuning, I found that an input size of `),E=r(A),Z=r(` performs just as well as an
			input size of `),et=r(O),K=r(`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},l(q){e=l(q,"The next idea is to increase the temporal resolution of the model by using a smaller "),i=l(q,t),s=l(q,`
			to generate the data points. So far I've used a `),h=l(q,o),f=l(q," of "),g=l(q,n),_=l(q,`. Here
			I'll try reducing that by a factor of 5 to `),v=l(q,d),M=l(q,`, and in order to keep the
			prediction task equally difficult, I'll also increase the horizon window by a factor of
			5 to 500 so that the total amount of time being predicted is still `),S=l(q,T),G=l(q,`
			seconds. From tuning, I found that an input size of `),E=l(q,A),Z=l(q,` performs just as well as an
			input size of `),et=l(q,O),K=l(q,`, so I'll only increase the input size to 1000. I'll also use the
			same method as with 3.1 for generating a biased dataset, this time with 50,000 points
			per trajectory.`)},m(q,F){m(q,e,F),m(q,i,F),m(q,s,F),m(q,h,F),m(q,f,F),m(q,g,F),m(q,_,F),m(q,v,F),m(q,M,F),m(q,S,F),m(q,G,F),m(q,E,F),m(q,Z,F),m(q,et,F),m(q,K,F)},p:W,d(q){q&&(a(e),a(i),a(s),a(h),a(f),a(g),a(_),a(v),a(M),a(S),a(G),a(E),a(Z),a(et),a(K))}}}function Yc(c){let e;return{c(){e=r("The new hyperparameters for Model 3.2 are:")},l(t){e=l(t,"The new hyperparameters for Model 3.2 are:")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Qc(c){let e;return{c(){e=r("FSDP Strategy")},l(t){e=l(t,"FSDP Strategy")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function tf(c){let e,t="A sidenote on the practicality of training this model:",i,s,o,h;return s=new V({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[Qc]},$$scope:{ctx:c}}}),{c(){e=L("b"),e.textContent=t,i=r(`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),x(s.$$.fragment),o=r(` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},l(f){e=P(f,"B",{"data-svelte-h":!0}),U(e)!=="svelte-1vhs7sz"&&(e.textContent=t),i=l(f,`
			By increasing the input size and horizon length, we have significantly increased the memory
			requirement for training this model. Now in order to fit the model onto two GPUs with 16
			GB of RAM each, I have to use Lightning's `),k(s.$$.fragment,f),o=l(f,` to distribute the model across both GPUs in order to get the per-GPU memory requirement
			to be just a hair under 16 GB. This also means that the model trains significantly more slowly,
			taking about 36 hours to converge, compared to about 16 hours for Model 2.`)},m(f,n){m(f,e,n),m(f,i,n),I(s,f,n),m(f,o,n),h=!0},p(f,n){const g={};n&1&&(g.$$scope={dirty:n,ctx:f}),s.$set(g)},i(f){h||(y(s.$$.fragment,f),h=!0)},o(f){b(s.$$.fragment,f),h=!1},d(f){f&&(a(e),a(i),a(o)),j(s,f)}}}function ef(c){let e;return{c(){e=r(`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},l(t){e=l(t,`With 10x more samples of the most difficult trajectories and 5x the temporal
				resolution of Model 2, Model 3.2 achieves marginal improvements but still has an
				asymptotic error curve.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function nf(c){let e;return{c(){e=r("Autoregressive Prediction")},l(t){e=l(t,"Autoregressive Prediction")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function of(c){let e,t="$L$",i,s,o="$L$",h,f;return{c(){e=r(`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=r(t),s=r(`
			samples of the reference trajectory, where `),h=r(o),f=r(` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},l(n){e=l(n,`For the last experiment, I'll investigate the performance of the model when it is being
			used auto-regressively to generate a trajectory of arbitrary length given only the first `),i=l(n,t),s=l(n,`
			samples of the reference trajectory, where `),h=l(n,o),f=l(n,` is the input size of the model. This test
			can measure another aspect of the stability of the model: if the model produces small errors
			in its output that are then fed back to its input, do these errors compound in the feedback
			loop, leading to larger and larger errors in the output over time? Or does the model remain
			robust to these small input errors and continue to produce plausible trajectories indefinitely?
		`)},m(n,g){m(n,e,g),m(n,i,g),m(n,s,g),m(n,h,g),m(n,f,g)},p:W,d(n){n&&(a(e),a(i),a(s),a(h),a(f))}}}function af(c){let e;return{c(){e=r("shadowing lemma")},l(t){e=l(t,"shadowing lemma")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function sf(c){let e,t,i="i.e.",s,o,h,f,n="e.g.",g,_,d,v;return o=new V({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[af]},$$scope:{ctx:c}}}),_=new Y({props:{id:"chandramoorthy"}}),{c(){e=r(`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=L("i"),t.textContent=i,s=r(` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),x(o.$$.fragment),h=r(` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),f=L("i"),f.textContent=n,g=C(),x(_.$$.fragment),d=r(`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},l(M){e=l(M,`The term "plausible trajectory" needs some explanation, given that, in principle, the
			Lorenz Attractor is fully deterministic, so every trajectory is either a solution of the
			system or it isn't, `),t=P(M,"I",{"data-svelte-h":!0}),U(t)!=="svelte-1xx6z5c"&&(t.textContent=i),s=l(M,` there is no notion of the likelihood of a trajectory
			having been produced by the system or not. In practice, however, due to the finite
			precision of numerical computation, IVP solvers also make mistakes, injecting an element
			of stochasticity into the solutions they produce. The `),k(o.$$.fragment,M),h=l(M,` tells us that, in spite of these errors, these "pseudo orbits" remain arbitrarily close
			to real trajectories so that the final solution can be said to faithfully represent the real
			trajectories of the system. However, some studies, `),f=P(M,"I",{"data-svelte-h":!0}),U(f)!=="svelte-1yxphdm"&&(f.textContent=n),g=H(M),k(_.$$.fragment,M),d=l(M,`, challenge this notion, demonstrating that in certain cases
			the statistics of the solver's outputs are distinct from those of true solutions of the
			system, and they can even imply a different parameterization of the underlying system.
			These are quite troubling implications for real-world applications, but I will delay
			further examination of this topic until the Discussion section.
		`)},m(M,T){m(M,e,T),m(M,t,T),m(M,s,T),I(o,M,T),m(M,h,T),m(M,f,T),m(M,g,T),I(_,M,T),m(M,d,T),v=!0},p(M,T){const S={};T&1&&(S.$$scope={dirty:T,ctx:M}),o.$set(S)},i(M){v||(y(o.$$.fragment,M),y(_.$$.fragment,M),v=!0)},o(M){b(o.$$.fragment,M),b(_.$$.fragment,M),v=!1},d(M){M&&(a(e),a(t),a(s),a(h),a(f),a(g),a(d)),j(o,M),j(_,M)}}}function rf(c){let e,t,i,s;return t=new Y({props:{id:"chandramoorthy"}}),{c(){e=r(`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),x(t.$$.fragment),i=r(`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},l(o){e=l(o,`In light of this, rather than evaluating the difference between the solver output and
			the model output, a more meaningful criterion may be to measure the similarity between
			certain statistics of their outputs. In `),k(t.$$.fragment,o),i=l(o,`, the following
			statistic of the Z coordinate is used to distinguish between what the authors refer to
			as "non-physical" solutions of the Lorenz Attractor and those that are typical true
			solutions:`)},m(o,h){m(o,e,h),I(t,o,h),m(o,i,h),s=!0},p:W,i(o){s||(y(t.$$.fragment,o),s=!0)},o(o){b(t.$$.fragment,o),s=!1},d(o){o&&(a(e),a(i)),j(t,o)}}}function lf(c){let e;return{c(){e=r("Radau")},l(t){e=l(t,"Radau")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function hf(c){let e;return{c(){e=r(`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},l(t){e=l(t,`Comparing the distribution of an expential function of the z coordinate for the
				trajectories generated by Model 3.2 and by the Radau solver.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function cf(c){let e;return{c(){e=r(`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},l(t){e=l(t,`In we inspect them visually, we find that the vast majority of trajectories produced by
			the model look entirely plausible, possibily even indistinguishable to the human eye
			from the typical solver outputs:`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function ff(c){let e;return{c(){e=r(`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},l(t){e=l(t,`Comparison of 5 randomly selected trajectories generated by the IVP solver (top) and
				auto-regressively generated by Model 3.2 (bottom). Each column uses the same initial
				conditions.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function mf(c){let e;return{c(){e=r(`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},l(t){e=l(t,`An autoregressive trajectory that passes very close to the origin and fails to
				remain a plausible solution to the Lorenz Attractor`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function uf(c){let e;return{c(){e=r("dysts")},l(t){e=l(t,"dysts")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function pf(c){let e;return{c(){e=r("Radau")},l(t){e=l(t,"Radau")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function df(c){let e;return{c(){e=r("RK45")},l(t){e=l(t,"RK45")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function $f(c){let e,t,i,s,o,h,f,n;return t=new V({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[uf]},$$scope:{ctx:c}}}),s=new V({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[pf]},$$scope:{ctx:c}}}),h=new V({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[df]},$$scope:{ctx:c}}}),{c(){e=r(`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),x(t.$$.fragment),i=r(" uses the "),x(s.$$.fragment),o=r(" solver by default, and this is what I used to generate the dataset. "),x(h.$$.fragment),f=r(` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},l(g){e=l(g,`Another way to evaluate the autoregressive output of the model is to compare it with
			the output from a different IVP solver with similar error constraints. `),k(t.$$.fragment,g),i=l(g," uses the "),k(s.$$.fragment,g),o=l(g," solver by default, and this is what I used to generate the dataset. "),k(h.$$.fragment,g),f=l(g,` has similar error constraints to Radau, so let's compare the autoregressive output against
			Radau relative to RK45's output against Radau:`)},m(g,_){m(g,e,_),I(t,g,_),m(g,i,_),I(s,g,_),m(g,o,_),I(h,g,_),m(g,f,_),n=!0},p(g,_){const d={};_&1&&(d.$$scope={dirty:_,ctx:g}),t.$set(d);const v={};_&1&&(v.$$scope={dirty:_,ctx:g}),s.$set(v);const M={};_&1&&(M.$$scope={dirty:_,ctx:g}),h.$set(M)},i(g){n||(y(t.$$.fragment,g),y(s.$$.fragment,g),y(h.$$.fragment,g),n=!0)},o(g){b(t.$$.fragment,g),b(s.$$.fragment,g),b(h.$$.fragment,g),n=!1},d(g){g&&(a(e),a(i),a(o),a(f)),j(t,g),j(s,g),j(h,g)}}}function gf(c){let e;return{c(){e=r("solve_ivp")},l(t){e=l(t,"solve_ivp")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function wf(c){let e,t,i,s;return t=new V({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[gf]},$$scope:{ctx:c}}}),{c(){e=r(`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),x(t.$$.fragment),i=r(" is used to produce the IVP solver outputs.")},l(o){e=l(o,`Comparing the mean squared error per timestep between Radau and Model 3 (blue) and
				Radau and RK45 (orange). The error is averaged across 200 different trajectories.
				Scipy's `),k(t.$$.fragment,o),i=l(o," is used to produce the IVP solver outputs.")},m(o,h){m(o,e,h),I(t,o,h),m(o,i,h),s=!0},p(o,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:o}),t.$set(f)},i(o){s||(y(t.$$.fragment,o),s=!0)},o(o){b(t.$$.fragment,o),s=!1},d(o){o&&(a(e),a(i)),j(t,o)}}}function vf(c){let e;return{c(){e=r(`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},l(t){e=l(t,`So we can say that the model is approximating the output of Radau more closely than
			another high-quality IVP solver. Ultimately, all three systems diverge chaotically from
			each other, but in the short term, Model 3 remains closer to Radau than RK45.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function yf(c){let e;return{c(){e=r("Discussion")},l(t){e=l(t,"Discussion")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function bf(c){let e,t,i,s="$2H$",o,h,f="$H$",n,g,_;return t=new Y({props:{id:"challu"}}),{c(){e=r("This project has probed the potential of the NHiTS neural architecture ("),x(t.$$.fragment),i=r(`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),o=r(s),h=r(`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=r(f),g=r(` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},l(d){e=l(d,"This project has probed the potential of the NHiTS neural architecture ("),k(t.$$.fragment,d),i=l(d,`) to forecast the dynamics of the Lorenz Attractor, as estimated by the Radau IVP
			solver. Given `),o=l(d,s),h=l(d,`
			points of an initial trajectory, the neural model demonstrated the ability to predict the
			subsequent
			`),n=l(d,f),g=l(d,` outputs of the Radau solver with very high accuracy in nearly all regions of the
			attractor's subspace. However, the dynamics in one region, the origin, proved to be too complex
			for the models tested here to capture. In all experiments, as trajectories approach the origin
			along the Z axis, the model's prediction error increases asymptotically. Significant efforts
			to augment the training data distribution in order to over-represent trajectories in this
			region imparted little or no improvement to the model's forecasting ability.`)},m(d,v){m(d,e,v),I(t,d,v),m(d,i,v),m(d,o,v),m(d,h,v),m(d,n,v),m(d,g,v),_=!0},p:W,i(d){_||(y(t.$$.fragment,d),_=!0)},o(d){b(t.$$.fragment,d),_=!1},d(d){d&&(a(e),a(i),a(o),a(h),a(n),a(g)),j(t,d)}}}function _f(c){let e;return{c(){e=r(`Similarly, when used autoregressively, the model demonstrated the potential to generate
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
		`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function xf(c){let e;return{c(){e=r(`As already mentioned, it is well understood from dynamical systems theory that the
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
		`)},l(t){e=l(t,`As already mentioned, it is well understood from dynamical systems theory that the
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
		`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function kf(c){let e,t="$38.55$",i,s,o,h,f="$38.45$",n,g,_="$38.6$",d,v,M,T,S='<a href="#outliers">1</a>',G;return{c(){e=r(`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately `),i=r(t),s=r(`. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3,
			`),o=L("i"),h=r("a trajectory having a local maximum Z coordinate in the range of "),n=r(f),g=r(" to "),d=r(_),v=r(`
				is a necessary condition for the model's sMAPE error to exceed 5`),M=r(`
			in the time period immediately following its transit past the origin`),T=L("sup"),T.innerHTML=S,G=r(".")},l(A){e=l(A,`Trajectories that manage to pass so closely to the origin share other characteristics
			in common; for example, they are always nearly aligned with the Z axis as they approach
			the origin, and their velocities are dominated by the component in the negative Z
			direction. If we trace their paths back a bit farther, we notice a startling consistency
			among all trajectories with non-trivial sMAPE errors: the local maximum of the Z
			coordinate in the region of the trajectory just prior to approaching the origin
			converges to a value of approximately `),i=l(A,t),s=l(A,`. As the model's temporal resolution is
			increased, the bounds on this value become tighter. Remarkably, for Models 2 and 3,
			`),o=P(A,"I",{});var E=N(o);h=l(E,"a trajectory having a local maximum Z coordinate in the range of "),n=l(E,f),g=l(E," to "),d=l(E,_),v=l(E,`
				is a necessary condition for the model's sMAPE error to exceed 5`),E.forEach(a),M=l(A,`
			in the time period immediately following its transit past the origin`),T=P(A,"SUP",{"data-svelte-h":!0}),U(T)!=="svelte-o9bswn"&&(T.innerHTML=S),G=l(A,".")},m(A,E){m(A,e,E),m(A,i,E),m(A,s,E),m(A,o,E),p(o,h),p(o,n),p(o,g),p(o,d),p(o,v),m(A,M,E),m(A,T,E),m(A,G,E)},p:W,d(A){A&&(a(e),a(i),a(s),a(o),a(M),a(T),a(G))}}}function If(c){let e,t,i="minimum",s,o="$38.45$",h,f,n="$38.6$",g,_;return{c(){e=r(`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=L("i"),t.textContent=i,s=r(`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of `),h=r(o),f=r(" to "),g=r(n),_=r(".")},l(d){e=l(d,`The local maximum Z coordinate of trajectories and their maximum sMAPE error in the
				region shortly after passing through the Z coordinate. A local maximum coordinate is
				defined as a coordinate that is larger than both of its immediate neighbors. The
				search region for the largest sMAPE error associated with the local maximum Z
				coordinate is all of the prediction windows that include the local `),t=P(d,"I",{"data-svelte-h":!0}),U(t)!=="svelte-1c66z6u"&&(t.textContent=i),s=l(d,`
				point, as defined previously, that immediately follows the local maximum Z coordinate.
				The first graph shows the entire range of local maximum Z coordinates for Models 2, 3.1,
				and 3.2. The second graph zooms in on the bounds of `),h=l(d,o),f=l(d," to "),g=l(d,n),_=l(d,".")},m(d,v){m(d,e,v),m(d,t,v),m(d,s,v),m(d,h,v),m(d,f,v),m(d,g,v),m(d,_,v)},p:W,d(d){d&&(a(e),a(t),a(s),a(h),a(f),a(g),a(_))}}}function jf(c){let e;return{c(){e=r("Lorenz Map")},l(t){e=l(t,"Lorenz Map")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Mf(c){let e,t,i,s="$Z_{n} = Z_{n+1}$",o,h,f,n="i.e.",g,_="$38.55$",d,v,M;return t=new V({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[jf]},$$scope:{ctx:c}}}),{c(){e=r(`Lorenz himself also noticed peculiar patterns involving to the local maximum Z
			coordinate. He used the `),x(t.$$.fragment),i=r(` to study the patterns; among other things, it helps to identify the local Z maximum that
			corresponds with an unstable periodic orbit on the attractor (when `),o=r(s),h=r(`).
			In the map (shown below for Model 3.2's test set), the x coordinate at the transition
			point, `),f=L("i"),f.textContent=n,g=r(` the peak of the tent, corresponds almost perfectly with the limit
			suggested by the above "Z vs. sMAPE" error plots, around `),d=r(_),v=r(`. And the y
			coordinate that approximately separates the "no transition" dots (blue) from the "lobe
			transition" dots (orange), also corresponds almost perfectly with this value. In other
			words, the most difficult trajectories for our models to predict are the ones that a)
			achieve the near-maximum possible Z coordinate (approximately 48) after passing by the
			origin, and b) straddle the line between transitioning from one lobe to the other or
			remaining on the current lobe for at least another orbital cycle.`)},l(T){e=l(T,`Lorenz himself also noticed peculiar patterns involving to the local maximum Z
			coordinate. He used the `),k(t.$$.fragment,T),i=l(T,` to study the patterns; among other things, it helps to identify the local Z maximum that
			corresponds with an unstable periodic orbit on the attractor (when `),o=l(T,s),h=l(T,`).
			In the map (shown below for Model 3.2's test set), the x coordinate at the transition
			point, `),f=P(T,"I",{"data-svelte-h":!0}),U(f)!=="svelte-1xx6z5c"&&(f.textContent=n),g=l(T,` the peak of the tent, corresponds almost perfectly with the limit
			suggested by the above "Z vs. sMAPE" error plots, around `),d=l(T,_),v=l(T,`. And the y
			coordinate that approximately separates the "no transition" dots (blue) from the "lobe
			transition" dots (orange), also corresponds almost perfectly with this value. In other
			words, the most difficult trajectories for our models to predict are the ones that a)
			achieve the near-maximum possible Z coordinate (approximately 48) after passing by the
			origin, and b) straddle the line between transitioning from one lobe to the other or
			remaining on the current lobe for at least another orbital cycle.`)},m(T,S){m(T,e,S),I(t,T,S),m(T,i,S),m(T,o,S),m(T,h,S),m(T,f,S),m(T,g,S),m(T,d,S),m(T,v,S),M=!0},p(T,S){const G={};S&1&&(G.$$scope={dirty:S,ctx:T}),t.$set(G)},i(T){M||(y(t.$$.fragment,T),M=!0)},o(T){b(t.$$.fragment,T),M=!1},d(T){T&&(a(e),a(i),a(o),a(h),a(f),a(g),a(d),a(v)),j(t,T)}}}function Af(c){let e;return{c(){e=r(`The Lorenz Map for the test set used with Model 3.2. It plots the nth local Z
				maximum coordinate against the (n+1)th. The orange points correspond with maxes that
				preceed transitions between the two lobes of the Lorenz Attractor.`)},l(t){e=l(t,`The Lorenz Map for the test set used with Model 3.2. It plots the nth local Z
				maximum coordinate against the (n+1)th. The orange points correspond with maxes that
				preceed transitions between the two lobes of the Lorenz Attractor.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Tf(c){let e,t="$38.55$",i,s,o="$\\approx 38.55$",h,f;return{c(){e=r(`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is converging towards this Z value around `),i=r(t),s=r(`.
			As long as the local maximum Z coordinate of a trajectory in orbit around one of the two
			non-origin fixed points does not pass through a narrow interval around this value, we
			can be certain (according to the statistics of all of the test sets in this study) that
			the model will forecast the trajectory with a sMAPE error less than 5. If a trajectory's
			peak Z coordinate does pass through this interval, then the model has a roughly 60%
			chance of exhibiting a sMAPE error greater than 5 in the period immediately following
			the peak, until the next peak Z coordinate is reached. An obvious next question to ask
			is, how do we exploit this observation to improve predictability? If the system were
			augmented with a control input of some sort, then the target for that control could be
			to perturb the trajectories so that they avoid passing through this critical region
			around Z `),h=r(o),f=r(`. The results of this study suggest that this alone might
			make the Lorenz Attractor dynamics entirely predictable.`)},l(n){e=l(n,`What can we say about this? It would seem in one sense that the entire predictive
			complexity of the Lorenz Attractor is converging towards this Z value around `),i=l(n,t),s=l(n,`.
			As long as the local maximum Z coordinate of a trajectory in orbit around one of the two
			non-origin fixed points does not pass through a narrow interval around this value, we
			can be certain (according to the statistics of all of the test sets in this study) that
			the model will forecast the trajectory with a sMAPE error less than 5. If a trajectory's
			peak Z coordinate does pass through this interval, then the model has a roughly 60%
			chance of exhibiting a sMAPE error greater than 5 in the period immediately following
			the peak, until the next peak Z coordinate is reached. An obvious next question to ask
			is, how do we exploit this observation to improve predictability? If the system were
			augmented with a control input of some sort, then the target for that control could be
			to perturb the trajectories so that they avoid passing through this critical region
			around Z `),h=l(n,o),f=l(n,`. The results of this study suggest that this alone might
			make the Lorenz Attractor dynamics entirely predictable.`)},m(n,g){m(n,e,g),m(n,i,g),m(n,s,g),m(n,h,g),m(n,f,g)},p:W,d(n){n&&(a(e),a(i),a(s),a(h),a(f))}}}function zf(c){let e;return{c(){e=r(`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},l(t){e=l(t,`The fact that over-representing such trajectories in the training set by a factor of 10
			did not significantly improve the model's performance on these predictions suggests to
			me that their difficulty stems not from their low occurence in the training set but from
			an asymptotic increase in the sensitivity of the system near the origin. Consider an
			analogy in which all possible trajectories are represented by grooves on a wooden table
			along which a marble can roll, and the origin is a region where all of the grooves
			appear to coalesce so densely that the model lacks the resolution to distinguish among
			them. As the marble proceeds down one groove, it is easily bumped over to another groove
			by the numerical rounding error of the IVP solver, adding an element of pseudo-randomn
			noise to the trajectory.`)},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Ef(c){let e;return{c(){e=r("shadowing lemma")},l(t){e=l(t,"shadowing lemma")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Lf(c){let e,t,i,s,o,h,f="IVP solver",n,g,_,d;return t=new V({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[Ef]},$$scope:{ctx:c}}}),s=new Y({props:{id:"chandramoorthy"}}),g=new Y({props:{id:"chandramoorthy"}}),{c(){e=r("In closing, I will return to the implications of the "),x(t.$$.fragment),i=r(" and research such as "),x(s.$$.fragment),o=r(` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),h=L("i"),h.textContent=f,n=r(`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),x(g.$$.fragment),_=r(` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},l(v){e=l(v,"In closing, I will return to the implications of the "),k(t.$$.fragment,v),i=l(v," and research such as "),k(s.$$.fragment,v),o=l(v,` for the feasibility of training models
			like these to predict real-world chaotic systems. It is well understood, and has been clearly
			demonstrated in this project, that IVP solvers produce imperfect solutions due to numerical
			rounding error. The models trained here, therefore, may be more accurately described as approximations
			of the
			`),h=P(v,"I",{"data-svelte-h":!0}),U(h)!=="svelte-17gf2g4"&&(h.textContent=f),n=l(v,`
			rather than of the true, mathematical idealization of the Lorenz Attractor represented by
			the ordinary differential equation introduced at the beginning of this study. Although technically
			deterministic, this rounding error introduces a kind of noise in the measurements of the
			system; similarly, any real-world dataset that is collected through environmental sensors
			will undoubtedly contain some amount of noise. While the shadowing lemma suggests that such
			noise may only marginally impact the correlation between the model and the chaotic system,
			`),k(g.$$.fragment,v),_=l(v,` suggests the possibility that it can lead to highly divergent,
			non-physical solutions that may even be drawn from an entirely different system's distribution.
			The feasibility of modeling real-world chaotic systems may therefore hinge on the likelihood
			that a system emits "physical" shadowing solutions. If the likelihood is large enough, and
			especially if the system exhibits such narrow constraints on the conditions that lead to
			chaotically divergent trajectories as have been observed for the Z coordinate in this study,
			then effective control over chaotic dynamics may be tractable.`)},m(v,M){m(v,e,M),I(t,v,M),m(v,i,M),I(s,v,M),m(v,o,M),m(v,h,M),m(v,n,M),I(g,v,M),m(v,_,M),d=!0},p(v,M){const T={};M&1&&(T.$$scope={dirty:M,ctx:v}),t.$set(T)},i(v){d||(y(t.$$.fragment,v),y(s.$$.fragment,v),y(g.$$.fragment,v),d=!0)},o(v){b(t.$$.fragment,v),b(s.$$.fragment,v),b(g.$$.fragment,v),d=!1},d(v){v&&(a(e),a(i),a(o),a(h),a(n),a(_)),j(t,v),j(s,v),j(g,v)}}}function Pf(c){let e;return{c(){e=r("References")},l(t){e=l(t,"References")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function Cf(c){let e,t,i,s,o,h,f,n,g,_,d,v,M="Michael Horgan",T,S,G="michaelghorgan at gmail",A,E,Z,O,et,K,q,F,J,tt,X,ft,ot,R,B="$2H$",mi,ui,Gi="$H$",uo,po,Xs="$H$",$o,go,Ys="$dt \\approx 0.015$",wo,vo,yo,dn,bo,Qs="$\\lt \\approx 5$",_o,xo,ko,st,Io,tr="$38.45$",jo,Mo,er="$38.6$",Ao,To,yt,zo,bt,Eo,Lo,_t,Po,xt,kt,It,Co,mt,qi,$n,Ho,jt,So,pi,nr=`<sup id="paperspace">2. All of my experiments were run on a Paperspace VM using two RTX 5000s, each
					with 16 GB of RAM.</sup>`,Ro,Fi,Mt,No,At,Do,Go,Tt,qo,zt,Fo,di,gn,wn,Et,ir,Zo,Lt,Vo,Pt,Bo,$i,Zi,or=ph+"",Uo,Wo,Ct,Oo,gi,Vi,ar=dh+"",Ko,Jo,Ht,St,Xo,Rt,Yo,Nt,Qo,Dt,ta,Gt,ea,qt,na,Ft,Zt,Vt,Bt,ia,wi,Bi,sr=$h+"",oa,aa,Ut,sa,Wt,ra,Ot,la,Kt,ha,vn,rr=`<p><sup id="lyapunov">1. Although initially the distance will grow exponentially, the maximum
					separation between trajectories is also bounded by the fact that all
					trajectories remain on the attractor.</sup></p> <p><sup id="initial-conditions">2. In the course of this project, I experimented with several different methods
					for generating trajectories, but I still have some open questions about the best
					way to generate a dataset that effectively samples the phase space, <i>e.g.</i> how
					to choose the initial conditions, how to choose the number of unique initial conditions
					vs. to the total trajectory length, etc.</sup></p>`,ca,Jt,fa,Xt,ma,yn,ua,Yt,pa,Ui,lr=gh+"",da,$a,Qt,ga,te,bn,hr,wa,ee,va,ne,ya,ie,_n,cr=`<img class="object-contain max-w-80" src="${`${Q}/Model1SmallErr.png`}" alt="Model 1 - small error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1MediumErr.png`}" alt="Model 1 - medium error example"/> <img class="object-contain max-w-80" src="${`${Q}/Model1LargeErr.png`}" alt="Model 1 - large error example"/>`,ba,oe,_a,ae,xa,se,xn,fr,ka,re,Ia,le,he,ja,ce,pt,mr,Ma,fe,Aa,me,Ta,ue,za,pe,Ea,kn,La,In,ur=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
			increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of
			the network, and I've also significantly increased the amount of compression in the
			initial stacks. Because the network is much deeper, I also added layer normalization
			after each block to try to help reduce convergence time. Lastly, I increased the number
			of training steps and reduced the initial learning rate by an order of magnitude, and I
			modified the learning rate schedule to reduce by half whenever the validation loss does
			not decrease from the previous validation step.`,Pa,jn,Mn,pr,de,Ca,$e,ge,Ha,An,Tn,dr,we,Sa,ve,Ra,ye,zn,$r,Na,be,Da,_e,Ga,En,Ln,gr,xe,qa,ke,Fa,Ie,Za,je,Va,Me,Ba,Ae,Te,ze,Ua,Pn,Cn,wr,Ee,Wa,Hn,Oa,vr="$\\le{5}$",Ka,Ja,Xa,Le,Ya,Sn,Rn,yr,Pe,Qa,Ce,ts,He,es,Se,ns,Re,is,Nn,os,Ne,as,De,ss,br="$dt \\approx 0.003$",rs,ls,hs,Dn,Gn,_r,Ge,cs,vi,xr=`Here again we see a very marginal improvement but no clear evidence that this approach
			may lead to a fully stable model (<i>i.e.</i> one without an asymptotic error curve). Reducing
			the temporal resolution of the model further will drastically increase the computational
			requirements of training, which are beyond my budget, so I must conclude this avenue of investigation
			here.`,fs,qe,ms,Fe,Ze,Ve,kr=wh+"",us,ps,qn,ds,Be,$s,gs,Fn,Zn,Ir,Ue,ws,dt,vs,jr="$z \\approx 0.4$",ys,bs,Mr="$z \\approx 1.35$",_s,xs,ks,We,Is,Vn,Bn,Ar,Oe,js,yi,Tr=`However, if we search for the model trajectories that pass closest to the origin, we
			find examples where the model output breaks down badly:`,Ms,Un,Wn,zr,Ke,As,Je,Ts,Xe,On,Er,zs,Ye,Es,Qe,Ls,tn,Ps,en,nn,on,an,Cs,sn,Kn,Lr=`<img class="object-contain w-full max-w-xl" src="${`${Q}/max_z.png`}" alt="Model 3 - maxium Z coordinate error distribution"/> <img class="object-contain w-full max-w-xl" src="${`${Q}/max_z_zoomed.png`}" alt="maximum Z coordinate error distribution zoomed"/>`,Hs,rn,Ss,ln,Rs,hn,Jn,Pr,Ns,cn,Ds,fn,Gs,mn,qs,un,Fs,bi,Wi,ut,Zs,_i,Cr="second-to-last",Vs,Hr="$38.55$",Bs,Us,Ws,pn,Os,Xn,co;return e=new uh({}),i=new xh({}),h=new fh({}),K=new V({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[kh]},$$scope:{ctx:c}}}),F=new Hi({props:{id:"tldr",$$slots:{default:[Ih]},$$scope:{ctx:c}}}),ot=new Y({props:{id:"challu"}}),yt=new V({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system#Connection_to_tent_map",$$slots:{default:[jh]},$$scope:{ctx:c}}}),bt=new V({props:{href:"https://en.wikipedia.org/wiki/Symmetric_mean_absolute_percentage_error",$$slots:{default:[Mh]},$$scope:{ctx:c}}}),_t=new Ci({props:{id:"intro",$$slots:{default:[Ah]},$$scope:{ctx:c}}}),xt=new D({props:{$$slots:{default:[Th]},$$scope:{ctx:c}}}),kt=new D({props:{$$slots:{default:[zh]},$$scope:{ctx:c}}}),It=new D({props:{$$slots:{default:[Eh]},$$scope:{ctx:c}}}),jt=new V({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[Lh]},$$scope:{ctx:c}}}),At=new V({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[Ph]},$$scope:{ctx:c}}}),Tt=new Ci({props:{id:"lorenz",$$slots:{default:[Ch]},$$scope:{ctx:c}}}),zt=new D({props:{$$slots:{default:[Nh]},$$scope:{ctx:c}}}),Lt=new nt({props:{$$slots:{default:[Dh]},$$scope:{ctx:c}}}),Pt=new D({props:{$$slots:{default:[Gh]},$$scope:{ctx:c}}}),Ct=new D({props:{$$slots:{default:[Zh]},$$scope:{ctx:c}}}),Ht=new D({props:{$$slots:{default:[Bh]},$$scope:{ctx:c}}}),St=new D({props:{$$slots:{default:[Wh]},$$scope:{ctx:c}}}),Rt=new Ci({props:{id:"nhits",$$slots:{default:[Oh]},$$scope:{ctx:c}}}),Nt=new D({props:{$$slots:{default:[Kh]},$$scope:{ctx:c}}}),Dt=new D({props:{$$slots:{default:[Jh]},$$scope:{ctx:c}}}),Gt=new D({props:{$$slots:{default:[Xh]},$$scope:{ctx:c}}}),qt=new Ci({props:{id:"experiments",$$slots:{default:[Yh]},$$scope:{ctx:c}}}),Ft=new D({props:{$$slots:{default:[Qh]},$$scope:{ctx:c}}}),Zt=new Hi({props:{id:"datagen",$$slots:{default:[tc]},$$scope:{ctx:c}}}),Vt=new D({props:{$$slots:{default:[oc]},$$scope:{ctx:c}}}),Bt=new D({props:{$$slots:{default:[lc]},$$scope:{ctx:c}}}),Ut=new D({props:{indent:"indent-0",$$slots:{default:[hc]},$$scope:{ctx:c}}}),Wt=new D({props:{$$slots:{default:[cc]},$$scope:{ctx:c}}}),Ot=new D({props:{indent:"indent-0",$$slots:{default:[fc]},$$scope:{ctx:c}}}),Kt=new D({props:{$$slots:{default:[mc]},$$scope:{ctx:c}}}),Jt=new Hi({props:{id:"model-1",$$slots:{default:[uc]},$$scope:{ctx:c}}}),Xt=new D({props:{$$slots:{default:[pc]},$$scope:{ctx:c}}}),yn=new Ks({props:{hps:vh}}),Yt=new D({props:{indent:"indent-0",$$slots:{default:[dc]},$$scope:{ctx:c}}}),Qt=new D({props:{$$slots:{default:[$c]},$$scope:{ctx:c}}}),ee=new nt({props:{$$slots:{default:[gc]},$$scope:{ctx:c}}}),ne=new D({props:{$$slots:{default:[wc]},$$scope:{ctx:c}}}),oe=new nt({props:{$$slots:{default:[vc]},$$scope:{ctx:c}}}),ae=new D({props:{$$slots:{default:[yc]},$$scope:{ctx:c}}}),re=new nt({props:{$$slots:{default:[bc]},$$scope:{ctx:c}}}),le=new D({props:{$$slots:{default:[xc]},$$scope:{ctx:c}}}),he=new D({props:{$$slots:{default:[Ic]},$$scope:{ctx:c}}}),fe=new nt({props:{$$slots:{default:[jc]},$$scope:{ctx:c}}}),me=new D({props:{$$slots:{default:[Mc]},$$scope:{ctx:c}}}),ue=new Hi({props:{id:"model-2",$$slots:{default:[Ac]},$$scope:{ctx:c}}}),pe=new D({props:{$$slots:{default:[Tc]},$$scope:{ctx:c}}}),kn=new Ks({props:{hps:yh}}),de=new nt({props:{$$slots:{default:[zc]},$$scope:{ctx:c}}}),$e=new D({props:{$$slots:{default:[Ec]},$$scope:{ctx:c}}}),ge=new D({props:{$$slots:{default:[Lc]},$$scope:{ctx:c}}}),we=new nt({props:{$$slots:{default:[Pc]},$$scope:{ctx:c}}}),ve=new D({props:{$$slots:{default:[Cc]},$$scope:{ctx:c}}}),be=new nt({props:{$$slots:{default:[Hc]},$$scope:{ctx:c}}}),_e=new D({props:{$$slots:{default:[Sc]},$$scope:{ctx:c}}}),xe=new nt({props:{$$slots:{default:[Rc]},$$scope:{ctx:c}}}),ke=new D({props:{$$slots:{default:[Nc]},$$scope:{ctx:c}}}),Ie=new Hi({props:{id:"model-3",$$slots:{default:[Dc]},$$scope:{ctx:c}}}),je=new D({props:{$$slots:{default:[Gc]},$$scope:{ctx:c}}}),Me=new El({props:{$$slots:{default:[qc]},$$scope:{ctx:c}}}),Ae=new D({props:{$$slots:{default:[Zc]},$$scope:{ctx:c}}}),Te=new D({props:{$$slots:{default:[Vc]},$$scope:{ctx:c}}}),ze=new D({props:{$$slots:{default:[Bc]},$$scope:{ctx:c}}}),Ee=new nt({props:{$$slots:{default:[Uc]},$$scope:{ctx:c}}}),Le=new D({props:{$$slots:{default:[Wc]},$$scope:{ctx:c}}}),Pe=new nt({props:{$$slots:{default:[Oc]},$$scope:{ctx:c}}}),Ce=new D({props:{$$slots:{default:[Kc]},$$scope:{ctx:c}}}),He=new El({props:{$$slots:{default:[Jc]},$$scope:{ctx:c}}}),Se=new D({props:{$$slots:{default:[Xc]},$$scope:{ctx:c}}}),Re=new D({props:{$$slots:{default:[Yc]},$$scope:{ctx:c}}}),Nn=new Ks({props:{hps:bh}}),Ne=new D({props:{style:"my-4 text-sm font-serif",$$slots:{default:[tf]},$$scope:{ctx:c}}}),Ge=new nt({props:{$$slots:{default:[ef]},$$scope:{ctx:c}}}),qe=new Hi({props:{id:"arpred",$$slots:{default:[nf]},$$scope:{ctx:c}}}),Fe=new D({props:{$$slots:{default:[of]},$$scope:{ctx:c}}}),Ze=new D({props:{$$slots:{default:[sf]},$$scope:{ctx:c}}}),Ve=new D({props:{$$slots:{default:[rf]},$$scope:{ctx:c}}}),Be=new V({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[lf]},$$scope:{ctx:c}}}),Ue=new nt({props:{$$slots:{default:[hf]},$$scope:{ctx:c}}}),We=new D({props:{$$slots:{default:[cf]},$$scope:{ctx:c}}}),Oe=new nt({props:{$$slots:{default:[ff]},$$scope:{ctx:c}}}),Ke=new nt({props:{$$slots:{default:[mf]},$$scope:{ctx:c}}}),Je=new D({props:{$$slots:{default:[$f]},$$scope:{ctx:c}}}),Ye=new nt({props:{$$slots:{default:[wf]},$$scope:{ctx:c}}}),Qe=new D({props:{$$slots:{default:[vf]},$$scope:{ctx:c}}}),tn=new Ci({props:{id:"discussion",$$slots:{default:[yf]},$$scope:{ctx:c}}}),en=new D({props:{$$slots:{default:[bf]},$$scope:{ctx:c}}}),nn=new D({props:{$$slots:{default:[_f]},$$scope:{ctx:c}}}),on=new D({props:{$$slots:{default:[xf]},$$scope:{ctx:c}}}),an=new D({props:{$$slots:{default:[kf]},$$scope:{ctx:c}}}),rn=new nt({props:{$$slots:{default:[If]},$$scope:{ctx:c}}}),ln=new D({props:{$$slots:{default:[Mf]},$$scope:{ctx:c}}}),cn=new nt({props:{$$slots:{default:[Af]},$$scope:{ctx:c}}}),fn=new D({props:{$$slots:{default:[Tf]},$$scope:{ctx:c}}}),mn=new D({props:{$$slots:{default:[zf]},$$scope:{ctx:c}}}),un=new D({props:{$$slots:{default:[Lf]},$$scope:{ctx:c}}}),pn=new Ci({props:{id:"references",$$slots:{default:[Pf]},$$scope:{ctx:c}}}),Xn=new Ul({}),{c(){x(e.$$.fragment),t=C(),x(i.$$.fragment),s=C(),o=L("div"),x(h.$$.fragment),f=C(),n=L("div"),g=L("div"),_=r(ho),d=C(),v=L("div"),v.textContent=M,T=C(),S=L("div"),S.textContent=G,A=C(),E=L("br"),Z=C(),O=L("div"),et=r("All code used in this project is available in the github repo: "),x(K.$$.fragment),q=C(),x(F.$$.fragment),J=C(),tt=L("ul"),X=L("li"),ft=r("This project explores the use of the NHiTS "),x(ot.$$.fragment),R=r(` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),mi=r(B),ui=r(` points of input, the model is trained
				to predict the next `),uo=r(Gi),po=r(" points of the trajectory, where "),$o=r(Xs),go=r(` is usually 100 and
				`),wo=r(Ys),vo=r("."),yo=C(),dn=L("li"),bo=r(`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),_o=r(Qs),xo=r(`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),ko=C(),st=L("li"),Io=r(`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),jo=r(tr),Mo=r(" to "),Ao=r(er),To=r(`, corresponding
				with the approximate value of the x coordinate of the maximum point on the `),x(yt.$$.fragment),zo=r(". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),x(bt.$$.fragment),Eo=r(` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),Lo=C(),x(_t.$$.fragment),Po=C(),x(xt.$$.fragment),x(kt.$$.fragment),x(It.$$.fragment),Co=C(),mt=L("div"),qi=L("p"),$n=L("sup"),Ho=r(`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),x(jt.$$.fragment),So=C(),pi=L("p"),pi.innerHTML=nr,Ro=C(),Fi=L("p"),Mt=L("sup"),No=r(`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),x(At.$$.fragment),Do=r(" on the subject"),Go=C(),x(Tt.$$.fragment),qo=C(),x(zt.$$.fragment),Fo=C(),di=L("div"),gn=L("a"),wn=L("figure"),Et=L("img"),Zo=C(),x(Lt.$$.fragment),Vo=C(),x(Pt.$$.fragment),Bo=C(),$i=L("div"),Zi=L("p"),Uo=r(or),Wo=C(),x(Ct.$$.fragment),Oo=C(),gi=L("div"),Vi=L("p"),Ko=r(ar),Jo=C(),x(Ht.$$.fragment),x(St.$$.fragment),Xo=C(),x(Rt.$$.fragment),Yo=C(),x(Nt.$$.fragment),Qo=C(),x(Dt.$$.fragment),ta=C(),x(Gt.$$.fragment),ea=C(),x(qt.$$.fragment),na=C(),x(Ft.$$.fragment),x(Zt.$$.fragment),x(Vt.$$.fragment),x(Bt.$$.fragment),ia=C(),wi=L("div"),Bi=L("p"),oa=r(sr),aa=C(),x(Ut.$$.fragment),sa=C(),x(Wt.$$.fragment),ra=C(),x(Ot.$$.fragment),la=C(),x(Kt.$$.fragment),ha=C(),vn=L("div"),vn.innerHTML=rr,ca=C(),x(Jt.$$.fragment),fa=C(),x(Xt.$$.fragment),ma=C(),x(yn.$$.fragment),ua=C(),x(Yt.$$.fragment),pa=C(),Ui=L("div"),da=r(lr),$a=C(),x(Qt.$$.fragment),ga=C(),te=L("figure"),bn=L("img"),wa=C(),x(ee.$$.fragment),va=C(),x(ne.$$.fragment),ya=C(),ie=L("figure"),_n=L("div"),_n.innerHTML=cr,ba=C(),x(oe.$$.fragment),_a=C(),x(ae.$$.fragment),xa=C(),se=L("figure"),xn=L("img"),ka=C(),x(re.$$.fragment),Ia=C(),x(le.$$.fragment),x(he.$$.fragment),ja=C(),ce=L("figure"),pt=L("img"),Ma=C(),x(fe.$$.fragment),Aa=C(),x(me.$$.fragment),Ta=C(),x(ue.$$.fragment),za=C(),x(pe.$$.fragment),Ea=C(),x(kn.$$.fragment),La=C(),In=L("p"),In.textContent=ur,Pa=C(),jn=L("figure"),Mn=L("img"),x(de.$$.fragment),Ca=C(),x($e.$$.fragment),x(ge.$$.fragment),Ha=C(),An=L("figure"),Tn=L("img"),x(we.$$.fragment),Sa=C(),x(ve.$$.fragment),Ra=C(),ye=L("figure"),zn=L("img"),Na=C(),x(be.$$.fragment),Da=C(),x(_e.$$.fragment),Ga=C(),En=L("figure"),Ln=L("img"),x(xe.$$.fragment),qa=C(),x(ke.$$.fragment),Fa=C(),x(Ie.$$.fragment),Za=C(),x(je.$$.fragment),Va=C(),x(Me.$$.fragment),Ba=C(),x(Ae.$$.fragment),x(Te.$$.fragment),x(ze.$$.fragment),Ua=C(),Pn=L("figure"),Cn=L("img"),x(Ee.$$.fragment),Wa=C(),Hn=L("p"),Oa=r("Still, with these 10x increases, the trajectories that pass within an L2 distance "),Ka=r(vr),Ja=r(`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),Xa=C(),x(Le.$$.fragment),Ya=C(),Sn=L("figure"),Rn=L("img"),x(Pe.$$.fragment),Qa=C(),x(Ce.$$.fragment),ts=C(),x(He.$$.fragment),es=C(),x(Se.$$.fragment),ns=C(),x(Re.$$.fragment),is=C(),x(Nn.$$.fragment),os=C(),x(Ne.$$.fragment),as=C(),De=L("p"),ss=r("After retraining with "),rs=r(br),ls=r(`, we again see a very slight improvement
			over the previous models:`),hs=C(),Dn=L("figure"),Gn=L("img"),x(Ge.$$.fragment),cs=C(),vi=L("p"),vi.innerHTML=xr,fs=C(),x(qe.$$.fragment),ms=C(),x(Fe.$$.fragment),x(Ze.$$.fragment),x(Ve.$$.fragment),us=r(kr),ps=C(),qn=L("p"),ds=r("Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),x(Be.$$.fragment),$s=r(" solver's outputs:"),gs=C(),Fn=L("figure"),Zn=L("img"),x(Ue.$$.fragment),ws=C(),dt=L("p"),vs=r(`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),ys=r(jr),bs=r(" for the solver compared to "),_s=r(Mr),xs=r(`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),ks=C(),x(We.$$.fragment),Is=C(),Vn=L("figure"),Bn=L("img"),x(Oe.$$.fragment),js=C(),yi=L("p"),yi.textContent=Tr,Ms=C(),Un=L("figure"),Wn=L("img"),x(Ke.$$.fragment),As=C(),x(Je.$$.fragment),Ts=C(),Xe=L("figure"),On=L("img"),zs=C(),x(Ye.$$.fragment),Es=C(),x(Qe.$$.fragment),Ls=C(),x(tn.$$.fragment),Ps=C(),x(en.$$.fragment),x(nn.$$.fragment),x(on.$$.fragment),x(an.$$.fragment),Cs=C(),sn=L("figure"),Kn=L("div"),Kn.innerHTML=Lr,Hs=C(),x(rn.$$.fragment),Ss=C(),x(ln.$$.fragment),Rs=C(),hn=L("figure"),Jn=L("img"),Ns=C(),x(cn.$$.fragment),Ds=C(),x(fn.$$.fragment),Gs=C(),x(mn.$$.fragment),qs=C(),x(un.$$.fragment),Fs=C(),bi=L("div"),Wi=L("p"),ut=L("sup"),Zs=r(`1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose `),_i=L("i"),_i.textContent=Cr,Vs=r(`
					local maximum Z coordinate passes through the `),Bs=r(Hr),Us=r(` boundary region, and whose
					associated local minimum point is so small—0.49, the smallest encountered in
					all of the training sets that were generated for this study—that the highly
					unstable conditions in the region adversely affect not only the prediction accuracy
					when the local minimum is within the horizon window, but also when it is within the
					input window of the model.`),Ws=C(),x(pn.$$.fragment),Os=C(),x(Xn.$$.fragment),this.h()},l(u){k(e.$$.fragment,u),t=H(u),k(i.$$.fragment,u),s=H(u),o=P(u,"DIV",{class:!0});var w=N(o);k(h.$$.fragment,w),f=H(w),n=P(w,"DIV",{class:!0});var $=N(n);g=P($,"DIV",{id:!0,class:!0});var Oi=N(g);_=l(Oi,ho),Oi.forEach(a),d=H($),v=P($,"DIV",{class:!0,"data-svelte-h":!0}),U(v)!=="svelte-1tlj87z"&&(v.textContent=M),T=H($),S=P($,"DIV",{class:!0,"data-svelte-h":!0}),U(S)!=="svelte-xnmp4g"&&(S.textContent=G),A=H($),E=P($,"BR",{}),Z=H($),O=P($,"DIV",{class:!0});var xi=N(O);et=l(xi,"All code used in this project is available in the github repo: "),k(K.$$.fragment,xi),xi.forEach(a),q=H($),k(F.$$.fragment,$),J=H($),tt=P($,"UL",{class:!0});var $t=N(tt);X=P($t,"LI",{});var at=N(X);ft=l(at,"This project explores the use of the NHiTS "),k(ot.$$.fragment,at),R=l(at,` neural network to forecast
				trajectories on the Lorenz Attractor. Given `),mi=l(at,B),ui=l(at,` points of input, the model is trained
				to predict the next `),uo=l(at,Gi),po=l(at," points of the trajectory, where "),$o=l(at,Xs),go=l(at,` is usually 100 and
				`),wo=l(at,Ys),vo=l(at,"."),at.forEach(a),yo=H($t),dn=P($t,"LI",{});var Yn=N(dn);bo=l(Yn,`The best performing models are able to predict trajectories in all areas of the
				attractor's subspace with high accuracy, except for trajectories that pass close to
				the saddle point at the origin (L2 distance `),_o=l(Yn,Qs),xo=l(Yn,`). Trajectories in
				this region exhibit very high prediction error in the segments immediately following
				their transit past the origin, with the error increasing rapidly as the distance
				from the origin decreases.`),Yn.forEach(a),ko=H($t),st=P($t,"LI",{});var rt=N(st);Io=l(rt,`In 100% of test cases, trajectories that exhibit high prediction errors also have a
				local maximum Z coordinate in the range of `),jo=l(rt,tr),Mo=l(rt," to "),Ao=l(rt,er),To=l(rt,`, corresponding
				with the approximate value of the x coordinate of the maximum point on the `),k(yt.$$.fragment,rt),zo=l(rt,". Trajectories that meet this criteria have a roughly 60% chance of exhibiting a "),k(bt.$$.fragment,rt),Eo=l(rt,` prediction error greater than 5; otherwise the sMAPE error is guaranteed to remain
				below 5 at all times and in all other regions of the attractor subspace.`),rt.forEach(a),$t.forEach(a),Lo=H($),k(_t.$$.fragment,$),Po=H($),k(xt.$$.fragment,$),k(kt.$$.fragment,$),k(It.$$.fragment,$),Co=H($),mt=P($,"DIV",{class:!0});var gt=N(mt);qi=P(gt,"P",{});var Ki=N(qi);$n=P(Ki,"SUP",{id:!0});var ki=N($n);Ho=l(ki,`1. For a quick and entertaining way to stay informed of new developments in the
					world of DL for dynamical systems modeling, I highly recommend Sabine
					Hossenfelder's `),k(jt.$$.fragment,ki),ki.forEach(a),Ki.forEach(a),So=H(gt),pi=P(gt,"P",{"data-svelte-h":!0}),U(pi)!=="svelte-7qdhvn"&&(pi.innerHTML=nr),Ro=H(gt),Fi=P(gt,"P",{});var Ji=N(Fi);Mt=P(Ji,"SUP",{id:!0});var Qn=N(Mt);No=l(Qn,`3. If you would like to refresh your background on dynamical systems theory, I
					highly recommend Steve Brunton's free `),k(At.$$.fragment,Qn),Do=l(Qn," on the subject"),Qn.forEach(a),Ji.forEach(a),gt.forEach(a),Go=H($),k(Tt.$$.fragment,$),qo=H($),k(zt.$$.fragment,$),Fo=H($),di=P($,"DIV",{class:!0});var Xi=N(di);gn=P(Xi,"A",{title:!0,href:!0});var Yi=N(gn);wn=P(Yi,"FIGURE",{});var ti=N(wn);Et=P(ti,"IMG",{class:!0,width:!0,alt:!0,src:!0}),Zo=H(ti),k(Lt.$$.fragment,ti),ti.forEach(a),Yi.forEach(a),Xi.forEach(a),Vo=H($),k(Pt.$$.fragment,$),Bo=H($),$i=P($,"DIV",{class:!0});var Qi=N($i);Zi=P(Qi,"P",{});var to=N(Zi);Uo=l(to,or),to.forEach(a),Qi.forEach(a),Wo=H($),k(Ct.$$.fragment,$),Oo=H($),gi=P($,"DIV",{class:!0});var eo=N(gi);Vi=P(eo,"P",{});var no=N(Vi);Ko=l(no,ar),no.forEach(a),eo.forEach(a),Jo=H($),k(Ht.$$.fragment,$),k(St.$$.fragment,$),Xo=H($),k(Rt.$$.fragment,$),Yo=H($),k(Nt.$$.fragment,$),Qo=H($),k(Dt.$$.fragment,$),ta=H($),k(Gt.$$.fragment,$),ea=H($),k(qt.$$.fragment,$),na=H($),k(Ft.$$.fragment,$),k(Zt.$$.fragment,$),k(Vt.$$.fragment,$),k(Bt.$$.fragment,$),ia=H($),wi=P($,"DIV",{class:!0});var io=N(wi);Bi=P(io,"P",{});var oo=N(Bi);oa=l(oo,sr),oo.forEach(a),io.forEach(a),aa=H($),k(Ut.$$.fragment,$),sa=H($),k(Wt.$$.fragment,$),ra=H($),k(Ot.$$.fragment,$),la=H($),k(Kt.$$.fragment,$),ha=H($),vn=P($,"DIV",{class:!0,"data-svelte-h":!0}),U(vn)!=="svelte-a9h7x4"&&(vn.innerHTML=rr),ca=H($),k(Jt.$$.fragment,$),fa=H($),k(Xt.$$.fragment,$),ma=H($),k(yn.$$.fragment,$),ua=H($),k(Yt.$$.fragment,$),pa=H($),Ui=P($,"DIV",{});var ao=N(Ui);da=l(ao,lr),ao.forEach(a),$a=H($),k(Qt.$$.fragment,$),ga=H($),te=P($,"FIGURE",{class:!0});var ei=N(te);bn=P(ei,"IMG",{class:!0,src:!0,alt:!0}),wa=H(ei),k(ee.$$.fragment,ei),ei.forEach(a),va=H($),k(ne.$$.fragment,$),ya=H($),ie=P($,"FIGURE",{class:!0});var ni=N(ie);_n=P(ni,"DIV",{class:!0,"data-svelte-h":!0}),U(_n)!=="svelte-u7ima0"&&(_n.innerHTML=cr),ba=H(ni),k(oe.$$.fragment,ni),ni.forEach(a),_a=H($),k(ae.$$.fragment,$),xa=H($),se=P($,"FIGURE",{class:!0});var ii=N(se);xn=P(ii,"IMG",{class:!0,src:!0,alt:!0}),ka=H(ii),k(re.$$.fragment,ii),ii.forEach(a),Ia=H($),k(le.$$.fragment,$),k(he.$$.fragment,$),ja=H($),ce=P($,"FIGURE",{class:!0});var oi=N(ce);pt=P(oi,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Ma=H(oi),k(fe.$$.fragment,oi),oi.forEach(a),Aa=H($),k(me.$$.fragment,$),Ta=H($),k(ue.$$.fragment,$),za=H($),k(pe.$$.fragment,$),Ea=H($),k(kn.$$.fragment,$),La=H($),In=P($,"P",{class:!0,"data-svelte-h":!0}),U(In)!=="svelte-8lzr6y"&&(In.textContent=ur),Pa=H($),jn=P($,"FIGURE",{class:!0});var Ii=N(jn);Mn=P(Ii,"IMG",{class:!0,src:!0,alt:!0}),k(de.$$.fragment,Ii),Ii.forEach(a),Ca=H($),k($e.$$.fragment,$),k(ge.$$.fragment,$),Ha=H($),An=P($,"FIGURE",{class:!0});var ji=N(An);Tn=P(ji,"IMG",{class:!0,src:!0,alt:!0}),k(we.$$.fragment,ji),ji.forEach(a),Sa=H($),k(ve.$$.fragment,$),Ra=H($),ye=P($,"FIGURE",{class:!0});var ai=N(ye);zn=P(ai,"IMG",{class:!0,src:!0,alt:!0}),Na=H(ai),k(be.$$.fragment,ai),ai.forEach(a),Da=H($),k(_e.$$.fragment,$),Ga=H($),En=P($,"FIGURE",{class:!0});var Mi=N(En);Ln=P(Mi,"IMG",{class:!0,src:!0,alt:!0}),k(xe.$$.fragment,Mi),Mi.forEach(a),qa=H($),k(ke.$$.fragment,$),Fa=H($),k(Ie.$$.fragment,$),Za=H($),k(je.$$.fragment,$),Va=H($),k(Me.$$.fragment,$),Ba=H($),k(Ae.$$.fragment,$),k(Te.$$.fragment,$),k(ze.$$.fragment,$),Ua=H($),Pn=P($,"FIGURE",{class:!0});var Ai=N(Pn);Cn=P(Ai,"IMG",{class:!0,src:!0,alt:!0}),k(Ee.$$.fragment,Ai),Ai.forEach(a),Wa=H($),Hn=P($,"P",{});var si=N(Hn);Oa=l(si,"Still, with these 10x increases, the trajectories that pass within an L2 distance "),Ka=l(si,vr),Ja=l(si,`
			from the origin only comprise about 1.5% of the dataset (compared to 0.5% for the previous
			dataset). The other 98.5% is composed of what we already know to be easy cases for the model
			to predict.`),si.forEach(a),Xa=H($),k(Le.$$.fragment,$),Ya=H($),Sn=P($,"FIGURE",{class:!0});var Ti=N(Sn);Rn=P(Ti,"IMG",{class:!0,src:!0,alt:!0}),k(Pe.$$.fragment,Ti),Ti.forEach(a),Qa=H($),k(Ce.$$.fragment,$),ts=H($),k(He.$$.fragment,$),es=H($),k(Se.$$.fragment,$),ns=H($),k(Re.$$.fragment,$),is=H($),k(Nn.$$.fragment,$),os=H($),k(Ne.$$.fragment,$),as=H($),De=P($,"P",{class:!0});var ri=N(De);ss=l(ri,"After retraining with "),rs=l(ri,br),ls=l(ri,`, we again see a very slight improvement
			over the previous models:`),ri.forEach(a),hs=H($),Dn=P($,"FIGURE",{class:!0});var zi=N(Dn);Gn=P(zi,"IMG",{class:!0,src:!0,alt:!0}),k(Ge.$$.fragment,zi),zi.forEach(a),cs=H($),vi=P($,"P",{"data-svelte-h":!0}),U(vi)!=="svelte-iuzfox"&&(vi.innerHTML=xr),fs=H($),k(qe.$$.fragment,$),ms=H($),k(Fe.$$.fragment,$),k(Ze.$$.fragment,$),k(Ve.$$.fragment,$),us=l($,kr),ps=H($),qn=P($,"P",{});var li=N(qn);ds=l(li,"Here's the distribution of this statistic for Model 3.2's autoregressive outputs and the "),k(Be.$$.fragment,li),$s=l(li," solver's outputs:"),li.forEach(a),gs=H($),Fn=P($,"FIGURE",{class:!0});var Ei=N(Fn);Zn=P(Ei,"IMG",{class:!0,src:!0,alt:!0}),k(Ue.$$.fragment,Ei),Ei.forEach(a),ws=H($),dt=P($,"P",{});var wt=N(dt);vs=l(wt,`The general shape of the distributions is consistent, but clearly the solver outputs
			spend more time at Z coordinates very close to the origin as well as getting closer to
			the origin (minimum coordinate of `),ys=l(wt,jr),bs=l(wt," for the solver compared to "),_s=l(wt,Mr),xs=l(wt,`
			for the model). It's worth noting that the distributions of this metric for the other two
			coordinates, X and Y, match almost perfectly between the model and the solver.`),wt.forEach(a),ks=H($),k(We.$$.fragment,$),Is=H($),Vn=P($,"FIGURE",{class:!0});var Li=N(Vn);Bn=P(Li,"IMG",{class:!0,src:!0,alt:!0}),k(Oe.$$.fragment,Li),Li.forEach(a),js=H($),yi=P($,"P",{"data-svelte-h":!0}),U(yi)!=="svelte-8ial96"&&(yi.textContent=Tr),Ms=H($),Un=P($,"FIGURE",{class:!0});var Pi=N(Un);Wn=P(Pi,"IMG",{class:!0,src:!0,alt:!0}),k(Ke.$$.fragment,Pi),Pi.forEach(a),As=H($),k(Je.$$.fragment,$),Ts=H($),Xe=P($,"FIGURE",{class:!0});var hi=N(Xe);On=P(hi,"IMG",{class:!0,src:!0,alt:!0}),zs=H(hi),k(Ye.$$.fragment,hi),hi.forEach(a),Es=H($),k(Qe.$$.fragment,$),Ls=H($),k(tn.$$.fragment,$),Ps=H($),k(en.$$.fragment,$),k(nn.$$.fragment,$),k(on.$$.fragment,$),k(an.$$.fragment,$),Cs=H($),sn=P($,"FIGURE",{class:!0});var ci=N(sn);Kn=P(ci,"DIV",{class:!0,"data-svelte-h":!0}),U(Kn)!=="svelte-lbdos2"&&(Kn.innerHTML=Lr),Hs=H(ci),k(rn.$$.fragment,ci),ci.forEach(a),Ss=H($),k(ln.$$.fragment,$),Rs=H($),hn=P($,"FIGURE",{class:!0});var fi=N(hn);Jn=P(fi,"IMG",{class:!0,src:!0,alt:!0}),Ns=H(fi),k(cn.$$.fragment,fi),fi.forEach(a),Ds=H($),k(fn.$$.fragment,$),Gs=H($),k(mn.$$.fragment,$),qs=H($),k(un.$$.fragment,$),Fs=H($),bi=P($,"DIV",{class:!0});var so=N(bi);Wi=P(so,"P",{});var ro=N(Wi);ut=P(ro,"SUP",{id:!0});var vt=N(ut);Zs=l(vt,`1. Note the handful of anomalous points on the far left of the first graph whose
					sMAPE errors exceed the average for their coordinate region. These appear to be
					counter-examples, however, upon closer inspection, they are revealed to be part
					of a trajectory whose `),_i=P(vt,"I",{"data-svelte-h":!0}),U(_i)!=="svelte-bnpm1r"&&(_i.textContent=Cr),Vs=l(vt,`
					local maximum Z coordinate passes through the `),Bs=l(vt,Hr),Us=l(vt,` boundary region, and whose
					associated local minimum point is so small—0.49, the smallest encountered in
					all of the training sets that were generated for this study—that the highly
					unstable conditions in the region adversely affect not only the prediction accuracy
					when the local minimum is within the horizon window, but also when it is within the
					input window of the model.`),vt.forEach(a),ro.forEach(a),so.forEach(a),Ws=H($),k(pn.$$.fragment,$),Os=H($),k(Xn.$$.fragment,$),$.forEach(a),w.forEach(a),this.h()},h(){z(g,"id","intro"),z(g,"class","mt-8 text-2xl text-center"),z(v,"class","mt-2 text-md text-center"),z(S,"class","mt-2 text-xs text-center font-serif"),z(O,"class","text-sm text-center font-serif mb-4"),z(tt,"class","list-disc ms-16 text-sm"),z($n,"id","sabine"),z(Mt,"id","brunton"),z(mt,"class","my-4 ms-4 -indent-4 font-serif leading-4"),z(Et,"class","m-auto"),z(Et,"width","128"),z(Et,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),it(Et.src,ir="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||z(Et,"src",ir),z(gn,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),z(gn,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),z(di,"class","my-2 self-center"),z($i,"class","self-center"),z(gi,"class","self-center"),z(wi,"class","self-center"),z(vn,"class","my-4 ms-4 -indent-4 font-serif leading-4"),z(bn,"class","object-contain"),it(bn.src,hr=`${Q}/Model1ErrDist.png`)||z(bn,"src",hr),z(bn,"alt","Model 1 - error distribution"),z(te,"class","mb-6 self-center max-w-xl"),z(_n,"class","flex flex-wrap justify-center"),z(ie,"class","mt-6 mb-6 self-center"),z(xn,"class","object-contain"),it(xn.src,fr=`${Q}/model-1-pod.gif`)||z(xn,"src",fr),z(xn,"alt","prediction point of divergence"),z(se,"class","mt-6 mb-6 self-center max-w-lg"),z(pt,"class","object-contain"),it(pt.src,mr=`${Q}/trajectories.gif`)||z(pt,"src",mr),z(pt,"alt","trajectories approaching origin"),z(pt,"width","500"),z(pt,"height","500"),z(ce,"class","mt-6 mb-6 self-center max-w-md"),z(In,"class","mt-2"),z(Mn,"class","object-contain"),it(Mn.src,pr=`${Q}/Model2ErrDist.png`)||z(Mn,"src",pr),z(Mn,"alt",""),z(jn,"class","mb-2 self-center max-w-xl"),z(Tn,"class","object-contain"),it(Tn.src,dr=`${Q}/Model2Err3d.png`)||z(Tn,"src",dr),z(Tn,"alt","Model 2 - error distribution by series and window"),z(An,"class","-mt-2 mb-2 self-center"),z(zn,"class","object-contain"),it(zn.src,$r=`${Q}/model-2-pod.gif`)||z(zn,"src",$r),z(zn,"alt","model 2 point of divergence"),z(ye,"class","self-center max-w-lg"),z(Ln,"class","object-contain"),it(Ln.src,gr=`${Q}/Model2DFO.png`)||z(Ln,"src",gr),z(Ln,"alt","distance from origin vs. sMAPE"),z(En,"class","-mt-2 mb-2 self-center max-w-3xl"),z(Cn,"class","object-contain"),it(Cn.src,wr=`${Q}/datahist_model_2_v_3.1.png`)||z(Cn,"src",wr),z(Cn,"alt","Dataset distribution for Model 2 vs. 3"),z(Pn,"class","my-8 self-center max-w-lg"),z(Rn,"class","object-contain"),it(Rn.src,yr=`${Q}/Model2v3.1-DFO.png`)||z(Rn,"src",yr),z(Rn,"alt","Model 2 vs. 3.1 - distance from origin vs. sMAPE"),z(Sn,"class","mt-2 mb-2 self-center max-w-3xl"),z(De,"class","mt-4"),z(Gn,"class","object-contain"),it(Gn.src,_r=`${Q}/Model3.2-DFO.png`)||z(Gn,"src",_r),z(Gn,"alt","Model 3.2 - distance-from-origin error distribution"),z(Dn,"class","mb-8 self-center max-w-3xl"),z(Zn,"class","object-contain"),it(Zn.src,Ir=`${Q}/ar_z_stat.png`)||z(Zn,"src",Ir),z(Zn,"alt","Z Statistic for Reference vs. Autoregressive Trajectories"),z(Fn,"class","mb-2 self-center max-w-3xl"),z(Bn,"class","object-contain"),it(Bn.src,Ar=`${Q}/ref_v_ar.png`)||z(Bn,"src",Ar),z(Bn,"alt","Reference vs. Autoregressive Trajectories"),z(Vn,"class","mb-2 self-center max-w-4xl"),z(Wn,"class","object-contain"),it(Wn.src,zr=`${Q}/ar_breakdown_1.png`)||z(Wn,"src",zr),z(Wn,"alt","Autoregressive Trajectory - Bad Example"),z(Un,"class","mb-2 self-center max-w-lg"),z(On,"class","object-contain"),it(On.src,Er=`${Q}/solvers_vs_model.png`)||z(On,"src",Er),z(On,"alt","Comparison of RK45 and predictions to Radau's solutions"),z(Xe,"class","mb-2 self-center max-w-2xl"),z(Kn,"class","flex flex-wrap justify-center"),z(sn,"class","mb-6 self-center"),z(Jn,"class","object-contain"),it(Jn.src,Pr=`${Q}/Lorenz_map.png`)||z(Jn,"src",Pr),z(Jn,"alt","Lorenz Map"),z(hn,"class","my-2 self-center max-w-2xl"),z(ut,"id","outliers"),z(bi,"class","my-4 ms-4 -indent-4 font-serif leading-4"),z(n,"class","flex flex-col mx-4 sm:mx-16"),z(o,"class","grid grid-flow-col auto-cols-auto")},m(u,w){I(e,u,w),m(u,t,w),I(i,u,w),m(u,s,w),m(u,o,w),I(h,o,null),p(o,f),p(o,n),p(n,g),p(g,_),p(n,d),p(n,v),p(n,T),p(n,S),p(n,A),p(n,E),p(n,Z),p(n,O),p(O,et),I(K,O,null),p(n,q),I(F,n,null),p(n,J),p(n,tt),p(tt,X),p(X,ft),I(ot,X,null),p(X,R),p(X,mi),p(X,ui),p(X,uo),p(X,po),p(X,$o),p(X,go),p(X,wo),p(X,vo),p(tt,yo),p(tt,dn),p(dn,bo),p(dn,_o),p(dn,xo),p(tt,ko),p(tt,st),p(st,Io),p(st,jo),p(st,Mo),p(st,Ao),p(st,To),I(yt,st,null),p(st,zo),I(bt,st,null),p(st,Eo),p(n,Lo),I(_t,n,null),p(n,Po),I(xt,n,null),I(kt,n,null),I(It,n,null),p(n,Co),p(n,mt),p(mt,qi),p(qi,$n),p($n,Ho),I(jt,$n,null),p(mt,So),p(mt,pi),p(mt,Ro),p(mt,Fi),p(Fi,Mt),p(Mt,No),I(At,Mt,null),p(Mt,Do),p(n,Go),I(Tt,n,null),p(n,qo),I(zt,n,null),p(n,Fo),p(n,di),p(di,gn),p(gn,wn),p(wn,Et),p(wn,Zo),I(Lt,wn,null),p(n,Vo),I(Pt,n,null),p(n,Bo),p(n,$i),p($i,Zi),p(Zi,Uo),p(n,Wo),I(Ct,n,null),p(n,Oo),p(n,gi),p(gi,Vi),p(Vi,Ko),p(n,Jo),I(Ht,n,null),I(St,n,null),p(n,Xo),I(Rt,n,null),p(n,Yo),I(Nt,n,null),p(n,Qo),I(Dt,n,null),p(n,ta),I(Gt,n,null),p(n,ea),I(qt,n,null),p(n,na),I(Ft,n,null),I(Zt,n,null),I(Vt,n,null),I(Bt,n,null),p(n,ia),p(n,wi),p(wi,Bi),p(Bi,oa),p(n,aa),I(Ut,n,null),p(n,sa),I(Wt,n,null),p(n,ra),I(Ot,n,null),p(n,la),I(Kt,n,null),p(n,ha),p(n,vn),p(n,ca),I(Jt,n,null),p(n,fa),I(Xt,n,null),p(n,ma),I(yn,n,null),p(n,ua),I(Yt,n,null),p(n,pa),p(n,Ui),p(Ui,da),p(n,$a),I(Qt,n,null),p(n,ga),p(n,te),p(te,bn),p(te,wa),I(ee,te,null),p(n,va),I(ne,n,null),p(n,ya),p(n,ie),p(ie,_n),p(ie,ba),I(oe,ie,null),p(n,_a),I(ae,n,null),p(n,xa),p(n,se),p(se,xn),p(se,ka),I(re,se,null),p(n,Ia),I(le,n,null),I(he,n,null),p(n,ja),p(n,ce),p(ce,pt),p(ce,Ma),I(fe,ce,null),p(n,Aa),I(me,n,null),p(n,Ta),I(ue,n,null),p(n,za),I(pe,n,null),p(n,Ea),I(kn,n,null),p(n,La),p(n,In),p(n,Pa),p(n,jn),p(jn,Mn),I(de,jn,null),p(n,Ca),I($e,n,null),I(ge,n,null),p(n,Ha),p(n,An),p(An,Tn),I(we,An,null),p(n,Sa),I(ve,n,null),p(n,Ra),p(n,ye),p(ye,zn),p(ye,Na),I(be,ye,null),p(n,Da),I(_e,n,null),p(n,Ga),p(n,En),p(En,Ln),I(xe,En,null),p(n,qa),I(ke,n,null),p(n,Fa),I(Ie,n,null),p(n,Za),I(je,n,null),p(n,Va),I(Me,n,null),p(n,Ba),I(Ae,n,null),I(Te,n,null),I(ze,n,null),p(n,Ua),p(n,Pn),p(Pn,Cn),I(Ee,Pn,null),p(n,Wa),p(n,Hn),p(Hn,Oa),p(Hn,Ka),p(Hn,Ja),p(n,Xa),I(Le,n,null),p(n,Ya),p(n,Sn),p(Sn,Rn),I(Pe,Sn,null),p(n,Qa),I(Ce,n,null),p(n,ts),I(He,n,null),p(n,es),I(Se,n,null),p(n,ns),I(Re,n,null),p(n,is),I(Nn,n,null),p(n,os),I(Ne,n,null),p(n,as),p(n,De),p(De,ss),p(De,rs),p(De,ls),p(n,hs),p(n,Dn),p(Dn,Gn),I(Ge,Dn,null),p(n,cs),p(n,vi),p(n,fs),I(qe,n,null),p(n,ms),I(Fe,n,null),I(Ze,n,null),I(Ve,n,null),p(n,us),p(n,ps),p(n,qn),p(qn,ds),I(Be,qn,null),p(qn,$s),p(n,gs),p(n,Fn),p(Fn,Zn),I(Ue,Fn,null),p(n,ws),p(n,dt),p(dt,vs),p(dt,ys),p(dt,bs),p(dt,_s),p(dt,xs),p(n,ks),I(We,n,null),p(n,Is),p(n,Vn),p(Vn,Bn),I(Oe,Vn,null),p(n,js),p(n,yi),p(n,Ms),p(n,Un),p(Un,Wn),I(Ke,Un,null),p(n,As),I(Je,n,null),p(n,Ts),p(n,Xe),p(Xe,On),p(Xe,zs),I(Ye,Xe,null),p(n,Es),I(Qe,n,null),p(n,Ls),I(tn,n,null),p(n,Ps),I(en,n,null),I(nn,n,null),I(on,n,null),I(an,n,null),p(n,Cs),p(n,sn),p(sn,Kn),p(sn,Hs),I(rn,sn,null),p(n,Ss),I(ln,n,null),p(n,Rs),p(n,hn),p(hn,Jn),p(hn,Ns),I(cn,hn,null),p(n,Ds),I(fn,n,null),p(n,Gs),I(mn,n,null),p(n,qs),I(un,n,null),p(n,Fs),p(n,bi),p(bi,Wi),p(Wi,ut),p(ut,Zs),p(ut,_i),p(ut,Vs),p(ut,Bs),p(ut,Us),p(n,Ws),I(pn,n,null),p(n,Os),I(Xn,n,null),co=!0},p(u,[w]){const $={};w&1&&($.$$scope={dirty:w,ctx:u}),K.$set($);const Oi={};w&1&&(Oi.$$scope={dirty:w,ctx:u}),F.$set(Oi);const xi={};w&1&&(xi.$$scope={dirty:w,ctx:u}),yt.$set(xi);const $t={};w&1&&($t.$$scope={dirty:w,ctx:u}),bt.$set($t);const at={};w&1&&(at.$$scope={dirty:w,ctx:u}),_t.$set(at);const Yn={};w&1&&(Yn.$$scope={dirty:w,ctx:u}),xt.$set(Yn);const rt={};w&1&&(rt.$$scope={dirty:w,ctx:u}),kt.$set(rt);const gt={};w&1&&(gt.$$scope={dirty:w,ctx:u}),It.$set(gt);const Ki={};w&1&&(Ki.$$scope={dirty:w,ctx:u}),jt.$set(Ki);const ki={};w&1&&(ki.$$scope={dirty:w,ctx:u}),At.$set(ki);const Ji={};w&1&&(Ji.$$scope={dirty:w,ctx:u}),Tt.$set(Ji);const Qn={};w&1&&(Qn.$$scope={dirty:w,ctx:u}),zt.$set(Qn);const Xi={};w&1&&(Xi.$$scope={dirty:w,ctx:u}),Lt.$set(Xi);const Yi={};w&1&&(Yi.$$scope={dirty:w,ctx:u}),Pt.$set(Yi);const ti={};w&1&&(ti.$$scope={dirty:w,ctx:u}),Ct.$set(ti);const Qi={};w&1&&(Qi.$$scope={dirty:w,ctx:u}),Ht.$set(Qi);const to={};w&1&&(to.$$scope={dirty:w,ctx:u}),St.$set(to);const eo={};w&1&&(eo.$$scope={dirty:w,ctx:u}),Rt.$set(eo);const no={};w&1&&(no.$$scope={dirty:w,ctx:u}),Nt.$set(no);const io={};w&1&&(io.$$scope={dirty:w,ctx:u}),Dt.$set(io);const oo={};w&1&&(oo.$$scope={dirty:w,ctx:u}),Gt.$set(oo);const ao={};w&1&&(ao.$$scope={dirty:w,ctx:u}),qt.$set(ao);const ei={};w&1&&(ei.$$scope={dirty:w,ctx:u}),Ft.$set(ei);const ni={};w&1&&(ni.$$scope={dirty:w,ctx:u}),Zt.$set(ni);const ii={};w&1&&(ii.$$scope={dirty:w,ctx:u}),Vt.$set(ii);const oi={};w&1&&(oi.$$scope={dirty:w,ctx:u}),Bt.$set(oi);const Ii={};w&1&&(Ii.$$scope={dirty:w,ctx:u}),Ut.$set(Ii);const ji={};w&1&&(ji.$$scope={dirty:w,ctx:u}),Wt.$set(ji);const ai={};w&1&&(ai.$$scope={dirty:w,ctx:u}),Ot.$set(ai);const Mi={};w&1&&(Mi.$$scope={dirty:w,ctx:u}),Kt.$set(Mi);const Ai={};w&1&&(Ai.$$scope={dirty:w,ctx:u}),Jt.$set(Ai);const si={};w&1&&(si.$$scope={dirty:w,ctx:u}),Xt.$set(si);const Ti={};w&1&&(Ti.$$scope={dirty:w,ctx:u}),Yt.$set(Ti);const ri={};w&1&&(ri.$$scope={dirty:w,ctx:u}),Qt.$set(ri);const zi={};w&1&&(zi.$$scope={dirty:w,ctx:u}),ee.$set(zi);const li={};w&1&&(li.$$scope={dirty:w,ctx:u}),ne.$set(li);const Ei={};w&1&&(Ei.$$scope={dirty:w,ctx:u}),oe.$set(Ei);const wt={};w&1&&(wt.$$scope={dirty:w,ctx:u}),ae.$set(wt);const Li={};w&1&&(Li.$$scope={dirty:w,ctx:u}),re.$set(Li);const Pi={};w&1&&(Pi.$$scope={dirty:w,ctx:u}),le.$set(Pi);const hi={};w&1&&(hi.$$scope={dirty:w,ctx:u}),he.$set(hi);const ci={};w&1&&(ci.$$scope={dirty:w,ctx:u}),fe.$set(ci);const fi={};w&1&&(fi.$$scope={dirty:w,ctx:u}),me.$set(fi);const so={};w&1&&(so.$$scope={dirty:w,ctx:u}),ue.$set(so);const ro={};w&1&&(ro.$$scope={dirty:w,ctx:u}),pe.$set(ro);const vt={};w&1&&(vt.$$scope={dirty:w,ctx:u}),de.$set(vt);const Sr={};w&1&&(Sr.$$scope={dirty:w,ctx:u}),$e.$set(Sr);const Rr={};w&1&&(Rr.$$scope={dirty:w,ctx:u}),ge.$set(Rr);const Nr={};w&1&&(Nr.$$scope={dirty:w,ctx:u}),we.$set(Nr);const Dr={};w&1&&(Dr.$$scope={dirty:w,ctx:u}),ve.$set(Dr);const Gr={};w&1&&(Gr.$$scope={dirty:w,ctx:u}),be.$set(Gr);const qr={};w&1&&(qr.$$scope={dirty:w,ctx:u}),_e.$set(qr);const Fr={};w&1&&(Fr.$$scope={dirty:w,ctx:u}),xe.$set(Fr);const Zr={};w&1&&(Zr.$$scope={dirty:w,ctx:u}),ke.$set(Zr);const Vr={};w&1&&(Vr.$$scope={dirty:w,ctx:u}),Ie.$set(Vr);const Br={};w&1&&(Br.$$scope={dirty:w,ctx:u}),je.$set(Br);const Ur={};w&1&&(Ur.$$scope={dirty:w,ctx:u}),Me.$set(Ur);const Wr={};w&1&&(Wr.$$scope={dirty:w,ctx:u}),Ae.$set(Wr);const Or={};w&1&&(Or.$$scope={dirty:w,ctx:u}),Te.$set(Or);const Kr={};w&1&&(Kr.$$scope={dirty:w,ctx:u}),ze.$set(Kr);const Jr={};w&1&&(Jr.$$scope={dirty:w,ctx:u}),Ee.$set(Jr);const Xr={};w&1&&(Xr.$$scope={dirty:w,ctx:u}),Le.$set(Xr);const Yr={};w&1&&(Yr.$$scope={dirty:w,ctx:u}),Pe.$set(Yr);const Qr={};w&1&&(Qr.$$scope={dirty:w,ctx:u}),Ce.$set(Qr);const tl={};w&1&&(tl.$$scope={dirty:w,ctx:u}),He.$set(tl);const el={};w&1&&(el.$$scope={dirty:w,ctx:u}),Se.$set(el);const nl={};w&1&&(nl.$$scope={dirty:w,ctx:u}),Re.$set(nl);const il={};w&1&&(il.$$scope={dirty:w,ctx:u}),Ne.$set(il);const ol={};w&1&&(ol.$$scope={dirty:w,ctx:u}),Ge.$set(ol);const al={};w&1&&(al.$$scope={dirty:w,ctx:u}),qe.$set(al);const sl={};w&1&&(sl.$$scope={dirty:w,ctx:u}),Fe.$set(sl);const rl={};w&1&&(rl.$$scope={dirty:w,ctx:u}),Ze.$set(rl);const ll={};w&1&&(ll.$$scope={dirty:w,ctx:u}),Ve.$set(ll);const hl={};w&1&&(hl.$$scope={dirty:w,ctx:u}),Be.$set(hl);const cl={};w&1&&(cl.$$scope={dirty:w,ctx:u}),Ue.$set(cl);const fl={};w&1&&(fl.$$scope={dirty:w,ctx:u}),We.$set(fl);const ml={};w&1&&(ml.$$scope={dirty:w,ctx:u}),Oe.$set(ml);const ul={};w&1&&(ul.$$scope={dirty:w,ctx:u}),Ke.$set(ul);const pl={};w&1&&(pl.$$scope={dirty:w,ctx:u}),Je.$set(pl);const dl={};w&1&&(dl.$$scope={dirty:w,ctx:u}),Ye.$set(dl);const $l={};w&1&&($l.$$scope={dirty:w,ctx:u}),Qe.$set($l);const gl={};w&1&&(gl.$$scope={dirty:w,ctx:u}),tn.$set(gl);const wl={};w&1&&(wl.$$scope={dirty:w,ctx:u}),en.$set(wl);const vl={};w&1&&(vl.$$scope={dirty:w,ctx:u}),nn.$set(vl);const yl={};w&1&&(yl.$$scope={dirty:w,ctx:u}),on.$set(yl);const bl={};w&1&&(bl.$$scope={dirty:w,ctx:u}),an.$set(bl);const _l={};w&1&&(_l.$$scope={dirty:w,ctx:u}),rn.$set(_l);const xl={};w&1&&(xl.$$scope={dirty:w,ctx:u}),ln.$set(xl);const kl={};w&1&&(kl.$$scope={dirty:w,ctx:u}),cn.$set(kl);const Il={};w&1&&(Il.$$scope={dirty:w,ctx:u}),fn.$set(Il);const jl={};w&1&&(jl.$$scope={dirty:w,ctx:u}),mn.$set(jl);const Ml={};w&1&&(Ml.$$scope={dirty:w,ctx:u}),un.$set(Ml);const Al={};w&1&&(Al.$$scope={dirty:w,ctx:u}),pn.$set(Al)},i(u){co||(y(e.$$.fragment,u),y(i.$$.fragment,u),y(h.$$.fragment,u),y(K.$$.fragment,u),y(F.$$.fragment,u),y(ot.$$.fragment,u),y(yt.$$.fragment,u),y(bt.$$.fragment,u),y(_t.$$.fragment,u),y(xt.$$.fragment,u),y(kt.$$.fragment,u),y(It.$$.fragment,u),y(jt.$$.fragment,u),y(At.$$.fragment,u),y(Tt.$$.fragment,u),y(zt.$$.fragment,u),y(Lt.$$.fragment,u),y(Pt.$$.fragment,u),y(Ct.$$.fragment,u),y(Ht.$$.fragment,u),y(St.$$.fragment,u),y(Rt.$$.fragment,u),y(Nt.$$.fragment,u),y(Dt.$$.fragment,u),y(Gt.$$.fragment,u),y(qt.$$.fragment,u),y(Ft.$$.fragment,u),y(Zt.$$.fragment,u),y(Vt.$$.fragment,u),y(Bt.$$.fragment,u),y(Ut.$$.fragment,u),y(Wt.$$.fragment,u),y(Ot.$$.fragment,u),y(Kt.$$.fragment,u),y(Jt.$$.fragment,u),y(Xt.$$.fragment,u),y(yn.$$.fragment,u),y(Yt.$$.fragment,u),y(Qt.$$.fragment,u),y(ee.$$.fragment,u),y(ne.$$.fragment,u),y(oe.$$.fragment,u),y(ae.$$.fragment,u),y(re.$$.fragment,u),y(le.$$.fragment,u),y(he.$$.fragment,u),y(fe.$$.fragment,u),y(me.$$.fragment,u),y(ue.$$.fragment,u),y(pe.$$.fragment,u),y(kn.$$.fragment,u),y(de.$$.fragment,u),y($e.$$.fragment,u),y(ge.$$.fragment,u),y(we.$$.fragment,u),y(ve.$$.fragment,u),y(be.$$.fragment,u),y(_e.$$.fragment,u),y(xe.$$.fragment,u),y(ke.$$.fragment,u),y(Ie.$$.fragment,u),y(je.$$.fragment,u),y(Me.$$.fragment,u),y(Ae.$$.fragment,u),y(Te.$$.fragment,u),y(ze.$$.fragment,u),y(Ee.$$.fragment,u),y(Le.$$.fragment,u),y(Pe.$$.fragment,u),y(Ce.$$.fragment,u),y(He.$$.fragment,u),y(Se.$$.fragment,u),y(Re.$$.fragment,u),y(Nn.$$.fragment,u),y(Ne.$$.fragment,u),y(Ge.$$.fragment,u),y(qe.$$.fragment,u),y(Fe.$$.fragment,u),y(Ze.$$.fragment,u),y(Ve.$$.fragment,u),y(Be.$$.fragment,u),y(Ue.$$.fragment,u),y(We.$$.fragment,u),y(Oe.$$.fragment,u),y(Ke.$$.fragment,u),y(Je.$$.fragment,u),y(Ye.$$.fragment,u),y(Qe.$$.fragment,u),y(tn.$$.fragment,u),y(en.$$.fragment,u),y(nn.$$.fragment,u),y(on.$$.fragment,u),y(an.$$.fragment,u),y(rn.$$.fragment,u),y(ln.$$.fragment,u),y(cn.$$.fragment,u),y(fn.$$.fragment,u),y(mn.$$.fragment,u),y(un.$$.fragment,u),y(pn.$$.fragment,u),y(Xn.$$.fragment,u),co=!0)},o(u){b(e.$$.fragment,u),b(i.$$.fragment,u),b(h.$$.fragment,u),b(K.$$.fragment,u),b(F.$$.fragment,u),b(ot.$$.fragment,u),b(yt.$$.fragment,u),b(bt.$$.fragment,u),b(_t.$$.fragment,u),b(xt.$$.fragment,u),b(kt.$$.fragment,u),b(It.$$.fragment,u),b(jt.$$.fragment,u),b(At.$$.fragment,u),b(Tt.$$.fragment,u),b(zt.$$.fragment,u),b(Lt.$$.fragment,u),b(Pt.$$.fragment,u),b(Ct.$$.fragment,u),b(Ht.$$.fragment,u),b(St.$$.fragment,u),b(Rt.$$.fragment,u),b(Nt.$$.fragment,u),b(Dt.$$.fragment,u),b(Gt.$$.fragment,u),b(qt.$$.fragment,u),b(Ft.$$.fragment,u),b(Zt.$$.fragment,u),b(Vt.$$.fragment,u),b(Bt.$$.fragment,u),b(Ut.$$.fragment,u),b(Wt.$$.fragment,u),b(Ot.$$.fragment,u),b(Kt.$$.fragment,u),b(Jt.$$.fragment,u),b(Xt.$$.fragment,u),b(yn.$$.fragment,u),b(Yt.$$.fragment,u),b(Qt.$$.fragment,u),b(ee.$$.fragment,u),b(ne.$$.fragment,u),b(oe.$$.fragment,u),b(ae.$$.fragment,u),b(re.$$.fragment,u),b(le.$$.fragment,u),b(he.$$.fragment,u),b(fe.$$.fragment,u),b(me.$$.fragment,u),b(ue.$$.fragment,u),b(pe.$$.fragment,u),b(kn.$$.fragment,u),b(de.$$.fragment,u),b($e.$$.fragment,u),b(ge.$$.fragment,u),b(we.$$.fragment,u),b(ve.$$.fragment,u),b(be.$$.fragment,u),b(_e.$$.fragment,u),b(xe.$$.fragment,u),b(ke.$$.fragment,u),b(Ie.$$.fragment,u),b(je.$$.fragment,u),b(Me.$$.fragment,u),b(Ae.$$.fragment,u),b(Te.$$.fragment,u),b(ze.$$.fragment,u),b(Ee.$$.fragment,u),b(Le.$$.fragment,u),b(Pe.$$.fragment,u),b(Ce.$$.fragment,u),b(He.$$.fragment,u),b(Se.$$.fragment,u),b(Re.$$.fragment,u),b(Nn.$$.fragment,u),b(Ne.$$.fragment,u),b(Ge.$$.fragment,u),b(qe.$$.fragment,u),b(Fe.$$.fragment,u),b(Ze.$$.fragment,u),b(Ve.$$.fragment,u),b(Be.$$.fragment,u),b(Ue.$$.fragment,u),b(We.$$.fragment,u),b(Oe.$$.fragment,u),b(Ke.$$.fragment,u),b(Je.$$.fragment,u),b(Ye.$$.fragment,u),b(Qe.$$.fragment,u),b(tn.$$.fragment,u),b(en.$$.fragment,u),b(nn.$$.fragment,u),b(on.$$.fragment,u),b(an.$$.fragment,u),b(rn.$$.fragment,u),b(ln.$$.fragment,u),b(cn.$$.fragment,u),b(fn.$$.fragment,u),b(mn.$$.fragment,u),b(un.$$.fragment,u),b(pn.$$.fragment,u),b(Xn.$$.fragment,u),co=!1},d(u){u&&(a(t),a(s),a(o)),j(e,u),j(i,u),j(h),j(K),j(F),j(ot),j(yt),j(bt),j(_t),j(xt),j(kt),j(It),j(jt),j(At),j(Tt),j(zt),j(Lt),j(Pt),j(Ct),j(Ht),j(St),j(Rt),j(Nt),j(Dt),j(Gt),j(qt),j(Ft),j(Zt),j(Vt),j(Bt),j(Ut),j(Wt),j(Ot),j(Kt),j(Jt),j(Xt),j(yn),j(Yt),j(Qt),j(ee),j(ne),j(oe),j(ae),j(re),j(le),j(he),j(fe),j(me),j(ue),j(pe),j(kn),j(de),j($e),j(ge),j(we),j(ve),j(be),j(_e),j(xe),j(ke),j(Ie),j(je),j(Me),j(Ae),j(Te),j(ze),j(Ee),j(Le),j(Pe),j(Ce),j(He),j(Se),j(Re),j(Nn),j(Ne),j(Ge),j(qe),j(Fe),j(Ze),j(Ve),j(Be),j(Ue),j(We),j(Oe),j(Ke),j(Je),j(Ye),j(Qe),j(tn),j(en),j(nn),j(on),j(an),j(rn),j(ln),j(cn),j(fn),j(mn),j(un),j(pn),j(Xn)}}}class Nf extends ht{constructor(e){super(),ct(this,e,null,Cf,lt,{})}}export{Nf as component};
