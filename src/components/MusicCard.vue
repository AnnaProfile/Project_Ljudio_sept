<template>
<div class="music-card" @click="">
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


</div>
</template>

<script>
export default {
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