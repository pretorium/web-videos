/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user, logoutRequest, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={hasUser ? gravatar(user.email) : userIcon} alt={hasUser ? user.email : 'user-icon'} />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li><Link to='/'>{user.name}</Link></li>
          )}

          {hasUser ? (
            <li><a hreft='#login' onClick={handleLogout}>Cerrar Sesión</a></li>
          ) : (
            <li><Link to='/login'>Iniciar Sesión</Link></li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { logoutRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
