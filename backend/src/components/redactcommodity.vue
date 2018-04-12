<template>
  <div>
    <h3>编辑权益商品</h3>
    <el-row :gutter="20">
      <el-col :span="12" class="topleft">
        <p class="mart">基础信息</p>
        <el-form  :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm mart">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="商品名称：" prop="name">
                <el-input v-model="resp.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="类别：" prop="region">
                <el-select  v-model="resp.categoryId">
                  <el-option v-for="item in ruleForm.catelist" :label='item.name' :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="计费单位：">
                <el-radio-group v-model="resp.billingMode" style="display:inline-block">
                  <el-radio-button label="0">天</el-radio-button>
                  <el-radio-button label="1">月</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="数值：">
                <el-input-number v-model='resp.billingAmount' controls-position="right" :min="1" :max="10"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="价格：">
                <el-input placeholder="请输入金额" v-model='resp.unitPrice'>
                  <template slot="prepend">参考价：</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item>
                <el-input placeholder="请输入金额" v-model='resp.sellingPrice'>
                  <template slot="prepend">销售价：</template>
                </el-input>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="24">
              <el-form-item label="赠品标记：">
                <el-checkbox-group >
                  <el-checkbox label="赠品（不单独销售）" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col> -->
          </el-row>

        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <p>免责条款：</p>
          <el-col :span="24" class="mart">
            <el-input type="textarea" :autosize="{ minRows: 16, maxRows: 16}" placeholder="请输入内容" v-model="resp.exceptions">
            </el-input>


          </el-col>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <p class="mart">权益选择</p>
        <el-transfer v-model="resp.benefitNumbers" style="text-align:center"  filterable class="mart" 
         :props="{key: 'number'}"  :render-content="renderFunc" :right-default-checked="[1]"  :left-default-checked="[2,3]"
          :titles="['生效中的权益', '已选中的权益']" :button-texts="['移除权益', '加入权益']" :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}'
    }"  :data="benefit">
        </el-transfer>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light mart">
          <p>限制指定省份有效（可多选，默认全国）</p>
          <el-row>
            <el-col :span="24">
              <el-form label-width="100px" class="demo-ruleForm">
                <el-form-item label="直辖市：" class="mart">
                  <el-checkbox-group v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="上海">上海</el-checkbox-button>
                    <el-checkbox-button label="北京">北京</el-checkbox-button>
                    <el-checkbox-button label="重庆">重庆</el-checkbox-button>
                    <el-checkbox-button label="天津">天津</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="华北：">
                  <el-checkbox-group v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="河北">河北</el-checkbox-button>
                    <el-checkbox-button label="山西">山西</el-checkbox-button>
                    <el-checkbox-button label="内蒙古">内蒙古</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="华东：" >
                  <el-checkbox-group v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="山东">山东</el-checkbox-button>
                    <el-checkbox-button label="江苏">江苏</el-checkbox-button>
                    <el-checkbox-button label="浙江">浙江</el-checkbox-button>
                    <el-checkbox-button label="安徽">安徽</el-checkbox-button>
                    <el-checkbox-button label="福建">福建</el-checkbox-button>
                    <el-checkbox-button label="江西">江西</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="华南：">
                  <el-checkbox-group v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="广东">广东</el-checkbox-button>
                    <el-checkbox-button label="广西">广西</el-checkbox-button>
                    <el-checkbox-button label="海南">海南</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="华中：">
                  <el-checkbox-group v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="河南">河南</el-checkbox-button>
                    <el-checkbox-button label="湖南">湖南</el-checkbox-button>
                    <el-checkbox-button label="湖北">湖北</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="西北：">
                  <el-checkbox-group v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="宁夏">宁夏</el-checkbox-button>
                    <el-checkbox-button label="青海">青海</el-checkbox-button>
                    <el-checkbox-button label="陕西">陕西</el-checkbox-button>
                    <el-checkbox-button label="甘肃">甘肃</el-checkbox-button>
                    <el-checkbox-button label="新疆">新疆</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="西南：" >
                  <el-checkbox-group v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="四川">四川</el-checkbox-button>
                    <el-checkbox-button label="贵州">贵州</el-checkbox-button>
                    <el-checkbox-button label="云南">云南</el-checkbox-button>
                    <el-checkbox-button label="西藏">西藏</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="东北：">
                  <el-checkbox-group  v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="辽宁">辽宁</el-checkbox-button>
                    <el-checkbox-button label="吉林">吉林</el-checkbox-button>
                    <el-checkbox-button label="黑龙江">黑龙江</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="港澳台：">
                  <el-checkbox-group  v-model="Zones" style="display:inline-block">
                    <el-checkbox-button label="香港">香港</el-checkbox-button>
                    <el-checkbox-button label="澳门">澳门</el-checkbox-button>
                    <el-checkbox-button label="台湾">台湾</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
        <el-col :span="24" class="mart">
          <div style="float:right">
            <el-button class="mar10" type="info"  onClick="javascript:history.back(-1);">返回</el-button>
            <el-button class="mar10" type="primary" @click='gocontinue()'>保存</el-button>
            <el-button class="mar10" type="primary" @click='save()'>保存并继续</el-button>
          </div>

        </el-col>
      </el-col>
    </el-row>
  </div>
