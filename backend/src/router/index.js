import Vue from "vue";
import Router from "vue-router";
import layout from "@/components/layout";
import login from "@/components/login";
import home from "@/components/home";
import cardsearch from "@/components/cardsearch";
import cardplan from "@/components/cardplan";
import equities from "@/components/equities";
import createquities from "@/components/createquities";
import commodity from "@/components/commodity";
import redactequities from "@/components/redactequities";
import auditequities from "@/components/auditequities";
import updatequities from "@/components/updatequities";
import category from "@/components/category";
import createcommodity from "@/components/createcommodity";
import redactcommodity from "@/components/redactcommodity";
import inventory from "@/components/inventory";
import warehouse from "@/components/warehouse";
import member from "@/components/member";
import account from "@/components/member-account";
import safeguard from "@/components/safeguard";
import vehicle from "@/components/vehicle";
import safe from "@/components/safeguard-account";
import vehiclecar from "@/components/vehicle-account";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/layout",
      component: layout,
      props: {
        name: "首页"
      }, //加上这个,用来做面包屑导航的文字
      children: [{
          path: "",
          redirect: "home"
        },
        
        {
          path: "home",
          component: home
        },
        {
          path: "me", //测试面包屑导航加上的路由,没啥用
          component: home,
          props: {
            name: "我"
          }
        },
        {
          path: "member", //测试面包屑导航加上的路由,没啥用
          component: member,
          props: {
            name: "用户管理"
          }
        },
        {
          path: "account", //测试面包屑导航加上的路由,没啥用
          component: account,
          props: {
            name: "账号信息"
          }
        },
        {
          path: "vehicle", //测试面包屑导航加上的路由,没啥用
          component: vehicle,
          props: {
            name: "保障车辆会员记录"
          }
        },
        {
          path: "vehiclecar", //测试面包屑导航加上的路由,没啥用
          component: vehiclecar,
          props: {
            name: "保障车辆会员记录"
          }
        },
        {
          path: "safeguard", //测试面包屑导航加上的路由,没啥用
          component: safeguard,
          props: {
            name: "保障人员会员记录"
          }
        },
        {
          path: "safe", //测试面包屑导航加上的路由,没啥用
          component: safe,
          props: {
            name: "保障人员记录"
          }
        },
        {
          path: "cardsearch", //测试面包屑导航加上的路由,没啥用
          component: cardsearch,
          props: {
            name: "卡片查询"
          }
        },
        {
          path: "cardplan", //测试面包屑导航加上的路由,没啥用
          component: cardplan,
          props: {
            name: "发卡计划管理"
          }
        },
        {
          path: "equities", //测试面包屑导航加上的路由,没啥用
          component: equities,
          props: {
            name: "权益管理"
          },
        },
        {
          path: "createquities", //测试面包屑导航加上的路由,没啥用
          component: createquities,
          props: {
            name: "创建新权益"
          },
        },
        {
          path: "commodity", //测试面包屑导航加上的路由,没啥用
          component: commodity,
          props: {
            name: "商品管理"
          },
        },
        {
          path: "/redactequities/:id", //测试面包屑导航加上的路由,没啥用
          component: redactequities,
          name:"redactequities",
          props: {
            name: "编辑权益"
          },
        },
        {
          path: "/auditequities/:id", //测试面包屑导航加上的路由,没啥用
          component: auditequities,
          name:"auditequities",
          props: {
            name: "审核权益"
          },
        },
        {
          path: "/updatequities/:id", //测试面包屑导航加上的路由,没啥用
          component: updatequities,
          name:"updatequities",
          props: {
            name: "更新权益"
          },
        },
        {
          path: "category", //测试面包屑导航加上的路由,没啥用
          component: category,
          props: {
            name: "类目管理"
          },
        },
        {
          path: "createcommodity", //测试面包屑导航加上的路由,没啥用
          component: createcommodity,
          props: {
            name: "商品管理"
          },
        },
        {
          path: "/redactcommodity/:id", //测试面包屑导航加上的路由,没啥用
          component: redactcommodity,
          name:"redactcommodity",
          props: {
            name: "编辑权益商品"
          },
        },
        {
          path: "inventory", //测试面包屑导航加上的路由,没啥用
          component: inventory,
          props: {
            name: "销售库存管理"
          },
        },
        {
          path: "warehouse", //测试面包屑导航加上的路由,没啥用
          component: warehouse,
          props: {
            name: "仓库管理"
          },
        },
      ]
    }
  ]
});
