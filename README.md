# FORK BY SEAN
## SUPPORT VUE2 (WITH VUEX)

# vue-calendar

基于vuejs+webpack环境使用的日期选择插件

[Live demo](http://jinzhe.github.io/vue-calendar/)

* 支持`单选`和`多选`日期
* 支持限定`开始`和`结束`日期范围选择。
* 支持小时分钟
* 支持一个页面多个实例
* 支持自定义星期和月份标题


![](http://ww1.sinaimg.cn/large/823603acgw1ez1n57t8jug20d40acwjw.gif)

![](http://ww3.sinaimg.cn/large/823603acgw1ez8ks5cudrg20in0badzn.gif)


# Options
* :show    是否显示
* :type    date|datetime
* :value	默认值
* :begin  可选开始时间
* :end    可选结束时间
* :x      显示x坐标
* :y      显示y坐标
* :range  是否多选
* :weeks	星期标题
* :months	月份标题
* :sep		分隔符

# How to use?

```
<template>
<div>
    <input class="input" size="50" type="text" @click.stop="open($event,'picker1')" v-model="$store.state.calendar.items.picker1.value" placeholder="普通日期模式，但限制了开始结束日期，使用了自定义星期标题"><br>
    <input class="input" size="50" type="text" @click.stop="open($event,'picker2')" v-model="$store.state.calendar.items.picker2.value" placeholder="选择一段时间，不限制开始结束日期，间隔符号使用“.”"><br>
    <input class="input" size="50" type="text" @click.stop="open($event,'picker3')" v-model="$store.state.calendar.items.picker3.value" placeholder="日期时间模式"><br>

    <input class="input" size="50" type="text" @click.stop="open($event,'picker4')" v-model="$store.state.calendar.items.picker4.value" placeholder="时间模式"><br>
    <calendar
    :show.sync="$store.state.calendar.show"
    :type="$store.state.calendar.type"
    :value.sync="$store.state.calendar.value"
    :x="$store.state.calendar.x"
    :y="$store.state.calendar.y"
    :begin.sync="$store.state.calendar.begin"
    :end.sync="$store.state.calendar.end"
    :range.sync="$store.state.calendar.range"
    :weeks="$store.state.calendar.weeks"
    :months="$store.state.calendar.months"
    :sep="$store.state.calendar.sep"
    >

    </calendar>
</div>
</template>

<script>
import calendar from "./calendar.vue"

export default {
    components:{
        calendar
    },
    data() {
        return {
        }
    },
     // 处理值的传递
    watch:{
        '$store.state.calendar.value': function (value) {
            this.$store.state.calendar.items[this.$store.state.calendar.picker].value = value
        },
    },
    methods:{
        // 打开显示选择器
        open(e,type) {
            // 设置类型
            this.$store.state.calendar.picker = type
            this.$store.state.calendar.type = this.$store.state.calendar.items[type].type
            this.$store.state.calendar.range = this.$store.state.calendar.items[type].range
            this.$store.state.calendar.begin = this.$store.state.calendar.items[type].begin
            this.$store.state.calendar.end = this.$store.state.calendar.items[type].end
            this.$store.state.calendar.value = this.$store.state.calendar.items[type].value
            // 可不用写
            this.$store.state.calendar.sep = this.$store.state.calendar.items[type].sep
            this.$store.state.calendar.weeks = this.$store.state.calendar.items[type].weeks
            this.$store.state.calendar.months = this.$store.state.calendar.items[type].months
            this.$store.state.calendar.show = true
            this.$store.state.calendar.x = e.target.offsetLeft
            this.$store.state.calendar.y = e.target.offsetTop + e.target.offsetHeight + 8
        }
    }
}
</script>
```

# Conatct

- FORK BY SEAN
- YOU CAN SEE ME MORE ON [GITHUB](https://github.com/opjlmi)
