import http from './axiosContext'

const login = (data) => {
    return http.post("/users/add",data)
}

const logout = () => {
    return http.delete("/users/logout")
}

export default {login, logout}