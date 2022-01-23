import React, {useContext} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import movieContext from '../context/movieContext'



const SearchBar = () => {

    const context = useContext(movieContext)
    const {changeInput } = context


    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-6 searchbar">
                    <SearchOutlinedIcon />
                    <input minLength={1} type="text" placeholder='Search' onChange={(e)=>changeInput(e.target.value)} />
                </div>

                <div className="col-6 homeicon">
                  <Link to="/"><HomeIcon sx={{ fontSize: 20 }} /></Link>
                </div>
                <hr style={{ marginTop: '7px' }} />
            </div>
        </div>

        </>
    )
}

export default SearchBar
