<template>
  <ul class="nav-list">
    <li class="nav-item"><nuxt-link to="/servizi">servizi</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/by-veeri">by veeri</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/about">about</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/contatti">contatti</nuxt-link></li>
  </ul>
</template>

<style lang="scss" scoped>
.nav-list {
  display: block;

  @include for-size(medium, from) {
    display: flex;
    a {
      margin: 0 10px;
    }
  }
}
.nav-item {
  display: block;
  font-size: 2rem;
  padding-bottom: 16px;
}

.nav-item a {
  display: block;
  font-family: $font-black;
  color: $blu;
}

.nav-item a:hover,
.nav-item a:active {
  color: darken($blu, 20%);
}
</style>
