const clock = document.querySelector('.clock');

function showTime(){

  function use_padStart(t){
    let final = String(t).padStart(2,'0');
    return final;
  }

  let date = new Date();
  let time = `${use_padStart(date.getHours())} : ${use_padStart(date.getMinutes())} : ${use_padStart(date.getSeconds())}`

  clock.innerHTML = time;
}
showTime()
setInterval(showTime, 1000);
