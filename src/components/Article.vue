<template>
    <div class="section contentSection">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <g-image :src="image" />
                </div>
                <div class="column">
                    <div class="content">
                        <span class="projectSkills has-text-info"><i class="fas fa-eye has-text-primary"></i>{{ renderViews }} <i class="fas fa-heart has-text-danger"></i>{{ reactions }} <i class="fas fa-comment has-text-success"></i>{{ comments }} <i class="fas fa-calendar has-text-warning"></i>{{ publishDate }}</span>
                                <g-link :to="`/writing/${slug}`"><h2 class="projectTitle">{{ renderTitle }}</h2></g-link>
                        <p class="projectDescription">{{ renderDescription }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import removeMarkdown from 'remove-markdown';

export default {
  props: {
    title: String,
    description: String,
    image: String,
    date: String,
    views: Number,
    reactions: Number,
    comments: Number,
    slug: String,
  },
  computed: {
      publishDate() {
        return moment(this.date).format("DD/MM/YY")
      },
      renderTitle() {
        if(!this.title) return null;
        return this.title.toLowerCase();
      },
      renderDescription() {
        if(!this.description) return this.description;
        return `${removeMarkdown(this.description).substring(0, 300)}...`;
      },
      renderViews() {
        return Math.abs(this.views) > 999 ? Math.sign(this.views)*((Math.abs(this.views)/1000).toFixed(1)) + 'k' : Math.sign(this.views)*Math.abs(this.views)
      }
  }
};
</script>

<style lang="scss" scoped>
    .projectSkills {
        font-size: 0.75rem;
        letter-spacing: 0.1em;
        & > i {
            margin-right: 4px;
            &:not(:first-of-type) {
                margin-left: 5px;
            }
        }
        opacity: 0.75;
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
        margin-bottom: 5px !important;
    }
    .projectDescription {
        font-family: 'Roboto';
    }
    .section {
        padding-bottom:0;
        & > .container {
            padding-bottom: 3rem;
            border-bottom: 1px solid #eee;
        }
    }
    .contentSection:not(:last-of-type) {
        padding-bottom: 0;
    }
</style>
