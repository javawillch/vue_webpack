import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/HelloVue'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sphere from '@/components/Sphere'
// import About from '@/components/About'
import P5Mouse from '@/components/P5Mouse'
import P5Test from '@/components/P5Test'


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
    },
    {
      path: '/sphere',
      name: 'Sphere',
      components: {
        default: Sphere,
        header: Header,
        footer: Footer,
      }
    },
    {
      path: '/work',
      name: 'P5Mouse',
      components: {
        default: P5Test,
        header: Header,
        footer: Footer,
      }
    }    
  ]
})
