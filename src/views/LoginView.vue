<template lang="">
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper login-new">
        <div class="container">
          <div class="login-content user-login">
            <div class="login-logo">
              <img src="/src/assets/img/logo.png" alt="img" />
              <a href="index.html" class="login-logo logo-white">
                <img src="/src/assets/img/logo-white.png" alt="" />
              </a>
            </div>
            <form @submit.prevent="login">
              <div class="login-userset">
                <div class="login-userheading">
                  <h3>Sign In</h3>
                  <h4>
                    Access the Dreamspos panel using your email and passcode.
                  </h4>
                </div>
                <div class="form-login">
                  <label class="form-label">Email Address</label>
                  <div class="form-addons">
                    <input type="email" v-model="email" class="form-control" />
                    <img src="/src/assets/img/icons/mail.svg" alt="img" />
                  </div>
                </div>
                <div class="form-login">
                  <label>Password</label>
                  <div class="pass-group">
                    <input
                      v-model="password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      class="pass-input"
                    />
                    <span
                      :class="
                        isPasswordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'
                      "
                      class="toggle-password"
                      @click="togglePassword"
                    ></span>
                  </div>
                </div>
                <div class="form-login authentication-check">
                  <div class="row">
                    <div class="col-6">
                      <div class="custom-control custom-checkbox">
                        <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-6 text-end">
                      <a class="forgot-link" href="forgot-password-3.html"
                        >Forgot Password?</a
                      >
                    </div>
                  </div>
                </div>
                <div class="form-login">
                  <button class="btn btn-login" type="submit">Sign In</button>
                </div>
                <div class="signinform">
                  <h4>
                    New on our platform?<a
                      href="register-3.html"
                      class="hover-a"
                    >
                      Create an account</a
                    >
                  </h4>
                </div>
                <div class="form-setlogin or-text">
                  <h4>OR</h4>
                </div>
                <div class="form-sociallink">
                  <ul class="d-flex">
                    <li>
                      <a href="javascript:void(0);" class="facebook-logo">
                        <img
                          src="/src/assets/img/icons/facebook-logo.svg"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <img
                          src="/src/assets/img/icons/google.png"
                          alt="Google"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="apple-logo">
                        <img
                          src="/src/assets/img/icons/apple-logo.svg"
                          alt="Apple"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div
            class="my-4 d-flex justify-content-center align-items-center copyright-text"
          >
            <p>Copyright &copy; 2023 DreamsPOS. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
  <div class="customizer-links" id="setdata">
    <ul class="sticky-sidebar">
      <li class="sidebar-icons">
        <a
          href="#"
          class="navigation-add"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-original-title="Theme"
        >
          <i data-feather="settings" class="feather-five"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      isPasswordVisible: false, // Untuk toggle password
      email: "", // Untuk menyimpan email yang dimasukkan
      password: "", // Untuk menyimpan password yang dimasukkan
    };
  },
  methods: {
    togglePassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },

    async login() {
      // Menyiapkan data yang akan dikirim
      const loginData = {
        email: this.email,
        password: this.password,
      };

      try {
        // Mengirim permintaan POST ke API login
        const response = await axios.post(
          "http://127.0.0.1:8000/api/login",
          loginData
        );

        // Menangani response jika login berhasil
        if (response.data.success) {
          console.log("Login berhasil");
          // Simpan token atau informasi pengguna di localStorage/sessionStorage
          localStorage.setItem("token", response.data.token);
          this.$router.push("/dashboard"); // Redirect ke dashboard (sesuaikan dengan route Anda)
        } else {
          console.error("Login gagal: ", response.data.message);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat login: ", error);
      }
    },
  },
};
</script>
<style></style>
