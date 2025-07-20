
import "./globals.css"; 
import AboutSection from "@/app/components/AboutSection";


export default function Home() {
  return (
    <div className="relative z-20 w-full flex flex-col items-center gap-1">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-1 gap-8">
        <AboutSection />
      </div>
      </div>
  )
}