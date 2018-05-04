<template>
  <!-- header -->
  <div>
    <div class="header">
      <div class="msgs">
        <p class="weight">{{user.realName}}</p>
        <p class="weight" style="font-size:17px;">空降会员</p>
        <div style="display:flex;align-items: center;">
          <img style="width:14px;height:14px;margin-bottom: 3px;" src="../../assets/image/mine/button-已认证@3x.png" alt="">
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
        <p class="weight">我的权益</p>
        <div class="equity-list">
          <div v-for='(item, index) of members' :key='index'>
            <img :src="item.icon" alt="">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </router-link>

    <!-- 列表订单 -->
    <div class="catalog">
      <router-link tag='div' class='catalog-list' to='/myindent'>
        <img src="../../assets/image/mine/icon-star@2x.png" alt="">
        <span>我的订单</span>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </router-link>
      <div class="catalog-list" @click='exchange'>
        <img src="../../assets/image/mine/icon-repeat@2x.png" alt="">
        <span>权益兑换</span>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </div>
      <router-link tag='div' class='catalog-list' to='/contact'>
        <img src="../../assets/image/mine/icon-user@2x.png" alt="">
        <span>常用人员</span>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </router-link>
      <router-link tag='div' class='catalog-list' to='/vehicle'>
        <img src="../../assets/image/mine/icon-carinfor@2x.png" alt="">
        <span>常用车辆</span>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </router-link>
      <router-link tag='div' class="catalog-list" to='tijiao'>
        <img src="../../assets/image/mine/icon-suggestion@2x.png" alt="">
        <span>提交建议</span>
        <img src="../../assets/image/mine/Chevron@3x.png" alt="">
      </router-link>
    </div>
    <tab></tab>
    <modal ref='modal' :error='error' @sure='handleExchange' @cancel='handleExchangeCancel'></modal>
  </div>
</template>


<script>
import Tab from '@/base/tab'
import Modal from '@/base/modal'
import helicopter from '@/assets/image/mine/icon-helicopter@2x.png'
import helicopter_no from '@/assets/image/mine/icon-helicopter-不亮@2x.png'
import call from '@/assets/image/mine/icon-call@2x.png'
import call_no from '@/assets/image/mine/icon-call-不亮@2x.png'
import stretcher from '@/assets/image/mine/icon-stretcher@2x.png'
import stretcher_no from '@/assets/image/mine/icon-stretcher-不亮@2x.png'
import truck from '@/assets/image/mine/icon-truck@2x.png'
import truck_no from '@/assets/image/mine/icon-truck-不亮@2x.png'
import car from '@/assets/image/mine/icon-car@2x.png'
import car_no from '@/assets/image/mine/icon-car-不亮@2x.png'
export default {
  data() {
    return {
      user: '',
      error: '',      
      members: []
    }
  },
  created() {
    var url = 'wechat/auth/userCenter';
    this.$http.get(url).then(data => {
      let {
        user,
        members
      } = data.data.payload
      this.user = user
      let arr = Object.entries(members).sort((a, b) => {
        return b[1] - a[1]
      })
      let dict = {
        'medicalTransfer': {
          'title': '医疗转运9折',
          'icon': [stretcher, stretcher_no]
        },
        'firstAid': {
          'title': '院前急救',
          'icon': [call, call_no]
        },
        'roadRescue': {
          'title': '道路救援',
          'icon': [truck, truck_no]
        },
        'ambulance': {
          'title': '120协调',
          'icon': [helicopter, helicopter_no]
        },
        'scooter': {
          'title': '代步车',
          'icon': [car, car_no]
        }
      }
      this.members = arr.map(item => ({
          title: dict[item[0]].title,
          icon: item[1] ? dict[item[0]].icon[0] : dict[item[0]].icon[1]
        })
      )
      this.userId = this.user.id
      window.sessionStorage.setItem('id', this.userId)
    })
  },
  methods: {
    exchange() {
      this.$refs.modal.show()
    },
    handleExchange(codePwd) {
      this.$http.post('wechat/redeemCode/preRedeem', {
        codePwd
      }).then(res => {
        if (res.data.code === 200) {
          this.error = ''
          this.$refs.modal.close()
          let obj = JSON.parse(res.data.payload.benefitPackage.redeemStrategy)
          let query = ''
          let arr = ['personNum', 'vehicleNum', 'initialTimeLimit']
          for (let k in obj) {
            if (arr.includes(k)) {
              query += `${k}=${obj[k]}&`
            }
          }
          this.$router.push(`/add?${query}codepwd=${codePwd}`)
        } else {
          this.error = res.data.message
        }
      })
    },
    handleExchangeCancel() {
      this.error = ''
    }
  },
  components: {
    Tab,
    Modal
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
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    color: #4B4B4B;
    padding-left: 20px;
    text-align: left;
    margin: 0;
  }

  .msgs .weight {
    padding-left: 0;
    line-height: 30px;
  }

  .equity {
    background: #fff;
    margin: 10px 0;
    text-align: center;
    padding-top: 10px;
    height: 208px;
    box-sizing: border-box;
  }

  .equity-list {
    display: flex;
    flex-flow: row wrap;
  }

  .equity-list div {
    width: 25%;
  }

  .equity-list img {
    width: 40px;
    height: 40px;
  }

  .equity-list p {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 18px;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
    color: #4B4B4B;
  }

  .catalog {
    background: #fff;
    margin-bottom: 56px;
    padding-left: 20px;
  }

  .catalog span {
    color: #4B4B4B;
    font-size: 15px;
  }

  .catalog-list {
    height: 50px;
    width: 100%;
    line-height: 50px;
    padding-right: 20px;    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .catalog-list~.catalog-list {
    border-top: 1px solid #eee;    
  }

  .catalog-list img {
    width: 12px;
    height: 12px;
  }
  .catalog-list span {
    flex: 1;
    margin-left: 9px;
  }
</style>
