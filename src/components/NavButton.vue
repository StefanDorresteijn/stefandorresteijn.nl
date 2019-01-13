<template>
    <div class="column has-text-centered">
        <a v-on:click="navigate(link)">
            <p :class="[{ active: active }, 'navLink']">
                {{ text }}
            </p>
        </a>
    </div>
</template>

<script>
export default {
  name: 'navbutton',
  props: {
    text: String,
    link: String,
    active: Boolean,
    click: Function,
  },
  methods: {
    navigate: async function navigate(name) {
      await this.$router.push({
        name,
      });
      this.$props.click();
    },
  },
};
</script>

<style lang="scss" scoped>
    .navLink {
        font-variant: small-caps;
        padding: 15px 0;
        color: black;
        transition: color .3s;
        &:hover, &.active {
            color: lightgrey;
        }
    }
</style>
