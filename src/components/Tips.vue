<template>
	<transition name="fade"
				 enter-active-class="animated fadeInRight"
				 leave-active-class="animated fadeOutRight"> 
		<div v-if="showTips.isShow" ref="tips" class="tips flex border-radius-8 animated" :style="{ background:showTips.bg }">
		   <img class="statusIcon" :src="showTips.icon"/>
		   <div class="statusDesc color5 font-16 fontWeight-6 font-family-semiBold">{{ showTips.status }}</div>
		</div>
	</transition>  
</template>

<script>
  export default {
    name: 'Successed',
    data (){
      return {
		
      }
    },
    props: {
      showTips: Object
    },
	watch: {
		'showTips.isShow'(v) {
			
		}
	},
    methods: {

    }
  }
</script>

<style scoped>
    .tips {
      position: fixed;
      top: 118px;
      right: 20px;
      width: 361px;
      height: 80px;
      line-height: 80px;
      box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.08), 0px 0px 32px 0px rgba(0, 0, 0, 0.08);
      /*transition: opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;
      transition: all 0.8s ease;
      animation: rtl-drawer-in .6s;*/
    }
  .statusIcon{
    width: 80px;
    height: 80px;
  }
</style>
