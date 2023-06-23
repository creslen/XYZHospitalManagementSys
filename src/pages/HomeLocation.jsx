import { Email, Phone, Place } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

export default function HomeLocation() {
  return (

    <div>
        
        <Typography>
        <Place />
        <span style={{ marginRight: '16px' }}>
            731 Aurora Boulevard 1100,Quezon City 
        </span>
        <Phone />
        <span style={{ marginRight: '16px' }}>
        +63985673501
        </span>
        <Email />
        xyzhospital@gmail.com
        </Typography>
    </div>
  )
}
