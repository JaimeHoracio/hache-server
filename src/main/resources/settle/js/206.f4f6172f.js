"use strict";(self["webpackChunkhache"]=self["webpackChunkhache"]||[]).push([[206],{1245:(e,l,a)=>{a.d(l,{Z:()=>i});var n=a(6252),u=a(2262),t=a(8903),o=a(7491),c=a(2201);const d=(0,n.aZ)({__name:"BtnGoBack",setup(e){const l=(0,c.tv)();return(e,a)=>((0,n.wg)(),(0,n.j4)((0,u.SU)(o.IJ),{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(o.W4),{color:"secondary",onClick:a[0]||(a[0]=e=>{(0,u.SU)(l).back()}),class:"button-transparent",size:"small"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(o.gu),{icon:(0,u.SU)(t.pr5)},null,8,["icon"])])),_:1})])),_:1}))}});var r=a(3744);const s=(0,r.Z)(d,[["__scopeId","data-v-c2ffac36"]]),i=s},5206:(e,l,a)=>{a.r(l),a.d(l,{default:()=>k});a(3948),a(7658);var n=a(6252),u=a(2262),t=a(3577),o=a(8903),c=a(7491),d=a(1736),r=a(8456),s=a(4276),i=a(1245),w=a(5306),v=a(7895),f=a(2201);const U=(0,n._)("strong",null,"Encuentro: ",-1),m=(0,n.aZ)({__name:"CurrencyList",setup(e){var l;const a=(0,f.tv)(),m=w.Z.getInstance(),g=v.Y.getInstance(),k=(0,u.iH)(g.getListCurrency()),_=(0,u.iH)(g.getCurrencyAll()),S=(0,u.iH)([]),W=(0,u.iH)([]),y=(0,u.iH)(m.getMeetActive().active),h=(0,u.iH)(!1),I=(0,u.iH)(null===(l=m.getMeetActive())||void 0===l?void 0:l.name),p=async()=>{h.value=!0,0===_.value.length&&(_.value=await g.getCurrencyAllFromServer()),S.value=new Array(_.value.length).fill(!1);const e=g.getDefaultCurrency();for(const l in _.value)for(const a of k.value){const n=_.value[l].code;a.code===n&&(S.value[l]=!0),n===e.code?W.value[l]=!0:W.value[l]=!1}h.value=!1},C=e=>{const{checked:l,value:a}=e.detail;l?k.value.push(a):k.value=k.value.filter((e=>e.code!==a.code))},z=e=>{W.value=new Array(_.value.length).fill(!1),W.value[e]=!0},b=async()=>{const e=W.value.findIndex((e=>e)),l=_.value[e],n=k.value.find((e=>e.code===l.code));n?(g.setDefaultCurrency(l),g.setDefaultCurrency(l),a.back()):await r.Z.confirmAlert("Moneda principal debe pertenecer a las monedas seleccionadas.")};return(0,c.KA)((()=>{p()})),(e,l)=>{const a=(0,n.up)("IonContent"),r=(0,n.up)("IonPage");return(0,n.wg)(),(0,n.j4)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z),(0,n.Wm)(a,{class:"ion-padding",fullscreen:!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.Ie),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.yW),{color:"secondary"},{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Uk)(" "+(0,t.zw)(I.value),1)])),_:1}),(0,n.Wm)((0,u.SU)(c.Ie),null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Lista monedas ")])),_:1}),k.value.length>0?((0,n.wg)(),(0,n.j4)((0,u.SU)(c.jY),{key:0,fixed:!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.Nd),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.wI),{size:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("Ver")])),_:1}),(0,n.Wm)((0,u.SU)(c.wI),null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Cod. ")])),_:1}),(0,n.Wm)((0,u.SU)(c.wI),null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Nomb. ")])),_:1}),(0,n.Wm)((0,u.SU)(c.wI),null,{default:(0,n.w5)((()=>[(0,n.Uk)(" País ")])),_:1})])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.value,((e,l)=>((0,n.wg)(),(0,n.j4)((0,u.SU)(c.Nd),{key:l},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.wI),{size:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.gu),{color:"secondary",icon:(0,u.SU)(o.iyy)},null,8,["icon"])])),_:1}),(0,n.Wm)((0,u.SU)(c.wI),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.code),1)])),_:2},1024),(0,n.Wm)((0,u.SU)(c.wI),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.name),1)])),_:2},1024),(0,n.Wm)((0,u.SU)(c.wI),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.country),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,n.kq)("",!0),(0,n.Wm)((0,u.SU)(c.Ie),null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Total de monedas ")])),_:1}),(0,n.Wm)(d.Z,{"show-progress":h.value},null,8,["show-progress"]),(0,n.Wm)((0,u.SU)(c.Ie),{lines:"none",class:"ion-no-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.q_),{inset:!0},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.value,((e,a)=>((0,n.wg)(),(0,n.j4)((0,u.SU)(c.Ie),{key:a},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.nz),{"aria-label":"Currency: ",value:e,checked:S.value[a],onIonChange:l[0]||(l[0]=e=>C(e))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.name)+"-"+(0,t.zw)(e.country),1)])),_:2},1032,["value","checked"]),(0,n.Wm)((0,u.SU)(c.ho),{class:"ion-padding",slot:"end","aria-label":"Directo lista gastos",color:"secondary",checked:W.value[a],onClick:e=>z(a)},null,8,["checked","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1}),y.value&&_.value.length>0?((0,n.wg)(),(0,n.j4)((0,u.SU)(c.Ie),{key:1,lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,u.SU)(c.gu),{color:"secondary",icon:(0,u.SU)(o.a1L),onClick:b},null,8,["icon"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(i.Z)])),_:1})])),_:1})}}}),g=m,k=g}}]);
//# sourceMappingURL=206.f4f6172f.js.map