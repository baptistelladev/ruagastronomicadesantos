"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8529],{8529:(f,C,t)=>{t.r(C),t.d(C,{TabsPageModule:()=>M});var g=t(64);const c=[{page:"inicio",icon:"storefront",value:"home",text:{pt:"Explorar",en:"Explore",es:"Explorar"}},{page:"menu",icon:"grid",value:"menu",text:{pt:"Menu",en:"Menu",es:"Menu"}}];var n=t(4438),p=t(4742),h=t(177),m=t(8147);const y=(o,l)=>({"dark-tab":o,"light-tab":l});function a(o,l){1&o&&(n.qex(0),n.EFF(1),n.nI1(2,"translate"),n.bVm()),2&o&&(n.R7$(),n.JRh(n.bMT(2,1,"COMPONENTS.TABS.EXPLORE")))}function i(o,l){1&o&&(n.qex(0),n.EFF(1),n.nI1(2,"translate"),n.bVm()),2&o&&(n.R7$(),n.JRh(n.bMT(2,1,"COMPONENTS.TABS.MENU")))}function s(o,l){if(1&o&&(n.j41(0,"ion-tab-button",3),n.nrm(1,"ion-icon",4),n.DNE(2,a,3,3,"ng-container",5)(3,i,3,3,"ng-container",5),n.k0s()),2&o){const r=l.$implicit;n.Y8G("tab",r.page),n.R7$(),n.Y8G("name",r.icon+"-outline"),n.R7$(),n.Y8G("ngIf","home"===(null==r?null:r.value)),n.R7$(),n.Y8G("ngIf","menu"===(null==r?null:r.value))}}const d=[{path:"",component:(()=>{var o;class l{constructor(u){this.router=u,this.tabs=c,this.applyDarkTabBar=!1}ngOnInit(){}checkRoute(){this.applyDarkTabBar="/sobre-nos"===this.router.url,this.currentUrlJustString=this.router.url.split("/")[1],console.log(this.currentUrlJustString)}}return(o=l).\u0275fac=function(u){return new(u||o)(n.rXU(g.Ix))},o.\u0275cmp=n.VBU({type:o,selectors:[["rgs-tabs"]],decls:3,vars:5,consts:[["mode","ios",1,"ion-no-border",3,"ionTabsWillChange"],["slot","bottom",3,"ngClass"],[3,"tab",4,"ngFor","ngForOf"],[3,"tab"],[3,"name"],[4,"ngIf"]],template:function(u,T){1&u&&(n.j41(0,"ion-tabs",0),n.bIt("ionTabsWillChange",function(){return T.checkRoute()}),n.j41(1,"ion-tab-bar",1),n.DNE(2,s,4,4,"ion-tab-button",2),n.k0s()()),2&u&&(n.R7$(),n.Y8G("ngClass",n.l_i(2,y,T.applyDarkTabBar,!T.applyDarkTabBar)),n.R7$(),n.Y8G("ngForOf",T.tabs))},dependencies:[p.iq,p.Jq,p.qW,p.p4,h.YU,h.Sq,h.bT,m.D9],styles:["ion-tabs[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{height:70px}ion-tabs[_ngcontent-%COMP%]   ion-tab-bar.dark-tab[_ngcontent-%COMP%]{--background: var(--gray-2);border-top:1px solid var(--gray-3);outline:1px solid var(--black)}ion-tabs[_ngcontent-%COMP%]   ion-tab-bar.dark-tab[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--color-selected: var(--white)}ion-tabs[_ngcontent-%COMP%]   ion-tab-bar.light-tab[_ngcontent-%COMP%]{--background:var(--gray-ec);border-top:1px solid var(--white);outline:1px solid var(--gray-c)}ion-tabs[_ngcontent-%COMP%]   ion-tab-bar.light-tab[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--color-selected: var(--gray-text);--color: var(--gray-mid)}ion-tabs[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--color-selected: var(--gray-text);--color: var(--gray-mid);min-width:70px;flex:none;--background: var(--transparent)}"]}),l})(),children:[{path:"",redirectTo:"inicio",pathMatch:"full"},{path:"inicio",loadChildren:()=>Promise.all([t.e(3233),t.e(2076),t.e(1779)]).then(t.bind(t,1779)).then(o=>o.InicioPageModule)},{path:"apoie-nosso-projeto",loadChildren:()=>t.e(6967).then(t.bind(t,6967)).then(o=>o.AjudeNossoProjetoPageModule)},{path:"estabelecimento/:name",loadChildren:()=>Promise.all([t.e(3233),t.e(7545)]).then(t.bind(t,7545)).then(o=>o.EstabelecimentoPageModule)},{path:"trocar-idioma",loadChildren:()=>t.e(9510).then(t.bind(t,9510)).then(o=>o.TrocarIdiomaPageModule)},{path:"menu",loadChildren:()=>Promise.all([t.e(2076),t.e(2893)]).then(t.bind(t,2893)).then(o=>o.MenuPageModule)},{path:"contato",loadChildren:()=>Promise.all([t.e(2076),t.e(820)]).then(t.bind(t,820)).then(o=>o.ContatoPageModule)},{path:"sobre-nos",loadChildren:()=>Promise.all([t.e(3233),t.e(2076),t.e(461)]).then(t.bind(t,461)).then(o=>o.SobreNosPageModule)}]}];let b=(()=>{var o;class l{}return(o=l).\u0275fac=function(u){return new(u||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[g.iI.forChild(d),g.iI]}),l})();var P=t(3887);let M=(()=>{var o;class l{}return(o=l).\u0275fac=function(u){return new(u||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[P.G,b]}),l})()},3887:(f,C,t)=>{t.d(C,{G:()=>y});var g=t(177),c=t(9417),n=t(4742),p=t(3801),h=t(8147),m=t(4438);let y=(()=>{var a;class i{}return(a=i).\u0275fac=function(e){return new(e||a)},a.\u0275mod=m.$C({type:a}),a.\u0275inj=m.G2t({imports:[p.FQ,n.bv,c.YN,g.MD,c.X1,p.FQ,h.h]}),i})()},3801:(f,C,t)=>{t.d(C,{B0:()=>p,FQ:()=>y});var g=t(177),c=t(4438);class n{constructor(i,s){this._document=s;const e=this._textarea=this._document.createElement("textarea"),d=e.style;d.position="fixed",d.top=d.opacity="0",d.left="-999em",e.setAttribute("aria-hidden","true"),e.value=i,e.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(e)}copy(){const i=this._textarea;let s=!1;try{if(i){const e=this._document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),s=this._document.execCommand("copy"),e&&e.focus()}}catch{}return s}destroy(){const i=this._textarea;i&&(i.remove(),this._textarea=void 0)}}let p=(()=>{var a;class i{constructor(e){this._document=e}copy(e){const d=this.beginCopy(e),b=d.copy();return d.destroy(),b}beginCopy(e){return new n(e,this._document)}}return(a=i).\u0275fac=function(e){return new(e||a)(c.KVO(g.qQ))},a.\u0275prov=c.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),i})(),y=(()=>{var a;class i{}return(a=i).\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.$C({type:a}),a.\u0275inj=c.G2t({}),i})()}}]);