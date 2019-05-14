<template>
    <div id="Tx2">
        <p>测试</p>
    </div>
</template>

<script>
  import Qs from 'qs'
  export default {
    name: 'Tx2',
    methods: {
      getInfo(){
        let data={
          uuid:"9a81fc6428bb41c4b171ea66a409ffc0"
        };
        this.$http({
          methods: "post",
          url: "/login/selectUserInfo",
          data: Qs.stringify(data)
        }).then((res)=>{
          console.log(res);
        },(err)=>{
          console.log(err);
        })
      }
    },
    mounted(){
      this.getInfo();
    }
  }

</script>

<style scoped>

</style>


