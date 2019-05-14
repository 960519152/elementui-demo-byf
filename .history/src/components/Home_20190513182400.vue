<template>
  <div id="app">
    <el-container class="menu">
      <el-header class="header">
        惠 心 检 后 台
      </el-header>
      <el-container>
        <el-aside class="left-aside">
          <el-row class="tac">
            <el-col :span="24">
              <div class="div-logo">
                <img src="../../static/image/logo.png">
              </div>
              <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router v-show="true">
                <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                  <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                      v-if="!child.hidden">{{child.name}}</el-menu-item>
                  </el-submenu>
                  <el-menu-item v-if="item.leaf&&item.children.length==1" :index="item.children[0].path"><i
                      :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                </template>
              </el-menu>
            </el-col>
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
    name: 'Home',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style scoped lang="scss">
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

  .left-aside {
    width: 200px !important;
    overflow-x: hidden;
  }

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
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
    padding-left: 10px;
  }

  .el-menu-item {
    text-align: left;
    padding-left: 30px !important;
  }

  i {
    vertical-align: text-bottom !important;
  }

    @media screen and (max-width: 700px){
        body{
            background: red;
        }
    }
</style>
