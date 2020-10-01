import React, { useState } from 'react'

const Detail = () => {

   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);

   return (
      <div>
         <p onClick={handleClick} className="borderBlue blue hReverse margin10" >詳細を表示</p>
            <table className={click ? "content table2": 'none'} cellSpacing="0" >
              <tr>
                <th>基本料</th>
                <td>無料</td>
              </tr>
              <tr>
                <th>授業料</th>
                <td>500円/15分</td>
              </tr>
              <tr>
                <th>手配料</th>
                <td>200円/回</td>
              </tr>
              <tr>
                <th>定型文メール</th>
                <td>無制限</td>
              </tr>
              <tr>
                <th>講師へのメール</th>
                <td>-</td>
              </tr>
              <tr>
                <th>自習室の利用</th>
                <td></td>
              </tr>
              <tr>
                <th>質問</th>
                <td>無料枠なし</td>
              </tr>
              <tr>
                <th>学習相談</th>
                <td>-</td>
              </tr>
              <tr>
                <th>宿題管理</th>
                <td>-</td>
              </tr>
            </table>
      </div>
   )
}


export default Detail
