export default {
  global: {
    Name: 'Desarrollo <em>web</em> y construcción de API',
    Description:
      'El componente formativo aborda los fundamentos del desarrollo <em>web</em> y la construcción de APIs, incluyendo conceptos de Internet, elementos físicos y lógicos de la red y tipos de conectividad. Asimismo, presenta bases de programación, arquitectura orientada a servicios, preparación del entorno de desarrollo, codificación de APIs, gestión de bases de datos y pruebas de <em>software</em> para garantizar el funcionamiento adecuado de las aplicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Fundamentos de Internet y del desarrollo <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '	Conceptos de Internet',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas de Internet',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elementos físicos de Internet',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Elementos lógicos de Internet',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tipos de conectividad en redes',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de programación para el desarrollo <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Lenguajes de programación utilizados en el desarrollo <em>web</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de datos y estructuras de programación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructuras de selección y estructuras de repetición',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Funciones, procedimientos, clases y objetos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Arquitectura orientada a servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos de arquitectura orientada a servicios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Servicios <em>web</em> SOAP',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Servicios <em>web</em> REST',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Aplicaciones y almacenamiento de datos en arquitecturas de servicios',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Desarrollo de APIs y configuración del entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Preparación del entorno de desarrollo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Requerimientos de <em>hardware</em> y <em>software</em> de IDE',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Codificación de módulos y desarrollo de APIs',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Solicitudes, respuestas y autenticación en APIs REST',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Migraciones y sincronización de bases de datos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'ORM (Object Relational Mapping)',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Pruebas en el desarrollo de APIs',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conceptos de pruebas de <em>software</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características y tipos de pruebas',
            hash: 't_5_2',
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
        download: 'downloads/CFA9_228146_DU.pdf',
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
      termino: 'API (Interfaz de Programación de Aplicaciones)',
      significado:
        'conjunto de reglas, protocolos y definiciones que permiten que diferentes aplicaciones o sistemas se comuniquen e intercambien información de forma estructurada.',
    },
    {
      termino: 'Arquitectura orientada a servicios (SOA)',
      significado:
        'modelo de diseño de <em>software</em> en el que las funcionalidades de una aplicación se organizan como servicios independientes que pueden ser utilizados por distintos sistemas a través de una red.',
    },
    {
      termino: 'Autenticación',
      significado:
        'proceso mediante el cual un sistema verifica la identidad de un usuario o aplicación antes de permitir el acceso a recursos o servicios.',
    },
    {
      termino: '<em>Endpoint</em>',
      significado:
        'dirección específica dentro de una API donde se puede acceder a un recurso o ejecutar una operación determinada mediante una solicitud HTTP.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'conjunto de herramientas, bibliotecas y buenas prácticas que facilitan el desarrollo de aplicaciones al proporcionar estructuras predefinidas para organizar el código.',
    },
    {
      termino: 'HTTP (Hypertext Transfer Protocol)',
      significado:
        'protocolo de comunicación utilizado en la <em>web</em> que permite el intercambio de información entre clientes (como navegadores) y servidores.',
    },
    {
      termino: 'Idempotencia',
      significado:
        'propiedad de algunas operaciones en la que realizar la misma solicitud varias veces produce siempre el mismo resultado en el servidor.',
    },
    {
      termino: 'IDE (Entorno de Desarrollo Integrado)',
      significado:
        'aplicación que reúne diferentes herramientas de programación, como editor de código, compilador, depurador y gestor de proyectos, para facilitar el desarrollo de <em>software.</em>',
    },
    {
      termino: 'JSON (JavaScript Object Notation)',
      significado:
        'formato ligero de intercambio de datos basado en texto que permite representar información estructurada de forma sencilla y legible para humanos y máquinas.',
    },
    {
      termino: 'Migración de base de datos',
      significado:
        'proceso mediante el cual se modifican, trasladan o actualizan estructuras de datos dentro de una base de datos, generalmente mediante scripts controlados que preservan la información existente.',
    },
    {
      termino: 'ORM (Mapeo objeto-relacional)',
      significado:
        'técnica de programación que permite interactuar con bases de datos relacionales utilizando objetos del lenguaje de programación en lugar de escribir consultas SQL directamente.',
    },
    {
      termino: 'REST (Representational State Transfer)',
      significado:
        'estilo de arquitectura para el desarrollo de servicios <em>web</em> que utiliza el protocolo HTTP para acceder y manipular recursos identificados mediante URLs.',
    },
    {
      termino: 'Servidor',
      significado:
        'sistema informático que proporciona servicios, recursos o datos a otros sistemas llamados clientes a través de una red.',
    },
    {
      termino: 'Solicitud HTTP',
      significado:
        'mensaje enviado por un cliente a un servidor para solicitar información o ejecutar una acción sobre un recurso disponible en una aplicación o API.',
    },
    {
      termino: 'URL (Uniform Resource Locator)',
      significado:
        'dirección única que identifica la ubicación de un recurso en Internet y permite acceder a él mediante un navegador o una aplicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Avast. (2024). <em>Todo lo que necesita saber sobre las redes de área local.</em>',
      link: 'https://www.avast.com/es-es/c-what-is-lan',
    },
    {
      referencia:
        'Bass, L., Clements, P., & Kazman, R. (2012). <em>Software architecture in practice</em> (3rd ed.). Addison-Wesley.',
    },
    {
      referencia:
        'BusinessCom. (s. f.). <em>Acceso a Internet por Satélite.</em>',
      link: 'https://www.bcsatellite.net/es/acceso-a-internet-por-satelite/',
    },
    {
      referencia:
        'Fielding, R. T. (2000). <em>Architectural styles and the design of network-based software architectures</em> (Doctoral dissertation, University of California, Irvine).',
    },
    {
      referencia:
        'Fernández, Y. (2026). <em>Cable coaxial: qué es, para qué sirve, tipos y cuál elegir.</em> Xataka Basics.',
      link:
        'https://www.xataka.com/basics/cable-coaxial-que-sirve-tipos-cual-elegir',
    },
    {
      referencia:
        'Fowler, M. (2003). <em>Patterns of enterprise application architecture.</em> Addison-Wesley.',
    },
    {
      referencia:
        'Gough, H. (2024). <em>Todo lo que necesita saber sobre las redes de área local.</em> Avast.',
      link: 'https://www.avast.com/es-es/c-what-is-lan',
    },
    {
      referencia:
        'Noori, R. (2024). <em>¿De qué materiales están hechos los cables de fibra óptica?</em> The Network Installers.',
      link:
        'https://thenetworkinstallers.com/es/blog/de-que-materiales-estan-hechos-los-cables-de-fibra-optica/',
    },
    {
      referencia:
        'Richardson, L., & Amundsen, M. (2013). <em>RESTful Web APIs.</em> O’Reilly Media.',
    },
    {
      referencia:
        'Sebesta, R. W. (2016). <em>Concepts of programming languages</em> (11th ed.). Pearson.',
    },
    {
      referencia:
        'Sommerville, I. (2016). <em>Software engineering</em> (10th ed.). Pearson.',
    },
    {
      referencia:
        'Tilkov, S., & Vinoski, S. (2010). <em>Node.js: Using JavaScript to build high-performance network programs.</em> IEEE Internet Computing.',
    },
    {
      referencia: 'Ubigo. (2024). <em>¿Qué son las antenas celulares?</em>',
      link: 'https://www.ubiqo.net/tecnologia/antenas-celulares/',
    },
    {
      referencia:
        'Webformix. (2021). <em>Fixed Wireless Internet vs DSL Internet: Pros & Cons.</em>',
      link:
        'https://www.webformix.com/fixed-wireless-internet-vs-dsl-internet-pros-cons/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
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
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
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
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
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
