import React, { useContext } from 'react'
import MovieItem from './MovieItem'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import movieContext from '../context/movieContext'




const Movies = () => {


    const context = useContext(movieContext)

    const { fetchMoreData, loading, results } = context

    return (
        <div className="container card-container">
            <InfiniteScroll
                dataLength={results.length}
                next={fetchMoreData}
                hasMore={true}
                loader={loading && <Spinner />}>
                <div className="row">
                    {results.map((item,index) => {
                        const { poster_path, title, overview, vote_average } = item
                        return (
                            <div className="col-lg-2 box1" key={index}>
                                <Link style={{ textDecoration: "none" }} to={`/movie/${item.id}`}>
                                    <MovieItem
                                        imageURL={"https://image.tmdb.org/t/p/original" + poster_path}
                                        title={title.slice(0,34)}                                
                                        description={overview.slice(0, 50).concat('...')}
                                        rating={vote_average}
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Movies
