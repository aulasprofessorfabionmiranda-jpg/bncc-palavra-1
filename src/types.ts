export interface PalavraAnalysis {
  academica: string;
  historica: string;
  filosofica: string;
  apologetica: string;
  biblica: string;
  reflexao: string;
  missional: string;
}

export interface Aula {
  id: string;
  name: string;
  description: string;
  palavraAnalysis: PalavraAnalysis;
}

export interface Habilidade {
  id: string; // e.g., EF01LP01
  description: string;
  aulas: Aula[];
}

export interface BNCCSubject {
  id: string;
  name: string;
  habilidades: Habilidade[];
}

export interface Competencia {
  id: string;
  name: string;
  description: string;
  subjects: BNCCSubject[];
}

export interface BNCCArea {
  id: string;
  name: string;
  competencias: Competencia[];
}

export interface BNCCStage {
  id: string;
  name: string;
  description: string;
  areas: BNCCArea[];
}

export interface PalavraStep {
  letter: string;
  title: string;
  content: string;
  description: string;
}
