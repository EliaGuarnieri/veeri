<template>
  <div class="app-container">
    <TheHeader />

    <main>
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </main>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
export default {
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss" scoped>
main {
  margin-top: $header-size;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
