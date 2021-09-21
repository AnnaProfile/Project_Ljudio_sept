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
/*.music-card{
    width: 10vh;
    height: 20vh;
    border-style: solid;
    background-color: gray;
}
.music-info{
  display: flex;
  flex-direction: column;
  font-size: 2vh;
  width: 100%;
}*/
img{
  
  width: 10vh;
  height: 10vh;
 
}


</style>