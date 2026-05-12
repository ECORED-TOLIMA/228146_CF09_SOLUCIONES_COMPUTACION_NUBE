<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo integra los fundamentos de Internet y del desarrollo #[i web], los principios de programación utilizados para construir aplicaciones, la arquitectura orientada a servicios y los procesos técnicos necesarios para desarrollar APIs. A lo largo del componente se abordan aspectos relacionados con la configuración del entorno de desarrollo, la comunicación entre aplicaciones mediante solicitudes y respuestas, la gestión de datos y la realización de pruebas que permiten verificar el funcionamiento de los servicios. Estos conocimientos proporcionan una base conceptual y técnica para comprender cómo se diseñan, construyen y validan aplicaciones y servicios digitales que interactúan a través de la #[i web]. 

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presentan los principales temas del componente, incluyendo los fundamentos de Internet y del desarrollo web, los conceptos básicos de programación, la arquitectura orientada a servicios, el desarrollo y configuración de APIs, y las pruebas utilizadas para verificar su funcionamiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
