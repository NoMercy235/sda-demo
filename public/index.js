

const generateImage = (url) => {
    const imgNode = document.createElement("img");
    imgNode.setAttribute("src",url);
    imgNode.setAttribute("alt","asgf")
    imgNode.setAttribute("width",50)
    imgNode.setAttribute("height",50)
    return imgNode;
}

// const el = generateImage ("https://image.shutterstock.com/image-vector/pet-logo-260nw-713550874.jpg")

// document.body.appendChild(el);

const generateText = (elType,text) => {
    const textNode = document.createElement(elType)
    textNode.innerHTML = text ; 
    return textNode;
}
//  const el = generateCardTitle ("h3","text")

//  document.body.appendChild(el);

const generateCard = (url, breed, age , content) =>{
    const cardNode = document.createElement("div")
    cardNode.setAttribute ("class","cardNode")

    const imagine = generateImage (url)
    const breedNode = generateText ("span", breed)
    breedNode.setAttribute ("class","breedNode")
    const ageNode = generateText ("small",age + " years")
    ageNode.setAttribute ("class","ageNode")

    const contentNode = generateText ("p",content)

    cardNode.appendChild(imagine)
    cardNode.appendChild(breedNode)
    cardNode.appendChild(ageNode)
    cardNode.appendChild(contentNode)
    return cardNode;
}
 const el = generateCard(
    "https://image.shutterstock.com/image-vector/pet-logo-260nw-713550874.jpg",
    "husky",
    "25",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  )
  

 document.body.appendChild(el);