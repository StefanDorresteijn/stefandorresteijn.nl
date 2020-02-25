// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import VueCodeHighlight from 'vue-code-highlight';
import 'vue-code-highlight/themes/prism.css'
import 'buefy/dist/buefy.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Buefy)
  Vue.use(VueCodeHighlight)
  Vue.component('Layout', DefaultLayout)
}
