<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/">
            {{userName}}
        </router-link>
        <div>
            <div class="btn btn-primary" @click="sinIng" v-if="!isAuthenticated">Acceder</div>
            <div v-else>
              <router-link to="/crud" class="btn btn-primary mx-1">
                Crud
              </router-link>
              <router-link to="/perfil" class="btn btn-primary mx-1">
                Perfil
              </router-link>
               <div class="btn btn-danger mx-1" @click="signOut" >Salir</div>
            </div>
            
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