import React, { useEffect, useState } from 'react'
import { Container, Fab,Grid,Card,CardActionArea,CardMedia,CardContent,CardActions, Typography, Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles'
import  axios  from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        // height: '100vh',
        // width: '100vw'
        paddingTop:theme.spacing(5),
        paddingBottom:theme.spacing(5),
        
    },
    add: {
        position: 'fixed',
        bottom: '5%',
        right: '5%',
        zIndex:theme.zIndex.tooltip,
    }

}))
function App1() {
    const classes = useStyles();
    const [users,setUser] = useState([]);
    const getusers = async() =>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data)
        setUser(data);
    }
    useEffect(()=>{
        getusers();
    },[])
    return (
        <Container className={classes.root}>
            <Fab className={classes.add} variant="extended" color="secondary">
                <AddIcon/>Create user
            </Fab>
            <Typography component='h3' variant='h3' align='center' gutterBottom color='secondary'>Wellcome to Material Ui</Typography>

            <Grid container spacing={3}>
                {
                    users.map((user)=>{
                        return <Grid item sm={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia component='img' image='https://via.placeholder.com/300x200/555'/>
                                    <CardContent>
                                        <Typography variant='h6'>{user.name}</Typography>
                                        <Typography variant='h6'>{user.email}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant='contained' color='secondary'>View Profile</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    )
}

export default App1
