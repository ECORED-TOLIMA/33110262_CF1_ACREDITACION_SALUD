<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    <ActividadController :cuestionario="cuestionario"/>
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos normativos y estructurales de la acreditación en salud',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los fundamentos normativos y estructurales de la acreditación en salud, mediante la identificación de los principales conceptos relacionados con la normatividad, el Subsistema Nacional de Calidad (SNC), el Sistema Obligatorio de Garantía de la Calidad (SOGC) y el Sistema Único de Acreditación en Salud (SUA).',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de la acreditación en salud?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los costos de los servicios de salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover el mejoramiento continuo de la calidad en la atención.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar el Sistema Obligatorio de Garantía de la Calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar únicamente la infraestructura hospitalaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La participación de una institución en el Sistema Único de Acreditación en Salud es:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Obligatoria para todas las IPS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Temporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Voluntaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusiva para hospitales públicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes normas organiza el Sistema General de Seguridad Social en Salud?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1751 de 2015.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 780 de 2016.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 100 de 1993.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Resolución 5095 de 2018.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La Ley 1751 de 2015 reconoce la salud como:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un derecho fundamental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un servicio opcional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un beneficio empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un servicio privado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El Subsistema Nacional de Calidad (SNC) tiene como finalidad:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar los hospitales públicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regular únicamente las EPS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar el Sistema General de Seguridad Social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer el marco general para promover la calidad en el país.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El Sistema Obligatorio de Garantía de la Calidad adapta los lineamientos del SNC al:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sector financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sector educativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sector salud.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sector industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es uno de los objetivos del SOGC?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar las auditorías institucionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promover la seguridad del paciente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de instituciones de salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la legislación vigente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál de los siguientes hace parte del SOGC?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema Único de Habilitación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sistema Nacional Ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema General de Regalías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema Integrado de Transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué componente del SOGC promueve el mejoramiento continuo mediante auditorías?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema Único de Habilitación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PAMEC.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sistema de Información para la Calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema Único de Acreditación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'El Sistema Único de Acreditación (SUA) forma parte del:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema Nacional de Ciencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema General de Participaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema Nacional Ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema Obligatorio de Garantía de la Calidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'El alcance del Sistema Único de Acreditación comprende principalmente:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la infraestructura física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La evaluación integral de procesos institucionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente la gestión financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente la contratación del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la primera etapa de la ruta general de acreditación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Otorgamiento de la acreditación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Autoevaluación institucional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'Los estándares de acreditación permiten:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaboración de planes de mejoramiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Modificación de la Constitución Política.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Creación de nuevas EPS.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Liquidación de instituciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes actividades hace parte de los procesos de acreditación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificación de la Constitución Política.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Creación de nuevas EPS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaboración de planes de mejoramiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Liquidación de instituciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes corresponde a una herramienta para la acreditación?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lista de verificación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Historia clínica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Factura electrónica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro civil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Los indicadores de calidad permiten:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar las auditorías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los procedimientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar la legislación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir el desempeño institucional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El Ministerio de Salud y Protección Social tiene como función principal:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Otorgar todas las acreditaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir políticas y lineamientos del Sistema Único de Acreditación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Certificar normas ISO.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar todas las IPS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las Instituciones Prestadoras de Servicios de Salud (IPS) participan en el proceso de acreditación de manera:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Obligatoria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aleatoria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Voluntaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Temporal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es uno de los principales beneficios de la acreditación en salud?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la seguridad del paciente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la calidad y el mejoramiento continuo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la participación del talento humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los estándares de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La articulación entre el SNC, el SOGC y el SUA busca principalmente:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar los trámites administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir el Sistema General de Seguridad Social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la cobertura en salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar la calidad y promover el mejoramiento continuo de los servicios de salud.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos de la acreditación en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
