<template>

<body>
    <h1>The artist</h1>
    <!--<i @click="shareThisArtist()" class="fas fa-share-square"></i>-->
    <a :href="`mailto:?subject=&body='https://localhost:3000/music/${this.artistId}`"><i class="fas fa-share"></i></a>
    <h1>{{myArtistObject.name}} </h1>
  <div class="ArtistDesc">
    {{myArtistObject.description}}
  </div>
  <!--<div>
    {{playListArtist}}
  </div>
 -->
  
</body>
</template>

<script>
import axios from "axios";

export default{
  name:"Artist Detail", 
  components:{
    
  },
 data(){
    return{
        artistId:"",
        myArtistObject:{},
        playListArtist:[]

    }
    
  },
     computed: {
    

      
     },

     methods: {

       async myArtistDetails() {
        const url ='https://yt-music-api.herokuapp.com/api/yt/artist/' + this.artistId
        
        await axios.get(url)
        .then((response) => {
         this.myArtistObject = response.data 
        })
        
        },
        shareThisArtist(){
    const routerUrl = "/share/";
    this.$router.push({ path: routerUrl });

            }
        
    
/*
       async artistPlaylist() {
        const url ='https://yt-music-api.herokuapp.com/api/yt/playlist/' + this.artistId
        
        await axios.get(url)
        .then((response) => {
         this.playListArtist = response.data 
        })
       }*/

             
      },
 
     
      

mounted(){
    
    this.artistId = this.$route.params.id;
    this.myArtistDetails();
    //this.artistPlaylist();
    
       
  },
      
      

}
</script>


<style scoped>
.body {
  display: flex;
   flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.description {
    font-size: 8px;

}
</style>

