import { ref } from 'vue'
import {db, marcaDeTiempo}  from '../firebase'
import { useAuth } from '@vueuse/firebase'

export const useDB = () => {
    const referencia = db.collection('todos')
    const cargando = ref(false)
    const {user} = useAuth()
    const getAll = async () => {

        try {
            cargando.value = true;
            const rest = await referencia.get();
            return rest.docs.map(doc =>({
                id: doc.id,
                ...doc.data()
            }))
            
        } catch (error) {
            return {
                error,
                res: true
            }
        }finally{
            cargando.value = false;
        }
    }

    const agregarTodo = async (texto) =>{
        try {
            const todo ={
                texto : texto,
                fecha : marcaDeTiempo(),
                estado : false,
                uid: user.value.uid
            }
            const res = await referencia.add(todo);

            return {
                id: res.id,
                ...todo
            }
        } catch (error) {
            return{
                error,
                res : true
            }
        }
    }

    const elimiarTodo = async (id) => {
        try {

            await referencia.doc(id).delete();
            return{
                res: false
            }
            
        } catch (error) {
            return{
                error,
                res : true
            }
        }
    }

    return {getAll, cargando, agregarTodo, elimiarTodo}
}