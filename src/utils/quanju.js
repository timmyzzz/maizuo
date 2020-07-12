
import Vue from "vue"
import Foot from "@/components/Foot.vue"
import Carousel from "@/components/Carousel.vue"
import CarouselItem from "@/components/CarouselItem.vue"
Vue.component("Foot",Foot)
Vue.component("Carousel",Carousel);
Vue.component("CarouselItem",CarouselItem);

Vue.filter("price",value=>{
    if(!value) return value;
    return "￥"+  value.toFixed() + " " +  "起"; 
})