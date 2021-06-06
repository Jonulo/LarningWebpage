const SideBarMenu = () => {
  const view = `
    <div
      id="sidebar-header-wrapper"
      class="sidebar-header"
    >
      <span
        id="sidebar-toggle-icon"
        class="sidebar-header__icon material-icons"
      >
      </span>
      <span
        id="sidebar-toggle-mode-icon"
        class="sidebar-header__icon material-icons"
      >
      </span>
    </div>
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
