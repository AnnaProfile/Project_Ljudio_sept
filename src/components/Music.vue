<template>

<div>
    <h1>Find some music</h1>
 <!-- <input
    @change="updateSearchText()"
    v-model="search"
    class="search-bar"
    type="text"
    placeholder="find a song"
    />
    <label>Search your song:</label> -->

    <button @click="fetchResultList()">Test</button>
    <div>{{fetchResultList}}</div>

    
    
 </div>
  
</template>

<script>

export default{
    data() {
        return{
          resultList:["sång1", "sång2"],
          searchText:"mamma",
        }

    },
     /*computed: {
        async fetchResultList() {
        const url ='https://yt-music-api.herokuapp.com/api/yt/songs/' + this.searchText
        
        await axios.get(url)
        .then((response) => {
         this.resultList = response.data 
        })

        return this.resultList;
        
      },

     },*/

     methods: {
    updateSearchText(e) {
      this.commit(searchText, e.target.value);
    },
       /* async fetchResultList() {
        console.log('Search text is:' )

       const url ='https://yt-music-api.herokuapp.com/api/yt/songs/' + this.state.searchText
        
        await axios.get(url)
        .then((response) => {
         this.resultList = response.data 
        })
        return this.searchText;
        
      },*/
 
     
      
},
  

   
           

}
</script>