import {React, useState,useContext} from 'react'
import axios from 'axios'
import { prodactsConext } from "../context/contextData";
import WatchList from '../watchList/WatchApi';
import { Redirect, useParams } from "react-router-dom";
const Search = ({ open }) => {
const [searchData, setsearchData] = useState([])
    const [input, setInput] = useState('')
    const {
        dispatch,
        data,
      } = useContext(prodactsConext);

const handleChange = (e) => {
   setInput(e.target.value) 
}
   
    const searchApi = (e) => {
       
        axios.get("http://localhost:3001/products/search", {
            params: {
                query: input.trim()
            }
        }).then(response => {
            dispatch({ type: "SEARCH_DATA", payload: response.data })
            console.log(response)
            setredirect(true);
            })
    }
    

    const [redirect, setredirect] = useState(false);


    return (
        <div className={ open ? "search-form active" :"search-form"}>
        <form onSubmit={(e)=> e.preventDefault()} className="d-flex">
                <input onChange={handleChange} type="text" placeholder="Search" />
                <i onClick={searchApi} class="fa fa-search mt-3" style={{"color":"#fff"}}></i>
        
            </form>
            {redirect ? <Redirect to="search/"/> : ""}
    </div>
       
    )
}

export default Search
