<template>
    <div
      class="container-login100"
      style="background-image: url('images/bg-01.jpg')"
    >
      <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <!-- <form class="login100-form validate-form"> -->
          <span class="login100-form-title p-b-49"> Sign Up </span>
          <div
            class="wrap-input100 validate-input m-b-23"
          >
            <span class="label-input100">Fullname</span>
            <input
              v-model="schema.fullname"
              class="input100"
              type="text"
              placeholder="Type your name"
            />
            <span class="focus-input100"></span>
          </div>
          <div
            class="wrap-input100 validate-input m-b-23"
          >
            <span class="label-input100">email</span>
            <input
              v-model="schema.email"
              class="input100"
              type="text"
              placeholder="Type your email"
            />
            <span class="focus-input100"></span>
          </div>
          <div
            class="wrap-input100 validate-input m-b-23"
          >
            <span class="label-input100">Phone Number</span>
            <input
              v-model="schema.phonenumber"
              class="input100"
              type="text"
              placeholder="Type your phone number"
            />
            <span class="focus-input100"></span>
          </div>
          <div
            class="wrap-input100 validate-input m-b-23"
            data-validate="Username is reauired"
          >
            <span class="label-input100">Username</span>
            <input
              v-model="schema.username"
              class="input100"
              type="text"
              placeholder="Type your username"
            />
            <span class="focus-input100"></span>
          </div>

          <div
            class="wrap-input100 validate-input m-b-23"
            data-validate="Password is required"
          >
            <span class="label-input100">Password</span>
            <input
              v-model="schema.password"
              class="input100"
              type="password"
              placeholder="Type your password"
            />
            <span class="focus-input100"></span>
          </div>
          <div
            class="wrap-input100 validate-input m-b-23"
            data-validate="Password is required"
          >
            <span class="label-input100">Confirm password</span>
            <input
              v-model="schema.confirmpassword"
              class="input100"
              type="password"
              placeholder="Type your password"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <button class="login100-form-btn" @click="signup">Sign Up</button>
            </div>
          </div>

          <!-- <div class="txt1 text-center p-t-54 p-b-20">
            <span> Or Sign Up Using </span>
          </div>

          <div class="flex-c-m">
            <a href="#" class="login100-social-item bg1">
              <i class="fa fa-facebook"></i>
            </a>

            <a href="#" class="login100-social-item bg2">
              <i class="fa fa-twitter"></i>
            </a>

            <a href="#" class="login100-social-item bg3">
              <i class="fa fa-google"></i>
            </a>
          </div> -->

          <div class="flex-col-c p-t-155">
            <span class="txt1 p-b-17"> Or Sign Up Using </span>

            <router-link to="/login" class="txt2"> Sign In </router-link>
          </div>
        <!-- </form> -->
      </div>
    </div>
</template>

<script>
import api from '../api/api'
export default {
  name: 'register',
  data () {
    return {
      schema: {
        fullname: '',
        email: '',
        phonenumber: '',
        username: '',
        password: '',
        confirmpassword: ''
      }
    }
  },
  methods: {
    async signup () {
      console.log(this.schema)
      let result = await api.register(this.schema)
      console.log(result)
      if (result.data.statusCode === 200) {
        this.$router.push({ path: '/login' })
        alert('Đăng ký tài khoản thành công')
      }
    }
  }
}
</script>
<style>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/material-design-iconic-font.min.css";
@import "../assets/css/animate.css";
@import "../assets/css/hamburgers.min.css";
@import "../assets/css/animsition.min.css";
@import "../assets/css/select2.min.css";
@import "../assets/css/daterangepicker.css";
@import "../assets/css/util.css";
@import "../assets/css/main.css";
</style>
