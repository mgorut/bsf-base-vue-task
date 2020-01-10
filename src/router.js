import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import StudentComponent from "./views/student.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/students",
            name: "student",
            component: StudentComponent
        }
    ]
})