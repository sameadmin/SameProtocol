<template>
    <div class="pageContainer flex flex-direction-column" @click="hideClickWrapper" >
        <Header :activeIndex="activeIndex"></Header>
        <el-main class="bg2">
            <div class="container flex flex-justify-content-center">
                <div class="mintContainer">
                    <MintHeader :headerInfo="headerInfo"></MintHeader>
                    <div class="mintBox bg1 border-radius-32">
                        <div class="mintTab flex color3 font-18 font-family-bold">
                            <div class="tabItem flex-1" :class="{'activeItem color1' : curr == 0 }" @click="curr=0">
                                SameUSD Amount
                            </div>
                            <div class="tabItem flex-1" :class="{'activeItem2 color1' : curr == 1 }" @click="curr=1">
                                Stable Amount
                            </div>
                        </div>
                        <div v-if="curr == 0" class="infoBox font-14">
                            <div class="toInfoBox mt-10">
                                <div class="toInfo flex border-b">
                                    <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
                                        <div class="flex-1 ml-20 text-left mr-12">
                                            <div class="toDesc font-family-regular font-weight-4 color2">From</div>
                                            <el-input v-model="currCoin.fromNum" :disabled="false"
                                                      placeholder="0.00"></el-input>
                                        </div>
                                        <div class="max border-radius-8 color2 font-family-bold mr-12"  @click="max()">MAX</div>
                                    </div>
                                    <div class="toInfo-r flex flex-align-items-center">
                                        <img class="currCoinIcon ml-18" :src="require(`../../static/images/mint/sameusd.png`)"/>
                                        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">SameUSD
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(sameusdBalance,6) }}</div>-->
                                <div class="balance flex flex-align-items-center font-family-regular font-weight-4 text-left border-r border-l border-b">Balance：
                                    <div v-if="sameusdBalance" >Balance：{{ stateFormat_(sameusdBalance,6) }}</div>
                                    <img v-else class="loadingIcon" src="../../static/images/loading.gif" />
                                </div>
                            </div>
                            <h5 class="text-left" style="color: crimson" v-if="(sameusdBalance<currCoin.fromNum)">Current balance {{ stateFormat_(sameusdBalance,6) }} ,Insufficient amount</h5>
                            <img class="toIcon mt-10 mb-10" src="../../static/images/mint/to.png"/>
                            <ToItem :showSelect_="true" :currCoin="currCoin" :selectCoinList="selectCoinList"
                                      :showApprove="false"
                                      :isDisabled="true"
                                      @handlerSelect="handlerSelect()"
                                      @handlerSelectCoin="handlerSelectCoin" />
                            <div class="operation flex flex-justify-content-end mt-24">
                                <el-button class="operationBtn operationBtn_mint ml-20 border-radius-8 color7 font-16 font-family-bold font-weight-b"
                                           :loading="isLoadingMint" :disabled="isLoadingMint|| totalRedeem == 0" @click="handleRedeem()" >Redeem
                                </el-button>
                            </div>
                        </div>
                        <div v-else class="infoBox font-14">
                            <div class="toInfoBox mt-10">
                                <div class="toInfo flex border-b">
                                    <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
                                        <div class="flex-1 ml-20 text-left mr-12">
                                            <div class="toDesc font-family-regular font-weight-4 color2">From</div>
                                            <el-input v-model="totalRedeem" :disabled="true"
                                                      placeholder="0.00"></el-input>
                                        </div>
                                        <div class="max border-radius-8 color2 font-family-bold mr-12"  @click="max()">MAX</div>
                                    </div>
                                    <div class="toInfo-r flex flex-align-items-center">
                                        <img class="currCoinIcon ml-18" :src="require(`../../static/images/mint/sameusd.png`)"/>
                                        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">SameUSD
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(sameusdBalance,6) }}</div>-->
                                <div class="balance flex flex-align-items-center font-family-regular font-weight-4 text-left border-r border-l border-b">Balance：
                                    <div v-if="sameusdBalance" >Balance：{{ stateFormat_(sameusdBalance,6) }}</div>
                                    <img v-else class="loadingIcon" src="../../static/images/loading.gif" />
                                </div>
                            </div>
                            <h5 class="text-left" style="color: crimson" v-if="(sameusdBalance<currCoin.fromNum)">Current balance {{ stateFormat_(sameusdBalance,6) }} ,Insufficient amount</h5>
                            <img class="toIcon mt-10 mb-10" src="../../static/images/mint/to.png"/>
                            <ToItem
                                    v-for="(item , index) in selectCoinList"
                                    :showSelect_="false"
                                    :showApprove="false"
                                    :fromInfo="item" :currCoin="item" :selectCoinList="selectCoinList"
                                    :isDisabled="isLoading2" />
                            <div class="operation flex flex-justify-content-end mt-24">
                                <el-button class="operationBtn operationBtn_mint border-radius-8 color7 font-16 font-family-bold font-weight-b"
                                           :loading="isLoadingMints" :disabled="isLoadingMints || totalRedeem == 0" @click="handleRedeem2()">Redeem
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <div class="poolBox">
                        <MintPool/>
                    </div>
                    <div class="bottomSeat"></div>
                </div>
                <MintNews :showNews="showNews" @handleShowReward="handleShowReward"></MintNews>
                <MintReward :showReward="showReward" @handleHideReward="handleHideReward"></MintReward>
				<Tips :showTips="redeemSuccessfullyTips"></Tips>
                <Tips :showTips="approveSuccessfullyTips"></Tips>
                <Tips :showTips="failedTips"></Tips>
            </div>
        </el-main>
        <Footer></Footer>
    </div>
