type CertificationType = {
  year: number;
  title: string;
  comment: string;
}

// --- ここから編集してください ---
// あなたの経歴データをこの配列に追加・編集してください
const certificationData: CertificationType[] = [
  {
    year: 2016,
    title: '危険物取扱者　乙種　1/2/3/4/5/6類',
    comment: '甲種と同等。いろいろあって乙種を１つずつ取得',
  },
  {
    year: 2016,
    title: '基本情報技術者',
    comment: '学生時代に取得',
  },
  {
    year: 2017,
    title: '応用情報技術者',
    comment: '2回目でようやく',
  },
  {
    year: 2017,
    title: '航空特殊無線技士',
    comment: 'フォネティックコードをマスター。',
  },
  {
    year: 2017,
    title: '気象予報士',
    comment: '天気図も読めるエンジニアに',
  },
  {
    year: 2018,
    title: '防災士',
    comment: '気象予報士とセットで。',
  },
  {
    year: 2022,
    title: '情報安全確保支援士（旧セキスペ）',
    comment: 'ようやくレベル4',
  },
  {
    year: 2023,
    title: 'G検定',
    comment: '流行りに乗って。',
  },
];
// --- ここまで編集してください ---

type LogItemProps = {
  item: CertificationType;
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
        <p className="text-sm text-gray-500 mb-1">{item.year}年</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.comment}</p>
      </div>
    </div>
  );
};

// ライフログ全体を表示するメインコンポーネント
export default function Certifications() {
  return (
    <div className="max-w-3xl mx-auto">
      <div>
        {certificationData.length > 0 ? (
          certificationData.map((item, index) => (
            <LogItem 
              key={index} 
              item={item} 
              isLast={index === certificationData.length - 1} 
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