conststudentNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let insertHTML = ''; 

for(let i = 1; i <= 18; i++){
  studentNumbers.forEach(function(num){
    insertHTML += '<div class="seat__item">' + num + '</div>';
  })
 document.querySelector('#seat').innerHTML = insertHTML;

 const classMember = ["こすげ", "さとう", "たなか"];
 console.log(classMember[0]);

 const randomNum = Math.ceil(Math.randam()*10);
 console.log(randomNum);