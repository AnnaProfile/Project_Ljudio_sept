<template>
  <div>
    <button @click="play('bSnlKl_PoQU')">The Black Page #1 on piano</button>
    
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
  }
}
</script>