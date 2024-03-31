<template>
    <AdminLayout title="Role | Create">
        <div
            class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="w-full mb-1">
                <div class="">
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol
                            class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2"
                        >
                            <li class="inline-flex items-center">
                                <Link
                                    href="#"
                                    class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                                >
                                    <svg
                                        class="w-5 h-5 mr-2.5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                        ></path>
                                    </svg>
                                    <Text
                                        :message="$t('Home')"
                                        class="mr-1"
                                    ></Text>
                                </Link>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg
                                        class="w-6 h-6 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <Link
                                        :href="route('role.index')"
                                        class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                                        ><Text
                                            :message="$t('Role')"
                                            class="mr-1"
                                        ></Text
                                    ></Link>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg
                                        class="w-6 h-6 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span
                                        class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                                        aria-current="page"
                                        ><Text
                                            :message="$t('Create')"
                                            class="mr-1"
                                        ></Text
                                    ></span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section
            class="bg-white dark:bg-gray-800 lg:rounded-2xl lg:mt-16 lg:mx-36"
        >
            <div class="h-full max-w-2xl px-4 py-4 mx-auto lg:py-16">
                <h2
                    class="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                >
                    <Text :message="$t('createRole')" class="mr-1"></Text>
                </h2>
                <form @submit.prevent="create()">
                    <div class="grid gap-4 mb-4">
                        <div>
                            <label
                                for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                ><Text :message="$t('Role')" class="mr-1"></Text
                            ></label>
                            <input
                                v-model="form.name"
                                type="text"
                                name="name"
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-sansKhmer"
                                required=""
                            />
                            <div v-if="form.errors.name" class="text-red-700">
                                {{ form.errors.name }}
                            </div>
                        </div>
                        <div>
                            <label
                                for="permission"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                ><Text
                                    :message="$t('Permission')"
                                    class="mr-1"
                                ></Text
                            ></label>
                            <VueMultiselect
                                v-model="form.permissions"
                                :options="permissions"
                                :multiple="true"
                                :close-on-select="true"
                                placeholder="Pick some permission"
                                label="name"
                                track-by="id"
                            />
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button
                            type="submit"
                            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            <Text :message="$t('Create')" class="mr-1"></Text>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm, Link } from "@inertiajs/vue3";
import VueMultiselect from "vue-multiselect";
import Text from "@/Components/Text.vue";


defineProps({
    permissions: Array,
});

const form = useForm({
    name: null,
    permissions: [],
});

const create = () => form.post(route("role.store", {}));
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
