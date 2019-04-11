<template>
  <div id="projects">
    <vue-headful
        title="Stefan Dorresteijn | Projects"
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
                        my projects
                    </h1>
                    <h2 class="subtitle">
                        my proudest achievements
                    </h2>
                </div>
            </div>
            <div class="divider"></div>
        </section>
        <Project
            :image="podshareImage"
            :skills="['Design', 'Development', 'Web']"
            :descriptions="[
                'Podshare is the world\'s first podcast episode sharing platform. Create a landing page in seconds and automatically give your listeners access to your episode, on whichever platform they prefer.',
                'Podshare is a passion project I started developing with a close friend. I build the backend in Ruby on Rails, and the frontend is all VueJS. In the future we expect to use AWS Lambda to find links automatically, but for now we\'re keeping it nice and simple.'
            ]"
            title="podshare"
            link="https://podshare.io/"
        />
        <Project
            :image="sjaufImage"
            :skills="['Architecture', 'Mobile', 'Web']"
            :descriptions="[
                'Sjauf is Holland\'s first personal driver app that allows you to book a driver for your own car. Fill in your route and pay the lowest price on the market. Satisfactory service every time, guaranteed.',
                'I worked for Sjauf for 12 months, in order to build their technology from the ground up. Using a mixture of VueJS, React Native, Ruby on Rails and Elixir, I built their apps, websites and backend applications.',
                'During this time, I helped the company with investment discussions, corporate structure and culture, and training of interns and juniors.'
            ]"
            title="sjauf"
            link="https://sjauf.nl/"
        />
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
// @ is an alias to /src
import Project from '@/components/Project.vue';
import backgroundImage from '../assets/stefan_at_work.jpg';
import podshareImage from '../assets/podshare.jpg';
import sjaufImage from '../assets/sjauf.jpg';

export default {
    name: "projects",
    components: {
        Project,
    },
    data: function data() {
        return {
            showContent: false,
            backgroundImage,
            podshareImage,
            sjaufImage,
        };
    },
    created() {
        setTimeout(() => {
            this.showContent = true;
        }, 100);
    },
}
</script>

<style lang="scss">
    #navBar {
        border-bottom: 1px solid #ccc;
    }
    #projects {
        background-color: #fff;
        min-height: 100vh;
    }
    #hero {
        margin-top: 52px;
        .divider {
            margin: 0 auto;
            border-bottom: 1px solid #ccc;
            width: 100%;
            height:1px;
        }
    }
</style>
