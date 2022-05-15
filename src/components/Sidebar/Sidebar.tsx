import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import './sidebar.scss'

interface SidebarProps {
  onClick: Function
  drawerState: boolean
}

const Sidebar = (props: SidebarProps) => {
  const { onClick, drawerState } = props

  //on drawer close
  const onDrawerClose = () => {
    //close the drawer
    //parent function
    onClick(!drawerState)
  }

  //switch primary color

  const switchPrimaryColor = (primary: string, primaryHover: string) => {
    document.documentElement.style.setProperty('--primary-color', primary)
    document.documentElement.style.setProperty(
      '--primary-color-hover',
      primaryHover
    )
  }

  return (
    <div className="sidebar">
      {/* Drawer */}

      <Drawer
        anchor="right"
        open={drawerState}
        onClose={onDrawerClose}
        className="sidebar__drawer"
      >
        <div className="sidebar__drawer-content">
          <ArrowForwardIosIcon
            onClick={onDrawerClose}
            className="sidebar__close-menu"
          />
          {/* themes and other stuffs */}

          <div className="sidebar__navigation">
            <h2>Color Selector</h2>
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor('#002959', '#3672b8')}
              >
                <h2></h2>
                <span className="sidebar__color-box blue"></span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor('#8f00ff', '#be6cff')}
              >
                <h2></h2>
                <span className="sidebar__color-box purple"></span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor('#2baf00', '#6cd44a')}
              >
                <h2></h2>
                <span className="sidebar__color-box green"></span>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
