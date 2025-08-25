import React from "react";
import MoonNightImg from "../assets/moon_night.png";
import DevelopmentList from "./components/DevelopmentList";

export default function PortfolioMain() {
  const [displayedTitleLen, setTitleLen] = React.useState(0);
  const timerRef = React.useRef(0);

  const titleString = 'console.log(getPortfolio("hiroy"));';

  React.useEffect(() => {
    if (displayedTitleLen < titleString.length) {
      timerRef.current = setTimeout(
        () => setTitleLen(displayedTitleLen + 1),
        200 + (Math.random() * 100 - 150)
      );
    }
    return () => clearTimeout(timerRef.current);
  }, [displayedTitleLen]);


  return (<>
      <div id="index-title-container" className="full-height-content">
        <img src={MoonNightImg} id="title-img" />
        <div id="index-title" className="center-content">
          <h1 id="title-console">{titleString.slice(0, displayedTitleLen)}</h1>
          <div className={displayedTitleLen < titleString.length ? "hidden" : "title-fadein"}>
            <h1 id="title-response">&gt; &nbsp; ポートフォリオを表示</h1> 
            <ul id="index-list">
              <li>Readme</li>
              <li>Life Logs : 経歴</li>
              <li>Developed Product List : プロダクト</li>
              <li>Skill Sets : 開発スキル</li>
              <li>Interests : 趣味興味</li>
              <li>Comments : コメント</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="readme-container" className="full-height-content">
        <div id="readme" className="center-content">
          <h1># Read Me</h1>
          <p>お越しいただきありがとうございます！</p>
          <p>
            このサイトは、エンジニアである"hiroy"のポートフォリオサイトです。<br/>
            これまで開発してきた制作物やスキルセット、簡単な経歴を一覧にまとめています。<br/>
            作ったミニゲームもあるので良ければ楽しんでください！
          </p>
          <p>
            技術的なアウトプットだけでなく、趣味の天気観察や車など、<br />
            エンジニアという枠にとらわれない様々なことにも触れています。<br />
            このサイトを通して、私の人となりや興味関心について知っていただけると嬉しいです。<br />
          </p>
        </div>
      </div>
      <div id="lifelog-container" className="full-height-content">
        <div id="lifelog" className="center-content">
          <h1># Life Logs</h1>
          <p>準備中..... しばらくお待ちください.</p>
        </div>
      </div>
      <div id="product-container" className="full-height-content">
        <div id="product" className="center-content">
          <h1># Developed Product List</h1>
          <DevelopmentList />
        </div>
      </div>
      <div id="skillset-container" className="full-height-content">
        <div id="skillset" className="center-content">
          <h1># Skill Sets</h1>
          <p>準備中..... しばらくお待ちください.</p>
        </div>
      </div>
      <div id="interest-container" className="full-height-content">
        <div id="interest" className="center-content">
          <h1># Interests</h1>
          <p>準備中..... しばらくお待ちください.</p>
        </div>
      </div>
      <div id="comment-container" className="full-height-content">
        <div id="comment" className="center-content">
          <h1># Comments & Contacts</h1>
          <p>準備中..... しばらくお待ちください.</p>
        </div>
      </div>
    </>);
}