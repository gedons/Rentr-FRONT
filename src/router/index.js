import { createRouter, createWebHistory } from "vue-router";
import store from "../store"; 

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/accountMode",
    name: "AccountMode",
    component: () => import("../views/AccountMode.vue"),
  },
  {
    path: "/registerUser",
    name: "RegisterUser",
    component: () => import("../views/RegisterUser.vue"),
  },
  {
    path: "/registerAgent",
    name: "RegisterAgent",
    component: () => import("../views/RegisterAgent.vue"),
  },
  {
    path: "/registerOwner",
    name: "RegisterOwner",
    component: () => import("../views/RegisterOwner.vue"),
  },
  {
    path: "/verify-email/:token",
    name: "EmailVerification",
    component: () => import("../views/EmailVerification.vue"),
  },
  {
    path: "/password-reset",
    name: "PasswordResetRequest",
    component: () => import("../views/PasswordResetRequest.vue"),
  },
  {
    path: "/reset-password/:token",
    name: "PasswordReset",
    component: () => import("../views/PasswordReset.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User/Index.vue"),
    meta: { requiresAuth: true },  
  },
  {
    path: "/agent",
    name: "Agent",
    component: () => import("../views/Agent/Index.vue"),
    meta: { requiresAuth: true },  
  },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
