<!-- Header下整体的模块 -->
<template>
    <div class="Main">
        <!-- First Line Info -->
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="今日计划产量"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="面块输入数量"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="面块包装数量"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="不良产出数量"></BoxTitle></dv-border-box-7></div>

        <!-- Second Line Info -->
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="左机不良产量数量"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="左机包装异常停机次数统计"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="右机包装异常停机次数统计"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="右机不良产量数量"></BoxTitle></dv-border-box-7></div>

        <!-- Third Line Info -->
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="左机包膜长度不足显示"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="当前产线实时报警提醒"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="其余数据"></BoxTitle></dv-border-box-7></div>
        <div class="box"><dv-border-box-7><BoxTitle boxTitle="右机包膜长度不足显示"></BoxTitle></dv-border-box-7></div>
    </div>
</template>

<script>
import BoxTitle from '@/components/BoxTitle.vue'

export default {
    components:{
        BoxTitle
    }
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
    @media(max-width: 1080px){
        .Main{
            flex-wrap: nowrap;
        }
    }
    .boxTitle{
        display: flex;
        justify-content: space-evenly;
        font-size: medium;
        letter-spacing: .2rem;
        color: #01ffff;
    }
    .box{
		width: 29rem;
		height: 13rem;
		/* background-color: lightblue; */
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
</style>