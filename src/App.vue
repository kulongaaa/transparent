<template>
  <div id="app">
    <HelloWorld/>
    <div class="picture1"></div>
     <div class="picture1"></div>
      <div class="picture1"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body{
  margin: 0;
 background-color: #f2f2f2;
 
}
#app {

}
.picture1{
    background: url("./assets/1.jpg") no-repeat center;
    width: 461px;
    height: 430px;
    background-size: 461px 430px;
    
}
</style>
