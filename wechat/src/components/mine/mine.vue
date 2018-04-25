<template>
  <!-- header -->
  <div>
    <div class="header">
      <div class="msgs">
        <p class="weight">{{user.realName}}</p>
        <p class="weight" style="font-size:17px;">空降会员</p>
        <div style="display:flex;align-items: center;">
          <img style="width:13px;height:13px;" src="../../assets/image/mine/button-已认证@3x.png" alt="">
          <p style="padding-top: 0.5rem;padding-left: 5px;">{{user.verified==false?'未认证':'已认证'}}</p>
        </div>

        <router-link class="mui-tab-item" to="/personal">
          <p>查看并编辑个人资料</p>
        </router-link>
      </div>
      <div class="portraits">
        <img :src="user.avatarUrl" alt="">
      </div>
    </div>
    <!-- 我的权益部分 -->
     <router-link class="mui-tab-item" to="/member">
    <div class="equity">
      <p style="text-align:left;padding:2rem 0 1rem 1rem" class="weight">我的权益</p>
      <div class="equity-list">
        <div>
          <img v-show="members.firstAid==false" src="../../assets/image/mine/icon-helicopter-不亮.png" alt="">
          <img v-show="members.firstAid==true" src="../../assets/image/mine/icon-helicopter.png" alt="">
          <p style="font-size: 12px;height: 30px;margin-top: 10px;">直升机院前急救</p>
        </div>
        <div>
          <img v-show="members.ambulance==false" src="../../assets/image/mine/icon-call-不亮.png" alt="">
          <img v-show="members.ambulance==true" src="../../assets/image/mine/icon-call.png" alt="">
          <p style="font-size: 12px;height: 30px;margin-top: 10px;">120协调</p>
        </div>
        <div>
          <img v-show="members.medicalTransfer==false" src="../../assets/image/mine/icon-stretcher-不良.png" alt="">
          <img v-show="members.medicalTransfer==true" src="../../assets/image/mine/icon-stretcher.png" alt="">
          <p style="font-size: 12px;height: 30px;margin-top: 10px;">直升机医疗转运9折</p>
        </div>
        <div>
          <img v-show="members.roadRescue==false" src="../../assets/image/mine/icon-truck-不亮.png" alt="">
          <img v-show="members.roadRescue==true" src="../../assets/image/mine/icon-truck.png" alt="">
          <p style="font-size: 12px;height: 30px;margin-top: 10px;">道路救援</p>
        </div>
        <div>
          <img v-show="members.scooter==false" src="../../assets/image/mine/icon-car-不亮.png" alt="">
          <img v-show="members.scooter==true" src="../../assets/image/mine/icon-car.png" alt="">
          <p style="font-size: 12px;height: 30px;margin-top: 10px;">代步车服务</p>
        </div>
      </div>
    </div>
    </router-link>
    <!-- 列表订单 -->

    <div class="catalog">
      <router-link class="mui-tab-item" to='/myindent'>
      <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">我的订单</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
    </router-link>
      <!-- <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">权益兑换</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div> -->

      <router-link class="mui-tab-item" to='/contact'>
        <div class="catalog-list">
          <div style="width:10%;padding-left:1rem">
            <img src="../../assets/image/mine/icon-star@3x.png" alt="">
          </div>
          <span style="width:80%">常用人员</span>
          <div>
            <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
        </div>
      </router-link>


      <router-link class="mui-tab-item" to='/vehicle'>
        <div class="catalog-list">
          <div style="width:10%;padding-left:1rem">
            <img src="../../assets/image/mine/icon-star@3x.png" alt="">
          </div>
          <span style="width:80%">常用车辆</span>
          <div>
            <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
          </div>
        </div>
      </router-link>

      <!-- <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">提交建议</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div> -->
    </div>

    <div class="mui-bars">

      <router-link class="mui-tab-item" to='/home'>
        <div>
          <img src="../../assets/image/home/button-homepage.png" alt="">
        </div>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <div class="mui-tab-item" @click="callphone()">
        <div>
          <img src="../../assets/image/home/button-help.png" alt="">
        </div>
        <span class="mui-tab-label">一键呼救</span>
      </div>

      <router-link class="mui-tab-item" to='/mine'>
        <div>
          <img src="../../assets/image/home/button-me.png" alt="">
        </div>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        user: '',
        members: ''
      }
    },
    created() {
      var url = 'wechat/auth/userCenter';
      this.$http.get(url).then(data => {
        const {
          user,
          members
        } = data.data.payload
        this.user = user
        this.members = members
        this.userId = this.user.id
        window.sessionStorage.setItem('id', this.userId)
        console.log(data)
      }).catch(err => {
        alert('服务器错误，请稍后再试')
      });
    }
  }

</script>



<style scoped>
  .header {
    background: url(../../assets/image/mine/Mask@3x.png) no-repeat center;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 1rem 2rem;
  }

  .mui-bars {
    display: flex;
    justify-content: space-around;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 48px;
    width: 100%;
    background: #fff;
    /* border-top: 1px solid #ccc; */
    box-shadow: 0px 0px 15px -2px #bbb;
  }

  .mui-bars span {
    color: #4b4b4b;
    font-size: 0.6rem;
  }

  .mui-tab-item {
    padding-top: 0.1rem;
  }

  .portraits {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .portraits img {
    width: 60%;
    border-radius: 50%;
  }

  .weight {
    font-size: 18px;
    font-weight: 700;
    color: #4B4B4B;
  }

  .equity {
    background: #fff;
    margin: 10px 0;
    text-align: center;
  }

  .equity-list {
    display: flex;
    flex-flow: row wrap;
  }

  .equity-list div {
    width: 25%;
  }

  .equity-list img {
    width: 30px;
    height: 28px;
  }

  a {
    text-decoration: none;
    color: #4B4B4B;
  }

  .catalog {
    background: #fff;
    margin-bottom: 46px;
  }

  .catalog span {
    color: #4B4B4B;
    font-size: 15px;
  }

  .catalog-list {
    height: 50px;
    width: 100%;
    border-bottom: 2px solid #eee;
    line-height: 50px;
    display: flex;
  }

  .catalog-list img {
    width: 12px;
    height: 12px;
    vertical-align: middle;

  }

</style>
