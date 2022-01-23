import React, { useState, useEffect } from 'react'
import MovieContext from './movieContext'


const MovieState = (props) => {

    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)


    const updateMovies = async () => {

        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d8d40f94234d8c713e8542e4d6398ab8&page=${page}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setResults(parsedData.results)
        setLoading(false)

    }
    
    useEffect(() => {
        updateMovies();
        //eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=d8d40f94234d8c713e8542e4d6398ab8&page=${page + 1}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setResults(results.concat(parsedData.results))
        setLoading(false)
    }


    const changeInput = (value) => {
        if (value) {

            const filteredResult = results.filter((movie) => {

                return movie.title.toLowerCase().startsWith(value.toLowerCase())
            })
            setResults(filteredResult)
        }
        else {
            updateMovies()
        }


    }

    return (
        <div>
            <MovieContext.Provider value={{ fetchMoreData, results, changeInput, loading }}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}

export default MovieState
