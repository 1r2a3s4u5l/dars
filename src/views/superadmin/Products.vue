<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 my-3" v-for="(item, index) in products" :key="index">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
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
    .then((res) => (products.value = res.data))
    .catch((err) => console.log(err));
};

getProducts();
</script>

<style lang="scss" scoped>
.image {
  width: 90%;
  height: 250px;
}
</style>
