type LifeLogType = {
  id: number;
  date: string;
  title: string;
  comment: string;
}

// --- ここから編集してください ---
// あなたの経歴データをこの配列に追加・編集してください
const lifeLogData: LifeLogType[] = [
  {
    id: 1,
    date: '2018年4月',
    title: '〇〇大学 入学',
    comment: '情報科学を専攻。Web技術の基礎を学び始めました。',
  },
  {
    id: 2,
    date: '2021年10月',
    title: '長期インターンシップ開始',
    comment: '株式会社△△にて、Reactを使ったフロントエンド開発を経験。',
  },
  {
    id: 3,
    date: '2022年3月',
    title: '〇〇大学 卒業',
    comment: '卒業研究では、機械学習を用いた画像認識システムを構築。',
  },
  {
    id: 4,
    date: '2022年4月',
    title: '株式会社×× 入社',
    comment: 'Webエンジニアとしてキャリアをスタート。現在に至ります。',
  },
  {
    id: 5,
    date: '2023年5月',
    title: '資格「基本情報技術者」取得',
    comment: '体系的な知識の証明として、国家資格を取得しました。',
  },
];
// --- ここまで編集してください ---

type LogItemProps = {
  item: LifeLogType;
  isLast: boolean;
}

// 個々の経歴イベントを表示するコンポーネント
const LogItem = ({ item, isLast }: LogItemProps) => {
  return (
    <div className="flex">
      {/* タイムラインのドットと縦線 */}
      <div className="flex flex-col items-center mr-6">
        <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full"></div>
        {!isLast && <div className="w-px h-full bg-blue-300"></div>}
      </div>
      
      {/* 経歴の内容 */}
      <div className="pb-10">
        <p className="text-sm text-gray-500 mb-1">{item.date}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.comment}</p>
      </div>
    </div>
  );
};

// ライフログ全体を表示するメインコンポーネント
export default function LifeLogs() {
  return (
    <div className="max-w-3xl mx-auto">
      <div>
        {lifeLogData.length > 0 ? (
          lifeLogData.map((item, index) => (
            <LogItem 
              key={item.id} 
              item={item} 
              isLast={index === lifeLogData.length - 1} 
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">経歴がまだありません。</p>
          </div>
        )}
      </div>
    </div>
  );
}
