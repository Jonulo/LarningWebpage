import Header from '../templates/Header'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'

import getHash from '../utils/router/getHash'
import resolveRoutes from '../utils/router/resolveRoutes'
const routes = {
  '/': Home
}

const router = async () => { 
  const header = null || document.getElementById('header') 
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()

  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404

  content.innerHTML = await render()
}
