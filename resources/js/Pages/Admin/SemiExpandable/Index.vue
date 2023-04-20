<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
  layout: AdminLayout,
};
</script>

<script setup>
import { ref, computed, onMounted } from "vue";
import { router } from "@inertiajs/vue3";
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage, Head } from "@inertiajs/vue3";

const { props } = usePage();
let suppliers = ref([]);
onMounted(() => {
  getSuppliers()
    .then((data) => {
      suppliers = data.data;    
    })
    .catch((error) => {
      console.error(error);
    });
});

const formObject = {
  label: null,
  type: "Semi Expendable",
  description: null,
  item_code: null,
  stocks: 0,
  quantity: 0,
  unit_price: 0,
  total_price: 0,
  date_purchased: null,
  supplier_id: null,
};

const { validateForm } = useValidateForm();

const routeName = "user.semi_expandables";
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
  getSuppliers,
} = useCrud(formObject, routeName);
</script>

<template>
  <Head title="Coaches/Staff"></Head>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
   

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div class="card card-action">
    <div class="card-header">
      <div class="card-action-title align-items-center">
        <h5 class="card-title">Semi Expendables</h5>
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
          Add Semi Expendable
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
              Semi Expendable
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
              <label for="name">Suplier <span class="required">*</span></label>
              <select
                class="form-select"
                v-model="form.supplier_id"
             
              >
                <option v-for="i in suppliers" :value="i.id">
                  {{ i.full_name }}
                </option>
              </select>
              <label for="name">Label <span class="required">*</span></label>
</div>

              <input
                type="text"
                id="label"
                class="form-control"
                v-model="form.label"
                @input="
                  ($event) => {
                    form.clearErrors('item_name');
                    validateForm(['required'], form, $event.target.value, 'item_name');
                  }
                "
                placeholder="Enter Item Name"
                :class="{
                  'is-invalid': form.errors.item_name,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.item_name }}
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="name">Description <span class="required">*</span></label>
              <textarea
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="2"
                placeholder="Enter Description"
                v-model="form.description"
                :class="{
                  'is-invalid': form.errors.description,
                }"
                @input="
                  ($event) => {
                    form.clearErrors('description');
                    validateForm(['required'], form, $event.target.value, 'description');
                  }
                "
              ></textarea>
              <div class="invalid-feedback">
                {{ form.errors.description }}
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="name">Item Code <span class="required">*</span></label>
              <input
                type="text"
                id="item_code"
                class="form-control"
                v-model="form.item_code"
                placeholder="Enter Item Code"
                :class="{
                  'is-invalid': form.errors.item_code,
                }"
                @input="
                  ($event) => {
                    form.clearErrors('item_code');
                    validateForm(['required'], form, $event.target.value, 'item_code');
                  }
                "
              />
              <div class="invalid-feedback">
                {{ form.errors.item_code }}
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="name">Stock <span class="required">*</span></label>
              <input
                type="number"
                id="stock"
                class="form-control"
                v-model="form.stocks"
                @input="
                  ($event) => {
                    form.clearErrors('stocks');
                    validateForm(['required'], form, $event.target.value, 'stocks');
                  }
                "
                placeholder="Enter Stocks"
                :class="{
                  'is-invalid': form.errors.stock,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.stock }}
              </div>
            </div>
           
            <div class="form-group mb-3">
              <label for="name">Unit Price <span class="required">*</span></label>
              <input
                type="number"
                id="label"
                class="form-control"
                v-model="form.unit_price"
                @input="
                  ($event) => {
                    form.clearErrors('unit_price');
                    validateForm(['required'], form, $event.target.value, 'unit_price');
                  }
                "
                placeholder="Enter Unit Price"
                :class="{
                  'is-invalid': form.errors.unit_price,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.unit_price }}
              </div>
            </div>
            
            <div class="form-group mb-3">
              <label for="name">Date Purchased <span class="required">*</span></label>
              <input
                type="date"
                id="html5-date-input"
                class="form-control"
                v-model="form.date_purchased"
                @input="
                  ($event) => {
                    form.clearErrors('date_purchased');
                    validateForm(
                      ['required'],
                      form,
                      $event.target.value,
                      'date_purchased'
                    );
                  }
                "
                placeholder="Enter Date Purchased"
                :class="{
                  'is-invalid': form.errors.date_purchased,
                }"
              />
              <div class="invalid-feedback">
                {{ form.errors.date_purchased }}
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
            <th class="sortable" @click="handleServerQuery('sort', 'item_name')">
              Label
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'item_name' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'item_name' && serverQuery.order == 'asc'"
              ></i>
            </th>

            <th class="sortable" @click="handleServerQuery('sort', 'item_name')">
              Supplier
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'item_name' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'item_name' && serverQuery.order == 'asc'"
              ></i>
            </th>

            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'item_code')"
            >
              Item Code
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'item_code' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'item_code' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'stocks')"
            >
              Stocks
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'stock' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'stock' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'unit_price')"
            >
              Unit Price
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'unit_price' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'unit_price' && serverQuery.order == 'asc'"
              ></i>
            </th>
            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'total_price')"
            >
              Total Price
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'total_price' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'total_price' && serverQuery.order == 'asc'"
              ></i>
            </th>
           
            <th
              style="min-width: 200px; width: 30%"
              class="sortable"
              @click="handleServerQuery('sort', 'date_purchased')"
            >
              Date Purchased
              <i
                class="ti ti-arrow-up"
                v-if="serverQuery.sort == 'date_purchased' && serverQuery.order == 'desc'"
              ></i>
              <i
                class="ti ti-arrow-down"
                v-if="serverQuery.sort == 'date_purchased' && serverQuery.order == 'asc'"
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
            <td>{{ tableData.label }}</td>
            <td>{{ tableData.supplier? tableData.supplier.full_name : '' }}</td>
            <td>{{ tableData.item_code }}</td>
            <td>{{ tableData.stocks }}</td>
            <td>{{ tableData.unit_price }}</td>
            <td>{{ tableData.unit_price * tableData.stocks }}</td>
            
            <td>{{ tableData.date_purchased }}</td>

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
