import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Feed, VideoDetail, ChannelDetail, SearchFeed,NavBar} from './components';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
       <NavBar/> 
{/* excat patam ingnore the oatial matching of url, it only match the excat path of current url */}
      <Routes>
        <Route excat path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
