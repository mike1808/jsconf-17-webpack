import './a.css'

export default () => {
  const p = document.createElement('p');
  p.innerText = 'Aaaaa';
  p.className = 'a';
  return p;
};
