import React from 'react';
import './App.css';
import Navbar from './screens/Navbar';
import ITT from './components/ITT';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="blank" ></div>
      <div className="blank" ></div>
      <div className="blank" ></div>
      <h2>個別指導をどこででも</h2>
      <div className="blank" ></div>
      <div className="flexwrap" >
        <p></p>
        <p></p>
        <p>料金</p>
        <p>無料体験</p>
        <p></p>
        <p></p>
      </div>

      <div className="blank" ></div>
      <div className="blank" ></div>

      <div className="flexwrap" >
        <div className="w45" >
          <h2>オンラインで個別指導</h2>
          <p>もう、余計なことにエネルギーを使わなくて大丈夫。勉強にエネルギーを集中させよう。</p>
        </div>

        <div className="w45" >
          <table cellSpacing="0" >
            <tbody>
              <tr>
                <th></th>
                <td>Wing</td>
                <td>個別指導塾</td>
                <td>家庭教師</td>
              </tr>
              <tr>
                <th>移動時間</th>
                <td>不要</td>
                <td>必要</td>
                <td>不要</td>
              </tr>
              <tr>
                <th>気遣い</th>
                <td>不要</td>
                <td>不要</td>
                <td>必要</td>
              </tr>
              <tr>
                <th>金額</th>
                <td>安い</td>
                <td>高い</td>
                <td>高い</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="blank" ></div>
      <div className="blank" ></div>

      <div className="flexwrap" >
        <ITT title="24時まで対応" text="習い事・部活動で忙しいですか？Wingなら24時まで授業が可能。晩ごはんを食べたあと、自室で・リビングで個別授業を受講できます。" />
        <ITT title="指導報告書" text="指導内容・単元の理解度・宿題などを記載したレポートを授業後、保護者様のメールアドレスへ送付致します。" />
        <ITT title="スマホで受講" text="PC・タブレット端末だけでなく、スマートフォンでの受講も可能。機材を新しく用意する必要がないため、手軽に始められます。" />
        <ITT title="時間・回数調整が容易" text="授業時間は15分単位で予約でき、月の授業回数も自由に調整できます。また、テスト直前に授業を増やす等のご相談もOK。" />
      </div>

    </div>
  );
}

export default App;
