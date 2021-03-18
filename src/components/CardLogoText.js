import React from 'react'
import { Grid } from '@material-ui/core'

export default function CardLogoText({ img, title, children }) {
  return (
    <Grid item className="card-logo-text">
      <div className="image">
        <img src={img} alt="Image" />
      </div>
      <div className="text">
        <p className="title">{title}</p>
        <p>{children}</p>
      </div>
    </Grid>
  )
}
