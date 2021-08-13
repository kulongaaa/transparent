<template>
    <div class="aa">
    <h1>
        Up to 20 hours of battery life - thie longest in any Mac Ha.(I am klong)</h1>
    </div>
</template>
<script>
export default {
     name: 'a13',
  data(){
    return{

    }
  },
  methods:{
      
  },
  mounted(){
   window.addEventListener('scroll',()=>{
      let nostuckyoffset = document.documentElement.clientHeight * 2
      let scrolled1 =document.documentElement.scrollTop/nostuckyoffset
      if(scrolled1>3.4) {
        //   let progress =0
    //    if(progress<1){
    //     progress=
    //     parseFloat(progress+0.5)
        document.querySelector('h1').style.setProperty('--progress',(scrolled1-3.5)*5)
        // setTimeout(this.run(),20)
         console.log(scrolled1-3.4);
        }
      }
     
    )
  }
}
</script>
<style scoped>
.aa{
        position: relative;
    top: 2700px;
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background-color: #000;
}
h1{
    --progress:0.6;

    color:transparent;
    width:50%;
    margin:0 auto;
    font-size:60px;
    font-family:Helvetica;
    letter-spacing: -3px;
    background-image: linear-gradient(#fff calc(100% - calc(var(--progress) * 100%)),#4cd265 calc(100% - calc(var(--progress)*100%)));
    background-clip: text;
    -webkit-background-clip: text;


    transform: scale( clamp(1, calc((var(--progress) - 0.99)*200),1.3));
    transition: .3s transform ease-out;
}
</style>