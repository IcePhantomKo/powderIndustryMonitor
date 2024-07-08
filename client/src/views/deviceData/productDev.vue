<!-- 总览 -->
<template>
    <div class="subContainer">
        <div class="container">
            <!-- 表头部分 -->
            <div class="top boxShadow">设备健康台</div>
            <!-- 剩余部分 -->
            <div class="rest">
                <!-- 左侧 -->
                <div class="restLeft">
                    <div class="container">
                        <div class="leftTop">
                            <div class="row">
                                <div class="column">
                                    <div class="title"><i class="el-icon-s-platform" style="margin-right: .5rem;"></i>设备</div>
                                    <div class="columnRest">
                                        <table>
                                            <tr><td>设备名称:</td><td>方便面产线</td></tr>
                                            <tr><td>设备编码:</td><td>CX003</td></tr>
                                            <tr><td>设备类型:</td><td>方便面生产产线</td></tr>
                                            <tr><td>客户名称:</td><td>方便面工厂</td>
                                            </tr>
                                        </table> 
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="title"><i class="el-icon-s-data" style="margin-right: .5rem;"></i>设备综合效率(OEE)</div>
                                    <div class="columnRest">
                                        <table>
                                            <tr><td>总运行时间:</td><td class="redText">{{ totalRunTime }} h</td></tr>
                                            <tr><td>总故障停机时间:</td><td class="redText">11h</td></tr>
                                            <tr><td>当前运行时间:</td><td class="greenText">12h</td></tr>
                                            <tr><td>当前故障停机时间:</td><td class="redText">20h</td>
                                            </tr>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    <div class="title"><i class="el-icon-s-opportunity" style="margin-right: .5rem;"></i>维护</div>
                                    <div class="columnRest">
                                        <table>
                                            <tr><td>预测性维护保养率:</td><td class="greenText">90 %</td></tr>
                                            <tr><td>上一次点检时间:</td><td class="greenText">11h</td></tr>
                                            <tr><td>上一次保养时间:</td><td class="greenText">152h</td></tr>
                                            <tr><td>残余寿命:</td><td class="greenText">20006h</td>
                                            </tr>
                                        </table> 
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="title"><i class="el-icon-odometer" style="margin-right: .5rem;"></i>消耗</div>
                                    <div class="columnRest">
                                        <table>
                                            <tr><td>能耗:</td><td class="greenText">4.2 kWh</td></tr>
                                            <tr><td>电压:</td><td class="greenText">382 V</td></tr>
                                            <tr><td>电流:</td><td class="greenText">31.4 A</td></tr>
                                            <tr><td>功率:</td><td class="greenText">4.3 kW</td>
                                            </tr>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="leftRest">
                            <div class="title"><i class="el-icon-alarm-clock" style="margin-right: .5rem;"></i>实时报警</div>
                            <div class="alarmTable">
                                <!-- 轮播表 -->
                                <dv-scroll-board :config="config" style="color: black;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧 -->
                <div class="restRight">
                    <div class="container">
                        <div class="rightTop">
                            <div class="title"><i class="el-icon-video-camera" style="margin-right: .5rem;"></i>健康监控台</div>
                        </div>
                        <div class="rightRest">
                            <!-- <div class="title"></div> -->
                            <dynamicDataVue></dynamicDataVue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dynamicDataVue from '../../components/echarts/dynamicData.vue';

