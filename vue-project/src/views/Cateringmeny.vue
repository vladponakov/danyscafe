<template>
  <div class="catering">
    <div class="section">
      <h1>Cateringmeny</h1>
      <p class="sub-heading">Vi tilbyr en variert cateringmeny for enhver anledning.</p>
      <ul class="menu-items">
        <li>Rundstykke 1: spekeskinke - 49 kr</li>
        <li>Rundstykke 2: ost og skinke - 49 kr</li>
        <li>Rundstykke 3: eggerøre / avocado - 49 kr</li>
        <li>Focaccia m/røkt laks, ricotta, ruccolla - 139 kr</li>
        <li>Focaccia m/ost & skinke, aioli, agurk, paprika - 95 kr</li>
        <li>Focaccia Spekesinke m/trøffelmajones, tomat, ruccolla, syltet løk & agurk - 120 kr</li>
        <li>Focaccia m/mozzarella, tomat, pesto, ruccolla (vegetar) - 120 kr</li>
        <li>Focaccia m/tunafisk, koktegg, majonese, tomat, syltetløk - 129 kr</li>
        <li>GLUTEN FRI FOCCACIA +10Kr - 10 kr</li>
        <li>Baguette 1: Ost og skinke - 69 kr</li>
        <li>Snitter 1: Skinke & Ost - 39 kr</li>
        <li>Snitter 2: Eggerøre og røkelaks - 41 kr</li>
        <li>Snitter 3: Roastbeef og remulade - 41 kr</li>
        <li>Fingermat tallerken (4 utvalgte rekker: avokado, laks, mozzarella) - 149 kr</li>
        <li>Wrap konferanse - 145 kr</li>
        <li>Kylling wrap m/bacon - tallerken - 159 kr</li>
        <li>Biffsuppe - 175 kr</li>
        <li>Biff stroganoff m/potetmos og salat - 220 kr</li>
        <li>Minestronesuppe - 159 kr</li>
        <li>Tomatsuppe m/kjøttboller - 159 kr</li>
        <li>Tomatsuppe - 149 kr</li>
        <li>Focaccia ost/skinke + Aioli - 95 kr</li>
        <li>Scampi pasta - 185 kr</li>
        <li>Scampi sandwich - 185 kr</li>
        <li>Kylling salat m/focaccia - 185 kr</li>
        <li>Kyllingsandwich - 169 kr</li>
        <li>Avokado salat - 179 kr</li>
        <li>Hjemmelagde Lasagne m/salat/focaccia - 195 kr</li>
        <li>Hjemmelagde BBQ burger m/bacon frittes - 195 kr</li>
        <li>Wienerpølse & brød - 30 kr</li>
        <li>Skagensandwich - 155 kr</li>
        <li>Hjemmelagde Pasta Bolognese m/focaccia - 169 kr</li>
        <li>Hjemmelagde karbonade med speilegg - 159 kr</li>
        <li>Avokado toast med speilegg (vegetar) - 139 kr</li>
        <li>Tapas alternativ 1 - 310 kr</li>
        <li>Tapas alternativ 2 - 370 kr</li>
        <li>Tapas alternativ 3 - 420 kr</li>
        <li>Koldtbord alternativ 1 - 275 kr</li>
        <li>Koldtbord alternativ 2 - 299 kr</li>
        <li>Koldtbord alternativ 3 - 359 kr</li>
        <li>Juletallerken - 295 kr</li>
        <li>Julebuffé (ny pris) - 395 kr</li>
        <li>TILLEGG pinnekjøtt + kålrotstappe - 189 kr</li>
        <li>Riskrem / karamellpudding - 90 kr</li>
        <li>Burger med coleslaw (150g) - 165 kr</li>
        <li>Burger med coleslaw (180g) - 185 kr</li>
        <li>Pulled pork burger m/coleslaw - 175 kr</li>
      </ul>
      <p class="validity">Gyldig fra 01.09.24</p>
    </div>

    <div class="section">
      <h1>Koldtbord</h1>
      <div v-for="koldbord in koldbordOptions" :key="koldbord.name">
        <h2>{{ koldbord.name }} - Pris: {{ koldbord.price }}</h2>
        <ul class="menu-items">
          <li v-for="item in koldbord.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h1>Tapas</h1>
      <div v-for="tapas in tapasOptions" :key="tapas.name">
        <h2>{{ tapas.name }} - Pris: {{ tapas.price }}</h2>
        <ul class="menu-items">
          <li v-for="item in tapas.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    
    <!-- This will always be at the bottom of the webpage -->
    <div class="section bunnTekst">
      <hr />
      <h3>Åpningstider</h3>
      <h4>Man - Lør 11-17</h4>
      <button class="copyright-button">© Dany's Cafe AS</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      koldbordOptions: [
        {
          name: 'Koldbord 1',
          price: '275,-',
          items: [
            'Karbonade m/løk',
            'Kyllingklubber med/buffalosaus og sesam',
            'Eggerøre',
            'Marinert aromasopp i balsamico',
            'Røyket laks',
            'Roastbiff m/remulade',
            'Pasta Salat',
            'Potetsalat',
            'Blandet salat m/dressing',
            'Foccacia og Brød & Smør'
          ]
        },
        {
          name: 'Koldbord 2',
          price: '299,-',
          items: [
            'Karbonade m/løk',
            'Kyllingklubber med/buffalosaus og sesam',
            'Eggerøre',
            'Marinert aromasopp i balsamico',
            'Bakt brokkoli',
            'Røyket laks',
            'Roastbiff m/remulade',
            'Pasta Salat',
            'Potetsalat',
            'Blandet salat m/dressing',
            'Spekemat',
            'Foccacia og Brød & Smør'
          ]
        },
        {
          name: 'Koldbord 3',
          price: '359,-',
          items: [
            'Karbonade m/løk',
            'Kyllingklubber med/buffalosaus og sesam',
            'Eggerøre',
            'Marinert aromasopp i balsamico',
            'Pesto bakt laks',
            'Chili og hvitløksstekt scampi',
            'Bakt brokkoli',
            'Røyket laks',
            'Roastbiff m/remulade',
            'Reker m/majones',
            'Pasta Salat',
            'Waldorfsalat',
            'Potetsalat',
            'Blandet salat m/dressing',
            'Spekemat',
            'Foccacia og Brød & Smør'
          ]
        }
      ],
      tapasOptions: [
        {
          name: 'Tapas 1',
          price: '310,-',
          items: [
            'Kjøtboller i hjemmelaget tomatsaus',
            'Chili og hvitløkmarinert kylling',
            'Lasagne',
            'Bakte svine nakkestykker m/fløtesaus',
            'Ovnsbakte poteter m/urter',
            'Tortillalefse med laks',
            'Tomat og mozzarella',
            'Blandet salat',
            'Foccacia brød',
            'Crostini m/spekeskinke og trøffelmajones',
            'Aioli',
            'Pesto'
          ]
        },
        {
          name: 'Tapas 2',
          price: '370,-',
          items: [
            'Kjøtboller i hjemmelaget tomatsaus',
            'Chili og hvitløkmarinert kylling',
            'Lasagne',
            'Bakt Ørret m/urter crumble',
            'Marinert scampi',
            'Bakte svine nakkestykker m/fløtesaus',
            'Chorizo og cantaloupmelon',
            'Tomat og mozzarella',
            'Blandet salat',
            'Foccacia brød',
            'Crostini m/spekeskinke og trøffelmajones',
            'Aioli',
            'Pesto'
          ]
        },
        {
          name: 'Tapas 3',
          price: '420,-',
          items: [
            'Kjøtboller i hjemmelaget tomatsaus',
            'Chili og hvitløkmarinert kylling',
            'Lasagne',
            'Bakt Ørret m/urter crumble',
            'Marinert storfefilet med wasabidipp',
            'Marinert scampi',
            'Bakte svine nakkestykker m/fløtesaus',
            'Chorizo og cantaloupmelon',
            'Asparges og Parmesanost i spekeskinke',
            'Tomat og mozzarella',
            'Blandet salat',
            'Foccacia brød',
            'Crostini m/spekeskinke og trøffelmajones',
            'Aioli',
            'Pesto'
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.catering {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: #E6E6E6;
  font-family: 'Georgia', serif;
}

.section {
  margin-bottom: 40px;
}

h1 {
  color: #F4A100;
  font-size: 36px;
  text-align: center;
  margin-bottom: 10px;
}

.sub-heading {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #FFFFFF;
}

.menu-items {
  list-style-type: none;
  padding: 0;
  font-size: 22px;
  text-align: left;
}

.menu-items li {
  margin-bottom: 12px;
  color: #FFA500;
}

.menu-items li span {
  color: #D3D3D3;
  font-size: 18px;
}

.validity {
  font-size: 18px;
  text-align: center;
  color: #FFF;
  margin-top: 20px;
}

h2 {
  color: #F4A100;
  font-size: 28px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
  list-style-type: none;
}

.bunnTekst {
  margin-top: auto;
  text-align: center;
  color: #FFA500; /* Gold-orange color */
}

.copyright-button {
  background-color: transparent;
  border: none;
  color: #FFA500; /* Gold-orange color */
  cursor: default;
  font-size: 14px;
  margin-top: 10px;
}

hr {
  border: 1px solid #FFA500; /* Matching horizontal line */
}

ul li {
  color: #FFA500;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>