<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Meny</template>
    Dany’s Cafe tilbyr den perfekte lunsj eller middag for deg som ønsker å nyte deilig hjemmelaget mat midt i hjertet av Notoddens kulturhus, Bok & Blueshuset.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Cateringmeny fra Dany’s Cafe</template>
    <div class="content">
      <p>Planlegger du et møte, en konferanse eller en spesiell anledning? La <strong>Dany's Cafe</strong> ta seg av maten! Vi tilbyr en utsøkt cateringmeny som passer perfekt for enhver anledning, med et minimumsbestilling på 10 personer.</p>
      
      <h3>Vår cateringmeny inkluderer:</h3>
      <ul>
        <li>Deilig hjemmelaget mat laget med de beste råvarene</li>
        <li>Variert utvalg av retter som passer alle smaker</li>
        <li>Mulighet for spesialtilpassede menyer etter dine behov</li>
      </ul>
      
      <h3>Hvorfor velge oss?</h3>
      <ul>
        <li>Erfaring og lidenskap for matlaging</li>
        <li>Profesjonell og pålitelig service</li>
        <li>Levering direkte til ditt arrangement</li>
      </ul>
      
      <p>Kontakt oss i dag for å bestille eller for mer informasjon.</p>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Lokal utleie</template>
    <a href="https://www.bokogblueshuset.no/informasjon/utleie" target="_blank">Lokal utleie - "Bok & Blueshuset"</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Kontakt</template>
    danyscafeas@gmail.com
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Åpningstider</template>
    <h4>Man - Lør 11-17</h4>
  </WelcomeItem>
</template>
