import{J as j,o as l,c as r,a as e,u as s,t as d,e as i,i as z,d as m,v as f,n as p,b as v,f as T,g as c,F as g,h as y,r as k,w as V}from"./app-7927ae6a.js";import{u as B}from"./Crud-5c736377.js";import{u as R}from"./Validate-929f57f3.js";import{A as $}from"./AdminLayout-58bbf45d.js";import"./lodash-57415352.js";const M={class:"card card-action"},H={class:"card-header"},O=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"COACHES / STAFF")],-1),Q={class:"card-action-element"},J={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},W={class:"offcanvas-header"},G={id:"offCanvasFormLabel",class:"offcanvas-title"},K={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},X={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Y={class:"form-group mb-4 dropzone-profile-photo"},Z=e("label",{for:"name"},"Profile Photo",-1),D={key:1},ss={class:"dropzone",ref:"dropzone"},es=e("div",{class:"dz-message needsclick"}," Please Wait ",-1),ts=[es],os={key:2,class:"v-invalid-feedback"},as={class:"form-group mb-3"},ls=e("label",{for:"name"},[c("First Name "),e("span",{class:"required"},"*")],-1),rs={class:"invalid-feedback"},ns={class:"form-group mb-3"},is=e("label",{for:"name"},[c("Last Name "),e("span",{class:"required"},"*")],-1),ds={class:"invalid-feedback"},cs={class:"form-group mb-3"},us=e("label",{for:"name"},[c("Email "),e("span",{class:"required"},"*")],-1),_s={class:"invalid-feedback"},ps={class:"form-group mb-3"},ms=e("label",{for:"name"},[c("Phone "),e("span",{class:"required"},"*")],-1),hs={class:"invalid-feedback"},fs={class:"form-group mb-3"},vs=e("label",{for:"role"},[c("Role "),e("span",{class:"required"},"*")],-1),bs={key:0,class:"v-invalid-feedback"},gs={class:"form-group mb-3"},ys=e("div",{class:""},[c(" Status "),e("span",{class:"required"},"*")],-1),ks={class:"switch"},ws=["checked"],Cs=e("span",{class:"switch-toggle-slider"},[e("span",{class:"switch-on"}),e("span",{class:"switch-off"})],-1),xs={key:0,class:"switch-label"},Es={key:1,class:"switch-label"},Ss=["disabled"],Fs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Vs=["disabled"],Ps={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},qs={class:"card-body"},As={class:"row justify-content-between"},Ns={class:"col-auto"},Is={class:"d-flex align-items-center gap-2"},Ls=e("div",{class:"w-auto"},"Show",-1),Us={class:"flex-1"},js=["value"],zs=["value"],Ts=e("div",{class:"w-auto"},"entries",-1),Bs={class:"col-auto"},Rs={class:"d-flex flex-row gap-3"},$s={class:"d-flex gap-2 align-items-center"},Ms={class:"flex-1"},Hs=["value"],Os={class:"table-responsive text-nowrap"},Qs={class:"table"},Js={class:"table-light"},Ws=e("th",{class:"sortable"},"Photo",-1),Gs={key:0,class:"ti ti-arrow-up"},Ks={key:1,class:"ti ti-arrow-down"},Xs={key:0,class:"ti ti-arrow-up"},Ys={key:1,class:"ti ti-arrow-down"},Zs={key:0,class:"ti ti-arrow-up"},Ds={key:1,class:"ti ti-arrow-down"},se={key:0,class:"ti ti-arrow-up"},ee={key:1,class:"ti ti-arrow-down"},te=e("th",null,"Actions",-1),oe={class:"table-border-bottom-0"},ae={key:0},le=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),re=[le],ne={class:"avatar avatar-lg"},ie=["src"],de={key:0,class:"badge bg-label-success"},ce={key:1,class:"badge bg-label-danger"},ue={class:"d-flex gap-2"},_e=e("i",{class:"ti ti-eye"},null,-1),pe=["onClick"],me=e("i",{class:"ti ti-pencil"},null,-1),he=[me],fe=["onClick"],ve=e("i",{class:"ti ti-trash"},null,-1),be=[ve],ge={key:0,class:"card-footer py-3 border-top"},ye={class:"row justify-content-between"},ke={class:"col-auto"},we={class:"table_info"},Ce={class:"col-auto"},xe={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ee={class:"pagination mb-0"},Se={class:"page-item"},Fe=["innerHTML"],Ve={layout:$},Ue=Object.assign(Ve,{__name:"Index",setup(Pe){j();const P={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:null,profile_photo:null},{validateForm:h}=R(),q="user.coaches";let{isLoadingComponents:A,paginatedData:u,form:a,createPromise:w,updatePromise:C,deletePromise:N,handleCreate:x,serverQuery:n,handleServerQuery:_,handleEdit:I,formState:b}=B(P,q);return(E,o)=>{const L=k("dropzone"),S=k("select2"),F=k("inertia-link");return l(),r("div",M,[e("div",H,[O,e("div",Q,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(x)&&s(x)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Coach / Staff "),e("div",J,[e("div",W,[e("h5",G,d(s(b)=="create"?"Add":"Update")+" Coach / Staff ",1),s(a).processing?i("",!0):(l(),r("button",K))]),e("div",X,[e("div",Y,[Z,s(A)?(l(),z(L,{key:0,collection:"profile_photo",url:E.route("api.media.upload"),type:"profile",model:"User",value:s(a).profile_photo,onInput:o[1]||(o[1]=t=>s(a).profile_photo=t),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:o[2]||(o[2]=t=>s(a).setError("profile_photo",t&&t[0]?t[0]:t))},null,8,["url","value"])):(l(),r("div",D,[e("div",ss,ts,512)])),s(a).errors.profile_photo?(l(),r("div",os,d(s(a).errors.profile_photo),1)):i("",!0)]),e("div",as,[ls,m(e("input",{type:"text",id:"first_name",class:p(["form-control",{"is-invalid":s(a).errors.first_name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>s(a).first_name=t),onInput:o[4]||(o[4]=t=>{s(a).clearErrors("first_name"),s(h)(["required"],s(a),t.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[f,s(a).first_name]]),e("div",rs,d(s(a).errors.first_name),1)]),e("div",ns,[is,m(e("input",{type:"text",id:"last_name",class:p(["form-control",{"is-invalid":s(a).errors.last_name}]),"onUpdate:modelValue":o[5]||(o[5]=t=>s(a).last_name=t),onInput:o[6]||(o[6]=t=>{s(a).clearErrors("last_name"),s(h)(["required"],s(a),t.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[f,s(a).last_name]]),e("div",ds,d(s(a).errors.last_name),1)]),e("div",cs,[us,m(e("input",{type:"text",id:"email",class:p(["form-control",{"is-invalid":s(a).errors.email}]),"onUpdate:modelValue":o[7]||(o[7]=t=>s(a).email=t),onInput:o[8]||(o[8]=t=>{s(a).clearErrors("email"),s(h)(["required","email"],s(a),t.target.value,"email")}),placeholder:"Enter Email"},null,34),[[f,s(a).email]]),e("div",_s,d(s(a).errors.email),1)]),e("div",ps,[ms,m(e("input",{type:"text",id:"phone",class:p(["form-control",{"is-invalid":s(a).errors.phone}]),"onUpdate:modelValue":o[9]||(o[9]=t=>s(a).phone=t),onInput:o[10]||(o[10]=t=>{s(a).clearErrors("phone"),s(h)(["required","number"],s(a),t.target.value,"phone")}),placeholder:"Enter Phone"},null,34),[[f,s(a).phone]]),e("div",hs,d(s(a).errors.phone),1)]),e("div",fs,[vs,v(S,{class:p({"is-invalid":s(a).errors.role}),modelValue:s(a).role,"onUpdate:modelValue":o[11]||(o[11]=t=>s(a).role=t),placeholder:"Select Role",onSelect:o[12]||(o[12]=t=>s(a).clearErrors("role")),options:["Coach","Admin"]},null,8,["class","modelValue"]),s(a).errors.role?(l(),r("div",bs,d(s(a).errors.role),1)):i("",!0)]),e("div",gs,[ys,e("label",ks,[m(e("input",{type:"checkbox","onUpdate:modelValue":o[13]||(o[13]=t=>s(a).status=t),checked:s(a).status,class:"switch-input"},null,8,ws),[[T,s(a).status]]),Cs,s(a).status==1?(l(),r("span",xs,"Active")):(l(),r("span",Es,"In-active"))])]),s(b)=="create"?(l(),r("button",{key:0,class:"btn btn-primary",onClick:o[14]||(o[14]=(...t)=>s(w)&&s(w)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(l(),r("span",Fs)):i("",!0),c(" Save ")],8,Ss)):i("",!0),s(b)=="update"?(l(),r("button",{key:1,class:"btn btn-primary",onClick:o[15]||(o[15]=(...t)=>s(C)&&s(C)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(l(),r("span",Ps)):i("",!0),c(" Save changes ")],8,Vs)):i("",!0)])])])]),e("div",qs,[e("div",As,[e("div",Ns,[e("div",Is,[Ls,e("div",Us,[e("select",{class:"form-select",value:s(n).perPage,onInput:o[16]||(o[16]=t=>s(_)("perPage",t.target.value))},[(l(),r(g,null,y([5,10,25,50,100],t=>e("option",{value:String(t)},d(t),9,zs)),64))],40,js)]),Ts])]),e("div",Bs,[e("div",Rs,[v(S,{style:{width:"200px"},settings:{allowClear:!0,minimumResultsForSearch:-1},modelValue:s(n).role,"onUpdate:modelValue":[o[17]||(o[17]=t=>s(n).role=t),o[18]||(o[18]=t=>s(_)("role",t))],placeholder:"Filter By Role",options:["Coach","Admin"]},null,8,["modelValue"]),e("div",$s,[e("div",Ms,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(n).query,onInput:o[19]||(o[19]=t=>s(_)("query",t.target.value))},null,40,Hs)])])])])])]),e("div",Os,[e("table",Qs,[e("thead",Js,[e("tr",null,[Ws,e("th",{class:"sortable",onClick:o[20]||(o[20]=t=>s(_)("sort","name"))},[c(" Name "),s(n).sort=="name"&&s(n).order=="desc"?(l(),r("i",Gs)):i("",!0),s(n).sort=="name"&&s(n).order=="asc"?(l(),r("i",Ks)):i("",!0)]),e("th",{onClick:o[21]||(o[21]=t=>s(_)("sort","role"))},"Role"),e("th",{class:"sortable",onClick:o[22]||(o[22]=t=>s(_)("sort","email"))},[c(" Email "),s(n).sort=="email"&&s(n).order=="desc"?(l(),r("i",Xs)):i("",!0),s(n).sort=="email"&&s(n).order=="asc"?(l(),r("i",Ys)):i("",!0)]),e("th",{class:"sortable",onClick:o[23]||(o[23]=t=>s(_)("sort","phone"))},[c(" Phone "),s(n).sort=="phone"&&s(n).order=="desc"?(l(),r("i",Zs)):i("",!0),s(n).sort=="phone"&&s(n).order=="asc"?(l(),r("i",Ds)):i("",!0)]),e("th",{class:"sortable",onClick:o[24]||(o[24]=t=>s(_)("sort","status"))},[c(" Status "),s(n).sort=="status"&&s(n).order=="desc"?(l(),r("i",se)):i("",!0),s(n).sort=="status"&&s(n).order=="asc"?(l(),r("i",ee)):i("",!0)]),te])]),e("tbody",oe,[s(u).data.length<=0?(l(),r("tr",ae,re)):i("",!0),(l(!0),r(g,null,y(s(u).data,t=>(l(),r("tr",{key:t},[e("td",null,[e("div",ne,[e("img",{style:{"object-fit":"cover"},src:t.profile_photo_url,alt:"Avatar",class:"rounded-circle"},null,8,ie)])]),e("td",null,d(t.name),1),e("td",null,d(t.role),1),e("td",null,d(t.email),1),e("td",null,d(t.phone),1),e("td",null,[t.status==1?(l(),r("span",de,"Active")):(l(),r("span",ce,"In-active"))]),e("td",null,[e("div",ue,[v(F,{class:"btn btn-icon btn-label-info waves-effect",href:E.route("user.coaches.show",t.id)},{default:V(()=>[_e]),_:2},1032,["href"]),e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:U=>s(I)(t),href:"javascript:void(0);"},he,8,pe),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:U=>s(N)(t.id)},be,8,fe)])])]))),128))])])]),s(u)&&s(u).meta.links?(l(),r("div",ge,[e("div",ye,[e("div",ke,[e("div",we," Showing "+d(s(u).meta.from)+" to "+d(s(u).meta.to)+" of "+d(s(u).meta.total)+" entries ",1)]),e("div",Ce,[e("nav",xe,[e("ul",Ee,[(l(!0),r(g,null,y(s(u).meta.links,t=>(l(),r("li",Se,[v(F,{class:p(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:V(()=>[e("span",{innerHTML:t.label},null,8,Fe)]),_:2},1032,["class","href"])]))),256))])])])])])):i("",!0)])}}});export{Ue as default};
