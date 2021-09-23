<template>


<div class="container">
  
  
    <div class="messege">
      <div>
        <h3>Copy this link and share with your friends </h3>
      </div>
      <div>
        <h3>{{theLink}}</h3>
      </div>
    </div>
    
 
</div>
</template>

<script>
export default{


data() {
    return{
  
    }
  },

  computed: {
 
    theLink: function() {
      return this.$store.state.musicLink
    }
  },
  methods: {
 
   
  },
  mounted() {
    
  },
  

}


</script>
<style scoped>

h3{
  font-size: 50px;
}
.message{
  display: flex;
  flex-direction: column;
  

}
</style>