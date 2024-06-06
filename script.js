document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('OoUbG6ydy5aDsXK4'); // Substitua 'YOUR_PUBLIC_KEY' pela sua Public Key do EmailJS

  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  };
});

function sendEmail(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const templateParams = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
  };

  emailjs.send('service_ve2ab4a', 'template_oy4vw0y', templateParams)
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          console.error('FAILED...', error);
          alert('Ocorreu um erro ao enviar a mensagem.');
      });
}
