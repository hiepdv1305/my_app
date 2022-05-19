<template>
  <div>
    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="product-content-right">
              <div class="woocommerce">
                <div class="woocommerce-info">
                  Returning customer?
                  <a
                    class="showlogin"
                    data-toggle="collapse"
                    href="#login-form-wrap"
                    aria-expanded="false"
                    aria-controls="login-form-wrap"
                    >Click here to login</a
                  >
                </div>

                <!-- <div class="woocommerce-info">
                  Have a coupon?
                  <a
                    class="showcoupon"
                    data-toggle="collapse"
                    href="#coupon-collapse-wrap"
                    aria-expanded="false"
                    aria-controls="coupon-collapse-wrap"
                    >Click here to enter your code</a
                  >
                </div> -->

                <!-- <form> -->
                <div id="customer_details" class="col2-set">
                  <div>
                    <div class="woocommerce-billing-fields">
                      <h3>Billing Details</h3>

                      <p
                        id="billing_first_name_field"
                        class="validate-required"
                      >
                        <label class="" for="billing_first_name"
                          >First Name
                          <abbr title="required" class="required">*</abbr>
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_first_name"
                          name="billing_first_name"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_last_name_field"
                        class="form-row form-row-last validate-required"
                      >
                        <label class="" for="billing_last_name"
                          >Last Name
                          <abbr title="required" class="required">*</abbr>
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_last_name"
                          name="billing_last_name"
                          class="input-text"
                        />
                      </p>
                      <div class="clear"></div>

                      <p
                        id="billing_address_1_field"
                        class="
                          form-row form-row-wide
                          address-field
                          validate-required
                        "
                      >
                        <label class="" for="billing_address_1"
                          >Address
                          <abbr title="required" class="required">*</abbr>
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder="Street address"
                          id="billing_address_1"
                          name="billing_address_1"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_address_2_field"
                        class="form-row form-row-wide address-field"
                      >
                        <input
                          type="text"
                          value=""
                          placeholder="Apartment, suite, unit etc. (optional)"
                          id="billing_address_2"
                          name="billing_address_2"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_city_field"
                        class="
                          form-row form-row-wide
                          address-field
                          validate-required
                        "
                        data-o_class="form-row form-row-wide address-field validate-required"
                      >
                        <label class="" for="billing_city"
                          >Town / City
                          <abbr title="required" class="required">*</abbr>
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder="Town / City"
                          id="billing_city"
                          name="billing_city"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_state_field"
                        class="
                          form-row form-row-first
                          address-field
                          validate-state
                        "
                        data-o_class="form-row form-row-first address-field validate-state"
                      >
                        <label class="" for="billing_state">County</label>
                        <input
                          type="text"
                          id="billing_state"
                          name="billing_state"
                          placeholder="State / County"
                          value=""
                          class="input-text"
                        />
                      </p>

                      <div class="clear"></div>

                      <p
                        id="billing_email_field"
                        class="
                          form-row form-row-first
                          validate-required validate-email
                        "
                      >
                        <label class="" for="billing_email"
                          >Email Address
                          <abbr title="required" class="required">*</abbr>
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_email"
                          name="billing_email"
                          class="input-text"
                        />
                      </p>

                      <p
                        id="billing_phone_field"
                        class="
                          form-row form-row-last
                          validate-required validate-phone
                        "
                      >
                        <label class="" for="billing_phone"
                          >Phone
                          <abbr title="required" class="required">*</abbr>
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder=""
                          id="billing_phone"
                          name="billing_phone"
                          class="input-text"
                        />
                      </p>
                      <div class="clear"></div>
                    </div>
                  </div>
                </div>

                <h3 id="order_review_heading">Your order</h3>

                <div id="order_review" style="position: relative">
                  <table class="shop_table">
                    <thead>
                      <tr>
                        <th class="product-name">Product</th>
                        <th class="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="cart_item">
                        <td class="product-name">
                          {{event.description}}
                        </td>
                        <td class="product-total">
                          <span class="amount">{{event.currentPoint}}/{{ event.totalPoint }} VND</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="cart-subtotal">
                        <th>Your Point</th>
                        <td>
                          <input
                            v-model="point"
                            type="number"
                            size="4"
                            class="input-text qty text"
                            title="Qty"
                            value="1"
                            name="quantity"
                            min="1"
                            step="1"
                          />
                        </td>
                      </tr>

                      <tr class="order-total">
                        <th>Order Total</th>
                        <td>
                          <strong
                            ><span class="amount"
                              >{{ point * 10000 }} VND</span
                            ></strong
                          >
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div>
                    <div class="form-row place-order">
                      <button @click="momopayment">Checkout</button>
                    </div>

                    <div class="clear"></div>
                  </div>
                </div>
                <!-- </form> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import api from '../../api/api'
