import axios from 'axios'

// 对外暴露封装好的函数，供外部引用
export default function ajax(url = '', params = {}, type = 'GET') {
    // 定义对象promise
    let promise;
    // 创建Promise构造函数并返回
    return new Promise((resolve,reject) =>{
       // 判断请求类型并做相应处理
      if('GET' === type){
        // 定义一个空字符串用于拼接params
        let paramsStr = '';
        Object.keys(params).forEach(key =>{
          paramsStr += key + '=' + params[key] + '&';
        });
          // 过滤掉最后一个&符
          if(paramsStr !== ''){
            paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'));
          }
          // 拼接url
          url += '?' + paramsStr;
          // 用对象promise接收GET发送的请求
          promise = axios.get(url);
      }else if('POST' === type){
          promise = axios.post(url,params);
      }
      // 对外做出请求回调处理结果
      promise.then((response) =>{
        resolve(response.data)
      }).catch((error)=>{
        reject(error);
      })
    })
}
