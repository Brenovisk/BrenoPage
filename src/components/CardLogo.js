import React from 'react'

import { Grid, Tooltip, Zoom } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'

const TooltipCustom = withStyles((theme) => ({
  tooltip: {
    fontSize: 13,
  },
}))(Tooltip)

export default function CardLogo({ img, title }) {
  return (
    <Grid item>
      <TooltipCustom title={title} TransitionComponent={Zoom} arrow>
        <img src={img} alt="Image" />
      </TooltipCustom>
    </Grid>
  )
}
