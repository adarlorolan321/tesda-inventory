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
import axios from "axios";
import Swal from "sweetalert2";
import toastr from "toastr";

const { props } = usePage();
let toCheckout = ref([]);
let currentSelected = ref("");
const quantity = ref(0);
const error = ref([]);
const addStocks = (item) => {
  currentSelected.value = item;
  quantity.value = 1;
  console.log(currentSelected.value);
};
const deleteData = (index) => {
  toCheckout.value.splice(index, 1);
};
const Checkout = async () => {
  
  try {
    const data = toCheckout.value.map(item => ({ id: item.id, quantity: item.quantity }))
    const response = await axios.post(route('checkouts.store'), { data })
    toastr.success("Record saved");
    toCheckout.value=[];
    window.location.reload();
    
  } catch (error) {
    console.error(error)
    toastr.error("Error saving record")
  }
};

const updateQuantity = () => {
  const existingIndex = toCheckout.value.findIndex(
    (existingItem) => existingItem.id === currentSelected.value.id
  );
  if (currentSelected.value.stocks >= quantity.value && quantity.value > 0 ) {
    if (existingIndex >= 0) {
      const existingItem = toCheckout.value[existingIndex];
      existingItem.quantity = parseInt(quantity.value, 10);
      quantity.value = 0;
    } else {
      currentSelected.value.quantity = parseInt(quantity.value, 10);
      toCheckout.value.push(currentSelected.value);
      quantity.value = 0;
    }
  } else {
    Swal.fire("Error!", "You cant enter quantity greater than available stocks or", "error");
  }
};

const formObject = {};

const { validateForm } = useValidateForm();

const routeName = "checkouts";
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
  handleEditStocks,
  formState,

  updateStocksPromise,
  reloadPaginatedData,
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
          <h5 class="modal-title" id="exampleModalLabel">Add Quantity</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="form-group mb-3">
            <label for="name">Quantity <span class="required">*</span></label>
            <input
              type="number"
              id="name"
              class="form-control"
              v-model="quantity"
              placeholder="Enter Quantity"
            />

            <div class="invalid-feedback">
              {{ form.errors.quantity }}
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            @click="updateQuantity"
            data-bs-dismiss="modal"
            class="btn btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="card card-action">
        <div class="card-header">
          <div class="card-action-title align-items-center">
            <h5 class="card-title">Stocks</h5>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
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

                <th
                  style="min-width: 100px; width: 20%"
                  class="sortable"
                  @click="handleServerQuery('sort', 'item_code')"
                >
                  Type
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
                  style="min-width: 50px; width: 10%"
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

                <th style="width: 50px">Actions</th>
              </tr>
            </thead>

            <tbody class="table-border-bottom-0">
              <tr v-if="paginatedData.data.length <= 0">
                <td colspan="999999" class="text-center">No item found</td>
              </tr>
              <tr  v-for="tableData in paginatedData.data" :key="tableData" >
                <td>{{ tableData.label }}</td>

                <td>{{ tableData.type }}</td>
                <td>{{ tableData.stocks }}</td>

                <td>
                  <div class="d-flex gap-2">
                    <button
                      class="btn btn-icon btn-label-info waves-effect"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      title="Add Stocks"
                      @click="addStocks(tableData)"
                    >
                      <i class="ti ti-plus"></i>
                    </button>
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
    </div>
    <div class="col-md-6">
      <div class="card card-action">
        <div class="card-header">
          <div class="card-action-title align-items-center">Current Selected</div>

          <div class="card-action-element">
            <button
              class="btn btn-primary ml-auto"
              type="button"
              @click="Checkout"
              data-bs-toggle="offcanvas"
              data-bs-target="#offCanvasForm"
              aria-controls="offCanvasForm"
            >
              Checkout
            </button>
          </div>
        </div>

        <div class="card-body"></div>
        <div class="table-responsive text-nowrap">
          <table class="table">
            <thead class="table-light" style="min-width: 200px">
              <tr>
                <th class="sortable" @click="handleServerQuery('sort', 'item_name')">
                  Label
                </th>

                <th class="sortable" @click="handleServerQuery('sort', 'item_name')">
                  Type
                </th>

                <th
                  style="min-width: 50px; width: 10%"
                  class="sortable"
                  @click="handleServerQuery('sort', 'item_code')"
                >
                  Quantity
                </th>

                <th style="width: 150px">Actions</th>
              </tr>
            </thead>

            <tbody class="table-border-bottom-0">
              <tr v-if="toCheckout.length <= 0">
                <td colspan="999999" class="text-center">No item found</td>
              </tr>
              <tr v-for="(tableData, index) in toCheckout" :key="tableData">
                <td>{{ tableData.label }}</td>

                <td>{{ tableData.type }}</td>
                <td>{{ tableData.quantity }}</td>

                <td>
                  <div class="d-flex gap-2">
                    <a
                      class="btn btn-icon btn-label-danger waves-effect"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="tooltip-danger"
                      title="Delete"
                      href="javascript:void(0);"
                      @click="deleteData(index)"
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
    </div>
  </div>
</template>
