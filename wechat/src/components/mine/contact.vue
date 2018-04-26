<template>
  <div class='container'>
    <div class="contact">
      <p style="font-size:18px;font-weight:700;">常用权益人</p>
      <router-link class="mui-tab-item" to='/commonpeople'>
        <div>
          <img style="width:20px" src="../../assets/image/mine/button-加号@3x.png" alt="">
        </div>
      </router-link>
    </div>
    <div class='goods_wrapper'>
      <van-cell-swipe :right-width="65" v-for='(item, index) of contactlist' :key='index'>
        <van-cell-group style="background:#fff;margin-top:5px">
          <div class='contace-mes_content'>
            <div class='contace_text'>
              <p>{{item.realName}}</p>
              <p>{{item.idType}}：{{item.idNumber}}</p>
            </div>
            <router-link tag='div' class="mui-tab-item images"  :to="`/commonpeople?id=${item.id}`">
              <img src="../../assets/image/mine/icon-edit@3x.png" alt="">
            </router-link>
          </div>
        </van-cell-group>
        <div class='deltext' slot="right" @click='delOne(item.id)'>删除</div>
      </van-cell-swipe>
    </div>
  </div>
</template>
<style scoped lang='less'>
.container {
  width: 100vw;
  overflow-x: hidden;
  .contact {
    background: #fff;
    display: flex;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;
    padding: 0 5%;
  }
  .goods_wrapper{
    width: 100%;
    .contace-mes_content{
      width: 100%;
      height: 70px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .images{
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 20px;
          height: 20px;
        }
      }
      .contace_text{
        flex: 1;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        font-size: 14px;
        overflow: hidden;
        padding-left: 20px;
        p{
          width: 100%;
          color: #414141;
          height: 16px;
          line-height: 16px;
          font-size: 14px;
        }
      }
    }
    .deltext{
      width: 70px;
      height: 70px;
      background: red;
      color: #fff;
      text-align: center;
      line-height: 70px;
      letter-spacing: 4px;
      position: absolute;
      top: 0px;
      right: -70px;
    }
  }
}

  
</style>

<script>
  import { CellSwipe, CellGroup } from 'vant'
  export default {
    data() {
      return {
        contactlist: []
      }
    },
    created() {
      this._reload()
    }, 
    methods: {
      _reload() {
        var url = `wechat/commonContact/list?userId=${window.sessionStorage.getItem('id')}`
        this.$http.get(url).then(data => {
          this.contactlist = data.data.payload
          this.contactlist.map(item => {
            if (item.idType == 0) item.idType = '身份证'
            if (item.idType == 1) item.idType = '台胞证'
            if (item.idType == 2) item.idType = '回乡证'
            if (item.idType == 3) item.idType = '护照'
          })
        })
      },
      delOne(id) {
        console.log(id)
        var url = `wechat/commonContact/deleteById?id=${id}`
        this.$http.post(url).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this._reload()
          }
        })
      }
    },
    components: {
      [CellSwipe.name]: CellSwipe,
      [CellGroup.name]: CellGroup
    }
  }

</script>
