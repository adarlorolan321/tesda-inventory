<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
        <div class="app-brand demo">
          <a href="index.html" class="app-brand-link">
            <img
              width="60px"
              height="35px"
              src="../assets/img/branding/logo.png"
              alt=""
            />

            <span class="app-brand-text demo menu-text fw-bold">Tesda</span>
          </a>

          <a
            href="javascript:void(0);"
            class="layout-menu-toggle menu-link text-large ms-auto"
          >
            <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
            <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
          </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
          <!-- Page -->
          <template v-for="(menu, index) in menus" :key="'menu-' + index">
            <li v-if="!menu.sub_menu" class="menu-item">
              <inertia-link
                v-if="menu && menu.role.includes($page.props.auth.user.role)"
                :href="route(menu.route)"
                class="menu-link"
                :only="['data', 'params']"
              >
                <i class="menu-icon tf-icons" :class="menu.icon"></i>
                <div :data-i18n="menu.label">
                  {{ menu.label }}
                </div>
              </inertia-link>
            </li>
            <li
              v-else
              class="menu-item"
              :class="{
                'active open': route().current(menu.route),
              }"
            >
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons" :class="menu.icon"></i>
                <div :data-i18n="menu.label">
                  {{ menu.label }}
                </div>
              </a>
              <ul v-if="menu.sub_menu" class="menu-sub">
                <template
                  v-for="(sub_menu, index) in menu.sub_menu"
                  :key="'sub-menu-' + index"
                >
                  <li
                    v-if="sub_menu.role == $page.props.auth.user.role"
                    class="menu-item"
                  >
                    <inertia-link
                      :href="route(sub_menu.route)"
                      class="menu-link"
                      :class="{
                        'menu-toggle': sub_menu.sub_menu,
                      }"
                      :only="['data', 'params']"
                    >
                      <i class="menu-icon tf-icons" :class="sub_menu.icon"></i>
                      <div :data-i18n="sub_menu.label">
                        {{ sub_menu.label }}
                      </div>
                    </inertia-link>
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </aside>
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->
        <nav
          class="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
          id="layout-navbar"
        >
          <div
            class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
          >
            <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
              <i class="ti ti-menu-2 ti-sm"></i>
            </a>
          </div>

          <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <div class="navbar-nav align-items-center">
              <a
                class="nav-link style-switcher-toggle hide-arrow"
                href="javascript:void(0);"
              >
                <i class="ti ti-sm"></i>
              </a>
            </div>

            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <!-- User -->
              <li class="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  class="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i class="fas fa-bell position-relative 2x">
                    <span class="visually-hidden">Notifications</span>
                    <span class="badge bg-danger position-absolute top-0 end-0">{{
                      lowItems.length
                    }}</span>
                  </i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuUser"
                >
                  <a class="nav-link dropdown-toggle hide-arrow">
                    <h5 class="text-center">Low Stocks</h5>
                    <div class="dropdown-divider"></div>
                  </a>

                  <ul v-for="data in lowItems">
                    <li class="dropdown-item">{{ data.label }}</li>
                  </ul>
                </div>
              </li>

              <li class="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  class="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  
                >
                  <div class="avatar avatar-online">
                    <img
                      :src="$page.props.auth.user.profile_photo_url"
                      alt
                      class="rounded-circle"
                    />
                  </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar avatar-online">
                            <img
                              :src="$page.props.auth.user.profile_photo_url"
                              alt
                              class="rounded-circle"
                            />
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <span class="fw-semibold d-block">{{
                            $page.props.auth.user.name
                          }}</span>
                          <small class="text-muted">{{
                            $page.props.auth.user.role
                          }}</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <inertia-link :href="route('profile.index')" class="dropdown-item" >
                      <i class="ti ti-user-check me-2 ti-sm"></i>
                      <span class="align-middle">My Profile</span>
                    </inertia-link>
                  </li>
                  <!-- <li>
                                        <a class="dropdown-item" href="#">
                                            <i
                                                class="ti ti-settings me-2 ti-sm"
                                            ></i>
                                            <span class="align-middle"
                                                >Settings</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <span
                                                class="d-flex align-items-center align-middle"
                                            >
                                                <i
                                                    class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"
                                                ></i>
                                                <span
                                                    class="flex-grow-1 align-middle"
                                                    >Billing</span
                                                >
                                                <span
                                                    class="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20"
                                                    >2</span
                                                >
                                            </span>
                                        </a>
                                    </li> -->
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);" @click="logout">
                      <i class="ti ti-logout me-2 ti-sm"></i>
                      <span class="align-middle">Log Out</span>
                    </a>
                  </li>
                </ul>
              </li>
              <!--/ User -->
            </ul>
          </div>
        </nav>

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->
          <div class="container-fluid flex-grow-1 container-p-y">
            <slot> </slot>
           
          </div>
          <!-- / Content -->

          <!-- Footer -->

          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
</template>

<script setup>
import { createRouter, createWebHistory } from "vue-router";
import { loadScript } from "vue-plugin-load-script";
import { onMounted, ref } from "vue";
import { useMenu } from "@/Composables/Menus";
import { router } from "@inertiajs/vue3";
import axios from "axios";

const { menus } = useMenu();

onMounted(() => {
  getLowItems();
  console.log("rolan");
  setTimeout(() => {
    loadScript("/assets/js/main.js");
  }, 1000);
});

const logout = () => {
  router.post(route("logout"));
};
const lowItems = ref([]);

const getLowItems = async () => {
  try {
    const response = await axios.get(route("getLowItem"));
    lowItems.value = response.data;
  } catch (error) {
    // Handle error
  }
};
</script>
<style>
.fa-bell {
  font-size: 1.5rem; /* increase font size of bell icon */
}

.badge {
  font-size: 0.35rem; /* decrease font size of badge */
  padding: 0.25rem 0.4rem; /* adjust padding to make badge smaller */
}
</style>
