<template>
  <div class="app" :class="animateClass">
    <div class="citylist">
        <van-nav-bar
  title="当前城市"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
        <van-index-bar :index-list="pylist" >
            <div v-for="(py,i) in pylist"  :key="i" > 
                <van-index-anchor :index="py" class="indexlist"/>
                <van-cell 
                v-for="(city,index) in cityList.filter(item=>item.pinyin.indexOf(py.toLowerCase())=='0')"
                :key="index"
                :title="city.name" 
                @click="selectCity(city)"
                />
            </div>
        </van-index-bar>
    </div>
  </div>
</template>


<script>
import {
    animate
} from "@/utils"
import { Toast } from 'vant';
export default {
  mixins:[animate],
    data(){
        return{
            cityList: [],
      pylist: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        // "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        // "U",
        // "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push("/main/cinema")
        },
        selectCity(city){
          console.log(city);
          localStorage.setItem("city",JSON.stringify(city)); // vuex
          this.$router.push({name:"cinema"});
      }
    },
    mounted(){
        Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner",
      duration: 10000
    });
    this.$axios({
        url:"/maizuo/gateway?k=2020849",
        headers:{
            "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',
        "X-Host": "mall.film-ticket.city.list"
        }
    }).then(res=>{
       Toast.clear();
      console.log(res);
      this.cityList = res.data.data.cities;
      Toast.success("获取城市信息成功"); 
    })
    }
}
</script>
<style lang="scss" scoped>

    .header{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 44px;
            overflow: hidden;
            margin: 0;
            padding: 0;
            z-index: 300;
    }
    .indexlist{
       background: #f4f4f4;
    }
</style>