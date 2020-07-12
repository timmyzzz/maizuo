<template>
    <div class="app" :class="animateClass">
        <div class="goback" @click="goback">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">

        </div>
         <img :src="film.poster" alt="" class="m-img">
        <div class="filmbox">
           <div class="float">
                <div class="film-name">
                <span class="filmname">{{film.name}}</span>
                <span class="filmitem">{{film.filmType.name}}</span>
            </div>
            <div class="film-grade">
                <span class="grade">{{film.grade}}分</span>
            </div>
           </div>
           
            <div class="cate">{{film.category}}</div>
            <div class="cate">2020-01-25上映</div>
            <div class="cate">{{film.nation}} | {{film.runtime}}分钟</div>
            <div class="cate">{{film.synopsis}}</div>
            <div>
                <div class="people">演职人员</div>
                <div class="actors">
                    
                    <div v-for="(ac,i) in film.actors" :key="i">
                        <img :src="ac.avatarAddress" alt="">
                        <p>{{ac.name}}</p>
                        <p>{{ac.role}}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="people">剧照</h1>
                <div class="photos actors">
                    <div v-for="(p,i) in film.photos" :key="i">
                        <img :src="p" alt="" class="op">
                    </div>
                </div>
            </div>
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
        return{
            film:{}
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    mounted(){
        if(localStorage.film){
            var film = JSON.parse(localStorage.film);
            this.film=film
        }
        this.$axios.get("/maizuo/gateway?k=4388992",{
            params:{
               filmId:this.film.filmId  
            },
             headers:{
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            this.film = res.data.data.film
        })
    }
}
</script>

<style lang="scss">
#app{
    background: #797d82;
}
    .goback{
    position: fixed;
    background-color: hsla(0,0%,100%,0);
    color: transparent;
    transition: all .3s ease;
    width: 100vw;
    height: 44px;
    z-index: 1;
    img{
        height: 30px;
        position: absolute;
        top: 5px;
        left: 5px;
    }
    }
.m-img{
    width:100%;
    height:220px;
}
.float{
    height:24px;
}
.people{
        width: 200px;
        padding: 15px;
        font-size: 16px;
        text-align: left;
        color: #191a1b;
    }
.actors{
    
    margin-top: 10px;
    width:100%;
    display: flex;
    overflow: scroll;
    div{
        flex:1;
    }
}

.op{
    width:200px;
    height:200px;
}
.filmbox{
        padding: 15px;
    padding-top: 12px;
    background-color: #fff;
}
.film-name{
    width: 240px;
    text-align: left;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    float: left;
    .filmname{
        text-align: left;
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
    }

    .filmitem{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
    }
}
.film-grade{
    width: calc(100% - 250px);
    text-align: right;
    color: #ffb232;
    box-sizing: border-box;
    float: left;
    .grade{
    font-size: 18px;

    }
}
.cate{
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
}
.photos{
    img{
    width: 150px;
    height: 100px;
    background: rgb(249, 249, 249);
    margin-right: 10px;
    }
       
}
</style>