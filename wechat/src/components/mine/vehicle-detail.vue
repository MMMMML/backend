<template>
  <div>
      <div class="must">
      <div class="man">
        <p class="human-name">车牌号码</p>
        <p>沪A D0000</p>
      </div>
      <div class="man">
        <p class="human-name">车辆类型</p>
        <p>小型轿车</p>
      </div>
      <div class="man">
        <p class="human-name">所有人</p>
        <p>晴天</p>
      </div>
      <div class="man">
        <p class="human-name">使用性质</p>
        <p>非运营车辆</p>
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">车辆识别代号</p>
        <p>XXXXXXXXXXXXXXXXXXXX</p>
      </div>
    </div>
    <div class="button">确认</div>
  </div>
</template>
<style>
.button{
    color: #fff;
    background:red;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    position: absolute;
    bottom: 0;
    width:100%;
}
.title{
    width: 100%;
    padding-left: 5%;
    font-size: 18px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
}
  .must {
    background: #fff;
    width: 100%;
  }

  .human-name {
    width: 30%;
    padding-left: 5%;
  }

  .man {
    display: flex;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #eee;
  }

  .man img {
    width: 8px;
    height: 13px;
  }

</style>
