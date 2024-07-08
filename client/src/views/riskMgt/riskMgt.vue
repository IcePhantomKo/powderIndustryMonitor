<template>
    <div class="subContainer">
        <div class="container">
            <div class="top">
                <!-- 信息看板 -->
                <div class="topLeft">
                    <div class="title">信息看板</div>
                    <div class="content">
                        <div class="row">
                            <div class="column">设备段：</div>
                            <div class="column">包装段</div>
                            <div class="column">值班长：</div>
                            <div class="column">张三</div>
                        </div>
                        <div class="row">
                            <div class="column">产线编号：</div>
                            <div class="column">2号线</div>
                            <div class="column">设备经理：</div>
                            <div class="column">王五</div>
                        </div>
                        <div class="row">
                            <div class="column">生产班组：</div>
                            <div class="column">甲班</div>
                            <div class="column">日期：</div>
                            <div class="column">2024年04月08日</div>
                        </div>
                        <div class="row">
                            <div class="column">班组时段：</div>
                            <div class="column">08:00-16:00</div>
                            <div class="column">实时产量：</div>
                            <div class="column">1059/1680</div>
                        </div>
                    </div>                
                </div>
                <div class="topRight">
                    <div class="title">比例看板</div>
                    <div class="content">
                        <div class="row" style="border-right: 2px solid #68cce696;">
                            <basicPie></basicPie>
                        </div>
                        <div class="row" style="border-right: 2px solid #68cce696;">
                            <basicPie></basicPie>
                        </div>
                        <div class="row">
                            <basicPie></basicPie>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rest">
                <el-table :data="tableData" height="95%">
                    <el-table-column type="index" label="序号"></el-table-column>
                    <el-table-column prop="risk0" label="风险描述"></el-table-column>
                    <el-table-column prop="risk1" label="当前监视值"></el-table-column>
                    <el-table-column prop="risk2" label="预估概率发生概率"></el-table-column>
                    <el-table-column prop="risk3" label="影响程度"></el-table-column>
                    <el-table-column prop="risk4" label="重视等级"></el-table-column>
                    <el-table-column prop="risk5" label="风险应对方案"></el-table-column>
                    <el-table-column prop="risk6" label="设备负责人"></el-table-column>
                    <el-table-column prop="risk7" label="监督人"></el-table-column>
                    <el-table-column prop="risk8" label="状态"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import basicPie from '../../components/echarts/basicPie.vue'

export default {
    components:{
        basicPie,
    },
    mounted() {
        axios.get('/manage/riskMgt').then(res =>{
            console.log(res);
            this.tableData[0].risk0 = res.data.column0[0];
        }).catch(err =>{
            console.log(err);
        })
    },
    data() {
        return {
            tableData: [{
                risk0: '1线2号分包投包机掉料300包',
                risk1: '104包',
                risk2: '30%',
                risk3: '低风险',
                risk4: '星星',
                risk5: '停机时需检修',
                risk6: '赵阳',
                risk7: '李东',
                risk8: '运行中'
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
    .top{
        display: flex;
        height: 30%;
        margin-top: 3rem;
        /* background-color: aqua; */
        margin-bottom: .5rem;
    }
    .topLeft{
        display: flex;
        flex-direction: column;
        width: 30%;
        margin-right: 1rem;
        border: 1px solid #c9cccc;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #919090b7;
    }
    .title {
        height: 10%;
        text-align: center;
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 1rem;
        border-radius: 20px 20px 0 0; 
        color: white;
        background-color: #0d94eece;
    }
    .topLeft .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: .5rem;
    }
    /* 信息看板下划线 */
    .topLeft .content .row{
        border-bottom: 1px solid #68cce696;
    }
    /* 信息看板内容最后一个下划线 */
    .topLeft .content .row:last-child {
        border-bottom: none;
    }
    .topRight .content{
        flex: 1;
        display: flex;
        margin: .5rem;
        /* background-color: darkblue; */
    }
    .row {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .column {
        flex: 1;
        justify-content: center;
        align-items: center;
        /* border: 1px solid #ccc;
        background-color: #e9e9e9; */
    }

    .topRight{
        display: flex;
        flex-direction: column;
        flex: 1;
        border: 1px solid #c9cccc;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #919090b7;
        /* background-color: rebeccapurple; */
    }
    .rest{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        /* background-color: red; */
    }
    .rest .el-table{
        height: 96%;
        margin-top: .5%;
        /* margin-left: .5%; */
        border: 1px solid #c9cccc;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #919090b7;
    }

</style>