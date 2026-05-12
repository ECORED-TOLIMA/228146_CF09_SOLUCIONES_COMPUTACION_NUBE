<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Arquitectura orientada a servicios

    p.mb-4 Las soluciones tecnológicas actuales rara vez funcionan como sistemas aislados. En entornos empresariales y de computación en la nube es común que diferentes aplicaciones intercambien información y funcionalidades mediante servicios especializados. Este enfoque permite que sistemas desarrollados con distintas tecnologías puedan comunicarse y colaborar entre sí.

    .row.align-items-center.justify-content-center
      .col-lg-12  
        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-c1(data-aos="fade-right")             
              .col-lg.p-4
                p.mb-0 En este contexto surge la arquitectura orientada a servicios, un modelo que facilita la integración de aplicaciones mediante componentes reutilizables y autónomos que interactúan a través de redes y protocolos estandarizados. Comprender este enfoque permite interpretar cómo las aplicaciones modernas comparten datos, ejecutan procesos y construyen soluciones escalables y flexibles.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/img-01.png', alt='', class="w-100 h-100 object-fit-cover")
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1. Conceptos de arquitectura orientada a servicios

    p.mb-4 La arquitectura orientada a servicios constituye un enfoque de diseño de #[i software] que permite estructurar las aplicaciones como un conjunto de servicios independientes que interactúan entre sí a través de una red. Este modelo facilita la integración de sistemas desarrollados con diferentes tecnologías, permitiendo que intercambien información y funcionalidades de manera organizada y eficiente.

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-02.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") La Arquitectura Orientada a Servicios (SOA, por sus siglas en inglés Service-Oriented Architecture) organiza las funcionalidades de negocio en servicios autónomos, reutilizables y modulares. Cada servicio representa una capacidad específica del sistema, como consultar información, procesar datos o ejecutar una operación determinada, y puede ser utilizado por diferentes aplicaciones o plataformas.

    p.mb-4 Entre las principales características de la arquitectura orientada a servicios se destacan las siguientes:

    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/img-03.png", alt="")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-04.svg", alt="").img100.m-auto
                  h4.text-center Servicios independientes
                  p Cada servicio funciona de manera autónoma y puede ejecutarse sin depender directamente de otros componentes del sistema.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-05.svg", alt="").img100.m-auto
                  h4.text-center Reutilización de funcionalidades
                  p Los servicios pueden ser utilizados por múltiples aplicaciones, evitando la duplicación de código y optimizando el desarrollo.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-06.svg", alt="").img100.m-auto
                  h4.text-center Interoperabilidad
                  p Permite que sistemas desarrollados en distintos lenguajes o plataformas tecnológicas puedan comunicarse entre sí.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-07.svg", alt="").img100.m-auto
                  h4.text-center Interfaces estandarizadas
                  p Los servicios se publican mediante interfaces que actúan como un contrato entre el proveedor del servicio y las aplicaciones que lo consumen.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-08.svg", alt="").img100.m-auto
                  h4.text-center Acoplamiento flexible
                  p Las aplicaciones pueden interactuar con los servicios sin conocer los detalles internos de su implementación.

    .row.justify-content-center
      .col-lg-10
        p.mb-4 En muchas implementaciones de SOA se emplea un bus de servicios empresariales (ESB), que funciona como un componente intermediario encargado de gestionar la comunicación entre los diferentes servicios. Este elemento facilita tareas como el enrutamiento de mensajes, la transformación de datos y la conexión entre aplicaciones dentro de una infraestructura tecnológica.
        .cajon.cajon.C07.p-4(style="border-radius: 50px")
          p.mb-0 Este enfoque permite construir sistemas más flexibles, escalables y fáciles de mantener. A partir de estos principios se desarrollan diferentes tecnologías y protocolos para implementar servicios #[i web], entre los cuales se destacan SOAP y REST.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2. Servicios #[i web] SOAP

    p.mb-4 SOAP (Simple Object Access Protocol) es un protocolo utilizado para el intercambio de información entre aplicaciones a través de la red. Su objetivo es permitir que diferentes sistemas informáticos se comuniquen entre sí, incluso si están desarrollados en lenguajes de programación o plataformas tecnológicas distintas. Este protocolo es ampliamente utilizado en entornos empresariales donde se requiere una comunicación estructurada, segura y confiable entre servicios.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 Los servicios #[i web] basados en SOAP utilizan #[b XML (Extensible Markup Language)] como formato estándar para estructurar los mensajes que se envían entre aplicaciones. Estos mensajes suelen transmitirse mediante protocolos de red como HTTP, lo que permite que los servicios se integren fácilmente con la infraestructura de Internet.
        p Un mensaje SOAP está compuesto por diferentes elementos que permiten organizar la información y definir cómo debe procesarse. Entre sus componentes principales se encuentran:

    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img-09.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Sobre (Envelope)
            h5.t2.mb-2 Sobre (Envelope)
            p.mb-0 Es el contenedor principal del mensaje SOAP. Define la estructura del documento y especifica cómo debe interpretarse el mensaje.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img-10.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Cabecera (Header)
            h5.t2.mb-2 Cabecera (Header)
            p.mb-0 Contiene información adicional de control, como aspectos relacionados con seguridad, autenticación o calidad del servicio.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img-11.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Cuerpo (Body)
            h5.t2.mb-2 Cuerpo (Body)
            p.mb-0 Incluye los datos o la solicitud que se envía al servicio, así como los parámetros necesarios para ejecutar una operación específica.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p En los servicios SOAP también se utilizan contratos formales de servicio, comúnmente descritos mediante #[b WSDL (Web Services Description Language)]. Este lenguaje permite definir la estructura del servicio, las operaciones disponibles, los parámetros requeridos y la forma en que las aplicaciones pueden interactuar con él.
        p Entre las características más importantes de los servicios #[i web] SOAP se destacan las siguientes:  
        .cajon.cajon.C02.p-4
          ul.lista-ul--color(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Mensajería estructurada basada en XML, que garantiza una comunicación clara entre aplicaciones.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Interoperabilidad entre diferentes plataformas y lenguajes de programación.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Uso de contratos formales de servicio, que describen de manera precisa cómo debe consumirse el servicio.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Alto nivel de estandarización, lo que facilita su adopción en entornos empresariales.
    
    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-12.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Debido a su estructura formal y a sus mecanismos de seguridad integrados, SOAP ha sido ampliamente utilizado en sistemas corporativos y en procesos de integración entre aplicaciones empresariales. Sin embargo, en aplicaciones #[i web] modernas también se utilizan otros enfoques de comunicación más ligeros, como los servicios basados en REST, que se abordarán en el siguiente apartado.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3. Servicios #[i web] REST

    p.mb-4 REST (Representational State Transfer o Transferencia de Estado Representacional) es un estilo arquitectónico utilizado para diseñar servicios #[i web] que permiten la comunicación entre aplicaciones a través de Internet. A diferencia de SOAP, que es un protocolo formal, REST se basa en un conjunto de principios que orientan la forma en que los sistemas intercambian información mediante el uso de recursos accesibles a través de la #[i web].

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En los servicios REST, cada recurso como un usuario, un producto o una orden se identifica mediante una URL, y las aplicaciones interactúan con estos recursos utilizando métodos estándar del protocolo HTTP, como GET, POST, PUT y DELETE. De esta manera, los servicios REST facilitan la creación de aplicaciones #[i web] flexibles, escalables y fáciles de integrar con distintos tipos de sistemas.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Una característica importante de REST es que las solicitudes realizadas al servidor son sin estado (#[i stateless]), lo que significa que cada petición contiene toda la información necesaria para ser procesada, sin depender de solicitudes anteriores. Esto permite que los sistemas sean más eficientes y escalables, especialmente en entornos de computación en la nube.
        p Los servicios #[i web] REST presentan varias características que favorecen su adopción en el desarrollo #[i web] moderno:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img-14.svg', alt='')(style="width: 100%")
            p.mb-0(data-aos="fade-down") Uso de estándares #[i web] ampliamente adoptados, como HTTP y URL.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img-15.svg', alt='')(style="width: 100%")
            p.mb-0(data-aos="fade-down") Comunicación sin estado, lo que mejora la escalabilidad de las aplicaciones.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img-16.svg', alt='')(style="width: 100%")
            p.mb-0(data-aos="fade-down") Intercambio de información mediante formatos ligeros, principalmente JSON, aunque también pueden utilizarse XML, HTML o texto plano.
          .col-xl.col-lg-6.tarjeta.tarjeta--C10.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img-17.svg', alt='')(style="width: 100%")
            p.mb-0(data-aos="fade-down") Facilidad de integración con aplicaciones #[i web], móviles y servicios en la nube.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        p Gracias a su simplicidad y flexibilidad, los servicios REST son ampliamente utilizados en el desarrollo de APIs (Interfaces de Programación de Aplicaciones) que permiten que diferentes sistemas compartan información y funcionalidades. Este enfoque es especialmente común en aplicaciones modernas, plataformas de servicios digitales, microservicios y entornos de computación en la nube.
        p.mb-0 En comparación con SOAP, los servicios REST suelen ser más ligeros y fáciles de implementar, lo que ha favorecido su adopción en aplicaciones #[i web] contemporáneas y en servicios que requieren alta escalabilidad y rendimiento.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4. Aplicaciones y almacenamiento de datos en arquitecturas de servicios

    p.mb-4 En las arquitecturas orientadas a servicios, las aplicaciones se diseñan como un conjunto de componentes independientes que se comunican entre sí mediante servicios o APIs. Este enfoque permite que cada servicio cumpla una función específica dentro del sistema, facilitando el desarrollo, la escalabilidad y el mantenimiento de las aplicaciones.

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col.col-lg-6.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") En este tipo de arquitectura, es común que cada servicio gestione sus propios datos o recursos de almacenamiento. De esta manera, se reduce la dependencia entre componentes y se permite que cada parte del sistema evolucione de forma independiente. Además, en muchos entornos actuales estas soluciones se implementan sobre infraestructuras en la nube, lo que proporciona mayor disponibilidad, flexibilidad y capacidad de crecimiento según las necesidades del sistema.
            .col.col-lg-5.col-8.col-md-5.order-lg-2.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema3/img-18v.svg', alt='Imagen decorativa')

        p Entre los componentes más utilizados en arquitecturas basadas en servicios se encuentran los siguientes:

    .cajon.cajon.C06.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        p La integración de estos componentes permite construir sistemas más flexibles, resilientes y preparados para entornos distribuidos, donde múltiples aplicaciones interactúan entre sí mediante servicios #[i web] o APIs.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Bases de datos como servicio (DBaaS)',
        texto:
          'Permiten utilizar bases de datos administradas en la nube sin necesidad de gestionar directamente la infraestructura. Facilitan tareas como copias de seguridad, escalado automático y mantenimiento del sistema de base de datos.',
        imagen: require('@/assets/curso/tema3/img-19.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Almacenamiento como servicio (STaaS)',
        texto:
          'Se utiliza para guardar grandes volúmenes de información no estructurada, como archivos, imágenes, videos o copias de seguridad. Este tipo de almacenamiento ofrece alta disponibilidad y acceso desde diferentes aplicaciones o servicios.',
        imagen: require('@/assets/curso/tema3/img-20.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Plataformas de análisis de datos',
        texto:
          'Herramientas como data warehouse o data lakes permiten concentrar grandes cantidades de información para su análisis, generación de reportes e inteligencia de negocio.',
        imagen: require('@/assets/curso/tema3/img-21.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'API Gateway',
        texto:
          'Es un componente que actúa como punto de entrada para las solicitudes que realizan las aplicaciones cliente. Su función consiste en recibir las peticiones, dirigirlas al servicio correspondiente y gestionar aspectos como seguridad, autenticación o control del tráfico.',
        imagen: require('@/assets/curso/tema3/img-22.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
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
