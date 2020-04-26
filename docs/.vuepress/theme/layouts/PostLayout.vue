<template>
  <div class="px-12 pt-8">
    <article>
      <h1 class="mt-2 text-5xl font-bold leading-tight">{{ $page.title }}</h1>
      <span class="text-gray-500">{{ $frontmatter.date | fullDate }}</span>
      <Content class="mt-4 blog-body text-gray-800 font-serif" />
    </article>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "Page",
  filters: {
    fullDate: date => moment(new Date(date)).format('MMMM DD, YYYY'),
  }
};
</script>