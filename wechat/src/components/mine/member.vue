<template>
  <div class="container">
    <div class="user" v-show='currentPath === "human"'>
      <p v-if="member.length==0" style="text-align:center;padding:20px 0">哎呀，你还没有专属权益哦！赶快去购买吧！</p>
      <div v-else>
        <div class="member-human">
          <div class="member-car">
            <div class="carpart">
              <div style="padding-right: 15px;">
                <img src="../../assets/image/mine/icon-insurance.png" alt="">
              </div>
              <div>
                <p>{{member.realName}}</p>
              </div>
            </div>
            <div class="carpart">
              <div style="padding-right: 15px;">
                <img src="../../assets/image/mine/icon-car-1.png" alt="">
              </div>
              <div class='right'>
                <p>{{member.idType | format}}</p>
                <p>{{member.idNumber}}</p>
              </div>
            </div>
          </div>
          <div v-for='(item, index) of memberlist' :key='index'>
            <p style="text-align:center;padding:20px 0" v-show="item.value=='' && index === 0">哎呀，你还没有专属权益哦！赶快去购买吧！</p>
            <div v-show="item.value != ''">
              <div class="rides" v-show="item.key==101">
                <div style="padding-right:10px;">
                  <img src="../../assets/image/product/icon-helicopter.png" alt="">
                  <p>直升机院前急救</p>
                </div>
                <div>
                  <img src="../../assets/image/product/icon-call.png" alt="">
                  <p>120协调</p>
                </div>
              </div>
              <div class="ride" v-show="item.key==103">
                <img src="../../assets/image/product/icon-helicopter.png" alt="">
                <p>医疗转运9折</p>
              </div>
              <div class="member-person">
                <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
                  <swiper-slide class="member-person-slide" v-for='(list, index) of item.value' :key='index'>
                    <p class="member-person-slide-title">{{list.main_name}}</p>
                    <p>{{list.effect_time}}</p>
                    <p>至</p>
                    <p>{{list.expire_time}}</p>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="car" v-show='currentPath === "car"'>
      <p v-if="memberCars.length==0" style="text-align:center;padding:20px 0">哎呀，你的爱车还没有专属权益哦！赶快去挑选吧！</p>
      <div v-else>
        <div class="member-human" v-for='(item, index) of memberCars' :key='index'>
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
    <div class="member">
      <div @click='human' :class='{"active": currentPath === "human"}'>权益人</div>
      <div @click="car" :class='{"active": currentPath === "car"}'>权益车辆</div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.container {
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 50px;
}
.member{
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  bottom:0;
  line-height: 50px;
  background: #fff;
  border-top: 1px solid #ccc;
  div{
    width: 50%;
    text-align: center;
    &.active {
      background: red;
      color: #fff;
    }
  }
}
.member-human{
  background: #fff;
  width: 100%;
  height: 100%;
  .member-car{
    display: flex;
    border-bottom: 1px dashed #ccc;
    .carpart{
      display: flex;
      width: 45%;
      align-items: center;
      padding:10px 20px;
      height: 70px;
      p {
        margin: 0;
      }
      .right {
        p:last-child {
          margin-top: 6px;
        }
      }
    }
  }
  .ride{
    text-align: center;
    padding: 10px 0;
  }
  .rides{
    display: flex;
    text-align: center;
    padding: 10px 0;
    justify-content: center;
  }
  .member-square{
    display: flex;
    flex-flow: row wrap;
    padding: 0 20px;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    .square{
      width: 120px;
      border: 1px solid #ccc;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 10px;
      .square-title{
        border-bottom: 1px solid #ccc;
        margin: 0 5px;
        padding: 5px;
      }
      &~.square {
        margin-left: 20px;
      }
    }
  }
  .member-person {
    padding-bottom: 20px;
  }
  .member-person-slide {
    width: 110px;
    height: 120px;
    padding: 0 5px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 5px;
    .member-person-slide-title {
      line-height: 40px;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
<script>
import Storage from 'good-storage'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data(){
    return{
      member:'',
      memberlist:'',
      memberCars: [],
      currentPath: 'human',
      notNextTick: true,
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10
      }
    }
  },
  mounted() {
    var urlUser = 'wechat/member/getMemberUser'
    var urlCar = "wechat/member/getMemberCar"
    this.$http.get(urlUser).then(data => {
      this.member = data.data.payload
      this.memberlist = data.data.payload.memberList
      let memberCar = {
        member: this.member,
        memberlist: this.memberlist
      }
    })
    this.$http.get(urlCar).then(data => {
      this.memberCars = data.data.payload
    })
  },
  methods:{
    car() {
      this.currentPath = 'car'
    },
    human () {
      this.currentPath = 'human'
    }
  },
  filters: {
    format(val) {
      let enums = ['身份证', '台胞证', '回乡证', '护照']
      return enums[val]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>


