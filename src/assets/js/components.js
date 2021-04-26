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

//检查是否安装metaMask
export async function CheckMetaMask() {
  var Web3 = require(`web3`);
  //let this_ = this;
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    $cookies.set("useWallet",true);
    //this_.isWallet = true;
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      //web3.eth.sendTransaction({/* ... */});//无故报错
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
  }
  // Non-dapp browsers...
  else {
    $cookies.set("useWallet",false);
    //this_.isWallet = false;
    //$('#myConnect').focus();
    //$('#errWaletlMsg').modal('show')
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
}

//检查是否解锁
export async function checkApprove(name,fromAddr) {
  try {
    let myAddr = await toAccount();
    let allowanceVal = await bcView(name,'allowance',[fromAddr,myAddr]);
    if(allowanceVal < Math.pow(10,27)){
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
    console.log(coinName,val);
    var solidityConfig = require(`../solidityConfig`)
    var decimals = (await bcView(coinName, 'decimals')).info;
    var amt = numberToHex (val, decimals);
    var approveInfo = await bcWrite(coinName ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,FormatNoE(amt)]);
    return { success: true, info: approveInfo }
  }catch (e) {
    console.log(e.message);
    return { success: false, info: e.message }
  }
  
}

//查询当前使用钱包地址
export async function toAccount (checkSignin=true) {
  try {
    var Web3 = require(`web3`);
    window.web3 = new Web3(ethereum);
    if(checkSignin){
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
  var decimalsList = [18,6,18,6];
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
    var solidityConfig = require(`../solidityConfig`)
    var decimals = (await bcView(name, 'decimals')).info;
    var amt = numberToHex (val, decimals);
    var approveInfo = await bcWrite(name ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,amt]);
    if(!approveInfo.success){return  { success: false, info: 'approve err' }};
    var info = await bcWrite(`MassetProxy` ,`mint`,[solidityConfig.ContractMsg[name].address,amt]);
    return { success: info.success, info: info.info };
  }catch (e) {
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
      var approveInfo = await bcWrite(nameList[a] ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,cutAmt]);
      if(!approveInfo.success){return  { success: false, info: 'approve err' }};
      addresslist.push(solidityConfig.ContractMsg[nameList[a]].address);
      cutAmtlist.push(cutAmt);
    }
    var info = await bcWrite(`MassetProxy` ,`mintMulti`,[addresslist,cutAmtlist,accAddress]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
}

//交易
export async function swap (inputName,outputName,amt){
  console.log(inputName, outputName, amt)
  try {
    var solidityConfig = require(`../solidityConfig`);
    var accAddress = await toAccount();
    var inputdecimals = (await bcView(inputName, 'decimals')).info;
    var inputAmt = numberToHex (amt, inputdecimals);
    var outputdecimals = (await bcView(outputName, 'decimals')).info;
    var outputAmt = numberToHex (amt, outputdecimals);
    console.log('okookko')
    var approveInfo = await bcWrite(inputName ,`approve`,[solidityConfig.ContractMsg.MassetProxy.address,inputAmt]);
    if(!approveInfo.success){return  { success: false, info: 'approve err' }};
    var info = await bcWrite(`MassetProxy` ,`swap`,[solidityConfig.ContractMsg[inputName].address,solidityConfig.ContractMsg[outputName].address,inputAmt,accAddress]);
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
    var info = await bcWrite(`MassetProxy` ,`redeem`,[solidityConfig.ContractMsg[outputName].address,amt]);
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
      cutAmtlist.push(cutAmt);
    }
    var info = await bcWrite(`MassetProxy` ,`redeemMulti`,[addresslist,cutAmtlist,accAddress]);
    return { success: info.success, info: info.info };
  }catch (e) {
    return { success: false, info: e.message };
  }
}
