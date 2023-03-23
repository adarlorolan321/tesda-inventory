import "./bootstrap";
import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

import Dropzone from "@/Components/Dropzone.vue";
import Select2 from "@/Components/Select2.vue";



let doc = window.document.getElementsByTagName("title")[0]
const appName = doc ? doc.innerText : "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Select2", Select2)
            .component("Dropzone", Dropzone)
            .component('inertia-link', Link)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});