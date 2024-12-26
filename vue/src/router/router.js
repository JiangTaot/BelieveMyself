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
