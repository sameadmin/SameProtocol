<template>
  <div class="pageContainer flex flex-direction-column">
    <Header :activeIndex="activeIndex"></Header>
    <el-main class="bg2">
      <div class="container flex flex-justify-content-center">
        <div class="stackContainer font-14 color1">
          <MintHeader :headerInfo="headerInfo"></MintHeader>
          <div class="stackList bg1 border-radius-8">
            <div class="stackListHeader flex bg3 fontWeight-b font-family-bold">
              <div class="stackListHeaderItem mt-20 width-294 pl-24 text-left">Stake</div>
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
              <div class="stackListHeaderItem mt-20 width-168 pl-20 text-left border_l">Staked</div>
              <div class="stackListHeaderItem mt-20 flex-1 pl-20 text-left">Earnings</div>
            </div>
            <div class="stackItemBox border-b" v-for="(item,index) in stackList" :key="index">
              <div class="stackItem flex flex-align-items-center fontWeight-4 font-family-regular">
                <div class="stackItem_ width-294 pl-24 text-left flex flex-align-items-center">
                  <img class="coinIcon" src="../../static/images/mint/btc.svg"/>
                  <img class="coinIcon coinIcon_" src="../../static/images/mint/same.svg"/>
                  <div class="stackDesc color6">{{ item.stack }}</div>
                </div>
                <div class="width-148 pl-20 text-left fontWeight-b font-family-bold">{{ item.apy }}</div>
                <div class="width-198 pl-20 text-left">{{ item.yidld }}</div>
                <div class="width-176 pr-20 text-right">
                  <div class="color2 fontWeight-b font-family-bold">${{ stateFormat_(item.liquidity) }}</div>
                  <div class="color3 mt-2">{{ stateFormat_(item.liquidity) }} SameUSD</div>
                  <div class="color3 mt-2">{{ stateFormat_(item.liquidity_) }} SAME</div>
                </div>
                <div class="width-168 pl-20 text-left">
                  <div class="color2">${{ stateFormat_(item.stacked) }}</div>
                  <div class="color3 mt-2">{{ stateFormat_(item.stacked_) }} SameUSD</div>
                </div>
                <div class="flex-1 pl-20 text-left flex flex-justify-content-between">
                  <div class="">
                    <div class="color2">{{ stateFormat_(item.earning) }}</div>
                    <div class="color3 mt-2">{{ item.earning_ }}</div>
                  </div>
                  <div class="flex flex-align-items-center">
                    <img class="earningIcon mr-20" src="../../static/images/stake/more.png" @click="handlerStakeDetails(item)"/>
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
            <div class="detailtem flex-1" :class="{'detailActiveItem font-family-bold fontWeight-b color1' : curr == index }" v-for="(item,index) in detailTab" :key="index"
             @click="curr=index">{{ item }}</div>
          </div>
        </div>
        <div class="mt-24 mr-20 ml-20">
          <FromItem v-if="curr==0" :fromInfo="fromInfo" :currCoin="currCoin" :selectCoinList="selectCoinList"
           @handlerSelect="handlerSelect" @handlerSelectCoin="handlerSelectCoin"></FromItem>
          <div v-else class="withdrawInfo border flex mb-10">
             <div class="flex-1 color1 pl-20">
                <div class="flex mt-20">
                  <img class="currCoinIcon" src="../../static/images/mint/same.svg" />
                  <div class="ml-10 font-16 font-family-regular fontWeight-4">SAME</div>
                </div>
                <div class="mt-20 font-24 font-family-bold fontWeight-b text-left">{{ stateFormat_(1000) }}</div>
             </div>
             <div class="flex-1 border-l color1 pl-20">
                <div class="flex mt-20">
                  <img class="currCoinIcon" src="../../static/images/mint/same.svg" />
                  <div class="ml-10 font-16 font-family-regular fontWeight-4">SAME</div>
                </div>
                <div class="mt-20 font-24 font-family-bold fontWeight-b text-left">{{ stateFormat_(1000) }}</div>
             </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer text-center">
        <div v-if="curr==0" class="flex flex-justify-content-end">
          <div class="approveBtn" @click="showDetail = false">Approve</div>
          <div class="stakeBtn ml-20" @click="showDetail = false">Stake</div>
        </div>
        <div v-else class="flex flex-justify-content-end">
          <div class="approveBtn" @click="showDetail = false">Claim All Rewards</div>
          <div class="stakeBtn ml-20" @click="showDetail = false">Withdraw All Above</div>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import MintHeader from '@/components/MintHeader'
  import FromItem from '@/components/FromItem'
  import { stateFormat } from '@/common/utils'
  export default {
    name: 'save',
    data () {
      return {
        activeIndex: '1',
        headerInfo: {
          icon: require('../../static/images/save.png'),
          title: 'Save',
          desc: 'Save Samecoin-SameUSD LP token'
        },
        stackList: [
          {
            stack: 'Samecoin-SameUSD',
            apy: '+ 1742.31%',
            yidld: '1.578 SAME / Day',
            liquidity: 3663991,
            liquidity_: 52278,
            stacked: '100.5',
            stacked_: '10',
            earning: 150,
            earning_: 'SAME',
            isShow: true
          },
          {
            stack: 'Samecoin-SameUSD',
            apy: '+ 1742.31%',
            yidld: '1.578 SAME / Day',
            liquidity: 3663991,
            liquidity_: 52278,
            stacked: '100.5',
            stacked_: '10',
            earning: 150,
            earning_: 'SAME',
            isShow: false
          }
        ],
        showDetail: false,
        fromInfo: {
          fromNum: '',
          showSelect: false,
          balance: 19921849.12387
        },
        currCoin: {
          url: require('../../static/images/mint/eth.svg'),
          coin: 'ETH'
        },
        selectCoinList: [
          {
            url: require('../../static/images/mint/eth.svg'),
            coin: 'ETH'
          },
          {
            url: require('../../static/images/mint/btc.svg'),
            coin: 'BTC'
          },
          {
            url: require('../../static/images/mint/eth.svg'),
            coin: 'ETH'
          }
        ],
        detailTab: ["Stake/Approve","Claim/Withdraw"],
        curr: 0
      }
    },
    components: {
      Header,
      Footer,
      MintHeader,
      FromItem
    },
    methods: {
      stateFormat_(num){
        return stateFormat(num)
      },
      handlerStakeDetails (item){
        this.showDetail = true
      },
      handleClose (){
        this.showDetail = false
      },
      handlerSelect (){
        this.fromInfo.showSelect = !this.fromInfo.showSelect
      },
      handlerSelectCoin (item){
        this.currCoin = item
      },
    }
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
  /deep/ .el-dialog__footer{
    padding: 10px 20px 20px 20px;
  }
  /deep/ .el-input__inner{
    border: none !important;
    padding: 0;
    color: #262525;
    font-size: 24px;
    font-family: 'Inter Bold';
  }
  /deep/ .mintHeader{
    justify-content: center;
  }
  /deep/ .el-button{
    border: none;
    padding: 0;
    background: transparent;
    font-family: 'Inter Bold';
    font-weight: bold;
    color: #000000;
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
