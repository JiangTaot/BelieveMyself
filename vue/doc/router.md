# Router

## vue项目添加页面的路由

### 添加步骤

1. 安装 router
   ~~~ba
   npm install vue-router@4
   ~~~

2. 自定义 router.js
   ~~~javascript
   import {createMemoryHistory, createRouter} from "vue-router";
   
   import Page1 from "@/page/Page1.vue";
   import Page2 from "@/page/Page2.vue";
   
   const routes = [
       {path: "/", component: Page1},
       {path: "/page2", component: Page2},
   ]
   
   const router = createRouter({
       history: createMemoryHistory(),
       routes,
   })
   
   export default router
   ~~~

3. 加载自定义 router.js
   ~~~javascript
   import './assets/main.css'
   
   import {createApp} from 'vue'
   import router from "@/router/router.js";
   import App from './App.vue'
   
   var app = createApp(App);
   app.use(router)
   app.mount('#app')
   ~~~

4. 使用 router
   ~~~vue
   <template>
     <main>
       <RouterView />
     </main>
   </template>
   ~~~

   ~~~vue
   <script>
   export default {
     name: "Page1"
   }
   </script>
   
   <template>
     <RouterLink to="/page2">页面1</RouterLink>
   </template>
   ~~~

   ~~~vue
   <script>
   export default {
     name: "Page2"
   }
   </script>
   
   <template>
     <RouterLink to="/">页面2</RouterLink>
   </template>
   ~~~

   