<script>
import ParentLayout from "@/Layouts/ParentLayout.vue";
export default {
    layout: ParentLayout,
};
</script>

<script setup>
import { usePage } from "@inertiajs/vue3";
const { props } = usePage();
</script>

<template>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Players</h5>
            </div>
            <div class="card-action-element">
                <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offCanvasForm"
                    aria-controls="offCanvasForm"
                >
                    Add Player
                </button>
            </div>
        </div>
    </div>
    {{ props.students }}
</template>
