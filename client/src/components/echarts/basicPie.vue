<!-- 风险管理页Pie表 -->
<template>
    <div :id="elId" class="container"></div>
</template>

<script>
import uuidv1 from 'uuid/v1'

export default {
    created(){
        this.elId = uuidv1();
    },

    mounted() {
        var myChart = this.$echarts.init(document.getElementById(this.elId));
        
        var option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
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