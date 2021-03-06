import axios from 'axios'

const instance = axios.create({
    withCredentials: true,   // точно отправить куки, кросдоменний запрос..
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '392dbd65-2eda-411c-bd67-5438fae2e1ef', // my key here  https://social-network.samuraijs.com/account
    }
})


export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => ({...response.data.data, resultCode: response.data.resultCode}))
    }

}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },
}