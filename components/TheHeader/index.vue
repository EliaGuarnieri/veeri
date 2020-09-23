<template>
  <header>
    <div class="navbar" :class="{ open: isSidebar }">
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
    </div>

    <Sidebar v-if="isMobile" />
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import AppLinks from './AppLinks'
import Sidebar from './Sidebar'

export default {
  components: { AppLinks, Sidebar, Logo },
  data() {
    return {
      windowSize: null,
    }
  },
  computed: {
    isSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    },
    isMobile() {
      return this.windowSize < this.variables.breakmedium
    },
    variables() {
      return this.$store.state.variables.styles
    },
  },
  watch: {
    $route() {
      if (
        process.client &&
        this.isSidebar &&
        window.innerWidth < this.variables.breakmedium
      ) {
        this.$store.dispatch('nav/toggleSidebar')
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.windowSize = window.innerWidth
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.navbar {
  display: grid;
  position: relative;
  width: 100%;
  grid-template: $header-size / auto 1fr;
  align-items: center;
  z-index: 100000;
  padding: 0 $header-padding;

  &:nth-child {
    justify-self: end !important;
  }

  @include for-size(medium, from) {
    padding: 0 64px;
  }
}

.app-links {
  display: none;
  justify-self: end;

  @include for-size(medium, from) {
    display: block;
  }
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: $blu;
}

.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 26px;
  width: 35px;
  cursor: pointer;

  @include for-size(medium, from) {
    display: none;
  }
}
</style>
