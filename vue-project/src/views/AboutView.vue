<template>
  <div class="about">
    <div class="section">
      <h1>Dany's Cafe AS</h1>
      <h2 class="sub-heading">Mat & Bar</h2>
      <h2 class="sub-heading">Velkommen</h2>
      <p class="about-text">
        <span>Dany's Cafe Mat & Bar</span> er en del av Bok & Blueshuset - Notoddens kultursenter. Vårt primær fokus er å levere mat og drikke i ypperste kvalitet til våre gjester, i både store og små kvanta. Samt tilbyr vi oppdekking til møter, konferanser, konserter, bryllup, dåp, konfirmasjoner o.l. I tillegg tilbyr vi Catering, ellers går vår cafedrift som normalt på dagtid.
      </p>
      <h2 class="sub-heading">Alle kunder har sitt behov</h2>
      <p class="about-text">
        Vi kan levere det meste etter kunders behov. Ta kontakt med oss på e-post og forklær ditt ønske og behov. De fleste vil leie ut lokale eller livescene på Bok og Blues huset, ta kontakt direkte med kultursenter:
      </p>
      <a href="https://www.bokogblueshuset.no/informasjon/utleie" target="_blank" class="link-text">Lokal utleie - "Bok & Blueshuset"</a>
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

<style scoped>
.about {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: #E6E6E6; /* Light text */
  font-family: 'Georgia', serif; /* Classic serif font */
}

.section {
  margin-bottom: 40px;
}

h1 {
  color: #F4A100; /* Gold color for headers */
  font-size: 36px; /* Large header */
  text-align: center;
  margin-bottom: 10px;
}

.sub-heading {
  font-size: 24px; /* Subtitle size */
  text-align: center;
  margin-bottom: 20px;
  color: #FFFFFF; /* Light text */
}

.about-text {
  font-size: 22px; /* Font size similar to menu text */
  color: #FFA500; /* Gold-orange color */
  text-align: center;
  margin-bottom: 20px;
}

.link-text {
  color: #FFA500; /* Gold-orange for link */
  font-size: 18px;
  text-decoration: none;
}

.link-text:hover {
  text-decoration: underline;
}

.bunnTekst {
  text-align: center;
  color: #FFA500; /* Gold-orange color */
}

hr {
  border: 1px solid #FFA500; /* Matching horizontal line */
}

h3, h4 {
  color: #F4A100; /* Gold color */
}

h4 {
  font-size: 18px;
}

.copyright-button {
  background-color: transparent;
  border: none;
  color: #FFA500; /* Gold-orange color */
  cursor: default;
  font-size: 14px;
  margin-top: 10px;
}
</style>