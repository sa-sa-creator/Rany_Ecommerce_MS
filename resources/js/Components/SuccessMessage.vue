<template>
    <div>
        <div
            class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
            role="alert"
            v-if="message && showMS"
        >
            <svg
                class="flex-shrink-0 inline w-6 h-6 me-3"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#44c520"
                        stroke-width="1.5"
                    ></circle>
                    <path
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        stroke="#44c520"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>

            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">{{ message }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
const props = defineProps({
    message: String,
});
const showMS = ref(false);
onMounted(() => {
    showMS.value = true;
    setTimeout(() => {
        showMS.value = false;
    }, 2000);
});
</script>
