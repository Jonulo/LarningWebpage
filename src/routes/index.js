import SideBarMenu from '../templates/SideBarMenu'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'

import getHash from '../utils/router/getHash'
import resolveRoutes from '../utils/router/resolveRoutes'

import  { openCloseSideBar } from '../utils/sideBarMenu'

const routes = {
  '/': Home
}


const router = async () => { 
  const sidebar = document.getElementById('sidebar') || null 
  const content = document.getElementById('content') || null

  sidebar.innerHTML = await SideBarMenu()

  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404

  content.innerHTML = await render()

  openCloseSideBar()
}


export default router
