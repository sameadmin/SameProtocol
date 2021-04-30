<template>
    <div class="">
		<el-header class="bg1" style="height:60px;">
		    <div class="headerContainer container flex flex-align-items-center flex-justify-content-center color1">
		        <img class="logo" src="../../static/images/logo.png" alt=""/>
		        <Menu :activeIndex="activeIndex"></Menu>
		        <div v-if="!accountAddress" class="connect font-family-bold font-14 fontWeight-b" @click="showConnect=true">CONNECT</div>
		        <div v-else class="account border-l flex flex-align-items-center pl-24 font-family-bold font-14 fontWeight-b"
				@click.stop="showWalletInfo=!showWalletInfo">
					<div class="">{{shorten(accountAddress)}}</div>
					<img class="arrow-up-icon ml-20" :class="{'select-caret': showWalletInfo,'select-reverse': !showWalletInfo}"
					 src="../../static/images/mint/down.png" />
				</div>
		    </div>
		</el-header>
		<Connect :showConnect="showConnect" @handleClose="handleClose" @showConnect="onChangeType" @showChangeDialog_="onChangeDialogType"/>
		<ChangeNetework :showChangeDialog="showChangeDialog" @handleClose="handleClose2"></ChangeNetework>
		<WalletInfo :showWalletInfo="showWalletInfo" :address="accountAddress" @closeWalletInfo="closeWalletInfo"
		@logout="logout"></WalletInfo>
	</div>
</template>

<script>
	import Menu from '@/components/Menu'
	import Connect from './Connect'
	import ChangeNetework from './changeNetwork.vue'
	import WalletInfo from './WalletInfo.vue'
	//import Web3 from 'web3';
	import {toAccount,shorten,balanceOf,CheckMetaMask,checkSignin_} from '../../src/assets/js/components'
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
				address: null,
			}
		},
		props: {
			activeIndex: String
		},
		components: {
			Menu,
			Connect,
			ChangeNetework,
			WalletInfo
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
			closeWalletInfo (){
				this.showWalletInfo = false
			},
			onChangeType (type) { // type是子组件$emit传递的参数
				this.showConnect = type
			},
			onChangeDialogType(type){
				this.showChangeDialog = type;
			},
			//查看是否使用钱包
			async checkSignin(){
				return checkSignin_();
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
			},2000)

			/*this.intervalId = setInterval( async ()=>{
				this.updataBalance();
			},3000)*/
		},
		async created () {
			this.accountAddress = await toAccount()
		}
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
