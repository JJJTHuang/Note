function ajax(options) {

  options.url = options.url || ''
  options.type = options.type || 'GET'
  options.data = options.data || {}
  options.dataType = options.dataType || 'text'

  var xhr = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP')

  let data = options.data

  if (options.type === 'GET') {
    let arr = []
    for (let i in data) {
      arr.push(`${i}=${data[i]}`)
    }
    let strdata = arr.join('&')
    xhr.open('GET', options.url + '?' + strdata, true)
    xhr.send()
  }

  if (options.type === 'POST') {
    xhr.open('POST', options.url, true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(data)
  }

  // xhr.onreadystatechange 当一个 XMLHttpRequest 请求被 abort() 方法取消时，其对应的 readystatechange 事件不会被触发。
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange
  xhr.onload = function () {
    if (xhr.status == 200 || xhr == 304) {
      options.success()
    } else {
      options.error()
    }
  }
}