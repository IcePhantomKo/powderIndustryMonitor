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
                    <el-table-column prop="data0" label="任务内容"></el-table-column>
                    <el-table-column prop="data1" label="负责人"></el-table-column>
                    <el-table-column prop="data2" label="开始日期"></el-table-column>
                    <el-table-column prop="data3" label="结束日期"></el-table-column>
                    <el-table-column prop="data4" label="完成状态"></el-table-column>
                    <el-table-column prop="data5" label="重要程度"></el-table-column>
                    <el-table-column prop="data6" label="进行天数"></el-table-column>
                    <el-table-column prop="data7" label="剩余天数"></el-table-column>
                    <el-table-column prop="data8" label="更换进度"></el-table-column>
                    <el-table-column prop="data9" label="库存备件"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {
        axios.get('/manage/maintenance').then(res =>{
            // console.log(res.data.column0.length);
            for(let i = 0; i < res.data.column0.length; i++){
                this.tableData.push([]);
                this.tableData[i].data0 = res.data.column0[i];
                this.tableData[i].data1 = res.data.column1[i];
                this.tableData[i].data2 = res.data.column2[i];
                this.tableData[i].data3 = res.data.column3[i];
                this.tableData[i].data4 = res.data.column4[i];
                this.tableData[i].data5 = res.data.column5[i];
                this.tableData[i].data6 = res.data.column6[i];
                this.tableData[i].data7 = res.data.column7[i];
                this.tableData[i].data8 = res.data.column8[i];
                this.tableData[i].data9 = res.data.column9[i];
            }
        }).catch(err => {
            console.log(err);
        })      
    },
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

            tableData: [],
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