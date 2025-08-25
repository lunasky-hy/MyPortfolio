type DevelopmentProductType = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
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
    id: 1,
    name: '（サンプル）Eコマースサイト',
    description: 'ReactとFirebaseで構築したモダンなEコマースプラットフォームです。',
    imageUrl: 'https://placehold.co/600x400/a7c7e7/ffffff?text=E-Commerce',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/your-username/ecommerce-project',
  },
  {
    id: 2,
    name: '（サンプル）タスク管理アプリ',
    description: 'Next.js製のリアルタイムタスク管理アプリ。チームでの利用を想定。',
    imageUrl: 'https://placehold.co/600x400/d1d4f9/ffffff?text=Task+Manager',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    githubUrl: 'https://github.com/your-username/task-manager-app',
  },
  {
    id: 3,
    name: '（サンプル）個人ブログ',
    description: 'ヘッドレスCMSと連携した、静的サイトジェネレーターによるブログ。',
    imageUrl: 'https://placehold.co/600x400/fde2e4/ffffff?text=Personal+Blog',
    technologies: ['Gatsby', 'React', 'Contentful', 'Netlify'],
    githubUrl: 'https://github.com/your-username/personal-blog',
  },
  {
    id: 4,
    name: '（サンプル）天気予報アプリ',
    description: '外部APIを利用して、現在地と検索した都市の天気を表示します。',
    imageUrl: 'https://placehold.co/600x400/cce5cc/ffffff?text=Weather+App',
    technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com/your-username/weather-app',
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
        <p className="text-gray-600 mb-4 h-12">{project.description}</p>
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
        
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-700"
        >
          <GithubIcon />
          <span>GitHubで見る</span>
        </a>
      </div>
    </div>
  );
};

// ポートフォリオ全体を表示するメインコンポーネント
export default function DevelopmentList() {
  return (<div className="container mx-auto px-4 py-12">
    {/* プロジェクト一覧 */}
      {portfolioData.length > 0 ? (
        <div className="flex overflow-x-auto space-x-8 pt-8 pb-16 -mx-4 px-4">
          {portfolioData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl">プロジェクトがまだありません。</p>
        </div>
      )}
    </div>
  );
}
