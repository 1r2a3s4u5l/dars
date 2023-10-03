<template>
  <AppModal v-model="dialog">
    <h1>Modal</h1>
  </AppModal>
</template>

<script setup>
import { ref } from "vue";
import AppModal from "../ui/app-modal.vue";
const dialog = ref(false);

const openModal = () => {
  dialog.value = true;
};

const openDialog = () => {
  console.log("dialog");
};
defineExpose({ openDialog, openModal });
</script>

<style lang="scss" scoped></style>
