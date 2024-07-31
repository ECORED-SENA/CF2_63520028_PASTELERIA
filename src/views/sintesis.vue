<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.  

    .cont_sintesis.p-4.pb-5
      .col-xl-10.m-auto
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de preparaciones y usos de cremas en pastelería, que incluye tipos de cremas como crema chantilly, pastelera, inglesa y de mantequilla; sus usos en relleno, cobertura y decoración; equipos necesarios como balanza, batidora, bandeja para horno, espátulas, horno, licuadora, recipientes y rodillo; ingredientes comunes como crema de leche, azúcar, huevos y saborizantes; y técnicas de elaboración que abarcan batidos livianos y pesados, y decoraciones como pastillaje, ganache, brillo de chocolate y salsas de frutas.")
      .row.justify-content-center.mt-5
        .col-auto(data-aos="zoom-in")
          a.anexo.mb-5.bg-white(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank" style="box-shadow:0px 0px 25px rgba(0,0,0,.15);")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
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

<style lang="sass">
.cont_sintesis
  background: url(../assets/curso/sintesis1.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_sintesis
    background-size: cover !important
</style>
