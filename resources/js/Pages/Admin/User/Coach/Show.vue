<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {usePage} from "@inertiajs/vue3";


export default {
    layout: AdminLayout,
};
</script>

<script setup>
const {props} = usePage();
</script>

<template>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">{{props.data.name.toUpperCase()}}</h5>
            </div>
        </div>
    </div>
</template>
