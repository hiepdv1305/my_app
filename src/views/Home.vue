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
              <h2 class="section-title">Sản phẩm mới nhất</h2>
              <div
                class="product-carousel row"
              >
              <div v-for="event in events" :key="event.eventId">
                <div class="single-product col-md-3">
                  <div class="product-f-image">
                    <img :src="event.image" alt="" />
                    <div class="product-hover">
                      <button @click="add({name:event.eventName,eventId:event.eventId,image:event.image,currentPoint:event.currentPoint,totalPoint:event.totalPoint})">
                        <router-link :to="'/singleproduct/'+event.eventId" class="view-details-link" > See details</router-link>
                      </button>

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
              <h2 class="product-wid-title">Sự kiện sắp kết thúc</h2>
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
              <h2 class="product-wid-title">Sự kiện vừa xem</h2>
              <a href="#" class="wid-view-more">View All</a>
              <div v-for="item in recentItems" :key="item.id">
                <div class="single-wid-product">
                <router-link :to="'/singleproduct/'+item.eventId">
                <img @click="add({name:item.name,eventId:item.eventId,image:item.image,currentPoint:item.currentPoint,totalPoint:item.totalPoint})"
                    :src="item.image"
                    alt=""
                    class="product-thumb"
                />
                </router-link>

                <h2>
                  <router-link :to="'/singleproduct/'+item.eventId"><span @click="add({name:item.name,eventId:item.eventId,image:item.image,currentPoint:item.currentPoint,totalPoint:item.totalPoint})">{{item.name}}</span></router-link>
                </h2>
                <div class="product-wid-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="product-wid-price">
                  <ins>{{item.currentPoint}}/{{item.totalPoint}}</ins>
                </div>
              </div>
              </div>

            </div>
          </div>
          <div class="col-md-4">
            <div class="single-product-widget">
              <h2 class="product-wid-title">Sự kiện mới nhất</h2>
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
// prefixes of implementation that we want to test
// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

// prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

const recentItemData = [
]
var db
var request = window.indexedDB.open('recentItems')

request.onerror = function (event) {
  console.log('error: ')
}

request.onsuccess = function (event) {
  db = request.result
  console.log('success: ' + db)
}

request.onupgradeneeded = function (event) {
  var db = event.target.result
  var objectStore = db.createObjectStore('recentItem', { keyPath: 'id' })

  for (var i in recentItemData) {
    objectStore.add(recentItemData[i])
  }
}
export default {
  name: 'home',
  components: {},
  data () {
    return {
      count: 0,
      events: [],
      recentItems: [],
      recentItem: {
        id: null,
        name: null,
        eventId: null,
        image: null,
        currentPoint: null,
        totalPoint: null
      }
    }
  },
  mounted () {
    this.getAllEvent()
    this.readAll()
  },
  methods: {
    async even (arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function (a, b) {
        return new Date(a.createAt) - new Date(b.createAt)
      })
    },
    async getAllEvent () {
      let result = await api.getAllEvent()
      // console.log(result)
      this.events = result.data.data.Items
    },
    async add (recentItem) {
      var vm = this
      await new Promise((resolve, reject) => {
        var request = db.transaction(['recentItem'], 'readwrite')
          .objectStore('recentItem').add({
            id: vm.recentItems.length === 0 ? 0 : (vm.recentItems[0].id + 1),
            name: recentItem.name,
            eventId: recentItem.eventId,
            image: recentItem.image,
            currentPoint: recentItem.currentPoint,
            totalPoint: recentItem.totalPoint
          })
        request.onsuccess = function (event) {
          vm.recentItems.push({
            edit: false,
            id: vm.recentItems.length === 0 ? 0 : (vm.recentItems[0].id + 1),
            name: recentItem.name,
            eventId: recentItem.eventId,
            image: recentItem.image,
            currentPoint: recentItem.currentPoint,
            totalPoint: recentItem.totalPoint
          })
        }
        request.onerror = function (event) {
          alert('Unable to add data ')
        }
      })
    },
    async clear () {
      var vm = this
      await db.transaction(['recentItem'], 'readwrite')
        .objectStore('recentItem')
        .clear()
      vm.recentItems = []
    },
    async readAll () {
      var vm = this
      var i = 0
      try {
        vm.recentItems = []
        var objectStore = db.transaction('recentItem').objectStore('recentItem')
        if (objectStore) {
          objectStore.openCursor(null, 'prev').onsuccess = function (event) {
            var cursor = event.target.result

            if (cursor && i<3) {
              i++
              if (vm.recentItems) {
                vm.recentItems.push({ edit: false, id: cursor.key, name: cursor.value.name, eventId: cursor.value.eventId, image: cursor.value.image, currentPoint: cursor.value.currentPoint, totalPoint: cursor.value.totalPoint })
              }
              cursor.continue()
            }
          }
        }
      } catch (e) {
        vm.retryDisp()
      }
    },
    async remove (id, index) {
      var vm = this
      await db.transaction(['recentItem'], 'readwrite')
        .objectStore('recentItem')
        .delete(id)
      vm.recentItems.splice(index, 1)
    },
    async retryDisp () {
      var vm = this
      if (++vm.retryCount > 5) {
        console.log('Cannot open the database after 5 retries')
        vm.readAll()
      }
      setTimeout(function () { vm.readAll() }, 100)
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
