<template>
  <div id="app">
    <el-container class="menu">
      <el-header class="header">
        <i class="el-icon-s-grid menumedia" @click="k"></i>
      </el-header>
      <el-container>
        <el-aside>
          <el-row class="tac">
            <el-col :span="24">
              <!-- <div class="div-logo">
                <img src="../../static/image/logo.png">
              </div> -->
              <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router v-show="true"
                @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                  <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title">
                      <i :class="item.iconCls"></i>
                      <span slot="title">{{item.name}}</span> 
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                      v-if="!child.hidden"> <span slot="title"> {{child.name}}</span></el-menu-item>
                  </el-submenu>
                  <el-menu-item v-if="item.leaf&&item.children.length==1" :index="item.children[0].path">
                    <i :class="item.iconCls"></i>
                    <span slot="title"> {{item.children[0].name}}</span>
                  </el-menu-item>
                </template>
              </el-menu>
            </el-col>
          </el-row>
          <!-- <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
     <el-menu-item index="1-1">选项1</el-menu-item>
     <el-menu-item index="1-2">选项2</el-menu-item>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu> -->
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      k(){
        if(this.isCollapse){
          this.isCollapse=false
        }else{
          this.isCollapse=true
        }
      }
    },
    watch:{
      isCollapse(){
        console.log(this.isCollapse);
      }
    }
  };

</script>

<style scoped lang="scss">
  @import "../../static/css/base.scss";

  .menu {
    width: 100%;
    height: 100%;
  }

  .div-logo {
    width: 100%;
    height: 135px;

    img {
      width: 45%;
    }
  }

  .header {
    font-size: 25px;
    text-align: left !important;
  }

  // .left-aside {
  //   width: 200px !important;
  //   overflow-x: hidden;
  // }

  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-submenu {
    text-align: left;
    // padding-left: 10px;
  }

  .el-menu-item {
    text-align: left;
    // padding-left: 30px !important;
  }
  .el-submenu__icon-arrow ,.el-icon-arrow-down{
    position: absolute !important;
    right: 4% !important;
  }

  // i {
  //   vertical-align: text-bottom !important;
  // }
  .el-aside{
    width: auto !important;
  }

  @media screen and (min-width: $smallSize) {
    .header {
      background:#409EFF;

      i {
        display: inline;
      }
    }
  }

  @media screen and (max-width: $smallSize) {
    .header {
      background: #409EFF;

      i {
        display: inline;
      }
    };
  }

  @media screen and (max-width: $smallSize) {
    // .el-aside{
    //   left: -100%;
    //   position: relative;
    // }
  }

</style>
