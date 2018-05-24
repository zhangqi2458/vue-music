/**
 * Created by Administrator on 2018/5/22.
 */
import originJSONP from 'jsonp'
/*jsonp的promise封装*/
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

//url 拼接
function param(data) {
  let url = '';
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += '&${k}=${encodeURIComponent(value)}'
  }
  return url ? url.substring(1) : ''
}
