<template>
    <div class="pageContainer flex flex-direction-column" @click="hideClickWrapper" ><!--@click="hideClickWrapper"-->
        <Header :activeIndex="activeIndex"></Header>
        <el-main class="bg2">
            <div class="container flex flex-justify-content-center">
                <div class="mintContainer">
                    <MintHeader :headerInfo="headerInfo"></MintHeader>
                    <div class="mintBox bg1 border-radius-32">
                        <div class="mintTab flex color2 font-18 font-family-bold">
                            <div class="tabItem flex-1" :class="{'activeItem color1' : curr == 0 }" @click="curr=0">
                                Single Coin
                            </div>
                            <div class="tabItem flex-1" :class="{'activeItem2 color1' : curr == 1 }" @click="curr=1">
                                Multiple Coins
                            </div>
                        </div>
                        <div v-if="curr == 0" class="infoBox font-14">
                            <FromItem :showSelect_="true" :currCoin="currCoin" :selectCoinList="selectCoinList"
                                      :isDisabled="isLoading"
                                      @handlerSelect="handlerSelect()"
                                      @handlerSelectCoin="handlerSelectCoin"></FromItem>
                            <img class="toIcon mt-10" src="../../static/images/mint/to.png"/>
                            <div class="toInfoBox mt-10">
                                <div class="toInfo flex border-b">
									<div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
										<div class="flex-1 ml-20 text-left mr-12">
											<div class="toDesc font-family-regular font-weight-4 color2">To</div>
											<el-input v-model="currCoin.fromNum" :disabled="isLoading"
													  placeholder="0.00"></el-input>
										</div>
									</div>
									<div class="toInfo-r flex flex-align-items-center">
										<img class="currCoinIcon ml-18" :src="require(`../../static/images/mint/samecoin.png`)"/>
										<div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">SameUSD
										</div>
									</div>
                                </div>
								<div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(sameusdBalance) }}</div>
                            </div>
							<div class="toInfoBox mt-10">
								<div class="toInfo flex border-b">
								    <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
								        <div class="flex-1 ml-20 text-left mr-12">
								            <div class="toDesc font-family-regular font-weight-4 color2">
								                Rewards(estimate)
								            </div>
								            <el-input v-model="toNum" :disabled="isLoading"
								                      placeholder="0.00"></el-input>
								        </div>
								    </div>
								    <div class="toInfo-r flex flex-align-items-center">
								        <img class="currCoinIcon ml-18" :src="require(`../../static/images/mint/sameusd.png`)"/>
								        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">Samecoin
								        </div>
								    </div>
								</div>
								<div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(samecoinBalance) }}</div>
							</div>
                            <div class="operation flex flex-justify-content-between mt-24">
                                <el-button class="operationBtn operationBtn_approve color6 font-16 font-family-bold font-weight-b"
                                           :loading="isLoadingApprove" @click="handleApprove(currCoin.coin)" :disabled="currCoin.approve">Approve({{currCoin.approve?'already':'notready'}})
                                </el-button>
                                <el-button class="operationBtn operationBtn_mint ml-20 border-radius-8 color7 font-16 font-family-bold font-weight-b"
                                           :loading="isLoadingMint" @click="handleMint()" :disabled="!currCoin.approve">Mint
                                </el-button>
                            </div>
                        </div>
                        <div v-else class="infoBox font-14">
                            <FromItem
                                    v-for="(item , index) in selectCoinList"
                                    :showSelect_="false"
                                    :fromInfo="item" :currCoin="item" :selectCoinList="selectCoinList"
                                    :isDisabled="isLoading2"
                                    @handlerSelect="handlerSelects(index)"></FromItem>
                            <img class="toIcon" src="../../static/images/mint/to.png"/>
                            <div class="toInfoBox mt-10">
                                <div class="toInfo flex border-b">
                                    <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
                                        <div class="flex-1 ml-20 text-left mr-12">
                                            <div class="toDesc font-family-regular font-weight-4 color2">To</div>
                                            <el-input v-model="toNum" :disabled="isLoading2"
                                                      placeholder="0.00"></el-input>
                                        </div>
                                    </div>
                                    <div class="toInfo-r flex flex-align-items-center">
                                        <img class="currCoinIcon ml-18" :src="require(`../../static/images/mint/samecoin.png`)"/>
                                        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">SameUSD
                                        </div>
                                    </div>
                                </div>
                                <div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(sameusdBalance) }}</div>
                            </div>
							<div class="toInfoBox mt-10">
								<div class="toInfo flex border-b">
								    <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
								        <div class="flex-1 ml-20 text-left mr-12">
								            <div class="toDesc font-family-regular font-weight-4 color2">
								                Rewards(estimate)
								            </div>
								            <el-input v-model="toNum" :disabled="isLoading2"
								                      placeholder="0.00"></el-input>
								        </div>
								    </div>
								    <div class="toInfo-r flex flex-align-items-center">
								        <img class="currCoinIcon ml-18" :src="require(`../../static/images/mint/sameusd.png`)"/>
								        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">Samecoin
								        </div>
								    </div>
								</div>
								<div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(samecoinBalance) }}</div>
							</div>

                            <div class="operation flex flex-justify-content-end mt-24">
                                <el-button class="operationBtn operationBtn_mint border-radius-8 color7 font-16 font-family-bold font-weight-b"
                                           :loading="isLoadingMints" @click="handleMint2()">Mint
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
                <Tips :showTips="successedTips"></Tips>
                <Tips :showTips="failedTips"></Tips>
                <Tips :showTips="waitingTips"></Tips>
            </div>
        </el-main>
        <Footer></Footer>
    </div>
