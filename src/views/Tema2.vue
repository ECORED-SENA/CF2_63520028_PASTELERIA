<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Batidos livianos y pesados
    
    .cont_2_1
      p(data-aos="fade-right") En la pastelería, los batidos se clasifican en dos tipos principales: batidos livianos y batidos pesados. Cada tipo tiene características y usos específicos, y su preparación varía según la técnica y los ingredientes utilizados.

      .col-xl-10.m-auto.mt-4
        .row
          .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
            .p-4.p-md-3.mb-4(style="background-color:#C8F9F3;border-radius:12px;")
              .row
                .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                  figure.m-auto.col-7.col-md-12
                    img(src="@/assets/curso/tema2/1.png")
                .col-md(style="place-self:center;")
                  p.fw-bold Batidos livianos
                  p.mb-0 Los batidos livianos son mezclas que incorporan una gran cantidad de aire, resultando en una textura ligera y esponjosa. Se utilizan para preparaciones como bizcochuelos y #[em biscuits].
            .p-4.p-md-3(style="background-color:#D1D8F1;border-radius:12px;")
              .row
                .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                  figure.m-auto.col-7.col-md-12
                    img(src="@/assets/curso/tema2/2.png")
                .col-md(style="place-self:center;")
                  p.fw-bold Batidos pesados
                  p.mb-0 Los batidos pesados son mezclas con un alto contenido de materia grasa y menor incorporación de aire, lo que les confiere una textura densa y rica. Se utilizan para preparaciones como ponqués, #[em brownies] y #[em muffins].
          .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
            figure.m-auto.col-5.col-md-3.col-lg-12
              img(src="@/assets/curso/tema2/3.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Bizcochuelo o #[em biscuit]
    
    p(data-aos="fade-right") El bizcochuelo o #[em biscuit] es un tipo de batido liviano caracterizado por su textura esponjosa y aireada, resultante de la incorporación de aire en la mezcla de huevos y azúcar. Es una base fundamental en la pastelería para la elaboración de tortas y pasteles ligeros.

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
              p El equipo que se necesita es:
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
                  div Tazones plásticos
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/4.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 5.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3 Huevos
                      td.p-3 150
                    tr.bg-white
                      td.p-3 Azúcar común
                      td.p-3 110
                    tr.bg-white
                      td.p-3 Harina tamizada
                      td.p-3 110
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/5.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    .row
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4.p-md-3(style="background-color:#E4FCF9;border-radius:12px;")
          .row
            .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
              figure.m-auto.col-7.col-md-12
                img(src="@/assets/curso/tema2/6.png")
            .col-md(style="place-self:center;")
              p.mb-0 1. Bata enérgicamente de manera manual o con batidora los huevos y el azúcar hasta triplicar su volumen, adicione la harina de trigo tamizada e incorpore con una espátula de caucho.
      .col-lg(data-aos="zoom-in")
        .p-4.p-md-3(style="background-color:#D1D8F1;border-radius:12px;")
          .row
            .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
              figure.m-auto.col-7.col-md-12
                img(src="@/assets/curso/tema2/7.png")
            .col-md(style="place-self:center;")
              p.mb-0 2. Lleve a una bandeja de horno, previamente engrasada y enharinada o usando un papel o tapete siliconado para evitar que se pegue.
    
    .col-xl-10.m-auto.mt-5
      .p-4.p-lg-3(style="background-color:#F3F0EA;border-radius:11px;" data-aos="fade-up")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/8.png")
          .col(style="place-self:center;")
            p.fw-bold Tenga en cuenta que.
            p.mb-0 El horno debe estar previamente caliente a 450 grados Fahrenheit o 220 grados centígrados, a donde llevará este producto el cual debe quedar delgado, es decir no mayor a 1 centímetro de grosor y hornee por 5 minutos en el horno a hasta que quede muy dorado.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Batido pesado
    
    .p-4.p-lg-3(style="background-color:#F0FDFB;border-radius:11px;border:1px #77F0E2 solid;" data-aos="fade-up")
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/9.png")
        .col(style="place-self:center;")
          p.mb-0 Los batidos pesados son considerados masas sin incorporación de aire, con un contenido de materia grasa superior al 50% del peso de la harina. Debido a su consistencia, también se les llama masas blandas.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración 
    
    p(data-aos="fade-right") En las siguientes preparaciones, el principio técnico a usar es común en cuanto a lo siguiente:

    .cont_1_7.mt-4.pt-4.pb-5
      .tarjeta.p-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Mezclar mantequilla y azúcar
              p Mezcle la mantequilla o grasa descrita con el azúcar, y bata hasta que tome un color blanco y se forme una crema suave. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/10.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Añadir huevos
              p Añada los huevos uno a uno, con un intervalo de aproximadamente 30 segundos entre cada adición.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/11.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Agregar harina y productos secos
              p  Agregue la harina, siempre tamizada o cernida previamente, junto a los productos secos. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/12.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Añadir licores, sabores o colores 
              p  Finalice con la adición de licores, sabores o colores. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/13.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hornear
              p  Hornee teniendo en cuenta que, a mayor tamaño del molde, se requiere más tiempo y menor temperatura. Por ejemplo, un molde de torta de libra necesita 350 grados Fahrenheit por 1 hora. Para productos más pequeños, como cupcakes, hornee a 400 grados Fahrenheit por 15 minutos. Recuerde que aumentar la temperatura reduce el tiempo de horneado. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/14.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3 Ponqué de novia

    p(data-aos="fade-right") El ponqué de novia es un tipo de batido pesado, caracterizado por su textura densa y rica. Es un pastel tradicionalmente utilizado en bodas y otras celebraciones importantes. Este tipo de ponqué suele incluir frutas secas y licores, lo que le da un sabor distintivo y una consistencia robusta.

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
                  div Tazones plásticos
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Tamiz
            .col-lg-5
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/15.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 6.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center Harina
                      td.p-3.text-center 500
                    tr.bg-white
                      td.p-3.text-center Polvo para hornear
                      td.p-3.text-center 6
                    tr.bg-white
                      td.p-3.text-center Margarina
                      td.p-3.text-center 600
                    tr.bg-white
                      td.p-3.text-center Azúcar común
                      td.p-3.text-center 500
                    tr.bg-white
                      td.p-3.text-center Huevos
                      td.p-3.text-center 600
                    tr.bg-white
                      td.p-3.text-center Ralladura de naranja
                      td.p-3.text-center 5
                    tr.bg-white
                      td.p-3.text-center Vino
                      td.p-3.text-center 175
                    tr.bg-white
                      td.p-3.text-center Ciruelas pasas
                      td.p-3.text-center 100
                    tr.bg-white
                      td.p-3.text-center Uvas pasas
                      td.p-3.text-center 100
                    tr.bg-white
                      td.p-3.text-center Nueces
                      td.p-3.text-center 100
                    tr.bg-white
                      td.p-3.text-center Esencia de vainilla
                      td.p-3.text-center 5
                    tr.bg-white
                      td.p-3.text-center Esencia de naranja
                      td.p-3.text-center 5
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema2/16.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-right") La preparación es la siguiente: 

    .cont_1_7.mt-4.pt-4.pb-5
      .tarjeta.p-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Mezclar mantequilla y azúcar
              p  Mezclar la mantequilla o margarina con el azúcar y batir hasta obtener una consistencia suave y cremosa. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/17.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Añadir los huevos
              p  Añadir los huevos uno a uno, batiendo bien después de cada adición. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/18.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5  Incorporar harina y polvo para hornear
              p  Incorporar la harina tamizada junto con el polvo para hornear, mezclando hasta que quede bien integrado. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/19.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Agregar ingredientes adicionales
              p  Agregar la ralladura de naranja, el vino, las ciruelas pasas, las uvas pasas, las nueces, la esencia de vainilla, la esencia de naranja y la tintura de caramelo, mezclando hasta obtener una masa homogénea. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/20.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Verter en molde
              p  Verter la mezcla en un molde para hornear previamente engrasado y enharinado. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/21.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hornear
              p  Hornear a 350 grados Fahrenheit (175 grados Celsius) durante aproximadamente una hora, o hasta que al insertar un palillo en el centro, éste salga limpio. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/22.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4 #[em Brownie]
    
    .row
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/23.png")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 El #[em brownie] es un pastel de origen estadounidense, conocido por su textura densa y su intenso sabor a chocolate. Es considerado un batido pesado debido a su alto contenido de mantequilla y azúcar, y la mínima incorporación de aire.
    
    .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Preparación]
    
    .cont_2_2.pb-5
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
                    div Tazones plásticos
                  li.d-flex
                    i.fas.fa-bread-slice(style="color:#1D3FBB;")
                    div Tamiz
              .col-lg-5
                figure.m-auto.col-10.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema2/25.png')
          .py-3.py-md-4(titulo="Ingredientes")
            .row.col-xl-11.m-auto.pt-4.pb-4
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 7.
                  span Ingredientes y cantidades 
                .tabla-a.color-acento-contenido
                  table
                    thead
                      tr(style="background-color:#F9F7F4;")
                        th Ingredientes
                        th Cantidad
                    tbody
                      tr.bg-white
                        td.p-3.text-center Mantequilla
                        td.p-3.text-center 750
                      tr.bg-white
                        td.p-3.text-center Cacao en polvo
                        td.p-3.text-center 250
                      tr.bg-white
                        td.p-3.text-center Azúcar común
                        td.p-3.text-center 1250
                      tr.bg-white
                        td.p-3.text-center Huevos
                        td.p-3.text-center 800
                      tr.bg-white
                        td.p-3.text-center Harina
                        td.p-3.text-center 750
                      tr.bg-white
                        td.p-3.text-center Nueces picadas
                        td.p-3.text-center 200
                      tr.bg-white
                        td.p-3.text-center Polvo para hornear
                        td.p-3.text-center 1 pizca 
                      tr.bg-white
                        td.p-3.text-center Vainilla
                        td.p-3.text-center 2 tips
                      tr.bg-white
                        td.p-3.text-center Sal
                        td.p-3.text-center Pizca
                      tr.bg-white
                        td.p-3.text-center Vainilla
                        td.p-3.text-center Al gusto
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-6.col-md-5.col-lg-12
                  img(src='@/assets/curso/tema2/26.png')
      
      .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/30.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
      
      p(data-aos="fade-left") La preparación es la siguiente: 

      .tarjeta.p-4.mt-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Derretir mantequilla y mezclar con cacao
              p Derretir la mantequilla y mezclar con el cacao en polvo hasta obtener una mezcla homogénea.  
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/27.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Añadir azúcar
              p Añadir el azúcar y mezclar bien.  
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/28.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Incorporar los huevos
              p Incorporar los huevos uno a uno, batiendo bien después de cada adición.  
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/29.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Agregar harina y otros ingredientes
              p Añadir la harina tamizada, las nueces picadas, el polvo para hornear, la vainilla y la sal. Mezclar hasta integrar todos los ingredientes.  
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/30.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Verter en molde
              p Verter la mezcla en un molde para hornear previamente engrasado y enharinado o con papel siliconado.  
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/31.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hornear
              p Hornear en un horno precalentado a 350 grados Fahrenheit (175 grados Celsius) durante aproximadamente 20-25 minutos, o hasta que al insertar un palillo en el centro, éste salga con algunas migas húmedas (no completamente limpio, para asegurar la textura #[em fudgy]).  
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/32.png')
    
    .col-lg-7.mt-4
      .cont_1_6.p-4.pb-lg-0
        .row
          .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
            figure.m-auto.col-7.col-md-4.col-lg-12
              img(src="@/assets/curso/tema2/33.png")
          .col-lg(data-aos="fade-up")
            p.fw-bold(style="color:#F7C3EC;") ¿Sabías qué? 
            p.mb-0.text-white El brownie es una torta originaria de Estados Unidos a base de chocolate y muy importante en la pastelería mundial
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_5 2.5#[em Muffin:] ponquecito dulce
    
    p(data-aos="fade-right") El #[em muffin] es un ponquecito dulce de origen estadounidense, caracterizado por su textura esponjosa y su forma individual. Es un tipo de batido pesado debido a su contenido de mantequilla y azúcar.

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
                img(src='@/assets/curso/tema2/34.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 8.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center #[em Blueberry] (opcional)
                      td.p-3.text-center 1 taza
                    tr.bg-white
                      td.p-3.text-center Sal
                      td.p-3.text-center 1 cucharadita
                    tr.bg-white
                      td.p-3.text-center Polvo para hornear
                      td.p-3.text-center 2 #[sup 1/2] cucharadita
                    tr.bg-white
                      td.p-3.text-center Harina de trigo 
                      td.p-3.text-center 230 gramos
                    tr.bg-white
                      td.p-3.text-center Vainilla
                      td.p-3.text-center #[sup 1/2] cucharadita
                    tr.bg-white
                      td.p-3.text-center Leche 
                      td.p-3.text-center #[sup 3/4] de taza
                    tr.bg-white
                      td.p-3.text-center Huevo
                      td.p-3.text-center 2 unidades
                    tr.bg-white
                      td.p-3.text-center Mantequilla
                      td.p-3.text-center #[sup 1/2] taza
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema2/35.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") La preparación es la siguiente:

    .cont_1_7.mt-4.pb-5.pt-4
      .tarjeta.p-4.mt-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Mezclar ingredientes secos 
              p  Mezclar la harina de trigo, el azúcar, el polvo para hornear y la sal en un tazón grande.  
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/36.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Batir ingredientes líquidos 
              p En otro tazón, batir la mantequilla derretida, la leche, los huevos y la vainilla hasta que estén bien combinados.   
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/37.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Incorporar ingredientes líquidos a secos
              p Procesos de cocción, mezclado, y otros métodos de preparación de alimentos.   
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/38.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Añadir #[em blueberries] 
              p Añadir los #[em blueberries] (u otros ingredientes opcionales) a la mezcla.   
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/39.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Verter en moldes 
              p Verter la mezcla en moldes para #[em muffins] previamente engrasados o con capacillos, llenándolos hasta dos tercios de su capacidad.   
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/40.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hornear
              p  Hornear en un horno precalentado a 400 grados Fahrenheit (200 grados Celsius) durante aproximadamente 15-20 minutos, o hasta que al insertar un palillo en el centro, éste salga limpio. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/41.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_6 2.6 #[em Cupcake]
    
    p(data-aos="fade-right") El #[em cupcake] es un pequeño pastel individual, similar al muffin pero generalmente más dulce y decorado con glaseado o crema. Es un tipo de batido pesado debido a su contenido de mantequilla y azúcar, y se caracteriza por su textura esponjosa y su atractivo visual.

    .col-xl-10.m-auto.mt-4
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
                img(src='@/assets/curso/tema2/42.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 9.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center Harina
                      td.p-3.text-center 200 gramos
                    tr.bg-white
                      td.p-3.text-center Azúcar
                      td.p-3.text-center 200 gramos
                    tr.bg-white
                      td.p-3.text-center Mantequilla
                      td.p-3.text-center 200 gramos
                    tr.bg-white
                      td.p-3.text-center Huevo
                      td.p-3.text-center 2 unidades
                    tr.bg-white
                      td.p-3.text-center Polvo para hornear
                      td.p-3.text-center 5 gramos
                    tr.bg-white
                      td.p-3.text-center Leche
                      td.p-3.text-center 70 mililitros
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema2/43.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") La preparación es la siguiente: 

    figure.mt-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_7 2.7 #[em Cupcake] de chocolate
    
    p(data-aos="fade-right") El #[em cupcake] de chocolate es una variante del #[em cupcake] tradicional, caracterizado por su intenso sabor a chocolate y su textura esponjosa. Es ideal para los amantes del chocolate y se presta a una gran variedad de decoraciones y presentaciones.

    .col-xl-10.m-auto.mt-4
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
                img(src='@/assets/curso/tema2/44.png')
        .py-3.py-md-4(titulo="Ingredientes")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 10.
                span Ingredientes y cantidades 
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr(style="background-color:#F9F7F4;")
                      th Ingredientes
                      th Cantidad
                  tbody
                    tr.bg-white
                      td.p-3.text-center Harina
                      td.p-3.text-center 250 gramos
                    tr.bg-white
                      td.p-3.text-center Mantequilla
                      td.p-3.text-center 250 gramos
                    tr.bg-white
                      td.p-3.text-center Azúcar
                      td.p-3.text-center 250 gramos
                    tr.bg-white
                      td.p-3.text-center Huevos
                      td.p-3.text-center 5 unidades
                    tr.bg-white
                      td.p-3.text-center Cobertura de chocolate
                      td.p-3.text-center Cantidad necesaria
                    tr.bg-white
                      td.p-3.text-center Sal
                      td.p-3.text-center Pizca
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-6.col-md-5.col-lg-12
                img(src='@/assets/curso/tema2/45.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Proceso] de elaboración
    
    p(data-aos="fade-left") La preparación es la siguiente:

    .cont_1_7.mt-4.pb-5.pt-4
      .tarjeta.p-4.mt-4(style="background-color:#FEF8FC;")
        PasosB.color-acento-contenido
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Batir mantequilla y azúcar
              p Batir la mantequilla y el azúcar hasta obtener una mezcla suave y cremosa.
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/46.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Añadir los huevos
              p Añadir los huevos uno a uno, batiendo bien después de cada adición. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/47.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Incorporar harina y leche 
              p Incorporar la harina tamizada, el polvo para hornear y la sal, alternando con la leche, comenzando y terminando con la harina. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/48.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Agregar vainilla y chocolate
              p Agregar la vainilla y la cobertura de chocolate derretida, mezclando hasta que todos los ingredientes estén bien integrados. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/49.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Verter en moldes
              p Verter la mezcla en moldes para cupcakes previamente engrasados o con capacillos, llenándolos hasta dos tercios de su capacidad. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/50.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hornear
              p Hornear en un horno precalentado a 350 grados Fahrenheit (175 grados Celsius) durante aproximadamente 15-20 minutos, o hasta que al insertar un palillo en el centro, éste salga limpio. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/51.png')
          .row.col-xl-11.m-auto(titulo="Paso")
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Dejar enfriar
              p Dejar enfriar los cupcakes en una rejilla antes de decorarlos. 
            .col-lg-5
              figure.m-auto.col-10.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/52.png')



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
