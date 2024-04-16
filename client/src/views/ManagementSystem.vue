<template>
    <div class="Main">
        <el-container>
            <!-- 标头 -->
            <el-header style="padding: 0; height: 7%;">
                <SystemHeader></SystemHeader>
            </el-header>

            <el-container>
                <!-- 左侧导航栏 -->
                <SysNavi></SysNavi>

                <!-- 主内容 -->
                <el-main style="background-color: white;">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import SystemHeader from '@/components/SystemHeader.vue'
import SysNavi from '@/components/SysNavi.vue';

export default {
    components:{
        SystemHeader,
        SysNavi
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
  .Main{
    position: absolute;
    width: 100%; 
    height: 100%;
    background-color: #0e2c47;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>