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
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
.music-card{
    margin-left: 20%;
    margin-right: 20%;
    border-style: solid;
    background-color: gray;
}
.music-info{
  
}
img{
  
  width: 10vh;
  height: 10vh;
 
}


</style>