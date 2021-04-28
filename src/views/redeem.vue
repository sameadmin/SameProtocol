<template>
  <div class="pageContainer flex flex-direction-column" @click="hideClickWrapper">
    <Header :activeIndex="activeIndex"></Header>
    <el-main class="bg2">
      <div class="container flex flex-justify-content-center">
        <div class="mintContainer">
          <MintHeader :headerInfo="headerInfo"></MintHeader>
          <div class="mintBox bg1 border-radius-32">
            <div class="mintTab flex color2 font-18 font-family-bold">
              <div class="tabItem flex-1" :class="{'activeItem color1' : curr == 0 }" @click="curr=0">SameUSD Amount</div>
              <div class="tabItem flex-1" :class="{'activeItem2 color1' : curr == 1 }" @click="curr=1">Stablecoins Amount</div>
            </div>
            <div v-if="curr == 0" class="infoBox font-14">
              <FromItem :fromInfo="fromInfo" :isDisabled="isLoading"></FromItem>
              <img class="toIcon mt-10" src="../../static/images/mint/to.png" />
              <div class="toInfoBox mt-10">
                <div class="toInfo flex border-b">
                  <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
                    <div class="flex-1 ml-20 text-left mr-12">
                      <div class="toDesc font-family-regular font-weight-4 color2">To</div>
                      <el-input v-model="currCoin.num" :disabled="isLoading2" placeholder="0.00"></el-input>
                    </div>
					<div class="max border-radius-8 color2 font-family-bold mr-12" @click="max">MAX</div>
					<!-- <el-button class="approveBtn border-radius-8 color2 font-family-bold" @click="handleApprove(currCoin.coin)" 
					:disabled="isLoadingApproves" :loading="isLoadingApproves" >Approve</el-button> -->
                  </div>
                  <div class="toInfo-r flex flex-align-items-center" @click.stop="handlerSelect">
                    <div class="currCoinInfo flex flex-justify-content-between">
                        <div class="flex ml-18">
                            <img class="currCoinIcon" :src="currCoin.url"/>
                            <div class="currCoin font-14 color3 font-family-bold font-weight-b ml-12">{{ currCoin.coin }}
                            </div>
                        </div>
                        <img class="arrow-up-icon mr-20"
                             :class="{'select-caret': currCoin.showSelect,'select-reverse': !currCoin.showSelect}"
                             src="../../static/images/mint/down.png"/>
                    </div>
                    <div class="selectCoinList bg1" v-show="currCoin.showSelect">
                        <div class="selectCoinItem flex flex-align-items-center" v-for="(item,index) in selectCoinList" :key="index"
                             :class="{'activeCoinItem': currCoin.coin == item.coin }" @click.stop="handlerSelectCoin(item)">
                            <img class="currCoinIcon ml-18" :src="item.url"/>
                            <div class="currCoin font-14 color3 font-family-bold font-weight-b ml-12"
                                 :class="{'activeCoin': currCoin.coin == item.coin }">{{ item.coin }}
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
				<div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(currCoin.balance) }}</div>
              </div>
              <div class="operation flex flex-justify-content-end mt-24">
               <!-- <el-button class="operationBtn operationBtn_approve border-radius-8 color6 font-16 font-family-bold font-weight-b"
                           @click="handleApprove">Approve
                </el-button> -->
                <el-button class="operationBtn operationBtn_mint ml-20 border-radius-8 color7 font-16 font-family-bold font-weight-b"
                           :loading="isLoading" @click="handleMint">Mint
                </el-button>
              </div>
            </div>
            <div v-else class="infoBox font-14">
              <FromItem :fromInfo="fromInfo" :isDisabled="isLoading2"></FromItem>
              <img class="toIcon" src="../../static/images/mint/to.png" />
              <div class="toInfoBox mt-10" v-for="(temp,i) in selectCoinList" :key="i">
                <div class="toInfo flex border-b">
                  <div class="toInfo-l flex-1 flex flex-align-items-center flex-justify-content-between">
                    <div class="flex-1 ml-20 text-left mr-12">
                      <div class="toDesc font-family-regular font-weight-4 color2">To</div>
                      <el-input v-model="temp.num" :disabled="isLoading2" placeholder="0.00"></el-input>
                    </div>
					<div class="max border-radius-8 color2 font-family-bold mr-12" @click="max">MAX</div>
					<!-- <el-button class="approveBtn border-radius-8 color2 font-family-bold" @click="handleApprove(currCoin.coin)" 
					:disabled="isLoadingApproves" :loading="isLoadingApproves" >Approve</el-button> -->
                  </div>
                  <div class="toInfo-r toInfo-r-h flex flex-align-items-center">
                      <img class="currCoinIcon ml-18" :src="temp.url"/>
                      <div class="currCoin font-14 color4 font-family-bold font-weight-b ml-12">{{ temp.coin }}</div>
                  </div>
                </div>
				<div class="balance font-family-regular font-weight-4 text-left">Balance：{{ stateFormat_(temp.balance) }}</div>
              </div>
              <div class="operation flex flex-justify-content-end mt-24">
                <el-button class="operationBtn operationBtn_mint border-radius-8 color7 font-16 font-family-bold font-weight-b"
                           :loading="isLoading2" @click="handleMint2">Mint
                </el-button>
              </div>
            </div>
          </div>
          <div class="poolBox">
            <MintPool />
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
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import MintNews from '@/components/MintNews'
  import MintReward from '@/components/MintReward'
  import MintHeader from '@/components/MintHeader'
  import MintPool from '@/components/MintPool'
  import Tips from '@/components/Tips'
  import FromItem from '@/components/FromItem2'
  import { stateFormat } from '@/common/utils'
  export default {
    name: 'index',
    data () {
      return {
        headerInfo: {
          icon: require('../../static/images/redeem.png'),
          title: 'Redeem',
          desc: 'Convert SameUSD by Stablecoins'
        },
        isLoading: false,
        isLoading2: false,
        activeIndex: '5',
        curr: 0,
		isLoadingApproves: false,
        fromInfo: {
			balance: 19921.12387,
			url: require('../../static/images/mint/same.svg'),
			coin: 'SameUSD',
			num: ''
		},
        currCoin: {
			num: '',
			showSelect: false,
			balance: 100,
            url: require('../../static/images/mint/busd.png'),
            coin: 'BUSD'
        },
        selectCoinList: [
          {
			url: require('../../static/images/mint/busd.png'),
			coin: 'BUSD',
			num: '',
			balance: 19921849.12387,
			approve: false,
			showSelect: false,
			balance: 100
          },
          {
            url: require('../../static/images/mint/btc.svg'),
            coin: 'BTC',
			num: '',
			balance: 19921849.12388,
			approve: false,
			showSelect: false,
			balance: 200
          },
          {
            url: require('../../static/images/mint/same.svg'),
            coin: 'SAME',
			num: '',
			balance: 19921849.12389,
			approve: false,
			showSelect: false,
			balance: 300
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
      'successedTips.isShow' (newVal,oldVal) {
        if(newVal){
          this.timer = setTimeout(() => {
            this.successedTips.isShow = false;
          },2500)
        }else{
          clearTimeout(this.timer)
        }
      },
    },
    methods: {
      stateFormat_(num){
        return stateFormat(num)
      },
	  max (){
		  
	  },
      handlerSelect (){
        this.currCoin.showSelect = !this.currCoin.showSelect
      },
      handlerSelectCoin (item){
        this.currCoin = item
		if(this.currCoin.showSelect){
			this.currCoin.showSelect = false
		}
      },
	  handlerSelect2 (temp){
	    this.currCoin2= temp
		this.currCoin2.showSelect = !this.currCoin2.showSelect
	  },
	  handlerSelectCoin2 (item){
	    this.currCoin2 = item
		console.log(this.currCoin2)
		if(this.currCoin2.showSelect){
			this.currCoin2.showSelect = false
		}
	  },
      handleShowReward (){
        this.showNews = false
        this.showReward = true
      },
      handleHideReward (){
        this.showNews = true
        this.showReward = false
      },
      handleMint (){
        this.isLoading = true;
      },
      handleMint2 (){
        this.isLoading2 = true;
      },
      handleApprove(){
        this.successedTips.isShow = true;
      },
      hideClickWrapper() {
        if (document.querySelector('.selectCoinList')) {
          if(this.currCoin.showSelect){
            this.$nextTick(() => {
              this.currCoin.showSelect = false
            })
          }
        }
      },
    }
  }
</script>

<style scoped>
  @import '../assets/mint.css';
  .toInfo-r {
      position: relative;
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
  .max:hover,
  .toInfo-r:hover {
      cursor: pointer;
  }
  .toInfo-r-h:hover {
      cursor: auto !important;
  }
  .max {
  	height: 30px;
  	line-height: 30px;
      padding-left: 8px;
      padding-right: 10px;
      border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .approveBtn{
  	height: 32px;
  	margin-right: 6px;
  }
  /deep/ .el-button{
  	border-radius: 8px;
  	padding: 0 12px;
  }
  /deep/ .el-input__inner{
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
