<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
};
</script>

<template>
    <div class="content-wrapper">
            <!-- Content -->
            <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">User Profile /</span> Security</h4>

                <!-- Header -->
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="user-profile-header-banner">
                                <img src="/assets/img/pages/profile-banner.png" alt="Banner image" class="img-fluid rounded-top" />
                            </div>
                            <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                                <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                    <img
                                    src="/assets/img/avatars/14.png"
                                    alt="user image"
                                    class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img"
                                    />
                                </div>
                                <div class="flex-grow-1 mt-3 mt-sm-5">
                                    <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                        <div class="user-profile-info">
                                            <h4>John Doe</h4>
                                            <ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                                <li class="list-inline-item"><i class="ti ti-color-swatch"></i> UX Designer</li>
                                                <li class="list-inline-item"><i class="ti ti-map-pin"></i> Vatican City</li>
                                                <li class="list-inline-item"><i class="ti ti-calendar"></i> Joined April 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Header -->

                <!-- Navbar pills -->
                <div class="row">
                    <div class="col-md-12">
                        <ul class="nav nav-pills flex-column flex-sm-row mb-4">
                            <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('user.index')" :class="{ 'active': route().current('user.index') }">
                                    <i class="ti ti-user-check me-1 ti-xs"></i> Profile
                                </inertia-link>
                            </li>
                            <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('user.teams')" :class="{ 'active': route().current('user.teams') }">
                                    <i class="ti ti-key me-1 ti-xs"></i> Security
                                </inertia-link>
                            </li>
                            <!-- <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('user.projects')" :class="{ 'active': route().current('user.projects') }">
                                    <i class="ti ti-layout-grid me-1 ti-xs"></i> Projects
                                </inertia-link>
                            </li>
                            <li class="nav-item">
                                <inertia-link class="nav-link" :href="route('user.conns')" :class="{ 'active': route().current('user.conns') }">
                                    <i class="ti ti-link me-1 ti-xs"></i> Connections
                                </inertia-link>
                            </li> -->
                        </ul>
                    </div>
                </div>
                <!--/ Navbar pills -->

                <div class="col-md-12">
                    <div class="card mb-4">
                        <h5 class="card-header">Change Password</h5>
                        <div class="card-body">
                            <form id="formAccountSettings" method="POST" onsubmit="return false">
                                <div class="row">
                                    <div class="mb-3 col-md-6 form-password-toggle">
                                        <label class="form-label" for="currentPassword">Current Password</label>
                                        <div class="input-group input-group-merge">
                                            <input class="form-control" type="password" name="currentPassword" id="currentPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
                                            <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-md-6 form-password-toggle">
                                        <label class="form-label" for="newPassword">New Password</label>
                                        <div class="input-group input-group-merge">
                                            <input class="form-control" type="password" id="newPassword" name="newPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
                                            <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-6 form-password-toggle">
                                        <label class="form-label" for="confirmPassword">Confirm New Password</label>
                                        <div class="input-group input-group-merge">
                                            <input class="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
                                            <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-4">
                                        <h6>Password Requirements:</h6>
                                        <ul class="ps-3 mb-0">
                                            <li class="mb-1">Minimum 8 characters long - the more, the better</li>
                                            <li class="mb-1">At least one lowercase character</li>
                                            <li>At least one number, symbol, or whitespace character</li>
                                        </ul>
                                    </div>
                                <div>
                                    <button type="submit" class="btn btn-primary me-2">Save changes</button>
                                    <button type="reset" class="btn btn-label-secondary">Cancel</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- / Content -->

          </div>
</template>
