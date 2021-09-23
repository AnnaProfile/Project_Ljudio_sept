<template>
<div @click="playMusic()" class="music-card" >
<div class="tumbnail">
    <img
        v-if="music.thumbnails.length > 0"
        v-bind:src="`${music.thumbnails[0].url}`"
      />
</div>
<div class="music-info">
     <div>
       {{music.name}}
      </div>  
     <div>
      {{music.artist.name}}
     </div>  
</div>




</div>
</template>

<script>


import Player from "./Player.vue";

export default {

  name: "MusicCard",
  
  components:{
    Player
  },

  props: ["music"],

  methods: {

    playMusic() {
        this.$store.commit("setMusicObject", this.music);  
        this.$store.commit("setIdPlayList", this.music.videoId);
        this.$store.commit("setURL", this.music.videoId);
        
        const routerUrl = "/" + this.music.videoId;
        this.$store.commit(routerUrl);
        this.$router.push({ path: routerUrl });
        
            },

    
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
.music-card{
  
  display: grid;
  grid-template-rows: auto;  
  width: 18vh;
  height: 30vh;
  max-height: 30vh;
  margin-top: 2vh;
  margin-left: 10%;
  margin-right: 10%;
  overflow: hidden;
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(95, 75, 75);
 
}

img{
   display: flex;
   position: relative;
   
   border-top-left-radius: inherit;
   border-top-right-radius: inherit;
   width: 100%;

}


</style>