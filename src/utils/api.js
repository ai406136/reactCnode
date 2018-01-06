import axios from 'axios'

const requestResolve = config => {
  // config.headers['token'] = store.getters.token
  return config
}
const requestReject = error => {
  return Promise.reject(error)
}
const responseResolve = response => {
  let data = response.data
  if (data.success === true) {
    return data.data
  }
  return Promise.reject(data)
}
const responseReject = error => {
  console.log('err' + error)
  return Promise.reject(error)
}

const fetch = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 10000
})

const token = axios.create({
  timeout: 10000
})

// request 拦截器
fetch.interceptors.request.use(requestResolve, requestReject)
token.interceptors.request.use(requestResolve, requestReject)
// response 拦截器
fetch.interceptors.response.use(responseResolve, responseReject)
token.interceptors.response.use(responseResolve, responseReject)

export {
  fetch,
  token
}
