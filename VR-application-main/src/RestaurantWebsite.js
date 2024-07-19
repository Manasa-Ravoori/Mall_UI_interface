import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Accordion, AccordionSummary, AccordionDetails, Rating } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './RestaurantWebsite.css';

const restaurants = [
    {
        id: 1,
        name: 'McDonalds',
        rating: 4.5,
        description: 'known for its hamburgers, french fries, and name-brand sandwiches such as the Big Mac, Quarter Pounder, and Egg McMuffin, as well as the child-focused Happy Meal.',
        imageUrl: require('./image/restaurant.jpg')
    },
    {
        id: 2,
        name: 'The Gourmet Kitchen',
        rating: 4.5,
        description: 'A fine dining restaurant offering an exquisite culinary experience with a variety of gourmet dishes.',
        imageUrl: require('./image/restaurant1.jpg')
    },
    {
        id: 3,
        name: 'Pasta Paradise',
        rating: 4.0,
        description: 'Authentic Italian cuisine with a focus on fresh, handmade pasta and traditional recipes.',
        imageUrl: require('./image/restaurant2.jpg')
    },
    {
        id: 4,
        name: 'Sushi Sensation',
        rating: 4.8,
        description: 'A Japanese restaurant specializing in fresh sushi and sashimi, offering a modern twist on classic dishes.',
        imageUrl: require('./image/restaurant3.jpg')
    },
    {
        id: 5,
        name: 'Burger Bliss',
        rating: 4.2,
        description: 'A casual eatery known for its gourmet burgers and a wide variety of unique toppings.',
        imageUrl: require('./image/restaurant4.jpg')
    },
    {
        id: 6,
        name: 'Vegan Vibes',
        rating: 4.6,
        description: 'A plant-based restaurant offering a diverse menu of vegan dishes made from locally sourced ingredients.',
        imageUrl: require('./image/restaurant5.jpg')
    },
    {
        id: 7,
        name: 'Tim Hortons',
        rating: 4.6,
        description: 'Canadas largest restaurant chain serving over 5 million cups of coffee every day with 80% of Canadians visiting a Tims in Canada at least once a month',
        imageUrl: require('./image/restaurant6.jpg')
    },
];

const RestaurantWebsite = () => (
    <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" className="title">
            Restaurants in the Mall
        </Typography>
        <Grid container spacing={4}>
            {restaurants.map((restaurant) => (
                <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
                    <Card className="restaurant-card">
                        <CardMedia
                            component="img"
                            alt={restaurant.name}
                            height="140"
                            image={restaurant.imageUrl}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {restaurant.name}
                            </Typography>
                            <Rating value={restaurant.rating} precision={0.1} readOnly />
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${restaurant.id}-content`}
                                    id={`panel${restaurant.id}-header`}
                                >
                                    <Typography>Details</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{restaurant.description}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default RestaurantWebsite;
