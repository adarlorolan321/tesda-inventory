<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { usePage } from "@inertiajs/vue3";
import { reactive, computed, onMounted } from "vue";
import QuillEditor from "../../../Components/QuillEditor.vue";
export default {
    layout: AdminLayout,
};
</script>

<script setup>
import { useCrud } from "../../../Composables/Crud.js";
import { userInputFormat } from "../../../Composables/InputFormat.js";
import { useValidateForm } from "../../../Composables/Validate.js";
import { userGlobalFunction } from "../../../Composables/GlobalFunction.js";

const { props } = usePage();

const formObject = {
    id: props.data.id,
    name: props.data.name,
    subject: props.data.subject,
    body: props.data.body,
    attachments: props.data.attachments,
    default: props.data.default == 1 ? true : false,
    status: props.data.status == 1 ? true : false,
};

const routeName = "email_template";

const { dateFormat, timeFormat } = userInputFormat();
const { validateForm } = useValidateForm();
const { weekDays } = userGlobalFunction();
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
} = useCrud(formObject, routeName, null, {
    redirectTo: "email_template.index",
});
onMounted(() => {
    // handleEdit(props.data);
});
</script>

<template>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">EDIT EMAIL TEMPLATE</h5>
            </div>
            <div class="card-action-element">
                <inertia-link
                    class="btn btn-link-primary btn-primary"
                    :href="route('email_template.index')"
                >
                    Back
                </inertia-link>
            </div>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group mb-3">
                        <label for="name"
                            >Name <span class="required">*</span></label
                        >
                        <input
                            type="text"
                            id="name"
                            class="form-control"
                            placeholder="Enter Name"
                            v-model="form.name"
                            :class="{
                                'is-invalid': form.errors.name,
                            }"
                            @input="
                                ($event) => {
                                    form.clearErrors('name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'name'
                                    );
                                }
                            "
                        />
                        <div class="invalid-feedback" v-if="form.errors.name">
                            {{ form.errors.name }}
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="form-group mb-3">
                        <label for="status"
                            >Subject <span class="required">*</span></label
                        >
                        <textarea
                            :class="{
                                'is-invalid': form.errors.subject,
                            }"
                            rows="4"
                            class="form-control"
                            aria-label="With textarea"
                            v-model="form.subject"
                            @input="
                                ($event) => {
                                    form.clearErrors('subject');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'subject'
                                    );
                                }
                            "
                        ></textarea>
                        <div
                            class="v-invalid-feedback"
                            v-if="form.errors.subject"
                        >
                            {{ form.errors.subject }}
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div
                        class="form-group mb-3"
                        :class="{
                            'is-invalid': form.errors.body,
                        }"
                    >
                        <label for="body"
                            >Body <span class="required">*</span></label
                        >
                        <QuillEditor
                            :defaultValue="form.body"
                            v-model="form.body"
                            @update:modelValue="
                                ($event) => {
                                    form.clearErrors('body');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event,
                                        'body'
                                    );
                                }
                            "
                        ></QuillEditor>
                        <div class="v-invalid-feedback" v-if="form.errors.body">
                            {{ form.errors.body }}
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group mb-3">
                        <label for="attachments">Attachments</label>
                        <QuillEditor
                            :defaultValue="form.attachments"
                            v-model="form.attachments"
                        ></QuillEditor>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="form-group mb-5 me-5">
                            <div class=" ">Default</div>
                            <label class="switch">
                                <input
                                    type="checkbox"
                                    v-model="form.default"
                                    :checked="true"
                                    class="switch-input"
                                />
                                <span class="switch-toggle-slider">
                                    <span class="switch-on"></span>
                                    <span class="switch-off"></span>
                                </span>
                                <span
                                    class="switch-label"
                                    v-if="form.default == 1"
                                    >Yes</span
                                >
                                <span class="switch-label" v-else>No</span>
                            </label>
                        </div>
                        <div class="form-group mb-5">
                            <div class=" ">Status</div>
                            <label class="switch">
                                <input
                                    type="checkbox"
                                    v-model="form.status"
                                    :checked="form.status == 1"
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
                    </div>
                    <!-- {{ form.hasErrors }} -->
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <button
                        class="btn btn-primary"
                        @click="createPromise"
                        :disabled="form.processing || form.hasErrors"
                        v-if="!form.id"
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
                        v-else
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
</template>
