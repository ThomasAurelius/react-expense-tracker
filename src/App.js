import React from 'react'
import { Grid } from '@material-ui/core'

import Main from './components/Main/Main'
import MainDetails from './components/Main/MainDetails'
import Details from './components/details/Details'
import Totals from './components/details/Totals'

import useStyles from './styles'

const App = () => {
   const classes = useStyles()
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>
         {/*<Grid item xs={12} sm={3}>
            <Details title='Income' />
            </Grid> */}
         <Grid item sm={12} md={3}>
             <Main />
         </Grid>
         <Grid item sm={12} md={3}>
            <MainDetails />
         </Grid>
         <Grid item sm={12} md={5}>
            <Totals />
         </Grid>
         {/*<Grid item xs={12} sm={3}>
            <Details title='Expense' />
         </Grid>*/}
      
      </Grid>
    
    </div>
  )
}

export default App