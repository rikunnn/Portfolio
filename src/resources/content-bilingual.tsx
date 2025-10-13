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
    link: "https://github.com/rikunakamura",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rikunakamura/",
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
        RikuはEnsign CollegeでComputer Scienceを専攻している学生で、フルスタック開発に強い関心を持っています。
        現在、HTML、CSS、JavaScriptなどのフロントエンド技術を学習しながら、バックエンド開発のためにJavaも学習しています。
        実際のアプリケーションを構築した経験を持ち、技術スキルと実践的な問題解決能力を組み合わせています。
      </>
    ) : (
      <>
        Riku is a Computer Science student at Ensign College with a strong interest in full-stack development.
        He is currently learning frontend technologies including HTML, CSS, and JavaScript, while also studying
        Java for backend development. With hands-on experience in building real-world applications, Riku
        combines technical skills with practical problem-solving abilities.
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
            Next.jsとGoogle Sheets APIを使用して会計事務所向けの生産性管理アプリケーションを開発し、
            ワークフロー追跡とレポート作成を効率化しました。
          </>,
          <>
            WebアプリケーションとGoogle Sheets間のリアルタイムデータ同期を実装し、
            チームの効率とデータアクセスを向上させました。
          </>,
        ] : [
          <>
            Developed a productivity management application for an accounting firm using Next.js
            and Google Sheets API to streamline workflow tracking and reporting.
          </>,
          <>
            Implemented real-time data synchronization between the web application and Google Sheets,
            improving team efficiency and data accessibility.
          </>,
        ],
        images: [],
      },
      {
        company: lang === 'ja' ? "人材会社 - マッチングアプリケーション" : "HR Company - Matching Application",
        timeframe: "2024",
        role: lang === 'ja' ? "フルスタック開発者" : "Full Stack Developer",
        achievements: lang === 'ja' ? [
          <>
            Next.js、ChatGPT API、Google Sheets APIを使用して人材会社向けのマッチングアプリケーションを構築し、
            候補者と求人のマッチングプロセスを自動化しました。
          </>,
          <>
            候補者プロフィールと求人要件を分析するAI駆動のマッチングアルゴリズムを統合し、
            手動スクリーニング時間を大幅に削減しました。
          </>,
        ] : [
          <>
            Built a matching application for a recruitment company using Next.js, ChatGPT API,
            and Google Sheets API to automate candidate-job matching processes.
          </>,
          <>
            Integrated AI-powered matching algorithms to analyze candidate profiles and job requirements,
            significantly reducing manual screening time.
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
        title: lang === 'ja' ? "フロントエンド開発" : "Frontend Development",
        description: lang === 'ja' ? (
          <>最新のWeb技術を使用して、レスポンシブでインタラクティブなユーザーインターフェースを構築しています。</>
        ) : (
          <>Building responsive and interactive user interfaces with modern web technologies.</>
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
        title: lang === 'ja' ? "バックエンド開発" : "Backend Development",
        description: lang === 'ja' ? (
          <>Javaおよび関連技術を使用してサーバーサイドアプリケーションとAPIを開発しています。</>
        ) : (
          <>Developing server-side applications and APIs using Java and related technologies.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
        ],
        images: [],
      },
      {
        title: lang === 'ja' ? "フルスタック開発" : "Full Stack Development",
        description: lang === 'ja' ? (
          <>Next.jsを使用して完全なWebアプリケーションを構築し、外部APIを統合して機能を拡張しています。</>
        ) : (
          <>Building complete web applications with Next.js and integrating external APIs for enhanced functionality.</>
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
            name: lang === 'ja' ? "API統合" : "API Integration",
            icon: "code",
          },
        ],
        images: [],
      },
    ],
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
