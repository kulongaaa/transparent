<template>
  <div id="app">
    <bar/>
    <div class="picture1"></div>
     <div class="picture1"></div>
      <div class="picture1"></div>
  </div>
</template>

<script>
import bar from './components/bar.vue'

export default {
  name: 'App',
  components: {
    bar
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
    width:100%;
    height:500px;
    background-size: 461px 430px;
 max-width: 100%;
    
}
</style>