</template>

<script>
	import solidityConfig from '../../src/assets/solidityConfig'
	import {balanceOf,checkApprove,goApprove,redeem,redeemMulti} from '../../src/assets/js/components'
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import MintNews from '@/components/MintNews'
	import MintReward from '@/components/MintReward'
	import MintHeader from '@/components/MintHeader'
	import MintPool from '@/components/MintPool'
	import Tips from '@/components/Tips'
	import FromItem from '@/components/FromItem'
	import FromItem2 from '@/components/FromItem_.vue'
	import { stateFormat } from '@/common/utils'
	import ToItem from '@/components/ToItem'
	export default {
		name: 'index',
		data() {
			return {
				headerInfo: {
					icon: require('../../static/images/redeem.png'),
					title: 'Redeem',
					desc: 'Convert SameUSD by Stablecoins'
				},
				samecoinBalance:NaN,
				sameusdBalance:NaN,
				totalRedeem:NaN,
				isLoadingApprove: false,
				isLoadingMints: false,
				isLoadingMint: false,
				isLoading: false,
				isLoading2: false,
				activeIndex: '5',
				curr: 0,
				toNum: '',
				currCoin: {
					url: require('../../static/images/mint/busd.png'),
					coin: 'BUSD',
					fromNum: '',
					approve: false,
					showSelect: false,
					balance: NaN
				},
				selectCoinList: [
					{
						url: require('../../static/images/mint/busd.png'),
						coin: 'BUSD',
						fromNum: '',
						approve: false,
						showSelect: false,
						balance: NaN
					},
					{
						url: 'https://mstable.app/static/media/USDC.fcebf28c.svg',
						coin: 'USDC',
						fromNum: '',
						approve: false,
						showSelect: false,
						balance: NaN
					},
					{
						url: 'https://mstable.app/static/media/USDT.aaa204b0.svg',
						coin: 'USDT',
						fromNum: '',
						approve: false,
						showSelect: false,
						balance: NaN
					}
				],
				showNews: true,
				showReward: false,
				redeemSuccessfullyTips: this.globalTips.redeemSuccessfullyTips,
				approveSuccessfullyTips: this.globalTips.approveSuccessfullyTips,
				failedTips: this.globalTips.failedTips,
				tipsTimer: null,
				timer: null,
				time: 8
			}
		},
		async created () {
			this.currCoin = (await this.updataBalance())[0];
			this.updataApprove();

		},
		mounted() {
			this.intervalId = setInterval(async () => {
				this.updataBalance();
				//this.checkApprove(this.currCoin,solidityConfig.ContractMsg.MassetProxy.address);
				this.updataApprove();
				for(let i in this.selectCoinList){
					//this.checkApprove(this.selectCoinList[i].coin,solidityConfig.ContractMsg.MassetProxy.address);
					if(this.currCoin.coin == this.selectCoinList[i].coin){
						this.currCoin.approve = this.selectCoinList[i].approve;
					}
				}
			}, 1000)

			this.intervalId = setInterval(async () => {
				this.totalRedeem = 0;
				for(var i in this.selectCoinList){
					this.totalRedeem += Number(this.selectCoinList[i].fromNum)
				}
			}, 100)

			this.countDown(256)
		},
		beforeDestroy() {
			if(this.timer){
				clearInterval(this.timer)
			}

			if(this.tipsTimer){
				clearTimeout(this.tipsTimer)
			}
		},
		components: {
			Header,
			Footer,
			MintNews,
			MintReward,
			MintHeader,
			MintPool,
			Tips,
			ToItem,
			FromItem,
			FromItem2
		},
		watch: {
			'redeemSuccessfullyTips.isShow'(newVal, oldVal) {
				if (newVal) {
					this.tipsTimer = setTimeout(() => {
						this.redeemSuccessfullyTips.isShow = false;
					}, 2500)
				}
			},
			'approveSuccessfullyTips.isShow'(newVal, oldVal) {
				if (newVal) {
					this.tipsTimer = setTimeout(() => {
						this.approveSuccessfullyTips.isShow = false;
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
			max(){
				this.currCoin.fromNum = this.sameusdBalance;
			},
			countDown(time){
				var m=0;
				var s=0;
				m = Math.floor(time/60%60);
				m < 10 &&(m='0'+m);
				s = Math.floor(time%60);
				this.timer = setInterval(() => {
					s--;
					s < 10 && (s='0'+s);
					if(s==0){
						clearInterval(this.timer);
					}
					// console.log(m+":"+s)
				},1000);
			},
			async mintBtn(){
				await mint(nameList[0],amtList[0]);
			},
			async goApprove(coinName){
				this.isLoadingApprove = true;
				let info = await goApprove(coinName.toLowerCase(),100000000000);
				this.isLoadingApprove = false;
				if(info.success){
					this.approveSuccessfullyTips.isShow = true;
				}else {
					this.failedTips.isShow = true;
				}
			},
			async updataApprove(){
				for(let i in this.selectCoinList){
					this.selectCoinList[i].approve = await this.checkApprove(this.selectCoinList[i].coin,solidityConfig.ContractMsg.MassetProxy.address);
				}
			},
			async checkApprove(name,fromAddr){
				return await checkApprove(name,fromAddr);
			},
			stateFormat_(num,d) {
				return stateFormat(num,d)
			},
			/*handlerSelects(index) {
				for (let i in this.selectCoinList) {
					if (i == index) {
						this.selectCoinList[i].showSelect = !this.selectCoinList[i].showSelect;
					}
				}
				this.fromInfo.showSelect = !this.fromInfo.showSelect
			},*/
			handlerSelect() {
				this.currCoin.showSelect = !this.currCoin.showSelect
			},
			handlerSelectCoin(item) {
				this.currCoin = item
				if(!this.currCoin.showSelect){
					this.currCoin.showSelect = true
				}
			},
			handleShowReward() {
				this.showNews = false;
				this.showReward = true;
			},
			handleHideReward() {
				this.showNews = true;
				this.showReward = false;
			},
			async handleRedeem() {
				this.isLoadingMint = true;
				var info = await redeem(this.currCoin.coin.toLowerCase(),this.currCoin.fromNum);
				this.isLoadingMint = false;
				if(info.success){
					this.redeemSuccessfullyTips.isShow = true;
					this.currCoin.fromNum = 0;
				}else {
					this.failedTips.isShow = true;
				}
			},
			async handleRedeem2() {
				this.isLoadingMints = true;
				var coinNameList = [];
				var fromNumList = [];
				for(let i in this.selectCoinList){
					if(this.selectCoinList[i].fromNum > 0){
						coinNameList.push(this.selectCoinList[i].coin.toLowerCase());
						fromNumList.push(this.selectCoinList[i].fromNum);
					}

				}
				var info = await redeemMulti(coinNameList,fromNumList);
				this.isLoadingMints = false;
				if(info.success){
					this.redeemSuccessfullyTips.isShow = true;
					for(let i in this.selectCoinList){
						this.selectCoinList[i].fromNum = 0;
					}
				}else {
					this.failedTips.isShow = true;
				}
			},
			async handleApprove(coinName) {
				await this.goApprove(coinName);
			},
			hideClickWrapper() {
				if (document.querySelector('.selectCoinList')) {
					this.currCoin.showSelect = false
				}
			},
			async updataBalance() {
				this.sameusdBalance = await balanceOf('sameUsd');
				this.samecoinBalance = await balanceOf('sameCoin');
				for (var i in this.selectCoinList) {
					var balance_ = await balanceOf(this.selectCoinList[i].coin.toLowerCase());
					this.selectCoinList[i].balance = balance_;
				}
				return this.selectCoinList;
			},
		}
	}


</script>

<style scoped>
    @import '../assets/mint.css';
	.max:hover {
	    cursor: pointer;
		color: #1F2BFF;
		border: 1px solid #1F2BFF;
	}

    /deep/ .el-input__inner {
        border: none !important;
        padding: 0;
        color: #262525;
        font-size: 24px;
        font-family: 'Inter Bold';
    }

    /deep/ .el-input__inner::-webkit-inzzzput-placeholder {
        color: #262525;
        font-size: 18px;
        font-family: 'Inter Bold';
    }

    /deep/ .el-input__inner::-moz-input-placeholder {
        color: #262525;
        font-size: 18px;
        font-family: 'Inter Bold';
    }

    /deep/ .el-input__inner::-ms-input-placeholder {
        color: #262525;
        font-size: 18px;
        font-family: 'Inter Bold';
    }


</style>

