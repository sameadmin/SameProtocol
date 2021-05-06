<template>
	<el-dialog
	  :visible.sync="showChangeDialog"
	  width="500px"
	  :title="title_"
	  :center="false"
	  :before-close="handleClose">
	  <div class="tips font-14 text-left fontWeight-4 color2 font-family-regular">
		  {{msg}}
	  </div>
	  <!--<span slot="footer" class="dialog-footer text-center font-14 font-family-bold font-weight-b">
	    <div class="flex flex-justify-content-between">
	      <div class="approveBtn border-radius-8 color6" @click="switchWallet">Switch Wallet</div>
	      <div class="stakeBtn border-radius-8 ml-20 color7" @click="dismiss">Dismiss</div>
	    </div>
	  </span>-->
	</el-dialog>
</template>

<script>
	export default {
		name: 'Warning',
		data() {
			return {

			}
		},
		props: {
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
			dismiss (){

			}
		}
	}
</script>

<style scoped>
	.el-dialog__wrapper {
		visibility: visible;
	}
	.el-dialog__title{
		color: #000000;
		font-weight: bold;
		font-family: 'Inter Bold';
	}
	.tips{
		line-height: 20px;
	}
</style>
