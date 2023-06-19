import { useAuthContext } from "./useAuthContext"
import { usePostsContext } from "./usePostsContext";

/////////////////
// can't use same name for two different context provider
// that is to address a fuction having same name....
// so just try to rename it as follows
///////////////

export const useLogout = () => {
    const { dispatch: AuthDispatch } = useAuthContext();
    const { dispatch: PostsDispatch } = usePostsContext();


    const logout = () => {
        localStorage.removeItem('dairy_user');
        AuthDispatch({ type: 'LOGOUT' })
        PostsDispatch({ type: 'SET_POST', payload: null })
    }

    return { logout }
}