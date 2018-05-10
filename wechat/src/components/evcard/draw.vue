<template>
  <div>
    <div class="container">
      <div class="box">
        <div class="input">
        <p>姓名</p>
        <input type="text" v-model="realName" placeholder="请输入证件姓名">
        <div class="warning" v-show="isChinaName">
          <img style="width: 14px;height: 14px;" src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="">
          <span>姓名格式错误，请重新填写</span>
        </div>
      </div>
      <div class="input">
        <p>证件类型</p>
        <div id="tigger" style="width: 100vw;cursor: pointer;font-size: 14px;color: #aaa;margin-left: 1.3rem  !important;">{{idType}}</div>
        <div>
          <img class="up-arrow" style="width: 8px;height: 13px;margin-right:5px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="input">
        <p>证件号码</p>
        <input type="text" v-model="idNumber" placeholder="请输入证件号码">
        <div class="warning" v-show="isIdNumber">
          <img src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="" style="width: 14px; height: 14px;">
          <span>证件号码不能为空，请重新填写</span>
        </div>
      </div>
      <div class="input">
        <p>手机号码</p>
        <input type="text" v-model="mobile" placeholder="请输入手机号码">
        <div class="warning" v-show="isPhoneNo">
          <img src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="" style="width: 14px; height: 14px;">
          <span>手机号码错误，请重新填写</span>
        </div>
      </div>
      <div class="input">
        <p>验证码</p>
        <input type="text" style="width:68%" v-model="vcode" placeholder="请输入验证码">
        <!-- <count class='btn' :start='start' @countDown ='start = false' @click.native = 'gaincode' :class='{"active": start}'></count> -->
        <!-- <button class="btn" @click="gaincode()">获取验证码</button> -->
        <div style="display:flex;align-items: center;">
          <count :start='start' style="background:#ccc;margin-right: 5px;" @countDown ='start = false' @click.native = 'gaincode'></count>
        </div>
        <!-- <input type="button" value="nihao"> -->
        <div class="warning" v-show="isVcode">
          <img src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="" style="width: 14px; height: 14px;">
          <span>验证码不能为空，请重新填写</span>
        </div>
      </div>
      <div class="input">
        <p>生效日期</p>
        <div style="position: relative;width:100%">
          <div class="datepicker" style="margin-left:4.5vw !important" @click="openPicker()">{{pickerStart}}</div>
          <mt-datetime-picker ref="picker" v-model="pickerVisible" :startDate='startDate' :endDate='endDate' type="date" @confirm="handleConfirm"
            year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
          </mt-datetime-picker>
        </div>
        <div class="warning" v-show="isDate">
          <img src="../../assets/image/mine/小图标_警示_小号@3x.png" alt="" style="width: 14px; height: 14px;">
          <span>请选择生效日期</span>
        </div>
        <div>
          <img class="up-arrow" style="width: 8px;height: 13px;margin-right:5px;" src="../../assets/image/mine/Chevron@3x.png" alt="">
        </div>
      </div>
      <div class="input">
        <p>失效日期</p>
        <div style="position: relative;width:100%">
          <div class="datepicker" style="margin-left:0">{{pickerEnd}}</div>
        </div>
      </div>
      <!-- <mt-radio  v-model="item.state" @click="alocked(item)" :options="options"></mt-radio> -->
      <span @click='radioActive = !radioActive' style="position: absolute;top: 27.3rem;left: 1rem;">
        <img style='width: 20px;' v-if='radioActive' src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1783587168,1525005384&fm=175&app=25&f=JPEG?w=218&h=146&s=8D2A727E1D03725542BDC0D7030010E3" alt="">
        <img style='width: 20px;' v-else src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1641948861,2527843094&fm=175&app=25&f=JPEG?w=218&h=146&s=07029045D2437355AC10949F030080E3" alt="">
      </span>
<div>
  <div class="agree-nav" style="font-size:14px;line-height: 25px;position: absolute;
    top: 27rem;left: 4vw;">
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 我已阅读并同意
              <span style="color:#338ac7;" @click="five()">《5日权益使用须知》</span>及
              <span style="color:#338ac7" @click="duty()">《免责声明》</span>
            </div>
