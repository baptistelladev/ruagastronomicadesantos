"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7545],{7545:(T,p,a)=>{a.r(p),a.d(p,{EstabelecimentoPageModule:()=>M});var g=a(64),c=a(467),b=a(7586),e=a(4438),h=a(2872),r=a(4742),f=a(3801),d=a(177),F=a(7641),E=a(5017),x=a(4757);const C=["establishmentContent"],u=n=>({"is-today font-w-bold":n});function k(n,s){1&n&&(e.j41(0,"ion-chip",60),e.EFF(1,"Hoje"),e.k0s())}function P(n,s){if(1&n&&(e.j41(0,"p",61),e.EFF(1),e.k0s()),2&n){const i=s.$implicit;e.R7$(),e.Lme("",i.open," \xe0s ",i.close,"")}}function j(n,s){if(1&n&&(e.j41(0,"ion-item",54)(1,"ion-text",55)(2,"p",56),e.EFF(3),e.k0s(),e.DNE(4,k,2,0,"ion-chip",57),e.k0s(),e.j41(5,"ion-text",58),e.DNE(6,P,2,2,"p",59),e.k0s()()),2&n){const i=s.$implicit,t=s.last,o=e.XpG();e.Y8G("lines",t?"none":"full"),e.R7$(),e.Y8G("ngClass",e.eq3(6,u,i.dayNumber===o.todayAsDayNumber)),e.R7$(2),e.JRh(i.text.pt),e.R7$(),e.Y8G("ngIf",i.dayNumber===o.todayAsDayNumber),e.R7$(),e.Y8G("ngClass",e.eq3(8,u,i.dayNumber===o.todayAsDayNumber)),e.R7$(),e.Y8G("ngForOf",i.openingTime)}}const v=[{path:"",component:(()=>{var n;class s{constructor(t,o,l,m){this.navCtrl=t,this.renderer=o,this.clipboard=l,this.alertCtrl=m,this.socialNetworks=[{text:"Instagram",value:"instagram",name:"Instagram",baseUrl:"https://www.instagram.com/",user:"anfitrionapp",logo:"logo-instagram"},{text:"Contato",value:"whatsapp",name:"Contato",baseUrl:"/contato",user:"",logo:"logo-whatsapp"}],this.todayAsDayNumber=b().day(),this.menu=[{text:{pt:"Localiza\xe7\xe3o"},value:"location"},{text:{pt:"Caracteristicas"},value:"character"},{text:{pt:"Redes sociais"},value:"networks"},{text:{pt:"Reserva"},value:"contact"}],this.workingTime=[{text:{pt:"Segunda-feira"},dayNumber:1,openingTime:[{open:"18:00",close:"20:00"},{open:"22:00",close:"12:00"}]},{text:{pt:"Ter\xe7a-feira"},dayNumber:2,openingTime:[{open:"18:00",close:"20:00"},{open:"22:00",close:"12:00"}]},{text:{pt:"Quarta-feira"},dayNumber:3,openingTime:[{open:"18:00",close:"20:00"},{open:"22:00",close:"12:00"}]},{text:{pt:"Quinta-feira"},dayNumber:4,openingTime:[{open:"18:00",close:"20:00"},{open:"22:00",close:"12:00"}]},{text:{pt:"Sexta-feira"},dayNumber:5,openingTime:[{open:"18:00",close:"20:00"},{open:"22:00",close:"12:00"}]},{text:{pt:"S\xe1bado"},dayNumber:6,openingTime:[{open:"18:00",close:"20:00"},{open:"22:00",close:"12:00"}]},{text:{pt:"Domingo"},dayNumber:7,openingTime:[{open:"18:00",close:"20:00"},{open:"22:00",close:"12:00"}]}]}ngOnInit(){var t=this;return(0,c.A)(function*(){t.selectOption("location")})()}back(){this.navCtrl.back()}selectOption(t){var o=this;return(0,c.A)(function*(){o.selectedOption=t})()}goWithWaze(){var t=this;return(0,c.A)(function*(){t.clipboard.copy("fefe")&&(yield t.showAlert("Cole-o em um aplicativo de sua prefer\xeancia"))})()}showAlert(t){var o=this;return(0,c.A)(function*(){const l=yield o.alertCtrl.create({mode:"ios",subHeader:"Endere\xe7o copiado",message:t,cssClass:"rgs-alert",buttons:["Entendi"]});return l.present(),l})()}hideToolbar(t){console.log(t.detail);let o=document.getElementById("estabelecimento-header");t.detail.scrollTop>60?this.renderer.addClass(o,"hide"):this.renderer.removeClass(o,"hide")}scrollToTop(){var t=this;return(0,c.A)(function*(){t.establishmentContent.scrollToTop(600)})()}}return(n=s).\u0275fac=function(t){return new(t||n)(e.rXU(h.q9),e.rXU(e.sFG),e.rXU(f.B0),e.rXU(r.hG))},n.\u0275cmp=e.VBU({type:n,selectors:[["rgs-estabelecimento"]],viewQuery:function(t,o){if(1&t&&e.GBs(C,5),2&t){let l;e.mGM(l=e.lsd())&&(o.establishmentContent=l.first)}},decls:159,vars:9,consts:[["establishmentContent",""],["mode","ios","id","estabelecimento-header",1,"bg-white","ion-no-border"],["mode","ios",1,"ion-bg-white"],[1,"menu"],[3,"fixed"],["size","12"],["mode","ios","title","Voltar","fill","clear",1,"back","ion-color-gray-text","back-btn","no-ion-padding",3,"click"],["name","chevron-back-outline"],[1,"font-w-thin","mg-left-5"],[3,"ionScroll","forceOverscroll","scrollEvents","fullscreen"],[1,"estabelecimento-wrapper"],[1,"hero-wrapper"],[1,"logo-wrapper"],["src","./../../../../assets/images/establishments/vila-tolentino.jpg"],[1,"estabelecimento-content"],["mode","ios",1,"txt-center"],[1,"fs-10","txt-uppercase","color-gray-6"],[1,"color-gray-text","font-baloo","fs-32","nome"],[1,"go-with-waze"],[1,"color-gray-text","fs-14"],["title","Copiar","mode","ios","fill","clear",3,"click"],["name","copy-outline"],[1,"buttons-wrapper"],["size","12",1,"txt-center"],["mode","md","shape","round","title","Chamar no WhatsApp","fill","solid",1,"rgs-main-solid","linkt-btn"],["name","logo-whatsapp",1,"mg-right-5"],[1,"mg-left-5"],["mode","md","shape","round","title","Acessar card\xe1pio","fill","solid",1,"rgs-white-solid","linkt-btn"],["name","receipt-outline",1,"mg-right-8"],["mode","md","shape","round","title","Ver no instagran","fill","solid",1,"rgs-white-solid","linkt-btn"],["name","logo-instagram",1,"mg-right-8"],["size","12",1,"mg-top-32"],["mode","ios"],[1,"rgs-divider"],["mode","ios","lines","none",1,"establishment-item"],["name","card-outline","slot","start"],["mode","ios",1,"line-height-18"],[1,"color-gray-text","mg-left-16"],[1,"color-green"],[1,"color-gray-6","mg-left-16","fs-14","mg-top-8"],["name","paw-outline","slot","start"],["name","musical-notes-outline","slot","start"],["name","snow-outline","slot","start"],["name","book-outline","slot","start"],["name","calendar-outline","slot","start"],["mode","ios",1,"working"],["mode","ios",3,"lines",4,"ngFor","ngForOf"],[1,"scroll-to-top","full-width"],["size","small","shape","round","title","Voltar para cima","fill","clear",1,"rgs-main-solid","mg-bottom-16","fs-14",3,"click"],["name","chevron-up-outline",1,"mg-left-5"],[3,"centered"],["size","12",1,"no-pad-top"],[3,"socialNetworks","centered"],["size","12",1,"mg-bottom-16"],["mode","ios",3,"lines"],["mode","ios",3,"ngClass"],[1,"fs-14","color-gray-16","day-name"],["class","main-solid-gray fs-10 txt-uppercase small",4,"ngIf"],["mode","ios","slot","end",3,"ngClass"],["class","fs-18 color-gray-text",4,"ngFor","ngForOf"],[1,"main-solid-gray","fs-10","txt-uppercase","small"],[1,"fs-18","color-gray-text"]],template:function(t,o){if(1&t){const l=e.RV6();e.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"div",3)(3,"ion-grid",4)(4,"ion-row")(5,"ion-col",5)(6,"ion-button",6),e.bIt("click",function(){return e.eBV(l),e.Njj(o.back())}),e.nrm(7,"ion-icon",7),e.j41(8,"span",8),e.EFF(9,"sobre o "),e.j41(10,"b"),e.EFF(11,"estabelecimento"),e.k0s()()()()()()()()(),e.j41(12,"ion-content",9,0),e.bIt("ionScroll",function(_){return e.eBV(l),e.Njj(o.hideToolbar(_))}),e.j41(14,"section",10)(15,"div",11)(16,"div",12),e.nrm(17,"ion-img",13),e.k0s()(),e.j41(18,"div",14)(19,"ion-grid",4)(20,"ion-row")(21,"ion-col",5)(22,"ion-text",15)(23,"p",16),e.EFF(24,"Restaurante"),e.k0s(),e.j41(25,"h1",17)(26,"b"),e.EFF(27,"Nome"),e.k0s()()(),e.j41(28,"div",18)(29,"ion-text",15)(30,"p",19),e.EFF(31,"R. Tolentino Filgueiras"),e.k0s(),e.j41(32,"p",19),e.EFF(33,"n\xba 10 - 11060-470 - Gonzaga"),e.k0s()(),e.j41(34,"ion-button",20),e.bIt("click",function(){return e.eBV(l),e.Njj(o.goWithWaze())}),e.nrm(35,"ion-icon",21),e.k0s()()(),e.j41(36,"ion-col",5)(37,"div",22)(38,"ion-grid")(39,"ion-row")(40,"ion-col",23)(41,"ion-button",24),e.nrm(42,"ion-icon",25),e.EFF(43," chamar no "),e.j41(44,"b",26),e.EFF(45,"WhatsApp"),e.k0s()()(),e.j41(46,"ion-col",23)(47,"ion-button",27),e.nrm(48,"ion-icon",28),e.EFF(49," acessar "),e.j41(50,"b",26),e.EFF(51,"card\xe1pio"),e.k0s()()(),e.j41(52,"ion-col",23)(53,"ion-button",29),e.nrm(54,"ion-icon",30),e.EFF(55," ver "),e.j41(56,"b",26),e.EFF(57,"no instagram"),e.k0s()()()()()()(),e.j41(58,"ion-col",31)(59,"ion-text",32),e.nrm(60,"hr",33),e.k0s()(),e.j41(61,"ion-col",5)(62,"ion-item",34),e.nrm(63,"ion-icon",35),e.j41(64,"ion-text",36)(65,"p",37),e.EFF(66,"Al\xe9m das formas tradicionais de pagamento, aceitam "),e.j41(67,"b",38),e.EFF(68,"vale refei\xe7\xe3o"),e.k0s(),e.EFF(69,"."),e.k0s(),e.j41(70,"p",39),e.EFF(71,"Alelo, Ticket VR."),e.k0s()()()(),e.j41(72,"ion-col",5)(73,"ion-text",32),e.nrm(74,"hr",33),e.k0s()(),e.j41(75,"ion-col",5)(76,"ion-item",34),e.nrm(77,"ion-icon",40),e.j41(78,"ion-text",36)(79,"p",37),e.EFF(80,"Pode trazer "),e.j41(81,"b",38),e.EFF(82,"seu bichinho"),e.k0s(),e.EFF(83,"."),e.k0s(),e.j41(84,"p",39),e.EFF(85,"Pet friendly."),e.k0s()()()(),e.j41(86,"ion-col",5)(87,"ion-text",32),e.nrm(88,"hr",33),e.k0s()(),e.j41(89,"ion-col",5)(90,"ion-item",34),e.nrm(91,"ion-icon",41),e.j41(92,"ion-text",32)(93,"p",37),e.EFF(94,"Tem show "),e.j41(95,"b",38),e.EFF(96,"ao vivo"),e.k0s(),e.EFF(97,"."),e.k0s(),e.j41(98,"p",39),e.EFF(99,"Recomendamos que visite o insta do estabelecimento para ver a programa\xe7\xe3o do dia."),e.k0s()()()(),e.j41(100,"ion-col",5)(101,"ion-text",32),e.nrm(102,"hr",33),e.k0s()(),e.j41(103,"ion-col",5)(104,"ion-item",34),e.nrm(105,"ion-icon",42),e.j41(106,"ion-text",32)(107,"p",37),e.EFF(108,"Possui "),e.j41(109,"b",38),e.EFF(110,"ambiente climatizado"),e.k0s(),e.EFF(111,"."),e.k0s(),e.j41(112,"p",39),e.EFF(113,"Consulte com o estabelecimento."),e.k0s()()()(),e.j41(114,"ion-col",5)(115,"ion-text",32),e.nrm(116,"hr",33),e.k0s()(),e.j41(117,"ion-col",5)(118,"ion-item",34),e.nrm(119,"ion-icon",43),e.j41(120,"ion-text",32)(121,"p",37),e.EFF(122,"Economize tempo, fa\xe7a uma "),e.j41(123,"b",38),e.EFF(124,"reserva"),e.k0s(),e.EFF(125,"."),e.k0s(),e.j41(126,"p",39),e.EFF(127,"Entre em contato pelo bot\xe3o do WhatsApp."),e.k0s()()()(),e.j41(128,"ion-col",5)(129,"ion-text",32),e.nrm(130,"hr",33),e.k0s()(),e.j41(131,"ion-col",5)(132,"ion-item",34),e.nrm(133,"ion-icon",44),e.j41(134,"ion-text",32)(135,"p",37),e.EFF(136,"Hor\xe1rio de funcionamento."),e.k0s(),e.j41(137,"p",39),e.EFF(138,"Dizemos que um restaurante est\xe1 aberto ou fechado com base nos hor\xe1rios abaixo."),e.k0s()()()(),e.j41(139,"ion-col",5)(140,"ion-card",45)(141,"ion-card-content"),e.DNE(142,j,7,10,"ion-item",46),e.k0s()()(),e.j41(143,"ion-col",5)(144,"ion-text",32),e.nrm(145,"hr",33),e.k0s()(),e.j41(146,"ion-col",5)(147,"div",47)(148,"ion-button",48),e.bIt("click",function(){return e.eBV(l),e.Njj(o.scrollToTop())}),e.EFF(149," voltar "),e.j41(150,"b",26),e.EFF(151,"para cima"),e.k0s(),e.nrm(152,"ion-icon",49),e.k0s()()(),e.j41(153,"ion-col",5),e.nrm(154,"rgs-made-w-love",50),e.k0s(),e.j41(155,"ion-col",51),e.nrm(156,"rgs-social-networks",52),e.k0s(),e.j41(157,"ion-col",53),e.nrm(158,"rgs-copyright"),e.k0s()()()()()()}2&t&&(e.R7$(3),e.Y8G("fixed",!0),e.R7$(9),e.Y8G("forceOverscroll",!1)("scrollEvents",!0)("fullscreen",!0),e.R7$(7),e.Y8G("fixed",!0),e.R7$(123),e.Y8G("ngForOf",o.workingTime),e.R7$(12),e.Y8G("centered",!0),e.R7$(2),e.Y8G("socialNetworks",o.socialNetworks)("centered",!0))},dependencies:[r.Jm,r.b_,r.I9,r.ZB,r.hU,r.W9,r.lO,r.eU,r.iq,r.KW,r.uz,r.ln,r.IO,r.ai,d.YU,d.Sq,d.bT,F.o,E.a,x.b],styles:["ion-content[_ngcontent-%COMP%]{--background: linear-gradient(to top, var(--gray-ed) 15%, var(--white))}ion-content[_ngcontent-%COMP%]   section.estabelecimento-wrapper[_ngcontent-%COMP%]{min-height:100%;width:100%}ion-content[_ngcontent-%COMP%]   section.estabelecimento-wrapper[_ngcontent-%COMP%]   .estabelecimento-content[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   section.estabelecimento-wrapper[_ngcontent-%COMP%]   .estabelecimento-content[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:8px 0}ion-content[_ngcontent-%COMP%]   section.estabelecimento-wrapper[_ngcontent-%COMP%]   .estabelecimento-content[_ngcontent-%COMP%]   .go-with-waze[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row}ion-content[_ngcontent-%COMP%]   section.estabelecimento-wrapper[_ngcontent-%COMP%]   .hero-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:auto;position:relative;padding:32px 0}ion-content[_ngcontent-%COMP%]   section.estabelecimento-wrapper[_ngcontent-%COMP%]   .hero-wrapper[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:100%;background:var(--white);box-shadow:#63636333 0 2px 8px;border:5px solid var(--white)}ion-content[_ngcontent-%COMP%]   section.estabelecimento-wrapper[_ngcontent-%COMP%]   .hero-wrapper[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{border-radius:100%;overflow:hidden}ion-item.establishment-item[_ngcontent-%COMP%]{--background: var(--transparent);--padding-end: 16px;--inner-padding-end: 0;--padding-start: 16px}ion-item.establishment-item[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:32px;color:var(--gray-6)}ion-item.establishment-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 14px;--padding-end: 14px;--padding-top: 10px;--padding-bottom: 13px;--color: var(--white);margin-left:16px;--border-color: var(--green-dark);--border-width: 1px;--border-style: solid}ion-card.working[_ngcontent-%COMP%]{box-shadow:#0000001a 0 0 5px,#0000001a 0 0 1px;margin:8px 0 0;padding:0}ion-card.working[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:16px 32px}ion-card.working[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 0;--padding-end: 0;--inner-padding-end: 0;--padding-bottom: 12px;--padding-top: 12px;--min-height: 0}ion-card.working[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type{border:0}ion-card.working[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.6;color:var(--gray-text)}ion-card.working[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text.is-today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:1}.linkt-btn[_ngcontent-%COMP%]{--padding-start: 13px;--padding-end: 10px;--padding-top: 10px;--padding-bottom: 12px;width:230px;font-size:14px}ion-header#estabelecimento-header[_ngcontent-%COMP%]{transition:all linear .3s}ion-header#estabelecimento-header.hide[_ngcontent-%COMP%]{transform:translateY(-100%);transition:all linear .3s}"]}),s})()}];let w=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[g.iI.forChild(v),g.iI]}),s})();var y=a(3887),O=a(8269);let M=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[y.G,w,O.h]}),s})()}}]);