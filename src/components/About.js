import { Typography } from '@mui/material';
import React from 'react';

export default function About() {
    const styles = {
      main: {
        height : '100vh',
        'max-width' : '1200px',
        padding: '20px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
      },
      title: {
        flex: 1,
      },
      content: {
        'text-align': 'left',
        flex: 3,
      },
    }
  return (
    <div className='main' style={styles.main} >
        <div style={styles.title}>
            <Typography variant='h6'>
                Education
            </Typography>
        </div>
        
        <div style={styles.content}>
            <Typography variant='h6'>
              Northeastern University, Boston, MA
              <br/> MS in Computer Science - Align 
            </Typography>

            <Typography variant='body1' sx={{ paddingTop: 0.5 }}>
              Khoury College of Computer Sciences	
              <br/> Concentration: Systems and Software	
              <br/> Related Courses: Database Management Systems, Algorithms, Scalable Distributed Systems.
            </Typography>



            <br/><br/>
            <Typography variant='h6'>
              Harvard University, Cambridge, MA	
              <br/> MS in Computer Science - Align 
            </Typography>
        </div>

        <div style={styles.thirds}> 
          <Typography variant='body1' sx={{ textAlign: 'right' }}>
            May 2025 <br/> 
            (Expected) <br/> 
            GPA: 4.00 <br/>
            
            <br/><br/><br/><br/><br/><br/>
            
            December 2022<br/> 
            (Incomplete)
          </Typography>    
        </div>

    </div>
    
  )
}
