<template>
  <Layout>
    <div id="article">
     <transition name="fade">
        <div class="body">
          <section class="hero" id="hero">
              <div class="hero-body">
                  <div class="container has-text-centered">
                      <h1 class="title">
                          {{ $page.article.title }}
                      </h1>
                  </div>
              </div>
              <div class="divider"></div>
          </section>
          <section class="articleContent">
            <div class="container">
              <div class="content" v-highlight>
                <VueMarkdown>{{ $page.article.body_markdown}}</VueMarkdown>
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
  </Layout>
</template>

<page-query>
query Post($path: String!) {
    article(path: $path) {
       id
        title
        published_at
        description
        tag_list
        canonical_url
        cover_image
        body_markdown
    }
}
</page-query>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    components: {
      VueMarkdown,
    },
    metaInfo() { 
      return {
        title: this.$page.article.title
      }
    },
  }
</script>

<style lang="scss">
  #navBar {
      border-bottom: 1px solid  rgb(168, 154, 154) !important;
  }
  #article {
      background-color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      flex: 1;
  }
  .articleContent {
    flex: 1;
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
  .body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .articleContent {
    padding: 50px 0;
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