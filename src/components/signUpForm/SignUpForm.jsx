import { NavigateNext } from '@material-ui/icons';

import React, {useState, useRef} from 'react'
import './SignUpForm.scss'


 const SignUpForm = ({btnTitle,placeHolder, isActive, name, onChange}) => {
    const [placeHolderActive,setPlaceHolderActive]=useState(false)

    const placeHolderEffect=(status)=>{
        setPlaceHolderActive(status)
    }   

    const buttonRef=useRef()

    const switchInputBox=(e)=>{
        console.log(buttonRef.current)
        const parentElement=buttonRef.current.parentElement;
        const nextElement=parentElement.nextElementSibling;
        parentElement.classList.remove("isActive")
        nextElement.classList.add("isActive")
    }

  return (
        <div className={`sign-up__form ${isActive}`}>
            <div className="sign-up__form__input ">
                <span onClick={_=>{placeHolderEffect(true)}}  style={{top:placeHolderActive?"5px":"35%",fontSize:placeHolderActive?"1.5rem":"2rem"}}>{placeHolder}</span>
                <input onChange={onChange} name={name} onBlur={_=>{placeHolderEffect(false)}} onFocus={_=>{placeHolderEffect(true)}} type="text" />
            </div>
            <button ref={buttonRef} onClick={_=>switchInputBox()} className="sign-up__form__btn">
                    <span>{btnTitle}</span>
                    <NavigateNext className="icon" />
            </button>
        </div>
  )
}
export default SignUpForm;