<template>
  <div :style="{ 'background-color': bgColor }" class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#fff',
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: $mobile-padding;

  @include for-size(medium, from) {
    padding: $desktop-padding;
  }
}
</style>
