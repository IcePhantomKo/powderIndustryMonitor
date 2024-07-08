<template>
    <div class="container">
        <div class="left">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                <i class="el-icon-s-unfold"></i>
                <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="managementSystem"><i class="el-icon-menu"></i>管理系统</el-dropdown-item>
                <el-dropdown-item command="quitSystem"><i class="el-icon-turn-off"></i>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="middle">
            <h1>包装段设备分析看板</h1>
        </div>
        <div class="right">
            <p>{{date}}</p>
            <p>{{time}}</p>
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
        },
        // 下拉菜单
        handleCommand(command) {
            switch (command) {
                // 跳转后台管理系统
                case 'managementSystem':
                this.$confirm('确认跳转至后台管理系统么?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push('/manage/productDev');
                    // this.$message({
                    //   type: 'success',
                    //   message: '跳转成功!'
                    // });
                }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '跳转取消'
                    });          
                });
                break;

                // 退出
                case 'quitSystem':
                this.$confirm('确认退出系统么?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '退出取消'
                    });          
                    });
                break;
                default:
                break;
            }
        }
    },
    //主动触发事件
    mounted: function () {
        this.getCurrentTime();
    }
}
</script>

<style scoped>
    .container{
        display:flex;
        height: 8vh;
        width: 100vw;
        background-color: #0e2c47;
        background-image: url(../assets/Header.svg);
        background-size: cover; 
        background-position: center; /* 图片将居中显示 */
        background-repeat: no-repeat; /* 图片不会重复 */
    }
    .left{
        display: flex;
        flex: 0 0 10%;
        justify-content: start;
        align-items: center;
        /* background-color: red; */
    }
    .middle {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        letter-spacing: 1.5rem;
        color: #01ffff;
        text-shadow: 
            0 0 5px #05c2c2,
            0 0 80px #01ffff,
            0 0 85px #08dfdf;
    }
    .right{
        display: flex;
        flex: 0 0 10%;
        align-items: center;
        margin-top: 1rem;
        height: 4vh;
        flex-direction: column; /* 垂直排列子元素 */
    }
    .right p{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50%;
        margin: 0;
        font-size: 20px;
        color: #01ffff;
    }
    @media (min-width: 3840px) {
        .middle{
            font-size: 40px;
            letter-spacing: 3rem;
        }
        .right p{
            font-size: 40px;
        }
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #01ffff;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
</style>