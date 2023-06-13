let menubtn=document.getElementById('menu-btn');
let navbar=document.querySelector('.navbar-container');

menubtn.onclick=()=>{
    navbar.classList.toggle('open-menu');
}

let contactbtn1=document.getElementById('contact-btn-1');
let contactbtn2=document.getElementById('contact-btn-2');
let closebtn=document.getElementById('close-form');

contactbtn1.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn2.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
closebtn.onclick=()=>{
    document.getElementById('form-popup').style.display="none";
}

let contactform=document.getElementById('form-popup');
let name1=document.getElementById('name1');
let email1=document.getElementById('email1');
let mobile1=document.getElementById('mobile1');
let comment1=document.getElementById('comment1');
window.onclick = function(event){
    if (event.target == contactform)
    {
        contactform.style.display = "none";
        name1.value='';
        email1.value='';
        mobile1.value='';
        comment1.value='';
    }
}
