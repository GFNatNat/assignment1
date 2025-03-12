import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const newsList = [
  { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: 'https://i.ibb.co/G4MW1TLC/event-1.jpg' },
  { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'https://i.ibb.co/23mkrCfN/event-2.jpg' },
  { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: 'https://i.ibb.co/99T2PcrV/event-3.jpg' },
  { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: 'https://i.ibb.co/nqPdhrfk/event-4.jpg' },
  { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'https://i.ibb.co/ZzJdk906/event-5.jpg' },
  { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'https://i.ibb.co/Kz7ZM6yt/event-6.jpg' },
  { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'https://i.ibb.co/LD5ynp3n/event-7.jpg' },
  { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'https://i.ibb.co/60VMKJ2m/event-8.jpgg' },
];

const News = () => {
  const navigate = useNavigate();

  return(
  <Container>
    <Typography variant="h4" color="red" gutterBottom>News Category</Typography>
    <Grid container spacing={2}>
      {newsList.map(news => (
        <Grid item xs={12} sm={6} md={3} key={news.id}>
          <Card>
            <CardMedia component="img" height="140" image={news.images} alt={news.title} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">{news.title}</Typography>
              <Typography>{news.description}</Typography>
              <Typography variant="h6">
              <Link onClick={() => navigate(`/news/${news.id}`)} style={{ cursor: "pointer" }}>
                {news.title}
              </Link>
            </Typography>
            <Typography variant="body2">{news.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default News;