<template>
  <header>
    <div class="brand-name">
      <nuxt-link to="/"><Logo /></nuxt-link>
    </div>

    <div
      class="drawer-toggle"
      role="button"
      @click="$store.dispatch('nav/toggleSidebar')"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="app-links">
      <app-links></app-links>
    </div>

    <Sidebar />
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import AppLinks from './AppLinks'
import Sidebar from './Sidebar'

export default {
  components: { AppLinks, Sidebar, Logo },
  computed: {
    isSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    },
  },
  watch: {
    $route() {
      if (process.client && this.isSidebar && window.innerWidth < 768) {
        this.$store.dispatch('nav/toggleSidebar')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  background-color: hsl(255, 100%, 100%);
}

.app-links {
  justify-self: end;
}

.brand-name {
  margin: 0 10px;
  font-size: 1.3rem;
}

.brand-name a {
  text-decoration: none;
  color: white;
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
}

.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  padding-right: 16px;
  cursor: pointer;
}

@media (max-width: 767px) {
  header {
    padding: 0 16px;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
}

@media (min-width: 768px) {
  header {
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
.brand-name a {
  @include for-size(small) {
    color: yellow;
  }
}
</style>
