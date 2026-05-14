<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Pruebas en el desarrollo de APIs

    p.mb-4 Las pruebas de #[i software] constituyen una etapa fundamental dentro del proceso de desarrollo de aplicaciones y servicios digitales. En el caso de las APIs, las pruebas permiten verificar que los servicios expuestos funcionen correctamente, respondan de forma consistente a las solicitudes de los clientes y manejen adecuadamente situaciones de error.

    .row.justify-content-center.align-items-stretch.mb-4.g-0(data-aos="fade-right")
      .col-lg-6.col-12.cajon.C02.d-flex.flex-column.align-items-start.p-4.p-lg-5.cajon-responsive
        p Una API actúa como un punto de comunicación entre diferentes sistemas o aplicaciones. Por esta razón, cualquier fallo en su funcionamiento puede afectar múltiples componentes de un sistema o incluso a aplicaciones externas que dependen de ella. Las pruebas permiten detectar estos problemas antes de que el servicio sea puesto en producción, reduciendo riesgos operativos y mejorando la calidad del #[i software]. 
        p.mb-0 En el desarrollo de APIs, las pruebas se enfocan en validar distintos aspectos del servicio, como el correcto procesamiento de solicitudes, la precisión de las respuestas generadas por el servidor, el cumplimiento de los contratos definidos en la documentación de la API y la seguridad en el acceso a los recursos.
      .col-lg-4.d-flex.ocultar-img-responsive
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema5/img-01.svg', alt='', style="object-fit: cover;")   

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Durante este proceso se comprueba, por ejemplo, que los métodos HTTP funcionen según lo esperado, que los parámetros enviados por el cliente sean interpretados correctamente y que los códigos de estado devueltos por el servidor representen adecuadamente el resultado de cada operación.
        p Además, las pruebas permiten garantizar que la API mantenga un comportamiento estable incluso cuando recibe múltiples solicitudes, cuando se presentan datos inválidos o cuando se producen condiciones inesperadas dentro del sistema.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En entornos de desarrollo modernos, especialmente en arquitecturas basadas en microservicios o aplicaciones en la nube, las pruebas de APIs suelen integrarse dentro de procesos automatizados de integración y entrega continua (CI/CD). Esto permite validar de forma constante la calidad del servicio cada vez que se realizan cambios en el código.

    p.text-center En consecuencia, la implementación de pruebas sistemáticas no solo mejora la confiabilidad del sistema, sino que también facilita el mantenimiento, la evolución del #[i software] y la detección temprana de errores durante el ciclo de desarrollo.  

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1. Conceptos de pruebas de #[i software]

    p.mb-4 Las pruebas de #[i software] constituyen una etapa fundamental dentro del proceso de desarrollo de aplicaciones y APIs. Su propósito es verificar que el sistema funcione correctamente, cumpla con los requisitos definidos y responda adecuadamente ante diferentes condiciones de uso.

    .row.justify-content-center.align-items-center
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") En el desarrollo de APIs, las pruebas permiten comprobar que los servicios responden de forma correcta a las solicitudes realizadas por los clientes, que los datos se procesan adecuadamente y que la comunicación entre sistemas se mantiene estable y segura. A través de estas verificaciones es posible detectar errores antes de que el #[i software] sea utilizado en entornos reales, lo que contribuye a mejorar la calidad, la confiabilidad y el mantenimiento del sistema.
            .col.col-lg-2.col-5.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img-03.svg', alt='Imagen decorativa')

        p Para comprender el proceso de pruebas, es importante conocer algunos conceptos fundamentales:

    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img-04.png", alt="")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img-05.svg", alt="").img100.m-auto
                  h4.text-center Prueba de #[i software]
                  p Proceso sistemático mediante el cual se evalúa el funcionamiento de un sistema informático para verificar que cumple con los requisitos funcionales y técnicos definidos durante su desarrollo.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img-06.svg", alt="").img100.m-auto
                  h4.text-center Error
                  p Equivocación cometida por una persona durante las fases de diseño, programación o configuración del sistema. Un error puede originar defectos en el #[i software].
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img-07.svg", alt="").img100.m-auto
                  h4.text-center Defecto o #[i bug]
                  p Problema presente en el código o en la lógica del sistema que provoca un comportamiento incorrecto del #[i software].
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img-08.svg", alt="").img100.m-auto
                  h4.text-center Fallo
                  p Manifestación visible de un defecto cuando el sistema se ejecuta y produce un resultado inesperado o incorrecto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img-09.svg", alt="").img100.m-auto
                  h4.text-center Caso de prueba
                  p Conjunto de condiciones, datos y pasos definidos para verificar si una funcionalidad específica del sistema produce el resultado esperado.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img-10.svg", alt="").img100.m-auto
                  h4.text-center Cobertura de pruebas
                  p Indicador que permite determinar qué proporción del sistema o del código ha sido evaluada mediante pruebas.

    p.text-center Comprender estos conceptos permite interpretar adecuadamente los resultados obtenidos durante el proceso de verificación del #[i software] y facilita la aplicación de diferentes tipos de pruebas que contribuyen a garantizar la calidad de una API.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2. Características y tipos de pruebas

    p.mb-4 Para evaluar adecuadamente el funcionamiento de una API no es suficiente realizar una única verificación. Es necesario aplicar diferentes tipos de pruebas que permitan validar la funcionalidad, el rendimiento, la seguridad y la interacción con otros sistemas.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .d-flex.flex-wrap.align-items-center.tarjeta01
          .imagen-02
            figure.mb-0
              img(src='@/assets/curso/tema5/img-11v.svg' alt='Servidor' class='img-fluid')
          
          .contenido-tarjeta.p-4
            p.mb-0(data-aos="fade-down") Cada tipo de prueba cumple un propósito específico dentro del proceso de aseguramiento de calidad del #[i software]. La combinación de estas pruebas permite detectar errores, mejorar la estabilidad del sistema y garantizar que los servicios funcionen correctamente en distintos escenarios de uso.

    p.mb-4.text-center Entre las principales pruebas utilizadas en el desarrollo de APIs se encuentran las siguientes:

    .tarjeta.tarjeta--C02.color.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas funcionales
            p.mb-0 Verifican que los #[i endpoints] de la API respondan correctamente a las solicitudes realizadas por los clientes. Estas pruebas validan que los códigos de estado, los formatos de datos y la información retornada coincidan con lo especificado en el diseño de la API.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-12.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas unitarias 
            p.mb-0 Evalúan componentes individuales del sistema, como funciones o métodos específicos. En el caso de las APIs, permiten comprobar el comportamiento de un #[i endpoint] de manera aislada, facilitando la detección temprana de errores en el código.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-13.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas de integración
            p.mb-0 Analizan la interacción entre diferentes componentes del sistema, como servicios, bases de datos o APIs externas. Su objetivo es comprobar que el intercambio de datos y la comunicación entre módulos se realicen correctamente.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-14.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas de rendimiento
            p.mb-0 Miden la capacidad de respuesta, la velocidad y el comportamiento de la API bajo diferentes niveles de carga. Permiten identificar cuellos de botella y evaluar cómo responde el sistema ante múltiples solicitudes simultáneas.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-15.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas de carga y estrés
            p.mb-0 Las pruebas de carga evalúan el rendimiento de la API bajo un volumen determinado de solicitudes concurrentes, mientras que las pruebas de estrés buscan determinar el límite máximo que el sistema puede soportar antes de fallar.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-16.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas de seguridad
            p.mb-0 Se enfocan en identificar vulnerabilidades que puedan comprometer la integridad de los datos o permitir accesos no autorizados. Incluyen la verificación de mecanismos de autenticación, autorización y protección frente a ataques como inyección SQL o manipulación de datos.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-17.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas de interoperabilidad
            p.mb-0 Comprueban que la API pueda comunicarse correctamente con distintos sistemas, plataformas, lenguajes de programación y formatos de datos, garantizando su compatibilidad en diversos entornos tecnológicos.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-18.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas de contrato 
            p.mb-0 Validan que la comunicación entre diferentes servicios o microservicios cumpla con los acuerdos establecidos en la especificación de la API, evitando problemas de integración entre sistemas.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-19.png', alt='')
        .row.py-5.px-4(titulo="")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pruebas de extremo a extremo
            p.mb-0 Evalúan el funcionamiento completo del sistema, simulando escenarios reales en los que la API interactúa con bases de datos, servicios externos y aplicaciones cliente.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-20.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Para facilitar la comprensión de estos enfoques, en la siguiente tabla se presentan algunos de los tipos de pruebas más relevantes en el desarrollo de APIs.

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 14.
          span Tipos de pruebas relevantes en el desarrollo de APIs
        .tabla-a.color-acento-contenido
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFF7DF;") Tipo de prueba
                th(style="width: 50%; background-color: #FFF7DF;") Finalidad principal
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Funcional
                td(style="background-color: #F0F8FF;") Verificar que los #[i endpoints] respondan de acuerdo con la especificación.
              tr(data-aos="fade-right")
                td.text-center Seguridad
                td Detectar vulnerabilidades en autenticación, autorización y manejo de datos.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Rendimiento
                td(style="background-color: #F0F8FF;") Evaluar la velocidad y capacidad de respuesta del servicio.
              tr(data-aos="fade-right")
                td.text-center Carga / estrés
                td Medir el comportamiento bajo diferentes niveles de tráfico.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Integración
                td(style="background-color: #F0F8FF;") Validar la interacción entre servicios y sistemas externos.
              tr(data-aos="fade-right")
                td.text-center Regresión
                td Confirmar que cambios recientes no afectaron funcionalidades existentes.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Extremo a extremo
                td(style="background-color: #F0F8FF;") Evaluar el flujo completo de funcionamiento del sistema.

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img-21.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") En la práctica, las pruebas pueden realizarse de forma manual o automatizada. Las pruebas manuales son útiles en etapas iniciales o para explorar el comportamiento de la API, mientras que las pruebas automatizadas permiten ejecutar validaciones repetitivas de forma rápida y confiable, especialmente en entornos de integración continua.
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        p La aplicación sistemática de estas pruebas contribuye a garantizar APIs más estables, seguras y confiables dentro de los sistemas de información modernos. 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
