<template>
  <div class="mintHeader flex flex-align-items-center">
    <img class="mintIcon" :src="headerInfo.icon" />
    <div class="ml-20 text-left">
      <div class="coinName font-32 font-family-bold fontWeight-b">{{ headerInfo.title }}</div>
      <div class="coinDesc font-14 font-family-regular fontWeight-4">{{ headerInfo.desc }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MintHeader',
    data (){
      return {

      }
    },
    props: {
      headerInfo: Object
    },
    methods: {

    }
  }
</script>

<style scoped>
  .mintIcon{
    width: 48px;
    height: 48px;
  }
</style>
