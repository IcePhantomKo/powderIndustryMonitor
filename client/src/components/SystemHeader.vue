<template>
    <div class="container">
        <div class="left">
            <!-- <img src="../assets/logo.png" style="width: 100%; height: 100%;"> -->
        </div>
        <div class="middle">
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#0e2c47"
                text-color="#fff"
                style="height: 100%;"
                active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex2: '1'
        }
    },
}
</script>

<style>
    .container{
        display:flex;
        height: 100%;
    }
    .left, .right{
        width: 11%;
        background-color: #4b3e05;
        color: aliceblue;
    }
    .middle{
        padding-left: 20px;
        flex-grow: 1;
        /* background-color: brown; */
    }
    .test{
        color: #f0f8ff00;
    }
</style>