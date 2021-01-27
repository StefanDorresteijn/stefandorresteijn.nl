const c1 = () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/home/stefan/Projects/stefandorresteijn.nl/src/templates/Article.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--writing-vue" */ "/home/stefan/Projects/stefandorresteijn.nl/src/pages/Writing.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/home/stefan/Projects/stefandorresteijn.nl/src/pages/Projects.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/home/stefan/Projects/stefandorresteijn.nl/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/stefan/Projects/stefandorresteijn.nl/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/stefan/Projects/stefandorresteijn.nl/src/pages/Index.vue")

export default [
  {
    path: "/writing/:slug/",
    component: c1
  },
  {
    path: "/writing/",
    component: c2
  },
  {
    path: "/projects/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
