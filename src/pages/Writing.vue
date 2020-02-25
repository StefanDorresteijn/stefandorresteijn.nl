<template>
  <Layout>
    <div id="writing">
      <transition name="fade">
        <div class="body"
          v-if="showContent"
        >
          <section class="hero" id="hero">
              <div class="hero-body">
                  <div class="container has-text-centered">
                      <h1 class="title">
                          my writing
                      </h1>
                      <h2 class="subtitle">
                          thoughts and ideas, on ( digital ) paper
                      </h2>
                  </div>
              </div>
              <div class="divider"></div>
          </section>
          <div v-for="{node} in featuredArticles" :key="node.id">
            <Article :title="node.title" :description="node.body_markdown" :image="node.cover_image || 'https://pbs.twimg.com/profile_banners/99148219/1561221035/1500x500'" :date="node.published_at" :views="node.page_views_count" :reactions="node.positive_reactions_count" :comments="node.comments_count" :slug="node.slug" />
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
  </Layout>
</template>

<page-query>
  query Home {
    allArticle {
      edges {
        node {
          id
          title
          published_at
          body_markdown
          cover_image
          positive_reactions_count
          page_views_count
          comments_count
          slug
        }
      }
    }
  }
</page-query>

<script>
// @ is an alias to /src
import Article from '@/components/Article.vue';

export default {
  name: 'writing',
  components: {
    Article,
  },
  data: function data() {
    return {
      showContent: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
  },
  computed: {
    featuredArticles() {
      return this.$page.allArticle.edges.filter(object => object.node.page_views_count > 1000).reverse()
    }
  },
  metaInfo: {
    title: 'Writing',
  }
};
</script>

<style lang="scss">
    #navBar {
        border-bottom: 1px solid  #ccc;
    }
    #writing {
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
</style>