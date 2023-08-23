import Api from "./Api";


export default {
  async getNews (params) {
    return await Api().get('/news/', params)
  },
  getNew (id) {
    return Api().get(`/news/${id}/`)
  },
}