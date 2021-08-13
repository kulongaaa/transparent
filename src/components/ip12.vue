<template>
<div>
 <div class=" fade-in picture1"></div>
 <div class="ip12">
 <div class=" fade-in ip12-1" >高&nbsp;级&nbsp;威&nbsp;胁&nbsp;检&nbsp;测&nbsp;响&nbsp;应&nbsp;平&nbsp;台</div>
<div class="fade-in ip12-2" >态势感知。</div>
<div class="fade-in ip12-3" >&nbsp;酷&nbsp;珑&nbsp;</div>
 </div>
</div>
</template>

<script>
export default {
  name: 'ip12',
  data(){
    return{
       fadeInElements: [],
    }
  },
  mounted () {
    // 先获取全部需要过渡效果的元素
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    // 监听鼠标滚动事件 
    document.addEventListener('scroll', this.handleScroll)
  },
  methods:{
       handleScroll () {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = 1
          elem.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
         this.fadeInElements.splice(i, 1) 
        }
      }
    },
     isElemVisible (el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top + 40
      var elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    }
  },
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.picture1{
    background: url("../assets/1.jpg") no-repeat center;
    width:100%;
    height:800px;
    background-size: 700px 650px;
 max-width: 100%;
    
}
.ip12{
    font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
    padding-top: 0px;
    text-align: center;
    padding-bottom: 50px;
}
.ip12-1{
    font-size: 28px;
    line-height: 1.14048;
    font-weight: 600;
    letter-spacing: .011em;
}
.ip12-2{
    
        padding-left: 0.6em;
        margin-top: 18px;
        font-size: 80px;
    line-height: 1.05;
    font-weight: 600;
}
.ip12-3{
     font-size: 28px;
    line-height: 1.14048;
    font-weight: 600;
    letter-spacing: .011em;
    margin-top: 20px;
}
.fade-in{
    opacity: 0;
    transition: 2s all ease-out;
    transform: matrix(1, 0, 0, 1, 0, 30);
}
@media only screen and (max-width: 767px)
  {
      .ip12-1{
          font-size: 15px;
      }
    .ip12-2{
          font-size:50px;
    }
  }

</style>
