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
        var screenWidth = window.innerWidth;
        var fontSize = `${screenWidth / 1920 * 12}px`;

        var option = {
            xAxis: {
                type: 'category',
                data: ['Q1', 'Q2', 'Q3', 'Q4'],
                axisLabel: {
                    fontSize: fontSize,
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80],
                    type: 'bar',
                    itemStyle:{
                        color: '#08e677',
                    },
                    barWidth:'30%'
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