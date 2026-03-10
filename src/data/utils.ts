import { BNCC_DATA } from './bncc';

export const getStage = (stageId: string) => BNCC_DATA.find(s => s.id === stageId);

export const getArea = (stageId: string, areaId: string) => {
  const stage = getStage(stageId);
  return stage?.areas.find(a => a.id === areaId);
};

export const getCompetencia = (stageId: string, areaId: string, compId: string) => {
  const area = getArea(stageId, areaId);
  return area?.competencias.find(c => c.id === compId);
};

export const getSubject = (stageId: string, areaId: string, compId: string, subjectId: string) => {
  const competencia = getCompetencia(stageId, areaId, compId);
  return competencia?.subjects.find(s => s.id === subjectId);
};

export const getHabilidade = (stageId: string, areaId: string, compId: string, subjectId: string, habId: string) => {
  const subject = getSubject(stageId, areaId, compId, subjectId);
  return subject?.habilidades.find(h => h.id === habId);
};

export const getAula = (stageId: string, areaId: string, compId: string, subjectId: string, habId: string, aulaId: string) => {
  const habilidade = getHabilidade(stageId, areaId, compId, subjectId, habId);
  return habilidade?.aulas.find(a => a.id === aulaId);
};

export const PALAVRA_METHODOLOGY = [
  {
    letter: 'P',
    title: 'Ponto de Partida (BNCC)',
    description: 'Item oficial da BNCC e Matéria.',
    content: 'Toda reflexão começa com o conteúdo oficial. Respeitamos a ciência e a base nacional.'
  },
  {
    letter: 'A',
    title: 'Análise Acadêmica',
    description: 'Explicação científica e neutra.',
    content: 'O conteúdo é apresentado de forma clara, didática e rigorosa.'
  },
  {
    letter: 'L',
    title: 'Legado Histórico',
    description: 'Contexto e origem do conhecimento.',
    content: 'Como este tema surgiu? Quais pensadores contribuíram para este saber?'
  },
  {
    letter: 'A',
    title: 'Análise Filosófica',
    description: 'Ética, epistemologia e metafísica.',
    content: 'Reflexão sobre os fundamentos e as implicações do conhecimento.'
  },
  {
    letter: 'V',
    title: 'Visão Bíblica & Apologética',
    description: 'Diálogo entre fé e razão.',
    content: 'Apresentação de argumentos cristãos e conexões com as Escrituras.'
  },
  {
    letter: 'R',
    title: 'Reflexão Profunda',
    description: 'Perguntas que ampliam a visão.',
    content: 'O conhecimento científico elimina ou amplia a nossa percepção da realidade?'
  },
  {
    letter: 'A',
    title: 'Aplicação Missional',
    description: 'Ética e testemunho no mundo.',
    content: 'Como este aprendizado se torna uma ponte para servir ao próximo e glorificar a Deus?'
  }
];
