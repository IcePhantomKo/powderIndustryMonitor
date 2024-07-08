<!-- 维护与保养 -->
<template>
    <div class="subContainer">
        <div class="container">
            <!-- 头部 时间选择器 & 搜索 -->
            <div class="top">
                <div class="block">
                    <!-- <span class="demonstration">带快捷选项</span> -->
                    <el-date-picker
                        v-model="value2"
                        size = "medium"
                        style="margin-right: 1rem;"
                        type="daterange"
                        align="right"
                        unlink-panels="unlink-panels"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions"></el-date-picker>
                    <el-button type="primary" icon="el-icon-search" circle></el-button>
                </div>
            </div>
            <!-- 剩余部分 -->
            <div class="containerRest">
                <el-table :data="tableData" height="95%">
                    <el-table-column type="index" label="序号"></el-table-column>
                    <el-table-column prop="maintenance0" label="任务内容"></el-table-column>
                    <el-table-column prop="maintenance1" label="负责人"></el-table-column>
                    <el-table-column prop="maintenance2" label="开始日期"></el-table-column>
                    <el-table-column prop="maintenance3" label="结束日期"></el-table-column>
                    <el-table-column prop="maintenance4" label="完成状态"></el-table-column>
                    <el-table-column prop="maintenance5" label="重要程度"></el-table-column>
                    <el-table-column prop="maintenance6" label="进行天数"></el-table-column>
                    <el-table-column prop="maintenance7" label="剩余天数"></el-table-column>
                    <el-table-column prop="maintenance8" label="更换进度"></el-table-column>
                    <el-table-column prop="maintenance9" label="库存备件"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pickerOptions: {
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }
                ]
            },
            value1: '',
            value2: '',

            tableData: [{
                maintenance0: '包装机中封轴承',
                maintenance1: '赵四',
                maintenance2: '2024-02-09',
                maintenance3: '2024-05-08',
                maintenance4: '未开始',
                maintenance5: '重要',
                maintenance6:'89',
                maintenance7: '30',
                maintenance8: '未到期',
                maintenance9: '有'
            }],
        }
    },
}
</script>

<style>
    @import url(../../style/common.css);
</style>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* 设置容器高度为视口高度 */
}
.top {
    height: 4%;
    padding: .5rem;
    /* background-color: lightblue; */
}
/* 时间选择器 */
.block{
    position: absolute;
    right: 2rem;
}
.containerRest{
    flex: 1;
}
.containerRest .el-table{
    height: 96%;
    margin-top: .5%;
    /* margin-left: .5%; */
    border: 1px solid #c9cccc;
    border-radius: 20px;
    box-shadow: 5px 5px 30px #cac8c8b7;
}
</style>