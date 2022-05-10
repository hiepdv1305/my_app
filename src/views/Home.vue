<template>
  <div class="home">
    <div class="promo-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="single-promo promo1">
              <i class="fa fa-refresh"></i>
              <p>30 Days return</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="single-promo promo2">
              <i class="fa fa-truck"></i>
              <p>Free shipping</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="single-promo promo3">
              <i class="fa fa-lock"></i>
              <p>Secure payments</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="single-promo promo4">
              <i class="fa fa-gift"></i>
              <p>New products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End promo area -->

    <div class="maincontent-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="latest-product">
              <h2 class="section-title">Latest Products</h2>
              <div
                class="product-carousel row"
              >
              <div v-for="event in events" :key="event.eventId">
                <div class="single-product col-md-3">
                  <div class="product-f-image">
                    <img :src="event.image" alt="" />
                    <div class="product-hover">
                      <router-link :to="'/singleproduct/'+event.eventId" class="view-details-link"> See details</router-link>
                      <!-- <a href="single-product.html" class="view-details-link"
                        ><i class="fa fa-link"></i> See details</a
                      > -->
                    </div>
                  </div>

                  <h2>{{event.eventName}}</h2>
                  <div class="product-carousel-price">
                    <ins>{{event.currentPoint}}/{{event.totalPoint}}</ins>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="brands-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="brand-wrapper">
              <div class="brand-list">
                <img src="../assets/img/brand1.png" alt="" />
                <img src="../assets/img/brand2.png" alt="" />
                <img src="../assets/img/brand3.png" alt="" />
                <img src="../assets/img/brand4.png" alt="" />
                <img src="../assets/img/brand5.png" alt="" />
                <img src="../assets/img/brand6.png" alt="" />
                <img src="../assets/img/brand1.png" alt="" />
                <img src="../assets/img/brand2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End brands area -->

    <div class="product-widget-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="single-product-widget">
              <h2 class="product-wid-title">Top Sellers</h2>
              <a href="" class="wid-view-more">View All</a>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-1.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-2.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2>
                  <a href="single-product.html">Apple new mac book 2015</a>
                </h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-3.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="single-product-widget">
              <h2 class="product-wid-title">Recently Viewed</h2>
              <a href="#" class="wid-view-more">View All</a>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-4.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2>
                  <a href="single-product.html">Sony playstation microsoft</a>
                </h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-1.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2>
                  <a href="single-product.html">Sony Smart Air Condtion</a>
                </h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-2.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2>
                  <a href="single-product.html">Samsung gallaxy note 4</a>
                </h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="single-product-widget">
              <h2 class="product-wid-title">Top New</h2>
              <a href="#" class="wid-view-more">View All</a>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-3.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-4.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2>
                  <a href="single-product.html">Samsung gallaxy note 4</a>
                </h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div class="single-wid-product">
                <a href="single-product.html"
                  ><img
                    src="../assets/img/product-thumb-1.jpg"
                    alt=""
                    class="product-thumb"
                /></a>
                <h2>
                  <a href="single-product.html">Sony playstation microsoft</a>
                </h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/api'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      count: 0,
      events: {}
    }
  },
  mounted () {
    this.getAllEvent()
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
