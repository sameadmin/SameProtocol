<template>
    <div class="">
		<el-header class="bg1" style="height:60px;">
		    <div class="headerContainer container flex flex-align-items-center flex-justify-content-center color1">
		        <img class="logo" src="../../static/images/logo.png" alt=""/>
		        <Menu :activeIndex="activeIndex"></Menu>
		        <div v-if="!accountAddress" class="connect font-family-bold font-14 fontWeight-b" @click="showConnect=true">CONNECT</div>
		        <div v-else class="account border-l flex flex-align-items-center pl-24 font-family-bold font-14 fontWeight-b"
				@click="showWalletInfo=!showWalletInfo">
		        <div v-else class="account border-l flex flex-align-items-center pl-24 font-family-bold font-14 fontWeight-b"
				@click.stop="showWalletInfo=!showWalletInfo">
					<div class="">{{shorten(accountAddress)}}</div>
					<img class="arrow-up-icon ml-20" :class="{'select-caret': showWalletInfo,'select-reverse': !showWalletInfo}"
					 src="../../static/images/mint/down.png" />
				</div>
				<div v-if="showWalletInfo" class="accountInfo bg1 border-radius-16">
					<div class="title border-b flex flex-justify-content-between flex-align-items-center">
						<div class="ml-20 font-18 color2 font-family-bold fontWeight-b">Your Wallet</div>
						<img class="closeIcon mr-20" src="../../static/images/header/close.png"
						@click="showWalletInfo=false"/>
					</div>
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
								<div class="operationItem flex-1 flex" @click="handleViewInExplorer">
									<img class="browserIcon" src="../../static/images/header/browser.png" />
									<div class="ml-10">View in Explorer</div>
								</div>
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
		    </div>

		</el-header>
		<!-- <span @click="logout()">Logout</span> -->
		<Connect :showConnect="showConnect" @handleClose="handleClose" @showConnect="onChangeType"/>
		<ChangeNetework :showChangeDialog="showChangeDialog" @handleClose="handleClose2"></ChangeNetework>
	</div>
</template>

<script>
	import Menu from '@/components/Menu'
	import Connect from './Connect'
	import ChangeNetework from './changeNetwork.vue'

	import Web3 from 'web3';
	import {toAccount,shorten,balanceOf,CheckMetaMask} from '../../src/assets/js/components'
	//import solidityConfig from '../../src/assets/solidityConfig'
    //$cookies.get('token')
    //$cookies.set("userName",this.userName);
	export default {
		name: 'Header',
		data() {
			return {
				showConnect: false,
				accountAddress:null,
				showChangeDialog: false,
				showWalletInfo: false,
				address: '0xdshjahj1hj9wifh1sazzbchcashfg1gjc6q5sad'
			}
		},
		props: {
			activeIndex: String
		},
		components: {
			Menu,
			Connect,
			ChangeNetework
		},
		watch: {
			showChangeDialog (v){
				if(v){
					document.querySelector('.pageContainer').style.visibility = 'hidden'
				}else{
					document.querySelector('.pageContainer').style.visibility = 'visible'
				}
			}
		},
		methods: {
			onCopy() {
			    this.$message({
					message: '复制成功!',
					type: 'success'
			    });
			},
			onError() {
				this.$message.error('复制失败!');
			},
			handleViewInExplorer (){

			},
			onChangeType (type) { // type是子组件$emit传递的参数
				this.showConnect = type
			},
			//查看是否使用钱包
			checkSignin(){
				let useWallet =  JSON.parse($cookies.get("useWallet"));
				if(useWallet==null){
					$cookies.set("useWallet",false);
				}else if(useWallet==false){
					$cookies.set("useWallet",false);
					return false;
				}else {
					return true;
				}
			},
			handleClose2 (){
				this.showChangeDialog = false
			},
			logout(){
				this.showWalletInfo = false
				$cookies.set("useWallet",false);
				this.showConnect=false;
            },
			handleClose() {
				this.showConnect = false
			},

			async toAccount(){
				this.accountAddress = await toAccount(true);
			},
			shorten(str){
				return  shorten(str);
			},
		},
		async mounted() {
			// this.showChangeDialog = true

			this.intervalId = setInterval( async ()=>{
				toAccount(this.checkSignin()).then((d)=>{
					this.accountAddress = d;
				});
			},100)

			/*this.intervalId = setInterval( async ()=>{
				this.updataBalance();
			},3000)*/
		},
		async created () {
			//查看是否有登陆
			/*var address = $cookies.get('address');
			if(address){

            }*/
		},
	}
</script>

<style scoped>
    .headerContainer {
        height: 60px;
        position: relative;
    }
    .logo {
        width: 285px;
        height: 36px;
        position: absolute;
        left: 48px;
    }
    .connect,.account {
        position: absolute;
        right: 36px;
    }
	.account{
		height: 36px;
	}
    .logo:hover, .connect:hover, .account:hover {
        cursor: pointer;
    }
	.arrow-up-icon {
        width: 20px;
        height: 20px;
    }
	.accountInfo{
		position: absolute;
		top: 60px;
		right: 0;
		width: 500px;
		padding-bottom: 20px;
		z-index: 999;
		box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
	}
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
</style>
