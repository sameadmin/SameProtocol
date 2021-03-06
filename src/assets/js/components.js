//import Web3 from 'web3';
import {FormatNoE} from '../../common/utils';

//去0
export function remove0 (val) {
  if(val == '' || !val){
    return 0;
  }
  if(val.indexOf(".") != -1 ){
    return val.replace(/^0+\./g,'0.');
  }else {
    return val.replace(/^[0]+/,'');
  }
}

//字符串缩短
export function shorten (val, num = 10) {
  if(!val){
    return ''
  }
  if (val.length < num) {
    return val
  } else {
    return val.substring(0, 6) + '...' + val.substring(val.length-4, val.length)
  }
}

//时间格式化 (2020-20-20 20:20:20)
export function toDateTime (val) {
  let date = new Date(val)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes() + ':'
  let s = date.getSeconds()
  return `${Y + M + D + h + m + s}`
}

//时间格式化 (2020-20-20)
export function toDay (val) {
  let date = new Date(val)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes() + ':'
  let s = date.getSeconds()
  return `${Y + M + D /*+ h + m + s*/}`
}

//添加代币
export async function addCoin (coinName,symbol,image){
  var solidityConfig = require(`../solidityConfig`);
  var decimals = (await bcView(coinName, 'decimals')).info;
  await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: `${solidityConfig.ContractMsg[coinName].address}`,
        symbol: symbol,
        decimals: decimals,
        image: image,
      },
    },
  });
}

//添加bsc网络
export async function addBSCNet (){
	await  ethereum.request({
		method: 'wallet_addEthereumChain',
		params: [{
			chainId: '0x38',
			chainName: 'Binance Smart Chain',
			nativeCurrency:
				{
					name: 'BNB',
					symbol: 'BNB',
					decimals: 18
				},
			rpcUrls: ['https://bsc-dataseed.binance.org/'],
			blockExplorerUrls: ['https://bscscan.com/'],
		}],
	});
}

//查看代币列表
/*
export async function eth_accounts (){
  
  console.log(web3.eth.accounts.wallet);
}
*/



//检查是否安装metaMask
export async function CheckMetaMask() {
  var Web3 = require(`web3`);
  //let this_ = this;
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
	
    //await addCoin();
    //await addBSCNet();
    //await eth_accounts();
    
    $cookies.set("useWallet",true);
    //this_.isWallet = true;
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      //web3.eth.sendTransaction({/* ... */});//无故报错
      return true;
    } catch (error) {
      console.log(error);
      // User denied account access...
    }
    
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    $cookies.set("useWallet",true);
    //this_.isWallet = true;
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({/* ... */});
	
	  
	  
    return true;
  }
  // Non-dapp browsers...
  else {
    $cookies.set("useWallet",false);
    //this_.isWallet = false;
    //$('#myConnect').focus();
    //$('#errWaletlMsg').modal('show')

    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    
    return false;
  }
}

//检查是否解锁
export async function checkApprove(coinName,fromAddr) {
  coinName = coinName.toLowerCase()
  var val = Math.pow(10,9);
  try {
    let myAddr = await toAccount();
    let allowanceVal = (await bcView(coinName,'allowance',[myAddr,fromAddr])).info;
    allowanceVal = Number(allowanceVal);
    var decimals = (await bcView(coinName, 'decimals')).info;
    var amt = Number(numberToHex (val, decimals));
    if(allowanceVal < amt){
      return false;
    }else {
      return true;
    }
  }catch (e) {
    console.log(e.message);
    return false;
  }
}

//执行限制消费
export async function goApprove(coinName,val) {
  try {
    var solidityConfig = require(`../solidityConfig`)
    var decimals = (await bcView(coinName, 'decimals')).info;
    var amt = numberToHex (val, decimals);
    var approveInfo = await bcWrite(coinName ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,FormatNoE(amt)]);
    return approveInfo;
  }catch (e) {
    console.log(e.message);
    return approveInfo;
  }
}

