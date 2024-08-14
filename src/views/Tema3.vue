<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Decoración 
    
    .mt-4.p-4.p-lg-0(style="background-color:#E8EBF8;" data-aos="zoom-in")
      .row
        .col-auto.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema3/1.png")
        .col.pe-lg-5(style="place-self:center;")
          p.mb-0 La decoración en pastelería es un arte que requiere precisión, creatividad y el uso de técnicas especializadas. Desde el pastillaje para crear piezas estructurales hasta la ganache para cubrir pasteles, cada técnica aporta un toque único y profesional a los postres. En este apartado, exploraremos diversas técnicas avanzadas de decoración, incluyendo el pastillaje para figuras decorativas, la cubierta de pastillaje para ponques  de ceremonia, el brillo de chocolate, la ganache y las salsas de frutas. Cada método se detallará con los equipos necesarios, ingredientes y pasos de elaboración para asegurar resultados impecables y deliciosos. 
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1	Pastillaje para piezas fuertes y figuras decorativas 

    .cont_3_1.pb-5
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/3.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 El pastillaje es una mezcla de azúcar y otros ingredientes que se utiliza en repostería para crear piezas decorativas sólidas y estructurales. Es ideal para hacer figuras detalladas, estructuras, y otros adornos que necesitan mantenerse firmes y resistentes. 
      
      .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/30.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
      
      .col-xl-10.m-auto
        TabsC.color-acento-botones
          .py-3.py-md-4(titulo="Equipos")
            .row.col-xl-11.m-auto.pt-4.pb-4
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p El equipo necesario es:
                ul.lista-ul.mt-3
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Bandeja para horno
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Balanza
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Batidora industrial o manual
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Espátulas de caucho
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Horno
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Molde siliconado
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Tazones plásticos
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Tamiz
              .col-lg-5
                figure.m-auto.col-10.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/4.png')
          .py-3.py-md-4(titulo="Ingredientes")
            .row.col-xl-11.m-auto.pt-4.pb-4
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 11.
                  span Ingredientes y cantidades 
                .tabla-a.color-acento-contenido
                  table
                    thead
                      tr(style="background-color:#F9F7F4;")
                        th Ingredientes
                        th Cantidad
                    tbody
                      tr.bg-white
                        td.p-3.text-center Polvo para hornear
                        td.p-3.text-center 5 gramos
                      tr.bg-white
                        td.p-3.text-center Vainilla
                        td.p-3.text-center Cantidad necesaria
                      tr.bg-white
                        td.p-3.text-center Color caramelo
                        td.p-3.text-center Cantidad necesaria
                      tr.bg-white
                        td.p-3.text-center Azúcar tamizada
                        td.p-3.text-center 1 gramos
                      tr.bg-white
                        td.p-3.text-center Fécula
                        td.p-3.text-center 100 gramos
                      tr.bg-white
                        td.p-3.text-center Gelatina sin sabor
                        td.p-3.text-center 20 gramos
                      tr.bg-white
                        td.p-3.text-center Vinagre blanco
                        td.p-3.text-center 180 centímetros cúbicos
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-6.col-md-5.col-lg-12
                  img(src='@/assets/curso/tema3/5.png')
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/30.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
      
      p(data-aos="fade-left") El proceso de elaboración es:  

      .col-xl-10.m-auto.mt-4
        .tarjeta.p-4.mt-4(style="background-color:#FEF8FC;")
          PasosB.color-acento-contenido
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p  Mezcle azúcar con la fécula. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema3/6.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Aparte lleve al fuego la gelatina con el vinagre previamente hidratados.   
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema3/7.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Retire del fuego y mezcle con la fécula y el azúcar trabajando inmediatamente y conserve al medio ambiente.   
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema3/8.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Moldee al gusto en moldes de silicona impregnados de fécula.   
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema3/9.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Previamente retire y ponga a secar por 24 horas. 
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema3/10.png')
            .row.col-xl-11.m-auto(titulo="Paso")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                p Coloque las piezas sobre tablas de madera rociada con fécula previamente para evitar que se tuerza el pastillaje. Se puede ligar con un papel lija muy fino para perfeccionar el trabajo.   
              .col-lg-5
                figure.m-auto.col-10.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema3/11.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Cubierta de pastillaje para #[em cake] de ceremonia 

    .row
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/12.png")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 La cubierta de pastillaje para #[em cake] de ceremonia es una técnica de decoración que utiliza una mezcla de azúcar, gelatina, y otros ingredientes para crear una capa lisa y firme que recubre el pastel, proporcionando una base perfecta para decoraciones adicionales como flores de azúcar, figuras, y glaseados detallados. 
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    .col-xl-10.m-auto
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p El equipo necesario es:
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Bandeja para horno
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidora industrial o manual
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátulas de caucho
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Horno
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Molde siliconado
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tazones plásticos
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/13.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 12.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center Agua
                      td.p-3.text-center 250 centímetros cúbicos
                    tr.bg-white
                      td.p-3.text-center Azúcar refinada
                      td.p-3.text-center 200 gramos
                    tr.bg-white
                      td.p-3.text-center Glucosa
                      td.p-3.text-center 200 gramos
                    tr.bg-white
                      td.p-3.text-center Gelatina sin sabor
                      td.p-3.text-center 15 gramos
                    tr.bg-white
                      td.p-3.text-center Glicerina
                      td.p-3.text-center 30 gramos
                    tr.bg-white
                      td.p-3.text-center Manteca de cacao
                      td.p-3.text-center 20 gramos
                    tr.bg-white
                      td.p-3.text-center Azúcar en polvo tamizada
                      td.p-3.text-center 2000 gramos
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema3/14.png')
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") El proceso de elaboración es:

    .row.mt-4
      .col-lg-8(data-aos="fade-right")
        .row
          .col-md-6.mb-4(data-aos="fade-up")
            .h-100.p-4.cont_3_2.text-center(style="background-color:#A4B2E4;border:2px #1D3FBB solid;border-radius:6px;")
              figure
                img(src="@/assets/curso/tema3/15.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 1. En la taza de cobre cocine azúcar y agua a 102 grados centígrados. 
          .col-md-6.mb-4(data-aos="fade-up")
            .h-100.p-4.cont_3_2.text-center(style="background-color:#A4B2E4;border:2px #1D3FBB solid;border-radius:6px;")
              figure
                img(src="@/assets/curso/tema3/16.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 2. Agregue la glucosa y lleve a 106 grados centígrados. 
          .col-md-6.mb-4(data-aos="fade-up")
            .h-100.p-4.cont_3_2.text-center(style="background-color:#A4B2E4;border:2px #1D3FBB solid;border-radius:6px;")
              figure
                img(src="@/assets/curso/tema3/17.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 3. Retire del fuego y agregue la gelatina previamente hidratada en agua fría. Mezcle con batidor de mano, de inmediato agregue la glicerina y la manteca de cacao. 
          .col-md-6.mb-4(data-aos="fade-up")
            .h-100.p-4.cont_3_2.text-center(style="background-color:#A4B2E4;border:2px #1D3FBB solid;border-radius:6px;")
              figure
                img(src="@/assets/curso/tema3/18.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 4. A la mezcla incorpore azúcar en polvo hasta obtener una masa suave y homogénea, extienda con rodillo y tape el ponqué previamente cubierto con merengue italiano para que se fije la cubierta. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/19.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3 Brillo de chocolate 
    
    p(data-aos="fade-left") El brillo de chocolate es una cobertura utilizada en pastelería para dar a los postres un acabado brillante y liso. Se utiliza comúnmente para cubrir tortas, pasteles, y otros postres, proporcionando un aspecto profesional y apetitoso. 
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    .col-xl-10.m-auto
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p El equipo necesario es:
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Bandeja para horno
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidora industrial o manual
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátulas de caucho
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Horno
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Molde siliconado
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tazones plásticos
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/20.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 13.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center Azúcar refinada
                      td.p-3.text-center 200 gramos
                    tr.bg-white
                      td.p-3.text-center Agua
                      td.p-3.text-center 200 centímetros cúbicos
                    tr.bg-white
                      td.p-3.text-center Glucosa
                      td.p-3.text-center 150 gramos
                    tr.bg-white
                      td.p-3.text-center Crema de leche
                      td.p-3.text-center 700 gramos
                    tr.bg-white
                      td.p-3.text-center Cobertura de chocolate semi amargo
                      td.p-3.text-center 1100 gramos
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema3/21.png')
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") El proceso de elaboración es:

    .row.mt-4
      .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-5.col-md-3.col-lg-12
          img(src="@/assets/curso/tema3/22.svg")
      .col-lg(data-aos="fade-left")
        .row
          .col-lg-4.mb-4.col-md-6(data-aos="zoom-in")
            .h-100.p-3.d-flex.align-content-center(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema3/23.svg")
                .col(style="place-self:center;")
                  p.mb-0 1. Hierva el agua y el azúcar.
          .col-lg-4.mb-4.col-md-6(data-aos="zoom-in")
            .h-100.p-3.d-flex.align-content-center(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema3/24.svg")
                .col(style="place-self:center;")
                  p.mb-0 2. Agregue la glucosa.
          .col-lg-4.mb-4.col-md-6(data-aos="zoom-in")
            .h-100.p-3.d-flex.align-content-center(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema3/25.svg")
                .col(style="place-self:center;")
                  p.mb-0 3. Adicione la crema de leche y deje hervir nuevamente, cocine a fuego lento, poco y retire del fuego.
          .col-lg-4.mb-4.col-md-6(data-aos="zoom-in")
            .h-100.p-3.d-flex.align-content-center(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema3/26.svg")
                .col(style="place-self:center;")
                  p.mb-0 4. Agregue la mezcla a la cobertura.
          .col-lg-4.mb-4.col-md-6(data-aos="zoom-in")
            .h-100.p-3.d-flex.align-content-center(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema3/27.svg")
                .col(style="place-self:center;")
                  p.mb-0 5. Mezcle con un batidor hasta obtener una mezcla homogénea brillante.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_4 3.4 Cubierta #[em ganache]
    
    p(data-aos="fade-left") La #[em ganache] es una mezcla de crema de leche y chocolate que se utiliza en pastelería para cubrir, rellenar y decorar tortas, pasteles y otros postres. Es conocida por su textura suave y brillante, así como por su sabor rico y cremoso. 

    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    .col-xl-10.m-auto
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p El equipo necesario es:
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Bandeja para horno
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Batidora industrial o manual
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátulas de caucho
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Horno
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Molde siliconado
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tazones plásticos
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/28.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 14.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center Crema de leche 34 %
                      td.p-3.text-center 1 kilo
                    tr.bg-white
                      td.p-3.text-center Sal
                      td.p-3.text-center 1 gramo
                    tr.bg-white
                      td.p-3.text-center Cobertura de chocolate 65 %
                      td.p-3.text-center 1 kilo
                    tr.bg-white
                      td.p-3.text-center Licor de naranja 70 %
                      td.p-3.text-center 60 centímetros cúbicos
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema3/29.png')
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") El proceso de elaboración es:

    .col-xl-10.m-auto.mt-4
      .p-4.p-lg-3(style="background-color:#FEF3FB;border-radius:10px;")
        .row
          .col-lg-7.mb-4.mb-lg-0.ps-lg-5(data-aos="fade-down" style="place-self:center;")
            ol.lista-ol--cuadro.mb-0
              li.d-flex.mb-3
                .lista-ol--cuadro__vineta(style="background-color:#F7C3EC;")
                  span.fw-bold(style="color:#12263F;") 1
                div Ponga a hervir la crema de leche junto con la sal. 
              li.d-flex.mb-3
                .lista-ol--cuadro__vineta(style="background-color:#F7C3EC;")
                  span.fw-bold(style="color:#12263F;") 2
                div Retire del fuego y agregue al chocolate mezclar hasta que funda. 
              li.d-flex.mb-3
                .lista-ol--cuadro__vineta(style="background-color:#F7C3EC;")
                  span.fw-bold(style="color:#12263F;") 3
                div Adicione el licor de naranja cuando la mezcla baje a 50 °C. 
              li.d-flex.mb-0
                .lista-ol--cuadro__vineta(style="background-color:#F7C3EC;")
                  span.fw-bold(style="color:#12263F;") 4
                div Repose 24 horas y utilice. 
          .col-lg-5(data-aos="fade-up")
            figure.m-auto.col-7.col-md-6.col-lg-12
              img(src="@/assets/curso/tema3/30.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_5 3.5 Salsa de frutas
    
    p(data-aos="fade-left") Las salsas son la mezcla de agua concentrada, fruta y azúcar que poseen una consistencia determinada. 

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_3.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-12
                img(src="@/assets/curso/tema3/31.png")
            .col-lg.mb-lg-5.ps-lg-4(data-aos="fade-up" style="place-self:end;")
              p.fw-bold(style="color:#F7C3EC;") ¿Para qué sirven?
              p.text-white.mb-0 En el consumo ya sean solas, y/o mezcladas luego con otros ingredientes para obtener varios productos que pueden ser de relleno, como opción adicional de acuerdo a las necesidades del pastelero. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema3/32.png")
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    .col-xl-10.m-auto
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Equipos")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p El equipo necesario es:
              ul.lista-ul.mt-3
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Balanza
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tazón acero inoxidable
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Espátula plástica
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Licuadora (opcional)
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/33.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 15.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center Pulpa de frutas
                      td.p-3.text-center 100 gramos
                    tr.bg-white
                      td.p-3.text-center Azúcar
                      td.p-3.text-center 50 gramos
                    tr.bg-white
                      td.p-3.text-center Agua (opcional)
                      td.p-3.text-center 50 mililitros
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema3/34.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    .cont_3_3
      p(data-aos="fade-right") El proceso de elaboración es:

      .col-xl-10.m-auto.mt-4
        .p-4.p-lg-3(style="background-color:#F7C3EC;border-radius:10px;")
          .row
            .col-lg-7.mb-4.mb-lg-0.ps-lg-5(data-aos="fade-down" style="place-self:center;")
              ol.lista-ol--cuadro.mb-0
                li.d-flex.mb-3
                  .lista-ol--cuadro__vineta.bg-white
                    span.fw-bold(style="color:#12263F;") 1
                  div Coloque en un tazón el zumo de frutas o la pulpa, el azúcar y el agua si es necesario.
                li.d-flex.mb-3
                  .lista-ol--cuadro__vineta.bg-white
                    span.fw-bold(style="color:#12263F;") 2
                  div Lleve a ebullición y concentre o espese a la firmeza deseada revolviendo continuamente para evitar que se queme.
                li.d-flex.mb-0
                  .lista-ol--cuadro__vineta.bg-white
                    span.fw-bold(style="color:#12263F;") 3
                  div Retire del fuego y pase por el tamiz, según la aplicación que se le vaya a dar o gusto personal.
            .col-lg-5(data-aos="fade-up")
              figure.m-auto.col-7.col-md-6.col-lg-12
                img(src="@/assets/curso/tema3/36.png")
      
      p.mt-4(data-aos="fade-right") A continuación, se presentan recomendaciones sobre cómo conservar estas preparaciones y algunas aplicaciones sencillas para mejorar sus habilidades en la pastelería.
      .row.mt-4.justify-content-center
        .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.text-center.p-4.p-lg-5(style="background-color:#C8F9F3;border-radius:6px;")
            figure
              img(src="@/assets/curso/tema3/37.png" style="max-width:100px;display:inline;")
            h4.mt-3 Conservación
            p.mb-0 Si no se usa de inmediato, las preparaciones pueden llevarse a refrigeración durante 8 días o a congelación por más tiempo.
        .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.text-center.p-4.p-lg-5(style="background-color:#C8F9F3;border-radius:6px;")
            figure
              img(src="@/assets/curso/tema3/38.png" style="max-width:100px;display:inline;")
            h4.mt-3 Algunas aplicaciones
            p.mb-0 Después de aprender la preparación de diversas cremas y salsas, aplique estos conocimientos en preparaciones sencillas para afianzarlos.
        .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.text-center.p-4.p-lg-5(style="background-color:#C8F9F3;border-radius:6px;")
            figure
              img(src="@/assets/curso/tema3/39.png" style="max-width:100px;display:inline;")
            h4.mt-3 Crema #[em chantilly] con frutas 
            p.mb-0 Para elaborar la crema #[em chantilly] y darle un uso apropiado, mezcle con fresas frescas o con la salsa de fresas, u otra fruta o mezcla de ellas.
        .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.text-center.p-4.p-lg-5(style="background-color:#C8F9F3;border-radius:6px;")
            figure
              img(src="@/assets/curso/tema3/40.png" style="max-width:100px;display:inline;")
            h4.mt-3 Tenga en cuenta que 
            p.mb-0 Cuando utilice frutas con gran cantidad de ácidos, es recomendable elaborar primero una salsa para evitar que la crema se dañe. Por ejemplo, si desea hacer una crema #[em chantilly] con piña (una fruta muy ácida), debe elaborar primero la salsa de piña y después agregar esta a la crema. 
            







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
