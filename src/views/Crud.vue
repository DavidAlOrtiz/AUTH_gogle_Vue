<template>
  <div v-if="isAuthenticated">
    <h1>Crud</h1>
    <Cargando v-if="cargando" />
    <div v-else>
      <Error  v-if="pintarError" />
      <TodoForm />
      <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import Cargando from "../components/Cargando.vue";
import Error from "../components/Error.vue";
import TodoForm from "../components/TodoForm.vue"
import Todo from '../components/Todo.vue'
import { useAuth } from "@vueuse/firebase";
import { useDB } from "../composables/useDB";
import { computed, onMounted, provide, ref } from "vue";

export default {
  components: {
    Cargando,
    Error,
    TodoForm,
    Todo
  },
  setup() {
    const { isAuthenticated } = useAuth();
    const { getAll, cargando } = useDB();
    const todos = ref([]);
    const error = ref(null);
    const pintarError = computed(() => (error.value ? true : false));
    provide("error", error);
    provide("todos", todos)
    onMounted(async () => {
      todos.value = await getAll();
      if (todos.value.res) {
        error.value =  todos.value.error;
      }
    });
    
    return { isAuthenticated, todos, cargando, pintarError };
  },
};
</script>

<style>
</style>