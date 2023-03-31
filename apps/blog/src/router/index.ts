import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Post.vue'
import PostID from '../pages/post/PostID.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: PostID }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
