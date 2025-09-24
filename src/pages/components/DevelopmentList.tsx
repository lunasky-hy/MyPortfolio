import React from "react";
import NextTodoAppImg from "/src/assets/next-todo.png";
import BlankQuestionMakerImg from "/src/assets/blank-question-maker.png";
import WeatherMapImg from "/src/assets/weather-map.png";
import DigitalSignageImg from "/src/assets/digital-signage.png";

type DevelopmentProductType = {
    name: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
    isPublic: boolean;
    applicationUrl?: string;
}

// アイコンコンポーネント (Lucide Reactなどからインポートするか、SVGを直接使用)
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// --- ここから編集してください ---
// あなたのプロジェクトデータをこの配列に追加・編集してください
const portfolioData: Array<DevelopmentProductType> = [
  {
    name: '個人向けデジタルサイネージWeb',
    description: '気象、鉄道運行、ニュースなど様々情報をかっこよく表示するサイネージ。諸事情で公開していません。見たい方はお問い合わせください。',
    imageUrl: DigitalSignageImg,
    technologies: ['React', 'mapbox', 'Scraping', 'Signage'],
    githubUrl: 'https://github.com/lunasky-hy/DigitalSignage',
    isPublic: false,
    applicationUrl: 'https://master.d2udx8cqh3uqg6.amplifyapp.com/#7.7/34.665/135.446',
  },
  {
    name: 'シンプルなタスク管理アプリ',
    description: 'Next.js製のリアルタイムタスク管理アプリ。シンプルデザインで設計。RESTfulAPIでのアクセスもできるように構築中。GitHubアカウントでログイン可能。',
    imageUrl: NextTodoAppImg,
    technologies: ['Next.js', 'TypeScript', 'GCP', 'Firestore', 'RESTful API'],
    githubUrl: 'https://github.com/lunasky-hy/next-todoapp',
    isPublic: true,
    applicationUrl: 'https://next-todo-191458548912.asia-northeast1.run.app/',
  },
  {
    name: 'AndroidAuto対応 ナビアプリ',
    description: 'AndroidAutoに対応した、ドライブナビに最適化したアプリ。AIも連携したい（希望）',
    imageUrl: 'https://placehold.co/600x400/fde2e4/ffffff?text=Drive+Navigation+App',
    technologies: ['Android', 'Kotlin', 'Google Map', 'Android Auto'],
    githubUrl: 'https://github.com/lunasky-hy/HarukaRoute',
    isPublic: true,
  },
  {
    name: 'マークダウン穴埋め問題メーカー',
    description: 'マークダウンを入力し、テキストを選択すれば穴埋め問題を簡単に作成できるアプリ。',
    imageUrl: BlankQuestionMakerImg,
    technologies: ['React', 'Typescript'],
    githubUrl: 'https://github.com/lunasky-hy/fill-blank-question',
    applicationUrl: 'https://lunasky-hy.github.io/fill-blank-question/',
    isPublic: true,
  },
  {
    name: 'SPRESENSE GPSロガー',
    description: 'SPRESENSEで高性能GPSロガーを作成中（できてない）',
    imageUrl: 'https://placehold.co/600x400/a7c7e7/ffffff?text=Spresense+GPS+Logger',
    technologies: ['Spresense', 'C', '組み込み'],
    githubUrl: 'https://github.com/lunasky-hy/spresense-gpslogger',
    isPublic: true,
  },
  {
    name: '気象天気図まとめ',
    description: '気象庁のマニアック天気図を簡単にみられるまとめサイト',
    imageUrl: WeatherMapImg,
    technologies: ['HTML', '気象'],
    githubUrl: 'https://github.com/lunasky-hy/WeatherSiteMap',
    isPublic: true,
    applicationUrl: 'https://lunasky-hy.github.io/WeatherSiteMap/',
  },
];
// --- ここまで編集してください ---

type ProjectCardProps = {
  project: DevelopmentProductType;
}

// 個々のプロジェクトカードを表示するコンポーネント
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img 
        src={project.imageUrl} 
        alt={project.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4 min-h-12">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">利用技術</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.isPublic && <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-700"
          >
            <GithubIcon />
            <span>GitHubで見る</span>
          </a>
        }
      </div>
    </div>
  );
};

// ポートフォリオ全体を表示するメインコンポーネント
export default function DevelopmentList() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {portfolioData.length > 0 ? (
        <div className="relative">
          <div 
            ref={scrollContainerRef} 
            className="flex overflow-x-auto space-x-8 pt-8 pb-16 -mx-4 px-4 scrollbar-hide"
          >
            {portfolioData.map((project, idx) => (
              <div key={idx} className="flex-shrink-0 w-1/4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          {!isAtStart && (
            <button 
              onClick={() => scroll(-500)} 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              ◀
            </button>
          )}
          {!isAtEnd && (
            <button 
              onClick={() => scroll(500)} 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              ▶
            </button>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl">プロジェクトがまだありません。</p>
        </div>
      )}
    </div>
  );
}