export async function goApprove_(coinName,val,address) {
  try {
    
    var solidityConfig = require(`../solidityConfig`)
    var decimals = (await bcView(coinName, 'decimals')).info;
    var amt = numberToHex (val, decimals);
    console.log(coinName,val,[address,FormatNoE(amt)]);
    var approveInfo = await bcWrite(coinName ,`approve`,[address,FormatNoE(amt)]);
    return approveInfo;
  }catch (e) {
    console.log(e.message);
    return approveInfo;
  }
}


export function checkSignin_(){
  let useWallet =  JSON.parse($cookies.get("useWallet"));
  if(useWallet==null){
    $cookies.set("useWallet",false);
  }else if(useWallet==false){
    $cookies.set("useWallet",false);
    return false;
  }else {
    return true;
  }
}

//查询当前使用钱包地址
export async function toAccount () {
  try {
    var Web3 = require(`web3`);
    window.web3 = new Web3(ethereum);
    if(checkSignin_()){
      web3 = new Web3(web3.currentProvider);
    }else {
      web3 = new Web3({});
    }
    return (await web3.eth.getAccounts())[0];
    
  }catch (e) {
    //console.log(e.message)
  }
}

//hex(无小数点数字) 转化 正常数字
export function hexToNumber (val, decimals) {
  return val / Math.pow(10, decimals)
}

//正常数字  转化  hex(无小数点数字)
export function numberToHex (val, decimals) {
  return (val * Math.pow(10, decimals)).toString();
}



//查看某币余额 (币名称) 如balanceOf('usdt')
export async function balanceOf (name) {
  var balance = (await bcView(name, 'balanceOf', [await toAccount()])).info;
  var decimals = (await bcView(name, 'decimals')).info;
  return hexToNumber(balance, decimals)
}

//区块链 view
export async function bcView (ContractName, functionName, parameter, options = { from: null }) {
  try {
    options.from = await toAccount()
    var solidityConfig = require(`../solidityConfig`)
    parameter = parameter == undefined ? [] : parameter
    let Contract = new web3.eth.Contract(solidityConfig.ContractMsg[ContractName].abi, solidityConfig.ContractMsg[ContractName].address);
    var info = await Contract.methods[functionName](...parameter).call(options)
    return { success: true, info: info }
  } catch (e) {
    return { success: false, info: e.message }
  }
}

//区块链 write
export async function bcWrite (ContractName, functionName, parameter, options = {
  from: null,
  value: 0,
  feeLimit: 20000000
}) {
  try {
    options.from = await toAccount();
    var solidityConfig = require(`../solidityConfig`)
    parameter = parameter == undefined ? [] : parameter
    let Contract = new web3.eth.Contract(solidityConfig.ContractMsg[ContractName].abi, solidityConfig.ContractMsg[ContractName].address)
    let info = await Contract.methods[functionName](...parameter).send(options)
    return { success: true, info: info }
  } catch (e) {
    return { success: false, info: e.message }
  }
}

//查看一揽子货币的某个币有多少 (dai usdc tusd usdt)
export async function getBassets () {
  var decimalsList = [18,6,6];
  var getBassetsInfo = await bcView ('BasketManagerProxy', 'getBassets');
  //console.log(getBassetsInfo)
  var newlist = [];
  for(let i in getBassetsInfo.info['0']){
    newlist.push( hexToNumber(getBassetsInfo.info['0'][i][5], decimalsList[i]) );
  }
  return newlist;
}


//查看一揽子货币 占总共的百分比
export async function getBassets_p (){
  var getBassetsList = await getBassets();
  var tolal = 0;
  for(var i in getBassetsList){
    tolal += getBassetsList[i];
  }
  var newList =[];
  for(var j in getBassetsList){
    newList.push(getBassetsList[j]/tolal)
  }
  return newList;
}

//检查当前余额是否足够
export function checkBalance (nowBalance , cutAmt){
  return nowBalance >= cutAmt? true:false;
}

