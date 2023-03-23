<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { usePage } from "@inertiajs/vue3";
import { reactive, computed, onMounted } from "vue";

export default {
    layout: AdminLayout,
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";

const { props } = usePage();
const formObject = {
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
    status: true,
    role: null,
    profile_photo: null,
};

const routeName = "user.coach";
let {
    isLoadingComponents,
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
                <h5 class="card-title">COACHES / STAFFS</h5>
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
                    Add Coach / Staff
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
                            <label for="name">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                class="form-control"
                                v-model="form.first_name"
                                @input="form.clearErrors('first_name')"
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
                            <label for="name">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                class="form-control"
                                v-model="form.last_name"
                                @input="form.clearErrors('last_name')"
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
                            <label for="name">Email</label>
                            <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="form.email"
                                @input="form.clearErrors('email')"
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
                            <label for="name">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                class="form-control"
                                v-model="form.phone"
                                @input="form.clearErrors('phone')"
                                placeholder="Enter Phone"
                                :class="{
                                    'is-invalid': form.errors.phone,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.phone }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="role">Role</label>
                            <select2
                                :class="{ 'is-invalid': form.errors.role }"
                                v-model="form.role"
                                :options="['Coach', 'Staff']"
                            >
                            </select2>
                            <div class="invalid-feedback">
                                {{ form.errors.role }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
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
                        <div class="form-group mb-4">
                            <label for="name">Profile Photo</label>
                            <dropzone
                                collection="profile_photo"
                                v-if="isLoadingComponents"
                                :url="route('api.media.upload')"
                                model="User"
                                :value="form.profile_photo"
                                @input="form.profile_photo = $event"
                                message="Drop files here or click to upload profile photo"
                                acceptedFiles="application/pdf,image/jpeg,image/png"
                            >
                            </dropzone>
                            <div v-else>
                                <div class="dropzone" ref="dropzone">
                                    <div class="dz-message needsclick">
                                        Please Wait
                                    </div>
                                </div>
                            </div>

                            <div class="invalid-feedback">
                                {{ form.errors.first_name }}
                            </div>
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
                        <th class="sortable">Photo</th>
                        <th  class="sortable"  @click="handleServerQuery('sort', 'name')" >
                            Name
                            <i class="ti ti-arrow-up" v-if="  serverQuery.sort == 'name' && serverQuery.order == 'desc' " ></i>
                            <i class="ti ti-arrow-down" v-if=" serverQuery.sort == 'name' && serverQuery.order == 'asc' "  ></i>
                        </th>
                        <th class="sortable" @click="handleServerQuery('sort', 'role')" > Role
                            <i class="ti ti-arrow-up" v-if=" serverQuery.sort == 'role' && serverQuery.order == 'desc' " ></i>
                            <i class="ti ti-arrow-down"  v-if=" serverQuery.sort == 'role' &&  serverQuery.order == 'asc' " ></i>
                        </th>
                        <th  class="sortable" @click="handleServerQuery('sort', 'email')" >
                            Email
                            <i  class="ti ti-arrow-up" v-if=" serverQuery.sort == 'email' &&  serverQuery.order == 'desc' " ></i>
                            <i class="ti ti-arrow-down" v-if=" serverQuery.sort == 'email' && serverQuery.order == 'asc' " ></i>
                        </th>
                        <th class="sortable"  @click="handleServerQuery('sort', 'phone')" >
                            Phone
                            <i class="ti ti-arrow-up" v-if=" serverQuery.sort == 'phone' &&  serverQuery.order == 'desc' "  ></i>
                            <i class="ti ti-arrow-down" v-if=" serverQuery.sort == 'phone' &&  serverQuery.order == 'asc' " ></i>
                        </th>
                        <th class="sortable" @click="handleServerQuery('sort', 'status')" >
                            Status
                            <i  class="ti ti-arrow-up"  v-if=" serverQuery.sort == 'status' && serverQuery.order == 'desc' "  ></i>
                            <i class="ti ti-arrow-down" v-if="  serverQuery.sort == 'status' && serverQuery.order == 'asc' "></i>
                        </th>
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
                        <td>
                            <div class="avatar avatar-lg" v-if="tableData.profile_photo && tableData.profile_photo.src">
                                <img
                                    :src="tableData.profile_photo.src"
                                    alt="Avatar"
                                    class="rounded-circle"
                                />
                            </div>
                            <div class="avatar avatar-lg" v-else>
                                <img
                                    style="object-fit: cover"
                                    src="/assets/img/image_not_available.png"
                                    alt="Avatar"
                                    class="rounded-circle shadow-sm"
                                />
                            </div>
                        </td>
                        <td>{{ tableData.name }}</td>
                        <td>{{ tableData.role }}</td>
                        <td>{{ tableData.email }}</td>
                        <td>{{ tableData.phone }}</td>
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
                                    @click="handleEdit(tableData)"
                                    href="javascript:void(0);"
                                    ><i class="ti ti-pencil"></i>
                                </a>
                                <a
                                    class="btn btn-icon btn-label-danger waves-effect"
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
                            >
                                <inertia-link
                                    class="page-link"
                                    :class="{
                                        active: link.active,
                                    }"
                                    :href="link.url"
                                    :only="['data', 'params']"
                                >
                                    <span v-html="link.label"></span>
                                </inertia-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
