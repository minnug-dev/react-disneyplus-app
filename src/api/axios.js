import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key:'d64ec0972151e6a356772363fefe9f4b',
    language: 'ko-KR'
  }
})

export default instance;