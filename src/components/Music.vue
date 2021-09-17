<template>

<div>

    <input
    v-model="search"
    class="search-bar"
    type="text"
    placeholder="find a song"/>
    <button @click="myResultList()">search</button>
 
    <label>Search your song:</label> 
    <br>
   {{this.searchText}}
     <br>
     <br>
  <div class="list-music" >
    <MusicCard  v-for="(music, i) in resultList.content" :key="music.videoId+i" :music="music"/>
    <h2>test</h2>
   
  </div>
    
    
 </div>
  
</template>

<script>
import axios from "axios";
import MusicCard from "./MusicCard.vue";

export default{
  name:"Music",
  components:{
    MusicCard
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
    
    

    
       /* async fetchResultList() {
        console.log('Search text is:' )

       const url ='https://yt-music-api.herokuapp.com/api/yt/songs/' + this.state.searchText
        
        await axios.get(url)
        .then((response) => {
         this.resultList = response.data 
        })
        return this.searchText;
        
      },*/
 
     
      

mounted(){
      this.myResultList
    }
  

   
           

}
</script>