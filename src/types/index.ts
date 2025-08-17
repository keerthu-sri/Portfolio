export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'web' | 'database' | 'tools';
}

export interface Achievement {
  title: string;
  organization?: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}