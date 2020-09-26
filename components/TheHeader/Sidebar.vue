<template>
  <transition name="slide-side">
    <div v-if="isSidebar" class="sidenav">
      <app-links></app-links>
      <hr />
      <div class="mail">
        <span class="icona"></span>
        <p class="testo">veeristudio@gmail.com</p>
      </div>
    </div>
  </transition>
</template>

<script>
import AppLinks from './AppLinks'

export default {
  components: { AppLinks },

  computed: {
    isSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    },
  },
}
</script>

<style lang="scss" scoped>
.sidenav {
  height: 100%;
  width: 100%;
  background-color: $rosa;
  z-index: 10000;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: $mobile-padding;
  padding-top: 80px;
}

hr {
  margin: 0;
  background-color: $blu;
  border-color: $blu;
  margin-bottom: $mobile-padding;
}

.mail {
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 2rem;

  .icona {
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    background-color: $blu;
  }

  .testo {
    color: $blu;
    margin: 0;
  }
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
