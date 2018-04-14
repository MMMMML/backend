<template>
  <div>
    <div class="must">
      <div class="man">
        <p class="human-name">姓名</p>
        <p>马玲</p>
      </div>
      <div class="man">
        <p class="human-name">证件类型</p>
        <p style="width:60%">身份证</p>
        <div>
          <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <p>123</p>
      </div>
      <div class="man">
        <p class="human-name">证件号码</p>
        <p>123</p>
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">手机号码</p>
        <p>15596670191</p>
      </div>
    </div>

    <!-- 选填部分 -->
    <div class="must" style="margin-top:5px">
      <p style="padding-left: 5%;height: 30px;line-height: 30px;font-size: 18px;font-weight: 700;">选填</p>
      <div class="man">
        <p class="human-name">血型</p>
        <p>o</p>
      </div>
      <div class="man">
        <p class="human-name">既往病史</p>
        <p  style="width:60%"></p>
        <div>
          <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">其他信息</p>
        <p style="width:60%"></p>
        <div>
          <img src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="man">
        <p class="human-name">紧急联系人</p>
        <p>哈哈哈</p>
      </div>
      <div class="man" style="border-bottom:none">
        <p class="human-name">联系人电话</p>
        <p>15596670191</p>
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
/* .title{
    width: 100%;
    padding-left: 5%;
    font-size: 18px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
} */
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
