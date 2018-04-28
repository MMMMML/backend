<template>
  <div class="container">
    <!-- picture -->
    <div class="banner">
      <img src="../../assets/image/product/banner-空降骑士@3x.png" alt="">
    </div>
    <!-- nav -->
    <div class="nav-word">
      <p>单人短期直升机院前救援权益</p>
      <div class="tips">
        <div class="tips-bor" style="margin-left:0">两天起购</div>
        <div class="tips-bor">日期自定义</div>
        <div class="tips-bor">连续购买满15天享8折优惠</div>
      </div>
      <div class="nav-text">户外徒步，独自旅行，商务出差…随心所欲却不小心突发意外？别担心！你的飞行保镖已上线！第一时间为你出动直升机，争分夺秒赶来你身边！同时还有地面救护车随时待命，双重应急方案上天入地守护你！即日起，还可为你的同行伙伴雇佣飞行保镖哦！</div>
    </div>

    <!-- privilege  -->
    <div class="privilege">
      <p>专属特权</p>
      <div class="privilege-icon">
        <div class="privilege-spuare">
          <img src="../../assets/image/product/icon-helicopter@2x.png" alt="">
          <p>直升机院前救援</p>
        </div>
        <div class="privilege-spuare" style="margin-left:10px">
          <img src="../../assets/image/product/icon-call@2x.png" alt="">
          <p>120协调</p>
        </div>
      </div>
      <!-- 日期 -->
      <div style="display:flex;margin-top:10px">
        <p style="width:50%">生效日期</p>
        <p>失效日期</p>
      </div>
      <div class="picker">
        <div style="position: relative;width:100%">
          <div class="datepicker" style="margin-left:0" @click="openPicker()">{{pickerStart}}</div>
          <mt-datetime-picker ref="picker" v-model="pickerVisible" :startDate='startDate' :endDate='endDate' type="date" @confirm="handleConfirm"
            year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
          </mt-datetime-picker>
          <img style="width:14px;position: absolute;right: 8vw;top: 50%;transform: translateY(-50%);" class="date-icon" src="../../assets/image/product/icon-calendar@3x.png"
            alt="">
        </div>
        <div style="position: relative;width:100%">
          <div class="datepicker" style="margin-left:0;" @click="twoPicker()">{{pickerEnd}}</div>
          <mt-datetime-picker ref="pickers" v-model="Visible" :startDate='startDates' :endDate='endDate' type="date" @confirm="confirm "
            year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
          </mt-datetime-picker>
          <img style="width:14px;position: absolute;right: 8vw;top: 50%;transform: translateY(-50%);" class="date-icon" src="../../assets/image/product/icon-calendar@3x.png"
            alt="">
        </div>
      </div>
      <!-- 加减号 -->
      <div class="num">
        <p>权益人数</p>
        <div class='wrapper'>
          <div class='box minus' @click='minus' ref='minus'>-</div>
          <span class='count'>{{ count }}</span>
          <div class='box add' @click='add'>+</div>
        </div>
      </div>
      <div>

      </div>
    </div>
    <!--文本  -->
    <div class="notice">
      <div class="notice-part" @click="showItem(0)">
        <p>权益人须知</p>
        <img src="../../assets/image/product/arrow@3x.png">
      </div>
      <div v-show="show[0]" class='showText'>
        <p class="title-icon">权益人限定</p>
        <p class='title_normal'>中国公民（含港澳台地区）或在中国持合法证件的外籍人士</p>
        <p class="title-icon">权益有效期</p>
        <p class='title_normal'>有效期为所选权益日期，单人至多购买60天</p>
        <p class="title-icon">权益覆盖城市</p>
        <p class='title_normal'>辽宁、北京、天津、河北、河南、山东、山西、江苏、上海、陕西、安徽、浙江、江西、福建、广东、海南、湖北、四川、重庆、贵州、广西、云南、湖南共23个省市</p>
        <p class="title-icon">价格说明</p>
        <p class='title_normal'>
          【基础10元】<br>
          包含一位权益人有效期内的直升机院前救援和地面120协调服务费用
        </p>
        <p class='title_normal'>
          【每次呼叫1元】<br>
          实际发生直升机院前救援时，权益人在有效期内每呼叫一次需支付1元呼叫调度费
        </p>
        <p class="title-icon">服务热线</p>
        <p class='title_normal'>021-60554929</p>
      </div>
      <div class="notice-part" @click="showItem(1)"> 
        <p>直升机救援服务</p>
        <img src="../../assets/image/product/arrow@3x.png" alt="">
      </div>
      <div v-show='show[1]' class='showText'>
        <p class="title-icon">一、权益说明</p>
        <p class='title_normal'>
          1、服务类型： 直升机院前救援服务<br />
          2、服务内容：（1）直升机空中运输（2）空中医疗救护<br />
          3、权益说明：权益期内，无限次呼叫直升机救援且每次需支付1元呼叫调度费
        </p>
        <p class="title-icon">二、服务前提</p>
        <p class='title_normal'>
          1、权益人病症符合本手册第四项约定的院前救援适应症<br>
          2、若地面救援无法及时到达或需要较长等待时间且危及生命安全，经120急救医生或我司授权医生确认后可提供空中紧急救援服务<br>
          3、气象条件、法律法规、空中管制等客观原因满足直升机适航条件<br>
          4、根据国际惯例及民航总局关于目视飞行的规定，救援直升机运行时间为每天 8：00 至日落前半小时。日落时间以各地气象局官网当天数据为判定<br>
          备注：当地面120急救可以及时到达并实施医疗救护时，将优先选择地面救援
        </p>
        <p class="title-icon">三、服务内容及标准</p>
        <img src="../../assets/image/new_product/small_1.png" alt="">
        <p class="title-icon">四、院前救援适应症</p>
        <img src="../../assets/image/new_product/small_2.png" alt="">
        <p class="title-icon">五、除外责任及限制责任</p>
        <p class='title_normal'>
          （一）除外责任<br>
            在下列情况下，空降联盟将无法提供服务且不承担任何责任：<br>
            1、 服务实施过程中，任何因为被救援人及其家属不服从机组人员及医务人员安排所造成的任何后果<br>
            2、无法控制的事件，包括但不限于罢工、禁运、飞行状况、当地政策、法律法规所造成服务的延误或无法实施，以及其他不被允许提供救援服务的情况<br>
            3、因不适航因素（包括但不限于天气情况、空中管制、法律法规等）造成救援服务无法实施或延误实施而导致的后果<br>
            4、因权益人所提供的信息有误，导致我司无法核实身份或及时制定救援计划的情况<br>
            5、权益人吸食或注射毒品<br>
            6、权益人因违法行为或被拘捕而产生的后果<br>
            7、服务过程中，因被救援人病情恶化等客观原因产生的损害<br>
            8、因医院医疗救治过错或过失导致被救援人伤情变重、死亡的。空降联盟仅对飞行及运输安全负责<br>
            9、其他法律法规规定的免责事由<br>
          （二）限制责任 <br>
            在下列情况下，空降联盟将不提供服务折扣或优惠价格，且在权益人愿意承担全部费用的前提下，空降联盟仍有主动权选择是否为权益人提供救援服务<br>
            1、权益人忽视媒体预期发生的罢工、动乱或骚乱而发生的后果<br>
            2、权益人故意自残、精神错乱、自杀或试图自杀导致的后果<br>
            3、权益人因酗酒、斗殴，或受酒精、管制药品的影响而产生的后果<br>
            4、权益人因精神和行为障碍导致的伤害<br>
            5、权益人酒后驾驶、无合法有效驾驶证驾驶，或驾驶无有效行驶证的机动车而发生的后果
        </p>
      </div>
      <div class="notice-part" @click="showItem(2)">
        <p>地面120服务</p>
        <img src="../../assets/image/product/arrow@3x.png" alt="">
      </div>
      <div v-show="show[2]" class='showText'>
        <p class="title-icon">【权益说明】</p>
        <p class='title_normal'>空降联盟为权益人提供地面救护车协调服务</p>
        <p class="title-icon">【院前救援适应症】</p>
        <img src="../../assets/image/product/biao2.png" alt="">
        <p class="title-icon">【服务内容】</p>
        <p class='title_normal'>
          1、在权益人符合院前救援服务范围的情况下，如因客观原因不适航而无法出动直升机，或必须联合120急救中心开展空地联运时，空降联盟将提供地面救护车协调服务，并承担相应的救护车费用<br>
          2、在权益人不符合院前救援服务范围的情况下，空降联盟将提供地面救护车协调服务，但由此产生的救援费用由权益人自行承担
        </p>
      </div>
      <!-- <div class="notice-part" @click="showItem(3)">
        <p>道路救援服务</p>
        <img src="../../assets/image/product/arrow@3x.png" alt="">
      </div> -->
      <!-- <div v-show="show[3]" class="showText">
        <p class="title-icon">【权益说明】</p>
        <p class='title_normal'>成为空降联盟道路救援权益人后，您所绑定的车辆可获得以下权益：</p>
        <p class='title_normal'>1、“道路救援服务”包括搭电、换胎、送水、救援拖车（非事故及高速）、困境救援（一般救援及吊装救援）等全国范围内的道路救援服务（港澳台地区除外）；不包括交通管制路段，主干道中、城市高架路桥、地下车库（限高）或禁止实施汽车道路救援服务的路段。</p>
        <p class='title_normal'>2、被服务车辆限9座(含)以下、重量不超过3.5吨、长度不超过6米的非营运性四轮机动车辆。摩托车、客车、公共车辆、出租车、货车、卡车、重型运输车以及用于出租和营运的车辆、改装车、竞技车等不在本服务范围内。</p>
        <p class='title_normal'>3、非事故车辆故障定义：“非单方或双方事故，未涉及保险理赔之一般机动车辆故障”</p>
        <p class="title_normal">4、您的订单支付完成时间在17点之前，道路救援权益将在次日凌晨生效；如果您的订单支付完成时间在17点之后，道路救援权益将在次日中午12点生效</p>
        <p class="title-icon">【服务内容及标准】</p>
        <img src="../../assets/image/new_product/small_3.png" alt="">
        <p class="title-icon">【除外责任】</p>
        <p class='title_normal'>
          在下列情况下，空降联盟将无法提供服务且不承担任何责任：<br>
          1、对于处于醉酒状态中的客户，则不可享有除酒后拖车服务之外的其他服务；若当事人血液中的酒精含量超过《中华人民共和国道路交通安全法》，《中华人民共和国道路交通安全法实施条例》或者事发所在地的类似法规的规定标准，则视为醉酒<br>
          2、车辆驾驶人处于毒品、毒物、非处方的麻醉剂的影响<br>
          3、不具备承保车辆类别应有的相对应的机动车登记证、行驶证或驾驶证；或行驶证及驾驶证因违规而被吊销或吊扣<br>
          4、车辆参与赛车、拉力赛、速度或耐久性测试以及未在正常道路上驾驶<br>
          5、因救援本身可能会影响车辆保险的理赔，空降联盟及服务商对此不承担责任，但对于可能造成的影响会在施救前告知<br>
          6、因故意损坏、破坏或者参与违法犯罪行为引发的故障<br>
          7、车辆的抛锚是由直接或间接因警方或其他有关部门介入引起的<br>
          8、车辆的操作因驾驶人故意违反该车使用说明而引起的损坏<br>
          9、车辆故障后引发的任何相关费用或财产损失<br>
          10、车辆因驾驶人故意未保持在适合于在道路上行驶的状况或未根据车辆制造商的建议保养车辆<br>
          11、车辆用于出租车或租赁等商业用途
        </p>
      </div> -->
      <!-- <div class="notice-part" @click="showItem(4)">
        <p>代步车服务</p>
        <img src="../../assets/image/product/arrow@3x.png" alt="">
      </div> -->
      <!-- <div v-show="show[4]" class="showText">
        <p class="title-icon">【权益内容】</p>
        <p class='title_normal'>本服务生效后，权益人的权益车辆在符合非事故道路救援标准范围内，且经过道路救援后仍无法前行的，可以享受空降联盟提供的出险代步车服务</p>
        <p class="title-icon">【服务内容及标准】</p>
        <p class='title_normal'>
          1、服务内容：<br>
          ● 空降联盟在权益人符合服务条件下，提供代步车车辆使用的电子凭证（兑换码）；空降联盟承担代步车车辆的一日租赁使用费用，其他费用包括但不仅限于路桥通行费、车辆押金、交通违章押金、手续费等，权益人需与车辆提供商自行确认并支付<br>
          ● 如本出险代步车服务范围未覆盖权益车辆需求地点，空降联盟将会依据权益人的出租车发票承担相应出租车费用，费用上限为100元。空降联盟在收到权益人提供的发票后七个工作日内完成付款<br>
          ● 您的订单支付完成时间在17点之前，道路救援权益将在次日凌晨生效；如果您的订单支付完成时间在17点之后，道路救援权益将在次日中午12点生效<br>
          2、服务标准<br>
          ●	权益车辆非因事故导致的故障，经空降联盟道路救援后仍无法前行的（由道路救援公司出具反馈信息），权益人可选择空降联盟提供的出险代步车服务<br>
          ●	服务车型：五人座小轿车
        </p>
        <p class="title-icon">【权益人须知】</p>
        <p class='title_normal'>
          ● 权益人如需使用出险代步车服务，请携带本人驾驶证正副本、二代身份证、可用额度5000元以上国内信用卡(自驾押金预授权及交通违章押金)<br />
          ● 权益人上述所有证件有效期的剩余期限均须在一个月以上<br />
          ● 相关费用须由权益人本人国内信用卡及国内借记卡支付，不接受现金付款<br />
          ● 年度救援权益的用户，在符合服务标准的情况下可免费使用3次出险代步车服务，超过3次之后可享受空降联盟提供的租赁车尊享折扣礼券<br />
          ● 因服务点营业时间限定，故出险代步车服务受理时间范围为9点至18点，非本时间段，用户可以选择乘坐出租车，空降联盟将会依据权益人的出租车发票承担相应出租车费用，费用上限为100元
        </p>
        <p class="title-icon">【除外责任】</p>
        <p class='title_normal'>
          在下列情况下，空降联盟将无法提供服务且不承担任何责任：<br>
          1、对于处于醉酒状态中的客户，则不可享有除酒后拖车服务之外的其他服务；若当事人血液中的酒精含量超过《中华人民共和国道路交通安全法》，《中华人民共和国道路交通安全法实施条例》或者事发所在地的类似法规的规定标准，则视为醉酒<br>
          2、车辆驾驶人处于毒品、毒物、非处方的麻醉剂的影响<br>
          3、不具备承保车辆类别应有的相对应的机动车登记证、行驶证或驾驶证；或行驶证及驾驶证因违规而被吊销或吊扣<br>
          4、车辆参与赛车、拉力赛、速度或耐久性测试以及未在正常道路上驾驶<br>
          5、因救援本身可能会影响车辆保险的理赔，空降联盟及服务商对此不承担责任，但对于可能造成的影响会在施救前告知<br>
          6、因故意损坏、破坏或者参与违法犯罪行为引发的故障<br>
          7、车辆的抛锚是由直接或间接因警方或其他有关部门介入引起的<br>
          8、车辆的操作因驾驶人故意违反该车使用说明而引起的损坏<br>
          9、车辆故障后引发的任何相关费用或财产损失<br>
          10、车辆因驾驶人故意未保持在适合于在道路上行驶的状况或未根据车辆制造商的建议保养车辆<br>
          11、车辆用于出租车或租赁等商业用途
        </p>
      </div> -->
      <div class="notice-part" @click="showItem(5)">
        <p>免责声明</p>
        <img src="../../assets/image/product/arrow@3x.png" alt="">
      </div>
      <div v-show="show[5]" class="showText">
        <p class="title-icon">一、产品有效期</p>
        <p class='title_normal'>1、短期权益用户：用户可自行选择权益生效日期，确定权益生效日期后，根据用户的购买服务周期确认权益资格的有效期时间范围</p>
        <p class='title_normal'>2、年度权益用户：用户购买服务产品后次日零时正式生效，有效期为生效之日起一年</p>
        <p class="title-icon">二、救援服务流程</p>
        <p class='title_normal'>
          用户在需要救援时可拨打空降联盟救援服务热线( 021-60554929)寻求帮助<br>
          1、用户拨打专属服务热线提出救援服务请求<br>
          2、客服沟通并确认救援信息（包括被救援对象姓名、突发病症或伤情、事故准确地点）等资料（自费用户还需确认案件的费用标准及支付方式等）；为保证救援服务正确且高效地完成， 用户需积极配合空降联盟客服中心沟通工作<br>
          3、确认用户信息后，空降联盟救援中心将立即实施救援行动，救援工作按照标准流程执行<br>
          4、服务结束后，客服中心将致电客户，确认服务是否结束，并对客户进行回访
        </p>
        <p class="title-icon">三、救援服务注意事项</p>
        <p class='title_normal'>
          1、	用户致电空降联盟服务热线提出服务需求并获得确认后10分钟内，若客户要求取消服务，空降联盟可为用户免费取消该次服务<br>
          2、	用户应谨慎选择拨打救援服务热线，如因故意或重大过失造成服务资源浪费，空降联盟有权对该用户账号进行暂停服务处理，并保留追究法律责任的权利<br>
          3、	空降联盟救援服务人员或指定120车辆到达服务现场后，用户未在现场且未收到用户取消服务的请求，则该次服务将被计入有效服务；空降联盟有权对用户进行回访了解原因，如出现恶意谎报救援行为，空降联盟有权对该用户账号中所有权益进行暂停服务处理，并保留追究法律责任的权利<br>
          4、	客户车辆故障发生地区属于交管部门管辖范围（如高架等），且必须由交管单位指定的服务厂商进行拖吊作业，施救人员及救援车辆将于就近位置提供接车服务；交管单位指定的服务厂商拖吊服务需由客户另行与该服务厂商确认费用<br>
          5、	由于特殊原因造成直升机无法实施救援时（相关情况请参考直升机救援服务条款），空降联盟将协调120进行地面救援<br>
          6、	本服务属于出行救援权益，请用户确保信息填写正确完整、如信息填写有误或需变更，请及时致电空降联盟服务热线进行修改（021-60554929），因用户原因导致信息填写错误或未及时申请变更造成救援延误，空降联盟将不负相关责任
        </p>
        <p class="title-icon">四、服务对象</p>
        <p class='title_normal'> 空降联盟为目前已部署救援直升机的省市范围内的用户和车辆提供救援保障服务，包括该范围内购买空降联盟服务产品的中国公民（含港澳台地区居民）或在中国持合法证件的外籍人士（空降联盟救援已覆盖区域：辽宁、北京、天津、河北、河南、山东、山西、江苏、上海、陕西、安徽、浙江、江西、福建、广东、海南、湖北、四川、重庆、贵州、广西、云南、湖南23个省市）    </p>
        <p class="title-icon">五、产品费用</p>
        <p class='title_normal'>
          1、在符合产品服务标准且在权益有效期内的用户，每次只需支付一元调度费即可呼救直升机救援，当申请道路救援或其他服务时，用户无需支付额外费用<br>
          2、用户车辆故障发生地区属于交管部门管辖范围（如高架等），且必须由交管单位指定的服务厂商进行拖吊作业，相关费用由用户与该服务厂商进行结算<br>
          3、用户所需服务范围如超过所购买产品规定的服务范围，相关费用按照标准进行收费（标准费用见各项服务相关条款）<br>
          4、用户购买相关权益后，有权利不接受产品服务，并可申请取消或终止权益资格，但已支付的权益产品费用将不会获得返还
        </p>
        <p class="title-icon">六、产品服务商及标准费用</p>
        <p class='title_normal'>
          1、空降联盟作为综合性救援平台，提供各种不同类型的救援服务产品，不同的救援服务产品由不同服务商提供，如需了解服务商详细信息请致电联系<br>
          2、产品服务标准费用<br>
          &nbsp;&nbsp;（1）直升机院前救援费用：综合费用人民币20万—30万/每次，根据机型不同费用有所不同<br>
          &nbsp;&nbsp;（2）直升机转运费用：人民币7万/每小时，飞行小时数是指直升机实际飞行时间，自旋翼转动起至旋翼停止转动止。起步计费1小时，超出部分以0.5小时为单位计费，具体计费细则以转运前签署的《直升机医疗转运服务合同》为准<br>
          &nbsp;&nbsp;（3）道路救援服务费用：搭电、换胎、送水等轻救援单项价格人民币200元起， 一般困境救援人民币500元起，如需吊车人民币1800元起；拖车起步价人民币200-500元（包含15Km），地库拖车人民币400-700元，如需架小轮服务，每小轮人民币80元；道路救援费用根据事发地点及救援难度会进行调整 （4）出险代步车服务费用：以车辆提供服务商的门店/官网公示价为准，因地域限制，如需更多资讯，请致电空降联盟服务热线（021-60554929）
        </p>
        <p class="title-icon">七、免责条款</p>
        <p class='title_normal'>
          1、由于战争、暴乱、叛乱、政治示威、抢劫、罢工、军事或反恐行动，地震、气候反常等情况造成救援无法进行<br>
          2、任何生物、化学、原子武器，原子装置造成的爆炸、辐射、灼伤或污染造成救援无法进行
        </p>
        <p class="title-icon">八、追责条款</p>
        <p class='title_normal'>
          救援是稀缺社会资源，若权益人有谎报或故意夸大病症，恶意扰乱救援秩序的行为，空降联盟将追究由此造成的一切经济损失，并保留进一步追究其他法律责任的权利
        </p>
      </div>
      <div class="notice-logo">
        <img src='../../assets/image/product/icon_logo_color.png' alt="">
      </div>
    </div>

    <!-- 支付 -->
    <div class="payment">
      <p>合计：￥{{price||10}}</p>
      <p class="payment-buy" @click="buy()">立即购买</p>
    </div>
  </div>
