<script setup>
import { usePage, Head } from "@inertiajs/vue3";
import { computed } from "vue";
const { props } = usePage();
const parent = computed(() => usePage().props.parent);
const title = computed(() => usePage().props.title);
</script>

<template>
    <Head title="Profile"></Head>
    <AdminLayout>
        <div class="container-xxl flex-grow-1 container-p-y">
            <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light"> <a href="/user/parents">Parent</a> / View /
                {{ parent?.first_name }} /</span> {{ title }}
            </h4>
            <div class="row">
                <!-- User Sidebar -->
                <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                    <!-- User Card -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="user-avatar-section">
                                <div
                                    class="d-flex align-items-center flex-column"
                                >
                                    <img
                                        class="img-fluid rounded mb-3 pt-1 mt-4"
                                        :src="parent?.profile_photo_url"
                                        height="100"
                                        width="100"
                                        alt="User avatar"
                                    />
                                    <div class="user-info text-center">
                                        <h4 class="mb-2">{{ parent?.name }}</h4>
                                        <span
                                            class="badge bg-label-secondary mt-1"
                                            >{{ parent?.role }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <p class="mt-4 small text-uppercase text-muted">
                                Details
                            </p>
                            <div class="info-container">
                                <ul class="list-unstyled">
                                    <li class="mb-2 pt-1">
                                        <span class="fw-semibold me-1"
                                            >Email:</span
                                        >
                                        <span>{{ parent?.email }}</span>
                                    </li>
                                    <li class="mb-2 pt-1">
                                        <span class="fw-semibold me-1"
                                            >Status:</span
                                        >
                                        <span
                                            class="badge"
                                            :class="{
                                                'bg-label-success':
                                                    parent?.status == 1,
                                                'bg-label-danger':
                                                    parent?.status == 0,
                                            }"
                                        >
                                            {{
                                                parent?.status == 1
                                                    ? "Active"
                                                    : "In-Active"
                                            }}</span
                                        >
                                    </li>
                                    <li class="mb-2 pt-1">
                                        <span class="fw-semibold me-1"
                                            >Role:</span
                                        >
                                        <span>{{ parent?.role }}</span>
                                    </li>
                                    <li class="mb-2 pt-1">
                                        <span class="fw-semibold me-1"
                                            >Phone:</span
                                        >
                                        <span>{{ parent?.phone }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /User Card -->
                </div>
                <!--/ User Sidebar -->

                <!-- User Content -->
                <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                    <!-- User Pills -->
                    <ul class="nav nav-pills flex-column flex-md-row mb-4">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                href="javascript:void(0);"
                                ><i class="ti ti-user-check ti-xs me-1"></i
                                >Players</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                                ><i class="ti ti-cash-banknote ti-xs me-1"></i
                                >Payments</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                                ><i class="ti ti-cash-banknote ti-xs me-1"></i
                                >Enrolments</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                                ><i class="ti ti-pencil ti-xs me-1"></i
                                >Update</a
                            >
                        </li>
                    </ul>
                    <!--/ User Pills -->
                    <!-- Profile Content -->
                    <slot></slot>
                    <!--/ Profile Content -->
                </div>
                <!--/ User Content -->
            </div>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    components: {
        AdminLayout,
    },
};
</script>
