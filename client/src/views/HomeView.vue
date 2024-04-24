<template>
  <div class="home">
    <el-container>
      <el-header style="height: 8vh; width: 100vw; padding: 0px;">
        <Header></Header>
      </el-header>
      <!-- <el-main style="height: 92vh;">Main</el-main> -->
    </el-container>
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
    },
    methods: {},
    data() {
        return {}
    }
}
</script>

<style scoped>
.home {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: #0e2c47; */
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-main {
    background-color: #0e2c47;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 160px;
}

</style>