<template>

<div>

    <input
    v-model="search"
    class="search-bar"
    type="text"
    placeholder="find a song"/>
    <button @click="myResultList()">search</button>
   <label>Search your song:</label> 
   <div>
     <Player/>
   </div>
   
     <br>
  <div class="list-music" >
    <MusicCard  v-for="(music, i) in resultList.content" :key="music.videoId+i" :music="music"/>
  </div>
    
    
 </div>
  
</template>

<script>
import axios from "axios";
import MusicCard from "./MusicCard.vue";
import Player from "./Player.vue";


export default{
  name:"Music",
  components:{
    MusicCard, Player 
  },
  

  data() {
        return{
          resultList:[],
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
        }
        
      },
 
     
      

mounted(){
      this.myResultList
    }
           

}
</script>
<style>
.list-music{
  display: flex;
  flex-direction: column;
}
</style>