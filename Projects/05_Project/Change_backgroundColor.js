const background = document.querySelector('.background');

// CreateCreating hexColor Code
let bgColor = function (){
  const hexcode = '0123456789ABCDEF';
  let backgroundcolor = '#';        //  strings can't be altered after they are created
  for(let i=1; i<=6; i++){
    backgroundcolor += `${hexcode[Math.floor(Math.random()*16)]}`;    // so just appending into it
  }
  return backgroundcolor;
}

const changeBg = function(){
  background.style.backgroundColor = bgColor();
}
let toClear;
document.querySelector('.start').addEventListener('click', () => {
  toClear = setInterval(changeBg, 200);
})
document.querySelector('.stop').addEventListener('click', () => {
  clearInterval(toClear);
})