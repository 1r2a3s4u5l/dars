export default {
  path: "/superadmin",
  name: "superadmin",
  component: () => {
    return import("../views/superadmin/Superadmin.vue");
  },
  children: [
    {
      path: "/notebooks",
      name: "notebooks",
      component: () => {
        return import("../views/superadmin/Notebooks.vue");
      },
    },
    {
      path: "/laptops",
      name: "laptops",
      component: () => {
        return import("../views/superadmin/Laptops.vue");
      },
    },
    {
      path: "/smartphones",
      name: "smartphones",
      component: () => {
        return import("../views/superadmin/Smartphones.vue");
      },
    },

    {
      path: "/products",
      name: "products",
      component: () => {
        return import("../views/superadmin/Products.vue");
      },
    },
    {
      path: "/single_product/:id",
      name: "single_product",
      meta: {
        child: "product_lists",
      },
      component: () => {
        return import("../views/superadmin/SingleProduct.vue");
      },
    },
  ],
};
