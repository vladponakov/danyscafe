<template>
    <div class="menu">
      <div class="content">
        <h1>Our Menu</h1>
        <p>Explore our selection of freshly brewed coffee, delicious pastries, and hearty meals.</p>
        <ul class="menu-list">
          <li>Espresso - $2.50</li>
          <li>Cappuccino - $3.00</li>
          <li>Latte - $3.50</li>
          <li>Mocha - $3.75</li>
          <li>Blueberry Muffin - $2.75</li>
          <li>Ham & Cheese Sandwich - $5.50</li>
          <li>Caesar Salad - $6.00</li>
        </ul>
      </div>
      <div class="bunnTekst">
        <button class="copyright-button">© 2024 Dany's Cafe Mat & Bar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu'
  }
  </script>
  
  <style scoped>
  .menu {
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
  
  .menu-list {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
  }
  
  .menu-list li {
    margin: 10px 0;
    color: #FFA500; /* Gold orange color */
    font-size: 18px;
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
    .menu {
      align-items: center;
    }
  }
  </style>