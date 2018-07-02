<template>
  <div @click="logout">
    Wena usuario
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('auth/logout');
      this.$router.push('/')
    }
  } 
}
</script>
