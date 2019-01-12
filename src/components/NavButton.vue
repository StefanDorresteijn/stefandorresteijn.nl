<template>
    <div class="column has-text-centered">
        <a :href="link">
            <p class="navLink has-text-black">
                {{ text }}
            </p>
        </a>
    </div>
</template>

<script>
export default {
    name: "navbutton",
    props: {
        text: String,
        link: String,
    }
}
</script>

<style lang="scss" scoped>
  .navLink {
    margin: 15px 0;
    font-variant: small-caps;
  }
</style>
