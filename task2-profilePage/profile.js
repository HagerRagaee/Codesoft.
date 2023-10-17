
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entery) => {
    console.log(entery)
    if(entery.isIntersecting)
    {
      entery.target.classList.add('show');
    }
    else{
      entery.target.classList.remove('show'); 
    }
  });
}) ;

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("Email").value; // Corrected 'Email' with a capital 'E'
  const message = document.getElementById("massage").value; // Corrected 'massage' to 'message'
  const subject = "Message from " + name;
  const emailBody = message + " From: " + email;
  const mailtoLink = "mailto:hagerragaee9@gmail.com?subject=" + subject + "&body=" + emailBody;
  window.location.href = mailtoLink;
}
