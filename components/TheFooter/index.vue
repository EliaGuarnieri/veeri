<template>
  <Container :bg-color="variables.blu"> </Container>
</template>

<script>
import Container from '@/components/Container'
export default {
  components: {
    Container,
  },
  computed: {
    variables() {
      return this.$store.state.variables.styles
    },
  },
}
</script>

<style lang="scss" scoped></style>
