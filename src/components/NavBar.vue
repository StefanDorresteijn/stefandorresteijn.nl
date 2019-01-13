<template>
    <div v-if="showNav" id="navBar">
        <div class="container">
          <div class="is-hidden-desktop">
            <div class="navbar-brand">
              <a class="navbar-item" href="#">
                <img src="https://via.placeholder.com/28/fff/000/?text=S" width="28" height="28">
              </a>

              <a role="button" class="navbar-burger burger" v-on:click="openMobileMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <div :class="['columns', 'is-gapless', {'is-hidden-touch': openMenu}]">
            <NavButton text="home" link="#" :active="$route.name === 'home'" />
            <NavButton text="projects" link="#" :active="$route.name === 'projects'" />
            <div class="column has-text-centered is-hidden-touch">
              <figure class="image is-24x24 logo">
                <img src="https://via.placeholder.com/28/fff/000/?text=S" />
              </figure>
            </div>
            <NavButton text="clients" link="#" :active="$route.name === 'clients'" />
            <NavButton text="contact" link="#" :active="$route.name === 'contact'" />
          </div>
        </div>
      </div>
</template>

<script>
import NavButton from '@/components/NavButton.vue';

export default {
  name: 'navbar',
  components: {
    NavButton,
  },
  data: function data() {
    return {
      showNav: false,
      openMenu: true,
    };
  },
  created() {
    setTimeout(() => {
      this.showNav = true;
    }, 500);
  },
  methods: {
    openMobileMenu: function openMobileMenu() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
  #navBar {
    background-color: #fff;
  }
</style>
