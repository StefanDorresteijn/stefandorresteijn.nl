<template>
  <div id="app" class="layout" >
    <transition name="slide-down">
      <NavBar />
    </transition>
    <slot v-if="showNav" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'app',
  components: {
    NavBar,
  },
  data: function data() {
    return {
      showNav: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showNav = true;
    }, 500);
  },
};
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Voces|Roboto:300,400&display=swap');
  @import url('https://use.fontawesome.com/releases/v5.15.2/css/all.css');
  html, body {
    background-color: black;
    margin:0;
    padding:0;
  }
  // Animations
  .slide-down-enter-active {
    transition: all 1s;
  }
  .slide-down-enter, .slide-down-leave-to
  {
    transform: translateY(-60px);
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-to
  {
    opacity: 0;
  }
</style>
