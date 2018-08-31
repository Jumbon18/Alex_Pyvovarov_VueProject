<template>
  <li class="nav-basketdrop  mr-2">
        <span class="nav-link">
          Shopping cart</span>
    <ul class="nav-basketdrop-submenu">
      <li>
        <a href="#" class="nav-link">{}}</a>
      </li>
      <li>
        <a href="#" class="nav-link">Link 2</a>
      </li>
      <li>
        <a href="#" class="nav-link">Link 3</a>
      </li>
    </ul>
  </li>

</template>
import ToDoItem from "../components/ToDoItem";
<script>
    export default {
      name: "BasketDropDown",
    }


</script>

<style scoped lang="scss">
  @import "../assets/mixins";
  @import "../assets/vars";
.nav-basketdrop{
  position: relative;
  .nav-link{
    cursor: pointer;
  }
  .nav-basketdrop-submenu{
    width:200px;
    height: 0;
   // padding:0;
    //margin: 0;
    display: none;
    list-style:none;
    position: absolute;
    padding-top:18px;
    transform: translate(-50%, 0);
    left: 50%;
  }
  &-submenu li{
    &:first-child{
      .nav-link{
        border-top-left-radius:4px ;
        border-top-right-radius: 4px;
      }
    }
  }
  &:after{
    opacity:0;
  }
  &:hover{


    .nav-basketdrop-submenu {
      height: auto;
     display: block;
     transition: all .5s linear;
     z-index:100;
     overflow: hidden;
     border-radius: 4px;
     &::before{
       opacity: 1;
       content: '';
       position: absolute;
       width:0;
       height: 0;
       border-left:10px solid transparent;
       border-right:10px solid transparent;
       border-bottom:10px solid #343a40;
       top:8px;
       left: 50%;
       transform: translate(-50%, 0);
     }
     .nav-link{
       background:$dark-color;
       transition: all .3s linear;
       margin-top: -1px;
       &:hover{
         background: lighten(#343a40,10);
       }
     }
   }
  }
}
</style>
