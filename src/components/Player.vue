<template>
  <div>
    <h2>Press Play to hear: {{currentMusicObject.name}}</h2>
    <!--<h3>{{idList}}</h3>-->
    
    <i class="fas fa-fast-backward"></i>
    
    <i class="far fa-play-circle" @click="play(currentMusicObject.videoId)"></i>
    <i class="fas fa-pause-circle" @click="pause()"></i>
    
    <i class="fas fa-fast-forward"></i>
    <!--<button @click="myPlayList()">Next</button>-->
    
    
  </div>
</template>

<script>
export default {
  data(){
  //  videoIdList:{}
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
      this.play(idList[2])
     // window.player.nextVideo()
    },
    previous(){
      window.player.previousVideo()
    },
    myPlayList(){
      player.loadPlaylist(idList)
    }
  },
  computed:{
    currentMusicObject() {
      return this.$store.getters.getMusicObject;
    },

      idList() {
        return this.$store.getters.getIdList;
       
     },
  }
}
</script>