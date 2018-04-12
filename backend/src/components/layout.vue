<template>

  <el-container style="height: 100%;">
    <div class="outer-container">
      <el-aside width="200px">
        <h2 class="mess" style="text-align:center">空降联盟平台</h2>
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>会员管理</template>
            <el-menu-item-group>
              <router-link to="/layout/member/">
                <el-menu-item index="1-1">用户管理</el-menu-item>
              </router-link>
              <router-link to="/layout/safeguard/">
                <el-menu-item index="1-2">保障人员会员记录</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <router-link to="/layout/vehicle/">
              <el-menu-item index="1-3">保障车辆会员记录</el-menu-item>
            </router-link>

          </el-submenu>
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>员工组织架构</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">组织机构与部门</el-menu-item>
              <el-menu-item index="2-2">员工管理</el-menu-item>
            </el-menu-item-group>

            <el-menu-item index="2-3">员工搜索</el-menu-item>

          </el-submenu> -->
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>销售订单管理</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">创建新订单</el-menu-item>
              <el-menu-item index="3-2">订单查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->

          <!-- <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>商品管理</template>
            <el-menu-item-group>
              <router-link :to="'/layout/equities/'">
                <el-menu-item index="4-1">权益管理</el-menu-item>
              </router-link>
              <router-link :to="'/layout/commodity/'">
                <el-menu-item index="4-2">商品管理</el-menu-item>
              </router-link>
              <el-menu-item index="4-3">非权益商品</el-menu-item>
              <router-link :to="'/layout/category/'">
                <el-menu-item index="4-4">类目管理</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu> -->

          <!-- <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-printer"></i>销售库存</template>
            <el-menu-item-group>
              <router-link :to="'/layout/inventory/'">
                <el-menu-item index="5-1">销售库存管理</el-menu-item>
              </router-link>
              <router-link :to="'/layout/warehouse/'">
                <el-menu-item index="5-1">仓库管理</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu> -->
          <!-- <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-sold-out"></i>实体卡（礼品卡）</template>
            <el-menu-item-group>
              <router-link :to="'/layout/cardsearch/'">
                <el-menu-item index="6-1">卡片查询</el-menu-item>
              </router-link>
              <router-link :to="'/layout/cardplan/'">
                <el-menu-item index="6-2">发卡计划管理</el-menu-item>
              </router-link>
              <el-menu-item index="6-3">卡片激活管理</el-menu-item>
              <el-menu-item index="6-4">卡片作废</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>

      </el-aside>
    </div>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">

        <el-breadcrumb separator="/" style="display: inline-block; float: left;">
          <el-breadcrumb-item v-for="(item,index) in crumbData" :key="item" v-bind:class="index==crumbData.length-1 ? 'lastitem' : 'item'">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <span @click="exit()">退出</span>
      </el-header>
      <div style="overflow-y:scroll;padding:24px;height:calc(100% - 60px);">
        <router-view/>

      </div>
    </el-container>
  </el-container>
</template>



<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* height:calc(100%-60px); */
  }

  select {
    height: 30px;
    width: 100px;
    border-radius: 5px;
  }



  .mess {
    height: 57px;
    line-height: 57px;
    background: #3a3632;
    color: #fff;
    border-bottom: 1px solid;
    border-right: 1px solid;
  }

  .el-submenu__title:hover {
    background-color: #e4e7ed;
    color: black;
  }

  .el-header {
    background-color: #3a3632;
    line-height: 64px;
    color: #fff;
    padding-left: 20px;
  }

  .outer-container {
    width: 200px;
    overflow: hidden;
  }

  .el-aside {
    color: #333;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: #3a3632;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .el-menu {
    background: #3a3632;
    color: #fff;
    border-right: none;
  }

  .el-menu li {
    color: white;
  }

  .el-menu li:hover {
    color: #333;
  }

  .el-submenu__title,
  .el-menu-item-group__title,
  .el-menu-item.is-active {
    color: #fff;
  }

  .el-breadcrumb {
    line-height: 4;
  }

  .el-breadcrumb__inner,
  .el-breadcrumb__inner a {
    color: white;
  }

  .el-breadcrumb__inner a:hover,
  .el-breadcrumb__inner:hover {
    color: white;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: white;
  }

  .el-menu-item-group__title {
    display: none;
  }

  .el-aside::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
  }

</style>

<script>
  import home from "./home";
  export default {
    data() {
      const item = {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      };
      return {
        tableData: Array(15).fill(item)
      };
    },
    computed: {
      crumbData() {
        var arr = [];
        this.$route.matched.forEach(value => {
          if (value.props && value.props.default && value.props.default.name) {
            arr.push(value.props.default.name);
          }
        });

        return arr;
      }
    },
    methods: {
      exit: function () {
        var url = 'auth/logout';
        this.http.get(url).then(data => {
          if (data.data.code == 200) {
            this.$router.push('/login')
          }
        });
      }
    }
  };

</script>
