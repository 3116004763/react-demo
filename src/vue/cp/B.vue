<template>
    <div>
        b
    </div>  
</template>

<script>
export default {
    mounted(){
        console.log(this.$attrs)
        this.$emit('bb','bbalert')
    }
}
</script>

<style>

</style>