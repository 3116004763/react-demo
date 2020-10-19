<template>
    <div>
        <h5>{{$options.name}}</h5>
        <div>{{name}}</div>
        <div>{{22}}</div>
    </div>
</template>

<script>
export default {
    name:'testVue',
    data(){
        return {
            name:113,
            age:35,
        }
    },
    mounted(){
        console.log(this.$options.name)
    }
}
</script>