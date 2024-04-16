<!-- 左侧导航栏 -->
<template>
    <div class="container">
        <el-col :span="12">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#f0f8ff00"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>TPM信息组报表</span>
                </template>
                <el-menu-item-group>
                <template slot="title">主数据管理</template>
                <el-menu-item index="1-1">组织机构管理</el-menu-item>
                <el-menu-item index="1-2">业务区城管理</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">职位级别管理</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">职位管理</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">预算管理</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">费用规划</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">结案核销</span>
            </el-menu-item>
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
      }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    .container{
        display:flex;
        height: 100%;
    }
    .container h5{
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
    }
</style>