<template>
  <div>
      <h1>Hej</h1>
    <!--<button @click="play('DXxeOvvNNwc')">The Black Page #1 on piano</button>
    <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button>
    <button @click="pause()">Pause</button>
  -->
  <p>
     <div v-for="song in listToPlay" :key="song.videoId">
      {{song.videoId}}
           {{song.name}}
        </div>
  </p>
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
  computed:{
            resultList(){
              return this.$store.state.resultList 
            },
            
            listToPlay(){
                return this.$store.state.playList
            }
        }
}
</script>