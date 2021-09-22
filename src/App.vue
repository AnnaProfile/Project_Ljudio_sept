
<template>
      <div>
       <header>
       
        <img class="logo" alt="logo" src="./assets/logoLjudio.jpg" />
    
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/Share">Share</router-link> |
      </nav>
    
      </header>
      </div>
    
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
*{
  margin:0;
  box-sizing: border-box;
}
#app {

  min-height: 100vh;
  display: flex;
  padding-right: 10vh;
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
/*  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  
  text-align: center;
  color: #dde4eb;
  margin-top: 0%;
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
  padding-right: 10vh;
  
}

.theBody{
  margin-top: 15vh;
  flex-grow: 1;
  
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
height: 10vh;
background-color: gray;
text-align: center;
}


</style>
