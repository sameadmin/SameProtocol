<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import "./assets/fonts/fonts.css";
  import './assets/animate.min.css';
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #FFFFFF;
    color: #323232;
    height: 100%;
  }
  body,html {
    margin: 0;
    height: 100%;
  }
  .container {
    max-width: 1440px;
    margin: 0 auto;
  }
  .bg1 {
    background-color: #FFFFFF;
  }
  .bg2 {
    background-color: #F9F9F9;
  }
  .bg3{
    background-color: #FFD73A;
  }
  .bg4{
    background: #1F2BFF;
  }
  .bg5{
    background: #F5F5F5;
  }
  .flex {
    display: flex;
  }
  .flex-1{
    flex: 1;
  }
  .flex-2{
    flex: 2;
  }
  .flex-justify-content-center {
    justify-content: center;
  }
  .flex-justify-content-between{
    justify-content: space-between;
  }
  .flex-justify-content-end{
    justify-content: flex-end;
  }
  .flex-align-items-center {
    align-items: center;
  }
  .flex-direction-column{
    flex-direction: column;
  }
  .ml-20{
    margin-left: 20px;
  }
  .font-family-regular {
    font-family: 'Inter Regular';
  }
  .font-family-medium {
    font-family: 'Inter Medium';
  }
  .font-family-bold {
    font-family: 'Inter Bold';
  }
  .font-family-semiBold{
    font-family: 'Inter SemiBold';
  }
  .color1{
    color: #000000;
  }
  .color2{
    color: #262525;
  }
  .color3{
    color: rgba(0, 0, 0, 0.54);
  }
  .color4{
    color: rgba(0, 0, 0, 0.38);
  }
  .color5{
    color: #FFFFFF;
  }
  .color6{
    color: #1F2BFF!important;
  }
  .color7{
    color: #8D31EC!important;
  }
  .font-12{
    font-size: 12px;
  }
  .font-14{
    font-size: 14px;
  }
  .font-16{
    font-size: 16px;
  }
  .font-18{
    font-size: 18px;
  }
  .font-24{
    font-size: 24px;
  }
  .font-32{
    font-size: 32px;
  }
  .fontWeight-b{
    font-weight: bold;
  }
  .fontWeight-6{
    font-weight: 600;
  }
  .fontWeight-4{
    font-weight: 400;
  }
  .text-left{
    text-align: left;
  }
  .text-right{
    text-align: right;
  }
  .text-center{
    text-align: center;
  }
  .ml-10{
    margin-left: 10px;
  }
  .ml-12{
    margin-left: 12px;
  }
  .ml-18{
    margin-left: 18px;
  }
  .ml-20{
    margin-left: 20px!important;
  }
  .mr-12{
    margin-right: 12px;
  }
  .mr-20{
    margin-right: 20px;
  }
  .mr-30{
    margin-right: 30px;
  }
  .mb-10{
    margin-bottom: 10px;
  }
  .mt-10{
    margin-top: 10px;
  }
  .mt-20{
    margin-top: 20px;
  }
  .mt-24{
    margin-top: 24px;
  }
  .pl-24{
    padding-left: 24px;
  }
  .pl-20{
    padding-left: 20px;
  }
  .border-radius-8{
    border-radius: 8px;
  }
  .border-radius-16{
    border-radius: 16px;
  }
  .border-radius-32{
    border-radius: 32px;
  }
  .border{
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .border-t{
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
  .border-b{
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  .border-l{
    border-left: 1px solid rgba(0, 0, 0, 0.08);
  }
  .border-r{
	border-right: 1px solid rgba(0, 0, 0, 0.08);
  }
  .border_l{
    border-left: 1px solid #FFFFFF;
  }
  .select-reverse{
    transform: rotate(0deg);
  }
  .select-caret{
    transition: transform .3s;
    transform: rotate(180deg);
    cursor: pointer;
  }
  .bottomSeat{
    height: 48px;
  }
  .loadingIcon{
  	width: 16px;
  	height: 16px;
  }
</style>
