import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
//flowbite configure
import "flowbite";
import "flowbite-vue";
//primeVue configure
import PrimeVue from "primevue/config";
import Lara from "../css/presets/lara";

import { i18nVue } from "laravel-vue-i18n";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.use(plugin);
        app.use(ZiggyVue);
        app.use(PrimeVue, {
            unstyled: true,
            pt: Lara,
        });

        app.use(i18nVue, {
            resolve: async (lang) => {
                const langs = import.meta.glob("../../lang/*.json");
                return await langs[`../../lang/${lang}.json`]();
            },
        });
        app.use(VueSweetalert2);
        window.Swal = app.config.globalProperties.$swal;
        app.mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
