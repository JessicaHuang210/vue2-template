<template>
  <div class="home">
    <input v-model="username" type="text" placeholder="username" />
    <input v-model="password" type="password" placeholder="password" />
    <button type="button" @click="handleLogin">submit</button>
    <div>
      {{ wsRes.UserName }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Socket from "@/utils/api";
export default {
  name: "Home",
  data() {
    return { username: "", password: "" };
  },
  computed: {
    ...mapState("ws", { wsRes: state => state.wsRes })
  },
  methods: {
    ...mapMutations({ setUser: "auth/setUser" }),
    async handleLogin() {
      Socket.send(
        JSON.stringify({
          Method: "UserLogin",
          UserName: "AAAA0001",
          Password: "AAAA0001",
          UserIP: "192.1.1.1",
          HWType: "MKU82TA/A",
          SWVer: "13.1.1"
        })
      );
    }
  }
};
</script>
