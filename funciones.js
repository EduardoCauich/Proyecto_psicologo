$(function() {
    $(".rslides").responsiveSlides();
  });

  //parte del carrucel
  $(document).ready(function()
		{
			$('#slider1').tinycarousel();
		});

    //parte de los acordeones
    $(".titulo1").click(function () {
      $(".contenido1").slideToggle();
      $(".mas1").toggleClass("desaparecer");
    });

    $(".titulo2").click(function () {
      $(".contenido2").slideToggle();
      $(".mas2").toggleClass("desaparecer");
    });

    $(".titulo3").click(function () {
      $(".contenido3").slideToggle();
      $(".mas3").toggleClass("desaparecer");
    });
    $(".titulo4").click(function () {
      $(".contenido4").slideToggle();
      $(".mas4").toggleClass("desaparecer");
    });

    //parte de la validación del formulario
    function valida_enviar(){
      if(contenedorformulario.nombre.value==0){
      alert('Escribe tu nombre'.nombre)      //para el mensaje en pantalla
      nombre.focus() // para poner el puntero en el campo
      return 0;
      }
      if(contenedorformulario.email.value==0){
      alert('Escribe tu correo')
      contenedorformulario.email.focus()
      return 0;
      }
        if(contenedorformulario.msg.value==0){
          alert('Escribe algun mensaje'.msg)
          contenedorformulario.msg.focus()
          return 0;
          }
      //si todos los campos de del formulario han sido rellenados se debe de eviar el cuestionario
      //para el boton subir 
      contenedorformulario.submit();
      };


      $(document).ready(function () {
        $("#subir").click(function () {
          $("html,body").animate(
            {
              scrollTop: "0px",
            },
            1000
          );
        });
      });

      //parte del modal con video responsibe
      var fondomodal = document.getElementById("mod");
var btn = document.getElementById("btn");
var cerrar = document.getElementById("cerrarbtn");

btn.onclick = function (){
    fondomodal.style.display = "flex";
};
cerrar.onclick=function(){
    fondomodal.style.display="none";
};
window.onclick = function(event){
    if(event.target == fondomodal){
        fondomodal.style.display = "none";
    }
};

//parte del menu que se despliega 
        $("#icono_menu").click(function(){
            $("#menu_X").slideToggle();
        });

//para  que avance a las partes del sitio web
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000 //tiempo para desplazar
  ); 
  $("#contenedormenu").toggleClass("abrirmenu");
});