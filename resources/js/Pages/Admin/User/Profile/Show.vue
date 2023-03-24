<script>
import ProfileLayout from "@/Layouts/ProfileLayout.vue";
export default {
    layout: ProfileLayout,
};

</script>

<template>
    {{ $page.props.auth }}
</template>
