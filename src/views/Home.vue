<template>
  <div class="home">
    <transition name="slide-down">
      <NavBar />
    </transition>
    <div class="contentBlock">
      <h1>Hello There</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'home',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">

  .logo {
    margin: 15px auto;
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
    transition: all 2s;
  }
  .fade-enter, .fade-leave-to
  {
    opacity: 0;
  }
</style>
