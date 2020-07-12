<template>
  <div class="app" :class="animateClass">
    <van-nav-bar title="影院" :left-text="city.name" @click-left="changecity">
  <template #right>
    <van-icon name="search" size="50" />
  </template>
</van-nav-bar>
  <div class="c-list">
            <router-link :to="{name:'cinemadetail',params:{cinemaId:cinema.cinemaId}}" class="c-item" v-for="(cinema,index ) in obj.cinemalist" :key="index">
                <div class="c-left" @click="selectcinema(cinema)">
                    <h4>{{cinema.name}}</h4>
                    <h6>{{cinema.address}}</h6>
                </div>
                <div class="c-right" @click="selectcinema(cinema)">
                  <p>{{cinema.lowPrice /100 | price }}</p>
                    <strong>距离未知</strong>
                </div>
            </router-link>
        </div>
  </div>
</template>

<script>
import {
    animate
} from "@/utils"
import {
    mapState,
    mapActions
} from "vuex"
export default {
  mixins:[animate],
  methods:{
     ...mapActions([
            "getcinema"
        ]),
        changecity(){
            this.$router.push({name:"city"})
        },
        selectcinema(cinema){
          localStorage.setItem("cinema",JSON.stringify(cinema))
        }
  },
  computed:{
    ...mapState([
            "obj"
        ])
  },
  data(){
    return{
      city:{}
    }
  },
  mounted(){
    if(localStorage.city){
      var city = JSON.parse(localStorage.city);
      this.city = city
    }else{
      this.$router.push({name:"city"})
    };
    this.getcinema({cityId:this.city.cityId,cb:()=>{
            // 跳转逻辑 
            // 警告弹框逻辑
            console.log("Are you OK?????")
        }})
  },
}

</script>

<style lang="scss" scoped>
.c-list{
    width:100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    .c-item{
        width:100%;
        display: flex;
        padding:15px;
       border-bottom: 0.5px solid #ededed;
        box-sizing: border-box;
        .c-left{
            width:70%;
            text-align: left;
            h4{
                font-size: 15px;
                margin-top:2px;
                color:#191a1b;
            }
            h6{
                font-size:12px ;
                margin-top: 10px;
                display: block;
                max-width: 80%;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                color:#797d82;
            }
        }
        .c-right{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                margin-top: 2px;
                text-align: right;
                color: #ff5f16;
            }
            strong{
              font-weight: 300;
                margin-top:10px;
                color: #797d82;
                text-align: right;                
            }

        }
    }
}
</style>