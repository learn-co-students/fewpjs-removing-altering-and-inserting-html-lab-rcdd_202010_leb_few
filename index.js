// Write your code here!
const elem = document.querySelector('#main');
elem.parentNode.removeChild(elem);
//has a newheader variable that points to node 'h1#victory'

    
    
    
    const newHeader=document.createElement('h1');
     newHeader.id='victory';
     newHeader.setAttribute= ("id","victory");
      newHeader.innerHTML=" YOUR-NAME is the champion";
     document.body.appendChild(newHeader);
     
    
    
    
 