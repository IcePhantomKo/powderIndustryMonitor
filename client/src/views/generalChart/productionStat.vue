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
                    <el-table-column prop="shift" label="班组"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="totalOutput" label="总产出数量"></el-table-column>
                    <el-table-column prop="totalInput" label="总输入面饼数量"></el-table-column>
                    <el-table-column prop="totalAmount" label="总产出数量"></el-table-column>
                    <el-table-column prop="package" label="包装不良数"></el-table-column>
                    <el-table-column prop="totalAmount" label="少料不良数"></el-table-column>
                    <el-table-column prop="totalAmount" label="称重不良数"></el-table-column>
                    <el-table-column prop="totalAmount" label="日期不良数"></el-table-column>
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
import basicBar from '../../components/echarts/basicBar.vue';

export default {
    components:{
        basicBar,
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

            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            },
            {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            chartData:{
                // 初始数据
                series:[{
                    data:[200,300,400,500]
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