</template>
<style scoped lang='less'>
  .container {
    padding-bottom: 55px;
  }

  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .nav-word {
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    margin-top: -4px;
    p {
      font-size: 16px;
      color: #4B4B4B;
      font-weight: 700;
    }
    .tips {
      display: flex;
      .tips-bor {
        font-size: 12px;
        color: red;
        border: 1px solid red;
        border-radius: 5px;
        margin-left: 5px;
        padding: 2px 5px;
      }

    }
    .nav-text {
      font-size: 14px;
      margin-top: 10px;
      line-height: 20px;
      color: #4B4B4B;
    }
  }

  .privilege {
    width: 100%;
    height: 100%;
    background: #fff;
    margin-top: 10px;
    padding: 10px 20px;
    p {
      font-size: 16px;
      color: #4B4B4B;
      font-weight: 700;
    }
    .privilege-icon {
      display: flex;
      .privilege-spuare {
        text-align: center;
        width: 25%;
        img {
          width: 40px;
        }
        p {
          font-size: 12px;
          font-weight: 100;
          white-space: nowrap;
          margin-top: 5px;
        }
      }
    }
    .picker {
      display: flex;
      .datepicker {
        width: 90%;
        border: 1px solid #ccc;
        height: 35px;
        margin-left: 5%;
        border-radius: 10px;
        font-size: 3vw;
        line-height: 35px;
        padding-left: 5px;
      }
    }
    .num {
      padding: 20px 15px 0 0;
      .wrapper {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 5px;
        .box {
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          background: #eee;
        }
        .count {
          height: 40px;
          width: 48px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          border: 0;
          background: #eee;
          margin: 0 5px;
        }
        .cue {
          color: black;
          line-height: 30px;
          margin-left: 20px;
          letter-spacing: 1px;
        }
      }
    }

  }

  .notice {
    background: #fff;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    .notice-part {
      height: 50px;
      line-height: 35px;
      border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      position: relative;
      img {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 12px;
        height: 8px;
      }
    }
    .notice-logo {
      text-align: center;
      padding: 40px;
      margin-top: 10px;
    }
    .title-icon {
      font-size: 14px;
      color: #4B4B4B;
      font-weight: 700;
      margin-bottom: 0;
      margin-top: 10px;
    }
  }

  .payment {
    height: 45px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 45px;
    padding-left: 20px;
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #eee;
    .payment-buy {
      height: 100%;
      width: 100px;
      color: white;
      line-height: 45px;
      background: red;
      text-align: center;
    }
  }
  .showText {
    padding:0 20px;
    border-bottom:1px dashed #ccc;
    img {
      margin-top: 8px;
      width: 100%;
    }
    .title_normal {
      line-height: 24px;
    }
  }

