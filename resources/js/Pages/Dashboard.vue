<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";

import { useForm } from "@inertiajs/vue3";
</script>

<template>
    <AppLayout title="Home">
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                    <dir class="mb-10"></dir>

                    <Welcome />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
