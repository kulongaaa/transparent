<template>
  <div>
    <div class="row">
      <div class="black">
        <div class="black-1">深色世界。</div>
        <div class="black-1">&nbsp;酷&nbsp;&nbsp;&nbsp;珑。&nbsp;</div>
      </div>
    
      <div class="picture2" ref="img"></div>
      </div>
  </div>
</template>

<script>
// import mousewheel from "@/mousewheel";
export default {
  name: "black",
  data() {
    return {};
  },
  // mounted() {
  //   const img = this.$refs.img;
  //   const factor = 0.008;
  //   let count = 1;
  //   mousewheel(document.body, function (e) {
  //     if (e.wheelDetail < 0) {
  //       // console.log(img.getBoundingClientRect().top);
  //       if (img.getBoundingClientRect().top < 50&&img.getBoundingClientRect().left>0) {
  //         //    img.style.width=img.offsetWidth+1+'px'
  //         img.style.transform = `matrix(${count}, 0, 0, ${count}, 0, 0)`;
  //         count += factor;
  //       }

  //     } else {
  //         if(count>1)
  //         {
  //       img.style.transform = `matrix(${count}, 0, 0, ${count}, 0, 0)`;
  //       count -= factor;
  //         }
  //     }
  //   });
  // },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.picture2 {
  background: url("../assets/2.png") no-repeat;
  background-size: 1003px 712px !important;
  width: 1003px !important;
  height: 712px !important;
  left: 600px;
  flex-basis: 58.33333%;
  max-width: 58.33333%;
}
.black {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding-top: 0px;
  text-align: left;
  padding-bottom: 50px;
  color: #86868b;
  flex-basis: 41.66667%;
  max-width: 41.66667%;
}
.black-1 {
  padding-left: 0.6em;
  margin-top: 18px;
  font-size: 80px;
  line-height: 1.05;
  font-weight: 600;
}

@media only screen and (max-width: 767px) {
  .black-1 {
    font-size: 50px;
  }
}
</style>
