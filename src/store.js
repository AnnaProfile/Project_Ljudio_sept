import { createStore } from "vuex" 
import axios from "axios";

const store = createStore({

   state:{
        counter:0,
        searchText:"",
        playList: [],
        playIdList: [],
        musicObject:{},
        artistId:"",
        artistObject:{},
        nextObject:{},
        musicVideoLink: "https://www.youtube.com/watch?v=pAzEY1MfXrQ"

      
   },
 

   mutations:{

      setIdPlayList(state, payload) {
     
      state.playIdList.push(payload);
    },
        setMusicObject(state, payload) {
           state.musicObject = payload;
           state.playList.unshift(payload);
           
         },
         setURL(state, payload){
           state.musicVideoLink = "//https://www.youtube.com/watch?v=" + payload
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
       // state.playList.push(state.nextObject);
        return state.playList.slice(0,1);
       
      },
      getMusicLink(state){
        return state.musicVideoLink;
      }


}
})

export default store