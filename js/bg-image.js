let num = [1,2,3,4,5];

function change_bg(){
  let random = Math.floor(Math.random()*num.length);
  document.body.style.backgroundImage = `url(img/${num[random]}.jpg)`;
}

change_bg();