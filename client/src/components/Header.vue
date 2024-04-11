<template>
    <div id="header">
        <img src="../assets/Header.svg">
        <div class="Title">
            <h1>包装段设备分析看板</h1>
        </div>
        <div class="currentTime">
            <div id="timeRight">
                <p>{{date}}</p>
                <p>{{time}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            date:'',
            time:'',
        }
    },
    methods: {
        formatDate(){
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes() < 10
                ? '0' + new Date().getMinutes()
                : new Date().getMinutes();
            let ss = new Date().getSeconds() < 10
                ? '0' + new Date().getSeconds()
                : new Date().getSeconds();

            this.date = yy+'/'+mm+'/'+dd;
            this.time = hh+':'+mf+':'+ss;
        },


        getCurrentTime:function(){
            setInterval(this.formatDate,1000);
        }
    },
    //主动触发事件
    mounted: function () {
        this.getCurrentTime();
    }
}
</script>

<style scoped>
    #header{
        display: flex;
        height: 90px;
        width: 100%;
    }
    #header img{
        height: 100%;
        width: 100%;
    }

    .Title {
        position: absolute;
        display: flex;
        height: 90px;
        width: 100%;
        justify-content: center;
        align-items: center;
        color: #01ffff;
        letter-spacing: 2rem;
    }
    @media (max-width:1400px) {
        .Title{
            font-size: small;
        }        
    }
    .currentTime{
        position: absolute;
        width: 7rem;
        right: 0;
        top: 0;
    }
    #timeRight{
        position: relative;
        height: 90%;
        width: 54%;
        margin-top: -3%;
        color: #01ffff;
        font-weight: bold;
        text-align: center;
    }
    #timeRight p{
        margin-top: 20px;
        line-height: .4em;
    }
</style>