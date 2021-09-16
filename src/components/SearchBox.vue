<template>
  <!-- eslint-disable-next-line -->
  
</template>

<script>
export default {
  methods: {
    updateSearchText(e) {
      this.$store.commit("updateSearchText", e.target.value);
      
    },
  },
};
</script>

<style >
#search {
  border: none;
  outline: none;
  border-radius: 20px;
  
  background-color:rgba(255, 0, 0, 0.349);
  width: 200px;
  margin-bottom: 0;
  height: 100%;
  padding-left: 10px;
  
}
</style>
