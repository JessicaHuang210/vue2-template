<template>
  <div class="login" @keyup.enter="handleLogin">
    <transition appear name="fade-down">
      <div class="login--box">
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-width="auto"
          label-position="top"
        >
          <el-form-item prop="username">
            <el-input v-model="form.username" :clearable="true" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              :clearable="true"
            />
          </el-form-item>
          <el-button type="primary" @click="handleLogin">
            Login
          </el-button>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Socket from "@/utils/api";
export default {
  name: "Home",
  data() {
    return {
      form: { username: "", password: "" },
      rules: {
        username: [{ required: true, message: "帳號欄位必填" }],
        password: [{ required: true, message: "密碼欄位必填" }]
      }
    };
  },
  computed: {
    ...mapState("ws", { wsRes: state => state.wsRes })
  },
  watch: {
    wsRes(val) {
      val.StatusCode === 1 && this.$router.push({ name: "About" });
    }
  },
  methods: {
    ...mapMutations({ setUser: "auth/setUser" }),
    async handleLogin() {
      this.$refs.form.validate(async valid => {
        if (!valid) return;
        Socket.send(
          JSON.stringify({
            Method: "UserLogin",
            UserName: this.form.username.toUpperCase(),
            Password: this.form.password,
            UserIP: "192.1.1.1",
            HWType: "MKU82TA/A",
            SWVer: "13.1.1"
          })
        );
      });
    }
  }
};
</script>
<style lang="scss" src="./style.scss" scoped />
