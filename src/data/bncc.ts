import { BNCCStage } from '../types';

export const BNCC_DATA: BNCCStage[] = [
  {
    id: 'educacao-infantil',
    name: 'Educação Infantil',
    description: 'Direitos de aprendizagem e desenvolvimento e campos de experiências.',
    areas: []
  },
  {
    id: 'ensino-fundamental',
    name: 'Ensino Fundamental',
    description: 'Anos Iniciais e Finais organizados por áreas do conhecimento.',
    areas: [
      {
        id: 'linguagens',
        name: 'Linguagens',
        competencias: [
          {
            id: 'comp-linguagens-1',
            name: 'Compreender práticas de linguagem',
            description: 'Compreender as linguagens como fenômenos geopolíticos, históricos, culturais, sociais, variáveis, heterogêneos e sensíveis aos contextos de uso.',
            subjects: [
              {
                id: 'lingua-portuguesa',
                name: 'Língua Portuguesa',
                habilidades: [
                  {
                    id: 'EF01LP01',
                    description: 'Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo.',
                    aulas: [
                      {
                        id: 'direcionalidade-da-escrita',
                        name: 'Direcionalidade da Escrita',
                        description: 'Aula sobre como organizamos a leitura e escrita no ocidente.',
                        palavraAnalysis: {
                          academica: 'Estudo da direcionalidade da escrita e sua importância na alfabetização inicial.',
                          historica: 'A evolução dos sistemas de escrita, do bustrofédon grego à padronização ocidental.',
                          filosofica: 'A ordem e a estrutura como fundamentos da comunicação humana.',
                          apologetica: 'A linguagem como um dom divino que reflete a ordem do Criador.',
                          biblica: 'João 1:1 - "No princípio era o Verbo". A palavra como fundamento da realidade.',
                          reflexao: 'Como a organização da escrita reflete a nossa busca por sentido no caos?',
                          missional: 'Usar a alfabetização como ferramenta de libertação e acesso à Palavra de Deus.'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'matematica',
        name: 'Matemática',
        competencias: [
          {
            id: 'comp-mat-1',
            name: 'Raciocínio Lógico e Abstrato',
            description: 'Utilizar estratégias, conceitos e procedimentos matemáticos para interpretar situações e resolver problemas.',
            subjects: [
              {
                id: 'matematica-basica',
                name: 'Matemática',
                habilidades: [
                  {
                    id: 'EF01MA01',
                    description: 'Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas.',
                    aulas: [
                      {
                        id: 'contagem-e-ordem',
                        name: 'Contagem e Ordem no Mundo',
                        description: 'Entendendo os números como ferramentas de organização da realidade.',
                        palavraAnalysis: {
                          academica: 'Conceito de número natural, contagem e correspondência biunívoca.',
                          historica: 'A necessidade humana de contar desde as civilizações antigas (pastoreio, comércio).',
                          filosofica: 'A matemática como linguagem universal e a precisão da realidade.',
                          apologetica: 'A inteligibilidade do universo através dos números aponta para um Designer Inteligente.',
                          biblica: 'Salmo 147:4 - "Conta o número das estrelas, chama-as a todas pelos seus nomes".',
                          reflexao: 'Se Deus conta as estrelas e os fios de cabelo, quão importante é a precisão e o cuidado em nossa vida?',
                          missional: 'Manejar recursos com sabedoria e honestidade, refletindo o caráter de Deus.'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ensino-medio',
    name: 'Ensino Médio',
    description: 'Áreas do conhecimento e seus componentes curriculares.',
    areas: [
      {
        id: 'linguagens-e-suas-tecnologias',
        name: 'Linguagens e suas Tecnologias',
        competencias: [
          {
            id: 'comp-medio-ling-1',
            name: 'Compreender práticas de linguagem',
            description: 'Compreender o funcionamento das diferentes linguagens e práticas culturais (artísticas, corporais e vernáculas).',
            subjects: [
              {
                id: 'lingua-portuguesa',
                name: 'Língua Portuguesa',
                habilidades: [
                  {
                    id: 'EM13LP01',
                    description: 'Relacionar o texto com seu contexto de produção e identificar as marcas de ideologia.',
                    aulas: [
                      {
                        id: 'interpretacao-de-discurso',
                        name: 'Interpretação de Discurso',
                        description: 'Análise crítica de textos e suas intenções ideológicas.',
                        palavraAnalysis: {
                          academica: 'Análise crítica do discurso e sociolinguística aplicada.',
                          historica: 'O papel da imprensa e da literatura nas revoluções sociais e na formação da opinião pública.',
                          filosofica: 'A busca pela verdade objetiva em um mundo saturado de narrativas e "pós-verdade".',
                          apologetica: 'Desenvolvimento do discernimento cristão frente às ideologias seculares e humanistas.',
                          biblica: '1 Tessalonicenses 5:21 - "Examinai tudo. Retende o que é bom".',
                          reflexao: 'Como a nossa cosmovisão bíblica nos ajuda a filtrar as mensagens que recebemos diariamente?',
                          missional: 'Comunicar a Verdade do Evangelho de forma relevante e apologética em contextos ideológicos diversos.'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'ciencias-da-natureza',
        name: 'Ciências da Natureza e suas Tecnologias',
        competencias: [
          {
            id: 'comp-medio-ciencias-1',
            name: 'Análise de Fenômenos Naturais',
            description: 'Analisar fenômenos naturais e processos tecnológicos, com base nas relações entre matéria e energia.',
            subjects: [
              {
                id: 'biologia',
                name: 'Biologia',
                habilidades: [
                  {
                    id: 'EM13CNT201',
                    description: 'Analisar e discutir modelos, teorias e leis propostos em diferentes épocas e culturas para explicar a origem da vida.',
                    aulas: [
                      {
                        id: 'origem-da-vida',
                        name: 'Origem da Vida e Complexidade',
                        description: 'Discussão sobre as teorias científicas e a complexidade biológica.',
                        palavraAnalysis: {
                          academica: 'Abiogênese, biogênese e teorias modernas sobre a origem da vida.',
                          historica: 'De Aristóteles a Pasteur: a queda da geração espontânea.',
                          filosofica: 'O problema da informação biológica e a teleologia (finalidade) na natureza.',
                          apologetica: 'A complexidade irredutível e o ajuste fino da vida como evidências de criação.',
                          biblica: 'Gênesis 1:1 - "No princípio criou Deus os céus e a terra".',
                          reflexao: 'A vida é um acidente químico ou um projeto intencional?',
                          missional: 'Defender a dignidade da vida humana como imagem de Deus em um mundo materialista.'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
