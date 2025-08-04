import React from "react";

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
      <div id="index-title" className="full-height-content">
        <h1 id="title-console">{titleString.slice(0, displayedTitleLen)}</h1>
        <div className={displayedTitleLen < titleString.length ? "hidden" : "title-fadein"}>
          <h1 id="title-response">&gt; &nbsp; ポートフォリオを表示</h1> 
          <ul id="index-list">
            <li>Readme</li>
            <li>ライフログ（経歴）</li>
            <li>プロダクト</li>
            <li>テクニカルグラフ（スキルセット）</li>
            <li>趣味</li>
          </ul>
        </div>
      </div>
      <div id="aboutme" className="full-height-content">
        <h1>About Me</h1>
      </div>
    </>);
}