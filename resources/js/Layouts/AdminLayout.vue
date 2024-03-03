<script setup>
import { Head } from "@inertiajs/vue3";
import Banner from "@/Components/Banner.vue";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import { onMounted } from "vue";
import { initFlowbite, initDropdowns } from "flowbite";

onMounted(() => {
    initFlowbite();
    initDropdowns();
});

defineProps({
    title: String,
});
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <Sidebar />

            <main
                class="flex pt-14 overflow-hidden bg-gray-50 dark:bg-gray-900"
            >
                <div
                    class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
                >
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
