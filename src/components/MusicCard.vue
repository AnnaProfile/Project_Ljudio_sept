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
        this.Player.play();
            },

    shareThisSong(){
    const routerUrl = "/share/";
    this.$router.push({ path: routerUrl });

            }
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
.music-card{
  
  display: grid;
  grid-template-rows: 20% 40% 40%;   
  width: 18vh;
  height: 30vh;
  max-height: 30vh;
  margin-top: 2vh;
  margin-left: 10%;
  margin-right: 10%;
  
  
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(95, 75, 75);
  font-size: 8vh+2px;
}

img{
  

}


</style>