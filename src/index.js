//import _ from 'lodash';
import './css/style.scss';
import PrintMe from './js/print.js';

function component() {
  let h1 = document.createElement('h1');
  let span = document.createElement('span');
  span.innerHTML = 'test span';
  h1.appendChild(span);

  document.querySelector('body').appendChild(h1);
  PrintMe();
  // const message = 'is great'
  // document.querySelector('body').innerText = `Webpack with Babel ${message}!`;

}
  
  document.body.appendChild(component());