import{J as F,o as l,c as i,a as x,u as t,b as e,t as n,d as r,w as b,v,n as _,e as p,F as h,r as y,X as V,f as j,g as M}from"./app-799382d1.js";import{u as T}from"./Crud-b6427e67.js";import{u as A}from"./Validate-3e0b379f.js";import{A as N}from"./AdminLayout-712e15ce.js";import"./logo-06b3879b.js";const P=e("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog",role:"document"},[e("div",{class:"modal-content"},[e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),e("div",{class:"modal-body"},[e("p",null,"Croissant jelly beans donut apple pie. Caramels bonbon lemon drops. Sesame snaps lemon drops lemon drops liquorice icing bonbon pastry pastry carrot cake. Dragée sweet sweet roll sugar plum."),e("p",null,"Jelly-o cookie jelly gummies pudding cheesecake lollipop macaroon. Sweet chocolate bar sweet roll carrot cake. Sweet roll sesame snaps fruitcake brownie bear claw toffee bonbon brownie.")]),e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e("button",{type:"button",class:"btn btn-primary"},"Save changes")])])])],-1),U={class:"card card-action"},$={class:"card-header"},B=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Supplies")],-1),D={class:"card-action-element"},H={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},J={class:"offcanvas-header"},O={id:"offCanvasFormLabel",class:"offcanvas-title"},Q={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},z={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},X={class:"form-group mb-3"},G=e("label",{for:"name"},[p("Label "),e("span",{class:"required"},"*")],-1),K={class:"invalid-feedback"},R={class:"form-group mb-3"},W=e("label",{for:"name"},[p("Type "),e("span",{class:"required"},"*")],-1),Y={class:"invalid-feedback"},Z={class:"form-group mb-3"},ee=e("label",{for:"name"},[p("Description "),e("span",{class:"required"},"*")],-1),te={class:"invalid-feedback"},se={class:"form-group mb-3"},oe=e("label",{for:"name"},[p("Item Code "),e("span",{class:"required"},"*")],-1),ae={class:"invalid-feedback"},le=["disabled"],ie={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ne=["disabled"],re={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},de={class:"card-body"},ce={class:"row justify-content-between"},pe={class:"col-auto"},ue={class:"d-flex align-items-center gap-2"},_e=e("div",{class:"w-auto"},"Show",-1),me={class:"flex-1"},be=["value"],ve=["value"],he=e("div",{class:"w-auto"},"entries",-1),fe={class:"col-auto"},ye={class:"d-flex flex-row gap-3"},ge={class:"d-flex gap-2 align-items-center"},ke={class:"flex-1"},we={class:"input-group input-group-merge"},xe=e("span",{class:"input-group-text",id:"basic-addon-search31"},[e("i",{class:"ti ti-search"})],-1),Ce=["value"],Se={class:"table-responsive text-nowrap"},Ee={class:"table"},qe={class:"table-light",style:{"min-width":"200px"}},Le={key:0,class:"ti ti-arrow-up"},Ie={key:1,class:"ti ti-arrow-down"},Fe={key:0,class:"ti ti-arrow-up"},Ve={key:1,class:"ti ti-arrow-down"},je=e("th",{style:{width:"150px"}},"Actions",-1),Me={class:"table-border-bottom-0"},Te={key:0},Ae=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ne=[Ae],Pe={class:"d-flex gap-2"},Ue=e("button",{class:"btn btn-icon btn-label-info waves-effect","data-bs-toggle":"modal","data-bs-target":"#exampleModal",title:"Add Stocks"},[e("i",{class:"ti ti-plus"})],-1),$e=["onClick"],Be=e("i",{class:"ti ti-pencil"},null,-1),De=[Be],He=["onClick"],Je=e("i",{class:"ti ti-trash"},null,-1),Oe=[Je],Qe={key:0,class:"card-footer py-3 border-top"},ze={class:"row justify-content-between"},Xe={class:"col-auto"},Ge={class:"table_info"},Ke={class:"col-auto"},Re={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},We={class:"pagination mb-0"},Ye={class:"page-item"},Ze=["innerHTML"],et={layout:N},dt=Object.assign(et,{__name:"Index",setup(tt){F();const C={label:null,type:null,description:null,item_code:null,stocks:0,quantity:0,unit_price:0,total_price:0,date_purchased:null},{validateForm:m}=A(),S="user.supplies";let{isLoadingComponents:st,paginatedData:c,form:a,createPromise:g,updatePromise:k,deletePromise:E,handleCreate:w,serverQuery:d,handleServerQuery:u,handleEdit:q,formState:f}=T(C,S);return(ot,o)=>{const L=M("inertia-link");return l(),i(h,null,[x(t(V),{title:"Coaches/Staff"}),P,e("div",U,[e("div",$,[B,e("div",D,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...s)=>t(w)&&t(w)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Supply "),e("div",H,[e("div",J,[e("h5",O,n(t(f)=="create"?"Add":"Update")+" Supply ",1),t(a).processing?r("",!0):(l(),i("button",Q))]),e("div",z,[e("div",X,[G,b(e("input",{type:"text",id:"label",class:_(["form-control",{"is-invalid":t(a).errors.label}]),"onUpdate:modelValue":o[1]||(o[1]=s=>t(a).label=s),onInput:o[2]||(o[2]=s=>{t(a).clearErrors("label"),t(m)(["required"],t(a),s.target.value,"label")}),placeholder:"Enter Label"},null,34),[[v,t(a).label]]),e("div",K,n(t(a).errors.label),1)]),e("div",R,[W,b(e("input",{type:"text",id:"type",class:_(["form-control",{"is-invalid":t(a).errors.type}]),"onUpdate:modelValue":o[3]||(o[3]=s=>t(a).type=s),onInput:o[4]||(o[4]=s=>{t(a).clearErrors("type"),t(m)(["required"],t(a),s.target.value,"type")}),placeholder:"Enter Type"},null,34),[[v,t(a).type]]),e("div",Y,n(t(a).errors.type),1)]),e("div",Z,[ee,b(e("textarea",{class:_(["form-control",{"is-invalid":t(a).errors.description}]),name:"",id:"",cols:"30",rows:"10",placeholder:"Enter Description","onUpdate:modelValue":o[5]||(o[5]=s=>t(a).description=s),onInput:o[6]||(o[6]=s=>{t(a).clearErrors("description"),t(m)(["required"],t(a),s.target.value,"description")})},null,34),[[v,t(a).description]]),e("div",te,n(t(a).errors.description),1)]),e("div",se,[oe,b(e("input",{type:"text",id:"item_code",class:_(["form-control",{"is-invalid":t(a).errors.item_code}]),"onUpdate:modelValue":o[7]||(o[7]=s=>t(a).item_code=s),placeholder:"Enter Item Code",onInput:o[8]||(o[8]=s=>{t(a).clearErrors("item_code"),t(m)(["required"],t(a),s.target.value,"item_code")})},null,34),[[v,t(a).item_code]]),e("div",ae,n(t(a).errors.item_code),1)]),t(f)=="create"?(l(),i("button",{key:0,class:"btn btn-primary",onClick:o[9]||(o[9]=(...s)=>t(g)&&t(g)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(l(),i("span",ie)):r("",!0),p(" Save ")],8,le)):r("",!0),t(f)=="update"?(l(),i("button",{key:1,class:"btn btn-primary",onClick:o[10]||(o[10]=(...s)=>t(k)&&t(k)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(l(),i("span",re)):r("",!0),p(" Save changes ")],8,ne)):r("",!0)])])])]),e("div",de,[e("div",ce,[e("div",pe,[e("div",ue,[_e,e("div",me,[e("select",{class:"form-select",value:t(d).perPage,onInput:o[11]||(o[11]=s=>t(u)("perPage",s.target.value))},[(l(),i(h,null,y([5,10,25,50,100],s=>e("option",{value:String(s)},n(s),9,ve)),64))],40,be)]),he])]),e("div",fe,[e("div",ye,[e("div",ge,[e("div",ke,[e("div",we,[xe,e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(d).query,onInput:o[12]||(o[12]=s=>t(u)("query",s.target.value))},null,40,Ce)])])])])])])]),e("div",Se,[e("table",Ee,[e("thead",qe,[e("tr",null,[e("th",{class:"sortable",onClick:o[13]||(o[13]=s=>t(u)("sort","label"))}," Label "),e("th",{style:{"min-width":"200px",width:"30%"},class:"sortable",onClick:o[14]||(o[14]=s=>t(u)("sort","type"))},[p(" Type "),t(d).sort=="type"&&t(d).order=="desc"?(l(),i("i",Le)):r("",!0),t(d).sort=="type"&&t(d).order=="asc"?(l(),i("i",Ie)):r("",!0)]),e("th",{style:{"min-width":"200px",width:"30%"},class:"sortable",onClick:o[15]||(o[15]=s=>t(u)("sort","item_code"))},[p(" Item Code "),t(d).sort=="item_code"&&t(d).order=="desc"?(l(),i("i",Fe)):r("",!0),t(d).sort=="item_code"&&t(d).order=="asc"?(l(),i("i",Ve)):r("",!0)]),je])]),e("tbody",Me,[t(c).data.length<=0?(l(),i("tr",Te,Ne)):r("",!0),(l(!0),i(h,null,y(t(c).data,s=>(l(),i("tr",{key:s},[e("td",null,n(s.label),1),e("td",null,n(s.type),1),e("td",null,n(s.item_code),1),e("td",null,[e("div",Pe,[Ue,e("a",{class:"btn btn-icon btn-label-primary waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-primary",title:"Edit",onClick:I=>t(q)(s),href:"javascript:void(0);"},De,8,$e),e("a",{class:"btn btn-icon btn-label-danger waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger",title:"Delete",href:"javascript:void(0);",onClick:I=>t(E)(s.id)},Oe,8,He)])])]))),128))])])]),t(c)&&t(c).meta.links?(l(),i("div",Qe,[e("div",ze,[e("div",Xe,[e("div",Ge," Showing "+n(t(c).meta.from)+" to "+n(t(c).meta.to)+" of "+n(t(c).meta.total)+" entries ",1)]),e("div",Ke,[e("nav",Re,[e("ul",We,[(l(!0),i(h,null,y(t(c).meta.links,s=>(l(),i("li",Ye,[x(L,{class:_(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:j(()=>[e("span",{innerHTML:s.label},null,8,Ze)]),_:2},1032,["class","href"])]))),256))])])])])])):r("",!0)])],64)}}});export{dt as default};