<template>
  <div>
    <button
      :class="props.title == 'success' ? 'btn btn-success' : 'btn btn-danger'"
      type="submit"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
