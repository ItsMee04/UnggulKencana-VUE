<script>
import { RouterLink, RouterView } from "vue-router";
import WirlyLoader from "./components/WirlyLoader.vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Header,
    Sidebar,
  },
  computed: {
    isLoginPage() {
      return this.$route.path === "/login";
    },
  },
};
</script>

<template>
  <WirlyLoader />
  <div class="main-wrapper">
    <Header v-if="!isLoginPage" />
    <Sidebar v-if="!isLoginPage" />
    <div class="page-wrapper">
      <RouterView />
    </div>
  </div>
</template>
