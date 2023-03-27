<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { usePage, Head } from "@inertiajs/vue3";
const { props } = usePage();
const formObject = {
    name: null,
    code: null,
};

const routeName = "classes";
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
    <Head title="Class"></Head>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">CLASS</h5>
            </div>
            <div class="card-action-element">
                <inertia-link
                    type="button"
                    class="btn btn-link-primary btn-primary"
                    :href="route('classes.create')"
                >
                    Add Class
                </inertia-link>
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
                            @click="handleServerQuery('sort', 'name')"
                            :serverQuery="serverQuery"
                            serverQueryKey="name"
                        >
                            Name
                        </table-header>
                        <table-header
                            @click="handleServerQuery('sort', 'days')"
                            :serverQuery="serverQuery"
                            serverQueryKey="days"
                        >
                            Day
                        </table-header>
                        <table-header
                            @click="handleServerQuery('sort', 'service_name')"
                            :serverQuery="serverQuery"
                            serverQueryKey="service_name"
                        >
                            Service
                        </table-header>
                        <table-header
                            @click="handleServerQuery('sort', 'coach_name')"
                            :serverQuery="serverQuery"
                            serverQueryKey="coach_name"
                        >
                            Coach
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
                        <td style="width: 60%">
                            <inertia-link :href="route('classes.sessions-tab',tableData.id)">
                                {{ tableData.name }}
                            </inertia-link>
                        </td>
                        <td>
                            <span v-for="days in tableData.days" :key="days" class="badge bg-label-info me-2" >{{days}}</span>
                        </td>
                        <td>{{ tableData.service_name }}</td>
                        <td>{{ tableData.coach_name }}</td>
                        <td>
                            <div class="d-flex gap-2">
                                <inertia-link
                                    class="btn btn-icon btn-label-info waves-effect"
                                    :href="route('classes.sessions-tab', tableData.id)"
                                ><i class="ti ti-eye"></i>
                                </inertia-link>
                                <inertia-link
                                    class="btn btn-icon btn-label-primary waves-effect"
                                    :href="route('classes.edit', tableData.id)"
                                    ><i class="ti ti-pencil"></i>
                                </inertia-link>
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
