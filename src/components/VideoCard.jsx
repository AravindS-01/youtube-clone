import React from 'react'
import { Typography,Card,CardContent,CardMedia, } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Link} from 'react-router-dom';
// import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{width:{ xs:'100%',  sm: '358px', md:'320px', },boxShadow:'none',borderRadius:'0px'}}>
        <Link to={`/video/${videoId}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:{xs: '100%', sm: '358px', md:'320px' }, height: 180}}/>
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
        <Link to={videoId && `/video/${videoId}`}>
            <Typography variant='subtitle1' fontWeight="bold" color='#FFF'>{snippet?.title.slice(0,60)}</Typography>
        </Link>
        <Link to={snippet?.channelId && `/channel/${snippet.channelId}`}>
            <Typography variant='subtitle2' fontWeight="gray" color='#FFF'>{snippet?.channelTitle.slice(0,60)}
            <CheckCircleIcon sx={{fontSize:12, color: 'gray',ml:'5px'}}></CheckCircleIcon></Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard