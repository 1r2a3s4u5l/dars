<template>
  <div class="sidebar">
      <router-link
      v-for="(item,index) in props.items" :key="index"
      class="sidebar-link"
      :to="item.path"
      >
      {{ item.title }}
      </router-link>
  </div>
</template>


<script setup>

const props = defineProps({
  items:Array
})
</script>

<style lang="scss" scoped>
.sidebar{
  width: 100%;
  height: 100vh;
  background-color: #000016;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .sidebar-link{
      width: 100%;
      padding: 10px 15px;
      text-decoration: none;
      border-radius: 5px;
      background-color: #fff;
      color: #000016;
  }
}
</style>