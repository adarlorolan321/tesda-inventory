import{J as x,o as i,c as l,a as t,b as c,w as A,d as p,v as h,u as e,n as r,t as d,e as n,f as S,g as _,r as b}from"./app-6f6d1591.js";import{u as D}from"./Crud-6116c5bb.js";import{u as T}from"./InputFormat-1ec5d242.js";import{u as $}from"./Validate-a6272f2d.js";import{A as F}from"./AdminLayout-df62fda9.js";import"./lodash-75febade.js";const N={class:"card card-action"},P={class:"card-header"},I=t("div",{class:"card-action-title align-items-center"},[t("h5",{class:"card-title"},"ADD CLASS")],-1),q={class:"card-action-element"},B={class:"card-body"},R={class:"row"},j={class:"col-md-12"},L={class:"form-group mb-3"},M=t("label",{for:"name"},[_("Name "),t("span",{class:"required"},"*")],-1),O={class:"invalid-feedback"},Q={class:"col-md-6"},z={class:"form-group mb-3"},J=t("label",{for:"service_id"},[_("Service "),t("span",{class:"required"},"*")],-1),Y={key:0,class:"v-invalid-feedback"},G={class:"col-md-6"},H={class:"form-group mb-3"},K=t("label",{for:"venue_id"},[_("Venue "),t("span",{class:"required"},"*")],-1),W={key:0,class:"v-invalid-feedback"},X={class:"col-md-6"},Z={class:"form-group mb-3"},ee=t("label",{for:"coach_id"},"Coach",-1),se={key:0,class:"v-invalid-feedback"},te={class:"col-md-6"},oe={class:"form-group mb-3"},ae=t("label",{for:"additional_coach"},"Additional Coach ",-1),ie={key:0,class:"v-invalid-feedback"},le={class:"col-md-3"},re={class:"form-group mb-3"},de=t("label",{for:"start_time"},"Start Date",-1),ne={key:0,class:"v-invalid-feedback"},ce={class:"col-md-3"},_e={class:"form-group mb-3"},ue=t("label",{for:"start_time"},"Start Time",-1),pe={key:0,class:"v-invalid-feedback"},me={class:"col-md-3"},ve={class:"form-group mb-3"},he=t("label",{for:"end_date"},"End Date",-1),fe={key:0,class:"v-invalid-feedback"},be={class:"col-md-3"},ye={class:"form-group mb-3"},ge=t("label",{for:"end_time"},"End Time",-1),ke={key:0,class:"v-invalid-feedback"},Ve={class:"row"},Se={class:"col-md-6 mb-3 d-flex gap-4"},we={class:"form-group"},Ee=t("div",{style:{"white-space":"nowrap"},class:""}," Payment Type ",-1),Ce={id:"price_type",class:"switch"},Ue=["checked"],xe=t("span",{class:"switch-toggle-slider"},[t("span",{class:"switch-on"}),t("span",{class:"switch-off"})],-1),Ae={class:"switch-label"},De={style:{width:"100%"},class:"form-group"},Te={for:"price"},$e={key:0,class:"required"},Fe=["disabled"],Ne={class:"invalid-feedback"},Pe={class:"col-md-6 d-flex flex-row gap-4 mb-3"},Ie={class:"form-group"},qe=t("div",{class:""},"Repeat",-1),Be={for:"repeat",class:"switch"},Re=["checked"],je=t("span",{class:"switch-toggle-slider"},[t("span",{class:"switch-on"}),t("span",{class:"switch-off"})],-1),Le={class:"switch-label"},Me={style:{width:"100%"},class:"form-group"},Oe={for:"days"},Qe={key:0,class:"required"},ze=["disabled"],Je={key:0,class:"v-invalid-feedback"},Ye={class:"row"},Ge={class:"col-md-6"},He={class:"form-group mb-3"},Ke=t("label",{for:"capacity"},"Capacity",-1),We={class:"invalid-feedback"},Xe={class:"col-md-6"},Ze={class:"form-group mb-3"},es=t("label",{for:"tags"},"Tags ",-1),ss={key:0,class:"v-invalid-feedback"},ts={class:"col-md-6"},os={class:"form-group mb-3"},as=t("label",{for:"status"},[_("Status "),t("span",{class:"required"},"*")],-1),is={key:0,class:"v-invalid-feedback"},ls={class:"row mt-4"},rs={class:"col"},ds=["disabled"],ns={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},cs=["disabled"],_s={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},us={layout:F},Us=Object.assign(us,{__name:"Create",setup(ps){const{props:m}=x(),w={id:null,name:null,service_id:null,venue_id:null,coach_id:null,additional_coach:null,start_date:null,end_date:null,start_time:null,end_time:null,repeat:!1,capacity:null,days:null,price_type:!1,price:null,tags:[],status:"Active"},E="classes",{dateFormat:y,timeFormat:g}=T(),{validateForm:f}=$();let{paginatedData:ms,form:s,createPromise:k,updatePromise:V,deletePromise:vs,handleCreate:hs,serverQuery:fs,handleServerQuery:bs,handleEdit:ys,formState:gs}=D(w,E);return(C,o)=>{const U=b("inertia-link"),u=b("select2"),v=b("flat-pickr");return i(),l("div",N,[t("div",P,[I,t("div",q,[c(U,{type:"button",class:"btn btn-link-primary btn-primary",href:C.route("classes.index")},{default:A(()=>[_(" Back ")]),_:1},8,["href"])])]),t("div",B,[t("div",R,[t("div",j,[t("div",L,[M,p(t("input",{type:"text",id:"name",class:r(["form-control",{"is-invalid":e(s).errors.name}]),placeholder:"Enter Name","onUpdate:modelValue":o[0]||(o[0]=a=>e(s).name=a),onInput:o[1]||(o[1]=a=>e(s).clearErrors("name"))},null,34),[[h,e(s).name]]),t("div",O,d(e(s).errors.name),1)])]),t("div",Q,[t("div",z,[J,c(u,{id:"service_id",class:r({"is-invalid":e(s).errors.service_id}),modelValue:e(s).service_id,"onUpdate:modelValue":o[2]||(o[2]=a=>e(s).service_id=a),placeholder:"Select Service",settings:{allowClear:!0},onSelect:o[3]||(o[3]=a=>e(s).clearErrors("service_id")),options:e(m).services},null,8,["class","modelValue","options"]),e(s).errors.service_id?(i(),l("div",Y,d(e(s).errors.service_id),1)):n("",!0)])]),t("div",G,[t("div",H,[K,c(u,{id:"venue_id",class:r({"is-invalid":e(s).errors.venue_id}),modelValue:e(s).venue_id,"onUpdate:modelValue":o[4]||(o[4]=a=>e(s).venue_id=a),settings:{allowClear:!0},placeholder:"Select Venue",onSelect:o[5]||(o[5]=a=>e(s).clearErrors("venue_id")),options:e(m).venues},null,8,["class","modelValue","options"]),e(s).errors.venue_id?(i(),l("div",W,d(e(s).errors.venue_id),1)):n("",!0)])]),t("div",X,[t("div",Z,[ee,c(u,{class:r({"is-invalid":e(s).errors.coach_id}),modelValue:e(s).coach_id,"onUpdate:modelValue":o[6]||(o[6]=a=>e(s).coach_id=a),settings:{allowClear:!0},placeholder:"Select Coach",onSelect:o[7]||(o[7]=a=>e(s).clearErrors("coach_id")),options:e(m).coaches},null,8,["class","modelValue","options"]),e(s).errors.coach_id?(i(),l("div",se,d(e(s).errors.coach_id),1)):n("",!0)])]),t("div",te,[t("div",oe,[ae,c(u,{multiple:"multiple",id:"additional_coach",class:r({"is-invalid":e(s).errors.additional_coach}),modelValue:e(s).additional_coach,"onUpdate:modelValue":o[8]||(o[8]=a=>e(s).additional_coach=a),settings:{allowClear:!0},placeholder:"Select Additional Coach",onSelect:o[9]||(o[9]=a=>e(s).clearErrors("additional_coach")),options:e(m).coaches},null,8,["class","modelValue","options"]),e(s).errors.additional_coach?(i(),l("div",ie,d(e(s).errors.additional_coach),1)):n("",!0)])]),t("div",le,[t("div",re,[de,c(v,{id:"start_date",config:e(y),class:r([{"is-invalid":e(s).errors.start_date},"form-control"]),placeholder:"Select Start Date",modelValue:e(s).start_date,"onUpdate:modelValue":o[10]||(o[10]=a=>e(s).start_date=a)},null,8,["config","class","modelValue"]),e(s).errors.start_date?(i(),l("div",ne,d(e(s).errors.start_date),1)):n("",!0)])]),t("div",ce,[t("div",_e,[ue,c(v,{id:"start_time",config:e(g),class:r([{"is-invalid":e(s).errors.start_time},"form-control"]),placeholder:"Select End Time",modelValue:e(s).start_time,"onUpdate:modelValue":o[11]||(o[11]=a=>e(s).start_time=a)},null,8,["config","class","modelValue"]),e(s).errors.start_time?(i(),l("div",pe,d(e(s).errors.start_time),1)):n("",!0)])]),t("div",me,[t("div",ve,[he,c(v,{id:"end_date",config:e(y),class:r([{"is-invalid":e(s).errors.end_date},"form-control"]),placeholder:"Select End Time",modelValue:e(s).end_date,"onUpdate:modelValue":o[12]||(o[12]=a=>e(s).end_date=a)},null,8,["config","class","modelValue"]),e(s).errors.end_date?(i(),l("div",fe,d(e(s).errors.end_date),1)):n("",!0)])]),t("div",be,[t("div",ye,[ge,c(v,{id:"end_time",config:e(g),class:r([{"is-invalid":e(s).errors.end_time},"form-control"]),placeholder:"Select End Time",modelValue:e(s).end_time,"onUpdate:modelValue":o[13]||(o[13]=a=>e(s).end_time=a)},null,8,["config","class","modelValue"]),e(s).errors.end_time?(i(),l("div",ke,d(e(s).errors.end_time),1)):n("",!0)])])]),t("div",Ve,[t("div",Se,[t("div",we,[Ee,t("label",Ce,[p(t("input",{id:"price_type",type:"checkbox",class:r([{"is-invalid":e(s).errors.price_type},"switch-input"]),"onUpdate:modelValue":o[14]||(o[14]=a=>e(s).price_type=a),checked:e(s).price_type,onInput:o[15]||(o[15]=a=>{e(s).clearErrors("price_type","price"),e(s).price=null})},null,42,Ue),[[S,e(s).price_type]]),xe,t("span",Ae,d(e(s).price_type==1?"Paid":"Free"),1)])]),t("div",De,[t("label",Te,[_("Price "),e(s).price_type?(i(),l("span",$e,"*")):n("",!0)]),p(t("input",{id:"price",type:"text",disabled:!e(s).price_type,class:r(["form-control",{"is-invalid":e(s).errors.price}]),placeholder:"Enter Price","onUpdate:modelValue":o[16]||(o[16]=a=>e(s).price=a),onInput:o[17]||(o[17]=a=>{e(s).clearErrors("price"),e(f)(["number"],e(s),a.target.value,"price")})},null,42,Fe),[[h,e(s).price]]),t("div",Ne,d(e(s).errors.price),1)])]),t("div",Pe,[t("div",Ie,[qe,t("label",Be,[p(t("input",{id:"repeat",type:"checkbox",class:r([{"is-invalid":e(s).errors.repeat},"switch-input"]),"onUpdate:modelValue":o[18]||(o[18]=a=>e(s).repeat=a),checked:e(s).repeat,onInput:o[19]||(o[19]=a=>{e(s).clearErrors("repeat","days"),e(s).days=null})},null,42,Re),[[S,e(s).repeat]]),je,t("span",Le,d(e(s).repeat==1?"Yes":"No"),1)])]),t("div",Me,[t("label",Oe,[_("Days "),e(s).repeat?(i(),l("span",Qe,"*")):n("",!0)]),p(t("input",{id:"days",type:"text",disabled:!e(s).repeat,class:r(["form-control",{"is-days":e(s).errors.days}]),placeholder:"Enter Price","onUpdate:modelValue":o[20]||(o[20]=a=>e(s).days=a),onInput:o[21]||(o[21]=a=>{e(s).clearErrors("days"),e(f)(["number"],e(s),a.target.value,"days")})},null,42,ze),[[h,e(s).days]]),e(s).errors.days?(i(),l("div",Je,d(e(s).errors.days),1)):n("",!0)])])]),t("div",Ye,[t("div",Ge,[t("div",He,[Ke,p(t("input",{id:"capacity",type:"text",class:r(["form-control",{"is-invalid":e(s).errors.capacity}]),placeholder:"Enter Capacity","onUpdate:modelValue":o[22]||(o[22]=a=>e(s).capacity=a),onInput:o[23]||(o[23]=a=>{e(s).clearErrors("capacity"),e(f)(["number"],e(s),a.target.value,"capacity")})},null,34),[[h,e(s).capacity]]),t("div",We,d(e(s).errors.capacity),1)])]),t("div",Xe,[t("div",Ze,[es,c(u,{id:"tags",multiple:"",class:r({"is-invalid":e(s).errors.tags}),modelValue:e(s).tags,"onUpdate:modelValue":o[24]||(o[24]=a=>e(s).tags=a),settings:{tags:!0,allowClear:!0,minimumResultsForSearch:-1},placeholder:"Select tags",onSelect:o[25]||(o[25]=a=>e(s).clearErrors("tags"))},null,8,["class","modelValue"]),e(s).errors.tags?(i(),l("div",ss,d(e(s).errors.tags),1)):n("",!0)])]),t("div",ts,[t("div",os,[as,c(u,{id:"status",class:r({"is-invalid":e(s).errors.status}),modelValue:e(s).status,"onUpdate:modelValue":o[26]||(o[26]=a=>e(s).status=a),settings:{allowClear:!0,minimumResultsForSearch:-1},placeholder:"Select Status",onSelect:o[27]||(o[27]=a=>e(s).clearErrors("status")),options:["Active","Closed","Archive"]},null,8,["class","modelValue"]),e(s).errors.status?(i(),l("div",is,d(e(s).errors.status),1)):n("",!0)])])]),t("div",ls,[t("div",rs,[e(s).id?(i(),l("button",{key:1,class:"btn btn-primary",onClick:o[29]||(o[29]=(...a)=>e(V)&&e(V)(...a)),disabled:e(s).processing||e(s).hasErrors},[e(s).processing?(i(),l("span",_s)):n("",!0),_(" Save changes ")],8,cs)):(i(),l("button",{key:0,class:"btn btn-primary",onClick:o[28]||(o[28]=(...a)=>e(k)&&e(k)(...a)),disabled:e(s).processing||e(s).hasErrors},[e(s).processing?(i(),l("span",ns)):n("",!0),_(" Save ")],8,ds))])])])])}}});export{Us as default};
