<template>
    <div class="column has-text-centered">
        <a :href="link">
            <p :class="[{ active: active }, 'navLink']">
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
        active: Boolean,
    }
}
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
