window.addEventListener('load', iniciar, 'false');
window.addEventListener('resize', body_size);

function iniciar(){
  menu(); //Creamos el menu
  footer(); //Creamos el footer

  var height = $(window).height();  //-> Para que el body ocupe siempre toda la pantalla y no tener problemas con el fondo
  $('body').height(height);

  if(localStorage.getItem("size_letter") != null){change_size();}

  $("#slider").bind("input", function(){
    let size = document.getElementById("slider").value;

    switch (size) {
      case '1':
        localStorage.setItem("size_letter", "small");
      break;
    
      case '2':
        localStorage.setItem("size_letter", "medium");
      break;

      case '3':
        localStorage.setItem("size_letter", "big");
      break;
    }
    
    change_size();
  });
}

function menu(){
  var menu;
  //En funcion de si esta registrado o no creamos un menu u otro
  if(localStorage.getItem("rol") == null){
    menu = '<nav>'+
              '<input type="checkbox" id="check">'+
              '<label for="check" class="checkbtn">'+
                  '<i class="fas fa-bars"></i>'+
              '</label>'+
              '<a href="/index.html" class="enlace">'+
                  '<img src="../../images/logo.png" alt="" class="logo">'+
              '</a>'+
              '<ul>'+
                  '<li><a href="../views/inicio.html">Inicio</a></li>'+
                  '<li><a href="#">Voluntariados</a></li>'+
                  '<li><a href="#">Contacto</a></li>'+
                  '<li><a class="register" href="../views/registro.html">Registrarse</a></li>'+
                  '<li><a class="active" href="../views/inicio_sesion.html">Inicio Sesión</a></li>'+
                  '<li id="size">Tamaño letra<input type="range" min="1" max="3" id="slider"></li>'+
              '</ul>'+
            '</nav>';
  }else{
    menu = '<nav>'+
              '<input type="checkbox" id="check">'+
              '<label for="check" class="checkbtn">'+
                  '<i class="fas fa-bars"></i>'+
              '</label>'+
              '<a href="../inicio.html" class="enlace">'+
                  '<img src="../../images/logo.png" alt="" class="logo">'+
              '</a>'+
              '<ul>'+
                  '<li><a href="../views/inicio.html">Inicio</a></li>'+
                  '<li><a href="#">Voluntariados</a></li>'+
                  '<li><a href="#">Contacto</a></li>'+
                  '<li><a class="register" href="#">Perfil</a></li>'+
                  '<li id="size">Tamaño letra<input type="range" min="1" max="3" id="slider"></li>'+
              '</ul>'+
            '</nav>';
  }
  

  $(menu).appendTo("header");
}

function footer(){
  let footer =  '<div class="container">'+
                  '<div class="left section">'+
                      '<h2>Conocenos</h2>'+
                      '<div class="content">'+
                          '<p>LoremaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'+
                      '<div class="social">'+
                          '<a href="https://www.facebook.com/" target="_blank"><span class="fab fa-facebook-f"></span></a>'+
                          '<a href="https://instagram.com/" target="_blank"><span class="fab fa-instagram"></span></a>'+
                          '<a href="https://www.youtube.com/" target="_blank"><span class="fab fa-youtube"></span></a>'+
                      '</div>'+
                    '</div>'+
                '</div>'+

                '<div class="right section">'+
                    '<h2>Contacta</h2>'+
                    '<div class="content">'+
                        '<div class="place">'+
                            '<span class="fas fa-map-marker-alt"></span>'+
                            '<span class="text"> Segovia, España</span>'+
                        '</div>'+
                        '<div class="phone">'+
                            '<span class="fas fa-phone-alt"></span>'+
                            '<span class="text"> +34-765432101</span>'+
                        '</div>'+
                        '<div class="email">'+
                            '<span class="fas fa-envelope"></span>'+
                            '<span class="text"> voluntariados@gmail.com</span>'+
                        '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+

                '<div class="footer-bottom">'+
                  '<center>'+
                      '<div><span> <a href="">©2023 | Todos los derechos reservados| Realizado por Gema</a></span></div>'+
                  '</center>'+
                '</div>';

  $(footer).appendTo('footer');

}

function body_size(){
  var height = $(window).height();
  $('body').height(height);
}

function change_size(){
  let size = localStorage.getItem("size_letter");

  switch(size){
    case "small":
      $('*').css('font-size', '11px');
      $(".size").text("Pequeña"); 
      document.getElementById("slider").value = '1';
    break;

    case "medium":
      $('*').css('font-size', '16px');
      $(".size").text("Mediana"); 
      document.getElementById("slider").value = '2';
    break;

    case "big":
      $('*').css('font-size', '22px');
      $(".size").text("Grande"); 
      document.getElementById("slider").value = '3';
    break;
  }
}