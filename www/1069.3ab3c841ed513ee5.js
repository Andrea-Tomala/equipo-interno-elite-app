"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1069],{1069:(P,g,i)=>{i.r(g),i.d(g,{LoginModule:()=>C});var p=i(6895),f=i(5861),e=i(433),n=i(8256),m=i(4120),a=i(4039),c=i(3393);const u=[{path:"",component:(()=>{class t{constructor(s,o,r,l){this.form=s,this.sessionService=o,this.alertController=r,this.route=l,this.showPassword=!1,this.formLogin=this.form.group({correo:new e.NI("",[e.kI.required]),password:new e.NI("",[e.kI.required])})}ngOnInit(){}signUser(){let s={email:this.formLogin.get("correo")?.value,contrasena:this.formLogin.get("password")?.value};this.sessionService.logInUser(s).subscribe({next:o=>{console.log(o),this.route.navigate(["/home"])},error:o=>{console.log(o),this.presentAlert(o.error.mensaje)},complete:()=>{}})}presentAlert(s){var o=this;return(0,f.Z)(function*(){yield(yield o.alertController.create({header:"Error al Iniciar Sesi\xf3n",message:s,buttons:["Aceptar"],backdropDismiss:!1})).present()})()}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(e.qu),n.Y36(m.r),n.Y36(a.Br),n.Y36(c.F0))};static#o=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:20,vars:5,consts:[[1,"ion-padding",3,"fullscreen"],[1,"formularios-section"],[1,"image"],["src","../../../assets/register-banner.png","alt",""],[1,"formulario"],[3,"formGroup","ngSubmit"],["formControl","ngForm"],[1,"field-form"],["type","text","placeholder","Ingresa tu correo","name","correo","formControlName","correo"],[1,"label"],["type","text","placeholder","Ingresa una contrase\xf1a","name","password","formControlName","password",3,"type"],["slot","end",3,"name","click"],["type","submit",1,"btn-primary",3,"disabled"]],template:function(o,r){1&o&&(n.TgZ(0,"ion-content",0)(1,"section",1)(2,"div",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4)(5,"h1"),n._uU(6,"Inicia sesi\xf3n"),n.qZA(),n.TgZ(7,"form",5,6),n.NdJ("ngSubmit",function(){return r.signUser()}),n.TgZ(9,"ion-label",7),n._UZ(10,"input",8),n.TgZ(11,"span",9),n._uU(12,"Correo"),n.qZA()(),n.TgZ(13,"ion-label",7),n._UZ(14,"input",10),n.TgZ(15,"ion-icon",11),n.NdJ("click",function(){return r.showPassword=!r.showPassword}),n.qZA(),n.TgZ(16,"span",9),n._uU(17,"Contrase\xf1a"),n.qZA()(),n.TgZ(18,"button",12),n._uU(19," Accede "),n.qZA()()()()()),2&o&&(n.Q6J("fullscreen",!0),n.xp6(7),n.Q6J("formGroup",r.formLogin),n.xp6(7),n.Q6J("type",r.showPassword?"text":"password"),n.xp6(1),n.Q6J("name",r.showPassword?"eye-off-outline":"eye-outline"),n.xp6(3),n.Q6J("disabled",r.formLogin.invalid))},dependencies:[a.W2,a.gu,a.Q$,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:['@charset "UTF-8";html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff;font-family:Poppins,sans-serif}.btn-primary[_ngcontent-%COMP%]{background-color:#4e4feb;border-radius:19px;color:#fff;font-family:Poppins,sans-serif;font-size:14px;height:40px;width:100%;margin-top:20px;cursor:pointer}.btn-primary[_ngcontent-%COMP%]:disabled{background-color:#b0b0de;cursor:auto}section.formularios-section[_ngcontent-%COMP%]{display:flex;flex-direction:column}section.formularios-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{text-align:center}section.formularios-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:84%}section.formularios-section[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]{padding:20px 30px}section.formularios-section[_ngcontent-%COMP%]   .field-form[_ngcontent-%COMP%]{display:grid}section.formularios-section[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{position:relative;display:inline-block;margin:30px 0 12px;vertical-align:top}section.formularios-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;box-sizing:border-box;height:42px;padding:6px 15px;vertical-align:middle;border:solid 1px white;border-radius:6px;outline:none;background-color:#1c1c39;color:#fff}section.formularios-section[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;position:absolute;left:12px;top:-11px;color:#fff;background:#1C1C39;padding:0 5px}section.formularios-section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;position:absolute;top:13px;right:16px}section.formularios-section[_ngcontent-%COMP%]   .text-accede[_ngcontent-%COMP%]{text-align:center;margin-top:15px}section.formularios-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-weight:700;cursor:pointer}ion-content[_ngcontent-%COMP%]{--ion-background-color: #1C1C39}@media (min-width: 768px){section.formularios-section[_ngcontent-%COMP%]{flex-direction:row-reverse;align-items:center}.formulario[_ngcontent-%COMP%]{grid-column:1/span 1}.image[_ngcontent-%COMP%]{text-align:center}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}}']})}return t})()}];let d=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#o=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({imports:[p.ez,c.Bz.forChild(u),c.Bz]})}return t})();var h=i(529);let C=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#o=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({providers:[m.r],imports:[p.ez,d,a.Pc,e.u5,h.JF,e.UX]})}return t})()}}]);