import React from 'react';
import { Code, Brain, Users, Database } from 'lucide-react';
import SkillCategory from './SkillCategory';

const skillsData = {
  programming: {
    title: "Programming & Tools",
    icon: Code,
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "PyTorch" },
      { name: "Spark" },
      { name: "Power BI" },
      { name: "Matlab" },
      { name: "Pandas" },
      { name: "Microsoft Azure" },
      { name: "Hugging Face" },
      { name: "Scikit-Learn" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Transformers" }
    ]
  },
  ml: {
    title: "Machine Learning & Data Science",
    icon: Brain,
    skills: [
      { name: "Machine Learning Algorithms" },
      { name: "Deep Learning" },
      { name: "Artificial Neural Networks" },
      { name: "Supervised & Unsupervised Learning" },
      { name: "Clustering" },
      { name: "Classification" },
      { name: "NLP (Natural Language Processing)" },
      { name: "XGBoost" },
      { name: "Prompt Engineering" }
    ]
  },
  soft: {
    title: "Personal & Communication",
    icon: Users,
    skills: [
      { name: "Communication Skills" },
      { name: "Curiosity" },
      { name: "Collaboration" },
      { name: "Problem-Solving" },
      { name: "Leadership" },
      { name: "Fluent French" },
      { name: "Professional English" }
    ]
  },
  tools: {
    title: "Key Tools for Data Analysis",
    icon: Database,
    skills: [
      { name: "Power BI" },
      { name: "Hugging Face" },
      { name: "spaCy" },
      { name: "Pandas" },
      { name: "NumPy" }
    ]
  }
};

const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.values(skillsData).map((category) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          icon={category.icon}
          skills={category.skills}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;