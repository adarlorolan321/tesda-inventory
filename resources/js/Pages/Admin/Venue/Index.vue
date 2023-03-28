<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";

export default {
    layout: AdminLayout,
};
</script>

<script setup>
import { usePage, Head } from "@inertiajs/vue3";
import { useCrud } from "@/Composables/Crud.js";

const formObject = {
    name: null,
    contact_first_name: null,
    contact_last_name: null,
    contact_email: null,
    contact_phone: null,
    status: false,
};

const routeName = "settings.venues";
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
    <Head title="Venues"></Head>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">VENUES</h5>
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
                    Add Venue
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
                            Venue
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
                            <label for="">Venue Name <span class="required">*</span></label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.name"
                                @input="form.clearErrors('name')"
                                placeholder="Enter name"
                                :class="{
                                    'is-invalid': form.errors.name,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="">Contact First Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Contact First Name"
                                v-model="form.contact_first_name"
                                :class="{
                                    'is-invalid':
                                        form.errors.contact_first_name,
                                }"
                                @input="form.clearErrors('contact_first_name')"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.contact_first_name }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="">Contact Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Contact Last Name"
                                v-model="form.contact_last_name"
                                :class="{
                                    'is-invalid': form.errors.contact_last_name,
                                }"
                                @input="form.clearErrors('contact_last_name')"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.contact_last_name }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="">Contact Email</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Contact Email"
                                v-model="form.contact_email"
                                :class="{
                                    'is-invalid': form.errors.contact_email,
                                }"
                                @input="form.clearErrors('contact_email')"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.contact_email }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Contact Phone</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Contact Phone"
                                v-model="form.contact_phone"
                                :class="{
                                    'is-invalid': form.errors.contact_phone,
                                }"
                                @input="form.clearErrors('contact_phone')"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.contact_phone }}
                            </div>
                        </div>
                        <div class="form-group mb-5">
                            <div class=" ">Status</div>
                            <label class="switch">
                                <input
                                    type="checkbox"
                                    v-model="form.status"
                                    :checked="form.status"
                                    class="switch-input"
                                />
                                <span class="switch-toggle-slider">
                                    <span class="switch-on"></span>
                                    <span class="switch-off"></span>
                                </span>
                                <span
                                    class="switch-label"
                                    v-if="form.status == 1"
                                    >Active</span
                                >
                                <span class="switch-label" v-else
                                    >In-active</span
                                >
                            </label>
                        </div>

                        <button
                            class="btn btn-primary"
                            @click="createPromise"
                            :disabled="form.processing"
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
                            :disabled="form.processing"
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
                        <div class="flex-1">
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" id="basic-addon-search31"><i class="ti ti-search"></i></span>
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
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <table-header
                            @click="handleServerQuery('sort', 'name')"
                            :serverQuery="serverQuery"
                            serverQueryKey="name"
                        >
                            Venue Name
                        </table-header>
                        <table-header
                            @click="
                                handleServerQuery('sort', 'contact_first_name')
                            "
                            :serverQuery="serverQuery"
                            serverQueryKey="contact_first_name"
                        >
                            Contact Name
                        </table-header>
                        <table-header
                            @click="handleServerQuery('sort', 'contact_phone')"
                            :serverQuery="serverQuery"
                            serverQueryKey="contact_phone"
                        >
                            Phone Number
                        </table-header>
                        <table-header
                            @click="handleServerQuery('sort', 'contact_email')"
                            :serverQuery="serverQuery"
                            serverQueryKey="contact_email"
                        >
                            Email
                        </table-header>
                        <th>Embed Code</th>
                        <table-header
                            @click="handleServerQuery('sort', 'status')"
                            :serverQuery="serverQuery"
                            serverQueryKey="status"
                        >
                            Status
                        </table-header>
                        <th style= "width: 100px;">Actions</th>
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
                        <td>{{ tableData.name }}</td>
                        <td>
                            {{ tableData.contact_first_name }}
                            {{ tableData.contact_last_name }}
                        </td>
                        <td>{{ tableData.contact_phone }}</td>
                        <td>{{ tableData.contact_email }}</td>
                        <td class="">
                            <a href="#"
                                ><i
                                    class="fa-regular fa-copy ms-4"
                                    style="font-size: 22px"
                                ></i
                            ></a>
                        </td>
                        <td>
                            <span
                                v-if="tableData.status == 1"
                                class="badge bg-label-success"
                                >Active</span
                            >
                            <span v-else class="badge bg-label-danger"
                                >In-active</span
                            >
                        </td>
                        <td>
                            <div class="d-flex gap-2">
                                <a
                                    class="btn btn-icon btn-label-primary waves-effect"
                                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-primary" title="Edit"
                                    @click="handleEdit(tableData)"
                                    href="javascript:void(0);"
                                    ><i class="ti ti-pencil" ></i>
                                </a>
                                <a
                                    class="btn btn-icon btn-label-danger waves-effect"
                                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-danger" title="Delete"
                                    id="confirm-text"
                                    href="javascript:void(0);"
                                    @click="deletePromise(tableData.id)"
                                    ><i class="ti ti-trash" ></i>
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
