
<template>

       <header>
       
        <img class="logo" alt="logo" src="./assets/logoLjudio.jpg" />
    
      <nav>
        <router-link to="/">Home</router-link> |
        
      </nav>
    
      </header>
    
    <div class="theBody">
      <router-view/>
   </div>
 <div class="footer">
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
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  text-align: center;
  color: #dde4eb;
  margin-top: 5px;
  background-color: rgb(113, 153, 153);
  
}

header { 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
background-color: rgb(54, 51, 51);
margin-top: 0%;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 15vh;
  
}
nav{
  margin-top: 3vh;
  margin-right: 4vh;
  
}

.theBody{
  margin-top: 15vh;
}
.logo{
  height: 10vh;
  margin-top: 2vh;
  margin-left: 4vh;
  
}
.footer {
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: gray;
text-align: center;
}


</style>
