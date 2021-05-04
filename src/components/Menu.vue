<template>
  <el-menu :default-active="activeIndex" mode="horizontal" :text-color="textColor" :active-text-color="activeTextColor" 
  :router="true" @select="handleSelect">
    <el-menu-item index="0" route="/">Mint</el-menu-item>
    <el-menu-item index="1" route="/Save">Save</el-menu-item>
    <el-menu-item index="2" route="/Stake">Stake</el-menu-item>
    <!-- <el-menu-item index="3" route="/Governance">Governance</el-menu-item>
    <el-menu-item index="4" route="/Stats">Stats</el-menu-item> -->
    <el-menu-item index="5" route="/Redeem">Redeem</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {

      }
    },
    props: {
      activeIndex: String,
	  textColor: String,
	  activeTextColor: String
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
 .el-menu.el-menu--horizontal{
    border-bottom: none!important;
  }
  .el-menu--horizontal>.el-menu-item{
    font-size: 16px;
    font-family: 'Inter Medium';
    font-weight: 500;
	margin: 0 20px;
  }
  .el-menu-item{
	  padding: 0;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
   /* border-bottom: none !important; */
    font-family: 'Inter Bold';
    font-weight: bold;
  }
</style>
