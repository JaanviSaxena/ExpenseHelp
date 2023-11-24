//---------------------------Home Page--------------------------------
 
//Login-register dialog box
 const wrapper= document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');

 registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
 });

 loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
 });

 //------------------------------Expense Report-------------------------------------------------------

 function setReminder() {
   const taskName = document.getElementById('taskname').value;
   const dueDate = new Date(document.getElementById('duedate').value);
   const currentDate = new Date();
 
   if (dueDate < currentDate) {
     document.getElementById('reminder').innerHTML = 'Please select a future date.';
   } else {
     const timeDiff = dueDate - currentDate;
     const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
 
     document.getElementById('reminder').innerHTML = `Task "${taskName}" is due in ${daysRemaining} days.`;
   }
 }

 var food = document.getElementById('food').value;;
 var travel = document.getElementById('travel').value;
 var bills = document.getElementById('bills').value;
 var misc = document.getElementById('misc').value;

 var total = food+travel+bills+misc;
 var total = document.getElementById('total').value;
