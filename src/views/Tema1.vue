<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Cremas

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img.d-flex.align-content-center.flex-wrap(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
        figure.text-center
          img(src="@/assets/curso/tema1/2.png" style="max-width:220px;display:inline;")
      .bloque-texto-g__texto.p-4
        p.mb-0 Las cremas en pastelería son preparaciones a base de ingredientes como crema de leche, azúcar, huevos, y otros agentes espesantes o aromatizantes, que se utilizan como relleno, cobertura o acompañamiento en una variedad de postres y productos de panadería. Estas cremas pueden tener diferentes consistencias y sabores según su formulación y uso específico. Algunos ejemplos incluyen la crema #[em chantilly], la crema pastelera, la crema inglesa, y la crema de mantequilla. Cada tipo de crema tiene su método de preparación y aplicación particular, lo que las hace esenciales en la creación y decoración de postres y productos de repostería.

    p.mt-4(data-aos="fade-right") Para las preparaciones que se presentarán a continuación, se necesitarán los siguientes utensilios: 

    .col-xl-10.m-auto.mt-4
      .row
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Balanza
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/4.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Batidora industrial
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/5.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Bandeja para horno
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/6.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Batidora manual
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/7.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Cacerola grande
      .row
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/8.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Espátula de madera
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/9.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Espátula de caucho
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/10.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Espátula de plástico
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/11.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Horno
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/12.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Material de silicona
      .row
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/13.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Licuadora
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/14.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Recipiente de acero
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/15.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Taza de acero
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/16.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Rodillo
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/17.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Recipiente para baño María
      .row
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/18.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Papel siliconado
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/19.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Pote de cobre
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/20.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Tazón
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/21.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Probeta o vaso medidor
        .col-lg.mb-4.col-md-6(data-aos="zoom-in")
          .h-100.p-3.text-center.cont_1_1(style="background-color:#E2DACC;border-radius:15px;")
            figure.text-center
              img(src="@/assets/curso/tema1/22.png" style="max-width:150px;display:inline;")
            p.mb-0.mt-3 Tamiz
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Crema #[em chantilly]
    
    .cont_1_2
      p(data-aos="fade-right") La crema #[em chantilly] es una preparación dulce que se elabora a partir de crema de leche y azúcar en polvo. Se caracteriza por su textura suave y esponjosa, resultado de batir la crema de leche hasta alcanzar una consistencia firme y aireada. Se le puede añadir sabor a vainilla u otros aromatizantes de manera opcional.

      .col-xl-8.m-auto.mt-4.col-md-10
        .cont_1_3.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-12
                img(src="@/assets/curso/tema1/25.png")
            .col-lg.mb-lg-5.ps-lg-4.ps-xl-5(data-aos="fade-up" style="place-self:end;")
              p.fw-bold(style="color:#F7C3EC;") ¿Qué debe tener en cuenta para su elaboración?
              p.text-white.mb-0 Primero, escoja la crema de leche adecuada. La crema de leche se encuentra en la leche cruda y se separa de esta por medio de una descremadora a nivel industrial o de una cuchara a nivel artesanal.
      
      p.fw-bold.mt-4(data-aos="fade-right") Específicamente, debe ser:
      
      ul.lista-ul.mt-3.ps-4
        li.d-flex
          i.fas.fa-bread-slice(style="color:#1D3FBB;")
          div Pasteurizada.
        li.d-flex
          i.fas.fa-bread-slice(style="color:#1D3FBB;")
          div Tener entre el 30% y el 42% de contenido de grasa, para que tenga la consistencia adecuada requerida en pastelería.
      
      p.mt-4(data-aos="fade-left") Otras cremas de leche tienen menor contenido de grasa; por este motivo, no sirven. Así mismo, algunas tienen un mayor contenido de grasa, lo que también impide su uso adecuado.

      .col-xl-10.m-auto.mt-5
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.m-auto.col-5.col-md-4.col-lg-12
              img(src="@/assets/curso/tema1/26.png")
          .col-lg-8(data-aos="fade-left")
            .p-3.mb-3(style="background-color:#E2DACC;border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema1/27.png")
                .col(style="place-self:center;")
                  p.fw-bold.mb-1 ¿Cómo se mide la cantidad de grasa en las cremas?
                  p.mb-0 Revise la etiqueta del producto que aparece en los empaques, donde se describe dicha información.
            .p-3.mb-3(style="background-color:#E2DACC;border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema1/28.png")
                .col(style="place-self:center;")
                  p.fw-bold.mb-1 Importante
                  p.mb-0 La crema #[em chantilly] únicamente se elabora con crema de leche.
            .p-3.mb-3(style="background-color:#E2DACC;border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema1/29.png")
                .col(style="place-self:center;")
                  p.fw-bold.mb-1 ¿Para qué se usa?
                  p.mb-0 La crema #[em chantilly] se usa en la decoración, relleno y acompañamiento de frutas frescas. Se consume fresca y debe mantenerse en refrigeración.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    p(data-aos="fade-left") Para la preparación se debe tener lo siguiente: 




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
