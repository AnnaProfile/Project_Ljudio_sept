

<template>

  <div>
     <header>
       
        <img class="logo" alt="logo" src="./assets/logoLjudio.jpg" />
    
      <nav>
        <router-link to="/">Music</router-link> |
        <router-link to="/player">Player</router-link> |
      </nav>
    
      </header>
    </div>
    <div>
      <router-view/>
   </div>
 <div>
  <FooterComponent/>
  </div>
    
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";

  export default {
    components:{
    FooterComponent 
  },
    
    
  }
</script>  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  text-align: center;
  color: #dde4eb;
  margin-top: 5px;
  background-color: rgb(113, 153, 153);
  
}
template{
    display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
header { 
  background-color: rgb(54, 51, 51);
 margin-top: 0%;

  
}
.logo{
  
  width: 10%;
}


</style>
