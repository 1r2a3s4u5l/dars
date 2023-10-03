<template>
  <table class="table table-primary table-striped m-1">
    <thead>
      <tr>
        <th scope="col" v-for="(item, index) in headers" :key="index">
          {{ item.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in body" :key="index">
        <td v-for="(bodyInHeader, bodyInIndex) in headers" :key="bodyInIndex">
          <slot :name="`body_${bodyInHeader.value}`" :item="item">{{
            item[bodyInHeader.value]
          }}</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
  },
  body: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
