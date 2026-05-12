<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p El desarrollo #[i web] ha evolucionado de manera significativa con el crecimiento de Internet y la necesidad de crear aplicaciones cada vez más dinámicas, interactivas y conectadas entre sí. En este contexto, el uso de lenguajes de programación y arquitecturas orientadas a servicios permite diseñar soluciones que facilitan el intercambio de información entre diferentes sistemas y plataformas.
    p.mb-4 Comprender los fundamentos de Internet, los elementos que lo conforman y los tipos de conectividad existentes resulta esencial para el desarrollo de aplicaciones #[i web] funcionales y eficientes. De igual forma, el manejo de conceptos básicos de programación, como los tipos de datos, las estructuras de control, las funciones y el uso de clases y objetos, permite estructurar adecuadamente la lógica de las aplicaciones.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Asimismo, la arquitectura orientada a servicios y el uso de servicios #[i web] como SOAP y REST facilitan la comunicación entre aplicaciones mediante APIs, permitiendo integrar servicios y gestionar el intercambio de datos de forma segura y eficiente. En este proceso también cobra importancia la preparación del entorno de desarrollo, la configuración de herramientas como los entornos de desarrollo integrados (IDE), la gestión de bases de datos y el uso de herramientas como los ORM.

    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p Finalmente, las pruebas de #[i software] permiten verificar el correcto funcionamiento de las aplicaciones y asegurar la calidad de los servicios desarrollados, contribuyendo a la creación de soluciones tecnológicas confiables y eficientes en entornos digitales.
        p Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZqFpqH1yQ94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
      
</template>

<script>
export default {
  name: 'Introduccion',
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
