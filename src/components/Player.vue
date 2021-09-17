<template>
  <div>
      <h1>Hej</h1>
 
  
  </div>
</template>

<script>

export default {
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
 
}
</script>