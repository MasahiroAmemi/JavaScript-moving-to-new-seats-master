let insertHTML = ''; 

for(let i = 1; i <= 18; i++){
  insertHTML += '<div class="seat__item">' + i + '</div>';
}
 document.querySelector('#seat').innerHTML = insertHTML;

 const classMember = ["こすげ", "さとう", "たなか"];
 console.log(classMember[0]);