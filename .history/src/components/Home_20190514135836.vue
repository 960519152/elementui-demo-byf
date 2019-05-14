<template>
  <div id="app">
    <el-container class="menu">
      <el-header class="header">
        <i class="el-icon-s-grid menumedia" @click="changeMenu"></i>
      </el-header>
      <el-container>
        <el-aside>
          <el-row class="tac">
            <!--强行加入动画过度隐藏效果-->
             <transition name="el-fade-in">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router @open="handleOpen" v-if="!isCollapse"
              @close="handleClose" :collapse="isCollapse"  :class="{'isCollapseFalseStyle':isCollapse!=true}">
              <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="!item.leaf">
                  <template slot="title">
                    <i :class="item.iconCls"></i>
                    <span slot="title">{{item.name}}</span>
                  </template>
                  <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                    v-if="!child.hidden">{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.leaf&&item.children.length==1" :index="item.children[0].path">
                  <i :class="item.iconCls"></i>
                  <span slot="title"> {{item.children[0].name}}</span>
                </el-menu-item>
              </template>
            </el-menu>
             </transition>
          </el-row>
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
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      changeMenu() {
        if (this.isCollapse) {
          this.isCollapse = false
        } else {
          this.isCollapse = true
        }
      }
    },
    watch:{
      //监听路由变化，自动缩减左边菜单栏目
      $route(){
        console.log(document.body.clientWidth);
        if(this.isCollapse){
          this.isCollapse = true;
        }
         
      }
    },
    mounted(){
     
    }
  };

</script>

<style scoped lang="scss">
  // @import "../../static/css/base.scss";
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
  }

  .el-menu-item {
    text-align: left;
  }

  .el-aside {
    width: auto !important;
  }

  .isCollapseFalseStyle{
     width: 200px !important;
  }
  @media screen and (min-width: $smallSize) {
    .header {
      background: $headBackColor;
      i {
        display: none;
      }
    };
  }

  @media screen and (max-width: $smallSize) {
    .header {
      background: $headBackColor;
      i {
        display: inline;
      }
    };
  }

</style>
