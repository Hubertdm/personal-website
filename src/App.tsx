import { Brain, GraduationCap, Briefcase, Code, Mail, ChevronDown} from 'lucide-react';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import Navbar from './components/Navbar';
import SkillsGrid from './components/SkillsGrid';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero/About Section */}
      <div id="about" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          
          {/* Name Header */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
            Hubert de Marcillac
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 leading-relaxed mt-14">
            Data Scientist & NLP Engineer
          </h2>
            <Brain className="w-16 h-16 mx-auto mb-8 mt-14 text-blue-600" />

          {/* About Text */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mt-12">
            NLP and machine learning are for me sources of innovation and technological progress. As a computer science engineer with solid skills in Python and data engineering, I aim to tackle complex challenges. My ability to adapt quickly to new environments fuels my curiosity and motivation, driving me to find innovative solutions.
          </p>
          
          {/* Badges */}
          <div className="mt-8 space-x-2">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
              Looking for AI roles 🧠
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
              Startup environment 🚀
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
              Team collaboration 👥
            </span>
            </div>

{/* Button to download CV */}
<div className="mt-8">
  <a
    href="/hubert_cv.pdf"
    download="Hubert_de_Marcillac_CV.pdf"
    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-300 transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
    </svg>
    Download My CV
  </a>
</div>

<ChevronDown className="w-8 h-8 mx-auto mt-16 animate-bounce text-blue-600" />
        </div>
      </div>

      {/* Education Section */}
      <Section id="education" icon={<GraduationCap />} title="Education">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">
        <a href="https://ensem.univ-lorraine.fr/en/ensem-school/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          ENSEM
        </a>
          </h3>
          <p className="text-gray-600 mt-1">Computer Science, Engineer's Degree</p>
          <p className="text-gray-500 mt-1">2020 – 2024</p>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" icon={<Briefcase />} title="Experience">
        <div className="space-y-6">
          <ExperienceCard
            title="Data Science Consultant"
            company={<a href="https://www.cgi.com/france/fr-fr/intelligence-artificielle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CGI</a>}
            location="Paris - France"
            duration="Mar 2024 – Aug 2024"
            description={[
              "Developed a predictive model for railway traffic specific to the Île-de-France region, focusing particularly on clustering techniques.",
              "Enhanced the pipeline by adding new features, ensuring continuous improvement and industrialization of the model."
            ]}
          />
          <ExperienceCard
            title="NLP Engineer"
            company={<a href="https://leyton.com/uk/our-tech-lab/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leyton</a>}
            location="Casablanca - Morocco"
            duration="Jan 2023 – Jul 2023"
            description={[
              "Spearheaded the creation of a cutting-edge natural language processing model for industry classification based on the GICS framework, starting from initial conception to final optimization.",
              "Engaged in continuous research on the latest NLP advancements, integrating findings to consistently enhance model performance."
            ]}
          />
          <ExperienceCard
            title="Data Analyst"
            company={<a href="https://biogroup.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biogroup</a>}
            location="London - UK"
            duration="Jun 2021 – Jul 2021"
            description={[
              "Managed inventory and assisted in laboratory tasks.",
              "Handled data processing and software migration, enhancing data management efficiency and contributing to smooth laboratory operations."
            ]}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" icon={<Code />} title="Skills">
        <SkillsGrid />
      </Section>

      {/* Contact Section */}
      <Section id="contact" icon={<Mail />} title="Contact" className="bg-gray-50">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Let's connect! Feel free to reach out through any of these platforms :
            </p>
            <SocialLinks />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Hubert de Marcillac</p>
        </div>
      </footer>
    </div>
  );
}

export default App;