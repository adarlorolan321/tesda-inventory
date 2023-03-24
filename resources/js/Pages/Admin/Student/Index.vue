<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";

export default {
    layout: AdminLayout,
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { userInputFormat } from "@/Composables/InputFormat.js";

const formObject = {
    first_name: null,
    last_name: null,
    parent_id: null,
    dob: null,
    email: null,
    phone: null,
    gender: null,
};

const { validateForm } = useValidateForm();
const { dateFormat, timeFormat } = userInputFormat();

defineProps({
    parents: Array,
});

const routeName = "students";
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
                <h5 class="card-title">PLAYERS</h5>
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
                    Add Player
                </button>
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
                            Player
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
                            <label for=""
                                >Parent <span class="required">*</span></label
                            >
                            <select2
                                :class="{ 'is-invalid': form.errors.parent_id }"
                                v-model="form.parent_id"
                                placeholder="Select Parent"
                                @update:modelValue="
                                    form.clearErrors('parent_id')
                                "
                                :options="parents"
                            >
                            </select2>
                            <div class="invalid-feedback">
                                {{ form.errors.parent_id }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for=""
                                >First Name
                                <span class="required">*</span></label
                            >
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.first_name"
                                @input="
                                    ($event) => {
                                        form.clearErrors('first_name');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'first_name'
                                        );
                                    }
                                "
                                placeholder="Enter First Name"
                                :class="{
                                    'is-invalid': form.errors.first_name,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.first_name }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="">Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.last_name"
                                @input="
                                    ($event) => {
                                        form.clearErrors('last_name');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'last_name'
                                        );
                                    }
                                "
                                placeholder="Enter Last Name"
                                :class="{
                                    'is-invalid': form.errors.last_name,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.last_name }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="">Date Of Birth</label>
                            <flat-pickr
                                :config="dateFormat"
                                class="form-control"
                                :class="{
                                    'is-invalid': form.errors.dob,
                                }"
                                placeholder="Enter Date of Birth"
                                v-model="form.dob"
                                @input="
                                    ($event) => {
                                        form.clearErrors('dob');
                                    }
                                "
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.dob }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="">Email</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.email"
                                @input="
                                    ($event) => {
                                        form.clearErrors('email');
                                        validateForm(
                                            ['email'],
                                            form,
                                            $event.target.value,
                                            'email'
                                        );
                                    }
                                "
                                placeholder="Enter Email"
                                :class="{
                                    'is-invalid': form.errors.email,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.email }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label>Phone</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.phone"
                                @input="
                                    ($event) => {
                                        form.clearErrors('phone');
                                    }
                                "
                                placeholder="04 1234 1234"
                                :class="{
                                    'is-invalid': form.errors.phone,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.phone }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="gender">Gender </label>
                            <select2
                                :class="{ 'is-invalid': form.errors.gender }"
                                v-model="form.gender"
                                placeholder="Select Gender"
                                @update:modelValue="form.clearErrors('gender')"
                                :options="['Boy', 'Girl', 'Prefer not to say']"
                            >
                            </select2>
                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.gender"
                            >
                                {{ form.errors.gender }}
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
                            style="min-width: 200px"
                            @click="handleServerQuery('sort', 'name')"
                            :serverQuery="serverQuery"
                            serverQueryKey="name"
                        >
                            Name
                        </table-header>
                        <table-header
                            style="min-width: 200px"
                            @click="
                                handleServerQuery('sort', 'parent_name')
                            "
                            :serverQuery="serverQuery"
                            serverQueryKey="parent_name"
                        >
                            Parent Name
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
                        <td>{{ tableData.first_name }}&nbsp;{{ tableData.last_name }}</td>
                        <td>{{ tableData.parent_name }}</td>
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
