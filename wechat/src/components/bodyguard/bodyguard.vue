<template>
  <div>
      <!-- picture -->
      <div class="banner">
          <img src="../../assets/image/product/banner-空降骑士@3x.png" alt="">
      </div>
      <!-- nav -->
      <div class="nav-word">
          <p>单人短期直升机院前急救权益</p>
          <div class="tips">
              <div class="tips-bor" style="margin-left:0">两天起购</div>
              <div class="tips-bor">日期自定义</div>
              <div class="tips-bor">连续购买满15天享8折优惠</div>
          </div>
          <div class="nav-text">户外徒步，独自旅行，商务出差…随心所欲却不小心遭遇突发意外？？？ 别担心！你的飞行保镖已上线！第一时间为你出动直升机紧急医疗救援，争分夺秒赶来你身边！同时还有地面救护车随时待命，双重应急方案上天入地守护你！即日起，还可为你的小伙伴雇佣飞行保镖哦！</div>
      </div>

      <!-- privilege  -->
      <div class="privilege">
          <p>专属特权</p>
          <div class="privilege-icon">
              <div>
                  <img src="../../assets/image/product/icon-helicopter.png" alt="">
                  <span>直升机院前急救</span>
              </div>
              <div>
                  <img src="../../assets/image/product/icon-call.png" alt="">
                  <span>120协调</span>
              </div>
          </div>
      </div>
  </div>
</template>
<style scoped lang='less'>
    .banner{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .nav-word{
        background: #fff;
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        margin-top: -4px;
        p{
          font-size: 16px;
          color:  #4B4B4B;
          font-weight: 700; 
        }
        .tips{
            display: flex;
            .tips-bor{
                font-size: 12px;
                color: red;
                border: 1px solid red;
                border-radius: 5px;
                margin-left: 5px;
                padding: 2px 5px;
            }

        }
        .nav-text{
            font-size: 14px;
            margin-top: 10px;
            color: #4B4B4B;
        }
    }
    .privilege{
        width: 100%;
        height: 100%;
        background: #fff;
        margin-top: 10px;
        padding: 10px 20px;
        p{
          font-size: 16px;
          color:  #4B4B4B;
          font-weight: 700; 
        }
        .privilege-icon{
            display: flex;
        }
    }

</style>

