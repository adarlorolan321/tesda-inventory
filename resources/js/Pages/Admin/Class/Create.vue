<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {usePage} from "@inertiajs/vue3";
import {reactive, computed, onMounted} from "vue";

export default {
    layout: AdminLayout,
};
</script>

<script setup>
import {useCrud} from "@/Composables/Crud.js";
import {userInputFormat} from "@/Composables/InputFormat.js";

const {props} = usePage();
const formObject = {
    name: null,
    code: null,
};

const routeName = "classes"

const {dateFormat, timeFormat} = userInputFormat();
let {
    paginatedData,
    form,
    createPromise,
    updatePromise,
    deletePromise,
    handleCreate,
    serverQuery,
    handleServerQuery,
    handleEdit,
    formState,
} = useCrud(formObject, routeName);
</script>

<template>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">ADD CLASS</h5>
            </div>
            <div class="card-action-element">
                <button
                    class="btn btn-primary"
                    type="button"
                    @click="handleCreate"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offCanvasForm"
                    aria-controls="offCanvasForm"
                >
                    Back
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group mb-3">
                        <label for="">Name <span class="required">*</span></label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            v-model="form.code"
                            :class="{
                                    'is-invalid': form.errors.code,
                                }"
                            @input="form.clearErrors('code')"
                        />
                        <div class="invalid-feedback">
                            {{ form.errors.code }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="role"
                        >Service <span class="required">*</span></label
                        >
                        <select2
                            :class="{ 'is-invalid': form.errors.role }"
                            v-model="form.role"
                            placeholder="Select Service"
                            :settings="{
                                allowClear: true,
                                minimumResultsForSearch: -1,
                            }"
                            @select="form.clearErrors('role')"
                            :options="['Coach', 'Admin']"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.role"
                        >
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="role"
                        >Venue <span class="required">*</span></label
                        >
                        <select2
                            :class="{ 'is-invalid': form.errors.role }"
                            v-model="form.role"
                            :settings="{
                                allowClear: true,
                                minimumResultsForSearch: -1,
                            }"
                            placeholder="Select Venue"
                            @select="form.clearErrors('role')"
                            :options="['Coach', 'Admin']"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.role"
                        >
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="role"
                        >Coach <span class="required">*</span></label
                        >
                        <select2
                            :class="{ 'is-invalid': form.errors.role }"
                            v-model="form.role"
                            :settings="{
                                allowClear: true,
                                minimumResultsForSearch: -1,
                            }"
                            placeholder="Select Coach"
                            @select="form.clearErrors('role')"
                            :options="['Coach', 'Admin']"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.role"
                        >
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="role"
                        >Additional Coach <span class="required">*</span></label
                        >
                        <select2
                            :class="{ 'is-invalid': form.errors.role }"
                            v-model="form.role"
                            :settings="{
                                allowClear: true,
                                minimumResultsForSearch: -1,
                            }"
                            placeholder="Select Additional Coach"
                            @select="form.clearErrors('role')"
                            :options="['Coach', 'Admin']"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.role"
                        >
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="role">Start Date <span class="required">*</span></label>
                        <flat-pickr :config="dateFormat" :class="{ 'is-invalid': form.errors.role }" class="form-control"
                                    placeholder="Select Start Date" v-model="date"/>
                        <div class="v-invalid-feedback" v-if="form.errors.role">
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="role">Start Time <span class="required">*</span></label>
                        <flat-pickr :config="timeFormat"
                                    :class="{ 'is-invalid': form.errors.role }" class="form-control"
                                    placeholder="Select End Time" v-model="date"/>
                        <div class="v-invalid-feedback" v-if="form.errors.role">
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="role">End Date <span class="required">*</span></label>
                        <flat-pickr :config="dateFormat"
                                    :class="{ 'is-invalid': form.errors.role }" class="form-control"
                                    placeholder="Select End Date" v-model="date"/>
                        <div class="v-invalid-feedback" v-if="form.errors.role">
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="role">End Time <span class="required">*</span></label>
                        <flat-pickr :config="timeFormat"
                                    :class="{ 'is-invalid': form.errors.role }" class="form-control"
                                    placeholder="Select End Time" v-model="date"/>
                        <div class="v-invalid-feedback" v-if="form.errors.role">
                            {{ form.errors.role }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
