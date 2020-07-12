<template>
  <div class="app" :class="animateClass">
    <div class="c-list">
      <van-tabs v-model="active" title-active-color="#ff5f16" >
      <van-tab title="正在上映">
            <router-link :to="{name:'mine',params:{film:film.filmId}}" class="c-item" v-for="(film,index ) in obj.movielist" :key="index">
                <div class="movielist">
                  <div class="moviebox">
                    <div class="img">
                      <img :src="film.poster" alt="">
                    </div>
                  </div>
                  <div class="moviemsg">
                    <div class="moviename">
                      <span class="mn">{{film.name}}</span>
                      <span class="item">{{film.item.name}}</span>
                    </div>
                    <div class="gradebox">
                      <span class="label">观众评分</span>
                      <span class="grade">{{film.grade}}</span>
                    </div>
                    <div class="actors gradebox">
                      <span>主演：</span>
                      <span v-for="(result,index ) in film.actors" :key="index">{{result.name}}</span>
                    </div>
                    <div class=" actors local gradebox">
                      <span>{{film.nation}} | {{film.runtime}}分钟</span>
                    </div>
                  </div>
                </div>
            </router-link>
      </van-tab>
      <van-tab title="即将上映">
        <router-link :to="{name:'mine',params:{filmId:film.filmId}}" class="c-item" v-for="(film,index ) in obj.movielist2" :key="index">
                <div class="movielist">
                  <div class="moviebox">
                    <div class="img">
                      <img :src="film.poster" alt="">
                    </div>
                  </div>
                  <div class="moviemsg">
                    <div class="moviename">
                      <span class="mn">{{film.name}}</span>
                      <span class="item">{{film.item.name}}</span>
                    </div>
                    <div class="gradebox">
                      <span class="label">观众评分</span>
                      <span class="grade">{{film.grade}}</span>
                    </div>
                    <div class="actors gradebox">
                      <span>主演：</span>
                      <span v-for="(result,index ) in film.actors" :key="index">{{result.name}} </span>
                    </div>
                    <div class=" actors local gradebox">
                      <span>{{film.nation}} | {{film.runtime}}分钟</span>
                    </div>
                  </div>
                </div>
            </router-link>
      </van-tab>
    </van-tabs>
            
        </div>
  </div>
</template>

<script>
import {
    animate
} from "@/utils"
import {mapState,mapActions} from "vuex"
export default {
  mixins:[animate],
  data(){
    return{
      city:{},
      active:0,
    }
  },
  methods:{
        ...mapActions(['getmovie',"getmovie2"])
    },
    computed:{
        ...mapState(['obj'])
    },
    mounted(){    
      if(localStorage.city){
      var city = JSON.parse(localStorage.city);
      this.city = city
    }else{
      this.$router.push({name:"city"})
    };
    this.getmovie({cityId:this.city.cityId,cb:()=>{
            // 跳转逻辑 
            // 警告弹框逻辑
            console.log("Are you OK?????")
        }});
        this.getmovie2({cityId:this.city.cityId,cb:()=>{
            // 跳转逻辑 
            // 警告弹框逻辑
            console.log("Are you OK?????")
        }});
    }
}
</script>
<style lang="scss" scoped>
.app{
  height: 100%;
  background: white;
}
div{
  text-align: left;
}
  .movielist{
    list-style: none;
    padding: 0;
    margin-left: 15px;
    margin-bottom: 0;
    margin-top: 0;
    background-color: white;
    padding: 15px 15px 15px 0;
    height: 94px;
    position: relative;
    .moviebox{
          padding: 0 15px 15px 0;
          height: 94px;
          position: relative;
          float: left;
          .img{
            width: 66px;
            height: 94px;
            background: rgb(249, 249, 249);
            float: left;
            img{
              width: 66px;
              height: 90px;
              
            }
          }
    }
    .moviemsg{
      float: left;
      width: calc(100% - 116px);
      padding: 0 10px;
    }
    .moviename{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          .mn{
            text-align: left;
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item{
            margin-top: -2px;
            display:inline-block;
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 16px;
            line-height: 16px;
            padding:0  2px;
            border-radius: 2px;
            vertical-align: middle;
          }
    }
    .gradebox{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          line-height: 26px;
          .label{
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
          .grade{
            color: #ffb232;
            font-size: 14px;
          }
          
    }
    .actors{
      line-height: 26px;
            span{
                  font-size: 13px;
                margin-top: 4px;
                color: #797d82;
            }
          }
  }
</style>