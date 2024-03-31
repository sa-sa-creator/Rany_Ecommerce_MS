<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Link, router } from "@inertiajs/vue3";
import Text from "@/Components/Text.vue";

defineProps({
    roles: Array,
});

const deleteRole = (role, index) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            try {
                router.delete("role/" + role.id, {
                    onSuccess: (page) => {
                        this.delete(role, index);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    },
                });
            } catch (error) {}
        }
    });
};
</script>

<template>
    <AdminLayout title="Role | List">
        <div
            class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="w-full mb-1">
                <div class="mb-4">
                    <nav class="flex mb-5" aria-label="Breadcrumb">
                        <ol
                            class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2"
                        >
                            <li class="inline-flex items-center">
                                <a
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
                                </a>
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
                                    <a
                                        href="#"
                                        class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                                        ><Text
                                            :message="$t('Role')"
                                            class="mr-1"
                                        ></Text
                                    ></a>
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
                                            :message="$t('List')"
                                            class="mr-1"
                                        ></Text
                                    ></span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1
                        class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                    >
                        <Text :message="$t('allRole')" class="mr-1"></Text>
                    </h1>
                </div>
                <div class="sm:flex">
                    <div
                        class="flex items-center ml-auto space-x-2 sm:space-x-3"
                    >
                        <Link
                            :href="route('role.create')"
                            class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            <svg
                                class="w-5 h-5 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <Text :message="$t('Add')" class="mr-1"></Text>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="overflow-x-auto">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden shadow">
                        <table
                            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600"
                        >
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th
                                        scope="col"
                                        class="p-4 pl-40 text-base font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    >
                                        Id
                                    </th>
                                    <th
                                        scope="col"
                                        class="p-4 text-base font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    >
                                        Role
                                    </th>

                                    <th
                                        scope="col"
                                        class="p-4 text-base font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            >
                                <tr
                                    class="hover:bg-gray-100 dark:hover:bg-gray-700"
                                    v-for="role in roles"
                                    :key="role.id"
                                >
                                    <td
                                        class="max-w-sm p-4 pl-40 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400 font-sansKhmer"
                                    >
                                        {{ role.id }}
                                    </td>
                                    <td
                                        class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white font-sansKhmer"
                                    >
                                        {{ role.name }}
                                    </td>

                                    <td class="p-4 space-x-2 whitespace-nowrap">
                                        <Link
                                            :href="route('role.edit', role.id)"
                                            class="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-green-600 bg-transparent border-2 border-green-700 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-white-300 dark:focus:ring-white-700 hover:text-white focus:outline-none focus:ring-green-300 me-2 dark:border-green-700 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-500"
                                        >
                                            <svg
                                                class="w-4 h-4 mr-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                                ></path>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <Text
                                                :message="$t('Edit')"
                                                class="mr-1"
                                            ></Text>
                                        </Link>
                                        <button
                                            @click="deleteRole(role, index)"
                                            type="button"
                                            class="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-red-600 bg-transparent border-2 border-red-700 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-white-300 dark:focus:ring-white-700 hover:text-white focus:outline-none focus:ring-red-300 me-2 dark:border-red-700 dark:text-red-600 dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-600"
                                        >
                                            <svg
                                                class="w-4 h-4 mr-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <Text
                                                :message="$t('Delete')"
                                                class="mr-1"
                                            ></Text>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
