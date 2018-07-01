<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import guards from '@/utils/guards'
  export default {
    name: 'App',
    created: guards.auth
  }
</script>

<style>
  body {
    overflow-x: hidden;
  }
</style>
