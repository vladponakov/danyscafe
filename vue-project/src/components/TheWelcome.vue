<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <!-- Menu Section -->
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Meny</template>
    <p class="welcome-text">
      Dany’s Cafe tilbyr den perfekte lunsj eller middag for deg som ønsker å nyte deilig hjemmelaget mat midt i hjertet av Notoddens kulturhus, Bok & Blueshuset.
    </p>
  </WelcomeItem>

  <!-- Catering Section -->
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Cateringmeny fra Dany’s Cafe</template>
    <div class="content welcome-text">
      <p>
        Planlegger du et møte, en konferanse eller en spesiell anledning? La <strong>Dany's Cafe</strong> ta seg av maten! Vi tilbyr en utsøkt cateringmeny som passer perfekt for enhver anledning, med et minimumsbestilling på 10 personer.
      </p>
      
      <h3 class="sub-heading">Vår cateringmeny inkluderer:</h3>
      <ul class="welcome-list">
        <li>Deilig hjemmelaget mat laget med de beste råvarene</li>
        <li>Variert utvalg av retter som passer alle smaker</li>
        <li>Mulighet for spesialtilpassede menyer etter dine behov</li>
      </ul>
      
      <h3 class="sub-heading">Hvorfor velge oss?</h3>
      <ul class="welcome-list">
        <li>Erfaring og lidenskap for matlaging</li>
        <li>Profesjonell og pålitelig service</li>
        <li>Levering direkte til ditt arrangement</li>
      </ul>
      
      <p>Kontakt oss i dag for å bestille eller for mer informasjon.</p>
    </div>
  </WelcomeItem>

  <!-- Local Rental Section -->
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Lokal utleie</template>
    <a href="https://www.bokogblueshuset.no/informasjon/utleie" target="_blank" class="welcome-link">Lokal utleie - "Bok & Blueshuset"</a>
  </WelcomeItem>

  <!-- Contact Section -->
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Kontakt</template>
    <p class="welcome-text">danyscafeas@gmail.com</p>
  </WelcomeItem>

  <!-- Opening Hours Section -->
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Åpningstider</template>
    <h4 class="welcome-text">Man - Lør 11-17</h4>
  </WelcomeItem>
</template>