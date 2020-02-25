<template>
    <div class="column has-text-centered">
        <g-link :to="link" @click="navigate()" :target="blank && '_blank'">
            <p :class="[{ active: active }, 'navLink']">
                {{ text }}
            </p>
        </g-link>
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
    blank: Boolean,
  },
  methods: {
    navigate: async function navigate() {
      return this.$props.click();
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