//单个种类造币
export async function mint (name,val){
  try {
    val = Number(val);
    var solidityConfig = require(`../solidityConfig`)
    var decimals = (await bcView(name, 'decimals')).info;
    var amt = numberToHex (val, decimals);
    
    /*var approveInfo = await bcWrite(name ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,amt]);
    if(!approveInfo.success){return  { success: false, info: 'approve err' }};*/
    var info = await bcWrite(`MassetProxy` ,`mint`,[solidityConfig.ContractMsg[name].address,FormatNoE(amt)]);
    return { success: info.success, info: info.info };
  }catch (e) {
    console.log(e.message);
    return { success: false, info: e.message };
  }
}

//多个币种造币 ( ['dai','usdc','usdt'],[1,1,1] )
export async function mints (nameList,amtList){
  try {
    var solidityConfig = require(`../solidityConfig`)
    var accAddress = await toAccount();
    var addresslist = [];
    var cutAmtlist = [];
    for(var a in nameList){
      var decimals = (await bcView(nameList[a], 'decimals')).info;
      var cutAmt = numberToHex (amtList[a], decimals)
      /*var approveInfo = await bcWrite(nameList[a] ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,cutAmt]);
      if(!approveInfo.success){return  { success: false, info: 'approve err' }};*/
      addresslist.push(solidityConfig.ContractMsg[nameList[a]].address);
      cutAmtlist.push(FormatNoE(cutAmt));
    }
    var info = await bcWrite(`MassetProxy` ,`mintMulti`,[addresslist,cutAmtlist,accAddress]);
    return { success: info.success, info: info.info };
  }catch (e) {
    console.log(e.message);
    return { success: false, info: e.message };
  }
}

