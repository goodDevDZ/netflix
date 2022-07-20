import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';

import './Login.scss'

 const Login = () => {
  return (
    <div className="login">
        <Header />
            <div className="login-form">
                    <form method="POST" action="/">
                            <h1 className="login-form__title">LOGIN PAGE</h1>
                            <input type="text" name="" id="" className="login-form__email" placeholder="YOUR EMAIL ADRESS" />
                            <input type="password" name="" id="" className="login-form__password"  placeholder="YOUR PASSWORD"/>
                            <input type="submit" className="login-form__submit" value="LOGIN" />
                            <div className="login-form__settings">
                                <input type="checkbox" name="keepLogged" className="login-form__settings__keep-logged"/>
                                <a className="login-form__settings__forget-password" href="#">Forget your password ?</a>
                            </div>
                    </form>
            </div>
        <Footer/>
    </div>

  )
}
export default Login ;