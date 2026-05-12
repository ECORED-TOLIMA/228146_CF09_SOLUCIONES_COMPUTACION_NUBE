<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Desarrollo de APIs y configuración del entorno

    p.mb-4 El desarrollo de APIs constituye uno de los ejes centrales en la construcción de soluciones basadas en la nube y en arquitecturas modernas de #[i software]. Una API bien diseñada permite conectar aplicaciones, exponer funcionalidades del sistema, sincronizar datos y automatizar procesos entre diferentes plataformas internas y externas. Por esta razón, su implementación requiere un entorno de desarrollo adecuado, herramientas especializadas y buenas prácticas desde las primeras etapas del diseño.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Una API, o interfaz de programación de aplicaciones, es un conjunto de reglas, protocolos y definiciones que permite que diferentes aplicaciones de #[i software] se comuniquen entre sí e intercambien información. Actúa como un intermediario que facilita el acceso a determinadas funcionalidades o recursos de un sistema sin que las aplicaciones que la utilizan necesiten conocer los detalles internos de su implementación.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        p De esta manera, las APIs establecen cómo deben realizarse las solicitudes de información, qué parámetros se deben enviar y qué tipo de respuesta se puede recibir, garantizando una comunicación estructurada y segura entre los distintos componentes de una aplicación o entre sistemas desarrollados por diferentes organizaciones.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1. Preparación del entorno de desarrollo

    p.mb-4 La preparación del entorno de desarrollo es un paso fundamental antes de iniciar la construcción de una API. Un entorno correctamente configurado permite organizar el código, facilitar las pruebas, gestionar dependencias y asegurar que la aplicación funcione de manera adecuada durante todo el proceso de desarrollo.

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img-02.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") En el contexto del desarrollo de APIs, el entorno de trabajo incluye herramientas para la escritura de código, ejecución del lenguaje de programación, gestión de bases de datos, control de versiones y pruebas de los servicios. Estas herramientas permiten a los desarrolladores crear, probar y documentar las interfaces de manera organizada y eficiente.
    
    p.mb-4 Entre los elementos más comunes que conforman un entorno de desarrollo para APIs se encuentran:

    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img-03.svg", alt="alt").img80.m-auto
          h4.text-center Entorno de desarrollo integrado (IDE)
          p Son aplicaciones que facilitan la escritura, depuración y organización del código. Entre los más utilizados se encuentran Visual Studio Code, Visual Studio o IntelliJ IDEA.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img-04.svg", alt="alt").img80.m-auto
          h4.text-center Lenguaje y entorno de ejecución
          p Dependiendo de la tecnología utilizada, es necesario instalar el entorno correspondiente, como Node.js para aplicaciones JavaScript, Python para desarrollo con frameworks como Flask o Django, o .NET para aplicaciones basadas en el ecosistema de Microsoft.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img-05.svg", alt="alt").img80.m-auto
          h4.text-center Gestión de bases de datos
          p Muchas APIs interactúan con sistemas de almacenamiento de información. Por ello, se suelen configurar bases de datos como MySQL, PostgreSQL o MongoDB, junto con herramientas de administración que facilitan su manejo.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img-06.svg", alt="alt").img80.m-auto
          h4.text-center Herramientas de pruebas de API
          p Aplicaciones como Postman o Insomnia permiten enviar solicitudes HTTP y analizar las respuestas del servidor, lo que facilita la verificación del funcionamiento de los servicios desarrollados.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img-07.svg", alt="alt").img80.m-auto
          h4.text-center Control de versiones
          p Sistemas como Git permiten registrar los cambios realizados en el código, facilitar el trabajo colaborativo entre desarrolladores y mantener un historial de modificaciones del proyecto.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img-08.svg", alt="alt").img80.m-auto
          h4.text-center Documentación de la API
          p Herramientas como Swagger u OpenAPI permiten describir la estructura de la API, los endpoints disponibles, los parámetros requeridos y los tipos de respuesta, facilitando su comprensión y uso por parte de otros desarrolladores.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        p Además, es recomendable separar los entornos de desarrollo, pruebas y producción, con el fin de evitar que los cambios realizados durante la programación afecten directamente a las aplicaciones en funcionamiento.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2. Requerimientos de #[i hardware] y #[i software] de IDE

    p.mb-4 El entorno de desarrollo integrado o Integrated Development Environment (IDE) constituye una herramienta fundamental para la programación y el desarrollo de aplicaciones. Estos entornos reúnen en una misma plataforma diversas funcionalidades como el editor de código, herramientas de depuración, compiladores, gestores de dependencias y utilidades de control de versiones, lo que facilita el proceso de desarrollo y mejora la productividad del programador.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 Para trabajar de manera eficiente con IDE modernos utilizados en el desarrollo de aplicaciones y APIs, es necesario contar con ciertos requerimientos de #[i hardware] y #[i software] que permitan ejecutar las herramientas de forma fluida, especialmente cuando se utilizan múltiples servicios, bases de datos, navegadores y herramientas de prueba de manera simultánea.

        p A continuación, se presentan los #[b requerimientos de hardware] recomendados. Estos componentes permiten trabajar con IDE modernos de forma fluida:

        .contenido-interno
          PasosA.color-primario.mb-5(tipo="n")
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
                h3 Memoria RAM
                p.mb-0 Se recomienda un mínimo de 8 GB para proyectos sencillos o desarrollo #[i web] básico. Para proyectos más complejos o cuando se utilizan múltiples herramientas simultáneamente, se recomienda contar con 16 GB o más.
              .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img-09.png', alt="")
            .row.justify-content-center
              .col-lg-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img-10.png', alt="")
              .col-lg-6(data-aos="fade-left")
                h3 Procesador (CPU)
                p.mb-0 Un procesador de gama media o superior permite ejecutar el IDE, compilar código y realizar tareas de depuración con mayor rapidez. Procesadores multinúcleo mejoran el rendimiento en procesos de compilación y ejecución.
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
                h3 Almacenamiento
                p.mb-0 Es recomendable utilizar unidades de estado sólido (SSD), ya que permiten una carga más rápida del sistema operativo, del IDE y de los proyectos de desarrollo. Un espacio de almacenamiento de al menos 256 GB suele ser suficiente para proyectos académicos o iniciales.
              .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img-11.png', alt="")
            .row.justify-content-center
              .col-lg-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img-12.png', alt="")
              .col-lg-6(data-aos="fade-left")
                h3 Pantalla y resolución
                p.mb-0 Una resolución de al menos 1920 × 1080 píxeles, facilita la visualización simultánea de múltiples ventanas de código, consolas y herramientas de depuración.

        .cajon.cajon.C07.p-4(style="border-radius: 50px")
          p.mb-0.text-center En relación con los #[b requerimientos de software], además del #[i hardware] es necesario disponer de un entorno adecuado que permita instalar y ejecutar las herramientas de desarrollo:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-13.svg', alt='')(style="width: 100%")
            h4.text-center Sistema operativo
            p.mb-0(data-aos="fade-down") Los IDE modernos funcionan generalmente en sistemas operativos como Windows, macOS o distribuciones Linux actualizadas.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-14.svg', alt='')(style="width: 100%")
            h4.text-center Entornos de ejecución y dependencias
            p.mb-0(data-aos="fade-down") Dependiendo del lenguaje utilizado, pueden requerirse componentes adicionales como el Java Development Kit (JDK), Node.js, Python o entornos de ejecución específicos del lenguaje.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-15.svg', alt='')(style="width: 100%")
            h4.text-center Gestores de dependencias
            p.mb-0(data-aos="fade-down") Herramientas como npm, Maven, Gradle o pip permiten instalar librerías y paquetes necesarios para el desarrollo de aplicaciones.
          .col-xl.col-lg-6.tarjeta.tarjeta--C10.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-16.svg', alt='')(style="width: 100%")
            h4.text-center Conexión a Internet
            p.mb-0(data-aos="fade-down") Es necesaria para descargar plugins, dependencias, actualizaciones del IDE y bibliotecas utilizadas en los proyectos.

    p.text-center A continuación, se presenta una comparación general de los requerimientos según el nivel de trabajo.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 6.
          span Comparativa de requerimientos según el nivel de uso
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFF7DF;") Componente
                th(style="width: 20%; background-color: #FFF7DF;") Nivel básico (aprendiz)
                th(style="width: 20%; background-color: #FFF7DF;") Nivel avanzado o profesional
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Memoria RAM.
                td(style="background-color: #F0F8FF;") 8 GB.
                td(style="background-color: #F0F8FF;") 16 GB o más.
              tr(data-aos="fade-right")
                td.text-center Procesador.
                td Gama media.
                td Gama media-alta o superior.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Almacenamiento.
                td(style="background-color: #F0F8FF;") 256 GB SSD.
                td(style="background-color: #F0F8FF;") 512 GB SSD o más.
              tr(data-aos="fade-right")
                td.text-center Gráficos.
                td Integrados.
                td Integrados o dedicados según el proyecto.
        
        p En conjunto, estos requerimientos permiten disponer de un entorno de desarrollo estable y eficiente para la construcción de aplicaciones y APIs. Contar con un equipo y un entorno de #[i software] adecuados facilita la ejecución de herramientas modernas, la gestión de dependencias y la integración con servicios en la nube, aspectos que resultan fundamentales en los procesos actuales de desarrollo de #[i software].

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3. Codificación de módulos y desarrollo de APIs
    
    p.mb-4 En el desarrollo de aplicaciones modernas, la codificación de módulos permite organizar el sistema en componentes independientes que cumplen funciones específicas. Esta modularidad facilita el mantenimiento del #[i software], mejora la reutilización del código y permite que distintos equipos trabajen de manera paralela sobre diferentes partes del sistema.

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12  
        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-c1(data-aos="fade-right")             
              .col-lg.p-4
                p En el contexto de las arquitecturas basadas en servicios, estos módulos suelen implementarse mediante APIs (Application Programming Interface). Una API es un conjunto de reglas que permite que diferentes aplicaciones se comuniquen entre sí y compartan información o funcionalidades sin necesidad de conocer el funcionamiento interno de cada sistema.
                p.mb-0 Existen diferentes estilos de diseño de APIs, siendo uno de los más utilizados el modelo REST (Representational State Transfer). Las APIs REST permiten que las aplicaciones intercambien información a través del protocolo HTTP, utilizando direcciones #[i web] (URL) para identificar los recursos y métodos estándar para realizar operaciones sobre ellos.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/img-17.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p El funcionamiento básico de una API REST sigue un modelo de comunicación cliente-servidor. Cuando una aplicación cliente requiere acceder a un recurso, envía una solicitud al servidor mediante la API, y este procesa la petición y devuelve una respuesta con la información solicitada o el resultado de la operación.
        p De manera general, el proceso de interacción con una API REST se desarrolla en las siguientes etapas:

    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0 El cliente envía una solicitud al servidor siguiendo el formato definido en la documentación de la API.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0 El servidor autentica al cliente y verifica que tenga permisos para realizar la operación.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0 El servidor procesa la solicitud internamente mediante la lógica de negocio implementada en los módulos del sistema.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-adicional-3.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0 Finalmente, el servidor devuelve una respuesta que indica si la operación se realizó correctamente y, cuando corresponde, incluye los datos solicitados.
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p.mb-0.text-center Esta estructura permite construir aplicaciones escalables, ya que los diferentes módulos pueden evolucionar de forma independiente y comunicarse mediante interfaces claramente definidas.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C08.p-4.mb-4
          p.text-white Para comprender el funcionamiento de una API REST, se puede considerar el caso de un sistema de gestión de productos en una tienda en línea. En este sistema, cada producto representa un recurso accesible mediante una URL. Por ejemplo:
          p.text-white.mb-0 
            span(style="color:#FFD453 !important") GET /
            |  productos permite consultar la lista de productos disponibles. 
          p.text-white.mb-0 
            span(style="color:#FFD453 !important") GET /
            |  productos/25 permite consultar la información de un producto específico. 
          p.text-white.mb-0 
            span(style="color:#FFD453 !important") POST / 
            |  productos permite registrar un nuevo producto en el sistema. 
          p.text-white.mb-0 
            span(style="color:#FFD453 !important") PUT /
            |  productos/25 permite actualizar la información de un producto existente. 
          p.text-white.mb-0
            span(style="color:#FFD453 !important") DELETE /
            |  productos/25 permite eliminar un producto del sistema.

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img-02.svg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Este tipo de estructura facilita la integración entre aplicaciones y permite que diferentes clientes, como aplicaciones #[i web] o móviles, interactúen con el mismo servicio de manera estandarizada.

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4. Solicitudes, respuestas y autenticación en APIs REST

    p En las APIs REST, la comunicación entre aplicaciones se realiza mediante solicitudes enviadas por un cliente y respuestas generadas por un servidor. Este modelo permite que diferentes sistemas intercambien información de forma estandarizada utilizando el protocolo HTTP.
    p.mb-4 Cuando una aplicación cliente necesita acceder a un recurso o ejecutar una operación, envía una solicitud a la API. El servidor procesa dicha solicitud y devuelve una respuesta que indica si la operación se realizó correctamente y, en caso necesario, incluye los datos solicitados.

    .row.justify-content-center.mb-4
      .col.col-12.col-lg-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-2 Elementos de una solicitud en una API REST

    p.mb-4 Las solicitudes enviadas por el cliente al servidor suelen incluir varios componentes que permiten identificar el recurso solicitado y la operación que se desea realizar.

    .row.justify-content-center.mb-4
      .col.col-lg-9.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="a) Identificador del recurso (URL) ")
            .col-12.mb-0.mb-md-0
              p Cada recurso disponible en la API se identifica mediante una dirección única denominada URL. Esta dirección indica al servidor qué recurso desea consultar o manipular el cliente. Por ejemplo, en una API de productos, la dirección /productos puede utilizarse para consultar la lista de productos disponibles.
          .row(titulo="b) Método HTTP")
            .col-12.mb-0.mb-md-0
              p Indica la acción que el cliente desea realizar sobre el recurso. Los métodos más utilizados permiten consultar, crear, actualizar o eliminar información dentro del sistema.
              .titulo-sexto.color-acento-contenido
                h5 Tabla 10.
                span Métodos HTTP comunes en APIs REST
              .tabla-a.color-acento-contenido.mb-4
                table
                  thead
                    tr
                      th(style="width: 33%; background-color: #FFF7DF;") Método HTTP
                      th(style="width: 33%; background-color: #FFF7DF;") Uso típico
                      th(style="width: 33%; background-color: #FFF7DF;") Observación
                  tbody
                    tr
                      td.text-center(style="background-color: #F0F8FF;") GET
                      td(style="background-color: #F0F8FF;") Consultar recursos.
                      td(style="background-color: #F0F8FF;") No debe modificar el estado del servidor.
                    tr
                      td.text-center(style="background-color: #FFFF;") POST
                      td(style="background-color: #FFFF;") Crear recursos.
                      td(style="background-color: #FFFF;") Suele generar nuevos registros.
                    tr
                      td.text-center(style="background-color: #F0F8FF;") PUT
                      td(style="background-color: #F0F8FF;") Actualizar un recurso completo.
                      td(style="background-color: #F0F8FF;") Es idempotente cuando se usa correctamente.
                    tr
                      td.text-center(style="background-color: #FFFF;") DELETE
                      td(style="background-color: #FFFF;") Eliminar recursos.
                      td(style="background-color: #FFFF;") Debe validarse mediante autenticación.
          .row(titulo="c) Encabezados de la solicitud")
            .col-12.mb-0.mb-md-0
              p Contienen metadatos que describen la solicitud. Estos pueden indicar, por ejemplo, el formato de los datos enviados, el tipo de respuesta esperado o información relacionada con la autenticación del cliente.
          .row(titulo="d) Datos o cuerpo de la solicitud")
            .col-12.mb-0.mb-md-0
              p Algunos métodos, como POST o PUT, permiten enviar información adicional al servidor dentro del cuerpo de la solicitud. Estos datos suelen representarse en formatos estructurados como JSON o XML, lo que facilita su procesamiento por parte de las aplicaciones.
          .row(titulo="e) Parámetros")
            .col-12.mb-0.mb-md-0
              p Las solicitudes también pueden incluir parámetros que permiten especificar detalles adicionales sobre la operación que se desea realizar. Entre los más comunes se encuentran:
              .cajon.cajon.C09.p-4
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Parámetros de ruta, que forman parte de la URL y permiten identificar recursos específicos.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Parámetros de consulta, que agregan información adicional a la solicitud, como filtros o criterios de búsqueda.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Parámetros de cookie, utilizados en algunos casos para mantener información de sesión.

      .col.col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img-19.png', alt='')

    .row.justify-content-center.mb-4
      .col.col-12.col-lg-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-2 Elementos de la respuesta del servidor
    
    p.mb-4 Una vez que el servidor procesa la solicitud del cliente, envía una respuesta que indica el resultado de la operación. Esta respuesta suele incluir los siguientes componentes:

    TabsA.color-acento-botones.mb-4(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="a) Línea de estado")
        p Contiene un código de tres dígitos que informa si la solicitud se procesó correctamente o si ocurrió algún error durante la operación. Algunos códigos de estado comunes son:
        .cajon.cajon.C09.p-4
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 #[b 200:] la solicitud se procesó correctamente.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 #[b 201:] el recurso fue creado exitosamente.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 #[b 400:] la solicitud es incorrecta o contiene errores.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 #[b 404:] el recurso solicitado no fue encontrado.
      .tarjeta.color-acento-botones--borde.p-4(titulo="b) Cuerpo del mensaje")
        p El cuerpo de la respuesta contiene la representación del recurso solicitado o el resultado de la operación. Esta información suele enviarse en formatos estructurados como JSON o XML.
      .tarjeta.color-acento-botones--borde.p-4(titulo="c) Encabezados de la respuesta")
        p Los encabezados proporcionan información adicional sobre la respuesta, como el tipo de contenido, la fecha de la respuesta, el servidor que procesó la solicitud o las políticas de seguridad aplicadas.
    
    .row.BG03.justify-content-center.px-3(data-aos="flip-up")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-2 Elementos de la respuesta del servidor
    
        p.mb-4 Para proteger la información y garantizar que solo los usuarios autorizados puedan acceder a los recursos, las APIs REST utilizan diferentes mecanismos de autenticación.

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 11.
            span Formas comunes de autenticación para servicios REST
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 20%; background-color: #FFF7DF;") Método de autenticación
                  th(style="width: 50%; background-color: #FFF7DF;") Descripción
              tbody
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F0F8FF;") Básica
                  td(style="background-color: #F0F8FF;") Envía usuario y contraseña codificados en el encabezado de la solicitud.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") Bearer #[i Token]
                  td(style="background-color: #FFFF;") Utiliza un token generado por el servidor para autorizar el acceso.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F0F8FF;") API Key
                  td(style="background-color: #F0F8FF;") Asigna una clave única al cliente para validar el acceso a los recursos.
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #FFFF;") OAuth
                  td(style="background-color: #FFFF;") Sistema de autenticación y autorización más robusto basado en #[i tokens].

      .row.justify-content-center
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema4/img-20.svg', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          p La implementación adecuada de estos mecanismos de autenticación permite proteger los servicios, controlar el acceso a los recursos y garantizar la integridad de la información intercambiada entre las aplicaciones.
          p.mb-0 En entornos de desarrollo #[i cloud], es recomendable complementar la codificación de APIs con prácticas como documentación técnica, pruebas automatizadas, control de versiones y monitoreo del servicio. Estas estrategias contribuyen a mejorar la mantenibilidad, la seguridad y la escalabilidad de las aplicaciones basadas en servicios.

    Separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.5. Migraciones y sincronización de bases de datos

    p.mb-4 En el desarrollo de aplicaciones, especialmente en entornos #[i cloud] o arquitecturas basadas en servicios, es común que la estructura de las bases de datos evolucione con el tiempo. A medida que el #[i software] crece, se agregan nuevas tablas, se modifican campos o se reorganizan los datos para mejorar el rendimiento y la escalabilidad.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Para gestionar estos cambios de forma segura se utilizan migraciones y procesos de sincronización, los cuales permiten actualizar la estructura de la base de datos y mantener la coherencia de la información entre distintos sistemas o entornos.
        br
        br
        p.mb-0 Las migraciones de bases de datos consisten en un conjunto de instrucciones o #[i scripts] que permiten crear, modificar o eliminar estructuras de datos de forma controlada. Estas migraciones suelen almacenarse como archivos versionados que pueden aplicarse o revertirse cuando sea necesario, lo que facilita el mantenimiento y la evolución del sistema.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Por su parte, la sincronización de datos permite mantener consistentes diferentes bases de datos o servicios que comparten información. Este proceso es especialmente importante cuando existen múltiples aplicaciones conectadas o cuando se realizan procesos de migración hacia infraestructuras en la nube.
        p.mb-0 Entre los enfoques más utilizados para gestionar migraciones y sincronización de datos se encuentran los siguientes:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-22.svg', alt='')(style="width: 100%")
            h4.text-center Migraciones estructurales
            p.mb-0(data-aos="fade-down") Permiten definir cambios en el esquema de la base de datos, como la creación de tablas, la modificación de columnas o la eliminación de estructuras obsoletas. Estas migraciones se gestionan mediante archivos versionados que pueden aplicarse de forma secuencial.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-23.svg', alt='')(style="width: 100%")
            h4.text-center Migración de datos (ETL)
            p.mb-0(data-aos="fade-down") Consiste en el proceso de extraer, transformar y cargar datos entre diferentes sistemas o motores de base de datos. Este enfoque se utiliza cuando es necesario trasladar información desde una plataforma a otra.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-24.svg', alt='')(style="width: 100%")
            h4.text-center Captura de datos modificados (CDC)
            p.mb-0(data-aos="fade-down") Es una técnica que permite identificar y replicar los cambios realizados en una base de datos en tiempo casi real. Esto facilita mantener sistemas sincronizados sin necesidad de detener las operaciones del sistema principal.
          .col-xl.col-lg-6.tarjeta.tarjeta--C10.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img-25.svg', alt='')(style="width: 100%")
            h4.text-center Sincronización mediante APIs
            p.mb-0(data-aos="fade-down") En arquitecturas basadas en servicios, las APIs permiten intercambiar información entre diferentes aplicaciones o plataformas externas, garantizando que los datos se mantengan actualizados en todos los sistemas conectados.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 12.
          span Enfoques frecuentes de migración y sincronización de datos
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFF7DF;") Enfoque
                th(style="width: 50%; background-color: #FFF7DF;") Finalidad
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Migración estructural
                td(style="background-color: #F0F8FF;") Aplicar cambios controlados en el esquema de la base de datos.
              tr(data-aos="fade-right")
                td.text-center ETL
                td Extraer, transformar y cargar datos entre sistemas o motores de base de datos.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") CDC
                td(style="background-color: #F0F8FF;") Replicar cambios en tiempo casi real para mantener la consistencia de la información.
              tr(data-aos="fade-right")
                td.text-center Sincronización por APIs
                td Intercambiar datos entre aplicaciones o plataformas externas.

        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 La correcta planificación de estos procesos permite evitar pérdida de información, garantizar la integridad de los datos y asegurar la continuidad operativa del sistema. Por esta razón, las migraciones suelen realizarse siguiendo buenas prácticas como la creación de copias de seguridad, la ejecución controlada de #[i scripts] y la validación posterior de los datos migrados.

    Separador

    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.6. ORM (Object Relational Mapping)

    p.mb-4 El mapeo objeto-relacional, conocido como #[b ORM (Object Relational Mapping)], es una técnica de programación que permite conectar el modelo orientado a objetos de una aplicación con la estructura tabular de una base de datos relacional. Su propósito es facilitar la interacción con los datos utilizando objetos del lenguaje de programación en lugar de escribir consultas SQL de forma manual.

    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4
          .row.justify-content-center
            .col.col-lg-11.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") En el desarrollo de aplicaciones modernas, el código suele organizarse mediante clases, objetos y métodos, mientras que las bases de datos relacionales almacenan la información en tablas, filas y columnas. El ORM actúa como una capa de traducción entre estos dos modelos, permitiendo que los desarrolladores manipulen datos mediante objetos y que el sistema genere automáticamente las consultas SQL necesarias.
            .col.col-lg-1.col-5.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema4/img-26.svg', alt='Imagen decorativa')

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        p Gracias a esta técnica, una clase del programa puede representar una tabla de la base de datos, mientras que los atributos de la clase se relacionan con las columnas de dicha tabla. De esta manera, cada instancia del objeto representa un registro dentro de la base de datos.
        p #[b El funcionamiento de un ORM] se basa en el mapeo entre las estructuras del código y las estructuras de la base de datos. Cuando una aplicación realiza una operación sobre un objeto, el ORM traduce automáticamente esa acción en una consulta SQL equivalente.
        p Entre las principales funciones que realiza un ORM se encuentran:

    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema4/img-27.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 #[b Mapeo entre clases y tablas:] permite que las clases del código representen tablas dentro de la base de datos, estableciendo correspondencia entre atributos y columnas.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema4/img-28.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 #[b Automatización de operaciones CRUD:] las operaciones de crear, leer, actualizar y eliminar registros pueden realizarse mediante métodos del lenguaje de programación, sin necesidad de escribir consultas SQL manuales.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema4/img-29.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 #[b Gestión de relaciones entre entidades:] permite representar relaciones entre tablas, como uno a uno, uno a muchos o muchos a muchos, directamente a través de objetos y colecciones dentro del código.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema4/img-30.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 #[b Gestión de la persistencia de datos:] controla el almacenamiento, actualización y recuperación de la información desde la base de datos, manteniendo sincronizados los objetos del sistema con los registros persistentes.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Gracias a estas capacidades, el ORM permite que el desarrollador se concentre en la lógica del negocio de la aplicación sin preocuparse constantemente por los detalles de las consultas SQL.

        .cajon.cajon.C02.p-4.mb-4
          p En este contexto, existen #[b herramientas de ORM] disponibles para distintos lenguajes de programación. Estas herramientas se implementan mediante diversas librerías diseñadas para integrarse con los principales entornos de desarrollo y facilitar la interacción entre el código de la aplicación y la base de datos. Algunos ejemplos son:
          .row.justify-content-center
            .col.col-lg-6.col-12.order-lg-2.order-2
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta
                  p.mb-0 #[b Python:] SQLAlchemy y Django ORM.
                li
                  i.lista-ul__vineta
                  p.mb-0 #[b Java:] Hibernate y JPA.
                li
                  i.lista-ul__vineta
                  p.mb-0 #[b C# / .NET:] Entity Framework Core y Dapper.
                li
                  i.lista-ul__vineta
                  p.mb-0 #[b JavaScript (Node.js):] Sequelize, Prisma y TypeORM.
                li
                  i.lista-ul__vineta
                  p.mb-0 #[b PHP:] Eloquent (Laravel) y Doctrine.

            .col.col-lg-6.col-5.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema4/img-31.png', alt='Imagen decorativa')

        p Cada una de estas herramientas implementa el concepto de mapeo objeto-relacional con diferentes enfoques, pero todas comparten el objetivo de simplificar la interacción entre aplicaciones y bases de datos.

        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 13.
          span Ventajas y consideraciones del uso de ORM
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFF7DF;") Característica
                th(style="width: 50%; background-color: #FFF7DF;") Descripción
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Productividad.
                td(style="background-color: #F0F8FF;") Reduce la cantidad de código repetitivo necesario para interactuar con la base de datos.
              tr(data-aos="fade-right")
                td.text-center Seguridad.
                td Disminuye el riesgo de ataques de inyección SQL mediante consultas parametrizadas.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Portabilidad.
                td(style="background-color: #F0F8FF;") Facilita el cambio de motor de base de datos con ajustes mínimos en el código.
              tr(data-aos="fade-right")
                td.text-center Rendimiento.
                td En consultas muy complejas puede resultar menos eficiente que escribir SQL optimizado manualmente.

      .row.justify-content-center
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema4/img-32.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") El uso adecuado de ORM mejora la productividad en el desarrollo de #[i software], especialmente en aplicaciones con arquitecturas por capas, APIs y sistemas que manejan grandes volúmenes de datos. Sin embargo, es importante que los desarrolladores comprendan el funcionamiento de la base de datos subyacente, ya que una mala configuración del ORM puede generar consultas ineficientes o problemas de rendimiento.

</template>

<script>
export default {
  name: 'Tema4',
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
