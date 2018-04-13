<template>
  <!-- header -->
  <div>
    <div class="header">
      <div class="msg">
        <p class="weight">晴天</p>
        <p class="weight" style="font-size:17px;">空降会员</p>
        <p>已认证</p>
        <p>查看并编辑个人资料</p>
      </div>
      <div class="portrait">
        <img src="../../assets/image/mine/头像@3x.png" alt="">
      </div>
    </div>
    <!-- 我的权益部分 -->
    <div class="equity">
      <p style="text-align:left;padding:2rem 0 1rem 1rem" class="weight">我的权益</p>
      <div class="equity-list">
        <div>
          <img src="../../assets/image/mine/icon-helicopter@3x.png" alt="">
          <p>直升机院前急救</p>
        </div>
        <div>
          <img src="../../assets/image/mine/icon-call@3x.png" alt="">
          <p>120协调</p>
        </div>
        <div>
          <img src="../../assets/image/mine/icon-stretcher@3x.png" alt="">
          <p>直升机医疗转运9折</p>
        </div>
        <div>
          <img src="../../assets/image/mine/icon-truck@3x.png" alt="">
          <p>道路救援</p>
        </div>
        <div>
          <img src="../../assets/image/mine/icon-car@3x.png" alt="">
          <p>代步车服务</p>
        </div>
      </div>
    </div>
    <!-- 列表订单 -->
    <div class="catalog">
      <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">我的订单</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>

      <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">权益兑换</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>


      <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">常用人员</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>


      <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">常用车辆</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>


      <div class="catalog-list">
        <div style="width:10%;padding-left:1rem">
          <img src="../../assets/image/mine/icon-star@3x.png" alt="">
        </div>
        <span style="width:80%">提交建议</span>
        <div>
          <img style="width:8px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data(){
      return{
          
      }
  }
}
</script>



<style>
  .header {
    background: url(../../assets/image/mine/Mask@3x.png) no-repeat center;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 1rem 2rem;
  }

  .portrait {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .portrait img {
    width: 50%;
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
    width: 40px;
    height: 40px;
  }

  .catalog {
    background: #fff;
  }
 .catalog span{
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
