<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
    
   data(){
    return{
    
      route_name: this.getRoutName(route().current()),
     
    }
   },
    methods:{
        getRoutName(route){
          switch(route){
            case "account.index": return "Account";
            case "account.security": return "Security"
          }
        }
    }
};
</script>
<template>
      <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account Settings /</span>{{ route_name }}</h4>
        <ul class="nav nav-pills flex-column flex-md-row mb-4">
                    <li class="nav-item">
                      <inertia-link class="nav-link" :href="route('account.index')"
                        :class="{
                          'active': route().current('account.index')
                        }" 
                     
                      ><i class="ti-xs ti ti-users me-1"></i> Account</inertia-link
                      >
                    </li>
                    <li class="nav-item">
                      <inertia-link class="nav-link" :href="route('account.security')" :class="{
                          'active': route().current('account.security')
                        }"  
                       
                        ><i class="ti-xs ti ti-lock me-1"></i> Security</inertia-link
                      >
                    </li>
                    <!-- <li class="nav-item">
                      <a class="nav-link" href="pages-account-settings-billing.html"
                        ><i class="ti-xs ti ti-file-description me-1"></i> Billing & Plans</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages-account-settings-notifications.html"
                        ><i class="ti-xs ti ti-bell me-1"></i> Notifications</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages-account-settings-connections.html"
                        ><i class="ti-xs ti ti-link me-1"></i> Connections</a
                      >
                    </li> -->
                  </ul>
</template>