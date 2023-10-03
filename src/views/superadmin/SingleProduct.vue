<template>
  <div class="main m-5">
    <img :src="product.image" alt="img" class="img" />
    <div class="texts">
      <h2>{{ product.title }}</h2>
      <h3>Price - ${{ product.price }}</h3>
      <h3>Product description:</h3>
      <hr />
      <p>{{ product.description }}</p>
      <button class="btn btn-success"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const product = ref({});

const getSingleProduct = () => {
  axios
    .get(`https://fakestoreapi.com/products/${route.params.id}`)
    .then((res) => (product.value = res.data))
    .catch((err) => {
      console.log(err);
    });
};
getSingleProduct();
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
}

.img {
  width: 20%;
  height: 200%;
}
.texts {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
}
.btn-success{
  width: 150px;
}
</style>
