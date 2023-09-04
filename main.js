/*
*Cybisoft
*from
*Dannysnotepad
*/

document.body.addEventListener('dblclick', () => {


  if ( document.body.style.backgroundColor == 'lightgray') {
    
    document.body.style.backgroundColor = '#272835'
    
    let logo = document.querySelector('.logo');
    logo.className = 'Logo';
    
    let name = document.querySelector('.name');
    name.className = 'Name';
    
    let password = document.querySelector('.password');
    password.className = 'Password';
    
    let submit = document.querySelector('.submit');
    submit.className = 'Submit';
    
    let notice = document.querySelector('.notice');
    notice.className = 'Notice';
    
  } else {
    
    document.body.style.backgroundColor = 'lightgray'
    
    let logo = document.querySelector('.Logo');
    logo.className = 'logo';
    
    let name = document.querySelector('.Name');
    name.className = 'name';
    
    let password = document.querySelector('.Password');
    password.className = 'password';
    
    let submit = document.querySelector('.Submit');
    submit.className = 'submit';
    
    let notice = document.querySelector('.Notice');
    notice.className = 'notice';
    
  }
  
  
})