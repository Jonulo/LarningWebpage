import SideBarMenu from '../templates/SideBarMenu'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Verbos from '../pages/verbos'
import testTwo from '../pages/testTwo'

import getHash from '../utils/router/getHash'
import resolveRoutes from '../utils/router/resolveRoutes'

import  { sideBarFunctionality } from '../utils/sideBarMenu'

const routes = {
  '/': Home,
  '/verbos': Verbos,
  '/second': testTwo
}


const router = async () => { 
  const sidebar = document.getElementById('sidebar') || null 
  const content = document.getElementById('content') || null

  sidebar.innerHTML = await SideBarMenu()

  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404

  content.innerHTML = await render()

  const domMenuSidebar = document.getElementsByClassName("sidebar-menu__list__links");

  if(route === '/') {
    domMenuSidebar[0].classList.add("sidebar-selected-link");
  }else if(route === '/verbos') {
    domMenuSidebar[1].classList.add("sidebar-selected-link");
  }else if(route === '/second') {
    domMenuSidebar[2].classList.add("sidebar-selected-link");
  }
  sideBarFunctionality()
}


export default router
