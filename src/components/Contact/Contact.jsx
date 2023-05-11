import './Contact.css';

function Contact() {
  const email = <a href="daniel.concordia2@gmail.com">daniel.concordia2@gmail.com</a>;
  const phone = <a href="tel:+5511998211681">(11) 99821-1681</a>;
  const github = <a href="https://github.com/DanielBConcordia" target='_blank'>DanielBConcordia</a>;

  return (
    <div id='main-box-contact'>
      <h2 id='contact-heading'>Informações para contato</h2>
      <p>E-mail: {email}</p>
      <p>Número de telefone: {phone}</p>
      <p>Github: {github}</p>
    </div>
  );

}

export default Contact;
