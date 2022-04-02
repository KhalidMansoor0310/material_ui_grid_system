import React, { useEffect, useState } from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import axios from 'axios';
import SingleUser from './components/SingleUser';

export default function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios.get('https://api.github.com/users');
      setData(data);
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>
            Wellcome to Github - khalid Mansoor
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={5}>
          {data.map((item, index) => {
            return <SingleUser item={item} key={index} />
          })}
        </Grid>
      </Container>
    </>
  )
}
