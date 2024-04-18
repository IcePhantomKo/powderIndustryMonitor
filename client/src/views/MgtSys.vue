<template>
    <div class="container">
        <el-container>

            <!-- 左侧导航栏 -->
            <el-aside width="250px">
                <div class="side-container">
                    <el-col :span="12">
                        <el-menu
                            style="width: 250px;
                            /* padding: 50px 0px; */
                            "
                            default-active="1"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            @select="handleSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">

                            <!-- 仓储管理 -->
                            <el-menu-item index="home">
                                <i class="el-icon-s-home"></i>
                                <span>首页</span>
                            </el-menu-item>

                            <!-- 仓储管理 -->
                            <el-submenu index="仓储管理">
                                <template slot="title">
                                    <i class="el-icon-truck"></i>
                                    <span>仓储管理</span>
                                </template>
                                <el-menu-item index="ioStoreMgt">出/入库管理</el-menu-item>
                                <el-menu-item index="accessoryTime">配件时限</el-menu-item>
                                <el-menu-item index="accessoryMgt">配件管理</el-menu-item>
                            </el-submenu>

                            <!-- 设备数据采集 -->
                            <el-submenu index="2" disabled>
                                <template slot="title">
                                    <i class="el-icon-data-line"></i>
                                    <span>设备数据采集</span>
                                </template>
                                <el-menu-item index = '2-1'>生产设备实时状态</el-menu-item>
                                <el-menu-item index = '2-2'>伺服电机状态监视</el-menu-item>
                                <el-menu-item index = '2-3'>设备运行时间</el-menu-item>
                                <el-menu-item index = '2-4'>实时产量、良品数</el-menu-item>
                                <el-menu-item index = '2-5'>视觉设备检测数据</el-menu-item>
                                <el-menu-item index = '2-6'>传感器数据采集</el-menu-item>
                            </el-submenu>

                            <!-- 班组管理 -->
                            <el-submenu index = '3' disabled>
                                <template slot="title">
                                    <i class="el-icon-notebook-1"></i>
                                    <span>班组管理</span>
                                </template>
                                <el-menu-item index = '3-1'>人员管理</el-menu-item>
                                <el-menu-item index = '3-2'>排班计划</el-menu-item>
                            </el-submenu>

                            <!-- 综合图表 -->
                            <el-submenu index = '4' disabled>
                                <template slot="title">
                                    <i class="el-icon-pie-chart"></i>
                                    <span>综合图表</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分析</template>
                                    <el-menu-item index="4-1">产量分析</el-menu-item>
                                    <el-menu-item index="4-2">产出分析</el-menu-item>
                                    <el-menu-item index="4-3">故障分析</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <template slot="title">记录</template>
                                    <el-menu-item index="4-4">开停机记录</el-menu-item>
                                    <el-menu-item index="4-5">漏料率曲线图</el-menu-item>
                                    <el-menu-item index="4-6">设备报警记录</el-menu-item>
                                    <el-menu-item index="4-7">设备备件时限总览</el-menu-item>
                                    <el-menu-item index="4-8">异常停机记录统计</el-menu-item>
                                    <el-menu-item index="4-9">节拍报表</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <!-- 可视化展示 -->
                            <el-submenu index = '5' disabled>
                                <template slot="title">
                                    <i class="el-icon-s-platform"></i>
                                    <span>可视化展示</span>
                                </template>
                                <el-menu-item index = '5-1'>智慧大屏</el-menu-item>
                                <el-menu-item index = '5-2'>生产看板</el-menu-item>
                                <el-menu-item index = '5-3'>风险监控看板</el-menu-item>
                                <el-menu-item index = '5-4'>能耗看板</el-menu-item>
                            </el-submenu>

                            <!-- 能耗管理 -->
                            <el-submenu index = '6' disabled>
                                <template slot="title">
                                    <i class="el-icon-s-marketing"></i>
                                    <span>能耗管理</span>
                                </template>
                                <el-menu-item index = '6-1'>电能分析</el-menu-item>
                                <el-menu-item index = '6-2'>气耗分析</el-menu-item>
                                <el-menu-item index = '6-3'>数据统计分析</el-menu-item>
                                <el-menu-item index = '6-4'>智能优化</el-menu-item>
                            </el-submenu>

                            <!-- 设备维护 -->
                            <el-submenu index = '7' disabled>
                                <template slot="title">
                                    <i class="el-icon-cpu"></i>
                                    <span>设备维护</span>
                                </template>
                                <el-menu-item index = '7-1'>故障报修</el-menu-item>
                                <el-menu-item index = '7-2'>维修计划</el-menu-item>
                                <el-menu-item index = '7-3'>现场点检</el-menu-item>
                                <el-menu-item index = '7-4'>点检任务</el-menu-item>
                                <el-menu-item index = '7-5'>点检记录</el-menu-item>
                            </el-submenu>

                            <!-- 用户管理 -->
                            <el-submenu index = '8' disabled>
                                <template slot="title">
                                    <i class="el-icon-user-solid"></i>
                                    <span>用户管理</span>
                                </template>
                                <el-menu-item index = '8-1'>人员信息</el-menu-item>
                                <el-menu-item index = '8-2'>用户认证</el-menu-item>
                                <el-menu-item index = '8-3'>权限设置</el-menu-item>
                            </el-submenu>

                            <!-- 报警管理 -->
                            <el-submenu index = '9' disabled>
                                <template slot="title">
                                    <i class="el-icon-phone"></i>
                                    <span>报警管理</span>
                                </template>
                                <el-menu-item index = '9-1'>生产异常报警</el-menu-item>
                                <el-menu-item index = '9-2'>产线设备报警</el-menu-item>
                                <el-menu-item index = '9-3'>配件时限报警</el-menu-item>
                                <el-menu-item index = '9-4'>异常停机报警</el-menu-item>
                            </el-submenu>

                            <!-- 生产知识库 -->
                            <el-submenu index = '10' disabled>
                                <template slot="title">
                                    <i class="el-icon-receiving"></i>
                                    <span>生产知识库</span>
                                </template>
                                <el-menu-item index = '10-1'>安全知识</el-menu-item>
                                <el-menu-item index = '10-2'>设备档案</el-menu-item>
                                <el-menu-item index = '10-3'>设备资料手册</el-menu-item>
                                <el-menu-item index = '10-4'>图纸程序</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </div>
            </el-aside>

            <!-- 顶部内容 -->
            <el-main>
                <div class="top-bar">
                    <!-- 面包屑 -->
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>{{ breadcrumb.items[1].name }}</el-breadcrumb-item>
                        <el-breadcrumb-item>{{ breadcrumb.items[2].name }}</el-breadcrumb-item>
                    </el-breadcrumb>

                    <div class="right-panel">
                        <el-avatar :size="40" :src="circleUrl"></el-avatar>
                        <el-button type="text">设置</el-button>
                        <el-button type="text" @click = 'quitManage()' >退出</el-button>
                    </div>
                </div>
                <!-- 主页部分 -->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import SysHeader from '@/components/SysHeader.vue'

export default {
    components:{
        SysHeader,
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
                { name: this.key, path: '/product-management' },
                { name: this.$route.name, path: '/category-management' }
                // ... 根据路由路径动态设置面包屑内容
            ];
        },
        handleOpen(key, keyPath) {
            this.key = key;
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
            if(key === 'home'){
                this.$router.push('/manage');
            }else{
                this.$router.push('/manage/'+ key);
            }
        },
        // 退出
        quitManage(){
            this.$confirm('确认跳转至大屏展示么?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$router.push('/');
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
        }
    },
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            breadcrumb: {
                items: []
            },
            // 左侧导航中的index
            key:'',
            name: '',
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

    .side-container{
        display: flex;
        height: 100vh;
        text-align: left;
        overflow-x: hidden;
    }

    .side-container > .el-col{
        flex: 0 0 250px;
    }
</style>