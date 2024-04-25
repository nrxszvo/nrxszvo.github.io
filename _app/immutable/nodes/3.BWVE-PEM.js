import{s as Ws,a as j2,u as M2,g as D2,b as S2,n as Ln,x as Bs,o as Li}from"../chunks/scheduler.BeaK0CkN.js";import{S as Os,i as Us,e as R,c as N,h as r,f as e,b as t,d as x,m as E,n as y,r as _i,p as ki,z as $i,t as L,v as b,j as _,w as j,k as n,x as M,y as D,l as B2,s as q,a as T,A as a,B as s,q as l,C as $,g as n2}from"../chunks/index.CxzZzLz5.js";import{b as ho}from"../chunks/paths.DHguhdzz.js";function I2(p){return(p==null?void 0:p.length)!==void 0?p:Array.from(p)}function xi(p){let o,i,h;const f=p[4].default,u=j2(f,p,p[3],null);return{c(){o=R("a"),u&&u.c(),this.h()},l(c){o=N(c,"A",{href:!0,class:!0,target:!0,rel:!0});var g=r(o);u&&u.l(g),g.forEach(e),this.h()},h(){t(o,"href",p[0]),t(o,"class",i="font-medium text-blue-600 dark:text-blue-500 hover:underline "+p[1]),t(o,"target",p[2]),t(o,"rel","noopener noreferrer")},m(c,g){x(c,o,g),u&&u.m(o,null),h=!0},p(c,[g]){u&&u.p&&(!h||g&8)&&M2(u,f,c,c[3],h?S2(f,c[3],g,null):D2(c[3]),null),(!h||g&1)&&t(o,"href",c[0]),(!h||g&2&&i!==(i="font-medium text-blue-600 dark:text-blue-500 hover:underline "+c[1]))&&t(o,"class",i),(!h||g&4)&&t(o,"target",c[2])},i(c){h||(E(u,c),h=!0)},o(c){y(u,c),h=!1},d(c){c&&e(o),u&&u.d(c)}}}function vi(p,o,i){let{$$slots:h={},$$scope:f}=o,{href:u}=o,{styling:c=""}=o,{target:g="_blank"}=o;return p.$$set=k=>{"href"in k&&i(0,u=k.href),"styling"in k&&i(1,c=k.styling),"target"in k&&i(2,g=k.target),"$$scope"in k&&i(3,f=k.$$scope)},[u,c,g,f,h]}class Ya extends Os{constructor(o){super(),Us(this,o,vi,xi,Ws,{href:0,styling:1,target:2})}}function ci(p,o,i){const h=p.slice();return h[0]=o[i],h}function Ei(p){let o;return{c(){o=L("link")},l(i){o=_(i,"link")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function gi(p){let o,i,h=p[0].author+"",f,u,c,g=p[0].title+"",k,v,w,S=p[0].publisher+"",Q,z,P,I=p[0].year+"",U,A,F,Z,re,ee,Ie,ue;return re=new Ya({props:{href:p[0].link,$$slots:{default:[Ei]},$$scope:{ctx:p}}}),{c(){o=R("li"),i=R("span"),f=L(h),u=L(", "),c=R("span"),k=L(g),v=L(`,
			`),w=R("span"),Q=L(S),z=L(`,
			`),P=R("span"),U=L(I),A=L(", "),F=R("span"),Z=L("["),b(re.$$.fragment),ee=L("]"),Ie=L(`.
		`),this.h()},l(H){o=N(H,"LI",{});var B=r(o);i=N(B,"SPAN",{class:!0});var ce=r(i);f=_(ce,h),ce.forEach(e),u=_(B,", "),c=N(B,"SPAN",{});var V=r(c);k=_(V,g),V.forEach(e),v=_(B,`,
			`),w=N(B,"SPAN",{});var G=r(w);Q=_(G,S),G.forEach(e),z=_(B,`,
			`),P=N(B,"SPAN",{});var Jt=r(P);U=_(Jt,I),Jt.forEach(e),A=_(B,", "),F=N(B,"SPAN",{});var K=r(F);Z=_(K,"["),j(re.$$.fragment,K),ee=_(K,"]"),K.forEach(e),Ie=_(B,`.
		`),B.forEach(e),this.h()},h(){t(i,"class","ms-4")},m(H,B){x(H,o,B),n(o,i),n(i,f),n(o,u),n(o,c),n(c,k),n(o,v),n(o,w),n(w,Q),n(o,z),n(o,P),n(P,U),n(o,A),n(o,F),n(F,Z),M(re,F,null),n(F,ee),n(o,Ie),ue=!0},p(H,B){const ce={};B&8&&(ce.$$scope={dirty:B,ctx:H}),re.$set(ce)},i(H){ue||(E(re.$$.fragment,H),ue=!0)},o(H){y(re.$$.fragment,H),ue=!1},d(H){H&&e(o),D(re)}}}function wi(p){let o,i,h=I2(b2),f=[];for(let c=0;c<h.length;c+=1)f[c]=gi(ci(p,h,c));const u=c=>y(f[c],1,1,()=>{f[c]=null});return{c(){o=R("ol");for(let c=0;c<f.length;c+=1)f[c].c();this.h()},l(c){o=N(c,"OL",{class:!0});var g=r(o);for(let k=0;k<f.length;k+=1)f[k].l(g);g.forEach(e),this.h()},h(){t(o,"class","pl-5 my-2 text-xs list-decimal")},m(c,g){x(c,o,g);for(let k=0;k<f.length;k+=1)f[k]&&f[k].m(o,null);i=!0},p(c,[g]){if(g&0){h=I2(b2);let k;for(k=0;k<h.length;k+=1){const v=ci(c,h,k);f[k]?(f[k].p(v,g),E(f[k],1)):(f[k]=gi(v),f[k].c(),E(f[k],1),f[k].m(o,null))}for(_i(),k=h.length;k<f.length;k+=1)u(k);ki()}},i(c){if(!i){for(let g=0;g<h.length;g+=1)E(f[g]);i=!0}},o(c){f=f.filter(Boolean);for(let g=0;g<f.length;g+=1)y(f[g]);i=!1},d(c){c&&e(o),$i(f,c)}}}const A2=p=>{for(let o=0;o<b2.length;o++)if(b2[o].id==p)return{index:o+1,link:b2[o].link};throw new Error},b2=[{id:"gilpin",author:"William Gilpin",title:"Model scale versus domain knoweldge in statistical forecasting of chaotic systems",publisher:"Phys. Rev. Res., vol. 5, pp. 043252, Dec",year:2023,link:"https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252"},{id:"seo",author:"Seo, J., Kim, S., Jalalvand, A. et al.",title:"Avoiding fusion plasma tearing instability with deep reinforcement learning",publisher:"Nature",year:"2024",link:"https://doi.org/10.1038/s41586-024-07024-9"},{id:"degrave",author:"Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.",title:"Magnetic control of tokamak plasmas through deep reinforcement learning",publisher:"Nature",year:"2021",link:"https://doi.org/10.1038/s41586-021-04301-9"},{id:"challu",author:"Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski",title:"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting",publisher:"arXiv:2201.12886",year:"2022",link:"https://arxiv.org/abs/2201.12886"},{id:"oreshkin",author:"Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio",title:"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting",publisher:"arXiv:1905.10437",year:"2019",link:"https://arxiv.org/abs/1905.10437"},{id:"osinga",author:"Hinke M. Osinga",title:"Understanding the geometry of dynamics: the stable manifold of the Lorenz system",publisher:"Journal of the Royal Society of New Zealand",year:"2018",link:"https://doi.org/10.1080/03036758.2018.1434802"}];class yi extends Os{constructor(o){super(),Us(this,o,null,wi,Ws,{})}}function Qi(p){let o=A2(p[0]).index+"",i;return{c(){i=L(o)},l(h){i=_(h,o)},m(h,f){x(h,i,f)},p(h,f){f&1&&o!==(o=A2(h[0]).index+"")&&B2(i,o)},d(h){h&&e(i)}}}function bi(p){let o,i,h,f;return i=new Ya({props:{href:A2(p[0]).link,$$slots:{default:[Qi]},$$scope:{ctx:p}}}),{c(){o=L("["),b(i.$$.fragment),h=L("]")},l(u){o=_(u,"["),j(i.$$.fragment,u),h=_(u,"]")},m(u,c){x(u,o,c),M(i,u,c),x(u,h,c),f=!0},p(u,[c]){const g={};c&1&&(g.href=A2(u[0]).link),c&3&&(g.$$scope={dirty:c,ctx:u}),i.$set(g)},i(u){f||(E(i.$$.fragment,u),f=!0)},o(u){y(i.$$.fragment,u),f=!1},d(u){u&&(e(o),e(h)),D(i,u)}}}function ji(p,o,i){let{id:h}=o;return p.$$set=f=>{"id"in f&&i(0,h=f.id)},[h]}class ms extends Os{constructor(o){super(),Us(this,o,ji,bi,Ws,{id:0})}}function Mi(p){let o,i;const h=p[1].default,f=j2(h,p,p[0],null);return{c(){o=R("div"),f&&f.c(),this.h()},l(u){o=N(u,"DIV",{class:!0});var c=r(o);f&&f.l(c),c.forEach(e),this.h()},h(){t(o,"class","text-2xl text-center mt-4 mb-2")},m(u,c){x(u,o,c),f&&f.m(o,null),i=!0},p(u,[c]){f&&f.p&&(!i||c&1)&&M2(f,h,u,u[0],i?S2(h,u[0],c,null):D2(u[0]),null)},i(u){i||(E(f,u),i=!0)},o(u){y(f,u),i=!1},d(u){u&&e(o),f&&f.d(u)}}}function Di(p,o,i){let{$$slots:h={},$$scope:f}=o;return p.$$set=u=>{"$$scope"in u&&i(0,f=u.$$scope)},[f,h]}class F2 extends Os{constructor(o){super(),Us(this,o,Di,Mi,Ws,{})}}function Si(p){let o,i;const h=p[1].default,f=j2(h,p,p[0],null);return{c(){o=R("div"),f&&f.c(),this.h()},l(u){o=N(u,"DIV",{class:!0});var c=r(o);f&&f.l(c),c.forEach(e),this.h()},h(){t(o,"class","text-xl text-center mt-4 mb-2")},m(u,c){x(u,o,c),f&&f.m(o,null),i=!0},p(u,[c]){f&&f.p&&(!i||c&1)&&M2(f,h,u,u[0],i?S2(h,u[0],c,null):D2(u[0]),null)},i(u){i||(E(f,u),i=!0)},o(u){y(f,u),i=!1},d(u){u&&e(o),f&&f.d(u)}}}function Vi(p,o,i){let{$$slots:h={},$$scope:f}=o;return p.$$set=u=>{"$$scope"in u&&i(0,f=u.$$scope)},[f,h]}class x2 extends Os{constructor(o){super(),Us(this,o,Vi,Si,Ws,{})}}function zi(p){let o,i,h;const f=p[3].default,u=j2(f,p,p[2],null);return{c(){o=R("p"),u&&u.c(),this.h()},l(c){o=N(c,"P",{class:!0});var g=r(o);u&&u.l(g),g.forEach(e),this.h()},h(){t(o,"class",i="my-2 "+p[0]+" "+p[1])},m(c,g){x(c,o,g),u&&u.m(o,null),h=!0},p(c,[g]){u&&u.p&&(!h||g&4)&&M2(u,f,c,c[2],h?S2(f,c[2],g,null):D2(c[2]),null),(!h||g&3&&i!==(i="my-2 "+c[0]+" "+c[1]))&&t(o,"class",i)},i(c){h||(E(u,c),h=!0)},o(c){y(u,c),h=!1},d(c){c&&e(o),u&&u.d(c)}}}function Ii(p,o,i){let{$$slots:h={},$$scope:f}=o,{indent:u="indent-8"}=o,{style:c=""}=o;return p.$$set=g=>{"indent"in g&&i(0,u=g.indent),"style"in g&&i(1,c=g.style),"$$scope"in g&&i(2,f=g.$$scope)},[u,c,f,h]}class X extends Os{constructor(o){super(),Us(this,o,Ii,zi,Ws,{indent:0,style:1})}}function pi(p,o,i){const h=p.slice();return h[1]=o[i],h}function mi(p){let o,i,h=p[1].desc+"",f,u,c,g,k=p[1].val+"",v,w;return{c(){o=R("li"),i=R("div"),f=L(h),u=q(),c=R("div"),g=R("span"),v=L(k),w=q(),this.h()},l(S){o=N(S,"LI",{class:!0});var Q=r(o);i=N(Q,"DIV",{class:!0});var z=r(i);f=_(z,h),z.forEach(e),u=T(Q),c=N(Q,"DIV",{class:!0});var P=r(c);g=N(P,"SPAN",{class:!0});var I=r(g);v=_(I,k),I.forEach(e),P.forEach(e),w=T(Q),Q.forEach(e),this.h()},h(){t(i,"class","flex-none w-32 sm:w-64"),t(g,"class","rounded-0.5 p-1 font-mono"),t(c,"class","w-fit flex-wrap"),t(o,"class","flex items-center justify-left")},m(S,Q){x(S,o,Q),n(o,i),n(i,f),n(o,u),n(o,c),n(c,g),n(g,v),n(o,w)},p(S,Q){Q&1&&h!==(h=S[1].desc+"")&&B2(f,h),Q&1&&k!==(k=S[1].val+"")&&B2(v,k)},d(S){S&&e(o)}}}function Ai(p){let o,i,h=I2(p[0]),f=[];for(let u=0;u<h.length;u+=1)f[u]=mi(pi(p,h,u));return{c(){o=R("section"),i=R("ul");for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){o=N(u,"SECTION",{class:!0});var c=r(o);i=N(c,"UL",{class:!0});var g=r(i);for(let k=0;k<f.length;k+=1)f[k].l(g);g.forEach(e),c.forEach(e),this.h()},h(){t(i,"class","flex flex-col m-auto ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200 w-fit"),t(o,"class","relative block my-4")},m(u,c){x(u,o,c),n(o,i);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(i,null)},p(u,[c]){if(c&1){h=I2(u[0]);let g;for(g=0;g<h.length;g+=1){const k=pi(u,h,g);f[g]?f[g].p(k,c):(f[g]=mi(k),f[g].c(),f[g].m(i,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=h.length}},i:Ln,o:Ln,d(u){u&&e(o),$i(f,u)}}}function qi(p,o,i){let{hps:h=[]}=o;return p.$$set=f=>{"hps"in f&&i(0,h=f.hps)},[h]}class H2 extends Os{constructor(o){super(),Us(this,o,qi,Ai,Ws,{hps:0})}}function Ti(p){let o,i;const h=p[1].default,f=j2(h,p,p[0],null);return{c(){o=R("figcaption"),f&&f.c(),this.h()},l(u){o=N(u,"FIGCAPTION",{class:!0});var c=r(o);f&&f.l(c),c.forEach(e),this.h()},h(){t(o,"class","text-center text-xs mt-2 mx-0 sm:mx-36")},m(u,c){x(u,o,c),f&&f.m(o,null),i=!0},p(u,[c]){f&&f.p&&(!i||c&1)&&M2(f,h,u,u[0],i?S2(h,u[0],c,null):D2(u[0]),null)},i(u){i||(E(f,u),i=!0)},o(u){y(f,u),i=!1},d(u){u&&e(o),f&&f.d(u)}}}function Pi(p,o,i){let{$$slots:h={},$$scope:f}=o;return p.$$set=u=>{"$$scope"in u&&i(0,f=u.$$scope)},[f,h]}class Ss extends Os{constructor(o){super(),Us(this,o,Pi,Ti,Ws,{})}}function Ri(p){let o,i,h,f,u,c,g,k,v,w,S,Q,z,P,I,U,A,F,Z,re,ee,Ie,ue,H,B,ce,V,G,Jt,K,W,_n,Ae,J,xe,ve,ge,kn,Yt,pe,xn,bt,Jn,qe,vn,jt,Yn,tt,Xn,Rn,aa,sa,Nr,Mt,Zn,me,er,Te,va,Xt,Fa,En,mr,Zt,en,nt,tn,Nn,wn,Gr,Dt,yn,tr,Ea,Qn,bn,Gn,rt,Cn,Fn,wa,nn,Cr,Ee,$r,Lr,nr,ya,te,Fr,at,we,Hn,St,_r,rn,ae,ye,jn,se,Qe,Pe,Vt,Re,oe,an,rr,st,kr,ot,oa,Ne,xr,zt,Hr,Mn,sn,ar,Br,be,vr,on,ln,ia,un,Ge,sr,la,It,ua,it,Er,lt,Wr,Dn,Qa,Ce,ha,$e,Ha,wr,or,hn,Le,Sn,fn,je,Fe,Or,He,Be,Ur,We,ir,At,yr,qt,ut,ba,Qr,ie,br,Tt,Me,_e,Oe,lr,De,Vn,Ue,Pt,Ke,ur,Bn,dn,zn,Kr,cn,Jr,Rt,jr,Nt,ht,ja,Gt,Yr,ft,Mr,dt,gn,fa,da,Ct,Dr,ct,Sr,In,Vr,pn,gt,zr,pt,Ft,Ma,mt,Da,Se,$t,Lt,Je,C,fe,Ir,O,Ye,_t,Ar,Xe,qr,kt,ca,Ht,xt,ga,Ze,Sa,mn,pa,m,d,vt,$n,hr,Et,Tr,Bt,Wn,Y,de,fr,dr,cr,Wt,Ot,Ut,wt,Ve,yt,le,ne,Kt,An,qn,Tn,On,Pr,Un,Va,za,Ia,Aa,qa,Ta,Pa,gr,pr,et,ke,Rr,Pn,Xr,Kn,Ra,Zr,Na,Qt,ea,ma,$a,La,_a,Ba,Wa,Oa,ta;return{c(){o=a("svg"),i=a("metadata"),h=a("rdf:RDF"),f=a("cc:Work"),u=a("dc:type"),c=a("dc:date"),g=L("2024-02-22T08:05:52.596616"),k=a("dc:format"),v=L("image/svg+xml"),w=a("dc:creator"),S=a("cc:Agent"),Q=a("dc:title"),z=L("Matplotlib v3.5.1, https://matplotlib.org/"),P=a("defs"),I=a("style"),U=L(`* {
				stroke-linejoin: round;
				stroke-linecap: butt;
			}
		`),A=a("g"),F=a("g"),Z=a("path"),re=a("g"),ee=a("path"),Ie=a("g"),ue=a("g"),H=a("path"),B=a("g"),ce=a("g"),V=a("path"),G=a("g"),Jt=a("g"),K=a("path"),W=a("g"),_n=a("g"),Ae=a("path"),J=a("g"),xe=a("path"),ve=a("path"),ge=a("path"),kn=a("path"),Yt=a("path"),pe=a("path"),xn=a("path"),bt=a("g"),Jn=a("g"),qe=a("path"),vn=a("g"),jt=a("g"),Yn=a("defs"),tt=a("path"),Xn=a("path"),Rn=a("path"),aa=a("use"),sa=a("use"),Nr=a("use"),Mt=a("g"),Zn=a("g"),me=a("path"),er=a("g"),Te=a("g"),va=a("defs"),Xt=a("path"),Fa=a("use"),En=a("use"),mr=a("g"),Zt=a("g"),en=a("path"),nt=a("g"),tn=a("g"),Nn=a("use"),wn=a("g"),Gr=a("g"),Dt=a("path"),yn=a("g"),tr=a("g"),Ea=a("use"),Qn=a("g"),bn=a("g"),Gn=a("path"),rt=a("g"),Cn=a("g"),Fn=a("use"),wa=a("use"),nn=a("g"),Cr=a("g"),Ee=a("path"),$r=a("g"),Lr=a("g"),nr=a("use"),ya=a("use"),te=a("g"),Fr=a("g"),at=a("path"),we=a("g"),Hn=a("g"),St=a("defs"),_r=a("path"),rn=a("use"),ae=a("use"),ye=a("g"),jn=a("g"),se=a("path"),Qe=a("g"),Pe=a("path"),Vt=a("path"),Re=a("path"),oe=a("path"),an=a("path"),rr=a("path"),st=a("path"),kr=a("path"),ot=a("g"),oa=a("g"),Ne=a("path"),xr=a("g"),zt=a("g"),Hr=a("use"),Mn=a("use"),sn=a("use"),ar=a("g"),Br=a("g"),be=a("path"),vr=a("g"),on=a("g"),ln=a("use"),ia=a("use"),un=a("g"),Ge=a("g"),sr=a("path"),la=a("g"),It=a("g"),ua=a("use"),it=a("g"),Er=a("g"),lt=a("path"),Wr=a("g"),Dn=a("g"),Qa=a("use"),Ce=a("g"),ha=a("g"),$e=a("path"),Ha=a("g"),wr=a("g"),or=a("use"),hn=a("use"),Le=a("g"),Sn=a("g"),fn=a("path"),je=a("g"),Fe=a("g"),Or=a("use"),He=a("use"),Be=a("g"),Ur=a("g"),We=a("path"),ir=a("g"),At=a("g"),yr=a("use"),qt=a("use"),ut=a("g"),ba=a("g"),Qr=a("path"),ie=a("g"),br=a("g"),Tt=a("use"),Me=a("use"),_e=a("g"),Oe=a("g"),lr=a("path"),De=a("g"),Vn=a("path"),Ue=a("path"),Pt=a("path"),Ke=a("path"),ur=a("g"),Bn=a("g"),dn=a("path"),zn=a("g"),Kr=a("g"),cn=a("use"),Jr=a("use"),Rt=a("g"),jr=a("g"),Nt=a("path"),ht=a("g"),ja=a("g"),Gt=a("use"),Yr=a("use"),ft=a("g"),Mr=a("g"),dt=a("path"),gn=a("g"),fa=a("g"),da=a("defs"),Ct=a("path"),Dr=a("use"),ct=a("use"),Sr=a("g"),In=a("g"),Vr=a("path"),pn=a("g"),gt=a("g"),zr=a("defs"),pt=a("path"),Ft=a("use"),Ma=a("use"),mt=a("g"),Da=a("g"),Se=a("path"),$t=a("g"),Lt=a("path"),Je=a("g"),C=a("g"),fe=a("defs"),Ir=a("path"),O=a("path"),Ye=a("path"),_t=a("path"),Ar=a("path"),Xe=a("path"),qr=a("path"),kt=a("path"),ca=a("path"),Ht=a("path"),xt=a("path"),ga=a("use"),Ze=a("use"),Sa=a("use"),mn=a("use"),pa=a("use"),m=a("use"),d=a("use"),vt=a("use"),$n=a("use"),hr=a("use"),Et=a("use"),Tr=a("use"),Bt=a("use"),Wn=a("use"),Y=a("use"),de=a("use"),fr=a("use"),dr=a("use"),cr=a("use"),Wt=a("g"),Ot=a("g"),Ut=a("path"),wt=a("g"),Ve=a("path"),yt=a("g"),le=a("g"),ne=a("defs"),Kt=a("path"),An=a("path"),qn=a("path"),Tn=a("path"),On=a("use"),Pr=a("use"),Un=a("use"),Va=a("use"),za=a("use"),Ia=a("use"),Aa=a("use"),qa=a("use"),Ta=a("use"),Pa=a("g"),gr=a("path"),pr=a("g"),et=a("g"),ke=a("defs"),Rr=a("path"),Pn=a("path"),Xr=a("path"),Kn=a("path"),Ra=a("use"),Zr=a("use"),Na=a("use"),Qt=a("use"),ea=a("use"),ma=a("use"),$a=a("use"),La=a("use"),_a=a("use"),Ba=a("use"),Wa=a("defs"),Oa=a("clipPath"),ta=a("rect"),this.h()},l(ka){o=s(ka,"svg",{"xmlns:xlink":!0,width:!0,height:!0,viewBox:!0,xmlns:!0,version:!0});var Ga=r(o);i=s(Ga,"metadata",{});var Xa=r(i);h=s(Xa,"rdf:RDF",{"xmlns:dc":!0,"xmlns:cc":!0,"xmlns:rdf":!0});var _s=r(h);f=s(_s,"cc:Work",{});var ss=r(f);u=s(ss,"dc:type",{"rdf:resource":!0}),r(u).forEach(e),c=s(ss,"dc:date",{});var os=r(c);g=_(os,"2024-02-22T08:05:52.596616"),os.forEach(e),k=s(ss,"dc:format",{});var rs=r(k);v=_(rs,"image/svg+xml"),rs.forEach(e),w=s(ss,"dc:creator",{});var ks=r(w);S=s(ks,"cc:Agent",{});var na=r(S);Q=s(na,"dc:title",{});var ds=r(Q);z=_(ds,"Matplotlib v3.5.1, https://matplotlib.org/"),ds.forEach(e),na.forEach(e),ks.forEach(e),ss.forEach(e),_s.forEach(e),Xa.forEach(e),P=s(Ga,"defs",{});var $s=r(P);I=s($s,"style",{type:!0});var Ls=r(I);U=_(Ls,`* {
				stroke-linejoin: round;
				stroke-linecap: butt;
			}
		`),Ls.forEach(e),$s.forEach(e),A=s(Ga,"g",{id:!0});var xa=r(A);F=s(xa,"g",{id:!0});var Ua=r(F);Z=s(Ua,"path",{d:!0,style:!0}),r(Z).forEach(e),Ua.forEach(e),re=s(xa,"g",{id:!0});var Ks=r(re);ee=s(Ks,"path",{d:!0,style:!0}),r(ee).forEach(e),Ks.forEach(e),Ie=s(xa,"g",{id:!0});var Vs=r(Ie);ue=s(Vs,"g",{id:!0});var zs=r(ue);H=s(zs,"path",{d:!0,style:!0}),r(H).forEach(e),zs.forEach(e),Vs.forEach(e),B=s(xa,"g",{id:!0});var Is=r(B);ce=s(Is,"g",{id:!0});var As=r(ce);V=s(As,"path",{d:!0,style:!0}),r(V).forEach(e),As.forEach(e),Is.forEach(e),G=s(xa,"g",{id:!0});var qs=r(G);Jt=s(qs,"g",{id:!0});var Ts=r(Jt);K=s(Ts,"path",{d:!0,style:!0}),r(K).forEach(e),Ts.forEach(e),qs.forEach(e),W=s(xa,"g",{id:!0});var Za=r(W);_n=s(Za,"g",{id:!0});var es=r(_n);Ae=s(es,"path",{d:!0,style:!0}),r(Ae).forEach(e),es.forEach(e),J=s(Za,"g",{id:!0});var is=r(J);xe=s(is,"path",{d:!0,style:!0}),r(xe).forEach(e),ve=s(is,"path",{d:!0,style:!0}),r(ve).forEach(e),ge=s(is,"path",{d:!0,style:!0}),r(ge).forEach(e),kn=s(is,"path",{d:!0,style:!0}),r(kn).forEach(e),Yt=s(is,"path",{d:!0,style:!0}),r(Yt).forEach(e),pe=s(is,"path",{d:!0,style:!0}),r(pe).forEach(e),xn=s(is,"path",{d:!0,style:!0}),r(xn).forEach(e),is.forEach(e),bt=s(Za,"g",{id:!0});var ls=r(bt);Jn=s(ls,"g",{id:!0});var js=r(Jn);qe=s(js,"path",{d:!0,style:!0}),r(qe).forEach(e),js.forEach(e),vn=s(ls,"g",{id:!0});var ws=r(vn);jt=s(ws,"g",{transform:!0});var ys=r(jt);Yn=s(ys,"defs",{});var us=r(Yn);tt=s(us,"path",{id:!0,d:!0,transform:!0}),r(tt).forEach(e),Xn=s(us,"path",{id:!0,d:!0,transform:!0}),r(Xn).forEach(e),Rn=s(us,"path",{id:!0,d:!0,transform:!0}),r(Rn).forEach(e),us.forEach(e),aa=s(ys,"use",{"xlink:href":!0}),r(aa).forEach(e),sa=s(ys,"use",{"xlink:href":!0,x:!0}),r(sa).forEach(e),Nr=s(ys,"use",{"xlink:href":!0,x:!0}),r(Nr).forEach(e),ys.forEach(e),ws.forEach(e),ls.forEach(e),Mt=s(Za,"g",{id:!0});var Js=r(Mt);Zn=s(Js,"g",{id:!0});var bo=r(Zn);me=s(bo,"path",{d:!0,style:!0}),r(me).forEach(e),bo.forEach(e),er=s(Js,"g",{id:!0});var Ys=r(er);Te=s(Ys,"g",{transform:!0});var fo=r(Te);va=s(fo,"defs",{});var Xs=r(va);Xt=s(Xs,"path",{id:!0,d:!0,transform:!0}),r(Xt).forEach(e),Xs.forEach(e),Fa=s(fo,"use",{"xlink:href":!0}),r(Fa).forEach(e),En=s(fo,"use",{"xlink:href":!0,x:!0}),r(En).forEach(e),fo.forEach(e),Ys.forEach(e),Js.forEach(e),mr=s(Za,"g",{id:!0});var jo=r(mr);Zt=s(jo,"g",{id:!0});var Mo=r(Zt);en=s(Mo,"path",{d:!0,style:!0}),r(en).forEach(e),Mo.forEach(e),nt=s(jo,"g",{id:!0});var r2=r(nt);tn=s(r2,"g",{transform:!0});var a2=r(tn);Nn=s(a2,"use",{"xlink:href":!0}),r(Nn).forEach(e),a2.forEach(e),r2.forEach(e),jo.forEach(e),wn=s(Za,"g",{id:!0});var co=r(wn);Gr=s(co,"g",{id:!0});var cs=r(Gr);Dt=s(cs,"path",{d:!0,style:!0}),r(Dt).forEach(e),cs.forEach(e),yn=s(co,"g",{id:!0});var s2=r(yn);tr=s(s2,"g",{transform:!0});var o2=r(tr);Ea=s(o2,"use",{"xlink:href":!0}),r(Ea).forEach(e),o2.forEach(e),s2.forEach(e),co.forEach(e),Qn=s(Za,"g",{id:!0});var Do=r(Qn);bn=s(Do,"g",{id:!0});var So=r(bn);Gn=s(So,"path",{d:!0,style:!0}),r(Gn).forEach(e),So.forEach(e),rt=s(Do,"g",{id:!0});var i2=r(rt);Cn=s(i2,"g",{transform:!0});var Vo=r(Cn);Fn=s(Vo,"use",{"xlink:href":!0}),r(Fn).forEach(e),wa=s(Vo,"use",{"xlink:href":!0,x:!0}),r(wa).forEach(e),Vo.forEach(e),i2.forEach(e),Do.forEach(e),nn=s(Za,"g",{id:!0});var zo=r(nn);Cr=s(zo,"g",{id:!0});var Io=r(Cr);Ee=s(Io,"path",{d:!0,style:!0}),r(Ee).forEach(e),Io.forEach(e),$r=s(zo,"g",{id:!0});var xs=r($r);Lr=s(xs,"g",{transform:!0});var Ao=r(Lr);nr=s(Ao,"use",{"xlink:href":!0}),r(nr).forEach(e),ya=s(Ao,"use",{"xlink:href":!0,x:!0}),r(ya).forEach(e),Ao.forEach(e),xs.forEach(e),zo.forEach(e),te=s(Za,"g",{id:!0});var vs=r(te);Fr=s(vs,"g",{id:!0});var go=r(Fr);at=s(go,"path",{d:!0,style:!0}),r(at).forEach(e),go.forEach(e),we=s(vs,"g",{id:!0});var l2=r(we);Hn=s(l2,"g",{transform:!0});var po=r(Hn);St=s(po,"defs",{});var Ps=r(St);_r=s(Ps,"path",{id:!0,d:!0,transform:!0}),r(_r).forEach(e),Ps.forEach(e),rn=s(po,"use",{"xlink:href":!0}),r(rn).forEach(e),ae=s(po,"use",{"xlink:href":!0,x:!0}),r(ae).forEach(e),po.forEach(e),l2.forEach(e),vs.forEach(e),Za.forEach(e),ye=s(xa,"g",{id:!0});var ra=r(ye);jn=s(ra,"g",{id:!0});var qo=r(jn);se=s(qo,"path",{d:!0,style:!0}),r(se).forEach(e),qo.forEach(e),Qe=s(ra,"g",{id:!0});var as=r(Qe);Pe=s(as,"path",{d:!0,style:!0}),r(Pe).forEach(e),Vt=s(as,"path",{d:!0,style:!0}),r(Vt).forEach(e),Re=s(as,"path",{d:!0,style:!0}),r(Re).forEach(e),oe=s(as,"path",{d:!0,style:!0}),r(oe).forEach(e),an=s(as,"path",{d:!0,style:!0}),r(an).forEach(e),rr=s(as,"path",{d:!0,style:!0}),r(rr).forEach(e),st=s(as,"path",{d:!0,style:!0}),r(st).forEach(e),kr=s(as,"path",{d:!0,style:!0}),r(kr).forEach(e),as.forEach(e),ot=s(ra,"g",{id:!0});var mo=r(ot);oa=s(mo,"g",{id:!0});var Zs=r(oa);Ne=s(Zs,"path",{d:!0,style:!0}),r(Ne).forEach(e),Zs.forEach(e),xr=s(mo,"g",{id:!0});var u2=r(xr);zt=s(u2,"g",{transform:!0});var Qs=r(zt);Hr=s(Qs,"use",{"xlink:href":!0}),r(Hr).forEach(e),Mn=s(Qs,"use",{"xlink:href":!0,x:!0}),r(Mn).forEach(e),sn=s(Qs,"use",{"xlink:href":!0,x:!0}),r(sn).forEach(e),Qs.forEach(e),u2.forEach(e),mo.forEach(e),ar=s(ra,"g",{id:!0});var To=r(ar);Br=s(To,"g",{id:!0});var Po=r(Br);be=s(Po,"path",{d:!0,style:!0}),r(be).forEach(e),Po.forEach(e),vr=s(To,"g",{id:!0});var Ro=r(vr);on=s(Ro,"g",{transform:!0});var $o=r(on);ln=s($o,"use",{"xlink:href":!0}),r(ln).forEach(e),ia=s($o,"use",{"xlink:href":!0,x:!0}),r(ia).forEach(e),$o.forEach(e),Ro.forEach(e),To.forEach(e),un=s(ra,"g",{id:!0});var eo=r(un);Ge=s(eo,"g",{id:!0});var No=r(Ge);sr=s(No,"path",{d:!0,style:!0}),r(sr).forEach(e),No.forEach(e),la=s(eo,"g",{id:!0});var h2=r(la);It=s(h2,"g",{transform:!0});var Go=r(It);ua=s(Go,"use",{"xlink:href":!0}),r(ua).forEach(e),Go.forEach(e),h2.forEach(e),eo.forEach(e),it=s(ra,"g",{id:!0});var Co=r(it);Er=s(Co,"g",{id:!0});var Fo=r(Er);lt=s(Fo,"path",{d:!0,style:!0}),r(lt).forEach(e),Fo.forEach(e),Wr=s(Co,"g",{id:!0});var f2=r(Wr);Dn=s(f2,"g",{transform:!0});var Ho=r(Dn);Qa=s(Ho,"use",{"xlink:href":!0}),r(Qa).forEach(e),Ho.forEach(e),f2.forEach(e),Co.forEach(e),Ce=s(ra,"g",{id:!0});var Lo=r(Ce);ha=s(Lo,"g",{id:!0});var Bo=r(ha);$e=s(Bo,"path",{d:!0,style:!0}),r($e).forEach(e),Bo.forEach(e),Ha=s(Lo,"g",{id:!0});var Wo=r(Ha);wr=s(Wo,"g",{transform:!0});var hs=r(wr);or=s(hs,"use",{"xlink:href":!0}),r(or).forEach(e),hn=s(hs,"use",{"xlink:href":!0,x:!0}),r(hn).forEach(e),hs.forEach(e),Wo.forEach(e),Lo.forEach(e),Le=s(ra,"g",{id:!0});var _o=r(Le);Sn=s(_o,"g",{id:!0});var Ca=r(Sn);fn=s(Ca,"path",{d:!0,style:!0}),r(fn).forEach(e),Ca.forEach(e),je=s(_o,"g",{id:!0});var Oo=r(je);Fe=s(Oo,"g",{transform:!0});var Es=r(Fe);Or=s(Es,"use",{"xlink:href":!0}),r(Or).forEach(e),He=s(Es,"use",{"xlink:href":!0,x:!0}),r(He).forEach(e),Es.forEach(e),Oo.forEach(e),_o.forEach(e),Be=s(ra,"g",{id:!0});var ko=r(Be);Ur=s(ko,"g",{id:!0});var to=r(Ur);We=s(to,"path",{d:!0,style:!0}),r(We).forEach(e),to.forEach(e),ir=s(ko,"g",{id:!0});var d2=r(ir);At=s(d2,"g",{transform:!0});var no=r(At);yr=s(no,"use",{"xlink:href":!0}),r(yr).forEach(e),qt=s(no,"use",{"xlink:href":!0,x:!0}),r(qt).forEach(e),no.forEach(e),d2.forEach(e),ko.forEach(e),ut=s(ra,"g",{id:!0});var xo=r(ut);ba=s(xo,"g",{id:!0});var c2=r(ba);Qr=s(c2,"path",{d:!0,style:!0}),r(Qr).forEach(e),c2.forEach(e),ie=s(xo,"g",{id:!0});var vo=r(ie);br=s(vo,"g",{transform:!0});var ro=r(br);Tt=s(ro,"use",{"xlink:href":!0}),r(Tt).forEach(e),Me=s(ro,"use",{"xlink:href":!0,x:!0}),r(Me).forEach(e),ro.forEach(e),vo.forEach(e),xo.forEach(e),ra.forEach(e),_e=s(xa,"g",{id:!0});var bs=r(_e);Oe=s(bs,"g",{id:!0});var g2=r(Oe);lr=s(g2,"path",{d:!0,style:!0}),r(lr).forEach(e),g2.forEach(e),De=s(bs,"g",{id:!0});var Ms=r(De);Vn=s(Ms,"path",{d:!0,style:!0}),r(Vn).forEach(e),Ue=s(Ms,"path",{d:!0,style:!0}),r(Ue).forEach(e),Pt=s(Ms,"path",{d:!0,style:!0}),r(Pt).forEach(e),Ke=s(Ms,"path",{d:!0,style:!0}),r(Ke).forEach(e),Ms.forEach(e),ur=s(bs,"g",{id:!0});var ao=r(ur);Bn=s(ao,"g",{id:!0});var Uo=r(Bn);dn=s(Uo,"path",{d:!0,style:!0}),r(dn).forEach(e),Uo.forEach(e),zn=s(ao,"g",{id:!0});var p2=r(zn);Kr=s(p2,"g",{transform:!0});var so=r(Kr);cn=s(so,"use",{"xlink:href":!0}),r(cn).forEach(e),Jr=s(so,"use",{"xlink:href":!0,x:!0}),r(Jr).forEach(e),so.forEach(e),p2.forEach(e),ao.forEach(e),Rt=s(bs,"g",{id:!0});var oo=r(Rt);jr=s(oo,"g",{id:!0});var Ko=r(jr);Nt=s(Ko,"path",{d:!0,style:!0}),r(Nt).forEach(e),Ko.forEach(e),ht=s(oo,"g",{id:!0});var m2=r(ht);ja=s(m2,"g",{transform:!0});var Eo=r(ja);Gt=s(Eo,"use",{"xlink:href":!0}),r(Gt).forEach(e),Yr=s(Eo,"use",{"xlink:href":!0,x:!0}),r(Yr).forEach(e),Eo.forEach(e),m2.forEach(e),oo.forEach(e),ft=s(bs,"g",{id:!0});var Rs=r(ft);Mr=s(Rs,"g",{id:!0});var $2=r(Mr);dt=s($2,"path",{d:!0,style:!0}),r(dt).forEach(e),$2.forEach(e),gn=s(Rs,"g",{id:!0});var Jo=r(gn);fa=s(Jo,"g",{transform:!0});var wo=r(fa);da=s(wo,"defs",{});var Yo=r(da);Ct=s(Yo,"path",{id:!0,d:!0,transform:!0}),r(Ct).forEach(e),Yo.forEach(e),Dr=s(wo,"use",{"xlink:href":!0}),r(Dr).forEach(e),ct=s(wo,"use",{"xlink:href":!0,x:!0}),r(ct).forEach(e),wo.forEach(e),Jo.forEach(e),Rs.forEach(e),Sr=s(bs,"g",{id:!0});var yo=r(Sr);In=s(yo,"g",{id:!0});var Xo=r(In);Vr=s(Xo,"path",{d:!0,style:!0}),r(Vr).forEach(e),Xo.forEach(e),pn=s(yo,"g",{id:!0});var L2=r(pn);gt=s(L2,"g",{transform:!0});var io=r(gt);zr=s(io,"defs",{});var Qo=r(zr);pt=s(Qo,"path",{id:!0,d:!0,transform:!0}),r(pt).forEach(e),Qo.forEach(e),Ft=s(io,"use",{"xlink:href":!0}),r(Ft).forEach(e),Ma=s(io,"use",{"xlink:href":!0,x:!0}),r(Ma).forEach(e),io.forEach(e),L2.forEach(e),yo.forEach(e),bs.forEach(e),mt=s(xa,"g",{id:!0});var lo=r(mt);Da=s(lo,"g",{id:!0});var Ns=r(Da);Se=s(Ns,"path",{d:!0,"clip-path":!0,style:!0}),r(Se).forEach(e),Ns.forEach(e),$t=s(lo,"g",{id:!0});var gs=r($t);Lt=s(gs,"path",{d:!0,"clip-path":!0,style:!0}),r(Lt).forEach(e),gs.forEach(e),Je=s(lo,"g",{id:!0});var _2=r(Je);C=s(_2,"g",{transform:!0});var ze=r(C);fe=s(ze,"defs",{});var he=r(fe);Ir=s(he,"path",{id:!0,d:!0,transform:!0}),r(Ir).forEach(e),O=s(he,"path",{id:!0,d:!0,transform:!0}),r(O).forEach(e),Ye=s(he,"path",{id:!0,d:!0,transform:!0}),r(Ye).forEach(e),_t=s(he,"path",{id:!0,d:!0,transform:!0}),r(_t).forEach(e),Ar=s(he,"path",{id:!0,d:!0,transform:!0}),r(Ar).forEach(e),Xe=s(he,"path",{id:!0,transform:!0}),r(Xe).forEach(e),qr=s(he,"path",{id:!0,d:!0,transform:!0}),r(qr).forEach(e),kt=s(he,"path",{id:!0,d:!0,transform:!0}),r(kt).forEach(e),ca=s(he,"path",{id:!0,d:!0,transform:!0}),r(ca).forEach(e),Ht=s(he,"path",{id:!0,d:!0,transform:!0}),r(Ht).forEach(e),xt=s(he,"path",{id:!0,d:!0,transform:!0}),r(xt).forEach(e),he.forEach(e),ga=s(ze,"use",{"xlink:href":!0}),r(ga).forEach(e),Ze=s(ze,"use",{"xlink:href":!0,x:!0}),r(Ze).forEach(e),Sa=s(ze,"use",{"xlink:href":!0,x:!0}),r(Sa).forEach(e),mn=s(ze,"use",{"xlink:href":!0,x:!0}),r(mn).forEach(e),pa=s(ze,"use",{"xlink:href":!0,x:!0}),r(pa).forEach(e),m=s(ze,"use",{"xlink:href":!0,x:!0}),r(m).forEach(e),d=s(ze,"use",{"xlink:href":!0,x:!0}),r(d).forEach(e),vt=s(ze,"use",{"xlink:href":!0,x:!0}),r(vt).forEach(e),$n=s(ze,"use",{"xlink:href":!0,x:!0}),r($n).forEach(e),hr=s(ze,"use",{"xlink:href":!0,x:!0}),r(hr).forEach(e),Et=s(ze,"use",{"xlink:href":!0,x:!0}),r(Et).forEach(e),Tr=s(ze,"use",{"xlink:href":!0,x:!0}),r(Tr).forEach(e),Bt=s(ze,"use",{"xlink:href":!0,x:!0}),r(Bt).forEach(e),Wn=s(ze,"use",{"xlink:href":!0,x:!0}),r(Wn).forEach(e),Y=s(ze,"use",{"xlink:href":!0,x:!0}),r(Y).forEach(e),de=s(ze,"use",{"xlink:href":!0,x:!0}),r(de).forEach(e),fr=s(ze,"use",{"xlink:href":!0,x:!0}),r(fr).forEach(e),dr=s(ze,"use",{"xlink:href":!0,x:!0}),r(dr).forEach(e),cr=s(ze,"use",{"xlink:href":!0,x:!0}),r(cr).forEach(e),ze.forEach(e),_2.forEach(e),Wt=s(lo,"g",{id:!0});var Ka=r(Wt);Ot=s(Ka,"g",{id:!0});var Gs=r(Ot);Ut=s(Gs,"path",{d:!0,style:!0}),r(Ut).forEach(e),Gs.forEach(e),wt=s(Ka,"g",{id:!0});var k2=r(wt);Ve=s(k2,"path",{d:!0,style:!0}),r(Ve).forEach(e),k2.forEach(e),yt=s(Ka,"g",{id:!0});var Zo=r(yt);le=s(Zo,"g",{transform:!0});var ps=r(le);ne=s(ps,"defs",{});var ts=r(ne);Kt=s(ts,"path",{id:!0,d:!0,transform:!0}),r(Kt).forEach(e),An=s(ts,"path",{id:!0,d:!0,transform:!0}),r(An).forEach(e),qn=s(ts,"path",{id:!0,d:!0,transform:!0}),r(qn).forEach(e),Tn=s(ts,"path",{id:!0,d:!0,transform:!0}),r(Tn).forEach(e),ts.forEach(e),On=s(ps,"use",{"xlink:href":!0}),r(On).forEach(e),Pr=s(ps,"use",{"xlink:href":!0,x:!0}),r(Pr).forEach(e),Un=s(ps,"use",{"xlink:href":!0,x:!0}),r(Un).forEach(e),Va=s(ps,"use",{"xlink:href":!0,x:!0}),r(Va).forEach(e),za=s(ps,"use",{"xlink:href":!0,x:!0}),r(za).forEach(e),Ia=s(ps,"use",{"xlink:href":!0,x:!0}),r(Ia).forEach(e),Aa=s(ps,"use",{"xlink:href":!0,x:!0}),r(Aa).forEach(e),qa=s(ps,"use",{"xlink:href":!0,x:!0}),r(qa).forEach(e),Ta=s(ps,"use",{"xlink:href":!0,x:!0}),r(Ta).forEach(e),ps.forEach(e),Zo.forEach(e),Pa=s(Ka,"g",{id:!0});var Cs=r(Pa);gr=s(Cs,"path",{d:!0,style:!0}),r(gr).forEach(e),Cs.forEach(e),pr=s(Ka,"g",{id:!0});var e2=r(pr);et=s(e2,"g",{transform:!0});var fs=r(et);ke=s(fs,"defs",{});var Ja=r(ke);Rr=s(Ja,"path",{id:!0,d:!0,transform:!0}),r(Rr).forEach(e),Pn=s(Ja,"path",{id:!0,d:!0,transform:!0}),r(Pn).forEach(e),Xr=s(Ja,"path",{id:!0,d:!0,transform:!0}),r(Xr).forEach(e),Kn=s(Ja,"path",{id:!0,d:!0,transform:!0}),r(Kn).forEach(e),Ja.forEach(e),Ra=s(fs,"use",{"xlink:href":!0}),r(Ra).forEach(e),Zr=s(fs,"use",{"xlink:href":!0,x:!0}),r(Zr).forEach(e),Na=s(fs,"use",{"xlink:href":!0,x:!0}),r(Na).forEach(e),Qt=s(fs,"use",{"xlink:href":!0,x:!0}),r(Qt).forEach(e),ea=s(fs,"use",{"xlink:href":!0,x:!0}),r(ea).forEach(e),ma=s(fs,"use",{"xlink:href":!0,x:!0}),r(ma).forEach(e),$a=s(fs,"use",{"xlink:href":!0,x:!0}),r($a).forEach(e),La=s(fs,"use",{"xlink:href":!0,x:!0}),r(La).forEach(e),_a=s(fs,"use",{"xlink:href":!0,x:!0}),r(_a).forEach(e),Ba=s(fs,"use",{"xlink:href":!0,x:!0}),r(Ba).forEach(e),fs.forEach(e),e2.forEach(e),Ka.forEach(e),lo.forEach(e),xa.forEach(e),Wa=s(Ga,"defs",{});var Fs=r(Wa);Oa=s(Fs,"clipPath",{id:!0});var t2=r(Oa);ta=s(t2,"rect",{x:!0,y:!0,width:!0,height:!0}),r(ta).forEach(e),t2.forEach(e),Fs.forEach(e),Ga.forEach(e),this.h()},h(){t(u,"rdf:resource","http://purl.org/dc/dcmitype/StillImage"),t(h,"xmlns:dc","http://purl.org/dc/elements/1.1/"),t(h,"xmlns:cc","http://creativecommons.org/ns#"),t(h,"xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),t(I,"type","text/css"),t(Z,"d",`M 0 426.96 
L 727.92 426.96 
L 727.92 0 
L 0 0 
z
`),l(Z,"fill","#ffffff"),t(F,"id","patch_1"),t(ee,"d",`M 208.6794 379.9944 
L 537.4386 379.9944 
L 537.4386 51.2352 
L 208.6794 51.2352 
z
`),l(ee,"fill","#ffffff"),t(re,"id","patch_2"),t(H,"d",`M 233.502987 298.932917 
L 342.070011 207.929884 
L 340.560826 76.687243 
L 226.798309 159.705946 
`),l(H,"fill","#f2f2f2"),l(H,"opacity","0.5"),l(H,"stroke","#f2f2f2"),l(H,"stroke-linejoin","miter"),t(ue,"id","patch_3"),t(Ie,"id","pane3d_1"),t(V,"d",`M 342.070011 207.929884 
L 516.281349 258.566242 
L 522.498338 122.803099 
L 340.560826 76.687243 
`),l(V,"fill","#e6e6e6"),l(V,"opacity","0.5"),l(V,"stroke","#e6e6e6"),l(V,"stroke-linejoin","miter"),t(ce,"id","patch_4"),t(B,"id","pane3d_2"),t(K,"d",`M 233.502987 298.932917 
L 418.175514 359.246964 
L 516.281349 258.566242 
L 342.070011 207.929884 
`),l(K,"fill","#ececec"),l(K,"opacity","0.5"),l(K,"stroke","#ececec"),l(K,"stroke-linejoin","miter"),t(Jt,"id","patch_5"),t(G,"id","pane3d_3"),t(Ae,"d",`M 233.502987 298.932917 
L 418.175514 359.246964 
`),l(Ae,"fill","none"),l(Ae,"stroke","#000000"),l(Ae,"stroke-width","0.8"),l(Ae,"stroke-linecap","square"),t(_n,"id","line2d_1"),t(xe,"d",`M 249.12005 304.03345 
L 356.862064 212.22935 
L 355.979081 80.595321 
`),l(xe,"fill","none"),l(xe,"stroke","#b0b0b0"),l(xe,"stroke-width","0.8"),t(ve,"d",`M 275.449069 312.632508 
L 381.775148 219.4706 
L 381.959315 87.180553 
`),l(ve,"fill","none"),l(ve,"stroke","#b0b0b0"),l(ve,"stroke-width","0.8"),t(ge,"d",`M 302.185931 321.364766 
L 407.042027 226.814684 
L 408.324517 93.863363 
`),l(ge,"fill","none"),l(ge,"stroke","#b0b0b0"),l(ge,"stroke-width","0.8"),t(kn,"d",`M 329.340184 330.233345 
L 432.67029 234.263809 
L 435.083306 100.645936 
`),l(kn,"fill","none"),l(kn,"stroke","#b0b0b0"),l(kn,"stroke-width","0.8"),t(Yt,"d",`M 356.92168 339.241462 
L 458.667748 241.820243 
L 462.244562 107.530523 
`),l(Yt,"fill","none"),l(Yt,"stroke","#b0b0b0"),l(Yt,"stroke-width","0.8"),t(pe,"d",`M 384.940582 348.392435 
L 485.042434 249.486323 
L 489.817434 114.519442 
`),l(pe,"fill","none"),l(pe,"stroke","#b0b0b0"),l(pe,"stroke-width","0.8"),t(xn,"d",`M 413.407378 357.689691 
L 511.802621 257.264453 
L 517.811351 121.615084 
`),l(xn,"fill","none"),l(xn,"stroke","#b0b0b0"),l(xn,"stroke-width","0.8"),t(J,"id","Line3DCollection_1"),t(qe,"d",`M 250.05836 303.233941 
L 247.239398 305.635903 
`),l(qe,"fill","none"),l(qe,"stroke","#000000"),l(qe,"stroke-width","0.8"),l(qe,"stroke-linecap","square"),t(Jn,"id","line2d_2"),t(tt,"id","DejaVuSans-2212"),t(tt,"d",`M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
`),t(tt,"transform","scale(0.015625)"),t(Xn,"id","DejaVuSans-31"),t(Xn,"d",`M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
`),t(Xn,"transform","scale(0.015625)"),t(Rn,"id","DejaVuSans-30"),t(Rn,"d",`M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
`),t(Rn,"transform","scale(0.015625)"),$(aa,"xlink:href","#DejaVuSans-2212"),$(sa,"xlink:href","#DejaVuSans-31"),t(sa,"x","83.789062"),$(Nr,"xlink:href","#DejaVuSans-30"),t(Nr,"x","147.412109"),t(jt,"transform","translate(231.047554 327.356236)scale(0.1 -0.1)"),t(vn,"id","text_1"),t(bt,"id","xtick_1"),t(me,"d",`M 276.375627 311.820666 
L 273.591942 314.259705 
`),l(me,"fill","none"),l(me,"stroke","#000000"),l(me,"stroke-width","0.8"),l(me,"stroke-linecap","square"),t(Zn,"id","line2d_3"),t(Xt,"id","DejaVuSans-35"),t(Xt,"d",`M 691 4666 
L 3169 4666 
L 3169 4134 
L 1269 4134 
L 1269 2991 
Q 1406 3038 1543 3061 
Q 1681 3084 1819 3084 
Q 2600 3084 3056 2656 
Q 3513 2228 3513 1497 
Q 3513 744 3044 326 
Q 2575 -91 1722 -91 
Q 1428 -91 1123 -41 
Q 819 9 494 109 
L 494 744 
Q 775 591 1075 516 
Q 1375 441 1709 441 
Q 2250 441 2565 725 
Q 2881 1009 2881 1497 
Q 2881 1984 2565 2268 
Q 2250 2553 1709 2553 
Q 1456 2553 1204 2497 
Q 953 2441 691 2322 
L 691 4666 
z
`),t(Xt,"transform","scale(0.015625)"),$(Fa,"xlink:href","#DejaVuSans-2212"),$(En,"xlink:href","#DejaVuSans-35"),t(En,"x","83.789062"),t(Te,"transform","translate(260.579731 336.1026)scale(0.1 -0.1)"),t(er,"id","text_2"),t(Mt,"id","xtick_2"),t(en,"d",`M 303.100258 320.540306 
L 300.353286 323.017286 
`),l(en,"fill","none"),l(en,"stroke","#000000"),l(en,"stroke-width","0.8"),l(en,"stroke-linecap","square"),t(Zt,"id","line2d_4"),$(Nn,"xlink:href","#DejaVuSans-30"),t(tn,"transform","translate(291.529931 344.984861)scale(0.1 -0.1)"),t(nt,"id","text_3"),t(mr,"id","xtick_3"),t(Dt,"d",`M 330.241785 329.395968 
L 327.533016 331.911782 
`),l(Dt,"fill","none"),l(Dt,"stroke","#000000"),l(Dt,"stroke-width","0.8"),l(Dt,"stroke-linecap","square"),t(Gr,"id","line2d_5"),$(Ea,"xlink:href","#DejaVuSans-35"),t(tr,"transform","translate(318.709333 354.006211)scale(0.1 -0.1)"),t(yn,"id","text_4"),t(wn,"id","xtick_4"),t(Gn,"d",`M 357.81004 338.390863 
L 355.141022 340.94643 
`),l(Gn,"fill","none"),l(Gn,"stroke","#000000"),l(Gn,"stroke-width","0.8"),l(Gn,"stroke-linecap","square"),t(bn,"id","line2d_6"),$(Fn,"xlink:href","#DejaVuSans-31"),$(wa,"xlink:href","#DejaVuSans-30"),t(wa,"x","63.623047"),t(Cn,"transform","translate(343.136452 363.169943)scale(0.1 -0.1)"),t(rt,"id","text_5"),t(Qn,"id","xtick_5"),t(Ee,"d",`M 385.815166 347.528298 
L 383.187506 350.12457 
`),l(Ee,"fill","none"),l(Ee,"stroke","#000000"),l(Ee,"stroke-width","0.8"),l(Ee,"stroke-linecap","square"),t(Cr,"id","line2d_7"),$(nr,"xlink:href","#DejaVuSans-31"),$(ya,"xlink:href","#DejaVuSans-35"),t(ya,"x","63.623047"),t(Lr,"transform","translate(371.184023 372.479454)scale(0.1 -0.1)"),t($r,"id","text_6"),t(nn,"id","xtick_6"),t(at,"d",`M 414.267631 356.81169 
L 411.682999 359.449646 
`),l(at,"fill","none"),l(at,"stroke","#000000"),l(at,"stroke-width","0.8"),l(at,"stroke-linecap","square"),t(Fr,"id","line2d_8"),t(_r,"id","DejaVuSans-32"),t(_r,"d",`M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
`),t(_r,"transform","scale(0.015625)"),$(rn,"xlink:href","#DejaVuSans-32"),$(ae,"xlink:href","#DejaVuSans-30"),t(ae,"x","63.623047"),t(Hn,"transform","translate(399.681362 381.938252)scale(0.1 -0.1)"),t(we,"id","text_7"),t(te,"id","xtick_7"),t(W,"id","axis3d_1"),t(se,"d",`M 516.281349 258.566242 
L 418.175514 359.246964 
`),l(se,"fill","none"),l(se,"stroke","#000000"),l(se,"stroke-width","0.8"),l(se,"stroke-linecap","square"),t(jn,"id","line2d_9"),t(Pe,"d",`M 240.436097 149.75371 
L 246.474509 288.05993 
L 429.942784 347.17085 
`),l(Pe,"fill","none"),l(Pe,"stroke","#b0b0b0"),l(Pe,"stroke-width","0.8"),t(Vt,"d",`M 254.464746 139.516241 
L 259.830107 276.865003 
L 442.045487 334.750499 
`),l(Vt,"fill","none"),l(Vt,"stroke","#b0b0b0"),l(Vt,"stroke-width","0.8"),t(Re,"d",`M 268.198738 129.493799 
L 272.917294 265.895063 
L 453.892199 322.592858 
`),l(Re,"fill","none"),l(Re,"stroke","#b0b0b0"),l(Re,"stroke-width","0.8"),t(oe,"d",`M 281.64726 119.67968 
L 285.744083 255.143395 
L 465.490957 310.689679 
`),l(oe,"fill","none"),l(oe,"stroke","#b0b0b0"),l(oe,"stroke-width","0.8"),t(an,"d",`M 294.819121 110.067455 
L 298.318168 244.603547 
L 476.849465 299.033056 
`),l(an,"fill","none"),l(an,"stroke","#b0b0b0"),l(an,"stroke-width","0.8"),t(rr,"d",`M 307.722772 100.650959 
L 310.646944 234.269323 
L 487.975111 287.615407 
`),l(rr,"fill","none"),l(rr,"stroke","#b0b0b0"),l(rr,"stroke-width","0.8"),t(st,"d",`M 320.366322 91.424272 
L 322.73752 224.134762 
L 498.874983 276.429456 
`),l(st,"fill","none"),l(st,"stroke","#b0b0b0"),l(st,"stroke-width","0.8"),t(kr,"d",`M 332.757557 82.381713 
L 334.596734 214.194134 
L 509.555884 265.468224 
`),l(kr,"fill","none"),l(kr,"stroke","#b0b0b0"),l(kr,"stroke-width","0.8"),t(Qe,"id","Line3DCollection_2"),t(Ne,"d",`M 428.397034 346.672831 
L 433.038264 348.16817 
`),l(Ne,"fill","none"),l(Ne,"stroke","#000000"),l(Ne,"stroke-width","0.8"),l(Ne,"stroke-linecap","square"),t(oa,"id","line2d_10"),$(Hr,"xlink:href","#DejaVuSans-2212"),$(Mn,"xlink:href","#DejaVuSans-31"),t(Mn,"x","83.789062"),$(sn,"xlink:href","#DejaVuSans-30"),t(sn,"x","147.412109"),t(zt,"transform","translate(432.215593 368.129792)scale(0.1 -0.1)"),t(xr,"id","text_8"),t(ot,"id","xtick_8"),t(be,"d",`M 440.511121 334.263068 
L 445.118128 335.726604 
`),l(be,"fill","none"),l(be,"stroke","#000000"),l(be,"stroke-width","0.8"),l(be,"stroke-linecap","square"),t(Br,"id","line2d_11"),$(ln,"xlink:href","#DejaVuSans-2212"),$(ia,"xlink:href","#DejaVuSans-35"),t(ia,"x","83.789062"),t(on,"transform","translate(447.368172 355.560636)scale(0.1 -0.1)"),t(vr,"id","text_9"),t(ar,"id","xtick_9"),t(sr,"d",`M 452.369083 322.11568 
L 456.94227 323.548418 
`),l(sr,"fill","none"),l(sr,"stroke","#000000"),l(sr,"stroke-width","0.8"),l(sr,"stroke-linecap","square"),t(Ge,"id","line2d_12"),$(ua,"xlink:href","#DejaVuSans-30"),t(It,"transform","translate(463.276012 343.257464)scale(0.1 -0.1)"),t(la,"id","text_10"),t(un,"id","xtick_10"),t(lt,"d",`M 463.978959 310.222434 
L 468.518724 311.625335 
`),l(lt,"fill","none"),l(lt,"stroke","#000000"),l(lt,"stroke-width","0.8"),l(lt,"stroke-linecap","square"),t(Er,"id","line2d_13"),$(Qa,"xlink:href","#DejaVuSans-35"),t(Dn,"transform","translate(474.748635 331.211919)scale(0.1 -0.1)"),t(Wr,"id","text_11"),t(it,"id","xtick_11"),t($e,"d",`M 475.348453 298.575437 
L 479.855193 299.949424 
`),l($e,"fill","none"),l($e,"stroke","#000000"),l($e,"stroke-width","0.8"),l($e,"stroke-linecap","square"),t(ha,"id","line2d_14"),$(or,"xlink:href","#DejaVuSans-31"),$(hn,"xlink:href","#DejaVuSans-30"),t(hn,"x","63.623047"),t(wr,"transform","translate(482.80226 319.415995)scale(0.1 -0.1)"),t(Ha,"id","text_12"),t(Ce,"id","xtick_12"),t(fn,"d",`M 486.484955 287.167119 
L 490.959062 288.513076 
`),l(fn,"fill","none"),l(fn,"stroke","#000000"),l(fn,"stroke-width","0.8"),l(fn,"stroke-linecap","square"),t(Sn,"id","line2d_15"),$(Or,"xlink:href","#DejaVuSans-31"),$(He,"xlink:href","#DejaVuSans-35"),t(He,"x","63.623047"),t(Fe,"transform","translate(493.806702 307.86201)scale(0.1 -0.1)"),t(je,"id","text_13"),t(Le,"id","xtick_13"),t(We,"d",`M 497.395553 275.990218 
L 501.837418 277.308995 
`),l(We,"fill","none"),l(We,"stroke","#000000"),l(We,"stroke-width","0.8"),l(We,"stroke-linecap","square"),t(Ur,"id","line2d_16"),$(yr,"xlink:href","#DejaVuSans-32"),$(qt,"xlink:href","#DejaVuSans-30"),t(qt,"x","63.623047"),t(At,"transform","translate(504.587729 296.542598)scale(0.1 -0.1)"),t(ir,"id","text_14"),t(Be,"id","xtick_14"),t(Qr,"d",`M 508.087053 265.037763 
L 512.497062 266.330175 
`),l(Qr,"fill","none"),l(Qr,"stroke","#000000"),l(Qr,"stroke-width","0.8"),l(Qr,"stroke-linecap","square"),t(ba,"id","line2d_17"),$(Tt,"xlink:href","#DejaVuSans-32"),$(Me,"xlink:href","#DejaVuSans-35"),t(Me,"x","63.623047"),t(br,"transform","translate(515.152076 285.450687)scale(0.1 -0.1)"),t(ie,"id","text_15"),t(ut,"id","xtick_15"),t(ye,"id","axis3d_2"),t(lr,"d",`M 516.281349 258.566242 
L 522.498338 122.803099 
`),l(lr,"fill","none"),l(lr,"stroke","#000000"),l(lr,"stroke-width","0.8"),l(lr,"stroke-linecap","square"),t(Oe,"id","line2d_18"),t(Vn,"d",`M 517.183355 238.868743 
L 341.850652 188.853861 
L 232.531625 278.761961 
`),l(Vn,"fill","none"),l(Vn,"stroke","#b0b0b0"),l(Vn,"stroke-width","0.8"),t(Ue,"d",`M 518.455062 211.097897 
L 341.541614 161.97907 
L 231.161327 250.306844 
`),l(Ue,"fill","none"),l(Ue,"stroke","#b0b0b0"),l(Ue,"stroke-width","0.8"),t(Pt,"d",`M 519.750139 182.816736 
L 341.227171 134.634281 
L 229.764878 221.308662 
`),l(Pt,"fill","none"),l(Pt,"stroke","#b0b0b0"),l(Pt,"stroke-width","0.8"),t(Ke,"d",`M 521.069234 154.011062 
L 340.90718 106.807055 
L 228.34152 191.751719 
`),l(Ke,"fill","none"),l(Ke,"stroke","#b0b0b0"),l(Ke,"stroke-width","0.8"),t(De,"id","Line3DCollection_3"),t(dn,"d",`M 515.711383 238.448853 
L 520.130822 239.709529 
`),l(dn,"fill","none"),l(dn,"stroke","#000000"),l(dn,"stroke-width","0.8"),l(dn,"stroke-linecap","square"),t(Bn,"id","line2d_19"),$(cn,"xlink:href","#DejaVuSans-31"),$(Jr,"xlink:href","#DejaVuSans-30"),t(Jr,"x","63.623047"),t(Kr,"transform","translate(529.196107 243.891935)scale(0.1 -0.1)"),t(zn,"id","text_16"),t(ur,"id","xtick_16"),t(Nt,"d",`M 516.969183 210.685353 
L 521.43041 211.923983 
`),l(Nt,"fill","none"),l(Nt,"stroke","#000000"),l(Nt,"stroke-width","0.8"),l(Nt,"stroke-linecap","square"),t(jr,"id","line2d_20"),$(Gt,"xlink:href","#DejaVuSans-32"),$(Yr,"xlink:href","#DejaVuSans-30"),t(Yr,"x","63.623047"),t(ja,"transform","translate(530.63156 216.166191)scale(0.1 -0.1)"),t(ht,"id","text_17"),t(Rt,"id","xtick_17"),t(dt,"d",`M 518.250088 182.41188 
L 522.753898 183.627436 
`),l(dt,"fill","none"),l(dt,"stroke","#000000"),l(dt,"stroke-width","0.8"),l(dt,"stroke-linecap","square"),t(Mr,"id","line2d_21"),t(Ct,"id","DejaVuSans-33"),t(Ct,"d",`M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
`),t(Ct,"transform","scale(0.015625)"),$(Dr,"xlink:href","#DejaVuSans-33"),$(ct,"xlink:href","#DejaVuSans-30"),t(ct,"x","63.623047"),t(fa,"transform","translate(532.093326 187.932227)scale(0.1 -0.1)"),t(gn,"id","text_18"),t(ft,"id","xtick_18"),t(Vr,"d",`M 519.554738 153.614251 
L 524.101953 154.80566 
`),l(Vr,"fill","none"),l(Vr,"stroke","#000000"),l(Vr,"stroke-width","0.8"),l(Vr,"stroke-linecap","square"),t(In,"id","line2d_22"),t(pt,"id","DejaVuSans-34"),t(pt,"d",`M 2419 4116 
L 825 1625 
L 2419 1625 
L 2419 4116 
z
M 2253 4666 
L 3047 4666 
L 3047 1625 
L 3713 1625 
L 3713 1100 
L 3047 1100 
L 3047 0 
L 2419 0 
L 2419 1100 
L 313 1100 
L 313 1709 
L 2253 4666 
z
`),t(pt,"transform","scale(0.015625)"),$(Ft,"xlink:href","#DejaVuSans-34"),$(Ma,"xlink:href","#DejaVuSans-30"),t(Ma,"x","63.623047"),t(gt,"transform","translate(533.582133 159.175941)scale(0.1 -0.1)"),t(pn,"id","text_19"),t(Sr,"id","xtick_19"),t(_e,"id","axis3d_3"),t(Se,"d",`M 340.371773 265.949485 
L 340.438149 267.076391 
L 340.510442 268.154448 
L 340.590015 269.185633 
L 340.678672 270.17142 
L 340.778436 271.113098 
L 340.891525 272.011853 
L 341.019969 272.868832 
L 341.166874 273.684636 
L 341.335855 274.459637 
L 341.530907 275.194047 
L 341.75574 275.888129 
L 342.016177 276.541289 
L 342.319101 277.152518 
L 342.672124 277.720512 
L 343.082343 278.244153 
L 343.560887 278.720683 
L 344.121064 279.146464 
L 344.77754 279.517218 
L 345.544067 279.829187 
L 346.441989 280.075048 
L 347.497042 280.245394 
L 348.73737 280.32932 
L 350.189735 280.317306 
L 351.894631 280.191361 
L 353.900947 279.928146 
L 356.260928 279.500755 
L 359.026609 278.885549 
L 362.271155 278.038036 
L 366.080463 276.899775 
L 370.540314 275.410857 
L 375.747788 273.496104 
L 381.81087 271.050325 
L 388.836545 267.955504 
L 396.928041 264.067675 
L 406.153044 259.221171 
L 416.567785 253.231626 
L 428.08875 245.932345 
L 440.542642 237.185768 
L 453.562271 226.942407 
L 466.458867 215.39211 
L 478.318695 202.925399 
L 487.868415 190.405516 
L 493.659705 179.028622 
L 494.400333 170.236612 
L 489.164994 165.409197 
L 478.020499 165.21511 
L 461.911642 169.49347 
L 442.618894 177.045805 
L 422.14557 186.234301 
L 402.231517 195.484181 
L 384.040422 203.717992 
L 368.146546 210.438698 
L 354.660653 215.619288 
L 343.440214 219.472158 
L 334.202528 222.308526 
L 326.63621 224.434961 
L 320.437932 226.095191 
L 315.329034 227.482946 
L 311.073687 228.720766 
L 307.473415 229.887167 
L 304.347343 231.03562 
L 301.565684 232.176447 
L 299.013616 233.312567 
L 296.584657 234.439537 
L 294.209879 235.53618 
L 291.833427 236.578854 
L 289.406924 237.543128 
L 286.884187 238.401693 
L 284.251928 239.123794 
L 281.503428 239.678122 
L 278.636884 240.034374 
L 275.652575 240.157726 
L 272.577427 240.015225 
L 269.458224 239.578983 
L 266.342248 238.821512 
L 263.287167 237.723343 
L 260.369742 236.255411 
L 257.681865 234.434676 
L 255.315952 232.278454 
L 253.362518 229.81266 
L 251.923123 227.089239 
L 251.064108 224.195688 
L 250.840425 221.22367 
L 251.296729 218.284702 
L 252.416158 215.494798 
L 254.157997 212.963343 
L 256.462976 210.795554 
L 259.232631 209.072755 
L 262.351405 207.836412 
L 265.712813 207.11235 
L 269.166872 206.916326 
L 272.617664 207.203307 
L 275.976935 207.922599 
L 279.157361 209.024097 
L 282.091544 210.451441 
L 284.717466 212.127825 
L 287.018892 213.999281 
L 288.979359 216.011962 
L 290.582326 218.11446 
`),t(Se,"clip-path","url(#paf9e3e687e)"),l(Se,"fill","none"),l(Se,"stroke","#1f77b4"),l(Se,"stroke-width","1.5"),l(Se,"stroke-linecap","square"),t(Da,"id","line2d_23"),t(Lt,"d",`M 343.067484 268.711158 
L 342.849415 269.189891 
L 342.035681 270.156905 
L 342.516772 270.223096 
L 341.884714 270.340213 
L 341.696497 270.490844 
L 340.860047 271.153906 
L 342.765989 272.422693 
L 342.052458 273.24953 
L 341.674948 274.294007 
L 341.250043 276.176682 
L 340.200799 277.32661 
L 337.38616 278.500854 
L 339.040109 279.081763 
L 336.432673 279.121782 
L 334.928389 279.229111 
L 334.236122 280.216506 
L 333.391269 279.017012 
L 333.210187 278.35014 
L 332.850663 276.574846 
L 334.001245 274.709893 
L 335.603112 272.87056 
L 338.196438 272.005818 
L 338.462207 271.587903 
L 340.844573 271.268801 
L 339.334499 272.223936 
L 337.024818 272.824246 
L 336.457011 270.113334 
L 332.798522 265.772247 
L 331.465594 259.674352 
L 331.118258 252.114442 
L 326.797978 242.055823 
L 324.938926 227.931843 
L 324.524881 215.976824 
L 321.062933 204.324862 
L 319.691456 193.604708 
L 320.03164 183.356635 
L 318.212584 177.37168 
L 319.11747 172.32436 
L 319.501743 169.903976 
L 320.927053 170.475813 
L 320.236213 173.897419 
L 321.47299 177.892791 
L 325.888904 183.290077 
L 326.947474 188.529733 
L 328.689592 193.955711 
L 331.232325 199.137048 
L 332.529993 204.490832 
L 333.80486 210.451971 
L 335.574475 213.942966 
L 335.183073 218.421077 
L 336.389503 220.746495 
L 336.425454 222.394329 
L 336.683235 224.673374 
L 338.927599 225.795944 
L 335.48215 227.91316 
L 338.364649 229.107394 
L 335.954748 232.300827 
L 336.73347 232.914346 
L 335.974287 232.063888 
L 338.767371 233.234449 
L 338.648115 234.126266 
L 338.510999 234.543538 
L 337.113248 233.448848 
L 339.893577 232.529868 
L 340.406392 230.72561 
L 340.87618 230.465076 
L 339.718629 230.18814 
L 341.425329 228.71954 
L 341.601204 226.86489 
L 344.420188 226.090457 
L 341.860125 222.04438 
L 343.297678 220.364622 
L 341.465943 216.913871 
L 341.572628 213.904938 
L 340.912721 211.410274 
L 340.216287 208.956909 
L 339.498606 207.15358 
L 339.722549 205.96997 
L 338.967128 205.201759 
L 337.68664 205.033368 
L 336.906737 204.409385 
L 338.13571 203.953481 
L 336.670969 205.030466 
L 340.223231 205.057573 
L 339.245978 206.871992 
L 341.162334 208.07489 
L 340.208941 209.109309 
L 342.404249 211.736929 
L 343.262136 213.850729 
L 342.307846 216.857526 
L 342.697284 218.709594 
L 345.492611 220.243499 
L 344.780236 221.453629 
L 345.805869 224.164857 
L 344.931078 225.368622 
L 342.721365 226.834047 
L 342.715889 229.016518 
L 340.955678 227.984725 
L 341.549341 228.980199 
`),t(Lt,"clip-path","url(#paf9e3e687e)"),l(Lt,"fill","none"),l(Lt,"stroke","#ff7f0e"),l(Lt,"stroke-opacity","0.6"),l(Lt,"stroke-width","1.5"),l(Lt,"stroke-linecap","square"),t($t,"id","line2d_24"),t(Ir,"id","DejaVuSans-73"),t(Ir,"d",`M 2834 3397 
L 2834 2853 
Q 2591 2978 2328 3040 
Q 2066 3103 1784 3103 
Q 1356 3103 1142 2972 
Q 928 2841 928 2578 
Q 928 2378 1081 2264 
Q 1234 2150 1697 2047 
L 1894 2003 
Q 2506 1872 2764 1633 
Q 3022 1394 3022 966 
Q 3022 478 2636 193 
Q 2250 -91 1575 -91 
Q 1294 -91 989 -36 
Q 684 19 347 128 
L 347 722 
Q 666 556 975 473 
Q 1284 391 1588 391 
Q 1994 391 2212 530 
Q 2431 669 2431 922 
Q 2431 1156 2273 1281 
Q 2116 1406 1581 1522 
L 1381 1569 
Q 847 1681 609 1914 
Q 372 2147 372 2553 
Q 372 3047 722 3315 
Q 1072 3584 1716 3584 
Q 2034 3584 2315 3537 
Q 2597 3491 2834 3397 
z
`),t(Ir,"transform","scale(0.015625)"),t(O,"id","DejaVuSans-4d"),t(O,"d",`M 628 4666 
L 1569 4666 
L 2759 1491 
L 3956 4666 
L 4897 4666 
L 4897 0 
L 4281 0 
L 4281 4097 
L 3078 897 
L 2444 897 
L 1241 4097 
L 1241 0 
L 628 0 
L 628 4666 
z
`),t(O,"transform","scale(0.015625)"),t(Ye,"id","DejaVuSans-41"),t(Ye,"d",`M 2188 4044 
L 1331 1722 
L 3047 1722 
L 2188 4044 
z
M 1831 4666 
L 2547 4666 
L 4325 0 
L 3669 0 
L 3244 1197 
L 1141 1197 
L 716 0 
L 50 0 
L 1831 4666 
z
`),t(Ye,"transform","scale(0.015625)"),t(_t,"id","DejaVuSans-50"),t(_t,"d",`M 1259 4147 
L 1259 2394 
L 2053 2394 
Q 2494 2394 2734 2622 
Q 2975 2850 2975 3272 
Q 2975 3691 2734 3919 
Q 2494 4147 2053 4147 
L 1259 4147 
z
M 628 4666 
L 2053 4666 
Q 2838 4666 3239 4311 
Q 3641 3956 3641 3272 
Q 3641 2581 3239 2228 
Q 2838 1875 2053 1875 
L 1259 1875 
L 1259 0 
L 628 0 
L 628 4666 
z
`),t(_t,"transform","scale(0.015625)"),t(Ar,"id","DejaVuSans-45"),t(Ar,"d",`M 628 4666 
L 3578 4666 
L 3578 4134 
L 1259 4134 
L 1259 2753 
L 3481 2753 
L 3481 2222 
L 1259 2222 
L 1259 531 
L 3634 531 
L 3634 0 
L 628 0 
L 628 4666 
z
`),t(Ar,"transform","scale(0.015625)"),t(Xe,"id","DejaVuSans-20"),t(Xe,"transform","scale(0.015625)"),t(qr,"id","DejaVuSans-72"),t(qr,"d",`M 2631 2963 
Q 2534 3019 2420 3045 
Q 2306 3072 2169 3072 
Q 1681 3072 1420 2755 
Q 1159 2438 1159 1844 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1341 3275 1631 3429 
Q 1922 3584 2338 3584 
Q 2397 3584 2469 3576 
Q 2541 3569 2628 3553 
L 2631 2963 
z
`),t(qr,"transform","scale(0.015625)"),t(kt,"id","DejaVuSans-6f"),t(kt,"d",`M 1959 3097 
Q 1497 3097 1228 2736 
Q 959 2375 959 1747 
Q 959 1119 1226 758 
Q 1494 397 1959 397 
Q 2419 397 2687 759 
Q 2956 1122 2956 1747 
Q 2956 2369 2687 2733 
Q 2419 3097 1959 3097 
z
M 1959 3584 
Q 2709 3584 3137 3096 
Q 3566 2609 3566 1747 
Q 3566 888 3137 398 
Q 2709 -91 1959 -91 
Q 1206 -91 779 398 
Q 353 888 353 1747 
Q 353 2609 779 3096 
Q 1206 3584 1959 3584 
z
`),t(kt,"transform","scale(0.015625)"),t(ca,"id","DejaVuSans-3a"),t(ca,"d",`M 750 794 
L 1409 794 
L 1409 0 
L 750 0 
L 750 794 
z
M 750 3309 
L 1409 3309 
L 1409 2516 
L 750 2516 
L 750 3309 
z
`),t(ca,"transform","scale(0.015625)"),t(Ht,"id","DejaVuSans-2e"),t(Ht,"d",`M 684 794 
L 1344 794 
L 1344 0 
L 684 0 
L 684 794 
z
`),t(Ht,"transform","scale(0.015625)"),t(xt,"id","DejaVuSans-36"),t(xt,"d",`M 2113 2584 
Q 1688 2584 1439 2293 
Q 1191 2003 1191 1497 
Q 1191 994 1439 701 
Q 1688 409 2113 409 
Q 2538 409 2786 701 
Q 3034 994 3034 1497 
Q 3034 2003 2786 2293 
Q 2538 2584 2113 2584 
z
M 3366 4563 
L 3366 3988 
Q 3128 4100 2886 4159 
Q 2644 4219 2406 4219 
Q 1781 4219 1451 3797 
Q 1122 3375 1075 2522 
Q 1259 2794 1537 2939 
Q 1816 3084 2150 3084 
Q 2853 3084 3261 2657 
Q 3669 2231 3669 1497 
Q 3669 778 3244 343 
Q 2819 -91 2113 -91 
Q 1303 -91 875 529 
Q 447 1150 447 2328 
Q 447 3434 972 4092 
Q 1497 4750 2381 4750 
Q 2619 4750 2861 4703 
Q 3103 4656 3366 4563 
z
`),t(xt,"transform","scale(0.015625)"),$(ga,"xlink:href","#DejaVuSans-73"),$(Ze,"xlink:href","#DejaVuSans-4d"),t(Ze,"x","52.099609"),$(Sa,"xlink:href","#DejaVuSans-41"),t(Sa,"x","138.378906"),$(mn,"xlink:href","#DejaVuSans-50"),t(mn,"x","206.787109"),$(pa,"xlink:href","#DejaVuSans-45"),t(pa,"x","267.089844"),$(m,"xlink:href","#DejaVuSans-20"),t(m,"x","330.273438"),$(d,"xlink:href","#DejaVuSans-45"),t(d,"x","362.060547"),$(vt,"xlink:href","#DejaVuSans-72"),t(vt,"x","425.244141"),$($n,"xlink:href","#DejaVuSans-72"),t($n,"x","464.607422"),$(hr,"xlink:href","#DejaVuSans-6f"),t(hr,"x","503.470703"),$(Et,"xlink:href","#DejaVuSans-72"),t(Et,"x","564.652344"),$(Tr,"xlink:href","#DejaVuSans-3a"),t(Tr,"x","604.015625"),$(Bt,"xlink:href","#DejaVuSans-20"),t(Bt,"x","637.707031"),$(Wn,"xlink:href","#DejaVuSans-31"),t(Wn,"x","669.494141"),$(Y,"xlink:href","#DejaVuSans-33"),t(Y,"x","733.117188"),$(de,"xlink:href","#DejaVuSans-34"),t(de,"x","796.740234"),$(fr,"xlink:href","#DejaVuSans-2e"),t(fr,"x","860.363281"),$(dr,"xlink:href","#DejaVuSans-36"),t(dr,"x","892.150391"),$(cr,"xlink:href","#DejaVuSans-36"),t(cr,"x","955.773438"),t(C,"transform","translate(311.8965 45.2352)scale(0.12 -0.12)"),t(Je,"id","text_20"),t(Ut,"d",`M 448.271412 88.59145 
L 530.4386 88.59145 
Q 532.4386 88.59145 532.4386 86.59145 
L 532.4386 58.2352 
Q 532.4386 56.2352 530.4386 56.2352 
L 448.271412 56.2352 
Q 446.271412 56.2352 446.271412 58.2352 
L 446.271412 86.59145 
Q 446.271412 88.59145 448.271412 88.59145 
z
`),l(Ut,"fill","#ffffff"),l(Ut,"opacity","0.8"),l(Ut,"stroke","#cccccc"),l(Ut,"stroke-linejoin","miter"),t(Ot,"id","patch_6"),t(Ve,"d",`M 450.271412 64.333638 
L 460.271412 64.333638 
L 470.271412 64.333638 
`),l(Ve,"fill","none"),l(Ve,"stroke","#1f77b4"),l(Ve,"stroke-width","1.5"),l(Ve,"stroke-linecap","square"),t(wt,"id","line2d_25"),t(Kt,"id","DejaVuSans-65"),t(Kt,"d",`M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
`),t(Kt,"transform","scale(0.015625)"),t(An,"id","DejaVuSans-66"),t(An,"d",`M 2375 4863 
L 2375 4384 
L 1825 4384 
Q 1516 4384 1395 4259 
Q 1275 4134 1275 3809 
L 1275 3500 
L 2222 3500 
L 2222 3053 
L 1275 3053 
L 1275 0 
L 697 0 
L 697 3053 
L 147 3053 
L 147 3500 
L 697 3500 
L 697 3744 
Q 697 4328 969 4595 
Q 1241 4863 1831 4863 
L 2375 4863 
z
`),t(An,"transform","scale(0.015625)"),t(qn,"id","DejaVuSans-6e"),t(qn,"d",`M 3513 2113 
L 3513 0 
L 2938 0 
L 2938 2094 
Q 2938 2591 2744 2837 
Q 2550 3084 2163 3084 
Q 1697 3084 1428 2787 
Q 1159 2491 1159 1978 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1366 3272 1645 3428 
Q 1925 3584 2291 3584 
Q 2894 3584 3203 3211 
Q 3513 2838 3513 2113 
z
`),t(qn,"transform","scale(0.015625)"),t(Tn,"id","DejaVuSans-63"),t(Tn,"d",`M 3122 3366 
L 3122 2828 
Q 2878 2963 2633 3030 
Q 2388 3097 2138 3097 
Q 1578 3097 1268 2742 
Q 959 2388 959 1747 
Q 959 1106 1268 751 
Q 1578 397 2138 397 
Q 2388 397 2633 464 
Q 2878 531 3122 666 
L 3122 134 
Q 2881 22 2623 -34 
Q 2366 -91 2075 -91 
Q 1284 -91 818 406 
Q 353 903 353 1747 
Q 353 2603 823 3093 
Q 1294 3584 2113 3584 
Q 2378 3584 2631 3529 
Q 2884 3475 3122 3366 
z
`),t(Tn,"transform","scale(0.015625)"),$(On,"xlink:href","#DejaVuSans-72"),$(Pr,"xlink:href","#DejaVuSans-65"),t(Pr,"x","38.863281"),$(Un,"xlink:href","#DejaVuSans-66"),t(Un,"x","100.386719"),$(Va,"xlink:href","#DejaVuSans-65"),t(Va,"x","135.591797"),$(za,"xlink:href","#DejaVuSans-72"),t(za,"x","197.115234"),$(Ia,"xlink:href","#DejaVuSans-65"),t(Ia,"x","235.978516"),$(Aa,"xlink:href","#DejaVuSans-6e"),t(Aa,"x","297.501953"),$(qa,"xlink:href","#DejaVuSans-63"),t(qa,"x","360.880859"),$(Ta,"xlink:href","#DejaVuSans-65"),t(Ta,"x","415.861328"),t(le,"transform","translate(478.271412 67.833638)scale(0.1 -0.1)"),t(yt,"id","text_21"),t(gr,"d",`M 450.271412 79.011763 
L 460.271412 79.011763 
L 470.271412 79.011763 
`),l(gr,"fill","none"),l(gr,"stroke","#ff7f0e"),l(gr,"stroke-opacity","0.6"),l(gr,"stroke-width","1.5"),l(gr,"stroke-linecap","square"),t(Pa,"id","line2d_26"),t(Rr,"id","DejaVuSans-70"),t(Rr,"d",`M 1159 525 
L 1159 -1331 
L 581 -1331 
L 581 3500 
L 1159 3500 
L 1159 2969 
Q 1341 3281 1617 3432 
Q 1894 3584 2278 3584 
Q 2916 3584 3314 3078 
Q 3713 2572 3713 1747 
Q 3713 922 3314 415 
Q 2916 -91 2278 -91 
Q 1894 -91 1617 61 
Q 1341 213 1159 525 
z
M 3116 1747 
Q 3116 2381 2855 2742 
Q 2594 3103 2138 3103 
Q 1681 3103 1420 2742 
Q 1159 2381 1159 1747 
Q 1159 1113 1420 752 
Q 1681 391 2138 391 
Q 2594 391 2855 752 
Q 3116 1113 3116 1747 
z
`),t(Rr,"transform","scale(0.015625)"),t(Pn,"id","DejaVuSans-64"),t(Pn,"d",`M 2906 2969 
L 2906 4863 
L 3481 4863 
L 3481 0 
L 2906 0 
L 2906 525 
Q 2725 213 2448 61 
Q 2172 -91 1784 -91 
Q 1150 -91 751 415 
Q 353 922 353 1747 
Q 353 2572 751 3078 
Q 1150 3584 1784 3584 
Q 2172 3584 2448 3432 
Q 2725 3281 2906 2969 
z
M 947 1747 
Q 947 1113 1208 752 
Q 1469 391 1925 391 
Q 2381 391 2643 752 
Q 2906 1113 2906 1747 
Q 2906 2381 2643 2742 
Q 2381 3103 1925 3103 
Q 1469 3103 1208 2742 
Q 947 2381 947 1747 
z
`),t(Pn,"transform","scale(0.015625)"),t(Xr,"id","DejaVuSans-69"),t(Xr,"d",`M 603 3500 
L 1178 3500 
L 1178 0 
L 603 0 
L 603 3500 
z
M 603 4863 
L 1178 4863 
L 1178 4134 
L 603 4134 
L 603 4863 
z
`),t(Xr,"transform","scale(0.015625)"),t(Kn,"id","DejaVuSans-74"),t(Kn,"d",`M 1172 4494 
L 1172 3500 
L 2356 3500 
L 2356 3053 
L 1172 3053 
L 1172 1153 
Q 1172 725 1289 603 
Q 1406 481 1766 481 
L 2356 481 
L 2356 0 
L 1766 0 
Q 1100 0 847 248 
Q 594 497 594 1153 
L 594 3053 
L 172 3053 
L 172 3500 
L 594 3500 
L 594 4494 
L 1172 4494 
z
`),t(Kn,"transform","scale(0.015625)"),$(Ra,"xlink:href","#DejaVuSans-70"),$(Zr,"xlink:href","#DejaVuSans-72"),t(Zr,"x","63.476562"),$(Na,"xlink:href","#DejaVuSans-65"),t(Na,"x","102.339844"),$(Qt,"xlink:href","#DejaVuSans-64"),t(Qt,"x","163.863281"),$(ea,"xlink:href","#DejaVuSans-69"),t(ea,"x","227.339844"),$(ma,"xlink:href","#DejaVuSans-63"),t(ma,"x","255.123047"),$($a,"xlink:href","#DejaVuSans-74"),t($a,"x","310.103516"),$(La,"xlink:href","#DejaVuSans-69"),t(La,"x","349.3125"),$(_a,"xlink:href","#DejaVuSans-6f"),t(_a,"x","377.095703"),$(Ba,"xlink:href","#DejaVuSans-6e"),t(Ba,"x","438.277344"),t(et,"transform","translate(478.271412 82.511763)scale(0.1 -0.1)"),t(pr,"id","text_22"),t(Wt,"id","legend_1"),t(mt,"id","axes_1"),t(A,"id","figure_1"),t(ta,"x","208.6794"),t(ta,"y","51.2352"),t(ta,"width","328.7592"),t(ta,"height","328.7592"),t(Oa,"id","paf9e3e687e"),t(o,"xmlns:xlink","http://www.w3.org/1999/xlink"),t(o,"width","323"),t(o,"height","330"),t(o,"viewBox","200 100 376 230"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"version","1.1")},m(ka,Ga){x(ka,o,Ga),n(o,i),n(i,h),n(h,f),n(f,u),n(f,c),n(c,g),n(f,k),n(k,v),n(f,w),n(w,S),n(S,Q),n(Q,z),n(o,P),n(P,I),n(I,U),n(o,A),n(A,F),n(F,Z),n(A,re),n(re,ee),n(A,Ie),n(Ie,ue),n(ue,H),n(A,B),n(B,ce),n(ce,V),n(A,G),n(G,Jt),n(Jt,K),n(A,W),n(W,_n),n(_n,Ae),n(W,J),n(J,xe),n(J,ve),n(J,ge),n(J,kn),n(J,Yt),n(J,pe),n(J,xn),n(W,bt),n(bt,Jn),n(Jn,qe),n(bt,vn),n(vn,jt),n(jt,Yn),n(Yn,tt),n(Yn,Xn),n(Yn,Rn),n(jt,aa),n(jt,sa),n(jt,Nr),n(W,Mt),n(Mt,Zn),n(Zn,me),n(Mt,er),n(er,Te),n(Te,va),n(va,Xt),n(Te,Fa),n(Te,En),n(W,mr),n(mr,Zt),n(Zt,en),n(mr,nt),n(nt,tn),n(tn,Nn),n(W,wn),n(wn,Gr),n(Gr,Dt),n(wn,yn),n(yn,tr),n(tr,Ea),n(W,Qn),n(Qn,bn),n(bn,Gn),n(Qn,rt),n(rt,Cn),n(Cn,Fn),n(Cn,wa),n(W,nn),n(nn,Cr),n(Cr,Ee),n(nn,$r),n($r,Lr),n(Lr,nr),n(Lr,ya),n(W,te),n(te,Fr),n(Fr,at),n(te,we),n(we,Hn),n(Hn,St),n(St,_r),n(Hn,rn),n(Hn,ae),n(A,ye),n(ye,jn),n(jn,se),n(ye,Qe),n(Qe,Pe),n(Qe,Vt),n(Qe,Re),n(Qe,oe),n(Qe,an),n(Qe,rr),n(Qe,st),n(Qe,kr),n(ye,ot),n(ot,oa),n(oa,Ne),n(ot,xr),n(xr,zt),n(zt,Hr),n(zt,Mn),n(zt,sn),n(ye,ar),n(ar,Br),n(Br,be),n(ar,vr),n(vr,on),n(on,ln),n(on,ia),n(ye,un),n(un,Ge),n(Ge,sr),n(un,la),n(la,It),n(It,ua),n(ye,it),n(it,Er),n(Er,lt),n(it,Wr),n(Wr,Dn),n(Dn,Qa),n(ye,Ce),n(Ce,ha),n(ha,$e),n(Ce,Ha),n(Ha,wr),n(wr,or),n(wr,hn),n(ye,Le),n(Le,Sn),n(Sn,fn),n(Le,je),n(je,Fe),n(Fe,Or),n(Fe,He),n(ye,Be),n(Be,Ur),n(Ur,We),n(Be,ir),n(ir,At),n(At,yr),n(At,qt),n(ye,ut),n(ut,ba),n(ba,Qr),n(ut,ie),n(ie,br),n(br,Tt),n(br,Me),n(A,_e),n(_e,Oe),n(Oe,lr),n(_e,De),n(De,Vn),n(De,Ue),n(De,Pt),n(De,Ke),n(_e,ur),n(ur,Bn),n(Bn,dn),n(ur,zn),n(zn,Kr),n(Kr,cn),n(Kr,Jr),n(_e,Rt),n(Rt,jr),n(jr,Nt),n(Rt,ht),n(ht,ja),n(ja,Gt),n(ja,Yr),n(_e,ft),n(ft,Mr),n(Mr,dt),n(ft,gn),n(gn,fa),n(fa,da),n(da,Ct),n(fa,Dr),n(fa,ct),n(_e,Sr),n(Sr,In),n(In,Vr),n(Sr,pn),n(pn,gt),n(gt,zr),n(zr,pt),n(gt,Ft),n(gt,Ma),n(A,mt),n(mt,Da),n(Da,Se),n(mt,$t),n($t,Lt),n(mt,Je),n(Je,C),n(C,fe),n(fe,Ir),n(fe,O),n(fe,Ye),n(fe,_t),n(fe,Ar),n(fe,Xe),n(fe,qr),n(fe,kt),n(fe,ca),n(fe,Ht),n(fe,xt),n(C,ga),n(C,Ze),n(C,Sa),n(C,mn),n(C,pa),n(C,m),n(C,d),n(C,vt),n(C,$n),n(C,hr),n(C,Et),n(C,Tr),n(C,Bt),n(C,Wn),n(C,Y),n(C,de),n(C,fr),n(C,dr),n(C,cr),n(mt,Wt),n(Wt,Ot),n(Ot,Ut),n(Wt,wt),n(wt,Ve),n(Wt,yt),n(yt,le),n(le,ne),n(ne,Kt),n(ne,An),n(ne,qn),n(ne,Tn),n(le,On),n(le,Pr),n(le,Un),n(le,Va),n(le,za),n(le,Ia),n(le,Aa),n(le,qa),n(le,Ta),n(Wt,Pa),n(Pa,gr),n(Wt,pr),n(pr,et),n(et,ke),n(ke,Rr),n(ke,Pn),n(ke,Xr),n(ke,Kn),n(et,Ra),n(et,Zr),n(et,Na),n(et,Qt),n(et,ea),n(et,ma),n(et,$a),n(et,La),n(et,_a),n(et,Ba),n(o,Wa),n(Wa,Oa),n(Oa,ta)},p:Ln,i:Ln,o:Ln,d(ka){ka&&e(o)}}}class Ni extends Os{constructor(o){super(),Us(this,o,null,Ri,Ws,{})}}function Gi(p){let o,i,h,f,u,c,g,k,v,w,S,Q,z,P,I,U,A,F,Z,re,ee,Ie,ue,H,B,ce,V,G,Jt,K,W,_n,Ae,J,xe,ve,ge,kn,Yt,pe,xn,bt,Jn,qe,vn,jt,Yn,tt,Xn,Rn,aa,sa,Nr,Mt,Zn,me,er,Te,va,Xt,Fa,En,mr,Zt,en,nt,tn,Nn,wn,Gr,Dt,yn,tr,Ea,Qn,bn,Gn,rt,Cn,Fn,wa,nn,Cr,Ee,$r,Lr,nr,ya,te,Fr,at,we,Hn,St,_r,rn,ae,ye,jn,se,Qe,Pe,Vt,Re,oe,an,rr,st,kr,ot,oa,Ne,xr,zt,Hr,Mn,sn,ar,Br,be,vr,on,ln,ia,un,Ge,sr,la,It,ua,it,Er,lt,Wr,Dn,Qa,Ce,ha,$e,Ha,wr,or,hn,Le,Sn,fn,je,Fe,Or,He,Be,Ur,We,ir,At,yr,qt,ut,ba,Qr,ie,br,Tt,Me,_e,Oe,lr,De,Vn,Ue,Pt,Ke,ur,Bn,dn,zn,Kr,cn,Jr,Rt,jr,Nt,ht,ja,Gt,Yr,ft,Mr,dt,gn,fa,da,Ct,Dr,ct,Sr,In,Vr,pn,gt,zr,pt,Ft,Ma,mt,Da,Se,$t,Lt,Je,C,fe,Ir,O,Ye,_t,Ar,Xe,qr,kt,ca,Ht,xt,ga,Ze,Sa,mn,pa,m,d,vt,$n,hr,Et,Tr,Bt,Wn,Y,de,fr,dr,cr,Wt,Ot,Ut,wt,Ve,yt,le,ne,Kt,An,qn,Tn,On,Pr,Un,Va,za,Ia,Aa,qa,Ta,Pa,gr,pr,et,ke,Rr,Pn,Xr,Kn,Ra,Zr,Na,Qt,ea,ma,$a,La,_a,Ba,Wa,Oa,ta,ka,Ga,Xa,_s,ss,os,rs,ks,na,ds,$s,Ls,xa,Ua,Ks,Vs,zs,Is,As,qs,Ts,Za,es,is,ls,js,ws;return{c(){o=a("svg"),i=a("metadata"),h=a("rdf:RDF"),f=a("cc:Work"),u=a("dc:type"),c=a("dc:date"),g=L("2024-02-22T08:11:23.377047"),k=a("dc:format"),v=L("image/svg+xml"),w=a("dc:creator"),S=a("cc:Agent"),Q=a("dc:title"),z=L("Matplotlib v3.5.1, https://matplotlib.org/"),P=a("defs"),I=a("style"),U=L(`* {
				stroke-linejoin: round;
				stroke-linecap: butt;
			}
		`),A=a("g"),F=a("g"),Z=a("path"),re=a("g"),ee=a("path"),Ie=a("g"),ue=a("g"),H=a("path"),B=a("g"),ce=a("g"),V=a("path"),G=a("g"),Jt=a("g"),K=a("path"),W=a("g"),_n=a("g"),Ae=a("path"),J=a("g"),xe=a("path"),ve=a("path"),ge=a("path"),kn=a("path"),Yt=a("path"),pe=a("path"),xn=a("g"),bt=a("g"),Jn=a("path"),qe=a("g"),vn=a("g"),jt=a("defs"),Yn=a("path"),tt=a("path"),Xn=a("path"),Rn=a("use"),aa=a("use"),sa=a("use"),Nr=a("g"),Mt=a("g"),Zn=a("path"),me=a("g"),er=a("g"),Te=a("defs"),va=a("path"),Xt=a("use"),Fa=a("use"),En=a("use"),mr=a("g"),Zt=a("g"),en=a("path"),nt=a("g"),tn=a("g"),Nn=a("use"),wn=a("use"),Gr=a("g"),Dt=a("g"),yn=a("path"),tr=a("g"),Ea=a("g"),Qn=a("use"),bn=a("g"),Gn=a("g"),rt=a("path"),Cn=a("g"),Fn=a("g"),wa=a("use"),nn=a("g"),Cr=a("g"),Ee=a("path"),$r=a("g"),Lr=a("g"),nr=a("use"),ya=a("use"),te=a("g"),Fr=a("g"),at=a("path"),we=a("g"),Hn=a("path"),St=a("path"),_r=a("path"),rn=a("path"),ae=a("path"),ye=a("path"),jn=a("path"),se=a("path"),Qe=a("g"),Pe=a("g"),Vt=a("path"),Re=a("g"),oe=a("g"),an=a("defs"),rr=a("path"),st=a("use"),kr=a("use"),ot=a("use"),oa=a("g"),Ne=a("g"),xr=a("path"),zt=a("g"),Hr=a("g"),Mn=a("use"),sn=a("use"),ar=a("use"),Br=a("g"),be=a("g"),vr=a("path"),on=a("g"),ln=a("g"),ia=a("use"),un=a("use"),Ge=a("use"),sr=a("g"),la=a("g"),It=a("path"),ua=a("g"),it=a("g"),Er=a("use"),lt=a("use"),Wr=a("use"),Dn=a("g"),Qa=a("g"),Ce=a("path"),ha=a("g"),$e=a("g"),Ha=a("use"),wr=a("use"),or=a("g"),hn=a("g"),Le=a("path"),Sn=a("g"),fn=a("g"),je=a("use"),Fe=a("g"),Or=a("g"),He=a("path"),Be=a("g"),Ur=a("g"),We=a("use"),ir=a("g"),At=a("g"),yr=a("path"),qt=a("g"),ut=a("g"),ba=a("use"),Qr=a("use"),ie=a("g"),br=a("g"),Tt=a("path"),Me=a("g"),_e=a("path"),Oe=a("path"),lr=a("path"),De=a("path"),Vn=a("path"),Ue=a("path"),Pt=a("path"),Ke=a("path"),ur=a("g"),Bn=a("g"),dn=a("path"),zn=a("g"),Kr=a("g"),cn=a("use"),Jr=a("g"),Rt=a("g"),jr=a("path"),Nt=a("g"),ht=a("g"),ja=a("use"),Gt=a("use"),Yr=a("g"),ft=a("g"),Mr=a("path"),dt=a("g"),gn=a("g"),fa=a("use"),da=a("use"),Ct=a("g"),Dr=a("g"),ct=a("path"),Sr=a("g"),In=a("g"),Vr=a("use"),pn=a("use"),gt=a("g"),zr=a("g"),pt=a("path"),Ft=a("g"),Ma=a("g"),mt=a("use"),Da=a("use"),Se=a("g"),$t=a("g"),Lt=a("path"),Je=a("g"),C=a("g"),fe=a("defs"),Ir=a("path"),O=a("use"),Ye=a("use"),_t=a("g"),Ar=a("g"),Xe=a("path"),qr=a("g"),kt=a("g"),ca=a("use"),Ht=a("use"),xt=a("g"),ga=a("g"),Ze=a("path"),Sa=a("g"),mn=a("g"),pa=a("defs"),m=a("path"),d=a("use"),vt=a("use"),$n=a("g"),hr=a("g"),Et=a("path"),Tr=a("g"),Bt=a("path"),Wn=a("g"),Y=a("g"),de=a("defs"),fr=a("path"),dr=a("path"),cr=a("path"),Wt=a("path"),Ot=a("path"),Ut=a("path"),wt=a("path"),Ve=a("path"),yt=a("path"),le=a("path"),ne=a("path"),Kt=a("path"),An=a("use"),qn=a("use"),Tn=a("use"),On=a("use"),Pr=a("use"),Un=a("use"),Va=a("use"),za=a("use"),Ia=a("use"),Aa=a("use"),qa=a("use"),Ta=a("use"),Pa=a("use"),gr=a("use"),pr=a("use"),et=a("use"),ke=a("use"),Rr=a("use"),Pn=a("g"),Xr=a("g"),Kn=a("path"),Ra=a("g"),Zr=a("path"),Na=a("g"),Qt=a("g"),ea=a("defs"),ma=a("path"),$a=a("path"),La=a("path"),_a=a("path"),Ba=a("use"),Wa=a("use"),Oa=a("use"),ta=a("use"),ka=a("use"),Ga=a("use"),Xa=a("use"),_s=a("use"),ss=a("use"),os=a("g"),rs=a("path"),ks=a("g"),na=a("g"),ds=a("defs"),$s=a("path"),Ls=a("path"),xa=a("path"),Ua=a("path"),Ks=a("use"),Vs=a("use"),zs=a("use"),Is=a("use"),As=a("use"),qs=a("use"),Ts=a("use"),Za=a("use"),es=a("use"),is=a("use"),ls=a("defs"),js=a("clipPath"),ws=a("rect"),this.h()},l(ys){o=s(ys,"svg",{"xmlns:xlink":!0,width:!0,height:!0,viewBox:!0,xmlns:!0,version:!0});var us=r(o);i=s(us,"metadata",{});var Js=r(i);h=s(Js,"rdf:RDF",{"xmlns:dc":!0,"xmlns:cc":!0,"xmlns:rdf":!0});var bo=r(h);f=s(bo,"cc:Work",{});var Ys=r(f);u=s(Ys,"dc:type",{"rdf:resource":!0}),r(u).forEach(e),c=s(Ys,"dc:date",{});var fo=r(c);g=_(fo,"2024-02-22T08:11:23.377047"),fo.forEach(e),k=s(Ys,"dc:format",{});var Xs=r(k);v=_(Xs,"image/svg+xml"),Xs.forEach(e),w=s(Ys,"dc:creator",{});var jo=r(w);S=s(jo,"cc:Agent",{});var Mo=r(S);Q=s(Mo,"dc:title",{});var r2=r(Q);z=_(r2,"Matplotlib v3.5.1, https://matplotlib.org/"),r2.forEach(e),Mo.forEach(e),jo.forEach(e),Ys.forEach(e),bo.forEach(e),Js.forEach(e),P=s(us,"defs",{});var a2=r(P);I=s(a2,"style",{type:!0});var co=r(I);U=_(co,`* {
				stroke-linejoin: round;
				stroke-linecap: butt;
			}
		`),co.forEach(e),a2.forEach(e),A=s(us,"g",{id:!0});var cs=r(A);F=s(cs,"g",{id:!0});var s2=r(F);Z=s(s2,"path",{d:!0,style:!0}),r(Z).forEach(e),s2.forEach(e),re=s(cs,"g",{id:!0});var o2=r(re);ee=s(o2,"path",{d:!0,style:!0}),r(ee).forEach(e),o2.forEach(e),Ie=s(cs,"g",{id:!0});var Do=r(Ie);ue=s(Do,"g",{id:!0});var So=r(ue);H=s(So,"path",{d:!0,style:!0}),r(H).forEach(e),So.forEach(e),Do.forEach(e),B=s(cs,"g",{id:!0});var i2=r(B);ce=s(i2,"g",{id:!0});var Vo=r(ce);V=s(Vo,"path",{d:!0,style:!0}),r(V).forEach(e),Vo.forEach(e),i2.forEach(e),G=s(cs,"g",{id:!0});var zo=r(G);Jt=s(zo,"g",{id:!0});var Io=r(Jt);K=s(Io,"path",{d:!0,style:!0}),r(K).forEach(e),Io.forEach(e),zo.forEach(e),W=s(cs,"g",{id:!0});var xs=r(W);_n=s(xs,"g",{id:!0});var Ao=r(_n);Ae=s(Ao,"path",{d:!0,style:!0}),r(Ae).forEach(e),Ao.forEach(e),J=s(xs,"g",{id:!0});var vs=r(J);xe=s(vs,"path",{d:!0,style:!0}),r(xe).forEach(e),ve=s(vs,"path",{d:!0,style:!0}),r(ve).forEach(e),ge=s(vs,"path",{d:!0,style:!0}),r(ge).forEach(e),kn=s(vs,"path",{d:!0,style:!0}),r(kn).forEach(e),Yt=s(vs,"path",{d:!0,style:!0}),r(Yt).forEach(e),pe=s(vs,"path",{d:!0,style:!0}),r(pe).forEach(e),vs.forEach(e),xn=s(xs,"g",{id:!0});var go=r(xn);bt=s(go,"g",{id:!0});var l2=r(bt);Jn=s(l2,"path",{d:!0,style:!0}),r(Jn).forEach(e),l2.forEach(e),qe=s(go,"g",{id:!0});var po=r(qe);vn=s(po,"g",{transform:!0});var Ps=r(vn);jt=s(Ps,"defs",{});var ra=r(jt);Yn=s(ra,"path",{id:!0,d:!0,transform:!0}),r(Yn).forEach(e),tt=s(ra,"path",{id:!0,d:!0,transform:!0}),r(tt).forEach(e),Xn=s(ra,"path",{id:!0,d:!0,transform:!0}),r(Xn).forEach(e),ra.forEach(e),Rn=s(Ps,"use",{"xlink:href":!0}),r(Rn).forEach(e),aa=s(Ps,"use",{"xlink:href":!0,x:!0}),r(aa).forEach(e),sa=s(Ps,"use",{"xlink:href":!0,x:!0}),r(sa).forEach(e),Ps.forEach(e),po.forEach(e),go.forEach(e),Nr=s(xs,"g",{id:!0});var qo=r(Nr);Mt=s(qo,"g",{id:!0});var as=r(Mt);Zn=s(as,"path",{d:!0,style:!0}),r(Zn).forEach(e),as.forEach(e),me=s(qo,"g",{id:!0});var mo=r(me);er=s(mo,"g",{transform:!0});var Zs=r(er);Te=s(Zs,"defs",{});var u2=r(Te);va=s(u2,"path",{id:!0,d:!0,transform:!0}),r(va).forEach(e),u2.forEach(e),Xt=s(Zs,"use",{"xlink:href":!0}),r(Xt).forEach(e),Fa=s(Zs,"use",{"xlink:href":!0,x:!0}),r(Fa).forEach(e),En=s(Zs,"use",{"xlink:href":!0,x:!0}),r(En).forEach(e),Zs.forEach(e),mo.forEach(e),qo.forEach(e),mr=s(xs,"g",{id:!0});var Qs=r(mr);Zt=s(Qs,"g",{id:!0});var To=r(Zt);en=s(To,"path",{d:!0,style:!0}),r(en).forEach(e),To.forEach(e),nt=s(Qs,"g",{id:!0});var Po=r(nt);tn=s(Po,"g",{transform:!0});var Ro=r(tn);Nn=s(Ro,"use",{"xlink:href":!0}),r(Nn).forEach(e),wn=s(Ro,"use",{"xlink:href":!0,x:!0}),r(wn).forEach(e),Ro.forEach(e),Po.forEach(e),Qs.forEach(e),Gr=s(xs,"g",{id:!0});var $o=r(Gr);Dt=s($o,"g",{id:!0});var eo=r(Dt);yn=s(eo,"path",{d:!0,style:!0}),r(yn).forEach(e),eo.forEach(e),tr=s($o,"g",{id:!0});var No=r(tr);Ea=s(No,"g",{transform:!0});var h2=r(Ea);Qn=s(h2,"use",{"xlink:href":!0}),r(Qn).forEach(e),h2.forEach(e),No.forEach(e),$o.forEach(e),bn=s(xs,"g",{id:!0});var Go=r(bn);Gn=s(Go,"g",{id:!0});var Co=r(Gn);rt=s(Co,"path",{d:!0,style:!0}),r(rt).forEach(e),Co.forEach(e),Cn=s(Go,"g",{id:!0});var Fo=r(Cn);Fn=s(Fo,"g",{transform:!0});var f2=r(Fn);wa=s(f2,"use",{"xlink:href":!0}),r(wa).forEach(e),f2.forEach(e),Fo.forEach(e),Go.forEach(e),nn=s(xs,"g",{id:!0});var Ho=r(nn);Cr=s(Ho,"g",{id:!0});var Lo=r(Cr);Ee=s(Lo,"path",{d:!0,style:!0}),r(Ee).forEach(e),Lo.forEach(e),$r=s(Ho,"g",{id:!0});var Bo=r($r);Lr=s(Bo,"g",{transform:!0});var Wo=r(Lr);nr=s(Wo,"use",{"xlink:href":!0}),r(nr).forEach(e),ya=s(Wo,"use",{"xlink:href":!0,x:!0}),r(ya).forEach(e),Wo.forEach(e),Bo.forEach(e),Ho.forEach(e),xs.forEach(e),te=s(cs,"g",{id:!0});var hs=r(te);Fr=s(hs,"g",{id:!0});var _o=r(Fr);at=s(_o,"path",{d:!0,style:!0}),r(at).forEach(e),_o.forEach(e),we=s(hs,"g",{id:!0});var Ca=r(we);Hn=s(Ca,"path",{d:!0,style:!0}),r(Hn).forEach(e),St=s(Ca,"path",{d:!0,style:!0}),r(St).forEach(e),_r=s(Ca,"path",{d:!0,style:!0}),r(_r).forEach(e),rn=s(Ca,"path",{d:!0,style:!0}),r(rn).forEach(e),ae=s(Ca,"path",{d:!0,style:!0}),r(ae).forEach(e),ye=s(Ca,"path",{d:!0,style:!0}),r(ye).forEach(e),jn=s(Ca,"path",{d:!0,style:!0}),r(jn).forEach(e),se=s(Ca,"path",{d:!0,style:!0}),r(se).forEach(e),Ca.forEach(e),Qe=s(hs,"g",{id:!0});var Oo=r(Qe);Pe=s(Oo,"g",{id:!0});var Es=r(Pe);Vt=s(Es,"path",{d:!0,style:!0}),r(Vt).forEach(e),Es.forEach(e),Re=s(Oo,"g",{id:!0});var ko=r(Re);oe=s(ko,"g",{transform:!0});var to=r(oe);an=s(to,"defs",{});var d2=r(an);rr=s(d2,"path",{id:!0,d:!0,transform:!0}),r(rr).forEach(e),d2.forEach(e),st=s(to,"use",{"xlink:href":!0}),r(st).forEach(e),kr=s(to,"use",{"xlink:href":!0,x:!0}),r(kr).forEach(e),ot=s(to,"use",{"xlink:href":!0,x:!0}),r(ot).forEach(e),to.forEach(e),ko.forEach(e),Oo.forEach(e),oa=s(hs,"g",{id:!0});var no=r(oa);Ne=s(no,"g",{id:!0});var xo=r(Ne);xr=s(xo,"path",{d:!0,style:!0}),r(xr).forEach(e),xo.forEach(e),zt=s(no,"g",{id:!0});var c2=r(zt);Hr=s(c2,"g",{transform:!0});var vo=r(Hr);Mn=s(vo,"use",{"xlink:href":!0}),r(Mn).forEach(e),sn=s(vo,"use",{"xlink:href":!0,x:!0}),r(sn).forEach(e),ar=s(vo,"use",{"xlink:href":!0,x:!0}),r(ar).forEach(e),vo.forEach(e),c2.forEach(e),no.forEach(e),Br=s(hs,"g",{id:!0});var ro=r(Br);be=s(ro,"g",{id:!0});var bs=r(be);vr=s(bs,"path",{d:!0,style:!0}),r(vr).forEach(e),bs.forEach(e),on=s(ro,"g",{id:!0});var g2=r(on);ln=s(g2,"g",{transform:!0});var Ms=r(ln);ia=s(Ms,"use",{"xlink:href":!0}),r(ia).forEach(e),un=s(Ms,"use",{"xlink:href":!0,x:!0}),r(un).forEach(e),Ge=s(Ms,"use",{"xlink:href":!0,x:!0}),r(Ge).forEach(e),Ms.forEach(e),g2.forEach(e),ro.forEach(e),sr=s(hs,"g",{id:!0});var ao=r(sr);la=s(ao,"g",{id:!0});var Uo=r(la);It=s(Uo,"path",{d:!0,style:!0}),r(It).forEach(e),Uo.forEach(e),ua=s(ao,"g",{id:!0});var p2=r(ua);it=s(p2,"g",{transform:!0});var so=r(it);Er=s(so,"use",{"xlink:href":!0}),r(Er).forEach(e),lt=s(so,"use",{"xlink:href":!0,x:!0}),r(lt).forEach(e),Wr=s(so,"use",{"xlink:href":!0,x:!0}),r(Wr).forEach(e),so.forEach(e),p2.forEach(e),ao.forEach(e),Dn=s(hs,"g",{id:!0});var oo=r(Dn);Qa=s(oo,"g",{id:!0});var Ko=r(Qa);Ce=s(Ko,"path",{d:!0,style:!0}),r(Ce).forEach(e),Ko.forEach(e),ha=s(oo,"g",{id:!0});var m2=r(ha);$e=s(m2,"g",{transform:!0});var Eo=r($e);Ha=s(Eo,"use",{"xlink:href":!0}),r(Ha).forEach(e),wr=s(Eo,"use",{"xlink:href":!0,x:!0}),r(wr).forEach(e),Eo.forEach(e),m2.forEach(e),oo.forEach(e),or=s(hs,"g",{id:!0});var Rs=r(or);hn=s(Rs,"g",{id:!0});var $2=r(hn);Le=s($2,"path",{d:!0,style:!0}),r(Le).forEach(e),$2.forEach(e),Sn=s(Rs,"g",{id:!0});var Jo=r(Sn);fn=s(Jo,"g",{transform:!0});var wo=r(fn);je=s(wo,"use",{"xlink:href":!0}),r(je).forEach(e),wo.forEach(e),Jo.forEach(e),Rs.forEach(e),Fe=s(hs,"g",{id:!0});var Yo=r(Fe);Or=s(Yo,"g",{id:!0});var yo=r(Or);He=s(yo,"path",{d:!0,style:!0}),r(He).forEach(e),yo.forEach(e),Be=s(Yo,"g",{id:!0});var Xo=r(Be);Ur=s(Xo,"g",{transform:!0});var L2=r(Ur);We=s(L2,"use",{"xlink:href":!0}),r(We).forEach(e),L2.forEach(e),Xo.forEach(e),Yo.forEach(e),ir=s(hs,"g",{id:!0});var io=r(ir);At=s(io,"g",{id:!0});var Qo=r(At);yr=s(Qo,"path",{d:!0,style:!0}),r(yr).forEach(e),Qo.forEach(e),qt=s(io,"g",{id:!0});var lo=r(qt);ut=s(lo,"g",{transform:!0});var Ns=r(ut);ba=s(Ns,"use",{"xlink:href":!0}),r(ba).forEach(e),Qr=s(Ns,"use",{"xlink:href":!0,x:!0}),r(Qr).forEach(e),Ns.forEach(e),lo.forEach(e),io.forEach(e),hs.forEach(e),ie=s(cs,"g",{id:!0});var gs=r(ie);br=s(gs,"g",{id:!0});var _2=r(br);Tt=s(_2,"path",{d:!0,style:!0}),r(Tt).forEach(e),_2.forEach(e),Me=s(gs,"g",{id:!0});var ze=r(Me);_e=s(ze,"path",{d:!0,style:!0}),r(_e).forEach(e),Oe=s(ze,"path",{d:!0,style:!0}),r(Oe).forEach(e),lr=s(ze,"path",{d:!0,style:!0}),r(lr).forEach(e),De=s(ze,"path",{d:!0,style:!0}),r(De).forEach(e),Vn=s(ze,"path",{d:!0,style:!0}),r(Vn).forEach(e),Ue=s(ze,"path",{d:!0,style:!0}),r(Ue).forEach(e),Pt=s(ze,"path",{d:!0,style:!0}),r(Pt).forEach(e),Ke=s(ze,"path",{d:!0,style:!0}),r(Ke).forEach(e),ze.forEach(e),ur=s(gs,"g",{id:!0});var he=r(ur);Bn=s(he,"g",{id:!0});var Ka=r(Bn);dn=s(Ka,"path",{d:!0,style:!0}),r(dn).forEach(e),Ka.forEach(e),zn=s(he,"g",{id:!0});var Gs=r(zn);Kr=s(Gs,"g",{transform:!0});var k2=r(Kr);cn=s(k2,"use",{"xlink:href":!0}),r(cn).forEach(e),k2.forEach(e),Gs.forEach(e),he.forEach(e),Jr=s(gs,"g",{id:!0});var Zo=r(Jr);Rt=s(Zo,"g",{id:!0});var ps=r(Rt);jr=s(ps,"path",{d:!0,style:!0}),r(jr).forEach(e),ps.forEach(e),Nt=s(Zo,"g",{id:!0});var ts=r(Nt);ht=s(ts,"g",{transform:!0});var Cs=r(ht);ja=s(Cs,"use",{"xlink:href":!0}),r(ja).forEach(e),Gt=s(Cs,"use",{"xlink:href":!0,x:!0}),r(Gt).forEach(e),Cs.forEach(e),ts.forEach(e),Zo.forEach(e),Yr=s(gs,"g",{id:!0});var e2=r(Yr);ft=s(e2,"g",{id:!0});var fs=r(ft);Mr=s(fs,"path",{d:!0,style:!0}),r(Mr).forEach(e),fs.forEach(e),dt=s(e2,"g",{id:!0});var Ja=r(dt);gn=s(Ja,"g",{transform:!0});var Fs=r(gn);fa=s(Fs,"use",{"xlink:href":!0}),r(fa).forEach(e),da=s(Fs,"use",{"xlink:href":!0,x:!0}),r(da).forEach(e),Fs.forEach(e),Ja.forEach(e),e2.forEach(e),Ct=s(gs,"g",{id:!0});var t2=r(Ct);Dr=s(t2,"g",{id:!0});var E2=r(Dr);ct=s(E2,"path",{d:!0,style:!0}),r(ct).forEach(e),E2.forEach(e),Sr=s(t2,"g",{id:!0});var W2=r(Sr);In=s(W2,"g",{transform:!0});var q2=r(In);Vr=s(q2,"use",{"xlink:href":!0}),r(Vr).forEach(e),pn=s(q2,"use",{"xlink:href":!0,x:!0}),r(pn).forEach(e),q2.forEach(e),W2.forEach(e),t2.forEach(e),gt=s(gs,"g",{id:!0});var T2=r(gt);zr=s(T2,"g",{id:!0});var O2=r(zr);pt=s(O2,"path",{d:!0,style:!0}),r(pt).forEach(e),O2.forEach(e),Ft=s(T2,"g",{id:!0});var U2=r(Ft);Ma=s(U2,"g",{transform:!0});var P2=r(Ma);mt=s(P2,"use",{"xlink:href":!0}),r(mt).forEach(e),Da=s(P2,"use",{"xlink:href":!0,x:!0}),r(Da).forEach(e),P2.forEach(e),U2.forEach(e),T2.forEach(e),Se=s(gs,"g",{id:!0});var R2=r(Se);$t=s(R2,"g",{id:!0});var K2=r($t);Lt=s(K2,"path",{d:!0,style:!0}),r(Lt).forEach(e),K2.forEach(e),Je=s(R2,"g",{id:!0});var J2=r(Je);C=s(J2,"g",{transform:!0});var V2=r(C);fe=s(V2,"defs",{});var Y2=r(fe);Ir=s(Y2,"path",{id:!0,d:!0,transform:!0}),r(Ir).forEach(e),Y2.forEach(e),O=s(V2,"use",{"xlink:href":!0}),r(O).forEach(e),Ye=s(V2,"use",{"xlink:href":!0,x:!0}),r(Ye).forEach(e),V2.forEach(e),J2.forEach(e),R2.forEach(e),_t=s(gs,"g",{id:!0});var N2=r(_t);Ar=s(N2,"g",{id:!0});var X2=r(Ar);Xe=s(X2,"path",{d:!0,style:!0}),r(Xe).forEach(e),X2.forEach(e),qr=s(N2,"g",{id:!0});var Z2=r(qr);kt=s(Z2,"g",{transform:!0});var G2=r(kt);ca=s(G2,"use",{"xlink:href":!0}),r(ca).forEach(e),Ht=s(G2,"use",{"xlink:href":!0,x:!0}),r(Ht).forEach(e),G2.forEach(e),Z2.forEach(e),N2.forEach(e),xt=s(gs,"g",{id:!0});var C2=r(xt);ga=s(C2,"g",{id:!0});var ei=r(ga);Ze=s(ei,"path",{d:!0,style:!0}),r(Ze).forEach(e),ei.forEach(e),Sa=s(C2,"g",{id:!0});var ti=r(Sa);mn=s(ti,"g",{transform:!0});var z2=r(mn);pa=s(z2,"defs",{});var ni=r(pa);m=s(ni,"path",{id:!0,d:!0,transform:!0}),r(m).forEach(e),ni.forEach(e),d=s(z2,"use",{"xlink:href":!0}),r(d).forEach(e),vt=s(z2,"use",{"xlink:href":!0,x:!0}),r(vt).forEach(e),z2.forEach(e),ti.forEach(e),C2.forEach(e),gs.forEach(e),$n=s(cs,"g",{id:!0});var w2=r($n);hr=s(w2,"g",{id:!0});var ri=r(hr);Et=s(ri,"path",{d:!0,"clip-path":!0,style:!0}),r(Et).forEach(e),ri.forEach(e),Tr=s(w2,"g",{id:!0});var ai=r(Tr);Bt=s(ai,"path",{d:!0,"clip-path":!0,style:!0}),r(Bt).forEach(e),ai.forEach(e),Wn=s(w2,"g",{id:!0});var si=r(Wn);Y=s(si,"g",{transform:!0});var ns=r(Y);de=s(ns,"defs",{});var Ds=r(de);fr=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(fr).forEach(e),dr=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(dr).forEach(e),cr=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(cr).forEach(e),Wt=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(Wt).forEach(e),Ot=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(Ot).forEach(e),Ut=s(Ds,"path",{id:!0,transform:!0}),r(Ut).forEach(e),wt=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(wt).forEach(e),Ve=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(Ve).forEach(e),yt=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(yt).forEach(e),le=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(le).forEach(e),ne=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(ne).forEach(e),Kt=s(Ds,"path",{id:!0,d:!0,transform:!0}),r(Kt).forEach(e),Ds.forEach(e),An=s(ns,"use",{"xlink:href":!0}),r(An).forEach(e),qn=s(ns,"use",{"xlink:href":!0,x:!0}),r(qn).forEach(e),Tn=s(ns,"use",{"xlink:href":!0,x:!0}),r(Tn).forEach(e),On=s(ns,"use",{"xlink:href":!0,x:!0}),r(On).forEach(e),Pr=s(ns,"use",{"xlink:href":!0,x:!0}),r(Pr).forEach(e),Un=s(ns,"use",{"xlink:href":!0,x:!0}),r(Un).forEach(e),Va=s(ns,"use",{"xlink:href":!0,x:!0}),r(Va).forEach(e),za=s(ns,"use",{"xlink:href":!0,x:!0}),r(za).forEach(e),Ia=s(ns,"use",{"xlink:href":!0,x:!0}),r(Ia).forEach(e),Aa=s(ns,"use",{"xlink:href":!0,x:!0}),r(Aa).forEach(e),qa=s(ns,"use",{"xlink:href":!0,x:!0}),r(qa).forEach(e),Ta=s(ns,"use",{"xlink:href":!0,x:!0}),r(Ta).forEach(e),Pa=s(ns,"use",{"xlink:href":!0,x:!0}),r(Pa).forEach(e),gr=s(ns,"use",{"xlink:href":!0,x:!0}),r(gr).forEach(e),pr=s(ns,"use",{"xlink:href":!0,x:!0}),r(pr).forEach(e),et=s(ns,"use",{"xlink:href":!0,x:!0}),r(et).forEach(e),ke=s(ns,"use",{"xlink:href":!0,x:!0}),r(ke).forEach(e),Rr=s(ns,"use",{"xlink:href":!0,x:!0}),r(Rr).forEach(e),ns.forEach(e),si.forEach(e),Pn=s(w2,"g",{id:!0});var v2=r(Pn);Xr=s(v2,"g",{id:!0});var oi=r(Xr);Kn=s(oi,"path",{d:!0,style:!0}),r(Kn).forEach(e),oi.forEach(e),Ra=s(v2,"g",{id:!0});var ii=r(Ra);Zr=s(ii,"path",{d:!0,style:!0}),r(Zr).forEach(e),ii.forEach(e),Na=s(v2,"g",{id:!0});var li=r(Na);Qt=s(li,"g",{transform:!0});var uo=r(Qt);ea=s(uo,"defs",{});var y2=r(ea);ma=s(y2,"path",{id:!0,d:!0,transform:!0}),r(ma).forEach(e),$a=s(y2,"path",{id:!0,d:!0,transform:!0}),r($a).forEach(e),La=s(y2,"path",{id:!0,d:!0,transform:!0}),r(La).forEach(e),_a=s(y2,"path",{id:!0,d:!0,transform:!0}),r(_a).forEach(e),y2.forEach(e),Ba=s(uo,"use",{"xlink:href":!0}),r(Ba).forEach(e),Wa=s(uo,"use",{"xlink:href":!0,x:!0}),r(Wa).forEach(e),Oa=s(uo,"use",{"xlink:href":!0,x:!0}),r(Oa).forEach(e),ta=s(uo,"use",{"xlink:href":!0,x:!0}),r(ta).forEach(e),ka=s(uo,"use",{"xlink:href":!0,x:!0}),r(ka).forEach(e),Ga=s(uo,"use",{"xlink:href":!0,x:!0}),r(Ga).forEach(e),Xa=s(uo,"use",{"xlink:href":!0,x:!0}),r(Xa).forEach(e),_s=s(uo,"use",{"xlink:href":!0,x:!0}),r(_s).forEach(e),ss=s(uo,"use",{"xlink:href":!0,x:!0}),r(ss).forEach(e),uo.forEach(e),li.forEach(e),os=s(v2,"g",{id:!0});var ui=r(os);rs=s(ui,"path",{d:!0,style:!0}),r(rs).forEach(e),ui.forEach(e),ks=s(v2,"g",{id:!0});var hi=r(ks);na=s(hi,"g",{transform:!0});var Hs=r(na);ds=s(Hs,"defs",{});var Q2=r(ds);$s=s(Q2,"path",{id:!0,d:!0,transform:!0}),r($s).forEach(e),Ls=s(Q2,"path",{id:!0,d:!0,transform:!0}),r(Ls).forEach(e),xa=s(Q2,"path",{id:!0,d:!0,transform:!0}),r(xa).forEach(e),Ua=s(Q2,"path",{id:!0,d:!0,transform:!0}),r(Ua).forEach(e),Q2.forEach(e),Ks=s(Hs,"use",{"xlink:href":!0}),r(Ks).forEach(e),Vs=s(Hs,"use",{"xlink:href":!0,x:!0}),r(Vs).forEach(e),zs=s(Hs,"use",{"xlink:href":!0,x:!0}),r(zs).forEach(e),Is=s(Hs,"use",{"xlink:href":!0,x:!0}),r(Is).forEach(e),As=s(Hs,"use",{"xlink:href":!0,x:!0}),r(As).forEach(e),qs=s(Hs,"use",{"xlink:href":!0,x:!0}),r(qs).forEach(e),Ts=s(Hs,"use",{"xlink:href":!0,x:!0}),r(Ts).forEach(e),Za=s(Hs,"use",{"xlink:href":!0,x:!0}),r(Za).forEach(e),es=s(Hs,"use",{"xlink:href":!0,x:!0}),r(es).forEach(e),is=s(Hs,"use",{"xlink:href":!0,x:!0}),r(is).forEach(e),Hs.forEach(e),hi.forEach(e),v2.forEach(e),w2.forEach(e),cs.forEach(e),ls=s(us,"defs",{});var fi=r(ls);js=s(fi,"clipPath",{id:!0});var di=r(js);ws=s(di,"rect",{x:!0,y:!0,width:!0,height:!0}),r(ws).forEach(e),di.forEach(e),fi.forEach(e),us.forEach(e),this.h()},h(){t(u,"rdf:resource","http://purl.org/dc/dcmitype/StillImage"),t(h,"xmlns:dc","http://purl.org/dc/elements/1.1/"),t(h,"xmlns:cc","http://creativecommons.org/ns#"),t(h,"xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),t(I,"type","text/css"),t(Z,"d",`M 0 447.12 
L 727.92 447.12 
L 727.92 0 
L 0 0 
z
`),l(Z,"fill","#ffffff"),t(F,"id","patch_1"),t(ee,"d",`M 200.9178 397.9368 
L 545.2002 397.9368 
L 545.2002 53.6544 
L 200.9178 53.6544 
z
`),l(ee,"fill","#ffffff"),t(re,"id","patch_2"),t(H,"d",`M 225.132366 297.754882 
L 395.743557 269.783343 
L 396.019699 118.444731 
L 222.628608 136.047513 
`),l(H,"fill","#f2f2f2"),l(H,"opacity","0.5"),l(H,"stroke","#f2f2f2"),l(H,"stroke-linejoin","miter"),t(ue,"id","patch_3"),t(Ie,"id","pane3d_1"),t(V,"d",`M 395.743557 269.783343 
L 533.466139 306.60739 
L 536.076092 141.626406 
L 396.019699 118.444731 
`),l(V,"fill","#e6e6e6"),l(V,"opacity","0.5"),l(V,"stroke","#e6e6e6"),l(V,"stroke-linejoin","miter"),t(ce,"id","patch_4"),t(B,"id","pane3d_2"),t(K,"d",`M 225.132366 297.754882 
L 356.482947 340.222611 
L 533.466139 306.60739 
L 395.743557 269.783343 
`),l(K,"fill","#ececec"),l(K,"opacity","0.5"),l(K,"stroke","#ececec"),l(K,"stroke-linejoin","miter"),t(Jt,"id","patch_5"),t(G,"id","pane3d_3"),t(Ae,"d",`M 225.132366 297.754882 
L 356.482947 340.222611 
`),l(Ae,"fill","none"),l(Ae,"stroke","#000000"),l(Ae,"stroke-width","0.8"),l(Ae,"stroke-linecap","square"),t(_n,"id","line2d_1"),t(xe,"d",`M 244.249002 303.935594 
L 415.899914 275.172718 
L 416.492783 121.833369 
`),l(xe,"fill","none"),l(xe,"stroke","#b0b0b0"),l(xe,"stroke-width","0.8"),t(ve,"d",`M 262.597154 309.867843 
L 435.209827 280.335772 
L 436.114103 125.081025 
`),l(ve,"fill","none"),l(ve,"stroke","#b0b0b0"),l(ve,"stroke-width","0.8"),t(ge,"d",`M 281.45681 315.96547 
L 455.021243 285.632917 
L 456.253133 128.414372 
`),l(ge,"fill","none"),l(ge,"stroke","#b0b0b0"),l(ge,"stroke-width","0.8"),t(kn,"d",`M 300.849661 322.235486 
L 475.353956 291.069446 
L 476.930637 131.836844 
`),l(kn,"fill","none"),l(kn,"stroke","#b0b0b0"),l(kn,"stroke-width","0.8"),t(Yt,"d",`M 320.798645 328.68531 
L 496.228815 296.650933 
L 498.168505 135.352066 
`),l(Yt,"fill","none"),l(Yt,"stroke","#b0b0b0"),l(Yt,"stroke-width","0.8"),t(pe,"d",`M 341.32803 335.322786 
L 517.667798 302.383255 
L 519.989827 138.96386 
`),l(pe,"fill","none"),l(pe,"stroke","#b0b0b0"),l(pe,"stroke-width","0.8"),t(J,"id","Line3DCollection_1"),t(Jn,"d",`M 245.719436 303.689199 
L 241.303088 304.42923 
`),l(Jn,"fill","none"),l(Jn,"stroke","#000000"),l(Jn,"stroke-width","0.8"),l(Jn,"stroke-linecap","square"),t(bt,"id","line2d_2"),t(Yn,"id","DejaVuSans-2212"),t(Yn,"d",`M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
`),t(Yn,"transform","scale(0.015625)"),t(tt,"id","DejaVuSans-31"),t(tt,"d",`M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
`),t(tt,"transform","scale(0.015625)"),t(Xn,"id","DejaVuSans-35"),t(Xn,"d",`M 691 4666 
L 3169 4666 
L 3169 4134 
L 1269 4134 
L 1269 2991 
Q 1406 3038 1543 3061 
Q 1681 3084 1819 3084 
Q 2600 3084 3056 2656 
Q 3513 2228 3513 1497 
Q 3513 744 3044 326 
Q 2575 -91 1722 -91 
Q 1428 -91 1123 -41 
Q 819 9 494 109 
L 494 744 
Q 775 591 1075 516 
Q 1375 441 1709 441 
Q 2250 441 2565 725 
Q 2881 1009 2881 1497 
Q 2881 1984 2565 2268 
Q 2250 2553 1709 2553 
Q 1456 2553 1204 2497 
Q 953 2441 691 2322 
L 691 4666 
z
`),t(Xn,"transform","scale(0.015625)"),$(Rn,"xlink:href","#DejaVuSans-2212"),$(aa,"xlink:href","#DejaVuSans-31"),t(aa,"x","83.789062"),$(sa,"xlink:href","#DejaVuSans-35"),t(sa,"x","147.412109"),t(vn,"transform","translate(222.000848 323.899256)scale(0.1 -0.1)"),t(qe,"id","text_1"),t(xn,"id","xtick_1"),t(Zn,"d",`M 264.07717 309.614629 
L 259.631973 310.375152 
`),l(Zn,"fill","none"),l(Zn,"stroke","#000000"),l(Zn,"stroke-width","0.8"),l(Zn,"stroke-linecap","square"),t(Mt,"id","line2d_3"),t(va,"id","DejaVuSans-30"),t(va,"d",`M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
`),t(va,"transform","scale(0.015625)"),$(Xt,"xlink:href","#DejaVuSans-2212"),$(Fa,"xlink:href","#DejaVuSans-31"),t(Fa,"x","83.789062"),$(En,"xlink:href","#DejaVuSans-30"),t(En,"x","147.412109"),t(er,"transform","translate(240.253525 330.023405)scale(0.1 -0.1)"),t(me,"id","text_2"),t(Nr,"id","xtick_2"),t(en,"d",`M 282.946375 315.705149 
L 278.472425 316.487028 
`),l(en,"fill","none"),l(en,"stroke","#000000"),l(en,"stroke-width","0.8"),l(en,"stroke-linecap","square"),t(Zt,"id","line2d_4"),$(Nn,"xlink:href","#DejaVuSans-2212"),$(wn,"xlink:href","#DejaVuSans-35"),t(wn,"x","83.789062"),t(tn,"transform","translate(262.198148 336.318903)scale(0.1 -0.1)"),t(nt,"id","text_3"),t(mr,"id","xtick_3"),t(yn,"d",`M 302.348728 321.967757 
L 297.846166 322.771903 
`),l(yn,"fill","none"),l(yn,"stroke","#000000"),l(yn,"stroke-width","0.8"),l(yn,"stroke-linecap","square"),t(Dt,"id","line2d_5"),$(Qn,"xlink:href","#DejaVuSans-30"),t(Ea,"transform","translate(285.683796 342.793044)scale(0.1 -0.1)"),t(tr,"id","text_4"),t(Gr,"id","xtick_4"),t(rt,"d",`M 322.307149 328.40985 
L 317.776162 329.237229 
`),l(rt,"fill","none"),l(rt,"stroke","#000000"),l(rt,"stroke-width","0.8"),l(rt,"stroke-linecap","square"),t(Gn,"id","line2d_6"),$(wa,"xlink:href","#DejaVuSans-35"),t(Fn,"transform","translate(305.535023 349.453539)scale(0.1 -0.1)"),t(Cn,"id","text_5"),t(bn,"id","xtick_5"),t(Ee,"d",`M 342.845891 335.039256 
L 338.286719 335.89089 
`),l(Ee,"fill","none"),l(Ee,"stroke","#000000"),l(Ee,"stroke-width","0.8"),l(Ee,"stroke-linecap","square"),t(Cr,"id","line2d_7"),$(nr,"xlink:href","#DejaVuSans-31"),$(ya,"xlink:href","#DejaVuSans-30"),t(ya,"x","63.623047"),t(Lr,"transform","translate(322.784752 356.308554)scale(0.1 -0.1)"),t($r,"id","text_6"),t(nn,"id","xtick_6"),t(W,"id","axis3d_1"),t(at,"d",`M 533.466139 306.60739 
L 356.482947 340.222611 
`),l(at,"fill","none"),l(at,"stroke","#000000"),l(at,"stroke-width","0.8"),l(at,"stroke-linecap","square"),t(Fr,"id","line2d_8"),t(Hn,"d",`M 232.355546 135.060028 
L 234.693617 296.187325 
L 366.462744 338.327103 
`),l(Hn,"fill","none"),l(Hn,"stroke","#b0b0b0"),l(Hn,"stroke-width","0.8"),t(St,"d",`M 253.652477 132.897949 
L 255.63182 292.754527 
L 388.291898 334.180993 
`),l(St,"fill","none"),l(St,"stroke","#b0b0b0"),l(St,"stroke-width","0.8"),t(_r,"d",`M 274.601645 130.771175 
L 276.233528 289.376897 
L 409.735969 330.108023 
`),l(_r,"fill","none"),l(_r,"stroke","#b0b0b0"),l(_r,"stroke-width","0.8"),t(rn,"d",`M 295.211498 128.678849 
L 296.506788 286.053115 
L 430.805059 326.106275 
`),l(rn,"fill","none"),l(rn,"stroke","#b0b0b0"),l(rn,"stroke-width","0.8"),t(ae,"d",`M 315.490214 126.62014 
L 316.459392 282.781905 
L 451.508918 322.173897 
`),l(ae,"fill","none"),l(ae,"stroke","#b0b0b0"),l(ae,"stroke-width","0.8"),t(ye,"d",`M 335.445709 124.594244 
L 336.098889 279.562028 
L 471.856961 318.309101 
`),l(ye,"fill","none"),l(ye,"stroke","#b0b0b0"),l(ye,"stroke-width","0.8"),t(jn,"d",`M 355.085652 122.600384 
L 355.432591 276.392287 
L 491.858282 314.510159 
`),l(jn,"fill","none"),l(jn,"stroke","#b0b0b0"),l(jn,"stroke-width","0.8"),t(se,"d",`M 374.417466 120.637805 
L 374.467586 273.271518 
L 511.521669 310.775403 
`),l(se,"fill","none"),l(se,"stroke","#b0b0b0"),l(se,"stroke-width","0.8"),t(we,"id","Line3DCollection_2"),t(Vt,"d",`M 365.304688 337.956757 
L 368.784391 339.069566 
`),l(Vt,"fill","none"),l(Vt,"stroke","#000000"),l(Vt,"stroke-width","0.8"),l(Vt,"stroke-linecap","square"),t(Pe,"id","line2d_9"),t(rr,"id","DejaVuSans-32"),t(rr,"d",`M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
`),t(rr,"transform","scale(0.015625)"),$(st,"xlink:href","#DejaVuSans-2212"),$(kr,"xlink:href","#DejaVuSans-32"),t(kr,"x","83.789062"),$(ot,"xlink:href","#DejaVuSans-35"),t(ot,"x","147.412109"),t(oe,"transform","translate(365.263338 360.101845)scale(0.1 -0.1)"),t(Re,"id","text_7"),t(Qe,"id","xtick_7"),t(xr,"d",`M 387.126942 333.817206 
L 390.627329 334.91029 
`),l(xr,"fill","none"),l(xr,"stroke","#000000"),l(xr,"stroke-width","0.8"),l(xr,"stroke-linecap","square"),t(Ne,"id","line2d_10"),$(Mn,"xlink:href","#DejaVuSans-2212"),$(sn,"xlink:href","#DejaVuSans-32"),t(sn,"x","83.789062"),$(ar,"xlink:href","#DejaVuSans-30"),t(ar,"x","147.412109"),t(Hr,"transform","translate(387.122855 355.807265)scale(0.1 -0.1)"),t(zt,"id","text_8"),t(oa,"id","xtick_8"),t(vr,"d",`M 408.564536 329.750623 
L 412.084337 330.824502 
`),l(vr,"fill","none"),l(vr,"stroke","#000000"),l(vr,"stroke-width","0.8"),l(vr,"stroke-linecap","square"),t(be,"id","line2d_11"),$(ia,"xlink:href","#DejaVuSans-2212"),$(un,"xlink:href","#DejaVuSans-31"),t(un,"x","83.789062"),$(Ge,"xlink:href","#DejaVuSans-35"),t(Ge,"x","147.412109"),t(ln,"transform","translate(408.594758 351.588836)scale(0.1 -0.1)"),t(on,"id","text_9"),t(Br,"id","xtick_9"),t(It,"d",`M 429.627552 325.755095 
L 433.165556 326.81027 
`),l(It,"fill","none"),l(It,"stroke","#000000"),l(It,"stroke-width","0.8"),l(It,"stroke-linecap","square"),t(la,"id","line2d_12"),$(Er,"xlink:href","#DejaVuSans-2212"),$(lt,"xlink:href","#DejaVuSans-31"),t(lt,"x","83.789062"),$(Wr,"xlink:href","#DejaVuSans-30"),t(Wr,"x","147.412109"),t(it,"transform","translate(429.689265 347.444552)scale(0.1 -0.1)"),t(ua,"id","text_10"),t(sr,"id","xtick_10"),t(Ce,"d",`M 450.325722 321.828776 
L 453.880771 322.865732 
`),l(Ce,"fill","none"),l(Ce,"stroke","#000000"),l(Ce,"stroke-width","0.8"),l(Ce,"stroke-linecap","square"),t(Qa,"id","line2d_13"),$(Ha,"xlink:href","#DejaVuSans-2212"),$(wr,"xlink:href","#DejaVuSans-35"),t(wr,"x","83.789062"),t($e,"transform","translate(453.597491 343.372474)scale(0.1 -0.1)"),t(ha,"id","text_11"),t(Dn,"id","xtick_11"),t(Le,"d",`M 470.668444 317.969883 
L 474.239432 318.989088 
`),l(Le,"fill","none"),l(Le,"stroke","#000000"),l(Le,"stroke-width","0.8"),l(Le,"stroke-linecap","square"),t(hn,"id","line2d_14"),$(je,"xlink:href","#DejaVuSans-30"),t(fn,"transform","translate(478.1563 339.370732)scale(0.1 -0.1)"),t(Sn,"id","text_12"),t(or,"id","xtick_12"),t(He,"d",`M 490.664797 314.176695 
L 494.250666 315.178601 
`),l(He,"fill","none"),l(He,"stroke","#000000"),l(He,"stroke-width","0.8"),l(He,"stroke-linecap","square"),t(Or,"id","line2d_15"),$(We,"xlink:href","#DejaVuSans-35"),t(Ur,"transform","translate(498.176452 335.437518)scale(0.1 -0.1)"),t(Be,"id","text_13"),t(Fe,"id","xtick_13"),t(yr,"d",`M 510.323552 310.447547 
L 513.923291 311.43259 
`),l(yr,"fill","none"),l(yr,"stroke","#000000"),l(yr,"stroke-width","0.8"),l(yr,"stroke-linecap","square"),t(At,"id","line2d_16"),$(ba,"xlink:href","#DejaVuSans-31"),$(Qr,"xlink:href","#DejaVuSans-30"),t(Qr,"x","63.623047"),t(ut,"transform","translate(514.675425 331.571088)scale(0.1 -0.1)"),t(qt,"id","text_14"),t(ir,"id","xtick_14"),t(te,"id","axis3d_2"),t(Tt,"d",`M 533.466139 306.60739 
L 536.076092 141.626406 
`),l(Tt,"fill","none"),l(Tt,"stroke","#000000"),l(Tt,"stroke-width","0.8"),l(Tt,"stroke-linecap","square"),t(br,"id","line2d_17"),t(_e,"d",`M 533.570443 300.014077 
L 395.754607 263.726984 
L 225.032273 291.290277 
`),l(_e,"fill","none"),l(_e,"stroke","#b0b0b0"),l(_e,"stroke-width","0.8"),t(Oe,"d",`M 533.873047 280.885804 
L 395.786661 246.160392 
L 224.741902 272.536403 
`),l(Oe,"fill","none"),l(Oe,"stroke","#b0b0b0"),l(Oe,"stroke-width","0.8"),t(lr,"d",`M 534.176828 261.683109 
L 395.818828 228.531276 
L 224.450424 253.71106 
`),l(lr,"fill","none"),l(lr,"stroke","#b0b0b0"),l(lr,"stroke-width","0.8"),t(De,"d",`M 534.481794 242.405559 
L 395.85111 210.839301 
L 224.157833 234.813838 
`),l(De,"fill","none"),l(De,"stroke","#b0b0b0"),l(De,"stroke-width","0.8"),t(Vn,"d",`M 534.787951 223.052715 
L 395.883507 193.084131 
L 223.864123 215.844324 
`),l(Vn,"fill","none"),l(Vn,"stroke","#b0b0b0"),l(Vn,"stroke-width","0.8"),t(Ue,"d",`M 535.095305 203.624134 
L 395.91602 175.265426 
L 223.569288 196.802103 
`),l(Ue,"fill","none"),l(Ue,"stroke","#b0b0b0"),l(Ue,"stroke-width","0.8"),t(Pt,"d",`M 535.403865 184.119372 
L 395.94865 157.382845 
L 223.27332 177.686756 
`),l(Pt,"fill","none"),l(Pt,"stroke","#b0b0b0"),l(Pt,"stroke-width","0.8"),t(Ke,"d",`M 535.713638 164.537979 
L 395.981397 139.436044 
L 222.976213 158.497862 
`),l(Ke,"fill","none"),l(Ke,"stroke","#b0b0b0"),l(Ke,"stroke-width","0.8"),t(Me,"id","Line3DCollection_3"),t(dn,"d",`M 532.366571 299.697096 
L 535.983554 300.649453 
`),l(dn,"fill","none"),l(dn,"stroke","#000000"),l(dn,"stroke-width","0.8"),l(dn,"stroke-linecap","square"),t(Bn,"id","line2d_18"),$(cn,"xlink:href","#DejaVuSans-35"),t(Kr,"transform","translate(550.615919 308.184418)scale(0.1 -0.1)"),t(zn,"id","text_15"),t(ur,"id","xtick_15"),t(jr,"d",`M 532.666614 280.582415 
L 536.291301 281.493936 
`),l(jr,"fill","none"),l(jr,"stroke","#000000"),l(jr,"stroke-width","0.8"),l(jr,"stroke-linecap","square"),t(Rt,"id","line2d_19"),$(ja,"xlink:href","#DejaVuSans-31"),$(Gt,"xlink:href","#DejaVuSans-30"),t(Gt,"x","63.623047"),t(ht,"transform","translate(547.777001 289.031623)scale(0.1 -0.1)"),t(Nt,"id","text_16"),t(Jr,"id","xtick_16"),t(Mr,"d",`M 532.967825 261.393421 
L 536.600246 262.263782 
`),l(Mr,"fill","none"),l(Mr,"stroke","#000000"),l(Mr,"stroke-width","0.8"),l(Mr,"stroke-linecap","square"),t(ft,"id","line2d_20"),$(fa,"xlink:href","#DejaVuSans-31"),$(da,"xlink:href","#DejaVuSans-35"),t(da,"x","63.623047"),t(gn,"transform","translate(548.120668 269.804212)scale(0.1 -0.1)"),t(dt,"id","text_17"),t(Yr,"id","xtick_17"),t(ct,"d",`M 533.270208 242.129681 
L 536.910398 242.958553 
`),l(ct,"fill","none"),l(ct,"stroke","#000000"),l(ct,"stroke-width","0.8"),l(ct,"stroke-linecap","square"),t(Dr,"id","line2d_21"),$(Vr,"xlink:href","#DejaVuSans-32"),$(pn,"xlink:href","#DejaVuSans-30"),t(pn,"x","63.623047"),t(In,"transform","translate(548.465676 250.501748)scale(0.1 -0.1)"),t(Sr,"id","text_18"),t(Ct,"id","xtick_18"),t(pt,"d",`M 533.573772 222.790756 
L 537.221763 223.577809 
`),l(pt,"fill","none"),l(pt,"stroke","#000000"),l(pt,"stroke-width","0.8"),l(pt,"stroke-linecap","square"),t(zr,"id","line2d_22"),$(mt,"xlink:href","#DejaVuSans-32"),$(Da,"xlink:href","#DejaVuSans-35"),t(Da,"x","63.623047"),t(Ma,"transform","translate(548.812033 231.12379)scale(0.1 -0.1)"),t(Ft,"id","text_19"),t(gt,"id","xtick_19"),t(Lt,"d",`M 533.878522 203.376207 
L 537.534349 204.121106 
`),l(Lt,"fill","none"),l(Lt,"stroke","#000000"),l(Lt,"stroke-width","0.8"),l(Lt,"stroke-linecap","square"),t($t,"id","line2d_23"),t(Ir,"id","DejaVuSans-33"),t(Ir,"d",`M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
`),t(Ir,"transform","scale(0.015625)"),$(O,"xlink:href","#DejaVuSans-33"),$(Ye,"xlink:href","#DejaVuSans-30"),t(Ye,"x","63.623047"),t(C,"transform","translate(549.159748 211.669896)scale(0.1 -0.1)"),t(Je,"id","text_20"),t(Se,"id","xtick_20"),t(Xe,"d",`M 534.184467 183.885588 
L 537.848162 184.587996 
`),l(Xe,"fill","none"),l(Xe,"stroke","#000000"),l(Xe,"stroke-width","0.8"),l(Xe,"stroke-linecap","square"),t(Ar,"id","line2d_24"),$(ca,"xlink:href","#DejaVuSans-33"),$(Ht,"xlink:href","#DejaVuSans-35"),t(Ht,"x","63.623047"),t(kt,"transform","translate(549.508828 192.139618)scale(0.1 -0.1)"),t(qr,"id","text_21"),t(_t,"id","xtick_21"),t(Ze,"d",`M 534.491613 164.318451 
L 538.163209 164.978028 
`),l(Ze,"fill","none"),l(Ze,"stroke","#000000"),l(Ze,"stroke-width","0.8"),l(Ze,"stroke-linecap","square"),t(ga,"id","line2d_25"),t(m,"id","DejaVuSans-34"),t(m,"d",`M 2419 4116 
L 825 1625 
L 2419 1625 
L 2419 4116 
z
M 2253 4666 
L 3047 4666 
L 3047 1625 
L 3713 1625 
L 3713 1100 
L 3047 1100 
L 3047 0 
L 2419 0 
L 2419 1100 
L 313 1100 
L 313 1709 
L 2253 4666 
z
`),t(m,"transform","scale(0.015625)"),$(d,"xlink:href","#DejaVuSans-34"),$(vt,"xlink:href","#DejaVuSans-30"),t(vt,"x","63.623047"),t(mn,"transform","translate(549.859281 172.532505)scale(0.1 -0.1)"),t(Sa,"id","text_22"),t(xt,"id","xtick_22"),t(ie,"id","axis3d_3"),t(Et,"d",`M 331.652321 160.302933 
L 343.820515 161.119825 
L 355.410695 163.79061 
L 365.957847 167.853881 
L 375.217161 172.831354 
L 383.143372 178.343734 
L 389.754224 184.060543 
L 395.176898 189.785484 
L 399.553603 195.373946 
L 403.03984 200.745126 
L 405.783463 205.862098 
L 407.92022 210.710929 
L 409.566199 215.295235 
L 410.822346 219.626031 
L 411.769766 223.718873 
L 412.478391 227.590625 
L 412.999643 231.257537 
L 413.378865 234.735571 
L 413.648744 238.038869 
L 413.835202 241.180396 
L 413.959427 244.17219 
L 414.035056 247.024272 
L 414.073902 249.746239 
L 414.084431 252.346591 
L 414.071827 254.83259 
L 414.0404 257.211173 
L 413.99278 259.488482 
L 413.930059 261.669883 
L 413.85292 263.760534 
L 413.761162 265.76505 
L 413.653676 267.687553 
L 413.529066 269.532021 
L 413.385344 271.302081 
L 413.219665 273.001026 
L 413.028719 274.632025 
L 412.809206 276.198111 
L 412.555734 277.701899 
L 412.26271 279.145974 
L 411.924076 280.53282 
L 411.532586 281.864692 
L 411.078072 283.14348 
L 410.549731 284.370981 
L 409.936706 285.549012 
L 409.223955 286.678751 
L 408.392533 287.760793 
L 407.421829 288.795346 
L 406.291775 289.783037 
L 404.972045 290.721957 
L 403.427418 291.608961 
L 401.619034 292.439325 
L 399.508552 293.209996 
L 397.037283 293.907883 
L 394.141267 294.51727 
L 390.750464 295.0163 
L 386.790401 295.387505 
L 382.160023 295.57708 
L 376.754686 295.526558 
L 370.470789 295.156556 
L 363.171521 294.387903 
L 354.760624 293.036459 
L 345.145751 290.912452 
L 334.254356 287.78444 
L 322.123207 283.320916 
L 308.9455 277.144935 
L 295.014708 268.814466 
L 281.093587 257.94731 
L 268.163736 244.246362 
L 257.641232 227.727497 
L 251.176284 208.90268 
L 250.359276 188.932591 
L 256.213657 169.595148 
L 268.783567 152.972808 
L 286.880026 140.854956 
L 308.430946 134.263683 
L 331.059691 133.105954 
L 352.736141 136.464978 
L 372.13137 142.962252 
L 388.648967 151.217697 
L 402.244385 160.119956 
L 413.193072 168.9316 
L 421.905811 177.189094 
L 428.803667 184.729747 
L 434.280243 191.485303 
L 438.668856 197.493206 
L 442.245606 202.821446 
L 445.238843 207.549443 
L 447.821809 211.749457 
L 450.15005 215.488731 
L 452.333244 218.815319 
L 454.464696 221.768822 
L 456.62838 224.383114 
L 458.874823 226.671129 
L 461.250481 228.643852 
L 463.793871 230.306944 
L 466.538509 231.659483 
L 469.4916 232.68878 
L 472.660587 233.382316 
L 476.034359 233.729724 
L 479.635173 233.701297 
L 483.412935 233.280682 
`),t(Et,"clip-path","url(#p4bc3fb7813)"),l(Et,"fill","none"),l(Et,"stroke","#1f77b4"),l(Et,"stroke-width","1.5"),l(Et,"stroke-linecap","square"),t(hr,"id","line2d_26"),t(Bt,"d",`M 334.926178 161.57787 
L 348.502299 161.851622 
L 360.20627 165.316674 
L 371.467966 169.864268 
L 381.151999 175.36752 
L 389.129717 180.514356 
L 395.191486 186.047529 
L 400.303177 191.504356 
L 403.697481 196.647994 
L 406.599292 202.097295 
L 408.995107 206.909117 
L 411.122256 212.103024 
L 412.042344 216.765529 
L 414.339557 221.693441 
L 414.405207 226.018017 
L 416.258551 230.293252 
L 415.551707 234.062285 
L 415.822943 238.070132 
L 415.159481 240.092534 
L 414.138868 243.06782 
L 413.497228 247.08532 
L 412.674014 248.555676 
L 413.475476 250.780595 
L 413.295336 253.868009 
L 412.958838 255.668634 
L 413.100478 257.866114 
L 413.313382 260.005763 
L 413.610672 262.665159 
L 414.053443 264.654304 
L 414.523371 266.573529 
L 414.169635 268.208209 
L 413.853338 269.98661 
L 413.926403 271.475578 
L 414.179293 273.357223 
L 413.842778 274.497715 
L 414.447991 275.730951 
L 413.086322 276.886602 
L 413.045005 278.822452 
L 412.806506 280.667198 
L 412.611401 281.620557 
L 411.372193 282.730884 
L 411.260814 284.313932 
L 410.32209 285.956027 
L 409.260151 287.061714 
L 407.57748 287.973634 
L 406.853267 289.319349 
L 404.216415 290.515771 
L 402.928804 291.442724 
L 400.125889 292.277145 
L 398.689224 293.723903 
L 396.009118 293.87017 
L 395.463828 293.529461 
L 393.8855 294.428489 
L 390.837725 294.748442 
L 387.145594 295.192739 
L 383.032692 295.186032 
L 374.442233 294.320211 
L 367.172719 292.677836 
L 359.615741 289.257144 
L 350.669685 284.567183 
L 343.879531 278.321213 
L 337.374659 268.662642 
L 331.582591 255.680276 
L 327.63241 242.686262 
L 326.727232 227.25932 
L 325.788752 211.318623 
L 329.904787 196.900638 
L 335.301354 181.891526 
L 342.229121 171.411272 
L 350.906972 163.1685 
L 361.642372 158.477356 
L 369.830528 155.546345 
L 377.872445 156.498556 
L 387.108063 160.418765 
L 395.313007 167.598737 
L 402.237443 172.837549 
L 408.621744 179.441097 
L 416.213297 185.96432 
L 420.688822 192.786099 
L 425.663024 198.253111 
L 429.392304 203.317259 
L 432.596003 206.768472 
L 434.322566 210.361837 
L 436.415666 212.987022 
L 439.820167 216.076963 
L 440.214723 218.9394 
L 441.701447 220.582827 
L 443.730392 223.949275 
L 446.594576 225.881042 
L 450.028385 227.755636 
L 452.692341 229.317925 
L 455.41905 231.052169 
L 457.66615 231.296757 
L 461.7537 231.01175 
L 464.901308 230.82714 
L 469.116069 230.913115 
L 469.943802 230.770496 
L 472.077551 230.90117 
L 473.5757 229.834041 
L 473.980718 228.506175 
`),t(Bt,"clip-path","url(#p4bc3fb7813)"),l(Bt,"fill","none"),l(Bt,"stroke","#ff7f0e"),l(Bt,"stroke-opacity","0.6"),l(Bt,"stroke-width","1.5"),l(Bt,"stroke-linecap","square"),t(Tr,"id","line2d_27"),t(fr,"id","DejaVuSans-73"),t(fr,"d",`M 2834 3397 
L 2834 2853 
Q 2591 2978 2328 3040 
Q 2066 3103 1784 3103 
Q 1356 3103 1142 2972 
Q 928 2841 928 2578 
Q 928 2378 1081 2264 
Q 1234 2150 1697 2047 
L 1894 2003 
Q 2506 1872 2764 1633 
Q 3022 1394 3022 966 
Q 3022 478 2636 193 
Q 2250 -91 1575 -91 
Q 1294 -91 989 -36 
Q 684 19 347 128 
L 347 722 
Q 666 556 975 473 
Q 1284 391 1588 391 
Q 1994 391 2212 530 
Q 2431 669 2431 922 
Q 2431 1156 2273 1281 
Q 2116 1406 1581 1522 
L 1381 1569 
Q 847 1681 609 1914 
Q 372 2147 372 2553 
Q 372 3047 722 3315 
Q 1072 3584 1716 3584 
Q 2034 3584 2315 3537 
Q 2597 3491 2834 3397 
z
`),t(fr,"transform","scale(0.015625)"),t(dr,"id","DejaVuSans-4d"),t(dr,"d",`M 628 4666 
L 1569 4666 
L 2759 1491 
L 3956 4666 
L 4897 4666 
L 4897 0 
L 4281 0 
L 4281 4097 
L 3078 897 
L 2444 897 
L 1241 4097 
L 1241 0 
L 628 0 
L 628 4666 
z
`),t(dr,"transform","scale(0.015625)"),t(cr,"id","DejaVuSans-41"),t(cr,"d",`M 2188 4044 
L 1331 1722 
L 3047 1722 
L 2188 4044 
z
M 1831 4666 
L 2547 4666 
L 4325 0 
L 3669 0 
L 3244 1197 
L 1141 1197 
L 716 0 
L 50 0 
L 1831 4666 
z
`),t(cr,"transform","scale(0.015625)"),t(Wt,"id","DejaVuSans-50"),t(Wt,"d",`M 1259 4147 
L 1259 2394 
L 2053 2394 
Q 2494 2394 2734 2622 
Q 2975 2850 2975 3272 
Q 2975 3691 2734 3919 
Q 2494 4147 2053 4147 
L 1259 4147 
z
M 628 4666 
L 2053 4666 
Q 2838 4666 3239 4311 
Q 3641 3956 3641 3272 
Q 3641 2581 3239 2228 
Q 2838 1875 2053 1875 
L 1259 1875 
L 1259 0 
L 628 0 
L 628 4666 
z
`),t(Wt,"transform","scale(0.015625)"),t(Ot,"id","DejaVuSans-45"),t(Ot,"d",`M 628 4666 
L 3578 4666 
L 3578 4134 
L 1259 4134 
L 1259 2753 
L 3481 2753 
L 3481 2222 
L 1259 2222 
L 1259 531 
L 3634 531 
L 3634 0 
L 628 0 
L 628 4666 
z
`),t(Ot,"transform","scale(0.015625)"),t(Ut,"id","DejaVuSans-20"),t(Ut,"transform","scale(0.015625)"),t(wt,"id","DejaVuSans-72"),t(wt,"d",`M 2631 2963 
Q 2534 3019 2420 3045 
Q 2306 3072 2169 3072 
Q 1681 3072 1420 2755 
Q 1159 2438 1159 1844 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1341 3275 1631 3429 
Q 1922 3584 2338 3584 
Q 2397 3584 2469 3576 
Q 2541 3569 2628 3553 
L 2631 2963 
z
`),t(wt,"transform","scale(0.015625)"),t(Ve,"id","DejaVuSans-6f"),t(Ve,"d",`M 1959 3097 
Q 1497 3097 1228 2736 
Q 959 2375 959 1747 
Q 959 1119 1226 758 
Q 1494 397 1959 397 
Q 2419 397 2687 759 
Q 2956 1122 2956 1747 
Q 2956 2369 2687 2733 
Q 2419 3097 1959 3097 
z
M 1959 3584 
Q 2709 3584 3137 3096 
Q 3566 2609 3566 1747 
Q 3566 888 3137 398 
Q 2709 -91 1959 -91 
Q 1206 -91 779 398 
Q 353 888 353 1747 
Q 353 2609 779 3096 
Q 1206 3584 1959 3584 
z
`),t(Ve,"transform","scale(0.015625)"),t(yt,"id","DejaVuSans-3a"),t(yt,"d",`M 750 794 
L 1409 794 
L 1409 0 
L 750 0 
L 750 794 
z
M 750 3309 
L 1409 3309 
L 1409 2516 
L 750 2516 
L 750 3309 
z
`),t(yt,"transform","scale(0.015625)"),t(le,"id","DejaVuSans-2e"),t(le,"d",`M 684 794 
L 1344 794 
L 1344 0 
L 684 0 
L 684 794 
z
`),t(le,"transform","scale(0.015625)"),t(ne,"id","DejaVuSans-39"),t(ne,"d",`M 703 97 
L 703 672 
Q 941 559 1184 500 
Q 1428 441 1663 441 
Q 2288 441 2617 861 
Q 2947 1281 2994 2138 
Q 2813 1869 2534 1725 
Q 2256 1581 1919 1581 
Q 1219 1581 811 2004 
Q 403 2428 403 3163 
Q 403 3881 828 4315 
Q 1253 4750 1959 4750 
Q 2769 4750 3195 4129 
Q 3622 3509 3622 2328 
Q 3622 1225 3098 567 
Q 2575 -91 1691 -91 
Q 1453 -91 1209 -44 
Q 966 3 703 97 
z
M 1959 2075 
Q 2384 2075 2632 2365 
Q 2881 2656 2881 3163 
Q 2881 3666 2632 3958 
Q 2384 4250 1959 4250 
Q 1534 4250 1286 3958 
Q 1038 3666 1038 3163 
Q 1038 2656 1286 2365 
Q 1534 2075 1959 2075 
z
`),t(ne,"transform","scale(0.015625)"),t(Kt,"id","DejaVuSans-38"),t(Kt,"d",`M 2034 2216 
Q 1584 2216 1326 1975 
Q 1069 1734 1069 1313 
Q 1069 891 1326 650 
Q 1584 409 2034 409 
Q 2484 409 2743 651 
Q 3003 894 3003 1313 
Q 3003 1734 2745 1975 
Q 2488 2216 2034 2216 
z
M 1403 2484 
Q 997 2584 770 2862 
Q 544 3141 544 3541 
Q 544 4100 942 4425 
Q 1341 4750 2034 4750 
Q 2731 4750 3128 4425 
Q 3525 4100 3525 3541 
Q 3525 3141 3298 2862 
Q 3072 2584 2669 2484 
Q 3125 2378 3379 2068 
Q 3634 1759 3634 1313 
Q 3634 634 3220 271 
Q 2806 -91 2034 -91 
Q 1263 -91 848 271 
Q 434 634 434 1313 
Q 434 1759 690 2068 
Q 947 2378 1403 2484 
z
M 1172 3481 
Q 1172 3119 1398 2916 
Q 1625 2713 2034 2713 
Q 2441 2713 2670 2916 
Q 2900 3119 2900 3481 
Q 2900 3844 2670 4047 
Q 2441 4250 2034 4250 
Q 1625 4250 1398 4047 
Q 1172 3844 1172 3481 
z
`),t(Kt,"transform","scale(0.015625)"),$(An,"xlink:href","#DejaVuSans-73"),$(qn,"xlink:href","#DejaVuSans-4d"),t(qn,"x","52.099609"),$(Tn,"xlink:href","#DejaVuSans-41"),t(Tn,"x","138.378906"),$(On,"xlink:href","#DejaVuSans-50"),t(On,"x","206.787109"),$(Pr,"xlink:href","#DejaVuSans-45"),t(Pr,"x","267.089844"),$(Un,"xlink:href","#DejaVuSans-20"),t(Un,"x","330.273438"),$(Va,"xlink:href","#DejaVuSans-45"),t(Va,"x","362.060547"),$(za,"xlink:href","#DejaVuSans-72"),t(za,"x","425.244141"),$(Ia,"xlink:href","#DejaVuSans-72"),t(Ia,"x","464.607422"),$(Aa,"xlink:href","#DejaVuSans-6f"),t(Aa,"x","503.470703"),$(qa,"xlink:href","#DejaVuSans-72"),t(qa,"x","564.652344"),$(Ta,"xlink:href","#DejaVuSans-3a"),t(Ta,"x","604.015625"),$(Pa,"xlink:href","#DejaVuSans-20"),t(Pa,"x","637.707031"),$(gr,"xlink:href","#DejaVuSans-33"),t(gr,"x","669.494141"),$(pr,"xlink:href","#DejaVuSans-35"),t(pr,"x","733.117188"),$(et,"xlink:href","#DejaVuSans-2e"),t(et,"x","796.740234"),$(ke,"xlink:href","#DejaVuSans-39"),t(ke,"x","828.527344"),$(Rr,"xlink:href","#DejaVuSans-38"),t(Rr,"x","892.150391"),t(Y,"transform","translate(315.714 47.6544)scale(0.12 -0.12)"),t(Wn,"id","text_23"),t(Kn,"d",`M 456.033012 91.01065 
L 538.2002 91.01065 
Q 540.2002 91.01065 540.2002 89.01065 
L 540.2002 60.6544 
Q 540.2002 58.6544 538.2002 58.6544 
L 456.033012 58.6544 
Q 454.033012 58.6544 454.033012 60.6544 
L 454.033012 89.01065 
Q 454.033012 91.01065 456.033012 91.01065 
z
`),l(Kn,"fill","#ffffff"),l(Kn,"opacity","0.8"),l(Kn,"stroke","#cccccc"),l(Kn,"stroke-linejoin","miter"),t(Xr,"id","patch_6"),t(Zr,"d",`M 458.033012 66.752837 
L 468.033012 66.752837 
L 478.033012 66.752837 
`),l(Zr,"fill","none"),l(Zr,"stroke","#1f77b4"),l(Zr,"stroke-width","1.5"),l(Zr,"stroke-linecap","square"),t(Ra,"id","line2d_28"),t(ma,"id","DejaVuSans-65"),t(ma,"d",`M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
`),t(ma,"transform","scale(0.015625)"),t($a,"id","DejaVuSans-66"),t($a,"d",`M 2375 4863 
L 2375 4384 
L 1825 4384 
Q 1516 4384 1395 4259 
Q 1275 4134 1275 3809 
L 1275 3500 
L 2222 3500 
L 2222 3053 
L 1275 3053 
L 1275 0 
L 697 0 
L 697 3053 
L 147 3053 
L 147 3500 
L 697 3500 
L 697 3744 
Q 697 4328 969 4595 
Q 1241 4863 1831 4863 
L 2375 4863 
z
`),t($a,"transform","scale(0.015625)"),t(La,"id","DejaVuSans-6e"),t(La,"d",`M 3513 2113 
L 3513 0 
L 2938 0 
L 2938 2094 
Q 2938 2591 2744 2837 
Q 2550 3084 2163 3084 
Q 1697 3084 1428 2787 
Q 1159 2491 1159 1978 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1366 3272 1645 3428 
Q 1925 3584 2291 3584 
Q 2894 3584 3203 3211 
Q 3513 2838 3513 2113 
z
`),t(La,"transform","scale(0.015625)"),t(_a,"id","DejaVuSans-63"),t(_a,"d",`M 3122 3366 
L 3122 2828 
Q 2878 2963 2633 3030 
Q 2388 3097 2138 3097 
Q 1578 3097 1268 2742 
Q 959 2388 959 1747 
Q 959 1106 1268 751 
Q 1578 397 2138 397 
Q 2388 397 2633 464 
Q 2878 531 3122 666 
L 3122 134 
Q 2881 22 2623 -34 
Q 2366 -91 2075 -91 
Q 1284 -91 818 406 
Q 353 903 353 1747 
Q 353 2603 823 3093 
Q 1294 3584 2113 3584 
Q 2378 3584 2631 3529 
Q 2884 3475 3122 3366 
z
`),t(_a,"transform","scale(0.015625)"),$(Ba,"xlink:href","#DejaVuSans-72"),$(Wa,"xlink:href","#DejaVuSans-65"),t(Wa,"x","38.863281"),$(Oa,"xlink:href","#DejaVuSans-66"),t(Oa,"x","100.386719"),$(ta,"xlink:href","#DejaVuSans-65"),t(ta,"x","135.591797"),$(ka,"xlink:href","#DejaVuSans-72"),t(ka,"x","197.115234"),$(Ga,"xlink:href","#DejaVuSans-65"),t(Ga,"x","235.978516"),$(Xa,"xlink:href","#DejaVuSans-6e"),t(Xa,"x","297.501953"),$(_s,"xlink:href","#DejaVuSans-63"),t(_s,"x","360.880859"),$(ss,"xlink:href","#DejaVuSans-65"),t(ss,"x","415.861328"),t(Qt,"transform","translate(486.033012 70.252837)scale(0.1 -0.1)"),t(Na,"id","text_24"),t(rs,"d",`M 458.033012 81.430963 
L 468.033012 81.430963 
L 478.033012 81.430963 
`),l(rs,"fill","none"),l(rs,"stroke","#ff7f0e"),l(rs,"stroke-opacity","0.6"),l(rs,"stroke-width","1.5"),l(rs,"stroke-linecap","square"),t(os,"id","line2d_29"),t($s,"id","DejaVuSans-70"),t($s,"d",`M 1159 525 
L 1159 -1331 
L 581 -1331 
L 581 3500 
L 1159 3500 
L 1159 2969 
Q 1341 3281 1617 3432 
Q 1894 3584 2278 3584 
Q 2916 3584 3314 3078 
Q 3713 2572 3713 1747 
Q 3713 922 3314 415 
Q 2916 -91 2278 -91 
Q 1894 -91 1617 61 
Q 1341 213 1159 525 
z
M 3116 1747 
Q 3116 2381 2855 2742 
Q 2594 3103 2138 3103 
Q 1681 3103 1420 2742 
Q 1159 2381 1159 1747 
Q 1159 1113 1420 752 
Q 1681 391 2138 391 
Q 2594 391 2855 752 
Q 3116 1113 3116 1747 
z
`),t($s,"transform","scale(0.015625)"),t(Ls,"id","DejaVuSans-64"),t(Ls,"d",`M 2906 2969 
L 2906 4863 
L 3481 4863 
L 3481 0 
L 2906 0 
L 2906 525 
Q 2725 213 2448 61 
Q 2172 -91 1784 -91 
Q 1150 -91 751 415 
Q 353 922 353 1747 
Q 353 2572 751 3078 
Q 1150 3584 1784 3584 
Q 2172 3584 2448 3432 
Q 2725 3281 2906 2969 
z
M 947 1747 
Q 947 1113 1208 752 
Q 1469 391 1925 391 
Q 2381 391 2643 752 
Q 2906 1113 2906 1747 
Q 2906 2381 2643 2742 
Q 2381 3103 1925 3103 
Q 1469 3103 1208 2742 
Q 947 2381 947 1747 
z
`),t(Ls,"transform","scale(0.015625)"),t(xa,"id","DejaVuSans-69"),t(xa,"d",`M 603 3500 
L 1178 3500 
L 1178 0 
L 603 0 
L 603 3500 
z
M 603 4863 
L 1178 4863 
L 1178 4134 
L 603 4134 
L 603 4863 
z
`),t(xa,"transform","scale(0.015625)"),t(Ua,"id","DejaVuSans-74"),t(Ua,"d",`M 1172 4494 
L 1172 3500 
L 2356 3500 
L 2356 3053 
L 1172 3053 
L 1172 1153 
Q 1172 725 1289 603 
Q 1406 481 1766 481 
L 2356 481 
L 2356 0 
L 1766 0 
Q 1100 0 847 248 
Q 594 497 594 1153 
L 594 3053 
L 172 3053 
L 172 3500 
L 594 3500 
L 594 4494 
L 1172 4494 
z
`),t(Ua,"transform","scale(0.015625)"),$(Ks,"xlink:href","#DejaVuSans-70"),$(Vs,"xlink:href","#DejaVuSans-72"),t(Vs,"x","63.476562"),$(zs,"xlink:href","#DejaVuSans-65"),t(zs,"x","102.339844"),$(Is,"xlink:href","#DejaVuSans-64"),t(Is,"x","163.863281"),$(As,"xlink:href","#DejaVuSans-69"),t(As,"x","227.339844"),$(qs,"xlink:href","#DejaVuSans-63"),t(qs,"x","255.123047"),$(Ts,"xlink:href","#DejaVuSans-74"),t(Ts,"x","310.103516"),$(Za,"xlink:href","#DejaVuSans-69"),t(Za,"x","349.3125"),$(es,"xlink:href","#DejaVuSans-6f"),t(es,"x","377.095703"),$(is,"xlink:href","#DejaVuSans-6e"),t(is,"x","438.277344"),t(na,"transform","translate(486.033012 84.930963)scale(0.1 -0.1)"),t(ks,"id","text_25"),t(Pn,"id","legend_1"),t($n,"id","axes_1"),t(A,"id","figure_1"),t(ws,"x","200.9178"),t(ws,"y","53.6544"),t(ws,"width","344.2824"),t(ws,"height","344.2824"),t(js,"id","p4bc3fb7813"),t(o,"xmlns:xlink","http://www.w3.org/1999/xlink"),t(o,"width","323"),t(o,"height","330"),t(o,"viewBox","200 100 376 230"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"version","1.1")},m(ys,us){x(ys,o,us),n(o,i),n(i,h),n(h,f),n(f,u),n(f,c),n(c,g),n(f,k),n(k,v),n(f,w),n(w,S),n(S,Q),n(Q,z),n(o,P),n(P,I),n(I,U),n(o,A),n(A,F),n(F,Z),n(A,re),n(re,ee),n(A,Ie),n(Ie,ue),n(ue,H),n(A,B),n(B,ce),n(ce,V),n(A,G),n(G,Jt),n(Jt,K),n(A,W),n(W,_n),n(_n,Ae),n(W,J),n(J,xe),n(J,ve),n(J,ge),n(J,kn),n(J,Yt),n(J,pe),n(W,xn),n(xn,bt),n(bt,Jn),n(xn,qe),n(qe,vn),n(vn,jt),n(jt,Yn),n(jt,tt),n(jt,Xn),n(vn,Rn),n(vn,aa),n(vn,sa),n(W,Nr),n(Nr,Mt),n(Mt,Zn),n(Nr,me),n(me,er),n(er,Te),n(Te,va),n(er,Xt),n(er,Fa),n(er,En),n(W,mr),n(mr,Zt),n(Zt,en),n(mr,nt),n(nt,tn),n(tn,Nn),n(tn,wn),n(W,Gr),n(Gr,Dt),n(Dt,yn),n(Gr,tr),n(tr,Ea),n(Ea,Qn),n(W,bn),n(bn,Gn),n(Gn,rt),n(bn,Cn),n(Cn,Fn),n(Fn,wa),n(W,nn),n(nn,Cr),n(Cr,Ee),n(nn,$r),n($r,Lr),n(Lr,nr),n(Lr,ya),n(A,te),n(te,Fr),n(Fr,at),n(te,we),n(we,Hn),n(we,St),n(we,_r),n(we,rn),n(we,ae),n(we,ye),n(we,jn),n(we,se),n(te,Qe),n(Qe,Pe),n(Pe,Vt),n(Qe,Re),n(Re,oe),n(oe,an),n(an,rr),n(oe,st),n(oe,kr),n(oe,ot),n(te,oa),n(oa,Ne),n(Ne,xr),n(oa,zt),n(zt,Hr),n(Hr,Mn),n(Hr,sn),n(Hr,ar),n(te,Br),n(Br,be),n(be,vr),n(Br,on),n(on,ln),n(ln,ia),n(ln,un),n(ln,Ge),n(te,sr),n(sr,la),n(la,It),n(sr,ua),n(ua,it),n(it,Er),n(it,lt),n(it,Wr),n(te,Dn),n(Dn,Qa),n(Qa,Ce),n(Dn,ha),n(ha,$e),n($e,Ha),n($e,wr),n(te,or),n(or,hn),n(hn,Le),n(or,Sn),n(Sn,fn),n(fn,je),n(te,Fe),n(Fe,Or),n(Or,He),n(Fe,Be),n(Be,Ur),n(Ur,We),n(te,ir),n(ir,At),n(At,yr),n(ir,qt),n(qt,ut),n(ut,ba),n(ut,Qr),n(A,ie),n(ie,br),n(br,Tt),n(ie,Me),n(Me,_e),n(Me,Oe),n(Me,lr),n(Me,De),n(Me,Vn),n(Me,Ue),n(Me,Pt),n(Me,Ke),n(ie,ur),n(ur,Bn),n(Bn,dn),n(ur,zn),n(zn,Kr),n(Kr,cn),n(ie,Jr),n(Jr,Rt),n(Rt,jr),n(Jr,Nt),n(Nt,ht),n(ht,ja),n(ht,Gt),n(ie,Yr),n(Yr,ft),n(ft,Mr),n(Yr,dt),n(dt,gn),n(gn,fa),n(gn,da),n(ie,Ct),n(Ct,Dr),n(Dr,ct),n(Ct,Sr),n(Sr,In),n(In,Vr),n(In,pn),n(ie,gt),n(gt,zr),n(zr,pt),n(gt,Ft),n(Ft,Ma),n(Ma,mt),n(Ma,Da),n(ie,Se),n(Se,$t),n($t,Lt),n(Se,Je),n(Je,C),n(C,fe),n(fe,Ir),n(C,O),n(C,Ye),n(ie,_t),n(_t,Ar),n(Ar,Xe),n(_t,qr),n(qr,kt),n(kt,ca),n(kt,Ht),n(ie,xt),n(xt,ga),n(ga,Ze),n(xt,Sa),n(Sa,mn),n(mn,pa),n(pa,m),n(mn,d),n(mn,vt),n(A,$n),n($n,hr),n(hr,Et),n($n,Tr),n(Tr,Bt),n($n,Wn),n(Wn,Y),n(Y,de),n(de,fr),n(de,dr),n(de,cr),n(de,Wt),n(de,Ot),n(de,Ut),n(de,wt),n(de,Ve),n(de,yt),n(de,le),n(de,ne),n(de,Kt),n(Y,An),n(Y,qn),n(Y,Tn),n(Y,On),n(Y,Pr),n(Y,Un),n(Y,Va),n(Y,za),n(Y,Ia),n(Y,Aa),n(Y,qa),n(Y,Ta),n(Y,Pa),n(Y,gr),n(Y,pr),n(Y,et),n(Y,ke),n(Y,Rr),n($n,Pn),n(Pn,Xr),n(Xr,Kn),n(Pn,Ra),n(Ra,Zr),n(Pn,Na),n(Na,Qt),n(Qt,ea),n(ea,ma),n(ea,$a),n(ea,La),n(ea,_a),n(Qt,Ba),n(Qt,Wa),n(Qt,Oa),n(Qt,ta),n(Qt,ka),n(Qt,Ga),n(Qt,Xa),n(Qt,_s),n(Qt,ss),n(Pn,os),n(os,rs),n(Pn,ks),n(ks,na),n(na,ds),n(ds,$s),n(ds,Ls),n(ds,xa),n(ds,Ua),n(na,Ks),n(na,Vs),n(na,zs),n(na,Is),n(na,As),n(na,qs),n(na,Ts),n(na,Za),n(na,es),n(na,is),n(o,ls),n(ls,js),n(js,ws)},p:Ln,i:Ln,o:Ln,d(ys){ys&&e(o)}}}class Ci extends Os{constructor(o){super(),Us(this,o,null,Gi,Ws,{})}}function Fi(p){let o,i,h,f,u,c,g,k,v,w,S,Q,z,P,I,U,A,F,Z,re,ee,Ie,ue,H,B,ce,V,G,Jt,K,W,_n,Ae,J,xe,ve,ge,kn,Yt,pe,xn,bt,Jn,qe,vn,jt,Yn,tt,Xn,Rn,aa,sa,Nr,Mt,Zn,me,er,Te,va,Xt,Fa,En,mr,Zt,en,nt,tn,Nn,wn,Gr,Dt,yn,tr,Ea,Qn,bn,Gn,rt,Cn,Fn,wa,nn,Cr,Ee,$r,Lr,nr,ya,te,Fr,at,we,Hn,St,_r,rn,ae,ye,jn,se,Qe,Pe,Vt,Re,oe,an,rr,st,kr,ot,oa,Ne,xr,zt,Hr,Mn,sn,ar,Br,be,vr,on,ln,ia,un,Ge,sr,la,It,ua,it,Er,lt,Wr,Dn,Qa,Ce,ha,$e,Ha,wr,or,hn,Le,Sn,fn,je,Fe,Or,He,Be,Ur,We,ir,At,yr,qt,ut,ba,Qr,ie,br,Tt,Me,_e,Oe,lr,De,Vn,Ue,Pt,Ke,ur,Bn,dn,zn,Kr,cn,Jr,Rt,jr,Nt,ht,ja,Gt,Yr,ft,Mr,dt,gn,fa,da,Ct,Dr,ct,Sr,In,Vr,pn,gt,zr,pt,Ft,Ma,mt,Da,Se,$t,Lt,Je,C,fe,Ir,O,Ye,_t,Ar,Xe,qr,kt,ca,Ht,xt,ga,Ze,Sa,mn,pa,m,d,vt,$n,hr,Et,Tr,Bt,Wn,Y,de,fr,dr,cr,Wt,Ot,Ut,wt,Ve,yt,le,ne,Kt,An,qn,Tn,On,Pr,Un,Va,za,Ia,Aa,qa,Ta,Pa,gr,pr,et,ke,Rr,Pn,Xr,Kn,Ra,Zr,Na,Qt,ea,ma,$a,La,_a,Ba,Wa,Oa,ta,ka;return{c(){o=a("svg"),i=a("metadata"),h=a("rdf:RDF"),f=a("cc:Work"),u=a("dc:type"),c=a("dc:date"),g=L("2024-02-22T08:09:56.757681"),k=a("dc:format"),v=L("image/svg+xml"),w=a("dc:creator"),S=a("cc:Agent"),Q=a("dc:title"),z=L("Matplotlib v3.5.1, https://matplotlib.org/"),P=a("defs"),I=a("style"),U=L(`* {
				stroke-linejoin: round;
				stroke-linecap: butt;
			}
		`),A=a("g"),F=a("g"),Z=a("path"),re=a("g"),ee=a("path"),Ie=a("g"),ue=a("g"),H=a("path"),B=a("g"),ce=a("g"),V=a("path"),G=a("g"),Jt=a("g"),K=a("path"),W=a("g"),_n=a("g"),Ae=a("path"),J=a("g"),xe=a("path"),ve=a("path"),ge=a("path"),kn=a("path"),Yt=a("path"),pe=a("path"),xn=a("path"),bt=a("g"),Jn=a("g"),qe=a("path"),vn=a("g"),jt=a("g"),Yn=a("defs"),tt=a("path"),Xn=a("path"),Rn=a("path"),aa=a("use"),sa=a("use"),Nr=a("use"),Mt=a("g"),Zn=a("g"),me=a("path"),er=a("g"),Te=a("g"),va=a("defs"),Xt=a("path"),Fa=a("use"),En=a("use"),mr=a("use"),Zt=a("g"),en=a("g"),nt=a("path"),tn=a("g"),Nn=a("g"),wn=a("use"),Gr=a("use"),Dt=a("g"),yn=a("g"),tr=a("path"),Ea=a("g"),Qn=a("g"),bn=a("use"),Gn=a("g"),rt=a("g"),Cn=a("path"),Fn=a("g"),wa=a("g"),nn=a("use"),Cr=a("g"),Ee=a("g"),$r=a("path"),Lr=a("g"),nr=a("g"),ya=a("use"),te=a("use"),Fr=a("g"),at=a("g"),we=a("path"),Hn=a("g"),St=a("g"),_r=a("use"),rn=a("use"),ae=a("g"),ye=a("g"),jn=a("path"),se=a("g"),Qe=a("path"),Pe=a("path"),Vt=a("path"),Re=a("path"),oe=a("path"),an=a("g"),rr=a("g"),st=a("path"),kr=a("g"),ot=a("g"),oa=a("defs"),Ne=a("path"),xr=a("use"),zt=a("use"),Hr=a("use"),Mn=a("g"),sn=a("g"),ar=a("path"),Br=a("g"),be=a("g"),vr=a("use"),on=a("use"),ln=a("use"),ia=a("g"),un=a("g"),Ge=a("path"),sr=a("g"),la=a("g"),It=a("use"),ua=a("g"),it=a("g"),Er=a("path"),lt=a("g"),Wr=a("g"),Dn=a("use"),Qa=a("use"),Ce=a("g"),ha=a("g"),$e=a("path"),Ha=a("g"),wr=a("g"),or=a("use"),hn=a("use"),Le=a("g"),Sn=a("g"),fn=a("path"),je=a("g"),Fe=a("path"),Or=a("path"),He=a("path"),Be=a("path"),Ur=a("path"),We=a("path"),ir=a("path"),At=a("g"),yr=a("g"),qt=a("path"),ut=a("g"),ba=a("g"),Qr=a("use"),ie=a("use"),br=a("g"),Tt=a("g"),Me=a("path"),_e=a("g"),Oe=a("g"),lr=a("use"),De=a("use"),Vn=a("g"),Ue=a("g"),Pt=a("path"),Ke=a("g"),ur=a("g"),Bn=a("use"),dn=a("use"),zn=a("g"),Kr=a("g"),cn=a("path"),Jr=a("g"),Rt=a("g"),jr=a("use"),Nt=a("use"),ht=a("g"),ja=a("g"),Gt=a("path"),Yr=a("g"),ft=a("g"),Mr=a("defs"),dt=a("path"),gn=a("use"),fa=a("use"),da=a("g"),Ct=a("g"),Dr=a("path"),ct=a("g"),Sr=a("g"),In=a("use"),Vr=a("use"),pn=a("g"),gt=a("g"),zr=a("path"),pt=a("g"),Ft=a("g"),Ma=a("defs"),mt=a("path"),Da=a("use"),Se=a("use"),$t=a("g"),Lt=a("g"),Je=a("path"),C=a("g"),fe=a("path"),Ir=a("g"),O=a("g"),Ye=a("defs"),_t=a("path"),Ar=a("path"),Xe=a("path"),qr=a("path"),kt=a("path"),ca=a("path"),Ht=a("path"),xt=a("path"),ga=a("path"),Ze=a("path"),Sa=a("use"),mn=a("use"),pa=a("use"),m=a("use"),d=a("use"),vt=a("use"),$n=a("use"),hr=a("use"),Et=a("use"),Tr=a("use"),Bt=a("use"),Wn=a("use"),Y=a("use"),de=a("use"),fr=a("use"),dr=a("use"),cr=a("use"),Wt=a("use"),Ot=a("g"),Ut=a("g"),wt=a("path"),Ve=a("g"),yt=a("path"),le=a("g"),ne=a("g"),Kt=a("defs"),An=a("path"),qn=a("path"),Tn=a("path"),On=a("path"),Pr=a("use"),Un=a("use"),Va=a("use"),za=a("use"),Ia=a("use"),Aa=a("use"),qa=a("use"),Ta=a("use"),Pa=a("use"),gr=a("g"),pr=a("path"),et=a("g"),ke=a("g"),Rr=a("defs"),Pn=a("path"),Xr=a("path"),Kn=a("path"),Ra=a("path"),Zr=a("use"),Na=a("use"),Qt=a("use"),ea=a("use"),ma=a("use"),$a=a("use"),La=a("use"),_a=a("use"),Ba=a("use"),Wa=a("use"),Oa=a("defs"),ta=a("clipPath"),ka=a("rect"),this.h()},l(Ga){o=s(Ga,"svg",{"xmlns:xlink":!0,width:!0,height:!0,viewBox:!0,xmlns:!0,version:!0});var Xa=r(o);i=s(Xa,"metadata",{});var _s=r(i);h=s(_s,"rdf:RDF",{"xmlns:dc":!0,"xmlns:cc":!0,"xmlns:rdf":!0});var ss=r(h);f=s(ss,"cc:Work",{});var os=r(f);u=s(os,"dc:type",{"rdf:resource":!0}),r(u).forEach(e),c=s(os,"dc:date",{});var rs=r(c);g=_(rs,"2024-02-22T08:09:56.757681"),rs.forEach(e),k=s(os,"dc:format",{});var ks=r(k);v=_(ks,"image/svg+xml"),ks.forEach(e),w=s(os,"dc:creator",{});var na=r(w);S=s(na,"cc:Agent",{});var ds=r(S);Q=s(ds,"dc:title",{});var $s=r(Q);z=_($s,"Matplotlib v3.5.1, https://matplotlib.org/"),$s.forEach(e),ds.forEach(e),na.forEach(e),os.forEach(e),ss.forEach(e),_s.forEach(e),P=s(Xa,"defs",{});var Ls=r(P);I=s(Ls,"style",{type:!0});var xa=r(I);U=_(xa,`* {
				stroke-linejoin: round;
				stroke-linecap: butt;
			}
		`),xa.forEach(e),Ls.forEach(e),A=s(Xa,"g",{id:!0});var Ua=r(A);F=s(Ua,"g",{id:!0});var Ks=r(F);Z=s(Ks,"path",{d:!0,style:!0}),r(Z).forEach(e),Ks.forEach(e),re=s(Ua,"g",{id:!0});var Vs=r(re);ee=s(Vs,"path",{d:!0,style:!0}),r(ee).forEach(e),Vs.forEach(e),Ie=s(Ua,"g",{id:!0});var zs=r(Ie);ue=s(zs,"g",{id:!0});var Is=r(ue);H=s(Is,"path",{d:!0,style:!0}),r(H).forEach(e),Is.forEach(e),zs.forEach(e),B=s(Ua,"g",{id:!0});var As=r(B);ce=s(As,"g",{id:!0});var qs=r(ce);V=s(qs,"path",{d:!0,style:!0}),r(V).forEach(e),qs.forEach(e),As.forEach(e),G=s(Ua,"g",{id:!0});var Ts=r(G);Jt=s(Ts,"g",{id:!0});var Za=r(Jt);K=s(Za,"path",{d:!0,style:!0}),r(K).forEach(e),Za.forEach(e),Ts.forEach(e),W=s(Ua,"g",{id:!0});var es=r(W);_n=s(es,"g",{id:!0});var is=r(_n);Ae=s(is,"path",{d:!0,style:!0}),r(Ae).forEach(e),is.forEach(e),J=s(es,"g",{id:!0});var ls=r(J);xe=s(ls,"path",{d:!0,style:!0}),r(xe).forEach(e),ve=s(ls,"path",{d:!0,style:!0}),r(ve).forEach(e),ge=s(ls,"path",{d:!0,style:!0}),r(ge).forEach(e),kn=s(ls,"path",{d:!0,style:!0}),r(kn).forEach(e),Yt=s(ls,"path",{d:!0,style:!0}),r(Yt).forEach(e),pe=s(ls,"path",{d:!0,style:!0}),r(pe).forEach(e),xn=s(ls,"path",{d:!0,style:!0}),r(xn).forEach(e),ls.forEach(e),bt=s(es,"g",{id:!0});var js=r(bt);Jn=s(js,"g",{id:!0});var ws=r(Jn);qe=s(ws,"path",{d:!0,style:!0}),r(qe).forEach(e),ws.forEach(e),vn=s(js,"g",{id:!0});var ys=r(vn);jt=s(ys,"g",{transform:!0});var us=r(jt);Yn=s(us,"defs",{});var Js=r(Yn);tt=s(Js,"path",{id:!0,d:!0,transform:!0}),r(tt).forEach(e),Xn=s(Js,"path",{id:!0,d:!0,transform:!0}),r(Xn).forEach(e),Rn=s(Js,"path",{id:!0,d:!0,transform:!0}),r(Rn).forEach(e),Js.forEach(e),aa=s(us,"use",{"xlink:href":!0}),r(aa).forEach(e),sa=s(us,"use",{"xlink:href":!0,x:!0}),r(sa).forEach(e),Nr=s(us,"use",{"xlink:href":!0,x:!0}),r(Nr).forEach(e),us.forEach(e),ys.forEach(e),js.forEach(e),Mt=s(es,"g",{id:!0});var bo=r(Mt);Zn=s(bo,"g",{id:!0});var Ys=r(Zn);me=s(Ys,"path",{d:!0,style:!0}),r(me).forEach(e),Ys.forEach(e),er=s(bo,"g",{id:!0});var fo=r(er);Te=s(fo,"g",{transform:!0});var Xs=r(Te);va=s(Xs,"defs",{});var jo=r(va);Xt=s(jo,"path",{id:!0,d:!0,transform:!0}),r(Xt).forEach(e),jo.forEach(e),Fa=s(Xs,"use",{"xlink:href":!0}),r(Fa).forEach(e),En=s(Xs,"use",{"xlink:href":!0,x:!0}),r(En).forEach(e),mr=s(Xs,"use",{"xlink:href":!0,x:!0}),r(mr).forEach(e),Xs.forEach(e),fo.forEach(e),bo.forEach(e),Zt=s(es,"g",{id:!0});var Mo=r(Zt);en=s(Mo,"g",{id:!0});var r2=r(en);nt=s(r2,"path",{d:!0,style:!0}),r(nt).forEach(e),r2.forEach(e),tn=s(Mo,"g",{id:!0});var a2=r(tn);Nn=s(a2,"g",{transform:!0});var co=r(Nn);wn=s(co,"use",{"xlink:href":!0}),r(wn).forEach(e),Gr=s(co,"use",{"xlink:href":!0,x:!0}),r(Gr).forEach(e),co.forEach(e),a2.forEach(e),Mo.forEach(e),Dt=s(es,"g",{id:!0});var cs=r(Dt);yn=s(cs,"g",{id:!0});var s2=r(yn);tr=s(s2,"path",{d:!0,style:!0}),r(tr).forEach(e),s2.forEach(e),Ea=s(cs,"g",{id:!0});var o2=r(Ea);Qn=s(o2,"g",{transform:!0});var Do=r(Qn);bn=s(Do,"use",{"xlink:href":!0}),r(bn).forEach(e),Do.forEach(e),o2.forEach(e),cs.forEach(e),Gn=s(es,"g",{id:!0});var So=r(Gn);rt=s(So,"g",{id:!0});var i2=r(rt);Cn=s(i2,"path",{d:!0,style:!0}),r(Cn).forEach(e),i2.forEach(e),Fn=s(So,"g",{id:!0});var Vo=r(Fn);wa=s(Vo,"g",{transform:!0});var zo=r(wa);nn=s(zo,"use",{"xlink:href":!0}),r(nn).forEach(e),zo.forEach(e),Vo.forEach(e),So.forEach(e),Cr=s(es,"g",{id:!0});var Io=r(Cr);Ee=s(Io,"g",{id:!0});var xs=r(Ee);$r=s(xs,"path",{d:!0,style:!0}),r($r).forEach(e),xs.forEach(e),Lr=s(Io,"g",{id:!0});var Ao=r(Lr);nr=s(Ao,"g",{transform:!0});var vs=r(nr);ya=s(vs,"use",{"xlink:href":!0}),r(ya).forEach(e),te=s(vs,"use",{"xlink:href":!0,x:!0}),r(te).forEach(e),vs.forEach(e),Ao.forEach(e),Io.forEach(e),Fr=s(es,"g",{id:!0});var go=r(Fr);at=s(go,"g",{id:!0});var l2=r(at);we=s(l2,"path",{d:!0,style:!0}),r(we).forEach(e),l2.forEach(e),Hn=s(go,"g",{id:!0});var po=r(Hn);St=s(po,"g",{transform:!0});var Ps=r(St);_r=s(Ps,"use",{"xlink:href":!0}),r(_r).forEach(e),rn=s(Ps,"use",{"xlink:href":!0,x:!0}),r(rn).forEach(e),Ps.forEach(e),po.forEach(e),go.forEach(e),es.forEach(e),ae=s(Ua,"g",{id:!0});var ra=r(ae);ye=s(ra,"g",{id:!0});var qo=r(ye);jn=s(qo,"path",{d:!0,style:!0}),r(jn).forEach(e),qo.forEach(e),se=s(ra,"g",{id:!0});var as=r(se);Qe=s(as,"path",{d:!0,style:!0}),r(Qe).forEach(e),Pe=s(as,"path",{d:!0,style:!0}),r(Pe).forEach(e),Vt=s(as,"path",{d:!0,style:!0}),r(Vt).forEach(e),Re=s(as,"path",{d:!0,style:!0}),r(Re).forEach(e),oe=s(as,"path",{d:!0,style:!0}),r(oe).forEach(e),as.forEach(e),an=s(ra,"g",{id:!0});var mo=r(an);rr=s(mo,"g",{id:!0});var Zs=r(rr);st=s(Zs,"path",{d:!0,style:!0}),r(st).forEach(e),Zs.forEach(e),kr=s(mo,"g",{id:!0});var u2=r(kr);ot=s(u2,"g",{transform:!0});var Qs=r(ot);oa=s(Qs,"defs",{});var To=r(oa);Ne=s(To,"path",{id:!0,d:!0,transform:!0}),r(Ne).forEach(e),To.forEach(e),xr=s(Qs,"use",{"xlink:href":!0}),r(xr).forEach(e),zt=s(Qs,"use",{"xlink:href":!0,x:!0}),r(zt).forEach(e),Hr=s(Qs,"use",{"xlink:href":!0,x:!0}),r(Hr).forEach(e),Qs.forEach(e),u2.forEach(e),mo.forEach(e),Mn=s(ra,"g",{id:!0});var Po=r(Mn);sn=s(Po,"g",{id:!0});var Ro=r(sn);ar=s(Ro,"path",{d:!0,style:!0}),r(ar).forEach(e),Ro.forEach(e),Br=s(Po,"g",{id:!0});var $o=r(Br);be=s($o,"g",{transform:!0});var eo=r(be);vr=s(eo,"use",{"xlink:href":!0}),r(vr).forEach(e),on=s(eo,"use",{"xlink:href":!0,x:!0}),r(on).forEach(e),ln=s(eo,"use",{"xlink:href":!0,x:!0}),r(ln).forEach(e),eo.forEach(e),$o.forEach(e),Po.forEach(e),ia=s(ra,"g",{id:!0});var No=r(ia);un=s(No,"g",{id:!0});var h2=r(un);Ge=s(h2,"path",{d:!0,style:!0}),r(Ge).forEach(e),h2.forEach(e),sr=s(No,"g",{id:!0});var Go=r(sr);la=s(Go,"g",{transform:!0});var Co=r(la);It=s(Co,"use",{"xlink:href":!0}),r(It).forEach(e),Co.forEach(e),Go.forEach(e),No.forEach(e),ua=s(ra,"g",{id:!0});var Fo=r(ua);it=s(Fo,"g",{id:!0});var f2=r(it);Er=s(f2,"path",{d:!0,style:!0}),r(Er).forEach(e),f2.forEach(e),lt=s(Fo,"g",{id:!0});var Ho=r(lt);Wr=s(Ho,"g",{transform:!0});var Lo=r(Wr);Dn=s(Lo,"use",{"xlink:href":!0}),r(Dn).forEach(e),Qa=s(Lo,"use",{"xlink:href":!0,x:!0}),r(Qa).forEach(e),Lo.forEach(e),Ho.forEach(e),Fo.forEach(e),Ce=s(ra,"g",{id:!0});var Bo=r(Ce);ha=s(Bo,"g",{id:!0});var Wo=r(ha);$e=s(Wo,"path",{d:!0,style:!0}),r($e).forEach(e),Wo.forEach(e),Ha=s(Bo,"g",{id:!0});var hs=r(Ha);wr=s(hs,"g",{transform:!0});var _o=r(wr);or=s(_o,"use",{"xlink:href":!0}),r(or).forEach(e),hn=s(_o,"use",{"xlink:href":!0,x:!0}),r(hn).forEach(e),_o.forEach(e),hs.forEach(e),Bo.forEach(e),ra.forEach(e),Le=s(Ua,"g",{id:!0});var Ca=r(Le);Sn=s(Ca,"g",{id:!0});var Oo=r(Sn);fn=s(Oo,"path",{d:!0,style:!0}),r(fn).forEach(e),Oo.forEach(e),je=s(Ca,"g",{id:!0});var Es=r(je);Fe=s(Es,"path",{d:!0,style:!0}),r(Fe).forEach(e),Or=s(Es,"path",{d:!0,style:!0}),r(Or).forEach(e),He=s(Es,"path",{d:!0,style:!0}),r(He).forEach(e),Be=s(Es,"path",{d:!0,style:!0}),r(Be).forEach(e),Ur=s(Es,"path",{d:!0,style:!0}),r(Ur).forEach(e),We=s(Es,"path",{d:!0,style:!0}),r(We).forEach(e),ir=s(Es,"path",{d:!0,style:!0}),r(ir).forEach(e),Es.forEach(e),At=s(Ca,"g",{id:!0});var ko=r(At);yr=s(ko,"g",{id:!0});var to=r(yr);qt=s(to,"path",{d:!0,style:!0}),r(qt).forEach(e),to.forEach(e),ut=s(ko,"g",{id:!0});var d2=r(ut);ba=s(d2,"g",{transform:!0});var no=r(ba);Qr=s(no,"use",{"xlink:href":!0}),r(Qr).forEach(e),ie=s(no,"use",{"xlink:href":!0,x:!0}),r(ie).forEach(e),no.forEach(e),d2.forEach(e),ko.forEach(e),br=s(Ca,"g",{id:!0});var xo=r(br);Tt=s(xo,"g",{id:!0});var c2=r(Tt);Me=s(c2,"path",{d:!0,style:!0}),r(Me).forEach(e),c2.forEach(e),_e=s(xo,"g",{id:!0});var vo=r(_e);Oe=s(vo,"g",{transform:!0});var ro=r(Oe);lr=s(ro,"use",{"xlink:href":!0}),r(lr).forEach(e),De=s(ro,"use",{"xlink:href":!0,x:!0}),r(De).forEach(e),ro.forEach(e),vo.forEach(e),xo.forEach(e),Vn=s(Ca,"g",{id:!0});var bs=r(Vn);Ue=s(bs,"g",{id:!0});var g2=r(Ue);Pt=s(g2,"path",{d:!0,style:!0}),r(Pt).forEach(e),g2.forEach(e),Ke=s(bs,"g",{id:!0});var Ms=r(Ke);ur=s(Ms,"g",{transform:!0});var ao=r(ur);Bn=s(ao,"use",{"xlink:href":!0}),r(Bn).forEach(e),dn=s(ao,"use",{"xlink:href":!0,x:!0}),r(dn).forEach(e),ao.forEach(e),Ms.forEach(e),bs.forEach(e),zn=s(Ca,"g",{id:!0});var Uo=r(zn);Kr=s(Uo,"g",{id:!0});var p2=r(Kr);cn=s(p2,"path",{d:!0,style:!0}),r(cn).forEach(e),p2.forEach(e),Jr=s(Uo,"g",{id:!0});var so=r(Jr);Rt=s(so,"g",{transform:!0});var oo=r(Rt);jr=s(oo,"use",{"xlink:href":!0}),r(jr).forEach(e),Nt=s(oo,"use",{"xlink:href":!0,x:!0}),r(Nt).forEach(e),oo.forEach(e),so.forEach(e),Uo.forEach(e),ht=s(Ca,"g",{id:!0});var Ko=r(ht);ja=s(Ko,"g",{id:!0});var m2=r(ja);Gt=s(m2,"path",{d:!0,style:!0}),r(Gt).forEach(e),m2.forEach(e),Yr=s(Ko,"g",{id:!0});var Eo=r(Yr);ft=s(Eo,"g",{transform:!0});var Rs=r(ft);Mr=s(Rs,"defs",{});var $2=r(Mr);dt=s($2,"path",{id:!0,d:!0,transform:!0}),r(dt).forEach(e),$2.forEach(e),gn=s(Rs,"use",{"xlink:href":!0}),r(gn).forEach(e),fa=s(Rs,"use",{"xlink:href":!0,x:!0}),r(fa).forEach(e),Rs.forEach(e),Eo.forEach(e),Ko.forEach(e),da=s(Ca,"g",{id:!0});var Jo=r(da);Ct=s(Jo,"g",{id:!0});var wo=r(Ct);Dr=s(wo,"path",{d:!0,style:!0}),r(Dr).forEach(e),wo.forEach(e),ct=s(Jo,"g",{id:!0});var Yo=r(ct);Sr=s(Yo,"g",{transform:!0});var yo=r(Sr);In=s(yo,"use",{"xlink:href":!0}),r(In).forEach(e),Vr=s(yo,"use",{"xlink:href":!0,x:!0}),r(Vr).forEach(e),yo.forEach(e),Yo.forEach(e),Jo.forEach(e),pn=s(Ca,"g",{id:!0});var Xo=r(pn);gt=s(Xo,"g",{id:!0});var L2=r(gt);zr=s(L2,"path",{d:!0,style:!0}),r(zr).forEach(e),L2.forEach(e),pt=s(Xo,"g",{id:!0});var io=r(pt);Ft=s(io,"g",{transform:!0});var Qo=r(Ft);Ma=s(Qo,"defs",{});var lo=r(Ma);mt=s(lo,"path",{id:!0,d:!0,transform:!0}),r(mt).forEach(e),lo.forEach(e),Da=s(Qo,"use",{"xlink:href":!0}),r(Da).forEach(e),Se=s(Qo,"use",{"xlink:href":!0,x:!0}),r(Se).forEach(e),Qo.forEach(e),io.forEach(e),Xo.forEach(e),Ca.forEach(e),$t=s(Ua,"g",{id:!0});var Ns=r($t);Lt=s(Ns,"g",{id:!0});var gs=r(Lt);Je=s(gs,"path",{d:!0,"clip-path":!0,style:!0}),r(Je).forEach(e),gs.forEach(e),C=s(Ns,"g",{id:!0});var _2=r(C);fe=s(_2,"path",{d:!0,"clip-path":!0,style:!0}),r(fe).forEach(e),_2.forEach(e),Ir=s(Ns,"g",{id:!0});var ze=r(Ir);O=s(ze,"g",{transform:!0});var he=r(O);Ye=s(he,"defs",{});var Ka=r(Ye);_t=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(_t).forEach(e),Ar=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(Ar).forEach(e),Xe=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(Xe).forEach(e),qr=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(qr).forEach(e),kt=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(kt).forEach(e),ca=s(Ka,"path",{id:!0,transform:!0}),r(ca).forEach(e),Ht=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(Ht).forEach(e),xt=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(xt).forEach(e),ga=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(ga).forEach(e),Ze=s(Ka,"path",{id:!0,d:!0,transform:!0}),r(Ze).forEach(e),Ka.forEach(e),Sa=s(he,"use",{"xlink:href":!0}),r(Sa).forEach(e),mn=s(he,"use",{"xlink:href":!0,x:!0}),r(mn).forEach(e),pa=s(he,"use",{"xlink:href":!0,x:!0}),r(pa).forEach(e),m=s(he,"use",{"xlink:href":!0,x:!0}),r(m).forEach(e),d=s(he,"use",{"xlink:href":!0,x:!0}),r(d).forEach(e),vt=s(he,"use",{"xlink:href":!0,x:!0}),r(vt).forEach(e),$n=s(he,"use",{"xlink:href":!0,x:!0}),r($n).forEach(e),hr=s(he,"use",{"xlink:href":!0,x:!0}),r(hr).forEach(e),Et=s(he,"use",{"xlink:href":!0,x:!0}),r(Et).forEach(e),Tr=s(he,"use",{"xlink:href":!0,x:!0}),r(Tr).forEach(e),Bt=s(he,"use",{"xlink:href":!0,x:!0}),r(Bt).forEach(e),Wn=s(he,"use",{"xlink:href":!0,x:!0}),r(Wn).forEach(e),Y=s(he,"use",{"xlink:href":!0,x:!0}),r(Y).forEach(e),de=s(he,"use",{"xlink:href":!0,x:!0}),r(de).forEach(e),fr=s(he,"use",{"xlink:href":!0,x:!0}),r(fr).forEach(e),dr=s(he,"use",{"xlink:href":!0,x:!0}),r(dr).forEach(e),cr=s(he,"use",{"xlink:href":!0,x:!0}),r(cr).forEach(e),Wt=s(he,"use",{"xlink:href":!0,x:!0}),r(Wt).forEach(e),he.forEach(e),ze.forEach(e),Ot=s(Ns,"g",{id:!0});var Gs=r(Ot);Ut=s(Gs,"g",{id:!0});var k2=r(Ut);wt=s(k2,"path",{d:!0,style:!0}),r(wt).forEach(e),k2.forEach(e),Ve=s(Gs,"g",{id:!0});var Zo=r(Ve);yt=s(Zo,"path",{d:!0,style:!0}),r(yt).forEach(e),Zo.forEach(e),le=s(Gs,"g",{id:!0});var ps=r(le);ne=s(ps,"g",{transform:!0});var ts=r(ne);Kt=s(ts,"defs",{});var Cs=r(Kt);An=s(Cs,"path",{id:!0,d:!0,transform:!0}),r(An).forEach(e),qn=s(Cs,"path",{id:!0,d:!0,transform:!0}),r(qn).forEach(e),Tn=s(Cs,"path",{id:!0,d:!0,transform:!0}),r(Tn).forEach(e),On=s(Cs,"path",{id:!0,d:!0,transform:!0}),r(On).forEach(e),Cs.forEach(e),Pr=s(ts,"use",{"xlink:href":!0}),r(Pr).forEach(e),Un=s(ts,"use",{"xlink:href":!0,x:!0}),r(Un).forEach(e),Va=s(ts,"use",{"xlink:href":!0,x:!0}),r(Va).forEach(e),za=s(ts,"use",{"xlink:href":!0,x:!0}),r(za).forEach(e),Ia=s(ts,"use",{"xlink:href":!0,x:!0}),r(Ia).forEach(e),Aa=s(ts,"use",{"xlink:href":!0,x:!0}),r(Aa).forEach(e),qa=s(ts,"use",{"xlink:href":!0,x:!0}),r(qa).forEach(e),Ta=s(ts,"use",{"xlink:href":!0,x:!0}),r(Ta).forEach(e),Pa=s(ts,"use",{"xlink:href":!0,x:!0}),r(Pa).forEach(e),ts.forEach(e),ps.forEach(e),gr=s(Gs,"g",{id:!0});var e2=r(gr);pr=s(e2,"path",{d:!0,style:!0}),r(pr).forEach(e),e2.forEach(e),et=s(Gs,"g",{id:!0});var fs=r(et);ke=s(fs,"g",{transform:!0});var Ja=r(ke);Rr=s(Ja,"defs",{});var Fs=r(Rr);Pn=s(Fs,"path",{id:!0,d:!0,transform:!0}),r(Pn).forEach(e),Xr=s(Fs,"path",{id:!0,d:!0,transform:!0}),r(Xr).forEach(e),Kn=s(Fs,"path",{id:!0,d:!0,transform:!0}),r(Kn).forEach(e),Ra=s(Fs,"path",{id:!0,d:!0,transform:!0}),r(Ra).forEach(e),Fs.forEach(e),Zr=s(Ja,"use",{"xlink:href":!0}),r(Zr).forEach(e),Na=s(Ja,"use",{"xlink:href":!0,x:!0}),r(Na).forEach(e),Qt=s(Ja,"use",{"xlink:href":!0,x:!0}),r(Qt).forEach(e),ea=s(Ja,"use",{"xlink:href":!0,x:!0}),r(ea).forEach(e),ma=s(Ja,"use",{"xlink:href":!0,x:!0}),r(ma).forEach(e),$a=s(Ja,"use",{"xlink:href":!0,x:!0}),r($a).forEach(e),La=s(Ja,"use",{"xlink:href":!0,x:!0}),r(La).forEach(e),_a=s(Ja,"use",{"xlink:href":!0,x:!0}),r(_a).forEach(e),Ba=s(Ja,"use",{"xlink:href":!0,x:!0}),r(Ba).forEach(e),Wa=s(Ja,"use",{"xlink:href":!0,x:!0}),r(Wa).forEach(e),Ja.forEach(e),fs.forEach(e),Gs.forEach(e),Ns.forEach(e),Ua.forEach(e),Oa=s(Xa,"defs",{});var t2=r(Oa);ta=s(t2,"clipPath",{id:!0});var E2=r(ta);ka=s(E2,"rect",{x:!0,y:!0,width:!0,height:!0}),r(ka).forEach(e),E2.forEach(e),t2.forEach(e),Xa.forEach(e),this.h()},h(){t(u,"rdf:resource","http://purl.org/dc/dcmitype/StillImage"),t(h,"xmlns:dc","http://purl.org/dc/elements/1.1/"),t(h,"xmlns:cc","http://creativecommons.org/ns#"),t(h,"xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),t(I,"type","text/css"),t(Z,"d",`M 0 447.12 
L 727.92 447.12 
L 727.92 0 
L 0 0 
z
`),l(Z,"fill","#ffffff"),t(F,"id","patch_1"),t(ee,"d",`M 200.9178 397.9368 
L 545.2002 397.9368 
L 545.2002 53.6544 
L 200.9178 53.6544 
z
`),l(ee,"fill","#ffffff"),t(re,"id","patch_2"),t(H,"d",`M 226.913495 313.047794 
L 340.606788 217.747822 
L 339.026342 80.308226 
L 219.89224 167.246867 
`),l(H,"fill","#f2f2f2"),l(H,"opacity","0.5"),l(H,"stroke","#f2f2f2"),l(H,"stroke-linejoin","miter"),t(ue,"id","patch_3"),t(Ie,"id","pane3d_1"),t(V,"d",`M 340.606788 217.747822 
L 523.043956 270.775104 
L 529.554495 128.601559 
L 339.026342 80.308226 
`),l(V,"fill","#e6e6e6"),l(V,"opacity","0.5"),l(V,"stroke","#e6e6e6"),l(V,"stroke-linejoin","miter"),t(ce,"id","patch_4"),t(B,"id","pane3d_2"),t(K,"d",`M 226.913495 313.047794 
L 420.305804 376.209721 
L 523.043956 270.775104 
L 340.606788 217.747822 
`),l(K,"fill","#ececec"),l(K,"opacity","0.5"),l(K,"stroke","#ececec"),l(K,"stroke-linejoin","miter"),t(Jt,"id","patch_5"),t(G,"id","pane3d_3"),t(Ae,"d",`M 226.913495 313.047794 
L 420.305804 376.209721 
`),l(Ae,"fill","none"),l(Ae,"stroke","#000000"),l(Ae,"stroke-width","0.8"),l(Ae,"stroke-linecap","square"),t(_n,"id","line2d_1"),t(xe,"d",`M 250.067732 320.609967 
L 362.534433 224.121322 
L 361.883967 86.101967 
`),l(xe,"fill","none"),l(xe,"stroke","#b0b0b0"),l(xe,"stroke-width","0.8"),t(ve,"d",`M 275.455326 328.901555 
L 386.550452 231.101831 
L 386.931839 92.450873 
`),l(ve,"fill","none"),l(ve,"stroke","#b0b0b0"),l(ve,"stroke-width","0.8"),t(ge,"d",`M 301.20411 337.311108 
L 410.879696 238.173382 
L 412.320585 98.88618 
`),l(ge,"fill","none"),l(ge,"stroke","#b0b0b0"),l(ge,"stroke-width","0.8"),t(kn,"d",`M 327.321844 345.84116 
L 435.528333 245.337767 
L 438.057212 105.409664 
`),l(kn,"fill","none"),l(kn,"stroke","#b0b0b0"),l(kn,"stroke-width","0.8"),t(Yt,"d",`M 353.816518 354.49432 
L 460.502694 252.596828 
L 464.148918 112.023152 
`),l(Yt,"fill","none"),l(Yt,"stroke","#b0b0b0"),l(Yt,"stroke-width","0.8"),t(pe,"d",`M 380.696349 363.273273 
L 485.809279 259.952453 
L 490.603104 118.728517 
`),l(pe,"fill","none"),l(pe,"stroke","#b0b0b0"),l(pe,"stroke-width","0.8"),t(xn,"d",`M 407.9698 372.180782 
L 511.454761 267.406582 
L 517.427376 125.527687 
`),l(xn,"fill","none"),l(xn,"stroke","#b0b0b0"),l(xn,"stroke-width","0.8"),t(J,"id","Line3DCollection_1"),t(qe,"d",`M 251.047339 319.769531 
L 248.104299 322.294456 
`),l(qe,"fill","none"),l(qe,"stroke","#000000"),l(qe,"stroke-width","0.8"),l(qe,"stroke-linecap","square"),t(Jn,"id","line2d_2"),t(tt,"id","DejaVuSans-2212"),t(tt,"d",`M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
`),t(tt,"transform","scale(0.015625)"),t(Xn,"id","DejaVuSans-31"),t(Xn,"d",`M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
`),t(Xn,"transform","scale(0.015625)"),t(Rn,"id","DejaVuSans-35"),t(Rn,"d",`M 691 4666 
L 3169 4666 
L 3169 4134 
L 1269 4134 
L 1269 2991 
Q 1406 3038 1543 3061 
Q 1681 3084 1819 3084 
Q 2600 3084 3056 2656 
Q 3513 2228 3513 1497 
Q 3513 744 3044 326 
Q 2575 -91 1722 -91 
Q 1428 -91 1123 -41 
Q 819 9 494 109 
L 494 744 
Q 775 591 1075 516 
Q 1375 441 1709 441 
Q 2250 441 2565 725 
Q 2881 1009 2881 1497 
Q 2881 1984 2565 2268 
Q 2250 2553 1709 2553 
Q 1456 2553 1204 2497 
Q 953 2441 691 2322 
L 691 4666 
z
`),t(Rn,"transform","scale(0.015625)"),$(aa,"xlink:href","#DejaVuSans-2212"),$(sa,"xlink:href","#DejaVuSans-31"),t(sa,"x","83.789062"),$(Nr,"xlink:href","#DejaVuSans-35"),t(Nr,"x","147.412109"),t(jt,"transform","translate(232.001547 343.966901)scale(0.1 -0.1)"),t(vn,"id","text_1"),t(bt,"id","xtick_1"),t(me,"d",`M 276.423544 328.04921 
L 273.514693 330.609942 
`),l(me,"fill","none"),l(me,"stroke","#000000"),l(me,"stroke-width","0.8"),l(me,"stroke-linecap","square"),t(Zn,"id","line2d_3"),t(Xt,"id","DejaVuSans-30"),t(Xt,"d",`M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
`),t(Xt,"transform","scale(0.015625)"),$(Fa,"xlink:href","#DejaVuSans-2212"),$(En,"xlink:href","#DejaVuSans-31"),t(En,"x","83.789062"),$(mr,"xlink:href","#DejaVuSans-30"),t(mr,"x","147.412109"),t(Te,"transform","translate(257.409551 352.394167)scale(0.1 -0.1)"),t(er,"id","text_2"),t(Mt,"id","xtick_2"),t(nt,"d",`M 302.160514 336.446597 
L 299.287126 339.043904 
`),l(nt,"fill","none"),l(nt,"stroke","#000000"),l(nt,"stroke-width","0.8"),l(nt,"stroke-linecap","square"),t(en,"id","line2d_4"),$(wn,"xlink:href","#DejaVuSans-2212"),$(Gr,"xlink:href","#DejaVuSans-35"),t(Gr,"x","83.789062"),t(Nn,"transform","translate(286.361339 360.941678)scale(0.1 -0.1)"),t(tn,"id","text_3"),t(Zt,"id","xtick_3"),t(tr,"d",`M 328.265995 344.964222 
L 325.42939 347.598892 
`),l(tr,"fill","none"),l(tr,"stroke","#000000"),l(tr,"stroke-width","0.8"),l(tr,"stroke-linecap","square"),t(yn,"id","line2d_5"),$(bn,"xlink:href","#DejaVuSans-30"),t(Qn,"transform","translate(316.69207 369.612026)scale(0.1 -0.1)"),t(Ea,"id","text_4"),t(Dt,"id","xtick_4"),t(Cn,"d",`M 354.747961 353.604685 
L 351.949505 356.277531 
`),l(Cn,"fill","none"),l(Cn,"stroke","#000000"),l(Cn,"stroke-width","0.8"),l(Cn,"stroke-linecap","square"),t(rt,"id","line2d_6"),$(nn,"xlink:href","#DejaVuSans-35"),t(wa,"transform","translate(343.211349 378.407877)scale(0.1 -0.1)"),t(Fn,"id","text_5"),t(Gn,"id","xtick_5"),t($r,"d",`M 381.614615 362.370663 
L 378.855721 365.082521 
`),l($r,"fill","none"),l($r,"stroke","#000000"),l($r,"stroke-width","0.8"),l($r,"stroke-linecap","square"),t(Ee,"id","line2d_7"),$(ya,"xlink:href","#DejaVuSans-31"),$(te,"xlink:href","#DejaVuSans-30"),t(te,"x","63.623047"),t(nr,"transform","translate(366.936044 387.331977)scale(0.1 -0.1)"),t(Lr,"id","text_6"),t(Cr,"id","xtick_6"),t(we,"d",`M 408.874401 371.264911 
L 406.156532 374.01664 
`),l(we,"fill","none"),l(we,"stroke","#000000"),l(we,"stroke-width","0.8"),l(we,"stroke-linecap","square"),t(at,"id","line2d_8"),$(_r,"xlink:href","#DejaVuSans-31"),$(rn,"xlink:href","#DejaVuSans-35"),t(rn,"x","63.623047"),t(St,"transform","translate(394.237175 396.387152)scale(0.1 -0.1)"),t(Hn,"id","text_7"),t(Fr,"id","xtick_7"),t(W,"id","axis3d_1"),t(jn,"d",`M 523.043956 270.775104 
L 420.305804 376.209721 
`),l(jn,"fill","none"),l(jn,"stroke","#000000"),l(jn,"stroke-width","0.8"),l(jn,"stroke-linecap","square"),t(ye,"id","line2d_9"),t(Qe,"d",`M 235.984544 155.503436 
L 242.220503 300.217156 
L 434.190807 361.960292 
`),l(Qe,"fill","none"),l(Qe,"stroke","#b0b0b0"),l(Qe,"stroke-width","0.8"),t(Pe,"d",`M 262.259007 136.32953 
L 267.246514 279.239858 
L 456.856351 338.699869 
`),l(Pe,"fill","none"),l(Pe,"stroke","#b0b0b0"),l(Pe,"stroke-width","0.8"),t(Vt,"d",`M 287.553322 117.870892 
L 291.378558 259.011899 
L 478.670538 316.313147 
`),l(Vt,"fill","none"),l(Vt,"stroke","#b0b0b0"),l(Vt,"stroke-width","0.8"),t(Re,"d",`M 311.921329 100.08823 
L 314.663697 239.493835 
L 499.680452 294.751806 
`),l(Re,"fill","none"),l(Re,"stroke","#b0b0b0"),l(Re,"stroke-width","0.8"),t(oe,"d",`M 335.412997 82.94508 
L 337.145744 220.648937 
L 519.929768 273.971027 
`),l(oe,"fill","none"),l(oe,"stroke","#b0b0b0"),l(oe,"stroke-width","0.8"),t(se,"id","Line3DCollection_2"),t(st,"d",`M 432.573534 361.440131 
L 437.429513 363.001952 
`),l(st,"fill","none"),l(st,"stroke","#000000"),l(st,"stroke-width","0.8"),l(st,"stroke-linecap","square"),t(rr,"id","line2d_10"),t(Ne,"id","DejaVuSans-32"),t(Ne,"d",`M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
`),t(Ne,"transform","scale(0.015625)"),$(xr,"xlink:href","#DejaVuSans-2212"),$(zt,"xlink:href","#DejaVuSans-32"),t(zt,"x","83.789062"),$(Hr,"xlink:href","#DejaVuSans-30"),t(Hr,"x","147.412109"),t(ot,"transform","translate(436.447152 382.900597)scale(0.1 -0.1)"),t(kr,"id","text_8"),t(an,"id","xtick_8"),t(ar,"d",`M 455.260504 338.199425 
L 460.05207 339.702019 
`),l(ar,"fill","none"),l(ar,"stroke","#000000"),l(ar,"stroke-width","0.8"),l(ar,"stroke-linecap","square"),t(sn,"id","line2d_11"),$(vr,"xlink:href","#DejaVuSans-2212"),$(on,"xlink:href","#DejaVuSans-31"),t(on,"x","83.789062"),$(ln,"xlink:href","#DejaVuSans-30"),t(ln,"x","147.412109"),t(be,"transform","translate(458.877652 359.374193)scale(0.1 -0.1)"),t(Br,"id","text_9"),t(Mn,"id","xtick_9"),t(Ge,"d",`M 477.095663 315.83132 
L 481.824184 317.277992 
`),l(Ge,"fill","none"),l(Ge,"stroke","#000000"),l(Ge,"stroke-width","0.8"),l(Ge,"stroke-linecap","square"),t(un,"id","line2d_12"),$(It,"xlink:href","#DejaVuSans-30"),t(la,"transform","translate(487.836344 336.731872)scale(0.1 -0.1)"),t(sr,"id","text_10"),t(ia,"id","xtick_10"),t(Er,"d",`M 498.126102 294.287577 
L 502.792927 295.681392 
`),l(Er,"fill","none"),l(Er,"stroke","#000000"),l(Er,"stroke-width","0.8"),l(Er,"stroke-linecap","square"),t(it,"id","line2d_13"),$(Dn,"xlink:href","#DejaVuSans-31"),$(Qa,"xlink:href","#DejaVuSans-30"),t(Qa,"x","63.623047"),t(Wr,"transform","translate(505.446429 314.92472)scale(0.1 -0.1)"),t(lt,"id","text_11"),t(ua,"id","xtick_11"),t($e,"d",`M 518.395502 273.523448 
L 523.001958 274.867252 
`),l($e,"fill","none"),l($e,"stroke","#000000"),l($e,"stroke-width","0.8"),l($e,"stroke-linecap","square"),t(ha,"id","line2d_14"),$(or,"xlink:href","#DejaVuSans-32"),$(hn,"xlink:href","#DejaVuSans-30"),t(hn,"x","63.623047"),t(wr,"transform","translate(525.484756 293.907364)scale(0.1 -0.1)"),t(Ha,"id","text_12"),t(Ce,"id","xtick_12"),t(ae,"id","axis3d_2"),t(fn,"d",`M 523.043956 270.775104 
L 529.554495 128.601559 
`),l(fn,"fill","none"),l(fn,"stroke","#000000"),l(fn,"stroke-width","0.8"),l(fn,"stroke-linecap","square"),t(Sn,"id","line2d_15"),t(Fe,"d",`M 523.708222 256.269223 
L 340.44523 203.698337 
L 226.198205 298.194321 
`),l(Fe,"fill","none"),l(Fe,"stroke","#b0b0b0"),l(Fe,"stroke-width","0.8"),t(Or,"d",`M 524.536119 238.190076 
L 340.243973 186.19649 
L 225.306371 279.67481 
`),l(Or,"fill","none"),l(Or,"stroke","#b0b0b0"),l(Or,"stroke-width","0.8"),t(He,"d",`M 525.373458 219.904719 
L 340.04053 168.504577 
L 224.403976 260.935989 
`),l(He,"fill","none"),l(He,"stroke","#b0b0b0"),l(He,"stroke-width","0.8"),t(Be,"d",`M 526.220403 201.409603 
L 339.834865 150.619487 
L 223.490831 241.97394 
`),l(Be,"fill","none"),l(Be,"stroke","#b0b0b0"),l(Be,"stroke-width","0.8"),t(Ur,"d",`M 527.07712 182.701098 
L 339.626943 132.538037 
L 222.566742 222.78465 
`),l(Ur,"fill","none"),l(Ur,"stroke","#b0b0b0"),l(Ur,"stroke-width","0.8"),t(We,"d",`M 527.943779 163.77549 
L 339.416726 114.256977 
L 221.631513 203.36401 
`),l(We,"fill","none"),l(We,"stroke","#b0b0b0"),l(We,"stroke-width","0.8"),t(ir,"d",`M 528.820553 144.628977 
L 339.204174 95.772982 
L 220.68494 183.707811 
`),l(ir,"fill","none"),l(ir,"stroke","#b0b0b0"),l(ir,"stroke-width","0.8"),t(je,"id","Line3DCollection_3"),t(qt,"d",`M 522.169812 255.827914 
L 526.788718 257.152895 
`),l(qt,"fill","none"),l(qt,"stroke","#000000"),l(qt,"stroke-width","0.8"),l(qt,"stroke-linecap","square"),t(yr,"id","line2d_16"),$(Qr,"xlink:href","#DejaVuSans-31"),$(ie,"xlink:href","#DejaVuSans-30"),t(ie,"x","63.623047"),t(ba,"transform","translate(535.688516 261.282795)scale(0.1 -0.1)"),t(ut,"id","text_13"),t(At,"id","xtick_13"),t(Me,"d",`M 522.988657 237.753497 
L 527.63476 239.064283 
`),l(Me,"fill","none"),l(Me,"stroke","#000000"),l(Me,"stroke-width","0.8"),l(Me,"stroke-linecap","square"),t(Tt,"id","line2d_17"),$(lr,"xlink:href","#DejaVuSans-31"),$(De,"xlink:href","#DejaVuSans-35"),t(De,"x","63.623047"),t(Oe,"transform","translate(536.618245 243.23138)scale(0.1 -0.1)"),t(_e,"id","text_14"),t(br,"id","xtick_14"),t(Pt,"d",`M 523.816838 219.473006 
L 528.49046 220.769186 
`),l(Pt,"fill","none"),l(Pt,"stroke","#000000"),l(Pt,"stroke-width","0.8"),l(Pt,"stroke-linecap","square"),t(Ue,"id","line2d_18"),$(Bn,"xlink:href","#DejaVuSans-32"),$(dn,"xlink:href","#DejaVuSans-30"),t(dn,"x","63.623047"),t(ur,"transform","translate(537.558553 224.974556)scale(0.1 -0.1)"),t(Ke,"id","text_15"),t(Vn,"id","xtick_15"),t(cn,"d",`M 524.654516 200.982898 
L 529.355984 202.264049 
`),l(cn,"fill","none"),l(cn,"stroke","#000000"),l(cn,"stroke-width","0.8"),l(cn,"stroke-linecap","square"),t(Kr,"id","line2d_19"),$(jr,"xlink:href","#DejaVuSans-32"),$(Nt,"xlink:href","#DejaVuSans-35"),t(Nt,"x","63.623047"),t(Rt,"transform","translate(538.509623 206.508797)scale(0.1 -0.1)"),t(Jr,"id","text_16"),t(zn,"id","xtick_16"),t(Gt,"d",`M 525.501855 182.279545 
L 530.231502 183.545234 
`),l(Gt,"fill","none"),l(Gt,"stroke","#000000"),l(Gt,"stroke-width","0.8"),l(Gt,"stroke-linecap","square"),t(ja,"id","line2d_20"),t(dt,"id","DejaVuSans-33"),t(dt,"d",`M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
`),t(dt,"transform","scale(0.015625)"),$(gn,"xlink:href","#DejaVuSans-33"),$(fa,"xlink:href","#DejaVuSans-30"),t(fa,"x","63.623047"),t(ft,"transform","translate(539.471639 187.830496)scale(0.1 -0.1)"),t(Yr,"id","text_17"),t(ht,"id","xtick_17"),t(Dr,"d",`M 526.359022 163.359237 
L 531.117188 164.609017 
`),l(Dr,"fill","none"),l(Dr,"stroke","#000000"),l(Dr,"stroke-width","0.8"),l(Dr,"stroke-linecap","square"),t(Ct,"id","line2d_21"),$(In,"xlink:href","#DejaVuSans-33"),$(Vr,"xlink:href","#DejaVuSans-35"),t(Vr,"x","63.623047"),t(Sr,"transform","translate(540.444793 168.935962)scale(0.1 -0.1)"),t(ct,"id","text_18"),t(da,"id","xtick_18"),t(zr,"d",`M 527.226191 144.218178 
L 532.013221 145.45159 
`),l(zr,"fill","none"),l(zr,"stroke","#000000"),l(zr,"stroke-width","0.8"),l(zr,"stroke-linecap","square"),t(gt,"id","line2d_22"),t(mt,"id","DejaVuSans-34"),t(mt,"d",`M 2419 4116 
L 825 1625 
L 2419 1625 
L 2419 4116 
z
M 2253 4666 
L 3047 4666 
L 3047 1625 
L 3713 1625 
L 3713 1100 
L 3047 1100 
L 3047 0 
L 2419 0 
L 2419 1100 
L 313 1100 
L 313 1709 
L 2253 4666 
z
`),t(mt,"transform","scale(0.015625)"),$(Da,"xlink:href","#DejaVuSans-34"),$(Se,"xlink:href","#DejaVuSans-30"),t(Se,"x","63.623047"),t(Ft,"transform","translate(541.429278 149.821418)scale(0.1 -0.1)"),t(pt,"id","text_19"),t(pn,"id","xtick_19"),t(Le,"id","axis3d_3"),t(Je,"d",`M 423.472791 252.497348 
L 427.362383 252.04936 
L 431.731545 251.11679 
L 436.599515 249.619968 
L 441.986336 247.479122 
L 447.905901 244.615919 
L 454.357426 240.931827 
L 461.264117 236.353221 
L 468.510453 230.8323 
L 475.952512 224.319074 
L 483.298746 216.913107 
L 490.212354 208.777369 
L 496.261909 200.163977 
L 500.96169 191.555723 
L 503.840187 183.484107 
L 504.411766 176.619804 
L 502.500229 171.487762 
L 498.051092 168.522737 
L 491.288376 167.927102 
L 482.732276 169.46896 
L 472.981045 172.791412 
L 462.698871 177.336386 
L 452.480804 182.541234 
L 442.774091 187.948012 
L 433.890569 193.220687 
L 425.984634 198.182445 
L 419.112408 202.755997 
L 413.24628 206.947431 
L 408.313756 210.800653 
L 404.216504 214.376623 
L 400.84749 217.735844 
L 398.100509 220.929918 
L 395.874812 224.000067 
L 394.081807 226.973954 
L 392.64039 229.871935 
L 391.484527 232.703861 
L 390.554588 235.47597 
L 389.802826 238.18963 
L 389.190146 240.84393 
L 388.681397 243.437298 
L 388.250572 245.967447 
L 387.875281 248.432275 
L 387.536108 250.829976 
L 387.218237 253.15977 
L 386.908165 255.421252 
L 386.594274 257.614766 
L 386.266295 259.741568 
L 385.91435 261.803201 
L 385.52926 263.801822 
L 385.100977 265.740435 
L 384.618619 267.622092 
L 384.072861 269.450127 
L 383.452019 271.228355 
L 382.740237 272.960892 
L 381.921647 274.651851 
L 380.977122 276.304941 
L 379.892031 277.925469 
L 378.638783 279.516418 
L 377.186059 281.080137 
L 375.502408 282.619026 
L 373.548163 284.130983 
L 371.290055 285.62307 
L 368.668198 287.080588 
L 365.621741 288.488613 
L 362.088561 289.828827 
L 357.996509 291.077035 
L 353.262294 292.175944 
L 347.800889 293.045664 
L 341.523337 293.591998 
L 334.342445 293.667461 
L 326.212336 293.041562 
L 317.115475 291.458171 
L 307.045614 288.564183 
L 296.242292 283.900739 
L 284.998456 276.994429 
L 273.837507 267.330942 
L 263.589899 254.605073 
L 255.280773 238.675544 
L 250.048272 220.128047 
L 248.936452 200.042269 
L 252.557921 180.204089 
L 260.836627 162.617938 
L 273.025034 149.119207 
L 287.800446 140.629344 
L 303.743972 137.29557 
L 319.595883 138.393601 
L 334.468318 142.800073 
L 347.852612 149.333675 
L 359.546641 156.978144 
L 369.55855 164.994383 
L 378.00822 172.869597 
L 385.080572 180.35085 
L 390.967607 187.270199 
L 395.866131 193.587573 
L 399.96125 199.300404 
L 403.417765 204.438797 
L 406.380334 209.042133 
L 408.9821 213.152324 
L 411.329116 216.80682 
L 413.51758 220.039013 
`),t(Je,"clip-path","url(#pf0fa2af44b)"),l(Je,"fill","none"),l(Je,"stroke","#1f77b4"),l(Je,"stroke-width","1.5"),l(Je,"stroke-linecap","square"),t(Lt,"id","line2d_23"),t(fe,"d",`M 424.41975 252.585993 
L 428.291599 252.298412 
L 432.755408 250.756996 
L 438.155992 249.002391 
L 442.634021 246.842964 
L 448.997119 243.618267 
L 455.29354 240.362158 
L 461.965958 235.596079 
L 469.055952 230.228826 
L 476.389137 224.172848 
L 483.369551 216.634405 
L 490.221961 209.11121 
L 496.215717 201.178024 
L 499.998708 192.748023 
L 502.792413 184.979213 
L 502.998073 178.37378 
L 500.84022 173.258649 
L 496.229778 170.145715 
L 490.378403 169.634777 
L 481.661273 170.342021 
L 472.204582 174.145375 
L 461.704712 178.599712 
L 451.927526 183.853132 
L 442.648673 189.341228 
L 434.241596 194.854644 
L 426.196016 199.423694 
L 420.12909 203.772865 
L 414.603124 207.527654 
L 409.38157 212.122409 
L 405.800288 215.37383 
L 401.945007 217.955477 
L 399.482797 221.603822 
L 397.085731 224.210506 
L 395.201361 227.485803 
L 393.97247 230.659592 
L 392.54056 233.533292 
L 392.034656 236.554875 
L 391.222327 239.391334 
L 390.117031 241.839857 
L 389.573585 244.546643 
L 389.051261 247.054656 
L 388.210818 249.222981 
L 387.696745 250.988296 
L 386.709314 253.500419 
L 386.098944 256.030609 
L 385.89319 257.187651 
L 386.009884 259.179115 
L 386.032505 260.780742 
L 386.210045 262.295087 
L 386.254761 264.026306 
L 386.661657 265.940496 
L 385.994015 268.187428 
L 385.606839 269.816688 
L 385.654628 271.940789 
L 384.853979 273.891564 
L 383.535768 274.866059 
L 382.267986 277.320053 
L 380.851115 278.849063 
L 379.867338 281.491133 
L 378.140844 283.82931 
L 375.476199 285.505087 
L 373.342266 287.71366 
L 370.523977 289.465349 
L 367.236297 290.850972 
L 364.305572 292.799472 
L 359.945719 293.962108 
L 355.595775 294.833188 
L 349.806394 295.808275 
L 344.236409 296.865331 
L 336.784284 297.806878 
L 328.182441 297.277898 
L 318.356134 295.306664 
L 309.428485 292.403396 
L 298.802014 286.542909 
L 288.783417 278.689759 
L 279.31906 266.320332 
L 271.608439 253.676876 
L 265.626844 237.264481 
L 263.416213 219.688867 
L 263.483436 203.203182 
L 266.851747 186.035303 
L 273.878035 171.637928 
L 283.879836 161.255067 
L 295.7045 154.095131 
L 307.790234 150.663083 
L 321.422884 149.970412 
L 335.408455 151.38065 
L 348.056191 155.959343 
L 359.494653 160.87298 
L 370.573383 166.952191 
L 379.054583 173.03563 
L 387.824864 179.533155 
L 394.105078 185.146657 
L 399.067955 191.999807 
L 404.035837 197.912963 
L 407.131374 203.664831 
L 409.738266 208.489677 
L 412.524346 213.880357 
L 414.114895 218.398141 
L 416.507315 221.454496 
`),t(fe,"clip-path","url(#pf0fa2af44b)"),l(fe,"fill","none"),l(fe,"stroke","#ff7f0e"),l(fe,"stroke-opacity","0.6"),l(fe,"stroke-width","1.5"),l(fe,"stroke-linecap","square"),t(C,"id","line2d_24"),t(_t,"id","DejaVuSans-73"),t(_t,"d",`M 2834 3397 
L 2834 2853 
Q 2591 2978 2328 3040 
Q 2066 3103 1784 3103 
Q 1356 3103 1142 2972 
Q 928 2841 928 2578 
Q 928 2378 1081 2264 
Q 1234 2150 1697 2047 
L 1894 2003 
Q 2506 1872 2764 1633 
Q 3022 1394 3022 966 
Q 3022 478 2636 193 
Q 2250 -91 1575 -91 
Q 1294 -91 989 -36 
Q 684 19 347 128 
L 347 722 
Q 666 556 975 473 
Q 1284 391 1588 391 
Q 1994 391 2212 530 
Q 2431 669 2431 922 
Q 2431 1156 2273 1281 
Q 2116 1406 1581 1522 
L 1381 1569 
Q 847 1681 609 1914 
Q 372 2147 372 2553 
Q 372 3047 722 3315 
Q 1072 3584 1716 3584 
Q 2034 3584 2315 3537 
Q 2597 3491 2834 3397 
z
`),t(_t,"transform","scale(0.015625)"),t(Ar,"id","DejaVuSans-4d"),t(Ar,"d",`M 628 4666 
L 1569 4666 
L 2759 1491 
L 3956 4666 
L 4897 4666 
L 4897 0 
L 4281 0 
L 4281 4097 
L 3078 897 
L 2444 897 
L 1241 4097 
L 1241 0 
L 628 0 
L 628 4666 
z
`),t(Ar,"transform","scale(0.015625)"),t(Xe,"id","DejaVuSans-41"),t(Xe,"d",`M 2188 4044 
L 1331 1722 
L 3047 1722 
L 2188 4044 
z
M 1831 4666 
L 2547 4666 
L 4325 0 
L 3669 0 
L 3244 1197 
L 1141 1197 
L 716 0 
L 50 0 
L 1831 4666 
z
`),t(Xe,"transform","scale(0.015625)"),t(qr,"id","DejaVuSans-50"),t(qr,"d",`M 1259 4147 
L 1259 2394 
L 2053 2394 
Q 2494 2394 2734 2622 
Q 2975 2850 2975 3272 
Q 2975 3691 2734 3919 
Q 2494 4147 2053 4147 
L 1259 4147 
z
M 628 4666 
L 2053 4666 
Q 2838 4666 3239 4311 
Q 3641 3956 3641 3272 
Q 3641 2581 3239 2228 
Q 2838 1875 2053 1875 
L 1259 1875 
L 1259 0 
L 628 0 
L 628 4666 
z
`),t(qr,"transform","scale(0.015625)"),t(kt,"id","DejaVuSans-45"),t(kt,"d",`M 628 4666 
L 3578 4666 
L 3578 4134 
L 1259 4134 
L 1259 2753 
L 3481 2753 
L 3481 2222 
L 1259 2222 
L 1259 531 
L 3634 531 
L 3634 0 
L 628 0 
L 628 4666 
z
`),t(kt,"transform","scale(0.015625)"),t(ca,"id","DejaVuSans-20"),t(ca,"transform","scale(0.015625)"),t(Ht,"id","DejaVuSans-72"),t(Ht,"d",`M 2631 2963 
Q 2534 3019 2420 3045 
Q 2306 3072 2169 3072 
Q 1681 3072 1420 2755 
Q 1159 2438 1159 1844 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1341 3275 1631 3429 
Q 1922 3584 2338 3584 
Q 2397 3584 2469 3576 
Q 2541 3569 2628 3553 
L 2631 2963 
z
`),t(Ht,"transform","scale(0.015625)"),t(xt,"id","DejaVuSans-6f"),t(xt,"d",`M 1959 3097 
Q 1497 3097 1228 2736 
Q 959 2375 959 1747 
Q 959 1119 1226 758 
Q 1494 397 1959 397 
Q 2419 397 2687 759 
Q 2956 1122 2956 1747 
Q 2956 2369 2687 2733 
Q 2419 3097 1959 3097 
z
M 1959 3584 
Q 2709 3584 3137 3096 
Q 3566 2609 3566 1747 
Q 3566 888 3137 398 
Q 2709 -91 1959 -91 
Q 1206 -91 779 398 
Q 353 888 353 1747 
Q 353 2609 779 3096 
Q 1206 3584 1959 3584 
z
`),t(xt,"transform","scale(0.015625)"),t(ga,"id","DejaVuSans-3a"),t(ga,"d",`M 750 794 
L 1409 794 
L 1409 0 
L 750 0 
L 750 794 
z
M 750 3309 
L 1409 3309 
L 1409 2516 
L 750 2516 
L 750 3309 
z
`),t(ga,"transform","scale(0.015625)"),t(Ze,"id","DejaVuSans-2e"),t(Ze,"d",`M 684 794 
L 1344 794 
L 1344 0 
L 684 0 
L 684 794 
z
`),t(Ze,"transform","scale(0.015625)"),$(Sa,"xlink:href","#DejaVuSans-73"),$(mn,"xlink:href","#DejaVuSans-4d"),t(mn,"x","52.099609"),$(pa,"xlink:href","#DejaVuSans-41"),t(pa,"x","138.378906"),$(m,"xlink:href","#DejaVuSans-50"),t(m,"x","206.787109"),$(d,"xlink:href","#DejaVuSans-45"),t(d,"x","267.089844"),$(vt,"xlink:href","#DejaVuSans-20"),t(vt,"x","330.273438"),$($n,"xlink:href","#DejaVuSans-45"),t($n,"x","362.060547"),$(hr,"xlink:href","#DejaVuSans-72"),t(hr,"x","425.244141"),$(Et,"xlink:href","#DejaVuSans-72"),t(Et,"x","464.607422"),$(Tr,"xlink:href","#DejaVuSans-6f"),t(Tr,"x","503.470703"),$(Bt,"xlink:href","#DejaVuSans-72"),t(Bt,"x","564.652344"),$(Wn,"xlink:href","#DejaVuSans-3a"),t(Wn,"x","604.015625"),$(Y,"xlink:href","#DejaVuSans-20"),t(Y,"x","637.707031"),$(de,"xlink:href","#DejaVuSans-31"),t(de,"x","669.494141"),$(fr,"xlink:href","#DejaVuSans-33"),t(fr,"x","733.117188"),$(dr,"xlink:href","#DejaVuSans-2e"),t(dr,"x","796.740234"),$(cr,"xlink:href","#DejaVuSans-30"),t(cr,"x","828.527344"),$(Wt,"xlink:href","#DejaVuSans-30"),t(Wt,"x","892.150391"),t(O,"transform","translate(315.714 47.6544)scale(0.12 -0.12)"),t(Ir,"id","text_20"),t(wt,"d",`M 456.033012 91.01065 
L 538.2002 91.01065 
Q 540.2002 91.01065 540.2002 89.01065 
L 540.2002 60.6544 
Q 540.2002 58.6544 538.2002 58.6544 
L 456.033012 58.6544 
Q 454.033012 58.6544 454.033012 60.6544 
L 454.033012 89.01065 
Q 454.033012 91.01065 456.033012 91.01065 
z
`),l(wt,"fill","#ffffff"),l(wt,"opacity","0.8"),l(wt,"stroke","#cccccc"),l(wt,"stroke-linejoin","miter"),t(Ut,"id","patch_6"),t(yt,"d",`M 458.033012 66.752837 
L 468.033012 66.752837 
L 478.033012 66.752837 
`),l(yt,"fill","none"),l(yt,"stroke","#1f77b4"),l(yt,"stroke-width","1.5"),l(yt,"stroke-linecap","square"),t(Ve,"id","line2d_25"),t(An,"id","DejaVuSans-65"),t(An,"d",`M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
`),t(An,"transform","scale(0.015625)"),t(qn,"id","DejaVuSans-66"),t(qn,"d",`M 2375 4863 
L 2375 4384 
L 1825 4384 
Q 1516 4384 1395 4259 
Q 1275 4134 1275 3809 
L 1275 3500 
L 2222 3500 
L 2222 3053 
L 1275 3053 
L 1275 0 
L 697 0 
L 697 3053 
L 147 3053 
L 147 3500 
L 697 3500 
L 697 3744 
Q 697 4328 969 4595 
Q 1241 4863 1831 4863 
L 2375 4863 
z
`),t(qn,"transform","scale(0.015625)"),t(Tn,"id","DejaVuSans-6e"),t(Tn,"d",`M 3513 2113 
L 3513 0 
L 2938 0 
L 2938 2094 
Q 2938 2591 2744 2837 
Q 2550 3084 2163 3084 
Q 1697 3084 1428 2787 
Q 1159 2491 1159 1978 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1366 3272 1645 3428 
Q 1925 3584 2291 3584 
Q 2894 3584 3203 3211 
Q 3513 2838 3513 2113 
z
`),t(Tn,"transform","scale(0.015625)"),t(On,"id","DejaVuSans-63"),t(On,"d",`M 3122 3366 
L 3122 2828 
Q 2878 2963 2633 3030 
Q 2388 3097 2138 3097 
Q 1578 3097 1268 2742 
Q 959 2388 959 1747 
Q 959 1106 1268 751 
Q 1578 397 2138 397 
Q 2388 397 2633 464 
Q 2878 531 3122 666 
L 3122 134 
Q 2881 22 2623 -34 
Q 2366 -91 2075 -91 
Q 1284 -91 818 406 
Q 353 903 353 1747 
Q 353 2603 823 3093 
Q 1294 3584 2113 3584 
Q 2378 3584 2631 3529 
Q 2884 3475 3122 3366 
z
`),t(On,"transform","scale(0.015625)"),$(Pr,"xlink:href","#DejaVuSans-72"),$(Un,"xlink:href","#DejaVuSans-65"),t(Un,"x","38.863281"),$(Va,"xlink:href","#DejaVuSans-66"),t(Va,"x","100.386719"),$(za,"xlink:href","#DejaVuSans-65"),t(za,"x","135.591797"),$(Ia,"xlink:href","#DejaVuSans-72"),t(Ia,"x","197.115234"),$(Aa,"xlink:href","#DejaVuSans-65"),t(Aa,"x","235.978516"),$(qa,"xlink:href","#DejaVuSans-6e"),t(qa,"x","297.501953"),$(Ta,"xlink:href","#DejaVuSans-63"),t(Ta,"x","360.880859"),$(Pa,"xlink:href","#DejaVuSans-65"),t(Pa,"x","415.861328"),t(ne,"transform","translate(486.033012 70.252837)scale(0.1 -0.1)"),t(le,"id","text_21"),t(pr,"d",`M 458.033012 81.430963 
L 468.033012 81.430963 
L 478.033012 81.430963 
`),l(pr,"fill","none"),l(pr,"stroke","#ff7f0e"),l(pr,"stroke-opacity","0.6"),l(pr,"stroke-width","1.5"),l(pr,"stroke-linecap","square"),t(gr,"id","line2d_26"),t(Pn,"id","DejaVuSans-70"),t(Pn,"d",`M 1159 525 
L 1159 -1331 
L 581 -1331 
L 581 3500 
L 1159 3500 
L 1159 2969 
Q 1341 3281 1617 3432 
Q 1894 3584 2278 3584 
Q 2916 3584 3314 3078 
Q 3713 2572 3713 1747 
Q 3713 922 3314 415 
Q 2916 -91 2278 -91 
Q 1894 -91 1617 61 
Q 1341 213 1159 525 
z
M 3116 1747 
Q 3116 2381 2855 2742 
Q 2594 3103 2138 3103 
Q 1681 3103 1420 2742 
Q 1159 2381 1159 1747 
Q 1159 1113 1420 752 
Q 1681 391 2138 391 
Q 2594 391 2855 752 
Q 3116 1113 3116 1747 
z
`),t(Pn,"transform","scale(0.015625)"),t(Xr,"id","DejaVuSans-64"),t(Xr,"d",`M 2906 2969 
L 2906 4863 
L 3481 4863 
L 3481 0 
L 2906 0 
L 2906 525 
Q 2725 213 2448 61 
Q 2172 -91 1784 -91 
Q 1150 -91 751 415 
Q 353 922 353 1747 
Q 353 2572 751 3078 
Q 1150 3584 1784 3584 
Q 2172 3584 2448 3432 
Q 2725 3281 2906 2969 
z
M 947 1747 
Q 947 1113 1208 752 
Q 1469 391 1925 391 
Q 2381 391 2643 752 
Q 2906 1113 2906 1747 
Q 2906 2381 2643 2742 
Q 2381 3103 1925 3103 
Q 1469 3103 1208 2742 
Q 947 2381 947 1747 
z
`),t(Xr,"transform","scale(0.015625)"),t(Kn,"id","DejaVuSans-69"),t(Kn,"d",`M 603 3500 
L 1178 3500 
L 1178 0 
L 603 0 
L 603 3500 
z
M 603 4863 
L 1178 4863 
L 1178 4134 
L 603 4134 
L 603 4863 
z
`),t(Kn,"transform","scale(0.015625)"),t(Ra,"id","DejaVuSans-74"),t(Ra,"d",`M 1172 4494 
L 1172 3500 
L 2356 3500 
L 2356 3053 
L 1172 3053 
L 1172 1153 
Q 1172 725 1289 603 
Q 1406 481 1766 481 
L 2356 481 
L 2356 0 
L 1766 0 
Q 1100 0 847 248 
Q 594 497 594 1153 
L 594 3053 
L 172 3053 
L 172 3500 
L 594 3500 
L 594 4494 
L 1172 4494 
z
`),t(Ra,"transform","scale(0.015625)"),$(Zr,"xlink:href","#DejaVuSans-70"),$(Na,"xlink:href","#DejaVuSans-72"),t(Na,"x","63.476562"),$(Qt,"xlink:href","#DejaVuSans-65"),t(Qt,"x","102.339844"),$(ea,"xlink:href","#DejaVuSans-64"),t(ea,"x","163.863281"),$(ma,"xlink:href","#DejaVuSans-69"),t(ma,"x","227.339844"),$($a,"xlink:href","#DejaVuSans-63"),t($a,"x","255.123047"),$(La,"xlink:href","#DejaVuSans-74"),t(La,"x","310.103516"),$(_a,"xlink:href","#DejaVuSans-69"),t(_a,"x","349.3125"),$(Ba,"xlink:href","#DejaVuSans-6f"),t(Ba,"x","377.095703"),$(Wa,"xlink:href","#DejaVuSans-6e"),t(Wa,"x","438.277344"),t(ke,"transform","translate(486.033012 84.930963)scale(0.1 -0.1)"),t(et,"id","text_22"),t(Ot,"id","legend_1"),t($t,"id","axes_1"),t(A,"id","figure_1"),t(ka,"x","200.9178"),t(ka,"y","53.6544"),t(ka,"width","344.2824"),t(ka,"height","344.2824"),t(ta,"id","pf0fa2af44b"),t(o,"xmlns:xlink","http://www.w3.org/1999/xlink"),t(o,"width","323"),t(o,"height","330"),t(o,"viewBox","200 100 376 230"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"version","1.1")},m(Ga,Xa){x(Ga,o,Xa),n(o,i),n(i,h),n(h,f),n(f,u),n(f,c),n(c,g),n(f,k),n(k,v),n(f,w),n(w,S),n(S,Q),n(Q,z),n(o,P),n(P,I),n(I,U),n(o,A),n(A,F),n(F,Z),n(A,re),n(re,ee),n(A,Ie),n(Ie,ue),n(ue,H),n(A,B),n(B,ce),n(ce,V),n(A,G),n(G,Jt),n(Jt,K),n(A,W),n(W,_n),n(_n,Ae),n(W,J),n(J,xe),n(J,ve),n(J,ge),n(J,kn),n(J,Yt),n(J,pe),n(J,xn),n(W,bt),n(bt,Jn),n(Jn,qe),n(bt,vn),n(vn,jt),n(jt,Yn),n(Yn,tt),n(Yn,Xn),n(Yn,Rn),n(jt,aa),n(jt,sa),n(jt,Nr),n(W,Mt),n(Mt,Zn),n(Zn,me),n(Mt,er),n(er,Te),n(Te,va),n(va,Xt),n(Te,Fa),n(Te,En),n(Te,mr),n(W,Zt),n(Zt,en),n(en,nt),n(Zt,tn),n(tn,Nn),n(Nn,wn),n(Nn,Gr),n(W,Dt),n(Dt,yn),n(yn,tr),n(Dt,Ea),n(Ea,Qn),n(Qn,bn),n(W,Gn),n(Gn,rt),n(rt,Cn),n(Gn,Fn),n(Fn,wa),n(wa,nn),n(W,Cr),n(Cr,Ee),n(Ee,$r),n(Cr,Lr),n(Lr,nr),n(nr,ya),n(nr,te),n(W,Fr),n(Fr,at),n(at,we),n(Fr,Hn),n(Hn,St),n(St,_r),n(St,rn),n(A,ae),n(ae,ye),n(ye,jn),n(ae,se),n(se,Qe),n(se,Pe),n(se,Vt),n(se,Re),n(se,oe),n(ae,an),n(an,rr),n(rr,st),n(an,kr),n(kr,ot),n(ot,oa),n(oa,Ne),n(ot,xr),n(ot,zt),n(ot,Hr),n(ae,Mn),n(Mn,sn),n(sn,ar),n(Mn,Br),n(Br,be),n(be,vr),n(be,on),n(be,ln),n(ae,ia),n(ia,un),n(un,Ge),n(ia,sr),n(sr,la),n(la,It),n(ae,ua),n(ua,it),n(it,Er),n(ua,lt),n(lt,Wr),n(Wr,Dn),n(Wr,Qa),n(ae,Ce),n(Ce,ha),n(ha,$e),n(Ce,Ha),n(Ha,wr),n(wr,or),n(wr,hn),n(A,Le),n(Le,Sn),n(Sn,fn),n(Le,je),n(je,Fe),n(je,Or),n(je,He),n(je,Be),n(je,Ur),n(je,We),n(je,ir),n(Le,At),n(At,yr),n(yr,qt),n(At,ut),n(ut,ba),n(ba,Qr),n(ba,ie),n(Le,br),n(br,Tt),n(Tt,Me),n(br,_e),n(_e,Oe),n(Oe,lr),n(Oe,De),n(Le,Vn),n(Vn,Ue),n(Ue,Pt),n(Vn,Ke),n(Ke,ur),n(ur,Bn),n(ur,dn),n(Le,zn),n(zn,Kr),n(Kr,cn),n(zn,Jr),n(Jr,Rt),n(Rt,jr),n(Rt,Nt),n(Le,ht),n(ht,ja),n(ja,Gt),n(ht,Yr),n(Yr,ft),n(ft,Mr),n(Mr,dt),n(ft,gn),n(ft,fa),n(Le,da),n(da,Ct),n(Ct,Dr),n(da,ct),n(ct,Sr),n(Sr,In),n(Sr,Vr),n(Le,pn),n(pn,gt),n(gt,zr),n(pn,pt),n(pt,Ft),n(Ft,Ma),n(Ma,mt),n(Ft,Da),n(Ft,Se),n(A,$t),n($t,Lt),n(Lt,Je),n($t,C),n(C,fe),n($t,Ir),n(Ir,O),n(O,Ye),n(Ye,_t),n(Ye,Ar),n(Ye,Xe),n(Ye,qr),n(Ye,kt),n(Ye,ca),n(Ye,Ht),n(Ye,xt),n(Ye,ga),n(Ye,Ze),n(O,Sa),n(O,mn),n(O,pa),n(O,m),n(O,d),n(O,vt),n(O,$n),n(O,hr),n(O,Et),n(O,Tr),n(O,Bt),n(O,Wn),n(O,Y),n(O,de),n(O,fr),n(O,dr),n(O,cr),n(O,Wt),n($t,Ot),n(Ot,Ut),n(Ut,wt),n(Ot,Ve),n(Ve,yt),n(Ot,le),n(le,ne),n(ne,Kt),n(Kt,An),n(Kt,qn),n(Kt,Tn),n(Kt,On),n(ne,Pr),n(ne,Un),n(ne,Va),n(ne,za),n(ne,Ia),n(ne,Aa),n(ne,qa),n(ne,Ta),n(ne,Pa),n(Ot,gr),n(gr,pr),n(Ot,et),n(et,ke),n(ke,Rr),n(Rr,Pn),n(Rr,Xr),n(Rr,Kn),n(Rr,Ra),n(ke,Zr),n(ke,Na),n(ke,Qt),n(ke,ea),n(ke,ma),n(ke,$a),n(ke,La),n(ke,_a),n(ke,Ba),n(ke,Wa),n(o,Oa),n(Oa,ta),n(ta,ka)},p:Ln,i:Ln,o:Ln,d(Ga){Ga&&e(o)}}}class Hi extends Os{constructor(o){super(),Us(this,o,null,Fi,Ws,{})}}function Bi(p){let o,i,h="Model scale versus domain knowledge in statistical forecasting of chaotic systems",f,u,c,g,k,v,w,S;return u=new ms({props:{id:"gilpin"}}),g=new ms({props:{id:"seo"}}),v=new ms({props:{id:"degrave"}}),{c(){o=L(`This project is inspired by several recent publications involving the use of deep learning
		to predict or control chaotic dynamical systems, in particular William Gilpin's paper, `),i=R("i"),i.textContent=h,f=q(),b(u.$$.fragment),c=L(`. Gilpin found that, given enough training data, generic neural
		architectures can match or exceed the performance of state-of-the-art domain-specific
		choatic forecasting models such as reservoir computers and neural ODEs. Although I have
		never studied dynamical systems in depth, I have recently become highly intrigued by the
		prospect of applying deep learning to prediction tasks involving chaotic systems, as I
		explore ways to contribute to the efforts to find technical solutions to climate change.
		Along with Gilpin's paper, there have been several recent publications on the subject that
		were especially exciting to me, particularly the ones applying deep learning to tokamak
		control in nuclear fusion reactors (see e.g. `),b(g.$$.fragment),k=L(", "),b(v.$$.fragment),w=L(`).
	`)},l(Q){o=_(Q,`This project is inspired by several recent publications involving the use of deep learning
		to predict or control chaotic dynamical systems, in particular William Gilpin's paper, `),i=N(Q,"I",{"data-svelte-h":!0}),n2(i)!=="svelte-1orr88l"&&(i.textContent=h),f=T(Q),j(u.$$.fragment,Q),c=_(Q,`. Gilpin found that, given enough training data, generic neural
		architectures can match or exceed the performance of state-of-the-art domain-specific
		choatic forecasting models such as reservoir computers and neural ODEs. Although I have
		never studied dynamical systems in depth, I have recently become highly intrigued by the
		prospect of applying deep learning to prediction tasks involving chaotic systems, as I
		explore ways to contribute to the efforts to find technical solutions to climate change.
		Along with Gilpin's paper, there have been several recent publications on the subject that
		were especially exciting to me, particularly the ones applying deep learning to tokamak
		control in nuclear fusion reactors (see e.g. `),j(g.$$.fragment,Q),k=_(Q,", "),j(v.$$.fragment,Q),w=_(Q,`).
	`)},m(Q,z){x(Q,o,z),x(Q,i,z),x(Q,f,z),M(u,Q,z),x(Q,c,z),M(g,Q,z),x(Q,k,z),M(v,Q,z),x(Q,w,z),S=!0},p:Ln,i(Q){S||(E(u.$$.fragment,Q),E(g.$$.fragment,Q),E(v.$$.fragment,Q),S=!0)},o(Q){y(u.$$.fragment,Q),y(g.$$.fragment,Q),y(v.$$.fragment,Q),S=!1},d(Q){Q&&(e(o),e(i),e(f),e(c),e(k),e(w)),D(u,Q),D(g,Q),D(v,Q)}}}function Wi(p){let o;return{c(){o=L(`My goal with this project is to get some hands-on experience with a chaotic system and
		probe deeper into Gilpin's findings by testing the limits of a neural network's ability to
		model a single chaotic system (within the computational constraints imposed by my limited
		budget*). I'll start with what is probably the most well known chaotic system, the Lorenz
		Attractor. As my dynamical systems background is a bit rusty, I will be (re)discovering many
		of the properties of the Lorenz System, and dynamical systems in general, as I go, often
		using the results of my experiments to guide my investigation. What exactly makes the Lorenz
		Attractor chaotic? And what constraints will that impose on the ability of a deep neural
		network to model it? Let's find out!`)},l(i){o=_(i,`My goal with this project is to get some hands-on experience with a chaotic system and
		probe deeper into Gilpin's findings by testing the limits of a neural network's ability to
		model a single chaotic system (within the computational constraints imposed by my limited
		budget*). I'll start with what is probably the most well known chaotic system, the Lorenz
		Attractor. As my dynamical systems background is a bit rusty, I will be (re)discovering many
		of the properties of the Lorenz System, and dynamical systems in general, as I go, often
		using the results of my experiments to guide my investigation. What exactly makes the Lorenz
		Attractor chaotic? And what constraints will that impose on the ability of a deep neural
		network to model it? Let's find out!`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Oi(p){let o;return{c(){o=L("mochaNN")},l(i){o=_(i,"mochaNN")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Ui(p){let o;return{c(){o=L("Youtube channel")},l(i){o=_(i,"Youtube channel")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Ki(p){let o;return{c(){o=L("lecture series")},l(i){o=_(i,"lecture series")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Ji(p){let o;return{c(){o=L("The Lorenz Attractor")},l(i){o=_(i,"The Lorenz Attractor")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Yi(p){let o;return{c(){o=L("Lorenz Attractor")},l(i){o=_(i,"Lorenz Attractor")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Xi(p){let o,i,h,f;return i=new Ya({props:{href:"https://en.wikipedia.org/wiki/Lorenz_system",$$slots:{default:[Yi]},$$scope:{ctx:p}}}),{c(){o=L(`The
		`),b(i.$$.fragment),h=L(` was developed
		by Edward Lorenz et. al. in 1963 as a simplified model of atmospheric convection.`)},l(u){o=_(u,`The
		`),j(i.$$.fragment,u),h=_(u,` was developed
		by Edward Lorenz et. al. in 1963 as a simplified model of atmospheric convection.`)},m(u,c){x(u,o,c),M(i,u,c),x(u,h,c),f=!0},p(u,c){const g={};c&128&&(g.$$scope={dirty:c,ctx:u}),i.$set(g)},i(u){f||(E(i.$$.fragment,u),f=!0)},o(u){y(i.$$.fragment,u),f=!1},d(u){u&&(e(o),e(h)),D(i,u)}}}function Zi(p){let o;return{c(){o=L("The Lorenz Attractor")},l(i){o=_(i,"The Lorenz Attractor")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function el(p){let o;return{c(){o=L(`The Lorenz system is comprised of three ordinary differential equations representing the
		properties of convection and horizontal and vertical temperature in a two-dimensional fluid
		layer:`)},l(i){o=_(i,`The Lorenz system is comprised of three ordinary differential equations representing the
		properties of convection and horizontal and vertical temperature in a two-dimensional fluid
		layer:`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function tl(p){let o,i,h="Attractor",f;return{c(){o=L("The Lorenz "),i=R("i"),i.textContent=h,f=L(" refers to a set of chaotic solutions to the system, most commonly:")},l(u){o=_(u,"The Lorenz "),i=N(u,"I",{"data-svelte-h":!0}),n2(i)!=="svelte-7jrnvq"&&(i.textContent=h),f=_(u," refers to a set of chaotic solutions to the system, most commonly:")},m(u,c){x(u,o,c),x(u,i,c),x(u,f,c)},p:Ln,d(u){u&&(e(o),e(i),e(f))}}}function nl(p){let o;return{c(){o=L("dysts")},l(i){o=_(i,"dysts")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function rl(p){let o,i,h,f;return i=new Ya({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[nl]},$$scope:{ctx:p}}}),{c(){o=L("I used Gilpin's "),b(i.$$.fragment),h=L(` python module
		to generate the training data for this solution.`)},l(u){o=_(u,"I used Gilpin's "),j(i.$$.fragment,u),h=_(u,` python module
		to generate the training data for this solution.`)},m(u,c){x(u,o,c),M(i,u,c),x(u,h,c),f=!0},p(u,c){const g={};c&128&&(g.$$scope={dirty:c,ctx:u}),i.$set(g)},i(u){f||(E(i.$$.fragment,u),f=!0)},o(u){y(i.$$.fragment,u),f=!1},d(u){u&&(e(o),e(h)),D(i,u)}}}function al(p){let o;return{c(){o=L("Neural Architecture: N-HiTS")},l(i){o=_(i,"Neural Architecture: N-HiTS")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function sl(p){let o,i,h,f,u,c;return i=new ms({props:{id:"challu"}}),f=new ms({props:{id:"gilpin"}}),{c(){o=L("The N-HiTS "),b(i.$$.fragment),h=L(` forecasting network is known to produce state-of-the-art results,
		at the time of writing, for univariate time series prediction, with up to an order of magnitude
		lower computational requirement than some competitors. Given my limited budget and its strong
		performance reported in `),b(f.$$.fragment),u=L(`, it seemed like the natural starting point for a
		network architecture.`)},l(g){o=_(g,"The N-HiTS "),j(i.$$.fragment,g),h=_(g,` forecasting network is known to produce state-of-the-art results,
		at the time of writing, for univariate time series prediction, with up to an order of magnitude
		lower computational requirement than some competitors. Given my limited budget and its strong
		performance reported in `),j(f.$$.fragment,g),u=_(g,`, it seemed like the natural starting point for a
		network architecture.`)},m(g,k){x(g,o,k),M(i,g,k),x(g,h,k),M(f,g,k),x(g,u,k),c=!0},p:Ln,i(g){c||(E(i.$$.fragment,g),E(f.$$.fragment,g),c=!0)},o(g){y(i.$$.fragment,g),y(f.$$.fragment,g),c=!1},d(g){g&&(e(o),e(h),e(u)),D(i,g),D(f,g)}}}function ol(p){let o,i,h,f,u,c;return i=new ms({props:{id:"oreshkin"}}),f=new ms({props:{id:"oreshkin"}}),{c(){o=L("The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),b(i.$$.fragment),h=L(`, a neural basis expansion network for time series prediction. The key ideas inherited
		from N-BEATS include the organization of fully connected layers into blocks that output
		basis expansions (linear projections of the preceding fully connected layer's output) and
		the use of both forecast and backcast predictions from each block. The forecast predictions
		from all blocks are summed together to produce the final output of the network, while the
		backcasts are subtracted from the input of the corresponding block to produce a residual
		connection as the input to the next block. The goal of the backcasts is to help the
		downstream blocks by "removing components of their input that are not helpful for
		forecasting" `),b(f.$$.fragment),u=L(".")},l(g){o=_(g,"The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS "),j(i.$$.fragment,g),h=_(g,`, a neural basis expansion network for time series prediction. The key ideas inherited
		from N-BEATS include the organization of fully connected layers into blocks that output
		basis expansions (linear projections of the preceding fully connected layer's output) and
		the use of both forecast and backcast predictions from each block. The forecast predictions
		from all blocks are summed together to produce the final output of the network, while the
		backcasts are subtracted from the input of the corresponding block to produce a residual
		connection as the input to the next block. The goal of the backcasts is to help the
		downstream blocks by "removing components of their input that are not helpful for
		forecasting" `),j(f.$$.fragment,g),u=_(g,".")},m(g,k){x(g,o,k),M(i,g,k),x(g,h,k),M(f,g,k),x(g,u,k),c=!0},p:Ln,i(g){c||(E(i.$$.fragment,g),E(f.$$.fragment,g),c=!0)},o(g){y(i.$$.fragment,g),y(f.$$.fragment,g),c=!1},d(g){g&&(e(o),e(h),e(u)),D(i,g),D(f,g)}}}function il(p){let o,i,h,f;return i=new ms({props:{id:"challu"}}),{c(){o=L(`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
		horizons while keeping computational complexity low. They include the use of pooling layers
		that downsample the inputs to each block and upsampling layers that map a compressed
		representation of the forecast to the output sample rate. In addition to the complexity
		savings, the compressed representations may induce a bias towards a temporal hierarchical
		modeling of the time series across the blocks that allows N-HiTS to exceed the performance
		of competing long-horizon forecasting models while requiring an order of magnitude lower
		computational complexity `),b(i.$$.fragment),h=L(".")},l(u){o=_(u,`The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
		horizons while keeping computational complexity low. They include the use of pooling layers
		that downsample the inputs to each block and upsampling layers that map a compressed
		representation of the forecast to the output sample rate. In addition to the complexity
		savings, the compressed representations may induce a bias towards a temporal hierarchical
		modeling of the time series across the blocks that allows N-HiTS to exceed the performance
		of competing long-horizon forecasting models while requiring an order of magnitude lower
		computational complexity `),j(i.$$.fragment,u),h=_(u,".")},m(u,c){x(u,o,c),M(i,u,c),x(u,h,c),f=!0},p:Ln,i(u){f||(E(i.$$.fragment,u),f=!0)},o(u){y(i.$$.fragment,u),f=!1},d(u){u&&(e(o),e(h)),D(i,u)}}}function ll(p){let o;return{c(){o=L("Experiments")},l(i){o=_(i,"Experiments")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function ul(p){let o,i,h,f;return i=new ms({props:{id:"gilpin"}}),{c(){o=L(`While Gilpin's experiments focus on testing 24 different time-series prediction models on
		over 130 different chaotic systems using a relatively narrow range of hyper parameters for
		tuning `),b(i.$$.fragment),h=L(`, my experiments aim to tune a single model, N-HiTS, on a single
		system, the Lorenz Attractor, to maximize its accuracy for a given, relatively long, fixed
		horizon (aka prediction window length). And more specifically, I aim not only to achieve a
		low average error on the test set but also to limit the worst-case error as much as
		possible, which will likely mean achieving a degree of predictive power over the most
		chaotic regions of the system. Is this a completely naive aspiration given what is known
		about chaotic systems? Maybe, but I'm not really sure yet, and either way this should be a
		fun learning experience...
	`)},l(u){o=_(u,`While Gilpin's experiments focus on testing 24 different time-series prediction models on
		over 130 different chaotic systems using a relatively narrow range of hyper parameters for
		tuning `),j(i.$$.fragment,u),h=_(u,`, my experiments aim to tune a single model, N-HiTS, on a single
		system, the Lorenz Attractor, to maximize its accuracy for a given, relatively long, fixed
		horizon (aka prediction window length). And more specifically, I aim not only to achieve a
		low average error on the test set but also to limit the worst-case error as much as
		possible, which will likely mean achieving a degree of predictive power over the most
		chaotic regions of the system. Is this a completely naive aspiration given what is known
		about chaotic systems? Maybe, but I'm not really sure yet, and either way this should be a
		fun learning experience...
	`)},m(u,c){x(u,o,c),M(i,u,c),x(u,h,c),f=!0},p:Ln,i(u){f||(E(i.$$.fragment,u),f=!0)},o(u){y(i.$$.fragment,u),f=!1},d(u){u&&(e(o),e(h)),D(i,u)}}}function hl(p){let o;return{c(){o=L("Data Generation")},l(i){o=_(i,"Data Generation")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function fl(p){let o;return{c(){o=L("dysts")},l(i){o=_(i,"dysts")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function dl(p){let o;return{c(){o=L("IVP solver")},l(i){o=_(i,"IVP solver")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function cl(p){let o;return{c(){o=L("dysts")},l(i){o=_(i,"dysts")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function gl(p){let o,i="$dt$",h,f,u="$0.015$",c,g,k,v,w,S,Q="$dt$",z,P,I,U="after",A,F="$dt$",Z,re,ee,Ie,ue="$\\text{first_step} = 0.0001801$",H,B,ce;return k=new Ya({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[fl]},$$scope:{ctx:p}}}),w=new Ya({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[dl]},$$scope:{ctx:p}}}),ee=new Ya({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[cl]},$$scope:{ctx:p}}}),{c(){o=L("I begin with a horizon (prediction window) of 100 points, using a "),h=L(i),f=L(` of approximately
		`),c=L(u),g=L(" seconds per point (the default from "),b(k.$$.fragment),v=L(") to sample the solution produced by the "),b(w.$$.fragment),S=L(". Importantly, note that this "),z=L(Q),P=L(` is only the one used for sampling the solution
		`),I=R("i"),I.textContent=U,A=L(`
		it is generated by the IVP solver. The actual `),Z=L(F),re=L(` used internally by the IVP solver can
		vary dynamically, but the initial target value used by `),b(ee.$$.fragment),Ie=L(" is "),H=L(ue),B=L(`.
	`)},l(V){o=_(V,"I begin with a horizon (prediction window) of 100 points, using a "),h=_(V,i),f=_(V,` of approximately
		`),c=_(V,u),g=_(V," seconds per point (the default from "),j(k.$$.fragment,V),v=_(V,") to sample the solution produced by the "),j(w.$$.fragment,V),S=_(V,". Importantly, note that this "),z=_(V,Q),P=_(V,` is only the one used for sampling the solution
		`),I=N(V,"I",{"data-svelte-h":!0}),n2(I)!=="svelte-10nlrz4"&&(I.textContent=U),A=_(V,`
		it is generated by the IVP solver. The actual `),Z=_(V,F),re=_(V,` used internally by the IVP solver can
		vary dynamically, but the initial target value used by `),j(ee.$$.fragment,V),Ie=_(V," is "),H=_(V,ue),B=_(V,`.
	`)},m(V,G){x(V,o,G),x(V,h,G),x(V,f,G),x(V,c,G),x(V,g,G),M(k,V,G),x(V,v,G),M(w,V,G),x(V,S,G),x(V,z,G),x(V,P,G),x(V,I,G),x(V,A,G),x(V,Z,G),x(V,re,G),M(ee,V,G),x(V,Ie,G),x(V,H,G),x(V,B,G),ce=!0},p(V,G){const Jt={};G&128&&(Jt.$$scope={dirty:G,ctx:V}),k.$set(Jt);const K={};G&128&&(K.$$scope={dirty:G,ctx:V}),w.$set(K);const W={};G&128&&(W.$$scope={dirty:G,ctx:V}),ee.$set(W)},i(V){ce||(E(k.$$.fragment,V),E(w.$$.fragment,V),E(ee.$$.fragment,V),ce=!0)},o(V){y(k.$$.fragment,V),y(w.$$.fragment,V),y(ee.$$.fragment,V),ce=!1},d(V){V&&(e(o),e(h),e(f),e(c),e(g),e(v),e(S),e(z),e(P),e(I),e(A),e(Z),e(re),e(Ie),e(H),e(B)),D(k,V),D(w,V),D(ee,V)}}}function pl(p){let o;return{c(){o=L("Lyapunov exponent")},l(i){o=_(i,"Lyapunov exponent")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function ml(p){let o;return{c(){o=L("dysts")},l(i){o=_(i,"dysts")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function $l(p){let o;return{c(){o=L("Lyapunov time")},l(i){o=_(i,"Lyapunov time")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Ll(p){let o,i,h,f,u,c="$0.8917$",g,k,v,w,S="$1.121s$",Q,z,P;return i=new Ya({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_exponent",$$slots:{default:[pl]},$$scope:{ctx:p}}}),f=new Ya({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[ml]},$$scope:{ctx:p}}}),v=new Ya({props:{href:"https://en.wikipedia.org/wiki/Lyapunov_time",$$slots:{default:[$l]},$$scope:{ctx:p}}}),{c(){o=L(`At this stage, it may also be worth mentioning one of the common metrics for measuring the
		average chaoticity of a system, the maximum
		`),b(i.$$.fragment),h=L(`. As
		reported in
		`),b(f.$$.fragment),u=L(`, the Lyapunov exponent for
		the Lorenz Attractor is approx. `),g=L(c),k=L(", and so the "),b(v.$$.fragment),w=L(` is approx.
		`),Q=L(S),z=L(".")},l(I){o=_(I,`At this stage, it may also be worth mentioning one of the common metrics for measuring the
		average chaoticity of a system, the maximum
		`),j(i.$$.fragment,I),h=_(I,`. As
		reported in
		`),j(f.$$.fragment,I),u=_(I,`, the Lyapunov exponent for
		the Lorenz Attractor is approx. `),g=_(I,c),k=_(I,", and so the "),j(v.$$.fragment,I),w=_(I,` is approx.
		`),Q=_(I,S),z=_(I,".")},m(I,U){x(I,o,U),M(i,I,U),x(I,h,U),M(f,I,U),x(I,u,U),x(I,g,U),x(I,k,U),M(v,I,U),x(I,w,U),x(I,Q,U),x(I,z,U),P=!0},p(I,U){const A={};U&128&&(A.$$scope={dirty:U,ctx:I}),i.$set(A);const F={};U&128&&(F.$$scope={dirty:U,ctx:I}),f.$set(F);const Z={};U&128&&(Z.$$scope={dirty:U,ctx:I}),v.$set(Z)},i(I){P||(E(i.$$.fragment,I),E(f.$$.fragment,I),E(v.$$.fragment,I),P=!0)},o(I){y(i.$$.fragment,I),y(f.$$.fragment,I),y(v.$$.fragment,I),P=!1},d(I){I&&(e(o),e(h),e(u),e(g),e(k),e(w),e(Q),e(z)),D(i,I),D(f,I),D(v,I)}}}function _l(p){let o,i,h="on average",f,u="$e$",c,g,k="$1.121$",v,w,S="$\\frac{4}{3}$",Q,z;return{c(){o=L("This tells us that, "),i=R("i"),i.textContent=h,f=L(`, the distance between any two trajectories from the
		Lorenz Attractor are expected to diverge by a factor of `),c=L(u),g=L(` after
		`),v=L(k),w=L(` seconds. Note that with these parameters, the horizon covers a time period of about
		`),Q=L(S),z=L(`
		of the Lyapunov time.
	`)},l(P){o=_(P,"This tells us that, "),i=N(P,"I",{"data-svelte-h":!0}),n2(i)!=="svelte-ggx8py"&&(i.textContent=h),f=_(P,`, the distance between any two trajectories from the
		Lorenz Attractor are expected to diverge by a factor of `),c=_(P,u),g=_(P,` after
		`),v=_(P,k),w=_(P,` seconds. Note that with these parameters, the horizon covers a time period of about
		`),Q=_(P,S),z=_(P,`
		of the Lyapunov time.
	`)},m(P,I){x(P,o,I),x(P,i,I),x(P,f,I),x(P,c,I),x(P,g,I),x(P,v,I),x(P,w,I),x(P,Q,I),x(P,z,I)},p:Ln,d(P){P&&(e(o),e(i),e(f),e(c),e(g),e(v),e(w),e(Q),e(z))}}}function kl(p){let o,i="$[-9.79, -15.04, 20.53]$",h,f,u="$[0.99,1.01]$",c,g;return{c(){o=L(`The train and test sets are comprised of many trajectories with initial conditions all
		centered at approx. `),h=L(i),f=L(` and multiplied by a random perturbation uniformly
		sampled from the interval `),c=L(u),g=L(".")},l(k){o=_(k,`The train and test sets are comprised of many trajectories with initial conditions all
		centered at approx. `),h=_(k,i),f=_(k,` and multiplied by a random perturbation uniformly
		sampled from the interval `),c=_(k,u),g=_(k,".")},m(k,v){x(k,o,v),x(k,h,v),x(k,f,v),x(k,c,v),x(k,g,v)},p:Ln,d(k){k&&(e(o),e(h),e(f),e(c),e(g))}}}function xl(p){let o,i="$3*100 = 300$",h,f,u="$3 * (500 + 100) = 1800$",c,g;return{c(){o=L(`The input to the N-HiTs model is a lookback window of the previous series values whose
		length is typically some multiple of the horizon window. I went with the default value from
		the N-HiTS paper of 5 times the horizon window length, or 500 points, making each training
		sample a total of 600 points. (Note that because N-HiTs is a univariate model, while the
		Lorenz System is three-dimensional, the data points must be flattened into one dimension.
		Therefore, the horizon window length is actually `),h=L(i),f=L(`, and each training
		sample's length is `),c=L(u),g=L(").")},l(k){o=_(k,`The input to the N-HiTs model is a lookback window of the previous series values whose
		length is typically some multiple of the horizon window. I went with the default value from
		the N-HiTS paper of 5 times the horizon window length, or 500 points, making each training
		sample a total of 600 points. (Note that because N-HiTs is a univariate model, while the
		Lorenz System is three-dimensional, the data points must be flattened into one dimension.
		Therefore, the horizon window length is actually `),h=_(k,i),f=_(k,`, and each training
		sample's length is `),c=_(k,u),g=_(k,").")},m(k,v){x(k,o,v),x(k,h,v),x(k,f,v),x(k,c,v),x(k,g,v)},p:Ln,d(k){k&&(e(o),e(h),e(f),e(c),e(g))}}}function vl(p){let o,i=`$10,000 - 600 +
		1 = 9401$`,h,f;return{c(){o=L(`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
		increase data efficiency, I select each training sample by sliding the 600-point window
		along the series with a one-point stride. Each series, therefore, contributes `),h=L(i),f=L(` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
		and train on 19 of them, and hold out 3 series for validation and 3 series for testing.`)},l(u){o=_(u,`I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
		increase data efficiency, I select each training sample by sliding the 600-point window
		along the series with a one-point stride. Each series, therefore, contributes `),h=_(u,i),f=_(u,` training samples. For the initial experiment, I generate 25 series with unique initial conditions,
		and train on 19 of them, and hold out 3 series for validation and 3 series for testing.`)},m(u,c){x(u,o,c),x(u,h,c),x(u,f,c)},p:Ln,d(u){u&&(e(o),e(h),e(f))}}}function El(p){let o;return{c(){o=L("Model 1")},l(i){o=_(i,"Model 1")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function wl(p){let o,i,h,f,u,c;return i=new ms({props:{id:"challu"}}),f=new ms({props:{id:"gilpin"}}),{c(){o=L("The model is optimized with MAE loss, consistent with the default loss from "),b(i.$$.fragment),h=L(`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as defined in
		`),b(f.$$.fragment),u=L(":")},l(g){o=_(g,"The model is optimized with MAE loss, consistent with the default loss from "),j(i.$$.fragment,g),h=_(g,`. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as defined in
		`),j(f.$$.fragment,g),u=_(g,":")},m(g,k){x(g,o,k),M(i,g,k),x(g,h,k),M(f,g,k),x(g,u,k),c=!0},p:Ln,i(g){c||(E(i.$$.fragment,g),E(f.$$.fragment,g),c=!0)},o(g){y(i.$$.fragment,g),y(f.$$.fragment,g),c=!1},d(g){g&&(e(o),e(h),e(u)),D(i,g),D(f,g)}}}function yl(p){let o;return{c(){o=L(`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of average
		window errors and its CDF on the test set are shown below. Note that the left y axis is
		log-scaled.`)},l(i){o=_(i,`In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of average
		window errors and its CDF on the test set are shown below. Note that the left y axis is
		log-scaled.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Ql(p){let o;return{c(){o=L("Model 1 - sMAPE error distribution on the test set")},l(i){o=_(i,"Model 1 - sMAPE error distribution on the test set")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function bl(p){let o;return{c(){o=L(`To gain a more intuitive understanding of the magnitude of these errors, we can plot
		individual window predictions against the references:`)},l(i){o=_(i,`To gain a more intuitive understanding of the magnitude of these errors, we can plot
		individual window predictions against the references:`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function jl(p){let o;return{c(){o=L(`Samples of three different 100-point predictions from Model 1 with small, medium, and
			large sMAPE errors`)},l(i){o=_(i,`Samples of three different 100-point predictions from Model 1 with small, medium, and
			large sMAPE errors`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Ml(p){let o;return{c(){o=L(`One interesting observation in all three graphs is that there appears to be a kind of
		"point of divergence" on the prediction before which the average error is very low and after
		which the error grows quickly. In the first graph, this point is about in the middle of the
		prediction, in the second it is maybe one third of the way into the prediction, and in the
		third it is near the beginning. If we look at the predictions of adjacent windows, we see
		that the behavior at this point is consisent across the windows, indicating that there is
		something about the system's behavior in this region that is very difficult for this model
		to fit, regardless of its alignment within the prediction window.`)},l(i){o=_(i,`One interesting observation in all three graphs is that there appears to be a kind of
		"point of divergence" on the prediction before which the average error is very low and after
		which the error grows quickly. In the first graph, this point is about in the middle of the
		prediction, in the second it is maybe one third of the way into the prediction, and in the
		third it is near the beginning. If we look at the predictions of adjacent windows, we see
		that the behavior at this point is consisent across the windows, indicating that there is
		something about the system's behavior in this region that is very difficult for this model
		to fit, regardless of its alignment within the prediction window.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Dl(p){let o;return{c(){o=L(`The behavior of the model near the origin, which is a critical point of the system, for
			an especially challenging case. In contrast to all other regions of this trajectory, the
			model seems highly uncertain of how the trajectory will evolve shortly after passing
			near the origin.`)},l(i){o=_(i,`The behavior of the model near the origin, which is a critical point of the system, for
			an especially challenging case. In contrast to all other regions of this trajectory, the
			model seems highly uncertain of how the trajectory will evolve shortly after passing
			near the origin.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Sl(p){let o;return{c(){o=L("critical points")},l(i){o=_(i,"critical points")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Vl(p){let o,i,h,f,u,c,g,k;return i=new Ya({props:{href:"https://en.wikipedia.org/wiki/Critical_point_(mathematics)",$$slots:{default:[Sl]},$$scope:{ctx:p}}}),f=new ms({props:{id:"osinga"}}),c=new ms({props:{id:"osinga"}}),{c(){o=L(`For anyone familiar with dynamical systems theory, it won't be a surprise that this point
		coincides with one of the three `),b(i.$$.fragment),h=L(` of the Lorenz system--in this case, the origin. And in this parameterization, the origin is
		known to be a saddle point comprised of the intersection of a stable 2D manifold and an unstable
		1D manifold. "Stable" means that trajectories near the manifold tend to move towards it even
		when they are perturbed slightly away from it by other forces, while "unstable" implies the opposite.
		(See `),b(f.$$.fragment),u=L(` for some excellent visualizations of these manifolds.) Near the origin,
		the unstable manifold is a line that is approximately perpendicular to the Z axis and parallel
		to the lengthwise orientation of the Attractor, which is why the trajectories always diverge
		at the near 90-degree angles that we see in the animations as they approach the origin. And the
		(incredibly complex) topography of the stable 2D manifold determines towards which of the other
		two critical points a trajectory will be deflected `),b(c.$$.fragment),g=L(`. From this I conclude
		that, technically, we can say that the primary goal of our neural network is to learn the
		topography of the origin's stable 2D manifold. As the manifold defines a boundary across
		which trajectories can never pass, we can confine the past and future trajectory of any
		point to be within the boundary.
	`)},l(v){o=_(v,`For anyone familiar with dynamical systems theory, it won't be a surprise that this point
		coincides with one of the three `),j(i.$$.fragment,v),h=_(v,` of the Lorenz system--in this case, the origin. And in this parameterization, the origin is
		known to be a saddle point comprised of the intersection of a stable 2D manifold and an unstable
		1D manifold. "Stable" means that trajectories near the manifold tend to move towards it even
		when they are perturbed slightly away from it by other forces, while "unstable" implies the opposite.
		(See `),j(f.$$.fragment,v),u=_(v,` for some excellent visualizations of these manifolds.) Near the origin,
		the unstable manifold is a line that is approximately perpendicular to the Z axis and parallel
		to the lengthwise orientation of the Attractor, which is why the trajectories always diverge
		at the near 90-degree angles that we see in the animations as they approach the origin. And the
		(incredibly complex) topography of the stable 2D manifold determines towards which of the other
		two critical points a trajectory will be deflected `),j(c.$$.fragment,v),g=_(v,`. From this I conclude
		that, technically, we can say that the primary goal of our neural network is to learn the
		topography of the origin's stable 2D manifold. As the manifold defines a boundary across
		which trajectories can never pass, we can confine the past and future trajectory of any
		point to be within the boundary.
	`)},m(v,w){x(v,o,w),M(i,v,w),x(v,h,w),M(f,v,w),x(v,u,w),M(c,v,w),x(v,g,w),k=!0},p(v,w){const S={};w&128&&(S.$$scope={dirty:w,ctx:v}),i.$set(S)},i(v){k||(E(i.$$.fragment,v),E(f.$$.fragment,v),E(c.$$.fragment,v),k=!0)},o(v){y(i.$$.fragment,v),y(f.$$.fragment,v),y(c.$$.fragment,v),k=!1},d(v){v&&(e(o),e(h),e(u),e(g)),D(i,v),D(f,v),D(c,v)}}}function zl(p){let o,i="$f(t) = \\exp(\\lambda t)$",h,f,u="$\\lambda$",c,g,k="$11.8$",v,w;return{c(){o=L(`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
		Jacobian matrix of the system at the origin and assuming the dynamics are approximately
		linear in this region. The eigenvalue with the largest real component dominates the
		dynamics, and by definition, the real part of this eigenvalue for an unstable mainfold will
		be positive, with the dynamics along the manifold being approximated by the expression `),h=L(i),f=L(`,
		where `),c=L(u),g=L(` equals the real part of the largest eigenvalue. For the Lorenz Attractor,
		this value is `),v=L(k),w=L(`, so trajectories will be rapidly deflected away from the origin, as
		we see in the below animation:`)},l(S){o=_(S,`We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
		Jacobian matrix of the system at the origin and assuming the dynamics are approximately
		linear in this region. The eigenvalue with the largest real component dominates the
		dynamics, and by definition, the real part of this eigenvalue for an unstable mainfold will
		be positive, with the dynamics along the manifold being approximated by the expression `),h=_(S,i),f=_(S,`,
		where `),c=_(S,u),g=_(S,` equals the real part of the largest eigenvalue. For the Lorenz Attractor,
		this value is `),v=_(S,k),w=_(S,`, so trajectories will be rapidly deflected away from the origin, as
		we see in the below animation:`)},m(S,Q){x(S,o,Q),x(S,h,Q),x(S,f,Q),x(S,c,Q),x(S,g,Q),x(S,v,Q),x(S,w,Q)},p:Ln,d(S){S&&(e(o),e(h),e(f),e(c),e(g),e(v),e(w))}}}function Il(p){let o;return{c(){o=L(`The trajectories from the training set all begin at nearly the same point but quickly
			diverge as they approach the critical point at the origin.`)},l(i){o=_(i,`The trajectories from the training set all begin at nearly the same point but quickly
			diverge as they approach the critical point at the origin.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Al(p){let o;return{c(){o=L(`Given all of this background, it is now unsurprising that the model is struggling to
		predict the behavior of the system near the origin. But we should also note that the model
		does quite well at predicting basically every other region of the system. We just have to
		figure out a way to improve the predictions near the origin, and then we should have a model
		with an overall very robust representation of the Lorenz Attractor. As this model and its
		training set are relatively modest in size, the next most obvious step to try is to
		signifcantly increase both the amount of training data and the model's capacity, and see if
		those changes alone are enough to resolve the weaknesses of Model 1.`)},l(i){o=_(i,`Given all of this background, it is now unsurprising that the model is struggling to
		predict the behavior of the system near the origin. But we should also note that the model
		does quite well at predicting basically every other region of the system. We just have to
		figure out a way to improve the predictions near the origin, and then we should have a model
		with an overall very robust representation of the Lorenz Attractor. As this model and its
		training set are relatively modest in size, the next most obvious step to try is to
		signifcantly increase both the amount of training data and the model's capacity, and see if
		those changes alone are enough to resolve the weaknesses of Model 1.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function ql(p){let o;return{c(){o=L("Model 2")},l(i){o=_(i,"Model 2")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Tl(p){let o;return{c(){o=L(`For the next model, I increased the number of unique initial conditions from 25 to 10000,
		and held out 100 for validation and 200 for testing, leaving 9700 unique initial conditions,
		each of length 10,000 points, or about 150 seconds, in the training set. I also expanded the
		range of hyperparameters for tuning to include significantly larger models, both in depth
		and width. After tuning, I arrived at the following settings:`)},l(i){o=_(i,`For the next model, I increased the number of unique initial conditions from 25 to 10000,
		and held out 100 for validation and 200 for testing, leaving 9700 unique initial conditions,
		each of length 10,000 points, or about 150 seconds, in the training set. I also expanded the
		range of hyperparameters for tuning to include significantly larger models, both in depth
		and width. After tuning, I arrived at the following settings:`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Pl(p){let o;return{c(){o=L("Model 2 vs Model 1 - sMAPE error distribution.")},l(i){o=_(i,"Model 2 vs Model 1 - sMAPE error distribution.")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Rl(p){let o;return{c(){o=L(`From the plot, we see a significant increase in the first bin and a reduction in every
		subsequent bin of the per-window error histogram relative to Model 1, so the larger dataset
		and new hyperparameter tunings have a definite and significant positive impact. 99% of
		windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1, and 99.9%
		have a sMAPE less than 40, compared to 98% for Model 1.`)},l(i){o=_(i,`From the plot, we see a significant increase in the first bin and a reduction in every
		subsequent bin of the per-window error histogram relative to Model 1, so the larger dataset
		and new hyperparameter tunings have a definite and significant positive impact. 99% of
		windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1, and 99.9%
		have a sMAPE less than 40, compared to 98% for Model 1.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Nl(p){let o;return{c(){o=L(`There are, however, still a handful of windows with very large sMAPE errors. We can
		visualize these errors slightly differently to get a better sense of how they are
		distributed within and across the test series:`)},l(i){o=_(i,`There are, however, still a handful of windows with very large sMAPE errors. We can
		visualize these errors slightly differently to get a better sense of how they are
		distributed within and across the test series:`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Gl(p){let o;return{c(){o=L("Model 2 - sMAPE errors per series per window in the test set.")},l(i){o=_(i,"Model 2 - sMAPE errors per series per window in the test set.")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Cl(p){let o;return{c(){o=L(`We see that very large errors occur quite rarely and briefly, with the predictions spending
		most of the time near the ground truth. Let's check the animation for one of the large
		spikes with a sMAPE greater than 100:`)},l(i){o=_(i,`We see that very large errors occur quite rarely and briefly, with the predictions spending
		most of the time near the ground truth. Let's check the animation for one of the large
		spikes with a sMAPE greater than 100:`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Fl(p){let o;return{c(){o=L(`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. DFO =
			'distance from origin'`)},l(i){o=_(i,`Model 2 - a trajectory with one of the largest sMAPE errors from the test set. DFO =
			'distance from origin'`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Hl(p){let o;return{c(){o=L(`Not surprisingly, this trajectory passes very close to the origin, and we immediately see
		how similar this failure case is to the one from Model 1. Despite the average improvement
		across all error magnitudes, has the model's ability to predict the behavior near the
		unstable origin actually improved significantly relative to Model 1? Let's check:`)},l(i){o=_(i,`Not surprisingly, this trajectory passes very close to the origin, and we immediately see
		how similar this failure case is to the one from Model 1. Despite the average improvement
		across all error magnitudes, has the model's ability to predict the behavior near the
		unstable origin actually improved significantly relative to Model 1? Let's check:`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Bl(p){let o,i="$n$",h,f,u="$n-1$",c,g,k="$n+1$",v,w;return{c(){o=L(`Each local minimum distance from the origin on the ground truth trajectories is
			calculated, and the corresponding maximum sMAPE error among the windows that included
			the minimum in its target is shown. A local minimum is defined as a point at time `),h=L(i),f=L(`
			that is closer to the origin than the points at `),c=L(u),g=L(" and "),v=L(k),w=L(".")},l(S){o=_(S,`Each local minimum distance from the origin on the ground truth trajectories is
			calculated, and the corresponding maximum sMAPE error among the windows that included
			the minimum in its target is shown. A local minimum is defined as a point at time `),h=_(S,i),f=_(S,`
			that is closer to the origin than the points at `),c=_(S,u),g=_(S," and "),v=_(S,k),w=_(S,".")},m(S,Q){x(S,o,Q),x(S,h,Q),x(S,f,Q),x(S,c,Q),x(S,g,Q),x(S,v,Q),x(S,w,Q)},p:Ln,d(S){S&&(e(o),e(h),e(f),e(c),e(g),e(v),e(w))}}}function Wl(p){let o;return{c(){o=L(`As we can clearly see from the plot, Model 2 is able to predict points that are closer to
		the origin significantly more accurately than Model 1. So although Model 2 is not able to
		avoid catastraphic failure for all points, it has indeed reduced the number of points for
		which these failures occur.`)},l(i){o=_(i,`As we can clearly see from the plot, Model 2 is able to predict points that are closer to
		the origin significantly more accurately than Model 1. So although Model 2 is not able to
		avoid catastraphic failure for all points, it has indeed reduced the number of points for
		which these failures occur.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Ol(p){let o,i="$dt$",h,f,u="$dt$",c,g,k="$\\approx0.015$",v,w,S="$\\approx0.003$",Q,z,P="$\\approx1.5$",I,U;return{c(){o=L(`So we've drastically increased both model capacity and dataset size, and we have only
		achieved marginal improvement on the most chaotic trajectories. To continue to make
		progress, we probably need to try a different approach. One idea is to increase the temporal
		resolution of the model by using a smaller `),h=L(i),f=L(` to generate our data points. So far we've
		used a `),c=L(u),g=L(" of "),v=L(k),w=L(". Let's try reducing that by a factor of 5 to "),Q=L(S),z=L(`,
		and in order to keep the prediction task equally difficult, we'll also increase the horizon
		window, and lookback window, by a factor of 5 to 500 and 2500 respectively, so that the
		total amount of time being predicted is still `),I=L(P),U=L(` seconds. We'll call this Model
		3.`)},l(A){o=_(A,`So we've drastically increased both model capacity and dataset size, and we have only
		achieved marginal improvement on the most chaotic trajectories. To continue to make
		progress, we probably need to try a different approach. One idea is to increase the temporal
		resolution of the model by using a smaller `),h=_(A,i),f=_(A,` to generate our data points. So far we've
		used a `),c=_(A,u),g=_(A," of "),v=_(A,k),w=_(A,". Let's try reducing that by a factor of 5 to "),Q=_(A,S),z=_(A,`,
		and in order to keep the prediction task equally difficult, we'll also increase the horizon
		window, and lookback window, by a factor of 5 to 500 and 2500 respectively, so that the
		total amount of time being predicted is still `),I=_(A,P),U=_(A,` seconds. We'll call this Model
		3.`)},m(A,F){x(A,o,F),x(A,h,F),x(A,f,F),x(A,c,F),x(A,g,F),x(A,v,F),x(A,w,F),x(A,Q,F),x(A,z,F),x(A,I,F),x(A,U,F)},p:Ln,d(A){A&&(e(o),e(h),e(f),e(c),e(g),e(v),e(w),e(Q),e(z),e(I),e(U))}}}function Ul(p){let o;return{c(){o=L("Model 3")},l(i){o=_(i,"Model 3")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Kl(p){let o;return{c(){o=L("FSDP Strategy")},l(i){o=_(i,"FSDP Strategy")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Jl(p){let o,i,h,f,u,c;return f=new Ya({props:{href:"https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html",$$slots:{default:[Kl]},$$scope:{ctx:p}}}),{c(){o=L("A sidenote on the practicality of training this model: "),i=R("p"),h=L(`Although we have not increased the number of parameters relative to Model 2, by
			increasing the input size and horizon length by a factor of 5, we have significantly
			increased the memory requirement for training this model. Now in order to fit the model
			on two GPUs with 16 GB of RAM each, I have to use Lightning's `),b(f.$$.fragment),u=L(` to distribute the model across both GPUs and get the per-GPU memory requirement to be just
			a hair under 16 GB. This also means that the model trains significantly more slowly, taking
			about 40 hours to converge, compared to about 16 hours for Model 2.`),this.h()},l(g){o=_(g,"A sidenote on the practicality of training this model: "),i=N(g,"P",{class:!0});var k=r(i);h=_(k,`Although we have not increased the number of parameters relative to Model 2, by
			increasing the input size and horizon length by a factor of 5, we have significantly
			increased the memory requirement for training this model. Now in order to fit the model
			on two GPUs with 16 GB of RAM each, I have to use Lightning's `),j(f.$$.fragment,k),u=_(k,` to distribute the model across both GPUs and get the per-GPU memory requirement to be just
			a hair under 16 GB. This also means that the model trains significantly more slowly, taking
			about 40 hours to converge, compared to about 16 hours for Model 2.`),k.forEach(e),this.h()},h(){t(i,"class","ms-8")},m(g,k){x(g,o,k),x(g,i,k),n(i,h),M(f,i,null),n(i,u),c=!0},p(g,k){const v={};k&128&&(v.$$scope={dirty:k,ctx:g}),f.$set(v)},i(g){c||(E(f.$$.fragment,g),c=!0)},o(g){y(f.$$.fragment,g),c=!1},d(g){g&&(e(o),e(i)),D(f)}}}function Yl(p){let o,i="$dt \\approx 0.003$",h,f,u="$\\lt80$",c,g;return{c(){o=L(`After retraining Model 2 with a new dataset that samples the Lorenz Attractor trajectories
		with `),h=L(i),f=L(`, we see that we are now able to predict all regions of the test
		set with sMAPE error `),c=L(u),g=L(":")},l(k){o=_(k,`After retraining Model 2 with a new dataset that samples the Lorenz Attractor trajectories
		with `),h=_(k,i),f=_(k,`, we see that we are now able to predict all regions of the test
		set with sMAPE error `),c=_(k,u),g=_(k,":")},m(k,v){x(k,o,v),x(k,h,v),x(k,f,v),x(k,c,v),x(k,g,v)},p:Ln,d(k){k&&(e(o),e(h),e(f),e(c),e(g))}}}function Xl(p){let o;return{c(){o=L("Model 3 vs. Model 2 - sMAPE error distribution.")},l(i){o=_(i,"Model 3 vs. Model 2 - sMAPE error distribution.")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function Zl(p){let o;return{c(){o=L(`The most challenging trajectories from the test set are significantly improved, although
		still far from perfect:`)},l(i){o=_(i,`The most challenging trajectories from the test set are significantly improved, although
		still far from perfect:`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function e1(p){let o;return{c(){o=L(`The maximum-error trajectory from the test set for Model 3. Although there is still lots
			of room for improvement, the predictions now at least roughly track the general contour
			of the ground truth.`)},l(i){o=_(i,`The maximum-error trajectory from the test set for Model 3. Although there is still lots
			of room for improvement, the predictions now at least roughly track the general contour
			of the ground truth.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function t1(p){let o,i="$dt \\approx 0.015$",h,f,u="$dt \\approx 0.003$",c,g;return{c(){o=L(`Based on the results of Model 3, we can conclude that a primary limiting factor with
		previous models was the temporal resolution of the trajectory's history; the information
		required to make an accurate prediction for the most challenging trajectories is apparently
		not contained in trajectories with a sample period of `),h=L(i),f=L(`, but much more
		of it is contained in trajectories with a sample period of `),c=L(u),g=L(".")},l(k){o=_(k,`Based on the results of Model 3, we can conclude that a primary limiting factor with
		previous models was the temporal resolution of the trajectory's history; the information
		required to make an accurate prediction for the most challenging trajectories is apparently
		not contained in trajectories with a sample period of `),h=_(k,i),f=_(k,`, but much more
		of it is contained in trajectories with a sample period of `),c=_(k,u),g=_(k,".")},m(k,v){x(k,o,v),x(k,h,v),x(k,f,v),x(k,c,v),x(k,g,v)},p:Ln,d(k){k&&(e(o),e(h),e(f),e(c),e(g))}}}function n1(p){let o;return{c(){o=L("Autoregressive Generation")},l(i){o=_(i,"Autoregressive Generation")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function r1(p){let o,i="$\\approx 7.5$",h,f;return{c(){o=L("Now that we have a model that adequately approximates the ODE given the last "),h=L(i),f=L(`
		seconds of the IVP solver's output, the next test is to measure how well the model continues
		to predict the trajectory given its own past predictions. To do this, for each trajectory in
		the test set, we will begin by using the first 2500 points to produce the model's prediction
		for points 2501-3000. Then we'll feed those 500 points back into the input to predict points
		3001-3500, and continue in this way for all 10,000 points in each trajectory. Then we can compare
		how closely the predicted trajectories match the ones produced by the IVP solver.
	`)},l(u){o=_(u,"Now that we have a model that adequately approximates the ODE given the last "),h=_(u,i),f=_(u,`
		seconds of the IVP solver's output, the next test is to measure how well the model continues
		to predict the trajectory given its own past predictions. To do this, for each trajectory in
		the test set, we will begin by using the first 2500 points to produce the model's prediction
		for points 2501-3000. Then we'll feed those 500 points back into the input to predict points
		3001-3500, and continue in this way for all 10,000 points in each trajectory. Then we can compare
		how closely the predicted trajectories match the ones produced by the IVP solver.
	`)},m(u,c){x(u,o,c),x(u,h,c),x(u,f,c)},p:Ln,d(u){u&&(e(o),e(h),e(f))}}}function a1(p){let o,i="$\\approx7.2$",h,f;return{c(){o=L("When we do this, we find that Model 3 is, on average, able to predict the first "),h=L(i),f=L(`
		seconds of the trajectory before it begins to diverge significantly from the reference (I arrived
		at this by calculating the mean time at which the L2 distance between the trajectories exceeds
		3). But we also note that, although there are clearly visible differences between the reference
		and the prediction, the full 10,000-point trajectories that Model 3 predicts are, to the naked
		eye at least, more or less indistinguishable from the typical trajectories of the Lorenz Attractor.
		In other words, they look like entirely plausible trajectories even if they eventually diverge
		significantly from the ones produced by the IVP solver for the same initial conditions.`)},l(u){o=_(u,"When we do this, we find that Model 3 is, on average, able to predict the first "),h=_(u,i),f=_(u,`
		seconds of the trajectory before it begins to diverge significantly from the reference (I arrived
		at this by calculating the mean time at which the L2 distance between the trajectories exceeds
		3). But we also note that, although there are clearly visible differences between the reference
		and the prediction, the full 10,000-point trajectories that Model 3 predicts are, to the naked
		eye at least, more or less indistinguishable from the typical trajectories of the Lorenz Attractor.
		In other words, they look like entirely plausible trajectories even if they eventually diverge
		significantly from the ones produced by the IVP solver for the same initial conditions.`)},m(u,c){x(u,o,c),x(u,h,c),x(u,f,c)},p:Ln,d(u){u&&(e(o),e(h),e(f))}}}function s1(p){let o;return{c(){o=L(`Comparison of trajectories generated by the IVP solver (left) and auto-regressively
			generated by Model 3 (right). Each row uses the same initial conditions.`)},l(i){o=_(i,`Comparison of trajectories generated by the IVP solver (left) and auto-regressively
			generated by Model 3 (right). Each row uses the same initial conditions.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function o1(p){let o;return{c(){o=L("shadowing lemma")},l(i){o=_(i,"shadowing lemma")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function i1(p){let o,i,h,f;return i=new Ya({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[o1]},$$scope:{ctx:p}}}),{c(){o=L(`Is there a way to confirm this observation more rigorously than with the eye test alone?
		I'm not sure, and I'll have to leave that question for future work. But it's also crucial to
		note that different IVP solvers also produce diverging trajectories in much the same manner
		as this. In fact, all numerical solutions to chaotic equations are known to diverge from the
		true solution due to the rounding error introduced by finite precision. The `),b(i.$$.fragment),h=L(` tells us that, in spite of this, the trajectories produced by IVP solvers still remain arbitrarily
		close to real trajectories from the ODE even if they do not exactly represent the ones that would
		be produced by the given initial conditions.
	`)},l(u){o=_(u,`Is there a way to confirm this observation more rigorously than with the eye test alone?
		I'm not sure, and I'll have to leave that question for future work. But it's also crucial to
		note that different IVP solvers also produce diverging trajectories in much the same manner
		as this. In fact, all numerical solutions to chaotic equations are known to diverge from the
		true solution due to the rounding error introduced by finite precision. The `),j(i.$$.fragment,u),h=_(u,` tells us that, in spite of this, the trajectories produced by IVP solvers still remain arbitrarily
		close to real trajectories from the ODE even if they do not exactly represent the ones that would
		be produced by the given initial conditions.
	`)},m(u,c){x(u,o,c),M(i,u,c),x(u,h,c),f=!0},p(u,c){const g={};c&128&&(g.$$scope={dirty:c,ctx:u}),i.$set(g)},i(u){f||(E(i.$$.fragment,u),f=!0)},o(u){y(i.$$.fragment,u),f=!1},d(u){u&&(e(o),e(h)),D(i,u)}}}function l1(p){let o;return{c(){o=L("dysts")},l(i){o=_(i,"dysts")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function u1(p){let o;return{c(){o=L("Radau")},l(i){o=_(i,"Radau")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function h1(p){let o;return{c(){o=L("RK45")},l(i){o=_(i,"RK45")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function f1(p){let o,i,h,f,u,c,g,k;return i=new Ya({props:{href:"https://github.com/williamgilpin/dysts",$$slots:{default:[l1]},$$scope:{ctx:p}}}),f=new Ya({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html",$$slots:{default:[u1]},$$scope:{ctx:p}}}),c=new Ya({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45",$$slots:{default:[h1]},$$scope:{ctx:p}}}),{c(){o=L(`In light of this, another way to evaluate the autoregressive output of our model is to
		compare it with the output from a different IVP solver with similar error constraints. `),b(i.$$.fragment),h=L(" uses the "),b(f.$$.fragment),u=L(" solver by default, and this is what I used to generate the dataset. "),b(c.$$.fragment),g=L(` has similar error constraints to Radau, so let's compare our autoregressive output against
		Radau relative to RK45's output against Radau:`)},l(v){o=_(v,`In light of this, another way to evaluate the autoregressive output of our model is to
		compare it with the output from a different IVP solver with similar error constraints. `),j(i.$$.fragment,v),h=_(v," uses the "),j(f.$$.fragment,v),u=_(v," solver by default, and this is what I used to generate the dataset. "),j(c.$$.fragment,v),g=_(v,` has similar error constraints to Radau, so let's compare our autoregressive output against
		Radau relative to RK45's output against Radau:`)},m(v,w){x(v,o,w),M(i,v,w),x(v,h,w),M(f,v,w),x(v,u,w),M(c,v,w),x(v,g,w),k=!0},p(v,w){const S={};w&128&&(S.$$scope={dirty:w,ctx:v}),i.$set(S);const Q={};w&128&&(Q.$$scope={dirty:w,ctx:v}),f.$set(Q);const z={};w&128&&(z.$$scope={dirty:w,ctx:v}),c.$set(z)},i(v){k||(E(i.$$.fragment,v),E(f.$$.fragment,v),E(c.$$.fragment,v),k=!0)},o(v){y(i.$$.fragment,v),y(f.$$.fragment,v),y(c.$$.fragment,v),k=!1},d(v){v&&(e(o),e(h),e(u),e(g)),D(i,v),D(f,v),D(c,v)}}}function d1(p){let o;return{c(){o=L("solve_ivp")},l(i){o=_(i,"solve_ivp")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function c1(p){let o,i,h,f;return i=new Ya({props:{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html",$$slots:{default:[d1]},$$scope:{ctx:p}}}),{c(){o=L(`Comparing the mean absolute error per timestep between Radau and Model 3 (blue) and
			Radua and RK45 (orange). The error is averaged across 200 different trajectories.
			Scipy's `),b(i.$$.fragment),h=L(" is used to produce the IVP solver outputs.")},l(u){o=_(u,`Comparing the mean absolute error per timestep between Radau and Model 3 (blue) and
			Radua and RK45 (orange). The error is averaged across 200 different trajectories.
			Scipy's `),j(i.$$.fragment,u),h=_(u," is used to produce the IVP solver outputs.")},m(u,c){x(u,o,c),M(i,u,c),x(u,h,c),f=!0},p(u,c){const g={};c&128&&(g.$$scope={dirty:c,ctx:u}),i.$set(g)},i(u){f||(E(i.$$.fragment,u),f=!0)},o(u){y(i.$$.fragment,u),f=!1},d(u){u&&(e(o),e(h)),D(i,u)}}}function g1(p){let o;return{c(){o=L(`So we can say that our model is approximating the output of Radau more closely than another
		high-quality IVP solver. Ultimately, all three solvers diverge chaotically from each other,
		but in the short term, Model 3 remains closer to Radau than RK45. From this I tenatively
		conclude that our model is an effective IVP solver of the Lorenz Attractor.`)},l(i){o=_(i,`So we can say that our model is approximating the output of Radau more closely than another
		high-quality IVP solver. Ultimately, all three solvers diverge chaotically from each other,
		but in the short term, Model 3 remains closer to Radau than RK45. From this I tenatively
		conclude that our model is an effective IVP solver of the Lorenz Attractor.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function p1(p){let o;return{c(){o=L("Conclusion")},l(i){o=_(i,"Conclusion")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function m1(p){let o,i,h,f,u,c="$5H$",g,k,v="$H$",w,S,Q;return i=new ms({props:{id:"gilpin"}}),f=new ms({props:{id:"challu"}}),{c(){o=L("Inspired by recent research ("),b(i.$$.fragment),h=L(`) that supports the potential for generic
		neural architectures to match or exceed the performance of domain-specific models at the
		task of predicting chaotic systems, this project demonstrated the strong potential of at
		least one generic neural architecture (`),b(f.$$.fragment),u=L(`) to qualitatively match the
		performance of state-of-the-art IVP solvers, such as Radau, at integrating the ODE for at
		least one specific system--Lorenz--using only examples of solutions, with no explicit
		representation of the underlying ODE, to build up a model of the entire dynamics of the
		system. Given `),g=L(c),k=L(` points of an initial trajectory and at a high enough temporal resolution,
		the neural model demonstrated the ability to predict the subsequent `),w=L(v),S=L(` outputs of the Radau
		solver with, in most cases, high accuracy, and in the worst case, marginal accuracy, for all
		trajectories in a test set that uniformly sampled the phase space of the system. When used autoregressively,
		the model demonstrated the potential to generate arbitrarily long trajectories that are visually
		indistinguishable from typical trajectories of the system and that match the output of the Radau
		solver at least as well as other state-of-the-art IVP solvers such as RK45.`)},l(z){o=_(z,"Inspired by recent research ("),j(i.$$.fragment,z),h=_(z,`) that supports the potential for generic
		neural architectures to match or exceed the performance of domain-specific models at the
		task of predicting chaotic systems, this project demonstrated the strong potential of at
		least one generic neural architecture (`),j(f.$$.fragment,z),u=_(z,`) to qualitatively match the
		performance of state-of-the-art IVP solvers, such as Radau, at integrating the ODE for at
		least one specific system--Lorenz--using only examples of solutions, with no explicit
		representation of the underlying ODE, to build up a model of the entire dynamics of the
		system. Given `),g=_(z,c),k=_(z,` points of an initial trajectory and at a high enough temporal resolution,
		the neural model demonstrated the ability to predict the subsequent `),w=_(z,v),S=_(z,` outputs of the Radau
		solver with, in most cases, high accuracy, and in the worst case, marginal accuracy, for all
		trajectories in a test set that uniformly sampled the phase space of the system. When used autoregressively,
		the model demonstrated the potential to generate arbitrarily long trajectories that are visually
		indistinguishable from typical trajectories of the system and that match the output of the Radau
		solver at least as well as other state-of-the-art IVP solvers such as RK45.`)},m(z,P){x(z,o,P),M(i,z,P),x(z,h,P),M(f,z,P),x(z,u,P),x(z,g,P),x(z,k,P),x(z,w,P),x(z,S,P),Q=!0},p:Ln,i(z){Q||(E(i.$$.fragment,z),E(f.$$.fragment,z),Q=!0)},o(z){y(i.$$.fragment,z),y(f.$$.fragment,z),Q=!1},d(z){z&&(e(o),e(h),e(u),e(g),e(k),e(w),e(S)),D(i,z),D(f,z)}}}function $1(p){let o;return{c(){o=L(`It must be noted, however, that the amount of data and model capacity used to achieve these
		results was substantial. Roughly 100 million data points from the Lorenz Attractor were used
		to train a model with over half a billion parameters for 40 hours using two GPUs. Although
		these numbers are modest compared to many of the most successful deep learning applications
		today, they are likely still far from trivial, in my opinion. For how many real-world
		chaotic systems with no known ODE representation is it feasible to gather 100 million data
		points? And could such a large model be optimized to run predictions in real-time for
		systems that require it to? I certainly do not know, but it seems plausible that such
		requirements could pose a significant barrier in many real-world cases. Having said all of
		that, it must also be noted that maximizing data and model efficiency was not a focus of
		this project, and so the potential for optimization is an open question.`)},l(i){o=_(i,`It must be noted, however, that the amount of data and model capacity used to achieve these
		results was substantial. Roughly 100 million data points from the Lorenz Attractor were used
		to train a model with over half a billion parameters for 40 hours using two GPUs. Although
		these numbers are modest compared to many of the most successful deep learning applications
		today, they are likely still far from trivial, in my opinion. For how many real-world
		chaotic systems with no known ODE representation is it feasible to gather 100 million data
		points? And could such a large model be optimized to run predictions in real-time for
		systems that require it to? I certainly do not know, but it seems plausible that such
		requirements could pose a significant barrier in many real-world cases. Having said all of
		that, it must also be noted that maximizing data and model efficiency was not a focus of
		this project, and so the potential for optimization is an open question.`)},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function L1(p){let o;return{c(){o=L("shadowing lemma")},l(i){o=_(i,"shadowing lemma")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function _1(p){let o,i,h,f,u,c,g,k;return i=new Ya({props:{href:"https://en.wikipedia.org/wiki/Shadowing_lemma",$$slots:{default:[L1]},$$scope:{ctx:p}}}),f=new ms({props:{id:"seo"}}),c=new ms({props:{id:"degrave"}}),{c(){o=L(`My other, and possibly more critical, open question is, given that this model (and all IVP
		solvers) cannot actually predict the true solution but instead can only predict 'shadows' of
		true solutions (see `),b(i.$$.fragment),h=L(`), how useful can these predictions actually be in real-world applications? Is there any
		practical use for such a system, or are projects like this merely academic exercises? Is the
		true potential of deep neural networks as applied to chaotic systems more in their ability
		to prevent systems from entering chaotic regimes, as is explored in `),b(f.$$.fragment),u=L(`
		and `),b(c.$$.fragment),g=L(`, rather than to actually predict how chaotic dynamics will unfold?
		I suspect the answer is 'yes', although again I am far from certain. In either case, these
		results show a definite ability of generic deep neural networks to mimic the dynamics of a
		chaotic system, which may not amount to predicting future states but may still be enough to
		enable control systems to effectively manage those future states.`)},l(v){o=_(v,`My other, and possibly more critical, open question is, given that this model (and all IVP
		solvers) cannot actually predict the true solution but instead can only predict 'shadows' of
		true solutions (see `),j(i.$$.fragment,v),h=_(v,`), how useful can these predictions actually be in real-world applications? Is there any
		practical use for such a system, or are projects like this merely academic exercises? Is the
		true potential of deep neural networks as applied to chaotic systems more in their ability
		to prevent systems from entering chaotic regimes, as is explored in `),j(f.$$.fragment,v),u=_(v,`
		and `),j(c.$$.fragment,v),g=_(v,`, rather than to actually predict how chaotic dynamics will unfold?
		I suspect the answer is 'yes', although again I am far from certain. In either case, these
		results show a definite ability of generic deep neural networks to mimic the dynamics of a
		chaotic system, which may not amount to predicting future states but may still be enough to
		enable control systems to effectively manage those future states.`)},m(v,w){x(v,o,w),M(i,v,w),x(v,h,w),M(f,v,w),x(v,u,w),M(c,v,w),x(v,g,w),k=!0},p(v,w){const S={};w&128&&(S.$$scope={dirty:w,ctx:v}),i.$set(S)},i(v){k||(E(i.$$.fragment,v),E(f.$$.fragment,v),E(c.$$.fragment,v),k=!0)},o(v){y(i.$$.fragment,v),y(f.$$.fragment,v),y(c.$$.fragment,v),k=!1},d(v){v&&(e(o),e(h),e(u),e(g)),D(i,v),D(f,v),D(c,v)}}}function k1(p){let o;return{c(){o=L("References")},l(i){o=_(i,"References")},m(i,h){x(i,o,h)},d(i){i&&e(o)}}}function x1(p){let o,i,h="Modeling Chaotic Dynamics with Deep Learning: A Case Study on the Lorenz Attractor",f,u,c="Michael Horgan",g,k,v,w,S,Q,z,P,I=`* All of my experiments were run on a Paperspace VM using two RTX 5000s, each with 16 GB
			of RAM.`,U,A,F,Z,re,ee,Ie,ue,H,B,ce,V,G,Jt,K,W,_n,Ae,J,xe,ve,ge,kn,Yt,pe,xn,bt,Jn,qe,vn,jt,Yn,tt,Xn,Rn,aa,sa,Nr,Mt,Zn,me,er,Te,va,Xt,Fa,En,mr,Zt,en,nt,tn,Nn,wn,Gr,Dt,yn,tr,Ea,Qn,bn,Gn,rt,Cn,Fn,wa,nn,Cr,Ee,$r="The full set of N-HiTS hyperparameters for the first model configuration is:",Lr,nr,ya,te,Fr,at,we,Hn,St,_r,rn,ae,ye,jn,se,Qe,Pe,Vt,Re,oe,an,rr,st,kr,ot,oa,Ne,xr,zt,Hr,Mn,sn,ar,Br,be,vr,on,ln,ia,un,Ge,sr,la,It,ua,it,Er,lt,Wr,Dn,Qa,Ce,ha,$e,Ha=`Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
		increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of the
		network, and I've also significantly increased the amount of compression in the initial
		stacks. Because the network is much deeper, I also added layer normalization after each
		block to try to help reduce convergence time. Lastly, I increased the number of training
		steps and reduced the initial learning rate by an order of magnitude, and I modified the
		learning rate schedule to reduce by half whenever the validation loss does not decrease from
		the previous validation step.`,wr,or,hn,Le,Sn,fn,je,Fe,Or,He,Be,Ur,We,ir,At,yr,qt,ut,ba,Qr,ie,br,Tt,Me,_e,Oe,lr,De,Vn,Ue,Pt,Ke,ur,Bn,dn,zn,Kr,cn,Jr,Rt,jr,Nt,ht,ja,Gt,Yr,ft,Mr,dt,gn,fa,da,Ct,Dr,ct,Sr,In,Vr,pn,gt,zr,pt,Ft,Ma,mt,Da,Se,$t,Lt,Je,C,fe,Ir,O,Ye,_t,Ar,Xe,qr,kt,ca,Ht,xt,ga,Ze,Sa,mn,pa;return w=new X({props:{$$slots:{default:[Bi]},$$scope:{ctx:p}}}),S=new X({props:{$$slots:{default:[Wi]},$$scope:{ctx:p}}}),Z=new Ya({props:{href:"https://github.com/nrxszvo/mochaNN",$$slots:{default:[Oi]},$$scope:{ctx:p}}}),ue=new Ya({props:{href:"https://www.youtube.com/@SabineHossenfelder",$$slots:{default:[Ui]},$$scope:{ctx:p}}}),V=new Ya({props:{href:"https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA",$$slots:{default:[Ki]},$$scope:{ctx:p}}}),K=new F2({props:{$$slots:{default:[Ji]},$$scope:{ctx:p}}}),_n=new X({props:{$$slots:{default:[Xi]},$$scope:{ctx:p}}}),pe=new Ss({props:{$$slots:{default:[Zi]},$$scope:{ctx:p}}}),bt=new X({props:{$$slots:{default:[el]},$$scope:{ctx:p}}}),tt=new X({props:{$$slots:{default:[tl]},$$scope:{ctx:p}}}),Mt=new X({props:{$$slots:{default:[rl]},$$scope:{ctx:p}}}),me=new F2({props:{$$slots:{default:[al]},$$scope:{ctx:p}}}),Te=new X({props:{$$slots:{default:[sl]},$$scope:{ctx:p}}}),Xt=new X({props:{$$slots:{default:[ol]},$$scope:{ctx:p}}}),En=new X({props:{$$slots:{default:[il]},$$scope:{ctx:p}}}),Zt=new F2({props:{$$slots:{default:[ll]},$$scope:{ctx:p}}}),nt=new X({props:{$$slots:{default:[ul]},$$scope:{ctx:p}}}),tn=new x2({props:{$$slots:{default:[hl]},$$scope:{ctx:p}}}),Nn=new X({props:{$$slots:{default:[gl]},$$scope:{ctx:p}}}),wn=new X({props:{$$slots:{default:[Ll]},$$scope:{ctx:p}}}),Qn=new X({props:{indent:"indent-0",$$slots:{default:[_l]},$$scope:{ctx:p}}}),bn=new X({props:{$$slots:{default:[kl]},$$scope:{ctx:p}}}),rt=new X({props:{indent:"indent-0",$$slots:{default:[xl]},$$scope:{ctx:p}}}),Fn=new X({props:{$$slots:{default:[vl]},$$scope:{ctx:p}}}),nn=new x2({props:{$$slots:{default:[El]},$$scope:{ctx:p}}}),nr=new H2({props:{hps:p[4]}}),te=new X({props:{indent:"indent-0",$$slots:{default:[wl]},$$scope:{ctx:p}}}),St=new X({props:{$$slots:{default:[yl]},$$scope:{ctx:p}}}),se=new Ss({props:{$$slots:{default:[Ql]},$$scope:{ctx:p}}}),Pe=new X({props:{$$slots:{default:[bl]},$$scope:{ctx:p}}}),an=new Hi({}),st=new Ci({}),ot=new Ni({}),Ne=new Ss({props:{$$slots:{default:[jl]},$$scope:{ctx:p}}}),zt=new X({props:{$$slots:{default:[Ml]},$$scope:{ctx:p}}}),be=new Ss({props:{$$slots:{default:[Dl]},$$scope:{ctx:p}}}),on=new X({props:{$$slots:{default:[Vl]},$$scope:{ctx:p}}}),ln=new X({props:{$$slots:{default:[zl]},$$scope:{ctx:p}}}),It=new Ss({props:{$$slots:{default:[Il]},$$scope:{ctx:p}}}),it=new X({props:{$$slots:{default:[Al]},$$scope:{ctx:p}}}),lt=new x2({props:{$$slots:{default:[ql]},$$scope:{ctx:p}}}),Dn=new X({props:{$$slots:{default:[Tl]},$$scope:{ctx:p}}}),Ce=new H2({props:{hps:p[5]}}),Sn=new Ss({props:{$$slots:{default:[Pl]},$$scope:{ctx:p}}}),je=new X({props:{$$slots:{default:[Rl]},$$scope:{ctx:p}}}),Fe=new X({props:{$$slots:{default:[Nl]},$$scope:{ctx:p}}}),We=new Ss({props:{$$slots:{default:[Gl]},$$scope:{ctx:p}}}),At=new X({props:{$$slots:{default:[Cl]},$$scope:{ctx:p}}}),ie=new Ss({props:{$$slots:{default:[Fl]},$$scope:{ctx:p}}}),Tt=new X({props:{$$slots:{default:[Hl]},$$scope:{ctx:p}}}),De=new Ss({props:{$$slots:{default:[Bl]},$$scope:{ctx:p}}}),Ue=new X({props:{$$slots:{default:[Wl]},$$scope:{ctx:p}}}),Ke=new X({props:{$$slots:{default:[Ol]},$$scope:{ctx:p}}}),Bn=new x2({props:{$$slots:{default:[Ul]},$$scope:{ctx:p}}}),zn=new H2({props:{hps:p[6]}}),cn=new X({props:{style:"my-4 text-sm font-serif",indent:"indent-0",$$slots:{default:[Jl]},$$scope:{ctx:p}}}),Rt=new X({props:{$$slots:{default:[Yl]},$$scope:{ctx:p}}}),Gt=new Ss({props:{$$slots:{default:[Xl]},$$scope:{ctx:p}}}),ft=new X({props:{$$slots:{default:[Zl]},$$scope:{ctx:p}}}),Ct=new Ss({props:{$$slots:{default:[e1]},$$scope:{ctx:p}}}),ct=new X({props:{$$slots:{default:[t1]},$$scope:{ctx:p}}}),In=new x2({props:{$$slots:{default:[n1]},$$scope:{ctx:p}}}),pn=new X({props:{$$slots:{default:[r1]},$$scope:{ctx:p}}}),gt=new X({props:{$$slots:{default:[a1]},$$scope:{ctx:p}}}),mt=new Ss({props:{$$slots:{default:[s1]},$$scope:{ctx:p}}}),Se=new X({props:{$$slots:{default:[i1]},$$scope:{ctx:p}}}),$t=new X({props:{$$slots:{default:[f1]},$$scope:{ctx:p}}}),O=new Ss({props:{$$slots:{default:[c1]},$$scope:{ctx:p}}}),_t=new X({props:{$$slots:{default:[g1]},$$scope:{ctx:p}}}),Xe=new x2({props:{$$slots:{default:[p1]},$$scope:{ctx:p}}}),kt=new X({props:{$$slots:{default:[m1]},$$scope:{ctx:p}}}),Ht=new X({props:{$$slots:{default:[$1]},$$scope:{ctx:p}}}),xt=new X({props:{$$slots:{default:[_1]},$$scope:{ctx:p}}}),Ze=new x2({props:{$$slots:{default:[k1]},$$scope:{ctx:p}}}),mn=new yi({}),{c(){o=R("div"),i=R("div"),i.textContent=h,f=q(),u=R("div"),u.textContent=c,g=q(),k=R("br"),v=q(),b(w.$$.fragment),b(S.$$.fragment),Q=q(),z=R("div"),P=R("p"),P.textContent=I,U=q(),A=R("p"),F=L("note: All code used in this project is available in my github repo: "),b(Z.$$.fragment),re=q(),ee=R("p"),Ie=L(`note: For a quick and entertaining way to stay informed of new developments in the world
			of DL for dynamical systems modeling, I highly recommend Sabine Hossenfelder's `),b(ue.$$.fragment),H=q(),B=R("p"),ce=L(`note: If you would like to refresh your background on dynamical systems theory, I highly
			recommend Steve Brunton's free `),b(V.$$.fragment),G=L(" on the subject"),Jt=q(),b(K.$$.fragment),W=q(),b(_n.$$.fragment),Ae=q(),J=R("div"),xe=R("a"),ve=R("figure"),ge=R("img"),Yt=q(),b(pe.$$.fragment),xn=q(),b(bt.$$.fragment),Jn=q(),qe=R("div"),vn=R("p"),jt=L(p[0]),Yn=q(),b(tt.$$.fragment),Xn=q(),Rn=R("div"),aa=R("p"),sa=L(p[1]),Nr=q(),b(Mt.$$.fragment),Zn=q(),b(me.$$.fragment),er=q(),b(Te.$$.fragment),va=q(),b(Xt.$$.fragment),Fa=q(),b(En.$$.fragment),mr=q(),b(Zt.$$.fragment),en=q(),b(nt.$$.fragment),b(tn.$$.fragment),b(Nn.$$.fragment),b(wn.$$.fragment),Gr=q(),Dt=R("div"),yn=R("p"),tr=L(p[2]),Ea=q(),b(Qn.$$.fragment),b(bn.$$.fragment),Gn=q(),b(rt.$$.fragment),Cn=q(),b(Fn.$$.fragment),wa=q(),b(nn.$$.fragment),Cr=q(),Ee=R("p"),Ee.textContent=$r,Lr=q(),b(nr.$$.fragment),ya=q(),b(te.$$.fragment),Fr=q(),at=R("div"),we=L(p[3]),Hn=q(),b(St.$$.fragment),_r=q(),rn=R("figure"),ae=R("img"),jn=q(),b(se.$$.fragment),Qe=q(),b(Pe.$$.fragment),Vt=q(),Re=R("figure"),oe=R("div"),b(an.$$.fragment),rr=q(),b(st.$$.fragment),kr=q(),b(ot.$$.fragment),oa=q(),b(Ne.$$.fragment),xr=q(),b(zt.$$.fragment),Hr=q(),Mn=R("figure"),sn=R("img"),Br=q(),b(be.$$.fragment),vr=q(),b(on.$$.fragment),b(ln.$$.fragment),ia=q(),un=R("figure"),Ge=R("img"),la=q(),b(It.$$.fragment),ua=q(),b(it.$$.fragment),Er=q(),b(lt.$$.fragment),Wr=q(),b(Dn.$$.fragment),Qa=q(),b(Ce.$$.fragment),ha=q(),$e=R("p"),$e.textContent=Ha,wr=q(),or=R("figure"),hn=R("img"),b(Sn.$$.fragment),fn=q(),b(je.$$.fragment),b(Fe.$$.fragment),Or=q(),He=R("figure"),Be=R("img"),b(We.$$.fragment),ir=q(),b(At.$$.fragment),yr=q(),qt=R("figure"),ut=R("img"),Qr=q(),b(ie.$$.fragment),br=q(),b(Tt.$$.fragment),Me=q(),_e=R("figure"),Oe=R("img"),b(De.$$.fragment),Vn=q(),b(Ue.$$.fragment),Pt=q(),b(Ke.$$.fragment),ur=q(),b(Bn.$$.fragment),dn=q(),b(zn.$$.fragment),Kr=q(),b(cn.$$.fragment),Jr=q(),b(Rt.$$.fragment),jr=q(),Nt=R("figure"),ht=R("img"),b(Gt.$$.fragment),Yr=q(),b(ft.$$.fragment),Mr=q(),dt=R("figure"),gn=R("img"),da=q(),b(Ct.$$.fragment),Dr=q(),b(ct.$$.fragment),Sr=q(),b(In.$$.fragment),Vr=q(),b(pn.$$.fragment),b(gt.$$.fragment),zr=q(),pt=R("figure"),Ft=R("img"),b(mt.$$.fragment),Da=q(),b(Se.$$.fragment),b($t.$$.fragment),Lt=q(),Je=R("figure"),C=R("img"),Ir=q(),b(O.$$.fragment),Ye=q(),b(_t.$$.fragment),Ar=q(),b(Xe.$$.fragment),qr=q(),b(kt.$$.fragment),ca=q(),b(Ht.$$.fragment),b(xt.$$.fragment),ga=q(),b(Ze.$$.fragment),Sa=q(),b(mn.$$.fragment),this.h()},l(m){o=N(m,"DIV",{class:!0});var d=r(o);i=N(d,"DIV",{class:!0,"data-svelte-h":!0}),n2(i)!=="svelte-py3wln"&&(i.textContent=h),f=T(d),u=N(d,"DIV",{class:!0,"data-svelte-h":!0}),n2(u)!=="svelte-hve5fy"&&(u.textContent=c),g=T(d),k=N(d,"BR",{}),v=T(d),j(w.$$.fragment,d),j(S.$$.fragment,d),Q=T(d),z=N(d,"DIV",{class:!0});var vt=r(z);P=N(vt,"P",{"data-svelte-h":!0}),n2(P)!=="svelte-a477ex"&&(P.textContent=I),U=T(vt),A=N(vt,"P",{});var $n=r(A);F=_($n,"note: All code used in this project is available in my github repo: "),j(Z.$$.fragment,$n),$n.forEach(e),re=T(vt),ee=N(vt,"P",{});var hr=r(ee);Ie=_(hr,`note: For a quick and entertaining way to stay informed of new developments in the world
			of DL for dynamical systems modeling, I highly recommend Sabine Hossenfelder's `),j(ue.$$.fragment,hr),hr.forEach(e),H=T(vt),B=N(vt,"P",{});var Et=r(B);ce=_(Et,`note: If you would like to refresh your background on dynamical systems theory, I highly
			recommend Steve Brunton's free `),j(V.$$.fragment,Et),G=_(Et," on the subject"),Et.forEach(e),vt.forEach(e),Jt=T(d),j(K.$$.fragment,d),W=T(d),j(_n.$$.fragment,d),Ae=T(d),J=N(d,"DIV",{class:!0});var Tr=r(J);xe=N(Tr,"A",{title:!0,href:!0});var Bt=r(xe);ve=N(Bt,"FIGURE",{});var Wn=r(ve);ge=N(Wn,"IMG",{class:!0,width:!0,alt:!0,src:!0}),Yt=T(Wn),j(pe.$$.fragment,Wn),Wn.forEach(e),Bt.forEach(e),Tr.forEach(e),xn=T(d),j(bt.$$.fragment,d),Jn=T(d),qe=N(d,"DIV",{class:!0});var Y=r(qe);vn=N(Y,"P",{});var de=r(vn);jt=_(de,p[0]),de.forEach(e),Y.forEach(e),Yn=T(d),j(tt.$$.fragment,d),Xn=T(d),Rn=N(d,"DIV",{class:!0});var fr=r(Rn);aa=N(fr,"P",{});var dr=r(aa);sa=_(dr,p[1]),dr.forEach(e),fr.forEach(e),Nr=T(d),j(Mt.$$.fragment,d),Zn=T(d),j(me.$$.fragment,d),er=T(d),j(Te.$$.fragment,d),va=T(d),j(Xt.$$.fragment,d),Fa=T(d),j(En.$$.fragment,d),mr=T(d),j(Zt.$$.fragment,d),en=T(d),j(nt.$$.fragment,d),j(tn.$$.fragment,d),j(Nn.$$.fragment,d),j(wn.$$.fragment,d),Gr=T(d),Dt=N(d,"DIV",{class:!0});var cr=r(Dt);yn=N(cr,"P",{});var Wt=r(yn);tr=_(Wt,p[2]),Wt.forEach(e),cr.forEach(e),Ea=T(d),j(Qn.$$.fragment,d),j(bn.$$.fragment,d),Gn=T(d),j(rt.$$.fragment,d),Cn=T(d),j(Fn.$$.fragment,d),wa=T(d),j(nn.$$.fragment,d),Cr=T(d),Ee=N(d,"P",{class:!0,"data-svelte-h":!0}),n2(Ee)!=="svelte-u5zzza"&&(Ee.textContent=$r),Lr=T(d),j(nr.$$.fragment,d),ya=T(d),j(te.$$.fragment,d),Fr=T(d),at=N(d,"DIV",{});var Ot=r(at);we=_(Ot,p[3]),Ot.forEach(e),Hn=T(d),j(St.$$.fragment,d),_r=T(d),rn=N(d,"FIGURE",{class:!0});var Ut=r(rn);ae=N(Ut,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),jn=T(Ut),j(se.$$.fragment,Ut),Ut.forEach(e),Qe=T(d),j(Pe.$$.fragment,d),Vt=T(d),Re=N(d,"FIGURE",{class:!0});var wt=r(Re);oe=N(wt,"DIV",{class:!0});var Ve=r(oe);j(an.$$.fragment,Ve),rr=T(Ve),j(st.$$.fragment,Ve),kr=T(Ve),j(ot.$$.fragment,Ve),Ve.forEach(e),oa=T(wt),j(Ne.$$.fragment,wt),wt.forEach(e),xr=T(d),j(zt.$$.fragment,d),Hr=T(d),Mn=N(d,"FIGURE",{class:!0});var yt=r(Mn);sn=N(yt,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Br=T(yt),j(be.$$.fragment,yt),yt.forEach(e),vr=T(d),j(on.$$.fragment,d),j(ln.$$.fragment,d),ia=T(d),un=N(d,"FIGURE",{class:!0});var le=r(un);Ge=N(le,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),la=T(le),j(It.$$.fragment,le),le.forEach(e),ua=T(d),j(it.$$.fragment,d),Er=T(d),j(lt.$$.fragment,d),Wr=T(d),j(Dn.$$.fragment,d),Qa=T(d),j(Ce.$$.fragment,d),ha=T(d),$e=N(d,"P",{class:!0,"data-svelte-h":!0}),n2($e)!=="svelte-1dsw2lx"&&($e.textContent=Ha),wr=T(d),or=N(d,"FIGURE",{class:!0});var ne=r(or);hn=N(ne,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),j(Sn.$$.fragment,ne),ne.forEach(e),fn=T(d),j(je.$$.fragment,d),j(Fe.$$.fragment,d),Or=T(d),He=N(d,"FIGURE",{class:!0});var Kt=r(He);Be=N(Kt,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),j(We.$$.fragment,Kt),Kt.forEach(e),ir=T(d),j(At.$$.fragment,d),yr=T(d),qt=N(d,"FIGURE",{});var An=r(qt);ut=N(An,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Qr=T(An),j(ie.$$.fragment,An),An.forEach(e),br=T(d),j(Tt.$$.fragment,d),Me=T(d),_e=N(d,"FIGURE",{class:!0});var qn=r(_e);Oe=N(qn,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),j(De.$$.fragment,qn),qn.forEach(e),Vn=T(d),j(Ue.$$.fragment,d),Pt=T(d),j(Ke.$$.fragment,d),ur=T(d),j(Bn.$$.fragment,d),dn=T(d),j(zn.$$.fragment,d),Kr=T(d),j(cn.$$.fragment,d),Jr=T(d),j(Rt.$$.fragment,d),jr=T(d),Nt=N(d,"FIGURE",{class:!0});var Tn=r(Nt);ht=N(Tn,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),j(Gt.$$.fragment,Tn),Tn.forEach(e),Yr=T(d),j(ft.$$.fragment,d),Mr=T(d),dt=N(d,"FIGURE",{});var On=r(dt);gn=N(On,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),da=T(On),j(Ct.$$.fragment,On),On.forEach(e),Dr=T(d),j(ct.$$.fragment,d),Sr=T(d),j(In.$$.fragment,d),Vr=T(d),j(pn.$$.fragment,d),j(gt.$$.fragment,d),zr=T(d),pt=N(d,"FIGURE",{class:!0});var Pr=r(pt);Ft=N(Pr,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),j(mt.$$.fragment,Pr),Pr.forEach(e),Da=T(d),j(Se.$$.fragment,d),j($t.$$.fragment,d),Lt=T(d),Je=N(d,"FIGURE",{class:!0});var Un=r(Je);C=N(Un,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Ir=T(Un),j(O.$$.fragment,Un),Un.forEach(e),Ye=T(d),j(_t.$$.fragment,d),Ar=T(d),j(Xe.$$.fragment,d),qr=T(d),j(kt.$$.fragment,d),ca=T(d),j(Ht.$$.fragment,d),j(xt.$$.fragment,d),ga=T(d),j(Ze.$$.fragment,d),Sa=T(d),j(mn.$$.fragment,d),d.forEach(e),this.h()},h(){t(i,"class","mt-8 text-2xl text-center"),t(u,"class","mt-2 text-sm text-center"),t(z,"class","my-4 mx-16 text-sm font-serif -indent-16"),t(ge,"class","m-auto"),t(ge,"width","128"),t(ge,"alt","A Trajectory Through Phase Space in a Lorenz Attractor"),Bs(ge.src,kn="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif")||t(ge,"src",kn),t(xe,"title","Dan Quinn, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"),t(xe,"href","https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"),t(J,"class","my-2 self-center"),t(qe,"class","self-center"),t(Rn,"class","self-center"),t(Dt,"class","self-center"),t(Ee,"class","mt-2"),t(ae,"class","m-auto"),Bs(ae.src,ye=`${ho}/Model1ErrDist.png`)||t(ae,"src",ye),t(ae,"alt",""),t(ae,"width","600"),t(ae,"height","600"),t(rn,"class","mb-6 self-center"),t(oe,"class","flex flex-wrap justify-center"),t(Re,"class","mt-6 mb-6 self-center"),t(sn,"class","m-auto"),Bs(sn.src,ar=`${ho}/model-1-pod.gif`)||t(sn,"src",ar),t(sn,"alt","prediction point of divergence"),t(sn,"width","450"),t(sn,"height","350"),t(Mn,"class","mt-6 mb-6 self-center"),t(Ge,"class","m-auto"),Bs(Ge.src,sr=`${ho}/trajectories.gif`)||t(Ge,"src",sr),t(Ge,"alt","trajectories approaching origin"),t(Ge,"width","350"),t(Ge,"height","300"),t(un,"class","mt-6 mb-6 self-center"),t($e,"class","mt-2"),t(hn,"class","m-auto"),Bs(hn.src,Le=`${ho}/Model2ErrDist.png`)||t(hn,"src",Le),t(hn,"alt",""),t(hn,"width","600"),t(hn,"height","600"),t(or,"class","mb-2 self-center"),t(Be,"class","m-auto"),Bs(Be.src,Ur=`${ho}/Model2Err3d.png`)||t(Be,"src",Ur),t(Be,"alt",""),t(Be,"width","600"),t(Be,"height","600"),t(He,"class","-mt-2 mb-2 self-center"),t(ut,"class","m-auto"),Bs(ut.src,ba=`${ho}/model-2-pod.gif`)||t(ut,"src",ba),t(ut,"alt","model 2 point of divergence"),t(ut,"width","400"),t(ut,"height","340"),t(Oe,"class","m-auto"),Bs(Oe.src,lr=`${ho}/Model2DFO.png`)||t(Oe,"src",lr),t(Oe,"alt","distance from origin vs. sMAPE"),t(Oe,"width","800"),t(Oe,"height","600"),t(_e,"class","-mt-2 mb-2 self-center"),t(ht,"class","m-auto"),Bs(ht.src,ja=`${ho}/Model2vModel3.png`)||t(ht,"src",ja),t(ht,"alt",""),t(ht,"width","600"),t(ht,"height","600"),t(Nt,"class","mb-2 self-center"),t(gn,"class","m-auto"),Bs(gn.src,fa=`${ho}/model-3-low-dfo.gif`)||t(gn,"src",fa),t(gn,"alt","Model 3 trajectory example"),t(gn,"width","800"),t(gn,"height","800"),t(Ft,"class","m-auto"),Bs(Ft.src,Ma=`${ho}/ref_v_ar.png`)||t(Ft,"src",Ma),t(Ft,"alt","Reference vs. Autoregressive Trajectories"),t(Ft,"width","450"),t(Ft,"height","500"),t(pt,"class","mb-2 self-center"),t(C,"class","m-auto"),Bs(C.src,fe=`${ho}/rk45_vs_nhits.png`)||t(C,"src",fe),t(C,"alt","Comparison of RK45 and predictions to Radua's solutions"),t(C,"width","600"),t(C,"height","600"),t(Je,"class","mb-2 self-center"),t(o,"class","flex flex-col mx-4 sm:mx-16 lg:mx-32 xl:mx-64")},m(m,d){x(m,o,d),n(o,i),n(o,f),n(o,u),n(o,g),n(o,k),n(o,v),M(w,o,null),M(S,o,null),n(o,Q),n(o,z),n(z,P),n(z,U),n(z,A),n(A,F),M(Z,A,null),n(z,re),n(z,ee),n(ee,Ie),M(ue,ee,null),n(z,H),n(z,B),n(B,ce),M(V,B,null),n(B,G),n(o,Jt),M(K,o,null),n(o,W),M(_n,o,null),n(o,Ae),n(o,J),n(J,xe),n(xe,ve),n(ve,ge),n(ve,Yt),M(pe,ve,null),n(o,xn),M(bt,o,null),n(o,Jn),n(o,qe),n(qe,vn),n(vn,jt),n(o,Yn),M(tt,o,null),n(o,Xn),n(o,Rn),n(Rn,aa),n(aa,sa),n(o,Nr),M(Mt,o,null),n(o,Zn),M(me,o,null),n(o,er),M(Te,o,null),n(o,va),M(Xt,o,null),n(o,Fa),M(En,o,null),n(o,mr),M(Zt,o,null),n(o,en),M(nt,o,null),M(tn,o,null),M(Nn,o,null),M(wn,o,null),n(o,Gr),n(o,Dt),n(Dt,yn),n(yn,tr),n(o,Ea),M(Qn,o,null),M(bn,o,null),n(o,Gn),M(rt,o,null),n(o,Cn),M(Fn,o,null),n(o,wa),M(nn,o,null),n(o,Cr),n(o,Ee),n(o,Lr),M(nr,o,null),n(o,ya),M(te,o,null),n(o,Fr),n(o,at),n(at,we),n(o,Hn),M(St,o,null),n(o,_r),n(o,rn),n(rn,ae),n(rn,jn),M(se,rn,null),n(o,Qe),M(Pe,o,null),n(o,Vt),n(o,Re),n(Re,oe),M(an,oe,null),n(oe,rr),M(st,oe,null),n(oe,kr),M(ot,oe,null),n(Re,oa),M(Ne,Re,null),n(o,xr),M(zt,o,null),n(o,Hr),n(o,Mn),n(Mn,sn),n(Mn,Br),M(be,Mn,null),n(o,vr),M(on,o,null),M(ln,o,null),n(o,ia),n(o,un),n(un,Ge),n(un,la),M(It,un,null),n(o,ua),M(it,o,null),n(o,Er),M(lt,o,null),n(o,Wr),M(Dn,o,null),n(o,Qa),M(Ce,o,null),n(o,ha),n(o,$e),n(o,wr),n(o,or),n(or,hn),M(Sn,or,null),n(o,fn),M(je,o,null),M(Fe,o,null),n(o,Or),n(o,He),n(He,Be),M(We,He,null),n(o,ir),M(At,o,null),n(o,yr),n(o,qt),n(qt,ut),n(qt,Qr),M(ie,qt,null),n(o,br),M(Tt,o,null),n(o,Me),n(o,_e),n(_e,Oe),M(De,_e,null),n(o,Vn),M(Ue,o,null),n(o,Pt),M(Ke,o,null),n(o,ur),M(Bn,o,null),n(o,dn),M(zn,o,null),n(o,Kr),M(cn,o,null),n(o,Jr),M(Rt,o,null),n(o,jr),n(o,Nt),n(Nt,ht),M(Gt,Nt,null),n(o,Yr),M(ft,o,null),n(o,Mr),n(o,dt),n(dt,gn),n(dt,da),M(Ct,dt,null),n(o,Dr),M(ct,o,null),n(o,Sr),M(In,o,null),n(o,Vr),M(pn,o,null),M(gt,o,null),n(o,zr),n(o,pt),n(pt,Ft),M(mt,pt,null),n(o,Da),M(Se,o,null),M($t,o,null),n(o,Lt),n(o,Je),n(Je,C),n(Je,Ir),M(O,Je,null),n(o,Ye),M(_t,o,null),n(o,Ar),M(Xe,o,null),n(o,qr),M(kt,o,null),n(o,ca),M(Ht,o,null),M(xt,o,null),n(o,ga),M(Ze,o,null),n(o,Sa),M(mn,o,null),pa=!0},p(m,[d]){const vt={};d&128&&(vt.$$scope={dirty:d,ctx:m}),w.$set(vt);const $n={};d&128&&($n.$$scope={dirty:d,ctx:m}),S.$set($n);const hr={};d&128&&(hr.$$scope={dirty:d,ctx:m}),Z.$set(hr);const Et={};d&128&&(Et.$$scope={dirty:d,ctx:m}),ue.$set(Et);const Tr={};d&128&&(Tr.$$scope={dirty:d,ctx:m}),V.$set(Tr);const Bt={};d&128&&(Bt.$$scope={dirty:d,ctx:m}),K.$set(Bt);const Wn={};d&128&&(Wn.$$scope={dirty:d,ctx:m}),_n.$set(Wn);const Y={};d&128&&(Y.$$scope={dirty:d,ctx:m}),pe.$set(Y);const de={};d&128&&(de.$$scope={dirty:d,ctx:m}),bt.$set(de);const fr={};d&128&&(fr.$$scope={dirty:d,ctx:m}),tt.$set(fr);const dr={};d&128&&(dr.$$scope={dirty:d,ctx:m}),Mt.$set(dr);const cr={};d&128&&(cr.$$scope={dirty:d,ctx:m}),me.$set(cr);const Wt={};d&128&&(Wt.$$scope={dirty:d,ctx:m}),Te.$set(Wt);const Ot={};d&128&&(Ot.$$scope={dirty:d,ctx:m}),Xt.$set(Ot);const Ut={};d&128&&(Ut.$$scope={dirty:d,ctx:m}),En.$set(Ut);const wt={};d&128&&(wt.$$scope={dirty:d,ctx:m}),Zt.$set(wt);const Ve={};d&128&&(Ve.$$scope={dirty:d,ctx:m}),nt.$set(Ve);const yt={};d&128&&(yt.$$scope={dirty:d,ctx:m}),tn.$set(yt);const le={};d&128&&(le.$$scope={dirty:d,ctx:m}),Nn.$set(le);const ne={};d&128&&(ne.$$scope={dirty:d,ctx:m}),wn.$set(ne);const Kt={};d&128&&(Kt.$$scope={dirty:d,ctx:m}),Qn.$set(Kt);const An={};d&128&&(An.$$scope={dirty:d,ctx:m}),bn.$set(An);const qn={};d&128&&(qn.$$scope={dirty:d,ctx:m}),rt.$set(qn);const Tn={};d&128&&(Tn.$$scope={dirty:d,ctx:m}),Fn.$set(Tn);const On={};d&128&&(On.$$scope={dirty:d,ctx:m}),nn.$set(On);const Pr={};d&128&&(Pr.$$scope={dirty:d,ctx:m}),te.$set(Pr);const Un={};d&128&&(Un.$$scope={dirty:d,ctx:m}),St.$set(Un);const Va={};d&128&&(Va.$$scope={dirty:d,ctx:m}),se.$set(Va);const za={};d&128&&(za.$$scope={dirty:d,ctx:m}),Pe.$set(za);const Ia={};d&128&&(Ia.$$scope={dirty:d,ctx:m}),Ne.$set(Ia);const Aa={};d&128&&(Aa.$$scope={dirty:d,ctx:m}),zt.$set(Aa);const qa={};d&128&&(qa.$$scope={dirty:d,ctx:m}),be.$set(qa);const Ta={};d&128&&(Ta.$$scope={dirty:d,ctx:m}),on.$set(Ta);const Pa={};d&128&&(Pa.$$scope={dirty:d,ctx:m}),ln.$set(Pa);const gr={};d&128&&(gr.$$scope={dirty:d,ctx:m}),It.$set(gr);const pr={};d&128&&(pr.$$scope={dirty:d,ctx:m}),it.$set(pr);const et={};d&128&&(et.$$scope={dirty:d,ctx:m}),lt.$set(et);const ke={};d&128&&(ke.$$scope={dirty:d,ctx:m}),Dn.$set(ke);const Rr={};d&128&&(Rr.$$scope={dirty:d,ctx:m}),Sn.$set(Rr);const Pn={};d&128&&(Pn.$$scope={dirty:d,ctx:m}),je.$set(Pn);const Xr={};d&128&&(Xr.$$scope={dirty:d,ctx:m}),Fe.$set(Xr);const Kn={};d&128&&(Kn.$$scope={dirty:d,ctx:m}),We.$set(Kn);const Ra={};d&128&&(Ra.$$scope={dirty:d,ctx:m}),At.$set(Ra);const Zr={};d&128&&(Zr.$$scope={dirty:d,ctx:m}),ie.$set(Zr);const Na={};d&128&&(Na.$$scope={dirty:d,ctx:m}),Tt.$set(Na);const Qt={};d&128&&(Qt.$$scope={dirty:d,ctx:m}),De.$set(Qt);const ea={};d&128&&(ea.$$scope={dirty:d,ctx:m}),Ue.$set(ea);const ma={};d&128&&(ma.$$scope={dirty:d,ctx:m}),Ke.$set(ma);const $a={};d&128&&($a.$$scope={dirty:d,ctx:m}),Bn.$set($a);const La={};d&128&&(La.$$scope={dirty:d,ctx:m}),cn.$set(La);const _a={};d&128&&(_a.$$scope={dirty:d,ctx:m}),Rt.$set(_a);const Ba={};d&128&&(Ba.$$scope={dirty:d,ctx:m}),Gt.$set(Ba);const Wa={};d&128&&(Wa.$$scope={dirty:d,ctx:m}),ft.$set(Wa);const Oa={};d&128&&(Oa.$$scope={dirty:d,ctx:m}),Ct.$set(Oa);const ta={};d&128&&(ta.$$scope={dirty:d,ctx:m}),ct.$set(ta);const ka={};d&128&&(ka.$$scope={dirty:d,ctx:m}),In.$set(ka);const Ga={};d&128&&(Ga.$$scope={dirty:d,ctx:m}),pn.$set(Ga);const Xa={};d&128&&(Xa.$$scope={dirty:d,ctx:m}),gt.$set(Xa);const _s={};d&128&&(_s.$$scope={dirty:d,ctx:m}),mt.$set(_s);const ss={};d&128&&(ss.$$scope={dirty:d,ctx:m}),Se.$set(ss);const os={};d&128&&(os.$$scope={dirty:d,ctx:m}),$t.$set(os);const rs={};d&128&&(rs.$$scope={dirty:d,ctx:m}),O.$set(rs);const ks={};d&128&&(ks.$$scope={dirty:d,ctx:m}),_t.$set(ks);const na={};d&128&&(na.$$scope={dirty:d,ctx:m}),Xe.$set(na);const ds={};d&128&&(ds.$$scope={dirty:d,ctx:m}),kt.$set(ds);const $s={};d&128&&($s.$$scope={dirty:d,ctx:m}),Ht.$set($s);const Ls={};d&128&&(Ls.$$scope={dirty:d,ctx:m}),xt.$set(Ls);const xa={};d&128&&(xa.$$scope={dirty:d,ctx:m}),Ze.$set(xa)},i(m){pa||(E(w.$$.fragment,m),E(S.$$.fragment,m),E(Z.$$.fragment,m),E(ue.$$.fragment,m),E(V.$$.fragment,m),E(K.$$.fragment,m),E(_n.$$.fragment,m),E(pe.$$.fragment,m),E(bt.$$.fragment,m),E(tt.$$.fragment,m),E(Mt.$$.fragment,m),E(me.$$.fragment,m),E(Te.$$.fragment,m),E(Xt.$$.fragment,m),E(En.$$.fragment,m),E(Zt.$$.fragment,m),E(nt.$$.fragment,m),E(tn.$$.fragment,m),E(Nn.$$.fragment,m),E(wn.$$.fragment,m),E(Qn.$$.fragment,m),E(bn.$$.fragment,m),E(rt.$$.fragment,m),E(Fn.$$.fragment,m),E(nn.$$.fragment,m),E(nr.$$.fragment,m),E(te.$$.fragment,m),E(St.$$.fragment,m),E(se.$$.fragment,m),E(Pe.$$.fragment,m),E(an.$$.fragment,m),E(st.$$.fragment,m),E(ot.$$.fragment,m),E(Ne.$$.fragment,m),E(zt.$$.fragment,m),E(be.$$.fragment,m),E(on.$$.fragment,m),E(ln.$$.fragment,m),E(It.$$.fragment,m),E(it.$$.fragment,m),E(lt.$$.fragment,m),E(Dn.$$.fragment,m),E(Ce.$$.fragment,m),E(Sn.$$.fragment,m),E(je.$$.fragment,m),E(Fe.$$.fragment,m),E(We.$$.fragment,m),E(At.$$.fragment,m),E(ie.$$.fragment,m),E(Tt.$$.fragment,m),E(De.$$.fragment,m),E(Ue.$$.fragment,m),E(Ke.$$.fragment,m),E(Bn.$$.fragment,m),E(zn.$$.fragment,m),E(cn.$$.fragment,m),E(Rt.$$.fragment,m),E(Gt.$$.fragment,m),E(ft.$$.fragment,m),E(Ct.$$.fragment,m),E(ct.$$.fragment,m),E(In.$$.fragment,m),E(pn.$$.fragment,m),E(gt.$$.fragment,m),E(mt.$$.fragment,m),E(Se.$$.fragment,m),E($t.$$.fragment,m),E(O.$$.fragment,m),E(_t.$$.fragment,m),E(Xe.$$.fragment,m),E(kt.$$.fragment,m),E(Ht.$$.fragment,m),E(xt.$$.fragment,m),E(Ze.$$.fragment,m),E(mn.$$.fragment,m),pa=!0)},o(m){y(w.$$.fragment,m),y(S.$$.fragment,m),y(Z.$$.fragment,m),y(ue.$$.fragment,m),y(V.$$.fragment,m),y(K.$$.fragment,m),y(_n.$$.fragment,m),y(pe.$$.fragment,m),y(bt.$$.fragment,m),y(tt.$$.fragment,m),y(Mt.$$.fragment,m),y(me.$$.fragment,m),y(Te.$$.fragment,m),y(Xt.$$.fragment,m),y(En.$$.fragment,m),y(Zt.$$.fragment,m),y(nt.$$.fragment,m),y(tn.$$.fragment,m),y(Nn.$$.fragment,m),y(wn.$$.fragment,m),y(Qn.$$.fragment,m),y(bn.$$.fragment,m),y(rt.$$.fragment,m),y(Fn.$$.fragment,m),y(nn.$$.fragment,m),y(nr.$$.fragment,m),y(te.$$.fragment,m),y(St.$$.fragment,m),y(se.$$.fragment,m),y(Pe.$$.fragment,m),y(an.$$.fragment,m),y(st.$$.fragment,m),y(ot.$$.fragment,m),y(Ne.$$.fragment,m),y(zt.$$.fragment,m),y(be.$$.fragment,m),y(on.$$.fragment,m),y(ln.$$.fragment,m),y(It.$$.fragment,m),y(it.$$.fragment,m),y(lt.$$.fragment,m),y(Dn.$$.fragment,m),y(Ce.$$.fragment,m),y(Sn.$$.fragment,m),y(je.$$.fragment,m),y(Fe.$$.fragment,m),y(We.$$.fragment,m),y(At.$$.fragment,m),y(ie.$$.fragment,m),y(Tt.$$.fragment,m),y(De.$$.fragment,m),y(Ue.$$.fragment,m),y(Ke.$$.fragment,m),y(Bn.$$.fragment,m),y(zn.$$.fragment,m),y(cn.$$.fragment,m),y(Rt.$$.fragment,m),y(Gt.$$.fragment,m),y(ft.$$.fragment,m),y(Ct.$$.fragment,m),y(ct.$$.fragment,m),y(In.$$.fragment,m),y(pn.$$.fragment,m),y(gt.$$.fragment,m),y(mt.$$.fragment,m),y(Se.$$.fragment,m),y($t.$$.fragment,m),y(O.$$.fragment,m),y(_t.$$.fragment,m),y(Xe.$$.fragment,m),y(kt.$$.fragment,m),y(Ht.$$.fragment,m),y(xt.$$.fragment,m),y(Ze.$$.fragment,m),y(mn.$$.fragment,m),pa=!1},d(m){m&&e(o),D(w),D(S),D(Z),D(ue),D(V),D(K),D(_n),D(pe),D(bt),D(tt),D(Mt),D(me),D(Te),D(Xt),D(En),D(Zt),D(nt),D(tn),D(Nn),D(wn),D(Qn),D(bn),D(rt),D(Fn),D(nn),D(nr),D(te),D(St),D(se),D(Pe),D(an),D(st),D(ot),D(Ne),D(zt),D(be),D(on),D(ln),D(It),D(it),D(lt),D(Dn),D(Ce),D(Sn),D(je),D(Fe),D(We),D(At),D(ie),D(Tt),D(De),D(Ue),D(Ke),D(Bn),D(zn),D(cn),D(Rt),D(Gt),D(ft),D(Ct),D(ct),D(In),D(pn),D(gt),D(mt),D(Se),D($t),D(O),D(_t),D(Xe),D(kt),D(Ht),D(xt),D(Ze),D(mn)}}}function v1(p){const o=`
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`,i=`
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`,h=`
\\begin{align}
dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`,f=`
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`,u=[{desc:"horizon length",val:100},{desc:"lookback window length",val:500},{desc:"dt",val:.015008},{desc:"number of stacks",val:3},{desc:"blocks per stack",val:1},{desc:"mlp layers per block",val:4},{desc:"mlp layer size",val:1024},{desc:"activation function",val:"ReLU"},{desc:"max pooling factors",val:"2, 2, 2"},{desc:"frequency downsampling factors",val:"24, 12, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:1e4},{desc:"learning rate",val:"1e-3"},{desc:"learning rate schedule",val:"halve every 3,333 steps"},{desc:"total trainable parameters",val:"~20 million"}],c=[{desc:"number of stacks",val:4},{desc:"blocks per stack",val:8},{desc:"mlp layer size",val:2048},{desc:"max pooling factors",val:"10, 4, 2, 1"},{desc:"frequency downsampling factors",val:"25, 12, 6, 1"},{desc:"batch size",val:512},{desc:"# training steps",val:15e4},{desc:"run validation every",val:"5000 steps"},{desc:"learning rate",val:"1e-4"},{desc:"learning rate schedule",val:"halve whenever validation loss does not decrease"},{desc:"all other hyperparameters",val:"same as Model 1"},{desc:"total trainable parameters",val:"~645 million"}],g=[{desc:"horizon",val:500},{desc:"lookback",val:2500},{desc:"dt",val:.0030016},{desc:"all other hyperparameters",val:"same as Model 2"}];return Li(()=>{let k=document.createElement("script");k.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js",k.async=!0,document.head.append(k),window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},processEscapes:!0}}),[o,i,h,f,u,c,g]}class Q1 extends Os{constructor(o){super(),Us(this,o,v1,x1,Ws,{})}}export{Q1 as component};
