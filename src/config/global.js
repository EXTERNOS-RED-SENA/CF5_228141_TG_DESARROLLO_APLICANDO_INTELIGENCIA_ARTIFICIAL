export default {
  global: {
    componenteFormativo:
      'Programación orientada a objetos: conceptos y modelado',
    descripcionCurso:
      'Este componente formativo aborda los fundamentos y prácticas de la programación orientada a objetos, explorando desde conceptos básicos hasta patrones de diseño avanzados. Cubre principios SOLID, modelado UML y arquitectura de software, proporcionando las herramientas necesarias para diseñar y desarrollar sistemas robustos y mantenibles bajo el paradigma orientado a objetos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
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
        titulo: 'Fundamentos de la Programación Orientada a Objetos	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción al paradigma orientado a objetos	',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases y objetos: conceptos básicos	',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Atributos, métodos y encapsulamiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principios de diseño orientado a objetos	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herencia y polimorfismo	',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Composición y agregación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios SOLID en POO	',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Del diseño a la implementación: consideraciones prácticas	',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelado y diseño UML	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diagramas de clases UML',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Relaciones entre clases',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas CASE para modelado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Patrones y arquitectura orientada a objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Patrones de diseño fundamentales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Arquitectura limpia con POO',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Implementación práctica de modelos',
            hash: 't_4_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '1. Fundamentos de la Programación Orientada a Objetos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, mayo 10). <em>Programación orientada a objetos</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TE0TKx9dEtI',
    },
    {
      tema: '1. Fundamentos de la Programación Orientada a Objetos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, julio 1). Abstracción: <em>Paradigma orientado a objetos.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=91N3L3mEGqo',
    },
    {
      tema: '2. Principios de diseño orientado a objetos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, julio 1). <em>Clases y objetos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gVH6zEnCY1c',
    },
    {
      tema: '2. Principios de diseño orientado a objetos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020, 23 junio). <em>Jerarquía.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=39VJptW7jQo',
    },
    {
      tema: '3. Modelado y diseño UML',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 3 abril). <em>Descarga e instalación de herramienta CASE MySQL Workbench.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nQ0FWBJbbi0',
    },
    {
      tema: '3. Modelado y diseño UML',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 27). <em>Diagramas de Secuencia UML.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HKbL1bWenIY',
    },
    {
      tema: '3. Modelado y diseño UML',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 26). <em>UML.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gVt_zU_E8wY',
    },
    {
      tema: '3. Modelado y diseño UML',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 25). <em>Diagrama de casos de uso.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yQSmLldIpNo',
    },
    {
      tema: '3. Modelado y diseño UML',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, julio 1). <em>Diagramas de clase: StarUML.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fPbUqr49DYU',
    },
    {
      tema: '3. Modelado y diseño UML',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, noviembre 24). <em>Diagrama de componentes.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sp8APOAyTfk',
    },
    {
      tema: '4. Patrones y arquitectura orientada a objetos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, diciembre 10). <em>Patrones de diseño de software.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZufBcrlUqak',
    },
    {
      tema: '4. Patrones y arquitectura orientada a objetos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, noviembre 26). <em>Diseño de patrones de software: introducción.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sQHRHhsRUoA ',
    },
  ],
  glosario: [
    {
      termino: 'Abstracción',
      significado:
        'Proceso de identificar características esenciales de un objeto, ignorando los detalles no relevantes',
    },
    {
      termino: 'Clase',
      significado:
        'Plantilla o modelo que define las propiedades y comportamientos de un tipo de objeto',
    },
    {
      termino: 'Composición',
      significado:
        'Relación fuerte entre clases donde una clase contiene a otra y es responsable de su ciclo de vida',
    },
    {
      termino: 'Encapsulamiento',
      significado:
        'Principio que oculta los detalles internos de una clase y expone solo lo necesario',
    },
    {
      termino: 'Herencia',
      significado:
        'Mecanismo que permite a una clase heredar propiedades y métodos de otra clase',
    },
    {
      termino: 'Interfaz',
      significado:
        'Contrato que especifica qué métodos debe implementar una clase',
    },
    {
      termino: 'Método',
      significado:
        'Función que define el comportamiento de los objetos de una clase',
    },
    {
      termino: 'Objeto',
      significado:
        'Instancia específica de una clase que contiene datos y comportamiento',
    },
    {
      termino: 'Patrón de Diseño',
      significado:
        'Solución reutilizable a un problema común en el diseño de <em>software</em>',
    },
    {
      termino: 'Polimorfismo',
      significado:
        'Capacidad de un objeto para tomar diferentes formas y responder de manera distinta al mismo mensaje',
    },
    {
      termino: 'Principios SOLID',
      significado:
        'Conjunto de cinco principios fundamentales para el diseño orientado a objetos',
    },
    {
      termino: 'Refactorización',
      significado:
        'Proceso de reestructurar código existente sin cambiar su comportamiento externo',
    },
    {
      termino: 'UML',
      significado:
        'Lenguaje Unificado de Modelado, utilizado para visualizar y documentar sistemas de <em>software</em>',
    },
    {
      termino: 'Visibilidad',
      significado:
        'Nivel de acceso que tienen otros objetos a los miembros de una clase',
    },
    {
      termino: 'CASE',
      significado:
        'Herramientas de Ingeniería de <em>Software</em> Asistida por Computadora para el diseño y modelado',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco, P., & Sánchez, J. (2023). Fundamentos de la programación orientada a objetos con Java. Ra-Ma Editorial.',
      link: '',
    },
    {
      referencia:
        'Ceballos, F. J. (2022). Programación orientada a objetos con C++. Ra-Ma Editorial.',
      link: '',
    },
    {
      referencia:
        'Deitel, P., & Deitel, H. (2024). Java How to Program (12th ed.). Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Freeman, E., Robson, E., Sierra, K., & Bates, B. (2022). Head First Design Patterns (3rd ed.). O&#39;Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (2023). Design Patterns: Elements of Reusable Object-Oriented <em>Software</em> (Anniversary ed.). Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'García, A., & Martínez, C. (2023). UML: Modelado de software para profesionales. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Larman, C. (2022). Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design (4th ed.). Pearson Education.',
      link: '',
    },
    {
      referencia:
        'López, J. M., & Montero, F. (2024). Patrones de diseño en Java: Una guía práctica. Universidad de Castilla-La Mancha.',
      link: '',
    },
    {
      referencia:
        'Martin, R. C. (2023). Clean Architecture: A Craftsman&#39;s Guide to Software Structure and Design. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Martin, R. C. (2021). Agile <em<Software Development</em>, Principles, Patterns, and Practices (2nd ed.). Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Méndez, A. (2023). Principios SOLID explicados: Una guía práctica con ejemplos en Python. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Phillips, D. (2024). Python 3 Object-Oriented Programming (4th ed.). Packt Publishing.',
      link: '',
    },
    {
      referencia:
        'Sánchez, G. (2022). Programación orientada a objetos: Un enfoque práctico. Universidad Nacional Autónoma de México.',
      link: '',
    },
    {
      referencia:
        'Torres, R., & Velázquez, P. (2023). Modelado UML con ejemplos prácticos. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Valdés-Miranda, C., & Rodríguez, P. (2024). Diseño y programación orientada a objetos: Una perspectiva práctica. Anaya Multimedia.',
      link: '',
    },
  ],
}
