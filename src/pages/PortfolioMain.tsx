import React from "react";
import MoonNightImg from "../assets/moon_night.png";
import DevelopmentList from "./components/DevelopmentList";
import LifeLogs from "./components/LifeLogs";
import Certifications from "./components/Certifications";

export default function PortfolioMain() {
  const [displayedTitleLen, setTitleLen] = React.useState(0);
  const timerRef = React.useRef(0);

  const readmeRef = React.useRef<HTMLDivElement>(null);
  const lifelogRef = React.useRef<HTMLDivElement>(null);
  const productRef = React.useRef<HTMLDivElement>(null);
  const skillsetRef = React.useRef<HTMLDivElement>(null);
  const interestRef = React.useRef<HTMLDivElement>(null);
  const commentRef = React.useRef<HTMLDivElement>(null);

  const titleString = 'console.log(getPortfolio("hiroy"));';

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref) return;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    if (displayedTitleLen < titleString.length) {
      timerRef.current = setTimeout(
        () => setTitleLen(displayedTitleLen + 1),
        30 + (Math.random() * 20)
      );
    }
    return () => clearTimeout(timerRef.current);
  }, [displayedTitleLen]);


  return (<>
      <div id="index-title-container" className="full-height-content">
        <img src={MoonNightImg} id="title-img" />
        <div id="index-title" className="center-content">
          <h1 id="title-console">$ {titleString.slice(0, displayedTitleLen)}</h1>
          <div id='index-content'>
            <div className={displayedTitleLen < titleString.length ? "hidden" : "title-fadein"}>
              <ul id="index-list">
                <li><a onClick={() => scrollToRef(readmeRef)}>Readme</a></li>
                <li><a onClick={() => scrollToRef(lifelogRef)}>Life Logs : 経歴</a></li>
                <li><a onClick={() => scrollToRef(productRef)}>Developed Product List : プロダクト</a></li>
                <li><a onClick={() => scrollToRef(skillsetRef)}>Skill Sets : 開発スキル</a></li>
                <li><a onClick={() => scrollToRef(interestRef)}>Interests : 趣味興味</a></li>
                <li><a onClick={() => scrollToRef(commentRef)}>Comments : コメント</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="readme-container" ref={readmeRef} className="full-height-content">
        <div id="readme" className="center-content">
          <h1># Read Me</h1>
          <p>お越しいただきありがとうございます！</p>
          <p>
            このサイトは、エンジニアである"hiroy"のポートフォリオサイトです。<br/>
            これまで開発してきた制作物やスキルセット、簡単な経歴を一覧にまとめています。<br/>
            {/* 作ったミニゲームもあるので良ければ楽しんでください！*/}
          </p>
          <p>
            技術的なアウトプットだけでなく、趣味の天気観察や車など、<br />
            エンジニアという枠にとらわれない様々なことにも触れています。<br />
            このサイトを通して、私の人となりや興味関心について知っていただけると嬉しいです。<br />
          </p>
        </div>
      </div>
      <div id="lifelog-container" ref={lifelogRef} className="full-height-content">
        <div id="lifelog" className="center-content">
          <div className="flex">
            <div>
              <h1># Life Logs</h1>
              <LifeLogs />
            </div>
            <div className="ml-10">
              <h1># Certifications</h1>
              <Certifications />
            </div>
          </div>
        </div>
      </div>
      <div id="product-container" ref={productRef} className="full-height-content">
        <div id="product" className="center-content">
          <h1># Developed Product List</h1>
          <DevelopmentList />
        </div>
      </div>
      <div id="skillset-container" ref={skillsetRef} className="full-height-content">
        <div id="skillset" className="center-content">
          <h1># Skill Sets</h1>
          <p>準備中..... しばらくお待ちください.</p>
        </div>
      </div>
      <div id="interest-container" ref={interestRef} className="full-height-content">
        <div id="interest" className="center-content">
          <h1># Interests</h1>
          <p>準備中..... しばらくお待ちください.</p>
        </div>
      </div>
      <div id="comment-container" ref={commentRef} className="full-height-content">
        <div id="comment" className="center-content">
          <h1># Comments & Contacts</h1>
          <p>準備中..... しばらくお待ちください.</p>
        </div>
      </div>
    </>);
}