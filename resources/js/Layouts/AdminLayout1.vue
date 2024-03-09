<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useDark, useToggle } from "@vueuse/core";
import { reactive, ref } from "vue";
import { router } from "@inertiajs/vue3";

import { loadLanguageAsync } from "laravel-vue-i18n";
import SidebarLink from "@/Components/SidebarLink.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

onMounted(() => {
    initFlowbite();
});

const langTitle = ref(localStorage.getItem("langTitle") || "English");

const items = reactive({
    item: [
        {
            title: "English",
            value: "en",
        },
        { title: "Khmer", value: "kh" },
    ],
});

const changeLocale = (item) => {
    localStorage.getItem("langTitle", item.title);
    router.get(route("language", item.value));
    localStorage.getItem("lang", item.value);
    loadLanguageAsync(item.value);
};
</script>

<template>
    <!-- NavBar -->
    <nav
        class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button
                        data-drawer-target="logo-sidebar"
                        data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span class="sr-only">Open sidebar</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            ></path>
                        </svg>
                    </button>
                    <a href="#" class="flex ms-2 md:me-24">
                        <span
                            class="self-center text-xl sm:text-2xl whitespace-nowrap dark:text-white font-lilitaOne"
                            >RANY SHOP M.S</span
                        >
                    </a>
                </div>

                <div class="flex items-center">
                    <div class="hidden -mb-1 sm:block">
                        <div
                            class="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse"
                        >
                            <button
                                type="button"
                                data-dropdown-toggle="language-dropdown-menu"
                                class="p-2 inline-flex items-center justify-center text-sm font-medium text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                            <!-- Dropdown -->
                            <div
                                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                                id="language-dropdown-menu"
                            >
                                <ul class="py-2 font-medium" role="none">
                                    <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                            v-for="(item, index) in items.item"
                                            :key="index"
                                            @click="changeLocale(item)"
                                        >
                                            <div
                                                class="inline-flex items-center"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    class="w-4 h-4 rounded-full me-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    id="flag-icon-css-us"
                                                    viewBox="0 0 512 512"
                                                    v-if="
                                                        item.title == `English`
                                                    "
                                                >
                                                    <g fill-rule="evenodd">
                                                        <g stroke-width="1pt">
                                                            <path
                                                                fill="#bd3d44"
                                                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                                transform="scale(3.9385)"
                                                            />
                                                            <path
                                                                fill="#fff"
                                                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                                transform="scale(3.9385)"
                                                            />
                                                        </g>
                                                        <path
                                                            fill="#192f5d"
                                                            d="M0 0h98.8v70H0z"
                                                            transform="scale(3.9385)"
                                                        />
                                                        <path
                                                            fill="#fff"
                                                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                            transform="scale(3.9385)"
                                                        />
                                                    </g>
                                                </svg>
                                                <svg
                                                    version="1.1"
                                                    id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 799.999 799.999"
                                                    xml:space="preserve"
                                                    fill="#000000"
                                                    class="w-4 h-4 me-2"
                                                    v-if="item.title == `Khmer`"
                                                >
                                                    <g
                                                        id="SVGRepo_bgCarrier"
                                                        stroke-width="0"
                                                    ></g>
                                                    <g
                                                        id="SVGRepo_tracerCarrier"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <g>
                                                            <path
                                                                style="
                                                                    fill: #103b9b;
                                                                "
                                                                d="M695.774,259.924v-1c0-6.563-5.34-11.903-11.903-11.903H24.807v-93.183h750.387v93.183h-39.709 c-6.563,0-11.903,5.34-11.903,11.903v1H695.774z"
                                                            ></path>
                                                            <rect
                                                                x="24.807"
                                                                y="552.978"
                                                                style="
                                                                    fill: #103b9b;
                                                                "
                                                                width="750.387"
                                                                height="93.183"
                                                            ></rect>
                                                            <path
                                                                style="
                                                                    fill: #ed1f34;
                                                                "
                                                                d="M24.807,529.171V270.827h659.064c6.563,0,11.903-5.34,11.903-11.903v-1h27.807v1 c0,6.563,5.34,11.903,11.903,11.903h39.709v258.344H24.807z M243.441,471.967c-6.563,0-11.903,5.34-11.903,11.903 s5.34,11.903,11.903,11.903H556.56c6.56,0,11.896-5.34,11.896-11.903s-5.34-11.903-11.902-11.903h-5.302v-71.538 c0-6.563-5.34-11.903-11.903-11.903h-10.635l-0.198-0.742c-6-22.507-26.365-34.104-27.229-34.586 c-1.771-0.99-3.778-1.513-5.808-1.513s-4.037,0.523-5.807,1.513c-0.864,0.483-21.236,12.106-27.229,34.586l-0.198,0.742h-7.105 l-0.102-0.886c-5.97-52.02-46.626-80.185-48.354-81.358c-1.98-1.347-4.293-2.058-6.688-2.058s-4.707,0.711-6.687,2.058 c-1.728,1.175-42.389,29.371-48.354,81.358l-0.102,0.886h-7.105l-0.198-0.742c-5.997-22.494-26.365-34.104-27.229-34.586 c-1.77-0.99-3.778-1.513-5.807-1.513s-4.037,0.523-5.806,1.513c-0.864,0.483-21.237,12.106-27.23,34.586l-0.198,0.742h-10.635 c-6.563,0-11.903,5.34-11.903,11.903v71.538H243.441z"
                                                            ></path>
                                                            <path
                                                                style="
                                                                    fill: #103b9b;
                                                                "
                                                                d="M683.871,246.02c7.128,0,12.903,5.775,12.903,12.903h25.807c0-7.128,5.775-12.903,12.903-12.903 h38.709v-91.183H25.807v91.183L683.871,246.02L683.871,246.02z"
                                                            ></path>
                                                            <rect
                                                                x="25.807"
                                                                y="553.978"
                                                                style="
                                                                    fill: #103b9b;
                                                                "
                                                                width="748.387"
                                                                height="91.183"
                                                            ></rect>
                                                            <path
                                                                style="
                                                                    fill: #ed1f34;
                                                                "
                                                                d="M683.871,271.827H25.807v256.344h748.387V271.827h-38.709c-7.128,0-12.903-5.775-12.903-12.903 h-25.807C696.774,266.052,690.999,271.827,683.871,271.827z M556.56,496.773H243.441c-7.128,0-12.903-5.775-12.903-12.903 s5.775-12.903,12.903-12.903h4.301v-70.538c0-7.128,5.775-12.903,12.903-12.903h9.867c6.094-22.857,26.688-34.63,27.708-35.202 c3.91-2.187,8.679-2.187,12.59,0c1.021,0.571,21.613,12.344,27.707,35.202h5.445c6.017-52.43,46.915-80.8,48.785-82.071 c4.375-2.975,10.124-2.975,14.499,0c1.872,1.271,42.769,29.641,48.785,82.071h5.445c6.094-22.857,26.687-34.63,27.707-35.202 c3.91-2.187,8.68-2.187,12.59,0c1.022,0.571,21.614,12.344,27.708,35.202h9.866c7.128,0,12.903,5.775,12.903,12.903v70.538h4.302 c7.127,0,12.902,5.775,12.902,12.903S563.687,496.773,556.56,496.773z"
                                                            ></path>
                                                            <path
                                                                d="M787.097,129.031H12.903C5.775,129.031,0,134.807,0,141.935v516.129c0,7.128,5.775,12.903,12.903,12.903h774.193 c7.128,0,12.903-5.775,12.903-12.903V141.935C800,134.807,794.225,129.031,787.097,129.031z M774.193,154.838v91.183h-38.709 c-7.128,0-12.903,5.775-12.903,12.903s5.775,12.903,12.903,12.903h38.709v256.344H25.807V271.827h658.064 c7.128,0,12.903-5.775,12.903-12.903s-5.775-12.903-12.903-12.903H25.807v-91.183L774.193,154.838L774.193,154.838z M25.807,645.16 v-91.183h748.387v91.183H25.807z"
                                                            ></path>
                                                            <path
                                                                style="
                                                                    fill: #ffffff;
                                                                "
                                                                d="M526.451,470.967v-57.634h-8.182c-7.117,0-12.892-5.764-12.903-12.881 c-0.018-9.291-5.334-16.344-9.865-20.673c-4.54,4.341-9.882,11.415-9.899,20.673c-0.012,7.12-5.785,12.881-12.903,12.881H443.87 c-7.124,0-12.898-5.771-12.903-12.896c-0.022-34.36-19.852-57.435-30.968-67.671c-11.099,10.219-30.941,33.299-30.964,67.671 c-0.005,7.124-5.779,12.896-12.903,12.896h-28.829c-7.118,0-12.892-5.764-12.903-12.881c-0.018-9.291-5.334-16.344-9.865-20.673 c-4.54,4.341-9.882,11.415-9.899,20.673c-0.012,7.12-5.786,12.881-12.903,12.881h-8.183v57.634H526.451z"
                                                            ></path>
                                                            <path
                                                                d="M556.56,470.967h-4.302v-70.538c0-7.128-5.775-12.903-12.903-12.903h-9.866c-6.094-22.857-26.688-34.63-27.708-35.202 c-3.91-2.187-8.679-2.187-12.59,0c-1.021,0.571-21.613,12.344-27.707,35.202h-5.445c-6.017-52.43-46.915-80.8-48.785-82.071 c-4.375-2.975-10.124-2.975-14.499,0c-1.872,1.271-42.769,29.641-48.785,82.071h-5.445c-6.094-22.857-26.687-34.63-27.707-35.202 c-3.91-2.187-8.68-2.187-12.59,0c-1.022,0.571-21.614,12.344-27.708,35.202h-9.874c-7.127,0-12.903,5.775-12.903,12.903v70.538 h-4.301c-7.128,0-12.903,5.775-12.903,12.903s5.775,12.903,12.903,12.903H556.56c7.127,0,12.903-5.775,12.903-12.903 S563.687,470.967,556.56,470.967z M281.731,413.333c7.117,0,12.891-5.764,12.903-12.881c0.018-9.258,5.359-16.331,9.899-20.673 c4.533,4.329,9.85,11.381,9.865,20.673c0.012,7.12,5.785,12.881,12.903,12.881h28.829c7.124,0,12.898-5.771,12.903-12.896 c0.022-34.372,19.865-57.452,30.964-67.671c11.116,10.236,30.945,33.311,30.968,67.671c0.005,7.124,5.779,12.896,12.903,12.896 h28.829c7.118,0,12.892-5.764,12.903-12.881c0.018-9.258,5.359-16.331,9.899-20.673c4.533,4.329,9.85,11.381,9.865,20.673 c0.012,7.12,5.786,12.881,12.903,12.881h8.182v57.634H273.548v-57.634H281.731z"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                {{ item.title }}
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Notifications -->
                    <button
                        type="button"
                        data-dropdown-toggle="notification-dropdown"
                        class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        <span class="sr-only">View notifications</span>
                        <!-- Bell icon -->
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        class="z-20 z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700"
                        id="notification-dropdown"
                    >
                        <div
                            class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >
                            Notifications
                        </div>
                        <div>
                            <a
                                href="#"
                                class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                            >
                                <div class="flex-shrink-0">
                                    <img
                                        class="rounded-full w-11 h-11"
                                        src="/images/users/bonnie-green.png"
                                        alt="Jese image"
                                    />
                                    <div
                                        class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700 dark:border-gray-700"
                                    >
                                        <svg
                                            class="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                                            ></path>
                                            <path
                                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full pl-3">
                                    <div
                                        class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                    >
                                        New message from
                                        <span
                                            class="font-semibold text-gray-900 dark:text-white"
                                            >Bonnie Green</span
                                        >: "Hey, what's up? All set for the
                                        presentation?"
                                    </div>
                                    <div
                                        class="text-xs font-medium text-primary-700 dark:text-primary-400"
                                    >
                                        a few moments ago
                                    </div>
                                </div>
                            </a>
                            <a
                                href="#"
                                class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                            >
                                <div class="flex-shrink-0">
                                    <img
                                        class="rounded-full w-11 h-11"
                                        src="/images/users/jese-leos.png"
                                        alt="Jese image"
                                    />
                                    <div
                                        class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700"
                                    >
                                        <svg
                                            class="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full pl-3">
                                    <div
                                        class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                    >
                                        <span
                                            class="font-semibold text-gray-900 dark:text-white"
                                            >Jese leos</span
                                        >
                                        and
                                        <span
                                            class="font-medium text-gray-900 dark:text-white"
                                            >5 others</span
                                        >
                                        started following you.
                                    </div>
                                    <div
                                        class="text-xs font-medium text-primary-700 dark:text-primary-400"
                                    >
                                        10 minutes ago
                                    </div>
                                </div>
                            </a>
                            <a
                                href="#"
                                class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                            >
                                <div class="flex-shrink-0">
                                    <img
                                        class="rounded-full w-11 h-11"
                                        src="/images/users/joseph-mcfall.png"
                                        alt="Joseph image"
                                    />
                                    <div
                                        class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700"
                                    >
                                        <svg
                                            class="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full pl-3">
                                    <div
                                        class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                    >
                                        <span
                                            class="font-semibold text-gray-900 dark:text-white"
                                            >Joseph Mcfall</span
                                        >
                                        and
                                        <span
                                            class="font-medium text-gray-900 dark:text-white"
                                            >141 others</span
                                        >
                                        love your story. See it and view more
                                        stories.
                                    </div>
                                    <div
                                        class="text-xs font-medium text-primary-700 dark:text-primary-400"
                                    >
                                        44 minutes ago
                                    </div>
                                </div>
                            </a>
                            <a
                                href="#"
                                class="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                            >
                                <div class="flex-shrink-0">
                                    <img
                                        class="rounded-full w-11 h-11"
                                        src="/images/users/leslie-livingston.png"
                                        alt="Leslie image"
                                    />
                                    <div
                                        class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-700"
                                    >
                                        <svg
                                            class="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full pl-3">
                                    <div
                                        class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                    >
                                        <span
                                            class="font-semibold text-gray-900 dark:text-white"
                                            >Leslie Livingston</span
                                        >
                                        mentioned you in a comment:
                                        <span
                                            class="font-medium text-primary-700 dark:text-primary-500"
                                            >@bonnie.green</span
                                        >
                                        what do you say?
                                    </div>
                                    <div
                                        class="text-xs font-medium text-primary-700 dark:text-primary-400"
                                    >
                                        1 hour ago
                                    </div>
                                </div>
                            </a>
                            <a
                                href="#"
                                class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                                <div class="flex-shrink-0">
                                    <img
                                        class="rounded-full w-11 h-11"
                                        src="/images/users/robert-brown.png"
                                        alt="Robert image"
                                    />
                                    <div
                                        class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-700"
                                    >
                                        <svg
                                            class="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full pl-3">
                                    <div
                                        class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                                    >
                                        <span
                                            class="font-semibold text-gray-900 dark:text-white"
                                            >Robert Brown</span
                                        >
                                        posted a new video: Glassmorphism -
                                        learn how to implement the new design
                                        trend.
                                    </div>
                                    <div
                                        class="text-xs font-medium text-primary-700 dark:text-primary-400"
                                    >
                                        3 hours ago
                                    </div>
                                </div>
                            </a>
                        </div>
                        <a
                            href="#"
                            class="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
                        >
                            <div class="inline-flex items-center">
                                <svg
                                    class="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                View all
                            </div>
                        </a>
                    </div>
                    <!-- Dark Mode -->
                    <button
                        @click="toggleDark()"
                        type="button"
                        class="p-2 text-sm text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                            v-if="isDark == false"
                        >
                            <path
                                d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                            v-if="isDark == true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <!-- Profile -->
                    <div class="flex items-center ml-3">
                        <div>
                            <button
                                type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button-2"
                                aria-expanded="false"
                                data-dropdown-toggle="dropdown-2"
                            >
                                <span class="sr-only">Open user menu</span>
                                <img
                                    class="w-8 h-8 rounded-full border-gray-500 border-2"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="user photo"
                                />
                            </button>
                        </div>
                        <!-- Dropdown menu -->
                        <div
                            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="dropdown-2"
                        >
                            <div class="px-4 py-3" role="none">
                                <p
                                    class="text-sm text-gray-900 dark:text-white"
                                    role="none"
                                >
                                    Neil Sims
                                </p>
                                <p
                                    class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                    role="none"
                                >
                                    neil.sims@flowbite.com
                                </p>
                            </div>
                            <ul class="py-1" role="none">
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                        >Dashboard</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                        >Settings</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                        >Earnings</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                        >Sign out</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- SideBare -->
    <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 -translate-x-full bg-white border-r border-gray-200 sm:transition-transform lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
    >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <SidebarLink
                        :href="route('user.index')"
                        :active="route().current('user.index')"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <svg
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 21"
                        >
                            <path
                                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                            />
                            <path
                                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                            />
                        </svg>
                        <span class="ms-3">{{ $t("Dashboard") }}</span>
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink
                        :href="route('role.index')"
                        :active="route().current('role.index')"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <svg
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 21"
                        >
                            <path
                                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                            />
                            <path
                                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                            />
                        </svg>
                        <span class="ms-3">Role</span>
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink
                        :href="route('permission.index')"
                        :active="route().current('permission.index')"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <svg
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 21"
                        >
                            <path
                                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                            />
                            <path
                                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                            />
                        </svg>
                        <span class="ms-3">Permission</span>
                    </SidebarLink>
                </li>
            </ul>
        </div>
    </aside>
    <!-- Main -->
    <main class="w-full pt-14">
        <div
            class="h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
            <slot />
        </div>
    </main>
</template>
