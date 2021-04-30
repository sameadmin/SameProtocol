<template>
  <div class="pageContainer flex flex-direction-column">
    <Header :activeIndex="activeIndex"></Header>
    <el-main class="bg2">
      <div class="container flex flex-justify-content-center">
        <div class="stackContainer font-14 color1">
          <MintHeader :headerInfo="headerInfo"></MintHeader>
          <div class="stackList bg1 border-radius-8">
            <div class="stackListHeader flex bg3 fontWeight-b font-family-bold" ><!--@click="test"-->
              <div class="stackListHeaderItem mt-20 width-294 pl-24 text-left">Save</div>
              <div class="stackListHeaderItem mt-20 width-148 pl-20 text-left border_l">APY</div>
              <div class="stackListHeaderItem mt-20 width-198 pl-20 text-left border_l">Yield per $1,000</div>
              <div class="stackListHeaderItem mt-20 width-176 pr-20 text-right border_l">
                <el-popover
                        placement="top-start"
                        trigger="hover"
                        content="The total value of funds inthis save pool.">
                  <el-button slot="reference">Liquidity</el-button>
                </el-popover>
              </div>
              <div class="stackListHeaderItem mt-20 width-168 pl-20 text-left border_l">Saved</div>
              <div class="stackListHeaderItem mt-20 flex-1 pl-20 text-left border_l">Earnings</div>
            </div>
            <div class="stackItemBox border-b" v-for="(item,index) in stackList" :key="index">
              <div class="stackItem flex flex-align-items-center fontWeight-4 font-family-regular"
                   @click="handlerStakeDetails(item,0)">
                <div class="stackItem_ width-294 pl-24 text-left flex flex-align-items-center">
                  <img class="coinIcon" src="../../static/images/mint/sameusd.png"/>
                  <!-- <img class="coinIcon coinIcon_" src="../../static/images/mint/samecoin.png"/>-->
                  <div class="stackDesc color6">{{item.stack }}</div>
                </div>
                <div class="width-148 pl-20 text-left fontWeight-b font-family-bold">{{ item.apy }}%</div>
                <div class="width-198 pl-20 text-left">{{ item.yidld }} SAME/DAY</div>
                <div class="width-176 pr-20 text-right">
                  <div class="color2 fontWeight-b font-family-bold">${{ stateFormat_(item.liquidity,4) }}</div>
                  <div class="color3 mt-2">{{ stateFormat_(item.liquidity,6) }} SameUSD</div>
                  <!--<div class="color3 mt-2">{{ stateFormat_(item.liquidity_) }} SAME</div>-->
                </div>
                <div class="width-168 pl-20 text-left">
                  <div class="color2">${{ stateFormat_(item.stacked,6) }}</div>
                  <div class="color3 mt-2"><!--{{ stateFormat_(item.stacked_) }}--> SameUSD</div>
                </div>
                <div class="flex-1 pl-20 text-left flex flex-justify-content-between">
                  <div class="">
                    <div class="color2">{{ stateFormat_(item.earning,6) }}</div>
                    <div class="color3 mt-2">{{ item.earning_ }}</div>
                  </div>
                  <div class="flex flex-align-items-center font-12 font-family-regular font-weight-4">
					  <div class="approveBtn earningBtn border-radius-8 color6" style="padding: 0 8px!important;"  @click.stop="handlerStakeDetails(item,0)">Save</div>
					  <div class="stakeBtn earningBtn border-radius-8 ml-20 color7 mr-12" style="padding: 0 8px!important;" @click.stop="handlerStakeDetails(item,1)">Withdraw</div>
                    <!-- <img class="earningIcon mr-20" src="../../static/images/stake/more.png" @click.stop="handlerStakeDetails(item)"/> -->
                    <!-- <img class="earningIcon mr-30" :class="{'select-caret': showDetail,'select-reverse': !showDetail}"
                              src="../../static/images/mint/down.png" @click="handlerStakeDetails(item)"/> -->
                  </div>
                </div>
              </div>
              <!--<el-collapse-transition>
                <div v-show="item.isShow">
                  <div class="detail-box">detail</div>
                </div>
              </el-collapse-transition>-->
            </div>
          </div>
        </div>
      </div>
    </el-main>
    <Footer></Footer>
    <el-dialog
            :visible.sync="showDetail"
            width="500px"
            :center="false"
            :before-close="handleClose">
      <div class="">
        <div class="border-b">
          <div class="detailTab flex ml-20 color3 font-18 font-family-regular fontWeight-4">
            <div class="detailtem flex-1" :class="{'detailActiveItem font-family-bold fontWeight-b color1' : curr == index }"
			v-for="(item,index) in detailTab" :key="index"
                 @click="curr=index">{{ item }}</div>
          </div>
        </div>
        <div class="mt-24 mr-20 ml-20">

                    <!--<FromItem v-if="curr==0" :fromInfo="fromInfo" :currCoin="currCoin" :selectCoinList="selectCoinList"
                     @handlerSelect="handlerSelect" @handlerSelectCoin="handlerSelectCoin"></FromItem>-->
                    <!--:selectCoinList="selectCoinList"-->
                    <FromItem v-if="curr==0" :showSelect_="false" :currCoin="currCoin"
                              :showMax="true"
                              :showApprove="false"
                              :showerr="true"
                              :isDisabled="!currCoin.approve"
                              @handlerSelect="handlerSelect()"
                              @handlerSelectCoin="handlerSelectCoin"></FromItem>

                    <div v-else class="withdrawInfo border flex mb-10">
                        <div class="flex-1 color1 pl-20">
                            <div class="flex mt-20">
                                <img class="currCoinIcon" src="../../static/images/mint/sameusd.png"/>
                                <div class="ml-10 font-16 font-family-regular fontWeight-4">SameUSD</div>
                            </div>
                            <div class="mt-20 font-24 font-family-bold fontWeight-b text-left">{{
                                stateFormat_(stackList[0].stacked,6) }}
                            </div>
                        </div>
                        <div class="flex-1 border-l color1 pl-20">
                            <div class="flex mt-20">
                                <img class="currCoinIcon" src="../../static/images/mint/samecoin.png"/>
                                <div class="ml-10 font-16 font-family-regular fontWeight-4">SameCoin</div>
                            </div>
                            <div class="mt-20 font-24 font-family-bold fontWeight-b text-left">{{
                                stateFormat_(stackList[0].earning,6) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer text-center font-14 font-family-bold font-weight-b">
        <div v-if="curr==0" class="flex flex-justify-content-end">
          <el-button class="approveBtn border-radius-8 color6" @click="goApprove_('sameUsd')"
                     :disabled="currCoin.approve" :loading="isLoadingApproves">Approve</el-button>
          <el-button class="stakeBtn border-radius-8 ml-20 color7" @click="saveDeposit(currCoin.fromNum)"
                     :disabled="isLoadingSaveDeposit" :loading="isLoadingSaveDeposit">Save</el-button>
        </div>
        <div v-else class="flex flex-justify-content-end">
          <el-button class="approveBtn border-radius-8 color6" @click="saveClaimAllRewards()"
                     :disabled="isLoadingSaveClaim" :loading="isLoadingSaveClaim">Claim All Rewards</el-button>
          <el-button class="stakeBtn border-radius-8 ml-20 color7" @click="saveWithdraw(stackList[0].stacked)"
                     :disabled="isLoadingSaveWithdraw" :loading="isLoadingSaveWithdraw">Withdraw All Above</el-button>
        </div>
      </span>
        </el-dialog>
        <Tips :showTips="successedTips"></Tips>
        <Tips :showTips="failedTips"></Tips>
        <Tips :showTips="waitingTips"></Tips>
    </div>
</template>

<script>
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import Tips from '@/components/Tips'
	import MintHeader from '@/components/MintHeader'
	import FromItem from '@/components/FromItem'
	import {stateFormat} from '@/common/utils'
	import solidityConfig from '../../src/assets/solidityConfig'

	import {
		SaveRate,
		yieldPer,
		Annualized,
		totalSaveLiquidity,
		saveStaked,
		saveEarnings,
		getBalance,
		checkApprove,
		goApprove_,
		saveDeposit,
		saveWithdraw,
		saveClaimAllRewards
	} from '../../src/assets/js/components'

	export default {
		name: 'save',
		watch: {
			'successedTips.isShow'(newVal, oldVal) {
				if (newVal) {
					this.tipsTimer = setTimeout(() => {
						this.successedTips.isShow = false;
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
		data() {
			return {
				isLoadingApproves: false,
				isLoadingSaveClaim: false,
				isLoadingSaveDeposit: false,
				isLoadingSaveWithdraw: false,
				activeIndex: '1',
				headerInfo: {
					icon: require('../../static/images/save.png'),
					title: 'Save',
					desc: 'Save SameUSD to earn Samecoin'
				},
				stackList: [
					{
						stack: 'SameUSD',
						apy: NaN,
						yidld: NaN,
						liquidity: NaN,
						liquidity_: NaN,
						stacked: NaN,
						stacked_: NaN,
						earning: NaN,
						earning_: 'SAME',
						isShow: true
					},

				],
				showDetail: false,
				fromInfo: {
					fromNum: '',
					showSelect: false,
					balance: 19921849.12387
				},
				currCoin: {
					url: require('../../static/images/mint/sameusd.png'),
					coin: 'SameUSD',
					fromNum: '',
					approve: false,
					showSelect: false,
					balance: NaN
				},
				selectCoinList: [
					{
						url: require('../../static/images/mint/sameusd.png'),
						coin: 'SameUSD',
						fromNum: '',
						approve: false,
						showSelect: false,
						balance: NaN
					},
				],
				detailTab: ["Save", "Claim/Withdraw"],
				curr: 0,
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
			}
		},
		components: {
			Header,
			Footer,
			MintHeader,
			Tips,
			FromItem
		},

		async created() {
			await this.updataYieldPer();
			await this.Annualized();
			await this.totalSaveLiquidity();
			await this.saveStaked();
			await this.saveEarnings();
			await this.updataCurrCoin();
		},
		mounted() {
			this.intervalId = setInterval(async () => {
				/*await this.updataYieldPer();
                await this.Annualized();
                */
				await this.totalSaveLiquidity();
				await this.saveStaked();
				await this.saveEarnings();
				await this.updataCurrCoin();
			}, 1000)
		},
		beforeDestroy() {
			if (this.intervalId) {
				clearInterval(this.intervalId)
			}
		},
		methods: {
			test() {
				/* this.$notify.error({
                  title: '提示',
                  message: '错误消息'
                }); */
				/* this.$notify({
                  title: '提示',
                  message: '成功消息',
                  type: 'success'
                }); */
				this.$notify({
					title: '提示',
					message: '警告消息',
					type: 'warning'
				});
			},
			stateFormat_(num,d) {
				return stateFormat(num,d)
			},
			handlerStakeDetails(item, curr) {
				this.curr = curr
				this.showDetail = true
			},
			handleClose() {
				this.showDetail = false
			},
			handlerSelect() {
				this.fromInfo.showSelect = !this.fromInfo.showSelect
			},
			handlerSelectCoin(item) {
				this.currCoin = item;
			},
			async updataYieldPer() {
				this.stackList[0].yidld = (await yieldPer(1000000000000000000000)).toFixed(4);
				return this.stackList[0].yidld;
			},
			async Annualized() {
				this.stackList[0].apy = (await Annualized(1000000000000000000000)).toFixed(2);
				return this.stackList[0].apy;
			},
			async totalSaveLiquidity() {
				this.stackList[0].liquidity = (await totalSaveLiquidity());
				return this.stackList[0].liquidity;
			},
			async saveStaked() {
				this.stackList[0].stacked = (await saveStaked());
				return this.stackList[0].stacked;
			},
			async saveEarnings() {
				this.stackList[0].earning = (await saveEarnings());
				return this.stackList[0].earning;
			},
			async checkApprove(name, fromAddr) {
				return await checkApprove(name, fromAddr);
			},
			async updataCurrCoin() {
				this.currCoin.balance = await getBalance('sameUsd');
				this.currCoin.approve = await this.checkApprove('sameUsd', solidityConfig.ContractMsg.saveRewardLogicProxy.address);
			},
			async goApprove_(coinName) {
				this.isLoadingApproves = true;
				let info = await goApprove_(coinName, 10000000000, solidityConfig.ContractMsg.saveRewardLogicProxy.address);
				this.isLoadingApproves = false;
				if (info.success) {
					this.successedTips.isShow = true;
					showDetail = false
				} else {
					this.failedTips.isShow = true;
				}
			},
			async saveDeposit(val) {
				this.isLoadingSaveDeposit = true;
				let info = await saveDeposit(val);
				this.isLoadingSaveDeposit = false;
				if (info.success) {
					this.successedTips.isShow = true;
					showDetail = false
				} else {
					this.failedTips.isShow = true;
				}
			},
			async saveWithdraw(val) {
				this.isLoadingSaveWithdraw = true;
				let info = await saveWithdraw(val);
				this.isLoadingSaveWithdraw = false;
				if (info.success) {
					this.successedTips.isShow = true;
					showDetail = false
				} else {
					this.failedTips.isShow = true;
				}
			},
			async saveClaimAllRewards() {
				this.isLoadingSaveClaim = true;
				let info = await saveClaimAllRewards();
				this.isLoadingSaveClaim = false;
				if (info.success) {
					this.successedTips.isShow = true;
					showDetail = false
				} else {
					this.failedTips.isShow = true;
				}
			}
		},

	}
</script>

<style scoped>
    @import "../assets/stake.css";

    /deep/ .el-dialog {
        border-radius: 16px;
        box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
    }

    /deep/ .el-dialog__header {
        padding: 0;
    }

    /deep/ .el-dialog__body {
        padding: 0;
    }

    /deep/ .el-dialog__footer {
        padding: 10px 20px 20px 20px;
    }

    /deep/ .el-input__inner {
        border: none !important;
        padding: 0;
        color: #262525;
        font-size: 24px;
        font-family: 'Inter Bold';
    }

    /deep/ .mintHeader {
        justify-content: center;
    }

    /deep/ .el-button {
        border: none;
        padding: 0;
        background: transparent;
        font-family: 'Inter Bold';
        font-weight: bold;
        color: #000000;
    }

    .el-button:focus, .el-button:hover {
        background: transparent;
        color: #000000;
        border-color: transparent;
    }
</style>
<style>
    .el-popover--plain {
        padding: 10px !important;
    }

    .el-popover {
        width: 148px;
        min-width: 148px !important;
        border: none !important;
        box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
        font-size: 12px;
        font-weight: 400;
        font-family: 'Inter Regular';
        color: rgba(0, 0, 0, 0.54);
    }
</style>
