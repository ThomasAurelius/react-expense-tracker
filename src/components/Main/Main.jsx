import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';

import useStyles from './styles'
import Form from './Form/Form';


const Main = () => {
   const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Options" subheader="" />
      <CardContent>
         {/*<Typography align='center' variant='h5'></Typography>
         <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px' }}>
            -InfoCard-
            Total Balance
         </Typography> */}
         <Divider />
            <Form />
      </CardContent>
      
    
    </Card>
  )
}

export default Main