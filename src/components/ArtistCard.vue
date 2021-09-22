<template>
<div @click="redirectArtistView()" class="artist-card" >
<div class="tumbnail">
    <img
        v-if="artist.thumbnails.length > 0"
        v-bind:src="`${artist.thumbnails[0].url}`"
      />
</div>
<div class="artist-info">
     <div>
       <!--{{artist.name}}-->
       {{artist.browseId}}
      </div>  
     
</div>



</div>
</template>

<script>


export default {
  name: "ArtistCard",
  components:{
    
  },

  props: ["artist"],

  methods: {
    
    redirectArtistView() {
     
    //this.$store.commit("setArtistId", this.artist.browseId);
    //this.$store.commit("setArtistObject", this.artist.browseId);
    const routerUrl = "/music/" + this.artist.browseId;
    this.$router.push({ path: routerUrl });
    this.$store.dispatch("fetchArtistObject", this.artist.browseId);
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
.artist-card{
  padding: 0;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: auto;
  
  width: 14vh;
  height: 20vh;
  max-height: 20vh;
  margin-top: 2vh;
  
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(95, 75, 75);
  }
.artist-info{
justify-content: center;   
font-size: 1vh+1px;
margin-top: 2vh;
   
}
img{
  border-radius: 15px;
  
  align-items: center;
  margin-top: 1vh;
  
 
}


</style>