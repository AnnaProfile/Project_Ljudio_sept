<template>
<div @click="playMusic()" class="music-card" >
<div class="tumbnail">
    <img
        v-if="music.thumbnails.length > 0"
        v-bind:src="`${music.thumbnails[0].url}`"
      />
</div>
<div class="music-info">
    <h3>
        {{music.name}}
        {{music.artist.name}}
    </h3>
</div>
<!--<div>
    <Player v-for="(song) in music" :key="song.videoId" :song="song"/>/>
</div>>
-->


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

<style>
.music-card{
    width: 10vh;
    height: auto;
}
.thumbnail{
  width: 8vh;
  height: 8vh;
}

</style>