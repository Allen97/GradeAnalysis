<template>
  <div class="main">
    <admin-header/>
    <side-bar/>
    <router-view />
  </div>
</template>

<script>
  import SideBar from './Layer/SideBar'
  import AdminHeader from './Layer/Header'

  export default {
    components: {
      AdminHeader,
      SideBar
    },
    name: 'admin'
  }
</script>

<style type='text/scss' lang='scss' scoped>

</style>