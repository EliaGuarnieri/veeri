<template>
  <div class="app-container">
    <TheHeader />

    <main>
      <Nuxt />
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
</style>
