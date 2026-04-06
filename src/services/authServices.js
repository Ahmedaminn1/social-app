import axios from "axios"
const apiURL = import.meta.env.VITE_BASE_URL

export async function registerUser(formData){
    const data = await axios.post(`${apiURL}/users/signup`, formData,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    return data
}

export async function loginUser(formData){
    const data = await axios.post(`${apiURL}/users/signin`, formData,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    return data
}


export async function getLoggedUserData(){
    const data = await axios.get(`${apiURL}/users/profile-data`,{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        }
    })
    return data
}

export async function changePassword(formData){
    const data = await axios.patch(`${apiURL}/users/change-password`, formData,{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        }
    })
    return data
}

export async function uploadPhoto(formData){
    const data = await axios.put(`${apiURL}/users/upload-photo`, formData,{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            "Content-Type" : "multipart/form-data"
        }
    })
    return data
}

export async function getUserProfile(userId){
    const data = await axios.get(`${apiURL}/users/${userId}/profile-data`,{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        }
    })
    return data
}
