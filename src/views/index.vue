<template>
    <div class="pageContainer flex flex-direction-column" @click="hideClickWrapper">
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
                            <FromItem :showSelect_="true" :fromInfo="fromInfo" :currCoin="currCoin" :selectCoinList="selectCoinList"
                                      :isDisabled="isLoading"
                                      @handlerSelect="handlerSelect" @handlerSelectCoin="handlerSelectCoin"></FromItem>
                            <img class="toIcon mt-10" src="../../static/images/mint/to.png"/>
                            <div class="toInfoBox mt-10">
                                <div class="toInfo flex border-b">
                                    <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
                                        <div class="flex-1 ml-20 text-left mr-12">
                                            <div class="toDesc font-family-regular font-weight-4 color2">To</div>
                                            <el-input v-model="toNum" :disabled="isLoading"
                                                      placeholder="0.00"></el-input>
                                        </div>
                                    </div>
                                    <div class="toInfo-r flex flex-align-items-center">
                                        <img class="currCoinIcon ml-18" src="../../static/images/mint/same.svg"/>
                                        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">Same
                                        </div>
                                    </div>
                                </div>
                                <div class="toInfo flex">
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
                                        <img class="currCoinIcon ml-18" src="../../static/images/mint/same.svg"/>
                                        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">Same
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="operation flex flex-justify-content-between mt-24">
                                <el-button round class="operationBtn color2 font-16 font-family-bold font-weight-b"
                                           @click="handleApprove">Approve
                                </el-button>
                                <el-button round :loading="isLoading"
                                           class="operationBtn color2 font-16 font-family-bold font-weight-b"
                                           @click="handleMint">Mint
                                </el-button>
                            </div>
                        </div>
                        <div v-else class="infoBox font-14">
                            <FromItem
                                    v-for="(item , index) in selectCoinList"
                                    :showSelect_="false"
                                    :fromInfo="item" :currCoin="item" :selectCoinList="selectCoinList"
                                    :isDisabled="isLoading2"
                                    @handlerSelect="handlerSelect(index)"></FromItem>
                            <!--<FromItem :fromInfo="fromInfo3" :currCoin="currCoin3" :selectCoinList="selectCoinList" :isDisabled="isLoading2"
                                      @handlerSelect="handlerSelect3" @handlerSelectCoin="handlerSelectCoin3"></FromItem>-->
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
                                        <img class="currCoinIcon ml-18" src="../../static/images/mint/same.svg"/>
                                        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">Same
                                        </div>
                                    </div>
                                </div>
                                <div class="toInfo flex">
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
                                        <img class="currCoinIcon ml-18" src="../../static/images/mint/same.svg"/>
                                        <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">Same
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="operation flex flex-justify-content-end mt-24">
                                <el-button round :loading="isLoading2"
                                           class="operationBtn color2 font-16 font-family-bold font-weight-b"
                                           @click="handleMint2">Mint
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
            </div>
        </el-main>
        <Footer></Footer>
    </div>
</template>

