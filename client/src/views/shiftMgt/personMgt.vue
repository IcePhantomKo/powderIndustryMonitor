<template>
    <div class="subContainer">
        <!-- <h1 style="color: white;">
            人员管理
        </h1> -->
        <div id="flexCenter"></div>
        <button @click="debouncedChangeColor">防抖</button>
        <button @click="throttleChangeColor">节流</button>
    </div>
</template>

<script>
export default {
    methods: {
        changeColor(){
            if(this.flag){
                document.getElementById('flexCenter').style.backgroundColor = 'pink';
            }else{
                document.getElementById('flexCenter').style.backgroundColor = 'blue';
            }        
            this.flag = !this.flag;
        },
        // 防抖 任务触发的间隔超过指定间隔的时候任务才会执行(一般用于输入框搜索)
        debounce(fn, time){
            let timer = null;
            return function(){
                if(timer){
                    clearTimeout(timer);
                }
                timer = setTimeout(()=>{
                    fn.apply(this, arguments);
                }, time);
            }
        },
        // 节流 规定函数在指定的事件间隔内只执行一次，一般用于scroll事件
        throttle(fn,time){
            let canRun = true;
            return function(){
                if(!canRun){
                    return
                }
                canRun = false;
                setTimeout(()=>{
                    fn.apply(this,arguments)
                    canRun = true;
                },time)
            }
        }
    },
    created() {
        // 在组件创建时绑定防抖函数
        this.debouncedChangeColor = this.debounce(this.changeColor, 1000);
        // 在组件创建时绑定节流函数
        this.throttleChangeColor = this.throttle(this.changeColor,2000);
    },
    data() {
        return {
            flag: true,
        }
    },
}
</script>

<style>
    @import url(../../style/common.css);
    .subContainer{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #flexCenter{
        width: 300px;
        height: 300px;
        background-color: blue;
    }
</style>
