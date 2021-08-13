<template>
  <div id="app">
    <bar/>
   <ip12/>
    <color1/> 
    <black/>
    <a13/>
  </div>
</template>

<script>
 import bar from './components/bar.vue'
import ip12 from './components/ip12.vue'
import black from './components/black.vue'
import color1 from './components/color1.vue'
import a13 from './components/a13.vue'

export default {
  name: 'App',
  components: {
     bar,
     ip12,
     black,
    color1,
    a13
  }
}

</script>
<style>
body{
  margin: 0;
 background-color: #f2f2f2;
 overflow-x:hidden
}
#app {
height: 9000px;
}
</style>
