<template>
  <div>
    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="product-content-right">
              <div class="woocommerce">
                <form method="post" action="#">
                  <table cellspacing="0" class="shop_table cart">
                    <thead>
                      <tr>
                        <th class="product-remove">&nbsp;</th>
                        <th class="product-thumbnail">&nbsp;</th>
                        <th class="product-name">Sự kiện</th>
                        <th class="product-price">Giá</th>
                        <th class="product-quantity">Điểm</th>
                        <th class="product-subtotal">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="event in myEvents" :key="event.eventId" class="cart_item">
                        <td class="product-remove">
                          <a title="Remove this item" class="remove" href="#"
                            >×</a
                          >
                        </td>

                        <td class="product-thumbnail">
                          <a href="singleproduct"
                            ><img
                              width="145"
                              height="145"
                              alt="poster_1_up"
                              class="shop_thumbnail"
                              :src="event.image"
                          /></a>
                        </td>

                        <td class="product-name">
                          <a :href="'/singleproduct/'+event.eventId">{{event.eventName}}</a>
                        </td>

                        <td class="product-price">
                          <span class="amount">10000VND</span>
                        </td>

                        <td class="product-quantity">
                          <div class="quantity buttons_added">
                            <span class="amount">{{event.currentPoint}}</span>
                          </div>
                        </td>

                        <td class="product-subtotal">
                          <span class="amount">{{event.price}} VND</span>
                        </td>
                      </tr>
                      <!-- <tr>
                        <td class="actions" colspan="6">
                          <div class="coupon">
                            <label for="coupon_code">Coupon:</label>
                            <input
                              type="text"
                              placeholder="Coupon code"
                              value=""
                              id="coupon_code"
                              class="input-text"
                              name="coupon_code"
                            />
                            <input
                              type="submit"
                              value="Apply Coupon"
                              name="apply_coupon"
                              class="button"
                            />
                          </div>
                          <input
                            type="submit"
                            value="Update Cart"
                            name="update_cart"
                            class="button"
                          />
                          <input
                            type="submit"
                            value="Checkout"
                            name="proceed"
                            class="checkout-button button alt wc-forward"
                          />
                        </td>
                      </tr> -->
                    </tbody>
                  </table>
                </form>

                <div class="cart-collaterals">
                  <div class="cross-sells">
                    <h2>Có thể bạn thích...</h2>
                    <ul class="products">
                      <li class="product">
                        <a href="singleproduct">
                          <img
                            width="325"
                            height="325"
                            alt="T_4_front"
                            class="attachment-shop_catalog wp-post-image"
                            src="../assets/img/product-2.jpg"
                          />
                          <h3>Ship Your Idea</h3>
                          <span class="price"
                            ><span class="amount">£20.00</span></span
                          >
                        </a>

                        <a
                          class="add_to_cart_button"
                          data-quantity="1"
                          data-product_sku=""
                          data-product_id="22"
                          rel="nofollow"
                          href="singleproduct"
                          >Select options</a
                        >
                      </li>

                      <li class="product">
                        <a href="singleproduct">
                          <img
                            width="325"
                            height="325"
                            alt="T_4_front"
                            class="attachment-shop_catalog wp-post-image"
                            src="../assets/img/product-4.jpg"
                          />
                          <h3>Ship Your Idea</h3>
                          <span class="price"
                            ><span class="amount">£20.00</span></span
                          >
                        </a>

                        <a
                          class="add_to_cart_button"
                          data-quantity="1"
                          data-product_sku=""
                          data-product_id="22"
                          rel="nofollow"
                          href="singleproduct"
                          >Select options</a
                        >
                      </li>
                    </ul>
                  </div>

                  <!-- <div class="cart_totals">
                    <h2>Tổng</h2>

                    <table cellspacing="0">
                      <tbody>
                        <tr class="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong><span class="amount">{{total}} VND</span></strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div> -->
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
  name: 'cart',
  components: {},
  data () {
    return {
      count: 0,
      myEvents: [],
      total: 0
    }
  },
  mounted () {
    // setInterval(() => {
    //   ++this.count
    // }, 1000)
    this.getMyEvent()
  },
  methods: {
    async getMyEvent () {
      let a = await api.getMyEvent()
      console.log(a)
      this.myEvents = a.data.data.Items
      this.myEvents.forEach(event => {
        this.total += event.price
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
