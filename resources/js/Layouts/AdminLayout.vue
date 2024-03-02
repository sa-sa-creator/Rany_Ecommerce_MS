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

            <main class="p-4 sm:ml-64">
                <div
                    class="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 dark:border-gray-700 dark:bg-gray-900"
                >
                    <div class="text-ellipsis">Dashboard</div>
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
