let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  
// Form telegram send 

// form 
const TOKEN = "5498794913:AAF-HAv9HyFx9lCRTwQjTBczaM9clUSjh-M";
const CHAT_ID = "-1001538175738";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const messageSender = document.querySelector('#contact-form')
const nameForm = document.querySelector('#name')
const emailForm = document.querySelector('#email')
const messageForm = document.querySelector('#areaMessage')

messageSender.addEventListener('submit', function(e){
  e.preventDefault();

  let message = `<b>Saytdan Zayavka</b>\n`;
  message += `<b>Jonatuvchi Ismi: ${nameForm.value} </b>\n`;
  message += `<b>Jonatuvchi Emaili: ${emailForm.value} </b>\n`;
  message += `<b>Jonatuvchi Emaili: ${messageForm.value} </b>\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
})