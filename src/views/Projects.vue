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
        <div class="section contentSection">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <img :src="podshareImage" />
                    </div>
                    <div class="column">
                        <div class="content">
                            <span class="projectSkills has-text-info">Design | Development | Web</span>
                            <h2 class="projectTitle">podshare</h2>
                            <p class="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.</p>
                            <p class="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.</p>
                            <a href="https://podshare.io/" target="_blank" class="button is-large visitButton">visit podshare</a>
                            <div class="projectDivider"></div>
                            <div class="projectToolsUsed">
                                <img :src="rorImage" />
                                <img :src="vuejsImage" />
                                <img :src="htmlImage" />
                                <img :src="cssImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section contentSection">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <img :src="sjaufImage" />
                    </div>
                    <div class="column">
                        <div class="content">
                            <span class="projectSkills has-text-info">Architecture | Mobile | Web</span>
                            <h2 class="projectTitle">sjauf</h2>
                            <p class="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.</p>
                            <p class="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum consequat nisi, eget sollicitudin nisl faucibus sit amet. Praesent ut sagittis sem, sagittis aliquam tellus. Proin accumsan eros augue, ut placerat turpis egestas in.</p>
                            <a href="https://sjauf.nl/" target="_blank" class="button is-large visitButton">visit sjauf</a>
                            <div class="projectDivider"></div>
                            <div class="projectToolsUsed">
                                <img :src="elixirImage" />
                                <img :src="vuejsImage" />
                                <img :src="htmlImage" />
                                <img :src="cssImage" />
                                <img :src="reactImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
import backgroundImage from '../assets/stefan_at_work.jpg';
import podshareImage from '../assets/podshare.jpg';
import sjaufImage from '../assets/sjauf.jpg';
import elixirImage from '../assets/elixir.jpg';
import rorImage from '../assets/RoR.jpg';
import vuejsImage from '../assets/vuejs.jpg';
import htmlImage from '../assets/html5.jpg';
import cssImage from '../assets/css3.jpg';
import reactImage from '../assets/reactjs.jpg';

export default {
  name: 'projects',
  data: function data() {
    return {
      showContent: false,
      backgroundImage,
      podshareImage,
      sjaufImage,
      elixirImage,
      rorImage,
      vuejsImage,
      htmlImage,
      cssImage,
      reactImage,
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
    .title {
        font-variant: small-caps;
        letter-spacing: 0.1em;
        font-size: 3em;
        font-family: 'Roboto';
    }
    .subtitle {
        margin-left: 2px;
        font-family: 'Roboto';
        font-variant: small-caps;
        font-weight: 300;
    }
    .projectTitle {
        margin-top: 0 !important;
        font-family: 'Roboto';
        font-variant: small-caps;
        font-weight: 300;
    }
    .projectSkills {
        font-size: 0.75rem;
        letter-spacing: 0.1em;
    }
    .projectDescription {
        font-family: 'Roboto';
    }
    .contentSection:not(:last-of-type) {
        padding-bottom: 0;
    }
    .visitButton {
        font-variant: small-caps;
    }
    .projectDivider {
        margin: 15px 0;
        border-bottom: 1px solid #ccc;
    }
    .projectToolsUsed {
        flex-direction: row;
        img {
            margin-right: 5px;
            width: 24px;
            height: 24px;
        }
    }
</style>
