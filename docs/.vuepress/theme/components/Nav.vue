<template>
  <nav
    class="p-2 border-orange-400 border-t-2 md:border-t-4 md:py-6 bg-blue-700 flex items-center justify-between"
  >
    <router-link
      class="ml-12 md:ml-40 px-2 py-1 text-gray-200 text-3xl leading-none"
      to="/"
    >zheilbron.com</router-link>
    <SearchBox
      class="mr-12 md:mr-32 align-middle text-gray-900 shadow-md leading-normal rounded-full"
    />
  </nav>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  name: "Nav",
  components: { SearchBox }
};
</script>