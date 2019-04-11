<template>
    <div class="section contentSection">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <img :src="image" />
                </div>
                <div class="column">
                    <div class="content">
                        <span class="projectSkills has-text-info">{{ renderedSkills }}</span>
                        <h2 class="projectTitle">{{ title }}</h2>
                        <p class="projectDescription" v-for="content in descriptions" :key="content">{{ content }}</p>
                        <a :href="link" target="_blank" class="button is-large visitButton" v-if="link">visit {{ title }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    skills: Array,
    title: String,
    link: String,
    descriptions: Array,
    image: String,
  },
  computed: {
    renderedSkills() {
      return this.skills.join(' | ');
    },
  },
};
</script>

<style lang="scss">
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
</style>
