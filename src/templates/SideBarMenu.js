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
            class="sidebar-menu__list__links"
            href="#/"
          >
            Home
          </a>
        </li>
        <li class="sidebar-menu__list__links dropdown-btn">
          Verbos
          <span class="material-icons dropdown-btn__icon"></span>
        </li>
        <div class="dropdown-container">
          <ul class="dropdown-container__list">
            <li>
              <a href="#/verbs-intro" class="dropdown-link">
                Introducción
              </a>
            </li>
            <li>
              <a href="#/verbs-to-be" class="dropdown-link">
                Verbo To Be 
              </a>
            </li>
            <li>
              <a href="#/verbs-to-be" class="dropdown-link">
                Conjugaciones 
              </a>
            </li>
          </ul>
        </div>
        <li>
          <a
            class="sidebar-menu__list__links"
            href="#/pronouns"
          >
            Pronombres 
          </a>
        </li>
        <li>
          <a
            class="sidebar-menu__list__links"
            href="#/auxiliar-verbs"
          >
            Verbos Auxiliares 
          </a>
        </li>

      </ul>

    </div>
  `
  return view;
}

export default SideBarMenu;
