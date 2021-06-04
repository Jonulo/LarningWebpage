const SideBarMenu = () => {
  const view = `
    <button
      id="sideBar-btn"
      class="sidebar-btn"
    >
    </button>
    <div id="sidebar__menu" class="sidebar__menu">
      <ul id="menu-list" class="menu-list">
        <li><a href="#/">Home</a></li>
        <li><a href="#/first">First</a></li>
        <li><a href="#/second">Second</a></li>
      </ul>

    </div>
  `
  return view;
}

export default SideBarMenu;
