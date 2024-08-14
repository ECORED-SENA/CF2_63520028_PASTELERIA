export default {
  global: {
    componenteFormativo: 'Preparaciones y usos de cremas en pastelería',
    descripcionCurso:
      'El componente presenta la preparación y usos de diversas cremas en pastelería, como la crema chantilly, pastelera, inglesa y de mantequilla. Incluye recetas detalladas, equipos e ingredientes necesarios, y técnicas de elaboración. Además, se mencionan métodos de preparación para batidos livianos y pesados, así como decoraciones con pastillaje, ganache, brillo de chocolate y salsas de frutas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Cremas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Crema <em>chantilly</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Crema pastelera',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Crema inglesa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Crema de mantequilla',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cremas industriales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Batidos livianos y pesados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Bizcochuelo o <em>biscuit</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Batido pesado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ponqué de novia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '<em>Brownie</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: '<em>Muffin:</em> ponquecito dulce',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: '<em>Cupcake</em>',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: '<em>Cupcake</em> de chocolate',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Decoración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Pastillaje para piezas fuertes y figuras decorativas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cubierta de pastillaje para cake de ceremonia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Brillo de chocolate',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cubierta <em>ganache</em>',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Salsa de frutas',
            hash: 't_3_5',
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
      tema: 'Cremas',
      referencia: 'SENA (2012). Pastelería Cap1 [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/ODB4fO0t9LE?feature=shared',
    },
    {
      tema: 'Crema <em>chantilly</em>',
      referencia:
        'Juliana Postres (2020). Cómo Hacer Una Crema Chantillí Perfecta. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=3-QusyQJLZI&ab_channel=JulianaPostres',
    },
    {
      tema: 'Crema pastelera',
      referencia:
        'Chef JoséRa Castillo (2023). CEEMA PASTELERA! ¿Qué errores evitar al prepararla? Mis consejos revelados  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=sjKNSj56me8&ab_channel=ChefJos%C3%A9RaCastillo',
    },
    {
      tema: 'Crema inglesa',
      referencia:
        'CanalCandido (2012). Crema inglesa [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=v5php-jW_Ig&ab_channel=CanalCandido',
    },
    {
      tema: '<em>Brownie</em>',
      referencia:
        'Cocina Para Todos (2019). El mejor BROWNIE de CHOCOLATE del Mundo.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=xlB8o0HsYcQ&ab_channel=CocinaParaTodos',
    },
    {
      tema: '<em>Muffin:</em> ponquecito dulce ',
      referencia:
        'Cuk-it!. (2023). MUFFINS de ARÁNDANOS con Crumble - CUKit! [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-XFA_J7Cs7U&ab_channel=Cuk-it%21',
    },
  ],
  glosario: [
    {
      termino: 'Balanza',
      significado:
        'instrumento utilizado para medir el peso de los ingredientes con precisión.',
    },
    {
      termino: 'Batidora',
      significado:
        'dispositivo eléctrico o manual utilizado para mezclar y batir ingredientes hasta obtener la consistencia deseada.',
    },
    {
      termino: 'Crema <em>chantilly</em>',
      significado:
        'preparación dulce a base de crema de leche y azúcar, caracterizada por su textura suave y esponjosa.',
    },
    {
      termino: 'Crema inglesa',
      significado:
        'también conocida como salsa inglesa, es una preparación líquida y suave utilizada principalmente como salsa para postres.',
    },
    {
      termino: 'Crema pastelera',
      significado:
        'crema básica y fundamental en pastelería, utilizada como relleno en una variedad de productos de panadería.',
    },
    {
      termino: 'Espátula',
      significado:
        'herramienta de cocina utilizada para mezclar, esparcir o manipular ingredientes y mezclas. Puede ser de madera, caucho o plástico.',
    },
    {
      termino: 'Fécula',
      significado:
        'sustancia en polvo utilizada como espesante en diversas preparaciones culinarias.',
    },
    {
      termino: 'Ganache',
      significado:
        'mezcla de crema de leche y chocolate utilizada para cubrir, rellenar y decorar tortas y otros postres.',
    },
    {
      termino: 'Glucosa',
      significado:
        'tipo de azúcar utilizado en la preparación de diversas cremas y decoraciones para darles una textura suave y brillante.',
    },
    {
      termino: 'Merengue italiano',
      significado:
        'preparación de repostería hecha a base de claras de huevo y almíbar caliente, utilizada para cubrir y decorar pasteles.',
    },
    {
      termino: 'Tamiz',
      significado:
        'herramienta utilizada para separar y airear ingredientes en polvo, como harina o azúcar.',
    },
  ],
  referencias: [
    {
      referencia: 'Adrià, A. (2018). Los postres del Bulli.',
      link:
        'https://libroschorcha.wordpress.com/wp-content/uploads/2018/06/los-postres-del-bulli-albert-adria.pdf',
    },
    {
      referencia:
        'Barahona, H.  (2014). ELABORACIÓN DE CREMAS PARA PASTELERÍA MEDIANTE LA UTILIZACIÓN DE LECHES VEGETALES DE ALMENDRA, NUEZ Y MANI, RIOBAMBA.',
      link:
        'http://dspace.espoch.edu.ec/bitstream/123456789/10280/1/84T00374.pdf',
    },
    {
      referencia:
        'Carmona, A.  (2023). Las delicias de Almería. Postres el sabor de tu pueblo.',
      link: 'https://www.terrazacarmona.com/pdf/Libro%20recetas%20Postres.pdf',
    },
    {
      referencia:
        'Díaz Ramiro, F. (2010). Cremas, rellenos y salsas más utilizados en pastelería.',
      link:
        'https://archivos.csif.es/archivos/andalucia/ensenanza/revistas/csicsif/revista/pdf/Numero_31/FRANCISCO_%20DIAZ%20RAMIRO_2.pdf',
    },
    {
      referencia:
        'INATEC (2016). Manual del Protagonista Postres de Restaurante.',
      link:
        'https://tecnologicodematagalpa.files.wordpress.com/2016/07/postres-de-restaurantes.pdf',
    },
    {
      referencia: 'Obregón, A. (2021). Repostería Tradicional. Planeta.',
      link:
        'https://proassetspdlcom.cdnstatics2.com/usuaris/libros_contenido/arxius/48/47938_Reposteria_Tradicional.pdf ',
    },
    {
      referencia:
        'Rodríguez, C.  (2020). Desarrollo del Manual de procesos y funciones de la Panadería y Pastelería.',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/19111/4/UPS-GT002980.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Oswaldo Acosta Romero',
          cargo: 'Experto temático',
          centro:
            'Centro Nacional de Hotelería y Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
