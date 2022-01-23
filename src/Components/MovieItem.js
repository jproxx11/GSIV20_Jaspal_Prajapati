import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';




const MovieItem = (props) => {

  const { title, description, imageURL, rating } = props

  return (
    <div>

      <Card sx={{ width: 240, height: 430 }}>

        <CardMedia
          component="img"
          height="330"
          image={imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <div className=" card-content">
            <div className="row">
              <div className="card-content-left col-9">
                <p>{title}</p>
              </div>
              <div className="card-content-right col-3">
                <p>{rating}</p>
              </div>
            </div>
            <div className="row">
              <div className="card-content-bottom">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MovieItem
