{



function myFunction() {
  if (sFullHD.matches) {
  	console.log('FullHD')
    corouselContruct(450, 110);
  } else if (sHD.matches) {
  	console.log('HD')
    corouselContruct(450, 110);
  } else if (sHDs.matches) {
  	console.log('SHD')
    corouselContruct(450, 190);
  } else if (sSD.matches) {
  	console.log('SD')
    corouselContruct(450, 180);
  } else if (tablet.matches) {
  	console.log('Tablet')
    corouselContruct(450, 260);
  } else if (mobileL.matches) {
  	console.log('mobileL')
    corouselContruct(450, 520);
  } else if (mobileP.matches) {
  	console.log('mobileP')
    corouselContruct(320, 520);
  }

}


var sFullHD = window.matchMedia("(min-width: 1801px)");
var sHD = window.matchMedia("(min-width: 1500px) and (max-width: 1800px)");
var sHDs = window.matchMedia("(min-width: 1200px) and (max-width: 1499px)");
var sSD = window.matchMedia("(min-width: 992px) and (max-width: 1199px)");
var tablet = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
var mobileL = window.matchMedia("(min-width: 576px) and (max-width: 767px)");
var mobileP = window.matchMedia("(min-width: 320px) and (max-width: 575px)");




function corouselContruct(w,h) {
	let inner = `


<amp-carousel type="slides" width="${w}" height="${h}" layout="responsive" class="participantesSlidesContainer" controls loop data-next-button-aria-label="Go to next slide" data-previous-button-aria-label="Go to previous slide" role="region" aria-label="Looping carousel">





























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">

 

    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/14DEZ---1-painel---16h12---Eduardo-Marques---O-que-voce-aprendeu.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 1º painel</h4>
        </div>
      <h4>Eduardo Marques</h4>
      <h4>O que você aprendeu</h4>
    </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14DEZ-1painel-16h12-DrEduardo-Oliveira-O-que-voce-aprendeu.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 1º painel</h4>
        </div>
        <h4>Eduardo Oliveira</h4>
        <h4>O que você aprendeu</h4>
      </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---1-trending---16h43---Fernando-Viriato---Diversidade-e-inclusao-na-hotelaria.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 1º trending</h4>
        </div>
        <h4>Fernando Viriato</h4>
        <h4>Diversidade e inclusão na hotelaria</h4>
      </div>





    </div>
  </div>
























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">






    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/14-DEZ---1-trending---16h43---Antonietta-Varlese---Diversidade-e-inclusao-na-hotelaria.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 1º trending</h4>
        </div>
        <h4>Antonietta Varlese</h4>
        <h4>Diversidade e inclusão na hotelaria</h4>
    </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14DEZ-1painel-16h12-DrEduardo-Oliveira-O-que-voce-aprendeu.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 1º painel</h4>
        </div>
        <h4>Eduardo Oliveira</h4>
        <h4>Médico a um clique</h4>
      </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---1-Painel---Rodrigo-Filus---O-que-voce-aprendeu.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 1º painel</h4>
        </div>
        <h4>Rodrigo Filus</h4>
        <h4>O que você aprendeu</h4>
      </div>






    </div>
  </div>























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">




    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/14-DEZ---2-trending---17h31---Kelen-Reis---As-competencias-que-emergem-da-Quarta-Revolcao-Industrial.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 2º trending</h4>
        </div>
      <h4>Kelen Reis</h4>
      <h4>As competências que emergem da Quarta Revolução Industrial</h4>
    </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---2-painel---16h59---Jorgete-Lemos---e-o-fim-dos-processos-presenciais.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 2º painel</h4>
        </div>
        <h4>Jorgete Lemos</h4>
        <h4>É o fim dos processos presenciais</h4>
      </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---2-Painel---o-fim-dos-processos-presenciais---Bruno-Fisbhen.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 2º painel</h4>
        </div>
        <h4>Bruno Fisbhen</h4>
        <h4>É o fim dos processos presenciais</h4>
      </div>









  
    </div>
  </div>
























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">







     <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/14-DEZ---3-painel---17h47---Cristiane-Carvalho---O-que-a-sua-Empresa-tem-a-ver-com-a-Quarta-Revolucao-Industrial.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 3º painel</h4>
        </div>
        <h4>Cristiane Carvalho</h4>
        <h4>O que a sua Empresa tem a ver com a Quarta Revolução Industrial</h4>
    </div>







    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/15DEZ---3-painel---17h47--Fabiano-Rangel---A-diversidade-melhora-os-resultados-da-empresa.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 3º painel</h4>
        </div>
      <h4>Fabiano Rangel</h4>
      <h4>A diversidade melhora os resultados da empresa</h4>
    </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---3-painel---17h47---Silvana-Livramento-Xavier---O-que-a-sua-Empresa-tem-a-ver-com-a-Quarta-Revolucao-Industrial.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 3º painel</h4>
        </div>
        <h4>Silvana Livramento Xavier</h4>
        <h4>O que a sua Empresa tem a ver com a Quarta Revolução Industrial</h4>
      </div> 






    </div>
  </div>



























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">







      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---3-painel---17h47---Tatiana-Porto---O-que-a-sua-Empresa-tem-a-ver-com-a-Quarta-Revolucao-Industrial.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 3º painel</h4>
        </div>
        <h4>Tatiana Porto</h4>
        <h4>O que a sua Empresa tem a ver com a Quarta Revolução Industrial</h4>
      </div> 





   <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/14-DEZ---3-trending---18h18---Karine-Wohlke--Case-VW---o-uso-da-tecnologia-para-conexao-com-empregado.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 3º trending</h4>
        </div>
      <h4>Karine-Wohlke</h4>
      <h4>Case VW - o uso da tecnologia para conexao com empregado</h4>
    </div>


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---4-painel---18h34---Leandro-Figueira-Neto---A-cultura-a-distancia.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 4º painel</h4>
        </div>
        <h4>Leandro Figueira Neto</h4>
        <h4>A cultura a distância</h4>
      </div>








    </div>
  </div>


























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">







      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---4-painel---Simone-Barbieri---A-cultura-distancia.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 4º painel</h4>
        </div>
        <h4>Simone Barbieri</h4>
        <h4>A cultura a distância</h4>
      </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---4-painel---a-cultura-distancia---Almiro-dos-Reis-Neto.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>14/12 - 4º painel</h4>
        </div>
        <h4>Almiro dos Reis Neto</h4>
        <h4>A cultura a distância</h4>
      </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---1-trending---17h31---Leandro-Ortigoza-Martins---Educacao-presencial-ou-digital.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 1º trending</h4>
        </div>
        <h4>Leandro Ortigoza Martins</h4>
        <h4>Educação presencial ou digital</h4>
      </div>












    </div>
  </div>


























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">











      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---1-Trending---Andre-Franco---Dialog---SuperApp-de-RH-e-Comunicacao-Interna.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 1º trending</h4>
        </div>
        <h4>André Franco</h4>
        <h4>Dialog - SuperApp de RH e Comunicação Interna</h4>
      </div>







      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---1-Painel---Jose-Antonio-Coelho-Junior---Medico-a-um-clique.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 1º painel</h4>
        </div>
        <h4>José Antonio Coelho Júnior</h4>
        <h4>Médico a um clique</h4>
      </div>







      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---1-Painel---Hamilton-Cardomingo---Medico-a-um-clique.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 1º painel</h4>
        </div>
        <h4>Hamilton Cardomingo</h4>
        <h4>Médico a um clique</h4>
      </div>









    </div>
  </div>



















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">









      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15DEZ---2-painel---16h59---Salim-Khouri---Habilidades-Socioemocionais.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 2º painel</h4>
        </div>
        <h4>Salim Khouri</h4>
        <h4>Habilidades Socioemocionais</h4>
      </div>



      

      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15DEZ---2-painel---Andre-Senador---Habilidades-Socioemocionais.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 2º painel</h4>
        </div>
        <h4>André Senador</h4>
        <h4>Habilidades Socioemocionais</h4>
      </div>






      

      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---2-Painel---Erika-Zoeller---Habilidades-Socioemocionais.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 2º painel</h4>
        </div>
        <h4>Erika Zoeller</h4>
        <h4>Habilidades Socioemocionais</h4>
      </div>











    </div>
  </div>























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">









     <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15DEZ---3-painel---17h47--Elisabete-Rello---A-diversidade-melhora-os-resultados-da-empresa.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 3º painel</h4>
        </div>
        <h4>Elisabete Rello</h4>
        <h4>A diversidade melhora os resultados da empresa</h4>
      </div> 








     <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---3-Painel---Simone-Beier---A-diversidade-melhora-os-resultados-da-empresa.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 3º painel</h4>
        </div>
        <h4>Simone Beier</h4>
        <h4>A diversidade melhora os resultados da empresa</h4>
      </div> 







     <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---3-Trending---Luiz-Douglas-de-Souza---Case-CIEE.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 3º Trending</h4>
        </div>
        <h4>Luiz Douglas de Souza</h4>
        <h4>Case CIEE</h4>
      </div> 









    </div>
  </div>























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">








     <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---4-Trending---Thais-Loureiro---HRX.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 4º Trending</h4>
        </div>
        <h4>Thais Loureiro</h4>
        <h4>HRX</h4>
      </div> 

      





     <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15-DEZ---5-Trending---Carlos-Augusto-Junior---Sistemas-de-sucessao-para-elevar-pessoas-e-carreiras.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 5º Trending</h4>
        </div>
        <h4>Carlos Augusto Junior</h4>
        <h4>Sistemas de sucessão para elevar pessoas e carreiras</h4>
      </div> 












     <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/14-DEZ---2-painel---Lais-Marangoni---o-fim-dos-processos-presenciais.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>15/12 - 2º painel</h4>
        </div>
        <h4>Laís Marangoni</h4>
        <h4>É o fim dos processos presenciais</h4>
      </div> 









    </div>
  </div>




















 





















































</amp-carousel>`;


return document.querySelector('.carouselContainer1').innerHTML = inner;


}


myFunction()

sFullHD.addListener(myFunction);

}










      // <div class="premiadosImgWrapper grid">
      //   <div class="premiadosImg shadow-6">
      //     <amp-img alt="" src="img/jornalistas/usert.png" layout="fill" class="cover"> </amp-img>
      //   </div>
      //   <h4>Nome Sobrenome</h4>
      //   <h4>Veículo</h4>
      // </div>
      // <div class="premiadosImgWrapper grid">
      //   <div class="premiadosImg shadow-6">
      //     <amp-img alt="" src="img/jornalistas/usert.png" layout="fill" class="cover"> </amp-img>
      //   </div>
      //   <h4>Nome Sobrenome</h4>
      //   <h4>Veículo</h4>
      // </div>

