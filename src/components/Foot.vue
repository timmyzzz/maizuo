<template>
    <footer>
        <van-tabbar v-model="active" active-color="#ff5f16" :route="true">
  <van-tabbar-item 
    v-for="(foot,i) in foots"
    :key=i
    :to="{name:foot.name}"
  >
  <span>{{foot.txt}}</span>
  <template #icon="props">
      <i class="iconfont" v-html="foot.icon"></i>
      </template>
  </van-tabbar-item>
</van-tabbar>
    </footer>
</template>

<script>
import {
    foots
} from "@/utils"
export default {
    data(){
        return{
            active:0,
            foots
        }
    }
}
</script>