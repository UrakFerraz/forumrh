{



function myFunction() {
  if (sFullHD.matches) {
  	console.log('FullHD')
    corouselContruct(450, 100);
  } else if (sHD.matches) {
  	console.log('HD')
    corouselContruct(450, 100);
  } else if (sHDs.matches) {
  	console.log('SHD')
    corouselContruct(450, 180);
  } else if (sSD.matches) {
  	console.log('SD')
    corouselContruct(450, 170);
  } else if (tablet.matches) {
  	console.log('Tablet')
    corouselContruct(450, 240);
  } else if (mobileL.matches) {
  	console.log('mobileL')
    corouselContruct(450, 470);
  } else if (mobileP.matches) {
  	console.log('mobileP')
    corouselContruct(320, 470);
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

    <h3>Agricultura</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/15DEZ---3-painel---17h47--Elisabete-Rello---A-diversidade-melhora-os-resultados-da-empresa.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Elisabete Rello</h4>
        <h4>Globo Rural</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Agricultura---Mauro-Zafalon-(Folha-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Mauro Zafalon</h4>
        <h4>Folha de São Paulo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Agricultura---Kellen-Severo--(Canal-Rural).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Kellen Severo</h4>
        <h4>Canal Rural</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Automotivo e Motociclismo</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Automotivo-e-Motociclismo---Pedro-Kutney-(Automotive-Business).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Pedro Kutney</h4>
        <h4>Automotive Business</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Automotivo-e-Motociclismo---Marcus-Vinicius-Gasques-(Revista-AutoEsporte).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Marcus Vinicius Gasques</h4>
        <h4>Revista AutoEsporte</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Automotivo-e-Motociclismo---Cleide-Silva-(O-Estado-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Cleide Silva</h4>
        <h4>O Estado de São Paulo</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Beleza e Higiene Pessoal</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Beleza-e-Higiene-Pessoal---Vania-Goy-(Belezinha).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Vânia Goy</h4>
        <h4>Belezinha</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Beleza-e-Higiene-Pessoal---Luiza-Souza-(Vogue-Brasil).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Luiza Souza</h4>
        <h4>Vogue Brasil</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Beleza-e-Higiene-Pessoal---Anna-Paula-Buchalla-(Harpers-Bazaar-Brazil).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Anna Paula Buchalla</h4>
        <h4>Harper's Bazaar Brazil</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Bens de Capital</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Bens-de-Capital---Dimmi-Amora-(Infra).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Dimmi Amora</h4>
        <h4>Infra</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Bens-de-Capital---Circe-Bonatelli-(Agencia-Estado).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Circe Bonatelli</h4>
        <h4>Agência Estado</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div>  
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Construção Civil e Arquitetura</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Construcao-Civil-e-Arquitetura---Taissa-Buescu-(Casa-Vogue).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Taissa Buescu</h4>
        <h4>Casa Vogue</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Construcao-Civil-e-Arquitetura---Circe-Bonatelli-(Agencia-Estado).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Circe Bonatelli</h4>
        <h4>Agência Estado</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div>  
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Cultura</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Cultura---Marcelo-Tas-(Cultura).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Marcelo Tas</h4>
        <h4>Cultura</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Cultura---Cristina-Aragao-(GloboNews).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Cristina Aragão</h4>
        <h4>GloboNews</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Cultura---Adriana-Couto-(Cultura).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Adriana Couto</h4>
        <h4>Cultura</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Decoração</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Decoracao---Thais-Lauton-(Casa-e-Jardim).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Thaís Lauton</h4>
        <h4>Casa e Jardim</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Decoracao---Livia-Pedreira-(Casa-Cor).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Livia Pedreira</h4>
        <h4>Casa Cor</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Decoracao---Guilherme-Amorozo-(Casa-Vogue).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Guilherme Amorozo</h4>
        <h4>Casa Vogue</h4>
      </div>  
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Educação</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Educacao---Renata-Cafardo-(Estado-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Renata Cafardo</h4>
        <h4>Estado de São Paulo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Educacao---Paulo-Saldana-(Folha-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Paulo Saldaña</h4>
        <h4>Folha de São Paulo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Educacao---Antonio-Gois-(Jeduca).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Antonio Gois</h4>
        <h4>Jeduca</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Eletroeletrônico</h3>
    <div class="premiadosUnitsWrapper flex">
    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/Eletroeletronico---Thassius-Veloso-(Techtudo-CBN-e-GloboNews0.jpg" layout="fill" class="cover"> </amp-img>
      </div>
      <h4>Thássius Veloso</h4>
      <h4>Techtudo CBN e GloboNews</h4>
    </div>
    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/Eletroeletronico---Paulo-Higa-(Tecnoblog).jpg" layout="fill" class="cover"> </amp-img>
      </div>
      <h4>Paulo Higa</h4>
      <h4>Tecnoblog</h4>
    </div>
    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/Eletroeletronico---Guilherme-Tagiaroli-(Gizmodo).jpg" layout="fill" class="cover"> </amp-img>
      </div>
      <h4>Guilherme Tagiaroli</h4>
      <h4>Gizmodo</h4>
    </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Esporte</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Esporte---Mauro-Beting-(Jovem-Pan).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Mauro Beting</h4>
        <h4>Jovem Pan</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div> 
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div>  
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Farmacêutico</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Farmaceutico---Monica-Scaramuzzo-(Estado-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Mônica Scaramuzzo</h4>
        <h4>Estado de São Paulo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Farmaceutico---Diogo-Sponchiato-(Abril).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Diogo Sponchiato</h4>
        <h4>Abril</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Farmaceutico---Ana-Claudia-Nagao-(Panorama-Farmaceutico).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Ana Claudia Nagao</h4>
        <h4>Panorama Farmacêutico</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Financeiro</h3>
    <div class="premiadosUnitsWrapper flex">
  <div class="premiadosImgWrapper grid">
    <div class="premiadosImg shadow-6">
      <amp-img alt="" src="img/participantes/Financeiro---Vicente-Nunes-(Correio-Brasiliense).jpg" layout="fill" class="cover"> </amp-img>
    </div>
    <h4>Vicente Nunes</h4>
    <h4>Correio Brasiliense</h4>
  </div>
  <div class="premiadosImgWrapper grid">
    <div class="premiadosImg shadow-6">
      <amp-img alt="" src="img/participantes/Financeiro---Denise-Campos-de-Toledo-(Jovem-Pan).jpg" layout="fill" class="cover"> </amp-img>
    </div>
    <h4>Denise Campos de Toledo<h4>
    </h4>Jovem Pan</h4>
  </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div>  
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Gastronomia</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Gastronomia---Patricia-Ferraz-(Estadao).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Patrícia Ferraz</h4>
        <h4>Estadão</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Gastronomia---Josimar-Melo-(Folha-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Josimar Melo</h4>
        <h4>Folha de São Paulo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Gastronomia---Arnaldo-Lorencato-(Abril).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Arnaldo Lorençato</h4>
        <h4>Abril</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Logística e Transporte</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Logistica-e-Transporte---Marcelo-Moura-(epoca-Negocios).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Marcelo Moura</h4>
        <h4>Época Negócios</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Logistica-e-Transporte---Luciana-Collet-(Agencia-Estado).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Luciana Collet</h4>
        <h4>Agência Estado</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Logistica-e-Transporte---Fernando-Richeti-(Brasil-Caminhoneiro).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Fernando Richeti</h4>
        <h4>Brasil Caminhoneiro</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Mineração, Siderurgia e Metalurgia</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Mineracao,-Siderurgia-e-Metalurgia---Lilian-Moreira-(Conexao-Mineral).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Lílian Moreira</h4>
        <h4>Conexão Mineral</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Mineracao,-Siderurgia-e-Metalurgia---Henrique-Patria-(Siderurgia-Brasil).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Henrique Pátria</h4>
        <h4>Siderurgia Brasil</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Mineracao,-Siderurgia-e-Metalurgia---Francisco-Alves-(Brasil-Mineral).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Francisco Alves</h4>
        <h4>Brasil Mineral</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Moda</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Moda---Patricia-Carta-(Harpers-Bazaar-Brazil).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Patrícia Carta</h4>
        <h4>Harper's Bazaar Brazil</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Moda---Lilian-Pacce-(site-Lilian-Pacce).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Lilian Pacce</h4>
        <h4>Site Lilian Pacce</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Moda---Daniela-Falcao-(Edicoes-Globo-Conde-Nast).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Daniela Falcão</h4>
        <h4>Edições Globo Condé Nast</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Pecuária</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Pecuaria---Sidnei-Maschio-(Terra-Viva).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Sidnei Maschio</h4>
        <h4>Terra Viva</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Pecuaria---Raphael-Salomao-(Globo-Rural).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Raphael Salomão</h4>
        <h4>Globo Rural</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Pecuaria---Fabiano-Reis-(Canal-do-Boi).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Fabiano Reis</h4>
        <h4>Canal do Boi</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Petróleo, Gás e Energia Elétrica</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Petroleo,-Gas-e-Energia-Eletrica---Alexa-Salomao-(Folha-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Alexa Salomão</h4>
        <h4>Folha de São Paulo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Petroleo,-Gas-e-Energia-Eletrica---Bruno-Rosa-(O-Globo).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Bruno Rosa</h4>
        <h4>O Globo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Petroleo,-Gas-e-Energia-Eletrica---Roberto-Samora-(Reuters).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Roberto Samora</h4>
        <h4>Reuters</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Política</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Politica---Reinaldo-Azevedo-(BandNews).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Reinaldo Azevedo</h4>
        <h4>BandNews</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Politica---Josias-de-Souza-(Jovem-Pan-e-UOL).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Josias de Souza</h4>
        <h4>Jovem Pan e UOL</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div>  
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Química e Petroquímica</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Quimica-e-Petroquimica---Stella-Fontes-(Valor-Economico).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Stella Fontes</h4>
        <h4>Valor Econômico</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Quimica-e-Petroquimica---Marcelo-Fairbanks-(Quimica-e-Derivados).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Marcelo Fairbanks</h4>
        <h4>Química e Derivados</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Quimica-e-Petroquimica---Hellen-Souza-(Plastico-Industrial).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Hellen Souza</h4>
        <h4>Plástico Industrial</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Saúde</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Saude---Marcio-Gomes-(TV-Globo).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Márcio Gomes</h4>
        <h4>TV Globo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Saude---Claudia-Collucci-(Folha-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Cláudia Collucci</h4>
        <h4>Folha de São Paulo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Saude---Clarissa-Thome-(GloboNews).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Clarissa Thomé</h4>
        <h4>GloboNews</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Seguros</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Seguros---Kelly-Lubiato-(Apolice).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Kelly Lubiato</h4>
        <h4>Apólice</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Seguros---Boris-Ber-(Programa-Seguro).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Boris Ber</h4>
        <h4>Programa Seguro</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Seguros---Aline-Bronzati-(Agencia-Estado).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Aline Bronzati</h4>
        <h4>Agência Estado</h4>
      </div>
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Sustentabilidade e Saneamento</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Sustentabilidade-e-Saneamento-Marcia-Bongiovanni-(TV-Cultura).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Márcia Bongiovanni</h4>
        <h4>TV Cultura</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Sustentabilidade-e-Saneamento---Adalberto-Marcondes-(Envolverde).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Adalberto Marcondes</h4>
        <h4>Envolverde</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div>  
    </div>
  </div>




  <div class="premiadosSlide flex">
    <h3>Tecnologia da Informação</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Tecnologia-da-Informacao---Pedro-Doria-(O-Globo).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Pedro Doria</h4>
        <h4>O Globo</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Tecnologia-da-Informacao-Cristina-de-Luca-(Grupo-IDG).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Cristina de Luca</h4>
        <h4>Grupo IDG</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Tecnologia-da-Informacao---Carlos-Aros-(Jovem-Pan).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Carlos Aros</h4>
        <h4>Jovem Pan</h4>
      </div>
    </div>
  </div>






  <div class="premiadosSlide flex">
    <h3>Telecomunicações</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Telecomunicacoes---Samuel-Possebon-(Teletime).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Samuel Possebon</h4>
        <h4>Teletime</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Telecomunicacoes---Ethevaldo-Siqueira-(Mundo-Digital).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Ethevaldo Siqueira</h4>
        <h4>Mundo Digital</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/usert.png" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Nome Sobrenome</h4>
        <h4>Veículo</h4>
      </div>
    </div>
  </div>






  <div class="premiadosSlide flex">
    <h3>Turismo e Hotelaria</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Turismo-e-Hotelaria-Tales-Azzi-(Viaje-Mais).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Tales Azzi</h4>
        <h4>Viaje Mais</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Turismo-e-Hotelaria-Artur-Andrade-(Panrotas).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Artur Andrade</h4>
        <h4>Panrotas</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Turismo-e-Hotelaria---Adriana-Moreira-(Estado-de-S.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Adriana Moreira</h4>
        <h4>Estado de São Paulo</h4>
      </div>
    </div>    
  </div>






  <div class="premiadosSlide flex">
    <h3>Varejo e Atacado</h3>
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Varejo-e-Atacado---Hugo-Cilo-(Isso-e-Dinheiro).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Hugo Cilo</h4>
        <h4>Isso é Dinheiro</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Varejo-e-Atacado---Filipe-Serrano-(Exame).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Filipe Serrano</h4>
        <h4>Exame</h4>
      </div>
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/Varejo-e-Atacado-Adriana-Mattos-(Valor-Economico).jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <h4>Adriana Mattos</h4>
        <h4>Valor Econômico</h4>
      </div>  
    </div>
  </div>


</amp-carousel>`;


return document.querySelector('.carouselContainer').innerHTML = inner;


}


myFunction()

sFullHD.addListener(myFunction);

}










