<!-- Header下整体的模块 -->
<template>
    <div class="Main">
        <!-- First Line Info -->
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="今日计划产量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>{{ randomNum }} 箱</p>
                    </div>
                    <dv-decoration-4 style="height: 80%; top: -5%;" />
                    <div class="boxRight">
                        <!-- <el-progress type="circle" :percentage="25"></el-progress> -->
                        <dv-active-ring-chart :config="planAmount" style="width:100%;height:100%" />
                    </div>
                </div>
            </dv-border-box-7>
        </div>

        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="面块输入数量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>左机: {{ randomNum }}</p>
                    </div>
                    <div class="boxRight">
                        <p>右机: {{ randomNum }}</p>
                    </div>
                </div>
            </dv-border-box-7>
        </div>
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="面块包装数量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>左机: {{ randomNum }}</p>
                    </div>
                    <div class="boxRight">
                        <p>右机: {{ randomNum }}</p>
                    </div>
                </div>
            </dv-border-box-7>
        </div>
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="不良产出数量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>{{ randomNum }} 箱</p>
                    </div>
                    <dv-decoration-4 style="height: 80%; top: -5%;" />
                    <div class="boxRight">
                        <dv-active-ring-chart :config="unquilifiedAmount" style="width:100%;height:100%" />
                    </div>
                </div>
            </dv-border-box-7>
        </div>

        <!-- Second Line Info -->
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="左机不良产量数量"></BoxTitle>
                <div class="boxContent">
                    <customizedPie></customizedPie>
                </div>
            </dv-border-box-7>
        </div>
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="左机包装异常停机次数统计"></BoxTitle>
                <div class="boxContent">
                    <singleBar></singleBar>
                </div>
            </dv-border-box-7>
        </div>
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="右机包装异常停机次数统计"></BoxTitle>
                <div class="boxContent">
                    <singleBar></singleBar>
                </div>
            </dv-border-box-7>
        </div>
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="右机不良产量数量"></BoxTitle>
                <div class="boxContent">
                    <customizedPie></customizedPie>
                </div>
            </dv-border-box-7>
        </div>

        <!-- Third Line Info -->
        <div class="box"><dv-border-box-7>
            <BoxTitle boxTitle="左机包膜长度不足显示"></BoxTitle>
            <div class="boxContent"><basicBar></basicBar></div>
        </dv-border-box-7></div>

        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="当前产线实时报警提醒"></BoxTitle>
                <div class="boxContent">
                    <dv-scroll-board :config="boardConfig" style="width:96%;height:85%; margin-top: -1rem" />
                </div>
            </dv-border-box-7>
        </div>
        
        <div class="box">
            <dv-border-box-7>
                <BoxTitle boxTitle="其余数据"></BoxTitle>
                <div class="boxContent">
                    <div class="column">
                        <i class="el-icon-caret-right"></i>
                        <p>当前产线耗电累计：</p>
                        <p class="columnInfo">{{ randomNum }} 度</p>
                    </div>
                    <div class="column">
                        <i class="el-icon-caret-right"></i>
                        <p>当班产线耗气累计：</p>
                        <p class="columnInfo">{{ randomNum }} m³</p>
                    </div>
                    <div class="column">
                        <i class="el-icon-caret-right"></i>
                        <p>当前空压气压力：</p>
                        <p class="columnInfo">{{ randomNum }} Mpa</p>
                    </div>
                </div>
            </dv-border-box-7>
        </div>

        <div class="box"><dv-border-box-7>
            <BoxTitle boxTitle="右机包膜长度不足显示"></BoxTitle>
            <div class="boxContent"><basicBar></basicBar></div>
        </dv-border-box-7></div>
    </div>
</template>

<script>
import BoxTitle from '@/components/BoxTitle.vue'
import customizedPie from './echarts/customizedPie.vue'
import singleBar from './echarts/singleBar.vue'
import basicBar from './echarts/basicBar.vue'

export default {
    components:{
        BoxTitle,
        customizedPie,
        singleBar,
        basicBar
    },
    mounted() {
        setInterval(() => {
            this.randomNum = Math.floor(Math.random() * 10000);
        }, 1000);
    },
    beforeDestroy(){
        clearInterval(this.interval)
    },
    data() {
        return {
            randomNum: 0,
            // 今日计划产量
            planAmount:{
                data:[
                    {
                        name:'已完成',
                        value: 85
                    },
                    {
                        name:'未完成',
                        value: 15
                    }
                ],
                lineWidth: 20,
                radius: '60%',
                activeRadius: '65%',
                digitalFlopStyle: {
                    fontSize: 20
                },
                color:['#91CC75','#f17575']
            },
            // 不良产出产品
            unquilifiedAmount:{
                data:[
                    {
                        name:'合格',
                        value: 90
                    },
                    {
                        name:'不合格',
                        value: 10
                    }
                ],
                lineWidth: 20,
                radius: '60%',
                activeRadius: '65%',
                digitalFlopStyle: {
                    fontSize: 20
                },
                color:['#91CC75','#f17575']
            },
            // 报警列表
            boardConfig:{
                header: ['时间','报警信息'],
                data: [
                    ['2024年1月1日 14:21:01','左侧排面机定位伺服负载超限。'],
                    ['2024年1月2日 14:21:01','左侧3号酱包投包机掉料率超过3%。'],
                    ['2024年1月3日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天'],
                    ['2024年1月4日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天'],
                    ['2024年1月5日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天'],
                    ['2024年1月6日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天'],
                    ['2024年1月7日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天'],
                    ['2024年1月8日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天'],
                    ['2024年1月9日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天'],
                    ['2024年1月10日 14:21:01','右侧排面机140XL同步带使用周期超过设定期限1天']
                ],
                index: true,
                columnWidth: [50,200,350],
                align: ['center']
            }
        }
    },
}
</script>

<style scoped>
    .Main{
        display: flex;
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-evenly;
        overflow-y: auto;
    }
    .box{
		width: 29rem;
		height: 13rem;
	}
    .boxContent{
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* background-color: rebeccapurple; */
    }
    .boxLeft{
        position: absolute;
        width: 45%;
        height: 100%;
        left: 1rem;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: #2fb606; */
    }
    .boxLeft, .boxRight p{
        font-size: 35px;
        font-weight: bolder;
        color: #fbff00;
    }
    .boxRight{
        position: absolute;
        width: 45%;
        height: 100%;
        right: 1rem;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: #2fb606; */
    }
    /* div分三等分 */
    .column{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 100%;
        height: 33.33%;
        color: white;
    }
    .columnInfo{
        color: #fbff00;
        font-size: large;
        font-weight: bold;
        margin-left: 1rem;
    }
    /* 前四个 */
    .box:nth-child(-n+4){
        margin-top: 2%;
    }
    /* 5-8 */
    .box:nth-child(n+5):nth-child(-n+8){
        height: 20rem;
    }
    .box:nth-child(5){
        width: 25rem;
    }
    .box:nth-child(6){
        width: 33rem;
    }
    .box:nth-child(7){
        width: 33rem;
    }
    .box:nth-child(8){
        width: 25rem;
    }
    /* 9-12 */
    .box:nth-child(n+9):nth-child(-n+12){
        height: 20rem;
        margin-bottom: 5%;
    }
    .box:nth-child(10){
        width: 40rem;
    }
    .box:nth-child(11){
        width: 18rem;   
    }

    #test{
        color: #08e677;
    }
</style>