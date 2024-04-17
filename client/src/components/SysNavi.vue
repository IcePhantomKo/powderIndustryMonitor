<!-- 左侧导航栏 -->
<template>
    <div class="container">
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
                <el-submenu index="storageManagement">
                    <template slot="title">
                        <i class="el-icon-truck"></i>
                        <span>仓储管理</span>
                    </template>
                    <el-menu-item index="temp">出/入库管理</el-menu-item>
                    <el-menu-item index="temp1">配件时限</el-menu-item>
                    <el-menu-item index="1-3">配件管理</el-menu-item>
                </el-submenu>

                <!-- 设备数据采集 -->
                <el-submenu index="2">
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
                <el-submenu index = '3'>
                    <template slot="title">
                        <i class="el-icon-notebook-1"></i>
                        <span>班组管理</span>
                    </template>
                    <el-menu-item index = '3-1'>人员管理</el-menu-item>
                    <el-menu-item index = '3-2'>排班计划</el-menu-item>
                </el-submenu>

                <!-- 综合图表 -->
                <el-submenu index = '4'>
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
                <el-submenu index = '5'>
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
                <el-submenu index = '6'>
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
                <el-submenu index = '7'>
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
                <el-submenu index = '8'>
                    <template slot="title">
                        <i class="el-icon-user-solid"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index = '8-1'>人员信息</el-menu-item>
                    <el-menu-item index = '8-2'>用户认证</el-menu-item>
                    <el-menu-item index = '8-3'>权限设置</el-menu-item>
                </el-submenu>

                <!-- 报警管理 -->
                <el-submenu index = '9'>
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
                <el-submenu index = '10'>
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
</template>
<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        if(key === 'home'){
            this.$router.push('/manage');
        }else{
            this.$router.push('/manage/'+ key);
            }
        }
    },
    data() {
        return {
            name: '',
        }
    },
}
</script>

<style scoped>
    .container{
        display: flex;
        height: 100vh;
        text-align: left;
        overflow-x: hidden;
    }

    .container > .el-col{
        flex: 0 0 250px;
    }

</style>