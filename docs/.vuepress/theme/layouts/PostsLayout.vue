<template>
  <div>
    <div v-for="p in posts" class="my-4">
      <div class="p-4 md:mx-6 m-1">
        <div class="md:flex md:items-center md:justify-center">
          <div class="md:pr-6 md:flex-none md:text-center md:w-24">
            <span class="md:invisible md:hidden">{{ p.frontmatter.date | fullDate }}</span>
            <span
              class="hidden md:block md:visible long-text text-6xl leading-snug"
            >{{ p.frontmatter.date | day }}</span>
            <span
              class="hidden md:block md:visible align-text-top"
            >{{ p.frontmatter.date | yearMonth }}</span>
          </div>
          <div class="md:px-6 md:max-w-4xl md:border-l-2 md:border-orange-300">
            <h1
              class="mt-2 text-2xl font-bold leading-tight"
            >{{ p.frontmatter.title | truncate(50, '...') }}</h1>
            <p
              class="mt-2 font-serif"
            >{{ p.frontmatter.description }} {{ p.frontmatter.description }}</p>
            <router-link class="mt-4 text-gray-600" :to="p.path">Read more...</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'PostsLayout',
  filters: {
    fullDate: date => moment(new Date(date)).format('MMMM DD, YYYY'),
    day: date => new Date(date).getUTCDate(),
    yearMonth: date => {
      var d = moment(new Date(date));
      return d.format('MMM YYYY');
    },
    truncate: (text, len, suffix) => {
      if (text.length > len) {
        return text.substring(0, len) + suffix;
      } else {
        return text;
      }
    }
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(p => p.relativePath.startsWith("posts/"))
        .sort((a, b) => {
          var x = a.frontmatter.date;
          var y = b.frontmatter.date;
          if (x === y) {
            return 0;
          }
          if (x === undefined) {
            return 1;
          }
          if (y === undefined) {
            return -1;
          }
          return new Date(y) - new Date(x);
        });
    }
  }
}
</script>