function solve() {
  const [ generateTextArea, buyTextArea ] = Array.from(document.getElementsByTagName('textarea'));
  const [ generateBtn, buyBtn ] = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('.table > tbody');

  generateBtn.addEventListener('click', generateHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement('tr', '', tbody, )
      const firstColumnTd = createElement('td', '', tableRow);
      createElement('img', '', firstColumnTd, '', '', {src: img});

      const secondColumnTd = createElement('td', '', tableRow);
      createElement('p', name, secondColumnTd);

      const thirdColumnTd = createElement('td', '', tableRow);
      createElement('p', price, thirdColumnTd);

      const fourthColumnTd = 
    }
  }
  
}

// type = string
// content = string (text content)
// id = string
// classes = array of strings
// attributes = object
function createElement(type, content, parentNode, id, classes, attributes) {
  const htmlElement = document.createElement(type);

  if (content && type !== 'input') {
    htmlElement.textContent = content;
  }

  if (content && type === 'input') {
    htmlElement.value = content;
  }

  if (id) {
    htmlElement.id = id;
  }

  // ['list', 'item']
  if (classes) {
    htmlElement.classList.add(...classes);
  }

  if (parentNode) {
    parentNode.appendChild(htmlElement);
  }

  // { src: 'link to image', href: 'link to site', ...}
  if (attributes) {
    for (const key in attributes) {
      htmlElement.setAttribute(key, attributes[key]); 
    }
  }

  return htmlElement;
}