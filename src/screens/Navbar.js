import React from 'react'
import '../static/css/Navbar.css'
import WingLogo from "../static/images/logo.png"

const Navbar = () => {
   return (
      <div className="navbar back-grey" >
         <div className="content flexwrap" >
            <img className="w50 imgContain" src={WingLogo} alt="" />
            <p className="inlineBlock padding1020" >ホーム</p>
            <p className="inlineBlock padding1020" >個別指導</p>
            <p className="inlineBlock padding1020" >自習室</p>
            <div className="flexGrow1" ></div>
            <p className="inlineBlock padding1020 margin05 blue borderBlue" >無料体験申し込み</p>
            <p className="inlineBlock padding1020 green borderGreen" >会員用サイト</p>
         </div>
      </div>
   )
}


export default Navbar