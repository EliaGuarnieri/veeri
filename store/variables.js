import Styles from '~/assets/scss/utilities/_variables.scss'

export const state = () => ({
  styles: { ...Styles },
})

/**
 * Par accedere nei component
 *
 * computed: {
    variables() {
      return this.$store.state.variables.styles
    },
  },

  quindi:

  colore: this.variables.blu
 */
