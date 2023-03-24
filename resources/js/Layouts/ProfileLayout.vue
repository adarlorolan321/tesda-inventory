
<script setup> 
import { usePage, Head } from "@inertiajs/vue3"; 
const { props } = usePage(); 
</script>


<template> 
    <Head title="Profile"></Head>
    <AdminLayout> 
        <div class="content-wrapper">
            <!-- Content -->
            <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                    <span class="text-muted fw-light">User Profile /</span>
                    Profile
                </h4>
                <!-- Header -->
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="user-profile-header-banner">
                                <img
                                    src="/assets/img/pages/profile-banner.png"
                                    alt="Banner image"
                                    class="img-fluid rounded-top"
                                />
                            </div>
                            <div
                                class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4"
                            >
                                <div
                                    class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto"
                                >
                                    <img
                                        :src="
                                            $page.props.auth.user
                                                .profile_photo_url
                                        "
                                        alt="user image"
                                        style="max-height: 120px; height: 100%"
                                        class="d-block ms-0 ms-sm-4 rounded user-profile-img"
                                    />
                                </div>
                                <div class="flex-grow-1 mt-3 mt-sm-5">
                                    <div
                                        class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4"
                                    >
                                        <div class="user-profile-info">
                                            <h4>
                                                {{ $page.props.auth.user.name }}
                                            </h4>
                                            <ul
                                                class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2"
                                            >
                                                <li class="list-inline-item">
                                                    <i
                                                        class="ti ti-color-swatch"
                                                    ></i>
                                                    {{
                                                        $page.props.auth.user
                                                            .role
                                                    }}
                                                </li>
                                                <!-- <li class="list-inline-item">
                                                    <i
                                                        class="ti ti-map-pin"
                                                    ></i>
                                                    Vatican City
                                                </li>
                                                <li class="list-inline-item">
                                                    <i
                                                        class="ti ti-calendar"
                                                    ></i>
                                                    Joined April 2021
                                                </li> -->
                                            </ul>
                                        </div>
                                        <!-- <a
                                            href="javascript:void(0)"
                                            class="btn btn-primary"
                                        >
                                            <i class="ti ti-user-check me-1"></i
                                            >Connected
                                        </a> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Header -->

                <!-- Navbar pills -->
                <div class="row">
                    <div class="col-md-12">
                        <ul class="nav nav-pills flex-column flex-sm-row mb-4">
                            <li class="nav-item">
                                <inertia-link
                                    class="nav-link"
                                    :href="route('user.profile.index')"
                                    :class="{
                                        active: route().current(
                                            'user.profile.index'
                                        ),
                                    }"
                                >
                                    <i class="ti ti-user-check me-1 ti-xs"></i>
                                    Profile
                                </inertia-link>
                            </li>
                            <li class="nav-item">
                                <inertia-link
                                    class="nav-link"
                                    :href="
                                        route('user.profile.change_password')
                                    "
                                    :class="{
                                        active: route().current(
                                            'user.profile.change_password'
                                        ),
                                    }"
                                >
                                    <i class="ti ti-user-check me-1 ti-xs"></i>
                                    Change Password
                                </inertia-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--/ Navbar pills -->

                <!-- User Profile Content -->
                <slot></slot>
                <!--/ User Profile Content -->
            </div>
            <!-- / Content -->
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
