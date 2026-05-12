<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos de programación para el desarrollo #[i web]
    
    p.mb-4 Los fundamentos de programación para el desarrollo #[i web] permiten comprender cómo se diseñan y construyen aplicaciones que funcionan en entornos digitales y en Internet. A través de los lenguajes de programación, los desarrolladores pueden crear instrucciones que indican a los sistemas informáticos cómo procesar datos, responder a las solicitudes de los usuarios y generar contenidos dinámicos dentro de los sitios y aplicaciones #[i web].

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En el desarrollo #[i web], la programación cumple un papel fundamental, ya que permite implementar la lógica que controla el comportamiento de las aplicaciones, gestionar la información que circula entre el cliente y el servidor, y automatizar procesos dentro de los sistemas digitales. Para lograrlo, se utilizan diferentes lenguajes y herramientas que facilitan la construcción de aplicaciones escalables, interactivas y conectadas a servicios en línea.

    p En este contexto, resulta necesario comprender algunos conceptos esenciales de la programación, como los lenguajes utilizados en el desarrollo #[i web], los tipos de datos y las estructuras de programación, las estructuras de control que permiten tomar decisiones o repetir procesos, y los principios de la programación orientada a objetos. Estos fundamentos constituyen la base para el diseño y desarrollo de aplicaciones #[i web] modernas y servicios que operan en entornos distribuidos y en la nube.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1. Lenguajes de programación utilizados en el desarrollo #[i web]

    p.mb-4 El desarrollo #[i web] combina diferentes tecnologías que permiten estructurar la información, diseñar la interfaz de usuario, implementar la lógica de interacción y procesar datos en el servidor. Estas tecnologías trabajan de forma integrada para construir aplicaciones #[i web] dinámicas capaces de responder a las solicitudes de los usuarios y gestionar información en tiempo real.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p Un lenguaje de programación es un sistema de instrucciones que permite a los desarrolladores comunicar al computador las operaciones que debe ejecutar. A través de estos lenguajes es posible crear #[i software], automatizar procesos, procesar datos y desarrollar aplicaciones que operan en entornos digitales y en Internet.
          p.mb-0 En el contexto del desarrollo #[i web], los lenguajes se utilizan para distintas funciones, como estructurar el contenido de una página, definir su apariencia visual, implementar interactividad o procesar información en servidores que gestionan bases de datos y servicios en línea.
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-02.svg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p(data-aos="fade-down") Entre las principales razones para utilizar lenguajes de programación se encuentran:
        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Permitir la creación de aplicaciones y sistemas informáticos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Automatizar tareas y procesos repetitivos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Procesar y analizar grandes volúmenes de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Controlar dispositivos y servicios tecnológicos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Desarrollar soluciones innovadoras en entornos digitales.

    p.mb-4.text-center En el desarrollo #[i web] moderno, diferentes lenguajes cumplen roles específicos dentro de la arquitectura de las aplicaciones.

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row(titulo="a) HTML y CSS")
        .col-12.mb-0.mb-md-0
          p HTML (HyperText Markup Language) es el lenguaje estándar utilizado para estructurar el contenido de las páginas #[i web]. Los navegadores interpretan el código HTML y lo presentan visualmente al usuario.
          p Aunque HTML no se considera un lenguaje de programación en sentido estricto, es fundamental para el desarrollo #[i web], ya que define la estructura semántica de los elementos que conforman una página, como encabezados, párrafos, enlaces, imágenes y tablas.
          .row.justify-content-center
            .col-lg-10.col-12
              p Algunos ejemplos de etiquetas HTML son:
              .cajon.cajon.C08.p-4.mb-4
                ul.lista-ul.mb-0(style="color:#FFFF !important")
                  li.mb-0
                    i.lista-ul__vineta
                    p.text-white
                      span(style="color:#FFD453 !important") &lt;h1&gt; 
                      | a 
                      span(style="color:#FFD453 !important") &lt;h6&gt; 
                      | para encabezados.
                  li.mb-0
                    i.lista-ul__vineta
                    p.text-white 
                      span(style="color:#FFD453 !important") &lt;p&gt; 
                      | para párrafos.
                  li.mb-0
                    i.lista-ul__vineta
                    p.text-white
                      span(style="color:#FFD453 !important") &lt;a&gt; 
                      | para enlaces.
                  li.mb-0
                    i.lista-ul__vineta
                    p.text-white
                      span(style="color:#FFD453 !important") &lt;img&gt; 
                      | para imágenes.
                  li.mb-0
                    i.lista-ul__vineta
                    p.text-white.mb-0 
                      span(style="color:#FFD453 !important") &lt;table&gt; 
                      | para tablas.
              p Para complementar la estructura definida por HTML se utiliza CSS (Cascading Style Sheets), un lenguaje de estilo que permite definir la presentación visual de los elementos.
              p CSS permite controlar aspectos como:
              .row.justify-content-center.align-items-stretch.mb-4.g-0
                .col-lg-8.col-12.order-lg-2.order-2
                  .cajon.C09.px-4.py-3.h-100.w-100
                    ul.lista-ul.mb-0
                      li.mb-0
                        i.lista-ul__vineta
                        p Colores y fondos.
                      li.mb-0
                        i.lista-ul__vineta
                        p Tipografías y tamaños de letra.
                      li.mb-0
                        i.lista-ul__vineta
                        p Márgenes y espaciados.
                      li.mb-0
                        i.lista-ul__vineta
                        p Diseño de la página mediante modelos como #[i flexbox] o #[i grid].
                .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema2/img-03.svg', alt='Imagen decorativa')
              p.mb-0 La combinación de HTML para la estructura y CSS para la presentación constituye la base de la interfaz visual de cualquier sitio #[i web].

      .row(titulo="b) JavaScript")
        .col-12.mb-0.mb-md-0
          p Es uno de los lenguajes de programación más importantes del desarrollo #[i web] moderno. Su función principal es añadir interactividad y dinamismo a las páginas #[i web], permitiendo que respondan a las acciones del usuario. Con JavaScript es posible implementar funciones como:
          .row.justify-content-center
            .col-lg-10.col-12
              p Algunos ejemplos de etiquetas HTML son:
              .cajon.cajon.C09.p-4.mb-4
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p Validación de formularios.
                  li.mb-0
                    i.lista-ul__vineta
                    p Actualización dinámica de contenido.
                  li.mb-0
                    i.lista-ul__vineta
                    p Animaciones e interacciones.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Comunicación con servidores mediante APIs.
              p El ecosistema de JavaScript incluye diversas bibliotecas y #[i frameworks] que facilitan el desarrollo de aplicaciones #[i web] modernas. Entre los más conocidos se encuentran:
              .row.justify-content-center.mb-4
                .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0
                  .tarjeta-avatar
                    img(src='@/assets/curso/tema2/img-04.svg' alt='AvatarTop')
                    .tarjeta.tarjeta--C04(style= "width: 100%")
                      .p-4
                        p.text-center #[b jQuery,] biblioteca que simplifica la manipulación del DOM.

                .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0
                  .tarjeta-avatar
                    img(src='@/assets/curso/tema2/img-05.svg' alt='AvatarTop')
                    .tarjeta.tarjeta--C04(style= "width: 100%")
                      .p-4
                        p.text-center #[b React,] biblioteca basada en componentes para construir interfaces interactivas.

                .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0
                  .tarjeta-avatar
                    img(src='@/assets/curso/tema2/img-06.svg' alt='AvatarTop')
                    .tarjeta.tarjeta--C04(style= "width: 100%")
                      .p-4
                        p.text-center #[b Angular,] #[i framework] desarrollado por Google para crear aplicaciones #[i web] complejas.
              p.text-center.mb-0 Gracias a su versatilidad, JavaScript puede ejecutarse tanto en el navegador como en el servidor mediante tecnologías como Node.js.

      .row(titulo="c) Python")
        .col-12.mb-0.mb-md-0
          p Es un lenguaje de programación de propósito general ampliamente utilizado en desarrollo #[i web], ciencia de datos, automatización y desarrollo de #[i software].
          p Se caracteriza por su sintaxis clara y legible, lo que facilita la comprensión del código y el trabajo colaborativo entre desarrolladores. Entre los #[i frameworks] más utilizados para desarrollo #[i web] se encuentran:
          .row.justify-content-center
            .col-lg-10.col-12
              .row.justify-content-center.align-items-stretch.mb-4.g-0
                .col-lg-8.col-12.order-lg-2.order-2
                  .cajon.C09.px-4.py-3.h-100.w-100
                    ul.lista-ul.mb-0
                      li.mb-0
                        i.lista-ul__vineta
                        p #[b Django,] #[i framework] completo que facilita el desarrollo rápido de aplicaciones #[i web].
                      li.mb-0
                        i.lista-ul__vineta
                        p #[b Flask,] micro#[i framework] ligero y flexible.
                      li.mb-0
                        i.lista-ul__vineta
                        p #[b Pyramid,] #[i framework] adaptable a proyectos de distintos tamaños.
                .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema2/img-07.svg', alt='Imagen decorativa')
              p.text-center.mb-0 Python permite desarrollar aplicaciones #[i web] escalables y eficientes, por lo que es ampliamente utilizado en plataformas digitales y servicios en la nube.
      .row(titulo="d) PHP (Hypertext Preprocessor)")
        .col-12.mb-0.mb-md-0
          p Es un lenguaje de programación ampliamente utilizado para el desarrollo de aplicaciones #[i web] del lado del servidor.
          p Este lenguaje permite generar contenido dinámico en páginas #[i web], gestionar sesiones de usuario, procesar formularios e interactuar con bases de datos. Entre los #[i frameworks] más utilizados en PHP se encuentran:
          .row.justify-content-center
            .col-lg-10.col-12
              .row.justify-content-center.mb-4
                .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0
                  .tarjeta-avatar
                    img(src='@/assets/curso/tema2/img-08.svg' alt='AvatarTop')
                    .tarjeta.tarjeta--C04(style= "width: 100%")
                      .p-4
                        p.text-center #[b Laravel,] conocido por su elegancia y facilidad de uso.

                .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0
                  .tarjeta-avatar
                    img(src='@/assets/curso/tema2/img-09.svg' alt='AvatarTop')
                    .tarjeta.tarjeta--C04(style= "width: 100%")
                      .p-4
                        p.text-center #[b Symfony,] #[i framework] modular orientado a proyectos complejos.

                .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0
                  .tarjeta-avatar
                    img(src='@/assets/curso/tema2/img-10.svg' alt='AvatarTop')
                    .tarjeta.tarjeta--C04(style= "width: 100%")
                      .p-4
                        p.text-center #[b CodeIgniter,] #[i framework] ligero de alto rendimiento.
              p.text-center.mb-0 PHP es reconocido por su facilidad de aprendizaje, su amplia comunidad de desarrolladores y su compatibilidad con numerosos servidores #[i web].

      .row(titulo="e) Ruby")
        .col-12.mb-0.mb-md-0
          p Es un lenguaje de programación orientado a objetos que destaca por su simplicidad y productividad en el desarrollo de #[i software].
          p Su principal herramienta para desarrollo #[i web] es #[b Ruby on Rails], un #[i framework] que facilita la creación rápida de aplicaciones mediante el patrón de arquitectura #[b Modelo-Vista-Controlador (MVC)].
          p Ruby se caracteriza por:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-4.col-8.mb-4.mb-lg-0
              .bloque-texto-gg.tarjeta--fondo7
                .bloque-texto-gg__texto.p-4
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p Sintaxis clara y elegante.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema2/img-11.svg')})`}"
                )           
            .col-lg-4.col-8.mb-4.mb-lg-0
              .bloque-texto-gg.tarjeta--fondo7
                .bloque-texto-gg__texto.p-4
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p Desarrollo rápido de aplicaciones.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema2/img-12.svg')})`}"
                )           
            .col-lg-4.col-8
              .bloque-texto-gg.tarjeta--fondo7
                .bloque-texto-gg__texto.p-4
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p Fuerte comunidad de desarrolladores.
                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/tema2/img-13.svg')})`}"
                )  

      .row(titulo="f) Java")
        .col-12.mb-0.mb-md-0
          p Es un lenguaje de programación robusto y altamente escalable utilizado en aplicaciones empresariales y sistemas de gran tamaño.
          p En el desarrollo #[i web] se emplea principalmente para construir aplicaciones #[i backend] que requieren alta estabilidad y capacidad de procesamiento. Entre sus #[i frameworks] más utilizados se encuentran:
          .row.justify-content-center
            .col-lg-10.col-12
              .row.justify-content-center.align-items-stretch.mb-4.g-0
                .col-lg-8.col-12.order-lg-2.order-2
                  .cajon.C09.px-4.py-3.h-100.w-100
                    ul.lista-ul.mb-0
                      li.mb-0
                        i.lista-ul__vineta
                        p #[b Spring Framework,] ampliamente utilizado en aplicaciones empresariales.
                      li.mb-0
                        i.lista-ul__vineta
                        p #[b JavaServer Faces (JSF),] #[i framework] para el desarrollo de interfaces #[i web] basadas en componentes.
                .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema2/img-14.svg', alt='Imagen decorativa')
              p.text-center.mb-0 Java destaca por su portabilidad, seguridad y capacidad para manejar aplicaciones de gran escala.

    p.mb-4 La diversidad de lenguajes y tecnologías utilizadas en el desarrollo #[i web] responde a los diferentes roles que cada uno cumple dentro de una aplicación. Mientras algunos se orientan a la estructura y presentación de la interfaz, otros se enfocan en la lógica de interacción o en el procesamiento de datos en el servidor. A continuación, se presenta un panorama general de algunas tecnologías ampliamente utilizadas en el desarrollo #[i web] y sus principales funciones.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Panorama general de tecnologías frecuentes en desarrollo #[i web]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 5%; background-color: #FFF7DF;") Tecnología
                th(style="width: 20%; background-color: #FFF7DF;") Rol principal
                th(style="width: 20%; background-color: #FFF7DF;") Ejemplos o #[i frameworks] asociados
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") HTML/CSS
                td(style="background-color: #F0F8FF;") Estructura y presentación de la interfaz.
                td(style="background-color: #F0F8FF;") HTML5, CSS3, #[i Flexbox] y #[i Grid]
              tr(data-aos="fade-right")
                td.text-center JavaScript
                td Interactividad en cliente y servidor.
                td React, Angular y Node.js
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Python
                td(style="background-color: #F0F8FF;") #[i Backend] y automatización.
                td(style="background-color: #F0F8FF;") Django, Flask y Pyramid
              tr(data-aos="fade-right")
                td.text-center PHP
                td #[i Backend] #[i web] y generación dinámica.
                td Laravel, Symfony y CodeIgniter
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Ruby
                td.text-center(style="background-color: #F0F8FF;") Desarrollo #[i web] orientado a productividad.
                td.text-center(style="background-color: #F0F8FF;") Ruby on Rails y Sinatra
              tr(data-aos="fade-right")
                td.text-center Java
                td Aplicaciones empresariales y #[i backend] robusto.
                td Spring y JSF

        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 En el desarrollo #[i web] moderno, estos lenguajes se integran con infraestructuras de computación en la nube, contenedores, servicios administrados y plataformas de despliegue automatizado. Por esta razón, el lenguaje de programación representa solo una parte del ecosistema tecnológico, mientras que la arquitectura del sistema, la seguridad y las estrategias de despliegue también influyen en el funcionamiento y la escalabilidad de las aplicaciones.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2. Tipos de datos y estructuras de programación

    p.mb-4 Toda aplicación informática necesita representar información y operar sobre ella. Para lograrlo, los lenguajes de programación utilizan tipos de datos, que definen la naturaleza de los valores que se almacenan, y estructuras de programación, que permiten organizar y manipular conjuntos de datos de manera eficiente.

    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.C05.px-4.py-3.h-100.w-100
          p Esta distinción es fundamental en el desarrollo de aplicaciones #[i web] y servicios digitales, ya que facilita el modelado de entidades, la organización de la información y la transmisión de datos entre sistemas mediante formatos como JSON o XML.
          p.mb-0 Los #[b tipos de datos] representan la forma en que se almacena y manipula la información dentro de un programa. Cada tipo establece qué clase de valores puede contener una variable y qué operaciones se pueden realizar sobre dichos valores.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-26.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span Tipos de datos de uso frecuente
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFF7DF;") Tipo de dato
                th(style="width: 20%; background-color: #FFF7DF;") Descripción
                th(style="width: 10%; background-color: #FFF7DF;") Ejemplo
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Numérico
                td(style="background-color: #F0F8FF;") Representa números enteros o decimales utilizados en operaciones matemáticas.
                td(style="background-color: #F0F8FF;") 10, 25.5
              tr(data-aos="fade-right")
                td.text-center Cadena de texto
                td Representa caracteres, palabras o frases.
                td "Hola mundo"
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Booleano
                td(style="background-color: #F0F8FF;") Representa valores lógicos utilizados en decisiones del programa.
                td(style="background-color: #F0F8FF;") Verdadero / Falso
              tr(data-aos="fade-right")
                td.text-center Fecha/Hora
                td Representa información temporal como fechas o momentos específicos.
                td 2026-04-08

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img-16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El uso adecuado de los tipos de datos permite organizar correctamente la información, evitar errores durante el procesamiento y realizar operaciones coherentes con la naturaleza de cada valor.
        br
        br
        p.mb-0(data-aos="fade-down") Las #[b estructuras de programación] son mecanismos que permiten organizar y gestionar múltiples datos dentro de un sistema. A través de estas estructuras es posible trabajar con conjuntos de información de forma más eficiente y representar entidades complejas dentro de una aplicación.

    p.mb-4.text-center En programación se pueden identificar diferentes tipos de estructuras según la forma en que almacenan la información.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 6.
          span Tipos de estructuras de datos
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFF7DF;") Tipo de estructura
                th(style="width: 20%; background-color: #FFF7DF;") Característica
                th(style="width: 10%; background-color: #FFF7DF;") Ejemplo conceptual
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Estructuras simples.
                td(style="background-color: #F0F8FF;") Almacenan un solo valor.
                td(style="background-color: #F0F8FF;") Un número o un texto
              tr(data-aos="fade-right")
                td.text-center Listas o arreglos.
                td Colección ordenada de elementos del mismo tipo.
                td [1, 2, 3, 4]
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Registros o estructuras clave-valor.
                td(style="background-color: #F0F8FF;") Permiten asociar valores a identificadores.
                td(style="background-color: #F0F8FF;") Nombre → "Juan"

        p Estas estructuras permiten organizar grandes volúmenes de información, facilitar la búsqueda y manipulación de datos y representar elementos del mundo real como usuarios, productos o transacciones.

        .cajon.C05.p-5
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/tema2/img-17.svg', width='70', alt='')
            .col-lg
              p #[b Ejemplo aplicado en un sistema empresarial]
              p En un sistema de inventario es posible observar cómo se combinan los tipos de datos y las estructuras para representar información:
            p Tipos de datos:
            .cajon.cajon.C09.p-4.mb-4
              ul.lista-ul--color.mb-0
                li
                  i.fas.fa-cloud-arrow-down
                  p.mb-0 Precio → numérico
                li
                  i.fas.fa-cloud-arrow-down
                  p.mb-0 Nombre del producto → cadena de texto
                li
                  i.fas.fa-cloud-arrow-down
                  p.mb-0 Disponible → booleano
            p Estructura de datos
            .cajon.cajon.C09.p-4.mb-4
              ul.lista-ul--color.mb-0
                li
                  i.fas.fa-cloud-arrow-down
                  p.mb-0 Producto = {nombre, precio, cantidad}
            p.mb-0 En este caso, la estructura #[b “Producto”] agrupa varios datos relacionados, lo que permite gestionar de forma organizada la información dentro del sistema.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3. Estructuras de selección y estructuras de repetición

    p.mb-4 En programación, las estructuras de control permiten definir el flujo de ejecución de un programa. Estas estructuras determinan el orden en que se ejecutan las instrucciones y permiten que el sistema tome decisiones o repita acciones según determinadas condiciones.

    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.C02.px-4.py-3.h-100.w-100
          p Existen dos tipos principales de estructuras de control utilizadas en la mayoría de lenguajes de programación: estructuras de selección, que permiten elegir entre diferentes caminos de ejecución, y estructuras de repetición, que permiten ejecutar un conjunto de instrucciones varias veces.
          p.mb-0 Las #[b estructuras de selección], también llamadas estructuras condicionales, permiten que el programa evalúe una condición y determine qué conjunto de instrucciones debe ejecutarse.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-18.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 7.
          span Estructuras de selección
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFF7DF;") Estructura
                th(style="width: 20%; background-color: #FFF7DF;") Descripción
                th(style="width: 10%; background-color: #FFF7DF;") Uso común
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") #[i if]
                td(style="background-color: #F0F8FF;") Ejecuta un bloque de instrucciones únicamente si la condición evaluada es verdadera.
                td(style="background-color: #F0F8FF;") Validaciones simples.
              tr(data-aos="fade-right")
                td.text-center #[i if – else]
                td Permite ejecutar un bloque cuando la condición es verdadera y otro cuando es falsa.
                td Toma de decisiones binarias.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") #[i switch / case]
                td(style="background-color: #F0F8FF;") Evalúa una variable y permite seleccionar entre múltiples opciones posibles.
                td(style="background-color: #F0F8FF;") Menús o múltiples condiciones.

    .row.BG01.justify-content-center.px-3(data-aos="flip-up")
      .col-lg-10.col-12
        p Estas estructuras son fundamentales para implementar lógica de decisión, validar datos de entrada, controlar accesos o determinar comportamientos dentro de una aplicación.
        p Las #[b estructuras de repetición], también conocidas como bucles o ciclos, permiten ejecutar un conjunto de instrucciones varias veces mientras se cumpla una condición o durante un número determinado de iteraciones.
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 8.
          span Estructuras de repetición
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFF7DF;") Estructura
                th(style="width: 20%; background-color: #FFF7DF;") Descripción
                th(style="width: 10%; background-color: #FFF7DF;") Uso común
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") #[i while]
                td(style="background-color: #F0F8FF;") Evalúa la condición antes de ejecutar el bloque de instrucciones. El ciclo continúa mientras la condición sea verdadera.
                td(style="background-color: #F0F8FF;") Procesos cuya repetición depende de una condición.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #FFFF;") #[i do – while]
                td(style="background-color: #FFFF;") Ejecuta el bloque de instrucciones al menos una vez y luego evalúa la condición.
                td(style="background-color: #FFFF;") Procesos que requieren ejecutarse mínimo una vez.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") #[i for]
                td(style="background-color: #F0F8FF;") Se utiliza cuando se conoce previamente el número de iteraciones. Incluye inicialización, condición y actualización.
                td(style="background-color: #F0F8FF;") Recorrer listas o arreglos.
      .col.col-lg-2.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-19.svg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p Estas estructuras permiten automatizar tareas repetitivas, recorrer colecciones de datos, procesar registros y ejecutar operaciones múltiples dentro de un programa.
        p En el desarrollo de aplicaciones #[i web], las estructuras de selección y repetición se utilizan para validar formularios, procesar datos enviados por los usuarios, recorrer listas de información y controlar el comportamiento dinámico de las aplicaciones.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4. Funciones, procedimientos, clases y objetos

    p.mb-4 En el desarrollo de #[i software] y aplicaciones #[i web], la organización del código es un aspecto fundamental para garantizar que los programas sean comprensibles, reutilizables y fáciles de mantener. Para lograrlo, los lenguajes de programación incorporan mecanismos que permiten dividir los programas en unidades lógicas de trabajo, como las funciones, los procedimientos y las estructuras propias de la programación orientada a objetos, como las clases y los objetos.

    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C07.px-4.py-4.h-100.w-100
          p.mb-0 Las funciones y los procedimientos permiten encapsular instrucciones que realizan tareas específicas dentro de un programa. Esta modularización facilita la reutilización del código, evita la repetición innecesaria de instrucciones y permite estructurar los programas de manera más clara.
      .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-20.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center
      .col-lg-10
        p Por su parte, la programación orientada a objetos introduce el uso de clases y objetos como una forma de representar entidades del mundo real dentro del #[i software]. Este enfoque permite organizar los programas a partir de modelos que integran datos y comportamientos, lo que favorece el desarrollo de aplicaciones más estructuradas, escalables y fáciles de mantener, especialmente en entornos de desarrollo #[i web] modernos.
        p.mb-0 Conceptos clave:

    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-21.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Funciones
              p.mb-0 Son bloques de código diseñados para realizar una tarea específica dentro de un programa y que devuelven un valor como resultado de su ejecución. Las funciones se utilizan con frecuencia en cálculos, procesamiento de datos o transformaciones de información.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-22.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Clases
              p.mb-0 Son estructuras que funcionan como plantillas o modelos para definir las características y comportamientos que tendrán determinados elementos dentro de un programa. En una clase se definen los atributos, que representan datos o propiedades, y los métodos, que representan acciones o comportamientos.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-23.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Procedimientos 
              p.mb-0 Son estructuras similares a las funciones, pero su propósito principal es ejecutar una serie de acciones sin devolver un valor como resultado. Se utilizan cuando se requiere realizar operaciones o procesos dentro del programa.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-24.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Objetos
              p.mb-0 Son instancias creadas a partir de una clase. Cada objeto representa una entidad concreta que posee valores propios en sus atributos y puede ejecutar los métodos definidos en su clase.

    p.mb-4 Las funciones y los procedimientos permiten estructurar el código en tareas específicas que pueden reutilizarse en diferentes partes del programa. Mientras las funciones devuelven un valor que puede utilizarse dentro de una expresión o cálculo, los procedimientos se emplean principalmente para ejecutar operaciones o acciones dentro del sistema.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img-25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el caso de la programación orientada a objetos, la clase define la estructura general de una entidad, mientras que el objeto representa una instancia específica creada a partir de esa estructura. Por ejemplo, una clase puede definir las características de un vehículo, mientras que un objeto representaría un vehículo particular con atributos como color, marca o modelo.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p El uso de funciones, procedimientos, clases y objetos contribuye a mejorar la organización del código, facilita el mantenimiento del #[i software] y promueve la reutilización de componentes en el desarrollo de aplicaciones #[i web].


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
