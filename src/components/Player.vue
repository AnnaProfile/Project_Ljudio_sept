<template>
<div class="playerClass">
  
    <div class="currentMusic">
      <h2> {{currentMusicObject.name}}</h2>
       <a :href="`mailto:?subject=&body=http://localhost:3000/${currentMusicObject.videoId}`"><i class="fas fa-share"></i></a>
    </div>

    <div>
      <i class="fas fa-fast-backward" @click ="previous()"></i>
      <i class="far fa-play-circle" @click="play(currentMusicObject.videoId)"></i>
      <i class="fas fa-pause-circle" @click="pause()"></i>
      <i class="fas fa-fast-forward" @click ="next()"></i>
      <button @click="myPlayList()">load my playlist</button>
    </div>
    
  </div>
</template>

<script>

import { Email } from 'vue-socialmedia-share';

// usage in local component

export default {

  components: {
    Email
  },
  data() {
        return{
                  
        }

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
    },
  
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
    this.currentLink
  },
  
}
</script>
<style scoped>
.playerClass{
  display: grid;
  grid-template-rows: 65% auto;
  grid-template-columns: auto;
  
}
.currentMusic{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
 
}
i {
  width: 8vh;
  font-size: 20px; 
  
}
button{
  margin-top: 3vh;
}
h2{
  font-size: 18px;
}

@media screen and (min-width: 620px){
  
  i {
font-size: 25px;  
margin-left: 20px;
  
}
.currentMusic{
  display: flex;
  flex-direction: row;
   align-items: center;
  text-align: center;
}
h2{
  font-size: 32px;
}


}
  </style>