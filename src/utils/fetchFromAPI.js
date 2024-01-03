import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '3520364b88mshedcdfac843b593bp134aacjsn9d744f639a0b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  }
};


export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}