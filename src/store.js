import { createStore } from "vuex" 
import axios from "axios";

const store = createStore({

   state:{
        counter:0,
        searchText:"",
       // resultList: [],
        playList: [],
        playIdList: [],
        musicObject:{},
        artistId:"",
        artistObject:{}

      
   },
 

   mutations:{

      setIdPlayList(state, payload) {
     
      state.playIdList.push(payload);
    },
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
      },  
      getIdList(state){
        return state.playIdList;
      },
      getNextMusicObject(state){
        return state.playList[state.counter];
       
      }

}
})

export default store