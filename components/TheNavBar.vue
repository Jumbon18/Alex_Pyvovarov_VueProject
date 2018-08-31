<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand" >ToDoList</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <DropDown/>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" v-model="query" type="search"  placeholder="Search" aria-label="Search">
        </form>
        <ul class="navbar-nav ">
<BasketDropDown/>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    import DropDown from "./DropDown";
    import BasketDropDown from "./BasketDropDown";
    import {mapActions } from 'vuex';

    export default {
      name: "TheNavBar",
      components: {BasketDropDown, DropDown},
      data() {
              return {
                query:'',
              }

            },
      watch:{
        query(value){
          this.setQuery(value);
        }
      },
            methods: mapActions({
              setQuery:'Search/setQuery',
            })


    }
</script>

<style scoped>
  .router-link-exact-active {
    color: #fff !important;
  }
  .active{
    background-color: aqua !important;
  }
  .shop{
    width:300px;
    position: absolute;
    background-color: black;
    top: 50px;
    position: absolute;
    right: 5px;
    height: 200px;
    z-index: 2;
    opacity: 0.6;

  }
</style>
