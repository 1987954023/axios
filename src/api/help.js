import instance from '../api/request'
export const add=()=>{
    return instance("/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125")
}
