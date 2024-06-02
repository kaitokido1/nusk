"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{7473:function(n,e,i){i.d(e,{h:function(){return nn}});var t=i(7297),r=i(5893),o=i(7294),a=i(9521),l=i(8628),s=i(2432),c=i(6038),d=i(5096),u=i(5675),p=i.n(u),h=i(9684),f=i(9634),m={src:"/_next/static/media/hamburger.810c9cdd.svg",height:18,width:28};(0,o.createContext)(null);var g=i(9694),v=i(4557),x=i(8318),w=i(834),b=i(1163),k=i(2797),y=i(6183),j=i(5126),C=i(3573),Z=i(6243),z=i(6557),T=i(8002),N=i(7094),P=i(5637);function I(){var n=(0,t.Z)(["\n  width: 100%;\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: ",";\n  .hide-on-mobile {\n    display: none;\n    @media "," {\n      display: block;\n    }\n  }\n\n  @media screen and (max-width: ",") {\n    visibility: ",";\n  }\n"]);return I=function(){return n},n}function R(){var n=(0,t.Z)(["\n      background-color: rgba(0, 0, 0, 0.7);\n      backdrop-filter: blur(10px);\n    "]);return R=function(){return n},n}function _(){var n=(0,t.Z)(["\n  --top-wrapper-height: 2.125rem;\n\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: var(--top-wrapper-height);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  justify-content: space-between;\n\n  z-index: 10;\n\n  @media "," {\n    display: none !important;\n  }\n\n  font-size: ",";\n  > div {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n  color: ",";\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  .hide-on-mobile {\n    display: none;\n    @media "," {\n      display: block;\n    }\n  }\n  ul {\n    opacity: 0.7;\n  }\n  a {\n    color: ",";\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  transition: all 200ms ease, margin 200ms ease;\n  transform: scaleY(1) !important;\n  ","\n  ul {\n    padding: 0;\n    display: flex;\n    gap: 0 1.5rem;\n    list-style: none;\n    flex-wrap: wrap;\n\n    @media "," {\n      gap: 2rem;\n    }\n  }\n"]);return _=function(){return n},n}function S(){var n=(0,t.Z)(["\n      background-color: rgba(0, 0, 0, 0.7);\n      backdrop-filter: blur(10px);\n    "]);return S=function(){return n},n}function L(){var n=(0,t.Z)(["\n  width: 100%;\n  position: relative;\n\n  ","\n\n  > div {\n    display: flex;\n\n    width: 100%;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n    font-size: ",";\n\n    gap: 0.5rem;\n    align-items: center;\n    justify-content: space-between;\n\n    .left {\n      h1 {\n        height: ","px;\n      }\n      display: flex;\n      align-items: center;\n      width: 80%;\n      gap: 3rem;\n    }\n\n    #navLinks {\n      padding: 0 3rem 0 2rem;\n      display: flex;\n      list-style: none;\n      justify-self: start;\n      width: 100%;\n      height: ","px !important;\n      width: 100% !important;\n      justify-content: space-between;\n      max-width: 1000px;\n\n      li {\n        display: flex;\n        align-items: center;\n        height: 100%;\n        a {\n          font-size: "," !important;\n          text-decoration: none;\n          color: ",";\n          text-shadow: 2px 2px 2px #00000020;\n          display: block;\n          position: relative;\n          &:dir(rtl) {\n            font-size: "," !important;\n          }\n          &::before {\n            content: '';\n            position: absolute;\n\n            width: 0;\n            left: ",";\n            right: ",";\n            height: 0.15rem;\n            background-color: ",";\n            inset-inline: 50%;\n            bottom: -0.8rem;\n            transform: translateX(-50%);\n            transition: width 200ms ease-in-out;\n          }\n\n          &:hover {\n            color: ",";\n\n            &::before {\n              width: 40%;\n              min-width: 15px;\n            }\n          }\n          @media screen and (min-width: 1900px) {\n            font-size: "," !important;\n          }\n        }\n\n        a {\n          height: 100%;\n          display: flex;\n          align-items: center;\n        }\n\n        &.active-link a {\n          position: relative;\n          font-weight: bold;\n\n          &::before {\n            width: 100%;\n          }\n        }\n      }\n    }\n    .left {\n      display: flex;\n    }\n    .left {\n      display: flex;\n    }\n\n    #navLinks,\n    #btn {\n      /* Screen reader only on screens < tablet */\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      font-size: ",";\n\n      margin: -1px;\n      overflow: hidden;\n      clip: rect(0, 0, 0, 0);\n      white-space: nowrap;\n      border-width: 0;\n\n      @media (min-width: 1150px) {\n        position: static;\n        width: auto;\n        height: auto;\n        margin: 0;\n        overflow: visible;\n        clip: auto;\n        white-space: normal;\n      }\n    }\n  }\n"]);return L=function(){return n},n}function U(){var n=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  min-width: 250px;\n  max-width: 100vw;\n  background: ",";\n  backdrop-filter: blur(15px);\n  padding: 0.8rem 2rem;\n  gap: 2rem;\n\n  top: 0;\n\n  z-index: ",";\n\n  ul {\n    display: grid;\n    gap: 1rem;\n    list-style-type: none;\n    padding: 0;\n\n    a {\n      font-size: ",";\n      line-height: 120%;\n      color: ",";\n      text-decoration: none;\n      display: block;\n      padding: 1rem 0.5rem;\n      border-radius: 1rem;\n      transition: background-color 300ms cubic-bezier(0.75, 0.435, 0.185, 1.24);\n      /*\n      &:hover {\n        background-color: ",";\n        transition-duration: 350ms;\n      }*/\n\n      &:focus {\n        color: ",";\n      }\n    }\n\n    .active-link {\n      position: relative;\n\n      &::before {\n        content: '';\n        inset-inline-start: -1rem;\n        width: 10px;\n        height: 10px;\n        display: block;\n        position: absolute;\n        background-color: ",";\n        border-radius: 50%;\n        /* I arrived at the 0.15rem value for vertically centering the dot\n          through experimentation. You might have to update this value when we change the font */\n        inset-block-start: calc(50% - 0.15rem);\n      }\n\n      a {\n        color: ",";\n        &:hover {\n          transform: none;\n        }\n      }\n    }\n  }\n\n  & > div {\n    /*margin-bottom: 2rem;*/\n\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  & > div > .MobileMenuButton {\n    position: absolute;\n    top: 1rem;\n    right: 1.6rem;\n    svg {\n      color: ",";\n    }\n  }\n  .language-button {\n    padding: 0.5rem 0.5rem;\n    max-width: 220px;\n    margin: 0;\n  }\n  .language-button {\n    color: "," !important;\n  }\n  .language-button .chevron {\n    fill: "," !important;\n  }\n\n  @media (min-width: 1150px) {\n    display: none;\n  }\n"]);return U=function(){return n},n}function E(){var n=(0,t.Z)(["\n  transition: transform 200ms ease-in-out;\n\n  svg {\n    height: 40px;\n    width: 40px;\n    color: ",";\n  }\n\n  &:hover {\n    transform: scale(1.2);\n  }\n\n  @media (min-width: 1150px) {\n    display: none;\n  }\n"]);return E=function(){return n},n}function D(){var n=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 3%;\n  padding: 0 2rem !important;\n  margin: 0 !important;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    & > ul {\n      display: flex;\n      list-style: none;\n    }\n  }\n"]);return D=function(){return n},n}function M(){var n=(0,t.Z)(["\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  margin-inline-start: 1rem;\n  @media "," {\n    margin-inline-start: -7.899999999999977px;\n  }\n  @media (min-width: 1150px) and (max-width: 1280px) {\n    margin-inline-start: -35.89999999999998px;\n    margin-inline-end: -10px;\n  }\n"]);return M=function(){return n},n}function B(){var n=(0,t.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]);return B=function(){return n},n}function A(){var n=(0,t.Z)(["\n  margin-inline-end: 10rem;\n  @media (max-width: 786px) {\n    margin-inline-end: 0;\n    font-size: 0.9rem;\n  }\n  @media (max-width: 1024px) {\n    margin-inline-end: 0;\n    font-size: 0.7rem;\n  }\n  background-color: #b4916499;\n  color: #ffffff;\n  border-radius: 1rem;\n  border: 1px solid #b49164;\n  padding-block: 0.3rem;\n  padding-inline: 0.7rem;\n  font-size: 0.97rem;\n"]);return A=function(){return n},n}function F(){var n=(0,t.Z)(["\n  display: none;\n  position: absolute;\n  top: 100%;\n  background-color: #ffffff;\n  color: black;\n  border-radius: 1rem;\n  z-index: 999;\n  cursor: pointer;\n  &.show {\n    display: flex;\n    flex-direction: column;\n    justify-items: space-between;\n  }\n"]);return F=function(){return n},n}function J(){var n=(0,t.Z)(["\n  position: relative;\n  color: black;\n  padding: 20px 20px;\n  a {\n    color: black !important;\n  }\n\n  &:hover,\n  &:focus {\n    a {\n      color: black;\n    }\n  }\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 0.5px;\n    background-color: #e0e0e0;\n  }\n"]);return J=function(){return n},n}var O=a.ZP.div.withConfig({componentId:"sc-66a26714-0"})(I(),(function(n){return n.isSearchVisible?"#B49164":"transparent linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.4)) 0 0 no-repeat padding-box"}),h.Af.desktop,j.gP,(function(n){return n.isWeatherPopupOpen?"hidden":"visible"})),V=a.ZP.div.withConfig({componentId:"sc-66a26714-1"})(_(),h.Af.subTablet,(function(n){return n.isMobile?l.C.small:l.C.smaller}),s.w.white,h.Af.desktop,s.w.white,(function(n){return n.scrolled&&(0,a.iv)(R())}),h.Af.tablet),Y=a.ZP.div.withConfig({componentId:"sc-66a26714-2"})(L(),(function(n){return n.scrolled&&(0,a.iv)(S())}),l.C.smaller,50,50,l.C.small,s.w.whiteSmoke,l.C.regular,(function(n){return n.rtl,"initial"}),(function(n){return n.rtl?"initial !important":"0"}),s.w.lightGold,s.w.white,l.C.regular,l.C.small),G=a.ZP.nav.withConfig({componentId:"sc-66a26714-3"})(U(),s.w.blackWithOpacity7,(function(n){return n.open?50:-1}),l.C.big,s.w.whiteSmoke,s.w.lighterGold,s.w.gold,s.w.lightGold,s.w.lightGold,s.w.whiteSmoke,s.w.whiteSmoke,s.w.whiteSmoke),Q=a.ZP.button.withConfig({componentId:"sc-66a26714-4"})(E(),s.w.whiteSmoke),W=a.ZP.div.withConfig({componentId:"sc-66a26714-5"})(D(),s.w.whiteSmoke),H=(0,a.ZP)(N.FKI).withConfig({componentId:"sc-66a26714-6"})(M(),h.Af.desktop),X=a.ZP.div.withConfig({componentId:"sc-66a26714-7"})(B()),K=a.ZP.p.withConfig({componentId:"sc-66a26714-8"})(A()),$=a.ZP.div.withConfig({componentId:"sc-66a26714-9"})(F()),q=a.ZP.div.withConfig({componentId:"sc-66a26714-10"})(J()),nn=function(n){var e,i,t,a=n.headerLinks,l=n.navBarLinks,u=n.i18ns,h=(n.rtl,n.setNavbarHeight),x=n.languages,w=n.correctionDictionary,j=(0,d.C)((function(n){return n.eVisa})),N=(0,d.C)(C.TA),I=(0,o.useRef)(null),R=(0,o.useState)(!1),_=R[0],S=R[1],L=(0,o.useState)(!0),U=L[0],E=L[1],D=(0,o.useState)(!1),M=D[0],B=D[1],A=function(){var n=(0,o.useState)({x:0,y:0,lastX:0,lastY:0}),e=n[0],i=n[1];return(0,o.useEffect)((function(){var n=function(){i((function(n){return{x:window.scrollX,y:window.scrollY,lastX:n.x,lastY:n.y}}))};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),e}(),F=(0,y.dD)(),J=((0,b.useRouter)().locale,(0,y.NU)()),G=(0,o.useState)(null),W=G[0],nn=G[1],tn=j&&(null===j||void 0===j?void 0:j.i18ns)&&(null===(e=null===j||void 0===j?void 0:j.i18ns["header.surveyText"])||void 0===e?void 0:e.label),rn=null===(i=u["header.surveyText"])||void 0===i?void 0:i.url;(0,y.Tv)(_);(0,o.useEffect)((function(){E(A.y>150||A.y-A.lastY>0)}),[A.y,A.lastY]),(0,o.useEffect)((function(){c.p8.fromTo(I.current,{autoAlpha:0,y:-100},{autoAlpha:1,y:0,duration:2})}),[]);var on=(0,o.useRef)(null),an=(0,d.T)(),ln=(0,b.useRouter)();(0,o.useEffect)((function(){if(on.current&&h){var n=F&&I.current?I.current.getBoundingClientRect().height:0;h(on.current.getBoundingClientRect().height-n)}}),[on.current,I.current,h,F]);return function(n,e){(0,o.useEffect)((function(){var i=function(i){n.current&&!n.current.contains(i.target)&&e()};return document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}}),[n,e])}(on,(function(){return nn(null)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(O,{ref:on,isWeatherPopupOpen:N,isSearchVisible:M,children:[(0,r.jsx)(V,{ref:I,id:"top-bar",scrolled:U,isMobile:F,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("ul",{children:null===a||void 0===a?void 0:a.map((function(n,e){return(0,r.jsx)("li",{onClick:function(){a&&a.length>0&&(0,z.n)(T.Dn,T.Ju,T.Qk,a[0].Title)},children:n.Markdown?(0,r.jsx)(Z.Z,{children:n.Markdown}):(0,r.jsx)(v.Z,{href:n.URL,children:n.Title})},"headerlinks-".concat(n.Title))}))}),(0,r.jsx)(X,{children:(0,r.jsx)(K,{children:(0,r.jsx)(v.Z,{href:rn,children:(0,r.jsx)(Z.Z,{children:tn})})})}),(0,r.jsx)(g.Z,{section:"header",languages:x})]})}),(0,r.jsxs)(Y,{scrolled:U,rtl:J,children:[(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"left",children:[(0,r.jsx)("h1",{children:(0,r.jsx)(v.Z,{href:"/",children:(0,r.jsx)(p(),{alt:"Nusuk",src:"/svg/logo.svg",layout:"intrinsic",width:120,height:50,onClick:function(){return(0,z.n)(T.Dn,T.Ju,T.Qk,T.Cy)}})})}),(0,r.jsx)("ul",{id:"navLinks",children:null===l||void 0===l?void 0:l.map((function(n){var e,i,t;return(0,r.jsx)("li",{className:(null===ln||void 0===ln||null===(e=ln.asPath)||void 0===e?void 0:e.indexOf(n.URL))>-1?"active-link":"",onClick:function(){return(0,z.n)(T.Dn,T.Ju,T.Qk,n.Title)},children:(null===(i=n.submenus)||void 0===i?void 0:i.data.length)>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:n.URL,onClick:function(){return e=n.id,void nn(W===e?null:e);var e},children:n.Title}),(0,r.jsx)($,{className:W===n.id?"show":"",children:null===(t=n.submenus)||void 0===t?void 0:t.data.map((function(n){return(0,r.jsx)(q,{children:(0,r.jsx)(v.Z,{href:n.attributes.Url,rtl:J,children:n.attributes.Title})},n.attributes.Title)}))})]}):(0,r.jsx)(v.Z,{href:n.URL,rtl:J,children:n.Title})},n.id)}))})]}),(0,r.jsx)(H,{onClick:function(){B(!M)}}),(0,r.jsx)(f.z,{style:{color:M?"white":s.w.black,fontWeight:"600",backgroundColor:M?"#FFFFFF26":"",fontSize:"0.7rem"},label:j&&(null===j||void 0===j?void 0:j.i18ns)&&(null===(t=null===j||void 0===j?void 0:j.i18ns["header.apply_for_visa"])||void 0===t?void 0:t.label),size:"small",secondary:!0,glow:!0,onClick:function(){an((0,k.h7)()),(0,z.n)(T.iB,T.Ju,T.zC,T.Tt)},id:"btn"}),(0,r.jsx)(Q,{onClick:function(){return S((function(n){return!n}))},children:(0,r.jsx)(p(),{src:m,alt:"menu"})})," "]}),M&&(0,r.jsx)(P.E,{fromResultsPage:!0,links:l,correctionDictionary:w})]})]}),(0,r.jsx)(en,{links:l,open:_,closeMenu:function(){return S(!1)},i18ns:u,languages:x})]})},en=function(n){var e,i,t,a,l,s,c,u,h,m,y=n.links,j=n.open,C=n.closeMenu,N=n.i18ns,P=n.languages,I=(0,d.T)(),R=(0,b.useRouter)(),_=(0,o.useRef)(),S=(0,d.C)((function(n){return n.eVisa})),L=S&&(null===S||void 0===S?void 0:S.i18ns)&&(null===(e=null===S||void 0===S?void 0:S.i18ns["header.surveyText"])||void 0===e?void 0:e.label),U=null===(i=N["header.surveyText"])||void 0===i?void 0:i.url,E=function(n,e){n.preventDefault(),R.push(e),C()};return j?(0,r.jsxs)(G,{ltr:!1,open:!0,ref:_,onClick:function(n){n.target===_.current&&C()},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{onClick:function(n){return E(n,"/")},children:(0,r.jsx)(p(),{onClick:function(){(0,z.n)(T.Dn,T.Ju,T.Qk,T.Cy)},alt:"Nusuk",src:"/svg/logo.svg",layout:"intrinsic",width:120,height:50})}),(0,r.jsx)(Q,{onClick:function(){return C()},children:(0,r.jsx)(x.bjh,{})})]}),(0,r.jsxs)(X,{children:[(0,r.jsx)(K,{children:(0,r.jsx)(v.Z,{href:U,children:(0,r.jsx)(Z.Z,{children:L})})}),(0,r.jsx)(g.Z,{section:"header",className:"lng-selector",languages:P})]}),(0,r.jsx)(f.z,{label:S&&(null===(t=S.i18ns["header.apply_for_visa"])||void 0===t?void 0:t.label),onClick:function(){I((0,k.h7)()),(0,z.n)(T.iB,T.Ju,T.zC,T.Tt)},id:"btn"}),(0,r.jsx)("ul",{children:y.map((function(n,e){var i,t,o;return(null===(i=n.submenus)||void 0===i||null===(t=i.data)||void 0===t?void 0:t.length)>0?null===(o=n.submenus)||void 0===o?void 0:o.data.map((function(n,i){return(0,r.jsx)("li",{className:R.pathname===n.attributes.Title?"active-link":"",children:(0,r.jsx)(v.Z,{href:n.attributes.Url,children:n.attributes.Title})},"".concat(e,"-").concat(i))})):(0,r.jsx)("li",{className:R.pathname===n.Title?"active-link":"",onClick:function(){(0,z.n)(T.Dn,T.Ju,T.Qk,n.Title)},children:(0,r.jsx)("a",{href:n.URL,onClick:function(e){e.preventDefault(),E(e,n.URL)},children:n.Title})},e)}))}),(0,r.jsxs)(W,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:S&&(null===(a=S.i18ns["header.connect_with_us"])||void 0===a?void 0:a.label)}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:N&&(null===(l=N["pagefooter.facebook"])||void 0===l?void 0:l.url),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(w.k1O,{style:{width:"1.2rem",height:"1.2rem"}})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:N&&(null===(s=N["pagefooter.instagram"])||void 0===s?void 0:s.url),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(w.Vs6,{style:{width:"1.2rem",height:"1.2rem"}})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:N&&(null===(c=N["pagefooter.twitter"])||void 0===c?void 0:c.url),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(w.meP,{style:{width:"1.2rem",height:"1.2rem"}})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:N&&(null===(u=N["pagefooter.youtube"])||void 0===u?void 0:u.url),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(w.bUO,{style:{width:"1.2rem",height:"1.2rem"}})})})]})]}),N&&(null===(h=N["header.callcenters"])||void 0===h?void 0:h.label)&&(0,r.jsx)(Z.Z,{options:{forceBlock:!0},style:{lineHeight:"1.4rem"},children:null===(m=N["header.callcenters"])||void 0===m?void 0:m.label})]})]}):null}},6028:function(n,e,i){i.d(e,{Z:function(){return Z}});var t=i(6042),r=i(5893),o=i(7294),a=i(7297),l=i(9521);function s(){var n=(0,a.Z)(["\n  grid-area: footer;\n"]);return s=function(){return n},n}function c(){var n=(0,a.Z)(["\n  height: 100vh;\n  direction: ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n"]);return c=function(){return n},n}function d(){var n=(0,a.Z)(["\n  grid-area: header;\n  position: fixed;\n  /* position: sticky; */\n  width: 100%;\n  top: 0;\n  transition: background-color 0.5s ease;\n  z-index: 30;\n"]);return d=function(){return n},n}function u(){var n=(0,a.Z)(["\n      z-index: 1;\n    "]);return u=function(){return n},n}function p(){var n=(0,a.Z)(["\n  grid-area: main;\n\n  position: relative;\n  ","\n\n  section {\n    width: 100vw;\n  }\n"]);return p=function(){return n},n}var h=l.ZP.footer.withConfig({componentId:"sc-6dd1a5d-0"})(s()),f=l.ZP.div.withConfig({componentId:"sc-6dd1a5d-1"})(c(),(function(n){return n.rtl?"rtl":"ltr"})),m=l.ZP.header.withConfig({componentId:"sc-6dd1a5d-2"})(d()),g=l.ZP.main.withConfig({componentId:"sc-6dd1a5d-3"})(p(),(function(n){return 0!==n.zIndex&&(0,l.iv)(u())})),v=i(5096),x=i(1163),w=i(9396),b=i(2962),k={title:"Nusuk",siteName:"Nusuk",description:"Use Nusuk, the first-ever planning, booking and experience platform, to create your Hajj or Umrah itinerary to Makkah, Al Madinah, and beyond. With Nusuk, travelers from all over the world can easily organize their entire visit, from applying for an eVisa to booking hotels and flights. Nusuk can also be used to schedule visits to important sites, find transportation, curate itineraries, and access on-ground tools such as the Tawaf tracker and more.",url:"https://nusuk.sa",type:"website",robots:"follow, index",image:"/images/seo_image.png"};function y(n){var e=(0,x.useRouter)(),i=(0,w.Z)((0,t.Z)({},k,n),{image:"/images/seo_image.png"});i.title=n.templateTitle?"".concat(n.templateTitle," | ").concat(i.siteName):i.title;var o=[{property:"keywords",content:null===i||void 0===i?void 0:i.robots},{name:"robots",content:null===i||void 0===i?void 0:i.robots}];return(0,r.jsx)(b.PB,{title:i.title,description:i.description,additionalLinkTags:j,additionalMetaTags:o,defaultTitle:i.title,twitter:{handle:null===i||void 0===i?void 0:i.twitter,site:null===i||void 0===i?void 0:i.siteName,cardType:"summary_large_image"},openGraph:{url:"".concat(i.url).concat(e.asPath),title:i.title,description:i.description,site_name:i.title,images:[{url:i.image,alt:i.title}]}})}var j=[{rel:"apple-touch-icon",sizes:"57x57",href:"/favicon/apple-icon-57x57.png"},{rel:"apple-touch-icon",sizes:"60x60",href:"/favicon/apple-icon-60x60.png"},{rel:"apple-touch-icon",sizes:"72x72",href:"/favicon/apple-icon-72x72.png"},{rel:"apple-touch-icon",sizes:"76x76",href:"/favicon/apple-icon-76x76.png"},{rel:"apple-touch-icon",sizes:"114x114",href:"/favicon/apple-icon-114x114.png"},{rel:"apple-touch-icon",sizes:"120x120",href:"/favicon/apple-icon-120x120.png"},{rel:"apple-touch-icon",sizes:"144x144",href:"/favicon/apple-icon-144x144.png"},{rel:"apple-touch-icon",sizes:"152x152",href:"/favicon/apple-icon-152x152.png"},{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-icon-180x180.png"},{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicon/android-icon-192x192.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon/favicon-96x96.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"},{rel:"manifest",href:"/favicon/manifest.json"}],C=i(6183),Z=function(n){var e=n.header,i=n.children,a=n.absoluteHeader,l=n.footer,s=n.pageSeoDescription,c=n.pageTitle,d=n.shareImage,u=n.keywords,p=n.twitter,w=n.siteName,b=n.siteURL,k=n.zIndex,j=(0,o.useState)(0),Z=j[0],z=j[1],T=(0,o.useRef)(null),N=((0,x.useRouter)().locale,(0,C.NU)()),P=(0,v.C)((function(n){return n.eVisa})).modalOpen;return(0,o.useEffect)((function(){T.current&&z(T.current.getBoundingClientRect().height)}),[]),(0,r.jsxs)(f,{rtl:N,style:{overflow:"".concat(P?"hidden":"visible")},children:[(0,r.jsx)(y,(0,t.Z)({},c&&{title:c},s&&{description:s},d&&{image:d},u&&{robots:u},p&&{twitter:p},w&&{siteName:w},b&&{url:b})),(0,r.jsx)(m,{ref:T,"data-html2canvas-ignore":!0,children:e}),(0,r.jsx)(h,{id:"footer-wrapper",children:l}),(0,r.jsx)(g,{style:{marginTop:a?-Z:0},zIndex:k,children:i})]})}},5126:function(n,e,i){i.d(e,{$6:function(){return r},gP:function(){return o},iJ:function(){return t}});var t="1245px",r="745px",o="600px"}}]);