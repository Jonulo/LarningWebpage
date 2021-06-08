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
    <div id="sidebar-menu" class="sidebar-menu">
      <ul id="menu-list" class="sidebar-menu__list">
        <li>
          <a
            id="sidebar-menu-links"
            class="sidebar-menu__list__links"
            href="#/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            id="sidebar-menu-links"
            class="sidebar-menu__list__links"
            href="#/first"
          >
            First 
          </a>
        </li>
        <li>
          <a
            id="sidebar-menu-links"
            class="sidebar-menu__list__links"
            href="#/second"
          >
            Second 
          </a>
        </li>
      </ul>

    </div>
  `
  return view;
}

export default SideBarMenu;
