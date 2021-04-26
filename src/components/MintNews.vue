<template>
  <div v-show="showNews" class="newsContainer bg1 border-radius-8 font-18">
    <div class="celebrate flex flex-align-items-center flex-justify-content-between border-b">
      <div class="flex flex-align-items-center">
        <img class="celebrateIcon" src="../../static/images/mint/celebrate.png"/>
        <div class="ml-18 color2 fontWeight-6 font-family-semiBold">Mint Reward</div>
      </div>
      <img class="rightIcon" src="../../static/images/mint/right.png" @click="handleShowReward"/>
    </div>
    <div class="claimBtn mt-24 color5 fontWeight-b font-family-bold border-radius-8"
         @click="handleShowReward">Claim Now</div>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data (){
      return {

      }
    },
    props: {
      showNews: Boolean
    },
    methods: {
      handleShowReward (){
        this.$emit('handleShowReward')
      }
    }
  }
</script>

<style scoped>
  .newsContainer{
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 260px;
    /*height: 148px;*/
    box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
    padding: 10px 20px 20px 20px;
  }
  .celebrate{
    height: 72px;
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
    height: 48px;
    line-height: 48px;
    background: #129BFF;
  }
  .rightIcon:hover,
  .claimBtn:hover{
    cursor: pointer;
  }
  .claimBtn:hover{
    opacity: 0.6;
  }
  @media only screen and (max-width: 1280px) {
    .celebrate{
      height: 60px;
    }
    .claimBtn{
      height: 42px;
      line-height: 42px;
    }
    .newsContainer{
      width: 210px;
    }
  }
  @media only screen and (max-width: 980px) {
    .newsContainer{
      width: 160px;
    }
  }
</style>
