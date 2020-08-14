<template>
    <component :is="`chart-${chart}`" v-bind="[$attrs.props, $attrs, $props]"/>
</template>

<script>
    import ChartPie from "./ChartPie";
    import ChartBar from "./ChartBar";
    import ChartBubble from "./ChartBubble";
    import ChartLine from "./ChartLine";
    import ChartRadar from "./ChartRadar";

    export default {
        name: "ChartRenderer",
        components: { ChartPie, ChartBar, ChartLine, ChartBubble, ChartRadar },
        props: {
            chart:{
                type: String,
                default: 'Pie',
            }
        }
    }
</script>

<style scoped>

</style>