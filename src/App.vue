<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
    observer: null,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  watch: {
    $route() {
      this.iniciarObservadores()
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
    this.iniciarObservadores()
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    validarComponentes() {
      this.validarBotonesPasos()
      this.validarLineaTiempo()
    },
    validarBotonesPasos() {
      const componentesPasos = document.querySelectorAll('.pasos-b')
      componentesPasos.forEach(paso => {
        const btnLeft = paso.querySelector('.pasos-b__header__btn--left')
        const btnRight = paso.querySelector('.pasos-b__header__btn--right')
        const items = paso.querySelectorAll('.pasos-b__header__item')

        if (items.length > 0) {
          const esPrimero = items[0].classList.contains(
            'pasos-b__header__item--active',
          )
          if (btnLeft) {
            btnLeft.style.opacity = esPrimero ? '0.2' : '1'
            btnLeft.style.pointerEvents = esPrimero ? 'none' : 'auto'
          }
          const esUltimo = items[items.length - 1].classList.contains(
            'pasos-b__header__item--active',
          )
          if (btnRight) {
            btnRight.style.opacity = esUltimo ? '0.2' : '1'
            btnRight.style.pointerEvents = esUltimo ? 'none' : 'auto'
          }
        }
      })
    },
    validarLineaTiempo() {
      const lineasTiempo = document.querySelectorAll('.linea-tiempo-c')
      lineasTiempo.forEach(linea => {
        const btnLeft = linea.querySelector(
          '.linea-tiempo-c__header__btn--left',
        )
        const btnRight = linea.querySelector(
          '.linea-tiempo-c__header__btn--right',
        )
        const items = linea.querySelectorAll('.linea-tiempo-c__header__item')

        if (items.length > 0) {
          const esPrimero = items[0].classList.contains(
            'linea-tiempo-c__header__item--active',
          )
          if (btnLeft) {
            btnLeft.style.opacity = esPrimero ? '0.2' : '1'
            btnLeft.style.pointerEvents = esPrimero ? 'none' : 'auto'
          }
          const esUltimo = items[items.length - 1].classList.contains(
            'linea-tiempo-c__header__item--active',
          )
          if (btnRight) {
            btnRight.style.opacity = esUltimo ? '0.2' : '1'
            btnRight.style.pointerEvents = esUltimo ? 'none' : 'auto'
          }
        }
      })
    },
    iniciarObservadores() {
      this.$nextTick(() => {
        this.validarComponentes() // Ejecución inicial

        if (this.observer) this.observer.disconnect()
        this.observer = new MutationObserver(() => this.validarComponentes())

        // Selecciona las cabeceras de ambos componentes para observar los cambios de clase
        const targets = document.querySelectorAll(
          '.pasos-b__header, .linea-tiempo-c__header',
        )
        targets.forEach(target => {
          this.observer.observe(target, {
            attributes: true,
            childList: true,
            subtree: true,
          })
        })
      })
    },
  },
}
</script>

<style lang="sass"></style>
