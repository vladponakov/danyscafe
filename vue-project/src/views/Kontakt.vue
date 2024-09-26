<template>
  <div class="kontakt">
    <div class="section">
      <h1>Kontakt oss</h1>
      <p class="sub-heading">Kontakt oss for reservasjoner eller spørsmål.</p>
      <ul class="contact-info">
        <li>Email: <span>danyscafeas@gmail.com</span></li>
      </ul>
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
  name: 'Kontakt'
}
</script>

<style scoped>
.kontakt {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: #E6E6E6; /* Light text color */
  font-family: 'Georgia', serif; /* Classic serif font */
}

.section {
  margin-bottom: 40px;
}

h1 {
  color: #F4A100; /* Gold color for header */
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

.contact-info {
  list-style-type: none;
  padding: 0;
  font-size: 22px; /* Matching menu item font size */
  text-align: center;
  color: #FFA500; /* Gold-orange color */
}

.contact-info li span {
  color: #D3D3D3; /* Light gray for email and phone number */
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

.bunnTekst {
  text-align: center;
  color: #FFA500; /* Gold-orange color */
}

hr {
  border: 1px solid #FFA500; /* Matching horizontal line */
}
</style>