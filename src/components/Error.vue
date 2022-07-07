<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Ocurrio un error !!</strong>  {{errror}}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="errror = null"
    ></button>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
    setup(){
        const  errror = inject("error") ;

        return {errror}
    }
};
</script>

<style>
</style>