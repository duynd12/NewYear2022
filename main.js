const a=document.getElementById("btn")
function btn1(){
  const a=a+Math.random(screenX)
}
var dayEl=document.getElementById("day");
var hoursEl=document.getElementById("hours");     
var minEl1=document.getElementById("mins");
var secondsEl=document.getElementById("seconds");
const year = "8 September 2021";

function coutdown(){
   const newYear=new Date(year);
   const current=new Date();

   const total =(newYear-current)/1000;

   const day=Math.floor(total/3600/24);
   const hours=Math.floor(total/3600)%24;
   const min=Math.floor(total/60) % 60;
   const sec=Math.floor(total)%60;

  dayEl.innerHTML=day;
  hoursEl.innerHTML=hours;
  minEl1.innerHTML=min;
  secondsEl.innerHTML=sec;

}
coutdown();
setInterval(coutdown,1000)


