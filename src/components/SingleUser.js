import React from 'react'
import { Grid, Paper, Box, Typography, Button } from '@material-ui/core';

function SingleUser(props) {
    return (
        <Grid item lg={3}>
            <Paper>
                <Box p={3}  alignItems='center'>
                    <Typography variant='h5' component='h4' color='secondary'>{props.item.login}</Typography>
                    <Typography variant='subtitle1' noWrap>{props.item.url}</Typography>
                    <Button variant='contained' color='primary'>Read More</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default SingleUser
