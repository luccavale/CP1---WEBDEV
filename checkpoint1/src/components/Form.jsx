import React from 'react';


const Form = () => {
  return (

    <form className='forms'>
        <div className='campo-nome'>
            <label className='label' htmlFor="nome">Nome: </label>
            <input className = 'input' id='nome' type="text" /> 
        </div>

        <div className='campo-email'>
            <label className='label' htmlFor="email">E-mail: </label>
            <input className='input' id='email' type="text" />
        </div>

        <div className='campo-mensagem'>
            <label  className='labelv2' htmlFor="">Mensagem: </label>
            <textarea name="Mensagem" id="mensagem"></textarea>
        </div>
       
        <button className='button'>Enviar</button>        
    </form>

  );
};

export default Form;