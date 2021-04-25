<template>
  <div class="pageContainer flex flex-direction-column">
    <Header :activeIndex="activeIndex"></Header>
    <el-main class="bg2">

    </el-main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
    name: 'governance',
    data () {
      return {
        activeIndex: '3',
      }
    },
    components: {
      Header,
      Footer
    },
    methods: {

    }
  }
</script>

<style scoped>
  .pageContainer{
    height: 100%;
  }
</style>