<script>
	import solidityConfig from '../../src/assets/solidityConfig'
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import MintNews from '@/components/MintNews'
	import MintReward from '@/components/MintReward'
	import MintHeader from '@/components/MintHeader'
	import MintPool from '@/components/MintPool'
	import Tips from '@/components/Tips'
	import FromItem from '@/components/FromItem'
	import {stateFormat} from '@/common/utils'

	export default {
		name: 'index',
		data() {
			return {
				headerInfo: {
					icon: require('../../static/images/mint.png'),
					title: 'Mint',
					desc: 'Convert SameUSD by Stablecoins'
				},
				isLoading: false,
				isLoading2: false,
				activeIndex: '0',
				curr: 0,
				toNum: '',
				fromInfo: {
					fromNum: '',
					showSelect: false,
					balance: 19921849.12387
				},
				fromInfo2: {
					fromNum: '',
					showSelect: false,
					balance: 19921849.12388
				},
				fromInfo3: {
					fromNum: '',
					showSelect: false,
					balance: 19921849.12389
				},
				currCoin: {
					url: require('../../static/images/mint/busd.png'),
					coin: 'BUSD'
				},
				currCoin2: {
					url: 'https://mstable.app/static/media/USDC.fcebf28c.svg',
					coin: 'USDC'
				},
				currCoin3: {
					url: require('../../static/images/mint/tusd.svg'),
					coin: 'TUSD'
				},
				currCoin4: {
					url: 'https://mstable.app/static/media/USDT.aaa204b0.svg',
					coin: 'USDT'
				},
				selectCoinList: [
					{
						url: require('../../static/images/mint/busd.png'),
						coin: 'BUSD',
						fromNum: '',
						showSelect: false,
						balance: 19921849.12387
					},
					{
						url: 'https://mstable.app/static/media/USDC.fcebf28c.svg',
						coin: 'USDC',
						fromNum: '',
						showSelect: false,
						balance: 19921849.12387
					},
					{
						url: require('../../static/images/mint/tusd.svg'),
						coin: 'TUSD',
						fromNum: '',
						showSelect: false,
						balance: 19921849.12387
					},
					{
						url: 'https://mstable.app/static/media/USDT.aaa204b0.svg',
						coin: 'USDT',
						fromNum: '',
						showSelect: false,
						balance: 19921849.12387
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
				}
			}
		},
		mounted() {
			/*this.intervalId = setInterval(async () => {

				this.updataBalance().then(d => {

				})

			}, 1000)*/
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
		},
		methods: {
			stateFormat_(num) {
				return stateFormat(num)
			},
			handlerSelect(index) {
				for (let i in this.selectCoinList) {
					if (i == index) {
						this.selectCoinList[i].showSelect = !this.selectCoinList[i].showSelect;
					}
				}
				this.fromInfo.showSelect = !this.fromInfo.showSelect
			},
			/*handlerSelect0 (){
              this.fromInfo.showSelect = !this.fromInfo.showSelect
            },
            handlerSelect1 (){
              this.fromInfo.showSelect = !this.fromInfo.showSelect
            },
            handlerSelect2 (){
              this.fromInfo2.showSelect = !this.fromInfo2.showSelect
            },
            handlerSelect3 (){
              this.fromInfo3.showSelect = !this.fromInfo3.showSelect
            },*/

			handlerSelectCoin(index) {
				//this.currCoin = item
				for (let i in this.selectCoinList) {
					if (i == index) {
						this.selectCoinList[i].showSelect = !this.selectCoinList[i].showSelect;
					}
				}
			},
			handlerSelectCoin2(item) {
				this.currCoin2 = item
			},
			handlerSelectCoin3(item) {
				this.currCoin3 = item
			},
			handleShowReward() {
				this.showNews = false;
				this.showReward = true;
			},
			handleHideReward() {
				this.showNews = true;
				this.showReward = false;
			},
			handleMint() {
				this.isLoading = true;
			},
			handleMint2() {
				this.isLoading2 = true;
			},
			handleApprove() {
				this.successedTips.isShow = true;
			},
			hideClickWrapper() {
				if (document.querySelector('.selectCoinList')) {
					if (this.fromInfo.showSelect) {
						this.$nextTick(() => {
							this.fromInfo.showSelect = false
						})
					}
					if (this.fromInfo2.showSelect) {
						this.$nextTick(() => {
							this.fromInfo2.showSelect = false
						})
					}
					if (this.fromInfo3.showSelect) {
						this.$nextTick(() => {
							this.fromInfo3.showSelect = false
						})
					}
				}
			},
			async updataBalance(name) {
				/*for(var i in this.balances){
                      var balance_ =  await balanceOf(this.balances[i].name);
                      this.balances[i].balance = !balance_ ? 0 :balance_;
                      if(name == solidityConfig.usdList[i]){

                      }
                    }*/

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
