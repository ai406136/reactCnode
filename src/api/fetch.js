import { fetch } from '../utils/api.js'

export const getList = (data) => {
  return fetch({
    url: '/topics',
    method: 'get',
    params: data
  })
}