export default {
    components:{
        dynamicDataVue,
    },
    data() {
        return {
            timer: null,
            totalRunTime: 0,
            // 轮播表
            config:{
                header: ['时间', '地点', '类型'],
                data: [
                    ['2024年6月27日', '中银大厦24楼', '火灾报警'],
                    ['2024年6月23日', '中银大厦23楼', '火灾报警'],
                    ['2024年6月21日', '中银大厦22楼', '火灾报警'],
                    ['2024年6月20日', '中银大厦21楼', '陌生人报警'],
                    ['2024年6月10日', '中银大厦17楼', '陌生人报警'],
                    ['2024年6月09日', '中银大厦14楼', '陌生人报警'],
                    ['2024年6月07日', '中银大厦14楼', '陌生人报警'],
                    ['2024年5月27日', '中银大厦14楼', '陌生人报警'],
                    ['2024年3月27日', '中银大厦14楼', '陌生人报警'],
                    ['2024年2月27日', '中银大厦14楼', '陌生人报警'],
                    ['2024年1月27日', '中银大厦14楼', '陌生人报警']
                ],
                index:true,
                indexHeader:'序号',
                headerBGC: '#4ca9e7ce',
                oddRowBGC: '#47abee3d',
                evenRowBGC: 'white',
                rowNum:10,
                hoverPause: true
            }
        }
    },
    activated(){
        this.timer = setInterval(() => {
            this.totalRunTime = this.totalRunTime+1;
        }, 1000);
    },
    deactivated() {
        clearInterval(this.timer);
        this.timer == null
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
        height: 99%;
        width: 100%;
        /* padding-left: .5%; */
    }
    .top{
        display: flex;
        height: 5%;
        margin-top: 3rem;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 1rem;
        color: white;
        letter-spacing: 10px;
        background-color: #0d94eece;
    }
    .boxShadow{
        border: 1px solid #c9cccc;
        border-radius: 20px 20px 0 0;
        box-shadow: 5px 5px 10px #919090b7;
    }
    .rest{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border: 1px solid #c9cccc;
        border-radius: 0 0 20px 20px;
        box-shadow: 5px 5px 10px #919090b7;
        /* background-color: #0d94eece; */
    }
    .restLeft{
        width: 30%;
        height: 100%;
        margin-right: .5rem;
        margin-left: .5rem;
        /* background-color: cadetblue; */
    }
    .restRight{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        margin-right: .5rem;
    }
    .leftTop{
        display: flex;
        flex-direction: column;
        height: 40%;
        margin-top: .5rem;
        margin-bottom: .5rem;
    }
    .row {
        display: flex;
        flex: 1; 
        margin: .2rem;
        border-radius: 10px;
    }

    .column {
        display: flex;
        flex-direction: column;
        flex: 1; 
        margin: .2rem;
        border-radius: 10px;
        border: 1px solid #c9cccc;
        box-shadow: 1px 1px 3px #919090b7;
        /* box-sizing: border-box;  */
    }
    .title {
        height: 2.5vh;
        width: 100%;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: .1rem;
        color: white;
        border-radius: 10px 10px 0 0;
        background-color: #333;
    }
    .redText{
        color: red;
        font-weight: bold;
    }
    .greenText{
        color: rgb(20, 148, 8);
        font-weight: bold;
    }
    .columnRest{
        flex:1;
        margin: .1rem;
        /* background-color: rebeccapurple; */
    }
    .columnRest table{
        margin-top: .5rem;
        font-weight: 500;
        width: 100%;
    }
    .leftRest{
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: .2rem;
        border: 1px solid #c9cccc;
        border-radius: 10px;
        box-shadow: 1px 1px 3px #919090b7;
        box-sizing: border-box;
        /* justify-content: center; */
        align-items: center;
    }
    .alarmTable{
        display: flex;
        width: 100%;
        height: 95%;
        margin-bottom: .5rem;
    }
    .rightTop{
        height: 70%;
        margin-top: .8rem;
        margin-bottom: .5rem;
        /* background-color: #b375dd57; */
        border-radius: 10px;
        background-image: url(../../assets/dvcStatus.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid #c9cccc;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 1px 1px 3px #919090b7;
    }
    .rightRest{
        flex: 1;
        background-color: #d2e9ec73;
        margin-bottom: .2rem;
        border: 1px solid #c9cccc;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 1px 1px 3px #919090b7;
    }
</style>