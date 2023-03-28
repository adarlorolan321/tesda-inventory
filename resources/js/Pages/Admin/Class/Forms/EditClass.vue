<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {usePage} from "@inertiajs/vue3";
import {reactive, computed, onMounted} from "vue";

export default {
    props: {
        has_back: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<script setup>
import {useCrud} from "@/Composables/Crud.js";
import {userInputFormat} from "@/Composables/InputFormat.js";
import {useValidateForm} from "@/Composables/Validate.js";
import {onMounted} from "vue";
import {userGlobalFunction} from "@/Composables/GlobalFunction.js";


const formObject = {
    id: null,
    name: null,
    service_id: null,
    venue_id: null,
    coach_id: null,
    additional_coach: [],
    start_date: null,
    end_date: null,
    start_time: null,
    end_time: null,
    repeat: false,
    capacity: null,
    days: [],
    price_type: false,
    price: null,
    tags: [],
    status: "Active",
};

const routeName = "classes";

const {dateFormat, timeFormat} = userInputFormat();
const {validateForm} = useValidateForm();
const {weekDays} = userGlobalFunction();
const {props} = usePage();

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
} = useCrud(formObject, routeName, null , {redirectTo: 'classes.update-tab',id: props.classModel ? props.classModel.id  : props.data.id});

onMounted(() => {
    if (props.classModel) {
        handleEdit(props.classModel);
    } else {
        handleEdit(props.data);
    }

});
</script>

<template>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">EDIT CLASS</h5>
            </div>
            <div class="card-action-element">
                <inertia-link
                    v-if="has_back"
                    type="button"
                    class="btn btn-link-primary btn-primary"
                    :href="route('classes.index')"
                >
                    Back
                </inertia-link>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group mb-3">
                        <label for="name"
                        >Name <span class="required">*</span></label
                        >
                        <input
                            type="text"
                            id="name"
                            class="form-control"
                            placeholder="Enter Name"
                            v-model="form.name"
                            :class="{
                                'is-invalid': form.errors.name,
                            }"
                            @input="form.clearErrors('name')"
                        />
                        <div class="invalid-feedback">
                            {{ form.errors.name }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="service_id"
                        >Service <span class="required">*</span></label
                        >
                        <select2
                            id="service_id"
                            :class="{ 'is-invalid': form.errors.service_id }"
                            v-model="form.service_id"
                            placeholder="Select Service"
                            :settings="{
                                allowClear: true,
                            }"
                            @select="form.clearErrors('service_id')"
                            :options="props.services"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.service_id"
                        >
                            {{ form.errors.service_id }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="venue_id"
                        >Venue <span class="required">*</span></label
                        >
                        <select2
                            id="venue_id"
                            :class="{ 'is-invalid': form.errors.venue_id }"
                            v-model="form.venue_id"
                            :settings="{
                                allowClear: true,
                            }"
                            placeholder="Select Venue"
                            @select="form.clearErrors('venue_id')"
                            :options="props.venues"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.venue_id"
                        >
                            {{ form.errors.venue_id }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="coach_id">Coach</label>
                        <select2
                            :class="{ 'is-invalid': form.errors.coach_id }"
                            v-model="form.coach_id"
                            :settings="{
                                allowClear: true,
                            }"
                            placeholder="Select Coach"
                            @select="form.clearErrors('coach_id')"
                            :options="props.coaches"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.coach_id"
                        >
                            {{ form.errors.coach_id }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="additional_coach">Additional Coach </label>
                        <select2
                            multiple="multiple"
                            id="additional_coach"
                            :class="{
                                'is-invalid': form.errors.additional_coach,
                            }"
                            v-model="form.additional_coach"
                            :settings="{
                                allowClear: true,
                            }"
                            placeholder="Select Additional Coach"
                            @select="form.clearErrors('additional_coach')"
                            :options="props.coaches"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.additional_coach"
                        >
                            {{ form.errors.additional_coach }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="start_time">Start Date <span class="required">*</span></label>
                        <flat-pickr
                            id="start_date"
                            :config="dateFormat({minDate: 'today'})"
                            :class="{ 'is-invalid': form.errors.start_date }"
                            class="form-control"
                            placeholder="Select Start Date"
                            v-model="form.start_date"
                        />
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.start_date"
                        >
                            {{ form.errors.start_date }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="start_time">Start Time</label>
                        <flat-pickr
                            id="start_time"
                            :config="timeFormat"
                            :class="{ 'is-invalid': form.errors.start_time }"
                            class="form-control"
                            placeholder="Select End Time"
                            v-model="form.start_time"
                        />
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.start_time"
                        >
                            {{ form.errors.start_time }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="end_date">End Date</label>
                        <flat-pickr
                            id="end_date"
                            :disabled="!form.start_date"
                            :config="dateFormat( {minDate: form.start_date})"
                            :class="{ 'is-invalid': form.errors.end_date }"
                            class="form-control"
                            placeholder="Select End Time"
                            v-model="form.end_date"
                        />
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.end_date"
                        >
                            {{ form.errors.end_date }}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group mb-3">
                        <label for="end_time">End Time</label>
                        <flat-pickr
                            id="end_time"
                            :config="timeFormat"
                            :class="{ 'is-invalid': form.errors.end_time }"
                            class="form-control"
                            placeholder="Select End Time"
                            v-model="form.end_time"
                        />
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.end_time"
                        >
                            {{ form.errors.end_time }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3 d-flex gap-4">
                    <div class="form-group">
                        <div style="white-space: nowrap" class=" ">
                            Payment Type
                        </div>
                        <label id="price_type" class="switch">
                            <input
                                id="price_type"
                                type="checkbox"
                                :class="{
                                    'is-invalid': form.errors.price_type,
                                }"
                                v-model="form.price_type"
                                :checked="form.price_type"
                                @input="
                                    ($event) => {
                                        form.clearErrors('price_type', 'price');
                                        form.price = null;
                                    }
                                "
                                class="switch-input"
                            />
                            <span class="switch-toggle-slider">
                                <span class="switch-on"></span>
                                <span class="switch-off"></span>
                            </span>
                            <span class="switch-label">{{
                                    form.price_type == 1 ? "Paid" : "Free"
                                }}</span>
                        </label>
                    </div>
                    <div style="width: 100%" class="form-group">
                        <label for="price"
                        >Price
                            <span class="required" v-if="form.price_type"
                            >*</span
                            ></label
                        >
                        <input
                            id="price"
                            type="number"
                            :disabled="!form.price_type"
                            class="form-control"
                            placeholder="Enter Price"
                            v-model="form.price"
                            :class="{ 'is-invalid': form.errors.price }"
                            @input="
                                ($event) => {
                                    form.clearErrors('price');
                                    validateForm(
                                        ['number'],
                                        form,
                                        $event.target.value,
                                        'price'
                                    );
                                }
                            "
                        />
                        <div class="invalid-feedback">
                            {{ form.errors.price }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex flex-row gap-4 mb-3">
                    <div class="form-group">
                        <div class=" ">Repeat</div>
                        <label for="repeat" class="switch">
                            <input
                                id="repeat"
                                type="checkbox"
                                :class="{ 'is-invalid': form.errors.repeat }"
                                v-model="form.repeat"
                                :checked="form.repeat"
                                @input="
                                    ($event) => {
                                        form.clearErrors('repeat', 'days');
                                        form.days = null;
                                    }
                                "
                                class="switch-input"
                            />
                            <span class="switch-toggle-slider">
                                <span class="switch-on"></span>
                                <span class="switch-off"></span>
                            </span>
                            <span class="switch-label">{{
                                    form.repeat == 1 ? "Yes" : "No"
                                }}</span>
                        </label>
                    </div>
                    <div style="width: 100%" class="form-group">
                        <label for="days"
                        >Days
                            <span class="required" v-if="form.repeat"
                            >*</span
                            ></label
                        >
                        <select2
                            id="days"
                            :disabled="form.repeat == 0"
                            :class="{ 'is-invalid': form.errors.days }"
                            v-model="form.days"
                            multiple="multiple"
                            placeholder="Select Days"
                            :settings="{
                                allowClear: true,
                            }"
                            @select="form.clearErrors('days')"
                            :options="weekDays"
                        >
                        </select2>
                        <div class="v-invalid-feedback" v-if="form.errors.days">
                            {{ form.errors.days }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="capacity">Capacity</label>
                        <input
                            id="capacity"
                            type="number"
                            class="form-control"
                            placeholder="Enter Capacity"
                            v-model="form.capacity"
                            :class="{
                                'is-invalid': form.errors.capacity,
                            }"
                            @input="
                                ($event) => {
                                    form.clearErrors('capacity');
                                    validateForm(
                                        ['number'],
                                        form,
                                        $event.target.value,
                                        'capacity'
                                    );
                                }
                            "
                        />
                        <div class="invalid-feedback">
                            {{ form.errors.capacity }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="tags">Tags </label>
                        <select2
                            id="tags"
                            multiple
                            :class="{ 'is-invalid': form.errors.tags }"
                            v-model="form.tags"
                            :settings="{
                                allowClear: true,
                                tags: true,
                                minimumResultsForSearch: -1,
                            }"
                            placeholder="Select tags"
                            @select="form.clearErrors('tags')"
                            :options="form.tags"
                        >
                        </select2>
                        <div class="v-invalid-feedback" v-if="form.errors.tags">
                            {{ form.errors.tags }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="status"
                        >Status <span class="required">*</span></label
                        >
                        <select2
                            id="status"
                            :class="{ 'is-invalid': form.errors.status }"
                            v-model="form.status"
                            :settings="{
                                allowClear: true,
                                minimumResultsForSearch: -1,
                            }"
                            placeholder="Select Status"
                            @select="form.clearErrors('status')"
                            :options="['Active', 'Closed', 'Archive']"
                        >
                        </select2>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.status"
                        >
                            {{ form.errors.status }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <button
                        class="btn btn-primary"
                        @click="createPromise"
                        :disabled="form.processing || form.hasErrors"
                        v-if="!form.id"
                    >
                        <span
                            v-if="form.processing"
                            class="spinner-border me-1"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Save
                    </button>
                    <button
                        class="btn btn-primary"
                        @click="updatePromise"
                        :disabled="form.processing || form.hasErrors"
                        v-else
                    >
                        <span
                            v-if="form.processing"
                            class="spinner-border me-1"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

