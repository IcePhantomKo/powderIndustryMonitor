<template>
    <div class="container">
        <div class="left">
            Logo
            <!-- <img src="../assets/logo.png" style="width: 100%; height: 100%;"> -->
        </div>
        <div class="middle">
            <el-menu
                :default-active="defaultActive"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#0e2c47"
                text-color="#fff"
                style="height: 100%;"
                active-text-color="#ffd04b">
                <el-menu-item index="temp">处理中心</el-menu-item>
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
                <el-menu-item index="temp1">订单管理</el-menu-item>
            </el-menu>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push('/manage/'+ key);
            // console.log(this.defaultActive);
            console.log(this.$route);
        }
    },
    // watch:{
    //     $route(to,from){
    //         this.defaultActive = this.$route.params.name;
    //     }
    // },
    data() {
        return {
            defaultActive: '1'
        }
    },
}
</script>

<style scoped>
    .container{
        display:flex;
        height: 100%;
    }
    .left{
        width: 200px;
    }
    .right{
        width: 11%;
        color: aliceblue;
    }
    .middle{
        /* padding-left: 20px; */
        flex-grow: 1;
        /* background-color: brown; */
    }
</style>