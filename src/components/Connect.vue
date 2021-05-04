<template>
  <div class="">
	  <el-dialog
	    title="Connect Wallet"
	    :visible.sync="showConnect"
	    :center="false"
	    :before-close="handleClose"
	    width="500px">
	    <div class="walletList">
	      <div class="walletItem mb-10 flex flex-align-items-center flex-justify-content-between border border-radius-8"
	      :class="{'connectedBg': item.connected}"
	      v-for="(item,index) in walletList" :key="index" @click="CheckMetaMask()">
	        <div class="flex flex-align-items-center">
	          <img class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAMAAACl6XjsAAABfVBMVEVHcEx/Rh2ARx2ESiLwiCLMu67cfCagZDOddlJ+Rx7pgiPlfyPshSN/Rxx+Rh2CSB6ASB2JTR7gkkl1SCbQciPUwLLMu6+BSB5/Rx2DSR5+RxzefR3ogCPlfiPGuLHhfiP2jCTvhyN/Rx3nfyPfo2/lfCTIuK7kfyP2jCPkfiPuhSTFtKjogSThfCR/Rx5+Rx3lfiPeeiTDs6koIR2DSh/ifCajWx6qYCDckVOBSR7jfiTyiCOYYTXLcCKpXiHEs6fDs6fCsKYjHBwhHx8iHR0iICB1a2ZyaGIiHyCPTx7ogSTlfyTwhyOASB7ziSTngCTrgyT2jCTthCT1iyPuhCX4jSSESh5/Rx6ITR/+kSTYbyDheSLjfSPBaiPacSDdcyCvYSK0ZCGTVSPGcSblhi/ngSPqgSTdu56mXSDaeSP6jiPmfSD5jSQcGhvimFdqUj/TbSJARUsyQE6tbDLOeyzZx7nayr7hsog7Nza/raDjjUF/VTjFtKhKNCB0amRMd0DeAAAASnRSTlMAe/oOkv4TAwgrpnA9n1n9vkYfHPv+xu2r9mgN6uI4Us5ji/n9Ln7G7pO61/K35ZXYiUji5s21zMnb0/r5aMipm2UkYjSGnPy0/l1QcU4AAALOSURBVHhehdJXXxpNFAbwBYIgoICCIKhgi91ETe/9fZ3ZXui92bvp5bPnzCwzK79c+Fxws3/mOXN2BSe+0Tnh1oBKTI7eqvypSUnaHP4XDIVeRn1cucKSJIUj4wMF6cVgYDr2KsrVXE4imUx6mEmHgoH786ZZ3b3H/usZAWW7R3fsAFFNhCrVwmaKdY4ylZdaqEgjI4yxUm7mpAjvjABjbt/QIIZJ1MF+Pu+eY3MMuwEwl2sfEidiBcdaeUl6yrcEkzks38IWMBnG2gUVTrIljSco4LUNGZxRaeZASW4X63Q5hznHyTGqpAfRwU5+WKGtaxC1SQsSKb+tfOyeTHWRDEyuNGhpf7me5EBjoYowFoEZ+gFx7pH+FYaTA0qBfSG6ErI2KcxZJMxVDhSkS1sV4twuNls0wVi4CYpEJ6yHwXEmpHJ5OxJTGNHhMLjH/BP0uQp2GpTwVhHY+orAExLt9ChxWhFWprYcFihaNKLDegZt7U4FuRpbPtbssONgRNECVjm6wYJFrR+5XK/VavVa9byO4L3qpWqMl/qznGlipV46b5xdturYIK//54sND7sAR3SnlfbZxeVFFYkw3MHV9dIQv8CAQ7qlXl+1kUoO78mMsQvwXiRbh8VjEenEqat9NlvUBmLJol2v6jDe89U0Vb7sDQa7k/UjxZSp04mjpw1ewBBRuV6qVbCCRFmzNNE0rOVZP2EZE9F0u10F10qQsr1hVTQ0WTSs7KwP2NA0wjxlUHWCmJRlo5jNELdlYidQaR92RINRp1P4vfPxnSAszis3XLkMD3Gn8+P0dGHh697e3vdvJyf/f4CrLqm8xFx/+IQ+jH/+QgK/wHbek9ZZwhSkq1MbwUW/f+buRJyIfn79+e/TuGBfomfi6UBmjH3NIL19Ffd6J2YEmhX92UqGbpEHzlzzeuNxL6ht9lmG0g5w5PbrtbWJN2/HyGB/AYd1QUewqrrRAAAAAElFTkSuQmCC" />
	          <div class="walletText color2 font-14 font-family-bold fontWeight-b">{{ item.walletText }}</div>
	        </div>
	        <div v-if="item.connected" class="connected flex">
	          <div class="connectedStatus"></div>
	          <div class="connectedText font-12 font-family-regular fontWeight-4">Connected</div>
	        </div>
	        <img v-else class="enterIcon" src="../../static/images/connect/right.png" />
	      </div>
	    </div>
	    <!--<ChangeNetework :showChangeDialog="showChangeDialog" @handleClose="handleClose2"></ChangeNetework>-->
	  </el-dialog>
	  <Tips :showTips="connectSuccessfullyTips"></Tips>
  </div>
