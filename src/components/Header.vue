<template>
  <div class="header-area">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="user-menu">
            <ul v-if="this.user.username">
              <li>
                <router-link to="#"><i class="fa fa-user"></i> {{this.user.username}}</router-link>
              </li>
              <li>
                <router-link to="#"><i class="fa fa-heart"></i> Wishlist</router-link>
              </li>
              <li>
                <router-link to="/cart"><i class="fa fa-user"></i> My Cart</router-link>
              </li>
              <li>
                <router-link to="/checkout"><i class="fa fa-user"></i> Checkout</router-link>
              </li>
              <li>
                <router-link to="/login"><i class="fa fa-user"></i> Logout</router-link>
              </li>
            </ul>
            <ul v-else>
              <li>
                <router-link to="/register"><i class="fa fa-user"></i> Register</router-link>
              </li>
              <li>
                <router-link to="/login"><i class="fa fa-user"></i> Login</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-4">
          <div class="header-right">
            <ul class="list-unstyled list-inline">
              <li class="dropdown dropdown-small">
                <a
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  class="dropdown-toggle"
                  href="#"
                  ><span class="key">currency :</span
                  ><span class="value">USD </span><b class="caret"></b
                ></a>
                <ul class="dropdown-menu">
                  <li><a href="#">USD</a></li>
                  <li><a href="#">INR</a></li>
                  <li><a href="#">GBP</a></li>
                </ul>
              </li>

              <li class="dropdown dropdown-small">
                <a
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  class="dropdown-toggle"
                  href="#"
                  ><span class="key">language :</span
                  ><span class="value">English </span><b class="caret"></b
                ></a>
                <ul class="dropdown-menu">
                  <li><a href="#">English</a></li>
                  <li><a href="#">French</a></li>
                  <li><a href="#">German</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="site-branding-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="logo">
              <h1>
                <a href="./"><img src="../assets/img/logo.png" /></a>
              </h1>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="shopping-item">
              <a href="cart"
                >Cart - <span class="cart-amunt">$100</span>
                <i class="fa fa-shopping-cart"></i>
                <span class="product-count">5</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End site branding area -->

    <div class="mainmenu-area">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li v-bind:class="{ 'active' : sellected === 'home'}" @click="sellected='home'"><router-link to="/">Home</router-link></li>
              <li v-bind:class="{ 'active' : sellected === 'cart'}" @click="sellected='cart'"><router-link to="/cart">Cart</router-link></li>
              <li v-bind:class="{ 'active' : sellected === 'checkout'}" @click="sellected='checkout'"><router-link to="/checkout">Checkout</router-link></li>
              <li v-bind:class="{ 'active' : sellected === 'other'}" @click="sellected='other'"><router-link to="#">Other</router-link></li>
              <li v-bind:class="{ 'active' : sellected === 'contact'}" @click="sellected='contact'"><router-link to="#">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End mainmenu area -->
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode'
export default {
  name: 'ScHeader',
  data () {
    return {
      sellected: '',
      user: {}
    }
  },
  mounted () {
    this.getUser()
    this.sellected = this.$router.apps[0]._route.name
  },
  methods: {
    getUser () {
      let token = localStorage.getItem('accessToken')
      // console.log(token)
      if (token) {
        try {
          this.user = jwt_decode(token)
          // console.log(this.user)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
}
</script>
<style>
@import url("http://fonts.googleapis.com/css?family=Raleway:400,100");
@import url("http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300");
@import url("http://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,700,600");
@import "../assets/css/style.css";
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/owl.carousel.css";
@import "../assets/css/responsive.css";
</style>