</style>
<script>
  import { differenceInDays } from 'date-fns'
  import moment from 'moment'
  import Check from '@/util/checkIDAuth'
  import Storage from 'good-storage'
   import {
    MessageBox
  } from 'mint-ui';
  export default {
    data() {
      return {
        pickerVisible: '',
        Visible: '',
        count: 1,
        endDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 90),
        startDate: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 1),
        startDates: new Date(Date.parse(new Date) + 1000 * 60 * 60 * 24 * 2),
        pickerStart: '请选择生效日期',
        pickerEnd: '请选择失效日期',
        price: '',
        resultdate: '',
        show: [false, false, false, false, false]
      }
    },
    created() {
      var id = 'B'
      var url = `wechat/package/queryPackageById?id=${id}`
      this.$http.get(url).then(data => {
        this.specifics = JSON.parse(data.data.payload.specifics)
        this.one = this.specifics.main.price
        this.discount = this.specifics.main.discount
      })
    },
    mounted() {
      var url = 'wechat/getJSApiTicket'
      var jsurl = location.href.split('#')[0]
      var params = {
        url: jsurl
      }
      let share = {
        title: '即刻雇佣飞行保镖，分秒守护你的旅途小时光！',
        desc: '都说我太过严肃，我只在意你是否需要保护',
        url: 'productB.jpg'
      }
      this.$http.post(url, params).then(data => {
        var wxconfig = data.data.payload
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxconfig.appId, // 必填，公众号的唯一标识
          timestamp: wxconfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: wxconfig.nonceStr, // 必填，生成签名的随机串
          signature: wxconfig.signature, // 必填，签名，见附录1
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })

        wx.ready(() => {
          wx.onMenuShareTimeline({
            title: share.title, // 分享标题
            link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://' + `${window.location.host}${window.location.pathname}` + `static/${share.url}`, // 分享图标
            success: function () {
            }
          })
          //  分享给好友
          wx.onMenuShareAppMessage({
            title: share.title,
            desc: share.desc,
            link: location.href,
            imgUrl: 'http://' + `${window.location.host}${window.location.pathname}` + `static/${share.url}`,
            success: function(){
            }
          })
        })
      })
    },
    methods: {
      showItem(idx) {
        this.show.splice(idx, 1, !this.show[idx])
      },
      openPicker() {
        this.$refs.picker.open();
      },
      twoPicker() {
        this.$refs.pickers.open();
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
        console.log(this.pickerVisible)
      },
      confirm: function (c) {
        this.$refs.pickers.close();
        this.pickerEnd = this.Visible = this.formatDate(c)
        // 用户选择了几天
        // console.log(this.)
        this.resultdate = differenceInDays(this.Visible, this.pickerVisible) + 1
        this.price = this.resultdate * this.one
        console.log(this.resultdate)
      },
      minus() {
        if (this.count === 1) {
          return
        }
        this.count--
      },
      add() {
        if (this.count < 10) {
          this.count++
        }
      },
      _changeNum() {
        if (this.count < 1) {
          this.count = 1
        }
      },
      buy: function () {
        var url = location.hash.slice(1)
        let userInfo = Storage.session.get('userInfo')
        if (!userInfo || JSON.parse(userInfo).verified === false || JSON.parse(userInfo).verified === 'false') {
          this.$dialog.confirm({
            title: '提示',
            message: '欢迎进入空降联盟，请先进行会员注册'
          }).then(res => {
            this.$router.push('/attestation')
          })
        } else {
          this.priceinfo = {}
          this.priceinfo.pickerVisible = this.pickerVisible
          this.priceinfo.pickerEnd = this.pickerEnd
          this.priceinfo.count = this.count
          this.priceinfo.price = this.price
          if (this.pickerEnd == '请选择失效日期' || this.pickerStart == '请选择生效日期') {
            alert('请选择生效失效日期')
            return
          } else {
            window.sessionStorage.setItem('priceinfo', JSON.stringify(this.priceinfo))
            this.$router.push('/guarantee')
          }
        }
      }
    },
    watch: {
      count(newVal) {
        if (this.resultdate >= 15) {
          this.price = this.one * newVal * this.resultdate * this.discount
        } else {
          this.price = this.one * newVal * this.resultdate
        }
      },
      resultdate(newVal) {
        if (newVal >= 15) {
          this.price = this.one * newVal * this.discount * this.count
        } else {
          this.price = this.one * newVal * this.count
        }
      },
      pickerStart(newVal) {
        this.pickerEnd = '请选择失效日期'
        let arr = newVal.split('-')
        let year = Number(arr[0])
        let month = Number(arr[1])
        let day = Number(arr[2])
        let is31 = [1, 3, 5, 7, 8, 10, 12]
        let is28 = [2]
        let is30 = [4, 6, 9, 11]
        if (is31.includes(month)) {
          if (day <= 30) {
            day += 1
          } else {
            month +=1
            day = 1
          }
        } else if(is30.includes(month)) {
          if (day <= 29) {
            day += 1
          } else if (day == 30) {
            month += 1
            day = 1
          }
        } else {
          if (day <= 27) {
            day += 1
          } else {
            month += 1
            day = 1
          }
        }
        let date = `${year}-${month}-${day}`
        let x = Date.parse(date)
        this.startDates = new Date(x)
      }
    }
  }

</script>
