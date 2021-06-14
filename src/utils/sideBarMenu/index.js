function sideBarFunctionality() {
  let openNavButton = document.getElementById("sidebar-toggle-icon");
  let toggleIcon = document.getElementById("sidebar-toggle-mode-icon")
  let dropdown = document.getElementsByClassName("dropdown-btn");
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

  for(let i=0; i<dropdown.length; i++) {
    dropdown[i].children[0].innerHTML = "add";
    dropdown[i].addEventListener("click", () => {
      let dropdownContent = dropdown[i].nextElementSibling;
      dropdown[i].classList.toggle("dropdown-btn--selected");
      if(dropdownContent.style.display === "block") {
        dropdown[i].children[0].innerHTML = "add";
        dropdownContent.style.display = "none";
        dropdown[i].style.marginBottom= ".5rem";
      }
      else {
        dropdown[i].children[0].innerHTML = "remove";
        dropdownContent.style.display = "block";
        dropdown[i].style.marginBottom= "0";
      }
    })
  }
}

function activateMode() {
  let sidebarIconMode = document.getElementById("sidebar-toggle-mode-icon");
  let sideBar = document.getElementById("sidebar");
  
  if(document.body.classList.contains("dark-mode")) {
    sidebarIconMode.textContent = "brightness_7";
    sidebarIconMode.style.color = "yellow";
    sideBar.classList.remove("sidebar");
    sideBar.classList.add("sidebar--darkmode");
    changeLinksStyle("dark");
  }else {
    sidebarIconMode.textContent = "dark_mode";
    sidebarIconMode.style.color = "gray";
    sideBar.classList.remove("sidebar--darkmode");
    sideBar.classList.add("sidebar");
    changeLinksStyle();
  }
}

function changeLinksStyle(mode="light") {
  let linksCollection = document.getElementsByClassName("sidebar-menu__list__links");
  let paragraphsCollection = document.getElementsByTagName("P");
  let linksClass = "sidebar-menu__list__links";
  // let paragraphsClass = "paragraphs";

  if(mode === "dark") {
    linksClass = "sidebar-menu__list__links--dark"; 
    // paragraphsClass = "paragraphs--dark";
  }
  for(let i=0; i<linksCollection.length; i++) {
    if(mode === "light") {
      linksCollection[i].classList.remove("sidebar-menu__list__links--dark");
    }
    linksCollection[i].classList.add(linksClass);
  }

  for(let i=0; i<paragraphsCollection.length; i++) {
    if(mode === "light")
      paragraphsCollection[i].classList.remove("paragraphs--dark");
    else
      paragraphsCollection[i].classList.add("paragraphs--dark");
  }
}

function openCloseSideBar(menuIsOpen) {
  let currentScreenWidth = screen.width;
  let sideBarWidth = "40%";
  let contentWidth = "60%";
  let closedSideBarWidth = "10%";
  let closedContentWidth = "90%";
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
    sidebarIcon.style.pointerEvents = "none";
    setTimeout(() => {
      document.getElementById("sidebar-menu").style.display = "block";
      sidebarIcon.style.pointerEvents = "auto";
    },250)
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
    document.getElementById("sidebar-menu").style.display = "none";
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
