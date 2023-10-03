<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 my-3" v-for="(item, index) in showData" :key="index">
        <div class="card text-center">
          <div class="card-body">
            <img :src="item.image" alt="img" class="image" />
          </div>
          <div class="card-header">
            <h4>{{ item.title }}</h4>
          </div>
          <div class="card-body text-center">
            <button @click="viewDetails(item.id)" class="btn btn-success">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-info" @click="bos" v-if="hasMoreProducts">
        Show more {{ products.length - showData.length }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const viewDetails = (id) => {
  router.push({ name: "single_product", params: { id: id } });
};
const products = ref([]);
const getProducts = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then(
      (res) => (
        (products.value = res.data), (showData.value = res.data.slice(0, 4))
      )
    )
    .catch((err) => console.log(err));
};

getProducts();
let count = ref(0);
count = 8;
let showData = ref([]);

const bos = () => {
  showData.value = products.value.slice(0, count);
  count += 4;
};

const hasMoreProducts = computed(() => {
  return showData.value.length < products.value.length;
});
</script>

<style lang="scss" scoped>
.image {
  width: 90%;
  height: 250px;
}
</style>
