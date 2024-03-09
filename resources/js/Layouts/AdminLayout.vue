<script setup>
import { Head, router } from "@inertiajs/vue3";
import Banner from "@/Components/Banner.vue";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import { onMounted } from "vue";
import { initFlowbite, initDropdowns } from "flowbite";
import { reactive, ref } from "vue";
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

        <div class="flex overflow-hidden bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <Sidebar />

            <main class="w-full pt-14">
                <div
                    class="h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
                >
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
