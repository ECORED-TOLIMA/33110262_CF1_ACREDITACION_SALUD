export default {
  global: {
    Name: 'Fundamentos normativos y estructurales de la acreditación en salud',
    Description:
      'Este componente formativo desarrolla la comprensión del marco normativo de la acreditación en salud, el Subsistema Nacional de Calidad (SNC), el Sistema Obligatorio de Garantía de la Calidad (SOGC) y el Sistema Único de Acreditación en Salud (SUA), fortaleciendo el reconocimiento de sus estándares, procesos, herramientas y entes acreditadores en el contexto del sector salud.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad de la acreditación en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marco normativo de la acreditación en salud',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principales disposiciones aplicables al sector salud',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia del cumplimiento normativo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Subsistema Nacional de Calidad (SNC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Articulación con el Sistema Obligatorio de Garantía de la Calidad (SOGC)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Relación con otras normas y sistemas de calidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema Obligatorio de Garantía de la Calidad (SOGC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes del sistema',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Relación entre el SOGC y la acreditación en salud',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistema Único de Acreditación en Salud (SUA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Alcance del sistema',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ruta de acreditación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estándares de acreditación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Procesos y procedimientos de acreditación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Herramientas para la acreditación',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Entes acreditadores',
            hash: 't_4_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acreditación',
      significado:
        'Proceso voluntario mediante el cual una institución de salud es evaluada frente a estándares superiores de calidad para demostrar niveles avanzados en la prestación de servicios.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'Proceso interno mediante el cual la institución valora el cumplimiento de los estándares de acreditación e identifica fortalezas y oportunidades de mejora.',
    },
    {
      termino: 'Calidad en salud',
      significado:
        'Conjunto de características de los servicios de salud que permiten garantizar seguridad, efectividad, oportunidad y satisfacción de los usuarios.',
    },
    {
      termino: 'Entes acreditadores',
      significado:
        'Organizaciones responsables de realizar la evaluación externa y otorgar el reconocimiento de acreditación en salud.',
    },
    {
      termino: 'Estándares de acreditación',
      significado:
        'Criterios definidos que orientan la evaluación del desempeño institucional frente a niveles superiores de calidad.',
    },
    {
      termino: 'Evaluación externa',
      significado:
        'Proceso realizado por un ente acreditador para verificar el cumplimiento de estándares en una institución de salud.',
    },
    {
      termino: 'Herramientas de acreditación',
      significado:
        'Instrumentos técnicos utilizados para evaluar, analizar y mejorar el cumplimiento de los estándares de calidad en salud.',
    },
    {
      termino: 'Indicadores de calidad',
      significado:
        'Medidas utilizadas para evaluar el desempeño de los procesos y resultados en la prestación de servicios de salud.',
    },
    {
      termino: 'Mejoramiento continuo',
      significado:
        'Proceso sistemático orientado a optimizar la calidad de los servicios mediante la evaluación y ajuste permanente de los procesos.',
    },
    {
      termino: 'Plan de mejoramiento',
      significado:
        'Conjunto de acciones formuladas para corregir brechas identificadas en la evaluación y fortalecer la calidad institucional.',
    },
    {
      termino: 'Seguridad del paciente',
      significado:
        'Conjunto de acciones orientadas a prevenir riesgos y eventos adversos durante la atención en salud.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso mediante el cual se seleccionan acciones basadas en el análisis de información y resultados de evaluación institucional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia. (1991). Gaceta Constitucional No. 116 del 20 de julio de 1991.',
      link: 'https://www.constitucioncolombia.com/',
    },
    {
      referencia:
        'Decreto 780 de 2016. (2016). Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (s. f.). ICONTEC.',
      link: '',
    },
    {
      referencia:
        'Ley 100 de 1993. (1993). Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'Ley 1751 de 2015. (2015). Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.',
      link: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1751_2015.html',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Programa de Auditoría para el Mejoramiento de la Calidad (PAMEC).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema de Información para la Calidad (SIC).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Obligatorio de Garantía de la Calidad (SOGC).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Único de Acreditación en Salud (SUA).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Único de Habilitación (SUH).',
      link: '',
    },
    {
      referencia:
        'Organismo Nacional de Acreditación de Colombia (ONAC). (s. f.). ONAC.',
      link: '',
    },
    {
      referencia:
        'Resolución 5095 de 2018. (2018). Por la cual se adopta el Manual de Acreditación en Salud Ambulatorio y Hospitalario de Colombia.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-5095-de-2018.pdf',
    },
    {
      referencia:
        'Subsistema Nacional de Calidad. (s. f.). Subsistema Nacional de la Calidad.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
