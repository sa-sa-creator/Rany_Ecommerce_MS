<template>
    <span class="font-sansKhmer">{{ message }}</span>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    message: String,
});
</script>
