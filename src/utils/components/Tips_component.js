var tips = (textTip, link="") => {
  
  let mainElement = document.querySelector(".tips");
  let elementWrapper = document.createElement("div");
  let textElement = document.createElement("p");
  let textBody = document.createTextNode(textTip);

  elementWrapper.classList.add("tips__content");

  textElement.appendChild(textBody)

  if(link) {
    let linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.target = '_blank';
    linkElement.innerHTML = "click aquí";

    textElement.appendChild(linkElement);
  }

  elementWrapper.appendChild(textElement);
  mainElement.appendChild(elementWrapper);

  return mainElement;
}

export default tips;
