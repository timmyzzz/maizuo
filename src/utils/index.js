export var foots = [
    {txt:"电影",name:"movie",path:"/main/movie",icon:"&#xe717;"},
    {txt:"影院",name:"cinema",path:"/main/cinema",icon:"&#xe8c0;"},
    {txt:"资讯",name:"news",path:"/main/news",icon:"&#xe61a;"},
    {txt:"我的",name:"mine",path:"/main/mine",icon:"&#xe619;"},
]

// 混入动画  
export const animate = {
    data(){
        return {
            animateClass:"enter"
        }
    },
    beforeRouteEnter(to,from,next){
        // console.log("beforeRouteEnter")
        // this 取不到  
        // 路由进入之前  组件实例还未获取到  所以这里不要使用 this 
        next();
    },
    beforeRouteLeave(to,from,next){
        // console.log("beforeRouteLeave");
        this.animateClass = "leave";
        setTimeout(()=>{
            next();
        },400)
    }
}