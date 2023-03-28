import{J as g,o as l,c as d,a as s,b as u,w,d as n,v as b,u as e,n as m,t as _,e as i,f,g as r,r as E}from"./app-1a00f368.js";import{u as x}from"./Crud-2d5fe06e.js";import{u as j}from"./Validate-53ff10c7.js";import{A as C}from"./AdminLayout-d04bf10b.js";import{Q as v}from"./QuillEditor-c3918bbd.js";import"./lodash-78f4d0f6.js";import"./toastr-a7a4d37b.js";const A={class:"card card-action"},N={class:"card-header"},S=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"ADD EMAIL TEMPLATE")],-1),D={class:"card-action-element"},T={class:"card-body"},U={class:"row"},B={class:"col-md-12"},I={class:"form-group mb-3"},M=s("label",{for:"name"},"Name",-1),P={key:0,class:"invalid-feedback"},Q={class:"col-md-12"},L={class:"form-group mb-3"},$=s("label",{for:"status"},[r("Subject "),s("span",{class:"required"},"*")],-1),q={key:0,class:"v-invalid-feedback"},F={class:"col-md-12"},O=s("label",{for:"body"},[r("Body "),s("span",{class:"required"},"*")],-1),z={key:0,class:"v-invalid-feedback"},J={class:"col-md-12"},W={class:"form-group mb-3"},G=s("label",{for:"attachments"},"Attachments",-1),H={class:"col-md-6"},K={class:"d-flex"},R={class:"form-group mb-5 me-5"},X=s("div",{class:""},"Default",-1),Y={class:"switch"},Z=["checked"],ss=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),es={key:0,class:"switch-label"},ts={key:1,class:"switch-label"},os={class:"form-group mb-5"},as=s("div",{class:""},"Status",-1),ls={class:"switch"},ds=["checked"],is=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),rs={key:0,class:"switch-label"},ns={key:1,class:"switch-label"},cs={class:"row mt-4"},us={class:"col"},ms=["disabled"],_s={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ps=["disabled"],hs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},bs={layout:C},Ts=Object.assign(bs,{__name:"Create",setup(fs){g();const y={name:null,subject:null,body:null,attachments:null,default:!0,status:!0},k="email_template";j();let{paginatedData:vs,form:t,createPromise:p,updatePromise:h,deletePromise:ys,handleCreate:ks,serverQuery:Vs,handleServerQuery:gs,handleEdit:ws,formState:Es}=x(y,k,null,{redirectTo:"email_template.index"});return(c,o)=>{const V=E("inertia-link");return l(),d("div",A,[s("div",N,[S,s("div",D,[u(V,{class:"btn btn-link-primary btn-primary",href:c.route("email_template.index")},{default:w(()=>[r(" Back ")]),_:1},8,["href"])])]),s("div",T,[s("div",U,[s("div",B,[s("div",I,[M,n(s("input",{type:"text",id:"name",class:m(["form-control",{"is-invalid":e(t).errors.name}]),placeholder:"Enter Name","onUpdate:modelValue":o[0]||(o[0]=a=>e(t).name=a),onInput:o[1]||(o[1]=a=>e(t).clearErrors("name"))},null,34),[[b,e(t).name]]),e(t).errors.name?(l(),d("div",P,_(e(t).errors.name),1)):i("",!0)])]),s("div",Q,[s("div",L,[$,n(s("textarea",{class:m([{"is-invalid":e(t).errors.subject},"form-control"]),rows:"4","aria-label":"With textarea","onUpdate:modelValue":o[2]||(o[2]=a=>e(t).subject=a),onInput:o[3]||(o[3]=a=>e(t).clearErrors("subject"))},null,34),[[b,e(t).subject]]),e(t).errors.subject?(l(),d("div",q,_(e(t).errors.subject),1)):i("",!0)])]),s("div",F,[s("div",{class:m(["form-group mb-3",{"is-invalid":e(t).errors.body}])},[O,u(v,{defaultValue:c.defaultValue,modelValue:e(t).body,"onUpdate:modelValue":[o[4]||(o[4]=a=>e(t).body=a),o[5]||(o[5]=a=>e(t).clearErrors("body"))]},null,8,["defaultValue","modelValue"]),e(t).errors.body?(l(),d("div",z,_(e(t).errors.body),1)):i("",!0)],2)]),s("div",J,[s("div",W,[G,u(v,{defaultValue:c.defaultValue,modelValue:e(t).attachments,"onUpdate:modelValue":o[6]||(o[6]=a=>e(t).attachments=a)},null,8,["defaultValue","modelValue"])])]),s("div",H,[s("div",K,[s("div",R,[X,s("label",Y,[n(s("input",{type:"checkbox","onUpdate:modelValue":o[7]||(o[7]=a=>e(t).default=a),checked:e(t).default,class:"switch-input"},null,8,Z),[[f,e(t).default]]),ss,e(t).default==1?(l(),d("span",es,"True")):(l(),d("span",ts,"False"))])]),s("div",os,[as,s("label",ls,[n(s("input",{type:"checkbox","onUpdate:modelValue":o[8]||(o[8]=a=>e(t).status=a),checked:e(t).status,class:"switch-input"},null,8,ds),[[f,e(t).status]]),is,e(t).status==1?(l(),d("span",rs,"Active")):(l(),d("span",ns,"In-active"))])])])])]),s("div",cs,[s("div",us,[e(t).id?(l(),d("button",{key:1,class:"btn btn-primary",onClick:o[10]||(o[10]=(...a)=>e(h)&&e(h)(...a)),disabled:e(t).processing||e(t).hasErrors},[e(t).processing?(l(),d("span",hs)):i("",!0),r(" Save changes ")],8,ps)):(l(),d("button",{key:0,class:"btn btn-primary",onClick:o[9]||(o[9]=(...a)=>e(p)&&e(p)(...a)),disabled:e(t).processing||e(t).hasErrors},[e(t).processing?(l(),d("span",_s)):i("",!0),r(" Save ")],8,ms))])])])])}}});export{Ts as default};
