<template>
  <div class="">
	  <el-dialog
	    title="Your Wallet"
	    :visible.sync="showWalletInfo"
	    :center="false"
	    :before-close="handleClose"
	    width="500px">
	    <div v-if="showWalletInfo" class="accountInfo bg1 border-radius-16">
	    	<!-- <div class="title border-b flex flex-justify-content-between flex-align-items-center">
	    		<div class="ml-20 font-18 color2 font-family-bold fontWeight-b">Your Wallet</div>
	    		<img class="closeIcon mr-20" src="../../static/images/header/close.png"
	    		@click="showWalletInfo=false"/>
	    	</div> -->
	    	<div class="walletInfo flex bg5 border-radius-8 ml-20 mt-20 mr-20 mb-20">
	    		<img class="walletIcon ml-20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAMAAACl6XjsAAABfVBMVEVHcEx/Rh2ARx2ESiLwiCLMu67cfCagZDOddlJ+Rx7pgiPlfyPshSN/Rxx+Rh2CSB6ASB2JTR7gkkl1SCbQciPUwLLMu6+BSB5/Rx2DSR5+RxzefR3ogCPlfiPGuLHhfiP2jCTvhyN/Rx3nfyPfo2/lfCTIuK7kfyP2jCPkfiPuhSTFtKjogSThfCR/Rx5+Rx3lfiPeeiTDs6koIR2DSh/ifCajWx6qYCDckVOBSR7jfiTyiCOYYTXLcCKpXiHEs6fDs6fCsKYjHBwhHx8iHR0iICB1a2ZyaGIiHyCPTx7ogSTlfyTwhyOASB7ziSTngCTrgyT2jCTthCT1iyPuhCX4jSSESh5/Rx6ITR/+kSTYbyDheSLjfSPBaiPacSDdcyCvYSK0ZCGTVSPGcSblhi/ngSPqgSTdu56mXSDaeSP6jiPmfSD5jSQcGhvimFdqUj/TbSJARUsyQE6tbDLOeyzZx7nayr7hsog7Nza/raDjjUF/VTjFtKhKNCB0amRMd0DeAAAASnRSTlMAe/oOkv4TAwgrpnA9n1n9vkYfHPv+xu2r9mgN6uI4Us5ji/n9Ln7G7pO61/K35ZXYiUji5s21zMnb0/r5aMipm2UkYjSGnPy0/l1QcU4AAALOSURBVHhehdJXXxpNFAbwBYIgoICCIKhgi91ETe/9fZ3ZXui92bvp5bPnzCwzK79c+Fxws3/mOXN2BSe+0Tnh1oBKTI7eqvypSUnaHP4XDIVeRn1cucKSJIUj4wMF6cVgYDr2KsrVXE4imUx6mEmHgoH786ZZ3b3H/usZAWW7R3fsAFFNhCrVwmaKdY4ylZdaqEgjI4yxUm7mpAjvjABjbt/QIIZJ1MF+Pu+eY3MMuwEwl2sfEidiBcdaeUl6yrcEkzks38IWMBnG2gUVTrIljSco4LUNGZxRaeZASW4X63Q5hznHyTGqpAfRwU5+WKGtaxC1SQsSKb+tfOyeTHWRDEyuNGhpf7me5EBjoYowFoEZ+gFx7pH+FYaTA0qBfSG6ErI2KcxZJMxVDhSkS1sV4twuNls0wVi4CYpEJ6yHwXEmpHJ5OxJTGNHhMLjH/BP0uQp2GpTwVhHY+orAExLt9ChxWhFWprYcFihaNKLDegZt7U4FuRpbPtbssONgRNECVjm6wYJFrR+5XK/VavVa9byO4L3qpWqMl/qznGlipV46b5xdturYIK//54sND7sAR3SnlfbZxeVFFYkw3MHV9dIQv8CAQ7qlXl+1kUoO78mMsQvwXiRbh8VjEenEqat9NlvUBmLJol2v6jDe89U0Vb7sDQa7k/UjxZSp04mjpw1ewBBRuV6qVbCCRFmzNNE0rOVZP2EZE9F0u10F10qQsr1hVTQ0WTSs7KwP2NA0wjxlUHWCmJRlo5jNELdlYidQaR92RINRp1P4vfPxnSAszis3XLkMD3Gn8+P0dGHh697e3vdvJyf/f4CrLqm8xFx/+IQ+jH/+QgK/wHbek9ZZwhSkq1MbwUW/f+buRJyIfn79+e/TuGBfomfi6UBmjH3NIL19Ffd6J2YEmhX92UqGbpEHzlzzeuNxL6ht9lmG0g5w5PbrtbWJN2/HyGB/AYd1QUewqrrRAAAAAElFTkSuQmCC" />
	    		<div class="walletInfo-l flex-1">
	    			<div class="walletAddress text-left border-b font-14 color2 font-family-bold fontWeight-b">{{ address }}</div>
	    			<div class="operations flex font-14 color2 font-family-regular fontWeight-4">
	    				<div class="operationItem flex-1 flex"
	    					v-clipboard:copy="address"
	    				    v-clipboard:success="onCopy"
	    				    v-clipboard:error="onError">
	    					<img class="copyIcon" src="../../static/images/header/copy.png" />
	    					<div class="ml-10">Copy Address</div>
	    				</div>
	    				<a class="operationItem flex-1 flex viewInExplorer" @click="handleViewInExplorer" :href="`https://bscscan.com/address/${address}`" target="_blank" >
							<img class="browserIcon" src="../../static/images/header/browser.png" />
							<div class="ml-10">View in Explorer</div>
	    				</a>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="flex flex-justify-content-end">
	    		<div class="logOutBtn flex flex-align-items-center mt-20 mr-20"
	    		@click="logout">
	    			<img class="logOutIcon ml-18" src="../../static/images/header/logOut.png" />
	    			<div class="ml-20 color5 font-14 font-family-bold fontWeight-b">Log Out</div>
	    		</div>
	    	</div>
	    </div>
	  </el-dialog>
	  <Tips :showTips="copiedTips"></Tips>
	  <Tips :showTips="failedTips"></Tips>
  </div>
