import {Link} from 'react-router-dom'
import { Typography, Card, CardContent,CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {demoChannelTitle, demoChannelUrl, demoVideoTitle,demoThumbnailUrl, demoVideoUrl, } from '../utils/constants'
function VideoCard({video:{id:{videoId}, snippet}}) {
   
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{width:{xs:'100%', sm:'358px'}, height:180}}
            
            />
        </Link>
        <CardContent>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
              <Typography variant='subtitle1' fontWeight='bold' color="#000">
                {
                    snippet?.title.slice(0,60) || 
                    demoVideoTitle.slice(0,60)
                }
              </Typography>
            </Link>

             <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
               <Typography variant='subtitle2' color='gray'>
                    {
                        snippet?.channelTitle || demoChannelTitle
                    }
                     <CheckCircle sx={{ fontSize: "12px", color: "gray", mt:'2px' ,  ml: "5px" }} />
               </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard