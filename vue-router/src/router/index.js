// 路由配置文件

// 引入设置组件
import { createRouter, createWebHashHistory } from 'vue-router'

// 引入页面组件
import Home from '../views/Home.vue'

// 定义路径与组件之间的关系
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // 添加重定向设置，以默认跳转到某个页面
        redirect: "/about/1",
        component: () => import('../views/About.vue'),
        children: [
            {
                // 子路径不能写 "/"
                path: "1",
                component: () => import('../views/AboutSub/About1.vue'),
                name: "About1"
            },
            {
                path: "2",
                component: () => import('../views/AboutSub/About2.vue'),
                name: "About2",
                // 子路由中还可以再继续嵌套路由 ↓
                // children[{}]
            }
        ]
    },
    {
        path: "/news",
        name: "News",
        // 异步加载，除首页外都推荐使用此方法
        component: () => import('../views/News.vue')
    },
    {
        path: "/newsdetail:way",
        name: "NewsDetail",
        component: () => import('../views/NewsDetail.vue')
    }
]

// 配置信息中需要页面相关的配置
const router = createRouter({
    // 定义访问方式，需要在上方引入
    // createWebHashHistory()表示使用#号开头的方式访问页面，原理：锚点链接
    // createWebHistory()表示使用/开头的方式访问页面，此时需要后台配合做重定向，否则会出现404，原理：h5 pushState()
    history: createWebHashHistory(),
    routes
})

// 导出路由
export default router;