/*import { createStore } from "vuex" 

const store = createStore({
   state:{
        name: "Vue"
   },


   mutations:{
       setName(state, x){
           state.name = x
       }
   },
   
   actions:{
        async ({commit}){
            let name = 'Vue with vuex'
            commit('setName', name)
        }
   }
})

export default store */


import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    musicList: [],
    searchQuery: "",
    songObject: {},
  },


  // Metoder som används för att manipulera datan.
  // Påkallas med commit
  mutations: {
    setMusicList(state, payload) {
        state.musicList = payload;
      },   
    setSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
    setSongObject(state, payload) {
      state.songObject = payload;
    },
    
  },



  //Kommunikationen med backend(API), hämtar data och tillsätter i state.
  actions: {
   
    async fetchMusicList() {
      console.log('SearchQuery is: '+this.state.searchQuery)
      const url ='https://yt-music-api.herokuapp.com/api/yt/songs/' + this.state.searchQuery
      
      await axios.get(url)
      .then(response => {
       this.commit("musicList", response.data) 
      })
    },

  


},




  // Hämtar datan åt komponenter
  getters: {
    getMusicList(state){
      return state.musicList
    },

}
  
})
