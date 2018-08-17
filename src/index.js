import {cube} from './math.js';
import renderTitle from './js/title.js'

function component() {
    let element = document.createElement('pre');
    element.innerHTML = [
             'Hello webpack!',
         '5 cubed is equal to ' + cube(5)
          ].join('\n\n');

    return element;
  }
  
  document.body.appendChild(component());
  renderTitle();

  if(module.hot){
      module.hot.accept('./js/title.js', function(){
          console.log('Accepting the updated printMe module!');
      })
  }