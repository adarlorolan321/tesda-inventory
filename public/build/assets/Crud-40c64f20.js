import{s as $,q as f,k as g,p as y,O as v,J as S}from"./app-ab2df9e9.js";import{l as x}from"./lodash-2b88457b.js";import{t as p}from"./toastr-1283bf79.js";function D(h={},c,i=null,s=null){const t=$(h),d=f("create"),b=g(()=>S().props.data),r=g(()=>S().props.params),u=f(!1),n=f(null),e=f({perPage:50,query:null,page:1});y(()=>{r.value&&(r.value.page&&(e.value.page=r.value.page),r.value.perPage&&(e.value.perPage=r.value.perPage),r.value.query&&(e.value.query=r.value.query),r.value.sort&&(e.value.sort=r.value.sort),r.value.order&&(e.value.order=r.value.order),r.value.role&&(e.value.role=r.value.role),r.value.coach_filter&&(e.value.coach_filter=r.value.coach_filter),r.value.service_filter&&(e.value.service_filter=r.value.service_filter))}),y(()=>{var a=document.getElementById("offCanvasForm");a&&(n.value=new bootstrap.Offcanvas(a))});const m=()=>{n.value&&n.value.hide()},C=()=>{n.value&&n.value.toggle()},P=(a,o)=>{(a=="perPage"||a=="query")&&(e.value.page=1),a=="sort"?e.value.sort&&e.value.sort==o?e.value.order=="asc"?(e.value.sort=o,e.value.order="desc"):(e.value.sort=null,e.value.order=null):(e.value.sort=o,e.value.order="asc"):e.value[a]=o,O()},O=x.debounce(()=>{let a=route(`${c}.index`,e.value);i&&(a=route(i.routeName,{id:i.routeId}));let o={};for(const l in e.value)e.value[l]&&e.value[l]!=""&&(o[l]=e.value[l]);v.get(a,o,{preserveState:!0,preventScroll:!0,only:["data","params"]})},500),E=async()=>{t.clearErrors(),t.post(route(`${c}.store`),{preserveState:!0,preventScroll:!0,only:["data","params","errors"],onSuccess:()=>{p.success("Record saved"),s?(t.reset(),v.visit(route(s.redirectTo,s.id))):m()}})},q=async()=>{t.clearErrors(),t.patch(route(`${c}.update`,t.id),{preserveState:!0,preventScroll:!0,only:["data","params","errors"],onSuccess:()=>{p.info("Record updated"),s?v.visit(route(s.redirectTo,s.id)):(t.reset(),m())}})},w=async a=>{console.log(i),Swal.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel it!",customClass:{confirmButton:"btn btn-primary me-3",cancelButton:"btn btn-label-danger"}}).then(o=>{o.isConfirmed&&v.delete(route(`${c}.destroy`,a),{preserveState:!0,preventScroll:!0,only:["data","params"],onSuccess:()=>{p.error("Record deleted")}})})},B=()=>{_(),v.reload([]),u.value=!1,setTimeout(()=>{u.value=!0},1e3),d.value="create"},T=a=>{a=JSON.parse(JSON.stringify(a)),t.reset(),t.clearErrors();for(const o in a){const l=a[o];t[o]=l}d.value="update",C(),u.value=!1,setTimeout(()=>{u.value=!0},1e3)},_=()=>{t.reset(),t.clearErrors()};return{paginatedData:b,isLoadingComponents:u,form:t,createPromise:E,updatePromise:q,deletePromise:w,handleCreate:B,handleEdit:T,serverQuery:e,handleServerQuery:P,formState:d}}export{D as u};