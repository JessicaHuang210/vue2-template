<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Socket from "@/utils/api";
import { mapMutations } from "vuex";
export default {
  name: "App",
  created() {
    Socket.$on("message", this.handleGetMessage);
  },
  beforeDestroy() {
    Socket.$off("message", this.handleGetMessage);
  },
  methods: {
    ...mapMutations("ws", ["setWsRes"]),
    handleGetMessage(msg) {
      this.setWsRes(JSON.parse(msg));
    }
  }
};
</script>
