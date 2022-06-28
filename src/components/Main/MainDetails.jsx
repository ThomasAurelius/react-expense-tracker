import React from 'react'
import { Card, CardHeader, CardContent, Grid } from '@material-ui/core';

import useStyles from './styles'
import List from './List/List';

const Main = () => {
   const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Details" subheader="" />
      
      <CardContent className='classes.cardContent' >
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <List />
            </Grid>
         </Grid>
      </CardContent>
    
    </Card>
  )
}

export default Main