// https://www.w3schools.com/w3css/w3css_sidebar.asp
// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_sidebar_shift

function openCloseSideBar() {
  let openNavButton = document.getElementById("sideBar-btn");
  let menuIsOpen = true;


  sideBarFuntionality(menuIsOpen)
  openNavButton.removeEventListener("click", () => {
    menuIsOpen = !menuIsOpen;
    sideBarFuntionality(menuIsOpen)
  })

  openNavButton.addEventListener("click", () => {
    menuIsOpen = !menuIsOpen;
    sideBarFuntionality(menuIsOpen)
  })

}

function sideBarFuntionality(menuIsOpen) {
  let currentScreenWidth = screen.width;
  let sideBarWidth = "40%";
  let contentWidth = "60%";
  let closeSideBarWidth = "8%";
  let sideBar = document.getElementById("sidebar");
  let contentTag = document.getElementById("content");

  if(currentScreenWidth >= 767 && currentScreenWidth < 1200) {
    sideBarWidth = "30%";
    contentWidth = "70%";
    closeSideBarWidth = "5%";
  }else if(currentScreenWidth >= 1200) {
    sideBarWidth = "20%";
    contentWidth = "80%";
  }

  if(menuIsOpen) {
    contentTag.style.marginLeft = sideBarWidth;
    contentTag.style.width= contentWidth;
    sideBar.style.width = sideBarWidth;
    sideBar.classList.add('sidebar-open');
    document.getElementById("sideBar-btn").textContent = "CLOSE";
    document.getElementById("sidebar__menu").style.display = "block";
  } else if(!menuIsOpen) {
    contentTag.style.marginLeft = closeSideBarWidth;
    contentTag.style.width= "95%";
    sideBar.style.width = closeSideBarWidth;
    sideBar.classList.remove('sidebar-open');
    document.getElementById("sideBar-btn").textContent = ">";
    document.getElementById("sidebar__menu").style.display = "none";
  }

}

export {
  openCloseSideBar
}
