import{k as _,A as d,s as h,l as m,_ as P,r as y,a as w,m as f,c as r,b as o,F as x,d as S,n as I,p as k,v as E,q as v,f as l,t as b,u as D,x as A,i as L}from"./index.e91a0df9.js";class T{async getPolaroids(){const a=await _.get("api/polaroids");d.polaroids=a.data}async createPolaroid(a,e){const t=d.user.id,c=await h.upload(a,`${t}/${e.title}`);e.imgUrl=c;const p=await _.post("api/polaroids",e);d.polaroids.push(p.data)}async deletePolaroid(a){const e=d.polaroids.findIndex(g=>g.id==a),t=d.polaroids[e],c=`${d.account.id}/${t.title}`,p=await h.remove(c);m.log("[SUPA DELETE]",p);const s=await _.delete(`api/polaroids/${a}`);m.log("[API DELETE]",s.data),d.polaroids.splice(e,1)}}const u=new T;const U={setup(){const i=y({});w(()=>{a()});async function a(){try{await u.getPolaroids()}catch(e){m.error(e)}}return{editable:i,account:f(()=>d.account),polaroids:f(()=>d.polaroids),uploadPolaroid(e){const t=e.target.fileInput.files[0];u.createPolaroid(t,i.value),i.value={},e.target.reset()},deletePolaroid(e){u.deletePolaroid(e)},formatDate(e){return new Date(e).toLocaleDateString()}}}},n=i=>(D("data-v-991b296c"),i=i(),A(),i),V={class:"container-fluid"},q={class:"masonry my-4"},B={class:"item text-center"},C={class:"bg-white rounded p-0 elevation-2 polaroid"},M=["src","alt"],N={class:"p-1"},F={class:"p-1"},H=["onClick"],R=n(()=>o("i",{class:"mdi mdi-delete-forever"},null,-1)),$=[R],j={key:0,class:"item bg-white rounded elevation-2 p-2"},z=n(()=>o("h5",{class:"text-primary"},[o("i",{class:"mdi mdi-plus"}),L(),o("i",{class:"mdi mdi-image"})],-1)),G={class:"mb-3"},J=n(()=>o("label",{for:""},"name",-1)),K=n(()=>o("div",{class:"mb-3"},[o("input",{class:"form-control",type:"file",accept:"image/*",name:"fileInput",required:""})],-1)),O=n(()=>o("button",{class:"btn btn-primary w-100"},"submit",-1));function Q(i,a,e,t,c,p){return l(),r("div",V,[o("section",q,[(l(!0),r(x,null,S(t.polaroids,s=>(l(),r("div",B,[o("div",C,[o("img",{src:s.imgUrl,class:"img-fluid rounded-top",alt:s.title,width:"640",height:"360"},null,8,M),o("h4",N,b(s.title),1),o("p",F,b(t.formatDate(s.createdAt)),1)]),t.account.id==s.creatorId?(l(),r("button",{key:0,onClick:g=>t.deletePolaroid(s.id),class:"btn btn-danger delete-btn",title:"delete me"},$,8,H)):v("",!0)]))),256)),t.account.id?(l(),r("div",j,[z,o("form",{onSubmit:a[1]||(a[1]=I((...s)=>t.uploadPolaroid&&t.uploadPolaroid(...s),["prevent"]))},[o("div",G,[J,k(o("input",{class:"form-control",type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>t.editable.title=s),maxlength:"15",required:""},null,512),[[E,t.editable.title]])]),K,O],32)])):v("",!0)])])}const X=P(U,[["render",Q],["__scopeId","data-v-991b296c"]]);export{X as default};
