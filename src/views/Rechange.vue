<template>
<section class="multi_step_form">
  <form id="msform">
    <!-- Tittle -->
    <div class="tittle">
      <h2>Verification Process</h2>
      <p>In order to use this service, you have to complete this verification process</p>
    </div>
    <!-- progressbar -->
    <ul id="progressbar">
      <li class="active">Chọn ngân hàng</li>
      <li v-bind:class="{ 'active' : step >= 2}">Thông tin</li>
      <li v-bind:class="{ 'active' : step >= 3}">Hoàn thành</li>
    </ul>
    <div v-if="step ===1">
<h3>Chọn ngân hàng của bạn:</h3>
      <div class="row" style="padding-top:20px">
        <span class="col-md-3" @click="schema.bankName = 'Viettinbank';create()">
          <img src="../assets/img/logo-ngan-hang-Vietinbank.png" />
        </span>
        <span class="col-md-3" @click="schema.bankName = 'Vietcombank';create()">
          <img src="../assets/img/logo-ngan-hang-Vietcombank.png" />
        </span>
        <span class="col-md-3" @click="schema.bankName = 'Techcombank';create()">
          <img src="../assets/img/logo-ngan-hang-Techcombank.png" />
        </span>
        <span class="col-md-3" @click="schema.bankName = 'BIDV';create()">
          <img src="../assets/img/logo-ngan-hang-BIDV.png" />
        </span>
      </div>
       <div class="row" style="padding-top:20px">
        <span class="col-md-3" style="padding-top:25px" @click="schema.bankName = 'VPbank';create()">
           <img src="../assets/img/logo-ngan-hang-VPbank.png" />
        </span>
        <span class="col-md-3" style="padding-top:25px" @click="schema.bankName = 'Sacombank';create()">
          <img src="../assets/img/logo-ngan-hang-Sacombank.png" />
        </span>
        <span class="col-md-3" @click="schema.bankName = 'Agribank';create()">
          <img src="../assets/img/Agribank-logo-01.png" />
        </span>
        <span class="col-md-3" @click="schema.bankName = 'TPbank';create()">
          <img src="../assets/img/TPbank-logo-01.png" />
        </span>
      </div>
    </div>
    <div v-if="step ===2">
    <h3>Vui lòng chuyển số tiền cần nạp qua một trong những tài khoản sau:</h3>
    <div v-for="account in currentBankAccount" :key="account.id">
      <div>{{account.account}}</div>
    </div>
<h3>Thông tin của bạn:</h3>
        <div class="">
    <div class="product-content-right">
      <div id="customer_details" class="">
        <div>
          <div class="woocommerce-billing-fields">
            <p
              id="billing_last_name_field"
              class="form-row form-row-last validate-required"
            >
              <label class="" for="billing_last_name"
                >Tên chủ tài khoản
                <abbr title="required" class="required">*</abbr>
              </label>
              <input v-model="schema.ownName"
                type="text"
                value=""
                placeholder="Tên chủ tài khoản"
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
                >Tài khoản của bạn
                <abbr title="required" class="required">*</abbr>
              </label>
              <input v-model="schema.sourceAccount"
                type="text"
                value=""
                placeholder="Tài khoản của bạn"
                id="billing_address_1"
                name="billing_address_1"
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
                >Tài khoản đích
                <abbr title="required" class="required">*</abbr>
              </label>
              <input v-model="schema.targetAccount"
                type="text"
                value=""
                placeholder="Tài khoản đích"
                id="billing_city"
                name="billing_city"
                class="input-text"
              />
            </p>
            <p
              id="billing_address_1_field"
              class="
                form-row form-row-wide
                address-field
                validate-required
              "
            >
              <label class="" for="billing_address_1"
                >Số tiền
                <abbr title="required" class="required">*</abbr>
              </label>
              <input v-model="schema.amout"
                type="text"
                value=""
                placeholder="Số tiền"
                id="billing_address_1"
                name="billing_address_1"
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
              <label class="" for="billing_state">Mã giao dịch
                <abbr title="required" class="required">*</abbr>
              </label>
              <input v-model="schema.transactionCode"
                type="text"
                id="billing_state"
                name="billing_state"
                placeholder="Mã giao dịch"
                value=""
                class="input-text"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      <button type="button" class="action-button previous_button" @click="step=step-1">Back</button>
      <button type="button" class="next action-button" @click="step=step+1">Continue</button>
    </div>
    <div v-if="step ===3">
      <h3>Kiểm tra thông tin:</h3>
        <p
          id="billing_state_field"
          class="
            form-row form-row-first
            address-field
            validate-state
          "
          data-o_class="form-row form-row-first address-field validate-state"
        >
          <label class="" for="billing_state">Ngân hàng
            <abbr title="required" class="required">*</abbr>
          </label>
          <span>{{schema.bankName}}</span>
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
          <label class="" for="billing_state">Tên chủ thẻ
            <abbr title="required" class="required">*</abbr>
          </label>
          <span>{{schema.ownName}}</span>
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
          <label class="" for="billing_state">Tài khoản nguồn
            <abbr title="required" class="required">*</abbr>
          </label>
          <span>{{schema.sourceAccount}}</span>
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
          <label class="" for="billing_state">Tài khoản đích
            <abbr title="required" class="required">*</abbr>
          </label>
          <span>{{schema.targetAccount}}</span>
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
          <label class="" for="billing_state">Số tiền
            <abbr title="required" class="required">*</abbr>
          </label>
          <span>{{schema.amout}}</span>
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
          <label class="" for="billing_state">Mã giao dịch
            <abbr title="required" class="required">*</abbr>
          </label>
          <span>{{schema.transactionCode}}</span>
        </p>
      <button type="button" class="action-button previous_button" @click="step=step-1">Back</button>
      <a href="#" class="action-button">Finish</a>
    </div>
  </form>
