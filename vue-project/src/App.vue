<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Dany's Cafe Mat & Bar" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/cateringmeny">Cateringmeny</RouterLink>
        <RouterLink to="/kontakt">Kontakt oss</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Make the logo and nav stack vertically */
  align-items: center;
  background-color: transparent; /* Transparent background */
  color: #E6E6E6;
  font-family: 'Georgia', serif;
}

.logo {
  display: block;
  margin-bottom: 2rem; /* Add space between logo and nav */
  width: 250px;  /* Larger logo size */
  height: 250px; /* Adjust to match width */
}

.wrapper {
  text-align: center;
  width: 100%; /* Full width for wrapper */
}

nav {
  display: flex;
  flex-direction: column; /* Stack the navigation links vertically */
  align-items: center;
  margin-top: 1rem;
}

nav a {
  display: block;
  padding: 0.5rem 1rem;
  color: #FFA500; /* Gold-orange color for the links */
  text-decoration: none;
  font-size: 20px; /* Adjust font size */
  margin-bottom: 0.5rem; /* Add spacing between each link */
}

nav a:hover {
  color: #F4A100; /* Darker color on hover */
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #FFFFFF; /* Active link is white */
}

.bunnTekst {
  text-align: center;
  color: #FFA500;
}

@media (min-width: 1024px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-bottom: 2rem; /* More spacing for larger screens */
    width: 300px; /* Larger logo */
    height: 300px;
  }

  nav {
    margin-top: 2rem;
  }

  nav a {
    font-size: 22px; /* Larger font size for bigger screens */
  }
}
</style>