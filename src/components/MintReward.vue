<template>
  <div v-show="showReward" class="rewardContainer bg1 border-radius-32 font-18">
    <div class="celebrate flex flex-align-items-center flex-justify-content-between border-b">
      <div class="flex flex-align-items-center">
        <img class="celebrateIcon" src="../../static/images/mint/celebrate.png"/>
        <div class="ml-18 color2 fontWeight-6 font-family-semiBold">Mint Reward</div>
      </div>
      <img class="rightIcon" src="../../static/images/mint/down_.png" @click="handleHideReward"/>
    </div>
    <div class="mt-10 flex flex-justify-content-center">
      <img class="coinIcon" src="../../static/images/mint/same.svg"/>
      <div class="ml-10 color2 fontWeight-6 font-family-semiBold">Mint Reward</div>
    </div>
    <div class="RewardBalance mt-10 flex flex-justify-content-center color2 fontWeight-6 font-family-semiBold">{{/*FormatNoE*/(stateFormat_(myRewards))}}</div>
    <el-button class="claimBtn mt-20 color5 fontWeight-b font-family-bold border-radius-8"
         @click="mintClaim()">Claim</el-button>

    <div class="percentItem" >
      <div class="mt-20 flex flex-justify-content-between font-14">
        <div class="color2 fontWeight-4 font-family-regular">Countdown(Blocks):</div>
        <div class="color6 fontWeight-b font-family-bold">{{nextDrawBlocks}} Blocks ({{mintRewardInterval}})</div>
      </div>
      <!---->
      <el-progress class="mt-10" :percentage="countdownPercentage_" :color="'#1F2BFF'" :show-text="false" :stroke-width="10"></el-progress>
    </div>

    <div class="percentItem" >
      <div class="mt-20 flex flex-justify-content-between font-14">
        <div class="color2 fontWeight-4 font-family-regular">Total Minted Rewards:</div>
        <div class="color6 fontWeight-b font-family-bold">{{/*FormatNoE*/(stateFormat_(totalAwards))}} SAME</div>
      </div>
      <!--<el-progress class="mt-10" :percentage="42" :color="'#1F2BFF'" :show-text="false" :stroke-width="10"></el-progress>-->
    </div>

    <div class="records mt-20 border-radius-8">
      <div class="recordTitle font-24 color1 fontWeight-b font-family-bold text-left">NEXT ROUND</div>
      <div class="recordList">
        <div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Total Minted:</div>
          <div class="recordItem-r fontWeight-b font-family-bold">{{totalMintAmt_}} SameUSD</div>
        </div>
        <div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Your Minted:</div>
          <div class="recordItem-r fontWeight-b font-family-bold">{{totalPerMintAmt_}} SameUSD</div>
        </div>
        <div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Your Rewards:</div>
          <div class="recordItem-r rewardsBtn color5 fontWeight-b font-family-bold">{{nextRoundRewards_}} SAME</div>
        </div>
        <!--<div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Countdown(Blocks):</div>
          <div class="recordItem-r fontWeight-b font-family-bold">14</div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getMintReward,
    getTotalAwards,
    nowBlockId,
    getMintRewardInterval,
    nowBlocks,
    nextDrawBlocks,
    totalMintAmt,
    totalPerMintAmt,
    initialSameCoin,
    bonusPoolPercentage,
    nextRoundRewards,
    countdownPercentage,
    mintClaim
  } from '../../src/assets/js/components'
  import { stateFormat,FormatNoE } from '@/common/utils'
  export default {
    name: 'MintReward',
    data (){
      return {
        myRewards: NaN,
        totalAwards:NaN,
        mintRewardInterval:NaN,
        totalMintAmt_:NaN,
        totalPerMintAmt_:NaN,
        nextRoundRewards_:NaN,
        nowBlocks_:NaN,
        countdownPercentage_:NaN,
        nextDrawBlocks:NaN,
        activeColor: '#1F2BFF',
        percentList: [
          {
            desc: 'Release Period:',
            val: '15 Blocks',
            percent: 30
          },
          {
            desc: 'Total Minted Rewards',
            val: '300 SAME',
            percent: 50
          }
        ]
      }
    },
    props: {
      showReward: Boolean
    },
    methods: {
      async getTotalAwards(){
        return await getTotalAwards();
      },
      stateFormat_(num) {
        return stateFormat(num);
      },
      FormatNoE(val){
        return FormatNoE(val);
      },
      handleHideReward (){
        this.$emit('handleHideReward');
      },
      //获取待领取samecoin奖励
      async getMintReward_(){
        return await getMintReward();
      },
      async getNextDrawBlocks(){
        return await nextDrawBlocks();
      },
      async nowBlocks(){
        return await nowBlocks();
      },
      async getMintRewardInterval(){
        return await getMintRewardInterval();
      },
      async countdownPercentage(){
        return await countdownPercentage();
      },
      async totalMintAmt(){
        return await totalMintAmt();
      },
      async totalPerMintAmt(){
        return await totalPerMintAmt();
      },
      async nextRoundRewards(){
        return await nextRoundRewards() ;
      },
      async mintClaim(){
        return await mintClaim() ;
      },
    },
    beforeDestroy() {
      if(this.intervalId){
        clearInterval(this.intervalId);
      }
      if(this.interval2Id){
        clearInterval(this.interval2Id);
      }
    },
    async mounted() {
      this.intervalId = setInterval(async () => {

        this.getMintReward_().then((d)=>{
          this.myRewards = d;
        });

        this.getTotalAwards().then((d)=>{
          this.totalAwards = d;
        })

        this.getNextDrawBlocks().then((d)=>{
          this.nextDrawBlocks = d;
        })

        this.nowBlocks().then((d)=>{
          this.nowBlocks_ = d;
        })

        //getMintRewardInterval
        this.getMintRewardInterval().then((d)=>{
          this.mintRewardInterval = d;
        })

        this.totalMintAmt().then((d)=>{
          this.totalMintAmt_ = d;
        })

        this.totalPerMintAmt().then((d)=>{
          this.totalPerMintAmt_ = d;
        })

        this.nextRoundRewards().then((d)=>{
          this.nextRoundRewards_ = d;
        })


      }, 1000)


      this.interval2Id = setInterval(async () => {

        this.countdownPercentage_ = (await this.countdownPercentage()) * 100;

      }, 1000)


    },
    async created () {
      this.myRewards = await this.getMintReward_();

    }

  }
