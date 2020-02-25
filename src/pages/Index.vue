<template>
  <Layout>
    <div class="home">
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
  </Layout>
</template>

<script>
// @ is an alias to /src
import ContentBlock from '@/components/ContentBlock.vue';
import backgroundImage from '../assets/stefan_at_work2.jpg';
export default {
  name: 'home',
  components: {
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
    }, 100);
  },
  metaInfo: {
    title: 'Stefan Dorresteijn | Home',
    description: 'Stefan Dorresteijn is a full stack engineer, specialized in building full commercial applications from scratch.'
  }
};
</script>

<style lang="scss" scoped>
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
</style>