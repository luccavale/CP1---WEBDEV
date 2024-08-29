import React from 'react';

const Contato = () => {
  return (
    <div>
      <h1>Dúvidas e suporte, entre em contato:</h1>
      <div className="contact-form">
        <form>
          <label>Nome:</label>
          <input type="text" />
          <label>E-mail:</label>
          <input type="email" />
          <label>Mensagem:</label>
          <textarea></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="social-icons">
        {/* Ícones das redes sociais */}
      </div>
    </div>
  );
};

export default Contato;