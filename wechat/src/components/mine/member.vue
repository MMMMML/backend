<template>
  <div class="container">
 
      <div class="member">
          <div style="border-right:1px solid #ccc;background:red;color:white">权益人</div>
        
          <div @click="car()">权益车辆</div>
        
      </div>
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
                      <div >
                            <p>{{member.idType | format}}</p>
                            <p>{{member.idNumber}}</p>
                      </div>
                  </div>
              </div>
              
              <div  v-for='(item, index) of memberlist' :key='index'>
                  <p style="text-align:center;padding:20px 0" v-show="item.value=='' && index === 0">哎呀，你还没有专属权益哦！赶快去购买吧！</p>
                  <div v-show="item.value!=''"> 
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

              <div class="member-square" >
                  
                  <div class="square" v-for='(list, index) of item.value' :key='index'>
                      <p class="square-title">{{list.main_name}}</p>
                      <p>{{list.effect_time}}</p>
                      <p>至</p>
                      <p>{{list.expire_time}}</p>
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
            width: 29%;
            border: 1px solid #ccc;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 10px;
            .square-title{
                border-bottom: 1px solid #ccc;
                margin: 0 5px;
                padding: 5px ;
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
  data(){
      return{
          member:'',
          memberlist:''
      }
  },
  mounted(){
    let member = Storage.session.get('memberCar')
    if (member) {
      let info = JSON.parse(member)
      this.member = info.member
      this.memberlist = info.memberlist
    } else {
      var url = 'wechat/member/getMemberUser'
      this.$http.get(url).then(data => {
        this.member = data.data.payload
        this.memberlist = data.data.payload.memberList
        let memberCar = {
          member: this.member,
          memberlist: this.memberlist
        }
        Storage.session.set('memberCar', JSON.stringify(memberCar))
      })
    }
  },
  methods:{
      car:function(){
          this.$router.replace('/memcar')
      }
  },
    filters: {
      format(val) {
        let enums = ['身份证', '台胞证', '回乡证', '护照', ]
        return enums[val]
      }
    }
}
</script>


