<template>
  <div id="app">
    <topHeader></topHeader>
    <router-view/>
    <bottomFooter></bottomFooter>
  </div>
</template>
<script src="js/jquery.min.js"></script>
<script>
import $ from "jquery";
import bottomFooter from './components/bottomFooter.vue'
import topHeader from './components/topHeader.vue'
export default {
  name: 'App',
  components: {
    bottomFooter,
    topHeader
  },
  mounted(){

    // bottomFooter$("body").css({"margin":0,"padding":0,"backgroundColor":"#EFE6E4"});
  },
}

</script>

<style>
#app {
  margin: 0;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
