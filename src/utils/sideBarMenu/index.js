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
  if(menuIsOpen) {
    document.getElementById("content").style.marginLeft = "20%";
    document.getElementById("content").style.width= "80%";
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("sideBar-btn").textContent = "CLOSE";
    document.getElementById("sidebar__menu").style.display = "block";
  } else if(!menuIsOpen) {
    document.getElementById("content").style.marginLeft = "5%";
    document.getElementById("content").style.width= "95%";
    document.getElementById("sidebar").style.width = "5%";
    document.getElementById("sideBar-btn").textContent = "OPEN";
    document.getElementById("sidebar__menu").style.display = "none";
  }

}

export {
  openCloseSideBar
}
