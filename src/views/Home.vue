<template>
  <div class="home">我是home</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { add } from "../api/help";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    // https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125
    // instance(
    //   "/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125"
    // ).then(res => {
    //   console.log(res);
    // });
    add().then(res => {
      console.log(res);
    });
  }
};
</script>
