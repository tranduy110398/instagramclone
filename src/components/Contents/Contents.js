import React from 'react'
import Grid from '@mui/material/Grid';
import Story from '../Story/Story';
import Posts from '../Posts/Posts';
import Account from '../Account/Account';
import Suggestions from '../Suggestions/Suggestions';
import "./Contents.css";
const  Contents = () => {
    return (
        <div>
            <Grid container>
                {/* ****** Empty Space ******  */}
                <Grid item xs={2}>
                    
                </Grid>
                {/* ****** Empty Space ******  */}

                <Grid item xs={6}>
                    <div>
                        <Story/>
                         <Posts/>
                    </div>
                   
                </Grid>
  
          
                <Grid item xs={2}>
                        <Account/>
                        <Suggestions/>
                </Grid>
                  <Grid item xs={2}>
                   
                </Grid>
            </Grid>
        </div>
    )
}

export default Contents;
