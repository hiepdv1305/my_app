<template>
<div class="col-md-4">
            <div class="single-sidebar">
              <h2 class="sidebar-title">Tìm kiếm sản phẩm</h2>
              <form action="">
                <input type="text" placeholder="Tìm sản phẩm..." />
                <input type="submit" value="Tìm kiếm" />
              </form>
            </div>

            <div class="single-sidebar">
              <h2 class="sidebar-title">Sự kiện</h2>
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
              <h2 class="sidebar-title">Sự kiện vừa xem</h2>
              <ul v-for="item in recentItems" :key="item.id">
                <li><a :href="'/singleproduct/'+item.eventId" @click="add({name:item.name,eventId:item.eventId,image:item.image,currentPoint:item.currentPoint,totalPoint:item.totalPoint})">{{item.name}}</a></li>
              </ul>
            </div>
          </div>
</template>
<script>
import api from '../api/api'
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
  name: 'ScSidebar',
  data () {
    return {
      sellected: '',
      events: {},
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
    this.sellected = this.$router.apps[0]._route.name
    this.readAll()
  },
  methods: {
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

            if (cursor && i<5) {
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
