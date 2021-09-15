<template>
<div>
<h1>Home!!</h1>
<div>
    <SongCard/>
    
</div>
<div>
    <Player/>
</div>
</div>
  
</template>

<script>

import SongCard from "./SongCard.vue";
import Player from "./Player.vue";

export default {
  name: "Home",
  components: { SongCard, Player},
  computed: {},
  methods: {},
  mounted() {
    
  },
};
</script>