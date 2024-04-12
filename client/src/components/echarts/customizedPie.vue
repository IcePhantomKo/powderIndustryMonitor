<template>
    <div :id="elId" class="container"></div>
</template>

<script>
import uuidv1 from 'uuid/v1' 

export default {
    created() {
        this.elId = uuidv1()
    },
    
    mounted() {
        var myChart = this.$echarts.init(document.getElementById(this.elId));
        var option = {
            // title: {
            //     text: 'Referer of a Website',
            //     subtext: 'Fake Data',
            //     left: 'center'
            // },
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //     orient: 'vertical',
            //     left: 'left'
            // },
            series: [
                {
                    // name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '65%'],
                    data: [
                        { value: 1048, name: '金检异常' },
                        { value: 735, name: '包装异常' },
                        { value: 580, name: '拆包异常' },
                        { value: 484, name: '色选异常' },
                        { value: 300, name: '切料异常' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 30,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    itemStyle:{
                        borderRadius: 5
                    }
                }
            ]
        };

        option && myChart.setOption(option);

    },
}
</script>

<style scoped>
    .container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        /* background-color: rebeccapurple; */
    }
</style>