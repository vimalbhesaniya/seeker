import { atom, selector } from "recoil";
import useAPI from "../Hooks/useAPI";

const token = localStorage.getItem("token")
const id = localStorage.getItem("id");

export const currentUser = atom({
    key: "helo",
    default: selector({
        get:  async () => {
            if (id && token) {
                const api = useAPI()
                const data = await api.getREQUEST(`profile/${id}`) 
                return data[0]
            }
            
        },
        key: "user"
    })
})

export const screen = atom({
    key: "screen",
    default: token ? "root" : "login"
})

export const requireD = atom({
    key:"required",
    default : true
})

export const Online = atom({
    key :"online",
    default: navigator.onLine
})

export const warn = atom({
    key :"warn",
    default: null
})

export const formData = atom({
    key:"form",
    default : {}
})

export const errorState = atom({
    key:"error",
    default : false
})

export const pages = atom({
    key:"page",
    default : 'Homepage'
})

export const ActiveModal = atom({
    key:"modal",
    default : ''
})

export const loading = atom({
    key:"load",
    default : false
})