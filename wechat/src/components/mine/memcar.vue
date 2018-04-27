<template>
  <div class="container">

    <div class="member">

      <div @click="human()" style="border-right:1px solid #ccc">权益人</div>



      <div style="background:red;color:white">权益车辆</div>



    </div>

    <p v-if="member.length==0" style="text-align:center;padding:20px 0">哎呀，你的爱车还没有专属权益哦！赶快去挑选吧！</p>

    <div v-else>

      <div class="member-human" v-for='(item, index) of member' :key='index'>

        <div class="member-car">

          <div class="carpart">

            <div style="padding-right: 15px;">

              <img src="../../assets/image/mine/icon-insurance.png" alt="">

            </div>

            <div>

              <p>所有人</p>

              <p>{{item.owner}}</p>

            </div>

          </div>

          <div class="carpart">

            <div style="padding-right: 15px;">

              <img src="../../assets/image/mine/icon-car-1.png" alt="">

            </div>

            <div>

              <p>车牌号码</p>

              <p>{{item.plateNumber}}</p>

            </div>

          </div>

        </div>

        <div v-for='(res, index) of item.list' :key='index'>
          <div v-if="res.value.length === 0">

            <p style="text-align:center;padding:20px 0" v-if="res.value=='' && index === 0">哎呀，你的爱车还没有专属权益哦！赶快去挑选吧！</p>

          </div>

          <div v-else>
            <div v-show="res.value!=''">

              <div class="ride" v-show="res.key==106">

                <img src="../../assets/image/product/icon-car.png" alt="">

                <p>代步车</p>

              </div>

              <div class="ride" v-show="res.key==104">

                <img src="../../assets/image/product/icon-truck.png" alt="">

                <p>道路救援</p>

              </div>



              <div class="member-square">

                <div class="square" v-for='(resp, index) of res.value' :key='index'>

                  <p class="square-title">{{resp.main_name}}</p>

                  <p>{{resp.effect_time}}</p>

                  <p>至</p>

                  <p>{{resp.expire_time}}</p>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>
<style scoped lang='less'>
  .container {

    width: 100vw;

    min-height: 100vh;

    padding-bottom: 50px;

  }



  .member {

    width: 100%;

    height: 50px;

    display: flex;

    position: fixed;

    bottom: 0;

    line-height: 50px;

    background: #fff;

    border-top: 1px solid #ccc;

    div {

      width: 50%;

      text-align: center;

    }

  }



  .member-human {

    background: #fff;

    width: 100%;

    height: 100%; // padding-bottom: 50px;
    margin-bottom: 10px;

    .member-car {

      display: flex;

      border-bottom: 1px dashed #ccc;

      .carpart {

        display: flex;

        width: 45%;

        align-items: center;

        padding: 10px 20px;

      }

    }

    .ride {

      text-align: center;

      padding: 10px 0;

    }

    .rides {

      display: flex;

      text-align: center;

      padding: 10px 0;

      justify-content: center;

    }

    .member-square {

      display: flex;

      flex-flow: row wrap;

      padding: 0 20px;

      justify-content: center;

      border-bottom: 1px solid #ccc;

      padding-bottom: 10px;

      .square {

        width: 29%;

        border: 1px solid #ccc;

        border-radius: 10px;

        text-align: center;

        margin-bottom: 10px;

        .square-title {

          border-bottom: 1px solid #ccc;

          margin: 0 5px;

          padding: 5px;

        }

        &~.square {

          margin-left: 20px;

        }

      }

    }

  }

</style>
<script>
  import Storage from 'good-storage'
  export default {

    data() {

      return {

        member: ""

      };

    },

    mounted() {
      let member = Storage.get('member')
      if (member) {
        this.member = JSON.parse(member)
      } else {
        var url = "wechat/member/getMemberCar";

        this.$http.get(url).then(data => {
          this.member = data.data.payload
          Storage.set('member', JSON.stringify(this.member))
        })
      }
    var _mtac = {};
      (function () {
        var mta = document.createElement("script");
        mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.2";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500608350");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
      })();
    },

    methods: {

      human: function () {

        this.$router.replace("/member");

      }

    }

  };

</script>