</section>
<!-- End Multi step form -->
</template>

<script>
// import axios from 'axios'
import api from '../api/api'
import agribank from '../assets/bankaccount/agribank.json'
import bidv from '../assets/bankaccount/bidv.json'
import sacombank from '../assets/bankaccount/sacombank.json'
import techcombank from '../assets/bankaccount/techcombank.json'
import tpbank from '../assets/bankaccount/tpbank.json'
import vietcombank from '../assets/bankaccount/vietcombank.json'
import viettinbank from '../assets/bankaccount/viettinbank.json'
import vpbank from '../assets/bankaccount/vpbank.json'
// const https = require('https')
// const config = require('../../config/config')

export default {
  name: 'rechange',
  components: {},
  data () {
    return {
      count: 0,
      event: {},
      product: {},
      point: 1,
      step: 1,
      schema: {
        bankName: '',
        ownName: '',
        sourceAccount: '',
        targetAccount: '',
        amout: '',
        transactionCode: ''
      },
      currentBankAccount: [],
      agribank: agribank,
      sacombank: sacombank,
      techcombank: techcombank,
      tpbank: tpbank,
      bidv: bidv,
      vietcombank: vietcombank,
      viettinbank: viettinbank,
      vpbank: vpbank

    }
  },
  mounted () {
    // this.getEvent()
    // console.log(this.agribank)
  },
  methods: {
    // async getEvent () {
    //   let id = this.$route.path.substring(1).split('/')[1]
    //   //   console.log(id)
    //   let result = await api.getEvent(id)
    //   // console.log(result)
    //   this.event = result.data.data.Items[0]
    // },
    async momopayment () {
      let paymentresult = await api.momopayment({
        point: this.point
      })
      console.log(paymentresult)
      window.location.href = paymentresult.data.data.payUrl
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
    },
    async create () {
      this.step += 1
      switch (this.schema.bankName) {
        case 'Viettinbank':
          this.currentBankAccount = this.viettinbank
          break
        case 'BIDV':
          this.currentBankAccount = this.bidv
          break
        case 'Vietcombank':
          this.currentBankAccount = this.vietcombank
          break
        case 'Techcombank':
          this.currentBankAccount = this.techcombank
          break
        case 'VPbank':
          this.currentBankAccount = this.vpbank
          break
        case 'Sacombank':
          this.currentBankAccount = this.sacombank
          break
        case 'Agribank':
          this.currentBankAccount = this.agribank
          break
        case 'TPbank':
          this.currentBankAccount = this.tpbank
          break
        default:
          console.log('bankName invalid')
      }
      console.log(this.currentBankAccount)
      // await api.createrechange(this.schema)
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
/* @charset "UTF-8"; */
/*font Variables*/
/*Color Variables*/
@import url("https://fonts.googleapis.com/css?family=Roboto:300i,400,400i,500,700,900");
.multi_step_form {
  background: #f6f9fb;
  display: block;
  overflow: hidden;
}
.multi_step_form #msform {
  text-align: center;
  position: relative;
  /* padding-top: 50px; */
  min-height: 820px;
  max-width: 810px;
  margin: 0 auto;
  background: #ffffff;
  z-index: 1;
}
.multi_step_form #msform .tittle {
  text-align: center;
  padding-bottom: 55px;
}
.multi_step_form #msform .tittle h2 {
  font: 500 24px/35px "Roboto", sans-serif;
  color: #3f4553;
  padding-bottom: 5px;
}
.multi_step_form #msform .tittle p {
  font: 400 16px/28px "Roboto", sans-serif;
  color: #5f6771;
}
.multi_step_form #msform fieldset {
  border: 0;
  padding: 20px 105px 0;
  position: relative;
  width: 100%;
  left: 0;
  right: 0;
}
.multi_step_form #msform fieldset:not(:first-of-type) {
  display: none;
}
.multi_step_form #msform fieldset h3 {
  font: 500 18px/35px "Roboto", sans-serif;
  color: #3f4553;
}
.multi_step_form #msform fieldset h6 {
  font: 400 15px/28px "Roboto", sans-serif;
  color: #5f6771;
  padding-bottom: 30px;
}
.multi_step_form #msform fieldset .intl-tel-input {
  display: block;
  background: transparent;
  border: 0;
  box-shadow: none;
  outline: none;
}
.multi_step_form #msform fieldset .intl-tel-input .flag-container .selected-flag {
  padding: 0 20px;
  background: transparent;
  border: 0;
  box-shadow: none;
  outline: none;
  width: 65px;
}
.multi_step_form #msform fieldset .intl-tel-input .flag-container .selected-flag .iti-arrow {
  border: 0;
}
.multi_step_form #msform fieldset .intl-tel-input .flag-container .selected-flag .iti-arrow:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  font: normal normal normal 24px/7px Ionicons;
  color: #5f6771;
}
.multi_step_form #msform fieldset #phone {
  padding-left: 80px;
}
.multi_step_form #msform fieldset .form-group {
  padding: 0 10px;
}
.multi_step_form #msform fieldset .fg_2,
.multi_step_form #msform fieldset .fg_3 {
  padding-top: 10px;
  display: block;
  overflow: hidden;
}
.multi_step_form #msform fieldset .fg_3 {
  padding-bottom: 70px;
}
.multi_step_form #msform fieldset .form-control,
.multi_step_form #msform fieldset .product_select {
  border-radius: 3px;
  border: 1px solid #d8e1e7;
  padding: 0 20px;
  height: auto;
  font: 400 15px/48px "Roboto", sans-serif;
  color: #5f6771;
  box-shadow: none;
  outline: none;
  width: 100%;
}
.multi_step_form #msform fieldset .form-control.placeholder,
.multi_step_form #msform fieldset .product_select.placeholder {
  color: #5f6771;
}
.multi_step_form #msform fieldset .form-control:-moz-placeholder,
.multi_step_form #msform fieldset .product_select:-moz-placeholder {
  color: #5f6771;
}
.multi_step_form #msform fieldset .form-control::-moz-placeholder,
.multi_step_form #msform fieldset .product_select::-moz-placeholder {
  color: #5f6771;
}
.multi_step_form #msform fieldset .form-control::-webkit-input-placeholder,
.multi_step_form #msform fieldset .product_select::-webkit-input-placeholder {
  color: #5f6771;
}
.multi_step_form #msform fieldset .form-control:hover, .multi_step_form #msform fieldset .form-control:focus,
.multi_step_form #msform fieldset .product_select:hover,
.multi_step_form #msform fieldset .product_select:focus {
  border-color: #5cb85c;
}
.multi_step_form #msform fieldset .form-control:focus.placeholder,
.multi_step_form #msform fieldset .product_select:focus.placeholder {
  color: transparent;
}
.multi_step_form #msform fieldset .form-control:focus:-moz-placeholder,
.multi_step_form #msform fieldset .product_select:focus:-moz-placeholder {
  color: transparent;
}
.multi_step_form #msform fieldset .form-control:focus::-moz-placeholder,
.multi_step_form #msform fieldset .product_select:focus::-moz-placeholder {
  color: transparent;
}
.multi_step_form #msform fieldset .form-control:focus::-webkit-input-placeholder,
.multi_step_form #msform fieldset .product_select:focus::-webkit-input-placeholder {
  color: transparent;
}
.multi_step_form #msform fieldset .product_select:after {
  display: none;
}
.multi_step_form #msform fieldset .product_select:before {
  content: "";
  position: absolute;
  top: 0;
  right: 20px;
  font: normal normal normal 24px/48px Ionicons;
  color: #5f6771;
}
.multi_step_form #msform fieldset .product_select .list {
  width: 100%;
}
.multi_step_form #msform fieldset .done_text {
  padding-top: 40px;
}
.multi_step_form #msform fieldset .done_text .don_icon {
  height: 36px;
  width: 36px;
  line-height: 36px;
  font-size: 22px;
  margin-bottom: 10px;
  background: #5cb85c;
  display: inline-block;
  border-radius: 50%;
  color: #ffffff;
  text-align: center;
}
.multi_step_form #msform fieldset .done_text h6 {
  line-height: 23px;
}
.multi_step_form #msform fieldset .code_group {
  margin-bottom: 60px;
}
.multi_step_form #msform fieldset .code_group .form-control {
  border: 0;
  border-bottom: 1px solid #a1a7ac;
  border-radius: 0;
  display: inline-block;
  width: 30px;
  font-size: 30px;
  color: #5f6771;
  padding: 0;
  margin-right: 7px;
  text-align: center;
  line-height: 1;
}
.multi_step_form #msform fieldset .passport {
  margin-top: -10px;
  padding-bottom: 30px;
  position: relative;
}
.multi_step_form #msform fieldset .passport .don_icon {
  height: 36px;
  width: 36px;
  line-height: 36px;
  font-size: 22px;
  position: absolute;
  top: 4px;
  right: 0;
  background: #5cb85c;
  display: inline-block;
  border-radius: 50%;
  color: #ffffff;
  text-align: center;
}
.multi_step_form #msform fieldset .passport h4 {
  font: 500 15px/23px "Roboto", sans-serif;
  color: #5f6771;
  padding: 0;
}
.multi_step_form #msform fieldset .input-group {
  padding-bottom: 40px;
}
.multi_step_form #msform fieldset .input-group .custom-file {
  width: 100%;
  height: auto;
}
.multi_step_form #msform fieldset .input-group .custom-file .custom-file-label {
  width: 168px;
  border-radius: 5px;
  cursor: pointer;
  font: 700 14px/40px "Roboto", sans-serif;
  border: 1px solid #99a2a8;
  text-align: center;
  transition: all 300ms linear 0s;
  color: #5f6771;
}
.multi_step_form #msform fieldset .input-group .custom-file .custom-file-label i {
  font-size: 20px;
  padding-right: 10px;
}
.multi_step_form #msform fieldset .input-group .custom-file .custom-file-label:hover, .multi_step_form #msform fieldset .input-group .custom-file .custom-file-label:focus {
  background: #5cb85c;
  border-color: #5cb85c;
  color: #fff;
}
.multi_step_form #msform fieldset .input-group .custom-file input {
  display: none;
}
.multi_step_form #msform fieldset .file_added {
  text-align: left;
  padding-left: 190px;
  padding-bottom: 60px;
}
.multi_step_form #msform fieldset .file_added li {
  font: 400 15px/28px "Roboto", sans-serif;
  color: #5f6771;
}
.multi_step_form #msform fieldset .file_added li a {
  color: #5cb85c;
  font-weight: 500;
  display: inline-block;
  position: relative;
  padding-left: 15px;
}
.multi_step_form #msform fieldset .file_added li a i {
  font-size: 22px;
  padding-right: 8px;
  position: absolute;
  left: 0;
  transform: rotate(20deg);
}
.multi_step_form #msform #progressbar {
  margin-bottom: 30px;
  overflow: hidden;
}
.multi_step_form #msform #progressbar li {
  list-style-type: none;
  color: #99a2a8;
  font-size: 9px;
  width: calc(100% / 3);
  float: left;
  position: relative;
  font: 500 13px/1 "Roboto", sans-serif;
}
.multi_step_form #msform #progressbar li:nth-child(2):before {
  content: "";
}
.multi_step_form #msform #progressbar li:nth-child(3):before {
  content: "";
}
.multi_step_form #msform #progressbar li:before {
  content: "";
  font: normal normal normal 30px/50px Ionicons;
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: block;
  background: #eaf0f4;
  border-radius: 50%;
  margin: 0 auto 10px auto;
}
.multi_step_form #msform #progressbar li:after {
  content: "";
  width: 100%;
  height: 10px;
  background: #eaf0f4;
  position: absolute;
  left: -50%;
  top: 21px;
  z-index: -1;
}
.multi_step_form #msform #progressbar li:last-child:after {
  width: 150%;
}
.multi_step_form #msform #progressbar li.active {
  color: #5cb85c;
}
.multi_step_form #msform #progressbar li.active:before, .multi_step_form #msform #progressbar li.active:after {
  background: #5cb85c;
  color: white;
}
.multi_step_form #msform .action-button {
  background: #5cb85c;
  color: white;
  border: 0 none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 130px;
  font: 700 14px/40px "Roboto", sans-serif;
  border: 1px solid #5cb85c;
  margin: 0 5px;
  text-transform: uppercase;
  display: inline-block;
}
.multi_step_form #msform .action-button:hover, .multi_step_form #msform .action-button:focus {
  background: #405867;
  border-color: #405867;
}
.multi_step_form #msform .previous_button {
  background: transparent;
  color: #99a2a8;
  border-color: #99a2a8;
}
.multi_step_form #msform .previous_button:hover, .multi_step_form #msform .previous_button:focus {
  background: #405867;
  border-color: #405867;
  color: #fff;
}
</style>
