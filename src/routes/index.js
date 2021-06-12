import SideBarMenu from '../templates/SideBarMenu'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Verbs from '../pages/verbs'
import Pronouns from '../pages/pronouns'
import Auxiliar_verbs from '../pages/auxiliar_verbs'
import verbToBe from '../pages/verb_tobe'

import getHash from '../utils/router/getHash'
import resolveRoutes from '../utils/router/resolveRoutes'

import  { sideBarFunctionality } from '../utils/sideBarMenu'

const routes = {
  '/': Home,
  '/verbs-intro': Verbs,
  '/pronouns': Pronouns,
  '/auxiliar-verbs': Auxiliar_verbs,
  '/verbs-to-be': verbToBe
}


const router = async () => { 
  const sidebar = document.getElementById('sidebar') || null;
  const content = document.getElementById('content') || null;

  sidebar.innerHTML = await SideBarMenu();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();

  const domMenuSidebar = document.getElementsByClassName("sidebar-menu__list__links");
  const dropdownElements = document.getElementsByClassName("dropdown-btn");

  sideBarFunctionality()

  if(route === '/') {
    domMenuSidebar[0].classList.add("sidebar-selected-link");
  }else if(route === '/verbs-intro') {
    dropdownElements[0].classList.add("sidebar-selected-link");
    dropdownElements[0].nextElementSibling.style.display = "block";
    dropdownElements[0].nextElementSibling.getElementsByClassName("dropdown-link")[0].classList.add("dropdown-link--selected");
    dropdownElements[0].children[0].innerHTML = "remove";
  }else if(route === '/verbs-to-be') {
    dropdownElements[0].classList.add("sidebar-selected-link");
    dropdownElements[0].nextElementSibling.style.display = "block";
    dropdownElements[0].nextElementSibling.getElementsByClassName("dropdown-link")[1].classList.add("dropdown-link--selected");
    dropdownElements[0].children[0].innerHTML = "remove";
  }else if(route === '/pronouns') {
    domMenuSidebar[2].classList.add("sidebar-selected-link");
  }else if(route === '/auxiliar-verbs') {
    domMenuSidebar[3].classList.add("sidebar-selected-link");
  }
}


export default router
