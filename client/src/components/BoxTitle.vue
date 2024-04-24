<template>
    <div class="boxTitle">
        <dv-decoration-2 class = "dv3" />
        <div class="boxTitle">{{ boxTitle }}</div>
        <dv-decoration-2 class = "dv3" />
    </div>
</template>

<script>
export default {
    props:{
        boxTitle: String,
        required: true
    }
}
</script>

<style scoped>
    .boxTitle{
        display: flex;
        justify-content: space-evenly;
        white-space: nowrap;
        font-size: 15px;
        letter-spacing: .1rem;
        color: #01ffff;
        text-shadow: 
            0 0 2px #046868,
            0 0 5px #01ffea;
        /* background-color: bisque; */
    }
    .dv3{
        flex:1;
        width:10px;
        height: 20px;
    }
    @media (min-width: 3840px) {
        .boxTitle{
            font-size: 30px;
        }
    }
</style>
