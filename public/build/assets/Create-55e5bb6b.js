import{J as D,o as l,c as i,a as t,b as c,w as $,d as p,v as h,u as e,n as r,t as d,e as n,f as S,g as _,r as f}from"./app-c9e0586b.js";import{u as A}from"./Crud-f94149a5.js";import{u as F}from"./InputFormat-6768b0bd.js";import{u as T}from"./Validate-f58ab742.js";import{u as N}from"./GlobalFunction-bdf3a992.js";import{A as P}from"./AdminLayout-074ec523.js";import"./lodash-6a017aa8.js";const q={class:"card card-action"},I={class:"card-header"},B=t("div",{class:"card-action-title align-items-center"},[t("h5",{class:"card-title"},"ADD CLASS")],-1),R={class:"card-action-element"},j={class:"card-body"},L={class:"row"},M={class:"col-md-12"},O={class:"form-group mb-3"},Q=t("label",{for:"name"},[_("Name "),t("span",{class:"required"},"*")],-1),z={class:"invalid-feedback"},G={class:"col-md-6"},J={class:"form-group mb-3"},Y=t("label",{for:"service_id"},[_("Service "),t("span",{class:"required"},"*")],-1),H={key:0,class:"v-invalid-feedback"},K={class:"col-md-6"},W={class:"form-group mb-3"},X=t("label",{for:"venue_id"},[_("Venue "),t("span",{class:"required"},"*")],-1),Z={key:0,class:"v-invalid-feedback"},ee={class:"col-md-6"},se={class:"form-group mb-3"},te=t("label",{for:"coach_id"},"Coach",-1),oe={key:0,class:"v-invalid-feedback"},ae={class:"col-md-6"},le={class:"form-group mb-3"},ie=t("label",{for:"additional_coach"},"Additional Coach ",-1),re={key:0,class:"v-invalid-feedback"},de={class:"col-md-3"},ne={class:"form-group mb-3"},ce=t("label",{for:"start_time"},"Start Date",-1),_e={key:0,class:"v-invalid-feedback"},ue={class:"col-md-3"},pe={class:"form-group mb-3"},me=t("label",{for:"start_time"},"Start Time",-1),ve={key:0,class:"v-invalid-feedback"},he={class:"col-md-3"},fe={class:"form-group mb-3"},be=t("label",{for:"end_date"},"End Date",-1),ye={key:0,class:"v-invalid-feedback"},ge={class:"col-md-3"},ke={class:"form-group mb-3"},Ve=t("label",{for:"end_time"},"End Time",-1),Se={key:0,class:"v-invalid-feedback"},we={class:"row"},Ce={class:"col-md-6 mb-3 d-flex gap-4"},Ee={class:"form-group"},Ue=t("div",{style:{"white-space":"nowrap"},class:""}," Payment Type ",-1),xe={id:"price_type",class:"switch"},De=["checked"],$e=t("span",{class:"switch-toggle-slider"},[t("span",{class:"switch-on"}),t("span",{class:"switch-off"})],-1),Ae={class:"switch-label"},Fe={style:{width:"100%"},class:"form-group"},Te={for:"price"},Ne={key:0,class:"required"},Pe=["disabled"],qe={class:"invalid-feedback"},Ie={class:"col-md-6 d-flex flex-row gap-4 mb-3"},Be={class:"form-group"},Re=t("div",{class:""},"Repeat",-1),je={for:"repeat",class:"switch"},Le=["checked"],Me=t("span",{class:"switch-toggle-slider"},[t("span",{class:"switch-on"}),t("span",{class:"switch-off"})],-1),Oe={class:"switch-label"},Qe={style:{width:"100%"},class:"form-group"},ze={for:"days"},Ge={key:0,class:"required"},Je={key:0,class:"v-invalid-feedback"},Ye={class:"row"},He={class:"col-md-6"},Ke={class:"form-group mb-3"},We=t("label",{for:"capacity"},"Capacity",-1),Xe={class:"invalid-feedback"},Ze={class:"col-md-6"},es={class:"form-group mb-3"},ss=t("label",{for:"tags"},"Tags ",-1),ts={key:0,class:"v-invalid-feedback"},os={class:"col-md-6"},as={class:"form-group mb-3"},ls=t("label",{for:"status"},[_("Status "),t("span",{class:"required"},"*")],-1),is={key:0,class:"v-invalid-feedback"},rs={class:"row mt-4"},ds={class:"col"},ns=["disabled"],cs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},_s=["disabled"],us={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ps={layout:P},Ds=Object.assign(ps,{__name:"Create",setup(ms){const{props:m}=D(),w={id:null,name:null,service_id:null,venue_id:null,coach_id:null,additional_coach:null,start_date:null,end_date:null,start_time:null,end_time:null,repeat:!1,capacity:null,days:null,price_type:!1,price:null,tags:[],status:"Active"},C="classes",{dateFormat:b,timeFormat:y}=F(),{validateForm:g}=T(),{weekDays:E}=N();let{paginatedData:vs,form:s,createPromise:k,updatePromise:V,deletePromise:hs,handleCreate:fs,serverQuery:bs,handleServerQuery:ys,handleEdit:gs,formState:ks}=A(w,C);return(U,o)=>{const x=f("inertia-link"),u=f("select2"),v=f("flat-pickr");return l(),i("div",q,[t("div",I,[B,t("div",R,[c(x,{type:"button",class:"btn btn-link-primary btn-primary",href:U.route("classes.index")},{default:$(()=>[_(" Back ")]),_:1},8,["href"])])]),t("div",j,[t("div",L,[t("div",M,[t("div",O,[Q,p(t("input",{type:"text",id:"name",class:r(["form-control",{"is-invalid":e(s).errors.name}]),placeholder:"Enter Name","onUpdate:modelValue":o[0]||(o[0]=a=>e(s).name=a),onInput:o[1]||(o[1]=a=>e(s).clearErrors("name"))},null,34),[[h,e(s).name]]),t("div",z,d(e(s).errors.name),1)])]),t("div",G,[t("div",J,[Y,c(u,{id:"service_id",class:r({"is-invalid":e(s).errors.service_id}),modelValue:e(s).service_id,"onUpdate:modelValue":o[2]||(o[2]=a=>e(s).service_id=a),placeholder:"Select Service",settings:{allowClear:!0},onSelect:o[3]||(o[3]=a=>e(s).clearErrors("service_id")),options:e(m).services},null,8,["class","modelValue","options"]),e(s).errors.service_id?(l(),i("div",H,d(e(s).errors.service_id),1)):n("",!0)])]),t("div",K,[t("div",W,[X,c(u,{id:"venue_id",class:r({"is-invalid":e(s).errors.venue_id}),modelValue:e(s).venue_id,"onUpdate:modelValue":o[4]||(o[4]=a=>e(s).venue_id=a),settings:{allowClear:!0},placeholder:"Select Venue",onSelect:o[5]||(o[5]=a=>e(s).clearErrors("venue_id")),options:e(m).venues},null,8,["class","modelValue","options"]),e(s).errors.venue_id?(l(),i("div",Z,d(e(s).errors.venue_id),1)):n("",!0)])]),t("div",ee,[t("div",se,[te,c(u,{class:r({"is-invalid":e(s).errors.coach_id}),modelValue:e(s).coach_id,"onUpdate:modelValue":o[6]||(o[6]=a=>e(s).coach_id=a),settings:{allowClear:!0},placeholder:"Select Coach",onSelect:o[7]||(o[7]=a=>e(s).clearErrors("coach_id")),options:e(m).coaches},null,8,["class","modelValue","options"]),e(s).errors.coach_id?(l(),i("div",oe,d(e(s).errors.coach_id),1)):n("",!0)])]),t("div",ae,[t("div",le,[ie,c(u,{multiple:"multiple",id:"additional_coach",class:r({"is-invalid":e(s).errors.additional_coach}),modelValue:e(s).additional_coach,"onUpdate:modelValue":o[8]||(o[8]=a=>e(s).additional_coach=a),settings:{allowClear:!0},placeholder:"Select Additional Coach",onSelect:o[9]||(o[9]=a=>e(s).clearErrors("additional_coach")),options:e(m).coaches},null,8,["class","modelValue","options"]),e(s).errors.additional_coach?(l(),i("div",re,d(e(s).errors.additional_coach),1)):n("",!0)])]),t("div",de,[t("div",ne,[ce,c(v,{id:"start_date",config:e(b)("today"),class:r([{"is-invalid":e(s).errors.start_date},"form-control"]),placeholder:"Select Start Date",modelValue:e(s).start_date,"onUpdate:modelValue":o[10]||(o[10]=a=>e(s).start_date=a)},null,8,["config","class","modelValue"]),e(s).errors.start_date?(l(),i("div",_e,d(e(s).errors.start_date),1)):n("",!0)])]),t("div",ue,[t("div",pe,[me,c(v,{id:"start_time",config:e(y),class:r([{"is-invalid":e(s).errors.start_time},"form-control"]),placeholder:"Select End Time",modelValue:e(s).start_time,"onUpdate:modelValue":o[11]||(o[11]=a=>e(s).start_time=a)},null,8,["config","class","modelValue"]),e(s).errors.start_time?(l(),i("div",ve,d(e(s).errors.start_time),1)):n("",!0)])]),t("div",he,[t("div",fe,[be,c(v,{id:"end_date",disabled:!e(s).start_date,config:e(b)(e(s).start_date),class:r([{"is-invalid":e(s).errors.end_date},"form-control"]),placeholder:"Select End Time",modelValue:e(s).end_date,"onUpdate:modelValue":o[12]||(o[12]=a=>e(s).end_date=a)},null,8,["disabled","config","class","modelValue"]),e(s).errors.end_date?(l(),i("div",ye,d(e(s).errors.end_date),1)):n("",!0)])]),t("div",ge,[t("div",ke,[Ve,c(v,{id:"end_time",config:e(y),class:r([{"is-invalid":e(s).errors.end_time},"form-control"]),placeholder:"Select End Time",modelValue:e(s).end_time,"onUpdate:modelValue":o[13]||(o[13]=a=>e(s).end_time=a)},null,8,["config","class","modelValue"]),e(s).errors.end_time?(l(),i("div",Se,d(e(s).errors.end_time),1)):n("",!0)])])]),t("div",we,[t("div",Ce,[t("div",Ee,[Ue,t("label",xe,[p(t("input",{id:"price_type",type:"checkbox",class:r([{"is-invalid":e(s).errors.price_type},"switch-input"]),"onUpdate:modelValue":o[14]||(o[14]=a=>e(s).price_type=a),checked:e(s).price_type,onInput:o[15]||(o[15]=a=>{e(s).clearErrors("price_type","price"),e(s).price=null})},null,42,De),[[S,e(s).price_type]]),$e,t("span",Ae,d(e(s).price_type==1?"Paid":"Free"),1)])]),t("div",Fe,[t("label",Te,[_("Price "),e(s).price_type?(l(),i("span",Ne,"*")):n("",!0)]),p(t("input",{id:"price",type:"number",disabled:!e(s).price_type,class:r(["form-control",{"is-invalid":e(s).errors.price}]),placeholder:"Enter Price","onUpdate:modelValue":o[16]||(o[16]=a=>e(s).price=a),onInput:o[17]||(o[17]=a=>{e(s).clearErrors("price"),e(g)(["number"],e(s),a.target.value,"price")})},null,42,Pe),[[h,e(s).price]]),t("div",qe,d(e(s).errors.price),1)])]),t("div",Ie,[t("div",Be,[Re,t("label",je,[p(t("input",{id:"repeat",type:"checkbox",class:r([{"is-invalid":e(s).errors.repeat},"switch-input"]),"onUpdate:modelValue":o[18]||(o[18]=a=>e(s).repeat=a),checked:e(s).repeat,onInput:o[19]||(o[19]=a=>{e(s).clearErrors("repeat","days"),e(s).days=null})},null,42,Le),[[S,e(s).repeat]]),Me,t("span",Oe,d(e(s).repeat==1?"Yes":"No"),1)])]),t("div",Qe,[t("label",ze,[_("Days "),e(s).repeat?(l(),i("span",Ge,"*")):n("",!0)]),c(u,{id:"days",disabled:e(s).repeat==0,class:r({"is-invalid":e(s).errors.days}),modelValue:e(s).days,"onUpdate:modelValue":o[20]||(o[20]=a=>e(s).days=a),multiple:"multiple",placeholder:"Select Days",settings:{allowClear:!0},onSelect:o[21]||(o[21]=a=>e(s).clearErrors("days")),options:e(E)},null,8,["disabled","class","modelValue","options"]),e(s).errors.days?(l(),i("div",Je,d(e(s).errors.days),1)):n("",!0)])])]),t("div",Ye,[t("div",He,[t("div",Ke,[We,p(t("input",{id:"capacity",type:"number",class:r(["form-control",{"is-invalid":e(s).errors.capacity}]),placeholder:"Enter Capacity","onUpdate:modelValue":o[22]||(o[22]=a=>e(s).capacity=a),onInput:o[23]||(o[23]=a=>{e(s).clearErrors("capacity"),e(g)(["number"],e(s),a.target.value,"capacity")})},null,34),[[h,e(s).capacity]]),t("div",Xe,d(e(s).errors.capacity),1)])]),t("div",Ze,[t("div",es,[ss,c(u,{id:"tags",multiple:"",class:r({"is-invalid":e(s).errors.tags}),modelValue:e(s).tags,"onUpdate:modelValue":o[24]||(o[24]=a=>e(s).tags=a),settings:{tags:!0,allowClear:!0,minimumResultsForSearch:-1},placeholder:"Select tags",onSelect:o[25]||(o[25]=a=>e(s).clearErrors("tags"))},null,8,["class","modelValue"]),e(s).errors.tags?(l(),i("div",ts,d(e(s).errors.tags),1)):n("",!0)])]),t("div",os,[t("div",as,[ls,c(u,{id:"status",class:r({"is-invalid":e(s).errors.status}),modelValue:e(s).status,"onUpdate:modelValue":o[26]||(o[26]=a=>e(s).status=a),settings:{allowClear:!0,minimumResultsForSearch:-1},placeholder:"Select Status",onSelect:o[27]||(o[27]=a=>e(s).clearErrors("status")),options:["Active","Closed","Archive"]},null,8,["class","modelValue"]),e(s).errors.status?(l(),i("div",is,d(e(s).errors.status),1)):n("",!0)])])]),t("div",rs,[t("div",ds,[e(s).id?(l(),i("button",{key:1,class:"btn btn-primary",onClick:o[29]||(o[29]=(...a)=>e(V)&&e(V)(...a)),disabled:e(s).processing||e(s).hasErrors},[e(s).processing?(l(),i("span",us)):n("",!0),_(" Save changes ")],8,_s)):(l(),i("button",{key:0,class:"btn btn-primary",onClick:o[28]||(o[28]=(...a)=>e(k)&&e(k)(...a)),disabled:e(s).processing||e(s).hasErrors},[e(s).processing?(l(),i("span",cs)):n("",!0),_(" Save ")],8,ns))])])])])}}});export{Ds as default};
