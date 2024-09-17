<template>
  <div class="menu">
    <div class="section">
      <h1>Lunsj Meny</h1>
      <p class="sub-heading">Alt er hjemmelaget!</p>
      <ul class="menu-items">
        <li>BBQ burger m/bacon frittes - 199,- <span>(hvetemel, melk, løk, egg, soya)</span></li>
        <li>Kylling salat m/focaccia - 195,- <span>(hvetemel, melk)</span></li>
        <li>Lasagne m/salat/focaccia - 210,- <span>(hvetemel, melk, løk, selleri, egg, hvitløk)</span></li>
        <li>Kylling wrap m/bacon - 169,- <span>(hvetemel, egg)</span></li>
        <li>Pasta Bolognese m/focaccia - 175,- <span>(hvetemel, løk, hvitløk, selleri, egg)</span></li>
        <li>Karbonade med speilegg - 169,- <span>(hvetemel, egg)</span></li>
      </ul>
      <p class="validity">Gyldig fra 01.09.24</p>
    </div>

    <div class="section">
      <h1>Hjemmelaget Focaccia</h1>
      <p class="sub-heading">Glutenfri focaccia + 10,-</p>
      <ul class="menu-items">
        <li>Spekeskinke m/trøffelmajones, tomat, ruccolla, syltet løk & agurk - 129,- <span>(hvetemel, egg, løk)</span></li>
        <li>Focaccia m/mozzarella, tomat, pesto, ruccolla (vegetar) - 129,- <span>(hvetemel, melk, nøtter, hvitløk)</span></li>
        <li>Focaccia m/røkt laks, ricotta, ruccolla - 139,- <span>(hvetemel, fisk, melk, sitron)</span></li>
        <li>Focaccia m/ost & skinke, aioli, agurk, paprika - 105,- <span>(hvetemel, melk, egg, hvitløk)</span></li>
      </ul>

      <h1>Hjemmelaget EmPanadas</h1>
      <p class="sub-heading">Alle EmPanadas er glutenfri</p>
      <ul class="menu-items">
        <li>EmPanadas m/kylling & Guasacaca Saus - 159,- <span>(hvitløk, løk)</span></li>
        <li>EmPanadas m/oksekjøtt & Guasacaca Saus - 159,- <span>(hvitløk, løk)</span></li>
        <li>EmPanadas m/ost & Guasacaca Saus - 159,- <span>(hvitløk, løk, melk)</span></li>
        <li>EmPanadas Vegansk & Guasacaca Saus - 159,- <span>(hvitløk, løk)</span></li>
      </ul>
      <p class="validity">Gyldig fra 01.09.24</p>
    </div>

    <div class="section">
      <h1>Påsmurt</h1>
      <p class="sub-heading">Glutenfri focaccia / brød + 10,-</p>
      <ul class="menu-items">
        <li>Skagensandwich - 155,- <span>(hvetemel, melk, skalldyr, egg)</span></li>
        <li>Avokado tost med speilegg (vegetar) - 159,- <span>(hvetemel, melk, egg)</span></li>
        <li>Baguett ost&skinke - 75,- <span>(hvetemel, melk)</span></li>
        <li>Rundstykke ost&skinke - 49,- <span>(hvetemel, melk)</span></li>
      </ul>

      <h1>Barne Meny</h1>
      <ul class="menu-items">
        <li>Pommes frites & Mozzarella sticks - 119,- <span>(hvetemel, melk)</span></li>
        <li>Pasta bolognese - 110,- <span>(hvetemel, løk, hvitløk, selleri)</span></li>
        <li>Pommes frites - Liten 60,- / Stor 99,-</li>
      </ul>
      <p class="validity">Meny «Påsmurt» Gyldig fra 01.09.24</p>
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
  name: 'Menu',
}
</script>

<style scoped>
.menu {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh; /* Ensures the menu takes up full screen height */
  color: #E6E6E6; /* Light text */
  font-family: 'Georgia', serif; /* Classic serif font */
}

.section {
  margin-bottom: 40px;
}

h1 {
  color: #F4A100; /* Gold color for headers */
  font-size: 36px; /* Larger header size similar to the image */
  text-align: center;
  margin-bottom: 10px;
}

.sub-heading {
  font-size: 24px; /* Subtitle size */
  text-align: center;
  margin-bottom: 20px;
  color: #FFFFFF;
}

.menu-items {
  list-style-type: none;
  padding: 0;
  font-size: 22px; /* Larger font size to match the image */
  text-align: left;
}

.menu-items li {
  margin-bottom: 12px;
  color: #FFA500; /* Gold-orange color for menu items */
}

.menu-items li span {
  color: #D3D3D3; /* Light gray for allergens and ingredients */
  font-size: 18px;
}

.validity {
  font-size: 18px;
  text-align: center;
  color: #FFF;
  margin-top: 20px;
}

.copyright-button {
  background-color: transparent;
  border: none;
  color: #FFA500; /* Gold-orange color */
  cursor: default;
  font-size: 14px;
  margin-top: 10px;
}

.bunnTekst {
  text-align: center;
  color: #FFA500; /* Gold-orange color */
}

hr {
  border: 1px solid #FFA500; /* Matching horizontal line */
}
</style>