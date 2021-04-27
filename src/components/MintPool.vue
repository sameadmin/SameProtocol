<template>
  <div class="mintPool bg1 border-radius-8 color1">
    <div class="title font-18 fontWeight-b font-family-bold text-left pl-24">Mint Pool</div>
    <div class="poolList font-14 text-left">
      <div class="poolHeader flex flex-align-items-center bg3 fontWeight-b font-family-bold">
        <div class="poolHeaderItem flex-1 pl-24">Coin</div>
        <div class="poolHeaderItem w-148 pl-20 border_l">Pool Liquidity</div>
        <div class="poolHeaderItem w-152 pl-20 border_l">Staked</div>
      </div>
      <div class="poolItem flex flex-align-items-center border-b fontWeight-4 font-family-regular" v-for="(item,index) in poolList" :key="index">
        <div class="flex-1 flex flex-align-items-center pl-24">
          <img class="poolIcon" :src="item.url" />
          <div class="ml-20 color6">{{ item.coin }}</div>
        </div>
        <div class="w-148 pl-20">{{ item.liquidity }}</div>
        <div class="w-152 pl-20 color2">{{(item.liquidity/sameUsdTotal).toFixed(2)}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getBassets} from '../../src/assets/js/components';
  export default {
    name: 'MintPool',
    data () {
      return {
        sameUsdTotal:null,
        poolList: [
          {
            url: require('../../static/images/mint/busd.png'),
            coin: 'BUSD',
            liquidity: NaN,
            staked: NaN
          },
          {
            url: 'https://mstable.app/static/media/USDC.fcebf28c.svg',
            coin: 'USDC',
            liquidity: NaN,
            staked: NaN
          },
          {
            url: 'https://mstable.app/static/media/USDT.aaa204b0.svg',
            coin: 'USDT',
            liquidity: NaN,
            staked: NaN
          }
        ]
      }
    },
    props: {

    },
    components: {

    },
    methods: {
      async getBassets(){
        var bassetsInfo = await getBassets();
        var tolat = 0;
        for(let i in bassetsInfo){
          this.poolList[i].liquidity = bassetsInfo[i];
          tolat += bassetsInfo[i];
        }
        this.sameUsdTotal = tolat;
        return bassetsInfo;
      }
    },
    async mounted() {
      this.intervalId = setInterval( async ()=>{
        this.getBassets().then((d)=>{
          this.bassetsInfo = d;
        });
      },6000)

    },
    async created () {
      this.bassetsInfo = await this.getBassets();
    }
  }
</script>

<style scoped>
  .mintPool{
    width: 560px;
    margin-top: 40px;
    padding-bottom: 20px;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
  }
  .title{
    line-height: 60px;
  }
  .title,.poolHeader{
    height: 60px;
  }
  .poolHeaderItem{
    height: 40px;
    line-height: 40px;
  }
  .poolItem{
    height: 80px;
  }
  .poolItem:last-child{
    border-bottom: none;
  }
  .poolIcon{
    width: 40px;
    height: 40px;
  }
  .w-148{
    width: 148px;
  }
  .w-152{
    width: 152px;
  }
</style>
