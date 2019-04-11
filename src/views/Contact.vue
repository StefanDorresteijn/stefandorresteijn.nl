<template>
    <div id="contact">
        <vue-headful
            title="Stefan Dorresteijn | Contact"
            description="Stefan Dorresteijn is a full stack engineer, specialized in building full commercial applications from scratch."
        />
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
                                <div class="column is-hidden-touch">
                                    <img :src="cutout" />
                                </div>
                                <div class="column">
                                    <div class="content">
                                        <h2 class="projectTitle">we should work together</h2>
                                        <p class="projectDescription">Leave me a message and I'll contact you</p>
                                        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                                            <input type="hidden" name="form-name" value="contact" />
                                            <div class="field">
                                                <label class="label">Name</label>
                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" name="name" type="text" placeholder="I'm sure your name is awesome">
                                                    <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label">Email</label>
                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" name="email" type="text" placeholder="I bet your email is great too">
                                                    <span class="icon is-small is-left">
                                                    <i class="fas fa-at"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label">Phone Number</label>
                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" name="phone" type="text" placeholder="Your phone number probably has really cool numbers">
                                                    <span class="icon is-small is-left">
                                                    <i class="fas fa-phone"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label">Message</label>
                                                <div class="control">
                                                    <textarea class="textarea" name="message" placeholder="I can't wait to see what you come up with for the message. I bet it'll be Shakespearean."></textarea>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <button class="button is-primary is-pulled-right" type="submit" name="send">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
    };
  },
  created() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
  },
};
</script>

<style lang="scss">
    #contact {
        background-color: #fff;
        min-height: 100vh;
    }
</style>
