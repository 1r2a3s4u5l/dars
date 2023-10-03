<template>
  <countries ref="countries_modal" />
  <div class="card container mt-5">
    <div class="card-header text-center">
      <h1>LogIn</h1>
    </div>
    <Form class="card-body d-flex">
      <Field
        rules="email"
        :modelValue="info.name"
        v-slot="{ errors }"
        name="Email"
      >
        <input
          type="text"
          placeholder="Email"
          class="form-control"
          v-model="info.name"
          id="email"
        />
        <p class="text-danger" v-if="errors && errors.length">
          {{ errors[0] }}
        </p>
      </Field>





      <Field
        rules="required"
        :modelValue="info.password"
        v-slot="{ errors }"
        name="Password"
      >
      <input
      type="password"
      placeholder="Password"
      class="form-control"
      v-model="info.password"
      id="password"
      />
      <p class="text-danger" v-if="errors && errors.length">
          {{ errors[0] }}
        </p>
    </Field>
    </Form>
    <div class="card-footer d-flex flex-row gap-2">
      <Btn :title="'success'" @click="savebnt">Sign In</Btn>
      <button @click="createItem" class="btn btn-success">Registration</button>
    </div>
  </div>
  <template>
    <button @click="toast">Toast it!</button>
  </template>
</template>

<script setup>
import { ref } from "vue";
import Btn from "../components/ui/Btn.vue";
import { useRouter } from "vue-router";
import countries from "../components/pages/countries.vue";
import $http from "../components/plugins/axios";
import { Form, Field } from "vee-validate";
const router = useRouter();
const countries_modal = ref();
const info = ref({
  email: "",
  password: null,
});

const savebnt = () => {
  // if (info.value.name == "admin" && info.value.password == 1234) {
  //   router.push({ name: "admin" });
  // } else if (info.value.name == "superadmin" && info.value.password == 5678) {
  //   router.push({ name: "superadmin" });
  // } else {
  //   toast();
  // }

  $http
    .post("/user/login", {
      email: info.value.name,
      password: info.value.password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        router.push({ name: "userlar" });
      }
    })
    .catch((err) => {
      toast();
      console.log(err);
    });
};

import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

const toast = () => {
  createToast("Name or password is wrong!", {
    position: "top-right",
    type: "danger",
    transition: "bounce",
  });
};

const createItem = async () => {
  await countries_modal.value.openModal();
};
</script>

<style lang="scss" scoped>
.d-flex {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.form-control {
  width: 50%;
}

.card-footer {
  display: flex;
  justify-content: center;
}
</style>
