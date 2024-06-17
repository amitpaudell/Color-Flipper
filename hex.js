const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btnElement= document.querySelector(".btn");
btnElement.addEventListener('click',()=>{
  let required_color='';
    for(let i=0; i<6; i++){
        const randomNumber= (Math.floor(Math.random() * hex.length));
        required_color+=hex[randomNumber]
    }
  document.querySelector('.element').innerHTML=`#${required_color}`;
  document.body.style.backgroundColor=`#${required_color}`;
})