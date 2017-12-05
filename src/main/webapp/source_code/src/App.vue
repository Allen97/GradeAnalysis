<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style type="text/scss" lang="scss">

  @font-face {
    font-family: 'lato';
    src: url('assets/lato.woff2');
  }

  html, body {
    font-family: 'lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
</style>
