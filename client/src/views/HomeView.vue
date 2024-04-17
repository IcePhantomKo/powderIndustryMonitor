<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
    <div class="switcher">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-s-unfold"></i>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="managementSystem"><i class="el-icon-menu"></i>管理系统</el-dropdown-item>
          <el-dropdown-item command="quitSystem"><i class="el-icon-turn-off"></i>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
  methods: {
    // 下拉菜单
    handleCommand(command) {
      switch (command) {
        // 跳转后台管理系统
        case 'managementSystem':
          this.$confirm('确认跳转至后台管理系统么?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$router.push('/manage');
            // this.$message({
            //   type: 'success',
            //   message: '跳转成功!'
            // });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '跳转取消'
            });          
          });
          break;

        // 退出
        case 'quitSystem':
          this.$confirm('确认退出系统么?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '退出成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '退出取消'
              });          
            });
          break;
        default:
          break;
      }
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
  .home{
    position: absolute;
    width: 100%; 
    height: 100%;
    /* background-color: #0e2c47; */
  }
  .switcher{
    position: absolute;
    top: 4.5rem;
    left: 1rem;
    height: 30px;
    width: 200px;
    z-index: 20;
    /* background-color: rgb(1, 22, 22); */
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #01ffff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>