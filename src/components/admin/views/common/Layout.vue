<template>
  <div>
    Sidebar<br><br>
    <router-view/>
    <p>{{msg}}</p>
    HOLAMUNDIRIJILLO
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  data () {
    return {
      msg: 'Wena'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
