<template>
    <div class="box" :class="animateClass">
        <div class="header">
          <div class="headleft" @click="onclickleft">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg==" alt="">
          </div>
        </div>
        <div>
          <div class="title">{{detail.name}}</div>
            <div class="odiv">
                <p class="op" @click="showPopup" v-for="(s,i) in detail.services" :key="i">
                    {{s.name}}
                </p>
            </div>
            <div class="addressbox">
              <img class="add" src="data:image/png;base64,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" alt="">
                <span> {{detail.address}}</span>
                <van-icon class="phone" @click="call(detail.phone)"  name="phone-o" size="38" />
            </div>
        </div>
        <van-popup 
        v-model="show"
        position="top"
        
        >
            <div v-for="(s,i) in detail.services" :key="i">
                <p class="name"> {{s.name}}</p>
                <b> {{s.description}}    </b>
            </div>
        </van-popup>

        <div class="swiper">
            <Carousel id="b3" :swiperoptions="options">
                <Carousel-item v-for="(film,i) in films" :key="i" >
                    <img class="swiperimg" :src="film.poster" alt="">
                </Carousel-item>
            </Carousel> 
        </div>

        <div v-show="active==i" @click="gotoFilm(film)" class="item" v-for="(film,i) in films" :key="i" >
            <p class="moviename">{{film.name}}  <span> {{film.grade}}分 </span>  </p> 
            <p class="cond"> {{film.category}} | {{film.runtime + '分钟'}} | {{film.director}}</p>
            <img class="gotofilm" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg==" alt="">
        </div>

  
    </div>
</template>


<script>
import {
    animate
} from "@/utils"
export default {
    mixins:[animate],
    data(){
        return {
            detail:{},
            show:false,
            films:{},
            options:{},
            active:0,
            cinema:{}
        }
    },
    methods:{
        gotoFilm(film){
            this.$router.push({name:'films',params:{
                filmId:film.filmId
            },query:{
                name:film.name
            }})
            localStorage.setItem("film",JSON.stringify(film))
        },
        call(phone){
            alert(phone);
        },
        onclickleft(){
            this.$router.go(-1);
        },
        showPopup(){
            this.show =!this.show;
        }
    },
    mounted(){
        // if(localStorage.cinema){
        //     var cinema = JSON.parse(localStorage.cinema);
        //     this.cinema = cinema
        // }
        console.log(this.$route);
        this.$axios.get("/maizuo/gateway/?k=417263",{
            params:{
                cinemaId:this.cinema.cinemaId
            },
            headers:{
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then(res=>{

            this.detail =res.data.data.cinema;
        })
    },
    created(){
        if(localStorage.cinema){
            var cinema = JSON.parse(localStorage.cinema);
            this.cinema = cinema
        }
        this.$axios.get("/maizuo/gateway?k=9682114",{
            params:{
                cinemaId:this.cinema.cinemaId
                // cinemaId:4876
            },
            headers:{
                'X-Host': 'mall.film-ticket.film.cinema-show-film'
            }
        }).then(res=>{
            this.films = res.data.data.films;
            var that = this;
            this.options = {
                observer:true,
                slidesPerView:"auto",
                effect : 'coverflow',
                // slidesPerView: 2,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 40,
                    stretch: 15,
                    depth: 30,
                    modifier: 2,
                    slideShadows : false,
                },
                on:{
                    slideChange: function(){  
                        console.log('改变了，activeIndex为'+this.activeIndex);
                        that.active = this.activeIndex;
                    },
                },
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.box{
    background: #fff;
}
h4{
  font-size:14px ;
}
.header{
    overflow: hidden;
    background: #fff;
    height: 44px;
    .headleft{
      position: fixed;
      top: 0;
      height: 44px;
      line-height: 44px;
      padding-left: 15px;
      img{
        width: 11px;
        height: 18px;
        margin-top: 8px;
      }
    }
}
.title{
    position: relative;
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    background: #fff;
    top: 0;
    height: 44px;
    line-height: 44px;
}
.odiv{
    background: #fff;
    width:100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .op{
      padding: 0 5px;
      font-size:10px;
        margin:3px;
        color:#ffb232;
        border: 1px solid #ffb232;
    }
}
.addressbox{
    background: #fff;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 17px;
  span{
    font-size: 14px;
    display: inline-block;
    padding: 0 12px;
  }
  .phone{
    padding: 0 35px;
  }
}
.add{
  display: inline-block;
  width: 14px;
  height: 21px;
}
.swiper{
    background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .swiperimg{
      background: #fff;
    width: 90px;
    height: 130px;
    margin-left:100px;
    padding: 15px 2px;
  }
}
.moviename{
    text-align: center;
    background: #fff;
      font-size: 15px;
    color: #191a1b;
    padding-right: 5px;
    span{
          color: #ffb232;
    }
}
.gotofilm{
    width: 4px;
    height: 8px;
    position: absolute;
    right: 15px;
    top: 0;
    margin-top: 36px;
}
.cond{
    text-align: center;
    height: 18px;
    color: #797d82;
    font-size: 13px;
    padding: 0 12%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.swiper-container{
    width:80%;
}
.swiper-slide{
    flex:1;
}

.item{
    position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #ededed;
    color:black;
    font-size:10px;
}
</style>
