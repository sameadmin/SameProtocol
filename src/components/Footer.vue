<template>
  <el-footer class="bg1" style="height: 40px;">
    <div class="footerContainer container flex flex-align-items-center flex-justify-content-between color1 font-14 font-family-regular fontWeight-4">
      <div class="footer-l flex flex-align-items-center">
        <div class="">Docs</div>
        <div class="ml_20">|</div>
        <div class="ml_16">FAQ</div>
        <div class="ml_20">|</div>
        <img class="ml_16 twitterIcon" src="../../static/images/footer/twitter.png" />
        <img class="ml_16 telegramIcon" src="../../static/images/footer/telegram.png" />
        <img class="ml_16 discordIcon" src="../../static/images/footer/discord.png" />
      </div>
      <div class="footer-r">@2021 Samecoin Proto</div>
    </div>
  </el-footer>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .footerContainer{
    height: 40px;
  }
  .footer-l{
    margin-left: 48px;
  }
  .footer-r{
    margin-right: 22px;
  }
  .telegramIcon,.twitterIcon{
    width: 16px;
    height: 16px;
  }
  .discordIcon{
    width: 16px;
    height: 11px;
  }
  .ml_20{
    margin-left: 20px;
  }
  .ml_16{
    margin-left: 16px;
  }
</style>
