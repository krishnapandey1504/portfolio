import verifyLogo from "../../public/img/verify.png";
import portfolioLogo from "../../public/img/portfolio.png";

const projects = [
  {
    id: 1,
    label: "PROJ.01",
    title: "VeriFy",
    logo: verifyLogo,
    desc: "AI-powered fact checking and news credibility analysis platform.",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI"]
  },
  {
    id: 2,
    label: "PROJ.02",
    title: "Developer Portfolio",
    logo: portfolioLogo,
    desc: "Personal portfolio featuring open source contributions, projects and dynamic content.",
    tech: ["Next.js", "CSS Modules", "Framer Motion"]
  },
  // {
  //   id: 3,
  //   label: "PROJ.03",
  //   title: "News Bias Checker",
  //   logo: verifyLogo,
  //   desc: "Analyzes news articles and highlights potential bias patterns.",
  //   tech: ["Python", "Transformers", "Next.js"]
  // }
];

export default projects;