</template>

<script>
  import {CheckMetaMask} from '../../src/assets/js/components'
  import ChangeNetework from './changeNetwork.vue'
  import Tips from '@/components/Tips'
  export default {
    name: 'Connect',
    data () {
      return {
        showChangeDialog: false,
        walletList: [
          {
            walletText: 'MetaMask',
            connected: false
          },
          /*{
            walletText: 'MetaMask',
            connected: false
          },
          {
            walletText: 'MetaMask',
            connected: false
          }*/
        ],
		connectSuccessfullyTips: {
			isShow: false,
			icon: require('../../static/images/sucess.png'),
			status: 'Connect Successfully',
			bg: '#1F2BFF'
		},
      }
    },
    watch: {
      'connectSuccessfullyTips.isShow'(newVal, oldVal) {
      	if (newVal) {
      		this.tipsTimer = setTimeout(() => {
      			this.connectSuccessfullyTips.isShow = false;
      		}, 2500)
      	}
      },
    },
    props: {
      showConnect: Boolean
    },
    components: {
      ChangeNetework,
	  Tips
    },
    methods: {
      /*handleClose2 (){
        this.showChangeDialog = false
      },*/
      async CheckMetaMask() {
        $cookies.set("useWallet",true);
		this.connectSuccessfullyTips.isShow = true
        var haveweb3 = await CheckMetaMask();
        if(!haveweb3){
          this.$emit('showChangeDialog_',true);
          /*this.showChangeDialog = true*/
        }
        this.$emit('showConnect',false)
      },
      handleClose (){
        this.$emit('handleClose')
      }
    },
    async created () {

    }

  }
</script>

<style scoped>
  .walletList{
    padding: 20px;
  }
  .walletItem{
    height: 80px;
    padding: 0 20px;
  }
  .walletItem:hover{
	cursor: pointer;
    background: #F3F4FF;
    border: 1px solid #1F2BFF;
  }
  .walletText{
    margin-left: 36px;
  }
  .enterIcon{
    width: 16px;
    height: 16px;
  }
  .connectedStatus{
    width: 12px;
    height: 12px;
    background: #00987B;
    border-radius: 50%;
  }
  .connectedText{
    color: #00987B;
    margin-left: 8px;
  }
  .connectedBg{
    background-color: #F5F5F5;
    border: 1px solid #F5F5F5;
  }
  /deep/ .el-dialog {
    border-radius: 16px;
    box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
  }
  /deep/ .el-dialog__header {
    text-align: left;
    height: 60px;
    line-height: 60px;
    padding: 0 0 0 40px!important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    font-weight: bold;
    font-family: 'Inter Bold';
  }
  /deep/ .el-dialog__title{
	  font-size: 18px;
	  color: #262525;
  }
  /deep/ .el-dialog__headerbtn {
    font-size: 24px;
  }
  /deep/ .el-dialog__headerbtn .el-dialog__close {
    color: rgba(0, 0, 0, 0.38);
  }
  /deep/ .el-dialog__body {
    padding: 0;
  }
</style>
