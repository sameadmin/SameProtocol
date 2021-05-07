<template>
	<el-dialog
	  :visible.sync="showChangeDialog"
	  width="500px"
	  :title="title_"
	  :center="false"
	  :show-close="false"
	  :close-on-click-modal="false"
	  :before-close="handleClose">
	  <div class="tips font-14 text-left fontWeight-6 color2 font-family-regular">
		  {{msg}}
	  </div>
	  <span slot="footer" class="dialog-footer text-center">
	    <div class="flex flex-justify-content-between">
			<div v-if="type===0">
				<el-button class="approveBtn border-radius-8 color6" round @click="switchWallet">Switch Wallet</el-button>

			</div>
			<div v-if="type===1">
				<el-button class="approveBtn border-radius-8 color6" round @click="addNetwork">Add BSC network</el-button>
			</div>
	      <!-- <div class="approveBtn flex flex-align-items-center border-radius-8 color6" @click="switchWallet">Switch Wallet</div>
	      <div class="stakeBtn flex flex-align-items-center border-radius-8 ml-20 color7" @click="dismiss">Dismiss</div> -->
	    </div>
	  </span>
	</el-dialog>
</template>

<script>
	import {addBSCNet} from  '../../src/assets/js/components'
	export default {
		name: 'Warning',
		data() {
			return {

			}
		},
		props: {
			type:Number,
			showChangeDialog: Boolean,
			msg: '',
			title_: '',
		},
		components: {

		},
		methods: {
			handleClose (){
				this.$emit('handleClose')
			},
			switchWallet (){

			},
			async addNetwork (){
				await addBSCNet();
				this.$emit('handleClose')
				//this.$router.push('/');
			}
		}
	}
</script>

<style scoped>
	.el-button {
	    border: none;
	    padding: 0;
	    background: transparent;
	    font-family: 'Inter Bold';
	    font-weight: bold;
	    color: #000000;
	}

	.el-button:focus, .el-button:hover {
	    background: transparent;
	    color: #000000;
	    border-color: transparent;
	}
	.el-dialog__wrapper {
		visibility: visible;
	}
	/deep/ .el-dialog__title{
		font-size: 16px;
		color: #000000;
		font-weight: bold;
		font-family: 'Inter Bold';
	}
	/deep/ .el-dialog__body {
	    padding: 30px 20px!important;
	}
	/deep/ .el-dialog__header {
	    padding: 20px 20px 10px!important;
	}
	.tips{
		line-height: 20px;
	}
</style>
