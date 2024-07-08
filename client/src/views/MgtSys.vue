<!-- 后台管理总页面 -->
<template>
    <div class="container">
        <el-container>
            <!-- 左侧导航栏 -->
            <el-aside width="11vw">
                <div class="side-container">
                    <el-col :span="12">
                        <el-menu
                            style="
                                width: 11vw;
                                background-color: #1f2325;
                            "
                            default-active="activeIndex"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            @select="handleSelect"
                            text-color="#fff"
                            background-color="#1f2325"
                            active-text-color="#ffd04b">

                            <!-- 首页 -->
                            <el-menu-item>
                                <template slot="title">
                                    <i class="el-icon-s-home"></i>
                                    <span>首页</span>
                                </template>
                            </el-menu-item>

                            <!-- 仓储管理 -->
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-truck"></i>
                                    <span>仓储管理</span>
                                </template>
                                <el-menu-item index="ioStoreMgt">出 / 入库管理</el-menu-item>
                                <el-menu-item index="accessoryTime">配件时限</el-menu-item>
                                <el-menu-item index="accessoryMgt">配件管理</el-menu-item>
                            </el-submenu>

                            <!-- 设备数据采集 -->
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-data-line"></i>
                                    <span>设备数据</span>
                                </template>
                                <el-menu-item index = 'productDev'>总览</el-menu-item>
                                <el-menu-item index = '2-2' disabled>伺服电机状态监视</el-menu-item>
                                <el-menu-item index = 'dvcRunTime'>设备运行时间</el-menu-item>
                                <el-menu-item index = '2-4' disabled>实时产量、良品数</el-menu-item>
                                <el-menu-item index = '2-5' disabled>视觉设备检测数据</el-menu-item>
                                <el-menu-item index = '2-6' disabled>传感器数据采集</el-menu-item>
                            </el-submenu>

                            <!-- 班组管理 -->
                            <el-submenu index = '4'>
                                <template slot="title">
                                    <i class="el-icon-notebook-1"></i>
                                    <span>班组管理</span>
                                </template>
                                <el-menu-item index = 'personMgt'>人员管理</el-menu-item>
                                <el-menu-item index = '3-2'>排班计划</el-menu-item>
                            </el-submenu>

                            <!-- 综合图表 -->
                            <el-submenu index = '5'>
                                <template slot="title">
                                    <i class="el-icon-pie-chart"></i>
                                    <span>综合图表</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分析</template>
                                    <el-menu-item index="productionStat">产量统计</el-menu-item>
                                    <el-menu-item index="maintenance">维护与保养</el-menu-item>
                                    <el-menu-item index="4-3" disabled>故障分析</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <template slot="title">记录</template>
                                    <el-menu-item index="4-4" disabled>开停机记录</el-menu-item>
                                    <el-menu-item index="4-5" disabled>漏料率曲线图</el-menu-item>
                                    <el-menu-item index="4-6" disabled>设备报警记录</el-menu-item>
                                    <el-menu-item index="4-7" disabled>设备备件时限总览</el-menu-item>
                                    <el-menu-item index="4-8" disabled>异常停机记录统计</el-menu-item>
                                    <el-menu-item index="4-9" disabled>节拍报表</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <!-- 风险管理 -->
                            <el-menu-item index = 'riskMgt'>
                                <template slot="title">
                                    <i class="el-icon-key"></i>
                                    <span>风险管理</span>
                                </template>
                            </el-menu-item>

                            <!-- 可视化展示 -->
                            <el-submenu index = '6' disabled>
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
                            <el-submenu index = '7' disabled>
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
                            <el-submenu index = '8' disabled>
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
                            <el-submenu index = '9' disabled>
                                <template slot="title">
                                    <i class="el-icon-user-solid"></i>
                                    <span>用户管理</span>
                                </template>
                                <el-menu-item index = '8-1'>人员信息</el-menu-item>
                                <el-menu-item index = '8-2'>用户认证</el-menu-item>
                                <el-menu-item index = '8-3'>权限设置</el-menu-item>
                            </el-submenu>

                            <!-- 报警管理 -->
                            <el-submenu index = '10' disabled>
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
                            <el-submenu index = '11' disabled>
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
                            <img src="../assets/boyiLog.png" style="padding: 1vw">
                            <!-- <h1>昆山博一后台管理系统</h1> -->
                        </div>
                        <div class="right-panel">
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

                            <!-- 报警列表 -->
                            <el-tooltip class="item" effect="light" content="报警列表" placement="bottom">
                                <el-badge :value= 4 class="alarmTable">
                                    <i class="el-icon-message-solid" 
                                    @click="drawer = true" type="primary" 
                                    style="cursor: pointer; margin-left: 16px; font-size: 20px;"></i>
                                    
                                    <!-- 隐藏的报警列表 -->
                                    <el-drawer
                                    title="报警列表"
                                    :visible.sync="drawer"
                                    direction="rtl"
                                    size="50%">
                                        <el-table 
                                        border
                                        :data="gridData"
                                        :default-sort = "{prop: 'alertTime', order: 'descending'}">
                                            <el-table-column property="alertTime" label="时间" width="150" sortable></el-table-column>
                                            <el-table-column property="alertType" label="种类" width="200"></el-table-column>
                                            <el-table-column property="alertInfo" label="报警信息" width="300"></el-table-column>
                                            <el-table-column property="alertEdit" label="操作">
                                                <template slot-scope="scope">
                                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                                    <el-button type="text" size="small">编辑</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-drawer>
                                </el-badge>
                            </el-tooltip>

                            <!-- 退出 -->
                            <i class="el-icon-switch-button" @click="quitManage()" 
                            style="cursor: pointer; font-size: 20px;"></i>
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
import axios from 'axios'

