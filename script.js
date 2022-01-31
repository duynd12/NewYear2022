//let : no se tra ve gia tri ma cai bien do duoc cap nhat cuoi cung 
// shift nguoc voi pop  + pop xoa phan tu cuoi +shift xoa phan tu dau
// unshift nguoc vs push +push them o cuoi + unshift them o dau
/// concat la noi array vs nhau
// slice cat mang 
// splice xoa phan tu (x,y) x la so thu tu , y la so phan tu xoa
// prototype
// phuong thuc thi moi lay duoc cac gia tri trong constructor
// toan tu 3 ngoi x?y:z neu x dung thi lay gia tri y neu k lau gia tri z
// for-in lap qua key cua doi tuong
// for -of lap qua value cua doi tuong 
// join chuyen chuoi dau phay sang chuoi dau cham
//calling the function with setTimeout to make sure the HTML is loaded
// some nguoc lai vs every tra ve true false
// find tim kiem phan tu trong mang (tra ve 1 phan tu thoa man dieu kieu)
// filter tim tat ca cac phan tu trong mang thoa man dieu kien (tra ve mang moi)
// var Courses =[
//  {
//      id:1,
//      name : 'PHP',
//      coins:200
//  },
//  {
//     id:2,
//     name : 'Java',
//     coins:20
// },
// {
//     id:3,
//     name : 'JS',
//     coins:300
// },
// {
//     id:4,
//     name : 'Ruby',
//     coins:250
// }
// ]
// function myfc(course){
//    return {
//        id:course.id,
//        name : course.name
//    }
// var course = [
//     {
//         name : 'Javascript',
//         coin : 700
//     },
//     {
//         name : 'PHP',
//         coin : 800
//     },
//     {
//         name : 'Ruby',
//         coin : 850
//     }
// ];
// Array.prototype.filter1=function(callback){
//     var output =[]
//     for(var index in course){
//        if(course.hasOwnProperty(index)){
//            var result=callback(course[index],index)
//            if(result)
//            { 
//                output.push(course[index]);
//            }
//        }
//     }
//     return output;
// }
// var html=course.filter1(function(course,index){
//     if(course.coin >820)
//     {
//         return course;
//     } 
// })
// console.log(html)
// Array.prototype.map2=function (callback){
//     var output=[]
//     for(var i=0; i<this.length; i++){
//         var result= callback(this[i],i);
//        output.push(result);
//     }
//     return output;
// }
// var hmtl=course.map2(function (course){
//      return `<h1>${course}</h1>`
// });
// console.log(hmtl.join(''));

var Year='2 February 2022';
var days=document.getElementById('days');
var hours=document.getElementById('hours');
var minutes=document.getElementById('minutes');
var seconds=document.getElementById('seconds');
function LunarNewYear(){
      const newYear=new Date(Year);
      const current=new Date();
      const total =(newYear-current)/1000;
      var day=Math.floor(total/3600/24);
      var hour=Math.floor(total/3600)%24;
      var minute=Math.floor(total/60)%60;
      var second=Math.floor(total)%60;
      days.innerHTML=day;
      hours.innerHTML=hour;
      minutes.innerHTML=minute;
      seconds.innerHTML=second;
}
LunarNewYear();
setInterval(LunarNewYear,1000);
