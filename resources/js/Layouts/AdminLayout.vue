<script setup>
import { Head } from "@inertiajs/vue3";
import Banner from "@/Components/Banner.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
onMounted(() => {
    initFlowbite();
});
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <Navbar />
            <Sidebar />

            <main class="p-4 sm:ml-64">
                <div
                    class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"
                >
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
