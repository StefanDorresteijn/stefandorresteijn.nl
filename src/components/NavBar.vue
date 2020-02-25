<template>
    <div id="navBar">
        <div class="container">
          <div class="is-hidden-desktop">
            <div class="navbar-brand">
              <a class="navbar-item" v-on:click="navigate('home')">
                <g-image src="https://via.placeholder.com/28/fff/000/?text=S" width="28" height="28" />
              </a>

              <a role="button" class="navbar-burger burger" v-on:click="openMobileMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <div :class="['columns', 'is-gapless', {'is-hidden-touch': openMenu}]">
            <NavButton text="home" link="/" :active="$route.name === 'home'" :click="openMobileMenu" />
            <NavButton text="projects" link="projects" :active="$route.name === 'projects'" :click="openMobileMenu" />
            <div class="column has-text-centered is-hidden-touch">
              <a class="" v-on:click="navigate('home')">
                <figure class="image is-24x24 logo">
                  <g-image :src="logo" />
                </figure>
              </a>
            </div>
            <NavButton text="writing" link="writing" :active="$route.name === 'clients'" :click="openMobileMenu" />
            <NavButton text="contact" link="contact" :active="$route.name === 'contact'" :click="openMobileMenu" />
          </div>
        </div>
      </div>
</template>

<script>
import NavButton from '@/components/NavButton.vue';
import logo from '@/assets/s.png';

export default {
  name: 'navbar',
  components: {
    NavButton,
  },
  data: function data() {
    return {
      openMenu: true,
      logo,
    };
  },
  methods: {
    openMobileMenu: function openMobileMenu() {
      this.openMenu = !this.openMenu;
    },
    navigate: async function navigate(name) {
      await this.$router.push({
        name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  #navBar {
    background-color: #fff;
    position: fixed;
    left: 0;
    top:0;
    right:0;
    z-index:1000;
  }
  .logo {
    margin: 15px auto;
  }
</style>