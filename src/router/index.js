import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/HelloVue'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/about',
      name: 'HelloVue',
      components: {
        default: HelloVue,
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        header: Header,
        footer: Footer,
      }
    }
  ]
})
