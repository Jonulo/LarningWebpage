import tips from '../utils/components/Tips_component';

function routeConfiguration(route) {

  const domMenuSidebar = document.getElementsByClassName("sidebar-menu__list__links");
  const dropdownElements = document.getElementsByClassName("dropdown-btn");

  if(route === '/') {
    domMenuSidebar[0].classList.add("sidebar-selected-link");
  }else if(route === '/verbs-intro') {
    dropdownElements[0].classList.add("sidebar-selected-link");
    dropdownElements[0].nextElementSibling.style.display = "block";
    dropdownElements[0].nextElementSibling.
      getElementsByClassName("dropdown-link")[0].classList.add("dropdown-link--selected");
    dropdownElements[0].children[0].innerHTML = "remove";
    tips("Artículo completo: ", "https://www.grammarly.com/blog/verbs/");
  }else if(route === '/verbs-to-be') {
    dropdownElements[0].classList.add("sidebar-selected-link");
    dropdownElements[0].nextElementSibling.style.display = "block";
    dropdownElements[0].nextElementSibling.
      getElementsByClassName("dropdown-link")[1].classList.add("dropdown-link--selected");
    dropdownElements[0].children[0].innerHTML = "remove";
  }else if(route === '/verbs-auxiliar-verbs') {
    dropdownElements[0].classList.add("sidebar-selected-link");
    dropdownElements[0].nextElementSibling.style.display = "block";
    dropdownElements[0].nextElementSibling.
      getElementsByClassName("dropdown-link")[3].classList.add("dropdown-link--selected");
    dropdownElements[0].children[0].innerHTML = "remove";
  }else if(route === '/pronouns') {
    domMenuSidebar[2].classList.add("sidebar-selected-link");
  }
}

export default routeConfiguration;
