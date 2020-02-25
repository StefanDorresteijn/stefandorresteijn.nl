export default [
  {
    path: "/writing/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/Users/stefandorresteijn/Projects/stefandorresteijn.nl/src/templates/Article.vue")
  },
  {
    path: "/writing/",
    component: () => import(/* webpackChunkName: "page--src--pages--writing-vue" */ "/Users/stefandorresteijn/Projects/stefandorresteijn.nl/src/pages/Writing.vue")
  },
  {
    path: "/projects/",
    component: () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/Users/stefandorresteijn/Projects/stefandorresteijn.nl/src/pages/Projects.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/stefandorresteijn/Projects/stefandorresteijn.nl/src/pages/Contact.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/stefandorresteijn/Projects/stefandorresteijn.nl/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/stefandorresteijn/Projects/stefandorresteijn.nl/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/stefandorresteijn/Projects/stefandorresteijn.nl/node_modules/gridsome/app/pages/404.vue")
  }
]

