<!-- 总览页 -->
<template>
    <div :id="elId" class="container"></div>
</template>

<script>
import uuidv1 from 'uuid/v1'

export default {
    created() {
        this.elId = uuidv1();
    },

    mounted() {
        var myChart = this.$echarts.init(document.getElementById(this.elId));

        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
                ]
            };
        }
        let data = [];
        let now = new Date(1997, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let value = Math.random() * 1000;
            for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }

        var option = {
            title: {
                text: '生产状况'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return (date.getDate() + '/' + (
                        date.getMonth() + 1
                    ) + '/' + date.getFullYear() + ' : ' + params.value[1]);
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [
                    0, '100%'
                ],
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: 'Fake Data',
                    type: 'line',
                    showSymbol: false,
                    data: data
                }
            ]
        };
        setInterval(function () {
            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }
            myChart.setOption({
                series: [
                    {
                        data: data
                    }
                ]
            });
        }, 1000);

        option && myChart.setOption(option);
    }
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