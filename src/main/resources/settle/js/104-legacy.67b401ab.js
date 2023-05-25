"use strict";(self["webpackChunkhache"]=self["webpackChunkhache"]||[]).push([[104],{4579:(e,a,n)=>{n.d(a,{T:()=>o});var t=n(7327),l=n(3413),s=n(4865);const r=(0,l.L)();class o{static getInstance(){return void 0===this._instance&&(this._instance=new o),this._instance}isUserInUse(e){return r.isUserInUse(e)}getListUser(){return r.userStore}getUserByName(e){return r.getUserByName(e)}createUser(e){const a={idUser:(0,s.I5)(),name:e};r.addUserStore(a)}updateUser(e){r.updateUserStore(e)}removeUser(e){r.removeUserStore(e)}}(0,t.Z)(o,"_instance",void 0)},1245:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(6252),l=n(2262),s=n(8903),r=n(7491),o=n(2201);const u=(0,t.aZ)({__name:"BtnGoBack",setup(e){const a=(0,o.tv)();return(e,n)=>((0,t.wg)(),(0,t.j4)((0,l.SU)(r.IJ),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(r.W4),{color:"secondary",onClick:n[0]||(n[0]=e=>{(0,l.SU)(a).back()}),class:"button-transparent",size:"small"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(r.gu),{icon:(0,l.SU)(s.pr5)},null,8,["icon"])])),_:1})])),_:1}))}});var i=n(3744);const c=(0,i.Z)(u,[["__scopeId","data-v-c2ffac36"]]),d=c},4104:(e,a,n)=>{n.r(a),n.d(a,{default:()=>S});var t=n(6252),l=n(2262),s=n(3577),r=n(8903),o=n(7491),u=n(4579),i=n(4276),c=n(1245),d=n(8456),U=n(5306);const m=(0,t.aZ)({__name:"AddUserGral",props:{name:null},setup(e){const a=e,n=U.Z.getInstance(),s=u.T.getInstance(),r=(0,l.iH)(a.name),i=(0,l.iH)(n.getMeetActive().active),c=async()=>{if(!r.value)return void d.Z.confirmAlert("Nombre es obligatorio!");const e=s.getUserByName(r.value);e?d.Z.confirmAlert("Ya existe el usuario!"):(s.createUser(r.value),r.value="")};return(e,a)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)((0,l.SU)(o.Ie),null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.pK),{label:"Nombre: ",placeholder:"Nombre",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),"clear-input":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,l.SU)(o.Ie),{lines:"none"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.YG),{disabled:!i.value,slot:"end",size:"small",shape:"round",color:"secondary",onClick:a[1]||(a[1]=e=>c())},{default:(0,t.w5)((()=>[(0,t.Uk)("Agregar")])),_:1},8,["disabled"])])),_:1})],64))}}),w=m,v=w,g=(0,t._)("strong",null,"Encuentro: ",-1),_=(0,t.aZ)({__name:"UserList",setup(e){var a,n;const m=U.Z.getInstance(),w=u.T.getInstance(),_=(0,l.iH)(w.getListUser()),f=(0,l.iH)(""),S=(0,l.iH)(null===(a=m.getMeetActive())||void 0===a?void 0:a.name),k=(0,l.iH)(null===(n=m.getMeetActive())||void 0===n?void 0:n.active),I=async e=>{const a=await d.Z.confirmCancelAlert("Confirma borrar el usuario?","Cancelar","Eliminar");a&&(w.isUserInUse(e)?d.Z.toastMessage("Usuario en uso, no se puede eliminar"):w.removeUser(e))};return(0,o.KA)((()=>{_.value=w.getListUser()})),(e,a)=>{const n=(0,t.up)("IonContent"),u=(0,t.up)("IonPage");return(0,t.wg)(),(0,t.j4)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z),(0,t.Wm)(n,{class:"ion-padding",fullscreen:!0},{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.Ie),null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.yW),{color:"secondary"},{default:(0,t.w5)((()=>[g])),_:1}),(0,t.Uk)(" "+(0,s.zw)(S.value),1)])),_:1}),(0,t.Wm)(v,{name:f.value},null,8,["name"]),(0,t.Wm)((0,l.SU)(o.Ie),null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Lista usuarios ")])),_:1}),_.value.length>0?((0,t.wg)(),(0,t.j4)((0,l.SU)(o.jY),{key:0},{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.Nd),null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.wI),{size:"2"},{default:(0,t.w5)((()=>[(0,t.Uk)("Ver")])),_:1}),(0,t.Wm)((0,l.SU)(o.wI),null,{default:(0,t.w5)((()=>[(0,t.Uk)("Nomb.")])),_:1}),k.value?((0,t.wg)(),(0,t.j4)((0,l.SU)(o.wI),{key:0,size:"2"},{default:(0,t.w5)((()=>[(0,t.Uk)("Eli.")])),_:1})):(0,t.kq)("",!0)])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(_.value,((e,a)=>((0,t.wg)(),(0,t.j4)((0,l.SU)(o.Nd),{key:a},{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.wI),{size:"2"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,l.SU)(o.gu),{color:"secondary",icon:(0,l.SU)(r.iyy)},null,8,["icon"])])),_:1}),(0,t.Wm)((0,l.SU)(o.wI),null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.name),1)])),_:2},1024),(0,t.Wm)((0,l.SU)(o.wI),{size:"2"},{default:(0,t.w5)((()=>[k.value?((0,t.wg)(),(0,t.j4)((0,l.SU)(o.gu),{key:0,color:"secondary",onClick:a=>I(e.idUser),icon:(0,l.SU)(r.UmE)},null,8,["onClick","icon"])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(c.Z)])),_:1})])),_:1})}}}),f=_,S=f}}]);
//# sourceMappingURL=104-legacy.67b401ab.js.map