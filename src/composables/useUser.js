import {auth, firebase} from '../firebase'
import { useRouter } from 'vue-router';
export const useUser = () =>{
    const router = useRouter();
    const sinIng = async () =>{
        try {
            const provide = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provide)
            router.push("/perfil")

        } catch (error) {
            
        }
    }

    const signOut = async () =>{
        try {
            await auth.signOut();
            router.push("/")
        } catch (error) {
            
        }
    }

    return {sinIng, signOut }
}