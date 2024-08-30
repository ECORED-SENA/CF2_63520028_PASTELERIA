<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Explorando las cremas en la pastelería.',
      titulo: 'Cuestionario',
      introduccion:
        'Identificación en la elaboración, uso y decoración de productos de repostería, fomentando la precisión y creatividad en su práctica profesional.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes cremas es utilizada principalmente para decorar y acompañar frutas frescas?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Crema pastelera',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crema <em>chantilly</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crema inglesa',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crema de Mantequilla',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué ingrediente es esencial en la elaboración de la crema pastelera?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mantequilla',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Leche',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crema de leche',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agua',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Cuál de los siguientes equipos NO es necesario para preparar crema <em>chantilly</em>?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Batidora industrial o manual',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Espátula de caucho',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Licuadora',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tamiz',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el porcentaje de grasa recomendado para la crema de leche usada en la crema <em>chantilly</em>?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: '10-20 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '20-30 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '30-42 %',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '42-50 %',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de batido se caracteriza por incorporar una gran cantidad de aire?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Batido pesado',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Batido de mantequilla',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Batido liviano',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Batido de crema',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes ingredientes se utiliza para la elaboración del brillo de chocolate?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mantequilla',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gelatina',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Glucosa',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Harina',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué crema se conoce también como salsa inglesa?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Crema <em>chantilly</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crema pastelera',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crema inglesa',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crema de mantequilla',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes no es un equipo necesario para la preparación de cremas en pastelería?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Balanza',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Batidora',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesador de alimentos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tamiz',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de decoración utiliza una mezcla de azúcar y otros ingredientes para crear piezas sólidas y estructurales?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Ganache',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Brillo de chocolate',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pastillaje',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Salsa de frutas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el ingrediente opcional en la crema <em>chantilly</em> que puede agregarse para darle sabor? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Azúcar',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crema de leche',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vainilla',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Huevos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
