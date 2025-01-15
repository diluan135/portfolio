(function(){"use strict";var e={822:function(e,t,o){var n=o(751),r=o(278),i=(0,r.y$)({state:{isDarkMode:!1,currentView:"MainContent"},mutations:{toggleDarkMode(e){e.isDarkMode=!e.isDarkMode},setCurrentView(e,t){e.currentView=t}}}),a=o(641),c=o(33);function s(e,t,o,n,r,i){const s=(0,a.g2)("AppHeader");return(0,a.uX)(),(0,a.CE)("div",{class:(0,c.C4)([{"dark-mode":r.isDarkMode},"background"])},[(0,a.bF)(s,{onToggleDarkMode:t[0]||(t[0]=e=>r.isDarkMode=e),isDarkMode:r.isDarkMode},null,8,["isDarkMode"]),(0,a.Lk)("p",null,"currentView = "+(0,c.v_)(e.currentView),1),((0,a.uX)(),(0,a.Wv)((0,a.$y)(i.currentViewComponent)))],2)}var l=o.p+"img/usa_flag.c0b8497d.png",u=o.p+"img/br_flag.127c235d.png";const d={class:"d-flex header align-items-center"},k={class:"col d-flex align-items-center"},f={style:{"margin-right":"-30px"},class:"col-1 ms-auto"},C=["checked"],g={for:"darkmode-toggle",class:"darkmode-toggle-label"},p={class:"moon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v={id:"SVGRepo_iconCarrier"},L=["fill"],m=["stroke"],h=["stroke"],w=["stroke"],b=["stroke"],M=["stroke"],V={class:"col-1"},$={key:0,src:l,alt:"English",class:"language-icon"},y={key:1,src:u,alt:"Português",class:"language-icon"};function D(e,t,o,n,r,i){return(0,a.uX)(),(0,a.CE)("div",d,[(0,a.Lk)("div",k,[(0,a.Lk)("button",{class:(0,c.C4)(["botao",{active:"AboutMe"===e.currentView}]),onClick:t[0]||(t[0]=e=>i.changeView("AboutMe"))},[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("about")),1))],2),t[6]||(t[6]=(0,a.Lk)("div",{class:"vertical-divider"},null,-1)),(0,a.Lk)("button",{class:(0,c.C4)(["botao",{active:"Home"===e.currentView}]),onClick:t[1]||(t[1]=e=>i.changeView("Home"))},[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("projects")),1))],2),t[7]||(t[7]=(0,a.Lk)("div",{class:"vertical-divider"},null,-1)),(0,a.Lk)("button",{class:(0,c.C4)(["botao",{active:"Services"===e.currentView}]),onClick:t[2]||(t[2]=e=>i.changeView("Services"))},[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("services")),1))],2),t[8]||(t[8]=(0,a.Lk)("div",{class:"vertical-divider"},null,-1)),(0,a.Lk)("button",{class:(0,c.C4)(["botao",{active:"Certificates"===e.currentView}]),onClick:t[3]||(t[3]=e=>i.changeView("Certificates"))},[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("certificates")),1))],2),t[9]||(t[9]=(0,a.Lk)("div",{class:"vertical-divider"},null,-1))]),(0,a.Lk)("div",f,[(0,a.Lk)("input",{type:"checkbox",id:"darkmode-toggle",checked:o.isDarkMode,onChange:t[4]||(t[4]=(...e)=>i.emitDarkMode&&i.emitDarkMode(...e))},null,40,C),(0,a.Lk)("label",g,[((0,a.uX)(),(0,a.CE)("svg",p,[t[12]||(t[12]=(0,a.Lk)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1)),t[13]||(t[13]=(0,a.Lk)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),(0,a.Lk)("g",v,[t[10]||(t[10]=(0,a.Lk)("path",{d:"M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z",stroke:"#eee"},null,-1)),t[11]||(t[11]=(0,a.Lk)("path",{d:"M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z",stroke:"#eee"},null,-1)),(0,a.Lk)("path",{d:"M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z",fill:o.isDarkMode?"#e6b802":"#bbb"},null,8,L)])])),((0,a.uX)(),(0,a.CE)("svg",{class:"sun",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:o.isDarkMode?"#555":"#fff"},[(0,a.Lk)("path",{d:"M8 22H16",stroke:o.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,8,h),(0,a.Lk)("path",{d:"M5 19H19",stroke:o.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,8,w),(0,a.Lk)("path",{d:"M2 16H22",stroke:o.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,8,b),(0,a.Lk)("path",{d:"M10 6.34141C10.6256 6.12031 11.2987 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5217 17.4335 14.911 16.5 15.9687H7.5C6.56645 14.911 6 13.5217 6 12C6 11.2987 6.12031 10.6256 6.34141 10",stroke:o.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round"},null,8,M)],8,m))])]),(0,a.Lk)("div",V,[(0,a.Lk)("div",{onClick:t[5]||(t[5]=(...e)=>i.toggleLanguage&&i.toggleLanguage(...e)),class:"language-toggle"},["en"===e.$i18n.locale?((0,a.uX)(),(0,a.CE)("img",$)):((0,a.uX)(),(0,a.CE)("img",y)),(0,a.Lk)("p",null,(0,c.v_)(e.$t("language")),1)])])])}var E={name:"AppHeader",props:{isDarkMode:{type:Boolean,default:!1}},computed:{...(0,r.aH)(["currentView"])},methods:{...(0,r.PY)(["setCurrentView"]),toggleLanguage(){"en"===this.$i18n.locale?this.$i18n.locale="pt":this.$i18n.locale="en"},emitDarkMode(e){this.$emit("toggle-dark-mode",e.target.checked)},changeView(e){this.setCurrentView(e)}}},_=o(262);const X=(0,_.A)(E,[["render",D]]);var H=X;function j(e,t){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(n.eB,{name:"fade",mode:"out-in"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)("h1",{key:e.$i18n.locale},(0,c.v_)(e.$t("welcome")),1))])),_:1}),(0,a.bF)(n.eB,{name:"fade",mode:"out-in"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("about")),1))])),_:1})])}const Z={},x=(0,_.A)(Z,[["render",j]]);var A=x;const O={class:"main-content"};function S(e,t){return(0,a.uX)(),(0,a.CE)("div",O,[(0,a.bF)(n.eB,{name:"fade",mode:"out-in"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("certificates")),1))])),_:1})])}const B={},P=(0,_.A)(B,[["render",S]]);var F=P;const G={class:"main-content"};function R(e,t){return(0,a.uX)(),(0,a.CE)("div",G,[(0,a.bF)(n.eB,{name:"fade",mode:"out-in"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("certificates")),1))])),_:1})])}const T={},J=(0,_.A)(T,[["render",R]]);var N=J;const W={class:"main-content"};function Y(e,t){return(0,a.uX)(),(0,a.CE)("div",W,[(0,a.bF)(n.eB,{name:"fade",mode:"out-in"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)("p",{key:e.$i18n.locale},(0,c.v_)(e.$t("certificates")),1))])),_:1})])}const I={},U=(0,_.A)(I,[["render",Y]]);var q=U,z={components:{AppHeader:H},computed:{...(0,r.aH)(["currentView"]),currentViewComponent(){switch(this.currentView){case"AboutMe":return A;case"Projects":return F;case"Services":return N;case"Certificates":return q;default:return A}}},data(){return{isDarkMode:!1}},methods:{...(0,r.PY)(["setCurrentView"])}};const K=(0,_.A)(z,[["render",s]]);var Q=K,ee=o(682),te=(o(736),JSON.parse('{"welcome":"Welcome to my portfolio","about":"About Me","contact":"Contact","language":"Language","projects":"Projects","services":"Services","certificates":"certificates"}')),oe=JSON.parse('{"welcome":"Boas vindas ao meu portfólio","about":"Sobre Mim","contact":"Contato","language":"Idioma","projects":"Projetos","services":"Serviços","certificates":"Certificados"}');const ne={en:te,pt:oe},re=(0,ee.hU)({locale:"en",fallbackLocale:"pt",messages:ne}),ie=(0,n.Ef)(Q);ie.use(re),ie.use(i),ie.mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/portfolio/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],c=n[1],s=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var u=s(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(822)}));n=o.O(n)})();
//# sourceMappingURL=app.6d8ac65d.js.map