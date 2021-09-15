

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/music">Music</router-link> |
       <router-link to="/player">Player</router-link> |
    </nav>
    <h1>Ljudio_Anna</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    
  }
</script>  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  background-color: aqua;
  
}
</style>
