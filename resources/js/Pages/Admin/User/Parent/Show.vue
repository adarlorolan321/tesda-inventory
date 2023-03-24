<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { usePage } from "@inertiajs/vue3";

export default {
    layout: AdminLayout,
};
</script>

<script setup>
const { props } = usePage();
</script>

<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4">
            <span class="text-muted fw-light">Parents /</span>
            {{ props.data.name.toUpperCase() }}
        </h4>
        <ul class="nav nav-pills flex-column flex-md-row mb-4">
            <li class="nav-item">
                <inertia-link
                    class="nav-link active"
                    :href="route('user.parents.index')"
                    :class="{
                        active: route().current('user.parents.index'),
                    }"
                    ><i class="ti-xs ti ti-user-check me-1"></i>
                    Account</inertia-link
                >
            </li>
            <li class="nav-item">
                <inertia-link
                    class="nav-link"
                    :href="route('user.parents.index')"
                    :class="{
                        active: route().current('user.parents.index'),
                    }"
                    ><i class="ti-xs ti ti-users me-1"></i>
                    Players</inertia-link
                >
            </li>
        </ul>
    </div>
</template>
