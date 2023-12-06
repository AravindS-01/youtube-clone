import React from 'react';
import { categories } from "../utils/constants";
import { Stack } from '@mui/material';


const SideBar = ({selectedCategory,setSelectedCategory}) => {
    return (
        <Stack direction='row' sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}>{
            categories.map((sidebar) => {
                return (
                    <button className='category-btn'
                        onClick={() => {setSelectedCategory(sidebar.name) }}
                        style={{
                            background: sidebar.name === selectedCategory && "#FC1503",
                            color: "white",
                               }} 
                        key={sidebar.name}
                    >
                        <span style={{ color: sidebar.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{sidebar.icon}</span>
                        <span style={{ opacity: sidebar.name === selectedCategory ? "1" : "0.8" }}>{sidebar.name}</span>
                    </button>)
                })
            }
        </Stack>
    )
}

export default SideBar