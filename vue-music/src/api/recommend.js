/**
 * Created by Administrator on 2018/5/22.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
/*封装一个方法，利用jsonp抓取轮播图的数据*/
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin:0,
    needNewCode:1
  })
  return jsonp(url, data, options)
}

//抓推荐歌单数据
// export function getDiscList(){
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
// }
