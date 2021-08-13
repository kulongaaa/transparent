<template>
  <div class="sticky-container">
      <div class="iphone black">
       <h3>
         Conmes in Black<br>
         &nbsp;
       </h3>
       <img src="../assets/black.png">
      </div>
      <div class="iphone white">
        <h3>
         Conmes in Black<br>
         <span>White</span>
       </h3>
       <img src="../assets/white.png">
      </div>
      <div class="iphone red">
        <h3>
         Conmes in Black<br>
         White
         <span>Red</span>
        </h3>
          <img src="../assets/red.png">
      </div>
  </div>
</template>

<script>
export default {
  name: 'color1',
  data(){
    return{
    
    }
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      // let nostuckyoffset = document.documentElement.clientHeight * 2
      // let scrolled =document.documentElement.scrollTop/nostuckyoffset
      let scrolled =document.documentElement.scrollTop/
      (document.documentElement.scrollHeight - document.documentElement.clientHeight)

      console.log(scrolled);
      let $white=document.querySelector('.white')
      let $red=document.querySelector('.red')
      $white.style.clipPath=`inset(${((0.5 - scrolled)/0.5)*100}% 0px 0px 0px)`
      $red.style.clipPath=`inset(${((1 - scrolled)/0.5)*100}% 0px 0px 0px)`
         
         if(scrolled>=1){
           document.querySelector('.sticky-container').classList.add('no-sticky')
         }
         else{
           document.querySelector('.sticky-container').classList.remove('no-sticky')
         }
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sticky-container{
  --iphone-black-bg:#000;
  --iphone-black-text:#f2f2f2;
  --iphone-white-bg:#fff;
  --iphone-white-text:#8b8b99;
  --iphone-white-text-highlight:#1d1d1f;
  --iphone-red-bg:#960b19;
  --iphone-red-text:#e57571;
  --iphone-red-text-highlight:#f5f5f7;
  --iphone-width:460px;
  --iphone-offscreen:-720px;

}
.sticky-container{
  margin:0;
  height: 3000px;
  font-family:Helvetica;
  background-color: #000;
}
.sticky-container{
  position:sticky;
  top:0;
  width:100%;
  height: 100vh;
  overflow: hidden;
}
.sticky-container .iphone{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.sticky-container .iphone h3{
   font-size:48px;
  width:var(--iphone-width);
  margin:0 0 60px 0;

}
.sticky-container .iphone img{
  display: block;
  width: var(--iphone-width);
  margin-bottom: var(--iphone-offscreen);
}
.sticky-container .iphone.black{
background-color: var(--iphone-black-bg);
z-index: 10;
}
.sticky-container .iphone.black h3{
  color:var(--iphone-black-text);
}
.sticky-container .iphone.white{
background-color: var(--iphone-white-bg);
z-index: 20;
clip-path: inset(100% 0px 0px 0px);
}
.sticky-container .iphone.white h3{
  color:var(--iphone-white-text);
}
.sticky-container .iphone.white h3 span{
  color:var(--iphone-white-text-highlight);
}
.sticky-container .iphone.red{
background-color: var(--iphone-red-bg);
z-index: 30;

clip-path: inset(100% 0px 0px 0px);
}
.sticky-container .iphone.red h3{
  color:var(--iphone-red-text);
}
.sticky-container .iphone.red h3 span{
  color:var(--iphone-red-text-highlight);
}
.sticky-container.no-sticky{
  position: relative;
  overflow: visible;
}
.sticky-container.no-sticky .iphone{
  position: relative;
}
.sticky-container.no-sticky .iphone.red{
  padding-bottom: calc(var(--iphone-offscreen)* -1);
}
</style>
