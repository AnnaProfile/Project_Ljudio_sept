<template>
  <div>
    <h2> {{currentMusicObject.name}}</h2>
    

    
    <i class="fas fa-fast-backward"></i>
    
    <i class="far fa-play-circle" @click="play(currentMusicObject.videoId)"></i>
    <i class="fas fa-pause-circle" @click="pause()"></i>
    
    <i class="fas fa-fast-forward" @click ="next()"></i>
    <button @click="myPlayList()">load my playlist</button>
  <!--
    <h2>{{currentPlayList}}</h2>-->
    
    
  </div>
</template>

<script>
export default {
  data(){
   
  
  },

  props: ["song"],

  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
     
    },
    pause(){
      window.player.pauseVideo()
    },
     next(){
     window.player.nextVideo()
    },
    previous(){
      window.player.previousVideo()
    },
    myPlayList(){
      player.loadPlaylist(this.idList)
    }
  },
  computed:{
    currentMusicObject() {
      return this.$store.getters.getMusicObject;
    },

      idList() {
        return this.$store.getters.getIdList;
       
     },
     nextToPlay() {
        return this.$store.getters.getNextMusicObject;
               
     },
     currentPlayList() {
       this.playList = this.$store.getters.getPlayList;
               
     },
  },
  mounted() {
    this.currentPlayList
  },
  
}
</script>
<style>
i {
  width: 10vh;
  
}
  </style>