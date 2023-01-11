

let $ = function (cssSelector, message) {
  let htmlElements = this.document.querySelectorAll(cssSelector);

  if (message) {
    htmlElements.forEach(e => { e.innerHTML += message + '<br>' });
  }

  if (cssSelector.startsWith('#')) return htmlElements[0];
  return htmlElements;
}

// props : prop, style, text 라는 속성을 가지는 객체 
//         prop : 요소객체의 속성의 name, value를 담은 객체
//         style : 요소객체의 style 속성에 들어갈 name, value를 담은 객체
//         text : 요소객체의 textNode에 들어갈 문자열
let createElement = (tag, props) => {

  let res = document.createElement(tag);

  if(!props) return res;

  for (key in props.prop) {
    res[key] = props.prop[key];
  }

  for (key in props.style) {
    res.style[key] = props.style[key];
  }

  if (props.text) {
    let textNode = document.createTextNode(props.text);
    res.appendChild(textNode);
  }

  return res;
}

let setStyle = (tag, props) => {

  let res = document.setStyle(tag);

  for (key in props.prop) {
    res[key] = props.prop[key];
  }

  for (key in props.style) {
    res.style[key] = props.style[key];
  }

  return res;

}