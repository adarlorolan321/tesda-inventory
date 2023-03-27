<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import EditClass from "@/Pages/Admin/Class/Forms/EditClass.vue";

export default {
    layout: AdminLayout,
    components: {EditClass}
};
</script>

<template>
    <edit-class :has_back="true" ></edit-class>
</template>
