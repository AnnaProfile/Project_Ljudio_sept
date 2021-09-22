<template>
<div class="playerClass">
  <div>
    <div>
    <h2> {{currentMusicObject.name}}</h2>
  <i @click="shareThisSong()" class="fas fa-share-square"></i>
  
    </div>
    <div>
    <i class="fas fa-fast-backward" @click ="previous()"></i>
    <i class="far fa-play-circle" @click="play(currentMusicObject.videoId)"></i>
    <i class="fas fa-pause-circle" @click="pause()"></i>
    <i class="fas fa-fast-forward" @click ="next()"></i>
  
    </div>
    
  </div>
  <div>
  <button @click="myPlayList()">load my playlist</button>
  </div>
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
    },
    shareThisSong(){
    const routerUrl = "/share/";
    this.$router.push({ path: routerUrl });

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
<style scoped>
.playerClass{
  display: grid;
  grid-template-rows: 40% auto;
  grid-template-columns: auto;
}
i {
  width: 8vh;
  font-size: 20px;
  
  
}
button{
  margin-top: 3vh;
}

@media screen and (min-width: 620px){
  
  i {
font-size: 25px;  
  
}


}
  </style>