// const https = require('https')
// const config = require('../../config/config')
export default {
  name: 'checkout',
  components: {},
  data () {
    return {
      count: 0,
      event: {},
      product: {},
      point: 1
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    async getEvent () {
      let id = this.$route.path.substring(1).split('/')[1]
      //   console.log(id)
      let result = await api.getEvent(id)
      // console.log(result)
      this.event = result.data.data.Items[0]
    },
    async momopayment () {
      let paymentresult = await api.momopayment({
        point: this.point
      })
      console.log(paymentresult)
      window.location.href = paymentresult.data.data.payUrl
      // this.$router.push(paymentresult.data.data.payUrl)
      let eventId = this.event.eventId
      let a = await api.createDeal({
        eventId: eventId,
        point: this.point,
        image: this.event.image,
        eventName: this.event.eventName,
        price: this.point * 10000
      })
      console.log(a)
    }
    // async momopayment () {
    //   var partnerCode = config.partnerCode
    //   var accessKey = config.accessKey
    //   var secretkey = config.secretkey
    //   var requestId = partnerCode + new Date().getTime()
    //   var orderId = requestId
    //   var orderInfo = 'pay with MoMo'
    //   var redirectUrl = config.redirectUrl
    //   var ipnUrl = 'https://callback.url/notify'
    //   // var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
    //   var amount = (this.point * 10000).toString()
    //   var requestType = 'captureWallet'
    //   var extraData = '' // pass empty value if your merchant does not have stores
    //   var rawSignature =
    //     'accessKey=' +
    //     accessKey +
    //     '&amount=' +
    //     amount +
    //     '&extraData=' +
    //     extraData +
    //     '&ipnUrl=' +
    //     ipnUrl +
    //     '&orderId=' +
    //     orderId +
    //     '&orderInfo=' +
    //     orderInfo +
    //     '&partnerCode=' +
    //     partnerCode +
    //     '&redirectUrl=' +
    //     redirectUrl +
    //     '&requestId=' +
    //     requestId +
    //     '&requestType=' +
    //     requestType
    //   // puts raw signature
    //   console.log('--------------------RAW SIGNATURE----------------')
    //   console.log(rawSignature)
    //   // signature
    //   const crypto = require('crypto')
    //   var signature = crypto
    //     .createHmac('sha256', secretkey)
    //     .update(rawSignature)
    //     .digest('hex')
    //   console.log('--------------------SIGNATURE----------------')
    //   console.log(signature)

    //   // json object send to MoMo endpoint
    //   const requestBody = JSON.stringify({
    //     partnerCode: partnerCode,
    //     accessKey: accessKey,
    //     requestId: requestId,
    //     amount: amount,
    //     orderId: orderId,
    //     orderInfo: orderInfo,
    //     redirectUrl: redirectUrl,
    //     ipnUrl: ipnUrl,
    //     extraData: extraData,
    //     requestType: requestType,
    //     signature: signature,
    //     lang: 'en'
    //   })
    //   // Create the HTTPS objects

    //   const options = {
    //     hostname: 'test-payment.momo.vn',
    //     port: 443,
    //     path: '/v2/gateway/api/create',
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Content-Length': Buffer.byteLength(requestBody)
    //     }
    //   }
    //   // Send the request and get the response
    //   let result = await axios.post('https://test-payment.momo.vn', requestBody, options).then(res => {
    //     console.log(res)
    //   })
    //   console.log(result)
    //   // const req = https.request(options, (res) => {
    //   //   console.log(`Status: ${res.statusCode}`)
    //   //   console.log(`Headers: ${JSON.stringify(res.headers)}`)
    //   //   res.setEncoding('utf8')
    //   //   res.on('data', (body) => {
    //   //     console.log('Body: ')
    //   //     console.log(body)
    //   //     console.log('payUrl: ')
    //   //     console.log(JSON.parse(body).payUrl)
    //   //   })
    //   // }).write(requestBody)
    //   // console.log(req)
    // }
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
