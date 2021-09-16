import { createStore } from "vuex" 
import axios from "axios";

const store = createStore({

   state:{
        searchText:"",
       // resultList: [],
      
        playList: []
      
   },

   mutations:{

        addPlayList(state, data){
            state.playList.push(data)
        },
     /*   updateSearchText(state, data) {
            state.searchText = data;
            this.fetchResultList;
          }, */
        
   },

   actions:{

   /* async fetchResultList() {
        console.log('Search text is: '+this.state.searchText)
        const url ='https://yt-music-api.herokuapp.com/api/yt/songs/' + this.state.searchText
        
        await axios.get(url)
        .then(response => {
         this.commit("resultList", response.data) 
        })

      },
*/
   },
   


getters: {

   /* getResultList() {
      return this.resultList;
    },*/
}
})

export default store