</script>

<style scoped>
  .rewardContainer{
    position: absolute;
    right: 0;
    top: 58px;
    width: 366px;
    /*height: 680px;*/
    box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
    padding: 20px;
  }
  .celebrate{
    padding-bottom: 18px;
  }
  .celebrateIcon{
    width: 40px;
    height: 40px;
  }
  .rightIcon{
    width: 24px;
    height: 24px;
  }
  .claimBtn{
    height: 60px;
    line-height: 60px;
    background: #1F2BFF;
  }
  .coinIcon{
    width: 20px;
    height: 20px;
  }
  .RewardBalance{
    font-size: 48px;
  }
  .records{
    background: #FFD73A;
    padding: 0 10px 6px 10px;
  }
  .recordTitle{
    height: 56px;
    line-height: 56px;
  }
  .recordItem{
    height: 42px;
  }
  .rewardsBtn{
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background: #000000;
    border-radius: 15px;
  }
  .rightIcon:hover,
  .claimBtn:hover{
    cursor: pointer;
  }
  .claimBtn:hover{
    opacity: 0.6;
  }
  @media only screen and (max-width: 1400px) {
    .rewardContainer{
      width: 306px;
    }
  }
  @media only screen and (max-width: 1280px) {
    .rewardContainer{
      width: 266px;
    }
    .claimBtn{
      height: 48px;
      line-height: 48px;
    }
  }
  /deep/ .el-progress-bar__outer{
    background: #EAEAEA;
  }
</style>
