   
  
// Navegation Menu. The document object represents your web page.

let btnMenu = document.querySelector('.btn-menu'); // 	Returns the first element that matches a specified CSS selector(s) in the document 
let barIcon =document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContainer = document.querySelector('.menu');
let activador = true;



/* The document.addEventListener(event, function, useCapture) method attaches an event handler to the document.*/

btnMenu.addEventListener('click', () => { //Arrow function

 /*barIcon.classList.toggle('fa-times');*/


   if(activador){
     menu.style.left = '0';   // Muestra Menu Navegación .Establece la posición del btn a la izquierda 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true; 
   }

  
});


 // document.querySelectorAll. Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document


// Add class "activo"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {    //forEach aplicado a un cada elemento de un arreglo li a
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('activo');  //remueve la clase que estaba seleccionada
   });
    event.target.classList.add('activo');  //activa una nueva clase donde hacemos click con el cursor

  });

});


let prevScrollPos = window.pageYOffset; // window representa la ventana del navegador. The pageXOffset and pageYOffset properties returns the pixels the current document has been scrolled from the upper left corner of the window, horizontally and vertically.
 
let goTop = document.querySelector('.go-top');


window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;  
  
  //Hide & Show - Scroll Menu (Function)

  if (prevScrollPos > currentScrollPos) {
    menuContainer.style.top = '0px';
    menuContainer.style.transition = '0.5s';
  }else{
    menuContainer.style.top = '-60px';
    menuContainer.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;

  //Hide & Show - Scroll Menu (Function)


  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContainer.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{ 
    menuContainer.style.borderBottom = '3px solid #ff2e63';

    //Mostrar Go Top
    goTop.style.right = '0px';
    goTop.style.transition='0.5s';
  }
  
}

goTop.addEventListener('click', () => {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
  
});






