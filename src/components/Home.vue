<template>
<div>
<h1>Home!!</h1>

<div>
  <ul>

  </ul>
</div>
<div>
    <Player/>
</div>

</div>
  
</template>

<script>

import Player from "./Player.vue";
import MusicCard from "./MusicCard.vue";

export default {
  name: "Home",
  components: { Player, MusicCard },
  computed: {
   
  },
  methods: {
    
  },
  mounted() {
    
  },
};
</script>