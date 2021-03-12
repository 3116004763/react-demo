<template>
    <div>
        a
        <B v-on="$listeners" v-bind="$attrs" :age="999"/>
    </div>  
</template>

<script>
import B from './B'
export default {
    components: {
        B
    },
    mounted() {
        console.log(this.$attrs)
    }
}
</script>

<style>

</style>