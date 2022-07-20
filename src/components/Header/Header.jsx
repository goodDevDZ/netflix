import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React ,{useState , useRef, useEffect} from 'react'
import Logo from '../../assets/logo.png'

import './Header.scss'

const Header = () => {

    const [showMenu,setShowMenu]=useState(false)
    const [ShowMainMenu,setShowMainMenu]=useState(false)
    const [isSmallScreen,setIsSmallScreen]=useState(false)
    
    const alterProfileMenu=()=>{
        setShowMenu(!showMenu)
    }

    const alterMainMenu=()=>{
        setShowMainMenu(!ShowMainMenu)
    }

    const headerRef=useRef()
    window.onscroll=()=>{
        if(window.pageYOffset>0){
            headerRef.current.classList.add("active")
        }
        else{
            headerRef.current.classList.remove("active")
            
        }
    }
    useEffect(_=>{
        if(window.innerWidth<=1358){

            setIsSmallScreen(true)
        }
    },[])
  return (
    <div ref={headerRef} className="header">
        <div className="container">
            <div className="header__one">
                    <img src={Logo} />
                    <ArrowDropDown onClick={_=>alterMainMenu(!ShowMainMenu)} className="icon icon--menu-down" />
                    
                        <ul className="big">
                        <span>Home</span>
                        <span>Series and Programs</span>
                        <span>Movies</span>
                        <span>Latest</span>
                        <span>My list</span>
                        <span>Audio and subtitles</span>
                    </ul>
                    


                    
                        <ul style={{display:ShowMainMenu?"flex":"none"}} className="small">
                        <span>Home</span>
                        <span>Series and Programs</span>
                        <span>Movies</span>
                        <span>Latest</span>
                        <span>My list</span>
                        <span>Audio and subtitles</span>
                    </ul>
                    


            </div>
            <div className="header__two">
                <div className="header__icons">
                    <Search className="icon" />
                    <Notifications className="icon" />
                </div>
                <div className="header__auth">
                    <img  className="header__auth__img" src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
                    <div className="header__auth__setting">
                    <ArrowDropDown onClick={_=>alterProfileMenu()} className="icon icon--drop-down" />
                        <ul style={{display:showMenu?"block":"none"}} className="setting">
                            <li>profile</li>
                            <li>settings</li>
                            <li>settings</li>
                            <li>settings</li>
                            <li>settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
