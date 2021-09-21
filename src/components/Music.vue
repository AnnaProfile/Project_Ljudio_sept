<template>

  <div>

    <input
    v-model="search"
    class="search-bar"
    type="text"
    placeholder="find a song"/>
    <button @click="myResultList(), myResultArtistList()">search</button>
  </div>
   
   <div>
     <Player/>
   </div>
   
     <br>
  <div class="results">
    <div class="list-music" >
      <h2>Songs</h2>
    <MusicCard  v-for="(music, i) in resultList.content" :key="music.videoId+i" :music="music"/>
    </div>

    <div class="artists" >
      <h2>Artists</h2>
    <ArtistCard  v-for="(artist, i) in resultArtistList.content" :key="artist.browseId+i" :artist="artist"/>
    </div>
  </div>
    
 
  
</template>

<script>
import axios from "axios";
import MusicCard from "./MusicCard.vue";
import Player from "./Player.vue";
import ArtistCard from "./ArtistCard.vue"


export default{
  name:"Music", 
  components:{
    MusicCard, Player, ArtistCard 
  },
  

  data() {
        return{
          resultList:[],
          resultArtistList:[],
          searchText: ""
        }

    },
     computed: {


       search: { 
         set(value){ this.searchText=value } ,
         get(){return this.searchText}
         
       },
      
      
     },

     methods: {

       async myResultList() {
        const url ='https://yt-music-api.herokuapp.com/api/yt/songs/' + this.searchText
        
        await axios.get(url)
        .then((response) => {
         this.resultList = response.data 
        })
        
        },

         async myResultArtistList() {
        const url ='https://yt-music-api.herokuapp.com/api/yt/artists/' + this.searchText
        
        await axios.get(url)
        .then((response) => {
         this.resultArtistList = response.data 
        })
        }
        
      },
 
     
      

mounted(){
      this.myResultList
      this.myResultArtistList
    }
           

}
</script>
<style scoped>

.results{
  align-items: center;
}


 .search-bar{
   width: 30vh;
 }
</style>