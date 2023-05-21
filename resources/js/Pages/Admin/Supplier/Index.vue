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

const { validateForm } = useValidateForm();
const paginatedDataWithoutCircularRef = JSON.parse(JSON.stringify(props.data.data));
const print = () => {
  axios
    .post(
      "/print_supplier",
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
const routeName = "user.suppliers";
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
      <div class="mr-2 card-action-title align-items-center">
        <h5 class="card-title">Supplier</h5>
      </div>
      <button @click="print" target="_blank" class="me-2 btn btn-primary" type="button">
        Print Supplier
      </button>
    
      <div class="card-action-element">
        <button
          class="btn btn-primary"
          type="button"
          @click="handleCreate"
          data-bs-toggle="offcanvas"
          data-bs-target="#offCanvasForm"
          aria-controls="offCanvasForm"
        >
          Add Supplier
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
              Supplier
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
              <label for="name">Full Name <span class="required">*</span></label>
              <input
                type="text"
                id="full_name"
                class="form-control"
                v-model="form.full_name"
                @input="
                  ($event) => {
                    form.clearErrors('full_name');
                    validateForm(['required'], form, $event.target.value, 'full_name');
                  }
                "
                placeholder="Enter Full Name"
                :class="{
                  'is-invalid': form.errors.full_name,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.full_name }}
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="name">Supplier ID No. <span class="required">*</span></label>
              <input
                type="text"
                id="full_name"
                class="form-control"
                v-model="form.supplier_id_number"
                @input="
                  ($event) => {
                    form.clearErrors('supplier_id_number');
                    validateForm(
                      ['required'],
                      form,
                      $event.target.value,
                      'supplier_id_number'
                    );
                  }
                "
                placeholder="Enter Supplier ID No."
                :class="{
                  'is-invalid': form.errors.supplier_id_number,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.supplier_id_number }}
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="name">Email <span class="required">*</span></label>
              <input
                type="email"
                id="full_name"
                class="form-control"
                v-model="form.email"
                @input="
                  ($event) => {
                    form.clearErrors('email');
                    validateForm(['required'], form, $event.target.value, 'email');
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
              <label for="name">Barangay<span class="required">*</span></label>
              <input
                type="text"
                id="full_name"
                class="form-control"
                v-model="form.barangay"
                @input="
                  ($event) => {
                    form.clearErrors('barangay');
                    validateForm(['required'], form, $event.target.value, 'barangay');
                  }
                "
                placeholder="Enter Barangay"
                :class="{
                  'is-invalid': form.errors.barangay,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.barangay }}
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="name">City<span class="required">*</span></label>
              <input
                type="text"
                id="full_name"
                class="form-control"
                v-model="form.city"
                @input="
                  ($event) => {
                    form.clearErrors('city');
                    validateForm(['required'], form, $event.target.value, 'city');
                  }
                "
                placeholder="Enter City"
                :class="{
                  'is-invalid': form.errors.city,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.city }}
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="name">District<span class="required">*</span></label>
              <input
                type="text"
                id="full_name"
                class="form-control"
                v-model="form.district"
                @input="
                  ($event) => {
                    form.clearErrors('district');
                    validateForm(['required'], form, $event.target.value, 'district');
                  }
                "
                placeholder="Enter District"
                :class="{
                  'is-invalid': form.errors.district,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.district }}
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
              <div class="flex-1">
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
    </div>
    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead class="table-light" style="min-width: 200px">
          <tr>
            <th class="sortable" @click="handleServerQuery('sort', 'full_name')">
              Full Name
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
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'supplier_id_number')"
            >
              Supplier ID No.
              <i
                class="ti ti-arrow-up"
                v-if="
                  serverQuery.sort == 'supplier_id_number' && serverQuery.order == 'desc'
                "
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="
                  serverQuery.sort == 'supplier_id_number' && serverQuery.order == 'asc'
                "
              ></i>
            </th>

            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'email')"
            >
              Email
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'email' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'email' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'barangay')"
            >
              Barangay
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'barangay' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'barangay' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'city')"
            >
              City
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'city' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'city' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'district')"
            >
              District
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'district' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'district' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th style="width: 150px">Actions</th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0">
          <tr v-if="paginatedData.data.length <= 0">
            <td colspan="999999" class="text-center">No item found</td>
          </tr>
          <tr v-for="tableData in paginatedData.data" :key="tableData">
            <td>{{ tableData.full_name }}</td>
            <td>{{ tableData.supplier_id_number }}</td>
            <td>{{ tableData.email }}</td>
            <td>{{ tableData.barangay }}</td>
            <td>{{ tableData.city }}</td>
            <td>{{ tableData.district }}</td>

            <td>
              <div class="d-flex gap-2">
                <button
                  class="btn btn-icon btn-label-info waves-effect"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  title="Add Stocks"
                >
                  <i class="ti ti-plus"></i>
                </button>
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
