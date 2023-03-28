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

const routeName = "email_template";
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
        <inertia-link
          class="btn btn-link-primary btn-primary"
          type="button"
          :href="route('email_template.create')"
        >
          Add Email Template
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
                @input="handleServerQuery('perPage', $event.target.value)"
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
                @input="handleServerQuery('query', $event.target.value)"
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
              @click="handleServerQuery('sort', 'subject')"
              :serverQuery="serverQuery"
              serverQueryKey="subject"
            >
              Subject
            </table-header>

            <table-header
              @click="handleServerQuery('sort', 'status')"
              :serverQuery="serverQuery"
              serverQueryKey="status"
            >
              Status
            </table-header>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0">
          <tr v-if="paginatedData.data.length <= 0">
            <td colspan="999999" class="text-center">No item found</td>
          </tr>
          <tr v-for="tableData in paginatedData.data" :key="tableData">
            <td>{{ tableData.name }}</td>
            <td>
              {{ tableData.subject }}
            </td>

            <td>
              <span v-if="tableData.status == 1" class="badge bg-label-success"
                >Active</span
              >
              <span v-else class="badge bg-label-danger">In-active</span>
            </td>
            <td>
              <div class="d-flex gap-2">
                <a
                  class="btn btn-icon btn-label-primary waves-effect"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-class="tooltip-primary"
                  title="Edit"
                  @click="handleEdit(tableData)"
                  href="javascript:void(0);"
                  ><i class="ti ti-pencil"></i>
                </a>
                <a
                  class="btn btn-icon btn-label-danger waves-effect"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-class="tooltip-danger"
                  title="Delete"
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
