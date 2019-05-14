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
         //查询个人信息
        let that = this;
        let datas={
          uuid:"9a81fc6428bb41c4b171ea66a409ffc0"
        }
        that.$http({
          method: 'post',
          url: '/login/selectUserInfo',
          data: Qs.stringify(datas)
        }).then((res)=>{
          console.log(res);
        },(err)=>{

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


