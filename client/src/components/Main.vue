<!-- Header下整体的模块 -->
<template>
    <div class="Main">
        <!-- First Line Info -->
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="今日计划产量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>18000 箱</p>
                    </div>
                    <dv-decoration-4 style="height: 80%; top: -5%;" />
                    <div class="boxRight">
                        <el-progress type="circle" :percentage="25"></el-progress>
                    </div>
                </div>
            </dv-border-box-6>
        </div>

        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="面块输入数量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>左机: {{ randomNum }}</p>
                    </div>
                    <div class="boxRight">
                        <p>右机: {{ randomNum }}</p>
                    </div>
                </div>
            </dv-border-box-6>
        </div>
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="面块包装数量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>左机: {{ randomNum }}</p>
                    </div>
                    <div class="boxRight">
                        <p>右机: {{ randomNum }}</p>
                    </div>
                </div>
            </dv-border-box-6>
        </div>
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="不良产出数量"></BoxTitle>
                <div class="boxContent">
                    <div class="boxLeft">
                        <p>4897 箱</p>
                    </div>
                    <dv-decoration-4 style="height: 80%; top: -5%;" />
                    <div class="boxRight">
                        <el-progress type="circle" :percentage="100" status="success"></el-progress>
                    </div>
                </div>
            </dv-border-box-6>
        </div>

        <!-- Second Line Info -->
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="左机不良产量数量"></BoxTitle>
                <div class="boxContent">
                    <customizedPie></customizedPie>
                </div>
            </dv-border-box-6>
        </div>
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="左机包装异常停机次数统计"></BoxTitle>
                <div class="boxContent">
                    <singleBar></singleBar>
                </div>
            </dv-border-box-6>
        </div>
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="右机包装异常停机次数统计"></BoxTitle>
                <div class="boxContent">
                    <singleBar></singleBar>
                </div>
            </dv-border-box-6>
        </div>
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="右机不良产量数量"></BoxTitle>
                <div class="boxContent">
                    <customizedPie></customizedPie>
                </div>
            </dv-border-box-6>
        </div>

        <!-- Third Line Info -->
        <div class="box"><dv-border-box-6>
            <BoxTitle boxTitle="左机包膜长度不足显示"></BoxTitle>
            <div class="boxContent"><basicBar></basicBar></div>
        </dv-border-box-6></div>

        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="当前产线实时报警提醒"></BoxTitle>
                <div class="boxContent">

                </div>
            </dv-border-box-6>
        </div>
        
        <div class="box">
            <dv-border-box-6>
                <BoxTitle boxTitle="其余数据"></BoxTitle>
                <div class="boxContent">
                    <div class="column"></div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>
            </dv-border-box-6>
        </div>

        <div class="box"><dv-border-box-6>
            <BoxTitle boxTitle="右机包膜长度不足显示"></BoxTitle>
            <div class="boxContent"><basicBar></basicBar></div>
        </dv-border-box-6></div>
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
            this.randomNum = Math.floor(Math.random() * 100);
        }, 1000);
    },
    beforeDestroy(){
        clearInterval(this.interval)
    },
    data() {
        return {
            randomNum: 0
        }
    },
}
</script>

<style>
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
    .boxLeft p{
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
    .boxRight p{
        font-size: 35px;
        font-weight: bolder;
        color: #fbff00;
    }
    /* div分三等分 */
    .column{
        flex: 1;
        width: 100%;
        height: 33.33%;
        background-color: rebeccapurple;
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
        color: #2fb606;
    }
</style>