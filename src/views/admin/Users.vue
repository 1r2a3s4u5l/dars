<template>
  <div class="users">
    <div class="users_item">
      <div class="users_item-table">
        <AppTable :headers="headers" :body="users">
          <template #body_company="{ item }">
            <span>{{ item.company.name }}</span>
          </template>

          <template #body_address="{ item }">
            <span>{{ item.address.city }}</span>
          </template>
        </AppTable>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import AppTable from "@/components/ui/app-table.vue";

export default {
  components: {
    AppTable,
  },
  setup() {
    const users = ref([]);
    const headers = [
      { title: "Name", value: "name" },
      { title: "Username", value: "username" },
      { title: "Phone", value: "phone" },
      { title: "Address", value: "address" },
      { title: "Company", value: "company" },
    ];

    const getUsers = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          users.value = res.data;
        })
        .catch((err) => console.log(err));
    };

    onMounted(getUsers);

    return {
      users,
      headers,
    };
  },
};
</script>
