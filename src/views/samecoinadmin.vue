<template>
    <div class="about text-left w" v-if="solidityConfig_">
        <!--<h1>部署流程</h1>
        <h3>K网部署流程</h3>
        <ol class="text-left">
          <li>部署Masset.sol 的Masset (如果懒得部署，可以用0xA0Af1f5445F62e99B1A29E50dd8Ca88bD3Beff2a)</li>
          <li>部署Nexus.sol 的Nexus (部署需要设置官方账号，账号为个人钱包地址)</li>
          <li>部署ForgeValidator.sol 的ForgeValidator</li>
          <li>部署BasketManager.sol 的BasketManager</li>
          <li>部署DelayedProxyAdmin.sol 的DelayedProxyAdmin</li>
          <li>部署【代理合同】MassetProxy.sol 的MassetProxy （但是）K网合约叫 InitializableAdminUpgradeabilityProxy.sol</li>
          <li>部署【代理合同】BasketManagerProxy.sol 的MassetProxy （但是）K网合约叫 InitializableAdminUpgradeabilityProxy.sol</li>
          <li>MassetProxy 指向代理（upgradeTo）=> Masset 合同地址 </li>
          <li>BasketManagerProxy 指向代理（upgradeTo）=> BasketManager 合同地址 </li>
          <li>在前端用MassetProxy访问 initialize （_nameArg,_symbolArg,_nexus,_forgeValidator,_basketManager），
            然后在区块链浏览器获取交易时参数Orignal，并重新访问initialize （Masset地址，DelayedProxyAdmin地址 ，刚刚的Orignal data）</li>
          <li>部署CompoundIntegration.sol 的CompoundIntegration (如果懒得部署，可以用0x991eae15665bB47a5E1295b3191eD92c1c70738C)</li>
          <li>部署AaveIntegration.sol 的AaveIntegration (如果懒得部署，可以用0xB63e8f801E1Ab31bb8605648cc7Cb9bf6eE71c93)</li>
          <li>部署【代理合约】c VaultProxy.sol ，并且指向代理（upgradeTo）=> CompoundIntegration 合同地址</li>
          <li>部署【代理合约】a VaultProxy.sol ，并且指向代理（upgradeTo）=> AaveIntegration 合同地址</li>
          <li style="width: 100%;overflow: auto">c  VaultProxy合约 初始化 initialize(CompoundIntegration合约地址，DelayedProxyAdmin地址，data)

            <code>
              data:  0x11505f72000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.Nexus.address)}}00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000002000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.MassetProxy.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.BasketManagerProxy.address)}}0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.dai.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.usdc.address)}}0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.compoundDai.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.compoundUsdc.address)}}
            </code>
          </li>

          <li style="width: 100%;overflow: auto">a  VaultProxy合约 初始化 initialize(AaveIntegration合约地址，DelayedProxyAdmin地址，data)
            <code>
              data:  0x11505f72000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.Nexus.address)}}00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000506b0b2cf20faa8f38a4e2b524ee43e1f4458cc5000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000002000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.MassetProxy.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.BasketManagerProxy.address)}}0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.tusd.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.usdt.address)}}0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.aTUSD.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.aUSDT.address)}}
            </code>
          </li>



          <li>BasketManagerProxy 使用initialize (BasketManager地址 ，DelayedProxyAdmin地址 ，data)
            <code>
              data:  0xfc94058e000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.Nexus.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.MassetProxy.address)}}00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000004000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.dai.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.usdc.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.tusd.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.usdt.address)}}0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.VaultProxy_c.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.VaultProxy_c.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.VaultProxy_a.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.VaultProxy_a.address)}}00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
            </code>
          </li>




        </ol>-->

        <h1>部署流程</h1>
        <h3>主网部署流程</h3>
        <ol class="text-left">
            <li>部署 Nexus</li>
            <li>部署 ForgeValidator</li>
            <li>部署 Masset</li>
            <li>部署 BasketManager</li>
            <li>部署 MassetProxy</li>
            <li>部署 BasketManagerProxy</li>
            <li>部署 mintRewardLogic</li>
            <li>部署 mintRewardLogicProxy</li>
            <li>部署 saveRewardLogic</li>
            <li>部署 saveRewardLogicProxy</li>


            <li>MassetProxy （upgradeTo）=> Masset 合同地址
                <button @click="upgradeTo_('MassetProxy_',solidityConfig_.ContractMsg.Masset.address)" type="button"
                        class="btn-style btn-success "> 执行
                </button>
            </li>

            <li>BasketManagerProxy （upgradeTo）=> BasketManager 合同地址
                <button @click="upgradeTo_('BasketManagerProxy_',solidityConfig_.ContractMsg.BasketManager.address)"
                        type="button" class="btn-style btn-success "> 执行
                </button>
            </li>

            <li>mintRewardLogicProxy （upgradeTo）=> mintRewardLogic 合同地址
                <button @click="upgradeTo_('mintRewardLogicProxy_',solidityConfig_.ContractMsg.mintRewardLogic.address)"
                        type="button" class="btn-style btn-success "> 执行
                </button>
            </li>

            <li>saveRewardLogicProxy （upgradeTo）=> saveRewardLogic 合同地址
                <button @click="upgradeTo_('saveRewardLogicProxy_',solidityConfig_.ContractMsg.saveRewardLogic.address)"
                        type="button" class="btn-style btn-success "> 执行
                </button>
            </li>

            <li>Masset 初始设置
                <button @click="Masset_initialize()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>BasketManager 初始设置
                <button @click="BasketManager_initialize()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>mintRewardLogic 初始设置
                <button @click="mintRewardLogic_initialize()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>mintRewardLogic set_SameCoinERC20
                <button @click="mintRewardLogic_set_SameCoinERC20()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <!--<li>mintRewardLogic set_SameUSDERC20
              <button @click="mintRewardLogic_set_SameUSDERC20()" type="button" class="btn-style btn-success "> 执行</button>
            </li>-->

            <li>mintRewardLogic setMassetAddress
                <button @click="mintRewardLogic_setMassetAddress()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>samecoin approve 充值到资金池 （bonusPoolRecharge）
                <button @click="mintRewardLogic_bonusPoolRecharge()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>你可以在网站上兑换一个SameUSD,如果能出数据，恭喜你，可以进行下一步save部署</li>

            <li>saveRewardLogic 初始设置
                <button @click="saveRewardLogic_initialize()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>saveRewardLogic set_SameCoinERC20
                <button @click="saveRewardLogic_set_SameCoinERC20()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>saveRewardLogic set_LpToken
                <button @click="saveRewardLogic_set_LpToken()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>saveRewardLogic bonusPoolRecharge
                <button @click="saveRewardLogic_bonusPoolRecharge()" type="button" class="btn-style btn-success "> 执行</button>
            </li>


            <!--<li>MassetProxy （initialize）=> （_nameArg,_symbolArg,_nexus,_forgeValidator,_basketManager）</li>

            <li>BasketManagerProxy 使用initialize (BasketManager地址 ，DelayedProxyAdmin地址 ，data)
              <code >
                data:  0xfc94058e000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.Nexus.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.MassetProxy.address)}}00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000004000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.dai.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.usdc.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.tusd.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.usdt.address)}}0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.IntegrationProxy.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.IntegrationProxy.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.IntegrationProxy.address)}}000000000000000000000000{{addressCutx0(solidityConfig_.ContractMsg.IntegrationProxy.address)}}00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
              </code>
            </li>
            <li>
              MassetProxy  （set_MintRewardLogic）设置定义MintRewardLogic地址
              <button @click="MassetProxy_set_MintRewardLogic()" type="button" class="btn-style btn-success "> 执行</button>
            </li>
            <li>
              saveRewardLogicProxy （upgradeTo）=> saveRewardLogic 合同地址
              <button @click="upgradeTo_('saveRewardLogicProxy',solidityConfig_.ContractMsg.saveRewardLogic.address)" type="button" class="btn-style btn-success "> 执行</button>
            </li>
            <li>
              mintRewardLogicProxy （upgradeTo）=> mintRewardLogic 合同地址
              <button @click="upgradeTo_('mintRewardLogicProxy',solidityConfig_.ContractMsg.mintRewardLogic.address)" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>mintRewardLogicProxy （setLockingAddress）设置白名单 =>
              <button @click="mintRewardLogicProxy_setLockingAddress()" type="button" class="btn-style btn-success "> 执行</button>
            </li>








            <li>ceo账号允许saveRewardLogicProxy消费samecoin
              <button @click="sameCoinTosaveRewardLogicProxy_approve()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>saveRewardLogicProxy （initialize）设置初始参数
              <button @click="saveRewardLogicProxy_initialize()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>saveRewardLogicProxy 设置 set_LpToken 地址
              <button @click="saveRewardLogicProxy_set_LpToken()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>saveRewardLogicProxy 设置 set_SameCoinERC20 地址
              <button @click="saveRewardLogicProxy_set_SameCoinERC20()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>ceo 充值 samecoin 进去做资金池
              <button @click="saveRewardLogicProxy_bonusPoolRecharge()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>ceo账号允许saveRewardLogicProxy消费sameusd
              <button @click="sameusdTosaveRewardLogicProxy_approve()" type="button" class="btn-style btn-success "> 执行</button>
            </li>
            <li> deposit 存sameusd 试试 ，看pendingCake
              <button @click="saveRewardLogicProxy_deposit(1000000)" type="button" class="btn-style btn-success "> 执行</button>
            </li>


            <li>ceo账号允许mintRewardLogicProxy消费samecoin
              <button @click="sameCoinTomintRewardLogicProxy_approve()" type="button" class="btn-style btn-success "> 执行</button>
            </li>



            <li>mintRewardLogicProxy （initialize）设置初始参数
              <button @click="mintRewardLogicProxy_initialize()" type="button" class="btn-style btn-success "> 执行</button>
            </li>

            <li>ceo 充值 samecoin 进去做资金池
              <button @click="mintRewardLogicProxy_bonusPoolRecharge()" type="button" class="btn-style btn-success "> 执行</button>
            </li>
            <li>存usdt进去试试，看看有没有</li>
            <li>存sameusd 试试 ，看pendingCake</li>-->


        </ol>

    </div>
