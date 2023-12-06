import React from 'react'
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom'
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const NavBar = () => {
    // use Stack, itt act as a flex container
  return (
    <Stack direction= 'row' alignItems='center' p={2} sx={{position:'sticky', top: 0, background: '#000',justifyContent:'space-between'}}>
        <Link to='/' style={{display:'flex',justifyContent:'center'}}>
            <img src={logo} alt={logo}  height={45}></img>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default NavBar