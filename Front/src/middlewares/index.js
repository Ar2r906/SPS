import axios from 'axios'
import store from '@/store'

const instance = axios.create({
    baseUrl: process.env.VUE_APP_SERVER,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})
