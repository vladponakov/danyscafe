<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  color: #E6E6E6; /* Light text color */
  font-family: 'Georgia', serif; /* Classic serif font, same as Menu.vue */
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 50px; /* Increased width for better visibility */
  height: 50px; /* Increased height */
  color: #FFA500; /* Gold-orange color for the icon */
}

h3 {
  font-size: 24px; /* Increase the size to match Menu.vue heading */
  font-weight: normal; /* Regular weight to match the Menu.vue style */
  margin-bottom: 0.4rem;
  color: #f1f0ee; /* Gold color for the heading, same as in Menu.vue */
}

.details {
  font-size: 22px; /* Matching the body text size from Menu.vue */
  color: #FFA500; /* Gold-orange color for text */
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    background: transparent; /* No background, similar to Menu.vue */
    border: none; /* Remove borders around the icon */
    border-radius: 0; /* Remove border radius */
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid #D3D3D3; /* Light gray border */
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid #D3D3D3; /* Light gray border */
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>