<template>
    <div id="Tx2">
        <p>{{msg}}</p>
    </div>
</template>

<script>
  import Qs from 'qs'
  export default {
    name: 'Tx2',
    data(){
      return{
        msg:"测试"
      }
    },
    methods: {
      getInfo(){
        let datas={
          uuid:"9a81fc6428bb41c4b171ea66a409ffc0"
        };
        let that=this;
        that.$http({
          method: "post",
          url: "/login/selectUserInfo",
          data: Qs.stringify(datas)
        }).then((res)=>{
          console.log(res);
        },(err)=>{
          console.log(err);
        });
      }
    },
    mounted(){
      this.getInfo();
    }
  }

</script>

<style scoped>

</style>


