
import "./globals.css"; 
import Container from "./components/Container";
import ProjectsAndBlogsSection from "@/app/components/ProjectsAndBlogsSection";
import AboutSection from "@/app/components/AboutSection";

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of my first project, what it does, and the technologies I used.',
    link: 'https://github.com/your-username/project-one'
  },
  {
    title: 'Project Two',
    description: 'A brief description of my second project, highlighting its unique features.',
    link: 'https://github.com/your-username/project-two'
  },
  {
    title: 'Project Three',
    description: 'A brief description of my third project and the problems it solves.',
    link: 'https://github.com/your-username/project-three'
  }
];

type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function Home() {
  return (
    <div className="relative z-20 w-full flex flex-col items-center gap-1">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-1 gap-8">
        <AboutSection />
      </div>
      </div>
  )
}