</template>

<script>
	import Web3 from 'web3'
	import solidityConfig from './../assets/solidityConfig'
	import { bcView, bcWrite, mints } from './../assets/js/components'

	export default {

		name: 'samecoinadmin',

		data () {
			return {
				accountAddress: null,
				solidityConfig_: null
			}
		},

		async created () {
			this.accountAddress = await this.getAccountAddress()
			this.solidityConfig_ = await solidityConfig
		},
		methods: {

			addressCutx0 (info) {
				return info.slice(2, info.length)
			},
			async saveRewardLogic_bonusPoolRecharge (){
				await bcWrite(`sameCoin`, `approve`,[this.solidityConfig_.ContractMsg.saveRewardLogicProxy.address , '1000000000000000000000000000'] );
				await bcWrite(`saveRewardLogicProxy`, `bonusPoolRecharge`,['1000000000000000000000'] );
			},
			async saveRewardLogic_set_LpToken (){
				await bcWrite(`saveRewardLogicProxy`, `set_LpTokenAddr`,[this.solidityConfig_.ContractMsg.sameUsd.address] );
			},
			async saveRewardLogic_set_SameCoinERC20 (){
				await bcWrite(`saveRewardLogicProxy`, `set_SameCoinERC20Addr`,[this.solidityConfig_.ContractMsg.sameCoin.address] );
			},
			async saveRewardLogic_initialize(){
				await bcWrite(`saveRewardLogicProxy`, `initialize`,[] );
			},
			async mintRewardLogic_bonusPoolRecharge(){
				await bcWrite(`sameCoin`, `approve`,[this.solidityConfig_.ContractMsg.mintRewardLogicProxy.address , '1000000000000000000000000000'] );
				await bcWrite(`mintRewardLogicProxy`, `bonusPoolRecharge`,['100000000000000000000000'] );
			},
			async mintRewardLogic_setMassetAddress(){
				await bcWrite(`mintRewardLogicProxy`, `setMassetAddress`,[this.solidityConfig_.ContractMsg.MassetProxy.address] )
			},
			async mintRewardLogic_set_SameCoinERC20(){
				await bcWrite(`mintRewardLogicProxy`, `set_SameCoinERC20`,[this.solidityConfig_.ContractMsg.sameCoin.address] )
			},
			async mintRewardLogic_set_SameUSDERC20(){
				await bcWrite(`mintRewardLogicProxy`, `set_SameUSDERC20`,[this.solidityConfig_.ContractMsg.sameUsd.address] )
			},
			async _initialize (ContractName, parameter) {
				await bcWrite(ContractName, `initialize`, parameter)
			},
			async mintRewardLogic_initialize () {
				this._initialize('mintRewardLogicProxy', [])
			},
			async BasketManager_initialize () {
				this._initialize('BasketManagerProxy', [
					this.solidityConfig_.ContractMsg.Nexus.address,
					this.solidityConfig_.ContractMsg.MassetProxy.address,
					[
						this.solidityConfig_.ContractMsg.busd.address,
						this.solidityConfig_.ContractMsg.usdc.address,
						//this.solidityConfig_.ContractMsg.tusd.address,
						this.solidityConfig_.ContractMsg.usdt.address
					],
					[
						this.solidityConfig_.ContractMsg.MassetProxy.address,
						this.solidityConfig_.ContractMsg.MassetProxy.address,
						//this.solidityConfig_.ContractMsg.MassetProxy.address,
						this.solidityConfig_.ContractMsg.MassetProxy.address
					],
					['1000000000000000000', '1000000000000000000', '1000000000000000000'],
					[false, false, false]

				])
			},
			async Masset_initialize () {
				this._initialize('MassetProxy', [
					'SameUSD',
					'SameUSD',
					this.accountAddress,
					this.solidityConfig_.ContractMsg.ForgeValidator.address,
					this.solidityConfig_.ContractMsg.BasketManagerProxy.address,
					this.solidityConfig_.ContractMsg.mintRewardLogicProxy.address
				])
			},
			/*async saveRewardLogicProxy_set_SameCoinERC20(){
              await bcWrite(`saveRewardLogicProxy` ,`set_SameCoinERC20`,[this.solidityConfig_.ContractMsg.sameCoin.address]);
            },
            async saveRewardLogicProxy_set_LpToken(){
              await bcWrite(`saveRewardLogicProxy` ,`set_LpToken`,[this.solidityConfig_.ContractMsg.sameUsd.address]);
            },
            async mintRewardLogicProxy_bonusPoolRecharge(){
              await bcWrite(`mintRewardLogicProxy` ,`bonusPoolRecharge`,['100000000000000000000000']);
            },
            async mintRewardLogicProxy_initialize(){
              await bcWrite(`mintRewardLogicProxy` ,`initialize`,[]);
            },
            async sameCoinTomintRewardLogicProxy_approve(){
              await bcWrite(`sameCoin` ,`approve`,[this.solidityConfig_.ContractMsg.mintRewardLogicProxy.address,'1000000000000000000000000000']);
            },
            async saveRewardLogicProxy_deposit(val){
              await bcWrite(`saveRewardLogicProxy` ,`deposit`,[val]);
            },
            async sameusdTosaveRewardLogicProxy_approve(val){
              await bcWrite(`sameUsd` ,`approve`,[this.solidityConfig_.ContractMsg.saveRewardLogicProxy.address,'1000000000000000000000000000']);
            },
            async saveRewardLogicProxy_bonusPoolRecharge(){
              await bcWrite(`saveRewardLogicProxy` ,`bonusPoolRecharge`,['1000000']);
            },
            async saveRewardLogicProxy_initialize(){
              await bcWrite(`saveRewardLogicProxy` ,`initialize`,[]);
            },
            async sameCoinTosaveRewardLogicProxy_approve(){
              await bcWrite(`sameCoin` ,`approve`,[this.solidityConfig_.ContractMsg.saveRewardLogicProxy.address,'1000000000000000000000000000']);
            },
            async mintRewardLogicProxy_setLockingAddress(){
              //await bcWrite(`mintRewardLogicProxy` ,`setLockingAddress`,['basketManagerAddress',this.solidityConfig_.ContractMsg.BasketManagerProxy.address]);
              await bcWrite(`mintRewardLogicProxy` ,`setLockingAddress`,['massetAddress',this.solidityConfig_.ContractMsg.MassetProxy.address]);
            },
            async MassetProxy_set_MintRewardLogic(){
              await bcWrite(`MassetProxy` ,`set_MintRewardLogic`,[this.solidityConfig_.ContractMsg.mintRewardLogicProxy.address]);
            },
            async IntegrationProxy_setLockingAddress(){

              await bcWrite(`IntegrationProxy` ,`setLockingAddress`,['basketManagerAddress',this.solidityConfig_.ContractMsg.BasketManagerProxy.address]);
              await bcWrite(`IntegrationProxy` ,`setLockingAddress`,['massetAddress',this.solidityConfig_.ContractMsg.MassetProxy.address]);
            },
            async IntegrationProxy_initialize(){
              await bcWrite(`IntegrationProxy` ,`initialize`,[[
                this.solidityConfig_.ContractMsg.dai.address,this.solidityConfig_.ContractMsg.usdc.address,this.solidityConfig_.ContractMsg.tusd.address,this.solidityConfig_.ContractMsg.usdt.address
              ]]);
            },*/
			async upgradeTo_ (ContractName, upgradeToAddr) {
				await bcWrite(ContractName, `upgradeTo`, [upgradeToAddr])
			},

			async btn (i) {
				if (i == 0) {
					var newList = []
					for (var j = 0; j < 5; j++) {
						if (this[`cellParameter${j}`]) {
							newList.push(this[`cellParameter${j}`])
						}
					}

					this.msg = await bcView(this.callContractName, this.callFunctionName, newList)

				} else {
					newList = []
					for (var k = 0; k < 5; k++) {
						if (this[`sendParameter${k}`]) {
							newList.push(this[`sendParameter${k}`])
						}
					}
					this.msg1 = await bcWrite(this.sendContractName, this.sendFunctionName, newList
					)

				}

			},
			async CheckMetaMask () {
				let this_ = this
				if (window.ethereum) {
					window.web3 = new Web3(ethereum)
					this_.isWallet = true
					try {
						// Request account access if needed
						await ethereum.enable()
						// Acccounts now exposed
						//web3.eth.sendTransaction({/* ... */});//无故报错
					} catch (error) {
						console.log(error)
						// User denied account access...
					}
				}
				// Legacy dapp browsers...
				else if (window.web3) {
					this_.isWallet = true
					window.web3 = new Web3(web3.currentProvider)
					// Acccounts always exposed
					web3.eth.sendTransaction({/* ... */ })
				}
				// Non-dapp browsers...
				else {
					this_.isWallet = false
					console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
				}
			},
			async getAccountAddress () {
				return (await web3.eth.getAccounts())[0]

			},

		},
		async mounted () {
//===============================问用户是否开放隐私数据，这样才能访问MetaMask帐号=================================================
			window.addEventListener('load', async () => {
				// Modern dapp browsers...
				this.CheckMetaMask()
				this.accountAddress = await this.getAccountAddress()
				console.log(`已登陆${this.accountAddress}`)

			})
			//===============================问用户是否开放隐私数据，这样才能访问MetaMask帐号=================================================

		},
	}


</script>
<style>
    .w {
        margin: 20px;
    }
</style>
