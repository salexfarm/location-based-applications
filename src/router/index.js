import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import UserLocation from '@/pages/UserLocation.vue'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export default new Router({
  routes: [{
    path: '/',
    component: UserLocation
  }]
})
