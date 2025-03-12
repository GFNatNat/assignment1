import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";

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

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsList.find(item => item.id === parseInt(id));

  if (!news) {
    return <Typography variant="h6">News not found</Typography>;
  }

  return (
    <Container>
      <Card>
        <CardMedia component="img" height="300" image={news.images} alt={news.title} />
        <CardContent>
          <Typography variant="h4" gutterBottom>{news.title}</Typography>
          <Typography variant="body1">{news.description}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewsDetail;
