/**
 * Created by Administrator on 2018/5/22.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from "axios"

/*封装一个方法，利用jsonp抓取轮播图的数据*/
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

//抓推荐歌单数据
export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    picmid:1,
    rnd: Math.random(),
    g_tk:5318,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
  })
  return axios.get(url, {
    params: data
  }).then((res)=>{
    return Promise.resolve(res.data)
  })
}
