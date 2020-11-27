import axios from 'axios'
//创建实例
const instance = axios.create({
    baseURL:'http://localhost:8080',
    timeout:5000
})
// 添加请求拦截器
instance.interceptors.request.use(function(config){
    // console.log(config)
    return config
},function(error){
    return Promise.reject(error)
})
//响应
instance.interceptors.response.use(function(response){
    console.log(response)
    return response.data
},function(error){
    return Promise.reject(error)
})
export default instance