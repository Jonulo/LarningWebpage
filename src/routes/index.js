import SideBarMenu from '../templates/SideBarMenu';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Pronouns from '../pages/pronouns';
import
  {
    Intro,
    VerbTobe,
    AuxiliarVerbs
  } from '../pages/verbsSection/';

import 
  {
    getHash,
    resolveRoutes,
    sideBarFunctionality
  } from '../utils/';

import routeConfiguration from './config';

const routes = {
  '/': Home,
  '/verbs-intro': Intro,
  '/verbs-to-be': VerbTobe,
  '/verbs-auxiliar-verbs': AuxiliarVerbs,
  '/pronouns': Pronouns,
}

const router = async () => { 
  const sidebar = document.getElementById('sidebar') || null;
  const content = document.getElementById('content') || null;

  sidebar.innerHTML = await SideBarMenu();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();

  sideBarFunctionality();

  routeConfiguration(route);
}

export default router;
