import webpack from './webpack.png';

export const log = () => console.log('hi from b');
export const getHi = (name) => {
  const h1 = document.createElement('h1');
  h1.innerText = `Hi, ${name}!`;
  return h1;
};
export const getImage = () => {
  const img = document.createElement('img');
  img.src = webpack;
  return img;
};
