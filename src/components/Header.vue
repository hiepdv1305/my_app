<template>
  <div class="header-area">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="user-menu">
            <ul v-if="this.user.username">
              <li>
                <router-link to="#"
                  ><i class="fa fa-user"></i>
                  {{ this.user.username }}</router-link
                >
              </li>
              <li>
                <router-link to="#"
                  ><i class="fa fa-bell"></i> Thông báo</router-link
                >
              </li>
              <li>
                <router-link to="/rechange"
                  ><i class="fa fa-arrow-circle-up"></i> Nạp tiền
                </router-link>
              </li>
              <li>
                <router-link to="#"
                  ><i class="fa fa-heart"></i> Yêu thích</router-link
                >
              </li>
              <li>
                <router-link to="/cart"
                  ><i class="fa fa-user"></i> Giỏ hàng
                </router-link>
              </li>
              <li>
                <router-link to="/login"
                  ><i class="fa fa-user"></i> Đăng xuất</router-link
                >
              </li>
            </ul>
            <ul v-else>
              <li>
                <router-link to="/register"
                  ><i class="fa fa-user"></i> Đăng ký</router-link
                >
              </li>
              <li>
                <router-link to="/"
                  ><i class="fa fa-user"></i
                  ><span @click="logOut">Đăng nhập</span>></router-link
                >
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
                <a href="/"><img src="../assets/img/logo.png" /></a>
              </h1>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="shopping-item">
              <a href="/cart"
                ><span class="cart-amunt">{{ total }}</span>
                <i class="fa fa-shopping-cart"></i>
                <span class="product-count">{{ count }}</span></a
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
        </div>
      </div>
    </div>
    <!-- End mainmenu area -->
  </div>
</template>
<script>
import api from '../api/api'
import jwt_decode from 'jwt-decode'
export default {
  name: 'ScHeader',
  data () {
    return {
      sellected: '',
      user: {},
      total: 0,
      count: 0
    }
  },
  mounted () {
    this.getUser()
    this.getMyEvent()
    this.sellected = this.$router.apps[0]._route.name
    // this.getNotification()
    setInterval(() => {
      this.getNotification()
    }, 3000)
  },
  methods: {
    async logOut () {
      localStorage.removeItem('accessToken')
      window.location.replace('/')
    },
    async getNotification () {
      let notification = await api.getNotification()
      console.log(notification)
    },
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
    },
    async getMyEvent () {
      let a = await api.getMyEvent()
      // console.log(a)
      this.myEvents = a.data.data.Items
      this.myEvents.forEach((event) => {
        this.total += event.price
        this.count += 1
      })
      this.total = this.total.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND'
      })
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