</div>
      <!-- <input class="checkbox" type="checkbox"> -->
      <!-- <div class="agree">
        <div class="checkbox-wrap">
          <input ref="checkbox" type="checkbox" class="checkbox" value="guangpan" v-model="item.state" @click="alocked(item)" name="choose"
            id="guangpan">
          <label for="guangpan">
            <div class="agree-nav" style="font-size:14px;line-height: 25px;">
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 我已阅读并同意
              <span style="color:#338ac7;" @click="five()">《5日权益使用须知》</span>及
              <span style="color:#338ac7" @click="duty()">《免责声明》</span>
            </div>
          </label>
        </div>

      </div> -->
      </div>
      
      <div class="button" @click="gain()" id="button">
        <!-- <img src="../../assets/image/evcard/按钮.png" alt=""> -->
      </div>
      <div class="warp" v-if="ishow">
        <div class="warp-nav">
          <p style="text-align:center;font-size:16px;color:black;">【5日权益使用须知】</p>
          <p class="warp-title">一、【权益说明】</p>
          <p>空降联盟为权益人提供以下服务：
            <br> 1、服务类型： 院前救援服务
            <br> 2、服务内容：（1）直升机空中运输（2）空中医疗救护（3）地面救护车协调
            <br> 3、权益说明：权益期内，无限次呼叫直升机救援且每次需支付1元呼叫调度费
            <br>
          </p>
          <p class="warp-title">二、【服务前提】</p>
          <p>空降联盟为权益人提供以下服务：
            <br> 1、权益人病症需符合本手册第四项约定的院前救援适应症
            <br> 2、若地面救援无法及时到达或需要较长等待时间且危及生命安全，经120急救医生或我司授权医生确认后可提供空中直升机紧急医疗救援服务
            <br> 3、气象条件、法律法规、空中管制等客观原因满足救援直升机适航条件
            <br> 4、根据国际惯例及民航总局关于目视飞行的规定，救援直升机运行时间为每天 8：00 至日落前半小时；日落时间以各地气象局官网当天数据判定
            <br> 备注：当地面救援可以及时到达并实施医疗救护时，将优先选择地面救援
            <br>
          </p>
          <p class="warp-title">三、【服务内容及标准】</p>
          <img style="width:100%" src="../../assets/image/new_product/lang_1.png" alt="">
          <p class="warp-title">四、【院前救援适应症】</p>
          <img style="width:100%" src="../../assets/image/new_product/small_2.png" alt="">
          <p class="warp-title">五、【除外责任及限制责任】</p>
          <p>（一）除外责任
            <br> 在下列情况下，空降联盟将无法提供服务且不承担任何责任：
            <br> 1、服务实施过程中，任何因为被救援人及其家属不服从机组人员及医务人员安排所造成的任何后果
            <br> 2、无法控制的事件，包括但不限于罢工、禁运、飞行状况、当地政策、法律法规所造成服务的延误或无法实施，以及其他不被允许提供救援服务的情况
            <br> 3、因不适航因素（包括但不限于天气情况、空中管制、法律法规等）造成救援服务无法实施或延误实施而导致的后果
            <br> 4、因权益人所提供的信息有误，导致我司无法核实身份或及时制定救援计划的情况
            <br> 5、权益人吸食或注射毒品
            <br> 6、权益人因违法行为或被拘捕而产生的后果
            <br> 7、服务过程中，因被救援人病情恶化等客观原因产生的损害
            <br> 8、因医院医疗救治过错或过失导致被救援人伤情变重或死亡、空降联盟仅对飞行及运输安全负责
            <br> 9、其他法律法规规定的免责事由
            <br> （二）限制责任
            <br> 在下列情况下，空降联盟将不提供服务折扣或优惠价格，且在权益人愿意承担全部费用的前提下，空降联盟仍有主动权选择是否为权益人提供救援服务：
            <br> 1、权益人忽视媒体预期发生的罢工、动乱或骚乱而发生的后果
            <br> 2、权益人故意自残、精神错乱、自杀或试图自杀导致的后果
            <br> 3、权益人因酗酒、斗殴，或受酒精、管制药品的影响而产生的后果
            <br> 4、权益人因精神和行为障碍导致的伤害
            <br> 5、权益人酒后驾驶、无合法有效驾驶证驾驶，或驾驶无有效行驶证的机动车而发生的后果
            <br>
          </p>

        </div>
        <div style="text-align:center;margin-top:10px" @click="close()">
          <img style="width:10%" src="../../assets/image/evcard/close.png" alt="">
        </div>
      </div>
      <div class="warp" v-if="ishow2">
        <div class="warp-nav">
          <p style="text-align:center;font-size:16px;color:black;">【免责声明】</p>
          <p class="warp-title">【权益有效期】</p>
          <p>用户须在2018年5月19日至2018年6月30日内选择任意连续5天作为权益保障时间</p>
          <p class="warp-title">【救援服务流程】</p>
          <p>请谨记空降联盟救援服务热线(
            <span style="color:red">021-60554929</span>)</p>
          <p>实际发生救援需求时:</p>
          <p>1、用户拨打专属服务热线提出救援服务请求</p>
          <p>2、客服沟通并确认救援信息（包括被救援对象姓名、突发病症或伤情、事故准确地点）等资料（自费用户还需确认案件的费用标准及支付方式等）；为保证救援服务正确且高效地完成， 用户需积极配合空降联盟客服中心沟通工作</p>
          <p> 3、确认用户信息后，空降联盟救援中心将立即实施救援行动，救援工作按照标准流程执行 用户需积极配合空降联盟客服中心沟通工作 </p>
          <p> 4、服务结束后，客服中心将致电用户确认服务是否结束，并对用户进行回访 用户需积极配合空降联盟客服中心沟通工作 </p>
          <p class="warp-title">【救援服务注意事项】</p>
          <p>1、 用户致电空降联盟服务热线提出服务需求并获得确认后10分钟内，若用户要求取消服务，空降联盟可为用户免费取消该次服务</p>
          <p>2、 用户应谨慎选择拨打救援服务热线，如因故意或重大过失造成服务资源浪费，空降联盟有权对该用户账号进行暂停服务处理，并保留追究法律责任的权利</p>
          <p>3、 空降联盟救援服务人员或指定120车辆到达服务现场后，用户未在现场且未收到用户取消服务的请求，则该次服务将被计入有效服务；空降联盟有权对用户进行回访了解原因，如出现恶意谎报救援行为，空降联盟有权对该用户账号中所有权益进行暂停服务处理，并保留追究法律责任的权利</p>
          <p>4、 由于特殊原因造成直升机无法实施救援时（相关情况请参考院前救援服务条款），空降联盟将协调120进行地面救援</p>
          <p>5、 本服务属于出行救援权益，请用户确保信息填写正确完整、如信息填写有误或需变更，请及时致电空降联盟服务热线进行修改（021-60554929），因用户原因导致信息填写错误或未及时申请变更造成救援延误，空降联盟将不负相关责任</p>
          <p class="warp-title">【服务对象】</p>
          <p>空降联盟为目前已部署救援直升机省市范围内的中国公民（含港澳台地区）或在中国持合法证件的外籍人士提供救援保障服务</p>
          <p class="warp-title">【救援区域】</p>
          <p>空降联盟救援区域已覆盖23个省市：辽宁、北京、天津、河北、河南、山东、山西、江苏、上海、陕西、安徽、浙江、江西、福建、广东、海南、湖北、四川、重庆、贵州、广西、云南、湖南</p>
          <p class="warp-title">【权益费用】</p>
          <p>1、在符合权益服务标准且在权益有效期内的用户，每次只需支付一元调度费即可呼叫直升机救援</p>
          <p>2、用户所需服务范围如超过所领取权益规定的服务范围，相关费用按照标准进行收费（标准费用见权益服务标准费用条款）</p>
          <p>3、用户领取相关权益后，有权利不接受权益服务，并可申请取消或终止权益资格，但已支付的权益服务费用将不会获得返还</p>
          <p class="warp-title">【权益服务标准费用】</p>
          <p>直升机院前救援费用：综合费用人民币20万—30万/每次，根据机型不同，费用也会有所不同</p>

        </div>
        <div style="text-align:center;margin-top:10px" @click="close()">
          <img style="width:10%" src="../../assets/image/evcard/close.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped lang='less'>
  .container {
    background: white;
    min-height: 100vh;
    position: relative;
    
    // .box{
    //  background: red;
    //   height: 87vh;
    // }
    .input {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #e7e7e7;
      display: flex;
      line-height: 60px;
      position: relative;
      p {
        width: 32%;
        padding-left: 5%;
      }
      input {
        border: none;
        height: 59px;
        font-size: 14px;
      }
      .warning {
        position: absolute;
        bottom: 2.6rem;
        left: 24vw;
        height: 0;
        font-size: 12px; // display: none;
      }
      .btn {
        width: 25%;
        height: 30px;
        line-height: 19px;
        margin-top: 15px;
        background: #ccc;
        color: white;
        border-radius: 10px;
        font-size: 12px;
        margin-right: 5px;
      }
      .datepicker {
        font-size: 14px;
        color: #aaa;
        margin-left: 4vw !important;
      }
    }
    .agree {
      padding: 20px;
      .checkbox-wrap {
        position: relative;
        margin: 0 auto;
        top: 30%;
        height: 40%;
        background-color: white;
      }
      input[type="checkbox"] {
        display: none;
      }
      input[type="checkbox"]+label {
        display: inline-block;
        text-align: left;
        box-sizing: border-box;
      }
      label::before {
        content: "";
        display: inline-block;
        width: 25px;
        height: 25px;
        background: #eee;
        vertical-align: middle;
        border-radius: 5px;
        margin-right: 5px;
        box-sizing: border-box;
        transition: background ease-in 0.2s;
        position: absolute;
        top: -1px;
      }
      input[type="checkbox"]:checked+label::before {
        background-color: #5a5a5a;
        border: 3px #eeeeee solid;
      }
    }
    .button {
      margin: 0 auto;
      width: 50vw;
      height: 10vh;
      background: url('http://owvihnwpv.bkt.clouddn.com/%E6%8C%89%E9%92%AE.png') no-repeat;
      // margin-top: 10vh;
      background-size:100%; 
      margin: 0 auto;
      // position: absolute;
      // bottom: 5%;
      // left: 50%;
      // text-align: center;
      // transform: translateX(-50%);
      
    }
    .warp {
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, .5);
      position: absolute;
      top: 0;
      left: 0;
      .warp-nav {
        background: white;
        width: 90vw;
        margin: 0 auto;
        height: 70vh;
        overflow: auto;
        padding: 20px;
        margin-top: 20%;
        border-radius: 10px; // letter-spacing: 1px;
        line-height: 20px;
        .warp-title {
          color: black;
        }
      }
    }
  }

