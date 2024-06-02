"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{6614:function(n,t,e){var i=e(6042),o=e(9396),r=e(9534),a=e(7297),l=e(5893),d=e(6183),s=e(5096),u=e(2797),c=e(2432),v=e(8628),f=e(1664),p=e.n(f),h=e(1163),m=e(7294),g=e(2777),w=e(9521);function y(){var n=(0,a.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 140%;\n  font-style: ",";\n"]);return y=function(){return n},n}function x(){var n=(0,a.Z)(["\n  a {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    text-decoration: none;\n    /* color: ","; */\n    svg {\n      transition: transform 200ms ease-in-out;\n    }\n\n    &:hover {\n      svg {\n        transform: translateX(",");\n      }\n    }\n  }\n"]);return x=function(){return n},n}var b=w.ZP.span.withConfig({componentId:"sc-fd3f605f-0"})(y(),(function(n){return(null===n||void 0===n?void 0:n.fontSize)||v.C.small}),(function(n){return(null===n||void 0===n?void 0:n.fontWeight)||500}),(function(n){return(null===n||void 0===n?void 0:n.fontStyle)||"normal"})),Z=w.ZP.div.withConfig({componentId:"sc-fd3f605f-1"})(x(),c.w.black,(function(n){return n.rtl?"-0.5rem":"0.5rem"})),j=(0,m.forwardRef)((function(n,t){var e=n.href,a=n.fontSize,c=n.fontStyle,v=n.fontWeight,f=n.children,m=n.fullWidth,w=(0,r.Z)(n,["href","fontSize","fontStyle","fontWeight","children","fullWidth"]),y=(0,d.NU)(),x=((0,h.useRouter)().locale,(0,s.T)());return(0,l.jsx)(Z,{rtl:y,ref:null!==t&&void 0!==t?t:null,children:(null===e||void 0===e?void 0:e.startsWith("/"))||(null===e||void 0===e?void 0:e.startsWith("#"))?(0,l.jsx)(p(),{href:e,passHref:!0,onClick:function(){(null===e||void 0===e?void 0:e.startsWith("#apply-visa"))&&x((0,u.h7)())},children:(0,l.jsxs)("a",(0,o.Z)((0,i.Z)({style:{justifyContent:m?"space-between":"start"}},w),{children:[(0,l.jsx)(b,{fontWeight:v,fontStyle:c,fontSize:a,children:f}),y?(0,l.jsx)(g.YFh,{}):(0,l.jsx)(g.Tfp,{})]}))}):(0,l.jsxs)("a",(0,o.Z)((0,i.Z)({href:(null===e||void 0===e?void 0:e.startsWith("www"))?"https://".concat(e):e,target:"_blank",rel:"noreferrer",style:{justifyContent:m?"space-between":"start"}},w),{children:[(0,l.jsx)(b,{fontWeight:v,fontStyle:c,fontSize:a,children:f}),y?(0,l.jsx)(g.YFh,{}):(0,l.jsx)(g.Tfp,{})]}))})}));j.defaultProps={href:"/",fullWidth:!1,fontSize:v.C.small,fontStyle:"normal",fontWeight:500},t.Z=j},9619:function(n,t,e){e.d(t,{Z:function(){return B}});var i=e(6042),o=e(9396),r=e(9534),a=e(7297),l=e(9815),d=e(5893),s=e(2432),u=e(9684),c=e(6038),v=e(5675),f=e.n(v),p=e(7294),h=e(9521),m=e(1163),g=e(9260),w=e.n(g),y=e(8064),x=function(n){var t=n.container,e=(0,r.Z)(n,["container"]);return(0,d.jsx)(w(),(0,o.Z)((0,i.Z)({animationData:y,loop:!0,className:"wave"},e),{interactivity:{mode:"scroll",container:null!==t&&void 0!==t?t:"body",actions:[{visibility:[0,1],type:"seek",frames:[0,200]}]}}))},b=e(6183);function Z(){var n=(0,a.Z)(["\n  display: grid;\n  grid-template-rows: 25vh auto auto;\n  grid-template-columns: 1;\n  gap: 2rem;\n  align-content: start;\n  width: 100vw;\n  min-height: ",";\n  background-color: ",";\n  max-width: 100%;\n  position: relative;\n  @media (min-width: 1500px) {\n    min-height: 40vh;\n  }\n  > * {\n    grid-column: 1/-1;\n    max-height: 100%;\n  }\n"]);return Z=function(){return n},n}function j(){var n=(0,a.Z)(["\n  grid-row-start: 2;\n  padding-top: 150px;\n  @media (min-width: 200px) {\n    padding-top: 25vh;\n  }\n  z-index: 10;\n  @media "," {\n    padding-top: 20%;\n  }\n  @media "," {\n    padding-top: 10%;\n  }\n"]);return j=function(){return n},n}function C(){var n=(0,a.Z)(["\n  padding: 0;\n  grid-row-start: 3;\n\n  @media "," {\n    visibility: hidden;\n  }\n\n  > .auto-animate--slider-thumbnail--container {\n    position: absolute;\n    right: 0;\n    overflow-y: hidden;\n    overflow-x: clip;\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    list-style-type: none;\n    bottom: 5%;\n    z-index: 5;\n    pointer-events: none;\n\n    * {\n      pointer-events: auto;\n    }\n\n    > li {\n      border-radius: 5px;\n      width: 250px;\n      max-width: 30%;\n      height: 140px;\n\n      overflow: hidden;\n      position: relative;\n      cursor: pointer;\n      transition: opacity 300ms ease-out, transform 450ms ease;\n\n      &:hover {\n        transform: scale(1.02);\n        transition-duration: 150ms;\n      }\n\n      &:last-child {\n        opacity: 0.7;\n        border: 1px solid rgba(255, 255, 255, 0.5);\n\n        &:hover {\n          transform: scale(0.99);\n        }\n      }\n      * {\n        object-fit: cover;\n      }\n    }\n  }\n"]);return C=function(){return n},n}function k(){var n=(0,a.Z)(["\n  grid-row: 1/5;\n  display: grid;\n  position: relative;\n  overflow: hidden;\n\n  > * {\n    width: 100%;\n    height: 100%;\n    grid-column: 1/-1;\n    z-index: 1;\n    opacity: 0;\n    transition: opacity 700ms ease;\n    pointer-events: none;\n  }\n\n  img {\n    object-fit: cover;\n    animation: pulseImage 18s linear infinite alternate;\n  }\n  &::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.2);\n    z-index: 2;\n    pointer-events: none;\n  }\n\n  @keyframes pulseImage {\n    from {\n      scale: 100%;\n    }\n    to {\n      scale: 120%;\n    }\n  }\n"]);return k=function(){return n},n}function A(){var n=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));\n  gap: 0.5rem;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 10px;\n  grid-auto-flow: dense;\n\n  li {\n    padding-bottom: 20px;\n    border-radius: 3px;\n    border: 0;\n    border-top: 3px solid;\n    border-color: ",";\n    cursor: pointer;\n    transition: transform 200ms ease-in-out;\n    &:hover {\n      transform: scaleX(0.9);\n      opacity: 0.8;\n    }\n  }\n"]);return A=function(){return n},n}function S(){var n=(0,a.Z)(["\n  position: relative;\n  min-height: ",";\n  padding-bottom: ",";\n  grid-row: 4 / 6;\n  background: ",";\n\n  background-size: ",";\n  z-index: 2;\n  display: grid;\n  align-items: flex-end;\n  align-content: end;\n  grid-template-rows: 1;\n  grid-template-columns: 1;\n  @media "," {\n    min-height: 250px;\n  }\n  .wave-container {\n    position: relative;\n    width: 100vw;\n    transform: rotate(180deg);\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    height: 20vh;\n    max-height: 700px;\n    mask: linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0) 10%,\n      rgba(0, 0, 0, 1) 20%,\n      rgba(0, 0, 0, 1) 70%,\n      rgba(0, 0, 0, 0) 95%\n    );\n    margin: 0 auto;\n    overflow: hidden;\n\n    .wave {\n      width: 100vw;\n      transform: translateY(-20%);\n    }\n    @media "," {\n      bottom: 0%;\n    }\n    @media "," {\n      height: 25vh;\n      bottom: 0;\n      .wave {\n        transform: translateY(-18%);\n      }\n    }\n  }\n  .container {\n    z-index: 4;\n  }\n  @media "," {\n    background: ",";\n    background-size: cover;\n  }\n"]);return S=function(){return n},n}function z(){var n=(0,a.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return z=function(){return n},n}var P=h.ZP.section.withConfig({componentId:"sc-da731c92-0"})(Z(),(function(n){return n.hasBottomContent?"100vh":"60vh"}),(function(n){return"light"===n.wave?s.w.white:s.w.darkGrey})),I=h.ZP.div.withConfig({componentId:"sc-da731c92-1"})(j(),u.Af.tablet,u.Af.desktop),T=(h.ZP.ul.withConfig({componentId:"sc-da731c92-2"})(C(),u.Af.subTablet),h.ZP.div.withConfig({componentId:"sc-da731c92-3"})(k())),W=(h.ZP.ul.withConfig({componentId:"sc-da731c92-4"})(A(),s.w.solidGrey),h.ZP.div.withConfig({componentId:"sc-da731c92-5"})(S(),(function(n){return n.hasBottomContent?"280px":"200px"}),(function(n){return n.hasBottomContent?"3rem":"1rem"}),(function(n){return"light"===n.wave?'url("/waves/light-wave-mobile.png") no-repeat':'url("/waves/hero-wave-dark.png") no-repeat'}),(function(n){return n.hasBottomContent?"150% 55%":"150% 88%"}),u.Af.tablet,u.Af.tablet,u.Af.desktop,u.Af.tablet,(function(n){return"light"===n.wave?' url("/waves/hero-wave-light.png") no-repeat':'url("/waves/hero-wave-dark.png") no-repeat'}))),N=h.ZP.video.withConfig({componentId:"sc-da731c92-6"})(z()),R=function(n){var t,e,a,s,u=n.images,v=n.video,h=n.isCampaignStyle,g=n.children,w=n.bottomContent,y=n.waveStyle,Z=n.updateActiveSlide,j=(0,r.Z)(n,["images","video","isCampaignStyle","children","bottomContent","waveStyle","updateActiveSlide"]),C=(0,p.useState)(Array.isArray(u)?null===u||void 0===u?void 0:u.map((function(n,t){var e,i,o,r;return{id:null===n||void 0===n?void 0:n.id,src:null===(o=null===n||void 0===n||null===(e=n.attributes)||void 0===e||null===(i=e.image)||void 0===i?void 0:i.data[0])||void 0===o||null===(r=o.attributes)||void 0===r?void 0:r.url,altText:"",position:t}})):void 0),k=C[0],A=C[1],S=(0,p.useRef)(null),z=(0,p.useRef)(null),R=(0,p.useRef)([]);R.current=[],(0,p.useEffect)((function(){A(Array.isArray(u)?u.map((function(n,t){var e,i,o,r;return{id:null===n||void 0===n?void 0:n.id,src:null===(o=null===n||void 0===n||null===(e=n.attributes)||void 0===e||null===(i=e.image)||void 0===i?void 0:i.data[0])||void 0===o||null===(r=o.attributes)||void 0===r?void 0:r.url,altText:"",position:t}})):void 0)}),[u]),(0,p.useEffect)((function(){c.ZP.fromTo(S.current,{gridTemplateRows:"100vh 0px 0px 0px 0px 0px",overflow:"hidden"},{gridTemplateRows:"1fr auto auto",duration:1.5,ease:"sine.inOut"}),c.ZP.fromTo(z.current,{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:1,delay:Array.isArray(u)?1:.25,ease:"power3.inOut"})}),[]),(0,p.useEffect)((function(){R.current&&c.ZP.fromTo(R.current,{y:100,autoAlpha:0},{y:0,autoAlpha:1,duration:.3,delay:1.3,ease:"back.inOut(3)",stagger:{from:"start",amount:.2}})}),[]),(0,p.useEffect)((function(){var n=setInterval((function(){var n;n=null===k||void 0===k?void 0:k[0],A((function(t){return t?(0,l.Z)(t.filter((function(t){return(null===t||void 0===t?void 0:t.position)!==(null===n||void 0===n?void 0:n.position)}))).concat([n]):t})),"undefined"!==typeof Z&&n&&n.position&&Z(null===n||void 0===n?void 0:n.position)}),7e3);return function(){return clearInterval(n)}}),[k]);(0,m.useRouter)().locale,(0,b.NU)();return(0,d.jsxs)(P,(0,o.Z)((0,i.Z)({id:"#hero-container"},j),{ref:S,wave:y,hasBottomContent:!!w,children:[(0,d.jsx)(T,{children:h?(0,d.jsx)("div",{style:{opacity:1},children:(0,d.jsx)(N,{autoPlay:!0,muted:!0,loop:!0,src:v})}):Array.isArray(u)?u.map((function(n){var t,e,i,o,r,a,l,s,u;return(0,d.jsx)("div",{style:{opacity:(null===k||void 0===k||null===(t=k[k.length-1])||void 0===t?void 0:t.src)===(null===(o=null===n||void 0===n||null===(e=n.attributes)||void 0===e||null===(i=e.image)||void 0===i?void 0:i.data[0])||void 0===o||null===(r=o.attributes)||void 0===r?void 0:r.url)?1:0},children:(0,d.jsx)(f(),{src:null===(s=null===n||void 0===n||null===(a=n.attributes)||void 0===a||null===(l=a.image)||void 0===l?void 0:l.data[0])||void 0===s||null===(u=s.attributes)||void 0===u?void 0:u.url,alt:null===n||void 0===n?void 0:n.Alt_Text,layout:"fill",quality:95})},"image-".concat(null===n||void 0===n?void 0:n.id))})):(0,d.jsx)("div",{style:{opacity:1},children:(0,d.jsx)(f(),{src:null===(a=null===u||void 0===u||null===(t=u.attributes)||void 0===t||null===(e=t.image)||void 0===e?void 0:e.data[0])||void 0===a||null===(s=a.attributes)||void 0===s?void 0:s.url,alt:null===u||void 0===u?void 0:u.altText,layout:"fill",quality:95})})}),(0,d.jsx)(I,{ref:z,className:"container",children:g}),h?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(W,{wave:y,hasBottomContent:!!w,children:[(0,d.jsx)("div",{className:"wave-container",id:"hero-wave-container",style:{zIndex:1},children:(0,d.jsx)(x,{className:"wave",container:"#hero-wave-container"})}),(0,d.jsx)("div",{className:"container",children:w})]})]}))};R.defaultProps={bottomContent:"",waveStyle:"light"};var B=R},9036:function(n,t,e){e.d(t,{i:function(){return i.Z}});var i=e(6028)}}]);