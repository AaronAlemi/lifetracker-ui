import axios from "axios"

export class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
    }

    setToken(token) {
        this.token = token
    }

    async request({ endpoint, method = 'GET', data = {} }) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json",
           // Authorization: this.token ? `Bearer ${this.token}` : "",

        }

        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const res = await axios({ url, method, data, headers })
            return({data: res.data, error: null})

        } catch(error) {
            console.error(error.response)
            const message = error?.response?.data?.error?.message
            return {data: null, error: message || String(error)}
        }
    }

    async loginUser(credentials) {
        console.log(credentials)
        return await this.request({endpoint: 'auth/login', method: 'POST', data: credentials})
    }

    async registerUser(credentials) {
        return await this.request({endpoint: 'auth/register', method: 'POST', data: credentials})
    }

    async fetchUserFromToken() {
        return await this.request({endpoint: 'auth/me', method: 'GET'})
    }

    async logoutUser() {
        this.setToken(null)
        localStorage.setItem(this.token, "")
    }

   async fetchNutritionForUser() {
    return await this.request({endpoint: 'nutrition', method: 'GET'})
   }

   async createNutritionForUser(nutrition) {
    return await this.request({endpoint: 'nutrition/create', method: 'POST', data: nutrition})
   }

   async fetchActivityForUser() {
    return await this.request({endpoint: 'activity', method: 'GET'})
   }


}

export default new ApiClient("http://localhost:3001")
// PREVIOUSLY: export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")
// TODO: Make the address variable so it can work with other host URLs