</template>



<style>
.el-transfer-panel {
    text-align: left
}
.el-transfer-panel__body {
    height: 490px;
}
.topleft {
  border-bottom: 1px solid #ccc;
  border-radius: 0;
}

.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}

.el-transfer-panel__filter {
  width: 85%;
}

</style>

<script>
export default {
  data() {
    var zones = [];
    for (var i = 0; i < 9; i++) {
      zones.push([]);
    }
    return {
      data: [],
      resp:'',
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        num8: 1,
        catelist: "",
        billingMode: 0,
        billingAmount: "",
        unitPrice: "",
        sellingPrice: ""
      },
      exceptions: "",
      benefit: [],
      Zones: '',
      benefitNumbers: [],
      availableZones: zones,
      renderFunc(h, option) {
          return <span>{ option.label }</span>;
        }
    };
  },
  mounted: function() {
    var url = "api/category/catelist";
    var url2 = "api/benefit/publishedList";
    this.http.post(url).then(data => {
      this.ruleForm.catelist = data.data.payload;
      // console.log(data)
    });
    this.http.post(url2).then(data => {
      this.benefit = data.data.payload;
      console.log(this.benefit);
    });  
    var url3 = 'api/product/detail'
    var params = {
         id: this.$route.params.id
    }
    this.http.post(url3, params).then(data => {
        this.resp = data.data.payload
        this.Zones = data.data.payload.availableZones
      });
  },
  methods: {
    save: function(callback) {
      var arr = [];
      var array = []
      this.Zones.forEach(value => {
        arr = arr.concat(value);
      });
      this.resp.benefitNumbers.forEach(value=>{
        array = array.concat(value)
      })
      var url = "api/product/create";
      var params = {
        name: this.resp.name,
        categoryId: this.resp.categoryId,
        billingMode: this.resp.billingMode,
        billingAmount: this.resp.billingAmount,
        unitPrice: this.resp.unitPrice,
        sellingPrice: this.resp.sellingPrice,
        benefitNumbers:array.join(),
        exceptions: this.resp.exceptions,
        availableZones: arr.join()
      };
      this.http.post(url, params).then(data => {
        //  this.ruleForm.publishedList = data.data.payload
        console.log(data);
        if(data.data.code==500){
            this.$alert(data.data.message, {
              type: "warning",
              showConfirmButton:false,
              center:true
            })
        }
        if(data.data.code==200){
          //清空数据
         this.resp.name=''
         this.resp.region=''
         this.resp.billingMode=''
         this.resp.billingAmount=''
         this.resp.unitPrice=''
         this.resp.sellingPrice=''
         this.resp.exceptions=''
         this.resp.benefitNumbers=''
         this.Zones=''
            this.$alert("保存成功", {
              type: "success",
              showConfirmButton:false,
              center:true
            })
            if(callback){
              callback()
            }
        }
      });
    },
   gocontinue:function(){
      this.save(()=>{
        this.$alert("保存成功,3秒后返回商品管理", {
                type: "success",
                showConfirmButton:false,
                center:true
        })
        setTimeout(()=>{
           window.location.hash='/layout/commodity'
        },3000)
        
      });
    }
   
  }
};
</script>
