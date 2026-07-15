<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistema Obligatorio de Garantía de la Calidad (SOGC)

    p El Sistema Obligatorio de Garantía de la Calidad (SOGC) es el conjunto de instituciones, normas, requisitos, mecanismos y procesos orientados a garantizar el acceso a servicios de salud seguros, oportunos, accesibles y con estándares de calidad. En Colombia, este sistema constituye uno de los principales instrumentos para promover el mejoramiento continuo de la atención y fortalecer el desempeño de las instituciones prestadoras de servicios de salud.
    p El SOGC orienta a los actores del sistema de salud en la implementación de estrategias que favorecen la seguridad del paciente, la gestión del riesgo, la evaluación permanente de los procesos y la toma de decisiones basada en criterios de calidad. Su aplicación permite establecer condiciones para la prestación de los servicios, realizar seguimiento al desempeño institucional y promover una cultura organizacional enfocada en la mejora continua.
    p Asimismo, el SOGC se integra con otros referentes y sistemas de calidad, facilitando la implementación de mecanismos que contribuyen al cumplimiento de la normatividad vigente y al fortalecimiento de los procesos de evaluación institucional. En este contexto, el Sistema Único de Acreditación en Salud (SUA) constituye uno de sus componentes y representa un nivel superior de evaluación de la calidad en la prestación de los servicios de salud.
    p La comprensión del SOGC permite reconocer cómo se organizan los mecanismos que garantizan la calidad en el sector salud y su contribución al fortalecimiento de la gestión institucional, la seguridad del paciente y el mejoramiento continuo de la atención.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Objetivos
    p El Sistema Obligatorio de Garantía de la Calidad (SOGC) tiene como finalidad promover el mejoramiento continuo de la calidad en la prestación de los servicios de salud, mediante la implementación de mecanismos que permitan garantizar una atención segura, oportuna, accesible y centrada en las necesidades de las personas. Para ello, orienta a las instituciones hacia el cumplimiento de requisitos normativos y el fortalecimiento de sus procesos de gestión.
    p El cumplimiento de estos objetivos permite fortalecer la gestión institucional y promover servicios de salud más seguros, eficientes y centrados en las necesidades de las personas, contribuyendo al mejoramiento continuo del sistema de salud.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Componentes del sistema
    p El Sistema Obligatorio de Garantía de la Calidad (SOGC) está conformado por un conjunto de componentes que actúan de manera articulada para garantizar la calidad en la prestación de los servicios de salud. Cada uno cumple una función específica dentro del sistema, permitiendo verificar el cumplimiento de las condiciones establecidas, evaluar el desempeño institucional y promover el mejoramiento continuo.
    p La interacción entre estos componentes favorece el desarrollo de procesos orientados a la seguridad del paciente, la gestión del riesgo y el fortalecimiento de la calidad en las instituciones prestadoras de servicios de salud. En conjunto, constituyen una herramienta fundamental para orientar la gestión institucional y el cumplimiento de los estándares definidos para el sector.

    .tabla-a.color-acento-botones.mb-5
      table
        caption Tabla 3. Componentes del Sistema Obligatorio de Garantía de la Calidad (SOGC)
        thead
          tr
            th Componente
            th Finalidad
        tbody
          tr
            td Sistema Único de Habilitación (SUH)
            td Verificar el cumplimiento de las condiciones mínimas para la prestación de los servicios de salud.
          tr
            td Programa de Auditoría para el Mejoramiento de la Calidad (PAMEC)
            td Promover el mejoramiento continuo mediante la evaluación y seguimiento de los procesos institucionales.
          tr
            td Sistema de Información para la Calidad (SIC)
            td Recopilar, analizar y divulgar información que apoye la evaluación del desempeño y la toma de decisiones.
          tr
            td Sistema Único de Acreditación en Salud (SUA)
            td Evaluar voluntariamente el cumplimiento de estándares superiores de calidad y fomentar la excelencia en la prestación de los servicios de salud.
    p La articulación de estos componentes permite fortalecer la gestión institucional y garantizar la implementación de mecanismos orientados al mejoramiento continuo de la calidad en los servicios de salud. Cada uno cumple un propósito específico, pero su funcionamiento integrado favorece la consolidación de una atención segura, eficiente y centrada en las necesidades de las personas.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Relación entre el SOGC y la acreditación en salud
    p El Sistema Obligatorio de Garantía de la Calidad (SOGC) y el Sistema Único de Acreditación en Salud (SUA) mantienen una relación estrecha, ya que la acreditación constituye uno de los componentes del SOGC y representa un mecanismo orientado a promover niveles superiores de calidad en la prestación de los servicios de salud.
    p Mientras el SOGC establece las condiciones, mecanismos y herramientas para garantizar la calidad en los servicios de salud, el Sistema Único de Acreditación en Salud (SUA) permite evaluar voluntariamente el desempeño de las instituciones frente a estándares de excelencia que superan los requisitos mínimos exigidos por la normativa vigente. De esta manera, la acreditación impulsa el fortalecimiento de la cultura de calidad y el mejoramiento continuo en las organizaciones del sector salud.
    p La implementación de los procesos de acreditación favorece la identificación de oportunidades de mejora, el fortalecimiento de la seguridad del paciente, la optimización de los procesos institucionales y el incremento de la confianza de los usuarios en los servicios de salud. Asimismo, contribuye al desarrollo de una gestión basada en la evaluación permanente y el cumplimiento de estándares orientados a la excelencia.
    p La relación entre el SOGC y la acreditación en salud evidencia que ambos mecanismos contribuyen al fortalecimiento de la calidad en la prestación de los servicios, promoviendo procesos de evaluación, seguimiento y mejora continua que benefician a las instituciones, al talento humano y a las personas usuarias del sistema de salud.
</template>

<script>
export default {
  name: 'Tema3',
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
