import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {axios} from "@/utils/axios";

const store=new Vuex.Store({
  state: {
    obj:{
      cinemalist:[],
      movielist:[],
      movielist2:[],
    }
  },
  mutations: {
    getcinema(state,payload){
      state.obj = {...state.obj,cinemalist:payload}
    },
    getmovie(state,payload){
      state.obj = {...state.obj,movielist:payload}
    },
    getmovie2(state,payload){
      state.obj = {...state.obj,movielist2:payload}
    }
  },
  actions: {
    getcinema({commit},{cityId,cb}){
      axios.get("/maizuo/gateway?ticketFlag=1&k=635051",{
        params:{
          cityId
        },headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'   // 根据请求头返回数据
        }
      }).then(res=>{
        cb()
        commit("getcinema",res.data.data.cinemas)
      })
    },
    getmovie({commit},{cityId,cb}){
      axios.get("/maizuo/gateway?pageNum=1&pageSize=10&type=1&k=3196669",{
        params:{
          cityId
        },
        headers:{
           "X-Host":"mall.film-ticket.film.list"
         }
      }).then(res=>{
        cb()
        commit("getmovie",res.data.data.films)
      })
    },
    getmovie2({commit},{cityId,cb}){
      axios.get("/maizuo/gateway?pageNum=1&pageSize=10&type=2&k=6676668",{
        params:{
          cityId
        },
        headers:{
           "X-Host":"mall.film-ticket.film.list"
         }
      }).then(res=>{
        cb()
        commit("getmovie2",res.data.data.films)
      })
    }
  },
  modules: {
  }
})
export default store;