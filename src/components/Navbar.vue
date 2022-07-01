<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/">
            {{userName}}
        </router-link>
        <div>
            <div class="btn btn-primary" @click="sinIng" v-if="!isAuthenticated">Acceder</div>
            <div class="btn btn-danger" @click="signOut" v-else>Salir</div>
        </div>
    </div>
  </nav>
</template>

<script>
import {useUser} from '../composables/useUser'
import {useAuth} from '@vueuse/firebase'
import {computed} from 'vue'
export default {
  setup(){
    const {sinIng, signOut} = useUser();
    const {user, isAuthenticated} = useAuth();
    const userName = computed(()=>{
      return isAuthenticated.value ? user.value.displayName : "sin Authen"
    })
    return {sinIng, signOut,user, isAuthenticated, userName }
  }
}
</script>

<style>

</style>