//交易
export async function swap (inputName,outputName,amt){
  //console.log(inputName, outputName, amt)
  try {
    var solidityConfig = require(`../solidityConfig`);
    var accAddress = await toAccount();
    var inputdecimals = (await bcView(inputName, 'decimals')).info;
    var inputAmt = numberToHex (amt, inputdecimals);
    var outputdecimals = (await bcView(outputName, 'decimals')).info;
    var outputAmt = numberToHex (amt, outputdecimals);
    //console.log('okookko')
    var approveInfo = await bcWrite(inputName ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,FormatNoE(inputAmt)]);
    if(!approveInfo.success){return  { success: false, info: 'approve err' }};
    var info = await bcWrite(`MassetProxy` ,`swap`,[solidityConfig.ContractMsg[inputName].address,solidityConfig.ContractMsg[outputName].address,FormatNoE(inputAmt),accAddress]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
  
}

//单个币赎回
export async function redeem (outputName,val){
  try {
    var solidityConfig = require(`../solidityConfig`);
    var decimals = (await bcView(outputName, 'decimals')).info;
    var amt = numberToHex (val, decimals);
    var info = await bcWrite(`MassetProxy` ,`redeem`,[solidityConfig.ContractMsg[outputName].address,FormatNoE(amt)]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
  
}

//多个币赎回
export async function redeemMulti (nameList,amtList){
  try {
    var solidityConfig = require(`../solidityConfig`);
    var accAddress = await toAccount();
    var addresslist = [];
    var cutAmtlist = [];
    for(var a in nameList){
      var decimals = (await bcView(nameList[a], 'decimals')).info;
      var cutAmt = numberToHex (amtList[a], decimals)
      //var info = await bcWrite(nameList[a] ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,cutAmt]);
      addresslist.push(solidityConfig.ContractMsg[nameList[a]].address);
      cutAmtlist.push(FormatNoE(cutAmt));
    }
    var info = await bcWrite(`MassetProxy` ,`redeemMulti`,[addresslist,cutAmtlist,accAddress]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
}

//获取当前可提现奖励余额
export async function getMintReward(){
  let address = await toAccount();
  var solidityConfig = require(`../solidityConfig`)
  var userInfo = (await bcView ('mintRewardLogicProxy', 'userInfo',[address])).info;
  var unclaimedSameCoin = userInfo.unclaimedSameCoin;
  var pendingSameCoin = (await bcView ('mintRewardLogicProxy', 'pendingSameCoin',[address])).info;
  var decimals = (await bcView('sameCoin', 'decimals')).info;
  var val = hexToNumber (Number(pendingSameCoin)+Number(unclaimedSameCoin), decimals)
  return val;
}

//获取samecoin 总共已经奖励
export async function getTotalAwards(){
  let address = await toAccount();
  var totalAwards_ = (await bcView ('mintRewardLogicProxy', 'totalAwards',[])).info;
  var decimals = (await bcView('sameCoin', 'decimals')).info;
  totalAwards_ = hexToNumber (totalAwards_, decimals)
  return totalAwards_;
}

//当前mint区块id
export async function nowBlockId(){
  var nowBlockId_ = (await bcView ('mintRewardLogicProxy', 'nowBlockId',[])).info;
  return nowBlockId_;
}

//当前mint的区间间隔
export async function getMintRewardInterval(){
  var rewardInterval_ = Number((await bcView ('mintRewardLogicProxy', 'rewardInterval')).info);
  return rewardInterval_;
}

//当前区块
export async function nowBlocks(){
  var blockNumber = await web3.eth.getBlockNumber();
  return blockNumber;
}

//离下一次开奖还剩多少区块
export async function nextDrawBlocks(){
  var nowBlocks_ = await nowBlocks();
  var rewardInterval_ = await getMintRewardInterval();
  return nowBlocks_ % rewardInterval_;
}

//当前区间区块id总共多少sameusd
export async function totalMintAmt(){
  var nowBlockId_ = await nowBlockId();
  var info = (await bcView ('mintRewardLogicProxy', 'mintBlockIdInfo',[nowBlockId_])).info;
  var decimals = (await bcView('sameCoin', 'decimals')).info;
  var val = hexToNumber (info.totalMintAmt, decimals)
  return val;
}

//该区间区块我净存多少sameusd
export async function totalPerMintAmt(){
  var nowBlockId_ = await nowBlockId();
  var address = await toAccount();
  var totalPerMintAmt_ = (await bcView ('mintRewardLogicProxy', 'totalPerMintAmt',[nowBlockId_,address])).info;
  var decimals = (await bcView('sameCoin', 'decimals')).info;
  var val = hexToNumber (totalPerMintAmt_, decimals)
  return val;
}

//获取初开始mint池初samecoin奖励数量
export async function initialSameCoin(){
  var info = (await bcView ('mintRewardLogicProxy', 'initialSameCoin',[])).info;
  return info;
}

//获取（总共已经奖励/初samecoin奖励）百分比
export async function bonusPoolPercentage(){
  var getTotalAwards_ = await getTotalAwards();
  var initialSameCoin_ = await initialSameCoin();
  return getTotalAwards_/initialSameCoin_;
}

//获取 Countdown 百分比
export async function countdownPercentage(){
  var nextDrawBlocks_ = await nextDrawBlocks();
  var getMintRewardInterval_ = await getMintRewardInterval();
  
  return nextDrawBlocks_/getMintRewardInterval_;
}

//nowdegree
export async function nextRoundRewards(){
  var nowdegree_ = (await bcView ('mintRewardLogicProxy', 'nowdegree',[])).info;
  var sameCoinPerBlock_= (await bcView ('mintRewardLogicProxy', 'sameCoinPerBlock',[nowdegree_])).info;
  var totalPerMintAmt_ = await totalPerMintAmt();
  var totalMintAmt_ = await totalMintAmt();
  if(totalMintAmt_ == 0 ){
    return 0;
  }
  var val = Number(totalPerMintAmt_)/Number(totalMintAmt_)*Number(sameCoinPerBlock_)
  var decimals = (await bcView('sameCoin', 'decimals')).info;
  val = hexToNumber (val, decimals)
  return val;
  
}

//
export async function mintClaim(){
  try {
    var address = await toAccount();
    var info = await bcWrite(`mintRewardLogicProxy` ,`receivePrize`,[address]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
}

//获取mint时预计samecoinRewards
export async function mintSameCoinRewards(mintSameUSDVal){
  //获取当前区块id有多少铸币总量 mintBlockIdInfo = 》totalMintAmt
  let totalMintAmt_ = Number(await totalMintAmt());
  var decimals = Number((await bcView('sameCoin', 'decimals')).info);
  //mintSameUSDVal 转换成 18位
  let val =Number( await numberToHex(mintSameUSDVal,decimals));
  //看比值
  let ratio = totalMintAmt_==0? 1: val/totalMintAmt_;
  //console.log('val',val,'totalMintAmt_',totalMintAmt_,'ratio',ratio);
  //查当前 难度级别对应一个区间奖励多少 sameCoinPerBlock
  var nowdegree_ = (await bcView ('mintRewardLogicProxy', 'nowdegree',[])).info;
  var sameCoinPerBlock_= Number((await bcView ('mintRewardLogicProxy', 'sameCoinPerBlock',[nowdegree_])).info);
  //console.log((sameCoinPerBlock_ * ratio, decimals));
  var retVal = hexToNumber (sameCoinPerBlock_ * ratio, decimals)
  //console.log((sameCoinPerBlock_, ratio, decimals));
  //console.log(retVal);
  return retVal;
}

//===============Save==============

//当前samecoin/sameusd 价格
export async function samecoinPrice(type){
  if (type==0){
    //samecoin
    return 0.5;
  }
  if (type==1){
    //lp
    return 0.5;
  }
}

export async function save_LpSupply(type=0){
  //getLPBalanceOf
  var solidityConfig = require(`../solidityConfig`)
  var lpBalance_ = (await bcView (type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy`, 'getLPBalanceOf',[solidityConfig.ContractMsg.saveRewardLogicProxy.address])).info;
  return Number(lpBalance_);
}

export async function save_AccScoinPerShare(type=0){
  var accScoinPerShare_ = (await bcView (type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy`, 'accScoinPerShare',[])).info;
  return Number(accScoinPerShare_);
}

export async function save_Nowdegree(type=0){
  var nowdegree_ = (await bcView (type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy`, 'nowdegree',[])).info;
  return Number(nowdegree_);
}

export async function save_BONUS_MULTIPLIER(nowdegree_,type=0){
  //BONUS_MULTIPLIER
  var BONUS_MULTIPLIER_ = (await bcView (type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy`, 'BONUS_MULTIPLIER',[nowdegree_])).info;
  return Number(BONUS_MULTIPLIER_);
}

export async function save_ScoinPerBlock(type=0){
//scoinPerBlock
  var scoinPerBlock_ = (await bcView (type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy`, 'scoinPerBlock',[])).info;
  return Number(scoinPerBlock_);
}



//save - 每一千刀 的 日挖矿率
export async function yieldPer(amt,type=0){
  /*var val = (await SaveRate(amt,type))*amt;
  var decimals = (await bcView('sameCoin', 'decimals')).info;
  val = hexToNumber (val, decimals)*/
  
  var totalSaveLiquidity_ = await totalSaveLiquidity(type);
  //console.log('amt',amt,'totalSaveLiquidity_',totalSaveLiquidity_);
  var rate = amt/totalSaveLiquidity_;
  var nowdegree_  = await save_Nowdegree(type);
  var BONUS_MULTIPLIER_ = await save_BONUS_MULTIPLIER(nowdegree_,type);
  var scoinPerBlock_ = await save_ScoinPerBlock(type);
  var dayBlockNumber = 60*60*24/3;
  var scoinReward = dayBlockNumber * BONUS_MULTIPLIER_   * scoinPerBlock_;
  var decimals = (await bcView('samecoin', 'decimals')).info;
  scoinReward = hexToNumber (scoinReward, decimals)
  //console.log('scoinReward',scoinReward);
  return scoinReward*rate;
}

//save - SaveRate
export async function SaveRate(amt,type=0){
  /*var lpSupply_ = await save_LpSupply(type);
  var accScoinPerShare_ = await save_AccScoinPerShare(type);
  var nowdegree_  = await save_Nowdegree(type);
  var BONUS_MULTIPLIER_ = await save_BONUS_MULTIPLIER(nowdegree_,type);
  var dayBlockNumber = 60*60*24/15;
  var scoinPerBlock_ = await save_ScoinPerBlock(type);
  var rewardDebt = amt * accScoinPerShare_/1000000000000000000;
  var scoinReward = dayBlockNumber * BONUS_MULTIPLIER_   * scoinPerBlock_;
  accScoinPerShare_ = accScoinPerShare_+(scoinReward*1000000000000000000/(lpSupply_+amt));
  var pendingSameCoin = (amt * accScoinPerShare_/1000000000000000000)-rewardDebt;
  var samecoinPrice_ = await samecoinPrice(type);
  var SaveRate_ = (pendingSameCoin/samecoinPrice_)/amt;*/
  
  
  return SaveRate_;
}

//save - 获取年化
export async function Annualized(amt,type=0){
  var totalSaveLiquidity_ = await totalSaveLiquidity(type);
  var val = Number(await yieldPer(amt,type));
  return 365*val/totalSaveLiquidity_;
}

//save - 总共save存款sameusd价值
export async function totalSaveLiquidity(type=0){
  var ret = {sameusd:0,samecoin:0}
  var lpSupply_ = await save_LpSupply(type);
  var decimals = (await bcView(type==0?'sameusd':'lp', 'decimals')).info;
  lpSupply_ = hexToNumber (lpSupply_, decimals)
  return lpSupply_;
}


//save - 我的存款
export async function saveStaked(type=0){
  var solidityConfig = require(`../solidityConfig`)
  var address = await toAccount();
  var myBalance_ = (await bcView (type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy`, 'userInfo',[address])).info.amount;
  var decimals = (await bcView(type==0?'sameusd':'lp', 'decimals')).info;
  myBalance_ = hexToNumber (myBalance_, decimals);
  return Number(myBalance_);
}

//save - 我的未结算收益samecoin
export async function saveEarnings(type=0){
//pendingRewards
  var address = await toAccount();
  var pendingRewards_ = (await bcView (type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy`, 'pendingRewards',[address])).info;
  var decimals = (await bcView(type==0?'sameusd':'lp', 'decimals')).info;
  pendingRewards_ = hexToNumber (pendingRewards_, decimals);
  return pendingRewards_;
}

//查询Balance
export async function getBalance(coinName){
  //getLPBalanceOf
  var address = await toAccount();
  var balance_ = (await bcView (coinName, 'balanceOf',[address])).info;
  var decimalsinfo = await bcView(coinName, 'decimals');
  if(decimalsinfo.success){
    var decimals = decimalsinfo.info;
  }else {
    decimals = 0;
  }
  //var decimals = (await bcView(coinName, 'decimals')).info;
  //console.log((balance_, decimals));
  balance_ = hexToNumber (balance_, decimals);
  return Number(balance_);
}

//save存sameusd
export async function saveDeposit(val,type=0){
  //deposit
  try {
    var address = await toAccount();
    var decimals = (await bcView(type==0?'sameusd':'lp', 'decimals')).info;
    var amt = numberToHex (val, decimals);
    var info = await bcWrite(type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy` ,`deposit`,[amt]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
  
}


//save 取款
export async function saveWithdraw(val,type=0){
  try {
    var address = await toAccount();
    var decimals = (await bcView(type==0?'sameusd':'lp', 'decimals')).info;
    var amt = numberToHex (val, decimals);
    console.log(amt);
    var info = await bcWrite(type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy` ,`withdraw`,[amt]);
    return { success: info.success, info: info.info };
  }catch (e) {
    console.log(e.message);
    return { success: false, info: e.message };
  }
  
}

//save 只拿奖励
export async function saveClaimAllRewards(type=0){
  try {
    var info = await bcWrite(type==0?`saveRewardLogicProxy`:`saveLpRewardLogicProxy` ,`claimAllRewards`,[]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
}

//===============Save==============





























