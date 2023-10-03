export default {
  path: "/admin",
  name: "admin",
  component: () => {
    return import("../views/admin/Admin.vue");
  },
  children: [
    {
      path: "/students",
      name: "students",
      component: () => {
        return import("../views/admin/Students.vue");
      },
    },
    {
      path: "/teachers",
      name: "teachers",
      component: () => {
        return import("../views/admin/Teachers.vue");
      },
    },
    {
      path: "/groups",
      name: "groups",
      component: () => {
        return import("../views/admin/Groups.vue");
      },
    },
    {
      path: "/users",
      name: "users",
      // component: () => {
      //   return import("../views/admin/Users.vue");
      // },
      component: () => {
        return import("../views/admin/Users2.vue");
      },
    },
    {
      path: "/userlar",
      name: "userlar",
      component: () => {
        return import("../views/admin/Countries.vue");
      },
    },
  ],
};
