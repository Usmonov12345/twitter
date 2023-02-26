import React from 'react'
import '../Login/Login.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
    
        <div className="login_card">
            <i class="fa-brands fa-twitter Login-item__logo"></i>
            <h2 className='login_card__title'>Log in to Twitter</h2>
            <div className="login_card__box">
                <form action="" className='login_card__box_form'>
                    <input type="text" placeholder='Phone number, email address'  className='login_card__box_form_nameInput'/>
                    <input type="password" placeholder='Password'  className='login_card__box_form__lasInput'/>
                </form>
                
                <Link to="Profil" className='login_card__box__btn' >Log In</Link>
                <div className="login_card__box_divs">
                    <Link to="/Center" className='login_card__box_divs_link1'>
                    Forgot password?
                    </Link>
                    <Link to="/Profil" className='login_card__box_divs_link2'>
                    Sign up to Twitter
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login