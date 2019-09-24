<template>
  <div>
    <Navbar />
    <slot name="default" />
    <div class="recent-posts" v-if="page.posts">
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <h2>
            {{ formatDate(post.createdAt) }} -
            <saber-link :to="post.permalink">{{
              post.title
            }}</saber-link>
          </h2>
        </li>
      </ul>
    </div>
    <ul>
        <li v-if="page.prevPost">
            <router-link :to="page.prevPost.permalink">
            Previous: {{ page.prevPost.title }}
            </router-link>
        </li>
        <li v-if="page.nextPost">
            <router-link :to="page.nextPost.permalink">
            Next: {{ page.nextPost.title }}
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  props: ['page'],
  head() {
    const pageTitle = this.page.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  }
}
</script>

<style scoped>
.recent-posts ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.recent-posts a {
  color: blue;
  text-decoration: none;
}
</style>