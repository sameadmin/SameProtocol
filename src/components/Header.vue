<template>
    <div class="">
		<el-header class="bg1" style="height:60px;">
		    <div class="headerContainer container flex flex-align-items-center flex-justify-content-center color1">
		        <img class="logo" src="../../static/images/logo.png" alt=""/>
		        <Menu :activeIndex="activeIndex" :textColor="'#161616'" :activeTextColor="'#1F2BFF'"></Menu>
		        <div v-if="!accountAddress" class="connect font-family-bold font-14 fontWeight-b" @click="showConnect=true">CONNECT</div>
		        <div v-else class="account border-l flex flex-align-items-center pl-24 font-family-bold font-14 fontWeight-b"
				@click.stop="showWalletInfo=!showWalletInfo">
					<div class="network color6">{{netword}}</div>
					<div class="ml-10">{{shorten(accountAddress)}}</div>
					<img class="arrow-up-icon ml-20" :class="{'select-caret': showWalletInfo,'select-reverse': !showWalletInfo}"
					 src="../../static/images/mint/down.png" />
				</div>
		    </div>
			<div class="headerContainer_m  flex flex-align-items-center flex-justify-content-center color1">
				<img class="logo_m" src="../../static/images/logo_m.png" alt=""/>
				<img class="switchIcon" src="" />
			</div>
		</el-header>
		<Connect :showConnect="showConnect" @handleClose="handleClose" @showConnect="onChangeType" @showChangeDialog_="onChangeDialogType"/>
		<Warning :showChangeDialog="showChangeDialog" @handleClose="handleClose2" :msg="showWarningMsg" :title_="showWarningtitle" :type="showWarningType"></Warning>
		<WalletInfo :showWalletInfo="showWalletInfo" :address="accountAddress" @closeWalletInfo="closeWalletInfo"
		@logout="logout"></WalletInfo>
		<Tips :showTips="logoutSuccessfullyTips"></Tips>
	</div>
</template>

<script>
	import Menu from '@/components/Menu'
	import Connect from './Connect'
	import Warning from './Warning.vue'
	import WalletInfo from './WalletInfo.vue'
	import Tips from './Tips.vue'
	//import Web3 from 'web3';
	import {toAccount,shorten,balanceOf,CheckMetaMask,checkSignin_} from '../../src/assets/js/components'
	//import {get} from '../../src/assets/js/net'
	//import solidityConfig from '../../src/assets/solidityConfig'
    //$cookies.get('token')
    //$cookies.set("userName",this.userName);
	export default {
		name: 'Header',
		data() {
			return {
				netword:false,
				showConnect: false,
				accountAddress:null,
				showChangeDialog: false,
				showWarningtitle: '',
				showWarningMsg: false,
				showWarningType: false,
				showWalletInfo: false,
				address: null,
				logoutSuccessfullyTips: this.globalTips.logoutSuccessfullyTips
			}
		},
		props: {
			activeIndex: String
		},
		components: {
			Menu,
			Connect,
			Warning,
			WalletInfo,
			Tips
		},
		watch: {
			showChangeDialog (v){
				if(v){
					document.querySelector('.pageContainer').style.visibility = 'hidden'
				}else{
					document.querySelector('.pageContainer').style.visibility = 'visible'
				}
			},
			'logoutSuccessfullyTips.isShow'(newVal, oldVal) {
				if (newVal) {
					this.tipsTimer = setTimeout(() => {
						this.logoutSuccessfullyTips.isShow = false;
					}, 2500)
				}
			},
		},
		methods: {
			closeWalletInfo (){
				this.showWalletInfo = false
			},
			onChangeType (type) { // type是子组件$emit传递的参数
				this.showConnect = type
			},
			onChangeDialogType(type){
				//没安装钱包，弹出警告
				this.showChangeDialog = type;
				this.showWarningtitle = 'Warning';
				this.showWarningMsg = 'You\'ll need to install MetaMask to continue. Once you have it installed';
				this.showWarningType = 0;
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
				this.logoutSuccessfullyTips.isShow = true
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
			//检查当前网络id是否为kovan或bsc
			async checkIsBsc(){
				var id = ethereum.networkVersion;
				// console.log(id);
				if(id == 42 || id == 56){
					return true;
				}
				this.showChangeDialog = true;
				this.showWarningtitle = 'Warning';
				this.showWarningMsg = 'Please log in with Kovan test network or BSC network';
				this.showWarningType = 1;

				return false;
			},
			showNetword(){
				if(ethereum.networkVersion == 42){
					return `Kovan`;
				}
				if(ethereum.networkVersion == 56){
					return `BSC`;
				}
			}
		},
		async mounted() {
			//console.log(await get('https://api.dex.guru/v1/tradingview/history?symbol=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_USD&resolution=60&from=1620887259&to=1620973659'));
			var this_ = this;
			// this.showChangeDialog = true

			this.intervalId = setInterval( async ()=>{
				toAccount(this.checkSignin()).then((d)=>{
					this.accountAddress = d;
				});
			},2000)

			this.interval2Id = setInterval( async ()=>{
				this.netword = this.showNetword();
			},100)

			/*this.intervalId = setInterval( async ()=>{
				this.updataBalance();
			},3000)*/
			ethereum.on('accountsChanged', function (accounts) {
				//console.log(accounts[0])
			})

			ethereum.on('networkChanged',async function (networkIDstring) {
				console.log('networkIDstring',networkIDstring);
				await this_.checkIsBsc();
			})

			//ethereum.autoRefreshOnNetworkChange;
		},
		async created () {
			this.accountAddress = await toAccount();

			//检查当前web3 网络 是否为kovan或bsc
			await this.checkIsBsc();

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
	.network{
		padding: 6px 10px;
		border-radius: 4px;
		background-color: #F7F7F7;
	}
	@media only screen and (min-width: 440px) {
		.headerContainer_m{
			display: none;
		}
	}
	@media only screen and (max-width: 440px) {
		.headerContainer{
			display: none;
		}
		.logo_m{
			width: 180px;
			height: 27px;
		}
	}

</style>
