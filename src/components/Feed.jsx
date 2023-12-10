import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { SideBar, Videos } from '../components';
import { fetchData } from '../utils/FetchDataAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    })
  }, [selectedCategory]);

  return (
    <Stack direction={{ sx: 'column', md: 'row' }}>
      <Box sx={{ borderRight: "1px solid #3d3d3d", height: { sx: 'auto', md: '92vh' } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", display: { xs: 'none', sm: 'none', md: 'block' } }}>
          Copyright © 2023 AD Media
        </Typography>

      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed;