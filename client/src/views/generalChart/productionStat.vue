<!-- 产量统计 -->
<template>
    <div class="subContainer">
        <div class="container">
            <!-- 时间 -->
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

            <!-- 表格 -->
            <div class="middle">
                <el-table :data="tableData" height="95%">
                    <el-table-column type="index" label="序号"></el-table-column>
                    <el-table-column prop="data0" label="班组"></el-table-column>
                    <el-table-column prop="data1" label="姓名"></el-table-column>
                    <el-table-column prop="data2" label="总产出数量"></el-table-column>
                    <el-table-column prop="data3" label="总输入面饼数量"></el-table-column>
                    <el-table-column prop="data4" label="总产出数量"></el-table-column>
                    <el-table-column prop="data5" label="包装不良数"></el-table-column>
                    <el-table-column prop="data6" label="少料不良数"></el-table-column>
                    <el-table-column prop="data7" label="称重不良数"></el-table-column>
                    <el-table-column prop="data8" label="日期不良数"></el-table-column>
                </el-table>
            </div>

            <!-- Chart -->
            <div class="bottom">
                <basicBar :chart-data = "chartData"></basicBar>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import basicBar from '../../components/echarts/basicBar.vue';

export default {
    components:{
        basicBar,
    },
    mounted() {
        axios.get('/manage/productionStat').then(res =>{
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
            }
        }).catch(err => {
            console.log(err);
        })
    },
    methods: {
        changeChartData(){

        }
    },
    created() {

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
            chartData:{
                // 初始数据
                series:[{
                    data:[200,190,40,20,10,12]
                }]
            }
        };
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
.middle {
    flex:1;
    /* background-color: rgb(58, 92, 122); */
}
.bottom {
    flex: .9;
    margin-bottom: .5rem;
    /* background-color: lightcoral; */
    border: 1px solid #c9cccc;
    border-radius: 20px;
    box-shadow: 3px 3px 5px #cac8c8b7;
}
/* 时间选择器 */
.block{
    position: absolute;
    right: 2rem;
}
/* 表格 */
.middle .el-table{
    height: 96%;
    margin-top: .5%;
    /* margin-left: .5%; */
    border: 1px solid #c9cccc;
    border-radius: 20px;
    box-shadow: 5px 5px 20px #cac8c8b7;
}
</style>
