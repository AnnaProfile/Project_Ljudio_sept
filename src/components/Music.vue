<template>

  <div>
    <div class="top">
    <input
    v-model="search"
    class="search-bar"
    type="text"
    placeholder="find a song"/>
    <button @click="myResultList(), myResultArtistList()">search</button>
  </div>
   
   <div class="thePlayer">
     <Player/>
   </div>
   </div>
     
  <div class="results">
    
    <div class="list-recent-music" >
      <h2>Recently played</h2>
        <li v-for="song in playedSongsList" :key="song.browseId">
           {{ song.name }}
          {{song.artist.name}} 
        </li>   
    </div>

    <div class="artists" >
      <h2>Artists</h2>
    <ArtistCard  v-for="(artist, i) in resultArtistList.content" :key="artist.browseId+i" :artist="artist"/>
    </div>

    <div class="list-music" >
      <h2>Songs</h2>
    <MusicCard  v-for="(music, i) in resultList.content" :key="music.videoId+i" :music="music"/>
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
          playedSongs:[],
          resultList:[],
          resultArtistList:[],
          searchText: ""
        }

    },
     computed: {

  
       playedSongsList() {
        return this.$store.getters.getPlayList;
       
     },
  
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

.thePlayer{
  margin-top: 5vh;
  
}

template {
  background-color: rgb(113, 153, 153);;
}
.list-music {
  margin-bottom: 20px;
}


 .search-bar{
   width: 30vh;
   border-width: 5px;
   margin-right: 10px;
 }


 button{
   
color: rgba(66,48,1,1);
border-radius: 5px;
border: 1px solid rgba(251,185,232,1);
background: rgba(251,168,225,1); /* Bakgrundsfärg om övertoningen inte visas */
/* Safari, iOS, Android */
background: -webkit-linear-gradient(top,
rgba(252,236,252,1) 0%,
rgba(251,166,225,1) 50%,
rgba(253,137,215,1) 55%,
rgba(255,124,216,1) 100%);
/* Internet Explorer */
background: -ms-linear-gradient(top,
rgba(252,236,252,1) 0%,
rgba(251,166,225,1) 50%,
rgba(253,137,215,1) 55%,
rgba(255,124,216,1) 100%);
/* Mozilla Firefox */
background: -moz-linear-gradient(top,
rgba(252,236,252,1) 0%,
rgba(251,166,225,1) 50%,
rgba(253,137,215,1) 55%,
rgba(255,124,216,1) 100%);
/* W3C standard specification */
background: linear-gradient(top,
rgba(252,236,252,1) 0%,
rgba(251,166,225,1) 50%,
rgba(253,137,215,1) 55%,
rgba(255,124,216,1) 100%);

box-shadow:
inset 0 0 0 1px rgba(255, 255, 255, 0.3),
0 2px 3px rgba(0,0,0,0.70);
}
button:hover {
cursor: pointer;
/* Safari, iOS, Android */
background: -webkit-linear-gradient(top,
rgba(255,255,255,1) 0%,
rgba(254,231,247,1) 50%,
rgba(254,195,234,1) 51%,
rgba(255,184,234,1) 100%);
/* Internet Explorer */
background: -ms-linear-gradient(top,
rgba(255,255,255,1) 0%,
rgba(254,231,247,1) 50%,
rgba(254,195,234,1) 51%,
rgba(255,184,234,1) 100%);
/* Mozilla Firefox */
background: -moz-linear-gradient(top,
rgba(255,255,255,1) 0%,
rgba(254,231,247,1) 50%,
rgba(254,195,234,1) 51%,
rgba(255,184,234,1) 100%);
/* W3C standard specification */
background: linear-gradient(top,
rgba(255,255,255,1) 0%,
rgba(254,231,247,1) 50%,
rgba(254,195,234,1) 51%,
rgba(255,184,234,1) 100%);
}
/* Muspekare intryckt */
button:active {
color: rgba(255,255,255,1);
/* Flyttar knappen när den trycks in */
position: relative;
left: 1px;
top: 1px;
}
 
</style>