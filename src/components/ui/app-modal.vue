<template>
  <div class="app-modal" :class="{ 'app-modal-show': modelValue }">
    <appTransition>
      <div v-if="modelValue" class="app-modal__body">
        <slot></slot>
      </div>
    </appTransition>
  </div>

  <appTransition>
    <span
      @click="$emit('update:modelValue', false)"
      v-if="modelValue"
      class="app-modal-shadow"
    ></span>
  </appTransition>
</template>

<script setup>
import appTransition from "./app-transition.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.app-modal {
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 50%;
  max-height: 600px;
  top: 50%;
  background-color:rgb(30, 234, 253);
  z-index: 1;
  opacity: 0;
  overflow: auto;
  border-radius: 0.5rem;
}

.app-modal-show {
  opacity: 1;
  z-index: 1000;
}

::-webkit-scrollbar {
  display: none;
}

.app-modal__body {
  padding: 20px;
  // z-index: 10000;
}

.app-modal-shadow {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

@media (max-width: 990px) {
  .app-modal {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .app-modal {
    width: 80%;
  }
}

@media (max-width: 576px) {
  .app-modal {
    width: 90%;
  }
}
</style>
