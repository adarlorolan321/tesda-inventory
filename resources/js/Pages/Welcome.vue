<template>
    
   <h1>Dashboard</h1>
</template>
<script lang="js">
import AdminLayout from '@/Layouts/AdminLayout.vue'
import QuillEditor from '../Components/QuillEditor.vue';
import { router } from "@inertiajs/vue3";

export default {
    layout: AdminLayout,
    components: {
        QuillEditor
    },
    data: function(){
        return {
            defaultValue: '<p>Hello world<p>'
        }
    },
    mounted: function () {
        
    }
}
</script>
