<template>
  <div id="fun-stuff">
    <h1>Fruits</h1>
    <SuperList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SuperList from './components/SuperList.vue';

@Component({
  components: {
    SuperList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
