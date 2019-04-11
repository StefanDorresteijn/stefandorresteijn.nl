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
                <section class="contactContent">
                    <div class="section contentSection">
                        <div class="container">
                            <div class="columns">
                                <div class="column">
                                    <img :src="cutout" />
                                </div>
                                <div class="column">
                                    <div class="content">
                                        <h2 class="projectTitle">we should work together</h2>
                                        <p class="projectDescription">Leave me a message and I'll contact you</p>
                                        <form name="contact" method="POST" data-netlify="true">
                                            <div class="field">
                                                <label class="label">Name</label>
                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="I'm sure your name is awesome">
                                                    <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label">Email</label>
                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="I bet your email is great too">
                                                    <span class="icon is-small is-left">
                                                    <i class="fas fa-at"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label">Phone Number</label>
                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="Your phone number probably has really cool numbers">
                                                    <span class="icon is-small is-left">
                                                    <i class="fas fa-phone"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label">Message</label>
                                                <div class="control">
                                                    <textarea class="textarea" placeholder="I can't wait to see what you come up with for the message. I bet it'll be Shakespearean."></textarea>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <button class="button is-primary is-pulled-right">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
import cutout from '@/assets/cutout1.jpg';

export default {
    data() {
        return {
            showContent: false,
            cutout,
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
