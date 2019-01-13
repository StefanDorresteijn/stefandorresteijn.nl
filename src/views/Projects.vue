<template>
  <div class="projects">
    <transition name="fade">
      <div class="body"
        v-if="showContent"
        :background="backgroundImage"
      >
         <h1>Projects</h1>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentBlock from '@/components/ContentBlock.vue';
import backgroundImage from '../assets/stefan_at_work2.jpg';

export default {
    name: "projects",
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
}
</script>

<style>

</style>
