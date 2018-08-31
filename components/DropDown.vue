<template>
  <li class="nav-dropdown">
      <span class="nav-link">
        Categories
      </span>
    <ul class="nav-dropdown-submenu">
      <li>
        <a href="#" class="nav-link">link 1</a>
      </li>
      <li>
        <a href="#" class="nav-link">link 1</a>
      </li>
      <li>
        <a href="#" class="nav-link">link 1</a>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "DropDown"
  }
</script>

<style scoped lang="scss">
  @import "../assets/vars";
  @import "../assets/mixins";
  .nav-dropdown {
    position: relative;
    .nav-link {
      cursor: pointer;
    }
    &-submenu {
      display: none;
      padding: 0;
      margin: 0;
      list-style: none;
      position: absolute;
      width: 200px;
      padding-top: 18px;
      transform: translate(-50%, 0);
      left: 50%;
    }
    &-submenu li {
      &:first-child {
        .nav-link {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
      }
    }
    &:hover {
      .nav-dropdown-submenu {
        display: block;
        z-index: 100;
        overflow: hidden;
        @include border-radius(4px);
        // @include flex-jcc();
        &::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid $dark-color;
          top: 8px;
          left: 50%;
          transform: translate(-50%, 0);
        }
        .nav-link {
          background: $dark-color;
          transition: all .3s ease-in-out;
          margin-top: -1px;
          &:hover {
            background: lighten($dark-color, 10);
          }
        }
      }
    }
  }
</style>
