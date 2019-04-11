<template>
  <div id="projects">
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.'
            ]"
            title="podshare"
            link="https://podshare.io/"
        />
        <Project
            :image="sjaufImage"
            :skills="['Architecture', 'Mobile', 'Web']"
            :descriptions="[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.'
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
