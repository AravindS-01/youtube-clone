import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = { 
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '7c42016c49msh1c3d6ef9da06b1ep13c8c0jsn1cdf0de0bdaf',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url)=>{
 const {data} = await axios.get(`${BASE_URL}/${url}`,options);

 return data;
}