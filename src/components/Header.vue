<template>
    <el-header class="bg1" style="height:60px;">
        <div class="headerContainer container flex flex-align-items-center flex-justify-content-center color1">
            <img class="logo" src="../../static/images/logo.png" alt=""/>
            <Menu :activeIndex="activeIndex"></Menu>
            <div v-if="!accountAddress" class="connect font-family-bold font-14 fontWeight-b" @click="showConnect=true">CONNECT</div>
            <div v-else class="connect font-family-bold font-14 fontWeight-b" >{{shorten(accountAddress)}}
            <span @click="logout()">Logout</span>
            </div>
        </div>
        <Connect :showConnect="showConnect" @handleClose="handleClose" @showConnect="onChangeType"/>
    </el-header>
</template>

<script>
	import Menu from '@/components/Menu'
	import Connect from './Connect'

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
			}
		},
		props: {
			activeIndex: String
		},
		components: {
			Menu,
			Connect
		},

		methods: {
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

			logout(){
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

			this.intervalId = setInterval( async ()=>{
				toAccount(this.checkSignin()).then((d)=>{
					this.accountAddress = d;
				});
			},1000)

			/*this.intervalId = setInterval( async ()=>{
				this.updataBalance();
			},3000)*/
		},
		async created () {
			//查看是否有登陆
			/*var address = $cookies.get('address');
			if(address){

            }*/

		}
	}
</script>

<style scoped>
    .headerContainer {
        height: 60px;
        position: relative;
    }

    .logo {
        width: 243px;
        height: 36px;
        position: absolute;
        left: 48px;
    }

    .connect {
        position: absolute;
        right: 36px;
    }

    .logo:hover, .connect:hover {
        cursor: pointer;
    }
</style>
