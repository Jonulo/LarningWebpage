// https://www.w3schools.com/w3css/w3css_sidebar.asp
// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_sidebar_shift

function sideBarFunctionality() {
  let openNavButton = document.getElementById("sidebar-toggle-icon");
  let toggleIcon = document.getElementById("sidebar-toggle-mode-icon")
  let menuIsOpen = true;

  openCloseSideBar(menuIsOpen)
  activateMode()

  openNavButton.removeEventListener("click", () => {
    menuIsOpen = !menuIsOpen;
    openCloseSideBar(menuIsOpen);
  })

  openNavButton.addEventListener("click", () => {
    menuIsOpen = !menuIsOpen;
    openCloseSideBar(menuIsOpen);
  })

  toggleIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    activateMode()
  })

}

function activateMode() {
  let sidebarIconMode = document.getElementById("sidebar-toggle-mode-icon");
  
  if(document.body.classList.contains("dark-mode")) {
    sidebarIconMode.textContent = "brightness_7";
    sidebarIconMode.style.color = "orange";
  }else {
    sidebarIconMode.textContent = "dark_mode";
    sidebarIconMode.style.color = "gray";
  }
}

function openCloseSideBar(menuIsOpen) {
  let currentScreenWidth = screen.width;
  let sideBarWidth = "40%";
  let contentWidth = "60%";
  let closedSideBarWidth = "8%";
  let closedContentWidth = "92%";
  let sideBar = document.getElementById("sidebar");
  let contentTag = document.getElementById("content");
  let sidebarIcon = document.getElementById("sidebar-toggle-icon");
  let sidebarIconMode = document.getElementById("sidebar-toggle-mode-icon");

  if(currentScreenWidth >= 767 && currentScreenWidth < 1200) {
    sideBarWidth = "30%";
    contentWidth = "70%";
    closedSideBarWidth = "5%";
    closedContentWidth = "95%"
  }else if(currentScreenWidth >= 1200) {
    sideBarWidth = "20%";
    contentWidth = "80%";
    closedSideBarWidth = "3%";
    closedContentWidth = "97%"
  }

  if(menuIsOpen) {
    contentTag.style.marginLeft = sideBarWidth;
    contentTag.style.width= contentWidth;
    sideBar.style.width = sideBarWidth;
    sideBar.classList.add('sidebar-open');
    document.getElementById("sidebar__menu").style.display = "block";
    sidebarIcon.classList.remove("sidebar-icon--menu")
    sidebarIcon.classList.add("sidebar-icon--close")
    sidebarIcon.textContent = "close";
    sidebarIcon.style.width = "48%";
    sidebarIconMode.style.width = "48%";
    document.getElementById("sidebar-header-wrapper").style.flexDirection = "row";
  } else if(!menuIsOpen) {
    contentTag.style.marginLeft = closedSideBarWidth;
    contentTag.style.width= closedContentWidth;
    sideBar.style.width = closedSideBarWidth;
    sideBar.classList.remove('sidebar-open');
    document.getElementById("sidebar__menu").style.display = "none";
    sidebarIcon.classList.remove("sidebar-icon--close")
    sidebarIcon.classList.add("sidebar-icon--menu")
    sidebarIcon.textContent = "menu";
    sidebarIcon.style.width = "100%";
    sidebarIconMode.style.width = "100%";
    document.getElementById("sidebar-header-wrapper").style.flexDirection = "column";
  }

}

export {
 sideBarFunctionality 
}
