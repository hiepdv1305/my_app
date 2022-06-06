<template>
  <div>
    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="product-content-right">
              <div class="product-breadcroumb">
                <a href="">Home</a>
                <a href="">Category Name</a>
                <a href="">{{event.eventName}}</a>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="product-images">
                    <div class="product-main-img">
                      <img :src="event.image" alt="" />
                    </div>
                    <div class="product-gallery">
                      <img src="../../assets/img/product-thumb-1.jpg" alt="" />
                      <img src="../../assets/img/product-thumb-2.jpg" alt="" />
                      <img src="../../assets/img/product-thumb-3.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="product-inner">
                    <h2 class="product-name">{{event.eventName}}</h2>
                    <div class="product-inner-price">
                      <ins>{{event.currentPoint}}/{{event.totalPoint}}</ins>
                    </div>

                    <div class="cart">
                      <div class="quantity">
                        <input v-model.number="point"
                          type="number"
                          title="Qty"
                        />
                      </div>
                      <button class="add_to_cart_button" @click="momopayment">
                         Buy
                      </button>
                    </div>
                    <div role="tabpanel">
                      <ul class="product-tab" role="tablist">
                        <li role="presentation" class="active">
                          <a
                            href="#home"
                            aria-controls="home"
                            role="tab"
                            data-toggle="tab"
                            >Description</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#profile"
                            aria-controls="profile"
                            role="tab"
                            data-toggle="tab"
                            >Reviews</a
                          >
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane fade in active"
                          id="home"
                        >
                          <h2>Product Description</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam tristique, diam in consequat iaculis, est
                            purus iaculis mauris, imperdiet facilisis ante
                            ligula at nulla. Quisque volutpat nulla risus, id
                            maximus ex aliquet ut. Suspendisse potenti. Nulla
                            varius lectus id turpis dignissim porta. Quisque
                            magna arcu, blandit quis felis vehicula, feugiat
                            gravida diam. Nullam nec turpis ligula. Aliquam quis
                            blandit elit, ac sodales nisl. Aliquam eget dolor
                            eget elit malesuada aliquet. In varius lorem lorem,
                            semper bibendum lectus lobortis ac.
                          </p>

                          <p>
                            Mauris placerat vitae lorem gravida viverra. Mauris
                            in fringilla ex. Nulla facilisi. Etiam scelerisque
                            tincidunt quam facilisis lobortis. In malesuada
                            pulvinar neque a consectetur. Nunc aliquam gravida
                            purus, non malesuada sem accumsan in. Morbi vel
                            sodales libero.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="related-products-wrapper">
                <h2 class="related-products-title">Related Products</h2>
                <div class="related-products-carousel row">
                  <div class="single-product col-md-4">
                    <div class="product-f-image">
                      <img src="../../assets/img/product-1.jpg" alt="" />
                      <div class="product-hover">
                        <a href="" class="add-to-cart-link"
                          ><i class="fa fa-shopping-cart"></i> Add to cart</a
                        >
                        <a href="" class="view-details-link"
                          ><i class="fa fa-link"></i> See details</a
                        >
                      </div>
                    </div>

                    <h2><a href="">Sony Smart TV - 2015</a></h2>

                    <div class="product-carousel-price">
                      <ins>$700.00</ins> <del>$100.00</del>
                    </div>
                  </div>
                  <div class="single-product col-md-4">
                    <div class="product-f-image">
                      <img src="../../assets/img/product-2.jpg" alt="" />
                      <div class="product-hover">
                        <a href="" class="add-to-cart-link"
                          ><i class="fa fa-shopping-cart"></i> Add to cart</a
                        >
                        <a href="" class="view-details-link"
                          ><i class="fa fa-link"></i> See details</a
                        >
                      </div>
                    </div>

                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                    <div class="product-carousel-price">
                      <ins>$899.00</ins> <del>$999.00</del>
                    </div>
                  </div>
                  <div class="single-product col-md-4">
                    <div class="product-f-image">
                      <img src="../../assets/img/product-3.jpg" alt="" />
                      <div class="product-hover">
                        <a href="" class="add-to-cart-link"
                          ><i class="fa fa-shopping-cart"></i> Add to cart</a
                        >
                        <a href="" class="view-details-link"
                          ><i class="fa fa-link"></i> See details</a
                        >
                      </div>
                    </div>

                    <h2><a href="">Apple new i phone 6</a></h2>

                    <div class="product-carousel-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>
                  </div>
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
import api from '../../api/api'
export default {
  name: 'singleproduct',
  components: {},
  data () {
    return {
      count: 0,
      event: {},
      point: 1
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    async getEvent () {
      let id = this.$route.path.substring(1).split('/')[1]
      // console.log(id)
      let result = await api.getEvent(id)
      // console.log(result)
      this.event = result.data.data.Items[0]
    },
    async momopayment () {
      console.log(typeof this.point)
      // let paymentresult = await api.momopayment({
      //   point: this.point
      // })
      // console.log(paymentresult)
      // window.location.href = paymentresult.data.data.payUrl
      let eventId = this.event.eventId
      let a = await api.createDeal({
        eventId: eventId,
        point: this.point,
        image: this.event.image,
        eventName: this.event.eventName,
        price: this.point * 10000
      })
      console.log(a)
      this.$router.push({ path: '/cart' })
    }
  }
}
</script>
<style>
@import url("http://fonts.googleapis.com/css?family=Raleway:400,100");
@import url("http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300");
@import url("http://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,700,600");
@import "../../assets/css/style.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/font-awesome.min.css";
@import "../../assets/css/owl.carousel.css";
@import "../../assets/css/responsive.css";
</style>
