import { createStore } from "vuex" 
import axios from "axios";

const store = createStore({

   state:{
        searchText:"",
       // resultList: [],
        playList: [],
        musicObject:{},
        artistId:"",
        artistObject:{}
        
      
   },
 

   mutations:{

     
        setMusicObject(state, payload) {
           state.musicObject = payload;
           state.playList.push(payload);
         },

         setArtistId(state, payload){
           state.artistId = payload;
         },
         setArtistObject(state, payload){
          state.artistObject = payload;
        }

    
   },

   actions:{
    async fetchArtistObject(context) {
      const url ='https://yt-music-api.herokuapp.com/api/yt/artist/' + this.artistId
        
      await axios.get(url)
      .then((response) => {
       this.artistObject = response.data 
      })
      
      },

  
   },
   


getters: {   
      getMusicObject(state) {
        return state.musicObject;
      },
      getArtistId(state) {
        return state.artistId;
      },
      getArtistObject(state){
        return state.artistObject;
      },
      getPlayList(state){
        return state.playList;
      }  

}
})

export default store