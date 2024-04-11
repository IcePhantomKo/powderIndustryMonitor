<!-- Header下整体的模块 -->
<template>
    <div class="Main">
        <!-- First Line Info -->
        <div class="box">
            <dv-border-box-12>
                <div class="boxTitle">

                </div>
            </dv-border-box-12>
        </div>
        <div class="box"><dv-border-box-12>test</dv-border-box-12></div>
        <div class="box"><dv-border-box-12>asdf</dv-border-box-12></div>
        <div class="box"><dv-border-box-12>a</dv-border-box-12></div>

        <div class="box"><dv-border-box-6></dv-border-box-6></div>
        <div class="box"><dv-border-box-6></dv-border-box-6></div>
        <div class="box"><dv-border-box-6></dv-border-box-6></div>
        <div class="box"><dv-border-box-6></dv-border-box-6></div>

        <div class="box"><dv-border-box-7></dv-border-box-7></div>
        <div class="box"><dv-border-box-7></dv-border-box-7></div>
        <div class="box"><dv-border-box-7></dv-border-box-7></div>
        <div class="box"><dv-border-box-7></dv-border-box-7></div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
    .Main{
        display: flex;
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    @media(max-width: 1080px){
        .Main{
            flex-wrap: nowrap;
        }
    }
    .boxTitle{

    }
    .box{
		width: 29rem;
		height: 13rem;
		/* background-color: lightblue; */
	}
    .box:nth-child(-n+4){
        margin-top: 2%;
    }
    .box:nth-child(n+5):nth-child(-n+8){
        height: 20rem;
    }
    .box:nth-child(5){
        width: 22rem;
    }
    .box:nth-child(6){
        width: 36rem;
    }
    .box:nth-child(7){
        width: 36rem;
    }
    .box:nth-child(8){
        width: 22rem;
    }
    .box:nth-child(n+9):nth-child(-n+12){
        height: 20rem;
        margin-bottom: 5%;
    }
    .box:nth-child(10){
        width: 45rem;
    }
    .box:nth-child(11){
        width: 13rem;   
    }
</style>