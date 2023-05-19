<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
  layout: AdminLayout,
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage, Head } from "@inertiajs/vue3";
const { props } = usePage();
const formObject = {
  full_name: null,
  supplier_id_number: null,
  email: null,
  barangay: null,
  city: null,
  district: null,
};
const paginatedDataWithoutCircularRef = JSON.parse(JSON.stringify(props.data.data));
const print = () => {
  axios
    .post(
      "print_checkout",
      {
        paginatedData: paginatedDataWithoutCircularRef,
      },
      {
        responseType: "blob", // set response type to blob
      }
    )
    .then((response) => {
      // Create a URL for the blob object
      const url = URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );

      // Open the URL in a new tab
      window.open(url, "_blank");

      // Release the URL object when it's no longer needed
      setTimeout(() => URL.revokeObjectURL(url), 0);
    })
    .catch((error) => {
      console.log(error);
    });
};

const { validateForm } = useValidateForm();

const routeName = "checkout_histories";
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
  <Head title="Coaches/Staff"></Head>

  <div class="card card-action">
    <div class="card-header">
      <div class="card-action-title align-items-center">
        <h5 class="card-title">Checkout History</h5>
      </div>
      <a @click="print" target="_blank" class="btn btn-primary" type="button">
        Print History
      </a>
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
                <option v-for="i in [5, 10, 25, 50, 100]" :value="String(i)">
                  {{ i }}
                </option>
              </select>
            </div>
            <div class="w-auto">entries</div>
          </div>
        </div>
        <div class="col-auto">
          <div class="d-flex flex-row gap-3">
            <div class="d-flex gap-2 align-items-center">
              <div class="input-group input-group-merge">
                <input
                  type="date"
                  placeholder="Search"
                  class="form-control"
                  :value="serverQuery.query_date_from"
                  @input="handleServerQuery('query_date_from', $event.target.value)"
                />
              </div>
              -
              <div class="input-group input-group-merge">
                <input
                  type="date"
                  placeholder="Search"
                  class="form-control"
                  :value="serverQuery.query_date_to"
                  @input="handleServerQuery('query_date_to', $event.target.value)"
                />
              </div>
              <div class="input-group input-group-merge">
                <span class="input-group-text" id="basic-addon-search31"
                  ><i class="ti ti-search"></i
                ></span>
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
    </div>
    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead class="table-light" style="min-width: 200px">
          <tr>
            <th class="sortable" @click="handleServerQuery('sort', 'full_name')">
              Supply
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th
              v-if="props.auth.user.role == 'Admin'"
              class="sortable"
              @click="handleServerQuery('sort', 'full_name')"
            >
              Checkout By
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th class="sortable" @click="handleServerQuery('sort', 'full_name')">
              Position
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'asc'"
              ></i>
            </th>

            <th class="sortable" @click="handleServerQuery('sort', 'full_name')">
              Quantity
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th class="sortable" @click="handleServerQuery('sort', 'full_name')">
              Date Checkout
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'full_name' && serverQuery.order == 'asc'"
              ></i>
            </th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0">
          <tr v-if="paginatedData.data.length <= 0">
            <td colspan="999999" class="text-center">No item found</td>
          </tr>
          <tr v-for="tableData in paginatedData.data" :key="tableData">
            <td>{{ tableData.supply.label }}</td>
            <td v-if="props.auth.user.role == 'Admin'">{{ tableData.user.name }}</td>
            <td>{{ tableData.position }}</td>
            <td>{{ tableData.quantity }}</td>

            <td>{{ new Date(tableData.created_at).toLocaleDateString("en-GB") }}</td>
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
            Showing {{ paginatedData.meta.from }} to {{ paginatedData.meta.to }} of
            {{ paginatedData.meta.total }} entries
          </div>
        </div>
        <div class="col-auto">
          <nav
            class="dataTables_paginate paging_simple_numbers"
            aria-label="Page navigation example"
          >
            <ul class="pagination mb-0">
              <li class="page-item" v-for="link in paginatedData.meta.links">
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
