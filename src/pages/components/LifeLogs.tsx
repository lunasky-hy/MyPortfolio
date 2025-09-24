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
    date: '2014年4月',
    title: '高専入学',
    comment: '電気・情報系の学科にて電気・通信・ITの基礎を学ぶ。',
  },
  {
    id: 2,
    date: '2019年4月',
    title: '筑波大学',
    comment: '情報科学を専攻。',
  },
  {
    id: 3,
    date: '2022年4月',
    title: '社会人 鉄道会社',
    comment: `なぜか鉄道会社に。土方もやりつつ、社内ITエンジニアに。\n現在に至ります。`,
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
        {item.comment.split('\n').map((text, idx) => {
          return <p key={idx} className="text-gray-600">{text}</p>;
        })}
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
