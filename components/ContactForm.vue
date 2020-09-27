<template>
  <form
    name="contattaci"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <label for="form-nome">Nome</label>
    <input type="text" name="form-nome" value="nome" />

    <label for="form-email">E-mail</label>
    <input type="email" name="form-email" value="email" />

    <label for="form-messaggio">messaggio</label>
    <input type="text" name="form-messaggio" value="messaggio" />

    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You',
    }
  },
  methods: {
    updatePanelist(ev) {
      this.currentPanelist = ev.target.value
    },
  },
}
</script>

<style lang="scss" scoped></style>
