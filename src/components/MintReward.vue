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
    <div class="RewardBalance mt-10 flex flex-justify-content-center color2 fontWeight-6 font-family-semiBold">101.2857</div>
    <div class="claimBtn mt-20 color5 fontWeight-b font-family-bold border-radius-8">Claim</div>
    <div class="percentItem" v-for="(item,index) in percentList" :key="index">
      <div class="mt-20 flex flex-justify-content-between font-14">
        <div class="color2 fontWeight-4 font-family-regular">{{ item.desc }}</div>
        <div class="color6 fontWeight-b font-family-bold">{{ item.val }}</div>
      </div>
      <el-progress class="mt-10" :percentage="item.percent" :color="activeColor" :show-text="false" :stroke-width="10"></el-progress>
    </div>
    <div class="records mt-20 border-radius-8">
      <div class="recordTitle font-24 color1 fontWeight-b font-family-bold text-left">NEXT ROUND</div>
      <div class="recordList">
        <div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Total Minted:</div>
          <div class="recordItem-r fontWeight-b font-family-bold">100000 SameUSD</div>
        </div>
        <div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Your Minted:</div>
          <div class="recordItem-r fontWeight-b font-family-bold">500 SameUSD</div>
        </div>
        <div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Your Rewards:</div>
          <div class="recordItem-r rewardsBtn color5 fontWeight-b font-family-bold">1.5 SAME</div>
        </div>
        <div class="recordItem flex flex-justify-content-between flex-align-items-center font-14 color1">
          <div class="recordItem-l fontWeight-4 font-family-regular">Countdown:</div>
          <div class="recordItem-r fontWeight-b font-family-bold">14:45</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MintReward',
    data (){
      return {
        activeColor: '#1F2BFF',
        percentList: [
          {
            desc: 'Release Period:',
            val: '15 min',
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
      handleHideReward (){
        this.$emit('handleHideReward')
      }
    }
  }
</script>

<style scoped>
  .rewardContainer{
    position: absolute;
    right: 0;
    bottom: 44px;
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
  .rewardsBtn:hover{
    cursor: pointer;
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
