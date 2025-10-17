import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const createPerson = (lang: 'en' | 'ja'): Person => ({
  firstName: "Riku",
  lastName: "Nakamura",
  name: "Riku Nakamura",
  role: lang === 'ja' ? "フルスタック開発者" : "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "riku.nakamura@example.com",
  location: "America/Denver",
  languages: lang === 'ja' ? ["英語", "日本語"] : ["English", "Japanese"],
});

const createNewsletter = (lang: 'en' | 'ja', person: Person): Newsletter => ({
  display: false,
  title: lang === 'ja' ? <>{person.firstName}のニュースレターを購読</> : <>Subscribe to {person.firstName}'s Newsletter</>,
  description: lang === 'ja' ? <>プロジェクトと学習の旅についての更新</> : <>Updates about my projects and learning journey</>,
});

const createSocial = (person: Person): Social => [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rikunnn",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/riku-nakamura-49521b304",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const createHome = (lang: 'en' | 'ja', person: Person): Home => ({
  path: "/",
  image: "/images/og/home.jpg",
  label: lang === 'ja' ? "ホーム" : "Home",
  title: lang === 'ja' ? `${person.name}のポートフォリオ` : `${person.name}'s Portfolio`,
  description: lang === 'ja'
    ? `${person.role}としての作品を紹介するポートフォリオサイト`
    : `Portfolio website showcasing my work as a ${person.role}`,
  headline: lang === 'ja'
    ? <>最新技術でフルスタックアプリケーションを構築</>
    : <>Building full-stack applications with modern technologies</>,
  featured: {
    display: false,
    title: "",
    href: "",
  },
  subline: lang === 'ja' ? (
    <>
      私はRikuです。Ensign CollegeでComputer Scienceを学んでいる学生で、フルスタック開発に情熱を持っています。
      <br />Next.js、Java、そして最新のWeb技術を使用して実用的なアプリケーションを構築しています。
    </>
  ) : (
    <>
      I'm Riku, a Computer Science student at Ensign College with a passion for full-stack development.
      <br /> I build practical applications using Next.js, Java, and modern web technologies.
    </>
  ),
});

const createAbout = (lang: 'en' | 'ja', person: Person): About => ({
  path: "/about",
  label: lang === 'ja' ? "自己紹介" : "About",
  title: lang === 'ja' ? `自己紹介 – ${person.name}` : `About – ${person.name}`,
  description: lang === 'ja'
    ? `${person.location}出身の${person.role}、${person.name}を紹介します`
    : `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: lang === 'ja' ? "はじめに" : "Introduction",
    description: lang === 'ja' ? (
      <>
        Ensign CollegeでComputer Scienceを専攻し、フルスタック開発を実践するRikuです。
        <br /><br />
        <strong>3つの強み：</strong>
        <br />
        <strong>① フルスタック実装力：</strong> Next.js + Google Sheets APIで2社のプロダクションシステムを構築。会計事務所向け生産性管理アプリと人材マッチングアプリを実装し、実業務で稼働中。
        <br />
        <strong>② 迅速な仮説検証：</strong> ChatGPT APIを活用したAI駆動マッチングアルゴリズムを設計・統合し、人材スクリーニング時間を大幅削減。
        <br />
        <strong>③ 顧客起点の設計：</strong> リアルタイムデータ同期機能を実装し、チームの効率とデータアクセス性を改善。現場の課題から逆算した機能開発を重視。
        <br /><br />
        「スピード重視・顧客起点・仮説検証」を軸に、実用的なWebアプリケーションを構築しています。
      </>
    ) : (
      <>
        Computer Science student at Ensign College specializing in full-stack development.
        <br /><br />
        <strong>Three Core Strengths:</strong>
        <br />
        <strong>① Full-Stack Implementation:</strong> Built 2 production systems using Next.js + Google Sheets API for an accounting firm and HR company, both currently in active use.
        <br />
        <strong>② Rapid Hypothesis Testing:</strong> Designed and integrated AI-powered matching algorithms using ChatGPT API, significantly reducing manual screening time in recruitment.
        <br />
        <strong>③ Customer-Centric Design:</strong> Implemented real-time data synchronization features to improve team efficiency and data accessibility, focusing on solutions derived from real-world challenges.
        <br /><br />
        Guided by "speed-oriented, customer-focused, hypothesis-driven" principles, I build practical web applications that solve real problems.
      </>
    ),
  },
  work: {
    display: true,
    title: lang === 'ja' ? "プロジェクト経験" : "Project Experience",
    experiences: [
      {
        company: lang === 'ja' ? "会計事務所 - 生産性管理システム" : "Accounting Firm - Productivity Management System",
        timeframe: "2024",
        role: lang === 'ja' ? "フルスタック開発者" : "Full Stack Developer",
        achievements: lang === 'ja' ? [
          <>
            <strong>状況：</strong> 会計事務所がExcelベースの手作業で業務管理を行っており、データ集計とレポート作成に週5時間以上を費やしていた。
          </>,
          <>
            <strong>課題：</strong> リアルタイムでの進捗確認ができず、月次レポート作成が遅延。複数メンバー間でのデータ共有も非効率。
          </>,
          <>
            <strong>対応：</strong> Next.js + Google Sheets APIでWebベースの生産性管理システムを設計・実装。双方向データ同期、自動集計ダッシュボード、リアルタイム更新機能を開発。
          </>,
          <>
            <strong>結果：</strong> レポート作成時間を週5時間→1時間に80%削減。チーム全体のデータアクセス時間が40%改善し、月次報告の遅延がゼロに。
          </>,
        ] : [
          <>
            <strong>Situation:</strong> Accounting firm relied on Excel-based manual workflows, spending 5+ hours/week on data aggregation and reporting.
          </>,
          <>
            <strong>Task:</strong> No real-time progress visibility, delayed monthly reports, and inefficient data sharing among team members.
          </>,
          <>
            <strong>Action:</strong> Designed and implemented web-based productivity management system using Next.js + Google Sheets API. Developed bi-directional data sync, automated dashboard, and real-time updates.
          </>,
          <>
            <strong>Result:</strong> Reduced reporting time by 80% (5hrs → 1hr/week). Improved team-wide data access by 40%, eliminated monthly report delays entirely.
          </>,
        ],
        images: [],
      },
      {
        company: lang === 'ja' ? "人材会社 - AI駆動マッチングアプリ" : "HR Company - AI-Powered Matching App",
        timeframe: "2024",
        role: lang === 'ja' ? "フルスタック開発者" : "Full Stack Developer",
        achievements: lang === 'ja' ? [
          <>
            <strong>状況：</strong> 人材会社が求人案件ごとに候補者を手動スクリーニングし、1案件あたり平均3時間を費やしていた。マッチング精度のばらつきも課題。
          </>,
          <>
            <strong>課題：</strong> 月間20案件の処理で60時間を消費。スピード不足により競合他社に候補者を奪われるケースが発生。
          </>,
          <>
            <strong>対応：</strong> Next.js + ChatGPT API + Google Sheets APIでAI駆動のマッチングシステムを構築。候補者プロフィールと求人要件を自動分析し、適合スコアを算出する機能を実装。
          </>,
          <>
            <strong>結果：</strong> スクリーニング時間を65%削減（3時間→1時間/案件）。月間処理能力が20→32案件に60%向上。マッチング精度の標準偏差が28%改善。
          </>,
        ] : [
          <>
            <strong>Situation:</strong> HR company manually screened candidates for each job posting, spending average 3 hours per case with inconsistent matching accuracy.
          </>,
          <>
            <strong>Task:</strong> Processing 20 cases/month consumed 60 hours. Slow turnaround caused candidate loss to competitors.
          </>,
          <>
            <strong>Action:</strong> Built AI-powered matching system using Next.js + ChatGPT API + Google Sheets API. Implemented automated analysis of candidate profiles vs. job requirements with compatibility scoring.
          </>,
          <>
            <strong>Result:</strong> Cut screening time by 65% (3hrs → 1hr per case). Increased monthly capacity by 60% (20 → 32 cases). Improved matching accuracy consistency by 28% (reduced standard deviation).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: lang === 'ja' ? "学歴" : "Education",
    institutions: [
      {
        name: "Ensign College",
        description: lang === 'ja'
          ? <>フルスタック開発とソフトウェアエンジニアリングに焦点を当てたComputer Scienceを専攻中。</>
          : <>Studying Computer Science with focus on full-stack development and software engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: lang === 'ja' ? "技術スキル" : "Technical Skills",
    skills: [
      {
        title: "Next.js / React",
        description: lang === 'ja' ? (
          <>プロダクション稼働中の2システムを構築・運用（2024年〜現在）。App Router、Server Components、API Routes を実務で活用。</>
        ) : (
          <>Built and operating 2 production systems (2024-present). Practical use of App Router, Server Components, and API Routes in real-world projects.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: lang === 'ja' ? "API統合・データ連携" : "API Integration & Data Sync",
        description: lang === 'ja' ? (
          <>Google Sheets API（双方向同期）とChatGPT API（AI分析）を本番環境で統合。リアルタイムデータ処理の設計・実装経験。</>
        ) : (
          <>Integrated Google Sheets API (bi-directional sync) and ChatGPT API (AI analysis) in production. Experience in real-time data processing design and implementation.</>
        ),
        tags: [
          {
            name: "Google Sheets API",
            icon: "code",
          },
          {
            name: "ChatGPT API",
            icon: "code",
          },
          {
            name: lang === 'ja' ? "REST API" : "REST API",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: lang === 'ja' ? "フロントエンド基礎" : "Frontend Fundamentals",
        description: lang === 'ja' ? (
          <>HTML/CSS/JavaScriptの基礎を習得（2023年〜）。レスポンシブデザインとモダンなUI/UX実装を学習中。</>
        ) : (
          <>Acquired HTML/CSS/JavaScript fundamentals (since 2023). Currently learning responsive design and modern UI/UX implementation.</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: lang === 'ja' ? "バックエンド（学習中）" : "Backend (Learning)",
        description: lang === 'ja' ? (
          <>Javaの基礎とオブジェクト指向プログラミングを学習中。サーバーサイド開発の理解を深めています。</>
        ) : (
          <>Currently learning Java fundamentals and object-oriented programming. Deepening understanding of server-side development.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
        ],
        images: [],
      },
    ],
  },
  aspirations: {
    display: true,
    title: lang === 'ja' ? "志向・働き方" : "Aspirations & Work Style",
    description: lang === 'ja' ? (
      <>
        <strong>興味テーマ：</strong>
        <br />
        • AIを活用した業務効率化・自動化ツールの開発
        <br />
        • データ駆動型の意思決定を支援するシステム設計
        <br />
        • ユーザー体験を重視したフルスタックアプリケーション
        <br /><br />
        <strong>貢献できる領域：</strong>
        <br />
        • Next.js/Reactを用いたフロントエンド開発
        <br />
        • 外部API統合とリアルタイムデータ連携
        <br />
        • 顧客起点での仮説検証とスピード重視の実装
        <br /><br />
        <strong>希望の働き方：</strong>
        <br />
        • リモート / ハイブリッド歓迎（柔軟な働き方を希望）
        <br />
        • 英語・日本語でのコミュニケーション可能
        <br />
        • 2025年夏以降の開始を希望
      </>
    ) : (
      <>
        <strong>Areas of Interest:</strong>
        <br />
        • AI-powered workflow automation and productivity tools
        <br />
        • Data-driven decision support system design
        <br />
        • User-centric full-stack application development
        <br /><br />
        <strong>Value I Can Bring:</strong>
        <br />
        • Frontend development with Next.js/React
        <br />
        • External API integration and real-time data synchronization
        <br />
        • Customer-focused hypothesis testing and rapid implementation
        <br /><br />
        <strong>Preferred Work Style:</strong>
        <br />
        • Remote / Hybrid welcome (flexible work arrangement preferred)
        <br />
        • Bilingual communication (English & Japanese)
        <br />
        • Available from Summer 2025
      </>
    ),
  },
});

const createBlog = (lang: 'en' | 'ja', person: Person): Blog => ({
  path: "/blog",
  label: lang === 'ja' ? "ブログ" : "Blog",
  title: lang === 'ja' ? "デザインと技術について書いています..." : "Writing about design and tech...",
  description: lang === 'ja'
    ? `${person.name}が最近取り組んでいることを読む`
    : `Read what ${person.name} has been up to recently`,
});

const createWork = (lang: 'en' | 'ja', person: Person): Work => ({
  path: "/work",
  label: lang === 'ja' ? "作品" : "Work",
  title: lang === 'ja' ? `プロジェクト – ${person.name}` : `Projects – ${person.name}`,
  description: lang === 'ja'
    ? `${person.name}によるデザインと開発プロジェクト`
    : `Design and dev projects by ${person.name}`,
});

const createGallery = (lang: 'en' | 'ja', person: Person): Gallery => ({
  path: "/gallery",
  label: lang === 'ja' ? "ギャラリー" : "Gallery",
  title: lang === 'ja' ? `フォトギャラリー – ${person.name}` : `Photo gallery – ${person.name}`,
  description: lang === 'ja'
    ? `${person.name}による写真コレクション`
    : `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
});

export function getContent(lang: 'en' | 'ja') {
  const person = createPerson(lang);
  const newsletter = createNewsletter(lang, person);
  const social = createSocial(person);
  const home = createHome(lang, person);
  const about = createAbout(lang, person);
  const blog = createBlog(lang, person);
  const work = createWork(lang, person);
  const gallery = createGallery(lang, person);

  return { person, social, newsletter, home, about, blog, work, gallery };
}
