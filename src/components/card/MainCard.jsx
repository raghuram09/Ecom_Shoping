import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// const arryCards = [1, 2, 3, 4]
const MainCard = () => {
    return (
        <React.Fragment>
            <Box sx={{ maxWidth: 275, }}>
                <Card sx={{ border: '2px solid black', borderRadius: '25px' }}>
                    <CardMedia
                        sx={{ height: 210 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ border: '2px solid black', borderRadius: '25px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </React.Fragment>
    )
}

export default MainCard
