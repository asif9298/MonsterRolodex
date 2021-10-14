import React, {Component} from 'react'
import './Search_Box.css'

export const Search_Box = ({placeholder, handleSearch}) => {
    return(
        
        <input
            className='search'
            type='search'
            placeholder = {placeholder}
            onChange = {handleSearch}
        />
    ); 
}
