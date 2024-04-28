<template>
    <div class="container">
        <el-container>
            <!-- 左侧导航栏 -->
            <el-aside width="11vw">
                <div class="side-container">
                    <el-col :span="12">
                        <el-menu
                            style="width: 11vw;"
                            default-active="1"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            @select="handleSelect"
                            text-color="#000000"
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
                                <el-menu-item index="ioStoreMgt">出 / 入库管理</el-menu-item>
                                <el-menu-item index="accessoryTime">配件时限</el-menu-item>
                                <el-menu-item index="accessoryMgt">配件管理</el-menu-item>
                            </el-submenu>

                            <!-- 设备数据采集 -->
                            <el-submenu index="设备数据采集">
                                <template slot="title">
                                    <i class="el-icon-data-line"></i>
                                    <span>设备数据</span>
                                </template>
                                <el-menu-item index = 'productDev'>生产设备实时状态</el-menu-item>
                                <el-menu-item index = '2-2' disabled>伺服电机状态监视</el-menu-item>
                                <el-menu-item index = 'dvcRunTime'>设备运行时间</el-menu-item>
                                <el-menu-item index = '2-4' disabled>实时产量、良品数</el-menu-item>
                                <el-menu-item index = '2-5' disabled>视觉设备检测数据</el-menu-item>
                                <el-menu-item index = '2-6' disabled>传感器数据采集</el-menu-item>
                            </el-submenu>

                            <!-- 班组管理 -->
                            <el-submenu index = '3'>
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

            <!-- 右侧内容 -->
            <el-main>
                <el-container>
                    <el-header>
                        <!-- 标签页 -->
                        <div class="left-panel">
                            <h1>昆山博一后台管理系统</h1>
                        </div>
                        <div class="right-panel">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <!-- 管理员下拉菜单 -->
                            <el-dropdown>
                                <span class="el-dropdown-link">
                                    管理员
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>管理员</el-dropdown-item>
                                    <el-dropdown-item>员工</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>


                            <el-badge :value= 13 class="item">
                                <i class="el-icon-message-solid"></i>
                            </el-badge>
                            <i class="el-icon-switch-button" @click="quitManage()"></i>
                        </div>
                    </el-header>

                    <el-main>
                        <!-- 主页部分 -->
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </el-main>
                    
                </el-container>
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
    methods:{
        handleOpen(key, keyPath) {
            // this.key = key;
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
            this.$router.push('/home');
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
    watch:{
        // $route:{
        //     handler(newRoute, oldRoute) {
        //         this.menuData = this.$route.name;
        //     },
        //     immediate:true
        // }
    },
    data() {
        return {
            circleUrl: "https://img0.baidu.com/it/u=1407274981,1495574449&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
            // 标签页
        }
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        height: 100vh;
    }
    .el-container {
        height: 100%;
    }
    .el-header {
        background-image: linear-gradient(to right, #3c68ff,white);
        /* background-color: #3c68ff; */
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    }

    .el-aside {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 100px;
    }

    .el-main {
        display: flex;
        justify-content: center;
        background-color: #d9e8fe;
        color: #333;
        text-align: center;
        padding: 0;
        /* line-height: 1`60`px; */
    }
    .left-panel {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        color: white;
        letter-spacing: 10px;
        /* height: 100%; */
        /* background-color: red; */
    }
    /* 左侧导航栏 */
    .el-menu-item{
        font-size: 15px;
    }
    .el-submenu span{
        font-size: 15px;
    }

    
    .right-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 13%;
        height: 100%;
        padding-right: 1vw;
        /* border: solid 1px black; */
        /* background-color: #ff00007e; */
    }

    .right-panel .el-button {
        margin-left: 10px;
    }

    .side-container {
        display: flex;
        height: 100vh;
        text-align: left;
        overflow-x: hidden;
    }

    .side-container > .el-col {
        flex: 0 0 10vw;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    /* @media (min-width:3840px) {
            .el-menu-item{
                font-size: 30px;
            }
        } */
    /* 标签页样式 */
    ::v-deep .el-tabs__item {
        font-size: 8px;
        font-weight: bold;
    }
</style>