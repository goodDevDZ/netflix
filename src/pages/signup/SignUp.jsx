import { NavigateNext } from '@material-ui/icons';

import React, {useState} from 'react';
import Header from '../../components/Header/Header'
import SignUpForm from '../../components/signUpForm/SignUpForm';
import './SignUp.scss'

 const SignUp = () => {
    const [placeHolderActive,setPlaceHolderActive]=useState(false)
    const [loginInfo,setLoginInfo]=useState({
        email:"",
        password:""
    })
    const placeHolderEffect=(status)=>{
        setPlaceHolderActive(status)
    }
    function getUserInfo(e){
        setLoginInfo(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
    console.log(loginInfo)


  return (
    <>
        <Header/>
        <button className="sign-up__signin">SIGNIN</button>
        <div className="sign-up">

            <div className="sign-up__wrapper">
                <div className="sign-up__content">

                        <h1 className="sign-up__content__title">Unlimited movies, TV shows, and more.</h1>
                        <p className="sign-up__content__desc1">Watch anywhere. Cancel anytime.</p>
                        <p className="sign-up__content__desc2">Ready to watch? Enter your email to create or restart your membership.</p>
        
                </div>

                <div className="sign-up__form--wrapper">

                    <SignUpForm onChange={getUserInfo} name={"email"} btnTitle={"Get Started"} placeHolder={"Your email"} isActive={"isActive"} />
                    <SignUpForm onChange={getUserInfo} name={"password"} btnTitle={"Submit"} placeHolder={"Your password"} isActive={""} />

                        <div className="sign-up__form__finish">
                            <h1>Your have Been Register Succefully !</h1>
                        </div>

                </div>
                
                <div className="sign-up__err"></div>
            </div>
        </div>
    </>

  )
}

export default SignUp;