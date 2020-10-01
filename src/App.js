import React from 'react';
import './App.css';
import Navbar from './screens/Navbar';
import ITT from './components/ITT';
import WingLogo from "../src/static/images/logo.png"
import Detail from './components/Detail';
import Modal from './components/Modal';
import Test from './components/Test';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="blank" ></div>
      <div className="blank" ></div>
      <img className="w100" src={WingLogo} alt="" />
      <h1>個別指導をどこででも</h1>
      {/* <div className="blank" ></div> */}
      <div className="" >
        <p className="borderBlack w100 padding5 margin5" >料金</p>
        <p className="borderBlack w100 padding5 margin5" >無料体験</p>
      </div>

      <div className="blank" ></div>

      <div className="flexwrap content" >
        <div className="w400" >
          <h2>オンラインで個別指導</h2>
          <p className="margin10" >もう、余計なことにエネルギーを使わなくて大丈夫。勉強にエネルギーを集中させよう。</p>
        </div>

        <div className="w450 table1" >
          <table className="" cellSpacing="0" >
            <tbody>
              <tr>
                <th></th>
                <th>Wing</th>
                <th>個別指導塾</th>
                <th>家庭教師</th>
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

      <div className="flexwrap content" >
        <ITT icon="far fa-moon" title="24時まで対応" text="習い事・部活動で忙しいですか？Wingなら24時まで授業が可能。晩ごはんを食べたあと、自室で・リビングで個別授業を受講できます。" />
        <ITT icon="far fa-file-alt" title="指導報告書" text="指導内容・単元の理解度・宿題などを記載したレポートを授業後、保護者様のメールアドレスへ送付致します。" />
        <ITT icon="fas fa-mobile-alt" title="スマホで受講" text="PC・タブレット端末だけでなく、スマートフォンでの受講も可能。機材を新しく用意する必要がないため、手軽に始められます。" />
        <ITT icon="far fa-calendar-check" title="時間・回数調整が容易" text="授業時間は15分単位で予約でき、月の授業回数も自由に調整できます。また、テスト直前に授業を増やす等のご相談もOK。" />
      </div>

      <div className="blank" ></div>

      <div className="back-grey border content padding20" >
        <div className="flexwrap relative" >
          <h2 className="margin10">料金</h2>
          <Modal/>
          <Test/>
        </div>

        <div className="flexwrap" >
          <div className="w300 padding20 back-white border card " >
            <h2>Basic</h2>
            <p>ベーシック</p>
            <p>基本料：無料</p>
            <p>授業料：500円/15分</p>
            <p>準備費：200円/回</p>
            <p>自分で勉強が進められる方等、宿題の管理や、サポートが不要な方向きのプランです。</p>
            <Detail/>
          </div>
          <div className="w300 padding20 back-white border card " >
            <h2>Standard</h2>
            <p>スタンダード</p>
            <p>基本料：2000円/月</p>
            <p>授業料：550円/15分</p>
            <p>準備費：200円/回</p>
            <p>授業時間以外にも担当講師に質問</p>
            <Detail/>
          </div>
          <div className="w300 padding20 back-white border card" >
            <h2>Premium</h2>
            <p>プレミアム</p>
            <p>基本料：4000円/月</p>
            <p>授業料：600円/15分</p>
            <p>準備費：200円/回</p>
            <p>授業時間以外にも担当講師に質問</p>
            <Detail/>
          </div>
        </div>

        <div className="blank" ></div>

        <div className="content flexwrap back-white padding20 border">
          <h2 className="w500" >オンライン自習室</h2>
          <div className="w500" >
            <h2>目的を持って学習しよう</h2>
            <p>Wingのオンライン自習室はただの自習室ではありません。 自習の前後で自習の意味と目標を自身で設定し、取り組み内容を評価する。 意味のない勉強をなくすために、Wingのオンライン自習室は、自習をサポートします。 </p>
          </div>
        </div>


      </div>

      

    </div>
  );
}

export default App;
