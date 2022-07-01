<template>
  <Cargando v-if="loading" />
  <div v-else>
    <Navar></Navar>
    <div class="container">
      <router-link to="/">Home</router-link> 
    </div>
  </div>

  <router-view/>
</template>


<script>
import Navar from './components/Navbar.vue'
import Cargando from './components/Cargando.vue'
import {firebase} from './firebase'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  components:{
    Navar,
    Cargando
  },
  setup(){
    const loading = ref(false)

    onMounted(async () =>{
      loading.value = true
      await firebase.getCurrentUser()
      loading.value = false
    })

    return {loading}
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
