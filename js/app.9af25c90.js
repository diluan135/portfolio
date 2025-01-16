(function(){"use strict";var e={1312:function(e,t,a){var o=a(3751),i=a(6278),n=(0,i.y$)({state:{isDarkMode:!1,currentView:"AboutMe"},mutations:{toggleDarkMode(e){e.isDarkMode=!e.isDarkMode},setCurrentView(e,t){e.currentView=t}}}),s=a(641),r=a(33);function l(e,t,a,i,n,l){const c=(0,s.g2)("AppHeader"),u=(0,s.g2)("FloatingContacts");return(0,s.uX)(),(0,s.CE)("div",{class:(0,r.C4)([{"dark-mode":n.isDarkMode},"background"])},[(0,s.bF)(c,{onToggleDarkMode:t[0]||(t[0]=e=>n.isDarkMode=e),isDarkMode:n.isDarkMode},null,8,["isDarkMode"]),(0,s.bF)(o.eB,{name:"fade",mode:"out-in"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.Wv)((0,s.$y)(l.currentViewComponent),{isDarkMode:n.isDarkMode,style:{padding:"5vh 5vw 0px 2vw"}},null,8,["isDarkMode"]))])),_:1}),(0,s.bF)(u,{isDarkMode:n.isDarkMode},null,8,["isDarkMode"])],2)}var c=a.p+"img/usa_flag.c0b8497d.png",u=a.p+"img/br_flag.127c235d.png";const d={class:"d-flex header align-items-center"},m={class:"col d-flex align-items-center"},p={style:{"margin-right":"-30px"},class:"col-1 ms-auto"},g=["checked"],k={for:"darkmode-toggle",class:"darkmode-toggle-label"},v={class:"moon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C={id:"SVGRepo_iconCarrier"},h=["fill"],f=["stroke"],b=["stroke"],L=["stroke"],w=["stroke"],M=["stroke"],y={class:"col-1"},E={key:0,src:c,alt:"English",class:"language-icon"},I={key:1,src:u,alt:"Português",class:"language-icon"};function $(e,t,a,o,i,n){return(0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("div",m,[(0,s.Lk)("button",{class:(0,r.C4)(["botao",{active:"AboutMe"===e.currentView}]),onClick:t[0]||(t[0]=e=>n.changeView("AboutMe"))},[((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("about")),1))],2),t[6]||(t[6]=(0,s.Lk)("div",{class:"vertical-divider"},null,-1)),(0,s.Lk)("button",{class:(0,r.C4)(["botao",{active:"Projects"===e.currentView}]),onClick:t[1]||(t[1]=e=>n.changeView("Projects"))},[((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("projects")),1))],2),t[7]||(t[7]=(0,s.Lk)("div",{class:"vertical-divider"},null,-1)),(0,s.Lk)("button",{class:(0,r.C4)(["botao",{active:"Services"===e.currentView}]),onClick:t[2]||(t[2]=e=>n.changeView("Services"))},[((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("services")),1))],2),t[8]||(t[8]=(0,s.Lk)("div",{class:"vertical-divider"},null,-1)),(0,s.Lk)("button",{class:(0,r.C4)(["botao",{active:"Certificates"===e.currentView}]),onClick:t[3]||(t[3]=e=>n.changeView("Certificates"))},[((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("certificates")),1))],2),t[9]||(t[9]=(0,s.Lk)("div",{class:"vertical-divider"},null,-1))]),(0,s.Lk)("div",p,[(0,s.Lk)("input",{type:"checkbox",id:"darkmode-toggle",checked:a.isDarkMode,onChange:t[4]||(t[4]=(...e)=>n.emitDarkMode&&n.emitDarkMode(...e))},null,40,g),(0,s.Lk)("label",k,[((0,s.uX)(),(0,s.CE)("svg",v,[t[12]||(t[12]=(0,s.Lk)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1)),t[13]||(t[13]=(0,s.Lk)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),(0,s.Lk)("g",C,[t[10]||(t[10]=(0,s.Lk)("path",{d:"M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z",stroke:"#eee"},null,-1)),t[11]||(t[11]=(0,s.Lk)("path",{d:"M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z",stroke:"#eee"},null,-1)),(0,s.Lk)("path",{d:"M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z",fill:a.isDarkMode?"#e6b802":"#bbb"},null,8,h)])])),((0,s.uX)(),(0,s.CE)("svg",{class:"sun",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:a.isDarkMode?"#555":"#fff"},[(0,s.Lk)("path",{d:"M8 22H16",stroke:a.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,8,b),(0,s.Lk)("path",{d:"M5 19H19",stroke:a.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,8,L),(0,s.Lk)("path",{d:"M2 16H22",stroke:a.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,8,w),(0,s.Lk)("path",{d:"M10 6.34141C10.6256 6.12031 11.2987 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5217 17.4335 14.911 16.5 15.9687H7.5C6.56645 14.911 6 13.5217 6 12C6 11.2987 6.12031 10.6256 6.34141 10",stroke:a.isDarkMode?"#555":"#fff","stroke-width":"1.5","stroke-linecap":"round"},null,8,M)],8,f))])]),(0,s.Lk)("div",y,[(0,s.Lk)("div",{onClick:t[5]||(t[5]=(...e)=>n.toggleLanguage&&n.toggleLanguage(...e)),class:"language-toggle"},["en"===e.$i18n.locale?((0,s.uX)(),(0,s.CE)("img",E)):((0,s.uX)(),(0,s.CE)("img",I)),(0,s.Lk)("p",null,(0,r.v_)(e.$t("language")),1)])])])}var _={name:"AppHeader",props:{isDarkMode:{type:Boolean,default:!1}},computed:{...(0,i.aH)(["currentView"])},methods:{...(0,i.PY)(["setCurrentView"]),toggleLanguage(){"en"===this.$i18n.locale?this.$i18n.locale="pt":this.$i18n.locale="en"},emitDarkMode(e){this.$emit("toggle-dark-mode",e.target.checked)},changeView(e){this.setCurrentView(e)}}},x=a(6262);const D=(0,x.A)(_,[["render",$]]);var X=D;const S={class:"row justify-content-center align-items-center text-center"},V={class:"box col-7"},j={class:"skills-chart d-flex justify-content-center"},P={class:"row justify-content-center align-items-center text-center"},H={class:"boxSkills col-7"},B={key:0,class:"row",style:{"margin-top":"20px"}},T=["title"],A=["src"],Z={class:"tooltip"},z=["title"],O=["src"],G={class:"tooltip"},F=["title"],W=["src"],Q={class:"tooltip"},q=["title"],R=["src"],J={class:"tooltip"},U={class:"row justify-content-center align-items-center text-center"},N={class:"box col-7"};function Y(e,t,i,n,l,c){const u=(0,s.g2)("BarChart");return(0,s.uX)(),(0,s.CE)("div",null,[((0,s.uX)(),(0,s.CE)("h1",{key:e.$i18n.locale},(0,r.v_)(e.$t("welcome")),1)),((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("description")),1)),(0,s.Lk)("div",S,[(0,s.Lk)("div",V,[(0,s.Lk)("h3",null,(0,r.v_)(e.$t("skills")),1),(0,s.Lk)("div",j,[0==l.barra?((0,s.uX)(),(0,s.Wv)(u,{key:0,data:l.chartData,options:l.chartOptions},null,8,["data","options"])):(0,s.Q3)("",!0)])])]),(0,s.Lk)("div",P,[(0,s.Lk)("div",H,[(0,s.Lk)("div",null,[((0,s.uX)(),(0,s.CE)("h3",{key:e.$i18n.locale,style:{"padding-top":"10px",cursor:"pointer"},onClick:t[0]||(t[0]=e=>l.softSkills=!l.softSkills)},[(0,s.eW)((0,r.v_)(l.softSkills?e.$t("principal softskills"):e.$t("see softskills"))+" ",1),(0,s.Lk)("i",{class:(0,r.C4)(l.softSkills?"fa fa-chevron-up":"fa fa-chevron-down"),style:{"margin-left":"8px"}},null,2)])),(0,s.bF)(o.eB,{name:"fade-slide"},{default:(0,s.k6)((()=>[l.softSkills?((0,s.uX)(),(0,s.CE)("div",B,[(0,s.Lk)("div",{class:"col-3 text-center tooltip-container",title:e.$t("emotional inteligence description")},[(0,s.Lk)("img",{src:i.isDarkMode?a(5901):a(6242),alt:"Emotional Intelligence",class:"softIcon"},null,8,A),(0,s.Lk)("p",null,(0,r.v_)(e.$t("emocional inteligence")),1),(0,s.Lk)("div",Z,(0,r.v_)(e.$t("emotional inteligence description")),1)],8,T),(0,s.Lk)("div",{class:"col-3 text-center tooltip-container",title:e.$t("communication description")},[(0,s.Lk)("img",{src:i.isDarkMode?a(5905):a(7622),alt:"Communication",class:"softIcon"},null,8,O),(0,s.Lk)("p",null,(0,r.v_)(e.$t("communication")),1),(0,s.Lk)("div",G,(0,r.v_)(e.$t("communication description")),1)],8,z),(0,s.Lk)("div",{class:"col-3 text-center tooltip-container",title:e.$t("teamwork description")},[(0,s.Lk)("img",{src:i.isDarkMode?a(8535):a(9188),alt:"Teamwork",class:"softIcon"},null,8,W),(0,s.Lk)("p",null,(0,r.v_)(e.$t("teamwork")),1),(0,s.Lk)("div",Q,(0,r.v_)(e.$t("teamwork description")),1)],8,F),(0,s.Lk)("div",{class:"col-3 text-center tooltip-container",title:e.$t("pressure description")},[(0,s.Lk)("img",{src:i.isDarkMode?a(184):a(5049),alt:"Pressure",class:"softIcon"},null,8,R),(0,s.Lk)("p",null,(0,r.v_)(e.$t("pressure")),1),(0,s.Lk)("div",J,(0,r.v_)(e.$t("pressure description")),1)],8,q)])):(0,s.Q3)("",!0)])),_:1})])])]),(0,s.Lk)("div",U,[(0,s.Lk)("div",N,[((0,s.uX)(),(0,s.CE)("h3",{key:e.$i18n.locale},(0,r.v_)(e.$t("about")),1)),((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("actually")),1)),((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("aboutMe")),1))])])])}a(1454);var K=a(4527),ee=a(2022);ee.t1.register(ee.hE,ee.m_,ee.s$,ee.E8,ee.PP,ee.kc);var te={name:"BarChartComponent",props:{isDarkMode:Boolean},components:{BarChart:K.yP},data(){return{softSkills:!1,rosa:"rgb(255, 34, 218)",rosaEscuro:"rgb(255, 34, 218, 0.5)",azul:"rgba(47, 203, 205, 0.6)",azulEscuro:"rgb(47, 203, 205, 0.3)",barra:0,skills:[{name:"VueJs",level:8},{name:"Laravel",level:7},{name:"PHP",level:5},{name:"CSS",level:8},{name:"HTML",level:7},{name:"Bootstrap",level:7},{name:"Python",level:6},{name:"English",level:8},{name:"Photoshop",level:9},{name:"Illustrator",level:6},{name:"Git",level:6},{name:"MySql",level:5}],chartData:{labels:[],datasets:[{label:"Skill level",data:[],backgroundColor:this.isDarkMode?this.azulEscuro:this.azul,borderColor:(this.isDarkMode,this.azul),borderWidth:1,barThickness:38,categoryPercentage:1,barPercentage:1}]},chartOptions:{elements:{bar:{borderWidth:20}},responsive:!0,scales:{y:{beginAtZero:!0,max:10}}}}},watch:{isDarkMode(e){this.updateChartColors(e),this.barra=1,setTimeout((()=>{this.barra=0}),10)}},methods:{updateChartColors(e){this.chartData.datasets[0].backgroundColor=e?this.azulEscuro:this.azul,this.chartData.datasets[0].borderColor=this.azul,this.chartData.datasets[0].borderWidth=2}},mounted(){this.chartData={labels:this.skills.map((e=>e.name)),datasets:[{label:"Skill level",backgroundColor:this.isDarkMode?this.azulEscuro:this.azul,borderColor:(this.isDarkMode,this.azul),data:this.skills.map((e=>e.level))}]}}};const ae=(0,x.A)(te,[["render",Y],["__scopeId","data-v-51179e17"]]);var oe=ae;const ie={class:"main-content"};function ne(e,t){return(0,s.uX)(),(0,s.CE)("div",ie,[(0,s.bF)(o.eB,{name:"fade",mode:"out-in"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("projects")),1))])),_:1})])}const se={},re=(0,x.A)(se,[["render",ne]]);var le=re;const ce={class:"main-content"};function ue(e,t){return(0,s.uX)(),(0,s.CE)("div",ce,[(0,s.bF)(o.eB,{name:"fade",mode:"out-in"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("services")),1))])),_:1})])}const de={},me=(0,x.A)(de,[["render",ue]]);var pe=me;const ge={class:"main-content"};function ke(e,t){return(0,s.uX)(),(0,s.CE)("div",ge,[(0,s.bF)(o.eB,{name:"fade",mode:"out-in"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)("p",{key:e.$i18n.locale},(0,r.v_)(e.$t("certificates")),1))])),_:1})])}const ve={},Ce=(0,x.A)(ve,[["render",ke]]);var he=Ce,fe=a.p+"img/linkedin.9a2fe641.png",be=a.p+"img/email.eb0a95cb.png",Le=a.p+"img/whatsapp.c9bb5a33.png",we=a.p+"img/github.0234dc6c.png",Me=a.p+"img/instagram.7ae0206a.png";const ye={class:"floating-contacts"},Ee={key:0,class:"contact-name"},Ie={key:1,src:fe,alt:"LinkedIn"},$e={key:2,src:fe,alt:"LinkedIn"},_e={key:0,class:"contact-name"},xe={key:1,src:be,alt:"Email"},De={key:2,src:be,alt:"Email"},Xe={key:0,class:"contact-name"},Se={key:1,src:Le,alt:"WhatsApp"},Ve={key:2,src:Le,alt:"WhatsApp"},je={key:0,class:"contact-name"},Pe={key:1,src:we,alt:"GitHub"},He={key:2,src:we,alt:"GitHub"},Be={key:0,class:"contact-name"},Te={key:1,src:Me,alt:"Instagram"},Ae={key:2,src:Me,alt:"Instagram"};function Ze(e,t,a,o,i,n){return(0,s.uX)(),(0,s.CE)("div",ye,[i.showContacts?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",{key:0,class:"contact-ball",onMouseover:t[0]||(t[0]=e=>i.showContacts=!0),onMouseleave:t[1]||(t[1]=(...e)=>n.startTimeout&&n.startTimeout(...e))},t[13]||(t[13]=[(0,s.Fv)('<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-285c2ec8><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-285c2ec8></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-285c2ec8></g><g id="SVGRepo_iconCarrier" data-v-285c2ec8><path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-285c2ec8></path></g></svg>',1)]),32)),i.showContacts?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"contact-options",onMouseleave:t[12]||(t[12]=(...e)=>n.startTimeout&&n.startTimeout(...e))},[(0,s.Lk)("a",{href:"https://linkedin.com/in/diluan-matos",target:"_blank",class:"contact-option",onMouseover:t[2]||(t[2]=e=>n.showContactImage("linkedin")),onMouseleave:t[3]||(t[3]=(...e)=>n.resetContactImage&&n.resetContactImage(...e))},["linkedin"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("div",Ee,(0,r.v_)(e.$t("linkedin")),1)):(0,s.Q3)("",!0),"linkedin"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("img",Ie)):((0,s.uX)(),(0,s.CE)("img",$e))],32),(0,s.Lk)("a",{href:"mailto:diluan135@gmail.com",class:"contact-option",onMouseover:t[4]||(t[4]=e=>n.showContactImage("email")),onMouseleave:t[5]||(t[5]=(...e)=>n.resetContactImage&&n.resetContactImage(...e))},["email"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("div",_e,(0,r.v_)(e.$t("email")),1)):(0,s.Q3)("",!0),"email"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("img",xe)):((0,s.uX)(),(0,s.CE)("img",De))],32),(0,s.Lk)("a",{href:"https://wa.me/+5542984049847",target:"_blank",class:"contact-option",onMouseover:t[6]||(t[6]=e=>n.showContactImage("whatsapp")),onMouseleave:t[7]||(t[7]=(...e)=>n.resetContactImage&&n.resetContactImage(...e))},["whatsapp"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("div",Xe,(0,r.v_)(e.$t("whatsapp")),1)):(0,s.Q3)("",!0),"whatsapp"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("img",Se)):((0,s.uX)(),(0,s.CE)("img",Ve))],32),(0,s.Lk)("a",{href:"https://github.com/diluan135",target:"_blank",class:"contact-option",onMouseover:t[8]||(t[8]=e=>n.showContactImage("github")),onMouseleave:t[9]||(t[9]=(...e)=>n.resetContactImage&&n.resetContactImage(...e))},["github"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("div",je,(0,r.v_)(e.$t("github")),1)):(0,s.Q3)("",!0),"github"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("img",Pe)):((0,s.uX)(),(0,s.CE)("img",He))],32),(0,s.Lk)("a",{href:"https://instagram.com/diluanmatos",target:"_blank",class:"contact-option",onMouseover:t[10]||(t[10]=e=>n.showContactImage("instagram")),onMouseleave:t[11]||(t[11]=(...e)=>n.resetContactImage&&n.resetContactImage(...e))},["instagram"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("div",Be,(0,r.v_)(e.$t("instagram")),1)):(0,s.Q3)("",!0),"instagram"===i.currentContactImage?((0,s.uX)(),(0,s.CE)("img",Te)):((0,s.uX)(),(0,s.CE)("img",Ae))],32)],32)):(0,s.Q3)("",!0)])}var ze={data(){return{showContacts:!1,currentContactImage:null,timeoutId:null}},methods:{showContactImage(e){this.currentContactImage=e},resetContactImage(){this.currentContactImage=null},startTimeout(){clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{this.showContacts=!1}),500)}},beforeUnmount(){clearTimeout(this.timeoutId)}};const Oe=(0,x.A)(ze,[["render",Ze],["__scopeId","data-v-285c2ec8"]]);var Ge=Oe,Fe={components:{AppHeader:X,FloatingContacts:Ge},computed:{...(0,i.aH)(["currentView"]),currentViewComponent(){switch(this.currentView){case"AboutMe":return oe;case"Projects":return le;case"Services":return pe;case"Certificates":return he;default:return oe}}},data(){return{isDarkMode:!1}},methods:{...(0,i.PY)(["setCurrentView"])}};const We=(0,x.A)(Fe,[["render",l]]);var Qe=We,qe=a(4682),Re=(a(8736),JSON.parse('{"welcome":"Welcome to my portfolio","about":"About Me","contact":"Contact","language":"Language","projects":"Projects","services":"Services","certificates":"Certificates","description":"My name is Diluan Lima de Matos, I\'m in the final year of Software Engineering at UEPG, and I\'m looking for a job as a developer.","actually":"Currently, I work as a full-stack developer, leveraging my experience as a graphic designer to create intuitive and efficient interfaces, always prioritizing the user experience and maintaining an elegant and functional design.","aboutMe":"I have solid experience, having worked on some projects using PHP, Laravel, VueJS, HTML, CSS, and Bootstrap, in addition to advanced knowledge in design tools such as Photoshop and Illustrator. I aim to integrate my programming and design skills to develop comprehensive and high-quality solutions, tailored to the needs of each project.","skills":"Skills","principal softskills":"Key Soft Skills","emocional inteligence":"Emotional Intelligence","communication":"Communication","teamwork":"Teamwork","pressure":"Ability to Work Under Pressure","see softskills":"See Soft Skills","emotional inteligence description":"Emotional intelligence gained through various leadership experiences and building empathy.","communication description":"Communication skills developed through working with customer service and collaborating with others.","teamwork description":"Teamwork skills developed in collaborative projects and group dynamics over the years.","pressure description":"Pressure management honed in high-pressure work situations like short-term projects or peak-demand periods."}')),Je=JSON.parse('{"welcome":"Boas vindas ao meu portfólio","about":"Sobre Mim","contact":"Contato","language":"Idioma","projects":"Projetos","services":"Serviços","certificates":"Certificados","description":"Me chamo Diluan Lima de Matos, estou cursando o último grau de Engenharia de Software na UEPG e estou a procura de um emprego como desenvolvedor.","actually":"Atualmente, atuo como desenvolvedor fullstack, aproveitando minha experiência como designer gráfico para criar interfaces intuitivas e eficientes, sempre priorizando a experiência do usuário e mantendo um design elegante e funcional. ","aboutMe":"    Possuo experiência sólida tendo realizado alguns projetos utilizando PHP, Laravel, VueJS, HTML, CSS e Bootstrap, além de conhecimentos avançados em ferramentas de design como Photoshop e Illustrator. Busco integrar minhas habilidades em programação e design para desenvolver soluções completas e de alta qualidade, alinhadas às necessidades de cada projeto.","skills":"Habilidades","principal softskills":"Principais Softskills","emocional inteligence":"Inteligência Emocional","communication":"Comunicação","teamwork":"Trabalho em Equipe","pressure":"Capacidade de Trabalhar Sob Pressão","see softskills":"Ver softSkills","emotional inteligence description":"Inteligência emocional adquirida através de várias experiências de liderança e construção de empatia.","communication description":"Habilidades de comunicação desenvolvidas ao trabalhar com atendimento ao público e com outras pessoas.","teamwork description":"Trabalho em equipe desenvolvido em projetos colaborativos e dinâmicas de grupo ao longo dos anos.","pressure description":"Gestão de pressão aprimorada em situações de trabalho de alta pressão como projetos de curto prazo ou épocas de alta demanda."}');const Ue={en:Re,pt:Je},Ne=(0,qe.hU)({locale:"en",fallbackLocale:"pt",messages:Ue}),Ye=(0,o.Ef)(Qe);Ye.use(Ne),Ye.use(n),Ye.mount("#app")},7622:function(e,t,a){e.exports=a.p+"img/communication.50cff838.png"},5905:function(e,t,a){e.exports=a.p+"img/communicationBlack.c4ccda28.png"},6242:function(e,t,a){e.exports=a.p+"img/emotional.a6733af7.png"},5901:function(e,t,a){e.exports=a.p+"img/emotionalBlack.2a6ab1ae.png"},5049:function(e,t,a){e.exports=a.p+"img/pressure.431b3e3d.png"},184:function(e,t,a){e.exports=a.p+"img/pressureBlack.9ef79160.png"},9188:function(e,t,a){e.exports=a.p+"img/teamwork.8554f20c.png"},8535:function(e,t,a){e.exports=a.p+"img/teamworkBlack.fdf0e270.png"}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,i,n){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],n=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(r=!1,n<s&&(s=n));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,i,n]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/portfolio/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,n,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var u=l(a)}for(t&&t(o);c<s.length;c++)n=s[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(1312)}));o=a.O(o)})();
//# sourceMappingURL=app.9af25c90.js.map