<template>
  <div class="home">
    <transition name="slide-down">
      <NavBar />
    </transition>
    <transition name="fade">
      <ContentBlock
        v-if="showContent"
        :background="backgroundImage"
      >
        <div class="content" id="body">
          <h1 class="has-text-white" id="pageTitle">Stefan Dorresteijn</h1>
          <i class="has-text-white" id="subTitle">[ steɪfɔn ] - proper noun</i>
          <p class="has-text-white" id="wordDefinition">
            Stefan Dorresteijn is a full stack engineer,
            specialized in building full commercial
            applications from scratch.</p>
        </div>
      </ContentBlock>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import backgroundImage from '../assets/stefan_at_work.jpg';

export default {
  name: 'home',
  components: {
    NavBar,
    ContentBlock,
  },
  data: function data() {
    return {
      showContent: false,
      backgroundImage,
    };
  },
  created() {
    setTimeout(() => {
      this.showContent = true;
    }, 1000);
  },
};
</script>

<style lang="scss">

  .logo {
    margin: 15px auto;
  }

  #pageTitle {
    margin-bottom: 0;
    font-family: 'Voces';
    font-weight: 400;
  }

  #subTitle {
    font-weight: 300;
    font-family: 'Roboto';
  }

  #wordDefinition {
    margin-top: 0.5em;
    font-weight: 400;
    font-family: 'Roboto';
  }

  #body {
    max-width: 350px;
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
