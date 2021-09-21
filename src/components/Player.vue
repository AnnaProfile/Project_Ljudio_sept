<template>
  <div>
    <h2>{{currentMusicObject.name}}</h2>
    
    <button @click="previous()">Previous</button>
    <button @click="play(currentMusicObject.videoId)">Play</button>
    <button @click="pause()">Pause</button>
    <button @click="next()">Next</button>
  </div>
</template>

<script>
export default {

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

    }
  },
  computed:{
    currentMusicObject() {
      return this.$store.getters.getMusicObject;
    },
  }
}
</script>