import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faTasks,
  faHistory,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

// import '../../assets/scss/libs/main.scss'
// import FolderIcon from '@material-ui/icons/Folder'
// import RestoreIcon from '@material-ui/icons/Restore'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
})

export default function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('about')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      id="menu"
      className={classes.root}
    >
      <BottomNavigationAction
        label="Sobre"
        value="about"
        icon={<FontAwesomeIcon icon={faUser} />}
      />
      <BottomNavigationAction
        label="Projetos"
        value="projects"
        icon={<FontAwesomeIcon icon={faTasks} />}
      />
      <BottomNavigationAction
        label="Histórico"
        value="historic"
        icon={<FontAwesomeIcon icon={faHistory} />}
      />
      <BottomNavigationAction
        label="Contato"
        value="contact"
        icon={<FontAwesomeIcon icon={faPaperPlane} />}
      />
    </BottomNavigation>
  )
}
