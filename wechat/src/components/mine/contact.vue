<template>
  <div class='container'>
    <div class="contact">
      <p style="font-size:18px;font-weight:700;">常用权益人</p>
      <router-link class="mui-tab-item" to='/commonpeople'>
        <div>
          <img src="../../assets/image/mine/button-加号@3x.png" alt="">
        </div>
      </router-link>
    </div>
    <van-cell-swipe id='mes' class='contact-mes' :right-width="65" v-for='(item, key) in contactlist' :key='key'>
      <van-cell-group>
        <div class='contace-mes_content'>
          <div class='contace_text'>
            <p>{{item.realName}}</p>
            <p>{{item.idType}}：{{item.idNumber}}</p>
          </div>
          <router-link tag='div' class="mui-tab-item images"  :to="{ name:'editcommonpeople', params: {id: item.id} }">
            <img src="../../assets/image/mine/icon-edit@3x.png" alt="">
          </router-link>
        </div>
      </van-cell-group>
      <!-- <span slot="right" class='deltext' @click='delOne(item.id)'>删除</span> -->
      <div slot="right" class='deltext' >删除</div>
    </van-cell-swipe>
  </div>
</template>
<style scoped>
.container {
  width: 100vw;
  overflow-x: hidden;
}
  .contact {
    background: #fff;
    display: flex;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;
    padding: 0 5%;
  }

  .van-cell-swipe__right {
    border: 1px solid tan;
  }
  .contact img {
    width: 20px;
  }
  .contact-mes {
    width: 100vw;
    height: 70px;
    display: flex;
    flex-flow: row nowrap;
    background: #fff;
  }
  .contact-mes {
    margin-top: 10px;
  }
  .contace-mes_content {
    box-sizing: border-box;
    padding-left: 20px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
  }
  .contace_text {
    width: calc(100vw - 90px);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
  .content #mes .van-cell-swipe__wrapper {
    display: flex !important;
  }
  .images {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .images img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .deltext{
    width: 64px;
    height: 70px;
    color: #fff;
    background: red;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 4px;
  }

</style>

<script>
  import { CellSwipe, CellGroup } from 'vant'
  export default {
    data() {
      return {
        contactlist: [{
          realName: 'jay',
          idType: 1,
          idNumber: 'number'
        }]
      }
    },
    created() {
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
    // _reload() {
    //     var url = `wechat/commonContact/list?userId=${window.sessionStorage.getItem('id')}`
    //     this.$http.get(url).then(data => {
    //       this.contactlist = data.data.payload
    //       this.contactlist.map(item => {
    //         if (item.idType == 0) item.idType = '身份证'
    //         if (item.idType == 1) item.idType = '台胞证'
    //         if (item.idType == 2) item.idType = '回乡证'
    //         if (item.idType == 3) item.idType = '护照'
    //       })
    //     })
    //   },
    //   delOne(id, clickPosition, instance) {
    //     var url = `wechat/commonContact/deleteById?id=${id}`
    //     this.$http.get(url).then(data => {
    //       console.log(data)
    //       if (data.data.code == 200) {
    //         this._reload()
    //       }
    //     })
    //   }
    methods: {
      delOne(id) {
        console.log(id)
      }
    },
    components: {
      [CellSwipe.name]: CellSwipe,
      [CellGroup.name]: CellGroup
    }
  }

</script>
