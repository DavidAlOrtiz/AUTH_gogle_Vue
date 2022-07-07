<template>
  <form @submit.prevent="procesarFormulario">
    <input type="text" placeholder="Agrega todo" class="form-control my-3" 
    v-model.trim="texto">
  </form>
</template>

<script>
import { ref, inject } from 'vue';
import {useDB} from '../composables/useDB' 
export default {
    setup(){
        const {agregarTodo} = useDB();
        const texto = ref("")
        const todos = inject("todos")
        const error = inject("error");

        const procesarFormulario = async () =>{
            if(!texto.value.trim()){
                console.log("Textto vacio")
                return;
            }
            const todo = await agregarTodo(texto.value);
            if(todo.res){
              error.value = todo.error
              texto.value = "";
              return 
            }
            todos.value = [...todos.value, todo];
            texto.value = "";
        }
        return {texto, procesarFormulario}
    }
}
</script>
    
<style>

</style>