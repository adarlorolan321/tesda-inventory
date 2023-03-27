<script>


export default {
    name: 'SessionTab'
};
</script>

<script setup>
import {useCrud} from "@/Composables/Crud.js";
import {useValidateForm} from "@/Composables/Validate.js";
import {userInputFormat} from "@/Composables/InputFormat.js";
import {Head, usePage} from "@inertiajs/vue3";
import {computed} from 'vue'
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat)

const {validateForm} = useValidateForm();
const {dateFormat, timeFormat} = userInputFormat();
const classModel = computed(() => {
    return usePage().props.classModel
})
const {props} = usePage();

const routeName = "classes.sessions";
const formObject = {
    class_id: classModel.value.id,
    coach_id: null,
    date: null,
    type: null,
    start_time: null,
    end_time: null,
    additional_coaches: null,
    status: null,
};

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
} = useCrud(formObject, routeName, {
    routeName: 'classes.sessions-tab',
    routeId: classModel.value.id
});
</script>

<template>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Sessions</h5>
            </div>
            <div class="card-action-element">


                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offCanvasForm"
                    data-bs-backdrop="static"
                    aria-labelledby="offCanvasFormLabel"
                >
                    <div class="offcanvas-header">
                        <h5 id="offCanvasFormLabel" class="offcanvas-title">
                            {{ formState == "create" ? "Add" : "Update" }}
                            Session
                        </h5>
                        <button
                            type="button"
                            class="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            v-if="!form.processing"
                        ></button>
                    </div>
                    <div class="offcanvas-body mt-4 mx-0 flex-grow-0">
                        <div class="form-group mb-3">
                            <div class="form-group mb-3">
                                <label for="coach_id">Coach <span class="required">*</span></label>
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
                        <div class="form-group mb-3">
                            <label for="additional_coaches">Additional Coach <span class="required">*</span></label>
                            <select2
                                multiple="multiple"
                                id="additional_coaches"
                                :class="{
                                'is-invalid': form.errors.additional_coaches,
                            }"
                                v-model="form.additional_coaches"
                                :settings="{
                                allowClear: true,
                            }"
                                placeholder="Select Additional Coach"
                                @select="form.clearErrors('additional_coaches')"
                                :options="props.coaches"
                            >
                            </select2>
                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.additional_coaches"
                            >
                                {{ form.errors.additional_coaches }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="start_time">Date <span class="required">*</span></label>
                            <flat-pickr
                                id="date"
                                :config="dateFormat"
                                :class="{ 'is-invalid': form.errors.date }"
                                class="form-control"
                                placeholder="Select Start Date"
                                v-model="form.date"
                            />
                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.date"
                            >
                                {{ form.errors.date }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="start_time">Start Time <span class="required">*</span></label>
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
                        <div class="form-group mb-3">
                            <label for="end_time">End Time <span class="required">*</span></label>
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
                        <div class="form-group mb-3">
                            <label for="type"
                            >Type <span class="required">*</span></label
                            >
                            <select2
                                id="type"
                                :class="{ 'is-invalid': form.errors.type }"
                                v-model="form.type"
                                :settings="{
                                allowClear: true,
                                minimumResultsForSearch: -1,
                            }"
                                placeholder="Select Type"
                                @select="form.clearErrors('type')"
                                :options="['Regular']"
                            >
                            </select2>
                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.type"
                            >
                                {{ form.errors.type }}
                            </div>
                        </div>
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
                                :options="['Scheduled','Past','Completed']"
                            >
                            </select2>
                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.status"
                            >
                                {{ form.errors.status }}
                            </div>
                        </div>

                        <button
                            class="btn btn-primary"
                            @click="createPromise"
                            :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'create'"
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
                            v-if="formState == 'update'"
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
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <div class="d-flex align-items-center gap-2">
                        <div class="w-auto">Show</div>
                        <div class="flex-1">
                            <select
                                class="form-select"
                                :value="serverQuery.perPage"
                                @input="
                                    handleServerQuery(
                                        'perPage',
                                        $event.target.value
                                    )
                                "
                            >
                                <option
                                    v-for="i in [5, 10, 25, 50, 100]"
                                    :value="String(i)"
                                    :key="i"
                                >
                                    {{ i }}
                                </option>
                            </select>
                        </div>
                        <div class="w-auto">entries</div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="d-flex gap-2 align-items-center">
                        <div class="w-auto">Search:</div>
                        <div class="flex-1">
                            <input
                                type="search"
                                placeholder="Search"
                                class="form-control"
                                :value="serverQuery.query"
                                @input="
                                    handleServerQuery(
                                        'query',
                                        $event.target.value
                                    )
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead class="table-light">
                <tr>
                    <table-header
                        style="min-width: 200px; width: 30%"
                        @click="handleServerQuery('sort', 'date')"
                        :serverQuery="serverQuery"
                        serverQueryKey="date"
                    >
                        Date
                    </table-header>
                    <table-header
                        style="min-width: 200px; width: 30%"
                        @click="handleServerQuery('sort', 'start_time')"
                        :serverQuery="serverQuery"
                        serverQueryKey="start_time">
                        Time
                    </table-header>
                    <table-header
                        style="min-width: 200px; width: 30%"
                        @click="handleServerQuery('sort', 'end_time')"
                        :serverQuery="serverQuery"
                        serverQueryKey="end_time">
                        Time
                    </table-header>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                <tr v-if="paginatedData.data.length <= 0">
                    <td colspan="999999" class="text-center">
                        No item found
                    </td>
                </tr>
                <tr
                    v-for="tableData in paginatedData.data"
                    :key="tableData"
                >
                    <td>{{ dayjs(tableData.date).format('DD/MM/YYYY') }}</td>
                    <td>{{ tableData.start_time }}</td>
                    <td>{{ tableData.end_time }}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <a
                                class="btn btn-icon btn-label-primary waves-effect"
                                @click="handleEdit(tableData)"
                                href="javascript:void(0);"
                            ><i class="ti ti-pencil"></i>
                            </a>
                            <a
                                class="btn btn-icon btn-label-danger waves-effect"
                                id="confirm-text"
                                href="javascript:void(0);"
                                @click="deletePromise(tableData.id)"
                            ><i class="ti ti-trash"></i>
                            </a>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div
            class="card-footer py-3 border-top"
            v-if="paginatedData && paginatedData.meta.links"
        >
            <div class="row justify-content-between">
                <div class="col-auto">
                    <div class="table_info">
                        Showing {{ paginatedData.meta.from }} to
                        {{ paginatedData.meta.to }} of
                        {{ paginatedData.meta.total }} entries
                    </div>
                </div>
                <div class="col-auto">
                    <nav
                        class="dataTables_paginate paging_simple_numbers"
                        aria-label="Page navigation example"
                    >
                        <ul class="pagination mb-0">
                            <li
                                class="page-item"
                                v-for="link in paginatedData.meta.links"
                                :key="link"
                            >
                                <component
                                    :is="link.url ? 'inertia-link' : 'button'"
                                    class="page-link"
                                    :class="{
                                        active: link.active,
                                    }"
                                    :href="link.url"
                                    :only="['data', 'params']"
                                >
                                    <span v-html="link.label"></span>
                                </component>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
