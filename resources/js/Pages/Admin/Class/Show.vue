<script>
import ClassLayout from "@/Layouts/ClassLayout.vue";

export default {
    layout: ClassLayout,
};
</script>

<script setup>

import SessionTab from "@/Pages/Admin/Class/ClassViewTabs/SessionTab.vue";
import EditClass from "@/Pages/Admin/Class/Forms/EditClass.vue";
</script>

<template>
   <div>
       <session-tab v-if="route().current('classes.sessions-tab')"/>
       <edit-class v-if="route().current('classes.update-tab')"/>
   </div>
</template>
