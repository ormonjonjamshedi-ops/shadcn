import axios from "axios"



export const api="https://test-swagger-2ph6.onrender.com"

export async function LoginRequest(obj) {
    try {
            const {data} = await axios.post(api+"/auth/login",obj)
            const token = data.token ?? data.accessToken ?? data.data?.token
            if(token) {
                localStorage.setItem("token", token);
            }
            return token 
    } catch (error) {
        console.log(error);
        return null
        
    }
    
}