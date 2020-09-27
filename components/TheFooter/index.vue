<template>
  <Container :bg-color="variables.blu">
    <ContactForm />
  </Container>
</template>

<script>
import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'

export default {
  components: {
    Container,
    ContactForm,
  },
  computed: {
    variables() {
      return this.$store.state.variables.styles
    },
  },
}
</script>

<style lang="scss" scoped></style>
