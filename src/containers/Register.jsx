/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { registerRequest } from '../actions';

const Register = (props) => {
  const { registerRequest, history } = props;
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    registerRequest(form);
    history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form onSubmit={handleOnSubmit} className='register__container--form'>
            <input
              name='name'
              className='input'
              type='text'
              value={form.name}
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              name='email'
              className='input'
              type='text'
              value={form.email}
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              value={form.password}
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button
              type='submit'
              className='button'
            >
              Registrarme
            </button>
          </form>
          <Link to='/login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = { registerRequest };

export default connect(null, mapDispatchToProps)(Register);
