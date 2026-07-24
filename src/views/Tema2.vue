<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Subsistema Nacional de Calidad (SNC)

    p.mb-4 El Subsistema Nacional de Calidad (SNC) es el conjunto de políticas, instituciones, normas, procesos e instrumentos que promueven la calidad, la seguridad y la confianza en los bienes y servicios ofrecidos en el país. Su propósito es establecer un marco que permita garantizar el cumplimiento de requisitos técnicos y normativos mediante actividades como la normalización, la evaluación de la conformidad, la acreditación y la metrología.
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${img1})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, el Subsistema Nacional de Calidad (SNC) contribuye al fortalecimiento de la competitividad y a la protección de los consumidores, al promover la adopción de estándares que favorecen la mejora continua y la confiabilidad de los productos y servicios. En el sector salud, este subsistema proporciona las bases para la implementación de mecanismos orientados a garantizar la calidad en la prestación de los servicios, apoyando la evaluación del desempeño institucional y el cumplimiento de los requisitos establecidos por la normativa vigente.
    p.mb-4 Su funcionamiento se fundamenta en la articulación de diferentes componentes que permiten establecer criterios técnicos, verificar su cumplimiento y reconocer la competencia de los organismos encargados de realizar actividades de evaluación. Esta integración favorece la transparencia, la confiabilidad de los resultados y la mejora continua en los distintos sectores productivos y de servicios.
    p.mb-4 Entre los principales componentes del Subsistema Nacional de Calidad (SNC) se encuentran:
    .row.justify-content-center.mb-4
      .col-lg-6.order-2.order-lg-1
         LineaTiempoD.color-acento-botones.especial
          p.mb-0(numero="1" titulo="Normalización")
            | Establece normas técnicas y lineamientos que orientan el desarrollo de productos, procesos y servicios.
          p.mb-0(numero="2" titulo="Evaluación de la conformidad")
            | Verifica el cumplimiento de los requisitos establecidos en normas o reglamentos técnicos mediante actividades de inspección, ensayo, certificación y auditoría.
          p.mb-0(numero="3" titulo="Acreditación")
            | Reconoce la competencia técnica de los organismos que realizan actividades de evaluación de la conformidad, garantizando la confiabilidad de sus resultados.
          p.mb-0(numero="4" titulo="Metrología")
            | Asegura la confiabilidad y exactitud de las mediciones mediante patrones, métodos e instrumentos adecuados.
      .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema2/img2.png', alt='')
    p.mb-0 La interacción de estos componentes permite consolidar un sistema orientado al aseguramiento de la calidad y al fortalecimiento de la confianza en los procesos de evaluación. En el sector salud, este marco proporciona las bases para la implementación de mecanismos como el Sistema Obligatorio de Garantía de la Calidad (SOGC), el cual adapta estos principios a las particularidades de la prestación de los servicios de salud.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Articulación con el Sistema Obligatorio de Garantía de la Calidad (SOGC)
    p El Subsistema Nacional de Calidad (SNC) y el Sistema Obligatorio de Garantía de la Calidad (SOGC) mantienen una relación complementaria que fortalece la calidad en la prestación de los servicios de salud. Mientras el SNC establece los lineamientos generales para promover la calidad, la evaluación de la conformidad, la acreditación y la metrología en los diferentes sectores del país, el SOGC aplica estos lineamientos al contexto específico del sector salud mediante mecanismos que favorecen el mejoramiento continuo de la atención.
    
    p.mb-4 Esta articulación permite que las instituciones prestadoras de servicios de salud desarrollen sus procesos conforme a estándares técnicos y normativos, promoviendo la seguridad del paciente, la eficiencia en la gestión y el cumplimiento de los requisitos establecidos por las autoridades competentes. De esta manera, el SNC proporciona las bases para la implementación de los componentes que integran el SOGC.
    .tarjeta--container.row.justify-content-center.mb-4
      .col-lg-5.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='')          
        h5.text-center El Subsistema Nacional de Calidad (SNC) 
        p.mb-5 Establece el marco general de la calidad en el país mediante la definición de políticas, lineamientos y mecanismos relacionados con la normalización, la evaluación de la conformidad, la acreditación y la metrología.
      .col-lg-5.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='')          
        h5.text-center El Sistema Obligatorio de Garantía de la Calidad (SOGC)
        p.mb-5 Implementa estos lineamientos en el sector salud mediante sus componentes: el Sistema Único de Habilitación (SUH), el Programa de Auditoría para el Mejoramiento de la Calidad (PAMEC), el Sistema de Información para la Calidad (SIC) y el Sistema Único de Acreditación en Salud (SUA).

    p.mb-0 La articulación entre ambos sistemas favorece la implementación de procesos estandarizados, la evaluación permanente del desempeño institucional y la adopción de acciones de mejora orientadas al fortalecimiento de la calidad en los servicios de salud. Asimismo, impulsa el desarrollo de procesos de acreditación que promueven niveles superiores de desempeño y una atención centrada en las necesidades de las personas.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Relación con otras normas y sistemas de calidad
    .BG022.p-4.px-5
      .row.justify-content-center
        .col-lg-5.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/tema2/img5.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='')    
            .col-lg-10
              p.mb-0 La gestión de la calidad en el sector salud no depende exclusivamente del Sistema Obligatorio de Garantía de la Calidad (SOGC). Su implementación se fortalece mediante la articulación con otras normas, modelos y sistemas de gestión que promueven la mejora continua, la estandarización de los procesos y el cumplimiento de requisitos técnicos aplicables a diferentes organizaciones.
          p En este contexto, las instituciones prestadoras de servicios de salud pueden integrar referentes nacionales e internacionales que contribuyen al fortalecimiento de sus procesos administrativos y asistenciales, favoreciendo una gestión más eficiente, segura y orientada a la satisfacción de las necesidades de las personas.
    p Entre los principales referentes se encuentran:
    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', alt='')
        .p-4.cajon.bg8
          h5 Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC)
          p Organismo Nacional de Normalización encargado de desarrollar normas técnicas que sirven como referente para diferentes sectores, incluido el sector salud.
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img8.png', alt='')
        .p-4.cajon.bg8
          h5 Organismo Nacional de Acreditación de Colombia (ONAC)
          p Entidad responsable de acreditar la competencia técnica de los organismos que realizan actividades de evaluación de la conformidad, garantizando la confiabilidad de sus resultados.
      
    p La articulación entre estos referentes y los sistemas de calidad aplicables al sector salud favorece la implementación de buenas prácticas organizacionales, el fortalecimiento de la cultura de calidad y el desarrollo de procesos orientados al mejoramiento continuo. Asimismo, proporciona herramientas que apoyan el cumplimiento de los estándares establecidos para la acreditación en salud y contribuyen al fortalecimiento de la confianza en los servicios prestados.
    p La siguiente tabla presenta algunos referentes y sistemas que contribuyen al fortalecimiento de la gestión de la calidad en el sector salud.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Referentes y sistemas de calidad aplicables al sector salud
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th Referente o sistema
                  th Aporte a la gestión de la calidad
              tbody
                tr(style="background-color: #F6F6F6;")
                  td ICONTEC
                  td Organismo Nacional de Normalización que elabora y adopta normas técnicas para diferentes sectores, incluido el sector salud.
                tr
                  td ONAC
                  td Organismo Nacional de Acreditación encargado de acreditar la competencia técnica de los organismos que realizan actividades de evaluación de la conformidad.
                tr(style="background-color: #F6F6F6;")
                  td Sistema Obligatorio de Garantía de la Calidad (SOGC)
                  td Establece los mecanismos para garantizar la calidad en la prestación de los servicios de salud.
                tr
                  td Sistema Único de Acreditación en Salud (SUA)
                  td Promueve el mejoramiento continuo mediante la evaluación del cumplimiento de estándares superiores de calidad.
    p La integración de estos referentes y sistemas fortalece la gestión de la calidad en el sector salud, al promover la mejora continua, el cumplimiento de los requisitos normativos y el desarrollo de procesos orientados a la excelencia en la prestación de los servicios de salud.
</template>

<script>
import img1 from '@/assets/curso/temas/tema2/img1.png'

export default {
  name: 'Tema2',
  data: () => ({
    img1,
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
