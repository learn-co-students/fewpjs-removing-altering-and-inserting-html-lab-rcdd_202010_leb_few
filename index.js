let body1=document.querySelector('body')
body1.removeChild(document.getElementById('main'));

let newHeader = document.createElement("h1")
newHeader.setAttribute('id','victory')
body1.appendChild(newHeader)


let lol= document.getElementById('victory')
lol.innerHTML = 'layla is the champion'
