import axios from 'axios'

let instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        'API-KEY':'b25d5b20-c3b5-4eec-b816-871b79bcd299'
    }
})

export let request = {
    authMe(){
       return instance.get('auth/me')
    }   
}