<script setup>
import { FwbSidebarItem, FwbSidebarDropdownItem } from "flowbite-vue";
import SidebarLink from "@/Components/SidebarLink.vue";
</script>

<template>
    <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
        aria-label="Sidebar"
    >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <SidebarLink
                        :href="route('dashboard')"
                        :active="route().current('dashboard')"
                    >
                        <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.9 3C3.9 3 3 3.8 3 4.9V9c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V9c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9h-4Zm-10 10c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9h-4Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span class="font-angkor ms-3">ផ្ទាំងគ្រប់គ្រង</span>
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink
                        :href="route('test')"
                        :active="route().current('test')"
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
                        <span class="ms-3">Test</span>
                    </SidebarLink>
                </li>
                <li>
                    <fwb-sidebar-dropdown-item>
                        <template #icon>
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
                        </template>
                        <template #trigger> User </template>
                        <template #default>
                            <fwb-sidebar-item class="pl-11">
                                <SidebarLink
                                    :href="route('user.index')"
                                    :active="route().current('user.index')"
                                >
                                    <svg
                                        class="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10 6a7.5 7.5 0 1 0 8 8h-8V6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13.5 3H13v8h8v-.5A7.5 7.5 0 0 0 13.5 3Z"
                                        />
                                    </svg>
                                    <span class="ms-3">List User</span>
                                </SidebarLink>
                            </fwb-sidebar-item>
                            <fwb-sidebar-item class="pl-11">
                                <SidebarLink
                                    :href="route('role.index')"
                                    :active="route().current('role.index')"
                                >
                                    <svg
                                        class="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10 6a7.5 7.5 0 1 0 8 8h-8V6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13.5 3H13v8h8v-.5A7.5 7.5 0 0 0 13.5 3Z"
                                        />
                                    </svg>
                                    <span class="ms-3">Role</span>
                                </SidebarLink>
                            </fwb-sidebar-item>
                            <fwb-sidebar-item class="pl-11">
                                <SidebarLink
                                    :href="route('permission.index')"
                                    :active="
                                        route().current('permission.index')
                                    "
                                >
                                    <svg
                                        class="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10 6a7.5 7.5 0 1 0 8 8h-8V6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13.5 3H13v8h8v-.5A7.5 7.5 0 0 0 13.5 3Z"
                                        />
                                    </svg>
                                    <span class="ms-3">Permission</span>
                                </SidebarLink>
                            </fwb-sidebar-item>
                        </template>
                    </fwb-sidebar-dropdown-item>
                </li>
            </ul>
        </div>
    </aside>
</template>
