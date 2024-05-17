
/*let count = 0;
const counter = document.getElementById('counter');
document.getElementById('adder').addEventListener('click', event =>{
    const c1 = counter.classList;
    const c = 'counter'
    count++;
    counter.innerText = count;
    c1.remove(c, c1.contains(c));
    setTimeout(() =>
    counter.classList.add('counter'))
})*/
let count = 0; // Initialize counter variable outside the function

function numbercounter()
{
     count++; // Increment counter on each click
     document.getElementById("counter").textContent = count;
     alert("Do you want to put that item in your cart?")
}

    // Check if value is stored in localStorage on page load
if (localStorage.getItem("clickCount")) {
     count = parseInt(localStorage.getItem("clickCount"));
    document.getElementById("count").textContent = count;
}
/*
function validateform()
{
 let email=document.myform.email.value;
 let password=document.myform.password.value;
 
 if(email==null || email=="")
 {
  alert("Email can't be blank");
  return false;
 }
 else if (password.length<6)
 {
  alert("Password must be at least character long.");
  return false;
 }
}*/