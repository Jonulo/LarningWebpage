// https://www.w3schools.com/w3css/w3css_sidebar.asp
// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_sidebar_shift

function openCloseSideBar() {
  let openNavButton = document.getElementById("sideBar-btn");
  let menuIsOpen = false;

  // openNavButton.removeEventListener("click")

  openNavButton.addEventListener("click", () => {
    menuIsOpen = !menuIsOpen;

    if(menuIsOpen) {
      document.getElementById("content").style.marginLeft = "20%";
      document.getElementById("content").style.width= "80%";
      document.getElementById("sidebar").style.width = "20%";
      document.getElementById("sideBar-btn").textContent = "CLOSE";
    } else if(!menuIsOpen) {
      document.getElementById("content").style.marginLeft = "5%";
      document.getElementById("content").style.width= "95%";
      document.getElementById("sidebar").style.width = "5%";
      document.getElementById("sideBar-btn").textContent = "OPEN";
    }
  })

}

export {
  openCloseSideBar
}
