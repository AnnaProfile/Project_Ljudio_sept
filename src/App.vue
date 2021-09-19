

<template>

  <div>
     <div>
     <img class="logo" alt="logo" src="./assets/logoLjudio.jpg" />
    </div>
    <div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/music">Music</router-link> |
        <router-link to="/player">Player</router-link> |
      </nav>
        <router-view/>
    </div>
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
  background-color: rgb(170, 196, 196);
  
}
.logo{
  
  width: 10%;
}


</style>
