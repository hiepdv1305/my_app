<template>
<div class="col-md-4">
            <div class="single-sidebar">
              <h2 class="sidebar-title">Search Products</h2>
              <form action="">
                <input type="text" placeholder="Search products..." />
                <input type="submit" value="Search" />
              </form>
            </div>

            <div class="single-sidebar">
              <h2 class="sidebar-title">Events</h2>
              <div v-for="ev in events" :key="ev.eventId">
                  <div class="thubmnail-recent">
                <img
                  :src="ev.image"
                  class="recent-thumb"
                  alt=""
                />
                <h2><router-link :to="'/singleproduct/'+ev.eventId"> {{ev.eventName}}</router-link></h2>
                <div class="product-sidebar-price">
                  <ins>{{ev.currentPoint}}/{{ev.totalPoint}}</ins>
                </div>
              </div>
              </div>

            </div>

            <div class="single-sidebar">
              <h2 class="sidebar-title">Recent Posts</h2>
              <ul>
                <li><a href="">Sony Smart TV - 2015</a></li>
                <li><a href="">Sony Smart TV - 2015</a></li>
                <li><a href="">Sony Smart TV - 2015</a></li>
                <li><a href="">Sony Smart TV - 2015</a></li>
                <li><a href="">Sony Smart TV - 2015</a></li>
              </ul>
            </div>
          </div>
</template>
<script>
import api from '../api/api'
export default {
  name: 'ScSidebar',
  data () {
    return {
      sellected: '',
      events: {}
    }
  },
  mounted () {
    this.getAllEvent()
    this.sellected = this.$router.apps[0]._route.name
  },
  methods: {
    async getAllEvent () {
      let result = await api.getAllEvent()
      console.log(result)
      this.events = result.data.data.Items
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
