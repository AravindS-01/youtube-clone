import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {fetchData} from '../utils/FetchDataAPI';
import {Box} from '@mui/material';
import {ChannelCard, Videos} from './'

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, SetVideos] = useState([]);

  useEffect(()=>{
     fetchData(`channels?part=snippet&id=${id}`).then((data) =>{
      setChannelDetail(data?.items[0]);
     });

     fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>{
      SetVideos(data?.items);
     })
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail