<template>
<div class="music-card" >
<div class="tumbnail">
    <img
        v-if="music.thumbnails.length > 0"
        v-bind:src="`${music.thumbnails[0].url}`"
      />
</div>
<div class="music-info">
    <h2>
        {{music.name}}
        {{music.artist.name}}
    </h2>
</div>
<div>
    <Player/>
</div>



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
      
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style>
.music-card{
    width: 20vh;
    height: auto;
}

</style>