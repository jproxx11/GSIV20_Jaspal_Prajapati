import React, { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link, useParams } from 'react-router-dom'
import movieContext from '../context/movieContext'



const MyMovie = () => {

    const params = useParams()
    const { userId } = params

    const context = useContext(movieContext)
    const { results } = context

    const myMovie = results.filter((movie => {
        return movie.id === parseInt((userId))
    }))


    return (

        <div className="container">
            <div className="row">
                <div className="col-6 movie-detail">
                    <h4>Movie Details</h4>
                </div>
                <div className="col-6 homeicon">
                    <Link to="/"><HomeIcon sx={{ fontSize: 20 }} /></Link>
                </div>


                <hr style={{ marginTop: '7px' }} />

            </div>


            {myMovie.map((item,index) => {



                return (

                    <div className="container mymovies" key={index}>

                        <Card sx={{ width: 330, height: 400 }}>

                            <CardMedia
                                component="img"
                                height="400"
                                image={"https://image.tmdb.org/t/p/original" + item.poster_path}
                                alt="Paella dish"
                            />
                        </Card>
                        <div className="container mymovie-details">
                            <div className="container top-details">

                                <h5>{item.title}</h5>
                                <p>({item.vote_average})</p>

                            </div>
                            <div className="container middle-details">

                                <p>{item.release_date}| Runtime | Director</p>
                                Cast: Actor | Actor | Actor | Actor | Actor | Actor | Actor | Actor |

                            </div>
                            <div className="container bottom-details">

                                <p>{item.overview}</p>
                            </div>
                        </div>

                    </div>

                )
            })}

        </div>

    )
}

export default MyMovie
