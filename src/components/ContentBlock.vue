<template>
    <div class="contentBlock is-flex">
        <transition name="fade">
            <div class="foreground" v-if="showContent">
                <slot></slot>
            </div>
        </transition>
        <div class="background" :style="{ backgroundImage: 'url(' + background + ')' }"></div>
        <div class="backgroundOverlay"></div>
    </div>
</template>

<script>
export default {
  name: 'contentblock',
  data: function data() {
    return {
      showContent: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showContent = true;
    }, 500);
  },
  props: {
    background: String,
  },
};
</script>

<style lang="scss" scoped>
.contentBlock {
    align-items: center;
    justify-content: center;
    height: calc(100vh - 54px);
}
.background {
    height: calc(100vh - 54px);
    background-position: center center;
    background-size: cover;
    width: 100%;
    position: absolute;
}
.backgroundOverlay {
    height: calc(100vh - 54px);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    position: absolute;
}
.foreground {
    z-index: 1;
}
</style>
