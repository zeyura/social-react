import axios from 'axios'

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true   // точно отправить куки, кросдоменний запрос..
    })
        .then(response => response.data)
}


export const getAuthMe = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
        .then(response => ({...response.data.data, resultCode: response.data.resultCode}))
}

export const getUserProfile = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => response.data)
}

export const followUser = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, null, {
        withCredentials: true, // в пост запросе настройки идут третьим параметром, второй пока  налл
        headers: {
            'API-KEY': '392dbd65-2eda-411c-bd67-5438fae2e1ef', // my key here  https://social-network.samuraijs.com/account
        }
    }).then(response => response.data)
}

export const unfollowUser = (userId) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true, // в delete запросе настройки идут 2th параметром
        headers: {
            'API-KEY': '392dbd65-2eda-411c-bd67-5438fae2e1ef', // my key here  https://social-network.samuraijs.com/account
        }
    }).then(response => response.data)
}