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
        var ownSize = screenWidth/1920 *12;
        var fontSize = `${ownSize}px`

        var option = {
            xAxis: {
                type: 'category',
                data: ['总生产量', '总输入面饼数量', '包装不良数', '少料不良数','称重不良数','日期不良数'],
                axisLabel: {
                    fontSize: fontSize,
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [220, 200, 30, 20, 12, 13, 14],
                    type: 'bar',
                    itemStyle:{
                        color: '#08e677',
                    },
                    barWidth:'30%'
                }
            ],
            grid:{
                bottom: ownSize * 5,
            }
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