<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
            figure.m-auto.col-8.col-md-6.col-lg-12
              img(src="@/assets/curso/intro1.png")
          .col-lg.ps-lg-0
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;")
              p.mb-0 Las cremas en pastelería son preparaciones fundamentales que enriquecen una amplia gama de postres y productos de panadería. Estas mezclas, que combinan ingredientes básicos como crema de leche, azúcar y huevos, se utilizan tanto para rellenar como para cubrir y decorar dulces. La versatilidad de las cremas permite que se adapten a diferentes consistencias y sabores, lo que las hace esenciales en la repostería. 
        p.mt-4 En este componente se detallan las preparaciones y usos de diversas cremas, incluidas la crema #[em chantilly], la crema pastelera, la crema inglesa y la crema de mantequilla. Cada una de estas cremas tiene métodos de elaboración específicos y aplicaciones particulares que contribuyen a la creación de productos de pastelería únicos. Además, se describen los equipos e ingredientes necesarios para su correcta preparación, asegurando resultados óptimos. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/intro2.png")
    
    .mt-4.p-4.p-lg-0(style="background-color:#FCE7F7;" data-aos="zoom-in")
      .row
        .col-auto.d-none.d-lg-block
          figure
            img(src="@/assets/curso/intro3.png")
        .col.pe-lg-5(style="place-self:center;")
          p.mb-0 Asimismo, se exploran otras técnicas de pastelería como la elaboración de batidos livianos y pesados, y la decoración con pastillaje, ganache y brillo de chocolate. Estas técnicas complementan el uso de las cremas, permitiendo crear postres visualmente atractivos y deliciosos. El dominio de estas preparaciones es crucial para cualquier profesional de la pastelería que desee ofrecer productos de alta calidad y sabor. 




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
