<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Main
  }
}
</script>

<style scoped>
  .home{
    position: absolute;
    width: 100%; 
    height: 100%;
    /* background-color: #0e2c47; */
  }
</style>