<template>
    <div v-if="showNav" id="navBar">
        <div class="container">
          <div class="columns is-gapless">
            <NavButton text="home" link="#" />
            <NavButton text="clients" link="#"  />
            <div class="column has-text-centered">
              <figure class="image is-24x24 logo">
                <img src="https://via.placeholder.com/24" />
              </figure>
            </div>
            <NavButton text="clients" link="#"  />
            <NavButton text="clients" link="#"  />
          </div>
        </div>
      </div>
</template>

<script>
import NavButton from '@/components/NavButton.vue';

export default {
    name: "navbar",
    components: {
        NavButton,
    },
    data: function data(){
        return {
        showNav: false,
        }
    },
    created() {
        window.setTimeout(() => {
        this.showNav = true;
        }, 500)
    }
}
</script>

<style lang="scss" scoped>
  #navBar {
    background-color: #fff;
  }
</style>
