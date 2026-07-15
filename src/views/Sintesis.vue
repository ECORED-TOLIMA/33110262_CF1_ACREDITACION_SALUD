<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos normativos y estructurales de la acreditación en salud, mediante el estudio de la normatividad vigente, el Subsistema Nacional de Calidad, el Sistema Obligatorio de Garantía de la Calidad (SOGC) y el Sistema Único de Acreditación en Salud (SUA). Asimismo, presenta su alcance, estándares, procesos, herramientas y actores que intervienen en la acreditación, permitiendo reconocer los elementos que sustentan el mejoramiento continuo y la calidad en la prestación de los servicios de salud.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis de los fundamentos normativos y estructurales de la acreditación en salud: normatividad vigente, Subsistema Nacional de Calidad, Sistema Obligatorio de Garantía de la Calidad, Sistema Único de Acreditación en Salud, estándares, procesos, herramientas y actores.")
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
