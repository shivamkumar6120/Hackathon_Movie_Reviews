import { config } from "./config"
import axios from "axios"

export async function register(user){
    try {
        const url = `${config.server}/user/register`
        const response = await axios.post(url,user)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function login(user){
    try {
        const url = `${config.server}/user/login`

        const response = await axios.post(url,user)
        return response.data
        
    } catch (error) {
        console.log(error)
    }

}

export async function editProfile(user){
    try {
        const url = `${config.server}/user/update`
        const config = {
         headers: {
          'Content-Type': 'application/json',
          'Authorization':`"Bearer "+${localStorage.getItem("token")}`,
          }
        }
        const response = await axios.post(url,user,config)
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export async function changePassword(user){
    try {
        const url = `${config.server}/user/changePassword`
        const config = {
         headers: {
          'Content-Type': 'application/json',
          'Authorization':`"Bearer "+${localStorage.getItem("token")}`,
          }
        }
        const response = await axios.post(url,user,config)
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}