export default {
    components:{
        SysHeader,
    },
    methods:{
        handleOpen(key, keyPath) {
            // alert(this.activeIndex)
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
            key === 'home' ? this.$router.push('/manage') : this.$router.push('/manage/' + key);
        },
        // 报警列表点击事件
        handleClick(row) {
            axios.get('/api/userinfo').then(result => {
                console.log(result.data);
            })
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
            // 报警列表
            drawer: false,
            gridData: [{
                alertTime: '2016-05-02',
                alertType: '火灾报警',
                alertInfo: '储物室火灾报警'
            }, {
                alertTime: '2016-05-04',
                alertType: '火灾报警',
                alertInfo: '储物室火灾报警'
            }, {
                alertTime: '2016-05-01',
                alertType: '火灾报警',
                alertInfo: '储物室火灾报警'
            }, {
                alertTime: '2016-05-03',
                alertType: '火灾报警',
                alertInfo: '储物室火灾报警'
            }],
        }
    },
}
</script>

<style>
    @import url(../style/common.css);
</style>

<style scoped>
    .container {
        display: flex;
        height: 100vh;
    }
    .el-container {
        height: 100%;
    }
    .el-header {
        /* background-image: linear-gradient(to top, #1475ad96,#dce1f1); */
        /* background-color: #e0dfdf; */
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        border-bottom: 1px solid #c9cccc8a;;
    }


    .el-main {
        display: flex;
        justify-content: center;
        background-color: #ffffff;
        color: #333;
        text-align: center;
        padding: 0;
        /* line-height: 1`60`px; */
    }
    .left-panel {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        color: rgb(19, 15, 15);
        letter-spacing: 10px;
        /* background-color: red; */
    }
    /* 左侧导航栏 */
    .el-menu-item{
        font-size: 15px;
        background-color: #59a9d1;
    }
    .el-submenu span{
        font-size: 15px;
    }
    .right-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 10%;
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
        background-color: #1f2325;
    }

    .side-container > .el-col {
        flex: 0 0 10vw;
    }

    .el-dropdown-link {
        cursor: pointer;
        font-weight: bold;
        color: #043464;
    }
    .el-dropdown-link:hover{
        color: #ff5100;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    i.el-icon-message-solid:hover{
        color: red;
    }
    i.el-icon-switch-button:hover{
        color: red;
    }
    /* 报警列表 */
    .alertTable{
        display: flex;
        justify-content: center;
    }
</style>