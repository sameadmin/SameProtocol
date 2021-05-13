<template>
    <div class="mb-10">
        <div class="fromInfo flex">
            <div class="fromInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
                <div class="flex-1 ml-20 text-left mr-12">
                    <div class="fromDesc font-family-regular font-weight-4 color2">To</div>
                    <el-input v-model="currCoin.fromNum" :disabled="isDisabled" placeholder="0.00"></el-input>
                </div>
                <div class="max border-radius-8 color2 font-family-bold mr-12" v-if="showMax" @click="max(currCoin.approve)">MAX</div>
                <el-button class="approveBtn border-radius-8 color2 font-family-bold" v-if="showApprove" @click="handleApprove(currCoin.coin)" :disabled="currCoin.approve" :loading="isLoadingApproves" >Approve</el-button>
            </div>
            <div class="fromInfo-r flex flex-align-items-center font-14 color3 font-family-bold font-weight-b"
                 @click.stop="handlerSelect">
                <div class="currCoinInfo flex flex-justify-content-between">
                    <div class="flex ml-18">
                        <img class="currCoinIcon" :src="currCoin.url"/>
                        <div class="currCoin ml-12">{{ currCoin.coin }}
                        </div>
                    </div>
                    <img class="arrow-up-icon mr-20" v-if="showSelect_"
                         :class="{'select-caret': currCoin.showSelect,'select-reverse': !currCoin.showSelect}"
                         src="../../static/images/mint/down.png"/>
                </div>
                <div class="selectCoinList bg1" v-show="currCoin.showSelect" v-if="showSelect_">
                    <div class="selectCoinItem flex flex-align-items-center" v-for="(item,index) in selectCoinList"
                         :key="index"
                         :class="{'activeCoinItem': currCoin.coin == item.coin }" @click="handlerSelectCoin(item)">
                        <img class="currCoinIcon ml-18" :src="item.url"/>
                        <div class="currCoin font-14 color3 font-family-bold font-weight-b ml-12"
                             :class="{'activeCoin': currCoin.coin == item.coin }">{{ item.coin }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!-- <div class="balance font-family-regular font-weight-4 text-left border-r border-l border-b">Balance：{{ stateFormat_(currCoin.balance,6) }}
        </div>-->
        <div class="balance flex flex-align-items-center font-family-regular font-weight-4 text-left border-r border-l border-b">Balance：
            <div v-if="currCoin.balance" >Balance：{{ stateFormat_(currCoin.balance,6) }}</div>
            <img v-else class="loadingIcon" src="../../static/images/loading.gif" />
        </div>
        <h5 class="text-left" style="color: crimson" v-if="(currCoin.balance<currCoin.fromNum) && showerr">Current balance {{ stateFormat_(currCoin.balance,6) }} ,Insufficient amount</h5>
		<Tips :showTips="approveSuccessfullyTips"></Tips>
    </div>
</template>

<script>
	import {stateFormat} from '@/common/utils'
	import {remove0,goApprove} from '../../src/assets/js/components'
	import Tips from '@/components/Tips'
	export default {
		name: 'FromItem',
		data() {
			return {
				isLoadingApproves:false,
				approveSuccessfullyTips: this.globalTips.approveSuccessfullyTips
            }
		},
		watch: {
			'currCoin.fromNum'() {
				this.currCoin.fromNum = remove0(this.currCoin.fromNum);
			},
			'approveSuccessfullyTips.isShow'(newVal, oldVal) {
				if (newVal) {
					this.tipsTimer = setTimeout(() => {
						this.approveSuccessfullyTips.isShow = false;
					}, 2500)
				}
			},
		},
		props: {
			/*fromInfo: Object,*/
			currCoin: Object,
			selectCoinList: Array,
			isDisabled: Boolean,
			showSelect_: Boolean,
			showMax: Boolean,
			showApprove: Boolean,
			showerr: Boolean,
            type:String

		},
		components: {
			Tips
		},
		methods: {
			stateFormat_(num,d) {
				return stateFormat(num,d)
			},
			handlerSelect() {
				this.$emit('handlerSelect')
			},
			handlerSelectCoin(item) {
				this.$emit('handlerSelectCoin', item)
			},
			max(approveType) {
				if(!approveType){
					return 0;
                }
				this.currCoin.fromNum = this.currCoin.balance;
				return this.currCoin.fromNum;
			},
			async handleApprove(coinName) {
				await this.goApprove(coinName);
			},
			async goApprove(coinName){
				this.isLoadingApproves = true;
				let info = await goApprove(coinName.toLowerCase(),10000000000);
				this.isLoadingApproves = false;
				if(info.success){
					this.approveSuccessfullyTips.isShow = true;
				}else {
					this.failedTips.isShow = true;
				}
			},

		},
		mounted(){

        },
		beforeDestroy() {
			if(this.intervalId){
				clearInterval(this.intervalId)
			}
		},
	}
</script>

<style scoped>
    .fromInfo {
        height: 54px;
        padding: 10px 0;
    }

    .fromInfo {
        border: 1px solid rgba(0, 0, 0, 0.08);
    }

    .fromInfo {
        border-radius: 8px 8px 0px 0px;
    }

    .fromInfo-r {
        position: relative;
    }

    .fromInfo-r {
        width: 176px;
        border-left: 1px solid rgba(0, 0, 0, 0.08);
    }

    .max:hover,
    .fromInfo-r:hover {
        cursor: pointer;
    }

	.fromInfo-r:hover {
	    color: #1F2BFF;
	}

    .max {
		height: 30px;
		line-height: 30px;
        padding-left: 8px;
        padding-right: 10px;
        border: 1px solid rgba(0, 0, 0, 0.08);
    }

	.max:hover {
		color: #1F2BFF;
		border: 1px solid #1F2BFF;
	}

	.approveBtn{
		height: 32px;
		margin-right: 6px;
	}

    .balance {
        height: 40px;
        line-height: 40px;
        padding-left: 18px;
    }

    .currCoinIcon, .arrow-up-icon {
        width: 20px;
        height: 20px;
    }

    .currCoinInfo {
        width: 100%;
    }

    .selectCoinList {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 999;
        border-radius: 8px;
        box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
    }

    .selectCoinItem {
        height: 40px;
    }

    .activeCoinItem, .selectCoinItem:hover {
        background: #F3F4FF;
    }

    .activeCoin {
        color: #1F2BFF;
    }

    .container {
        position: relative;
    }

	/deep/ .el-button{
		border-radius: 8px;
		padding: 0 12px;
	}
</style>
