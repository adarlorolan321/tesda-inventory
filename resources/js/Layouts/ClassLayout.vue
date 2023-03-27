<script setup>
import {usePage, Head} from "@inertiajs/vue3";
import {computed} from "vue";

const {props} = usePage();
const classModel = computed(() => usePage().props.classModel);
</script>

<template>
    <Head title="Profile"></Head>
    <AdminLayout>
        <div class="">
            <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light">Class / Details /</span>
                {{ classModel?.name }}
            </h4>
            <div class="row">
                <!-- User Sidebar -->
                <div class="col-xl-3 col-lg-4 col-md-4 order-1 order-md-0">
                    <!-- User Card -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="user-avatar-section">
                                <div
                                    class="d-flex align-items-center flex-column"
                                >
                                    <div class="user-info text-center">
                                        <h4 class="mb-2">{{ classModel?.name }}</h4>
                                        <span
                                            class="badge bg-label-secondary mt-1"
                                        >{{ classModel?.role }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <p class="mt-4 small text-uppercase text-muted">
                                Details
                            </p>
                            <div class="info-container">
                                <table>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Date:</span></td>
                                        <td class="pb-2"><span>{{ classModel?.start_date }} - {{ classModel?.end_date }}</span></td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Time:</span></td>
                                        <td class="pb-2"><span>{{ classModel?.start_time }} - {{ classModel?.end_time }}</span></td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Status:</span></td>
                                        <td class="pb-2">
                                             <span class="badge" :class="{
                                                 'bg-label-success': classModel?.status == 'Active',
                                                 'bg-label-warning': classModel?.status == 'Closed',
                                                 'bg-label-danger':classModel?.status == 'Archived'}"
                                             >{{ classModel.status }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2 ">Days:</span></td>
                                        <td class="pb-2">
                                             <span v-for="days in classModel?.days" class="badge bg-label-info me-1 mb-1" >{{ days }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Repeat:</span></td>
                                        <td class="pb-2"><span class="badge" :class="{
                                                 'bg-label-success': classModel?.repeat == 1,
                                                 'bg-label-danger': classModel?.repeat == 0}"
                                        >{{ classModel?.repeat ? 'Yes' : 'No'}}</span></td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Capacity:</span></td>
                                        <td class="pb-2">
                                            <span>{{classModel?.capacity > 0 ? classModel?.capacity : '-'}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Price:</span></td>
                                        <td class="pb-2">
                                            <span v-if="classModel?.price > 0">{{classModel?.price}}</span>
                                            <span v-else class="badge bg-label-success">Free</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Venue:</span></td>
                                        <td class="pb-2">
                                            <span>{{classModel?.venue ? classModel?.venue.name : '-'}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Coach:</span></td>
                                        <td class="pb-2">
                                            <span>{{classModel?.coach ? classModel?.coach.name : '-'}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Additional Coach:</span></td>
                                        <td class="pb-2">
                                            <span v-for="coach in classModel?.additional_coach_name" class="badge bg-label-info me-1 mb-1" >{{ coach }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-2"><span class="fw-semibold me-2">Tags:</span></td>
                                        <td class="pb-2">
                                            <span v-for="tags in classModel?.tags" class="badge bg-label-warning me-1 mb-1" >{{ tags }}</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- /User Card -->
                </div>
                <!--/ User Sidebar -->

                <!-- User Content -->
                <div class="col-xl-9 col-lg-8 col-md-8 order-0 order-md-1">
                    <!-- User Pills -->
                    <ul class="nav nav-pills flex-column flex-md-row mb-4">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                :class="{'active' : route().current('classes.sessions-tab')}"
                                :href="route('classes.sessions-tab',classModel.id)"
                            ><i class="ti ti-calendar-event ti-xs me-1"></i
                            >Sessions</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                            ><i class="ti ti-clipboard ti-xs me-1"></i
                            >Enrolments</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                            ><i class="ti ti-hourglass-empty ti-xs me-1"></i
                            >Waitlist</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                            ><i class="ti ti-report-medical ti-xs me-1"></i
                            >Trials</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                            ><i class="ti ti-book ti-xs me-1"></i
                            >Documents</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                            ><i class="ti ti-mail ti-xs me-1"></i
                            >Confirmation Email</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);"
                            ><i class="ti ti-code ti-xs me-1"></i
                            >Embedded Code</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"   :class="{'active' : route().current('classes.update-tab')}" :href="route('classes.update-tab',classModel.id)"
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

