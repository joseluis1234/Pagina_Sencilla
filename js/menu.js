 const menu_icon= document.querySelector(".menu");
 const menu= document.querySelector(".menu-navegacion");

//  console.log(menu_icon);
//  console.log(menu);

 menu_icon.addEventListener('click', ()=>{
     menu.classList.toggle("spread")
 })

 window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target !=menu && e.target !=menu_icon){
        menu.classList.toggle("spread"); 
    }
 })