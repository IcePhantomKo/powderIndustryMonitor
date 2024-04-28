<!-- 生产设备实时状态 -->
<template>
    <div class="subContainer">
        <el-container>
            <el-aside width="200px">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
            </el-aside>
            <el-main>
                <div class="device-container">
                    <img src="../../assets/dvcStatus.jpg" alt="设备图片" class="device-image">
                    <div v-for="(status, index) in deviceStatuses" 
                        :key="index" 
                        class="status-box" 
                        :style="getStatusPosition(status.position)">
                    <!-- 在这里显示数据，例如 -->
                    <span>{{ status.data }}</span>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
    data() {
        return {
        deviceStatuses: [
            { position: { left: '52%', top: '35%' }, data: '数据1' },
            { position: { left: '65%', top: '33%' }, data: '数据2' },
            // 其他状态点...
        ]
        };
    },
    methods: {
        getStatusPosition(position) {
            return `left: calc(${position.left} - 120px); top:${position.top};`;
        }
        }
    };
</script>

<style scoped>
    @import url(../../style/common.css);

    .device-container {
        width: 100%;
        height: 100%;
    }
    .device-image {
        width: 100%;
        height: 70%;
    }
    .status-box {
        position: absolute;
        width: 100px;
        height: 100px;
        border: 2px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        /* 将div定位在图片外侧 */
        transform: translateX(-120px);
    }
    .status-box::before {
        content: '';
        position: absolute;
        width: 2px;
        background-color: black;
        /* 连线的长度和位置需要根据实际情况调整 */
        height: 50px; /* 示例长度 */
        left: 50px; /* 状态点中心位置 */
        top: 50px; /* 从状态点底部开始 */
        transform: translate(-50%, 0%);
    }
    /* 调整连线的长度和位置 */
    .status-box::before {
        height: 100px; /* 根据需要调整 */
        top: 100%; /* 从状态点底部开始 */
    }

    .el-aside {
        display: flex;
        height: 100%;
        flex-direction: column;
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        overflow: hidden;
    }
  
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .item{
        /* flex:1; */
        border-radius: 3%;
        margin: 6px;
        background-color: #f0f0f0;
        height: 21vh;
    }
</style>