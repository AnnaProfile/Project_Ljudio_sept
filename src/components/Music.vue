<template>
  <main>
  
    <div class="top">
      <div class="inputSearch">
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
     
  
    <div class="playList" >
      <div>
        <h2>My Playlist</h2>
      </div>
        <li v-for="song in playedSongsList" :key="song.browseId">
           
          {{song.artist.name}} {{ song.name }}
        </li>   
    </div> 

  

   
    <div class="musicList"  >
     <h2>Songs</h2>
     <div class="theList">
    <MusicCard  v-for="(music, i) in resultList.content" :key="music.videoId+i" :music="music"/>
    </div>
    </div>
    
    
    <div class="artists" >
      <h2>Artists</h2>
      <div class="theList">
    <ArtistCard  v-for="(artist, i) in resultArtistList.content" :key="artist.browseId+i" :artist="artist"/>
    </div>
    </div>

    
  </main>
    
 
  
</template>

<script>
import axios from "axios";
import MusicCard from "./MusicCard.vue";
import Player from "./Player.vue";
import ArtistCard from "./ArtistCard.vue"
import { Email } from 'vue-socialmedia-share';


export default{
  name:"Music", 
  components:{
    MusicCard, Player, ArtistCard, Email 
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

main{ 
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 14em auto;
  column-gap: 2vh;
  margin-left: 10%;
  margin-right: 10%;
  
}


.thePlayer{
  margin-top: 4px;
  
}

.musicList{
  justify-content: center;
  margin-top: 4vh;
}
.artistList{
  justify-content: center;
  margin-top: 4vh;
}
.playList
{
  justify-content: center;
  

}
/*
.musicList{
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      grid-gap: 2vh;
      width: 100%;
      padding: 2vh;
      justify-content: center;
}*/
.theList{
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      grid-gap: 2vh;
      width: 100%;
      padding: 2vh;
      justify-content: center;
}


 .search-bar{
   width: 30vh;
   border-width: 5px;
   margin-right: 2vh;
   margin-top: 2vh;
   margin-bottom: 0vh;
 }
 .top{
   display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70px auto;
 }


 button{
   
color: rgba(66,48,1,1);
border-radius: 5px;
border: 1px solid rgba(251,185,232,1);
background: -webkit-linear-gradient(top,
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

background: -webkit-linear-gradient(top,
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

.thePlayer{
  margin-top: 0vh;
  margin-bottom: 0vh;

}
 
</style>