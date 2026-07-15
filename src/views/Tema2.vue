<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Subsistema Nacional de Calidad (SNC)

    p El Subsistema Nacional de Calidad (SNC) es el conjunto de políticas, instituciones, normas, procesos e instrumentos que promueven la calidad, la seguridad y la confianza en los bienes y servicios ofrecidos en el país. Su propósito es establecer un marco que permita garantizar el cumplimiento de requisitos técnicos y normativos mediante actividades como la normalización, la evaluación de la conformidad, la acreditación y la metrología.
    p En Colombia, el Subsistema Nacional de Calidad (SNC) contribuye al fortalecimiento de la competitividad y a la protección de los consumidores, al promover la adopción de estándares que favorecen la mejora continua y la confiabilidad de los productos y servicios. En el sector salud, este subsistema proporciona las bases para la implementación de mecanismos orientados a garantizar la calidad en la prestación de los servicios, apoyando la evaluación del desempeño institucional y el cumplimiento de los requisitos establecidos por la normativa vigente.
    p Su funcionamiento se fundamenta en la articulación de diferentes componentes que permiten establecer criterios técnicos, verificar su cumplimiento y reconocer la competencia de los organismos encargados de realizar actividades de evaluación. Esta integración favorece la transparencia, la confiabilidad de los resultados y la mejora continua en los distintos sectores productivos y de servicios.
    p La interacción de estos componentes permite consolidar un sistema orientado al aseguramiento de la calidad y al fortalecimiento de la confianza en los procesos de evaluación. En el sector salud, este marco proporciona las bases para la implementación de mecanismos como el Sistema Obligatorio de Garantía de la Calidad (SOGC), el cual adapta estos principios a las particularidades de la prestación de los servicios de salud.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Articulación con el Sistema Obligatorio de Garantía de la Calidad (SOGC)
    p El Subsistema Nacional de Calidad (SNC) y el Sistema Obligatorio de Garantía de la Calidad (SOGC) mantienen una relación complementaria que fortalece la calidad en la prestación de los servicios de salud. Mientras el SNC establece los lineamientos generales para promover la calidad, la evaluación de la conformidad, la acreditación y la metrología en los diferentes sectores del país, el SOGC aplica estos lineamientos al contexto específico del sector salud mediante mecanismos que favorecen el mejoramiento continuo de la atención.
    p Esta articulación permite que las instituciones prestadoras de servicios de salud desarrollen sus procesos conforme a estándares técnicos y normativos, promoviendo la seguridad del paciente, la eficiencia en la gestión y el cumplimiento de los requisitos establecidos por las autoridades competentes. De esta manera, el SNC proporciona las bases para la implementación de los componentes que integran el SOGC.
    .row.justify-content-center.mb-4
      .col-lg-6.mb-3
        .cajon.color-primario.p-4.h-100
          p.mb-0 El Subsistema Nacional de Calidad (SNC) establece el marco general de la calidad en el país mediante la definición de políticas, lineamientos y mecanismos relacionados con la normalización, la evaluación de la conformidad, la acreditación y la metrología.
      .col-lg-6.mb-3
        .cajon.color-acento-contenido.p-4.h-100
          p.mb-0 El Sistema Obligatorio de Garantía de la Calidad (SOGC) implementa estos lineamientos en el sector salud mediante sus componentes: el Sistema Único de Habilitación (SUH), el Programa de Auditoría para el Mejoramiento de la Calidad (PAMEC), el Sistema de Información para la Calidad (SIC) y el Sistema Único de Acreditación en Salud (SUA).
    p La articulación entre ambos sistemas favorece la implementación de procesos estandarizados, la evaluación permanente del desempeño institucional y la adopción de acciones de mejora orientadas al fortalecimiento de la calidad en los servicios de salud. Asimismo, impulsa el desarrollo de procesos de acreditación que promueven niveles superiores de desempeño y una atención centrada en las necesidades de las personas.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Relación con otras normas y sistemas de calidad
    p La gestión de la calidad en el sector salud no depende exclusivamente del Sistema Obligatorio de Garantía de la Calidad (SOGC). Su implementación se fortalece mediante la articulación con otras normas, modelos y sistemas de gestión que promueven la mejora continua, la estandarización de los procesos y el cumplimiento de requisitos técnicos aplicables a diferentes organizaciones.
    p En este contexto, las instituciones prestadoras de servicios de salud pueden integrar referentes nacionales e internacionales que contribuyen al fortalecimiento de sus procesos administrativos y asistenciales, favoreciendo una gestión más eficiente, segura y orientada a la satisfacción de las necesidades de las personas.
    p La articulación entre estos referentes y los sistemas de calidad aplicables al sector salud favorece la implementación de buenas prácticas organizacionales, el fortalecimiento de la cultura de calidad y el desarrollo de procesos orientados al mejoramiento continuo. Asimismo, proporciona herramientas que apoyan el cumplimiento de los estándares establecidos para la acreditación en salud y contribuyen al fortalecimiento de la confianza en los servicios prestados.

    .tabla-a.color-acento-botones.mb-5
      table
        caption Tabla 2. Referentes y sistemas de calidad aplicables al sector salud
        thead
          tr
            th Referente o sistema
            th Aporte a la gestión de la calidad
        tbody
          tr
            td ICONTEC
            td Organismo Nacional de Normalización que elabora y adopta normas técnicas para diferentes sectores, incluido el sector salud.
          tr
            td ONAC
            td Organismo Nacional de Acreditación encargado de acreditar la competencia técnica de los organismos que realizan actividades de evaluación de la conformidad.
          tr
            td Sistema Obligatorio de Garantía de la Calidad (SOGC)
            td Establece los mecanismos para garantizar la calidad en la prestación de los servicios de salud.
          tr
            td Sistema Único de Acreditación en Salud (SUA)
            td Promueve el mejoramiento continuo mediante la evaluación del cumplimiento de estándares superiores de calidad.
    p La integración de estos referentes y sistemas fortalece la gestión de la calidad en el sector salud, al promover la mejora continua, el cumplimiento de los requisitos normativos y el desarrollo de procesos orientados a la excelencia en la prestación de los servicios de salud.
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
