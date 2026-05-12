<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de Internet y del desarrollo #[i web]

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-01.png', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p El desarrollo #[i web] y la construcción de Interfaces de Programación de Aplicaciones (API), se fundamentan en el funcionamiento de Internet como infraestructura global de comunicación. Comprender cómo se interconectan los dispositivos, cómo se transmiten los datos y qué tecnologías permiten acceder a los recursos digitales resulta esencial para diseñar aplicaciones y servicios que operen en entornos distribuidos.
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Internet permite que millones de dispositivos alrededor del mundo intercambien información de manera rápida y eficiente mediante protocolos de comunicación estandarizados. Sobre esta infraestructura se desarrollan aplicaciones #[i web], plataformas digitales, servicios en la nube y APIs que facilitan la integración entre sistemas.

    .BMG1.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          p El desarrollo de Internet es el resultado de múltiples investigaciones realizadas desde la década de 1960, orientadas a mejorar la comunicación entre computadores.
          p.mb-4 Entre los principales aportes históricos se destacan:
          LineaTiempoE.color-acento-contenido
            .row(titulo="1")
              .col-lg-2.col-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img-02.svg', alt='Texto que describa la imagen')
              .col-lg-9.mb-4.mb-lg-0
                h4 Leonard Kleinrock y Paul Baran 
                p A comienzos de los años sesenta, Kleinrock propuso dividir la información en pequeños paquetes de datos que pudieran transmitirse de manera independiente a través de una red. Este enfoque permitió mejorar la eficiencia en la transmisión de información. Por su parte, Paul Baran planteó el concepto de redes descentralizadas, en las cuales los datos pueden viajar por diferentes rutas hasta llegar a su destino.

            .row(titulo="2")
              .col-lg-2.col-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img-03.svg', alt='Texto que describa la imagen')
              .col-lg-9.mb-4.mb-lg-0
                h4 Lawrence Roberts
                p Basado en estos avances, Roberts diseñó en 1966 la primera red de conmutación de paquetes, que posteriormente se convertiría en ARPANET, considerada la red precursora de Internet. En 1969 se logró establecer la primera conexión entre dos computadoras ubicadas en distintas instituciones.

            .row(titulo="3")
              .col-lg-2.col-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img-04.svg', alt='Texto que describa la imagen')
              .col-lg-9.mb-4.mb-lg-0
                h4 Vinton Cerf y Bob Kahn 
                p En 1974 desarrollaron el protocolo TCP/IP, que permitió la comunicación entre diferentes redes y sistemas informáticos. Este protocolo se convirtió en el estándar que hizo posible la expansión global de Internet.

            .row(titulo="4")
              .col-lg-2.col-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img-05.svg', alt='Texto que describa la imagen')
              .col-lg-9.mb-4.mb-lg-0
                h4 Tim Berners-Lee
                p En 1989 propuso la creación de la World Wide #[i Web] (WWW) y desarrolló tecnologías fundamentales como HTML y HTTP, que permiten estructurar y transferir información a través de navegadores #[i web].

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C07.p-4(style="border-radius: 50px")
          p.mb-0 Gracias a estos avances, Internet evolucionó hasta convertirse en la infraestructura tecnológica que hoy soporta aplicaciones #[i web], servicios digitales, plataformas en la nube y el desarrollo de interfaces de programación de aplicaciones.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1. Conceptos de Internet

    p.mb-4 Internet es una red global de redes que permite la interconexión de millones de dispositivos alrededor del mundo para el intercambio de información y la prestación de diversos servicios digitales. Su funcionamiento se basa en infraestructuras tecnológicas, protocolos de comunicación y servicios que facilitan la transmisión de datos entre sistemas conectados.

    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.px-4.py-3.h-100.w-100
          p Esta red utiliza principalmente el conjunto de protocolos TCP/IP, que establece las reglas para la transmisión de datos entre dispositivos. Gracias a estos protocolos, la información se divide en paquetes que pueden viajar por diferentes rutas dentro de la red hasta llegar a su destino final, donde son reorganizados para reconstruir el mensaje original.
          p En el contexto del desarrollo #[i web], Internet constituye la infraestructura sobre la cual operan las aplicaciones, los servicios digitales y las Interfaces de Programación de Aplicaciones (API).
      .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-06.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Entre los conceptos fundamentales asociados al funcionamiento de Internet se encuentran:

    .cajon.cajon.C06.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    .row.justify-content-center.align-items-center    
      .col-lg-10
        p En conjunto, estos conceptos permiten comprender el funcionamiento de Internet como infraestructura tecnológica que soporta la comunicación digital. Su conocimiento resulta fundamental para el desarrollo #[i web], ya que las aplicaciones, los servicios en línea y las Interfaces de Programación de Aplicaciones (API) operan sobre esta red global y permiten el intercambio de información entre diferentes sistemas y plataformas.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2. Herramientas de Internet

    p El funcionamiento de Internet y de las aplicaciones #[i web] depende de diversas herramientas tecnológicas que permiten acceder a la información, procesar solicitudes y gestionar la comunicación entre los diferentes sistemas conectados a la red. Estas herramientas intervienen en el intercambio de datos entre los usuarios y los servidores, facilitando la navegación, la publicación de contenidos y la integración de servicios digitales.
    p.mb-4 Entre las principales herramientas utilizadas en el entorno de Internet se encuentran:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-13.svg', alt='')(style="width: 100%")
            h4.text-center Navegador #[i web]
            p.mb-0(data-aos="fade-down") Aplicación o #[i software] instalado en un dispositivo que permite acceder, visualizar e interactuar con la información disponible en Internet. Los navegadores interpretan los lenguajes utilizados en la #[i web], como HTML, CSS y JavaScript, transformándolos en páginas visuales con texto, imágenes, videos y otros elementos interactivos.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-14.svg', alt='')(style="width: 100%")
            h4.text-center Servidor #[i web]
            p.mb-0(data-aos="fade-down") Sistema informático encargado de almacenar, procesar y entregar los recursos de un sitio #[i web] a los usuarios que los solicitan. Cuando un navegador realiza una petición, el servidor recibe la solicitud, localiza la información requerida y la envía al cliente para su visualización mediante protocolos de comunicación #[i web].
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-15.svg', alt='')(style="width: 100%")
            h4.text-center Cliente HTTP
            p.mb-0(data-aos="fade-down") Aplicación o componente de #[i software] que envía solicitudes a un servidor #[i web] utilizando el protocolo HTTP o HTTPS con el fin de acceder a recursos como páginas #[i web], archivos o servicios de datos. Los navegadores #[i web] y algunas herramientas de desarrollo funcionan como clientes HTTP al iniciar la comunicación con los servidores.
          .col-xl.col-lg-6.tarjeta.tarjeta--C10.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-16.svg', alt='')(style="width: 100%")
            h4.text-center DNS (Sistema de Nombres de Dominio)
            p.mb-0(data-aos="fade-down") Sistema que traduce los nombres de dominio utilizados por las personas en direcciones IP numéricas que identifican a los servidores en Internet. Gracias al DNS, los usuarios pueden acceder a los servicios #[i web] mediante nombres fáciles de recordar, en lugar de utilizar direcciones numéricas complejas.

    .row.justify-content-center.align-items-center    
      .col-lg-10
        p Estas herramientas permiten el funcionamiento del modelo cliente-servidor característico de la #[i web]. En este modelo, el usuario accede a los servicios mediante un navegador o cliente HTTP, el servidor #[i web] procesa la solicitud y el sistema DNS facilita la localización de los recursos dentro de la infraestructura de Internet.   

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3. Elementos físicos de Internet

    p.mb-4 La infraestructura de Internet se basa en una serie de componentes físicos que permiten transportar la información entre dispositivos y redes distribuidas en todo el mundo. Estos elementos corresponden a equipos y dispositivos tangibles encargados de transmitir señales, dirigir el tráfico de datos y proporcionar los servicios necesarios para el funcionamiento de aplicaciones, sitios #[i web] y plataformas digitales.

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-17.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Los elementos físicos constituyen la base material de Internet, ya que permiten que los datos viajen a través de diferentes medios de comunicación, como cables, enlaces inalámbricos o conexiones satelitales. Entre los principales dispositivos que hacen parte de esta infraestructura se encuentran #[i routers], antenas y servidores, los cuales cumplen funciones específicas dentro de la red.

    AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="a) <em>Router</em>")
        .col-lg-8.order-lg-1.order-2
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p Un #[i router] o enrutador es un dispositivo de red encargado de conectar diferentes redes informáticas y dirigir el tráfico de datos entre ellas. Su función principal consiste en determinar la mejor ruta para que los paquetes de información lleguen desde el dispositivo de origen hasta su destino dentro de Internet o de una red local.
            li.mb-0
              i.lista-ul__vineta
              p En entornos domésticos y empresariales, el #[i router] actúa como el punto central de conexión, distribuyendo la señal de Internet mediante conexiones cableadas o inalámbricas (Wi-Fi) hacia diversos dispositivos como computadores, teléfonos móviles, televisores inteligentes y otros equipos conectados.
            li.mb-0
              i.lista-ul__vineta
              p Entre sus principales funciones se encuentran el enrutamiento de paquetes de datos mediante tablas de rutas, la asignación de direcciones IP a los dispositivos conectados a la red mediante protocolos como DHCP y la implementación de mecanismos básicos de seguridad, como la traducción de direcciones de red (NAT) o #[i firewalls] integrados.
            li.mb-0
              i.lista-ul__vineta
              p Existen diferentes tipos de #[i routers] según su uso y capacidad. Los #[i core routers] son utilizados por proveedores de servicios de Internet en el núcleo de la red para gestionar grandes volúmenes de tráfico. Los #[i edge routers] se ubican en los límites de las redes organizacionales para conectar con otras redes externas. Por su parte, los #[i routers] SOHO (Small Office/Home Office) son los dispositivos comunes en hogares y pequeñas oficinas, donde integran funciones de #[i router], #[i switch] y punto de acceso inalámbrico.
        .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-18.png', alt='Imagen decorativa')
      .row.justify-content-center(titulo="b) Antenas")
        .col-lg-8.order-lg-1.order-2
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p Las antenas son dispositivos diseñados para emitir o recibir ondas electromagnéticas, permitiendo la transmisión de información a través del aire mediante señales inalámbricas. Su función consiste en convertir la energía eléctrica en ondas de radio y, a su vez, transformar las ondas recibidas nuevamente en señales eléctricas que pueden ser interpretadas por los dispositivos de comunicación.
            li.mb-0
              i.lista-ul__vineta
              p En el contexto de Internet, las antenas son fundamentales para las redes inalámbricas, ya que permiten distribuir la señal en entornos donde no es posible utilizar cableado físico o donde se requiere cobertura en amplias áreas geográficas. Estas se emplean en redes Wi-Fi, enlaces de radio, redes móviles y comunicaciones satelitales.
            li.mb-0
              i.lista-ul__vineta
              p Las antenas pueden clasificarse según su forma de propagación de la señal. Las antenas omnidireccionales transmiten la señal en todas las direcciones y suelen utilizarse en redes domésticas o en espacios interiores. Las antenas direccionales, como las antenas parabólicas o Yagi, concentran la señal en una dirección específica y se emplean para enlaces de mayor distancia. También existen antenas sectoriales, utilizadas comúnmente en torres de telecomunicaciones para cubrir áreas determinadas dentro de las redes móviles.
            li.mb-0
              i.lista-ul__vineta
              p Entre sus características técnicas más relevantes se encuentran la ganancia, que indica el alcance o intensidad de la señal; la frecuencia de operación, como 2.4 GHz, 5 GHz o 6 GHz; y la polarización, que corresponde a la orientación de las ondas electromagnéticas transmitidas.
        .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-19.png', alt='Imagen decorativa')
      .row.justify-content-center(titulo="c) Servidores")
        .col-lg-8.order-lg-1.order-2
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p Los servidores son equipos informáticos de alto rendimiento diseñados para proporcionar recursos, datos o servicios a otros dispositivos dentro de una red. Estos equipos almacenan información y ejecutan aplicaciones que pueden ser solicitadas por los usuarios a través de Internet.
            li.mb-0
              i.lista-ul__vineta
              p Cuando un usuario accede a una página #[i web], envía una solicitud desde su dispositivo a un servidor que almacena el contenido del sitio. El servidor procesa la solicitud y envía los datos necesarios para que el navegador del usuario pueda visualizar la información solicitada.
            li.mb-0
              i.lista-ul__vineta
              p Los servidores pueden desempeñar diferentes funciones dependiendo del servicio que ofrecen. Los servidores #[i web] almacenan y entregan páginas #[i web] y recursos asociados como imágenes o archivos. Los servidores de bases de datos gestionan información estructurada utilizada por aplicaciones y sistemas informáticos. Los servidores de correo administran el envío y recepción de mensajes electrónicos mediante protocolos especializados. Asimismo, los servidores DNS permiten traducir nombres de dominio en direcciones IP para facilitar el acceso a los recursos en Internet.
            li.mb-0
              i.lista-ul__vineta
              p Estos equipos suelen contar con #[i hardware] especializado que garantiza un funcionamiento continuo y estable. Entre sus características más importantes se encuentran procesadores de alto rendimiento, memoria con corrección de errores (ECC), sistemas de almacenamiento redundante y fuentes de alimentación duplicadas. Estas características permiten mantener los servicios disponibles de forma permanente, asegurando que las aplicaciones, sitios #[i web] y plataformas digitales puedan operar las veinticuatro horas del día.
        .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-20.png', alt='Imagen decorativa')

    .row.justify-content-center
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-21.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p En la actualidad, muchos de estos servidores se encuentran alojados en centros de datos o en infraestructuras de computación en la nube, lo que permite escalar los servicios y distribuir las cargas de trabajo entre múltiples sistemas. Sin embargo, aunque la infraestructura pueda estar virtualizada, los principios de funcionamiento de estos elementos físicos continúan siendo fundamentales para el funcionamiento de Internet y para la prestación de servicios digitales.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4. Elementos lógicos de Internet

    p Además de los componentes físicos que permiten la transmisión de datos, Internet también se basa en una serie de elementos lógicos que organizan, identifican y regulan la comunicación entre los dispositivos conectados a la red. Estos elementos corresponden a configuraciones, direcciones y protocolos que establecen las reglas necesarias para que los sistemas puedan intercambiar información de manera estructurada y eficiente.
    p.mb-4 Los elementos lógicos permiten identificar los dispositivos dentro de la red, establecer canales de comunicación entre aplicaciones y definir los estándares mediante los cuales se transmiten los datos. Entre los principales elementos lógicos utilizados en Internet se encuentran las direcciones IP, los puertos de comunicación y los protocolos de red.

    .cajon.C01.p-4.mb-4
      .row.justify-content-center
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema1/img-22.png', width='70', alt='')
        .col-lg
          .row.align-items-center.mb-4(data-aos="flip-down")
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
            .col-lg-auto.col-9.titulo01(style="z-index:1")
              .p-2
                h3.mb-0.ms-lg-1.ms-2 a) Dirección IP
          ul.lista-ul--color.mt-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p La dirección IP (Internet Protocol) es un identificador numérico único asignado a cada dispositivo conectado a una red que utiliza el protocolo IP. Su función principal es permitir la identificación y localización de los equipos dentro de la red, facilitando el envío y la recepción de información entre diferentes sistemas.
            li
              i.fas.fa-cloud-arrow-down
              p Cada dispositivo conectado a Internet, como computadores, servidores, teléfonos móviles o dispositivos inteligentes, requiere una dirección IP para poder comunicarse con otros equipos. Esta dirección funciona de manera similar a una dirección postal, ya que permite que los paquetes de datos lleguen al destino correcto dentro de la red.
            li
              i.fas.fa-cloud-arrow-down
              p Las direcciones IP pueden presentarse en diferentes formatos. El más común es IPv4, que utiliza una combinación de cuatro números separados por puntos.
            li
              i.fas.fa-cloud-arrow-down
              p Ejemplo de dirección IPv4: 192.168.1.10
            li
              i.fas.fa-cloud-arrow-down
              p En la actualidad también se utiliza IPv6, un formato más reciente que permite una mayor cantidad de direcciones disponibles para soportar el crecimiento de los dispositivos conectados a Internet.

    .row.justify-content-center.mb-4
      .col.col-12.col-lg-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-2 b) Puertos
    
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-23.svg', alt='')
      .col.col-lg-9.col-12.order-lg-1.order-2
        ol.lista-ol--cuadro
          li(data-aos="flip-up") 
            .lista-ol--cuadro__vineta
              span 1
            | Los puertos son canales de comunicación que permiten que diferentes aplicaciones o servicios puedan intercambiar información dentro de un mismo dispositivo conectado a la red. Cada puerto se identifica mediante un número y actúa como un punto específico de entrada o salida para los datos.
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 2
            | Cuando un dispositivo recibe información desde Internet, el número de puerto indica a qué aplicación o servicio debe entregarse esa información. De esta manera, un mismo equipo puede ejecutar simultáneamente varios servicios de red sin interferencias entre ellos.
          li.mb-4(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 3
            | Algunos puertos son utilizados de manera estándar por servicios ampliamente conocidos en Internet.
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 1.
            span Puertos de uso frecuente en entornos #[i web]
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 50%; background-color: #FFF7DF;") Puerto 
                  th(style="width: 50%; background-color: #FFF7DF;") Uso habitual
              tbody
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F0F8FF;") 80
                  td(style="background-color: #F0F8FF;") HTTP
                tr(data-aos="fade-right")
                  td.text-center 443
                  td HTTPS
                tr(data-aos="fade-right")
                  td.text-center(style="background-color: #F0F8FF;") 3306
                  td(style="background-color: #F0F8FF;") MySQL
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 4
            | El uso de puertos permite organizar el tráfico de datos dentro de los dispositivos y garantizar que cada servicio pueda funcionar correctamente dentro de la infraestructura de red.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .cajon.cajon.C01.p-4
          .row.align-items-center.mb-4(data-aos="flip-down")
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
            .col-lg-auto.col-9.titulo01(style="z-index:1")
              .p-2
                h3.mb-0.ms-2 b) Puertos

          ul.lista-ul.mb-4
            li.mb-0
              i.lista-ul__vineta
              p Los protocolos de red son conjuntos de reglas y estándares que definen cómo se transmiten, reciben y procesan los datos entre los dispositivos conectados a Internet. Estos protocolos garantizan que sistemas con diferentes tipos de #[i hardware], #[i software] y fabricantes puedan comunicarse entre sí de forma compatible.
            li.mb-0
              i.lista-ul__vineta
              p La comunicación en Internet se basa principalmente en la familia de protocolos TCP/IP, que constituye el fundamento de la transmisión de datos en la red. El protocolo TCP (Transmission Control Protocol) se encarga de dividir la información en paquetes, controlar su envío y verificar que los datos lleguen correctamente al destino. Por su parte, el protocolo IP (Internet Protocol) se encarga de dirigir los paquetes hacia la dirección correcta dentro de la red.
            li.mb-0
              i.lista-ul__vineta
              p Además de TCP/IP, existen otros protocolos que permiten el funcionamiento de diversos servicios y aplicaciones en Internet.

          .row.justify-content-center(data-aos="fade-left")
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                h5 Tabla 2.
                span Puertos de uso frecuente en entornos #[i web]
              .tabla-a.color-acento-contenido.mb-4
                table
                  thead
                    tr(data-aos="fade-right")
                      th(style="width: 50%; background-color: #FFF7DF;") Protocolo
                      th(style="width: 50%; background-color: #FFF7DF;") Función principal
                  tbody
                    tr(data-aos="fade-right")
                      td.text-center(style="background-color: #F0F8FF;") HTTP
                      td(style="background-color: #F0F8FF;") Transferencia de recursos #[i web].
                    tr(data-aos="fade-right")
                      td.text-center(style="background-color: #FFFF;")  HTTPS
                      td(style="background-color: #FFFF;")  Transferencia segura de recursos #[i web].
                    tr(data-aos="fade-right")
                      td.text-center(style="background-color: #F0F8FF;") TCP/IP
                      td(style="background-color: #F0F8FF;") Base de la comunicación y el direccionamiento en Internet.
                    tr(data-aos="fade-right")
                      td.text-center(style="background-color: #FFFF;")  FTP
                      td(style="background-color: #FFFF;")  Transferencia de archivos.

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-24.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") En conjunto, estos elementos lógicos permiten que los dispositivos conectados a Internet puedan identificarse, establecer canales de comunicación y transmitir información de manera organizada. Gracias a estas configuraciones y estándares, es posible que aplicaciones, sitios #[i web] y servicios digitales funcionen correctamente dentro de la infraestructura global de Internet.

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5. Tipos de conectividad en redes

    p.mb-4 La conectividad en redes se refiere a la capacidad que tienen los dispositivos para establecer comunicación entre sí y acceder a los recursos disponibles en Internet. Esta conectividad depende del medio de transmisión utilizado, la infraestructura disponible y las tecnologías empleadas para transportar la información.

    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-25.svg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p La calidad de la conexión puede variar según factores como el ancho de banda, la latencia, la estabilidad del enlace y la distancia entre los dispositivos conectados. Estos aspectos influyen directamente en el rendimiento de aplicaciones, plataformas digitales y servicios en línea.
        p Actualmente existen diferentes tipos de conectividad que permiten a los usuarios y a las organizaciones acceder a Internet desde diversos entornos.

    AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row(titulo="a) Conectividad por cable o banda ancha")
        .col-12.mb-0.mb-md-0
          p La banda ancha por cable es una de las formas más utilizadas para acceder a Internet en hogares y empresas. Utiliza infraestructuras de cable coaxial o fibra óptica para transmitir grandes volúmenes de datos a alta velocidad.
          .row.justify-content-center.mb-4
            .col-lg-8.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 1.
                span Cable coaxial

            .row.justify-content-center
              .col-8
                figure.desktop
                  img(src='@/assets/curso/tema1/img-26.png', alt='En la figura 1 se presenta un cable coaxial compuesto por un conductor central rodeado por una capa aislante, una malla metálica de protección y una cubierta exterior protectora.', style="width: 1043px").m-auto
                  figcaption Referencia Tabla - Norma APA
              .col-12
                figure.movil
                  img(src='@/assets/curso/tema1/img-26.png', alt='En la figura 1 se presenta un cable coaxial compuesto por un conductor central rodeado por una capa aislante, una malla metálica de protección y una cubierta exterior protectora.', style="width: 1043px").m-auto
                  figcaption Referencia Tabla - Norma APA
          p.mb-0 Este tipo de conexión es ofrecido por los proveedores de servicios de Internet (ISP) y permite una comunicación estable y continua entre los usuarios y la red global. Gracias a su capacidad de transmisión, es adecuada para actividades que requieren alto consumo de datos, como videoconferencias, plataformas en la nube o transmisión de contenidos multimedia.
      .row(titulo="b) Conexiones DSL")
        .col-12.mb-0.mb-md-0
          p Las conexiones DSL (Digital Subscriber Line) utilizan las líneas telefónicas tradicionales para transmitir datos digitales. Aunque su velocidad es menor en comparación con las conexiones de fibra óptica o cable coaxial, continúa siendo una alternativa utilizada en zonas donde otras infraestructuras de red no están disponibles.
          .row.justify-content-center.mb-4
            .col-lg-8.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 2.
                span Cómo funciona el servicio de internet DSL

            .row.justify-content-center
              .col-8
                figure.desktop
                  img(src='@/assets/curso/tema1/img-27.svg', alt='En la figura 2 se presenta el funcionamiento de la conexión a Internet DSL. La señal llega desde un poste de telecomunicaciones a una vivienda a través de la línea telefónica, se conecta a un router y desde allí se distribuye a diferentes dispositivos como computadores, teléfonos y celulares.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de Webformix (2021).
              .col-12
                figure.movil
                  img(src='@/assets/curso/tema1/img-27.svg', alt='En la figura 2 se presenta el funcionamiento de la conexión a Internet DSL. La señal llega desde un poste de telecomunicaciones a una vivienda a través de la línea telefónica, se conecta a un router y desde allí se distribuye a diferentes dispositivos como computadores, teléfonos y celulares.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de Webformix (2021).
          p.mb-0 Esta tecnología permite que la transmisión de datos y la comunicación telefónica se realicen simultáneamente sobre la misma línea, sin interferencias entre ambos servicios.
      .row(titulo="c) Internet por fibra óptica")
        .col-12.mb-0.mb-md-0
          p La fibra óptica es una de las tecnologías de conectividad más avanzadas en la actualidad. Utiliza cables de vidrio o plástico que transmiten información mediante impulsos de luz, lo que permite alcanzar velocidades de transmisión muy elevadas y una menor latencia en comparación con otros medios de transmisión.
          .row.justify-content-center.mb-4
            .col-lg-8.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 3.
                span Fibra óptica

            .row.justify-content-center
              .col-8
                figure.desktop
                  img(src='@/assets/curso/tema1/img-28.png', alt='En la figura 3 se presenta un cable de fibra óptica que transmite datos mediante pulsos de luz a través de filamentos de vidrio o plástico, permitiendo conexiones de alta velocidad y gran capacidad de transmisión de información.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de The Network Installers (2024).
              .col-12
                figure.movil
                  img(src='@/assets/curso/tema1/img-28.png', alt='En la figura 3 se presenta un cable de fibra óptica que transmite datos mediante pulsos de luz a través de filamentos de vidrio o plástico, permitiendo conexiones de alta velocidad y gran capacidad de transmisión de información.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de The Network Installers (2024).
          p.mb-0 Debido a estas características, la fibra óptica se emplea ampliamente en redes empresariales, centros de datos y servicios de computación en la nube, donde se requiere una transferencia rápida y confiable de grandes volúmenes de información.
      .row(titulo="d) Redes móviles")
        .col-12.mb-0.mb-md-0
          p Permiten el acceso a Internet mediante tecnologías de comunicación celular. Estas redes utilizan infraestructuras de antenas y estaciones base que transmiten señales inalámbricas hacia dispositivos como teléfonos inteligentes, tabletas y módems portátiles.
          .row.justify-content-center.mb-4
            .col-lg-8.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 4.
                span Antenas de telefonía móvil

            .row.justify-content-center
              .col-8
                figure.desktop
                  img(src='@/assets/curso/tema1/img-29.png', alt='En la figura 4 se presentan unas torres de telefonía móvil equipadas con antenas que transmiten y reciben señales inalámbricas para proporcionar conectividad a redes móviles y acceso a Internet en amplias áreas geográficas.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de Ubigo (2024).
              .col-12
                figure.movil
                  img(src='@/assets/curso/tema1/img-29.png', alt='En la figura 4 se presentan unas torres de telefonía móvil equipadas con antenas que transmiten y reciben señales inalámbricas para proporcionar conectividad a redes móviles y acceso a Internet en amplias áreas geográficas.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de Ubigo (2024).
          p Las tecnologías móviles han evolucionado significativamente con el tiempo, pasando por diferentes generaciones como 3G, 4G y 5G, cada una con mejoras en velocidad de transmisión, capacidad de conexión y eficiencia en el uso del espectro radioeléctrico.
          p.mb-0 Gracias a estas tecnologías, los usuarios pueden acceder a Internet desde prácticamente cualquier lugar con cobertura de red móvil.
      .row(titulo="e) Internet por satélite")
        .col-12.mb-0.mb-md-0
          p El acceso a Internet por satélite se utiliza principalmente en regiones donde las infraestructuras terrestres de telecomunicaciones son limitadas o inexistentes. En este sistema, los datos se transmiten entre el dispositivo del usuario y un satélite ubicado en órbita terrestre, el cual se comunica con estaciones terrestres conectadas a Internet.
          .row.justify-content-center.mb-4
            .col-lg-8.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 5.
                span Servicio satelital

            .row.justify-content-center
              .col-8
                figure.desktop
                  img(src='@/assets/curso/tema1/img-30.svg', alt='En la figura 5 se presenta un satélite en órbita que transmite señal de Internet hacia diferentes receptores en la Tierra, como antenas terrestres, barcos y aviones, permitiendo la conectividad en distintas ubicaciones.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de BusinessCom (s. f.).
              .col-12
                figure.movil
                  img(src='@/assets/curso/tema1/img-30.svg', alt='En la figura 5 se presenta un satélite en órbita que transmite señal de Internet hacia diferentes receptores en la Tierra, como antenas terrestres, barcos y aviones, permitiendo la conectividad en distintas ubicaciones.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de BusinessCom (s. f.).
          p.mb-0 Aunque este tipo de conexión puede presentar mayor latencia debido a la distancia que deben recorrer las señales, constituye una solución importante para garantizar conectividad en zonas rurales o de difícil acceso.
      .row(titulo="f) Redes inalámbricas Wi-Fi")
        .col-12.mb-0.mb-md-0
          p Es una tecnología que permite conectar dispositivos a Internet de forma inalámbrica dentro de un área determinada, como hogares, oficinas, universidades o espacios públicos. Esta tecnología utiliza ondas de radio para transmitir la información entre el router o punto de acceso y los dispositivos conectados.
          .row.justify-content-center.mb-4
            .col-lg-8.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 6.
                span Una red de área local con varios dispositivos conectados

            .row.justify-content-center
              .col-8
                figure.desktop
                  img(src='@/assets/curso/tema1/img-31.svg', alt='En la figura 6 se presentan dispositivos como computadores, impresoras y otros equipos conectados entre sí dentro de una red de área local (LAN) a través de un router o switch.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de Harrison Gough (2024), Avast.
              .col-12
                figure.movil
                  img(src='@/assets/curso/tema1/img-31.svg', alt='En la figura 6 se presentan dispositivos como computadores, impresoras y otros equipos conectados entre sí dentro de una red de área local (LAN) a través de un router o switch.', style="width: 1043px").m-auto
                  figcaption Nota. Tomado de Harrison Gough (2024), Avast.
          p Las redes Wi-Fi facilitan la conexión simultánea de múltiples dispositivos sin necesidad de cableado físico, lo que las convierte en una solución ampliamente utilizada en entornos domésticos y empresariales.
          p Los diferentes tipos de conectividad presentan características particulares relacionadas con la velocidad de transmisión de datos, el alcance geográfico y el medio físico o tecnológico utilizado para la comunicación. Estas diferencias influyen directamente en el desempeño de los servicios digitales, el acceso a aplicaciones en línea y la estabilidad de la conexión. A continuación, se presenta una comparación general de algunos tipos de conectividad utilizados en redes, con el fin de identificar sus principales características y aplicaciones.
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span Comparación general de algunos tipos de conectividad
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr
                  th(style="width: 50%; background-color: #FFF7DF;") Tipo de conectividad
                  th(style="width: 50%; background-color: #FFF7DF;") Velocidad aproximada
                  th(style="width: 50%; background-color: #FFF7DF;") Alcance
                  th(style="width: 50%; background-color: #FFF7DF;") Medio de transmisión
              tbody
                tr
                  td.text-center(style="background-color: #F0F8FF;") DSL
                  td(style="background-color: #F0F8FF;") Media
                  td(style="background-color: #F0F8FF;") Medio
                  td(style="background-color: #F0F8FF;") Línea telefónica
                tr
                  td.text-center(style="background-color: #FFFF;") Wi-Fi
                  td(style="background-color: #FFFF;") Media
                  td(style="background-color: #FFFF;") Bajo
                  td(style="background-color: #FFFF;") Inalámbrico
                tr
                  td.text-center(style="background-color: #F0F8FF;") Banda ancha por cable
                  td(style="background-color: #F0F8FF;") Alta
                  td(style="background-color: #F0F8FF;") Medio
                  td(style="background-color: #F0F8FF;") Cable coaxial
                tr
                  td.text-center(style="background-color: #FFFF;") Fibra óptica
                  td(style="background-color: #FFFF;") Muy alta
                  td(style="background-color: #FFFF;") Alto
                  td(style="background-color: #FFFF;") Fibra óptica
                tr
                  td.text-center(style="background-color: #F0F8FF;") Satélite
                  td(style="background-color: #F0F8FF;") Media
                  td(style="background-color: #F0F8FF;") Muy alto
                  td(style="background-color: #F0F8FF;") Señal satelital
                tr
                  td.text-center(style="background-color: #FFFF;") Redes móviles
                  td(style="background-color: #FFFF;") Media a alta
                  td(style="background-color: #FFFF;") Alto
                  td(style="background-color: #FFFF;") Inalámbrico celular
          p.mb-0 En el diseño de aplicaciones y servicios digitales es importante considerar el tipo de conectividad disponible para los usuarios, ya que factores como la velocidad de la red, la latencia y la estabilidad de la conexión pueden influir en la experiencia de uso, el rendimiento de las aplicaciones y la disponibilidad de los servicios en línea.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    datosSlyder: [
      {
        titulo: 'Red',
        texto:
          'Conjunto de dispositivos informáticos interconectados, como computadores, servidores, <em>routers</em> y dispositivos móviles, que se comunican entre sí para compartir información, recursos y servicios mediante diferentes tecnologías de conexión.',
        imagen: require('@/assets/curso/tema1/img-07.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Protocolo',
        texto:
          'Conjunto de reglas y estándares que definen cómo se transmiten, reciben y procesan los datos entre los dispositivos conectados a una red. Los protocolos garantizan que los sistemas puedan comunicarse de manera organizada y compatible.',
        imagen: require('@/assets/curso/tema1/img-08.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Cliente',
        texto:
          'Dispositivo, programa o aplicación que solicita servicios o recursos a un servidor dentro de una red. Por ejemplo, un navegador <em>web</em> actúa como cliente cuando solicita una página a un servidor <em>web</em>.',
        imagen: require('@/assets/curso/tema1/img-09.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Dirección IP',
        texto:
          'Identificador numérico único asignado a cada dispositivo conectado a una red que utiliza el protocolo IP. Esta dirección permite localizar y reconocer los equipos dentro de la red para que puedan enviar y recibir información correctamente.',
        imagen: require('@/assets/curso/tema1/img-10.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Servidor',
        texto:
          'Equipo o sistema informático que proporciona servicios, recursos o información a otros dispositivos dentro de una red. Los servidores pueden ofrecer distintos servicios, como alojamiento de páginas <em>web</em>, almacenamiento de archivos o gestión de correos electrónicos.',
        imagen: require('@/assets/curso/tema1/img-11.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Paquete de datos',
        texto:
          'Unidad básica de información que se transmite a través de una red. Los datos se dividen en pequeños paquetes que viajan por diferentes rutas hasta llegar a su destino, donde se reorganizan para reconstruir el mensaje original.',
        imagen: require('@/assets/curso/tema1/img-12.png'),
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
