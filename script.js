let menubtn=document.getElementById('menu-btn');
let navbar=document.querySelector('.navbar-container');

menubtn.onclick=()=>{
    navbar.classList.toggle('open-menu');
}

let contactbtn1=document.getElementById('contact-btn-1');
let contactbtn2=document.getElementById('contact-btn-2');
let contactbtn3=document.getElementById('contact-btn-3');
let contactbtn4=document.getElementById('contact-btn-4');
let contactbtn5=document.getElementById('contact-btn-5');
let contactbtn6=document.getElementById('contact-btn-6');
let contactbtn7=document.getElementById('contact-btn-7');
let closebtn=document.getElementById('close-form');

contactbtn1.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn2.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn3.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn4.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn5.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn6.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn7.onclick=()=>{
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

var submitbtn=document.getElementById('submitbtn');
  var submitbtnForm=document.getElementById('formid');
  submitbtn.addEventListener('click',function(e) {
    e.preventDefault();
    var senderName=document.getElementById('name').value;
    var senderEmail=document.getElementById('email').value;
    var senderMobile=document.getElementById('mobile').value;
    var senderComment=document.getElementById('comment').value;
    var body= 'Name: '+ senderName + '<br>Mail Id: ' + senderEmail + '<br>Number: ' + senderMobile + '<br>Message: '+ senderComment;
    if(senderName!='' && senderEmail!=''  &&senderMobile!='' && senderComment!=''){
    Email.send({
        SecureToken : "909a4ac7-785c-41be-abe5-1c1e983c5022",
        To : 'contact@savianmoney.com',
        From : "saviandemo@gmail.com",
        Subject : "Enquiry Request - Saya Piazza",
        Body : body
    }).then(
        Swal.fire({
              title: 'Success',
              text: 'Your Enquiry is Successful',
              confirmButtonColor: '#3085d6',
              icon: 'success',
              allowOutsideClick:false,
              allowEscapeKey:false
              }).then((result) => {
              if (result.isConfirmed) {
                 submitbtnForm.submit();
                 window.location.href="index.html";
              }
              })  
    );}
  });

  var submitbtn1=document.getElementById('submitbtn1');
  var submitbtn1Form=document.getElementById('formid1');
  submitbtn1.addEventListener('click',function(e) {
    e.preventDefault();
    var senderName1=document.getElementById('name1').value;
    var senderEmail1=document.getElementById('email1').value;
    var senderMobile1=document.getElementById('mobile1').value;
    var senderComment1=document.getElementById('comment1').value;
    var body1= 'Name: '+ senderName1 + '<br>Mail Id: ' + senderEmail1 + '<br>Number: ' + senderMobile1 + '<br>Message: '+ senderComment1;
    if(senderName1!='' && senderEmail1!=''  &&senderMobile1!='' && senderComment1!=''){
    Email.send({
        SecureToken : "909a4ac7-785c-41be-abe5-1c1e983c5022",
        To : 'contact@savianmoney.com',
        From : "saviandemo@gmail.com",
        Subject : "Enquiry Request - Saya Piazza",
        Body : body1
    }).then(
        Swal.fire({
              title: 'Success',
              text: 'Your Enquiry is Successful',
              confirmButtonColor: '#3085d6',
              icon: 'success',
              allowOutsideClick:false,
              allowEscapeKey:false
              }).then((result) => {
              if (result.isConfirmed) {
                 submitbtn1Form.submit();
                 window.location.href="index.html";
              }
              })  
    );}
  });
