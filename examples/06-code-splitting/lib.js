export const createElement = (el, html) => {
  const element = document.createElement(el);
  element.innerHTML = html;
  return element;
};
