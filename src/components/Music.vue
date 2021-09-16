<template>

<div>
    <h1>Find some music on Ljudio</h1>
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

    <li v-for="item in resultList.content" :key="item.videoId">
    {{ item.name }}
    </li>
   
    
    
 </div>
  
</template>

<script>
import axios from "axios";

export default{
  name:"Music",
  

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