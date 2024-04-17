<template>
    <div class="container">
        <el-container>
            <el-container>
                <el-aside width="250px">
                    <SysNavi></SysNavi>
                </el-aside>
                <el-main>
                    <div class="top-bar">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>{{ breadcrumb.items[1].name }}</el-breadcrumb-item>
                            <el-breadcrumb-item>分类管理</el-breadcrumb-item>
                        </el-breadcrumb>
                        <div class="right-panel">
                        <el-avatar :size="40" :src="circleUrl"></el-avatar>
                        <el-button type="text">设置</el-button>
                        <el-button type="text">退出</el-button>
                        </div>
                    </div>
                    <!-- 主页部分 -->
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import SysHeader from '@/components/SysHeader.vue'
import SysNavi from '@/components/SysNavi.vue';

export default {
    components:{
        SysHeader,
        SysNavi
    },
    watch:{
        $route:{
            handler(newRoute,oldRoute){
                this.updateBreadcrumb(newRoute);
            },
            immediate:true
        }
    },
    methods:{
        updateBreadcrumb(route){
            this.breadcrumb.items = [
                { name: '首页', path: '/' },
                { name: this.$route.name, path: '/product-management' },
                { name: '分类管理2', path: '/category-management' }
                // ... 根据路由路径动态设置面包屑内容
            ];
        }
    },
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            breadcrumb: {
                items: []
            }
        }
    },
}
</script>

<style scoped>
    .container{
        display:flex;
        height: 100%;
    }
    .el-container{
        height: 100%;
    }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    /* background-color: #1c69dd; */
    height: 50px;
}

.right-panel {
  display: flex;
  align-items: center;
}

.right-panel .el-button {
  margin-left: 10px;
}
</style>