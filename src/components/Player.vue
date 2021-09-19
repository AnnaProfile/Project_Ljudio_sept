<template>
  <div>
    <h2>{{currentMusicObject.name}}</h2>
    <button @click="play(currentMusicObject.videoId)">Play</button>
    <button @click="pause()">Pause</button>
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
    }
  },
  computed:{
    currentMusicObject() {
      return this.$store.getters.getMusicObject;
    },
  }
}
</script>