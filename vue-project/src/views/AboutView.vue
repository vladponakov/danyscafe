<template>
  <div class="about">
    <div class="content">
      <h1>Dany's Cafe AS</h1>
      <h2>Mat & Bar</h2>
      <h2>Velkommen</h2>
      <p>
        <span>Dany's Cafe Mat & Bar</span> er en del av Bok & Blueshuset - Notoddens kultursenter. Vårt primær fokus er å levere mat og drikke i ypperste kvalitet til våre gjester, i både store og små kvanta. Samt tilbyr vi oppdekking til møter, konferanser, konserter, bryllup, dåp, konfirmasjoner o.l. I tillegg tilbyr vi Catering, ellers går vår cafedrift som normalt på dagtid.
      </p>
      <h2>Alle kunder har sitt behov</h2>
      <p>
        Vi kan levere det meste etter kunders behov. Ta kontakt med oss på e-post og forklær ditt ønske og behov. De fleste vil leie ut lokale eller livescene på Bok og Blues huset, ta kontakt direkte med kultursenter:
      </p>
      <a href="https://www.bokogblueshuset.no/informasjon/utleie" target="_blank">Lokal utleie - "Bok & Blueshuset"</a>
    </div>
    <!-- This will always be at the bottom of the webpage -->
    <div class="bunnTekst">
      <hr>
      <h3>Åpningstider</h3>
      <h4>Man - Lør 11-17</h4>
      <button class="copyright-button">© Dany's Cafe AS</button>
    </div>
  </div>
</template>

<style>
.about {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.content {
  text-align: center;
  margin: auto;
}

.bunnTekst {
  margin-top: auto;
  text-align: center;
  color: #FFA500; /* Gold orange color */
}

.copyright-button {
  background-color: transparent;
  border: none;
  color: #FFA500; /* Gold orange color */
  cursor: default;
  font-size: 14px;
  margin-top: 10px;
}

@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>