<template>
<body>
    <h1>The artist</h1>
    
  <h2>{{myArtistObject}} </h2>
  
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
        myArtistObject:{}

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

             
      },
 
     
      

mounted(){
    
    this.artistId = this.$route.params.id;
    this.myArtistDetails();
    
    //this.$store.dispatch("fetchArtistObject", this.artistId);
    
   
    
  },
      
    
           

}
</script>
<style scoped>
.description {
    font-size: 8px;

}
</style>

