import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "../styles/Home.css";

const carouselImages = [
  "https://i.ibb.co/hx2dx38b/slide1.jpg",
  "https://i.ibb.co/gMQS61rB/slide2.jpg",
  "https://i.ibb.co/YFKMHpvY/slide3.jpg"
];

const gridImages = [
  "https://i.ibb.co/Z6fJJBc2/menu-01.jpg",
  "https://i.ibb.co/Y7jXykP7/menu-02.jpg",
  "https://i.ibb.co/4wwL8pb7/menu-03.jpg",
  "https://i.ibb.co/0vHwQXD/menu-04.jpg",
  "https://i.ibb.co/mFRqhvKP/menu-05.jpg",
  "https://i.ibb.co/mV8cVQCR/menu-06.jpg"
];

const Home = () => (
  <Box className="home-container">
    <Carousel>
      {carouselImages.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} className="home-banner" />
      ))}
    </Carousel>   
    <Container>
      <Grid container spacing={2} justifyContent="center" className="image-grid">
        {gridImages.map((image, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <img src={image} alt={`Food ${index + 1}`} className="grid-image" />
          </Grid>
        ))}
      </Grid>
    </Container>

    <Typography variant="h4" className="home-text">This is Home Page</Typography>
  </Box>
);

export default Home;