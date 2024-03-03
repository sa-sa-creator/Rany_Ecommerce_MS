import { defineStore } from "pinia";

export const langStore = defineStore("lang", {
    state: () => ({ locale: "kh" }),
    getters: {},
    actions: {},
});
