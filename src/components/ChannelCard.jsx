import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetail }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        width: {
          xs: "100%",
          sm: "358px",
          md: "320px",
        },
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.medium?.url || demoProfilePicture
            }
            alt={channelDetail?.snippet?.channelTitle}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              ml:5,
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography>
            {channelDetail?.snippet?.channelTitle}{" "}
            <CheckCircle
              sx={{
                fontSize: "14px",
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
