<template>
  <div class="hello">
  <div class="kfont">
    Klong
  </div>
  <div class="ksay1">
    <ul class="ac-menu-items">
      <li class="ac-menu-item">
        <span class="ac-menu-link">概览</span>
      </li>
      <li class="ac-menu-item">
       <span class="ac-menu-link"> 技术规格</span>
      </li>
      <li class="ac-menu-item">
        <span class="ac-menu-link">个人中心</span>
      </li>
    </ul>
  </div>
  <div class="ksay2">
      <ul class="ac-menu-items">
      <li class="ac-menu-item">
        <span class="ac-menu-link">我的</span>
      </li>
      </ul>
  </div>
  <div class="bor"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
      position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    min-width: 1024px;
    z-index: 99;
       backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255,255,255,0.72);
}
.kfont{
  font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
      font-size: 21px;
    line-height: 1.14286;
    font-weight: 600;
    cursor: default;
    display: block;
    float: left;
    margin: 16px 10px -14px;
}
@media only screen and ( max-width: 1536px)
{
  .hello{
    min-width: 320px;
      
}
.ksay1{
          display: flex;
    }
    .ksay2{
      display: none;
    }
  }
  @media only screen and (max-width: 767px)
  {
    .ksay1{
          display: none;
    }
    .ksay2{
      display: flex;
    }
  }
   ul {
    list-style: none;
   }
.ac-menu-item {
    margin-left: 24px;
    float: left;
    list-style: none;
    font-size: 8px;
}
.ac-menu-link {
    color: rgb(0, 0, 0);
    display: inline-block;
    line-height: 20px;
    white-space: nowrap;
    opacity: .66;
}
.ksay1{
   /* font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
      font-size: 21px;
    line-height: 1.14286;
    font-weight: 600;
    cursor: default; */
    /* display: flex; */
    /* float: left;
    margin: 16px 10px -14px; */
    float: right;
    padding: 0 22px;
    font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
    

}
.ksay2{
   font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
      /* font-size: 21px;
    line-height: 1.14286;
    font-weight: 600;
    cursor: default; */
    /* display: none; */
    /* float: left; */
    /* margin: 16px 10px -14px; */
    padding: 0 22px;
    float: right;
    

}

.bor{
  background-color: rgba(0,0,0,0.16);
  display: block;
    position: absolute;
    top: 100%;
    height: 1px;
        width: 100%;
        content: "";
}
</style>
