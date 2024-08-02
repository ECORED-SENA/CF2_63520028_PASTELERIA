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
            .col-lg.mb-lg-5.ps-lg-4(data-aos="fade-up" style="place-self:end;")
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

    .col-xl-10.m-auto.mt-4
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Equipos
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidora industrial o manual
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátula de caucho
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Taza grande plástica o de acero en el caso de elaborarse con batidora manual
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz o colador
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/31.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Ingredientes
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Crema de leche
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Azúcar en polvo
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Sabor a vainilla (opcional)
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/32.png')
    
    .cont_1_4.mt-4
      .cont_1_5.ps-lg-5.pe-lg-5.p-4.p-lg-0
        .row
          .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
            figure.m-auto.col-8.col-md-5.col-lg-12
              img(src="@/assets/curso/tema1/34.png")
          .col-lg.mb-lg-5.ps-lg-4(data-aos="fade-up" style="place-self:end;")
            p.fw-bold.mb-0 Tenga en cuenta que:
            p Durante el programa de formación, la cantidad de ingredientes que se utilizarán en cualquier fórmula se dará en porcentaje.
            p #[strong Por ejemplo:] en la preparación de cremas, la base de cálculo será siempre la leche o crema de leche.
            ul.lista-ul.mt-3.ps-4.mb-0
              li.d-flex
                i.fas.fa-bread-slice(style="color:#1D3FBB;")
                div Porcentaje: proporción de un número que toma la referencia de 100. 
              li.d-flex.mb-0
                i.fas.fa-bread-slice(style="color:#1D3FBB;")
                div Por ejemplo el 10% es igual a 10/100.
      
      .row.mt-5
        .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
          p La siguiente ecuación se utiliza en la determinación del porcentaje de un ingrediente:
          .col-md-10.m-auto
            figure
              img(src="@/assets/curso/tema1/35.svg")
          p.mt-4 Continúe con la formulación de la crema #[em chantilly].
          .col-xl-9.m-auto.mt-4.col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Ingredientes y cantidades 
            .tabla-a.color-acento-contenido
              table
                thead
                  tr(style="background-color:#F9F7F4;")
                    th Ingredientes
                    th Cantidad
                tbody
                  tr.bg-white
                    td.p-3 Crema de leche
                    td.p-3 100 gramos
                  tr.bg-white
                    td.p-3 Azúcar en polvo
                    td.p-3 15 gramos
        .col-lg(data-aos="fade-left")
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/tema1/36.png")
      
      .col-xl-8.m-auto.mt-4.col-lg-10
        .cont_1_6.p-4
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-4.col-lg-12
                img(src="@/assets/curso/tema1/37.png")
            .col-lg(data-aos="fade-up" style="place-self:center;")
              p.fw-bold.mb-0(style="color:#77F0E2;") Recomendaciones:
              p.text-white Antes de comenzar el proceso se debe tener en cuenta que se va a utilizar:
              p.mb-0.text-white #[strong(style="color:#77F0E2 !important;") Una batidora industrial:] la velocidad a utilizar debe ser la segunda.
              p.mb-0.text-white #[strong(style="color:#77F0E2 !important;") Una batidora manual eléctrica:] utilice la velocidad cuatro.
              p.mb-0.text-white #[strong(style="color:#77F0E2 !important;") Una batidora manual:] debe ir de forma uniforme hasta tener la consistencia adecuada.
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/30.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
      
      p(data-aos="fade-left") La elaboración de la crema #[em Chantilly] es un proceso sencillo que requiere atención a los detalles y el uso de ingredientes adecuados. A continuación, se presentan los pasos esenciales para preparar esta deliciosa crema, ideal para decorar y acompañar una variedad de postres.
    
    .cont_1_7.mt-4.pt-4.pb-5
      .tarjeta.p-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Preparar la crema de leche
              p Coloque la crema de leche, previamente refrigerada, en la olla de la batidora o en un tazón de acero inoxidable o plástico, según sea el caso.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/39.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Añadir el azúcar en polvo
              p Añada el azúcar en polvo, previamente tamizado, sobre la crema de leche y mézclelo con una espátula de caucho para evitar que el azúcar se disperse al comenzar a batir.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/40.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Batir la mezcla
              p Bata la mezcla hasta que adquiera una consistencia firme y se adhiera al batidor.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/41.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Personalizar la crema
              p Se pueden agregar sabores adicionales al gusto, como vainilla o licor, para personalizar la crema #[em Chantilly].
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema1/42.png')
    
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema1/43.png")
      .col-lg-9(data-aos="fade-left")
        .row
          .col-lg.mb-4.mb-lg-0.pe-lg-0
            .p-4.d-flex.align-content-center.flex-wrap.h-100(style="background-color:#E8EBF8;")
              p.fw-bold Tenga en cuenta que: 
              p.mb-0 Evite batir en exceso la crema una vez haya alcanzado la consistencia adecuada para impedir la inversión de la emulsión y de esta manera dañarla la crema. Si la crema no se va a utilizar de inmediato debe llevarla a la nevera a temperatura  de 5 °C máximo 12 horas. 
          .col-lg-auto.ps-lg-0
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema1/44.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Crema pastelera
    
    p(data-aos="fade-right") La crema pastelera es una preparación básica y fundamental en la pastelería, conocida por su textura suave y cremosa. Se utiliza como relleno en una amplia variedad de productos de panadería y repostería, como tartas, pasteles, y más.

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_3.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-12
                img(src="@/assets/curso/tema1/45.png")
            .col-lg.mb-lg-5.ps-lg-4(data-aos="fade-up" style="place-self:end;")
              p.fw-bold(style="color:#F7C3EC;") ¿Para qué se usa?
              p.text-white.mb-0 La crema pastelera se utiliza como relleno en muchos productos de panadería y pastelería, como danesas, milhojas y pies. Es esencial que quede cremosa y sin grumos. Se puede elaborar neutra o con sabor a chocolate, café o vainilla, según el caso.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/46.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
      
    p(data-aos="fade-left") La preparación de la crema pastelera es un proceso esencial en la pastelería, que requiere precisión y atención para obtener una textura suave y sin grumos. 

    .col-xl-10.m-auto.mt-4
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Equipos
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Recipiente de acero
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátula de madera
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidor manual
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o medidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tazón
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/47.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 2.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3 Leche
                      td.p-3 100 mililitros
                    tr.bg-white
                      td.p-3 Azúcar corriente
                      td.p-3 20 gramos
                    tr.bg-white
                      td.p-3 Fécula
                      td.p-3 10 gramos
                    tr.bg-white
                      td.p-3 Margarina
                      td.p-3 10 gramos
                    tr.bg-white
                      td.p-3 Yemas
                      td.p-3 8
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/48.png')
    
    p.mt-4(data-aos="fade-right") Antes de iniciar la preparación verifique la disposición de los ingredientes:
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-9.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/49.png")
      .col-lg-8(data-aos="fade-left")
        .row
          .col-lg-3.mb-2
            .h-100.p-3.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;border-radius:10px;")
              p.mb-0.w-100 2/3 partes de leche
          .col-lg-3.mb-2
            .h-100.p-3.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;border-radius:10px;")
              p.mb-0.w-100 1/3 parte de leche
          .col-lg-3.mb-2
            .h-100.p-3.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;border-radius:10px;")
              p.mb-0.w-100 Yemas batidas
          .col-lg-3.mb-2
            .h-100.p-3.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;border-radius:10px;")
              p.mb-0.w-100 2/3 partes de azúcar
          .col-lg-3.mb-2
            .h-100.p-3.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;border-radius:10px;")
              p.mb-0.w-100 1/3 parte de azúcar
          .col-lg-3.mb-2
            .h-100.p-3.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;border-radius:10px;")
              p.mb-0.w-100 Toda la margarina
          .col-lg-3.mb-2
            .h-100.p-3.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;border-radius:10px;")
              p.mb-0.w-100 Toda la fécula
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
      
    p(data-aos="fade-left") A continuación, se detallan los pasos fundamentales para elaborar una crema pastelera perfecta.

    .cont_1_7.mt-4.pt-4.pb-5
      .col-xl-10.m-auto
        .tarjeta.p-4(style="background-color:#FEF8FC;")
          PasosB.color-acento-contenido
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Coloque 2/3 partes de la leche en un recipiente de acero, junto con 2/3 partes del azúcar y la totalidad de la margarina en trozos. Lleve a fuego medio hasta que hierva.
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/50.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p En otro recipiente, mezcle 1/3 parte de la leche, 1/3 parte del azúcar y la fécula con una espátula, asegurándose de que todos los ingredientes queden bien integrados. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/51.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Bata las yemas con un batidor manual en un recipiente aparte. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/52.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Cuando la mezcla del paso (1) haya llegado a ebullición, agregue los ingredientes del paso (2), revolviendo constantemente para evitar que se pegue al fondo. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/53.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Añada las yemas, previamente batidas, y continúe batiendo. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/54.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Siga revolviendo constantemente para evitar que la mezcla se pegue, hasta que la crema esté brillante y el batidor deje marcas en la crema. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/55.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Retire la crema del fuego y realice un choque térmico para evitar la proliferación de microorganismos. Inmediatamente después, pásela a la nevera. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/56.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p La crema está lista para ser utilizada. Bata con un batidor de mano hasta que alcance la consistencia deseada y pueda esparcirse fácilmente. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/57.png')
    
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_8.p-4
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-4.col-lg-12
                img(src="@/assets/curso/tema1/58.png")
            .col-lg(data-aos="fade-up" style="place-self:center;")
              p.fw-bold Tenga en cuenta que:
              p Si quiere, puede colocar el sabor que desee.
              p.fw-bold Observaciones
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div El tiempo de toda la preparación debe ser de 15 minutos mínimo, de comienzo a fin.
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div La leche puede ser líquida o en polvo.
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div La preparación puede utilizarse máximo 36 horas después de su elaboración.
      .col-lg-3(data-aos="fade-left")
        figure.m-auto.col-6.col-md-5.col-lg-12
          img(src="@/assets/curso/tema1/59.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3 Crema inglesa
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La crema inglesa, también conocida como salsa inglesa, es una preparación líquida y suave, utilizada principalmente como salsa para postres. Se caracteriza por su textura fina y sabor delicado, generalmente aromatizada con vainilla.
        .col-lg-10.m-auto.mt-4
          .cont_1_3.ps-lg-5.pe-lg-5.p-4.p-lg-0
            .row
              .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
                figure.m-auto.col-8.col-md-5.col-lg-12
                  img(src="@/assets/curso/tema1/60.png")
              .col-lg.ps-lg-4(data-aos="fade-up" style="place-self:center;")
                p.fw-bold.mb-0(style="color:#F7C3EC;") ¿Para qué se usa?
                p.text-white.mb-0 En el baño de pudines, tortas y postres.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/61.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    .col-xl-10.m-auto.mt-4
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p El equipo para la preparación es: 
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Probeta o vaso medidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Cacerola grande
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tazón de acero
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidor
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátula de madera
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/62.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p Los ingredientes son:  
              .titulo-sexto.color-acento-contenido
                h5 Tabla 3.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3 Leche
                      td.p-3 100 mililitros
                    tr.bg-white
                      td.p-3 Azúcar
                      td.p-3 25 gramos
                    tr.bg-white
                      td.p-3 Yemas
                      td.p-3 16 yemas
                    tr.bg-white
                      td.p-3 Vainilla
                      td.p-3 1
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/63.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") La preparación de la crema pastelera requiere atención y precisión para lograr una textura suave y cremosa. A continuación, se detallan los pasos esenciales para su correcta elaboración, asegurando una crema sin grumos y con el sabor perfecto.

    .cont_1_7.mt-4.pt-4.pb-5
      .col-xl-10.m-auto
        .tarjeta.p-4(style="background-color:#FEF8FC;")
          PasosB.color-acento-contenido
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 Calentar la leche
                p Caliente la leche a fuego lento con la vainilla, sin dejar que hierva. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/64.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5  Batir las yemas
                p Bata las yemas con el azúcar. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/65.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 Agregar la leche
                p Agregue la leche caliente a las yemas en baño maría. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/66.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 Revolver constantemente
                p Siga revolviendo constantemente para evitar que la mezcla se corte. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/67.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 Controlar la temperatura
                p Controle la temperatura con un termómetro hasta llegar a 80 °C, evitando que hierva. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/68.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 Enfriar la mezcla
                p Enfríe la mezcla colocando el tazón sobre hielo o agua fría y revuelva para que se enfríe de manera uniforme. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/69.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h5 Conservación
                p Conservar entre 2 ºC y 4 ºC. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/70.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_4 1.4 Crema de mantequilla
    
    .cont_1_9
      p(data-aos="fade-right") La crema de mantequilla es una preparación básica en la repostería, utilizada principalmente para cubrir y decorar tortas, #[em cupcakes], y otros pasteles. Es conocida por su textura suave y cremosa, así como por su versatilidad para ser saborizada y coloreada.
      .row.mt-4
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .cont_1_3.ps-lg-5.pe-lg-5.p-4.p-lg-0
            .row
              .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
                figure.m-auto.col-8.col-md-5.col-lg-12
                  img(src="@/assets/curso/tema1/72.png")
              .col-lg.mb-lg-5.ps-lg-4(data-aos="fade-up" style="place-self:end;")
                p.fw-bold(style="color:#F7C3EC;") ¿Para qué se usa?
                p.text-white.mb-0 La crema pastelera se utiliza como relleno en muchos productos de panadería y pastelería, como danesas, milhojas y pies. Es esencial que quede cremosa y sin grumos. Se puede elaborar neutra o con sabor a chocolate, café o vainilla, según el caso.
          .p-4.bg-white.mt-4(style="border:1px #1D3FBB solid;border-radius:10px;")
            p.fw-bold Tenga en cuenta que
            p.mb-0 En la preparación de crema de mantequilla existen bastantes variaciones, éstas se pueden saborizar con el fin de modificar el sabor.
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-5.col-md-5.col-lg-12
            img(src="@/assets/curso/tema1/73.png")
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/30.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
      
      p(data-aos="fade-left") Los ingredientes para la preparación son: 

      .row.mt-4
        .col-lg-3.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-5.col-lg-12
            img(src="@/assets/curso/tema1/74.png")
        .col-lg-9(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Ingredientes y cantidades 
          .tabla-a.color-acento-contenido
            table
              thead
                tr(style="background-color:#F9F7F4;")
                  th Ingredientes
                  th Cantidad
              tbody
                tr.bg-white
                  td.p-3 Mantequilla o margarina especial
                  td.p-3 100 kilogramos
                tr.bg-white
                  td.p-3 Azúcar en polvo
                  td.p-3 50 gramos
                tr.bg-white
                  td.p-3 Agua (opcional)
                  td.p-3 Al gusto
                tr.bg-white
                  td.p-3 Sabor (esencias, licores, zumos de fruta, polvo de frutas secas)
                  td.p-3 Al gusto
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") La preparación de una crema suave y homogénea con margarina o mantequilla es esencial en la pastelería. A continuación, se detallan los pasos para lograr una mezcla perfecta, evitando que se pegue y obteniendo la textura deseada.

    .row.mt-5.justify-content-center
      .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-5.cont_1_10.text-center(style="background-color:#A4B2E4;border:1px #1D3FBB solid;border-radius:5px;")
          figure
            img(src="@/assets/curso/tema1/75.svg" style="max-width:250px;display:inline;")
          h5.mt-3 Colocar ingredientes
          p Coloque en la olla de la batidora la margarina especial o la mantequilla junto con el azúcar previamente tamizado. 
      .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-5.cont_1_10.text-center(style="background-color:#A4B2E4;border:1px #1D3FBB solid;border-radius:5px;")
          figure
            img(src="@/assets/curso/tema1/76.svg" style="max-width:250px;display:inline;")
          h5.mt-3 Mezclar
          p Mezcle con la paleta hasta que la mezcla quede bien suave. Evite limpiar continuamente las paredes de la olla de la batidora con la espátula de caucho para que la margarina o mantequilla no se quede pegada.
      .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4.p-lg-5.cont_1_10.text-center(style="background-color:#A4B2E4;border:1px #1D3FBB solid;border-radius:5px;")
          figure
            img(src="@/assets/curso/tema1/77.svg" style="max-width:250px;display:inline;")
          h5.mt-3 Agregar color y sabor
          p Cuando la crema esté suave, agregue el color y el sabor, si es necesario. Evite agregar agua, ya que no es necesaria y puede alterar la consistencia. 
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema1/78.png")
      .col-lg-8(data-aos="fade-left")
        p.fw-bold Observaciones:
        p A continuación, se presentan las instrucciones detalladas para su preparación y algunas observaciones para personalizarla según sus preferencias.
        .p-3(style="border:1px #E2DACC solid;border-radius:20px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/79.png")
            .col(style="place-self:center;")
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Esta preparación se puede adicionar con sabor a café instantáneo previamente tamizado o chocolate. ¡Es muy sencillo!
                li.d-flex.mb-1
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Agregue café instantáneo o cocoa en una proporción del 5% o más de los ingredientes a la fórmula anterior.
                li.d-flex.mb-1
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div La adición de yemas es opcional; use 4 unidades por cada kilogramo de mantequilla.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_5 1.5 Cremas industriales
    
    p(data-aos="fade-right") Las cremas industriales son productos desarrollados para facilitar la labor en la pastelería y repostería, alargando la vida útil de las preparaciones y reduciendo costos. Estas cremas están formuladas para mantener la consistencia y el sabor adecuados para su uso en una variedad de aplicaciones, como rellenos y decoraciones.

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_3.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-12
                img(src="@/assets/curso/tema1/80.png")
            .col-lg.mb-lg-5.ps-lg-4(data-aos="fade-up" style="place-self:end;")
              p.fw-bold(style="color:#F7C3EC;") ¿Para qué sirve?
              p.text-white.mb-0 La crema de margarina o mantequilla prolonga la vida útil del producto y facilita su manejo. Cada fabricante, según su producto, indica las diferentes formas de manejo y proceso del mismo.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-5.col-md-5.col-lg-12
          img(src="@/assets/curso/tema1/81.png")
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src="@/assets/curso/tema1/82.png")
          .col-lg.ps-lg-0
            .h-100.d-flex.align-content-center.p-4.flex-wrap(style="background-color:#E8EBF8;")
              p.fw-bold Para profundizar
              p.mb-0 No olvide participar en el foro de esta semana, donde encontrará información sobre las diferentes cremas básicas y cupcakes. Además, podrá intercambiar sus experiencias en la elaboración de estos productos.
      .col-lg-3(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/83.png")





               



      
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
