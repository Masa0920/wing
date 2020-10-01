import React, { useState } from 'react'
import "../static/css/Modal.css"

export const Modal = () => {

   const [showModal, setShowModal] = useState(false);

   const handleClick = () => setShowModal(!showModal);

   return (
      <div>
         <p onClick={handleClick} className="absolute3 padding10 borderBlack hReverseBlack" >料金計算</p>
         <div className= { showModal ? "modal z2" : "none"} >
            <div className="borderBlack relative backWhite padding10" >
               <h2 className="absoluteTop" >月額料金を計算</h2>
               <div className="blank" ></div>

               <div className="overflowAuto" >
                  <h3>月額料金の目安が計算できます。</h3>
                  <div className="borderBlack" >
                     <p>1回の指導時間</p>
                     <p>一ヶ月の授業回数</p>
                     <p>プラン</p>
                  </div>
                  <div className="borderBlack" >
                     <p>1回の指導時間</p>
                     <p>一ヶ月の授業回数</p>
                     <p>プラン</p>
                  </div>
                  <ul>
                     <li>入会金等はかかりません。</li>
                     <li>プランの変更は月ごとに変更できます。</li>
                     <li>指導時間・回数は指導ごとに変更できます。</li>
                     <li>教材は別途費用が必要となる場合があります。</li>
                  </ul>
               </div>
               <div onClick={handleClick} className="absoluteBottom" >閉じる</div>
            </div>
         </div>
      </div>
   )
}


export default Modal