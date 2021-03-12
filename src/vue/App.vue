<template>
    <div>
        <A @bb="alertS" :name="name"/>
    </div>
</template>

<script>
import A from './cp/A'
export default {
    name:'testVue',
    components:{
        A
    },
    methods: {
        alertS(p){
            alert(p)
        }
    },
    data(){
        return {
            name:113,
            age:35,
        }
    },
    mounted(){
        // console.log(this.$options.name)
    }
}
</script>