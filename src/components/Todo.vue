<template>
  <div class="card shadow-sm mb-2">
    <div class="card-body">
        <p class="m-0">
            {{todo.texto}}
        </p>
        <div class="mt-2">
            <button class="btn btn-warning me-1">
                Finalizar
            </button>
             <button class="btn btn-danger" @click="eliminar(todo.id)" :disabled="bloquear">
                Eliminar
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue';
import {useDB} from "../composables/useDB"
export default {
    props:{
        todo: Object
    },
    setup(){
        const {elimiarTodo} = useDB();
        const error = inject("error");
        const todos = inject("todos");
        const bloquear = ref(false)

        const eliminar = async (id) =>{
            bloquear.value = true;
            const respuesta = await elimiarTodo(id);
            if(respuesta.res){
                error.value = respuesta.error;
                bloquear.value = false;
                return ;
            }

            todos.value = todos.value.filter(item => item.id != id);
            bloquear.value = false;
        }
        return {eliminar, bloquear}
    }
}
</script>

<style>

</style>