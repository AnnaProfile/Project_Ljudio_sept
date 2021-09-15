<template>
<div>
<h1>Home!!</h1>
<div>
    <SearchBox />
</div>
<div>
  <ul>
     <div v-for="song in resultList" :key="song.videoId">
      {{song.videoId}}
           {{song.name}}
           {{song.artist.name}}
        </div>
  </ul>
</div>
<div>
    <Player/>
</div>

</div>
  
</template>

<script>

import Player from "./Player.vue";
import SearchBox from "./SearchBox.vue";

export default {
  name: "Home",
  components: { Player, SearchBox},
  computed: {
     resultList(){
              return this.$store.state.resultList 
              
            },
  },
  methods: {},
  mounted() {
    
  },
};
</script>