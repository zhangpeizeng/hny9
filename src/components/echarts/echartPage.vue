<template>
    <div :id="id" :class="className" style="height: 300px;width: 100%">
    </div>
</template>

<script>

    export default {
        props: ['options','id','className'],
        data: function () {
            return {

            }
        },
        mounted: function(){
            let myChart = this.$echarts.init(document.getElementById(this.id))
            myChart.setOption(this.options);
        }
    }
</script>

<style rel="stylesheet/scss" scoped>

</style>