</template>

<script>
	import Tips from './Tips.vue'
  export default {
    name: 'walletInfo',
    data () {
      return {
        copiedTips: {
        	isShow: false,
        	icon: require('../../static/images/sucess.png'),
        	status: 'Copied',
        	bg: '#1F2BFF'
        },
        failedTips: {
        	isShow: false,
        	icon: require('../../static/images/failed.png'),
        	status: 'Failed',
        	bg: '#FE1148'
        },
      }
    },
	components: {
		Tips
	},
    props: {
      showWalletInfo: Boolean,
	  address: String
    },
	watch: {
		'copiedTips.isShow'(newVal, oldVal) {
			if (newVal) {
				this.tipsTimer = setTimeout(() => {
					this.copiedTips.isShow = false;
				}, 2500)
			}
		},
		'failedTips.isShow'(newVal, oldVal) {
			if (newVal) {
				this.tipsTimer = setTimeout(() => {
					this.failedTips.isShow = false;
				}, 2500)
			}
		},
	},
    methods: {
		handleClose (){
			this.$emit('closeWalletInfo')
		},
		logout (){
			this.$emit('logout')
		},
		onCopy() {
		    this.handleClose()
			this.copiedTips.isShow = true;
		},
		onError() {
			this.handleClose()
			this.failedTips.isShow = true;
		},
		handleViewInExplorer (){

		},
    }
  }
</script>

<style scoped>
  .title{
  	height: 60px;
  }
  .closeIcon,.logOutIcon,
  .copyIcon,.browserIcon{
  	width: 16px;
  	height: 16px;
  }
  .walletInfo{
  	padding-bottom: 18px;
  }
  .walletInfo-l{
  	margin: 26px 20px auto 40px;
  }
  .walletIcon{
  	margin-top: 18px;
  	width: 38px;
  	height: 40px;
  }
  .walletAddress{
  	padding-bottom: 20px;
  	white-space: normal;
  	word-break: break-all;
  }
  .operations{
  	margin-top: 16px;
  }
  .logOutBtn{
  	width: 130px;
  	height: 40px;
  	background: #DE004F;
  	border-radius: 4px;
  	border: 1px solid rgba(0, 0, 0, 0.16);
  }
  .operationItem:hover,
  .logOutBtn:hover{
	  cursor: pointer;
  }
  /deep/ .el-dialog {
    border-radius: 16px;
    box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
  }
  /deep/ .el-dialog__header {
    text-align: left;
    height: 60px;
    line-height: 60px;
    padding: 0 0 0 20px!important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    font-weight: bold;
    font-family: 'Inter Bold';
  }
  /deep/ .el-dialog__title{
  	  font-size: 18px;
  	  color: #262525;
  }
  /deep/ .el-dialog__body {
    padding: 0 0 20px 0!important;
  }
	.viewInExplorer{
		text-decoration: none;
		color:inherit;
	}
</style>
