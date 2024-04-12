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
            xAxis: {
                type: 'category',
                data: ['xxx', 'yyy', 'zzz', 'kkk', 'jjj']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [
                    {
                        value: 200,
                        itemStyle: {
                            color: '#5b9bd5',
                        }
                    },
                    {
                        value:100,
                        itemStyle:{
                            color:'#ED7D31'
                        }
                    },
                    {
                        value:300,
                        itemStyle:{
                            color:'#A5A5A5'
                        }
                    },
                    {
                        value:120,
                        itemStyle:{
                            color:'#109A88'
                        }
                    },
                    {
                        value:180,
                        itemStyle:{
                            color:'#B77BF0'
                        }
                    },
                ],
                type: 'bar',
                barWidth:'30%'
                },
                
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