</style>
<script>
  import MobileSelect from 'mobile-select'
  import { Radio } from 'mint-ui';
  import {
    format
  } from 'date-fns'
  import Count from '@/base/countdown'
  export default {
    data() {
      return {
        idType: '请选择证件类型',
        pickerStart: '请选择生效日期',
        pickerEnd: '请选择失效日期',
        pickerVisible: '',
        startDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 1),
        endDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 53),
        ishow: false,
        ishow2: false,
        vcode: '',
        start: false,
        isChinaName: false,
        isPhoneNo: false,
        isIdNumber: false,
        isVcode: false,
        isDate: false,
        realName: '',
        mobile: '',
        idNumber: '',
        item: {
          state: false
        },
        radioActive: false
        // isPhoneNo: false,
        // isIdNumber: false,
        
      }
    },
     created() {
     },
    mounted() {
      var mobileSelect1 = new MobileSelect({
        trigger: '#tigger',
        title: '选择证件类型',
        wheels: [{
          data: [{
              id: '0',
              value: '身份证'
            },
            {
              id: '3',
              value: '护照'
            },
            {
              id: '2',
              value: '回乡证'
            },
            {
              id: '1',
              value: '台胞证'
            }
          ]
        }],
        callback: (indexArr, data) => {
          this.idType = data[0].id; //返回选中的json数据
          console.log(this.idType)
        }
      })
        var h = document.body.scrollHeight;
        window.onresize = function(){
        if (document.body.scrollHeight < h) {
            document.getElementById("button").style.display = "none";
        }else{
            document.getElementById("button").style.display = "block";
        }
    };
    },
    methods: {
      alocked: function (item) {
        item.state = !item.state;
      },
      _isChinaName(name) {
        var pattern = /^([\u4e00-\u9fa5]+|[\sa-zA-z]+)$/;
        return pattern.test(name);
      },
      _isPhoneNo(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
      },
      openPicker() {
        this.$refs.picker.open();
      },
      formatDate(date) {
        const y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        return y + '-' + m + '-' + d
      },
      handleConfirm: function (v) {
        this.$refs.picker.close();
        this.pickerStart = this.pickerVisible = this.formatDate(v)
        // console.log(this.formatDate(v))
        let newDate = Date.parse(this.pickerStart) + 24 * 60 * 60 * 1000 * 4
        this.pickerEnd = format(newDate, 'YYYY-MM-DD');
        console.log()

      },
      five: function () {
        this.ishow = true
      },
      duty: function () {
        this.ishow2 = true
      },
      close: function () {
        this.ishow = false
        this.ishow2 = false
      },
      gain: function () {
        console.log(this.redioActive)
        this.isChinaName = false
        this.isPhoneNo = false
        // this.isIdNumber = false
        this.isChinaName = !this._isChinaName(this.realName)
        if (this.isChinaName) {
          return;
        }
        if (this.idNumber == '') {
          this.isIdNumber = true
          return
        } else {
          this.isIdNumber = false
        }

        this.isPhoneNo = !this._isPhoneNo(this.mobile)
        if (this.isPhoneNo) {
          return;
        }
        if (this.vcode == '') {
          this.isVcode = true
          return
        } else {
          this.isVcode = false
        }
        if (this.pickerStart == '请选择生效日期') {
          this.isDate = true
          return;
        } else {
          this.isDate = false
        }
        if (this.radioActive == false) {
          alert('请确认打勾！')
          return;
        }

        let url = 'wechat/campaign/evcard/getLimitBenefit'
        let params = {
          realName: this.realName,
          idType: this.idType,
          idNumber: this.idNumber,
          mobile: this.mobile,
          vcode: this.vcode,
          effectTime: this.pickerStart
        }
        this.$http.post(url, params).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            window.sessionStorage.setItem('result', '1')
            this.$router.push('/results')
          }
          if (data.data.code == 500) {
            if (data.data.code == 500 && data.data.message == '一个证件号只能领取一次福利哦!') {
              window.sessionStorage.setItem('result', '2')
              this.$router.push('/results')
              return
            }

            if (data.data.code == 500 && data.data.message == '福利被抢完啦！别灰心，即刻关注空降联盟，获取更多守护权益！') {
              window.sessionStorage.setItem('result', '3')
              this.$router.push('/results')
              return
            }

            if (data.data.code == 500 && data.data.message == '活动结束啦！别灰心，即刻关注空降联盟，获取更多守护权益！') {
              window.sessionStorage.setItem('result', '4')
              this.$router.push('/results')
              return
            }
            alert(data.data.message)
          }
        })
      },
      gaincode: function () {
        if (this.start) {
          return
        }
        var url = '/common/sendVCode'
        var params = {
          mobile: this.mobile,
          type: 'campaign'
        }
        this.$http.post(url, params).then(data => {
          if (data.data.code == 200) {
            this.start = true
            alert('验证码已发送，请注意查收')
          }
          if (data.data.code == 500) {
            alert(data.data.message)
          }
          if (data.data.code == 20005) {
            alert('验证码错误，请重新输入')
          }
        })
      },
    },
     components:{
      Count
    },
  }

</script>
