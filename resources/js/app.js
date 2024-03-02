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
// pinia configure
import { createPinia } from "pinia";
//Vue i18n configure
import i18n from "./i18n";
import EN from "@/locale/en.json";
import KH from "@/locale/kh.json";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const pinia = createPinia();

// const i18n = createI18n({
//     // something vue-i18n options here ...
//     locale: "EN",
//     messages: {
//         EN: EN,
//         KH: KH,
//     },
// });

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
            .use(ZiggyVue)
            .use(PrimeVue, {
                unstyled: true,
                pt: Lara,
            })
            .use(pinia)
            .use(i18n)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
