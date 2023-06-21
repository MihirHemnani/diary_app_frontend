import { useAuthContext } from './useAuthContext'
import swal from 'sweetalert';
////////////////
// why state
// to know whether user is login or not
/////////////////

export const useLogin = () => {

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        // console.log(email + password)
        // console.log(JSON.stringify({ email, password }))
        try {
            // const response = await fetch(`http://localhost:8000/api/user/login`, {
            const response = await fetch(`https://dairy-post-api.onrender.com/api/user/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();
            if (!response.ok) {
                swal("Oops!", json.error, "warning");
            } else {
                localStorage.setItem('dairy_user', JSON.stringify(json))
                dispatch({ type: "LOGIN", payload: json })
                swal("Success!", "Login Successfull...", "success");
                // console.log(json)
            }

        } catch (err) {
            console.log(err);
        }
    }

    return {
        login
    }
}