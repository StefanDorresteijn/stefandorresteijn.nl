<template>
    <div id="contact">
        <transition name="fade">
            <div class="body"
            v-if="showContent"
            >
                <section class="hero" id="hero">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <h1 class="title">
                                contact me
                            </h1>
                            <h2 class="subtitle">
                                the highway to happiness
                            </h2>
                        </div>
                    </div>
                    <div class="divider"></div>
                </section>
                <footer class="footer">
                    <div class="content has-text-centered">
                        <p>
                            <strong>Stefan Dorresteijn</strong> by <a href="https://stefandorresteijn.nl">Stefan Dorresteijn</a>.
                        </p>
                    </div>
                </footer>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showContent: false,
        }
    },
    created() {
        setTimeout(() => {
            this.showContent = true;
        }, 100);
    },
}
</script>

<style lang="scss">
    #contact {
        background-color: #fff;
        min-height: 100vh;
    }
</style>
