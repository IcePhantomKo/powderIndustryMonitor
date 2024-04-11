<template>
    <div class="boxTitle">
        <dv-decoration-1 class = "dv3" />
        <div class="boxTitle">{{ boxTitle }}</div>
        <dv-decoration-1 class = "dv3" />
    </div>
</template>

<script>
export default {
    props:{
        boxTitle:String,
        required: true
    }
}
</script>

<style scoped>
    .boxTitle{
        display: flex;
        justify-content: space-evenly;
        white-space: nowrap;
        font-size: medium;
        letter-spacing: .1rem;
        color: #01ffff;
    }
    .dv3{
        flex:1;
        width:10px;
        height: 20px;
    }
</style>