</template>

<script>
	import solidityConfig from '../../src/assets/solidityConfig'
	import {balanceOf,checkApprove,goApprove,mint,mints} from '../../src/assets/js/components'
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import MintNews from '@/components/MintNews'
	import MintReward from '@/components/MintReward'
	import MintHeader from '@/components/MintHeader'
	import MintPool from '@/components/MintPool'
	import Tips from '@/components/Tips'
	import FromItem from '@/components/FromItem'
	import { stateFormat } from '@/common/utils'
	export default {
		name: 'index',
		data() {
			return {
				headerInfo: {
					icon: require('../../static/images/mint.png'),
					title: 'Mint',
					desc: 'Convert SameUSD by Stablecoins'
				},
				samecoinBalance:NaN,
				sameusdBalance:NaN,
				isLoadingApprove: false,
				isLoadingMints: false,
				isLoadingMint: false,
				isLoading: false,
				isLoading2: false,
				activeIndex: '0',
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
				successedTips: {
					isShow: false,
					icon: require('../../static/images/sucess.png'),
					status: 'Successed',
					bg: '#1F2BFF'
				},
				failedTips: {
					isShow: false,
					icon: require('../../static/images/failed.png'),
					status: 'Failed',
					bg: '#FE1148'
				},
				waitingTips: {
					isShow: false,
					icon: require('../../static/images/waiting.png'),
					status: 'Waiting...',
					bg: '#129BFF'
				},
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
				//this.updataBalance();
				//this.checkApprove(this.currCoin,solidityConfig.ContractMsg.MassetProxy.address);
				this.updataApprove();
				for(let i in this.selectCoinList){
					//this.checkApprove(this.selectCoinList[i].coin,solidityConfig.ContractMsg.MassetProxy.address);
					if(this.currCoin.coin == this.selectCoinList[i].coin){
						this.currCoin.approve = this.selectCoinList[i].approve;
					}
				}
			}, 1000)

			this.countDown(256)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		components: {
			Header,
			Footer,
			MintNews,
			MintReward,
			MintHeader,
			MintPool,
			Tips,
			FromItem
		},
		watch: {
			'successedTips.isShow'(newVal, oldVal) {
				if (newVal) {
					this.timer = setTimeout(() => {
						this.successedTips.isShow = false;
					}, 2500)
				} else {
					clearTimeout(this.timer)
				}
			},
			'failedTips.isShow'(newVal, oldVal) {
				if (newVal) {
					this.timer = setTimeout(() => {
						this.failedTips.isShow = false;
					}, 2500)
				} else {
					clearTimeout(this.timer)
				}
			},
		},
		methods: {
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
					console.log(m+":"+s)
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
					this.successedTips.isShow = true;
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
			stateFormat_(num) {
				return stateFormat(num)
			},
			handlerSelects(index) {
				for (let i in this.selectCoinList) {
					if (i == index) {
						this.selectCoinList[i].showSelect = !this.selectCoinList[i].showSelect;
					}
				}
				this.fromInfo.showSelect = !this.fromInfo.showSelect
			},
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
			async handleMint() {
				this.isLoadingMint = true;
				var info = await mint(this.currCoin.coin.toLowerCase(),this.currCoin.fromNum);
				this.isLoadingMint = false;
				if(info.success){
					this.successedTips.isShow = true;
				}else {
					this.failedTips.isShow = true;
				}
			},
			async handleMint2() {
				this.isLoadingMints = true;
				var coinNameList = [];
				var fromNumList = [];
				for(let i in this.selectCoinList){
					if(this.selectCoinList[i].fromNum > 0){
						coinNameList.push(this.selectCoinList[i].coin.toLowerCase());
						fromNumList.push(this.selectCoinList[i].fromNum);
                    }

				}
				var info = await mints(coinNameList,fromNumList);
				this.isLoadingMints = false;
				if(info.success){
					this.successedTips.isShow = true;
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
