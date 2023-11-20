<template>
  <headerComponent/>
  <router-view></router-view>
</template>
<script>
  import headerComponent from './components/headerComponent.vue';
  export default {
    components: {
      headerComponent
    }
  }
</script>
<style>
@font-face {
  font-family: 'dCondensed';
  src: url('./assets/fonts/DINCondensed-Regular.ttf');
}
@font-face {
  font-family: 'dintLight';
  src: url('./assets/fonts/DINTLight.ttf');
}
@font-face {
  font-family: 'goboldB';
  src: url('./assets/fonts/Gobold_Bold.ttf');
}
@font-face {
  font-family: 'goboldI';
  src: url('./assets/fonts/Gobold_Bold_Italic.ttf');
}
@font-face {
  font-family: 'metropolis';
  src: url('./assets/fonts/metropolis.semi-bold.otf');
}

</style>
