import { Typography } from '@mui/material'
import React from 'react'

export default function About() {
    const styles = {
      main: {
        height : '100vh',
        width : '80vw',
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
      }
    }
  return (
    <div className='main' style={styles.main} >
        <div style={styles.title}>
            <Typography variant='h6'>
                Education
            </Typography>
        </div>
        <div style={styles.content}>
            <Typography variant='body1'>
                Northeastern University
            </Typography>
        </div>
    </div>
  )
}
