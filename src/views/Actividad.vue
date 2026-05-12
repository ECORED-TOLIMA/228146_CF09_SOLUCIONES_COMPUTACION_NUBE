<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Misión API.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con Internet, programación para desarrollo <em>web</em>, arquitectura orientada a servicios, desarrollo de APIs y pruebas de <em>software.</em>',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de Internet en el contexto del desarrollo web?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Almacenar programas únicamente en computadores personales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir la comunicación y el intercambio de información entre sistemas conectados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar únicamente aplicaciones locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los sistemas operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un ejemplo de herramienta de Internet utilizada para acceder a información en la <em>web?</em>',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Navegador <em>web.</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disco duro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Memoria RAM.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes elementos forma parte de los componentes físicos de Internet?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Protocolos de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lenguajes de programación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servidores y <em>routers.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Direcciones URL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento lógico permite identificar la ubicación de un recurso en la <em>web?</em>',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'URL',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Router</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cable de red',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tarjeta gráfica',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es un ejemplo de conectividad utilizada en redes?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'HTML',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SQL',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'JSON',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fibra óptica',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes lenguajes se utiliza comúnmente para el desarrollo <em>web</em> del lado del cliente?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'JavaScript',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'C',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Assembly',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'COBOL',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué representa un tipo de dato en programación?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un método de conexión a Internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una categoría de información que puede almacenar una variable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el propósito de una estructura de selección en programación?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir una acción indefinidamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guardar información en una base de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conectar sistemas en red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ejecutar instrucciones según el cumplimiento de una condición.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué permiten las estructuras de repetición en programación?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar instrucciones varias veces mientras se cumpla una condición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar páginas <em>web.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conectar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear direcciones IP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué es una función en programación?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un tipo de servidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un bloque de código que realiza una tarea específica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un dispositivo de red.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué describe la arquitectura orientada a servicios (SOA)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema operativo para servidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un modelo basado en servicios que se comunican entre sí.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un tipo de base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica de los servicios <em>web</em> SOAP?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizan exclusivamente el formato XML para el intercambio de datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Funcionan solo en redes locales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No requieren protocolos de comunicación.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'No utilizan Internet.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una característica principal de los servicios <em>web</em> REST?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo funcionan con XML.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No utilizan direcciones URL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo se ejecutan en sistemas locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Utilizan operaciones basadas en HTTP para acceder a recursos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué es una API?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema operativo para servidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de reglas que permite la comunicación entre aplicaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Un tipo de navegador.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué permite un entorno de desarrollo integrado (IDE)?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar redes de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desarrollar, editar y depurar código en un mismo entorno.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Administrar <em>hardware.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué representa un <em>endpoint</em> en una API?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un dispositivo de red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una dirección o ruta donde se accede a un recurso de la API.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué tipo de prueba verifica que cada componente del sistema funcione correctamente de manera individual?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Prueba de integración.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Prueba de rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prueba de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prueba unitaria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué evalúan las pruebas de integración?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La interacción entre diferentes componentes del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El rendimiento del <em>hardware.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El diseño de interfaces.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La velocidad de Internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cuál es el objetivo de las pruebas de seguridad en una API?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la velocidad de la red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar vulnerabilidades y proteger los datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar el diseño visual de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el tamaño del código.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué buscan las pruebas de rendimiento en una API?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el lenguaje de programación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear nuevas bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medir la velocidad, capacidad de respuesta y comportamiento bajo carga.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos de Internet, la programación para el desarrollo <em>web</em>, la arquitectura orientada a servicios y la construcción de APIs.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
